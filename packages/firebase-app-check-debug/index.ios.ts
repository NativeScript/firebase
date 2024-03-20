import { IAppCheck, IAppCheckToken } from './common';
import { firebase, FirebaseApp, FirebaseError } from '@nativescript-asharghi/firebase-core';
declare const FIRApp;

let defaultAppCheck: AppCheck;
const fb = firebase();
Object.defineProperty(fb, 'appCheck', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultAppCheck) {
				defaultAppCheck = new AppCheck();
			}
			return defaultAppCheck;
		}
		return new AppCheck(app);
	},
	writable: false,
});

export class AppCheckToken implements IAppCheckToken {
	_native: FIRAppCheckToken;

	static fromNative(token: FIRAppCheckToken) {
		if (token instanceof FIRAppCheckToken) {
			const t = new AppCheckToken();
			t._native = token;
			return t;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
	get token(): string {
		return this.native?.token;
	}

	get expireTimeMillis(): number {
		return this.native?.expirationDate?.getTime?.();
	}
}

let provider;
export class AppCheck implements IAppCheck {
	_native: FIRAppCheck;
	_nativeApp;
	_app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this._native = FIRAppCheck.appCheckWithApp(app.native);
			this._nativeApp = app.native;
		} else {
			if (defaultAppCheck) {
				return defaultAppCheck;
			}
			defaultAppCheck = this;
			this._native = FIRAppCheck.appCheck();
			this._nativeApp = FIRApp.defaultApp();
		}
	}

	static setProviderFactory() {
		if (!provider) {
			provider = FIRAppCheckDebugProviderFactory.alloc().init();
		}
		FIRAppCheck.setAppCheckProviderFactory(provider);
	}

	activate(isTokenAutoRefreshEnabled: boolean) {
		this.native.isTokenAutoRefreshEnabled = isTokenAutoRefreshEnabled;
	}
	getToken(forceRefresh: boolean): Promise<AppCheckToken> {
		return new Promise((resolve, reject) => {
			this.native.tokenForcingRefreshCompletion(forceRefresh, (token, error) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					reject(err);
				} else {
					resolve(AppCheckToken.fromNative(token));
				}
			});
		});
	}
	setTokenAutoRefreshEnabled(enabled: boolean) {
		this.native.isTokenAutoRefreshEnabled = enabled;
	}
	get native() {
		return this._native;
	}
	get ios() {
		return this.native;
	}
	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this._nativeApp);
		}
		return this._app;
	}
}
