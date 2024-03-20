import { Utils } from '@nativescript/core';
import { FirebaseApp, FirebaseError, firebase } from '@nativescript-asharghi/firebase-core';
import { Auth } from '@nativescript-asharghi/firebase-auth';
import { ProviderBase } from './common';
import { Config, IActionCodeSettings, IIdpResponse, IUI } from '.';
let defaultUI: UI;
const fb = firebase();
Object.defineProperty(fb, 'ui', {
	value: (auth?: Auth) => {
		if (!auth) {
			if (!defaultUI) {
				defaultUI = new UI();
			}
			return defaultUI;
		}

		return new UI(auth);
	},
	writable: false,
});

// https://github.com/firebase/FirebaseUI-iOS/blob/master/FirebaseOAuthUI/Sources/FUIOAuth.m

export class GoogleProvider extends ProviderBase {
	constructor() {
		super();
	}

	scopes: string[] = [];

	getNative(ui: UI) {
		if (this.scopes.length > 0) {
			return FUIGoogleAuth.alloc().initWithAuthUIScopes(ui.native, this.scopes);
		} else {
			return FUIGoogleAuth.alloc().initWithAuthUI(ui.native);
		}
	}
}

export class FacebookProvider extends ProviderBase {
	constructor() {
		super();
	}

	permissions: string[] = [];

	getNative(ui: UI) {
		if (this.permissions.length > 0) {
			return FUIFacebookAuth.alloc().initWithAuthUIPermissions(ui.native, this.permissions);
		} else {
			return FUIFacebookAuth.alloc().initWithAuthUI(ui.native);
		}
	}
}

export class TwitterProvider extends ProviderBase {
	constructor() {
		super();
	}

	scopes: string[] = [];

	_setCustomParameters: Record<string, string>;
	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			this._setCustomParameters = params;
		}
		return this;
	}

	getNative(ui: UI) {
		return FUIOAuth.twitterAuthProviderWithAuthUI(ui.native);
	}
}

export class GithubProvider extends ProviderBase {
	constructor() {
		super();
	}

	scopes: string[] = [];

	_setCustomParameters: Record<string, string>;
	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			this._setCustomParameters = params;
		}
		return this;
	}

	getNative(ui: UI) {
		return FUIOAuth.githubAuthProviderWithAuthUI(ui.native);
	}
}

export class ActionCodeSettings implements IActionCodeSettings {
	_native: FIRActionCodeSettings;

	static fromNative(settings: FIRActionCodeSettings) {
		if (settings instanceof FIRActionCodeSettings) {
			const nativeSettings = new ActionCodeSettings();
			nativeSettings._native = settings;
			return nativeSettings;
		}
		return null;
	}

	get androidInstallIfNotAvailable(): boolean {
		return this.native?.androidInstallIfNotAvailable;
	}

	set androidInstallIfNotAvailable(value) {
		if (this.native) {
			this.native.setAndroidPackageNameInstallIfNotAvailableMinimumVersion(this.androidPackageName, value, this.androidMinimumVersion);
		}
	}

	get androidMinimumVersion() {
		return this.native?.androidMinimumVersion;
	}

	set androidMinimumVersion(value) {
		if (this.native) {
			this.native.setAndroidPackageNameInstallIfNotAvailableMinimumVersion(this.androidPackageName, this.androidInstallIfNotAvailable, value);
		}
	}

	get androidPackageName() {
		return this.native?.androidPackageName;
	}

	set androidPackageName(value) {
		if (this.native) {
			this.native.setAndroidPackageNameInstallIfNotAvailableMinimumVersion(value, this.androidInstallIfNotAvailable, this.androidMinimumVersion);
		}
	}

	get dynamicLinkDomain() {
		return this.native.dynamicLinkDomain;
	}

	set dynamicLinkDomain(value) {
		if (this.native) {
			this.native.dynamicLinkDomain = value;
		}
	}

	get handleCodeInApp(): boolean {
		return this.native?.handleCodeInApp;
	}

	set handleCodeInApp(handle) {
		if (this.native) {
			this.native.handleCodeInApp = handle;
		}
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get url() {
		return this.native.URL?.absoluteString;
	}

	get iOSBundleId(): string {
		return this.native?.iOSBundleID;
	}

	set iOSBundleId(id) {
		if (this.native) {
			this.native.setIOSBundleID(id);
		}
	}
}

export class EmailProvider extends ProviderBase {
	constructor() {
		super();
	}

	actionCodeSettings: ActionCodeSettings = null;

	requireName = true;

	_forceSameDevice = false;

	forceSameDevice() {
		this._forceSameDevice = true;
		return this;
	}

	_enableEmailLinkSignIn = false;
	enableEmailLinkSignIn() {
		this._enableEmailLinkSignIn = true;
		return this;
	}

	defaultEmail = '';

	allowNewAccounts = true;

	getNative(ui: UI) {
		if (this.requireName) {
			return FUIEmailAuth.alloc().initAuthAuthUISignInMethodForceSameDeviceAllowNewEmailAccountsRequireDisplayNameActionCodeSetting(ui.native, this.actionCodeSettings ? FIREmailLinkAuthSignInMethod : FIREmailPasswordAuthSignInMethod, this._forceSameDevice, this.allowNewAccounts, this.requireName, this.actionCodeSettings?.native ?? FIRActionCodeSettings.new());
		}
		return FUIEmailAuth.alloc().initAuthAuthUISignInMethodForceSameDeviceAllowNewEmailAccountsActionCodeSetting(ui.native, FIREmailLinkAuthSignInMethod, this._forceSameDevice, this.allowNewAccounts, this.actionCodeSettings?.native ?? FIRActionCodeSettings.new());
	}
}

export class PhoneProvider extends ProviderBase {
	constructor() {
		super();
	}

	defaultNumber = '';

	defaultCountryIso = '';

	blacklistedCountries: string[] = [];

	whitelistedCountries: string[] = [];

	getNative(ui: UI) {
		if (this.blacklistedCountries.length > 0) {
			const countries = NSMutableSet.new<string>();
			this.blacklistedCountries.forEach((country) => {
				countries.addObject(country);
			});
			return FUIPhoneAuth.alloc().initWithAuthUIBlacklistedCountries(ui.native, countries);
		} else if (this.whitelistedCountries.length > 0) {
			const countries = NSMutableSet.new<string>();
			this.whitelistedCountries.forEach((country) => {
				countries.addObject(country);
			});
			return FUIPhoneAuth.alloc().initWithAuthUIWhitelistedCountries(ui.native, countries);
		} else {
			return FUIPhoneAuth.alloc().initWithAuthUI(ui.native);
		}
	}
}

export class AnonymousProvider extends ProviderBase {
	constructor() {
		super();
	}

	getNative(ui: UI) {
		return FUIAnonymousAuth.alloc().initWithAuthUI(ui.native);
	}
}

export class MicrosoftProvider extends ProviderBase {
	constructor() {
		super();
	}

	scopes: string[] = [];

	_setCustomParameters: Record<string, string>;
	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			this._setCustomParameters = params;
		}
		return this;
	}

	getNative(ui: UI) {
		return FUIOAuth.microsoftAuthProviderWithAuthUI(ui.native);
	}
}

export class YahooProvider extends ProviderBase {
	constructor() {
		super();
	}

	scopes: string[] = [];

	_setCustomParameters: Record<string, string>;
	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			this._setCustomParameters = params;
		}
		return this;
	}

	getNative(ui: UI) {
		return FUIOAuth.yahooAuthProviderWithAuthUI(ui.native);
	}
}

export class AppleProvider extends ProviderBase {
	constructor() {
		super();
	}

	scopes: string[] = [];

	_setCustomParameters: Record<string, string>;
	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			this._setCustomParameters = params;
		}
		return this;
	}

	getNative(ui: UI) {
		return FUIOAuth.appleAuthProviderWithAuthUI(ui.native);
	}
}

export class User {
	_native: FIRUser;

	static fromNative(user: FIRUser) {
		if (user instanceof FIRUser) {
			const ret = new User();
			ret._native = user;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get name(): string {
		return this.native.displayName;
	}

	get email(): string {
		return this.native.email;
	}

	get phoneNumber(): string {
		return this.native.phoneNumber;
	}

	get photoUri(): string {
		return this.native.photoURL?.absoluteString;
	}

	get providerId(): string {
		return this.native.providerID;
	}

	toJSON() {
		return {
			name: this.name,
			email: this.email,
			phoneNumber: this.phoneNumber,
			photoUri: this.photoUri,
		};
	}
}

export class IdpResponse {
	_native: FIRAuthDataResult;
	_isOauthCred = false;
	static fromNative(response: FIRAuthDataResult) {
		if (response instanceof FIRAuthDataResult) {
			const ret = new IdpResponse();
			ret._native = response;
			ret._isOauthCred = response.credential instanceof FIROAuthCredential;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get isNewUser(): boolean {
		return this.native.additionalUserInfo?.newUser ?? false;
	}

	get hasCredentialForLinking(): boolean {
		return !!this.native.credential;
	}

	get email(): string {
		return this.native.user.email;
	}

	get idpSecret(): string {
		if (this._isOauthCred) {
			const cred = this.native.credential as FIROAuthCredential;
			return cred.secret;
		}
		return null;
	}

	get idpToken(): string {
		if (this._isOauthCred) {
			const cred = this.native.credential as FIROAuthCredential;
			return cred.accessToken;
		}
		return null;
	}

	get phoneNumber(): string {
		return this.native.user.phoneNumber;
	}

	get providerType(): string {
		return this.native?.credential?.provider ?? null;
	}

	_user: User;
	get user(): User {
		if (!this._user) {
			this._user = User.fromNative(this.native.user);
		}
		return this._user;
	}
}

@NativeClass()
@ObjCClass(FUIAuthDelegate)
class FUIAuthDelegateImpl extends NSObject implements FUIAuthDelegate {
	_owner: WeakRef<UI>;
	_authDataResult: FIRAuthDataResult;
	static initWithOwner(owner: WeakRef<UI>) {
		const delegate = <FUIAuthDelegateImpl>FUIAuthDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	authUIDidSignInWithAuthDataResultError(authUI: FUIAuth, authDataResult: FIRAuthDataResult, error: NSError): void {
		this._authDataResult = authDataResult;
		this._handleAuth(error);
	}

	authUIDidSignInWithAuthDataResultURLError(authUI: FUIAuth, authDataResult: FIRAuthDataResult, url: NSURL, error: NSError): void {
		this._authDataResult = authDataResult;
		this._handleAuth(error);
	}

	_handleAuth(error) {
		const owner = this._owner?.get?.();
		if (!owner._resolve && !owner._reject) {
			return;
		}
		if (error) {
			if (error.code === FUIAuthErrorCode.UserCancelledSignIn) {
				owner._reject(FirebaseError.fromNative(null, 'User Cancelled'));
			} else {
				owner._reject(FirebaseError.fromNative(error));
			}
			// close controller after an error
			owner._controller.dismissViewControllerAnimatedCompletion(true, () => {});
		} else {
			owner._resolve(IdpResponse.fromNative(this._authDataResult));
		}

		owner._reject = null;
		owner._resolve = null;
		owner._controller = null;
		this._authDataResult = null;
	}
}

export class UI implements IUI {
	_native: FUIAuth;
	_auth: Auth;
	_app: FirebaseApp;
	_delegate: FUIAuthDelegateImpl;
	_controller;
	_resolve;
	_reject;

	constructor(auth?: Auth) {
		const native = (auth as any)?.native;
		if (native) {
			this._native = FUIAuth.authUIWithAuth(native);
			this._auth = auth;
		} else {
			if (defaultUI) {
				return defaultUI;
			}
			defaultUI = this;
			this._native = FUIAuth.defaultAuthUI();
		}

		this._delegate = FUIAuthDelegateImpl.initWithOwner(new WeakRef(this));
		this._native.delegate = this._delegate;
	}

	static fromNative(ui: FUIAuth) {
		if (ui instanceof FUIAuth) {
			const ret = new UI();
			ret._native = ui;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (this._auth) {
			return this._auth.app;
		}
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.getApp());
		}
		return this._app;
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulatorWithHostPort(host, port);
	}

	show(config: Config) {
		return new Promise<IIdpResponse>((resolve, reject) => {
			try {
				if (config.providers.length > 0) {
					const providers = config.providers
						.map((provider) => {
							return provider.getNative(this);
						})
						.filter((value) => !!value);
					this.native.providers = providers as any;
				}

				if (config.anonymousUsersAutoUpgrade) {
					this.native.autoUpgradeAnonymousUsers = true;
				} else {
					this.native.autoUpgradeAnonymousUsers = false;
				}

				if (config.tosAndPrivacyPolicy?.tos && config.tosAndPrivacyPolicy?.privacyPolicy) {
					this.native.TOSURL = NSURL.URLWithString(config.tosAndPrivacyPolicy?.tos);
					this.native.privacyPolicyURL = NSURL.URLWithString(config.tosAndPrivacyPolicy?.privacyPolicy);
				}

				this._resolve = resolve;
				this._reject = reject;

				const keyWindow = UIApplication.sharedApplication.keyWindow;
				const vc = keyWindow != null ? keyWindow.rootViewController : undefined;
				const controller = Utils.ios.getVisibleViewController(vc) as UIViewController;
				this._controller = this.native.authViewController();
				controller.presentViewControllerAnimatedCompletion(this._controller, true, () => {});
			} catch (error) {
				reject(new FirebaseError(error?.message || 'Failed to show UI'));
				this._resolve = null;
				this._reject = null;
			}
		});
	}

	delete() {
		return new Promise<void>((resolve, reject) => {
			if (this._auth) {
				const currentUser = this._auth.currentUser;
				if (!currentUser) {
					reject(new FirebaseError('No user is currently logged in.'));
					return;
				}
				return this._auth.currentUser.delete();
			}
			const auth = FIRAuth.authWithApp(this.app.native);
			const currentUser = auth.currentUser;
			if (!currentUser) {
				reject(new FirebaseError('No user is currently logged in.'));
				return;
			}

			currentUser.deleteWithCompletion((error) => {
				if (!error) {
					const err = FirebaseError.fromNative(error);
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	signOut() {
		return new Promise<void>((resolve, reject) => {
			try {
				this.native.signOutWithError();
				resolve();
			} catch (error) {
				reject(FirebaseError.fromNative(error.message));
			}
		});
	}
}
