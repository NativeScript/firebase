declare module org {
	export module nativescript {
		export module firebase {
			export module messaging {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.messaging.BuildConfig>;
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
			export module messaging {
				export class FirebaseMessaging {
					public static class: java.lang.Class<org.nativescript.firebase.messaging.FirebaseMessaging>;
					public static Companion: org.nativescript.firebase.messaging.FirebaseMessaging.Companion;
					public static init(param0: globalAndroid.content.Context): void;
					public static deleteToken(param0: com.google.firebase.messaging.FirebaseMessaging, param1: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>): void;
					public static subscribeToTopic(param0: string, param1: com.google.firebase.messaging.FirebaseMessaging, param2: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>): void;
					public static getToken(param0: com.google.firebase.messaging.FirebaseMessaging, param1: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
					public static hasPermission(param0: globalAndroid.content.Context): boolean;
					public static setOnMessageTapListener(param0: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
					public static unsubscribeFromTopic(param0: string, param1: com.google.firebase.messaging.FirebaseMessaging, param2: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>): void;
					public static getExecutorsCount(): number;
					public static setOnTokenListener(param0: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
					public constructor();
					public static setOnMessageListener(param0: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
					public static handleActivityIntent(param0: globalAndroid.content.Intent): void;
					public static setExecutorsCount(param0: number): void;
				}
				export module FirebaseMessaging {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.messaging.FirebaseMessaging.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.messaging.FirebaseMessaging$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						public static class: java.lang.Class<org.nativescript.firebase.messaging.FirebaseMessaging.Companion>;
						public setOnMessageListener(param0: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
						public unsubscribeFromTopic(param0: string, param1: com.google.firebase.messaging.FirebaseMessaging, param2: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>): void;
						public setExecutorsCount(param0: number): void;
						public setOnTokenListener(param0: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
						public getToken(param0: com.google.firebase.messaging.FirebaseMessaging, param1: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
						public deleteToken(param0: com.google.firebase.messaging.FirebaseMessaging, param1: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>): void;
						public init(param0: globalAndroid.content.Context): void;
						public setOnMessageTapListener(param0: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>): void;
						public subscribeToTopic(param0: string, param1: com.google.firebase.messaging.FirebaseMessaging, param2: org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>): void;
						public getExecutorsCount(): number;
						public handleActivityIntent(param0: globalAndroid.content.Intent): void;
						public hasPermission(param0: globalAndroid.content.Context): boolean;
					}
					export class Service {
						public static class: java.lang.Class<org.nativescript.firebase.messaging.FirebaseMessaging.Service>;
						public onNewToken(param0: string): void;
						public constructor();
						public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.messaging.FirebaseMessaging.Callback:1

