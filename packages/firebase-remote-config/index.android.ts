import { IRemoteConfig, IConfigSettings, IConfigValue, ConfigDefaults } from './common';
import { firebase, FirebaseApp, FirebaseError, serialize } from '@nativescript/firebase-core';
import lazy from '@nativescript/core/utils/lazy';
import { Utils } from '@nativescript/core';


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

const SourceStatic = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.VALUE_SOURCE_STATIC);
const SourceDefault = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.VALUE_SOURCE_DEFAULT);
const SourceRemote = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.VALUE_SOURCE_REMOTE);

const FetchStatusSuccess = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.LAST_FETCH_STATUS_SUCCESS);
const FetchStatusNoFetchYet = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.LAST_FETCH_STATUS_NO_FETCH_YET);
const FetchStatusFailure = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.LAST_FETCH_STATUS_FAILURE);
const FetchStatusThrottled = lazy(() => com.google.firebase.remoteconfig.FirebaseRemoteConfig.LAST_FETCH_STATUS_THROTTLED);

const NSRemoteConfig = lazy(() => org.nativescript.firebase.remote_config.FirebaseRemoteConfig);

export class ConfigValue implements IConfigValue {
	#native: com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
	static fromNative(value: com.google.firebase.remoteconfig.FirebaseRemoteConfigValue) {
		if (value instanceof com.google.firebase.remoteconfig.FirebaseRemoteConfigValue) {
			const val = new ConfigValue();
			val.#native = value;
			return val;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	asBoolean(): boolean {
		return this.native.asBoolean();
	}
	asNumber(): number {
		const value = this.native.asString();
		return Number(value);
	}
	asString(): string {
		return this.native.asString();
	}

	getSource(): 'default' | 'static' | 'remote' {
		switch (this.native.getSource()) {
			case SourceDefault():
				return 'default';
			case SourceStatic():
				return 'static';
			case SourceRemote():
				return 'remote';
		}
	}
}

export class ConfigSettings implements IConfigSettings {
	#native: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
	#builder: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
	constructor() {
		this.#builder = new com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder();
	}
	static fromNative(config: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings) {
		if (config instanceof com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings) {
			const val = new ConfigSettings();
			val.#builder = null;
			val.#native = config;
			return val;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	get fetchTimeMillis(): number {
		if (this.#builder) {
			return this.#builder.getFetchTimeoutInSeconds() ?? 0 * 1000;
		}
		return this.native.getFetchTimeoutInSeconds?.() ?? 0 * 1000;
	}

	set fetchTimeMillis(value) {
		if (!this.#builder) {
			this.#builder = this.native.toBuilder();
		}

		this.#builder.setFetchTimeoutInSeconds(value / 1000);
	}

	get minimumFetchIntervalMillis(): number {
		if (this.#builder) {
			return this.#builder.getMinimumFetchIntervalInSeconds() * 1000;
		}
		return this.native.getMinimumFetchIntervalInSeconds() * 1000;
	}

	set minimumFetchIntervalMillis(value) {
		if (!this.#builder) {
			this.#builder = this.native.toBuilder();
		}
		this.#builder.setMinimumFetchIntervalInSeconds(value / 1000);
	}
}
export class RemoteConfig implements IRemoteConfig {
	#native: com.google.firebase.remoteconfig.FirebaseRemoteConfig;
	#app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = com.google.firebase.remoteconfig.FirebaseRemoteConfig.getInstance(app.native);
		} else {
			if(defaultRemoteConfig){
				return defaultRemoteConfig;
			}
			defaultRemoteConfig = this;
			this.#native = com.google.firebase.remoteconfig.FirebaseRemoteConfig.getInstance();
		}
	}

	get native() {
		return this.#native;
	}
	get android() {
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
		return this.native.getInfo().getFetchTimeMillis?.() * 1000;
	}
	get lastFetchStatus(): 'success' | 'failure' | 'no_fetch_yet' | 'throttled' {
		switch (this.native.getInfo().getLastFetchStatus()) {
			case FetchStatusFailure():
				return 'failure';
			case FetchStatusSuccess():
				return 'success';
			case FetchStatusNoFetchYet():
				return 'no_fetch_yet';
			case FetchStatusThrottled():
				return 'throttled';
		}
	}

	get settings() {
		return ConfigSettings.fromNative(this.native.getInfo().getConfigSettings());
	}

	set settings(value: ConfigSettings) {
		this.native.setConfigSettingsAsync(value.native);
	}

	activate(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			NSRemoteConfig().activate(
				this.native,
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(done) {
						resolve(done as any);
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
	ensureInitialized(): Promise<void> {
		return new Promise((resolve, reject) => {
			NSRemoteConfig().ensureInitialized(
				this.native,
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
	fetch(expirationDurationSeconds?: number): Promise<void> {
		let time = 43200000 / 1000;
		return new Promise((resolve, reject) => {
			if (typeof expirationDurationSeconds === 'number') {
				time = expirationDurationSeconds;
			}

			NSRemoteConfig().fetch(
				this.native,
				time,
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
	fetchAndActivate(): Promise<boolean> {
		this.native.fetchAndActivate();
		return new Promise((resolve, reject) => {
			NSRemoteConfig().fetchAndActivate(
				this.native,
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(done) {
						resolve(done as any);
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
	getAll() {
		const nativeAll = this.native.getAll();
		const keys = nativeAll.keySet().toArray();
		const all = {};
		const count = keys.length;
		for (let i = 0; i < count; i++) {
			const key = keys[i];
			all[key] = ConfigValue.fromNative(this.native.getValue(key));
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
		return ConfigValue.fromNative(this.native.getValue(key));
	}

	reset(): Promise<void> {
		return new Promise((resolve, reject) => {
			NSRemoteConfig().reset(
				this.native,
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(params) {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}

	setDefaults(defaults: ConfigDefaults): Promise<void> {
		return new Promise((resolve, reject) => {
			NSRemoteConfig().setDefaults(
				this.native,
				serialize(defaults),
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(params) {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
	setDefaultsFromResource(resourceName: string): Promise<void> {
		return new Promise((resolve, reject) => {
			NSRemoteConfig().setDefaultsFromResource(
				this.native,
				resourceName.replace('res://', ''),
				Utils.android.getApplicationContext(),
				new org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback({
					onSuccess(params) {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
}
