
declare module org {
	export module nativescript {
		export module firebase {
			export module crashlytics {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.crashlytics.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module firebase {
			export module crashlytics {
				export class FirebaseCrashlytics {
					public static class: java.lang.Class<org.nativescript.firebase.crashlytics.FirebaseCrashlytics>;
					public static Companion: org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Companion;
					public constructor();
					public static checkForUnsentReports(param0: com.google.firebase.crashlytics.FirebaseCrashlytics, param1: org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Callback<java.lang.Boolean>): void;
					public static getExecutorsCount(): number;
					public static setExecutorsCount(param0: number): void;
					public static setAttributes(param0: com.google.firebase.crashlytics.FirebaseCrashlytics, param1: string): void;
					public static crash(): void;
				}
				export module FirebaseCrashlytics {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.crashlytics.FirebaseCrashlytics$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): void;
							onError(param0: any): void;
						});
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Companion>;
						public setExecutorsCount(param0: number): void;
						public crash(): void;
						public checkForUnsentReports(param0: com.google.firebase.crashlytics.FirebaseCrashlytics, param1: org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Callback<java.lang.Boolean>): void;
						public setAttributes(param0: com.google.firebase.crashlytics.FirebaseCrashlytics, param1: string): void;
						public getExecutorsCount(): number;
					}
					export class NativeScriptError {
						public static class: java.lang.Class<org.nativescript.firebase.crashlytics.FirebaseCrashlytics.NativeScriptError>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Callback:1
