import { FirebaseApp } from '@nativescript/firebase-core';
import { IAuthSettings, IAuth, IUser, IUserInfo, IUserMetadata } from './common';

declare const FIRApp;

export class UserMetadata implements IUserMetadata {
	#native: FIRUserMetadata;
	static fromNative(metadata: FIRUserMetadata) {
		if (metadata instanceof FIRUserMetadata) {
			const meta = new UserMetadata();
			meta.#native = metadata;
			return meta;
		}
		return null;
	}
	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
	get creationDate(): Date {
		return this.native?.creationDate;
	}
	get lastSignInDate(): Date {
		return this.native.lastSignInDate;
	}
}

export class UserInfo implements IUserInfo {
	#native: FIRUserInfo;
	static fromNative(info: FIRUserInfo) {
		if (info) {
			const nativeInfo = new UserInfo();
			nativeInfo.#native = info;
		}
		return null;
	}
	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
	get uid(): string {
		return this.native?.uid;
	}
	get displayName(): string {
		return this.native?.displayName;
	}
	get email(): string {
		return this.native?.email;
	}
	get phoneNumber(): string {
		return this.native?.phoneNumber;
	}
	get photoURL(): string {
		return this.native?.photoURL?.absoluteString;
	}
	get providerId(): string {
		return this.native?.providerID;
	}
}

export class User implements IUser {
	#native: FIRUser;
	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
	static fromNative(user: FIRUser) {
		if (user instanceof FIRUser) {
			const usr = new User();
			usr.#native = user;
			return usr;
		}
		return null;
	}

	get displayName(): string {
		return this.native?.displayName;
	}

	get anonymous() {
		return this.native?.anonymous;
	}

	get emailVerified(): boolean {
		return this.native?.emailVerified;
	}

	get email(): string {
		return this.native?.email;
	}

	get uid(): string {
		return this.native?.uid;
	}
	get phoneNumber(): string {
		return this.native?.phoneNumber;
	}
	get provideId(): string {
		return this.native?.providerID;
	}
	get photoURL(): string {
		return this.native?.photoURL.absoluteString;
	}
	get metadata(): any {
		return this.native?.metadata;
	}
	get providerData(): any {
		const providerData = this.native.providerData;
		const count = providerData.count;
		const data = [];
		for (let i = 0; i < count; i++) {
			data.push(UserInfo.fromNative(providerData.objectAtIndex(i)));
		}
		return data;
	}
}

export class AuthSettings implements IAuthSettings {
	#native: FIRAuthSettings;
	static fromNative(settings: FIRAuthSettings) {
		if (settings instanceof FIRAuthSettings) {
			const nativeSettings = new AuthSettings();
			nativeSettings.#native = settings;
			return nativeSettings;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	set appVerificationDisabledForTesting(value) {
		if (this.native) {
			this.native.appVerificationDisabledForTesting = value;
		}
	}

	get appVerificationDisabledForTesting() {
		return this.native?.appVerificationDisabledForTesting;
	}
}

export class Auth implements IAuth {
	#native: FIRAuth;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = FIRAuth.authWithApp(app.native);
		} else {
			this.#native = FIRAuth.authWithApp(FIRApp.defaultApp());
		}
	}
	applyActionCode(code: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.native) {
				this.native.applyActionCodeCompletion(code, (error) => {
					if (!error) {
						resolve();
					} else {
						reject(error.localizedDescription);
					}
				});
			} else {
				reject();
			}
		});
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
	#app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
	#user: User;
	get user(): User {
		if (!this.#user) {
			this.#user = User.fromNative(this.native.currentUser);
		}
		return this.#user;
	}
	get languageCode(): string {
		return this.native.languageCode;
	}
	#settings: AuthSettings;
	get settings(): AuthSettings {
		if (!this.#settings) {
			this.#settings = AuthSettings.fromNative(this.native.settings);
		}
		return this.#settings;
	}
	get tenantId(): string {
		return this.native.tenantID;
	}
}
