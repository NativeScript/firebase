import { FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { ProviderBase } from './common';
export interface IProvider {
	getNative(ui: UI): any;
}

export class GoogleProvider extends ProviderBase {
	constructor();
	scopes: string[];
	readonly native;
}

export class FacebookProvider extends ProviderBase {
	constructor();
	permissions: string[];
	readonly native;
}

export class TwitterProvider extends ProviderBase {
	constructor();
	scopes: string[];
	readonly native;
}

export class GithubProvider extends ProviderBase {
	constructor();
	scopes: string[];
	setCustomParameters(params: Record<string, string>): this;
	readonly native;
}

export declare class ActionCodeSettings implements IActionCodeSettings {
	readonly native;
	readonly ios;
	readonly android;

	url: string;
	androidInstallIfNotAvailable: boolean;
	androidMinimumVersion: string;
	androidPackageName: string;
	dynamicLinkDomain: string;
	handleCodeInApp: boolean;
	iOSBundleId: string;
}

export class EmailProvider extends ProviderBase {
	constructor();

	actionCodeSettings: ActionCodeSettings;

	requireName: boolean;
	forceSameDevice(): this;
	enableEmailLinkSignIn(): this;

	defaultEmail: string;

	allowNewAccounts: boolean;

	readonly native: any;
}

export class PhoneProvider extends ProviderBase {
	constructor();

	defaultNumber: string;

	defaultCountryIso: string;

	blacklistedCountries: string[];

	whitelistedCountries: string[];

	readonly native;
}

export class AnonymousProvider extends ProviderBase {
	constructor();
	readonly native;
}

export class MicrosoftProvider extends ProviderBase {
	constructor();

	scopes: string[];

	setCustomParameters(params: Record<string, string>): this;

	readonly native;
}

export class YahooProvider extends ProviderBase {
	constructor();

	scopes: string[];

	setCustomParameters(params: Record<string, string>): this;

	readonly native;
}

export class AppleProvider extends ProviderBase {
	constructor();

	scopes: string[];

	setCustomParameters(params: Record<string, string>): this;

	readonly native;
}

export interface Config {
	providers: IProvider[];
	anonymousUsersAutoUpgrade?: boolean;
	emailLink?: string;
	resetPasswordSettings?: IActionCodeSettings;
	theme?: number; // Android only
	lockOrientation?: boolean;
	tosAndPrivacyPolicy?: {
		tos: string;
		privacyPolicy: string;
	};

	alwaysShowSignInMethodScreen?: boolean;
}

export interface IActionCodeSettings {
	readonly url: string;
	readonly androidInstallIfNotAvailable: boolean;
	readonly androidMinimumVersion: string;
	readonly androidPackageName: string;
	readonly dynamicLinkDomain: string;
	readonly handleCodeInApp: boolean;
	readonly iOSBundleId: string;
}

export interface IUI {
	useEmulator(host: string, port: number);

	show(config: Config): Promise<any>;

	delete(): Promise<void>;

	signOut(): Promise<void>;
}

export interface IUser {
	readonly name: string;

	readonly email: string;

	readonly phoneNumber: string;

	readonly photoUri: string;

	readonly providerId: string;
}

export class User implements IUser {
	readonly native;

	readonly android;

	readonly ios;

	readonly name: string;

	readonly email: string;

	readonly phoneNumber: string;

	readonly photoUri: string;

	readonly providerId: string;
}

export interface IIdpResponse {
	readonly native;

	readonly android;

	readonly ios;

	readonly isNewUser: boolean;

	readonly hasCredentialForLinking: boolean;

	readonly email: string;

	readonly idpSecret: string;

	readonly idpToken: string;

	readonly phoneNumber: string;

	readonly providerType: string;

	readonly user: User;
}

export class IdpResponse implements IIdpResponse {
	readonly native;

	readonly android;

	readonly ios;

	readonly isNewUser: boolean;

	readonly hasCredentialForLinking: boolean;

	readonly email: string;

	readonly idpSecret: string;

	readonly idpToken: string;

	readonly phoneNumber: string;

	readonly providerType: string;

	readonly user: User;
}

export class UI implements IUI {
	readonly native;
	readonly android?;
	readonly ios?;
	readonly app: FirebaseApp;

	constructor(app?: FirebaseApp);

	useEmulator(host: string, port: number);

	show(config: Config): Promise<IdpResponse>;

	delete(): Promise<void>;

	signOut(): Promise<void>;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseUI {}
}

export interface FirebaseUI {
	static ui(app?: FirebaseApp): UI;
}
