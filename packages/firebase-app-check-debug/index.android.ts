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

const NSAppCheck = lazy(() => org.nativescript.firebase.app_check_debug.FirebaseAppCheck);

export class AppCheckToken implements IAppCheckToken {
	#native: com.google.firebase.appcheck.AppCheckToken;

	static fromNative(token: com.google.firebase.appcheck.AppCheckToken) {
		if (token instanceof com.google.firebase.appcheck.AppCheckToken) {
			const t = new AppCheckToken();
			t.#native = token;
			return t;
		}
		return null;
	}

	get native() {
		return this.#native;
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
	#native: com.google.firebase.appcheck.FirebaseAppCheck;
	#nativeApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#nativeApp = app.native;
			this.#native = com.google.firebase.appcheck.FirebaseAppCheck.getInstance(app.native);
		} else {
			if (defaultAppCheck) {
				return defaultAppCheck;
			}
			defaultAppCheck = this;
			this.#nativeApp = (<any>com).google.firebase.FirebaseApp.getInstance();
			this.#native = com.google.firebase.appcheck.FirebaseAppCheck.getInstance();
		}
	}
	static setProviderFactory() {}

	activate(isTokenAutoRefreshEnabled: boolean) {
		this.native.setTokenAutoRefreshEnabled(isTokenAutoRefreshEnabled);
		this.native.installAppCheckProviderFactory(com.google.firebase.appcheck.debug.DebugAppCheckProviderFactory.getInstance());
	}

	getToken(forceRefresh: boolean): Promise<AppCheckToken> {
		return new Promise((resolve, reject) => {
			NSAppCheck().getToken(
				this.native,
				forceRefresh,
				new org.nativescript.firebase.app_check_debug.FirebaseAppCheck.Callback({
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
		return this.#native;
	}
	get ios() {
		return this.native;
	}
	#app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.#nativeApp);
		}
		return this.#app;
	}
}
