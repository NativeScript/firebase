import { IUser, IAuth, IAuthSettings } from './common';

export declare class UserInfo implements IUserInfo {}

export declare class User implements IUser {}

export declare class AuthSettings implements IAuthSettings {}

export declare class Auth implements IAuth {
	readonly app: FirebaseApp;
	readonly user: IUser;
	readonly languageCode: string;
	readonly settings: IAuthSettings;
	readonly tenantId: string;
}

declare module '@nativescript/firebase-core' {
	class Firebase {
		static auth(app?: FirebaseApp): Auth;
	}
}
