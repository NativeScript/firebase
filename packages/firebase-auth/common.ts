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

export interface IAuthTokenResult {
	authDate: Date;
	claims: Record<string, any>;
	expirationDate: Date;
	issuedAtDate: Date;
	signInProvider: string;
	token: string;
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
	delete(): Promise<void>;
	getIdToken(forceRefresh?: undefined | false | true): Promise<string>;
	getIdTokenResult(forceRefresh?: undefined | false | true): Promise<IAuthTokenResult>;
	linkWithCredential(credential: IAuthCredential): Promise<UserCredential>;
	reauthenticateWithCredential(credential: IAuthCredential): Promise<UserCredential>;
	reload(): Promise<void>;
	sendEmailVerification(actionCodeSettings?: IActionCodeSettings): Promise<void>;
	unlink(providerId: string): Promise<IUser>;
	updateEmail(email: string): Promise<void>;
	updatePassword(password: string): Promise<void>;
	updatePhoneNumber(credential: IAuthCredential): Promise<void>;
	updateProfile(updates: UserProfileChangeRequest): Promise<void>;
	verifyBeforeUpdateEmail(email: string, actionCodeSettings?: IActionCodeSettings): Promise<void>;
}
export interface IAuthSettings {
	appVerificationDisabledForTesting: boolean;
}

export interface ActionCodeInfoData {
	email: string;
	previousEmail: string;
}

export enum ActionCodeInfoOperation {
	Unknown = 'Unknown',
	PasswordReset = 'PasswordReset',
	VerifyEmail = 'VerifyEmail',
	RecoverEmail = 'RecoverEmail',
	EmailLink = 'EmailLink',
	VerifyAndChangeEmail = 'VerifyAndChangeEmail',
	RevertSecondFactorAddition = 'RevertSecondFactorAddition',
}
export interface ActionCodeInfo {
	data: ActionCodeInfoData;
	operation: ActionCodeInfoOperation;
}

export interface AdditionalUserInfo {
	newUser: boolean;
	profile: Record<string, any>;
	providerId: string;
	username: string;
}

export interface UserCredential {
	additionalUserInfo: AdditionalUserInfo;
	user: IUser;
	credential: IAuthCredential;
}
export interface IAuthCredential {
	readonly provider: string;
	readonly signInMethod: string;
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

export interface OAuthCredentialOptions {
	accessToken?: string;
	idToken?: string;
	rawNonce?: string;
}

export interface IOAuthCredential extends IAuthCredential {
	readonly idToken: string;
	readonly accessToken: string;
	readonly secret: string;
}

export interface IPhoneAuthCredential extends IAuthCredential {}

export interface UserProfileChangeRequest {
	displayName?: string;
	photoUri?: string;
}

export interface IAuth {
	readonly app: FirebaseApp;
	readonly user: IUser;
	readonly languageCode: string;
	readonly settings: IAuthSettings;
	readonly tenantId: string;

  useEmulator(host: string, port: number);
	applyActionCode(code: string): Promise<void>;
	checkActionCode(code: string): Promise<ActionCodeInfo>;
	confirmPasswordReset(code: string, newPassword: string): Promise<void>;
	createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential>;
	fetchSignInMethodsForEmail(email: string): Promise<string[]>;
	isSignInWithEmailLink(emailLink: string): boolean;
	addAuthStateChangeListener(listener: (user: IUser) => void);
	removeAuthStateChangeListener(listener: (user: IUser) => void);
	addIdTokenChangeListener(listener: (user: IUser) => void);
	removeIdTokenChangListener(listener: (user: IUser) => void);
	sendPasswordResetEmail(email: string, actionCodeSettings?: IActionCodeSettings): Promise<void>;
	sendSignInLinkToEmail(email: string, actionCodeSettings?: IActionCodeSettings): Promise<void>;
	signInAnonymously(): Promise<UserCredential>;
	signInWithCredential(credential: IAuthCredential): Promise<UserCredential>;
	signInWithCustomToken(customToken: string): Promise<UserCredential>;
	signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential>;
	signInWithEmailLink(email: string, emailLink: string): Promise<UserCredential>;
	signOut();
	useUserAccessGroup(userAccessGroup: string): Promise<void>;
	verifyPasswordResetCode(code: string): Promise<string>;
}
