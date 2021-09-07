declare module org {
	export module nativescript {
		export module firebase {
			export module dynamic_links {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.dynamic_links.BuildConfig>;
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
			export module dynamic_links {
				export class FirebaseDynamicLinks {
					public static class: java.lang.Class<org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks>;
					public static Companion: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Companion;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public static getExecutorsCount(): number;
					public static resolveLink(param0: com.google.firebase.dynamiclinks.FirebaseDynamicLinks, param1: string, param2: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
					public static buildShortLink(param0: com.google.firebase.dynamiclinks.DynamicLink.Builder, param1: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.ShortDynamicLink>): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public static onNewIntent(param0: com.google.firebase.dynamiclinks.FirebaseDynamicLinks, param1: globalAndroid.content.Intent, param2: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public constructor();
					public static getInitialLink(param0: com.google.firebase.dynamiclinks.FirebaseDynamicLinks, param1: globalAndroid.app.Activity, param2: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
					public static setExecutorsCount(param0: number): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
				export module FirebaseDynamicLinks {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						public static class: java.lang.Class<org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Companion>;
						public getInitialLink(param0: com.google.firebase.dynamiclinks.FirebaseDynamicLinks, param1: globalAndroid.app.Activity, param2: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
						public resolveLink(param0: com.google.firebase.dynamiclinks.FirebaseDynamicLinks, param1: string, param2: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
						public setExecutorsCount(param0: number): void;
						public buildShortLink(param0: com.google.firebase.dynamiclinks.DynamicLink.Builder, param1: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.ShortDynamicLink>): void;
						public onNewIntent(param0: com.google.firebase.dynamiclinks.FirebaseDynamicLinks, param1: globalAndroid.content.Intent, param2: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
						public getDidResume(): boolean;
						public getExecutorsCount(): number;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback:1

