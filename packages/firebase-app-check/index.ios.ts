import { IAppCheck, IAppCheckToken } from './common';
import { Firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
declare const FIRApp;

Firebase.appCheck = (app?: FirebaseApp) => {
	return new AppCheck(app);
};

export class AppCheckToken implements IAppCheckToken {
	#native: FIRAppCheckToken;

	static fromNative(token: FIRAppCheckToken) {
		if (token instanceof FIRAppCheckToken) {
			const t = new AppCheckToken();
			t.#native = token;
			return t;
		}
		return null;
	}

	get native() {
		return this.#native;
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

export class AppCheck implements IAppCheck {
	#native: FIRAppCheck;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = FIRAppCheck.appCheckWithApp(app.native);
		} else {
			this.#native = FIRAppCheck.appCheckWithApp(FIRApp.defaultApp());
		}
	}
	activate(isTokenAutoRefreshEnabled: boolean) {
		this.native.isTokenAutoRefreshEnabled = isTokenAutoRefreshEnabled;
	}
	getToken(forceRefresh: boolean): Promise<AppCheckToken> {
		return new Promise((resolve, reject) => {
			this.native.tokenForcingRefreshCompletion(false, (token, error) => {
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
		return this.#native;
	}
	get ios() {
		return this.native;
	}
	#app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
}
