import { IUser, IAuth, IAuthSettings, AdditionalUserInfo, ActionCodeInfo, ActionCodeInfoOperation, UserCredential, UserProfileChangeRequest } from './common';
import { Firebase, FirebaseApp } from '@nativescript/firebase-core';

export {AdditionalUserInfo, ActionCodeInfo, ActionCodeInfoOperation, UserCredential, UserProfileChangeRequest};

export declare class UserInfo implements IUserInfo {}

export declare class User implements IUser {
	uid: string;
	displayName: string;
	anonymous: boolean;
	emailVerified: boolean;
	email: string;
	phoneNumber: string;
	provideId: string;
	photoURL: string;
	metadata: any;
	providerData: UserInfo[];
}

export declare class AuthSettings implements IAuthSettings {}

export declare class Auth implements IAuth {
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

	signOut(): boolean;

	useUserAccessGroup(userAccessGroup: string): Promise<void>;

	verifyPasswordResetCode(code: string): Promise<string>;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseAuth {}
}

export interface FirebaseAuth {
	static auth(app?: FirebaseApp): Auth;
}
