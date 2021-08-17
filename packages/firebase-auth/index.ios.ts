import { FirebaseApp, Firebase, deserialize } from '@nativescript/firebase-core';
import { IAuthSettings, IAuth, IUser, IUserInfo, IUserMetadata, ActionCodeInfo, ActionCodeInfoOperation, UserCredential, AdditionalUserInfo, IAuthCredential, IActionCodeSettings, OAuthCredentialOptions, IOAuthCredential, IAuthTokenResult, IPhoneAuthCredential, UserProfileChangeRequest } from './common';

declare const FIRApp;

Firebase.auth = (app?: FirebaseApp) => {
	return new Auth(app);
};

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
		return this.native?.photoURL?.absoluteString;
	}
	get metadata(): any {
		return UserMetadata.fromNative(this.native?.metadata);
	}
	get providerData(): UserInfo[] {
		const providerData = this.native.providerData;
		const count = providerData.count;
		const data = [];
		for (let i = 0; i < count; i++) {
			data.push(UserInfo.fromNative(providerData.objectAtIndex(i)));
		}
		return data;
	}

	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native?.deleteWithCompletion((error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	getIdToken(forceRefresh?: boolean): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				if (typeof forceRefresh === 'boolean') {
					this.native.getIDTokenForcingRefreshCompletion(forceRefresh, (idToken, error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve(idToken);
						}
					});
				} else {
					this.native.getIDTokenWithCompletion((idToken, error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve(idToken);
						}
					});
				}
			}
		});
	}
	getIdTokenResult(forceRefresh?: boolean): Promise<IAuthTokenResult> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				if (typeof forceRefresh === 'boolean') {
					this.native.getIDTokenResultForcingRefreshCompletion(forceRefresh, (idToken, error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve(AuthTokenResult.fromNative(idToken));
						}
					});
				} else {
					this.native.getIDTokenResultWithCompletion((idToken, error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve(AuthTokenResult.fromNative(idToken));
						}
					});
				}
			}
		});
	}

	linkWithCredential(credential: AuthCredential): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.linkWithCredentialCompletion(credential.native, (result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}
	reauthenticateWithCredential(credential: AuthCredential): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.reauthenticateWithCredentialCompletion(credential.native, (result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}
	reload(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.reloadWithCompletion((error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	sendEmailVerification(actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				if (actionCodeSettings) {
					this.native.sendEmailVerificationWithActionCodeSettingsCompletion(actionCodeSettings.native, (error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve();
						}
					});
				} else {
					this.native.sendEmailVerificationWithCompletion((error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve();
						}
					});
				}
			}
		});
	}

	unlink(providerId: string): Promise<User> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.unlinkFromProviderCompletion(providerId, (user, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(User.fromNative(user));
					}
				});
			}
		});
	}

	updateEmail(email: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.updateEmailCompletion(email, (error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	updatePassword(password: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.updatePasswordCompletion(password, (error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	updatePhoneNumber(credential: PhoneAuthCredential): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.updatePhoneNumberCredentialCompletion(credential.native, (error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	updateProfile(profile: UserProfileChangeRequest): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				const request = this.native.profileChangeRequest();

				if (profile.displayName) {
					request.displayName = profile.displayName;
				}
				if (profile.photoUri) {
					try {
						request.photoURL = NSURL.URLWithString(profile.photoUri);
					} catch (e) {}
				}

				request.commitChangesWithCompletion((error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	verifyBeforeUpdateEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				if (actionCodeSettings) {
					this.native.sendEmailVerificationBeforeUpdatingEmailActionCodeSettingsCompletion(email, actionCodeSettings.native, (error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve();
						}
					});
				} else {
					this.native.sendEmailVerificationBeforeUpdatingEmailCompletion(email, (error) => {
						if (error) {
							reject({
								message: error.localizedDescription,
								native: error,
							});
						} else {
							resolve();
						}
					});
				}
			}
		});
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

function toActionCodeOperation(operation: FIRActionCodeOperation) {
	switch (operation) {
		case FIRActionCodeOperation.Unknown:
			return ActionCodeInfoOperation.Unknown;
		case FIRActionCodeOperation.PasswordReset:
			return ActionCodeInfoOperation.PasswordReset;
		case FIRActionCodeOperation.VerifyEmail:
			return ActionCodeInfoOperation.VerifyEmail;
		case FIRActionCodeOperation.RecoverEmail:
			return ActionCodeInfoOperation.RecoverEmail;
		case FIRActionCodeOperation.EmailLink:
			return ActionCodeInfoOperation.EmailLink;
		case FIRActionCodeOperation.VerifyAndChangeEmail:
			return ActionCodeInfoOperation.VerifyAndChangeEmail;
		case FIRActionCodeOperation.RevertSecondFactorAddition:
			return ActionCodeInfoOperation.RevertSecondFactorAddition;
	}
}

function toUserCredential(authData: FIRAuthDataResult): UserCredential {
	return {
		additionalUserInfo: {
			newUser: authData.additionalUserInfo.newUser,
			providerId: authData.additionalUserInfo.providerID,
			username: authData.additionalUserInfo.username,
			profile: deserialize(authData.additionalUserInfo.profile),
		},
		user: User.fromNative(authData.user),
		credential: authData.credential instanceof FIROAuthCredential ? OAuthCredential.fromNative(authData.credential) : AuthCredential.fromNative(authData.credential),
	};
}

export class ActionCodeSettings implements IActionCodeSettings {
	#native: FIRActionCodeSettings;

	static fromNative(settings: FIRActionCodeSettings) {
		if (settings instanceof FIRActionCodeSettings) {
			const nativeSettings = new ActionCodeSettings();
			nativeSettings.#native = settings;
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
		return this.#native;
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

export class AuthCredential implements IAuthCredential {
	signInMethod: string;
	protected _native: FIRAuthCredential;

	static fromNative(credential: FIRAuthCredential) {
		if (credential instanceof FIRAuthCredential) {
			const nativeCredential = new AuthCredential();
			nativeCredential._native = credential;
			return nativeCredential;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get provider(): string {
		return this.native?.provider;
	}
}

export class EmailAuthProvider {
	static credential(email: string, password: string) {
		return AuthCredential.fromNative(FIREmailAuthProvider.credentialWithEmailPassword(email, password));
	}

	static credentialWithLink(email: string, link: string) {
		return AuthCredential.fromNative(FIREmailAuthProvider.credentialWithEmailLink(email, link));
	}
}

export class PhoneAuthProvider {
	#native: FIRPhoneAuthProvider;

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	static provider(auth?: Auth) {
		const provider = new PhoneAuthProvider();
		if (auth) {
			provider.#native = FIRPhoneAuthProvider.providerWithAuth(auth.native);
		} else {
			provider.#native = FIRPhoneAuthProvider.provider();
		}
		return provider;
	}

	credential(verificationId: string, verificationCode: string) {
		return AuthCredential.fromNative(this.#native.credentialWithVerificationIDVerificationCode(verificationId, verificationCode));
	}

	verifyPhoneNumber(phoneNumber: string): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.#native) {
				reject();
			} else {
				this.native.verifyPhoneNumberUIDelegateCompletion(phoneNumber, null, (verificationId, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(verificationId);
					}
				});
			}
		});
	}
}

export class AppleAuthProvider {
	static credential(idToken: string, nonce: string) {
		return AuthCredential.fromNative(FIROAuthProvider.credentialWithProviderIDIDTokenRawNonce('apple.com', idToken, nonce));
	}
}

export class FacebookAuthProvider {
	static credential(accessToken: string) {
		return AuthCredential.fromNative(FIRFacebookAuthProvider.credentialWithAccessToken(accessToken));
	}
}

export class GithubAuthProvider {
	static credential(token: string) {
		return AuthCredential.fromNative(FIRGitHubAuthProvider.credentialWithToken(token));
	}
}

export class GoogleAuthProvider {
	static credential(idToken: string, accessToken: string) {
		return AuthCredential.fromNative(FIRGoogleAuthProvider.credentialWithIDTokenAccessToken(idToken, accessToken));
	}
}

export class OAuthCredential extends AuthCredential implements IOAuthCredential {
	signInMethod: string;
	protected _native: FIROAuthCredential;

	static fromNative(credential: FIROAuthCredential) {
		if (credential instanceof FIRAuthCredential) {
			const nativeCredential = new OAuthCredential();
			nativeCredential._native = credential;
			return nativeCredential;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get idToken(): string {
		return this.native?.IDToken;
	}

	get accessToken(): string {
		return this.native?.accessToken;
	}

	get secret() {
		return this.native?.secret;
	}
}

export class OAuthProvider {
	#providerId: string;
	constructor(providerId: string) {
		this.#providerId = providerId;
	}

	credential(optionsOrIdToken: OAuthCredentialOptions | string | null, accessToken?: string) {
		let provider;
		if (!optionsOrIdToken && accessToken) {
			provider = FIROAuthProvider.credentialWithProviderIDAccessToken(this.#providerId, accessToken);
		} else if (optionsOrIdToken) {
			if (typeof optionsOrIdToken === 'string') {
				provider = FIROAuthProvider.credentialWithProviderIDAccessToken(this.#providerId, optionsOrIdToken);
			} else if (typeof optionsOrIdToken === 'object') {
				if (optionsOrIdToken.idToken && !optionsOrIdToken.rawNonce) {
					provider = FIROAuthProvider.credentialWithProviderIDIDTokenAccessToken(this.#providerId, optionsOrIdToken.idToken, optionsOrIdToken.accessToken);
				} else if (optionsOrIdToken.idToken && optionsOrIdToken.rawNonce) {
					provider = FIROAuthProvider.credentialWithProviderIDIDTokenRawNonce(this.#providerId, optionsOrIdToken.idToken, optionsOrIdToken.rawNonce);
				} else {
					provider = FIROAuthProvider.credentialWithProviderIDIDTokenRawNonceAccessToken(this.#providerId, optionsOrIdToken.idToken, optionsOrIdToken.rawNonce, optionsOrIdToken.accessToken);
				}
			}
		}
		return OAuthCredential.fromNative(provider);
	}
}

export class TwitterAuthProvider {
	static credential(token: string, secret: string) {
		return AuthCredential.fromNative(FIRTwitterAuthProvider.credentialWithTokenSecret(token, secret));
	}
}

export class PhoneAuthCredential extends AuthCredential implements IPhoneAuthCredential {
	protected _native: FIRPhoneAuthCredential;
	staticFromNative(credential: FIRPhoneAuthCredential) {
		if (credential instanceof FIRPhoneAuthCredential) {
			const nativeCredential = new PhoneAuthCredential();
			nativeCredential._native = credential;
			return nativeCredential;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class AuthTokenResult implements IAuthTokenResult {
	#native: FIRAuthTokenResult;
	static fromNative(tokenResult: FIRAuthTokenResult) {
		if (tokenResult instanceof FIRAuthTokenResult) {
			const result = new AuthTokenResult();
			result.#native = tokenResult;
			return result;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
	get authDate() {
		return this.native.authDate;
	}

	get claims() {
		return deserialize(this.native?.claims);
	}

	get expirationDate() {
		return this.native?.expirationDate;
	}
	get issuedAtDate() {
		return this.native?.issuedAtDate;
	}
	get signInProvider() {
		return this.native.signInProvider;
	}
	get token() {
		return this.native?.token;
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
	fetchSignInMethodsForEmail(email: string): Promise<string[]> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.fetchSignInMethodsForEmailCompletion(email, (emails, error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					const arr = [];
					emails.enumerateObjectsUsingBlock((email) => {
						arr.push(email);
					});
					resolve(arr);
				}
			});
		});
	}
	isSignInWithEmailLink(emailLink: string): boolean {
		return this.native.isSignInWithEmailLink(emailLink);
	}
	#authStateChangeListeners = new Map();
	addAuthStateChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this.native.addAuthStateDidChangeListener((auth, user) => {
				listener(User.fromNative(user));
			});
			this.#authStateChangeListeners.set(listener, id);
		}
	}

	removeAuthStateChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this.#authStateChangeListeners.get(listener);
			if (id) {
				this.native.removeAuthStateDidChangeListener(id);
				this.#authStateChangeListeners.delete(id);
			}
		}
	}

	#idTokenChangeListeners = new Map();
	addIdTokenChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this.native.addIDTokenDidChangeListener((auth, user) => {
				listener(User.fromNative(user));
			});
			this.#idTokenChangeListeners.set(listener, id);
		}
	}

	removeIdTokenChangListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this.#authStateChangeListeners.get(listener);
			if (id) {
				this.native.removeIDTokenDidChangeListener(id);
				this.#authStateChangeListeners.delete(id);
			}
		}
	}

	sendPasswordResetEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			if (actionCodeSettings) {
				this.native.sendPasswordResetWithEmailActionCodeSettingsCompletion(email, actionCodeSettings.native, (error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			} else {
				this.native.sendPasswordResetWithEmailCompletion(email, (error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve();
					}
				});
			}
		});
	}
	sendSignInLinkToEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.sendSignInLinkToEmailActionCodeSettingsCompletion(email, actionCodeSettings.native || FIRActionCodeSettings.new(), (error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					resolve();
				}
			});
		});
	}

	signInAnonymously(): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInAnonymouslyWithCompletion((result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}
	signInWithCredential(credential: AuthCredential): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithCredentialCompletion(credential.native, (result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}
	signInWithCustomToken(customToken: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithCustomTokenCompletion(customToken, (result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}
	signInWithEmailLink(email: string, emailLink: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithEmailLinkCompletion(email, emailLink, (result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	useUserAccessGroup(userAccessGroup: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				try {
					this.native?.useUserAccessGroupError?.(userAccessGroup);
					resolve();
				} catch (error) {
					reject({
						message: error.message,
						native: error,
					});
				}
			}
		});
	}
	verifyPasswordResetCode(code: string): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.verifyPasswordResetCodeCompletion(code, (email, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: Error,
						});
					} else {
						resolve(email);
					}
				});
			}
		});
	}

	createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.createUserWithEmailPasswordCompletion(email, password, (result, error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					resolve(toUserCredential(result));
				}
			});
		});
	}
	confirmPasswordReset(code: string, newPassword: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.confirmPasswordResetWithCodeNewPasswordCompletion(code, newPassword, (error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					resolve();
				}
			});
		});
	}
	checkActionCode(code: string): Promise<ActionCodeInfo> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.checkActionCodeCompletion(code, (info, error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					resolve({
						data: {
							email: info.dataForKey(FIRActionDataKey.CodeEmailKey),
							fromEmail: info.dataForKey(FIRActionDataKey.CodeFromEmailKey),
						},
						operation: toActionCodeOperation(info.operation),
					});
				}
			});
		});
	}
	applyActionCode(code: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.applyActionCodeCompletion(code, (error) => {
					if (!error) {
						resolve();
					} else {
						reject(error.localizedDescription);
					}
				});
			}
		});
	}

	signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithEmailPasswordCompletion(email, password, (result, error) => {
					if (error) {
						reject({
							message: error.localizedDescription,
							native: error,
						});
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	signOut() {
		this.native?.signOut?.();
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
		return this.native?.languageCode;
	}

	set languageCode(code: string) {
		if (this.native) {
			this.native.languageCode = code;
		}
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

	set tenantId(id: string) {
		if (this.native) {
			this.native.tenantID = id;
		}
	}
}
