declare module org {
	export module nativescript {
		export module firebase {
			export module remote_config {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.remote_config.BuildConfig>;
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
			export module remote_config {
				export class FirebaseRemoteConfig {
					public static class: java.lang.Class<org.nativescript.firebase.remote_config.FirebaseRemoteConfig>;
					public static Companion: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Companion;
					public static setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings, param2: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
					public static fetch(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: number, param2: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
					public static fetchAndActivate(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Boolean>): void;
					public constructor();
					public static ensureInitialized(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>): void;
					public static activate(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Boolean>): void;
					public static getExecutorsCount(): number;
					public static setDefaultsFromResource(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: string, param2: globalAndroid.content.Context, param3: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
					public static setExecutorsCount(param0: number): void;
					public static setDefaults(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
					public static reset(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
				}
				export module FirebaseRemoteConfig {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.remote_config.FirebaseRemoteConfig$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						public static class: java.lang.Class<org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Companion>;
						public fetch(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: number, param2: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
						public fetchAndActivate(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Boolean>): void;
						public setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings, param2: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
						public setExecutorsCount(param0: number): void;
						public activate(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Boolean>): void;
						public ensureInitialized(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>): void;
						public setDefaults(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
						public reset(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
						public getExecutorsCount(): number;
						public setDefaultsFromResource(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfig, param1: string, param2: globalAndroid.content.Context, param3: org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback<java.lang.Void>): void;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.remote_config.FirebaseRemoteConfig.Callback:1
