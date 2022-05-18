declare module org {
	export module nativescript {
		export module firebase {
			export module app_check_debug {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.app_check_debug.BuildConfig>;
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
			export module app_check_debug {
				export class FirebaseAppCheckDebug {
					public static class: java.lang.Class<org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug>;
					public static Companion: org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Companion;
					public constructor();
					public static getExecutorsCount(): number;
					public static getToken(param0: com.google.firebase.appcheck.FirebaseAppCheckDebug, param1: boolean, param2: org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Callback<com.google.firebase.appcheck.AppCheckToken>): void;
					public static setExecutorsCount(param0: number): void;
				}
				export module FirebaseAppCheckDebug {
					export class Callback<T> extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: T): void; onError(param0: any): void });
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Companion>;
						public setExecutorsCount(param0: number): void;
						public getToken(param0: com.google.firebase.appcheck.FirebaseAppCheckDebug, param1: boolean, param2: org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Callback<com.google.firebase.appcheck.AppCheckToken>): void;
						public getExecutorsCount(): number;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.app_check_debug.FirebaseAppCheckDebug.Callback:1
