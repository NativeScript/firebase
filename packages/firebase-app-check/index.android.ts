import { IAppCheck, IAppCheckToken } from './common';
import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { Utils } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';

let defaultAppCheck: AppCheck;
const fb = firebase();
Object.defineProperty(fb, 'appCheck', {
	value: (app?: FirebaseApp) => {
		if(!app){
			if(!defaultAppCheck){
				defaultAppCheck = new AppCheck();
			}
			return defaultAppCheck;
		}
		return new AppCheck(app);
	},
	writable: false,
});


const NSAppCheck = lazy(() => org.nativescript.firebase.app_check.FirebaseAppCheck);

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
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = com.google.firebase.appcheck.FirebaseAppCheck.getInstance(app.native);
		} else {
			if(defaultAppCheck){
				return defaultAppCheck;
			}
			defaultAppCheck = this;
			this.#native = com.google.firebase.appcheck.FirebaseAppCheck.getInstance();
		}
	}
	activate(isTokenAutoRefreshEnabled: boolean) {
		try {
			const firebaseAppCheck = this.native;
			firebaseAppCheck.setTokenAutoRefreshEnabled(isTokenAutoRefreshEnabled);
			let isDebuggable = false;
			const pm = Utils.android.getApplicationContext().getPackageManager();
			if (pm != null) {
				isDebuggable = 0 != (pm.getApplicationInfo(Utils.android.getApplicationContext().getPackageName(), 0).flags & android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE);
			}

			if (isDebuggable) {
				firebaseAppCheck.installAppCheckProviderFactory((com as any).google.firebase.appcheck.debug.DebugAppCheckProviderFactory.getInstance());
			} else {
				firebaseAppCheck.installAppCheckProviderFactory(com.google.firebase.appcheck.safetynet.SafetyNetAppCheckProviderFactory.getInstance());
			}
		} catch (e) {
			return;
		}
	}

	getToken(forceRefresh: boolean): Promise<AppCheckToken> {
		return new Promise((resolve, reject) => {
			NSAppCheck().getToken(
				this.native,
				forceRefresh,
				new org.nativescript.firebase.app_check.FirebaseAppCheck.Callback({
					onSuccess(param0) {
                        resolve(AppCheckToken.fromNative(param0))
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
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
}
