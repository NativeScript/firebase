declare module org {
	export module nativescript {
		export module firebase {
			export module installations {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.installations.BuildConfig>;
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
			export module installations {
				export class FirebaseInstallations {
					public static class: java.lang.Class<org.nativescript.firebase.installations.FirebaseInstallations>;
					public static Companion: org.nativescript.firebase.installations.FirebaseInstallations.Companion;
					public constructor();
					public static getExecutorsCount(): number;
					public static id(param0: com.google.firebase.installations.FirebaseInstallations, param1: org.nativescript.firebase.installations.FirebaseInstallations.Callback<string>): void;
					public static delete(param0: com.google.firebase.installations.FirebaseInstallations, param1: org.nativescript.firebase.installations.FirebaseInstallations.Callback<java.lang.Void>): void;
					public static getToken(param0: com.google.firebase.installations.FirebaseInstallations, param1: boolean, param2: org.nativescript.firebase.installations.FirebaseInstallations.Callback<com.google.firebase.installations.InstallationTokenResult>): void;
					public static setExecutorsCount(param0: number): void;
				}
				export module FirebaseInstallations {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.installations.FirebaseInstallations.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.installations.FirebaseInstallations$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						public static class: java.lang.Class<org.nativescript.firebase.installations.FirebaseInstallations.Companion>;
						public setExecutorsCount(param0: number): void;
						public id(param0: com.google.firebase.installations.FirebaseInstallations, param1: org.nativescript.firebase.installations.FirebaseInstallations.Callback<string>): void;
						public delete(param0: com.google.firebase.installations.FirebaseInstallations, param1: org.nativescript.firebase.installations.FirebaseInstallations.Callback<java.lang.Void>): void;
						public getToken(param0: com.google.firebase.installations.FirebaseInstallations, param1: boolean, param2: org.nativescript.firebase.installations.FirebaseInstallations.Callback<com.google.firebase.installations.InstallationTokenResult>): void;
						public getExecutorsCount(): number;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.installations.FirebaseInstallations.Callback:1

