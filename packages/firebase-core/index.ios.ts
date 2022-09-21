import { Application, knownFolders } from '@nativescript/core';
import { FirebaseConfig, IFirebaseOptions } from '.';
export * from './utils';

export class FirebaseError extends Error {
	_native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new FirebaseError(message || native?.localizedDescription);
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
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
		return this._native;
	}
}

export class FirebaseOptions implements IFirebaseOptions {
	_nativeApp: FIRApp;

	static fromNative(native: FIRApp) {
		if (native instanceof FIRApp) {
			const opts = new FirebaseOptions();
			opts._nativeApp = native;
			return opts;
		}
		return null;
	}
	get ios() {
		return this.native;
	}
	get native() {
		return this._nativeApp?.options;
	}

	get name(): string {
		return this._nativeApp?.name;
	}

	_apiKey: string;
	set apiKey(value) {
		this._apiKey = value;
	}

	get apiKey(): string {
		if (this._apiKey) {
			return this._apiKey;
		}
		return this.native?.APIKey;
	}

	_gcmSenderId: string;
	set gcmSenderId(value) {
		this._gcmSenderId = value;
	}
	get gcmSenderId(): string {
		if (this._gcmSenderId) {
			return this._gcmSenderId;
		}
		return this.native?.GCMSenderID;
	}

	_androidClientId: string;
	set androidClientId(value) {
		this._androidClientId = value;
	}
	get androidClientId(): string {
		if (this._androidClientId) {
			return this._androidClientId;
		}
		return this.native?.androidClientID;
	}

	_appGroupId: string;
	set appGroupId(value) {
		this._appGroupId = value;
	}

	get appGroupId(): string {
		if (this._appGroupId) {
			return this._appGroupId;
		}
		return this.native?.appGroupID;
	}

	_bundleId: string;
	set bundleId(value) {
		this._bundleId = value;
	}
	get bundleId(): string {
		if (this._bundleId) {
			return this._bundleId;
		}
		return this.native?.bundleID;
	}

	_clientId: string;
	set clientId(value) {
		this._clientId = value;
	}
	get clientId(): string {
		if (this._clientId) {
			return this._clientId;
		}
		return this.native?.clientID;
	}

	_databaseURL: string;
	set databaseURL(value) {
		this._databaseURL = value;
	}
	get databaseURL(): string {
		if (this._databaseURL) {
			return this._databaseURL;
		}
		return this.native?.databaseURL;
	}

	_deepLinkURLScheme: string;
	set deepLinkURLScheme(value) {
		this._deepLinkURLScheme = value;
	}
	get deepLinkURLScheme(): string {
		if (this._deepLinkURLScheme) {
			return this._deepLinkURLScheme;
		}
		return this.native?.deepLinkURLScheme;
	}

	_googleAppId: string;
	set googleAppId(value) {
		this._googleAppId = value;
	}
	get googleAppId(): string {
		if (this._googleAppId) {
			return this._googleAppId;
		}
		return this.native?.googleAppID;
	}

	_projectId: string;
	set projectId(value) {
		this._projectId = value;
	}
	get projectId(): string {
		if (this._projectId) {
			return this._projectId;
		}
		return this.native?.projectID;
	}

	_storageBucket: string;
	set storageBucket(value) {
		this._storageBucket = value;
	}
	get storageBucket(): string {
		if (this._storageBucket) {
			return this._storageBucket;
		}
		return this.native?.storageBucket;
	}

	_trackingId: string;
	set trackingId(value) {
		this._trackingId = value;
	}
	get trackingId(): string {
		if (this._trackingId) {
			return this._trackingId;
		}
		return this.native?.trackingID;
	}
}

let firebaseInstance: Firebase;
let defaultApp: FirebaseApp;
const firebaseApps = new Map<string, FirebaseApp>();

export class FirebaseApp {
	_native: FIRApp;
	_options: FirebaseOptions;

	static fromNative(app: FIRApp) {
		if (app instanceof FIRApp) {
			const fb = new FirebaseApp();
			fb._native = app;
			return fb;
		}
		return null;
	}

	get native() {
		return this._native;
	}
	get ios() {
		return this.native;
	}
	get name() {
		return this.native.name;
	}

	get options() {
		if (!this._options) {
			this._options = FirebaseOptions.fromNative(this._native);
		}
		return this._options;
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
			app._native = nativeApp;
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
	static _onResumeQueue = [];
	static addToResumeQueue(callback: () => void) {
		if (typeof callback !== 'function') {
			return;
		}
		Firebase._onResumeQueue.push(callback);
	}
	static addToActivityCreatedQueue(callback: () => void) {
		// noop
	}
	static _inForeground = false;
	static _appDidLaunch = false;
	static get inForeground() {
		return Firebase._inForeground;
	}
	constructor() {
		if (firebaseInstance) {
			return firebaseInstance;
		}
		firebaseInstance = this;

		Application.on('launch', (args) => {
			Firebase._onResumeQueue.forEach((callback) => {
				callback();
			});
			Firebase._onResumeQueue.splice(0);
		});

		Application.on('resume', (args) => {
			Firebase._inForeground = true;
			Firebase._appDidLaunch = true;
		});

		Application.on('suspend', (args) => {
			Firebase._inForeground = false;
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
						// For backward compat remove @v3
						global.__defaultFirebaseApp = fbApp;
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

	// For backward compat remove @v3
	admob() {
		return global?.__admob;
	}
}

export function firebase() {
	if (firebaseInstance) {
		return firebaseInstance;
	}
	firebaseInstance = new Firebase();
	return firebaseInstance;
}
