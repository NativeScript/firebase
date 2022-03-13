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
	#owner: WeakRef<AppCheckProvider>;
	#queue;
	static initWithOwner(owner: WeakRef<AppCheckProvider>) {
		const provider = <FIRAppCheckProviderImpl>FIRAppCheckProviderImpl.new();
		provider.#owner = owner;
		provider.#queue = dispatch_queue_create('FIRAppCheckProviderImpl', null);
		return provider;
	}
	getTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void {
		dispatch_async(this.#queue, () => {
			const callback = (token: { token: string; expirationDate: Date }, error: FirebaseError) => {
				if (token) {
					handler(FIRAppCheckToken.alloc().initWithTokenExpirationDate(token.token, token.expirationDate), null);
				} else {
					handler(null, (error as any).intoNative());
				}
			};
			this.#owner.get?.().getToken?.(callback);
		});
	}
}

@ObjCClass(FIRAppCheckProviderFactory)
@NativeClass
class FIRAppCheckProviderFactoryCustomImpl extends NSObject implements FIRAppCheckProviderFactory {
	#owner: WeakRef<AppCheckProviderFactory>;
	static initWithOwner(owner: WeakRef<AppCheckProviderFactory>) {
		const provider = <FIRAppCheckProviderFactoryCustomImpl>FIRAppCheckProviderFactoryCustomImpl.new();
		provider.#owner = owner;
		return provider;
	}
	createProviderWithApp(app: any): FIRAppCheckProvider {
		return this.#owner.get?.()?.createProvider?.((<any>FirebaseApp).fromNative(app))?.native || null;
	}
}

export abstract class AppCheckProviderFactory {
	#native: FIRAppCheckProviderFactoryCustomImpl;
	constructor() {
		this.#native = FIRAppCheckProviderFactoryCustomImpl.initWithOwner(new WeakRef(this));
	}
	abstract createProvider(app: FirebaseApp): AppCheckProvider;

	get native() {
		return this.#native;
	}
}

export abstract class AppCheckProvider {
	#native: FIRAppCheckProviderImpl;
	constructor() {
		this.#native = FIRAppCheckProviderImpl.initWithOwner(new WeakRef(this));
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
		return this.#native;
	}
}

let provider;
let customProvider: AppCheckProviderFactory;
export class AppCheck implements IAppCheck {
	#native: FIRAppCheck;
	#nativeApp;
	#app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = FIRAppCheck.appCheckWithApp(app.native);
			this.#nativeApp = app.native;
		} else {
			if (defaultAppCheck) {
				return defaultAppCheck;
			}
			defaultAppCheck = this;
			const app = FIRApp.defaultApp();
			this.#native = FIRAppCheck.appCheckWithApp(app);
			this.#nativeApp = app;
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
		return this.#native;
	}
	get ios() {
		return this.native;
	}
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.#nativeApp);
		}
		return this.#app;
	}
}
