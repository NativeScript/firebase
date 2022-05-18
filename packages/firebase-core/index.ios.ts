import { Application, knownFolders } from '@nativescript/core';
import { FirebaseConfig, IFirebaseOptions } from './common';
export * from './utils';

export class FirebaseError extends Error {
	#native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new FirebaseError(message || native?.localizedDescription);
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}

	intoNative() {
		if (!this.#native) {
			const exception = NSException.exceptionWithNameReasonUserInfo(NSGenericException, this.message, null);
			const info = {};
			info['ExceptionName'] = exception.name;
			info['ExceptionReason'] = exception.reason;
			info['ExceptionCallStackReturnAddresses'] = exception.callStackReturnAddresses;
			info['ExceptionCallStackSymbols'] = exception.callStackSymbols;
			info['ExceptionUserInfo'] = exception.userInfo;
			const error = NSError.alloc().initWithDomainCodeUserInfo('NativeScript', 1000, info as any);
			return error;
		}
		return this.#native;
	}
}

export class FirebaseOptions implements IFirebaseOptions {
	#nativeApp: FIRApp;

	static fromNative(native: FIRApp) {
		if (native instanceof FIRApp) {
			const opts = new FirebaseOptions();
			opts.#nativeApp = native;
			return opts;
		}
		return null;
	}
	get ios() {
		return this.native;
	}
	get native() {
		return this.#nativeApp?.options;
	}

	get name(): string {
		return this.#nativeApp?.name;
	}

	#apiKey: string;
	set apiKey(value) {
		this.#apiKey = value;
	}

	get apiKey(): string {
		if (this.#apiKey) {
			return this.#apiKey;
		}
		return this.native?.APIKey;
	}

	#gcmSenderId: string;
	set gcmSenderId(value) {
		this.#gcmSenderId = value;
	}
	get gcmSenderId(): string {
		if (this.#gcmSenderId) {
			return this.#gcmSenderId;
		}
		return this.native?.GCMSenderID;
	}

	#androidClientId: string;
	set androidClientId(value) {
		this.#androidClientId = value;
	}
	get androidClientId(): string {
		if (this.#androidClientId) {
			return this.#androidClientId;
		}
		return this.native?.androidClientID;
	}

	#appGroupId: string;
	set appGroupId(value) {
		this.#appGroupId = value;
	}

	get appGroupId(): string {
		if (this.#appGroupId) {
			return this.#appGroupId;
		}
		return this.native?.appGroupID;
	}

	#bundleId: string;
	set bundleId(value) {
		this.#bundleId = value;
	}
	get bundleId(): string {
		if (this.#bundleId) {
			return this.#bundleId;
		}
		return this.native?.bundleID;
	}

	#clientId: string;
	set clientId(value) {
		this.#clientId = value;
	}
	get clientId(): string {
		if (this.#clientId) {
			return this.#clientId;
		}
		return this.native?.clientID;
	}

	#databaseURL: string;
	set databaseURL(value) {
		this.#databaseURL = value;
	}
	get databaseURL(): string {
		if (this.#databaseURL) {
			return this.#databaseURL;
		}
		return this.native?.databaseURL;
	}

	#deepLinkURLScheme: string;
	set deepLinkURLScheme(value) {
		this.#deepLinkURLScheme = value;
	}
	get deepLinkURLScheme(): string {
		if (this.#deepLinkURLScheme) {
			return this.#deepLinkURLScheme;
		}
		return this.native?.deepLinkURLScheme;
	}

	#googleAppId: string;
	set googleAppId(value) {
		this.#googleAppId = value;
	}
	get googleAppId(): string {
		if (this.#googleAppId) {
			return this.#googleAppId;
		}
		return this.native?.googleAppID;
	}

	#projectId: string;
	set projectId(value) {
		this.#projectId = value;
	}
	get projectId(): string {
		if (this.#projectId) {
			return this.#projectId;
		}
		return this.native?.projectID;
	}

	#storageBucket: string;
	set storageBucket(value) {
		this.#storageBucket = value;
	}
	get storageBucket(): string {
		if (this.#storageBucket) {
			return this.#storageBucket;
		}
		return this.native?.storageBucket;
	}

	#trackingId: string;
	set trackingId(value) {
		this.#trackingId = value;
	}
	get trackingId(): string {
		if (this.#trackingId) {
			return this.#trackingId;
		}
		return this.native?.trackingID;
	}
}

let firebaseInstance: Firebase;
let defaultApp: FirebaseApp;
const firebaseApps = new Map<string, FirebaseApp>();

export class FirebaseApp {
	#native: FIRApp;
	#options: FirebaseOptions;

	static fromNative(app: FIRApp) {
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
	get ios() {
		return this.native;
	}
	get name() {
		return this.native.name;
	}

	get options() {
		if (!this.#options) {
			this.#options = FirebaseOptions.fromNative(this.#native);
		}
		return this.#options;
	}

	delete() {
		return new Promise<void>((resolve, reject) => {
			this.native.deleteApp((done) => {
				if (done) {
					firebaseApps.delete(this.native.name);
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	get apps() {
		const apps = [];
		const keys = FIRApp.allApps.allKeys;
		const count = keys.count;
		for (let i = 0; i < count; i++) {
			const key = keys.objectAtIndex(i);
			const nativeApp = FIRApp.allApps.objectForKey(key);
			const app = new FirebaseApp();
			app.#native = nativeApp;
			apps.push(app);
		}
		return apps;
	}
}

const launchQueue = [];

declare const TNSFirebaseCore;

const launchCallback = () => {
	launchQueue.forEach((item) => item());
	launchQueue.splice(0);
};

TNSFirebaseCore.setOnAppFinishLaunchingCallback(launchCallback);

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

		Application.on('launch', (args) => {
			Firebase.#onResumeQueue.forEach((callback) => {
				callback();
			});
			Firebase.#onResumeQueue.splice(0);
		});

		Application.on('resume', (args) => {
			Firebase.#inForeground = true;
		});

		Application.on('suspend', (args) => {
			Firebase.#inForeground = false;
		});
		return firebaseInstance;
	}
	app(name?: string) {
		if (name) {
			if (firebaseApps.has(name)) {
				return firebaseApps.get(name);
			}
			return FirebaseApp.fromNative(FIRApp.appNamed(name));
		}
		if (!defaultApp) {
			defaultApp = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return defaultApp;
	}

	initializeApp(options: FirebaseOptions = null, configOrName?: FirebaseConfig | string) {
		return new Promise((resolve, reject) => {
			const initApp = () => {
				try {
					const name = typeof configOrName === 'string' ? configOrName : configOrName?.name;
					let nativeOptions: FIROptions;
					if (name) {
						nativeOptions = FIROptions.alloc().initWithGoogleAppIDGCMSenderID(options.googleAppId, options.gcmSenderId);
					}

					if (!nativeOptions && options) {
						nativeOptions = FIROptions.defaultOptions();
					}

					if (options?.apiKey) {
						nativeOptions.APIKey = options.apiKey;
					}

					if (options?.gcmSenderId) {
						nativeOptions.GCMSenderID = options.gcmSenderId;
					}

					if (options?.androidClientId) {
						nativeOptions.androidClientID = options.androidClientId;
					}

					if (options?.appGroupId) {
						nativeOptions.appGroupID = options.appGroupId;
					}

					if (options?.bundleId) {
						nativeOptions.bundleID = options.bundleId;
					}

					if (options?.clientId) {
						nativeOptions.clientID = options.clientId;
					}

					if (options?.databaseURL) {
						nativeOptions.databaseURL = options.databaseURL;
					}

					if (options?.deepLinkURLScheme) {
						nativeOptions.deepLinkURLScheme = options.deepLinkURLScheme;
					}

					if (options?.googleAppId) {
						nativeOptions.googleAppID = options.googleAppId;
					}

					if (options?.projectId) {
						nativeOptions.projectID = options.projectId;
					}

					if (options?.storageBucket) {
						nativeOptions.storageBucket = options.storageBucket;
					}

					if (options?.trackingId) {
						nativeOptions.trackingID = options.trackingId;
					}

					let app: FIRApp;
					let isDefault = false;
					if (name) {
						FIRApp.configureWithNameOptions(name, nativeOptions);
						app = FIRApp.appNamed(name);
					} else {
						if (defaultApp) {
							return defaultApp;
						}

						if (nativeOptions) {
							FIRApp.configureWithOptions(nativeOptions);
						} else {
							FIRApp.configure();
						}

						app = FIRApp.defaultApp();
						isDefault = true;
					}

					if (app && typeof configOrName === 'object' && typeof configOrName.automaticDataCollectionEnabled === 'boolean') {
						app.dataCollectionDefaultEnabled = configOrName.automaticDataCollectionEnabled;
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
			};

			if (!UIApplication.sharedApplication) {
				launchQueue.push(() => {
					initApp();
				});
			} else {
				initApp();
			}
		});
	}

	initializeAppWithPath(path: string, options: FirebaseOptions = null, config?: FirebaseConfig) {
		return new Promise((resolve, reject) => {
			const initApp = () => {
				try {
					if (path.startsWith('res://')) {
						path = NSBundle.mainBundle.pathForResourceOfType(path.replace('res://', '').replace('.plist', ''), 'plist');
					} else if (path.startsWith('~/')) {
						path = knownFolders.currentApp().path + '/' + path.replace('~/', '');
					}

					const nativeOptions = FIROptions.alloc().initWithContentsOfFile(path);

					if (options?.apiKey) {
						nativeOptions.APIKey = options.apiKey;
					}

					if (options?.gcmSenderId) {
						nativeOptions.GCMSenderID = options.gcmSenderId;
					}

					if (options?.androidClientId) {
						nativeOptions.androidClientID = options.androidClientId;
					}

					if (options?.appGroupId) {
						nativeOptions.appGroupID = options.appGroupId;
					}

					if (options?.bundleId) {
						nativeOptions.bundleID = options.bundleId;
					}

					if (options?.clientId) {
						nativeOptions.clientID = options.clientId;
					}

					if (options?.databaseURL) {
						nativeOptions.databaseURL = options.databaseURL;
					}

					if (options?.deepLinkURLScheme) {
						nativeOptions.deepLinkURLScheme = options.deepLinkURLScheme;
					}

					if (options?.googleAppId) {
						nativeOptions.googleAppID = options.googleAppId;
					}

					if (options?.projectId) {
						nativeOptions.projectID = options.projectId;
					}

					if (options?.storageBucket) {
						nativeOptions.storageBucket = options.storageBucket;
					}

					if (options?.trackingId) {
						nativeOptions.trackingID = options.trackingId;
					}

					FIRApp.configureWithOptions(nativeOptions);

					const app = FIRApp.defaultApp();

					if (app && typeof config === 'object' && typeof config.automaticDataCollectionEnabled === 'boolean') {
						app.dataCollectionDefaultEnabled = config.automaticDataCollectionEnabled;
					}
					const fbApp = FirebaseApp.fromNative(app);

					if (!defaultApp) {
						defaultApp = fbApp;
					}
					resolve(fbApp);
				} catch (e) {
					reject(new FirebaseError(e.message));
				}
			};
			if (!UIApplication.sharedApplication) {
				launchQueue.push(() => {
					initApp();
				});
			} else {
				initApp();
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
