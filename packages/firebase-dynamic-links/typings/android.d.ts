declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export class DynamicLink {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink>;
					public getUri(): globalAndroid.net.Uri;
				}
				export module DynamicLink {
					export class AndroidParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters>;
						public static KEY_ANDROID_PACKAGE_NAME: string;
						public static KEY_ANDROID_FALLBACK_LINK: string;
						public static KEY_ANDROID_MIN_VERSION_CODE: string;
					}
					export module AndroidParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder>;
							public constructor();
							public build(): com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters;
							public setFallbackUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder;
							public getFallbackUrl(): globalAndroid.net.Uri;
							public getMinimumVersion(): number;
							public constructor(param0: string);
							public setMinimumVersion(param0: number): com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder;
						}
					}
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.Builder>;
						public static KEY_DOMAIN: string;
						public static KEY_DOMAIN_URI_PREFIX: string;
						public static KEY_DYNAMIC_LINK: string;
						public static KEY_DYNAMIC_LINK_PARAMETERS: string;
						public static KEY_SUFFIX: string;
						public static KEY_API_KEY: string;
						public static KEY_LINK: string;
						public getLink(): globalAndroid.net.Uri;
						public setLongLink(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public getLongLink(): globalAndroid.net.Uri;
						public setIosParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.IosParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setNavigationInfoParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public buildShortDynamicLink(param0: number): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.ShortDynamicLink>;
						public setItunesConnectAnalyticsParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public buildShortDynamicLink(): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.ShortDynamicLink>;
						public constructor(param0: com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl);
						public setSocialMetaTagParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setAndroidParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						/** @deprecated */
						public setDynamicLinkDomain(param0: string): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setLink(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setGoogleAnalyticsParameters(param0: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public setDomainUriPrefix(param0: string): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public getDomainUriPrefix(): string;
						public buildDynamicLink(): com.google.firebase.dynamiclinks.DynamicLink;
					}
					export class GoogleAnalyticsParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters>;
						public static KEY_UTM_CAMPAIGN: string;
						public static KEY_UTM_SOURCE: string;
						public static KEY_UTM_MEDIUM: string;
						public static KEY_UTM_TERM: string;
						public static KEY_UTM_CONTENT: string;
					}
					export module GoogleAnalyticsParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder>;
							public constructor();
							public setContent(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public getTerm(): string;
							public getContent(): string;
							public setSource(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public setMedium(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public getMedium(): string;
							public getSource(): string;
							public setCampaign(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
							public getCampaign(): string;
							public constructor(param0: string, param1: string, param2: string);
							public build(): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters;
							public setTerm(param0: string): com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
						}
					}
					export class IosParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.IosParameters>;
						public static KEY_IOS_BUNDLE_ID: string;
						public static KEY_IOS_FALLBACK_LINK: string;
						public static KEY_IOS_CUSTOM_SCHEME: string;
						public static KEY_IPAD_FALLBACK_LINK: string;
						public static KEY_IPAD_BUNDLE_ID: string;
						public static KEY_IOS_APP_STORE_ID: string;
						public static KEY_IOS_MINIMUM_VERSION: string;
					}
					export module IosParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder>;
							public setIpadBundleId(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setAppStoreId(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setMinimumVersion(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setFallbackUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public setCustomScheme(param0: string): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public getCustomScheme(): string;
							public getIpadFallbackUrl(): globalAndroid.net.Uri;
							public getMinimumVersion(): string;
							public build(): com.google.firebase.dynamiclinks.DynamicLink.IosParameters;
							public setIpadFallbackUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
							public constructor(param0: string);
							public getIpadBundleId(): string;
							public getAppStoreId(): string;
						}
					}
					export class ItunesConnectAnalyticsParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters>;
						public static KEY_ITUNES_CONNECT_PT: string;
						public static KEY_ITUNES_CONNECT_AT: string;
						public static KEY_ITUNES_CONNECT_CT: string;
					}
					export module ItunesConnectAnalyticsParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder>;
							public constructor();
							public getAffiliateToken(): string;
							public setCampaignToken(param0: string): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
							public setAffiliateToken(param0: string): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
							public setProviderToken(param0: string): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
							public getProviderToken(): string;
							public getCampaignToken(): string;
							public build(): com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters;
						}
					}
					export class NavigationInfoParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters>;
						public static KEY_FORCED_REDIRECT: string;
					}
					export module NavigationInfoParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder>;
							public constructor();
							public build(): com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters;
							public getForcedRedirectEnabled(): boolean;
							public setForcedRedirectEnabled(param0: boolean): com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder;
						}
					}
					export class SocialMetaTagParameters {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters>;
						public static KEY_SOCIAL_TITLE: string;
						public static KEY_SOCIAL_DESCRIPTION: string;
						public static KEY_SOCIAL_IMAGE_LINK: string;
					}
					export module SocialMetaTagParameters {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder>;
							public constructor();
							public setDescription(param0: string): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
							public setImageUrl(param0: globalAndroid.net.Uri): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
							public getImageUrl(): globalAndroid.net.Uri;
							public getTitle(): string;
							public setTitle(param0: string): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
							public build(): com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters;
							public getDescription(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export abstract class FirebaseDynamicLinks {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.FirebaseDynamicLinks>;
					public static getInstance(): com.google.firebase.dynamiclinks.FirebaseDynamicLinks;
					public createDynamicLink(): com.google.firebase.dynamiclinks.DynamicLink.Builder;
					public constructor();
					public getDynamicLink(param0: globalAndroid.net.Uri): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.dynamiclinks.FirebaseDynamicLinks;
					public getDynamicLink(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export class PendingDynamicLinkData {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
					public getMinimumAppVersion(): number;
					public getClickTimestamp(): number;
					public getUpdateAppIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public getExtensions(): globalAndroid.os.Bundle;
					public constructor(param0: com.google.firebase.dynamiclinks.internal.DynamicLinkData);
					public getLink(): globalAndroid.net.Uri;
					public getUtmParameters(): globalAndroid.os.Bundle;
					public getRedirectUrl(): globalAndroid.net.Uri;
					public constructor(param0: string, param1: number, param2: number, param3: globalAndroid.net.Uri);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export class ShortDynamicLink {
					public static class: java.lang.Class<com.google.firebase.dynamiclinks.ShortDynamicLink>;
					/**
					 * Constructs a new instance of the com.google.firebase.dynamiclinks.ShortDynamicLink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getShortLink(): globalAndroid.net.Uri;
						getPreviewLink(): globalAndroid.net.Uri;
						getWarnings(): java.util.List<any>;
					});
					public constructor();
					public getShortLink(): globalAndroid.net.Uri;
					public getWarnings(): java.util.List<any>;
					public getPreviewLink(): globalAndroid.net.Uri;
				}
				export module ShortDynamicLink {
					export class Suffix {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.ShortDynamicLink.Suffix>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.ShortDynamicLink$Suffix interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static SHORT: number;
						public static UNGUESSABLE: number;
					}
					export class Warning {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.ShortDynamicLink.Warning>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.ShortDynamicLink$Warning interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCode(): string;
							getMessage(): string;
						});
						public constructor();
						public getMessage(): string;
						/** @deprecated */
						public getCode(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class DynamicLinkData {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.DynamicLinkData>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.DynamicLinkData>;
						public getDeepLink(): string;
						public setExtensionData(param0: globalAndroid.os.Bundle): void;
						public getDynamicLink(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setRedirectUrl(param0: globalAndroid.net.Uri): void;
						public setDeepLink(param0: string): void;
						public setDynamicLink(param0: string): void;
						public getExtensionBundle(): globalAndroid.os.Bundle;
						public constructor(param0: string, param1: string, param2: number, param3: number, param4: globalAndroid.os.Bundle, param5: globalAndroid.net.Uri);
						public getMinVersion(): number;
						public getRedirectUrl(): globalAndroid.net.Uri;
						public setMinVersion(param0: number): void;
						public setClickTimestamp(param0: number): void;
						public getClickTimestamp(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class DynamicLinkDataCreator extends globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.DynamicLinkData> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.DynamicLinkDataCreator>;
						public static CONTENT_DESCRIPTION: number;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.google.firebase.dynamiclinks.internal.DynamicLinkData;
						public newArray(param0: number): native.Array<com.google.firebase.dynamiclinks.internal.DynamicLinkData>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class DynamicLinkUTMParams {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.DynamicLinkUTMParams>;
						public static KEY_CAMPAIGN_BUNDLE: string;
						public static KEY_SCION_DATA_BUNDLE: string;
						public static KEY_MEDIUM: string;
						public static KEY_SOURCE: string;
						public static KEY_CAMPAIGN: string;
						public static KEY_UTM_MEDIUM: string;
						public static KEY_UTM_SOURCE: string;
						public static KEY_UTM_CAMPAIGN: string;
						public asBundle(): globalAndroid.os.Bundle;
						public constructor(param0: com.google.firebase.dynamiclinks.internal.DynamicLinkData);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class DynamicLinksApi extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.DynamicLinksApi>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class DynamicLinksClient extends com.google.android.gms.common.internal.GmsClient<com.google.firebase.dynamiclinks.internal.IDynamicLinksService> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.DynamicLinksClient>;
						public static ACTION_START_SERVICE: string;
						public static SERVICE_DESCRIPTOR: string;
						public usesClientTelemetry(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: com.google.android.gms.common.internal.ClientSettings, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
						public getServiceDescriptor(): string;
						public getStartServiceAction(): string;
						public createServiceInterface(param0: globalAndroid.os.IBinder): com.google.firebase.dynamiclinks.internal.IDynamicLinksService;
						public getMinApkVersion(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class FirebaseDynamicLinkRegistrar {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinkRegistrar>;
						public constructor();
						public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class FirebaseDynamicLinksImpl extends com.google.firebase.dynamiclinks.FirebaseDynamicLinks {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl>;
						public static KEY_SCION_DATA: string;
						public static EXTRA_DYNAMIC_LINK_DATA: string;
						public constructor();
						public createDynamicLink(): com.google.firebase.dynamiclinks.DynamicLink.Builder;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>);
						public getPendingDynamicLinkData(param0: globalAndroid.content.Intent): com.google.firebase.dynamiclinks.PendingDynamicLinkData;
						public static verifyDomainUriPrefix(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>, param1: com.google.firebase.FirebaseApp, param2: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>);
						public createShortDynamicLink(param0: globalAndroid.os.Bundle): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.ShortDynamicLink>;
						public getFirebaseApp(): com.google.firebase.FirebaseApp;
						public static createDynamicLink(param0: globalAndroid.os.Bundle): globalAndroid.net.Uri;
						public getDynamicLink(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
						public getDynamicLink(param0: globalAndroid.net.Uri): com.google.android.gms.tasks.Task<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
					}
					export module FirebaseDynamicLinksImpl {
						export class AbstractDynamicLinkCallbacks extends com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks.Stub {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.AbstractDynamicLinkCallbacks>;
							public onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
							public onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
						}
						export class CreateShortDynamicLinkCallbacks extends com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.AbstractDynamicLinkCallbacks {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.CreateShortDynamicLinkCallbacks>;
							public onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
							public onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
						}
						export class CreateShortDynamicLinkImpl extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.firebase.dynamiclinks.internal.DynamicLinksClient,com.google.firebase.dynamiclinks.ShortDynamicLink> {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.CreateShortDynamicLinkImpl>;
							public doExecute(param0: com.google.firebase.dynamiclinks.internal.DynamicLinksClient, param1: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.dynamiclinks.ShortDynamicLink>): void;
						}
						export class DynamicLinkCallbacks extends com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.AbstractDynamicLinkCallbacks {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.DynamicLinkCallbacks>;
							public constructor();
							public onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
							public onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
							public constructor(param0: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param1: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.dynamiclinks.PendingDynamicLinkData>);
						}
						export class GetDynamicLinkImpl extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.firebase.dynamiclinks.internal.DynamicLinksClient,com.google.firebase.dynamiclinks.PendingDynamicLinkData> {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImpl.GetDynamicLinkImpl>;
							public doExecute(param0: com.google.firebase.dynamiclinks.internal.DynamicLinksClient, param1: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.dynamiclinks.PendingDynamicLinkData>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class FirebaseDynamicLinksImplConstants {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImplConstants>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.internal.FirebaseDynamicLinksImplConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static GET_DYNAMIC_LINK_METHOD_KEY: number;
						public static CREATE_SHORT_DYNAMIC_LINK_METHOD_KEY: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class IDynamicLinksCallbacks {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
							onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
						});
						public constructor();
						public onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
						public onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
					}
					export module IDynamicLinksCallbacks {
						export abstract class Stub implements com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks.Stub>;
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
							public onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public static asInterface(param0: globalAndroid.os.IBinder): com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks;
						}
						export module Stub {
							export class Proxy extends com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks {
								public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks.Stub.Proxy>;
								public onCreateShortDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl): void;
								public getInterfaceDescriptor(): string;
								public onGetDynamicLink(param0: com.google.android.gms.common.api.Status, param1: com.google.firebase.dynamiclinks.internal.DynamicLinkData): void;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class IDynamicLinksService {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.IDynamicLinksService>;
						/**
						 * Constructs a new instance of the com.google.firebase.dynamiclinks.internal.IDynamicLinksService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: string): void;
							createShortDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public getDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: string): void;
						public createShortDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: globalAndroid.os.Bundle): void;
					}
					export module IDynamicLinksService {
						export abstract class Stub implements com.google.firebase.dynamiclinks.internal.IDynamicLinksService {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.IDynamicLinksService.Stub>;
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public static asInterface(param0: globalAndroid.os.IBinder): com.google.firebase.dynamiclinks.internal.IDynamicLinksService;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: string): void;
							public createShortDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: globalAndroid.os.Bundle): void;
						}
						export module Stub {
							export class Proxy extends com.google.firebase.dynamiclinks.internal.IDynamicLinksService {
								public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.IDynamicLinksService.Stub.Proxy>;
								public createShortDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: globalAndroid.os.Bundle): void;
								public getInterfaceDescriptor(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public getDynamicLink(param0: com.google.firebase.dynamiclinks.internal.IDynamicLinksCallbacks, param1: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class ShortDynamicLinkImpl implements com.google.firebase.dynamiclinks.ShortDynamicLink {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl>;
						public getPreviewLink(): globalAndroid.net.Uri;
						public getWarnings(): java.util.List<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getShortLink(): globalAndroid.net.Uri;
						public constructor(param0: globalAndroid.net.Uri, param1: globalAndroid.net.Uri, param2: java.util.List<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl>);
						public getWarnings(): java.util.List<any>;
					}
					export module ShortDynamicLinkImpl {
						export class WarningImpl implements com.google.firebase.dynamiclinks.ShortDynamicLink.Warning {
							public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl>;
							public getCode(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
							/** @deprecated */
							public getCode(): string;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class ShortDynamicLinkImplCreator extends globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImplCreator>;
						public static CONTENT_DESCRIPTION: number;
						public constructor();
						public newArray(param0: number): native.Array<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module dynamiclinks {
				export module internal {
					export class WarningImplCreator extends globalAndroid.os.Parcelable.Creator<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl> {
						public static class: java.lang.Class<com.google.firebase.dynamiclinks.internal.WarningImplCreator>;
						public static CONTENT_DESCRIPTION: number;
						public constructor();
						public newArray(param0: number): native.Array<com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.google.firebase.dynamiclinks.internal.ShortDynamicLinkImpl.WarningImpl;
					}
				}
			}
		}
	}
}

//Generics information:

