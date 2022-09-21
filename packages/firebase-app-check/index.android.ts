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

const NSAppCheck = lazy(() => org.nativescript.firebase.app_check.FirebaseAppCheck);

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

export abstract class AppCheckProviderFactory {
	_native: com.google.firebase.appcheck.AppCheckProviderFactory;
	constructor() {
		const ref = new WeakRef(this);
		this._native = new com.google.firebase.appcheck.AppCheckProviderFactory({
			create(app) {
				return ref.get?.()?.createProvider?.((<any>FirebaseApp).fromNative(app))?.native || null;
			},
		});
	}
	abstract createProvider(app: FirebaseApp): AppCheckProvider;

	get native() {
		return this._native;
	}
}

export abstract class AppCheckProvider {
	_native;
	_callback;
	constructor() {
		const ref = new WeakRef(this);
		this._callback = new (<any>org).nativescript.firebase.app_check.FirebaseAppCheck.CustomAppCheckProvider.Callback({
			getToken() {
				let result;
				const callback = (token: { token: string; expirationDate: Date }, error: FirebaseError) => {
					if (token) {
						token = new (<any>org).nativescript.firebase.app_check.FirebaseAppCheck.AppCheckToken(token.token, token.expirationDate.getTime());
					} else {
						result = (error as any).intoNative();
					}
				};

				ref.get?.().getToken(callback);
				return result;
			},
		});
		this._native = (<any>org).nativescript.firebase.app_check.FirebaseAppCheck.CustomAppCheckProvider(this._callback);
	}
	abstract getToken(
		done: (
			token: {
				token: string;
				expirationDate: Date;
			},
			error: FirebaseError
		) => void
	);
	get native() {
		return this._native;
	}
}

let customProvider: AppCheckProviderFactory;
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
	static setProviderFactory(custom?: AppCheckProviderFactory) {
		if (custom && custom instanceof AppCheckProviderFactory) {
			customProvider = custom;
		} else {
			customProvider = undefined;
		}
	}

	activate(isTokenAutoRefreshEnabled: boolean) {
		this.native.setTokenAutoRefreshEnabled(isTokenAutoRefreshEnabled);
		if (customProvider) {
			this.native.installAppCheckProviderFactory(customProvider.native);
		} else {
			this.native.installAppCheckProviderFactory(com.google.firebase.appcheck.safetynet.SafetyNetAppCheckProviderFactory.getInstance());
		}
	}

	getToken(forceRefresh: boolean): Promise<AppCheckToken> {
		return new Promise((resolve, reject) => {
			NSAppCheck().getToken(
				this.native,
				forceRefresh,
				new org.nativescript.firebase.app_check.FirebaseAppCheck.Callback({
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
