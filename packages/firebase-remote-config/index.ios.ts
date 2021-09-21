import { IRemoteConfig, IConfigSettings, IConfigValue, ConfigDefaults } from './common';
import { firebase, FirebaseApp, FirebaseError, serialize } from '@nativescript/firebase-core';

let defaultRemoteConfig: RemoteConfig;

const fb = firebase();
Object.defineProperty(fb, 'remoteConfig', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultRemoteConfig) {
				defaultRemoteConfig = new RemoteConfig();
			}
			return defaultRemoteConfig;
		}

		return new RemoteConfig(app);
	},
	writable: false,
});

export class ConfigValue implements IConfigValue {
	#native: FIRRemoteConfigValue;
	static fromNative(value: FIRRemoteConfigValue) {
		if (value instanceof FIRRemoteConfigValue) {
			const val = new ConfigValue();
			val.#native = value;
			return val;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	asBoolean(): boolean {
		return this.native.boolValue;
	}
	asNumber(): number {
		return this.native.numberValue;
	}
	asString(): string {
		return this.native.stringValue;
	}

	getSource(): 'default' | 'static' | 'remote' {
		switch (this.native.source) {
			case FIRRemoteConfigSource.Default:
				return 'default';
			case FIRRemoteConfigSource.Static:
				return 'static';
			case FIRRemoteConfigSource.Remote:
				return 'remote';
		}
	}
}

export class ConfigSettings implements IConfigSettings {
	#native: FIRRemoteConfigSettings;
	static fromNative(config: FIRRemoteConfigSettings) {
		if (config instanceof FIRRemoteConfigSettings) {
			const val = new ConfigSettings();
			val.#native = config;
			return val;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	get fetchTimeMillis(): number {
		return this.native.fetchTimeout * 1000;
	}

	set fetchTimeMillis(value) {
		this.native.fetchTimeout = value / 1000;
	}

	get minimumFetchIntervalMillis(): number {
		return this.native.minimumFetchInterval * 1000;
	}

	set minimumFetchIntervalMillis(value) {
		this.native.minimumFetchInterval = value / 1000;
	}
}
export class RemoteConfig implements IRemoteConfig {
	#native: FIRRemoteConfig;
	#app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = FIRRemoteConfig.remoteConfigWithApp(app.native);
		} else {
			if (defaultRemoteConfig) {
				return defaultRemoteConfig;
			}
			defaultRemoteConfig = this;
			this.#native = FIRRemoteConfig.remoteConfig();
		}
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}

	get fetchTimeMillis(): number {
		return this.native.lastFetchTime?.getTime?.();
	}
	get lastFetchStatus(): 'success' | 'failure' | 'no_fetch_yet' | 'throttled' {
		switch (this.native.lastFetchStatus) {
			case FIRRemoteConfigFetchStatus.Failure:
				return 'failure';
			case FIRRemoteConfigFetchStatus.Success:
				return 'success';
			case FIRRemoteConfigFetchStatus.NoFetchYet:
				return 'no_fetch_yet';
			case FIRRemoteConfigFetchStatus.Throttled:
				return 'throttled';
		}
	}

	get settings() {
		return ConfigSettings.fromNative(this.native.configSettings);
	}

	set settings(value: ConfigSettings) {
		this.native.configSettings = value.native;
	}

	activate(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.native.activateWithCompletion((done, error) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					reject(err);
				} else {
					resolve(done);
				}
			});
		});
	}
	ensureInitialized(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.ensureInitializedWithCompletionHandler((error) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}
	fetch(expirationDurationSeconds?: number): Promise<void> {
		return new Promise((resolve, reject) => {
			if (typeof expirationDurationSeconds === 'number') {
				this.native.fetchWithExpirationDurationCompletionHandler(expirationDurationSeconds, (status, error) => {
					if (error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					} else {
						resolve();
					}
				});
			} else {
				this.native.fetchWithCompletionHandler((error) => {
					if (error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					} else {
						resolve();
					}
				});
			}
		});
	}
	fetchAndActivate(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.native.fetchAndActivateWithCompletionHandler((status, error) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					const userInfo = error.userInfo;
					if (userInfo && userInfo.objectForKey('ActivationFailureReason') !== null && userInfo.objectForKey('ActivationFailureReason')?.indexOf?.('already activate') > -1) {
						resolve(true);
					} else {
						reject(err);
					}
				} else {
					if (status === FIRRemoteConfigFetchAndActivateStatus.SuccessFetchedFromRemote) {
						resolve(true);
					} else {
						resolve(false);
					}
				}
			});
		});
	}
	getAll() {
		const ks = NSMutableSet.new<string>();
		ks.addObjectsFromArray(this.native.allKeysFromSource(FIRRemoteConfigSource.Static));
		ks.addObjectsFromArray(this.native.allKeysFromSource(FIRRemoteConfigSource.Default));
		ks.addObjectsFromArray(this.native.allKeysFromSource(FIRRemoteConfigSource.Remote));
		const objects = ks.allObjects;
		const count = objects.count;
		const all = {};
		for (let i = 0; i < count; i++) {
			const key = objects.objectAtIndex(i);
			all[key] = ConfigValue.fromNative(this.native.configValueForKey(key));
		}
		return all;
	}
	getBoolean(key: string): boolean {
		return this.getValue(key)?.asBoolean?.();
	}
	getNumber(key: string): number {
		return this.getValue(key)?.asNumber?.();
	}
	getString(key: string): string {
		return this.getValue(key)?.asString?.();
	}
	getValue(key: string) {
		return ConfigValue.fromNative(this.native.configValueForKey(key));
	}

	reset(): Promise<void> {
		return Promise.resolve();
	}

	setDefaults(defaults: ConfigDefaults): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.setDefaults(serialize(defaults));
			resolve();
		});
	}
	setDefaultsFromResource(resourceName: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (NSBundle.mainBundle.pathForResourceOfType(resourceName, 'plist')) {
				this.native.setDefaultsFromPlistFileName(resourceName);
				resolve();
			} else {
				reject({
					message: 'The specified resource name was not found.',
				});
			}
		});
	}
}
