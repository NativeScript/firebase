/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module nativescript {
		export module firebase {
			export module admob {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.admob.BuildConfig>;
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
			export module admob {
				export class FirebaseAdmob {
					public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob>;
					public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.Companion;
					public static CONTENT_URL_KEY: string;
					public static KEYWORDS_KEY: string;
					public static LOCATION_KEY: string;
					public static LOCATION_LATITUDE_KEY: string;
					public static LOCATION_LONGITUDE_KEY: string;
					public static LOCATION_ACCURACY_KEY: string;
					public static NETWORK_EXTRAS_KEY: string;
					public static REQUEST_AGENT_KEY: string;
					public static REQUEST_NON_PERSONALIZED_ADS_ONLY_KEY: string;
					public static PUBLISHER_PROVIDER_ID_KEY: string;
					public static CUSTOM_TARGETING_KEY: string;
					public static CATEGORY_EXCLUSIONS_KEY: string;
					public static AD_STRING_KEY: string;
					public static AD_CLICKED_EVENT: string;
					public static AD_CLOSED_EVENT: string;
					public static AD_FAILED_TO_LOAD_EVENT: string;
					public static AD_LOADED_EVENT: string;
					public static AD_OPENED_EVENT: string;
					public static AD_IMPRESSION_EVENT: string;
					public static AD_FAILED_TO_SHOW_FULL_SCREEN_CONTENT: string;
					public constructor();
					public static setRequestConfiguration(param0: string): void;
					public static getExecutorsCount(): number;
					public static setExecutorsCount(param0: number): void;
				}
				export module FirebaseAdmob {
					export class AdCallback {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.admob.FirebaseAdmob$AdCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(param0: string, param1: any): void;
						});
						public constructor();
						public onEvent(param0: string, param1: any): void;
					}
					export class AdConsent {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.Companion;
						public static DEBUG_SETTINGS_KEY: string;
						public static GEOGRAPHY_KEY: string;
						public static DEVICE_IDS_KEY: string;
						public static EMULATOR_KEY: string;
						public static FORCE_TESTING_KEY: string;
						public static TAG_FOR_UNDER_AGE_OF_CONSENT_KEY: string;
						public static ADMOB_ID_KEY: string;
						public static show(param0: globalAndroid.app.Activity, param1: com.google.android.ump.ConsentForm, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
						public constructor();
						public static reset(param0: globalAndroid.content.Context): void;
						public static load(param0: globalAndroid.content.Context, param1: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.ump.ConsentForm>): void;
						public static getStatus(param0: globalAndroid.content.Context): string;
						public static requestInfoUpdate(param0: globalAndroid.app.Activity, param1: string, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
					}
					export module AdConsent {
						export class AdsConsentDebugGeography {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography>;
							public static DISABLED: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
							public static EEA: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
							public static NOT_EEA: org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
							public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography>;
							public toString(): string;
							public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.AdsConsentDebugGeography;
						}
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.Companion>;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.ump.ConsentForm, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
							public getStatus(param0: globalAndroid.content.Context): string;
							public requestInfoUpdate(param0: globalAndroid.app.Activity, param1: string, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>): void;
							public load(param0: globalAndroid.content.Context, param1: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.ump.ConsentForm>): void;
							public reset(param0: globalAndroid.content.Context): void;
						}
					}
					export class AdLoaderCallback {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.admob.FirebaseAdmob$AdLoaderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(param0: string, param1: any): void;
						});
						public constructor();
						public onEvent(param0: string, param1: any): void;
					}
					export class BannerAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.BannerAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.BannerAd.Companion;
						public constructor();
						public static load(param0: string, param1: com.google.android.gms.ads.BaseAdView): void;
					}
					export module BannerAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.BannerAd.Companion>;
							public load(param0: string, param1: com.google.android.gms.ads.BaseAdView): void;
						}
					}
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.admob.FirebaseAdmob$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.Companion>;
						public setRequestConfiguration(param0: string): void;
						public setExecutorsCount(param0: number): void;
						public buildRequest(param0: string): com.google.android.gms.ads.AdRequest;
						public getExecutorsCount(): number;
						public buildAdManagerRequest(param0: string): com.google.android.gms.ads.admanager.AdManagerAdRequest;
					}
					export module Companion {
						export class MaxAdContentRating {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating>;
							public static G: org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating;
							public static PG: org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating;
							public static T: org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating;
							public static MA: org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating;
							public static UNSPECIFIED: org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating;
							public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating;
							public toString(): string;
							public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.Companion.MaxAdContentRating>;
						}
						export class RequestConfiguration {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration>;
							public static MaxAdContentRating: org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration;
							public static TagForChildDirectedTreatment: org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration;
							public static TagForUnderAgeOfConsent: org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration;
							public static TestDevices: org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration;
							public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration;
							public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.Companion.RequestConfiguration>;
							public toString(): string;
						}
					}
					export class InterstitialAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd.Companion;
						public constructor();
						public static load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): void;
					}
					export module InterstitialAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd.Companion>;
							public load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): void;
						}
					}
					export class NativeAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion;
						public static NATIVE_AD_OPTIONS_KEY: string;
						public static AD_CHOICES_PLACEMENT_KEY: string;
						public static AD_CHOICES_PLACEMENT_TOP_LEFT_KEY: string;
						public static AD_CHOICES_PLACEMENT_TOP_RIGHT_KEY: string;
						public static AD_CHOICES_PLACEMENT_BOTTOM_RIGHT_KEY: string;
						public static AD_CHOICES_PLACEMENT_BOTTOM_LEFT_KEY: string;
						public static MEDIA_ASPECT_RATIO_KEY: string;
						public static MEDIA_ASPECT_RATIO_LANDSCAPE_KEY: string;
						public static MEDIA_ASPECT_RATIO_PORTRAIT_KEY: string;
						public static MEDIA_ASPECT_RATIO_SQUARE_KEY: string;
						public static MEDIA_ASPECT_RATIO_SQUARE_ANY: string;
						public static CUSTOM_MUTE_THIS_ADD_KEY: string;
						public static MULTIPLE_IMAGES_KEY: string;
						public static RETURN_URLS_FOR_IMAGE_ASSETS_KEY: string;
						public static VIDEO_OPTIONS_KEY: string;
						public static VIDEO_OPTIONS_START_MUTED_KEY: string;
						public static VIDEO_OPTIONS_CLICK_TO_EXPAND_REQUESTED_KEY: string;
						public static VIDEO_OPTIONS_CUSTOM_CONTROLS_REQUESTED_KEY: string;
						public static AD_SIZES_KEY: string;
						public static AD_MANAGER_AD_VIEW_OPTIONS_KEY: string;
						public static AD_MANAGER_AD_VIEW_OPTIONS_MANUAL_IMPRESSIONS_ENABLED_KEY: string;
						public static AD_MANAGER_AD_VIEW_OPTIONS_SHOULD_DELAY_BANNER_RENDERING_KEY: string;
						public static AD_MANAGER_AD_VIEW_LOADED_EVENT: string;
						public static AD_MANAGER_AD_CLICKED_EVENT: string;
						public static AD_MANAGER_AD_CLOSED_EVENT: string;
						public static AD_MANAGER_AD_FAILED_TO_LOAD_EVENT: string;
						public static AD_MANAGER_AD_IMPRESSION_EVENT: string;
						public static AD_MANAGER_AD_LOADED_EVENT: string;
						public static AD_MANAGER_AD_OPENED_EVENT: string;
						public static AD_MANAGER_AD_NATIVE_AD_LOADED_EVENT: string;
						public static createLoader(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback): com.google.android.gms.ads.AdLoader;
						public constructor();
						public static load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: boolean): void;
						public static load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: number): void;
					}
					export module NativeAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion>;
							public load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: number): void;
							public load(param0: com.google.android.gms.ads.AdLoader, param1: string, param2: boolean): void;
							public createLoader(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback): com.google.android.gms.ads.AdLoader;
						}
						export module Companion {
							export class BannerAdSize {
								public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize>;
								public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize.Companion;
								public static BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static FLUID: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static FULL_BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static LARGE_BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static LEADERBOARD: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static MEDIUM_RECTANGLE: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static SMART_BANNER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static WIDE_SKYSCRAPER: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static INVALID: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public static SEARCH: org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public toString(): string;
								public static values(): androidNative.Array<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize>;
								public static valueOf(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								public toAdSize(): com.google.android.gms.ads.AdSize;
							}
							export module BannerAdSize {
								export class Companion {
									public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize.Companion>;
									public fromString(param0: string): org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize;
								}
								export class WhenMappings {
									public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.Companion.BannerAdSize.WhenMappings>;
								}
							}
						}
					}
					export class RewardedAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd.Companion;
						public constructor();
						public static show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewarded.RewardedAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						public static load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): void;
					}
					export module RewardedAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd.Companion>;
							public load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): void;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewarded.RewardedAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						}
					}
					export class RewardedInterstitialAd {
						public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd>;
						public static Companion: org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd.Companion;
						public constructor();
						public static load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): void;
						public static show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
					}
					export module RewardedInterstitialAd {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd.Companion>;
							public load(param0: globalAndroid.app.Activity, param1: string, param2: string, param3: org.nativescript.firebase.admob.FirebaseAdmob.AdCallback): void;
							public show(param0: globalAndroid.app.Activity, param1: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd, param2: org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.admob.FirebaseAdmob.Callback:1

