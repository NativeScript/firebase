import { FirebaseApp, Firebase, deserialize } from '@nativescript/firebase-core';
import { IAuthSettings, IAuth, IUser, IUserInfo, IUserMetadata, ActionCodeInfo, ActionCodeInfoOperation, UserCredential, AdditionalUserInfo, IAuthCredential, IActionCodeSettings, OAuthCredentialOptions, IOAuthCredential, IPhoneAuthCredential, IAuthTokenResult, UserProfileChangeRequest } from './common';
import lazy from '@nativescript/core/utils/lazy';
import { Application } from '@nativescript/core';
Firebase.auth = (app?: FirebaseApp) => {
	return new Auth(app);
};

export class UserMetadata implements IUserMetadata {
	#native: com.google.firebase.auth.FirebaseUserMetadata;
	static fromNative(metadata: com.google.firebase.auth.FirebaseUserMetadata) {
		if (metadata instanceof com.google.firebase.auth.FirebaseUserMetadata) {
			const meta = new UserMetadata();
			meta.#native = metadata;
			return meta;
		}
		return null;
	}
	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}
	get creationDate(): Date {
		if (this.native) {
			return new Date(this.native?.getCreationTimestamp());
		}
		return null;
	}
	get lastSignInDate(): Date {
		if (this.native) {
			return new Date(this.native?.getLastSignInTimestamp());
		}
		return null;
	}
}

export class UserInfo implements IUserInfo {
	#native: com.google.firebase.auth.UserInfo;
	static fromNative(info: com.google.firebase.auth.UserInfo) {
		if (info) {
			const nativeInfo = new UserInfo();
			nativeInfo.#native = info;
		}
		return null;
	}
	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
	get uid(): string {
		return this.native?.getUid?.();
	}
	get displayName(): string {
		return this.native?.getDisplayName?.();
	}
	get email(): string {
		return this.native?.getEmail?.();
	}
	get phoneNumber(): string {
		return this.native?.getPhoneNumber?.();
	}
	get photoURL(): string {
		let url;
		try {
			url = this.native?.getPhotoUrl()?.toString?.();
		} catch (e) {}
		return url;
	}
	get providerId(): string {
		return this.native?.getProviderId?.();
	}
}

export class User implements IUser {
	#native: com.google.firebase.auth.FirebaseUser;
	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}
	static fromNative(user: com.google.firebase.auth.FirebaseUser) {
		if (user instanceof com.google.firebase.auth.FirebaseUser) {
			const usr = new User();
			usr.#native = user;
			return usr;
		}
		return null;
	}

	get displayName(): string {
		return this.native?.getDisplayName?.();
	}

	get anonymous() {
		return this.native?.isAnonymous?.();
	}

	get emailVerified(): boolean {
		return this.native?.isEmailVerified?.();
	}

	get email(): string {
		return this.native?.getEmail?.();
	}

	get uid(): string {
		return this.native?.getUid?.();
	}
	get phoneNumber(): string {
		return this.native?.getPhoneNumber?.();
	}
	get provideId(): string {
		return this.native?.getProviderId?.();
	}
	get photoURL(): string {
		let url;
		try {
			url = this.native?.getPhotoUrl()?.toString?.();
		} catch (e) {}
		return url;
	}
	get metadata(): any {
		return UserMetadata.fromNative(this.native?.getMetadata?.());
	}
	get providerData(): UserInfo[] {
		const providerData = this.native.getProviderData();
		const count = providerData.size();
		const data = [];
		for (let i = 0; i < count; i++) {
			data.push(UserInfo.fromNative(providerData.get(i)));
		}
		return data;
	}

	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.delete(
					this.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	getIdToken(forceRefresh: boolean = false): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.getIdToken(
					this.native,
					forceRefresh,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(success);
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	getIdTokenResult(forceRefresh: boolean = false): Promise<AuthTokenResult> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.getIdTokenResult(
					this.native,
					forceRefresh,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(AuthTokenResult.fromNative(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	linkWithCredential(credential: AuthCredential): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.linkWithCredential(
					this.native,
					credential.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	reauthenticateWithCredential(credential: AuthCredential): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.reauthenticateWithCredential(
					this.native,
					credential.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	reload(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.reload(
					this.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	sendEmailVerification(actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.sendEmailVerification(
					this.native,
					actionCodeSettings?.native ?? null,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	unlink(providerId: string): Promise<User> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.unlink(
					this.native,
					providerId,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(User.fromNative(success.getUser()));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	updateEmail(email: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.updateEmail(
					this.native,
					email,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	updatePassword(password: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.updatePassword(
					this.native,
					password,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	updatePhoneNumber(credential: PhoneAuthCredential): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.updatePhoneNumber(
					this.native,
					credential.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	updateProfile(profile: UserProfileChangeRequest): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				const builder = new com.google.firebase.auth.UserProfileChangeRequest.Builder();
				if (profile.displayName) {
					builder.setDisplayName(profile.displayName);
				}
				if (profile.photoUri) {
					try {
						builder.setPhotoUri(android.net.Uri.parse(profile.photoUri));
					} catch (e) {}
				}
				NSFirebaseAuth().User.updateProfile(
					this.native,
					builder.build(),
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	verifyBeforeUpdateEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().User.verifyBeforeUpdateEmail(
					this.native,
					email,
					actionCodeSettings?.native ?? null,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
}

export class AuthSettings implements IAuthSettings {
	#native: com.google.firebase.auth.FirebaseAuthSettings;
	static fromNative(settings: com.google.firebase.auth.FirebaseAuthSettings) {
		if (settings instanceof com.google.firebase.auth.FirebaseAuthSettings) {
			const nativeSettings = new AuthSettings();
			nativeSettings.#native = settings;
			return nativeSettings;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	#appVerificationDisabledForTesting = false;
	set appVerificationDisabledForTesting(value) {
		if (this.native) {
			this.native.setAppVerificationDisabledForTesting(value);
			this.#appVerificationDisabledForTesting = value;
		}
	}

	get appVerificationDisabledForTesting() {
		return this.#appVerificationDisabledForTesting;
	}
}

enum ActionCodeResult {
	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-password_reset
	PasswordReset = 0,
	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-verify_email
	VerifyEmail = 1,
	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-recover_email
	RecoverEmail = 2,

	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-error
	Error = 3,

	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-sign_in_with_email_link
	EmailLink = 4,

	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-verify_before_change_email
	VerifyAndChangeEmail = 5,

	// https://firebase.google.com/docs/reference/android/com/google/firebase/auth/ActionCodeResult#public-static-final-int-revert_second_factor_addition
	RevertSecondFactorAddition = 6,
}

function toActionCodeOperation(operation: com.google.firebase.auth.ActionCodeResult.Operation) {
	switch (operation) {
		case ActionCodeResult.Error:
			return ActionCodeInfoOperation.Unknown;
		case ActionCodeResult.PasswordReset:
			return ActionCodeInfoOperation.PasswordReset;
		case ActionCodeResult.VerifyEmail:
			return ActionCodeInfoOperation.VerifyEmail;
		case ActionCodeResult.RecoverEmail:
			return ActionCodeInfoOperation.RecoverEmail;
		case ActionCodeResult.EmailLink:
			return ActionCodeInfoOperation.EmailLink;
		case ActionCodeResult.VerifyAndChangeEmail:
			return ActionCodeInfoOperation.VerifyAndChangeEmail;
		case ActionCodeResult.RevertSecondFactorAddition:
			return ActionCodeInfoOperation.RevertSecondFactorAddition;
	}
}

function toUserCredential(authData: com.google.firebase.auth.AuthResult): UserCredential {
	const additionalUserInfo = authData.getAdditionalUserInfo();
	const credential = authData.getCredential();
	return {
		additionalUserInfo: {
			newUser: additionalUserInfo.isNewUser(),
			providerId: additionalUserInfo.getProviderId(),
			username: additionalUserInfo.getUsername(),
			profile: deserialize(additionalUserInfo.getProfile()),
		},
		user: User.fromNative(authData.getUser()),
		credential: credential instanceof com.google.firebase.auth.OAuthCredential ? OAuthCredential.fromNative(credential) : AuthCredential.fromNative(credential),
	};
}

export class ActionCodeSettings implements IActionCodeSettings {
	#native: com.google.firebase.auth.ActionCodeSettings.Builder;

	constructor() {
		this.#native = new com.google.firebase.auth.ActionCodeSettings.Builder();
	}

	get native() {
		return this.#native
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

export class AuthCredential implements IAuthCredential {
	protected _native: com.google.firebase.auth.AuthCredential;

	static fromNative(credential: com.google.firebase.auth.AuthCredential) {
		if (credential instanceof com.google.firebase.auth.AuthCredential) {
			const nativeCredential = new AuthCredential();
			nativeCredential._native = credential;
			return nativeCredential;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get provider(): string {
		return this.native?.getProvider?.();
	}

	get signInMethod() {
		return this.native?.getSignInMethod?.();
	}
}

export class EmailAuthProvider {
	static credential(email: string, password: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.EmailAuthProvider.getCredential(email, password));
	}

	static credentialWithLink(email: string, link: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.EmailAuthProvider.getCredentialWithLink(email, link));
	}
}

let OnVerificationStateChangedCallbacks;

function ensureClass() {
	if (OnVerificationStateChangedCallbacks) {
		return;
	}
	@NativeClass
	class OnVerificationStateChangedCallbacksImpl extends OnVerificationStateChangedCallbacks {
		_resolve;
		_reject;
		constructor(resolve, reject) {
			super();
			this._resolve = resolve;
			this._reject = reject;
			return global.__native(this);
		}
		onVerificationFailed(error: any) {
			this._reject({
				message: error.getMessage(),
				native: error,
			});
		}
		onVerificationCompleted(credential: com.google.firebase.auth.PhoneAuthCredential) {}
		onCodeSent(verificationId: string, resendingToken: com.google.firebase.auth.PhoneAuthProvider.ForceResendingToken) {
			this._resolve(verificationId);
		}
		onCodeAutoRetrievalTimeOut(verificationId: string) {
			this._resolve(verificationId);
		}
	}

	OnVerificationStateChangedCallbacks = OnVerificationStateChangedCallbacksImpl;
}

export class PhoneAuthProvider {
	#native: com.google.firebase.auth.PhoneAuthOptions.Builder;

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	static provider(auth?: Auth) {
		const provider = new PhoneAuthProvider();
		if (auth) {
			provider.#native = com.google.firebase.auth.PhoneAuthOptions.newBuilder(auth.native);
		} else {
			provider.#native = com.google.firebase.auth.PhoneAuthOptions.newBuilder();
		}

		provider.#native.setActivity(Application.android.foregroundActivity || Application.android.startActivity);

		return provider;
	}

	credential(verificationId: string, verificationCode: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.PhoneAuthProvider.getCredential(verificationId, verificationCode));
	}

	verifyPhoneNumber(phoneNumber: string): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.#native) {
				reject();
			} else {
				ensureClass();
				com.google.firebase.auth.PhoneAuthProvider.verifyPhoneNumber(this.native.setPhoneNumber(phoneNumber).setCallbacks(new OnVerificationStateChangedCallbacks(resolve, reject)).build());
			}
		});
	}
}

export class AppleAuthProvider {
	static credential(idToken: string, nonce: string) {
		return null;
	}
}

export class FacebookAuthProvider {
	static credential(accessToken: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.FacebookAuthProvider.getCredential(accessToken));
	}
}

export class GithubAuthProvider {
	static credential(token: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.GithubAuthProvider.getCredential(token));
	}
}

export class GoogleAuthProvider {
	static credential(idToken: string, accessToken: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.GoogleAuthProvider.getCredential(idToken, accessToken));
	}
}

export class OAuthCredential extends AuthCredential implements IOAuthCredential {
	protected _native: com.google.firebase.auth.OAuthCredential;

	static fromNative(credential: com.google.firebase.auth.OAuthCredential) {
		if (credential instanceof com.google.firebase.auth.OAuthCredential) {
			const nativeCredential = new OAuthCredential();
			nativeCredential._native = credential;
			return nativeCredential;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get idToken(): string {
		return this.native?.getIdToken?.();
	}

	get accessToken(): string {
		return this.native?.getAccessToken?.();
	}

	get secret() {
		return this.native?.getSecret?.();
	}
}

export class OAuthProvider {
	#providerId: string;
	constructor(providerId: string) {
		this.#providerId = providerId;
	}

	credential(optionsOrIdToken: OAuthCredentialOptions | string | null, accessToken?: string) {
		const builder = com.google.firebase.auth.OAuthProvider.newCredentialBuilder(this.#providerId);
		if (!optionsOrIdToken && accessToken) {
			builder.setAccessToken(accessToken);
		} else if (optionsOrIdToken) {
			if (typeof optionsOrIdToken === 'string') {
				builder.setAccessToken(accessToken);
			} else if (typeof optionsOrIdToken === 'object') {
				if (optionsOrIdToken.idToken && !optionsOrIdToken.rawNonce) {
					builder.setIdToken(optionsOrIdToken.idToken).setAccessToken(optionsOrIdToken.accessToken);
				} else if (optionsOrIdToken.idToken && optionsOrIdToken.rawNonce) {
					builder.setIdTokenWithRawNonce(optionsOrIdToken.idToken, optionsOrIdToken.rawNonce);
				} else {
					builder.setAccessToken(optionsOrIdToken.accessToken).setIdTokenWithRawNonce(optionsOrIdToken.idToken, optionsOrIdToken.rawNonce);
				}
			}
		}
		return OAuthCredential.fromNative(builder.build() as any);
	}
}

export class TwitterAuthProvider {
	static credential(token: string, secret: string) {
		return AuthCredential.fromNative(com.google.firebase.auth.TwitterAuthProvider.getCredential(token, secret));
	}
}

export class PhoneAuthCredential extends AuthCredential implements IPhoneAuthCredential {
	protected _native: com.google.firebase.auth.PhoneAuthCredential;
	staticFromNative(credential: com.google.firebase.auth.PhoneAuthCredential) {
		if (credential instanceof com.google.firebase.auth.PhoneAuthCredential) {
			const nativeCredential = new PhoneAuthCredential();
			nativeCredential._native = credential;
			return nativeCredential;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class AuthTokenResult implements IAuthTokenResult {
	#native: com.google.firebase.auth.GetTokenResult;
	static fromNative(tokenResult: com.google.firebase.auth.GetTokenResult) {
		if (tokenResult instanceof com.google.firebase.auth.GetTokenResult) {
			const result = new AuthTokenResult();
			result.#native = tokenResult;
			return result;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
	get authDate() {
		const ts = this.native?.getAuthTimestamp?.();
		if (ts) {
			return new Date(ts);
		}
		return null;
	}

	get claims() {
		return deserialize(this.native?.getClaims?.());
	}

	get expirationDate() {
		const ts = this.native?.getExpirationTimestamp?.();
		if (ts) {
			return new Date(ts);
		}
		return null;
	}
	get issuedAtDate() {
		const ts = this.native?.getIssuedAtTimestamp?.();
		if (ts) {
			return new Date(ts);
		}
		return null;
	}
	get signInProvider() {
		return this.native.getSignInProvider?.();
	}
	get token() {
		return this.native?.getToken?.();
	}
}

const NSFirebaseAuth = lazy(() => org.nativescript.firebaseauth.FirebaseAuth);
export class Auth implements IAuth {
	#native: com.google.firebase.auth.FirebaseAuth;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = com.google.firebase.auth.FirebaseAuth.getInstance(app.native);
		} else {
			this.#native = com.google.firebase.auth.FirebaseAuth.getInstance((com as any).google.firebase.FirebaseApp.getInstance());
		}
	}
	fetchSignInMethodsForEmail(email: string): Promise<string[]> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}
			NSFirebaseAuth().fetchSignInMethodsForEmail(
				this.native,
				email,
				new org.nativescript.firebaseauth.FirebaseAuth.Callback({
					onSuccess(success) {
						const nativeArray = success.getSignInMethods().toArray();
						const arr = [];
						for (let i = 0; i < nativeArray.length; i++) {
							arr.push(nativeArray[i]);
						}
						resolve(arr);
					},
					onError(error) {
						reject({
							message: error.getMessage(),
							native: error,
						});
					},
				})
			);
		});
	}
	isSignInWithEmailLink(emailLink: string): boolean {
		return this.native.isSignInWithEmailLink(emailLink);
	}
	#authStateChangeListeners = new Map();
	addAuthStateChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const nativeListener = new com.google.firebase.auth.FirebaseAuth.AuthStateListener({
				onAuthStateChanged(auth: com.google.firebase.auth.FirebaseAuth) {
					listener(User.fromNative(auth.getCurrentUser()));
				},
			});
			this.native.addAuthStateListener(nativeListener);
			this.#authStateChangeListeners.set(listener, nativeListener);
		}
	}

	removeAuthStateChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const nativeListener = this.#authStateChangeListeners.get(listener);
			if (nativeListener) {
				this.native.removeAuthStateListener(nativeListener);
				this.#authStateChangeListeners.delete(nativeListener);
			}
		}
	}

	#idTokenChangeListeners = new Map();
	addIdTokenChangeListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const nativeListener = new com.google.firebase.auth.FirebaseAuth.IdTokenListener({
				onIdTokenChanged(auth: com.google.firebase.auth.FirebaseAuth) {
					listener(User.fromNative(auth.getCurrentUser()));
				},
			});

			this.native.addIdTokenListener(nativeListener);
			this.#idTokenChangeListeners.set(listener, nativeListener);
		}
	}

	removeIdTokenChangListener(listener: (user: User) => void) {
		if (this.native && typeof listener === 'function') {
			const nativeListener = this.#authStateChangeListeners.get(listener);
			if (nativeListener) {
				this.native.removeIdTokenListener(nativeListener);
				this.#authStateChangeListeners.delete(nativeListener);
			}
		}
	}

	sendPasswordResetEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().sendPasswordResetEmail(
					this.native,
					email,
					actionCodeSettings?.native || null,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	sendSignInLinkToEmail(email: string, actionCodeSettings?: ActionCodeSettings): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().sendSignInLinkToEmail(
					this.native,
					email,
					actionCodeSettings.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	signInAnonymously(): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().signInAnonymously(
					this.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	signInWithCredential(credential: AuthCredential): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().signInWithCredential(
					this.native,
					credential.native,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	signInWithCustomToken(customToken: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().signInWithCustomToken(
					this.native,
					customToken,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	signInWithEmailLink(email: string, emailLink: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().signInWithEmailLink(
					this.native,
					email,
					emailLink,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	useUserAccessGroup(userAccessGroup: string): Promise<void> {
		return Promise.reject();
	}
	verifyPasswordResetCode(code: string): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().verifyPasswordResetCode(
					this.native,
					code,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(success);
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().createUserWithEmailAndPassword(
					this.native,
					email,
					password,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}
	confirmPasswordReset(code: string, newPassword: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}

			NSFirebaseAuth().confirmPasswordReset(
				this.native,
				code,
				newPassword,
				new org.nativescript.firebaseauth.FirebaseAuth.Callback({
					onSuccess(success) {
						resolve();
					},
					onError(error) {
						reject({
							message: error.getMessage(),
							native: error,
						});
					},
				})
			);
		});
	}
	checkActionCode(code: string): Promise<ActionCodeInfo> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			}

			NSFirebaseAuth().checkActionCode(
				this.native,
				code,
				new org.nativescript.firebaseauth.FirebaseAuth.Callback({
					onSuccess(success) {
						const info = success.getInfo();
						resolve({
							data: {
								email: info.email,
								fromEmail: undefined,
							},
							operation: toActionCodeOperation(success.getOperation()),
						});
					},
					onError(error) {
						reject({
							message: error.getMessage(),
							native: error,
						});
					},
				})
			);
		});
	}

	applyActionCode(code: string): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().applyActionCode(
					this.native,
					code,
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve();
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				NSFirebaseAuth().signInWithEmailAndPassword(
					this.native,
					email || '',
					password || '',
					new org.nativescript.firebaseauth.FirebaseAuth.Callback({
						onSuccess(success) {
							resolve(toUserCredential(success));
						},
						onError(error) {
							reject({
								message: error.getMessage(),
								native: error,
							});
						},
					})
				);
			}
		});
	}

	signOut() {
		this.native?.signOut?.();
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}
	#app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.getApp());
		}
		return this.#app;
	}
	#user: User;
	get user(): User {
		if (!this.#user) {
			this.#user = User.fromNative(this.native.getCurrentUser());
		}
		return this.#user;
	}
	get languageCode(): string {
		return this.native?.getLanguageCode?.();
	}

	set languageCode(code: string) {
		if (this.native) {
			this.native.setLanguageCode(code);
		}
	}

	#settings: AuthSettings;
	get settings(): AuthSettings {
		if (!this.#settings) {
			this.#settings = AuthSettings.fromNative(this.native.getFirebaseAuthSettings());
		}
		return this.#settings;
	}
	get tenantId(): string {
		return this.native.getTenantId();
	}

	set tenantId(id: string) {
		if (this.native) {
			this.native.setTenantId(id);
		}
	}
}
