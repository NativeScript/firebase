import { IAppCheck, IAppCheckToken } from './common';
import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import lazy from '@nativescript/core/utils/lazy';

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

const NSAppCheck = lazy(() => org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug);

export class AppCheckToken implements IAppCheckToken {
	_native: com.google.firebase.appcheck.AppCheckToken;

	static fromNative(token: com.google.firebase.appcheck.AppCheckToken) {
		if (token instanceof com.google.firebase.appcheck.AppCheckToken) {
			const t = new AppCheckToken();
			t._native = token;
			return t;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
	get token(): string {
		return this.native?.getToken?.();
	}

	get expireTimeMillis(): number {
		return this.native?.getExpireTimeMillis?.();
	}
}

export class AppCheck implements IAppCheck {
	_native: com.google.firebase.appcheck.FirebaseAppCheck;
	_nativeApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this._nativeApp = app.native;
			this._native = com.google.firebase.appcheck.FirebaseAppCheck.getInstance(app.native);
		} else {
			if (defaultAppCheck) {
				return defaultAppCheck;
			}
			defaultAppCheck = this;
			this._nativeApp = (<any>com).google.firebase.FirebaseApp.getInstance();
			this._native = com.google.firebase.appcheck.FirebaseAppCheck.getInstance();
		}
	}
	static setProviderFactory() {}

	activate(isTokenAutoRefreshEnabled: boolean) {
		this.native.installAppCheckProviderFactory(com.google.firebase.appcheck.debug.DebugAppCheckProviderFactory.getInstance(), isTokenAutoRefreshEnabled);
	}

	getToken(forceRefresh: boolean): Promise<AppCheckToken> {
		return new Promise((resolve, reject) => {
			NSAppCheck().getToken(
				this.native,
				forceRefresh,
				new org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Callback({
					onSuccess(param0) {
						resolve(AppCheckToken.fromNative(param0));
					},
					onError(param0) {
						const err = FirebaseError.fromNative(param0);
						reject(err);
					},
				})
			);
		});
	}
	setTokenAutoRefreshEnabled(enabled: boolean) {
		this.native.setTokenAutoRefreshEnabled(enabled);
	}
	get native() {
		return this._native;
	}
	get ios() {
		return this.native;
	}
	_app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this._nativeApp);
		}
		return this._app;
	}
}
