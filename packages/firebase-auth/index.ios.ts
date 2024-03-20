import { FirebaseApp, firebase, deserialize, FirebaseError } from '@nativescript-asharghi/firebase-core';
import { ActionCodeInfoOperation } from './common';

import { ActionCodeInfo, IUserCredential, IActionCodeSettings, IAuth, IAuthCredential, IAuthSettings, IAuthTokenResult, IOAuthCredential, IPhoneAuthCredential, IUser, IUserInfo, IUserMetadata, OAuthCredentialOptions, UserProfileChangeRequest, IOAuthProvider } from '.';

export { ActionCodeInfoOperation };

declare const FIRApp;
let defaultAuth: Auth;
const fb = firebase();
if (!fb.hasOwnProperty('auth')) {
	Object.defineProperty(fb, 'auth', {
		value: (app?: FirebaseApp) => {
			if (!app) {
				if (!defaultAuth) {
					defaultAuth = new Auth();
				}
				return defaultAuth;
			}
			return new Auth(app);
		},
		writable: false,
	});
}

export class UserMetadata implements IUserMetadata {
	_native: FIRUserMetadata;

	static fromNative(metadata: FIRUserMetadata) {
		if (metadata instanceof FIRUserMetadata) {
			const meta = new UserMetadata();
			meta._native = metadata;
			return meta;
		}
		return null;
	}

	get native() {
		return this._native;
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

	toJSON() {
		return {
			creationDate: this.creationDate,
			lastSignInDate: this.lastSignInDate,
		};
	}
}

export class UserInfo implements IUserInfo {
	_native: FIRUserInfo;

	static fromNative(info: FIRUserInfo) {
		if (info) {
			const nativeInfo = new UserInfo();
			nativeInfo._native = info;
			return nativeInfo;
		}
		return null;
	}

	get native() {
		return this._native as any;
	}

	get ios() {
		return this.native;
	}

	get uid(): string {
		return this.native?.valueForKey('uid');
	}

	get displayName(): string {
		return this.native?.valueForKey('displayName');
	}

	get email(): string {
		return this.native?.valueForKey('email');
	}

	get phoneNumber(): string {
		return this.native?.valueForKey('phoneNumber');
	}

	get photoURL(): string {
		return this.native?.valueForKey('photoURL')?.absoluteString;
	}

	get providerId(): string {
		return this.native?.valueForKey('providerID');
	}

	toJSON() {
		return {
			displayName: this.displayName,
			email: this.email,
			uid: this.uid,
			phoneNumber: this.phoneNumber,
			providerId: this.providerId,
			photoURL: this.photoURL,
		};
	}
}

export class User implements IUser {
	_native: FIRUser;
	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	static fromNative(user: FIRUser) {
		if (user instanceof FIRUser) {
			const usr = new User();
			usr._native = user;
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

	get providerId(): string {
		return this.native?.providerID;
	}

	get photoURL(): string {
		return this.native?.photoURL?.absoluteString;
	}

	get metadata(): UserMetadata {
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

	toJSON() {
		return {
			displayName: this.displayName,
			anonymous: this.anonymous,
			emailVerified: this.emailVerified,
			email: this.email,
			uid: this.uid,
			phoneNumber: this.phoneNumber,
			providerId: this.providerId,
			photoURL: this.photoURL,
			metadata: this.metadata,
			providerData: this.providerData,
		};
	}

	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native?.deleteWithCompletion((error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
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
							reject(FirebaseError.fromNative(error));
						} else {
							resolve(idToken);
						}
					});
				} else {
					this.native.getIDTokenWithCompletion((idToken, error) => {
						if (error) {
							reject(FirebaseError.fromNative(error));
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
							reject(FirebaseError.fromNative(error));
						} else {
							resolve(AuthTokenResult.fromNative(idToken));
						}
					});
				} else {
					this.native.getIDTokenResultWithCompletion((idToken, error) => {
						if (error) {
							reject(FirebaseError.fromNative(error));
						} else {
							resolve(AuthTokenResult.fromNative(idToken));
						}
					});
				}
			}
		});
	}

	linkWithCredential(credential: AuthCredential): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.linkWithCredentialCompletion(credential.native, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	reauthenticateWithProvider(provider: OAuthProvider): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				provider._builder.getCredentialWithUIDelegateCompletion(null, (credential, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						this.native.reauthenticateWithCredentialCompletion(credential, (result, error) => {
							if (error) {
								reject(FirebaseError.fromNative(error));
							} else {
								resolve(toUserCredential(result));
							}
						});
					}
				});
			}
		});
	}

	reauthenticateWithCredential(credential: AuthCredential): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.reauthenticateWithCredentialCompletion(credential.native, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
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
						reject(FirebaseError.fromNative(error));
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
							reject(FirebaseError.fromNative(error));
						} else {
							resolve();
						}
					});
				} else {
					this.native.sendEmailVerificationWithCompletion((error) => {
						if (error) {
							reject(FirebaseError.fromNative(error));
						} else {
							resolve();
						}
					});
				}
			}
		});
	}

	unlink(providerId: string): Promise<IUser> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.unlinkFromProviderCompletion(providerId, (user, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
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
						reject(FirebaseError.fromNative(error));
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
						reject(FirebaseError.fromNative(error));
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
						reject(FirebaseError.fromNative(error));
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
						reject(FirebaseError.fromNative(error));
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
							reject(FirebaseError.fromNative(error));
						} else {
							resolve();
						}
					});
				} else {
					this.native.sendEmailVerificationBeforeUpdatingEmailCompletion(email, (error) => {
						if (error) {
							reject(FirebaseError.fromNative(error));
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
	_native: FIRAuthSettings;

	static fromNative(settings: FIRAuthSettings) {
		if (settings instanceof FIRAuthSettings) {
			const nativeSettings = new AuthSettings();
			nativeSettings._native = settings;
			return nativeSettings;
		}
		return null;
	}

	get native() {
		return this._native;
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

function toUserCredential(authData: FIRAuthDataResult): IUserCredential {
	const result = {
		additionalUserInfo: null,
		user: User.fromNative(authData.user),
		credential: authData.credential instanceof FIROAuthCredential ? OAuthCredential.fromNative(authData.credential) : AuthCredential.fromNative(authData.credential),
	};

	if (authData?.additionalUserInfo) {
		result.additionalUserInfo = {
			newUser: authData?.additionalUserInfo?.newUser,
			providerId: authData?.additionalUserInfo?.providerID,
			username: authData?.additionalUserInfo?.username,
			profile: deserialize(authData?.additionalUserInfo?.profile),
		};
	}

	return result;
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
	_native: FIRPhoneAuthProvider;

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	static provider(auth?: Auth) {
		const provider = new PhoneAuthProvider();
		if (auth) {
			provider._native = FIRPhoneAuthProvider.providerWithAuth(auth.native);
		} else {
			provider._native = FIRPhoneAuthProvider.provider();
		}
		return provider;
	}

	credential(verificationId: string, verificationCode: string) {
		return AuthCredential.fromNative(this._native.credentialWithVerificationIDVerificationCode(verificationId, verificationCode));
	}

	verifyPhoneNumber(phoneNumber: string): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this._native) {
				reject();
			} else {
				this.native.verifyPhoneNumberUIDelegateCompletion(phoneNumber, null, (verificationId, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
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

	static fromNative(credential: any) {
		if (credential instanceof FIRAuthCredential) {
			const nativeCredential = new OAuthCredential();
			nativeCredential._native = credential as any;
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

export class OAuthProvider implements IOAuthProvider {
	_providerId: string;
	_customParameters: { [key: string]: string };
	_scopes: string[];
	constructor(providerId: string) {
		this._providerId = providerId;
		this._customParameters = {};
		this._scopes = [];
	}

	get _builder() {
		const builder = FIROAuthProvider.providerWithProviderID(this._providerId);
		builder.customParameters = this._customParameters as any;
		builder.scopes = this._scopes as any;
		return builder;
	}

	addCustomParameter(key: string, value: string) {
		this._customParameters[key] = value;
	}

	setScopes(scopes: string[]) {
		if (Array.isArray(scopes)) {
			this._scopes = scopes;
		}
	}

	credential(optionsOrIdToken: OAuthCredentialOptions | string | null, accessToken?: string) {
		let provider;
		if (!optionsOrIdToken && accessToken) {
			provider = FIROAuthProvider.credentialWithProviderIDAccessToken(this._providerId, accessToken);
		} else if (optionsOrIdToken) {
			if (typeof optionsOrIdToken === 'string') {
				provider = FIROAuthProvider.credentialWithProviderIDAccessToken(this._providerId, optionsOrIdToken);
			} else if (typeof optionsOrIdToken === 'object') {
				if (optionsOrIdToken.idToken && !optionsOrIdToken.rawNonce) {
					provider = FIROAuthProvider.credentialWithProviderIDIDTokenAccessToken(this._providerId, optionsOrIdToken.idToken, optionsOrIdToken.accessToken);
				} else if (optionsOrIdToken.idToken && optionsOrIdToken.rawNonce) {
					provider = FIROAuthProvider.credentialWithProviderIDIDTokenRawNonce(this._providerId, optionsOrIdToken.idToken, optionsOrIdToken.rawNonce);
				} else {
					provider = FIROAuthProvider.credentialWithProviderIDIDTokenRawNonceAccessToken(this._providerId, optionsOrIdToken.idToken, optionsOrIdToken.rawNonce, optionsOrIdToken.accessToken);
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

	static fomNative(credential: FIRPhoneAuthCredential) {
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
	_native: FIRAuthTokenResult;

	static fromNative(tokenResult: FIRAuthTokenResult) {
		if (tokenResult instanceof FIRAuthTokenResult) {
			const result = new AuthTokenResult();
			result._native = tokenResult;
			return result;
		}
		return null;
	}

	get native() {
		return this._native;
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
	_native: FIRAuth;
	constructor(app?: FirebaseApp) {
		this._app = app;
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulatorWithHostPort(host, port);
	}

	fetchSignInMethodsForEmail(email: string): Promise<string[]> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.fetchSignInMethodsForEmailCompletion(email, (emails, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					const arr = [];
					if (emails) {
						const size = emails.count;
						for (let i = 0; i < size; i++) {
							arr.push(emails.objectAtIndex(i));
						}
					}
					resolve(arr);
				}
			});
		});
	}

	isSignInWithEmailLink(emailLink: string): boolean {
		return this.native.isSignInWithEmailLink(emailLink);
	}

	_authStateChangeListeners = new Map();

	addAuthStateChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this.native.addAuthStateDidChangeListener((auth, user) => {
				listener(User.fromNative(user));
			});
			this._authStateChangeListeners.set(listener, id);
		}
	}

	removeAuthStateChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this._authStateChangeListeners.get(listener);
			if (id) {
				this.native.removeAuthStateDidChangeListener(id);
				this._authStateChangeListeners.delete(id);
			}
		}
	}

	_idTokenChangeListeners = new Map();

	addIdTokenChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this.native.addIDTokenDidChangeListener((auth, user) => {
				listener(User.fromNative(user));
			});
			this._idTokenChangeListeners.set(listener, id);
		}
	}

	removeIdTokenChangListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const id = this._authStateChangeListeners.get(listener);
			if (id) {
				this.native.removeIDTokenDidChangeListener(id);
				this._authStateChangeListeners.delete(id);
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
						reject(FirebaseError.fromNative(error));
					} else {
						resolve();
					}
				});
			} else {
				this.native.sendPasswordResetWithEmailCompletion(email, (error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
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
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	signInAnonymously(): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInAnonymouslyWithCompletion((result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	signInWithProvider(provider: OAuthProvider): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				provider._builder.getCredentialWithUIDelegateCompletion(null, (credential, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						this.native.signInWithCredentialCompletion(credential, (result, error) => {
							if (error) {
								reject(FirebaseError.fromNative(error));
							} else {
								resolve(toUserCredential(result));
							}
						});
					}
				});
			}
		});
	}

	getProviderCredential(provider: OAuthProvider): Promise<OAuthCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				provider._builder.getCredentialWithUIDelegateCompletion(null, (credential, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(OAuthCredential.fromNative(credential));
					}
				});
			}
		});
	}

	signInWithCredential(credential: AuthCredential): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithCredentialCompletion(credential.native, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	signInWithCustomToken(customToken: string): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithCustomTokenCompletion(customToken, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	signInWithEmailLink(email: string, emailLink: string): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithEmailLinkCompletion(email, emailLink, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
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
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(email);
					}
				});
			}
		});
	}

	createUserWithEmailAndPassword(email: string, password: string): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			this.native.createUserWithEmailPasswordCompletion(email, password, (result, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
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
					reject(FirebaseError.fromNative(error));
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
					reject(FirebaseError.fromNative(error));
				} else {
					const operation = toActionCodeOperation(info.operation);
					const actionCodeInfo: ActionCodeInfo = {
						data: {
							email: undefined,
							previousEmail: undefined,
						},
						operation,
					};

					if (operation === ActionCodeInfoOperation.VerifyEmail || operation === ActionCodeInfoOperation.PasswordReset) {
						actionCodeInfo.data.email = info.email;
					} else if (operation === ActionCodeInfoOperation.RevertSecondFactorAddition) {
						actionCodeInfo.data.email = null;
						actionCodeInfo.data.previousEmail = null;
					} else if (operation === ActionCodeInfoOperation.RecoverEmail || operation === ActionCodeInfoOperation.VerifyAndChangeEmail) {
						actionCodeInfo.data.email = info.email;
						actionCodeInfo.data.previousEmail = info.previousEmail;
					}

					resolve(actionCodeInfo);
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
						reject(FirebaseError.fromNative(error));
					}
				});
			}
		});
	}

	signInWithEmailAndPassword(email: string, password: string): Promise<IUserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.signInWithEmailPasswordCompletion(email, password, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve(toUserCredential(result));
					}
				});
			}
		});
	}

	signOut(): Promise<boolean> {
		return Promise.resolve(this.native?.signOut?.());
	}

	get native() {
		if (!this._native) {
			if (this._app?.native) {
				this._native = FIRAuth.authWithApp(this._app.native);
			} else {
				this._native = FIRAuth.auth();
			}
		}
		return this._native;
	}

	get ios() {
		return this.native;
	}

	_app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.app);
		}
		return this._app;
	}

	get currentUser(): User {
		return this.native ? User.fromNative(this.native.currentUser) : null;
	}

	get languageCode(): string {
		return this.native?.languageCode;
	}

	set languageCode(code: string) {
		if (this.native) {
			this.native.languageCode = code;
		}
	}

	_settings: AuthSettings;
	get settings(): AuthSettings {
		if (!this._settings) {
			this._settings = AuthSettings.fromNative(this.native.settings);
		}
		return this._settings;
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
