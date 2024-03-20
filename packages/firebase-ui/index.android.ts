import { Application, Utils } from '@nativescript/core';
import { FirebaseApp, FirebaseError, firebase } from '@nativescript-asharghi/firebase-core';
import { ProviderBase } from './common';
import { Config, IActionCodeSettings, IIdpResponse, IUI } from '.';
import { Auth } from '@nativescript-asharghi/firebase-auth';
declare const org;
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

export class GoogleProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.GoogleBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.GoogleBuilder();
	}

	_scopes: string[] = [];
	get scopes() {
		return this._scopes;
	}

	set scopes(values: string[]) {
		if (Array.isArray(values)) {
			this._scopes = values;
			const scopes = new java.util.ArrayList<string>();
			this._scopes.forEach((scope) => {
				scopes.add(scope);
			});
			this._builder.setScopes(scopes);
		}
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class FacebookProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.FacebookBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.FacebookBuilder();
	}

	_permissions: string[] = [];
	get permissions() {
		return this._permissions;
	}

	set permissions(values: string[]) {
		if (Array.isArray(values)) {
			this._permissions = values;
			const permissions = new java.util.ArrayList<string>();
			this._permissions.forEach((scope) => {
				permissions.add(scope);
			});
			this._builder.setPermissions(permissions);
		}
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class TwitterProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.TwitterBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.TwitterBuilder();
	}

	_scopes: string[] = [];
	get scopes() {
		return this._scopes;
	}

	set scopes(values: string[]) {
		if (Array.isArray(values)) {
			this._scopes = values;
			const scopes = new java.util.ArrayList<string>();
			this._scopes.forEach((scope) => {
				scopes.add(scope);
			});
			this._builder.setScopes(scopes);
		}
	}

	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			const parameters = new java.util.HashMap<string, string>();
			Object.keys(params).forEach((key) => {
				const value = params[key];
				parameters.put(key, value);
			});
			this._builder.setCustomParameters(parameters);
		}
		return this;
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class GithubProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.GitHubBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.GitHubBuilder();
	}

	_scopes: string[] = [];
	get scopes() {
		return this._scopes;
	}

	set scopes(values: string[]) {
		if (Array.isArray(values)) {
			this._scopes = values;
			const scopes = new java.util.ArrayList<string>();
			this._scopes.forEach((scope) => {
				scopes.add(scope);
			});
			this._builder.setScopes(scopes);
		}
	}

	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			const parameters = new java.util.HashMap<string, string>();
			Object.keys(params).forEach((key) => {
				const value = params[key];
				parameters.put(key, value);
			});
			this._builder.setCustomParameters(parameters);
		}
		return this;
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class ActionCodeSettings implements IActionCodeSettings {
	_native: com.google.firebase.auth.ActionCodeSettings.Builder;

	constructor() {
		this._native = new com.google.firebase.auth.ActionCodeSettings.Builder();
	}

	get native() {
		return this._native
			.setUrl(this.url || '')
			.setIOSBundleId(this.iOSBundleId || '')
			.setHandleCodeInApp(this.handleCodeInApp || false)
			.setDynamicLinkDomain(this.dynamicLinkDomain || '')
			.setAndroidPackageName(this.androidPackageName || '', this.androidInstallIfNotAvailable || false, this.androidMinimumVersion || '')
			.build();
	}

	get android() {
		return this.native;
	}

	url: string;
	androidInstallIfNotAvailable: boolean;
	androidMinimumVersion: string;
	androidPackageName: string;
	dynamicLinkDomain: string;
	handleCodeInApp: boolean;
	iOSBundleId: string;
}

export class EmailProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder();
	}

	_actionCodeSettings: ActionCodeSettings = null;

	set actionCodeSettings(value: ActionCodeSettings) {
		this._actionCodeSettings = value;
		this._builder.setActionCodeSettings(value?.native);
	}

	get actionCodeSettings(): ActionCodeSettings | null {
		return this._actionCodeSettings;
	}

	_requireName: boolean = true;
	get requireName(): boolean {
		return this._requireName;
	}

	set requireName(isRequired: boolean) {
		this._requireName = isRequired;
		this._builder.setRequireName(isRequired);
	}

	forceSameDevice() {
		this._builder.setForceSameDevice();
		return this;
	}
	enableEmailLinkSignIn() {
		this._builder.enableEmailLinkSignIn();
		return this;
	}

	_defaultEmail: string = '';

	get defaultEmail(): string {
		return this._defaultEmail;
	}

	set defaultEmail(value: string) {
		this._defaultEmail = value;
		this._builder.setDefaultEmail(value);
	}

	_allowNewAccounts: boolean = true;

	set allowNewAccounts(allow: boolean) {
		this._allowNewAccounts = allow;
		this._builder.setAllowNewAccounts(allow);
	}

	get allowNewAccounts(): boolean {
		return this._allowNewAccounts;
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class PhoneProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder();
		this._builder.setDefaultNumber;
	}

	_defaultNumber: string = '';

	get defaultNumber(): string {
		return this._defaultNumber;
	}

	set defaultNumber(value: string) {
		this._defaultNumber = value;
		this._builder.setDefaultNumber(value);
	}

	_defaultCountryIso: string = '';

	get defaultCountryIso(): string {
		return this._defaultCountryIso;
	}

	set defaultCountryIso(value: string) {
		this._defaultCountryIso = value;
		this._builder.setDefaultCountryIso(value);
	}

	_blacklistedCountries: string[] = [];
	get blacklistedCountries() {
		return this._blacklistedCountries;
	}

	set blacklistedCountries(values: string[]) {
		if (Array.isArray(values)) {
			this._blacklistedCountries = values;
			const countries = new java.util.ArrayList<string>();
			this._blacklistedCountries.forEach((country) => {
				countries.add(country);
			});
			this._builder.setBlacklistedCountries(countries);
		}
	}

	_whitelistedCountries: string[] = [];
	get whitelistedCountries() {
		return this._whitelistedCountries;
	}

	set whitelistedCountries(values: string[]) {
		if (Array.isArray(values)) {
			this._whitelistedCountries = values;
			const countries = new java.util.ArrayList<string>();
			this._whitelistedCountries.forEach((country) => {
				countries.add(country);
			});
			this._builder.setWhitelistedCountries(countries);
		}
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class AnonymousProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.AnonymousBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.AnonymousBuilder();
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class MicrosoftProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.MicrosoftBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.MicrosoftBuilder();
	}

	_scopes: string[] = [];
	get scopes() {
		return this._scopes;
	}

	set scopes(values: string[]) {
		if (Array.isArray(values)) {
			this._scopes = values;
			const scopes = new java.util.ArrayList<string>();
			this._scopes.forEach((scope) => {
				scopes.add(scope);
			});
			this._builder.setScopes(scopes);
		}
	}

	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			const parameters = new java.util.HashMap<string, string>();
			Object.keys(params).forEach((key) => {
				const value = params[key];
				parameters.put(key, value);
			});
			this._builder.setCustomParameters(parameters);
		}
		return this;
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class YahooProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.YahooBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.YahooBuilder();
	}

	_scopes: string[] = [];
	get scopes() {
		return this._scopes;
	}

	set scopes(values: string[]) {
		if (Array.isArray(values)) {
			this._scopes = values;
			const scopes = new java.util.ArrayList<string>();
			this._scopes.forEach((scope) => {
				scopes.add(scope);
			});
			this._builder.setScopes(scopes);
		}
	}

	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			const parameters = new java.util.HashMap<string, string>();
			Object.keys(params).forEach((key) => {
				const value = params[key];
				parameters.put(key, value);
			});
			this._builder.setCustomParameters(parameters);
		}
		return this;
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class AppleProvider extends ProviderBase {
	_builder: com.firebase.ui.auth.AuthUI.IdpConfig.AppleBuilder;
	constructor() {
		super();
		this._builder = new com.firebase.ui.auth.AuthUI.IdpConfig.AppleBuilder();
	}

	_scopes: string[] = [];
	get scopes() {
		return this._scopes;
	}

	set scopes(values: string[]) {
		if (Array.isArray(values)) {
			this._scopes = values;
			const scopes = new java.util.ArrayList<string>();
			this._scopes.forEach((scope) => {
				scopes.add(scope);
			});
			this._builder.setScopes(scopes);
		}
	}

	setCustomParameters(params: Record<string, string>) {
		if (typeof params === 'object') {
			const parameters = new java.util.HashMap<string, string>();
			Object.keys(params).forEach((key) => {
				const value = params[key];
				parameters.put(key, value);
			});
			this._builder.setCustomParameters(parameters);
		}
		return this;
	}

	getNative(ui: IUI) {
		return this._builder.build();
	}
}

export class User {
	_native: com.firebase.ui.auth.data.model.User;

	static fromNative(user: com.firebase.ui.auth.data.model.User) {
		if (user instanceof com.firebase.ui.auth.data.model.User) {
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
		return this.native.getName();
	}

	get email(): string {
		return this.native.getEmail();
	}

	get phoneNumber(): string {
		return this.native.getPhoneNumber();
	}

	get photoUri(): string {
		return this.native.getPhotoUri()?.toString?.();
	}

	get providerId(): string {
		return this.native.getProviderId();
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
	_native: com.firebase.ui.auth.IdpResponse;
	static fromNative(response: com.firebase.ui.auth.IdpResponse) {
		if (response instanceof com.firebase.ui.auth.IdpResponse) {
			const ret = new IdpResponse();
			ret._native = response;
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
		return this.native.isNewUser();
	}

	get hasCredentialForLinking(): boolean {
		return this.native.hasCredentialForLinking();
	}

	get email(): string {
		return this.native.getEmail();
	}

	get idpSecret(): string {
		return this.native.getIdpSecret();
	}

	get idpToken(): string {
		return this.native.getIdpToken();
	}

	get phoneNumber(): string {
		return this.native.getPhoneNumber();
	}

	get providerType(): string {
		return this.native.getProviderType();
	}

	_user: User;
	get user(): User {
		if (!this._user) {
			this._user = User.fromNative(this.native.getUser());
		}
		return this._user;
	}
}

let lastActivity: WeakRef<androidx.appcompat.app.AppCompatActivity>;
let signInLauncher: androidx.activity.result.ActivityResultLauncher<android.content.Intent>;
let _launcherResolve;
let _launcherReject;
function register(args: any) {
	if (!lastActivity) {
		// Some activities do not implement activity result API
		if (args.activity.registerForActivityResult) {
			lastActivity = new WeakRef(args.activity);
			signInLauncher = args.activity.registerForActivityResult(
				new com.firebase.ui.auth.FirebaseAuthUIActivityResultContract(),
				new androidx.activity.result.ActivityResultCallback<com.firebase.ui.auth.data.model.FirebaseAuthUIAuthenticationResult>({
					onActivityResult(result) {
						const code = result.getResultCode();
						if ((code?.intValue() || code === java.lang.Integer.valueOf(android.app.Activity.RESULT_OK)) === android.app.Activity.RESULT_OK) {
							const response = result.getIdpResponse();
							if (response.isSuccessful()) {
								_launcherResolve(IdpResponse.fromNative(response));
							} else {
								_launcherReject(FirebaseError.fromNative(response.getError()));
							}
						} else {
							_launcherReject(FirebaseError.fromNative(null, 'User Cancelled'));
						}

						_launcherResolve = null;
						_launcherReject = null;
					},
				})
			);
		} else {
			Application.android.once('activityCreated', register);
		}
	}
}

Application.android.once('activityCreated', register);

Application.android.on('activityDestroyed', (args) => {
	const activity = lastActivity?.get?.();
	if (activity && args.activity === activity) {
		signInLauncher?.unregister?.();
		lastActivity = undefined;
		Application.android.once('activityCreated', register);
	}
});

function getResourceId(res: string = '') {
	const context = Utils.android.getApplicationContext();
	if (!context) return java.lang.Integer.valueOf(0);
	if (typeof res === 'string' && res.startsWith('res://')) {
		const packageName = context.getPackageName();
		try {
			const className = java.lang.Class.forName(`${packageName}.R$drawable`);
			return java.lang.Integer.valueOf(parseInt(String(className.getDeclaredField(res.replace('res://', '')).get(null))));
		} catch (e) {
			return java.lang.Integer.valueOf(0);
		}
	}
	return java.lang.Integer.valueOf(0);
}

export class UI implements IUI {
	_native: com.firebase.ui.auth.AuthUI;
	_auth: Auth;
	_app: FirebaseApp;

	constructor(auth?: Auth) {
		if (auth?.app) {
			this._native = com.firebase.ui.auth.AuthUI.getInstance(auth.app.native);
			this._auth = auth;
		} else {
			if (defaultUI) {
				return defaultUI;
			}
			defaultUI = this;
			this._native = com.firebase.ui.auth.AuthUI.getInstance();
		}
	}

	static fromNative(ui: com.firebase.ui.auth.AuthUI) {
		if (ui instanceof com.firebase.ui.auth.AuthUI) {
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
		this.native.useEmulator(host === 'localhost' || host === '127.0.0.1' ? '10.0.2.2' : host, port);
	}

	show(config: Config) {
		return new Promise<IIdpResponse>((resolve, reject) => {
			try {
				const builder = this.native.createSignInIntentBuilder();
				if (config.providers.length > 0) {
					const providers = new java.util.ArrayList();
					config.providers.forEach((provider) => {
						providers.add(provider.getNative(this));
					});
					builder.setAvailableProviders(providers);
				}

				if (config.anonymousUsersAutoUpgrade) {
					builder.enableAnonymousUsersAutoUpgrade();
				}
				if (config.emailLink) {
					builder.setEmailLink(config.emailLink);
				}

				if (config.resetPasswordSettings) {
					builder.setResetPasswordSettings((config.resetPasswordSettings as ActionCodeSettings).native);
				}

				if (typeof config.theme === 'number') {
					builder.setTheme(config.theme);
				}

				if (typeof config.lockOrientation === 'boolean') {
					builder.setLockOrientation(config.lockOrientation);
				}

				if (config.tosAndPrivacyPolicy?.tos && config.tosAndPrivacyPolicy?.privacyPolicy) {
					builder.setTosAndPrivacyPolicyUrls(config.tosAndPrivacyPolicy?.tos, config.tosAndPrivacyPolicy?.privacyPolicy);
				}
				if (config.alwaysShowSignInMethodScreen) {
					builder.setAlwaysShowSignInMethodScreen(config.alwaysShowSignInMethodScreen);
				}

				const intent = builder.build();
				_launcherResolve = resolve;
				_launcherReject = reject;
				signInLauncher.launch(intent);
			} catch (error) {
				reject(new FirebaseError(error?.message || 'Failed to show UI'));
				_launcherResolve = null;
				_launcherReject = null;
			}
		});
	}

	delete() {
		return new Promise<void>((resolve, reject) => {
			org.nativescript.firebase.ui.FirebaseUI.delete(
				this.native,
				lastActivity.get(),
				new org.nativescript.firebase.ui.FirebaseUI.Callback({
					onSuccess() {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}

	signOut() {
		return new Promise<void>((resolve, reject) => {
			org.nativescript.firebase.ui.FirebaseUI.signOut(
				this.native,
				lastActivity.get(),
				new org.nativescript.firebase.ui.FirebaseUI.Callback({
					onSuccess() {
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						reject(err);
					},
				})
			);
		});
	}
}
