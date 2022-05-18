import { IFirebaseOptions, FirebaseConfig } from './common';
import { Application, knownFolders, Utils } from '@nativescript/core';
export * from './utils';
declare const __non_webpack_require__;
export class FirebaseError extends Error {
	#native: java.lang.Exception;
	static fromNative(native: java.lang.Exception, message?: string) {
		const error = new FirebaseError(message || native?.getMessage?.());
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}

	intoNative() {
		if (!this.#native) {
			return new java.lang.Exception(this.message);
		}
		return this.#native;
	}
}

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

let firebaseInstance: Firebase;
let defaultApp: FirebaseApp;
const firebaseApps = new Map<string, FirebaseApp>();

export class FirebaseApp {
	#native: com.google.firebase.FirebaseApp;
	#options: FirebaseOptions;

	static fromNative(app: com.google.firebase.FirebaseApp) {
		if (app instanceof com.google.firebase.FirebaseApp) {
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
			firebaseApps.delete(this.native.getName());
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
	static #onResumeQueue = [];
	static addToResumeQueue(callback: () => void) {
		if (typeof callback !== 'function') {
			return;
		}
		Firebase.#onResumeQueue.push(callback);
	}
	static #inForeground = false;
	static get inForeground() {
		return Firebase.#inForeground;
	}
	constructor() {
		if (firebaseInstance) {
			return firebaseInstance;
		}
		firebaseInstance = this;
		Application.android.on('activityResumed', (args) => {
			Firebase.#inForeground = true;
			Firebase.#onResumeQueue.forEach((callback) => {
				callback();
			});
			Firebase.#onResumeQueue.splice(0);
		});

		Application.android.on('activityPaused', (args) => {
			Firebase.#inForeground = false;
		});
		return firebaseInstance;
	}

	app(name?: string) {
		if (name) {
			if (firebaseApps.has(name)) {
				return firebaseApps.get(name);
			}
			return FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance(name));
		}
		if (!defaultApp) {
			defaultApp = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
		}
		return defaultApp;
	}

	initializeApp(options: FirebaseOptions = null, configOrName?: FirebaseConfig | string) {
		return new Promise((resolve, reject) => {
			try {
				let nativeOptions;
				if (options) {
					nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
				}
				if (options?.apiKey) {
					nativeOptions.setApiKey(options.apiKey);
				}

				if (options?.gcmSenderId) {
					nativeOptions.setGcmSenderId(options.gcmSenderId);
				}

				if (options?.databaseURL) {
					nativeOptions.setDatabaseUrl(options.databaseURL);
				}

				if (options?.googleAppId) {
					nativeOptions.setApplicationId(options.googleAppId);
				}

				if (options?.projectId) {
					nativeOptions.setProjectId(options.projectId);
				}

				if (options?.storageBucket) {
					nativeOptions.setStorageBucket(options.storageBucket);
				}

				if (options?.trackingId) {
					nativeOptions.setGaTrackingId(options.trackingId);
				}

				const name = typeof configOrName === 'string' ? configOrName : configOrName?.name;
				let app: com.google.firebase.FirebaseApp;
				let isDefault = false;
				if (name) {
					if (!nativeOptions) {
						nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
					}
					app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext(), nativeOptions.build(), name);
				} else {
					if (defaultApp) {
						defaultApp;
					}
					isDefault = true;
					if (nativeOptions) {
						app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext(), nativeOptions.build());
					} else {
						app = com.google.firebase.FirebaseApp.initializeApp(Utils.android.getApplicationContext());
					}
				}

				if (app && typeof configOrName === 'object' && typeof configOrName.automaticResourceManagement === 'boolean') {
					app.setAutomaticResourceManagementEnabled(configOrName.automaticDataCollectionEnabled);
				}

				const fbApp = FirebaseApp.fromNative(app);

				if (isDefault) {
					defaultApp = fbApp;
				}

				if (!isDefault) {
					firebaseApps.set(name, fbApp);
				}
				resolve(fbApp);
			} catch (e) {
				reject(new FirebaseError(e.message));
			}
		});
	}

	initializeAppWithPath(path: string, options: FirebaseOptions = null, config?: FirebaseConfig) {
		return new Promise((resolve, reject) => {
			try {
				let json;
				const ctx = Utils.android.getApplicationContext() as android.content.Context;
				if (path.startsWith('res://')) {
					const jsonStr = (<any>org).nativescript.firebase.core.FirebaseCore.readRawAsset(ctx, path);
					json = JSON.parse(jsonStr);
				} else {
					if (path.startsWith('~/')) {
						path = knownFolders.currentApp().path + '/' + path.replace('~/', '');
					}
					json = __non_webpack_require__(path);
				}

				// always use first client

				const client = json['client'][0];
				const oauth_clients = client['oauth_client'];
				const project_info = json['project_info'];
				const client_info = client['client_info'];

				let default_web_client_id = null;
				const firebase_database_url = project_info['firebase_url'] || null;
				const gcm_defaultSenderId = project_info['project_number'] || null;
				const google_api_key = client['api_key']?.['current_key'] ?? null;
				const google_app_id = client_info['mobilesdk_app_id'] || null;
				const google_crash_reporting_api_key = google_app_id;
				const google_storage_bucket = project_info['storage_bucket'] || null;
				const project_id = project_info['project_id'] || null;

				for (let i = 0; i < oauth_clients.length; i++) {
					const oauth_client = oauth_clients[i];
					if (oauth_client.client_type === 3) {
						default_web_client_id = oauth_client['client_id'];
					}
				}

				const nativeOptions = new com.google.firebase.FirebaseOptions.Builder();
				if (google_api_key) {
					nativeOptions.setApiKey(google_api_key);
				}

				if (google_app_id) {
					nativeOptions.setApplicationId(google_app_id);
				}

				if (firebase_database_url) {
					nativeOptions.setDatabaseUrl(firebase_database_url);
				}

				if (gcm_defaultSenderId) {
					nativeOptions.setGcmSenderId(gcm_defaultSenderId);
				}

				if (project_id) {
					nativeOptions.setProjectId(project_id);
				}

				if (google_storage_bucket) {
					nativeOptions.setStorageBucket(google_storage_bucket);
				}

				if (options?.apiKey) {
					nativeOptions.setApiKey(options.apiKey);
				}

				if (options?.gcmSenderId) {
					nativeOptions.setGcmSenderId(options.gcmSenderId);
				}

				if (options?.databaseURL) {
					nativeOptions.setDatabaseUrl(options.databaseURL);
				}

				if (options?.googleAppId) {
					nativeOptions.setApplicationId(options.googleAppId);
				}

				if (options?.projectId) {
					nativeOptions.setProjectId(options.projectId);
				}

				if (options?.storageBucket) {
					nativeOptions.setStorageBucket(options.storageBucket);
				}

				if (options?.trackingId) {
					nativeOptions.setGaTrackingId(options.trackingId);
				}

				const app = com.google.firebase.FirebaseApp.initializeApp(ctx, nativeOptions.build());

				if (app && typeof config === 'object' && typeof config.automaticResourceManagement === 'boolean') {
					app.setAutomaticResourceManagementEnabled(config.automaticDataCollectionEnabled);
				}

				const fbApp = FirebaseApp.fromNative(app);

				if (!defaultApp) {
					defaultApp = fbApp;
				}
				resolve(fbApp);
			} catch (e) {
				reject(new FirebaseError(e.message));
			}
		});
	}
}

export function firebase() {
	if (firebaseInstance) {
		return firebaseInstance;
	}
	firebaseInstance = new Firebase();
	return firebaseInstance;
}
