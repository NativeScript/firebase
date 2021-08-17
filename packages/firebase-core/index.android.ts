import { IFirebaseOptions, FirebaseConfig } from './common';
import { Utils } from '@nativescript/core';
export * from './utils';
export class FirebaseOptions implements IFirebaseOptions {
	#nativeApp: com.google.firebase.FirebaseApp;
	static fromNative(native: com.google.firebase.FirebaseApp) {
		if (native instanceof com.google.firebase.FirebaseApp) {
			const opts = new FirebaseOptions();
			opts.#nativeApp = native;
			return opts;
		}
		return null;
	}

	get native() {
		if (!this.#nativeApp) {
			return null;
		}
		return this.#nativeApp.getOptions();
	}

	#apiKey: string;
	set apiKey(value) {
		this.#apiKey = value;
	}

	get apiKey(): string {
		if (this.#apiKey) {
			return this.#apiKey;
		}
		return this.native?.getApiKey?.();
	}

	#gcmSenderId: string;
	set gcmSenderId(value) {
		this.#gcmSenderId = value;
	}
	get gcmSenderId(): string {
		if (this.#gcmSenderId) {
			return this.#gcmSenderId;
		}
		return this.native?.getGcmSenderId?.();
	}

	#databaseURL: string;
	get databaseURL(): string {
		if (this.#databaseURL) {
			return this.#databaseURL;
		}
		return this.native?.getDatabaseUrl?.();
	}

	#googleAppId: string;
	set googleAppId(value) {
		this.#googleAppId = value;
	}
	get googleAppId(): string {
		if (this.#googleAppId) {
			return this.#googleAppId;
		}
		return this.native?.getApplicationId?.();
	}

	#projectId: string;
	set projectId(value) {
		this.#projectId = value;
	}

	get projectId(): string {
		if (this.#projectId) {
			return this.#projectId;
		}
		return this.native?.getProjectId?.();
	}

	#storageBucket: string;
	set storageBucket(value) {
		this.#storageBucket = value;
	}
	get storageBucket(): string {
		if (this.#storageBucket) {
			return this.#storageBucket;
		}
		return this.native?.getStorageBucket?.();
	}

	#trackingId: string;

	set trackingId(value) {
		this.trackingId = value;
	}
	get trackingId(): string {
		if (this.#trackingId) {
			return this.#trackingId;
		}
		return this.native?.getGaTrackingId?.();
	}
}

export class FirebaseApp {
	#native: com.google.firebase.FirebaseApp;
	#options: FirebaseOptions;

	static fromNative(app: com.google.firebase.FirebaseApp) {
		if (app instanceof FIRApp) {
			const fb = new FirebaseApp();
			fb.#native = app;
			return fb;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}
	get name() {
		return this.native.getName();
	}

	get options() {
		if (!this.#options) {
			return FirebaseOptions.fromNative(this.#native);
		}
	}

	delete() {
		return new Promise<void>((resolve, reject) => {
			this.native.delete();
			resolve();
		});
	}

	get apps() {
		const apps = [];
		const nativeApps = com.google.firebase.FirebaseApp.getApps(Utils.android.getApplicationContext());
		const count = nativeApps.size();
		for (let i = 0; i < count; i++) {
			const nativeApp = nativeApps.get(i);
			const app = new FirebaseApp();
			app.#native = nativeApp;
			apps.push(app);
		}
		return apps;
	}
}

export class Firebase {
	static app(name?: string) {
		if (name) {
			return FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance(name));
		}
		return FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
	}
	static initializeApp(options: FirebaseOptions, configOrName?: FirebaseConfig | string) {
		const nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
		if (options.apiKey) {
			nativeOptions.setApiKey(options.apiKey);
		}

		if (options.gcmSenderId) {
			nativeOptions.setGcmSenderId(options.gcmSenderId);
		}

		if (options.databaseURL) {
			nativeOptions.setDatabaseUrl(options.databaseURL);
		}

		if (options.googleAppId) {
			nativeOptions.setApplicationId(options.googleAppId);
		}

		if (options.projectId) {
			nativeOptions.setProjectId(options.projectId);
		}

		if (options.storageBucket) {
			nativeOptions.setStorageBucket(options.storageBucket);
		}

		if (options.trackingId) {
			nativeOptions.setGaTrackingId(options.trackingId);
		}

		const name = typeof configOrName === 'string' ? configOrName : configOrName?.name;
		let app: com.google.firebase.FirebaseApp;
		if (name) {
			app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext(), nativeOptions.build(), name);
		} else {
			com.google.firebase.FirebaseApp.getInstance();
			app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext());
		}

		if (app && typeof configOrName === 'object' && typeof configOrName.automaticResourceManagement === 'boolean') {
			app.setAutomaticResourceManagementEnabled(configOrName.automaticDataCollectionEnabled);
		}

		return new Promise((resolve, reject) => {
			if (app) {
				resolve(app);
			} else {
				reject();
			}
		});
	}
	static analytics() {
		return undefined;
	}
	static auth(app?: FirebaseApp): any {
		return undefined;
	}
}
