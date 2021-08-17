declare module org {
	export module nativescript {
		export module firebaseauth {
			export class BuildConfig {
				public static class: java.lang.Class<org.nativescript.firebaseauth.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module firebaseauth {
			export class FirebaseAuth {
				public static class: java.lang.Class<org.nativescript.firebaseauth.FirebaseAuth>;
				public static Companion: org.nativescript.firebaseauth.FirebaseAuth.Companion;
				public static signInWithCustomToken(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
				public static signInWithCredential(param0: com.google.firebase.auth.FirebaseAuth, param1: com.google.firebase.auth.AuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
				public static applyActionCode(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
				public static signInAnonymously(param0: com.google.firebase.auth.FirebaseAuth, param1: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
				public static setExecutorsCount(param0: number): void;
				public constructor();
				public static sendPasswordResetEmail(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: com.google.firebase.auth.ActionCodeSettings, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
				public static sendSignInLinkToEmail(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: com.google.firebase.auth.ActionCodeSettings, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
				public static signInWithEmailAndPassword(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
				public static createUserWithEmailAndPassword(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
				public static getExecutorsCount(): number;
				public static verifyPasswordResetCode(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<string>): void;
				public static signInWithEmailLink(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
				public static fetchSignInMethodsForEmail(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.SignInMethodQueryResult>): void;
				public static checkActionCode(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.ActionCodeResult>): void;
				public static confirmPasswordReset(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
			}
			export module FirebaseAuth {
				export class Callback<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.nativescript.firebaseauth.FirebaseAuth.Callback<any>>;
					/**
					 * Constructs a new instance of the org.nativescript.firebaseauth.FirebaseAuth$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: T): void;
						onError(param0: any): void;
					});
					public constructor();
					public onSuccess(param0: T): void;
					public onError(param0: any): void;
				}
				export class Companion {
					public static class: java.lang.Class<org.nativescript.firebaseauth.FirebaseAuth.Companion>;
					public sendSignInLinkToEmail(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: com.google.firebase.auth.ActionCodeSettings, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public setExecutorsCount(param0: number): void;
					public signInWithCustomToken(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public confirmPasswordReset(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public signInWithEmailAndPassword(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public getExecutorsCount(): number;
					public verifyPasswordResetCode(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<string>): void;
					public applyActionCode(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public signInWithEmailLink(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public signInAnonymously(param0: com.google.firebase.auth.FirebaseAuth, param1: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public checkActionCode(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.ActionCodeResult>): void;
					public createUserWithEmailAndPassword(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: string, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public signInWithCredential(param0: com.google.firebase.auth.FirebaseAuth, param1: com.google.firebase.auth.AuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public fetchSignInMethodsForEmail(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.SignInMethodQueryResult>): void;
					public sendPasswordResetEmail(param0: com.google.firebase.auth.FirebaseAuth, param1: string, param2: com.google.firebase.auth.ActionCodeSettings, param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
				}
				export class User {
					public static class: java.lang.Class<org.nativescript.firebaseauth.FirebaseAuth.User>;
					public static Companion: org.nativescript.firebaseauth.FirebaseAuth.User.Companion;
					public static updateProfile(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.UserProfileChangeRequest, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static verifyBeforeUpdateEmail(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static verifyBeforeUpdateEmail(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: com.google.firebase.auth.ActionCodeSettings , param3: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static linkWithCredential(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.AuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public static updateEmail(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static reauthenticateWithCredential(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.AuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public static reload(param0: com.google.firebase.auth.FirebaseUser, param1: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static unlink(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
					public static delete(param0: com.google.firebase.auth.FirebaseUser, param1: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public constructor();
					public static updatePassword(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static sendEmailVerification(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.ActionCodeSettings, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					public static getIdToken(param0: com.google.firebase.auth.FirebaseUser, param1: boolean, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<string>): void;
					public static getIdTokenResult(param0: com.google.firebase.auth.FirebaseUser, param1: boolean, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.GetTokenResult>): void;
					public static updatePhoneNumber(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.PhoneAuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
				}
				export module User {
					export class Companion {
						public static class: java.lang.Class<org.nativescript.firebaseauth.FirebaseAuth.User.Companion>;
						public updateProfile(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.UserProfileChangeRequest, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public reauthenticateWithCredential(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.AuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public getIdToken(param0: com.google.firebase.auth.FirebaseUser, param1: boolean, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<string>): void;
						public verifyBeforeUpdateEmail(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public unlink(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
						public getIdTokenResult(param0: com.google.firebase.auth.FirebaseUser, param1: boolean, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.GetTokenResult>): void;
						public updatePassword(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public updatePhoneNumber(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.PhoneAuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public linkWithCredential(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.AuthCredential, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<com.google.firebase.auth.AuthResult>): void;
						public delete(param0: com.google.firebase.auth.FirebaseUser, param1: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public sendEmailVerification(param0: com.google.firebase.auth.FirebaseUser, param1: com.google.firebase.auth.ActionCodeSettings, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
						public updateEmail(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: org.nativescript.firebaseauth.FirebaseAuth.Callback<java.lang.Void>): void;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebaseauth.FirebaseAuth.Callback:1

