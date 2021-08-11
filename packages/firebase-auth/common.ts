import { FirebaseApp } from '@nativescript/firebase-core';

export interface IUserMetadata {
	creationDate: Date;
	lastSignInDate: Date;
}

export interface IUserInfo {
	uid: string;
	displayName: string;
	email: string;
	phoneNumber: string;
	photoURL: string;
	providerId: string;
}

export interface IUser {
	uid: string;
	displayName: string;
	anonymous: boolean;
	emailVerified: boolean;
	email: string;
	phoneNumber: string;
	provideId: string;
	photoURL: string;
	metadata: any;
	providerData: any;
}
export interface IAuthSettings {
	appVerificationDisabledForTesting: boolean;
}

export interface IAuth {
	readonly app: FirebaseApp;
	readonly user: IUser;
	readonly languageCode: string;
	readonly settings: IAuthSettings;
	readonly tenantId: string;

	applyActionCode(code: string): Promise<void>;
}
