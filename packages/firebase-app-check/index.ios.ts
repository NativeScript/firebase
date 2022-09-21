import { IAppCheck, IAppCheckToken } from './common';
import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { Device } from '@nativescript/core';
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

@ObjCClass(FIRAppCheckProviderFactory)
@NativeClass
class FIRAppCheckProviderFactoryImpl extends NSObject implements FIRAppCheckProviderFactory {
	createProviderWithApp(app: any): FIRAppCheckProvider {
		let provider: FIRDeviceCheckProvider;
		if (parseFloat(Device.sdkVersion) > 14) {
			provider = FIRAppAttestProvider.alloc().initWithApp(app);
		} else {
			provider = FIRDeviceCheckProvider.alloc().initWithApp(app);
		}
		return provider;
	}
}

@ObjCClass(FIRAppCheckProvider)
@NativeClass
class FIRAppCheckProviderImpl extends NSObject implements FIRAppCheckProvider {
	_owner: WeakRef<AppCheckProvider>;
	_queue;
	static initWithOwner(owner: WeakRef<AppCheckProvider>) {
		const provider = <FIRAppCheckProviderImpl>FIRAppCheckProviderImpl.new();
		provider._owner = owner;
		provider._queue = dispatch_queue_create('FIRAppCheckProviderImpl', null);
		return provider;
	}
	getTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void {
		dispatch_async(this._queue, () => {
			const callback = (token: { token: string; expirationDate: Date }, error: FirebaseError) => {
				if (token) {
					handler(FIRAppCheckToken.alloc().initWithTokenExpirationDate(token.token, token.expirationDate), null);
				} else {
					handler(null, (error as any).intoNative());
				}
			};
			this._owner.get?.().getToken?.(callback);
		});
	}
}

@ObjCClass(FIRAppCheckProviderFactory)
@NativeClass
class FIRAppCheckProviderFactoryCustomImpl extends NSObject implements FIRAppCheckProviderFactory {
	_owner: WeakRef<AppCheckProviderFactory>;
	static initWithOwner(owner: WeakRef<AppCheckProviderFactory>) {
		const provider = <FIRAppCheckProviderFactoryCustomImpl>FIRAppCheckProviderFactoryCustomImpl.new();
		provider._owner = owner;
		return provider;
	}
	createProviderWithApp(app: any): FIRAppCheckProvider {
		return this._owner.get?.()?.createProvider?.((<any>FirebaseApp).fromNative(app))?.native || null;
	}
}

export abstract class AppCheckProviderFactory {
	_native: FIRAppCheckProviderFactoryCustomImpl;
	constructor() {
		this._native = FIRAppCheckProviderFactoryCustomImpl.initWithOwner(new WeakRef(this));
	}
	abstract createProvider(app: FirebaseApp): AppCheckProvider;

	get native() {
		return this._native;
	}
}

export abstract class AppCheckProvider {
	_native: FIRAppCheckProviderImpl;
	constructor() {
		this._native = FIRAppCheckProviderImpl.initWithOwner(new WeakRef(this));
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

let provider;
let customProvider: AppCheckProviderFactory;
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
			const app = FIRApp.defaultApp();
			this._native = FIRAppCheck.appCheckWithApp(app);
			this._nativeApp = app;
		}
	}

	static setProviderFactory(custom?: AppCheckProviderFactory) {
		if (custom && custom instanceof AppCheckProviderFactory) {
			customProvider = custom;
			FIRAppCheck.setAppCheckProviderFactory(custom.native);
		} else {
			if (!provider) {
				provider = FIRAppCheckProviderFactoryImpl.alloc().init();
			}
			customProvider = undefined;
			FIRAppCheck.setAppCheckProviderFactory(provider);
		}
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
