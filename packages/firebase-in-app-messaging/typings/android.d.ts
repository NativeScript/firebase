/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module developers {
			export module mobile {
				export module targeting {
					export module proto {
						export class ClientSignalsProto {
							public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module ClientSignalsProto {
							export class AppInstanceClaim extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim,com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim>;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_TOKEN_FIELD_NUMBER: number;
								public static GMP_APP_ID_FIELD_NUMBER: number;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getAppInstanceId(): string;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim>;
								public getAppInstanceToken(): string;
								public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getGmpAppId(): string;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
							}
							export module AppInstanceClaim {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim,com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder>;
									public setAppInstanceId(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setGmpAppIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
									public clearAppInstanceId(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceTokenBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getGmpAppIdBytes(): com.google.protobuf.ByteString;
									public clearGmpAppId(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setGmpAppId(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceToken(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public clearAppInstanceToken(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									public getAppInstanceToken(): string;
									public getAppInstanceId(): string;
									public getGmpAppId(): string;
								}
							}
							export class AppInstanceClaimOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.ClientSignalsProto$AppInstanceClaimOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAppInstanceId(): string;
									getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									getAppInstanceToken(): string;
									getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
									getGmpAppId(): string;
									getGmpAppIdBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getAppInstanceToken(): string;
								public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceId(): string;
								public getGmpAppId(): string;
							}
							export class ClientSignals extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals,com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder  {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals>;
								public static APP_VERSION_FIELD_NUMBER: number;
								public static PLATFORM_VERSION_FIELD_NUMBER: number;
								public static LANGUAGE_CODE_FIELD_NUMBER: number;
								public static TIME_ZONE_FIELD_NUMBER: number;
								public getAppVersion(): string;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static newBuilder(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
								public static parseFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: native.Array<number>): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public getTimeZone(): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public getLanguageCodeBytes(): com.google.protobuf.ByteString;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getLanguageCode(): string;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals>;
								public getPlatformVersionBytes(): com.google.protobuf.ByteString;
								public getPlatformVersion(): string;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
							}
							export module ClientSignals {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals,com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder  {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder>;
									public clearPlatformVersion(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getAppVersionBytes(): com.google.protobuf.ByteString;
									public setLanguageCodeBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getTimeZone(): string;
									public setPlatformVersionBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setLanguageCode(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setAppVersionBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getLanguageCode(): string;
									public clearLanguageCode(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public clearTimeZone(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setPlatformVersion(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setTimeZone(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setTimeZoneBytes(param0: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getPlatformVersion(): string;
									public getPlatformVersionBytes(): com.google.protobuf.ByteString;
									public getLanguageCodeBytes(): com.google.protobuf.ByteString;
									public getTimeZoneBytes(): com.google.protobuf.ByteString;
									public clearAppVersion(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setAppVersion(param0: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getAppVersion(): string;
								}
							}
							export class ClientSignalsOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.ClientSignalsProto$ClientSignalsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAppVersion(): string;
									getAppVersionBytes(): com.google.protobuf.ByteString;
									getPlatformVersion(): string;
									getPlatformVersionBytes(): com.google.protobuf.ByteString;
									getLanguageCode(): string;
									getLanguageCodeBytes(): com.google.protobuf.ByteString;
									getTimeZone(): string;
									getTimeZoneBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getAppVersion(): string;
								public getLanguageCode(): string;
								public getPlatformVersionBytes(): com.google.protobuf.ByteString;
								public getPlatformVersion(): string;
								public getTimeZone(): string;
								public getLanguageCodeBytes(): com.google.protobuf.ByteString;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
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
			export module inappmessaging {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.BuildConfig>;
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
			export module inappmessaging {
				export class CampaignAnalytics extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CampaignAnalytics,com.google.firebase.inappmessaging.CampaignAnalytics.Builder> implements com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder  {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics>;
					public static PROJECT_NUMBER_FIELD_NUMBER: number;
					public static CAMPAIGN_ID_FIELD_NUMBER: number;
					public static CLIENT_APP_FIELD_NUMBER: number;
					public static CLIENT_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
					public static EVENT_TYPE_FIELD_NUMBER: number;
					public static DISMISS_TYPE_FIELD_NUMBER: number;
					public static RENDER_ERROR_REASON_FIELD_NUMBER: number;
					public static FETCH_ERROR_REASON_FIELD_NUMBER: number;
					public static FIAM_SDK_VERSION_FIELD_NUMBER: number;
					public static ENGAGEMENTMETRICS_DELIVERY_RETRY_COUNT_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CampaignAnalytics>;
					public getCampaignIdBytes(): com.google.protobuf.ByteString;
					public hasClientTimestampMillis(): boolean;
					public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
					public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
					public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static newBuilder(param0: com.google.firebase.inappmessaging.CampaignAnalytics): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
					public getCampaignId(): string;
					public hasProjectNumber(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getProjectNumberBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasEngagementMetricsDeliveryRetryCount(): boolean;
					public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
					public hasEventType(): boolean;
					public getEventType(): com.google.firebase.inappmessaging.EventType;
					public hasClientApp(): boolean;
					public static newBuilder(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
					public hasRenderErrorReason(): boolean;
					public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasDismissType(): boolean;
					public getEngagementMetricsDeliveryRetryCount(): number;
					public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getClientTimestampMillis(): number;
					public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
					public hasCampaignId(): boolean;
					public getDismissType(): com.google.firebase.inappmessaging.DismissType;
					public hasFiamSdkVersion(): boolean;
					public static getDefaultInstance(): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasFetchErrorReason(): boolean;
					public getFiamSdkVersion(): string;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getProjectNumber(): string;
				}
				export module CampaignAnalytics {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CampaignAnalytics,com.google.firebase.inappmessaging.CampaignAnalytics.Builder> implements com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics.Builder>;
						public hasRenderErrorReason(): boolean;
						public getDismissType(): com.google.firebase.inappmessaging.DismissType;
						public getClientTimestampMillis(): number;
						public clearEvent(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setClientTimestampMillis(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasDismissType(): boolean;
						public clearRenderErrorReason(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setProjectNumber(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getCampaignId(): string;
						public setEngagementMetricsDeliveryRetryCount(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasCampaignId(): boolean;
						public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
						public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
						public clearFiamSdkVersion(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public setDismissType(param0: com.google.firebase.inappmessaging.DismissType): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasEngagementMetricsDeliveryRetryCount(): boolean;
						public setClientApp(param0: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearEventType(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setEventType(param0: com.google.firebase.inappmessaging.EventType): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasProjectNumber(): boolean;
						public getEngagementMetricsDeliveryRetryCount(): number;
						public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFiamSdkVersionBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getFiamSdkVersion(): string;
						public hasClientApp(): boolean;
						public setCampaignId(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasEventType(): boolean;
						public getEventType(): com.google.firebase.inappmessaging.EventType;
						public clearCampaignId(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFetchErrorReason(param0: com.google.firebase.inappmessaging.FetchErrorReason): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setClientApp(param0: com.google.firebase.inappmessaging.ClientAppInfo.Builder): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
						public clearClientApp(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasClientTimestampMillis(): boolean;
						public hasFetchErrorReason(): boolean;
						public setFiamSdkVersion(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearFetchErrorReason(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasFiamSdkVersion(): boolean;
						public getProjectNumberBytes(): com.google.protobuf.ByteString;
						public clearClientTimestampMillis(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getProjectNumber(): string;
						public setRenderErrorReason(param0: com.google.firebase.inappmessaging.RenderErrorReason): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getCampaignIdBytes(): com.google.protobuf.ByteString;
						public clearDismissType(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearProjectNumber(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearEngagementMetricsDeliveryRetryCount(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public mergeClientApp(param0: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					}
					export class EventCase {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics.EventCase>;
						public static EVENT_TYPE: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static DISMISS_TYPE: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static RENDER_ERROR_REASON: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static FETCH_ERROR_REASON: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static EVENT_NOT_SET: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static values(): native.Array<com.google.firebase.inappmessaging.CampaignAnalytics.EventCase>;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public getNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class CampaignAnalyticsOrBuilder {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasProjectNumber(): boolean;
						getProjectNumber(): string;
						getProjectNumberBytes(): com.google.protobuf.ByteString;
						hasCampaignId(): boolean;
						getCampaignId(): string;
						getCampaignIdBytes(): com.google.protobuf.ByteString;
						hasClientApp(): boolean;
						getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
						hasClientTimestampMillis(): boolean;
						getClientTimestampMillis(): number;
						hasEventType(): boolean;
						getEventType(): com.google.firebase.inappmessaging.EventType;
						hasDismissType(): boolean;
						getDismissType(): com.google.firebase.inappmessaging.DismissType;
						hasRenderErrorReason(): boolean;
						getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
						hasFetchErrorReason(): boolean;
						getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
						hasFiamSdkVersion(): boolean;
						getFiamSdkVersion(): string;
						getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
						hasEngagementMetricsDeliveryRetryCount(): boolean;
						getEngagementMetricsDeliveryRetryCount(): number;
						getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
					});
					public constructor();
					public hasClientApp(): boolean;
					public hasRenderErrorReason(): boolean;
					public getCampaignIdBytes(): com.google.protobuf.ByteString;
					public hasClientTimestampMillis(): boolean;
					public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
					public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
					public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					public hasDismissType(): boolean;
					public getEngagementMetricsDeliveryRetryCount(): number;
					public getCampaignId(): string;
					public getClientTimestampMillis(): number;
					public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
					public hasProjectNumber(): boolean;
					public hasCampaignId(): boolean;
					public getProjectNumberBytes(): com.google.protobuf.ByteString;
					public getDismissType(): com.google.firebase.inappmessaging.DismissType;
					public hasFiamSdkVersion(): boolean;
					public hasFetchErrorReason(): boolean;
					public hasEngagementMetricsDeliveryRetryCount(): boolean;
					public getFiamSdkVersion(): string;
					public getProjectNumber(): string;
					public hasEventType(): boolean;
					public getEventType(): com.google.firebase.inappmessaging.EventType;
					public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class ClientAppInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ClientAppInfo,com.google.firebase.inappmessaging.ClientAppInfo.Builder> implements com.google.firebase.inappmessaging.ClientAppInfoOrBuilder  {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfo>;
					public static GOOGLE_APP_ID_FIELD_NUMBER: number;
					public static FIREBASE_INSTANCE_ID_FIELD_NUMBER: number;
					public static newBuilder(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public getGoogleAppId(): string;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static getDefaultInstance(): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ClientAppInfo>;
					public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public getFirebaseInstanceId(): string;
					public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasFirebaseInstanceId(): boolean;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public static newBuilder(param0: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					public hasGoogleAppId(): boolean;
					public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
				}
				export module ClientAppInfo {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ClientAppInfo,com.google.firebase.inappmessaging.ClientAppInfo.Builder> implements com.google.firebase.inappmessaging.ClientAppInfoOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfo.Builder>;
						public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
						public hasGoogleAppId(): boolean;
						public setGoogleAppId(param0: string): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public getGoogleAppId(): string;
						public setFirebaseInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						public getFirebaseInstanceId(): string;
						public setGoogleAppIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public setFirebaseInstanceId(param0: string): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public clearGoogleAppId(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public hasFirebaseInstanceId(): boolean;
						public clearFirebaseInstanceId(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class ClientAppInfoOrBuilder {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfoOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.ClientAppInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasGoogleAppId(): boolean;
						getGoogleAppId(): string;
						getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						hasFirebaseInstanceId(): boolean;
						getFirebaseInstanceId(): string;
						getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getFirebaseInstanceId(): string;
					public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					public hasFirebaseInstanceId(): boolean;
					public getGoogleAppId(): string;
					public hasGoogleAppId(): boolean;
					public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class CommonTypesProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module CommonTypesProto {
					export class CampaignState extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static UNKNOWN_CAMPAIGN_STATE: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static DRAFT: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static PUBLISHED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static STOPPED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static DELETED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static UNRECOGNIZED: com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static UNKNOWN_CAMPAIGN_STATE_VALUE: number;
						public static DRAFT_VALUE: number;
						public static PUBLISHED_VALUE: number;
						public static STOPPED_VALUE: number;
						public static DELETED_VALUE: number;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public getNumber(): number;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
					}
					export module CampaignState {
						export class CampaignStateVerifier {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState.CampaignStateVerifier>;
							public isInRange(param0: number): boolean;
						}
					}
					export class CampaignTime extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime,com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime>;
						public static DATE_FIELD_NUMBER: number;
						public static TIME_FIELD_NUMBER: number;
						public static TIME_ZONE_FIELD_NUMBER: number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
						public getTimeZoneBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getDate(): com.google.type.Date;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public hasTime(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public hasDate(): boolean;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTime(): com.google.type.TimeOfDay;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTimeZone(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime>;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
					}
					export module CampaignTime {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime,com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder>;
							public clearDate(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTimeZone(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public mergeDate(param0: com.google.type.Date): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTimeZoneBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public hasDate(): boolean;
							public setTime(param0: com.google.type.TimeOfDay): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setDate(param0: com.google.type.Date): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public hasTime(): boolean;
							public mergeTime(param0: com.google.type.TimeOfDay): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public clearTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public clearTimeZone(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTimeZone(): string;
							public setTime(param0: com.google.type.TimeOfDay.Builder): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTime(): com.google.type.TimeOfDay;
							public getDate(): com.google.type.Date;
							public setDate(param0: com.google.type.Date.Builder): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTimeZoneBytes(): com.google.protobuf.ByteString;
						}
					}
					export class CampaignTimeOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$CampaignTimeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasDate(): boolean;
							getDate(): com.google.type.Date;
							hasTime(): boolean;
							getTime(): com.google.type.TimeOfDay;
							getTimeZone(): string;
							getTimeZoneBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getTimeZoneBytes(): com.google.protobuf.ByteString;
						public getDate(): com.google.type.Date;
						public hasTime(): boolean;
						public getTimeZone(): string;
						public hasDate(): boolean;
						public getTime(): com.google.type.TimeOfDay;
					}
					export class DailyAnalyticsSummary extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
						public static START_OF_DAY_MILLIS_FIELD_NUMBER: number;
						public static IMPRESSIONS_FIELD_NUMBER: number;
						public static CLICKS_FIELD_NUMBER: number;
						public static ERRORS_FIELD_NUMBER: number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getErrors(): number;
						public getImpressions(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getStartOfDayMillis(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getClicks(): number;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
					}
					export module DailyAnalyticsSummary {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder>;
							public getClicks(): number;
							public setStartOfDayMillis(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public getErrors(): number;
							public clearStartOfDayMillis(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearClicks(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setClicks(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearErrors(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setErrors(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public getStartOfDayMillis(): number;
							public getImpressions(): number;
							public clearImpressions(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setImpressions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
						}
					}
					export class DailyAnalyticsSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$DailyAnalyticsSummaryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStartOfDayMillis(): number;
							getImpressions(): number;
							getClicks(): number;
							getErrors(): number;
						});
						public constructor();
						public getStartOfDayMillis(): number;
						public getErrors(): number;
						public getImpressions(): number;
						public getClicks(): number;
					}
					export class DailyConversionSummary extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
						public static START_OF_DAY_MILLIS_FIELD_NUMBER: number;
						public static CONVERSIONS_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						public getStartOfDayMillis(): number;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public getConversions(): number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
					}
					export module DailyConversionSummary {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary,com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder>;
							public setStartOfDayMillis(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public setConversions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public getConversions(): number;
							public getStartOfDayMillis(): number;
							public clearStartOfDayMillis(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public clearConversions(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						}
					}
					export class DailyConversionSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$DailyConversionSummaryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStartOfDayMillis(): number;
							getConversions(): number;
						});
						public constructor();
						public getStartOfDayMillis(): number;
						public getConversions(): number;
					}
					export class Event extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.Event,com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.EventOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Event>;
						public static TRIGGER_PARAMS_FIELD_NUMBER: number;
						public static NAME_FIELD_NUMBER: number;
						public static TIMESTAMP_MILLIS_FIELD_NUMBER: number;
						public static PREVIOUS_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
						public static COUNT_FIELD_NUMBER: number;
						public getTriggerParamsOrBuilderList(): java.util.List<any>;
						public getTimestampMillis(): number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.Event): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
						public getPreviousTimestampMillis(): number;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getName(): string;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTriggerParamsCount(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
						public getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTriggerParamsOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getCount(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.Event>;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
					}
					export module Event {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.Event,com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.EventOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder>;
							public addAllTriggerParams(param0: java.lang.Iterable<any>): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getTimestampMillis(): number;
							public clearPreviousTimestampMillis(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getTriggerParamsCount(): number;
							public getNameBytes(): com.google.protobuf.ByteString;
							public clearCount(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setTimestampMillis(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public clearTriggerParams(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setPreviousTimestampMillis(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setTriggerParams(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public removeTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setCount(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setName(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getCount(): number;
							public getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
							public addTriggerParams(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getName(): string;
							public setTriggerParams(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public clearTimestampMillis(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getPreviousTimestampMillis(): number;
						}
					}
					export class EventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.EventOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$EventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
							getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
							getTriggerParamsCount(): number;
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
							getTimestampMillis(): number;
							getPreviousTimestampMillis(): number;
							getCount(): number;
						});
						public constructor();
						public getTriggerParamsCount(): number;
						public getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getCount(): number;
						public getTimestampMillis(): number;
						public getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getPreviousTimestampMillis(): number;
						public getName(): string;
					}
					export class ExperimentVariant extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant,com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant>;
						public static INDEX_FIELD_NUMBER: number;
						public static CONTENT_FIELD_NUMBER: number;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getIndex(): number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public hasContent(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
					}
					export module ExperimentVariant {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant,com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder>;
							public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public clearIndex(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
							public getIndex(): number;
							public hasContent(): boolean;
							public mergeContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public setIndex(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public clearContent(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						}
					}
					export class ExperimentVariantOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$ExperimentVariantOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getIndex(): number;
							hasContent(): boolean;
							getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						});
						public constructor();
						public hasContent(): boolean;
						public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getIndex(): number;
					}
					export class ExperimentalCampaignState extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public static UNKNOWN_EXPERIMENTAL_CAMPAIGN_STATE: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_DRAFT: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_RUNNING: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_STOPPED: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static EXPERIMENT_ROLLED_OUT: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static UNRECOGNIZED: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static UNKNOWN_EXPERIMENTAL_CAMPAIGN_STATE_VALUE: number;
						public static EXPERIMENT_DRAFT_VALUE: number;
						public static EXPERIMENT_RUNNING_VALUE: number;
						public static EXPERIMENT_STOPPED_VALUE: number;
						public static EXPERIMENT_ROLLED_OUT_VALUE: number;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
					}
					export module ExperimentalCampaignState {
						export class ExperimentalCampaignStateVerifier {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState.ExperimentalCampaignStateVerifier>;
							public isInRange(param0: number): boolean;
						}
					}
					export class Priority extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.Priority,com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Priority>;
						public static VALUE_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.Priority>;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public getValue(): number;
					}
					export module Priority {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.Priority,com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder>;
							public setValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
							public getValue(): number;
							public clearValue(): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						}
					}
					export class PriorityOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$PriorityOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getValue(): number;
						});
						public constructor();
						public getValue(): number;
					}
					export class ScionConversionEvent extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent,com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
						public static NAME_FIELD_NUMBER: number;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getName(): string;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
					}
					export module ScionConversionEvent {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent,com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder>;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public getName(): string;
							public setName(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
						}
					}
					export class ScionConversionEventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$ScionConversionEventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getNameBytes(): com.google.protobuf.ByteString;
						public getName(): string;
					}
					export class Trigger extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static UNKNOWN_TRIGGER: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static APP_LAUNCH: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static ON_FOREGROUND: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static UNRECOGNIZED: com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static UNKNOWN_TRIGGER_VALUE: number;
						public static APP_LAUNCH_VALUE: number;
						public static ON_FOREGROUND_VALUE: number;
						public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
					}
					export module Trigger {
						export class TriggerVerifier {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Trigger.TriggerVerifier>;
							public isInRange(param0: number): boolean;
						}
					}
					export class TriggerParam extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam,com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
						public static NAME_FIELD_NUMBER: number;
						public static STRING_VALUE_FIELD_NUMBER: number;
						public static INT_VALUE_FIELD_NUMBER: number;
						public static FLOAT_VALUE_FIELD_NUMBER: number;
						public static DOUBLE_VALUE_FIELD_NUMBER: number;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getStringValueBytes(): com.google.protobuf.ByteString;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getName(): string;
						public getIntValue(): number;
						public getFloatValue(): number;
						public getDoubleValue(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getStringValue(): string;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
					}
					export module TriggerParam {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam,com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder>;
							public setName(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setStringValue(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setIntValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public getStringValue(): string;
							public setFloatValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getFloatValue(): number;
							public getDoubleValue(): number;
							public clearStringValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getName(): string;
							public getStringValueBytes(): com.google.protobuf.ByteString;
							public clearDoubleValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setStringValueBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setDoubleValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public clearIntValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public clearFloatValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getIntValue(): number;
						}
					}
					export class TriggerParamOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$TriggerParamOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
							getStringValue(): string;
							getStringValueBytes(): com.google.protobuf.ByteString;
							getIntValue(): number;
							getFloatValue(): number;
							getDoubleValue(): number;
						});
						public constructor();
						public getDoubleValue(): number;
						public getStringValue(): string;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getStringValueBytes(): com.google.protobuf.ByteString;
						public getName(): string;
						public getIntValue(): number;
						public getFloatValue(): number;
					}
					export class TriggeringCondition extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition,com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
						public static FIAM_TRIGGER_FIELD_NUMBER: number;
						public static EVENT_FIELD_NUMBER: number;
						public getFiamTriggerValue(): number;
						public getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static newBuilder(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public hasEvent(): boolean;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
					}
					export module TriggeringCondition {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition,com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder>;
							public hasEvent(): boolean;
							public setEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.Event): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public clearFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
							public getFiamTriggerValue(): number;
							public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
							public clearEvent(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public setFiamTriggerValue(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public clearCondition(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public setEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public setFiamTrigger(param0: com.google.firebase.inappmessaging.CommonTypesProto.Trigger): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public mergeEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.Event): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						}
						export class ConditionCase {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase>;
							public static FIAM_TRIGGER: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static EVENT: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static CONDITION_NOT_SET: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static valueOf(param0: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static forNumber(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public getNumber(): number;
							public static values(): native.Array<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase>;
						}
					}
					export class TriggeringConditionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$TriggeringConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFiamTriggerValue(): number;
							getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
							hasEvent(): boolean;
							getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
							getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						});
						public constructor();
						public getFiamTriggerValue(): number;
						public getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						public hasEvent(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class DismissType extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.DismissType>;
					public static UNKNOWN_DISMISS_TYPE: com.google.firebase.inappmessaging.DismissType;
					public static AUTO: com.google.firebase.inappmessaging.DismissType;
					public static CLICK: com.google.firebase.inappmessaging.DismissType;
					public static SWIPE: com.google.firebase.inappmessaging.DismissType;
					public static UNKNOWN_DISMISS_TYPE_VALUE: number;
					public static AUTO_VALUE: number;
					public static CLICK_VALUE: number;
					public static SWIPE_VALUE: number;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.DismissType;
					public getNumber(): number;
					public static values(): native.Array<com.google.firebase.inappmessaging.DismissType>;
					/** @deprecated */
					public static valueOf(param0: number): com.google.firebase.inappmessaging.DismissType;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.DismissType>;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.DismissType;
				}
				export module DismissType {
					export class DismissTypeVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.DismissType.DismissTypeVerifier>;
						public isInRange(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class EventType extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.EventType>;
					public static UNKNOWN_EVENT_TYPE: com.google.firebase.inappmessaging.EventType;
					public static IMPRESSION_EVENT_TYPE: com.google.firebase.inappmessaging.EventType;
					public static CLICK_EVENT_TYPE: com.google.firebase.inappmessaging.EventType;
					public static UNKNOWN_EVENT_TYPE_VALUE: number;
					public static IMPRESSION_EVENT_TYPE_VALUE: number;
					public static CLICK_EVENT_TYPE_VALUE: number;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.EventType;
					public getNumber(): number;
					public static values(): native.Array<com.google.firebase.inappmessaging.EventType>;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.EventType;
					/** @deprecated */
					public static valueOf(param0: number): com.google.firebase.inappmessaging.EventType;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.EventType>;
				}
				export module EventType {
					export class EventTypeVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.EventType.EventTypeVerifier>;
						public isInRange(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class ExperimentPayloadProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module ExperimentPayloadProto {
					export class ExperimentLite extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite,com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public static EXPERIMENT_ID_FIELD_NUMBER: number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static newBuilder(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public static newBuilder(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
					}
					export module ExperimentLite {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite,com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder>;
							public getExperimentId(): string;
							public getExperimentIdBytes(): com.google.protobuf.ByteString;
							public clearExperimentId(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
							public setExperimentIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
							public setExperimentId(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
						}
					}
					export class ExperimentLiteOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.ExperimentPayloadProto$ExperimentLiteOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExperimentId(): string;
							getExperimentIdBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
					}
					export class ExperimentPayload extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload,com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayloadOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload>;
						public static EXPERIMENT_ID_FIELD_NUMBER: number;
						public static VARIANT_ID_FIELD_NUMBER: number;
						public static EXPERIMENT_START_TIME_MILLIS_FIELD_NUMBER: number;
						public static TRIGGER_EVENT_FIELD_NUMBER: number;
						public static TRIGGER_TIMEOUT_MILLIS_FIELD_NUMBER: number;
						public static TIME_TO_LIVE_MILLIS_FIELD_NUMBER: number;
						public static SET_EVENT_TO_LOG_FIELD_NUMBER: number;
						public static ACTIVATE_EVENT_TO_LOG_FIELD_NUMBER: number;
						public static CLEAR_EVENT_TO_LOG_FIELD_NUMBER: number;
						public static TIMEOUT_EVENT_TO_LOG_FIELD_NUMBER: number;
						public static TTL_EXPIRY_EVENT_TO_LOG_FIELD_NUMBER: number;
						public static OVERFLOW_POLICY_FIELD_NUMBER: number;
						public static ONGOING_EXPERIMENTS_FIELD_NUMBER: number;
						public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
						public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getTriggerTimeoutMillis(): number;
						public getActivateEventToLog(): string;
						public getClearEventToLogBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getTriggerEvent(): string;
						public getSetEventToLog(): string;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getOngoingExperimentsList(): java.util.List<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public getTimeoutEventToLog(): string;
						public getOverflowPolicyValue(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getClearEventToLog(): string;
						public getOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
						public getOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public getTimeToLiveMillis(): number;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getOngoingExperimentsOrBuilder(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder;
						public getVariantIdBytes(): com.google.protobuf.ByteString;
						public getOngoingExperimentsOrBuilderList(): java.util.List<any>;
						public getExperimentStartTimeMillis(): number;
						public getTriggerEventBytes(): com.google.protobuf.ByteString;
						public getOngoingExperimentsCount(): number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static newBuilder(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
						public getSetEventToLogBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload>;
						public getVariantId(): string;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getTtlExpiryEventToLog(): string;
						public static newBuilder(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
					}
					export module ExperimentPayload {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload,com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayloadOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder>;
							public getTriggerEvent(): string;
							public clearExperimentStartTimeMillis(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTriggerEventBytes(): com.google.protobuf.ByteString;
							public setOngoingExperiments(param0: number, param1: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getVariantIdBytes(): com.google.protobuf.ByteString;
							public clearSetEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearClearEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setClearEventToLog(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setSetEventToLog(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearTimeoutEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getActivateEventToLog(): string;
							public getOngoingExperimentsList(): java.util.List<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
							public setExperimentStartTimeMillis(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getClearEventToLog(): string;
							public getOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
							public getSetEventToLog(): string;
							public setOngoingExperiments(param0: number, param1: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public removeOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setExperimentId(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setClearEventToLogBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearExperimentId(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearVariantId(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearTriggerTimeoutMillis(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addAllOngoingExperiments(param0: java.lang.Iterable<any>): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTimeoutEventToLog(): string;
							public getOverflowPolicyValue(): number;
							public setOverflowPolicyValue(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTimeToLiveMillis(): number;
							public clearTriggerEvent(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addOngoingExperiments(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearActivateEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTriggerEventBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setOverflowPolicy(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
							public addOngoingExperiments(param0: number, param1: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addOngoingExperiments(param0: number, param1: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTriggerTimeoutMillis(): number;
							public clearOngoingExperiments(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getSetEventToLogBytes(): com.google.protobuf.ByteString;
							public clearTimeToLiveMillis(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getVariantId(): string;
							public setTimeoutEventToLogBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setExperimentIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getClearEventToLogBytes(): com.google.protobuf.ByteString;
							public setSetEventToLogBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setVariantId(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getExperimentStartTimeMillis(): number;
							public setTimeToLiveMillis(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setVariantIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
							public setActivateEventToLogBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTtlExpiryEventToLog(): string;
							public getOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
							public setTriggerTimeoutMillis(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setActivateEventToLog(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTtlExpiryEventToLog(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addOngoingExperiments(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTriggerEvent(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTimeoutEventToLog(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTtlExpiryEventToLogBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getExperimentId(): string;
							public clearTtlExpiryEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getExperimentIdBytes(): com.google.protobuf.ByteString;
							public clearOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getOngoingExperimentsCount(): number;
						}
						export class ExperimentOverflowPolicy extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy>;
							public static POLICY_UNSPECIFIED: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static DISCARD_OLDEST: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static IGNORE_NEWEST: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static UNRECOGNIZED: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static POLICY_UNSPECIFIED_VALUE: number;
							public static DISCARD_OLDEST_VALUE: number;
							public static IGNORE_NEWEST_VALUE: number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static values(): native.Array<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy>;
							public static valueOf(param0: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static forNumber(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy>;
						}
						export module ExperimentOverflowPolicy {
							export class ExperimentOverflowPolicyVerifier {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy.ExperimentOverflowPolicyVerifier>;
								public isInRange(param0: number): boolean;
							}
						}
					}
					export class ExperimentPayloadOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayloadOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.ExperimentPayloadProto$ExperimentPayloadOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExperimentId(): string;
							getExperimentIdBytes(): com.google.protobuf.ByteString;
							getVariantId(): string;
							getVariantIdBytes(): com.google.protobuf.ByteString;
							getExperimentStartTimeMillis(): number;
							getTriggerEvent(): string;
							getTriggerEventBytes(): com.google.protobuf.ByteString;
							getTriggerTimeoutMillis(): number;
							getTimeToLiveMillis(): number;
							getSetEventToLog(): string;
							getSetEventToLogBytes(): com.google.protobuf.ByteString;
							getActivateEventToLog(): string;
							getActivateEventToLogBytes(): com.google.protobuf.ByteString;
							getClearEventToLog(): string;
							getClearEventToLogBytes(): com.google.protobuf.ByteString;
							getTimeoutEventToLog(): string;
							getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
							getTtlExpiryEventToLog(): string;
							getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
							getOverflowPolicyValue(): number;
							getOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							getOngoingExperimentsList(): java.util.List<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
							getOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
							getOngoingExperimentsCount(): number;
						});
						public constructor();
						public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
						public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public getVariantIdBytes(): com.google.protobuf.ByteString;
						public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
						public getExperimentStartTimeMillis(): number;
						public getTriggerTimeoutMillis(): number;
						public getActivateEventToLog(): string;
						public getClearEventToLogBytes(): com.google.protobuf.ByteString;
						public getTriggerEvent(): string;
						public getTriggerEventBytes(): com.google.protobuf.ByteString;
						public getSetEventToLog(): string;
						public getOngoingExperimentsCount(): number;
						public getSetEventToLogBytes(): com.google.protobuf.ByteString;
						public getOngoingExperimentsList(): java.util.List<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public getTimeoutEventToLog(): string;
						public getOverflowPolicyValue(): number;
						public getVariantId(): string;
						public getClearEventToLog(): string;
						public getOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
						public getTtlExpiryEventToLog(): string;
						public getOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public getTimeToLiveMillis(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FetchErrorReason extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FetchErrorReason>;
					public static UNSPECIFIED_FETCH_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static SERVER_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static CLIENT_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static NETWORK_ERROR: com.google.firebase.inappmessaging.FetchErrorReason;
					public static UNSPECIFIED_FETCH_ERROR_VALUE: number;
					public static SERVER_ERROR_VALUE: number;
					public static CLIENT_ERROR_VALUE: number;
					public static NETWORK_ERROR_VALUE: number;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.FetchErrorReason>;
					public getNumber(): number;
					public static values(): native.Array<com.google.firebase.inappmessaging.FetchErrorReason>;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.FetchErrorReason;
					/** @deprecated */
					public static valueOf(param0: number): com.google.firebase.inappmessaging.FetchErrorReason;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.FetchErrorReason;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
				}
				export module FetchErrorReason {
					export class FetchErrorReasonVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FetchErrorReason.FetchErrorReasonVerifier>;
						public isInRange(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessaging {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessaging>;
					public setMessageDisplayComponent(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay): void;
					public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					public triggerEvent(param0: string): void;
					public removeClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
					public removeImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
					public areMessagesSuppressed(): boolean;
					public clearDisplayListener(): void;
					public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
					public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, param1: java.util.concurrent.Executor): void;
					public isAutomaticDataCollectionEnabled(): boolean;
					public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, param1: java.util.concurrent.Executor): void;
					public removeAllListeners(): void;
					public addDismissListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener, param1: java.util.concurrent.Executor): void;
					public removeDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					public setAutomaticDataCollectionEnabled(param0: java.lang.Boolean): void;
					public setMessagesSuppressed(param0: java.lang.Boolean): void;
					public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
					public addDismissListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener): void;
					public setAutomaticDataCollectionEnabled(param0: boolean): void;
					public static getInstance(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
					public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, param1: java.util.concurrent.Executor): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingCampaignAnalyticsProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingCampaignAnalyticsProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingClickListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
					});
					public constructor();
					public messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingContextualTrigger {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingContextualTrigger>;
					public constructor(param0: string);
					public getTriggerName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDismissListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						messageDismissed(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
					});
					public constructor();
					public messageDismissed(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDisplay {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
					});
					public constructor();
					public displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDisplayCallbacks {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
						messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
						messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
						displayErrorEncountered(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
					});
					public constructor();
					public messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
					public displayErrorEncountered(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
					public impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
				export module FirebaseInAppMessagingDisplayCallbacks {
					export class InAppMessagingDismissType {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType>;
						public static UNKNOWN_DISMISS_TYPE: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static AUTO: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static CLICK: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static SWIPE: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
						public static values(): native.Array<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType>;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
					}
					export class InAppMessagingErrorReason {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason>;
						public static UNSPECIFIED_RENDER_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_FETCH_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_DISPLAY_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_UNSUPPORTED_FORMAT: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static values(): native.Array<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingDisplayErrorListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
					});
					public constructor();
					public displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingImpressionListener {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
					});
					public constructor();
					public impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessagingRegistrar {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingRegistrar>;
					public constructor();
					public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class FirebaseInAppMessaging_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.FirebaseInAppMessaging> {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessaging_Factory>;
					public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param3: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>): com.google.firebase.inappmessaging.FirebaseInAppMessaging_Factory;
					public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param3: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>);
					public get(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
					public static newInstance(param0: com.google.firebase.inappmessaging.internal.InAppMessageStreamManager, param1: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers, param2: com.google.firebase.inappmessaging.internal.DataCollectionHelper, param3: com.google.firebase.installations.FirebaseInstallationsApi, param4: com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory, param5: com.google.firebase.inappmessaging.internal.DeveloperListenerManager): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class MessagesProto {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module MessagesProto {
					export class Action extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Action,com.google.firebase.inappmessaging.MessagesProto.Action.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Action>;
						public static ACTION_URL_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getActionUrlBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getActionUrl(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Action>;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module Action {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Action,com.google.firebase.inappmessaging.MessagesProto.Action.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Action.Builder>;
							public getActionUrlBytes(): com.google.protobuf.ByteString;
							public getActionUrl(): string;
							public setActionUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
							public clearActionUrl(): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
							public setActionUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						}
					}
					export class ActionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ActionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getActionUrl(): string;
							getActionUrlBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getActionUrlBytes(): com.google.protobuf.ByteString;
						public getActionUrl(): string;
					}
					export class BannerMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.BannerMessage,com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessage>;
						public static TITLE_FIELD_NUMBER: number;
						public static BODY_FIELD_NUMBER: number;
						public static IMAGE_URL_FIELD_NUMBER: number;
						public static ACTION_FIELD_NUMBER: number;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number;
						public hasTitle(): boolean;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public hasAction(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public hasBody(): boolean;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getBackgroundHexColor(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.BannerMessage>;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module BannerMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.BannerMessage,com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder>;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public hasAction(): boolean;
							public getBackgroundHexColor(): string;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public setBackgroundHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public hasTitle(): boolean;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public mergeAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public hasBody(): boolean;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						}
					}
					export class BannerMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$BannerMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasTitle(): boolean;
							getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							hasBody(): boolean;
							getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getImageUrl(): string;
							getImageUrlBytes(): com.google.protobuf.ByteString;
							hasAction(): boolean;
							getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							getBackgroundHexColor(): string;
							getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public hasBody(): boolean;
						public getBackgroundHexColor(): string;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public hasAction(): boolean;
						public hasTitle(): boolean;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class Button extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Button,com.google.firebase.inappmessaging.MessagesProto.Button.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Button>;
						public static TEXT_FIELD_NUMBER: number;
						public static BUTTON_HEX_COLOR_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getButtonHexColor(): string;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Button;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public hasText(): boolean;
						public getButtonHexColorBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Button>;
					}
					export module Button {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Button,com.google.firebase.inappmessaging.MessagesProto.Button.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Button.Builder>;
							public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public mergeText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setButtonHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public getButtonHexColorBytes(): com.google.protobuf.ByteString;
							public hasText(): boolean;
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setButtonHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public clearText(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public getButtonHexColor(): string;
							public clearButtonHexColor(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						}
					}
					export class ButtonOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ButtonOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasText(): boolean;
							getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getButtonHexColor(): string;
							getButtonHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getButtonHexColor(): string;
						public hasText(): boolean;
						public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getButtonHexColorBytes(): com.google.protobuf.ByteString;
					}
					export class CardMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.CardMessage,com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessage>;
						public static TITLE_FIELD_NUMBER: number;
						public static BODY_FIELD_NUMBER: number;
						public static PORTRAIT_IMAGE_URL_FIELD_NUMBER: number;
						public static LANDSCAPE_IMAGE_URL_FIELD_NUMBER: number;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number;
						public static PRIMARY_ACTION_BUTTON_FIELD_NUMBER: number;
						public static PRIMARY_ACTION_FIELD_NUMBER: number;
						public static SECONDARY_ACTION_BUTTON_FIELD_NUMBER: number;
						public static SECONDARY_ACTION_FIELD_NUMBER: number;
						public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public hasTitle(): boolean;
						public hasPrimaryActionButton(): boolean;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.CardMessage>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
						public hasPrimaryAction(): boolean;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public hasBody(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getBackgroundHexColor(): string;
						public getPortraitImageUrl(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
						public hasSecondaryAction(): boolean;
						public hasSecondaryActionButton(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getLandscapeImageUrl(): string;
					}
					export module CardMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.CardMessage,com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder>;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public setPrimaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setPrimaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setPortraitImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPortraitImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasSecondaryAction(): boolean;
							public clearPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPrimaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeSecondaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public clearPortraitImageUrl(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasBody(): boolean;
							public hasPrimaryActionButton(): boolean;
							public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public hasPrimaryAction(): boolean;
							public setPrimaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBackgroundHexColor(): string;
							public setSecondaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBackgroundHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasTitle(): boolean;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getLandscapeImageUrl(): string;
							public setSecondaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setLandscapeImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
							public setLandscapeImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public hasSecondaryActionButton(): boolean;
							public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
							public clearPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getPortraitImageUrl(): string;
							public mergePrimaryAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeSecondaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearLandscapeImageUrl(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergePrimaryActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						}
					}
					export class CardMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$CardMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasTitle(): boolean;
							getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							hasBody(): boolean;
							getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getPortraitImageUrl(): string;
							getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
							getLandscapeImageUrl(): string;
							getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
							getBackgroundHexColor(): string;
							getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							hasPrimaryActionButton(): boolean;
							getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							hasPrimaryAction(): boolean;
							getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							hasSecondaryActionButton(): boolean;
							getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							hasSecondaryAction(): boolean;
							getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						});
						public constructor();
						public hasBody(): boolean;
						public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getBackgroundHexColor(): string;
						public getPortraitImageUrl(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public hasTitle(): boolean;
						public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
						public hasPrimaryActionButton(): boolean;
						public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public hasSecondaryAction(): boolean;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public hasSecondaryActionButton(): boolean;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
						public hasPrimaryAction(): boolean;
						public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getLandscapeImageUrl(): string;
					}
					export class Content extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Content,com.google.firebase.inappmessaging.MessagesProto.Content.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content>;
						public static BANNER_FIELD_NUMBER: number;
						public static MODAL_FIELD_NUMBER: number;
						public static IMAGE_ONLY_FIELD_NUMBER: number;
						public static CARD_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public hasModal(): boolean;
						public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public hasImageOnly(): boolean;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						public hasBanner(): boolean;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Content>;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Content;
						public hasCard(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
					}
					export module Content {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Content,com.google.firebase.inappmessaging.MessagesProto.Content.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content.Builder>;
							public clearCard(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setImageOnly(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setCard(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeImageOnly(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setBanner(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public hasBanner(): boolean;
							public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
							public mergeBanner(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public hasImageOnly(): boolean;
							public clearModal(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public hasCard(): boolean;
							public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
							public setBanner(param0: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setModal(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearMessageDetails(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearBanner(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeCard(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
							public mergeModal(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
							public clearImageOnly(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public setModal(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setImageOnly(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public hasModal(): boolean;
							public setCard(param0: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						}
						export class MessageDetailsCase {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase>;
							public static BANNER: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static MODAL: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static IMAGE_ONLY: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static CARD: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static MESSAGEDETAILS_NOT_SET: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static valueOf(param0: string): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public getNumber(): number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static forNumber(param0: number): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static values(): native.Array<com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase>;
						}
					}
					export class ContentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ContentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasBanner(): boolean;
							getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
							hasModal(): boolean;
							getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
							hasImageOnly(): boolean;
							getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
							hasCard(): boolean;
							getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
							getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						});
						public constructor();
						public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public hasImageOnly(): boolean;
						public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						public hasBanner(): boolean;
						public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasModal(): boolean;
						public hasCard(): boolean;
					}
					export class ImageOnlyMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage,com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage>;
						public static IMAGE_URL_FIELD_NUMBER: number;
						public static ACTION_FIELD_NUMBER: number;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public hasAction(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
					}
					export module ImageOnlyMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage,com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder>;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public hasAction(): boolean;
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public mergeAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						}
					}
					export class ImageOnlyMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ImageOnlyMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getImageUrl(): string;
							getImageUrlBytes(): com.google.protobuf.ByteString;
							hasAction(): boolean;
							getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						});
						public constructor();
						public hasAction(): boolean;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class ModalMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.ModalMessage,com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessage>;
						public static TITLE_FIELD_NUMBER: number;
						public static BODY_FIELD_NUMBER: number;
						public static IMAGE_URL_FIELD_NUMBER: number;
						public static ACTION_BUTTON_FIELD_NUMBER: number;
						public static ACTION_FIELD_NUMBER: number;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number;
						public hasActionButton(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasTitle(): boolean;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.ModalMessage>;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasAction(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasBody(): boolean;
						public getBackgroundHexColor(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module ModalMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.ModalMessage,com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder>;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasAction(): boolean;
							public setActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getBackgroundHexColor(): string;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public hasTitle(): boolean;
							public setImageUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeActionButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public setBackgroundHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasActionButton(): boolean;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearActionButton(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public mergeAction(param0: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeBody(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasBody(): boolean;
						}
					}
					export class ModalMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ModalMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasTitle(): boolean;
							getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							hasBody(): boolean;
							getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							getImageUrl(): string;
							getImageUrlBytes(): com.google.protobuf.ByteString;
							hasActionButton(): boolean;
							getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							hasAction(): boolean;
							getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							getBackgroundHexColor(): string;
							getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public hasBody(): boolean;
						public hasActionButton(): boolean;
						public getBackgroundHexColor(): string;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public hasAction(): boolean;
						public hasTitle(): boolean;
						public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class Text extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Text,com.google.firebase.inappmessaging.MessagesProto.Text.Builder> implements com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Text>;
						public static TEXT_FIELD_NUMBER: number;
						public static HEX_COLOR_FIELD_NUMBER: number;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Text>;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getHexColor(): string;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getHexColorBytes(): com.google.protobuf.ByteString;
						public static newBuilder(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getText(): string;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						public getTextBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Text;
					}
					export module Text {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Text,com.google.firebase.inappmessaging.MessagesProto.Text.Builder> implements com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Text.Builder>;
							public clearHexColor(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public clearText(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getText(): string;
							public setHexColor(param0: string): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public setHexColorBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getHexColorBytes(): com.google.protobuf.ByteString;
							public getTextBytes(): com.google.protobuf.ByteString;
							public setTextBytes(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getHexColor(): string;
							public setText(param0: string): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						}
					}
					export class TextOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$TextOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getText(): string;
							getTextBytes(): com.google.protobuf.ByteString;
							getHexColor(): string;
							getHexColorBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getTextBytes(): com.google.protobuf.ByteString;
						public getHexColor(): string;
						public getHexColorBytes(): com.google.protobuf.ByteString;
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export class RenderErrorReason extends com.google.protobuf.Internal.EnumLite {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.RenderErrorReason>;
					public static UNSPECIFIED_RENDER_ERROR: com.google.firebase.inappmessaging.RenderErrorReason;
					public static IMAGE_FETCH_ERROR: com.google.firebase.inappmessaging.RenderErrorReason;
					public static IMAGE_DISPLAY_ERROR: com.google.firebase.inappmessaging.RenderErrorReason;
					public static IMAGE_UNSUPPORTED_FORMAT: com.google.firebase.inappmessaging.RenderErrorReason;
					public static UNSPECIFIED_RENDER_ERROR_VALUE: number;
					public static IMAGE_FETCH_ERROR_VALUE: number;
					public static IMAGE_DISPLAY_ERROR_VALUE: number;
					public static IMAGE_UNSUPPORTED_FORMAT_VALUE: number;
					public static valueOf(param0: string): com.google.firebase.inappmessaging.RenderErrorReason;
					public getNumber(): number;
					public static forNumber(param0: number): com.google.firebase.inappmessaging.RenderErrorReason;
					/** @deprecated */
					public static valueOf(param0: number): com.google.firebase.inappmessaging.RenderErrorReason;
					public static values(): native.Array<com.google.firebase.inappmessaging.RenderErrorReason>;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.RenderErrorReason>;
				}
				export module RenderErrorReason {
					export class RenderErrorReasonVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.RenderErrorReason.RenderErrorReasonVerifier>;
						public isInRange(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module dagger {
					export class Binds {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Binds>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Binds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module inappmessaging {
				export module dagger {
					export class BindsInstance {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.BindsInstance>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.BindsInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module inappmessaging {
				export module dagger {
					export class BindsOptionalOf {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.BindsOptionalOf>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.BindsOptionalOf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module inappmessaging {
				export module dagger {
					export class Component {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Component>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							modules(): native.Array<java.lang.Class<any>>;
							dependencies(): native.Array<java.lang.Class<any>>;
						});
						public constructor();
						public modules(): native.Array<java.lang.Class<any>>;
						public dependencies(): native.Array<java.lang.Class<any>>;
					}
					export module Component {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Component.Builder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class Factory {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Component.Factory>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Component$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export class Lazy<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Lazy<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
						public get(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module dagger {
					export class MapKey {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.MapKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.MapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							unwrapValue(): boolean;
						});
						public constructor();
						public unwrapValue(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module dagger {
					export class MembersInjector<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.MembersInjector<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.MembersInjector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							injectMembers(param0: T): void;
						});
						public constructor();
						public injectMembers(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module dagger {
					export class Module {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Module>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							includes(): native.Array<java.lang.Class<any>>;
							subcomponents(): native.Array<java.lang.Class<any>>;
						});
						public constructor();
						public includes(): native.Array<java.lang.Class<any>>;
						public subcomponents(): native.Array<java.lang.Class<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module dagger {
					export class Provides {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Provides>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Provides interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module inappmessaging {
				export module dagger {
					export class Reusable {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Reusable>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Reusable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module inappmessaging {
				export module dagger {
					export class Subcomponent {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Subcomponent>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Subcomponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							modules(): native.Array<java.lang.Class<any>>;
						});
						public constructor();
						public modules(): native.Array<java.lang.Class<any>>;
					}
					export module Subcomponent {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Subcomponent.Builder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Subcomponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class Factory {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Subcomponent.Factory>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Subcomponent$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export abstract class AbstractMapFactory<K, V, V2>  extends com.google.firebase.inappmessaging.dagger.internal.Factory<java.util.Map<any,any>> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory<any,any,any>>;
						}
						export module AbstractMapFactory {
							export abstract class Builder<K, V, V2>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory.Builder<any,any,any>>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class Beta {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.Beta>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class ComponentDefinitionType {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.ComponentDefinitionType>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.ComponentDefinitionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): java.lang.Class<any>;
							});
							public constructor();
							public value(): java.lang.Class<any>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class DaggerCollections {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.DaggerCollections>;
							public static hasDuplicates(param0: java.util.List<any>): boolean;
							public static presizedList(param0: number): java.util.List;
							public static newLinkedHashMapWithExpectedSize(param0: number): java.util.LinkedHashMap;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class DelegateFactory<T>  extends com.google.firebase.inappmessaging.dagger.internal.Factory<any> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.DelegateFactory<any>>;
							public constructor();
							public get(): any;
							/** @deprecated */
							public setDelegatedProvider(param0: javax.inject.Provider<any>): void;
							public static setDelegate(param0: javax.inject.Provider, param1: javax.inject.Provider): void;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class DoubleCheck<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.DoubleCheck<any>>;
							public static provider(param0: javax.inject.Provider): javax.inject.Provider;
							public static reentrantCheck(param0: any, param1: any): any;
							public get(): T;
							public static lazy(param0: javax.inject.Provider): com.google.firebase.inappmessaging.dagger.Lazy<any>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class Factory<T>  extends javax.inject.Provider<any> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.Factory<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class GwtIncompatible {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.GwtIncompatible>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.GwtIncompatible interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class InjectedFieldSignature {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.InjectedFieldSignature>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.InjectedFieldSignature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): string;
							});
							public constructor();
							public value(): string;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class InstanceFactory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.InstanceFactory<any>>;
							public static create(param0: any): com.google.firebase.inappmessaging.dagger.internal.Factory<any>;
							public static createNullable(param0: any): com.google.firebase.inappmessaging.dagger.internal.Factory<any>;
							public get(): T;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class MapBuilder<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MapBuilder<any,any>>;
							public putAll(param0: java.util.Map<K,V>): com.google.firebase.inappmessaging.dagger.internal.MapBuilder<K,V>;
							public put(param0: K, param1: V): com.google.firebase.inappmessaging.dagger.internal.MapBuilder<K,V>;
							public static newMapBuilder(param0: number): com.google.firebase.inappmessaging.dagger.internal.MapBuilder<any,any>;
							public build(): java.util.Map<K,V>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class MapFactory<K, V>  extends com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory<any,any,any> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MapFactory<any,any>>;
							public static builder(param0: number): com.google.firebase.inappmessaging.dagger.internal.MapFactory.Builder<any,any>;
							public static emptyMapProvider(): javax.inject.Provider;
							public get(): java.util.Map<any,any>;
						}
						export module MapFactory {
							export class Builder<K, V>  extends com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory.Builder<any,any,any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MapFactory.Builder<any,any>>;
								public putAll(param0: javax.inject.Provider<java.util.Map<any,any>>): com.google.firebase.inappmessaging.dagger.internal.MapFactory.Builder<any,any>;
								public put(param0: any, param1: javax.inject.Provider<any>): com.google.firebase.inappmessaging.dagger.internal.MapFactory.Builder<any,any>;
								public build(): com.google.firebase.inappmessaging.dagger.internal.MapFactory<any,any>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class MapProviderFactory<K, V>  extends com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory<any,any,javax.inject.Provider<any>> implements com.google.firebase.inappmessaging.dagger.Lazy<java.util.Map<any,javax.inject.Provider<any>>>  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory<any,any>>;
							public get(): any;
							public static builder(param0: number): com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory.Builder<any,any>;
							public get(): java.util.Map<any,javax.inject.Provider<any>>;
						}
						export module MapProviderFactory {
							export class Builder<K, V>  extends com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory.Builder<any,any,javax.inject.Provider<any>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory.Builder<any,any>>;
								public build(): com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory<any,any>;
								public putAll(param0: javax.inject.Provider<java.util.Map<any,javax.inject.Provider<any>>>): com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory.Builder<any,any>;
								public put(param0: any, param1: javax.inject.Provider<any>): com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory.Builder<any,any>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class MembersInjectors {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MembersInjectors>;
							public static noOp(): com.google.firebase.inappmessaging.dagger.MembersInjector<any>;
						}
						export module MembersInjectors {
							export class NoOpMembersInjector extends com.google.firebase.inappmessaging.dagger.MembersInjector<any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MembersInjectors.NoOpMembersInjector>;
								public static INSTANCE: com.google.firebase.inappmessaging.dagger.internal.MembersInjectors.NoOpMembersInjector;
								public static values(): native.Array<com.google.firebase.inappmessaging.dagger.internal.MembersInjectors.NoOpMembersInjector>;
								public static valueOf(param0: string): com.google.firebase.inappmessaging.dagger.internal.MembersInjectors.NoOpMembersInjector;
								public injectMembers(param0: any): void;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class MemoizedSentinel {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.MemoizedSentinel>;
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class Preconditions {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.Preconditions>;
							public static checkNotNull(param0: any, param1: string): any;
							public static checkBuilderRequirement(param0: any, param1: java.lang.Class): void;
							public static checkNotNull(param0: any, param1: string, param2: any): any;
							public static checkNotNull(param0: any): any;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class ProviderOfLazy<T>  extends javax.inject.Provider<com.google.firebase.inappmessaging.dagger.Lazy<any>> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.ProviderOfLazy<any>>;
							public get(): com.google.firebase.inappmessaging.dagger.Lazy<any>;
							public static create(param0: javax.inject.Provider): javax.inject.Provider;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class SetBuilder<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.SetBuilder<any>>;
							public static newSetBuilder(param0: number): com.google.firebase.inappmessaging.dagger.internal.SetBuilder<any>;
							public addAll(param0: java.util.Collection<any>): com.google.firebase.inappmessaging.dagger.internal.SetBuilder<T>;
							public build(): java.util.Set<T>;
							public add(param0: T): com.google.firebase.inappmessaging.dagger.internal.SetBuilder<T>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class SetFactory<T>  extends com.google.firebase.inappmessaging.dagger.internal.Factory<java.util.Set<any>> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.SetFactory<any>>;
							public static builder(param0: number, param1: number): com.google.firebase.inappmessaging.dagger.internal.SetFactory.Builder<any>;
							public get(): java.util.Set<any>;
							public static empty(): com.google.firebase.inappmessaging.dagger.internal.Factory<any>;
						}
						export module SetFactory {
							export class Builder<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.SetFactory.Builder<any>>;
								public addProvider(param0: javax.inject.Provider<any>): com.google.firebase.inappmessaging.dagger.internal.SetFactory.Builder<T>;
								public addCollectionProvider(param0: javax.inject.Provider<any>): com.google.firebase.inappmessaging.dagger.internal.SetFactory.Builder<T>;
								public build(): com.google.firebase.inappmessaging.dagger.internal.SetFactory<T>;
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
			export module inappmessaging {
				export module dagger {
					export module internal {
						export class SingleCheck<T>  extends javax.inject.Provider<any> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.SingleCheck<any>>;
							public get(): any;
							public static provider(param0: javax.inject.Provider): javax.inject.Provider;
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class ClassKey {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.ClassKey>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.ClassKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): java.lang.Class<any>;
							});
							public constructor();
							public value(): java.lang.Class<any>;
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class ElementsIntoSet {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.ElementsIntoSet>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.ElementsIntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class IntKey {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.IntKey>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.IntKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): number;
							});
							public constructor();
							public value(): number;
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class IntoMap {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.IntoMap>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.IntoMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class IntoSet {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.IntoSet>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.IntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class LongKey {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.LongKey>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): number;
							});
							public constructor();
							public value(): number;
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class Multibinds {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.Multibinds>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.Multibinds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module dagger {
					export module multibindings {
						export class StringKey {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.multibindings.StringKey>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.multibindings.StringKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								value(): string;
							});
							public constructor();
							public value(): string;
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
			export module inappmessaging {
				export module display {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.display.BuildConfig>;
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
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module display {
					export class FiamListener {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.display.FiamListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.display.FiamListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFiamTrigger(): void;
							onFiamClick(): void;
							onFiamDismiss(): void;
						});
						public constructor();
						public onFiamClick(): void;
						public onFiamTrigger(): void;
						public onFiamDismiss(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module display {
					export class FirebaseInAppMessagingDisplay extends com.google.firebase.inappmessaging.display.internal.FirebaseInAppMessagingDisplayImpl {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public setFiamListener(param0: com.google.firebase.inappmessaging.display.FiamListener): void;
						public static getInstance(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
						public displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
						public clearFiamListener(): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public testMessage(param0: globalAndroid.app.Activity, param1: com.google.firebase.inappmessaging.model.InAppMessage, param2: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module display {
					export class FirebaseInAppMessagingDisplayRegistrar {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayRegistrar>;
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
			export module inappmessaging {
				export module display {
					export class FirebaseInAppMessagingDisplay_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.FirebaseInAppMessaging>, param1: javax.inject.Provider<java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamImageLoader>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.RenewableTimer>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.RenewableTimer>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamWindowManager>, param6: javax.inject.Provider<globalAndroid.app.Application>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory>, param8: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamAnimator>);
						public static newInstance(param0: com.google.firebase.inappmessaging.FirebaseInAppMessaging, param1: java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>, param2: com.google.firebase.inappmessaging.display.internal.FiamImageLoader, param3: com.google.firebase.inappmessaging.display.internal.RenewableTimer, param4: com.google.firebase.inappmessaging.display.internal.RenewableTimer, param5: com.google.firebase.inappmessaging.display.internal.FiamWindowManager, param6: globalAndroid.app.Application, param7: com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory, param8: com.google.firebase.inappmessaging.display.internal.FiamAnimator): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
						public get(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.FirebaseInAppMessaging>, param1: javax.inject.Provider<java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamImageLoader>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.RenewableTimer>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.RenewableTimer>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamWindowManager>, param6: javax.inject.Provider<globalAndroid.app.Application>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory>, param8: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamAnimator>): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay_Factory;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Binds {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Binds>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Binds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class BindsInstance {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.BindsInstance>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.BindsInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class BindsOptionalOf {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.BindsOptionalOf>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.BindsOptionalOf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Component {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Component>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								modules(): native.Array<java.lang.Class<any>>;
								dependencies(): native.Array<java.lang.Class<any>>;
							});
							public constructor();
							public dependencies(): native.Array<java.lang.Class<any>>;
							public modules(): native.Array<java.lang.Class<any>>;
						}
						export module Component {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Component.Builder>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class Factory {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Component.Factory>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Component$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Lazy<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Lazy<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(): T;
							});
							public constructor();
							public get(): T;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class MapKey {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.MapKey>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.MapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								unwrapValue(): boolean;
							});
							public constructor();
							public unwrapValue(): boolean;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class MembersInjector<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.MembersInjector<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.MembersInjector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								injectMembers(param0: T): void;
							});
							public constructor();
							public injectMembers(param0: T): void;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Module {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Module>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								includes(): native.Array<java.lang.Class<any>>;
								subcomponents(): native.Array<java.lang.Class<any>>;
							});
							public constructor();
							public subcomponents(): native.Array<java.lang.Class<any>>;
							public includes(): native.Array<java.lang.Class<any>>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Provides {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Provides>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Provides interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Reusable {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Reusable>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Reusable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export class Subcomponent {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Subcomponent>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Subcomponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								modules(): native.Array<java.lang.Class<any>>;
							});
							public constructor();
							public modules(): native.Array<java.lang.Class<any>>;
						}
						export module Subcomponent {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Subcomponent.Builder>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Subcomponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class Factory {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Subcomponent.Factory>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Subcomponent$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export abstract class AbstractMapFactory<K, V, V2>  extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<java.util.Map<any,any>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory<any,any,any>>;
							}
							export module AbstractMapFactory {
								export abstract class Builder<K, V, V2>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory.Builder<any,any,any>>;
								}
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class Beta {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.Beta>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class ComponentDefinitionType {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.ComponentDefinitionType>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.ComponentDefinitionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(): java.lang.Class<any>;
								});
								public constructor();
								public value(): java.lang.Class<any>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class DaggerCollections {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.DaggerCollections>;
								public static newLinkedHashMapWithExpectedSize(param0: number): java.util.LinkedHashMap;
								public static hasDuplicates(param0: java.util.List<any>): boolean;
								public static presizedList(param0: number): java.util.List;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class DelegateFactory<T>  extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.DelegateFactory<any>>;
								/** @deprecated */
								public setDelegatedProvider(param0: javax.inject.Provider<any>): void;
								public get(): any;
								public constructor();
								public static setDelegate(param0: javax.inject.Provider, param1: javax.inject.Provider): void;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class DoubleCheck<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.DoubleCheck<any>>;
								public get(): T;
								public static lazy(param0: javax.inject.Provider): com.google.firebase.inappmessaging.display.dagger.Lazy<any>;
								public static provider(param0: javax.inject.Provider): javax.inject.Provider;
								public static reentrantCheck(param0: any, param1: any): any;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class Factory<T>  extends javax.inject.Provider<any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.Factory<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class GwtIncompatible {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.GwtIncompatible>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.GwtIncompatible interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class InjectedFieldSignature {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.InjectedFieldSignature>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.InjectedFieldSignature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(): string;
								});
								public constructor();
								public value(): string;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class InstanceFactory<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.InstanceFactory<any>>;
								public get(): T;
								public static createNullable(param0: any): com.google.firebase.inappmessaging.display.dagger.internal.Factory<any>;
								public static create(param0: any): com.google.firebase.inappmessaging.display.dagger.internal.Factory<any>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class MapBuilder<K, V>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<any,any>>;
								public build(): java.util.Map<K,V>;
								public static newMapBuilder(param0: number): com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<any,any>;
								public put(param0: K, param1: V): com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<K,V>;
								public putAll(param0: java.util.Map<K,V>): com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<K,V>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class MapFactory<K, V>  extends com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory<any,any,any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MapFactory<any,any>>;
								public get(): java.util.Map<any,any>;
								public static builder(param0: number): com.google.firebase.inappmessaging.display.dagger.internal.MapFactory.Builder<any,any>;
								public static emptyMapProvider(): javax.inject.Provider;
							}
							export module MapFactory {
								export class Builder<K, V>  extends com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory.Builder<any,any,any> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MapFactory.Builder<any,any>>;
									public putAll(param0: javax.inject.Provider<java.util.Map<any,any>>): com.google.firebase.inappmessaging.display.dagger.internal.MapFactory.Builder<any,any>;
									public build(): com.google.firebase.inappmessaging.display.dagger.internal.MapFactory<any,any>;
									public put(param0: any, param1: javax.inject.Provider<any>): com.google.firebase.inappmessaging.display.dagger.internal.MapFactory.Builder<any,any>;
								}
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class MapProviderFactory<K, V>  extends com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory<any,any,javax.inject.Provider<any>> implements com.google.firebase.inappmessaging.display.dagger.Lazy<java.util.Map<any,javax.inject.Provider<any>>>  {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory<any,any>>;
								public static builder(param0: number): com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory.Builder<any,any>;
								public get(): java.util.Map<any,javax.inject.Provider<any>>;
								public get(): any;
							}
							export module MapProviderFactory {
								export class Builder<K, V>  extends com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory.Builder<any,any,javax.inject.Provider<any>> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory.Builder<any,any>>;
									public put(param0: any, param1: javax.inject.Provider<any>): com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory.Builder<any,any>;
									public putAll(param0: javax.inject.Provider<java.util.Map<any,javax.inject.Provider<any>>>): com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory.Builder<any,any>;
									public build(): com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory<any,any>;
								}
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class MembersInjectors {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MembersInjectors>;
								public static noOp(): com.google.firebase.inappmessaging.display.dagger.MembersInjector<any>;
							}
							export module MembersInjectors {
								export class NoOpMembersInjector extends com.google.firebase.inappmessaging.display.dagger.MembersInjector<any> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MembersInjectors.NoOpMembersInjector>;
									public static INSTANCE: com.google.firebase.inappmessaging.display.dagger.internal.MembersInjectors.NoOpMembersInjector;
									public static values(): native.Array<com.google.firebase.inappmessaging.display.dagger.internal.MembersInjectors.NoOpMembersInjector>;
									public static valueOf(param0: string): com.google.firebase.inappmessaging.display.dagger.internal.MembersInjectors.NoOpMembersInjector;
									public injectMembers(param0: any): void;
								}
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class MemoizedSentinel {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MemoizedSentinel>;
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class Preconditions {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.Preconditions>;
								public static checkBuilderRequirement(param0: any, param1: java.lang.Class): void;
								public static checkNotNull(param0: any): any;
								public static checkNotNull(param0: any, param1: string): any;
								public static checkNotNull(param0: any, param1: string, param2: any): any;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class ProviderOfLazy<T>  extends javax.inject.Provider<com.google.firebase.inappmessaging.display.dagger.Lazy<any>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.ProviderOfLazy<any>>;
								public static create(param0: javax.inject.Provider): javax.inject.Provider;
								public get(): com.google.firebase.inappmessaging.display.dagger.Lazy<any>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class SetBuilder<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.SetBuilder<any>>;
								public static newSetBuilder(param0: number): com.google.firebase.inappmessaging.display.dagger.internal.SetBuilder<any>;
								public build(): java.util.Set<T>;
								public add(param0: T): com.google.firebase.inappmessaging.display.dagger.internal.SetBuilder<T>;
								public addAll(param0: java.util.Collection<any>): com.google.firebase.inappmessaging.display.dagger.internal.SetBuilder<T>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class SetFactory<T>  extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<java.util.Set<any>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.SetFactory<any>>;
								public get(): java.util.Set<any>;
								public static empty(): com.google.firebase.inappmessaging.display.dagger.internal.Factory<any>;
								public static builder(param0: number, param1: number): com.google.firebase.inappmessaging.display.dagger.internal.SetFactory.Builder<any>;
							}
							export module SetFactory {
								export class Builder<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.SetFactory.Builder<any>>;
									public addProvider(param0: javax.inject.Provider<any>): com.google.firebase.inappmessaging.display.dagger.internal.SetFactory.Builder<T>;
									public addCollectionProvider(param0: javax.inject.Provider<any>): com.google.firebase.inappmessaging.display.dagger.internal.SetFactory.Builder<T>;
									public build(): com.google.firebase.inappmessaging.display.dagger.internal.SetFactory<T>;
								}
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module internal {
							export class SingleCheck<T>  extends javax.inject.Provider<any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.SingleCheck<any>>;
								public get(): any;
								public static provider(param0: javax.inject.Provider): javax.inject.Provider;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class ClassKey {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.ClassKey>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.ClassKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(): java.lang.Class<any>;
								});
								public constructor();
								public value(): java.lang.Class<any>;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class ElementsIntoSet {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.ElementsIntoSet>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.ElementsIntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class IntKey {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.IntKey>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.IntKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(): number;
								});
								public constructor();
								public value(): number;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class IntoMap {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.IntoMap>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.IntoMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class IntoSet {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.IntoSet>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.IntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class LongKey {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.LongKey>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(): number;
								});
								public constructor();
								public value(): number;
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class Multibinds {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.Multibinds>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.Multibinds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module display {
					export module dagger {
						export module multibindings {
							export class StringKey {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.StringKey>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.StringKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									value(): string;
								});
								public constructor();
								public value(): string;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class BindingWrapperFactory {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory>;
							public createModalBindingWrapper(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
							public createBannerBindingWrapper(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
							public createCardBindingWrapper(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
							public createImageBindingWrapper(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class BindingWrapperFactory_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory_Factory>;
							public get(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
							public static create(param0: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory_Factory;
							public constructor(param0: javax.inject.Provider<globalAndroid.app.Application>);
							public static newInstance(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FiamAnimator {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator>;
							public slideIntoView(param0: globalAndroid.app.Application, param1: globalAndroid.view.View, param2: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position): void;
							public slideOutOfView(param0: globalAndroid.app.Application, param1: globalAndroid.view.View, param2: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position, param3: com.google.firebase.inappmessaging.display.internal.FiamAnimator.AnimationCompleteListener): void;
						}
						export module FiamAnimator {
							export class AnimationCompleteListener {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator.AnimationCompleteListener>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.FiamAnimator$AnimationCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onComplete(): void;
								});
								public constructor();
								public onComplete(): void;
							}
							export class Position {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position>;
								public static LEFT: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static RIGHT: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static TOP: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static BOTTOM: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static values(): native.Array<com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position>;
								public static valueOf(param0: string): com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FiamAnimator_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.FiamAnimator> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator_Factory>;
							public constructor();
							public get(): com.google.firebase.inappmessaging.display.internal.FiamAnimator;
							public static newInstance(): com.google.firebase.inappmessaging.display.internal.FiamAnimator;
							public static create(): com.google.firebase.inappmessaging.display.internal.FiamAnimator_Factory;
						}
						export module FiamAnimator_Factory {
							export class InstanceHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator_Factory.InstanceHolder>;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FiamImageLoader {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamImageLoader>;
							public cancelTag(param0: java.lang.Class): void;
							public load(param0: string): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
						}
						export module FiamImageLoader {
							export class FiamImageRequestCreator {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator>;
								public placeholder(param0: number): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
								public tag(param0: java.lang.Class): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
								public constructor(param0: com.squareup.picasso.RequestCreator);
								public into(param0: globalAndroid.widget.ImageView, param1: com.squareup.picasso.Callback): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FiamImageLoader_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.FiamImageLoader> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamImageLoader_Factory>;
							public static create(param0: javax.inject.Provider<com.squareup.picasso.Picasso>): com.google.firebase.inappmessaging.display.internal.FiamImageLoader_Factory;
							public static newInstance(param0: com.squareup.picasso.Picasso): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
							public constructor(param0: javax.inject.Provider<com.squareup.picasso.Picasso>);
							public get(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FiamWindowManager {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamWindowManager>;
							public destroy(param0: globalAndroid.app.Activity): void;
							public isFiamDisplayed(): boolean;
							public show(param0: com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper, param1: globalAndroid.app.Activity): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FiamWindowManager_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.FiamWindowManager> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamWindowManager_Factory>;
							public constructor();
							public static newInstance(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
							public get(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
							public static create(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager_Factory;
						}
						export module FiamWindowManager_Factory {
							export class InstanceHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamWindowManager_Factory.InstanceHolder>;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class FirebaseInAppMessagingDisplayImpl extends com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FirebaseInAppMessagingDisplayImpl>;
							public constructor();
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class InAppMessageLayoutConfig {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>;
							public constructor();
							public getMaxImageWidth(): number;
							public maxImageWidthWeight(): java.lang.Float;
							public getMaxImageHeight(): number;
							public maxImageHeightWeight(): java.lang.Float;
							public maxDialogHeightPx(): java.lang.Integer;
							public windowWidth(): java.lang.Integer;
							public autoDismiss(): java.lang.Boolean;
							public viewWindowGravity(): java.lang.Integer;
							public windowHeight(): java.lang.Integer;
							public static builder(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
							public maxDialogWidthPx(): java.lang.Integer;
							public backgroundEnabled(): java.lang.Boolean;
							public windowFlag(): java.lang.Integer;
							public animate(): java.lang.Boolean;
							public getMaxBodyHeight(): number;
							public maxBodyWidthWeight(): java.lang.Float;
							public maxBodyHeightWeight(): java.lang.Float;
							public getMaxBodyWidth(): number;
						}
						export module InAppMessageLayoutConfig {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder>;
								public setBackgroundEnabled(param0: java.lang.Boolean): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setWindowFlag(param0: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setWindowHeight(param0: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxDialogWidthPx(param0: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setWindowWidth(param0: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public constructor();
								public build(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public setMaxImageWidthWeight(param0: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setAnimate(param0: java.lang.Boolean): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setAutoDismiss(param0: java.lang.Boolean): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setViewWindowGravity(param0: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxImageHeightWeight(param0: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxBodyWidthWeight(param0: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxBodyHeightWeight(param0: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxDialogHeightPx(param0: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class Logging {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.Logging>;
							public constructor();
							public static logd(param0: string): void;
							public static logdHeader(param0: string): void;
							public static logdNumber(param0: string, param1: number): void;
							public static logdPair(param0: string, param1: number, param2: number): void;
							public static loge(param0: string): void;
							public static logi(param0: string): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class OnSwipeUpListener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.OnSwipeUpListener>;
							public constructor();
							public onSwipeUp(): boolean;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class PicassoErrorListener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.PicassoErrorListener>;
							public onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
							public setInAppMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class PicassoErrorListener_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.PicassoErrorListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.PicassoErrorListener_Factory>;
							public constructor();
							public static newInstance(): com.google.firebase.inappmessaging.display.internal.PicassoErrorListener;
							public static create(): com.google.firebase.inappmessaging.display.internal.PicassoErrorListener_Factory;
							public get(): com.google.firebase.inappmessaging.display.internal.PicassoErrorListener;
						}
						export module PicassoErrorListener_Factory {
							export class InstanceHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.PicassoErrorListener_Factory.InstanceHolder>;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class RenewableTimer {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.RenewableTimer>;
							public cancel(): void;
							public start(param0: com.google.firebase.inappmessaging.display.internal.RenewableTimer.Callback, param1: number, param2: number): void;
						}
						export module RenewableTimer {
							export class Callback {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.RenewableTimer.Callback>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.RenewableTimer$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFinish(): void;
								});
								public constructor();
								public onFinish(): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class RenewableTimer_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.RenewableTimer> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.RenewableTimer_Factory>;
							public constructor();
							public static create(): com.google.firebase.inappmessaging.display.internal.RenewableTimer_Factory;
							public static newInstance(): com.google.firebase.inappmessaging.display.internal.RenewableTimer;
							public get(): com.google.firebase.inappmessaging.display.internal.RenewableTimer;
						}
						export module RenewableTimer_Factory {
							export class InstanceHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.RenewableTimer_Factory.InstanceHolder>;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class ResizableImageView {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.ResizableImageView>;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
						export module ResizableImageView {
							export class Dimensions {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.ResizableImageView.Dimensions>;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export class SwipeDismissTouchListener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener>;
							public setTranslationX(param0: number): void;
							public setAlpha(param0: number): void;
							public startDismissAnimation(param0: boolean): void;
							public getTranslationX(): number;
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
							public startCancelAnimation(): void;
							public constructor(param0: globalAndroid.view.View, param1: any, param2: com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener.DismissCallbacks);
						}
						export module SwipeDismissTouchListener {
							export class DismissCallbacks {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener.DismissCallbacks>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener$DismissCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									canDismiss(param0: any): boolean;
									onDismiss(param0: globalAndroid.view.View, param1: any): void;
								});
								public constructor();
								public onDismiss(param0: globalAndroid.view.View, param1: any): void;
								public canDismiss(param0: any): boolean;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class BannerBindingWrapper extends com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper>;
								public canSwipeToDismiss(): boolean;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public constructor(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage);
								public inflate(param0: java.util.Map<com.google.firebase.inappmessaging.model.Action,globalAndroid.view.View.OnClickListener>, param1: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getDismissListener(): globalAndroid.view.View.OnClickListener;
								public getImageView(): globalAndroid.widget.ImageView;
								public getDialogView(): globalAndroid.view.View;
								public getRootView(): globalAndroid.view.ViewGroup;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class BannerBindingWrapper_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper_Factory>;
								public static newInstance(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
								public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper_Factory;
								public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>);
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export abstract class BindingWrapper {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper>;
								public message: com.google.firebase.inappmessaging.model.InAppMessage;
								public setViewBgColorFromHex(param0: globalAndroid.view.View, param1: string): void;
								public setButtonActionListener(param0: globalAndroid.widget.Button, param1: globalAndroid.view.View.OnClickListener): void;
								public canSwipeToDismiss(): boolean;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public constructor(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage);
								public static setButtonBgColorFromHex(param0: globalAndroid.widget.Button, param1: string): void;
								public static setupViewButtonFromModel(param0: globalAndroid.widget.Button, param1: com.google.firebase.inappmessaging.model.Button): void;
								public inflate(param0: java.util.Map<com.google.firebase.inappmessaging.model.Action,globalAndroid.view.View.OnClickListener>, param1: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getDismissListener(): globalAndroid.view.View.OnClickListener;
								public getImageView(): globalAndroid.widget.ImageView;
								public getDialogView(): globalAndroid.view.View;
								public getRootView(): globalAndroid.view.ViewGroup;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class CardBindingWrapper extends com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper>;
								public getTitleView(): globalAndroid.view.View;
								public getPrimaryButton(): globalAndroid.widget.Button;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public constructor(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage);
								public getSecondaryButton(): globalAndroid.widget.Button;
								public inflate(param0: java.util.Map<com.google.firebase.inappmessaging.model.Action,globalAndroid.view.View.OnClickListener>, param1: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public setLayoutListener(param0: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
								public getDismissListener(): globalAndroid.view.View.OnClickListener;
								public getImageView(): globalAndroid.widget.ImageView;
								public getDialogView(): globalAndroid.view.View;
								public getScrollView(): globalAndroid.view.View;
								public getRootView(): globalAndroid.view.ViewGroup;
							}
							export module CardBindingWrapper {
								export class ScrollViewAdjustableListener {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper.ScrollViewAdjustableListener>;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper);
									public onGlobalLayout(): void;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class CardBindingWrapper_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper_Factory>;
								public static newInstance(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
								public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper_Factory;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
								public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>);
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class ImageBindingWrapper extends com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper>;
								public constructor(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage);
								public inflate(param0: java.util.Map<com.google.firebase.inappmessaging.model.Action,globalAndroid.view.View.OnClickListener>, param1: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getImageView(): globalAndroid.widget.ImageView;
								public getDialogView(): globalAndroid.view.View;
								public getRootView(): globalAndroid.view.ViewGroup;
								public getCollapseButton(): globalAndroid.view.View;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class ImageBindingWrapper_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper_Factory>;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
								public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper_Factory;
								public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>);
								public static newInstance(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class ModalBindingWrapper extends com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper>;
								public getActionButton(): globalAndroid.widget.Button;
								public getTitleView(): globalAndroid.view.View;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public constructor(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage);
								public inflate(param0: java.util.Map<com.google.firebase.inappmessaging.model.Action,globalAndroid.view.View.OnClickListener>, param1: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public setLayoutListener(param0: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
								public getImageView(): globalAndroid.widget.ImageView;
								public getDialogView(): globalAndroid.view.View;
								public getRootView(): globalAndroid.view.ViewGroup;
								public getScrollView(): globalAndroid.view.View;
								public getCollapseButton(): globalAndroid.view.View;
							}
							export module ModalBindingWrapper {
								export class ScrollViewAdjustableListener {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper.ScrollViewAdjustableListener>;
									public onGlobalLayout(): void;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper);
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module bindingwrappers {
							export class ModalBindingWrapper_Factory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper_Factory>;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
								public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper_Factory;
								public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, param1: javax.inject.Provider<globalAndroid.view.LayoutInflater>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.model.InAppMessage>);
								public static newInstance(param0: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param1: globalAndroid.view.LayoutInflater, param2: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module components {
								export class AppComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.AppComponent>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.injection.components.AppComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										providesFirebaseInAppMessagingUI(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
										picassoErrorListener(): com.google.firebase.inappmessaging.display.internal.PicassoErrorListener;
										fiamImageLoader(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
									});
									public constructor();
									public fiamImageLoader(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
									public providesFirebaseInAppMessagingUI(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
									public picassoErrorListener(): com.google.firebase.inappmessaging.display.internal.PicassoErrorListener;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module components {
								export class DaggerAppComponent extends com.google.firebase.inappmessaging.display.internal.injection.components.AppComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent>;
									public fiamImageLoader(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
									public providesFirebaseInAppMessagingUI(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
									public picassoErrorListener(): com.google.firebase.inappmessaging.display.internal.PicassoErrorListener;
									public static builder(): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
								}
								export module DaggerAppComponent {
									export class Builder {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder>;
										public headlessInAppMessagingModule(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
										public build(): com.google.firebase.inappmessaging.display.internal.injection.components.AppComponent;
										public picassoModule(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
										public universalComponent(param0: com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
									}
									export class com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_fiamWindowManager extends javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.FiamWindowManager> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_fiamWindowManager>;
										public get(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
									}
									export class com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_inflaterClient extends javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_inflaterClient>;
										public get(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
									}
									export class com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_myKeyStringMap extends javax.inject.Provider<java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_myKeyStringMap>;
										public get(): java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
									}
									export class com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_providesApplication extends javax.inject.Provider<globalAndroid.app.Application> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_display_internal_injection_components_UniversalComponent_providesApplication>;
										public get(): globalAndroid.app.Application;
									}
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module components {
								export class DaggerInAppMessageComponent extends com.google.firebase.inappmessaging.display.internal.injection.components.InAppMessageComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent>;
									public modalBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
									public cardBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
									public imageBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
									public bannerBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
									public static builder(): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.Builder;
								}
								export module DaggerInAppMessageComponent {
									export class Builder {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.Builder>;
										public inflaterModule(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.Builder;
										public build(): com.google.firebase.inappmessaging.display.internal.injection.components.InAppMessageComponent;
									}
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module components {
								export class DaggerUniversalComponent extends com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent>;
									public fiamWindowManager(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
									public static builder(): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder;
									public providesApplication(): globalAndroid.app.Application;
									public inflaterClient(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
									public displayMetrics(): globalAndroid.util.DisplayMetrics;
									public myKeyStringMap(): java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
								}
								export module DaggerUniversalComponent {
									export class Builder {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder>;
										public applicationModule(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder;
										public inflaterConfigModule(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder;
										public build(): com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent;
									}
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module components {
								export class InAppMessageComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.InAppMessageComponent>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.injection.components.InAppMessageComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										imageBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
										modalBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
										bannerBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
										cardBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
									});
									public constructor();
									public modalBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
									public cardBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
									public imageBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
									public bannerBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module components {
								export class UniversalComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										providesApplication(): globalAndroid.app.Application;
										displayMetrics(): globalAndroid.util.DisplayMetrics;
										fiamWindowManager(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
										inflaterClient(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
										myKeyStringMap(): java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
									});
									public constructor();
									public fiamWindowManager(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
									public providesApplication(): globalAndroid.app.Application;
									public inflaterClient(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
									public displayMetrics(): globalAndroid.util.DisplayMetrics;
									public myKeyStringMap(): java.util.Map<string,javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module keys {
								export class LayoutConfigKey {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.keys.LayoutConfigKey>;
									public static MODAL_PORTRAIT: string;
									public static MODAL_LANDSCAPE: string;
									public static CARD_PORTRAIT: string;
									public static CARD_LANDSCAPE: string;
									public static IMAGE_ONLY_PORTRAIT: string;
									public static IMAGE_ONLY_LANDSCAPE: string;
									public static BANNER_PORTRAIT: string;
									public static BANNER_LANDSCAPE: string;
									public static UNSUPPORTED: string;
									public constructor();
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class ApplicationModule {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule>;
									public constructor(param0: globalAndroid.app.Application);
									public providesApplication(): globalAndroid.app.Application;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class ApplicationModule_ProvidesApplicationFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<globalAndroid.app.Application> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory>;
									public static providesApplication(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule): globalAndroid.app.Application;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule);
									public get(): globalAndroid.app.Application;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class HeadlessInAppMessagingModule {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule>;
									public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessaging);
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class HeadlessInAppMessagingModule_ProvidesHeadlesssSingletonFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.FirebaseInAppMessaging> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule_ProvidesHeadlesssSingletonFactory>;
									public static providesHeadlesssSingleton(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule);
									public get(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule): com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule_ProvidesHeadlesssSingletonFactory;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule>;
									public static DISABLED_BG_FLAG: number;
									public static DISMISSIBLE_DIALOG_FLAG: number;
									public constructor();
									public providesLandscapeImageLayoutConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesBannerPortraitLayoutConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesCardLandscapeConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static configFor(param0: com.google.firebase.inappmessaging.model.MessageType, param1: number): string;
									public providesModalLandscapeConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesModalPortraitConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesBannerLandscapeLayoutConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesPortraitImageLayoutConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesCardPortraitConfig(param0: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesBannerLandscapeLayoutConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesBannerLandscapeLayoutConfigFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesBannerLandscapeLayoutConfigFactory;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public static providesBannerLandscapeLayoutConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesBannerPortraitLayoutConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesBannerPortraitLayoutConfigFactory>;
									public static providesBannerPortraitLayoutConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesBannerPortraitLayoutConfigFactory;
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesCardLandscapeConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesCardLandscapeConfigFactory>;
									public static providesCardLandscapeConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesCardLandscapeConfigFactory;
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesCardPortraitConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesCardPortraitConfigFactory>;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesCardPortraitConfigFactory;
									public static providesCardPortraitConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesDisplayMetricsFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<globalAndroid.util.DisplayMetrics> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesDisplayMetricsFactory>;
									public static providesDisplayMetrics(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.app.Application): globalAndroid.util.DisplayMetrics;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
									public get(): globalAndroid.util.DisplayMetrics;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesDisplayMetricsFactory;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesLandscapeImageLayoutConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesLandscapeImageLayoutConfigFactory>;
									public static providesLandscapeImageLayoutConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesLandscapeImageLayoutConfigFactory;
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesModalLandscapeConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalLandscapeConfigFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalLandscapeConfigFactory;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static providesModalLandscapeConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesModalPortraitConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalPortraitConfigFactory>;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalPortraitConfigFactory;
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static providesModalPortraitConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterConfigModule_ProvidesPortraitImageLayoutConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesPortraitImageLayoutConfigFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesPortraitImageLayoutConfigFactory;
									public static providesPortraitImageLayoutConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, param1: javax.inject.Provider<globalAndroid.util.DisplayMetrics>);
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterModule {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule>;
									public constructor(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, param2: globalAndroid.app.Application);
									public providesInflaterservice(): globalAndroid.view.LayoutInflater;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterModule_InAppMessageLayoutConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_InAppMessageLayoutConfigFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_InAppMessageLayoutConfigFactory;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule);
									public get(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static inAppMessageLayoutConfig(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterModule_ProvidesBannerMessageFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.model.InAppMessage> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesBannerMessageFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesBannerMessageFactory;
									public get(): com.google.firebase.inappmessaging.model.InAppMessage;
									public static providesBannerMessage(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.model.InAppMessage;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule);
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class InflaterModule_ProvidesInflaterserviceFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<globalAndroid.view.LayoutInflater> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesInflaterserviceFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesInflaterserviceFactory;
									public get(): globalAndroid.view.LayoutInflater;
									public static providesInflaterservice(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): globalAndroid.view.LayoutInflater;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule);
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class PicassoModule {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule>;
									public constructor();
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module modules {
								export class PicassoModule_ProvidesFiamControllerFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.squareup.picasso.Picasso> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule_ProvidesFiamControllerFactory>;
									public static create(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.PicassoErrorListener>): com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule_ProvidesFiamControllerFactory;
									public static providesFiamController(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule, param1: globalAndroid.app.Application, param2: com.google.firebase.inappmessaging.display.internal.PicassoErrorListener): com.squareup.picasso.Picasso;
									public get(): com.squareup.picasso.Picasso;
									public constructor(param0: com.google.firebase.inappmessaging.display.internal.injection.modules.PicassoModule, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.PicassoErrorListener>);
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module scopes {
								export class FirebaseAppScope {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.scopes.FirebaseAppScope>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.injection.scopes.FirebaseAppScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module injection {
							export module scopes {
								export class InAppMessageScope {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.scopes.InAppMessageScope>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.injection.scopes.InAppMessageScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class BackButtonLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.BackButtonLayout>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.layout.BackButtonLayout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								});
								public constructor();
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export abstract class BaseModalLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.BaseModalLayout>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public getMaxHeightPct(): number;
								public getVisibleChildren(): java.util.List<globalAndroid.view.View>;
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public layoutChild(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
								public getHeightWithMargins(param0: globalAndroid.view.View): number;
								public getLayoutParams(param0: globalAndroid.view.View): globalAndroid.widget.FrameLayout.LayoutParams;
								public getMaxWidthPct(): number;
								public findChildById(param0: number): globalAndroid.view.View;
								public getDesiredWidth(param0: globalAndroid.view.View): number;
								public calculateBaseHeight(param0: number): number;
								public calculateBaseWidth(param0: number): number;
								public getMarginTop(param0: globalAndroid.view.View): number;
								public dpToPixels(param0: number): number;
								public layoutChild(param0: globalAndroid.view.View, param1: number, param2: number): void;
								public getMarginBottom(param0: globalAndroid.view.View): number;
								public getWidthWithMargins(param0: globalAndroid.view.View): number;
								public onMeasure(param0: number, param1: number): void;
								public getDesiredHeight(param0: globalAndroid.view.View): number;
								public roundToNearest(param0: number, param1: number): number;
								public getDisplayMetrics(): globalAndroid.util.DisplayMetrics;
								public measureChildWithMargins(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class CardLayoutLandscape extends com.google.firebase.inappmessaging.display.internal.layout.BaseModalLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.CardLayoutLandscape>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public onMeasure(param0: number, param1: number): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class CardLayoutPortrait extends com.google.firebase.inappmessaging.display.internal.layout.BaseModalLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.CardLayoutPortrait>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public onMeasure(param0: number, param1: number): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class FiamCardView implements com.google.firebase.inappmessaging.display.internal.layout.BackButtonLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.FiamCardView>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(param0: globalAndroid.content.Context);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class FiamFrameLayout implements com.google.firebase.inappmessaging.display.internal.layout.BackButtonLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.FiamFrameLayout>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
								public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(param0: globalAndroid.content.Context);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class FiamRelativeLayout implements com.google.firebase.inappmessaging.display.internal.layout.BackButtonLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.FiamRelativeLayout>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
								public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(param0: globalAndroid.content.Context);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class ModalLayoutLandscape extends com.google.firebase.inappmessaging.display.internal.layout.BaseModalLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.ModalLayoutLandscape>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public layoutCenterHorizontal(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public onMeasure(param0: number, param1: number): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export class ModalLayoutPortrait extends com.google.firebase.inappmessaging.display.internal.layout.BaseModalLayout {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.ModalLayoutPortrait>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public onMeasure(param0: number, param1: number): void;
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export module util {
								export class BackButtonHandler {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.util.BackButtonHandler>;
									public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): java.lang.Boolean;
									public constructor(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View.OnClickListener);
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export module util {
								export class MeasureUtils {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.util.MeasureUtils>;
									public constructor();
									public static measureFullWidth(param0: globalAndroid.view.View, param1: number, param2: number): void;
									public static measureAtMost(param0: globalAndroid.view.View, param1: number, param2: number): void;
									public static measureExactly(param0: globalAndroid.view.View, param1: number, param2: number): void;
									public static measureFullHeight(param0: globalAndroid.view.View, param1: number, param2: number): void;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export module util {
								export class VerticalViewGroupMeasure {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.util.VerticalViewGroupMeasure>;
									public add(param0: globalAndroid.view.View, param1: boolean): void;
									public constructor();
									public reset(param0: number, param1: number): void;
									public allocateSpace(param0: number): void;
									public getTotalFixedHeight(): number;
									public getViews(): java.util.List<com.google.firebase.inappmessaging.display.internal.layout.util.ViewMeasure>;
									public constructor(param0: number, param1: number);
									public getTotalHeight(): number;
								}
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
			export module inappmessaging {
				export module display {
					export module internal {
						export module layout {
							export module util {
								export class ViewMeasure {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.layout.util.ViewMeasure>;
									public preMeasure(param0: number, param1: number): void;
									public setMaxDimens(param0: number, param1: number): void;
									public getDesiredWidth(): number;
									public getMaxWidth(): number;
									public getView(): globalAndroid.view.View;
									public getMaxHeight(): number;
									public getDesiredHeight(): number;
									public constructor(param0: globalAndroid.view.View, param1: boolean);
									public isFlex(): boolean;
								}
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
			export module inappmessaging {
				export module internal {
					export class AbtIntegrationHelper {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper>;
						public constructor(param0: com.google.firebase.abt.FirebaseABTesting);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AbtIntegrationHelper_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper_Factory>;
						public get(): com.google.firebase.inappmessaging.internal.AbtIntegrationHelper;
						public static newInstance(param0: com.google.firebase.abt.FirebaseABTesting): com.google.firebase.inappmessaging.internal.AbtIntegrationHelper;
						public constructor(param0: javax.inject.Provider<com.google.firebase.abt.FirebaseABTesting>);
						public static create(param0: javax.inject.Provider<com.google.firebase.abt.FirebaseABTesting>): com.google.firebase.inappmessaging.internal.AbtIntegrationHelper_Factory;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AnalyticsConstants {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsConstants>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AnalyticsEventsManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>;
						public updateContextualTriggers(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(param0: com.google.firebase.analytics.connector.AnalyticsConnector);
						public getAnalyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
						public getHandle(): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle;
					}
					export module AnalyticsEventsManager {
						export class AnalyticsFlowableSubscriber extends io.reactivex.FlowableOnSubscribe<string> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager.AnalyticsFlowableSubscriber>;
							public subscribe(param0: io.reactivex.FlowableEmitter<string>): void;
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
			export module inappmessaging {
				export module internal {
					export class ApiClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ApiClient>;
						public constructor(param0: com.google.firebase.inappmessaging.dagger.Lazy<com.google.firebase.inappmessaging.internal.GrpcClient>, param1: com.google.firebase.FirebaseApp, param2: globalAndroid.app.Application, param3: com.google.firebase.inappmessaging.internal.time.Clock, param4: com.google.firebase.inappmessaging.internal.ProviderInstaller);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class AutoValue_InstallationIdResult extends com.google.firebase.inappmessaging.internal.InstallationIdResult {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AutoValue_InstallationIdResult>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class CampaignCacheClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.CampaignCacheClient>;
						public get(): io.reactivex.Maybe<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
						public put(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): io.reactivex.Completable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class CampaignCacheClient_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.CampaignCacheClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.CampaignCacheClient_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>);
						public get(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
						public static newInstance(param0: com.google.firebase.inappmessaging.internal.ProtoStorageClient, param1: globalAndroid.app.Application, param2: com.google.firebase.inappmessaging.internal.time.Clock): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<globalAndroid.app.Application>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>): com.google.firebase.inappmessaging.internal.CampaignCacheClient_Factory;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DataCollectionHelper {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DataCollectionHelper>;
						public setAutomaticDataCollectionEnabled(param0: java.lang.Boolean): void;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, param2: com.google.firebase.events.Subscriber);
						public setAutomaticDataCollectionEnabled(param0: boolean): void;
						public isAutomaticDataCollectionEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DataCollectionHelper_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DataCollectionHelper> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DataCollectionHelper_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.events.Subscriber>);
						public get(): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
						public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.events.Subscriber>): com.google.firebase.inappmessaging.internal.DataCollectionHelper_Factory;
						public static newInstance(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, param2: com.google.firebase.events.Subscriber): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DeveloperListenerManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>;
						public static instance: com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
						public constructor();
						public messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void;
						public removeClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
						public impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
						public removeImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
						public messageDismissed(param0: com.google.firebase.inappmessaging.model.InAppMessage): void;
						public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, param1: java.util.concurrent.Executor): void;
						public displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
						public addDismissListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener): void;
						public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, param1: java.util.concurrent.Executor): void;
						public removeAllListeners(): void;
						public addClickListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
						public addDismissListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener, param1: java.util.concurrent.Executor): void;
						public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
						public addImpressionListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, param1: java.util.concurrent.Executor): void;
						public removeDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
						public addDisplayErrorListener(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					}
					export module DeveloperListenerManager {
						export class ClicksExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ClicksExecutorAndListener>;
							public getListener(): any;
							public constructor(param0: java.util.concurrent.Executor);
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener);
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, param1: java.util.concurrent.Executor);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener;
						}
						export class DismissExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.DismissExecutorAndListener>;
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener, param1: java.util.concurrent.Executor);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener;
							public getListener(): any;
							public constructor(param0: java.util.concurrent.Executor);
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener);
						}
						export class ErrorsExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ErrorsExecutorAndListener>;
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, param1: java.util.concurrent.Executor);
							public getListener(): any;
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener;
							public constructor(param0: java.util.concurrent.Executor);
						}
						export abstract class ExecutorAndListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<any>>;
							public getListener(): T;
							public withExecutor(param0: java.util.concurrent.Executor): java.util.concurrent.Executor;
							public constructor(param0: java.util.concurrent.Executor);
						}
						export class FIAMThreadFactory {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.FIAMThreadFactory>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
						export class ImpressionExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ImpressionExecutorAndListener>;
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener;
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener);
							public getListener(): any;
							public constructor(param0: java.util.concurrent.Executor);
							public constructor(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, param1: java.util.concurrent.Executor);
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
			export module inappmessaging {
				export module internal {
					export class DisplayCallbacksFactory {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>;
						public constructor(param0: com.google.firebase.inappmessaging.internal.ImpressionStorageClient, param1: com.google.firebase.inappmessaging.internal.time.Clock, param2: com.google.firebase.inappmessaging.internal.Schedulers, param3: com.google.firebase.inappmessaging.internal.RateLimiterClient, param4: com.google.firebase.inappmessaging.internal.CampaignCacheClient, param5: com.google.firebase.inappmessaging.model.RateLimit, param6: com.google.firebase.inappmessaging.internal.MetricsLoggerClient, param7: com.google.firebase.inappmessaging.internal.DataCollectionHelper);
						public generateDisplayCallback(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DisplayCallbacksFactory_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>);
						public get(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
						public static newInstance(param0: com.google.firebase.inappmessaging.internal.ImpressionStorageClient, param1: com.google.firebase.inappmessaging.internal.time.Clock, param2: com.google.firebase.inappmessaging.internal.Schedulers, param3: com.google.firebase.inappmessaging.internal.RateLimiterClient, param4: com.google.firebase.inappmessaging.internal.CampaignCacheClient, param5: com.google.firebase.inappmessaging.model.RateLimit, param6: com.google.firebase.inappmessaging.internal.MetricsLoggerClient, param7: com.google.firebase.inappmessaging.internal.DataCollectionHelper): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory_Factory;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class DisplayCallbacksImpl extends com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DisplayCallbacksImpl>;
						public impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public messageClicked(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
						public displayErrorEncountered(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class FiamAnalyticsConnectorListener {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.FiamAnalyticsConnectorListener>;
						public onMessageTriggered(param0: number, param1: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ForegroundNotifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ForegroundNotifier>;
						public static DELAY_MILLIS: number;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public constructor();
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public foregroundFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class GrpcClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.GrpcClient>;
						public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class GrpcClient_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.GrpcClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.GrpcClient_Factory>;
						public static create(param0: javax.inject.Provider<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>): com.google.firebase.inappmessaging.internal.GrpcClient_Factory;
						public get(): com.google.firebase.inappmessaging.internal.GrpcClient;
						public constructor(param0: javax.inject.Provider<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>);
						public static newInstance(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub): com.google.firebase.inappmessaging.internal.GrpcClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ImpressionStorageClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>;
						public storeImpression(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): io.reactivex.Completable;
						public isImpressed(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): io.reactivex.Single<java.lang.Boolean>;
						public clearImpressions(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): io.reactivex.Completable;
						public getAllImpressions(): io.reactivex.Maybe<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ImpressionStorageClient_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ImpressionStorageClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ImpressionStorageClient_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>);
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>): com.google.firebase.inappmessaging.internal.ImpressionStorageClient_Factory;
						public get(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
						public static newInstance(param0: com.google.firebase.inappmessaging.internal.ProtoStorageClient): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class InAppMessageStreamManager {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>;
						public static ON_FOREGROUND: string;
						public static isAppForegroundEvent(param0: string): boolean;
						public static isAppForegroundEvent(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): boolean;
						public constructor(param0: io.reactivex.flowables.ConnectableFlowable<string>, param1: io.reactivex.flowables.ConnectableFlowable<string>, param2: com.google.firebase.inappmessaging.internal.CampaignCacheClient, param3: com.google.firebase.inappmessaging.internal.time.Clock, param4: com.google.firebase.inappmessaging.internal.ApiClient, param5: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager, param6: com.google.firebase.inappmessaging.internal.Schedulers, param7: com.google.firebase.inappmessaging.internal.ImpressionStorageClient, param8: com.google.firebase.inappmessaging.internal.RateLimiterClient, param9: com.google.firebase.inappmessaging.model.RateLimit, param10: com.google.firebase.inappmessaging.internal.TestDeviceHelper, param11: com.google.firebase.installations.FirebaseInstallationsApi, param12: com.google.firebase.inappmessaging.internal.DataCollectionHelper, param13: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper);
						public createFirebaseInAppMessageStream(): io.reactivex.Flowable<com.google.firebase.inappmessaging.model.TriggeredInAppMessage>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class InAppMessageStreamManager_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager_Factory>;
						public static create(param0: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param1: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ApiClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param8: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param9: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param10: javax.inject.Provider<com.google.firebase.inappmessaging.internal.TestDeviceHelper>, param11: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param12: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param13: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper>): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager_Factory;
						public constructor(param0: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param1: javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>>, param2: javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ApiClient>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>, param6: javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers>, param7: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>, param8: javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>, param9: javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit>, param10: javax.inject.Provider<com.google.firebase.inappmessaging.internal.TestDeviceHelper>, param11: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param12: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>, param13: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper>);
						public get(): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager;
						public static newInstance(param0: io.reactivex.flowables.ConnectableFlowable<string>, param1: io.reactivex.flowables.ConnectableFlowable<string>, param2: com.google.firebase.inappmessaging.internal.CampaignCacheClient, param3: com.google.firebase.inappmessaging.internal.time.Clock, param4: com.google.firebase.inappmessaging.internal.ApiClient, param5: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager, param6: com.google.firebase.inappmessaging.internal.Schedulers, param7: com.google.firebase.inappmessaging.internal.ImpressionStorageClient, param8: com.google.firebase.inappmessaging.internal.RateLimiterClient, param9: com.google.firebase.inappmessaging.model.RateLimit, param10: com.google.firebase.inappmessaging.internal.TestDeviceHelper, param11: com.google.firebase.installations.FirebaseInstallationsApi, param12: com.google.firebase.inappmessaging.internal.DataCollectionHelper, param13: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export abstract class InstallationIdResult {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.InstallationIdResult>;
						public constructor();
						public static create(param0: string, param1: com.google.firebase.installations.InstallationTokenResult): com.google.firebase.inappmessaging.internal.InstallationIdResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class Logging {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.Logging>;
						public static TAG: string;
						public constructor();
						public static logi(param0: string): void;
						public static loge(param0: string): void;
						public static logd(param0: string): void;
						public static logw(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class MetricsLoggerClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>;
						public constructor(param0: com.google.firebase.inappmessaging.internal.MetricsLoggerClient.EngagementMetricsLoggerInterface, param1: com.google.firebase.analytics.connector.AnalyticsConnector, param2: com.google.firebase.FirebaseApp, param3: com.google.firebase.installations.FirebaseInstallationsApi, param4: com.google.firebase.inappmessaging.internal.time.Clock, param5: com.google.firebase.inappmessaging.internal.DeveloperListenerManager);
					}
					export module MetricsLoggerClient {
						export class EngagementMetricsLoggerInterface {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.MetricsLoggerClient.EngagementMetricsLoggerInterface>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.MetricsLoggerClient$EngagementMetricsLoggerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								logEvent(param0: native.Array<number>): void;
							});
							public constructor();
							public logEvent(param0: native.Array<number>): void;
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
			export module inappmessaging {
				export module internal {
					export class ProgramaticContextualTriggers {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>;
						public constructor();
						public triggerEvent(param0: string): void;
						public setListener(param0: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener): void;
						public removeListener(param0: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener): void;
					}
					export module ProgramaticContextualTriggers {
						export class Listener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEventTrigger(param0: string): void;
							});
							public constructor();
							public onEventTrigger(param0: string): void;
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
			export module inappmessaging {
				export module internal {
					export class ProtoStorageClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProtoStorageClient>;
						public write(param0: com.google.protobuf.AbstractMessageLite): io.reactivex.Completable;
						public read(param0: com.google.protobuf.Parser): io.reactivex.Maybe;
						public constructor(param0: globalAndroid.app.Application, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ProviderInstaller {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProviderInstaller>;
						public install(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ProviderInstaller_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProviderInstaller> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProviderInstaller_Factory>;
						public constructor(param0: javax.inject.Provider<globalAndroid.app.Application>);
						public get(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
						public static create(param0: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.ProviderInstaller_Factory;
						public static newInstance(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProviderInstaller;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class ProxyAnalyticsConnector {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProxyAnalyticsConnector>;
						public constructor(param0: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>);
						public setUserProperty(param0: string, param1: string, param2: any): void;
						public getMaxUserProperties(param0: string): number;
						public clearConditionalUserProperty(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
						public logEvent(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
						public registerAnalyticsConnectorListener(param0: string, param1: com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorListener): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle;
						public setConditionalUserProperty(param0: com.google.firebase.analytics.connector.AnalyticsConnector.ConditionalUserProperty): void;
						public getConditionalUserProperties(param0: string, param1: string): java.util.List<com.google.firebase.analytics.connector.AnalyticsConnector.ConditionalUserProperty>;
						public getUserProperties(param0: boolean): java.util.Map<string,any>;
					}
					export module ProxyAnalyticsConnector {
						export class ProxyAnalyticsConnectorHandle {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProxyAnalyticsConnector.ProxyAnalyticsConnectorHandle>;
							public unregister(): void;
							public unregisterEventNames(): void;
							public registerEventNames(param0: java.util.Set<string>): void;
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
			export module inappmessaging {
				export module internal {
					export class RateLimitProto {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto>;
						public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
					}
					export module RateLimitProto {
						export class Counter extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static VALUE_FIELD_NUMBER: number;
							public static START_TIME_EPOCH_FIELD_NUMBER: number;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static getDefaultInstance(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static newBuilder(param0: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
							public static newBuilder(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getStartTimeEpoch(): number;
							public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getValue(): number;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
						}
						export module Counter {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder>;
								public getValue(): number;
								public setValue(param0: number): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public setStartTimeEpoch(param0: number): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public clearValue(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public clearStartTimeEpoch(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public getStartTimeEpoch(): number;
							}
						}
						export class CounterOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.RateLimitProto$CounterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getValue(): number;
								getStartTimeEpoch(): number;
							});
							public constructor();
							public getStartTimeEpoch(): number;
							public getValue(): number;
						}
						export class RateLimit extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit,com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit>;
							public static LIMITS_FIELD_NUMBER: number;
							public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit>;
							public static newBuilder(param0: com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsCount(): number;
							public static newBuilder(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
							public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
							public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: native.Array<number>): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static getDefaultInstance(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							/** @deprecated */
							public getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public containsLimits(param0: string): boolean;
							public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
						}
						export module RateLimit {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit,com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder  {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder>;
								public removeLimits(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								public getLimitsCount(): number;
								/** @deprecated */
								public getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								public putLimits(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public clearLimits(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								public putAllLimits(param0: java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public containsLimits(param0: string): boolean;
							}
							export class LimitsDefaultEntryHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.LimitsDefaultEntryHolder>;
							}
						}
						export class RateLimitOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.RateLimitProto$RateLimitOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getLimitsCount(): number;
								containsLimits(param0: string): boolean;
								getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							});
							public constructor();
							public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getLimitsCount(): number;
							/** @deprecated */
							public getLimits(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getLimitsMap(): java.util.Map<string,com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public containsLimits(param0: string): boolean;
							public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
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
			export module inappmessaging {
				export module internal {
					export class RateLimiterClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimiterClient>;
						public isRateLimited(param0: com.google.firebase.inappmessaging.model.RateLimit): io.reactivex.Single<java.lang.Boolean>;
						public increment(param0: com.google.firebase.inappmessaging.model.RateLimit): io.reactivex.Completable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class RateLimiterClient_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.RateLimiterClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimiterClient_Factory>;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>);
						public get(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>): com.google.firebase.inappmessaging.internal.RateLimiterClient_Factory;
						public static newInstance(param0: com.google.firebase.inappmessaging.internal.ProtoStorageClient, param1: com.google.firebase.inappmessaging.internal.time.Clock): com.google.firebase.inappmessaging.internal.RateLimiterClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class Schedulers {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.Schedulers>;
						public io(): io.reactivex.Scheduler;
						public mainThread(): io.reactivex.Scheduler;
						public computation(): io.reactivex.Scheduler;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class Schedulers_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.Schedulers> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.Schedulers_Factory>;
						public constructor(param0: javax.inject.Provider<io.reactivex.Scheduler>, param1: javax.inject.Provider<io.reactivex.Scheduler>, param2: javax.inject.Provider<io.reactivex.Scheduler>);
						public static create(param0: javax.inject.Provider<io.reactivex.Scheduler>, param1: javax.inject.Provider<io.reactivex.Scheduler>, param2: javax.inject.Provider<io.reactivex.Scheduler>): com.google.firebase.inappmessaging.internal.Schedulers_Factory;
						public get(): com.google.firebase.inappmessaging.internal.Schedulers;
						public static newInstance(param0: io.reactivex.Scheduler, param1: io.reactivex.Scheduler, param2: io.reactivex.Scheduler): com.google.firebase.inappmessaging.internal.Schedulers;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class SharedPreferencesUtils {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>;
						public clearPreference(param0: string): void;
						public getBooleanManifestValue(param0: string, param1: boolean): boolean;
						public isPreferenceSet(param0: string): boolean;
						public getBooleanPreference(param0: string, param1: boolean): boolean;
						public setBooleanPreference(param0: string, param1: boolean): void;
						public getAndSetBooleanPreference(param0: string, param1: boolean): boolean;
						public constructor(param0: com.google.firebase.FirebaseApp);
						public isManifestSet(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class SharedPreferencesUtils_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils_Factory>;
						public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils_Factory;
						public get(): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
						public static newInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
						public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class TestDeviceHelper {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.TestDeviceHelper>;
						public processCampaignFetch(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(param0: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils);
						public isAppInstallFresh(): boolean;
						public isDeviceInTestMode(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export class TestDeviceHelper_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.TestDeviceHelper> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.TestDeviceHelper_Factory>;
						public static create(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>): com.google.firebase.inappmessaging.internal.TestDeviceHelper_Factory;
						public static newInstance(param0: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
						public constructor(param0: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>);
						public get(): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class AppComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.AppComponent>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.components.AppComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
									displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
								});
								public constructor();
								public providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
								public displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
							}
							export module AppComponent {
								export class Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.components.AppComponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										abtIntegrationHelper(param0: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
										build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									});
									public constructor();
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									public abtIntegrationHelper(param0: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
								}
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class DaggerAppComponent extends com.google.firebase.inappmessaging.internal.injection.components.AppComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent>;
								public static builder(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
								public providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
								public displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
							}
							export module DaggerAppComponent {
								export class Builder extends com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder>;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public abtIntegrationHelper(param0: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public abtIntegrationHelper(param0: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsConnector extends javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsConnector>;
									public get(): com.google.firebase.analytics.connector.AnalyticsConnector;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsEventsManager extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_analyticsEventsManager>;
									public get(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundEventFlowable extends javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundEventFlowable>;
									public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundRateLimit extends javax.inject.Provider<com.google.firebase.inappmessaging.model.RateLimit> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_appForegroundRateLimit>;
									public get(): com.google.firebase.inappmessaging.model.RateLimit;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_application extends javax.inject.Provider<globalAndroid.app.Application> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_application>;
									public get(): globalAndroid.app.Application;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_campaignCacheClient extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_campaignCacheClient>;
									public get(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_clock extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_clock>;
									public get(): com.google.firebase.inappmessaging.internal.time.Clock;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_developerListenerManager extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_developerListenerManager>;
									public get(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_firebaseEventsSubscriber extends javax.inject.Provider<com.google.firebase.events.Subscriber> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_firebaseEventsSubscriber>;
									public get(): com.google.firebase.events.Subscriber;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_gRPCChannel extends javax.inject.Provider<io.grpc.Channel> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_gRPCChannel>;
									public get(): io.grpc.Channel;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_impressionStorageClient extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_impressionStorageClient>;
									public get(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_probiderInstaller extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_probiderInstaller>;
									public get(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggerFlowable extends javax.inject.Provider<io.reactivex.flowables.ConnectableFlowable<string>> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggerFlowable>;
									public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggers extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_programmaticContextualTriggers>;
									public get(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_rateLimiterClient extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_rateLimiterClient>;
									public get(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
								}
								export class com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_schedulers extends javax.inject.Provider<com.google.firebase.inappmessaging.internal.Schedulers> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.com_google_firebase_inappmessaging_internal_injection_components_UniversalComponent_schedulers>;
									public get(): com.google.firebase.inappmessaging.internal.Schedulers;
								}
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class DaggerUniversalComponent extends com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent>;
								public probiderInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
								public schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
								public static builder(): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
								public clock(): com.google.firebase.inappmessaging.internal.time.Clock;
								public analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								public impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
								public application(): globalAndroid.app.Application;
								public programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
								public rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
								public campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
								public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
								public analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
								public gRPCChannel(): io.grpc.Channel;
								public programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
							}
							export module DaggerUniversalComponent {
								export class Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder>;
									public protoStorageClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public systemClockModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public appMeasurementModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public foregroundFlowableModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent;
									public schedulerModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public applicationModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public programmaticContextualTriggerFlowableModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public analyticsEventsModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public rateLimitModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public grpcChannelModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
								}
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module components {
							export class UniversalComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									probiderInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
									gRPCChannel(): io.grpc.Channel;
									schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
									appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
									analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
									analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
									firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
									campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
									impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
									clock(): com.google.firebase.inappmessaging.internal.time.Clock;
									protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
									rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
									application(): globalAndroid.app.Application;
									appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
									developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								});
								public constructor();
								public probiderInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
								public schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
								public clock(): com.google.firebase.inappmessaging.internal.time.Clock;
								public analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								public impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
								public application(): globalAndroid.app.Application;
								public programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
								public rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
								public campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
								public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
								public analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
								public gRPCChannel(): io.grpc.Channel;
								public programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule>;
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule_ProvidesAnalyticsConnectorEventsFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsConnectorEventsFactory>;
								public static providesAnalyticsConnectorEvents(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager): io.reactivex.flowables.ConnectableFlowable<string>;
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>): com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsConnectorEventsFactory;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AnalyticsEventsModule_ProvidesAnalyticsEventsManagerFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsEventsManagerFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>): com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsEventsManagerFactory;
								public static providesAnalyticsEventsManager(param0: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, param1: com.google.firebase.analytics.connector.AnalyticsConnector): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
								public get(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule>;
								public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.installations.FirebaseInstallationsApi, param2: com.google.firebase.inappmessaging.internal.time.Clock);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesApiClientFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ApiClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesApiClientFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>, param2: javax.inject.Provider<globalAndroid.app.Application>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller>);
								public static providesApiClient(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: com.google.firebase.inappmessaging.dagger.Lazy<com.google.firebase.inappmessaging.internal.GrpcClient>, param2: globalAndroid.app.Application, param3: com.google.firebase.inappmessaging.internal.ProviderInstaller): com.google.firebase.inappmessaging.internal.ApiClient;
								public get(): com.google.firebase.inappmessaging.internal.ApiClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>, param2: javax.inject.Provider<globalAndroid.app.Application>, param3: javax.inject.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller>): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesApiClientFactory;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesDataCollectionHelperFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DataCollectionHelper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesDataCollectionHelperFactory>;
								public static providesDataCollectionHelper(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, param2: com.google.firebase.events.Subscriber): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.events.Subscriber>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, param2: javax.inject.Provider<com.google.firebase.events.Subscriber>): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesDataCollectionHelperFactory;
								public get(): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesFirebaseAppFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.FirebaseApp> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseAppFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseAppFactory;
								public static providesFirebaseApp(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.FirebaseApp;
								public get(): com.google.firebase.FirebaseApp;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesFirebaseInstallationsFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.installations.FirebaseInstallationsApi> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseInstallationsFactory>;
								public get(): com.google.firebase.installations.FirebaseInstallationsApi;
								public static providesFirebaseInstallations(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.installations.FirebaseInstallationsApi;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseInstallationsFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesSharedPreferencesUtilsFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesSharedPreferencesUtilsFactory>;
								public static providesSharedPreferencesUtils(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
								public get(): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesSharedPreferencesUtilsFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApiClientModule_ProvidesTestDeviceHelperFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.TestDeviceHelper> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesTestDeviceHelperFactory>;
								public static providesTestDeviceHelper(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, param1: javax.inject.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesTestDeviceHelperFactory;
								public get(): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AppMeasurementModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule>;
								public constructor(param0: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>, param1: com.google.firebase.events.Subscriber);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AppMeasurementModule_ProvidesAnalyticsConnectorFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.analytics.connector.AnalyticsConnector> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesAnalyticsConnectorFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesAnalyticsConnectorFactory;
								public static providesAnalyticsConnector(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.analytics.connector.AnalyticsConnector;
								public get(): com.google.firebase.analytics.connector.AnalyticsConnector;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class AppMeasurementModule_ProvidesSubsriberFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.events.Subscriber> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesSubsriberFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesSubsriberFactory;
								public get(): com.google.firebase.events.Subscriber;
								public static providesSubsriber(param0: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.events.Subscriber;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApplicationModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule>;
								public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public providesApplication(): globalAndroid.app.Application;
								public constructor(param0: globalAndroid.app.Application);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApplicationModule_DeveloperListenerManagerFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.DeveloperListenerManager> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_DeveloperListenerManagerFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule);
								public static developerListenerManager(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_DeveloperListenerManagerFactory;
								public get(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ApplicationModule_ProvidesApplicationFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<globalAndroid.app.Application> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory;
								public static providesApplication(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): globalAndroid.app.Application;
								public get(): globalAndroid.app.Application;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ForegroundFlowableModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule>;
								public constructor();
								public providesAppForegroundEventStream(param0: globalAndroid.app.Application): io.reactivex.flowables.ConnectableFlowable<string>;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ForegroundFlowableModule_ProvidesAppForegroundEventStreamFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule_ProvidesAppForegroundEventStreamFactory>;
								public static providesAppForegroundEventStream(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, param1: globalAndroid.app.Application): io.reactivex.flowables.ConnectableFlowable<string>;
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, param1: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule_ProvidesAppForegroundEventStreamFactory;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcChannelModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule>;
								public providesServiceHost(): string;
								public constructor();
								public providesGrpcChannel(param0: string): io.grpc.Channel;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcChannelModule_ProvidesGrpcChannelFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.grpc.Channel> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesGrpcChannelFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, param1: javax.inject.Provider<string>);
								public get(): io.grpc.Channel;
								public static providesGrpcChannel(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, param1: string): io.grpc.Channel;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, param1: javax.inject.Provider<string>): com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesGrpcChannelFactory;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcChannelModule_ProvidesServiceHostFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<string> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesServiceHostFactory>;
								public static providesServiceHost(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): string;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesServiceHostFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule);
								public get(): string;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule>;
								public constructor(param0: com.google.firebase.FirebaseApp);
								public providesApiKeyHeaders(): io.grpc.Metadata;
								public static getSignature(param0: globalAndroid.content.pm.PackageManager, param1: string): string;
								public providesInAppMessagingSdkServingStub(param0: io.grpc.Channel, param1: io.grpc.Metadata): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcClientModule_ProvidesApiKeyHeadersFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.grpc.Metadata> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesApiKeyHeadersFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesApiKeyHeadersFactory;
								public get(): io.grpc.Metadata;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule);
								public static providesApiKeyHeaders(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): io.grpc.Metadata;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class GrpcClientModule_ProvidesInAppMessagingSdkServingStubFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesInAppMessagingSdkServingStubFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, param1: javax.inject.Provider<io.grpc.Channel>, param2: javax.inject.Provider<io.grpc.Metadata>): com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesInAppMessagingSdkServingStubFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, param1: javax.inject.Provider<io.grpc.Channel>, param2: javax.inject.Provider<io.grpc.Metadata>);
								public get(): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
								public static providesInAppMessagingSdkServingStub(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, param1: io.grpc.Channel, param2: io.grpc.Metadata): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProgrammaticContextualTriggerFlowableModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule>;
								public providesProgramaticContextualTriggerStream(): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers);
								public providesProgramaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggerStreamFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.reactivex.flowables.ConnectableFlowable<string>> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggerStreamFactory>;
								public static providesProgramaticContextualTriggerStream(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): io.reactivex.flowables.ConnectableFlowable<string>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule);
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggerStreamFactory;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggersFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggersFactory>;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule);
								public static providesProgramaticContextualTriggers(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggersFactory;
								public get(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule>;
								public static CAMPAIGN_CACHE_FILE: string;
								public static IMPRESSIONS_STORE_FILE: string;
								public static RATE_LIMIT_STORE_FILE: string;
								public providesProtoStorageClientForCampaign(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public providesProtoStorageClientForImpressionStore(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public constructor();
								public providesProtoStorageClientForLimiterStore(param0: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule_ProvidesProtoStorageClientForCampaignFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForCampaignFactory>;
								public static providesProtoStorageClientForCampaign(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForCampaignFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule_ProvidesProtoStorageClientForImpressionStoreFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForImpressionStoreFactory>;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static providesProtoStorageClientForImpressionStore(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForImpressionStoreFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class ProtoStorageClientModule_ProvidesProtoStorageClientForLimiterStoreFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.ProtoStorageClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForLimiterStoreFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForLimiterStoreFactory;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public static providesProtoStorageClientForLimiterStore(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, param1: javax.inject.Provider<globalAndroid.app.Application>);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class RateLimitModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule>;
								public constructor();
								public providesAppForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class RateLimitModule_ProvidesAppForegroundRateLimitFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.model.RateLimit> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule_ProvidesAppForegroundRateLimitFactory>;
								public static providesAppForegroundRateLimit(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.model.RateLimit;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule);
								public get(): com.google.firebase.inappmessaging.model.RateLimit;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule_ProvidesAppForegroundRateLimitFactory;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule>;
								public providesComputeScheduler(): io.reactivex.Scheduler;
								public providesMainThreadScheduler(): io.reactivex.Scheduler;
								public constructor();
								public providesIOScheduler(): io.reactivex.Scheduler;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule_ProvidesComputeSchedulerFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.reactivex.Scheduler> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesComputeSchedulerFactory>;
								public get(): io.reactivex.Scheduler;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesComputeSchedulerFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule);
								public static providesComputeScheduler(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): io.reactivex.Scheduler;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule_ProvidesIOSchedulerFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.reactivex.Scheduler> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesIOSchedulerFactory>;
								public get(): io.reactivex.Scheduler;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesIOSchedulerFactory;
								public static providesIOScheduler(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): io.reactivex.Scheduler;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SchedulerModule_ProvidesMainThreadSchedulerFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<io.reactivex.Scheduler> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesMainThreadSchedulerFactory>;
								public get(): io.reactivex.Scheduler;
								public static providesMainThreadScheduler(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): io.reactivex.Scheduler;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesMainThreadSchedulerFactory;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule);
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SystemClockModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule>;
								public providesSystemClockModule(): com.google.firebase.inappmessaging.internal.time.Clock;
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class SystemClockModule_ProvidesSystemClockModuleFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.time.Clock> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule_ProvidesSystemClockModuleFactory>;
								public static create(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule_ProvidesSystemClockModuleFactory;
								public static providesSystemClockModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.time.Clock;
								public constructor(param0: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule);
								public get(): com.google.firebase.inappmessaging.internal.time.Clock;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class TransportClientModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.TransportClientModule>;
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module modules {
							export class TransportClientModule_ProvidesMetricsLoggerClientFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.MetricsLoggerClient> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.TransportClientModule_ProvidesMetricsLoggerClientFactory>;
								public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.android.datatransport.TransportFactory>, param2: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param3: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>): com.google.firebase.inappmessaging.internal.injection.modules.TransportClientModule_ProvidesMetricsLoggerClientFactory;
								public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.android.datatransport.TransportFactory>, param2: javax.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param3: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param4: javax.inject.Provider<com.google.firebase.inappmessaging.internal.time.Clock>, param5: javax.inject.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>);
								public get(): com.google.firebase.inappmessaging.internal.MetricsLoggerClient;
								public static providesMetricsLoggerClient(param0: com.google.firebase.FirebaseApp, param1: com.google.android.datatransport.TransportFactory, param2: com.google.firebase.analytics.connector.AnalyticsConnector, param3: com.google.firebase.installations.FirebaseInstallationsApi, param4: com.google.firebase.inappmessaging.internal.time.Clock, param5: com.google.firebase.inappmessaging.internal.DeveloperListenerManager): com.google.firebase.inappmessaging.internal.MetricsLoggerClient;
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class Analytics {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.Analytics>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.Analytics interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class AnalyticsListener {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.AnalyticsListener>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.AnalyticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class AppForeground {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.AppForeground>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.AppForeground interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class CampaignCache {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.CampaignCache>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.CampaignCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class ImpressionStore {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.ImpressionStore>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.ImpressionStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class ProgrammaticTrigger {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.ProgrammaticTrigger>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.ProgrammaticTrigger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module qualifiers {
							export class RateLimit {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.qualifiers.RateLimit>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.qualifiers.RateLimit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module injection {
						export module scopes {
							export class FirebaseAppScope {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.scopes.FirebaseAppScope>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.injection.scopes.FirebaseAppScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
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
			export module inappmessaging {
				export module internal {
					export module time {
						export class Clock {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.time.Clock>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								now(): number;
							});
							public constructor();
							public now(): number;
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
			export module inappmessaging {
				export module internal {
					export module time {
						export class SystemClock extends com.google.firebase.inappmessaging.internal.time.Clock {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.time.SystemClock>;
							public constructor();
							public now(): number;
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
			export module inappmessaging {
				export module internal {
					export module time {
						export class SystemClock_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.internal.time.SystemClock> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.time.SystemClock_Factory>;
							public constructor();
							public static newInstance(): com.google.firebase.inappmessaging.internal.time.SystemClock;
							public get(): com.google.firebase.inappmessaging.internal.time.SystemClock;
							public static create(): com.google.firebase.inappmessaging.internal.time.SystemClock_Factory;
						}
						export module SystemClock_Factory {
							export class InstanceHolder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.time.SystemClock_Factory.InstanceHolder>;
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
			export module inappmessaging {
				export module model {
					export class Action {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Action>;
						public getActionUrl(): string;
						public getButton(): com.google.firebase.inappmessaging.model.Button;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static builder(): com.google.firebase.inappmessaging.model.Action.Builder;
					}
					export module Action {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Action.Builder>;
							public constructor();
							public setActionUrl(param0: string): com.google.firebase.inappmessaging.model.Action.Builder;
							public setButton(param0: com.google.firebase.inappmessaging.model.Button): com.google.firebase.inappmessaging.model.Action.Builder;
							public build(): com.google.firebase.inappmessaging.model.Action;
							public setButton(param0: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.model.Action.Builder;
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
			export module inappmessaging {
				export module model {
					export class AutoValue_RateLimit extends com.google.firebase.inappmessaging.model.RateLimit {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.AutoValue_RateLimit>;
						public limiterKey(): string;
						public limit(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public timeToLiveMillis(): number;
						public toString(): string;
					}
					export module AutoValue_RateLimit {
						export class Builder extends com.google.firebase.inappmessaging.model.RateLimit.Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.AutoValue_RateLimit.Builder>;
							public setLimit(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public setTimeToLiveMillis(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public build(): com.google.firebase.inappmessaging.model.RateLimit;
							public setLimiterKey(param0: string): com.google.firebase.inappmessaging.model.RateLimit.Builder;
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
			export module inappmessaging {
				export module model {
					export class BannerMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.BannerMessage>;
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						/** @deprecated */
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public static builder(): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module BannerMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.BannerMessage.Builder>;
							public constructor();
							public setBody(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata, param1: java.util.Map<string,string>): com.google.firebase.inappmessaging.model.BannerMessage;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
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
			export module inappmessaging {
				export module model {
					export class Button {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Button>;
						public getButtonHexColor(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static builder(): com.google.firebase.inappmessaging.model.Button.Builder;
						public getText(): com.google.firebase.inappmessaging.model.Text;
					}
					export module Button {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Button.Builder>;
							public constructor();
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.model.Button.Builder;
							public setText(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.Button.Builder;
							public setButtonHexColor(param0: string): com.google.firebase.inappmessaging.model.Button.Builder;
							public build(): com.google.firebase.inappmessaging.model.Button;
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
			export module inappmessaging {
				export module model {
					export class CampaignMetadata {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CampaignMetadata>;
						public getCampaignName(): string;
						public getIsTestMessage(): boolean;
						public constructor(param0: string, param1: string, param2: boolean);
						public getCampaignId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class CardMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CardMessage>;
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPortraitImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						public static builder(): com.google.firebase.inappmessaging.model.CardMessage.Builder;
						/** @deprecated */
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getSecondaryAction(): com.google.firebase.inappmessaging.model.Action;
						public getPrimaryAction(): com.google.firebase.inappmessaging.model.Action;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getLandscapeImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
					}
					export module CardMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CardMessage.Builder>;
							public constructor();
							public setSecondaryAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setPrimaryAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setPortraitImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setLandscapeImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata, param1: java.util.Map<string,string>): com.google.firebase.inappmessaging.model.CardMessage;
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
			export module inappmessaging {
				export module model {
					export class ImageData {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageData>;
						public constructor(param0: string, param1: globalAndroid.graphics.Bitmap);
						public getBitmapData(): globalAndroid.graphics.Bitmap;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageUrl(): string;
						public static builder(): com.google.firebase.inappmessaging.model.ImageData.Builder;
					}
					export module ImageData {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageData.Builder>;
							public constructor();
							public setImageUrl(param0: string): com.google.firebase.inappmessaging.model.ImageData.Builder;
							public setBitmapData(param0: globalAndroid.graphics.Bitmap): com.google.firebase.inappmessaging.model.ImageData.Builder;
							public build(): com.google.firebase.inappmessaging.model.ImageData;
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
			export module inappmessaging {
				export module model {
					export class ImageOnlyMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageOnlyMessage>;
						public static builder(): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module ImageOnlyMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder>;
							public constructor();
							public setAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
							public setImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata, param1: java.util.Map<string,string>): com.google.firebase.inappmessaging.model.ImageOnlyMessage;
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
			export module inappmessaging {
				export module model {
					export abstract class InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.InAppMessage>;
						/** @deprecated */
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						/** @deprecated */
						public getCampaignId(): string;
						public getData(): java.util.Map<string,string>;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getIsTestMessage(): java.lang.Boolean;
						/** @deprecated */
						public constructor(param0: com.google.firebase.inappmessaging.model.Text, param1: com.google.firebase.inappmessaging.model.Text, param2: string, param3: com.google.firebase.inappmessaging.model.ImageData, param4: com.google.firebase.inappmessaging.model.Button, param5: com.google.firebase.inappmessaging.model.Action, param6: string, param7: string, param8: string, param9: java.lang.Boolean, param10: com.google.firebase.inappmessaging.model.MessageType, param11: java.util.Map<string,string>);
						/** @deprecated */
						public getActionButton(): com.google.firebase.inappmessaging.model.Button;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						/** @deprecated */
						public getImageUrl(): string;
						public getCampaignMetadata(): com.google.firebase.inappmessaging.model.CampaignMetadata;
						public getMessageType(): com.google.firebase.inappmessaging.model.MessageType;
						public constructor(param0: com.google.firebase.inappmessaging.model.CampaignMetadata, param1: com.google.firebase.inappmessaging.model.MessageType, param2: java.util.Map<string,string>);
						/** @deprecated */
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						/** @deprecated */
						public getCampaignName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class MessageType {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.MessageType>;
						public static UNSUPPORTED: com.google.firebase.inappmessaging.model.MessageType;
						public static MODAL: com.google.firebase.inappmessaging.model.MessageType;
						public static IMAGE_ONLY: com.google.firebase.inappmessaging.model.MessageType;
						public static BANNER: com.google.firebase.inappmessaging.model.MessageType;
						public static CARD: com.google.firebase.inappmessaging.model.MessageType;
						public static valueOf(param0: string): com.google.firebase.inappmessaging.model.MessageType;
						public static values(): native.Array<com.google.firebase.inappmessaging.model.MessageType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class ModalMessage extends com.google.firebase.inappmessaging.model.InAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ModalMessage>;
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public static builder(): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						/** @deprecated */
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module ModalMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ModalMessage.Builder>;
							public constructor();
							public setImageData(param0: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setBody(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setAction(param0: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setBackgroundHexColor(param0: string): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setTitle(param0: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public build(param0: com.google.firebase.inappmessaging.model.CampaignMetadata, param1: java.util.Map<string,string>): com.google.firebase.inappmessaging.model.ModalMessage;
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
			export module inappmessaging {
				export module model {
					export class ProtoMarshallerClient {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ProtoMarshallerClient>;
						public static decode(param0: com.google.firebase.inappmessaging.MessagesProto.Content, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,string>): com.google.firebase.inappmessaging.model.InAppMessage;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module model {
					export class ProtoMarshallerClient_Factory extends com.google.firebase.inappmessaging.dagger.internal.Factory<com.google.firebase.inappmessaging.model.ProtoMarshallerClient> {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ProtoMarshallerClient_Factory>;
						public constructor();
						public static newInstance(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
						public get(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
						public static create(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient_Factory;
					}
					export module ProtoMarshallerClient_Factory {
						export class InstanceHolder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ProtoMarshallerClient_Factory.InstanceHolder>;
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
			export module inappmessaging {
				export module model {
					export abstract class RateLimit {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.RateLimit>;
						public limiterKey(): string;
						public constructor();
						public limit(): number;
						public static builder(): com.google.firebase.inappmessaging.model.RateLimit.Builder;
						public timeToLiveMillis(): number;
					}
					export module RateLimit {
						export abstract class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.RateLimit.Builder>;
							public constructor();
							public setLimit(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public setTimeToLiveMillis(param0: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public build(): com.google.firebase.inappmessaging.model.RateLimit;
							public setLimiterKey(param0: string): com.google.firebase.inappmessaging.model.RateLimit.Builder;
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
			export module inappmessaging {
				export module model {
					export class Text {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Text>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getHexColor(): string;
						public static builder(): com.google.firebase.inappmessaging.model.Text.Builder;
						public getText(): string;
					}
					export module Text {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Text.Builder>;
							public constructor();
							public setHexColor(param0: string): com.google.firebase.inappmessaging.model.Text.Builder;
							public build(): com.google.firebase.inappmessaging.model.Text;
							public setText(param0: string): com.google.firebase.inappmessaging.model.Text.Builder;
							public setText(param0: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.model.Text.Builder;
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
			export module inappmessaging {
				export module model {
					export class TriggeredInAppMessage {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.TriggeredInAppMessage>;
						public getInAppMessage(): com.google.firebase.inappmessaging.model.InAppMessage;
						public constructor(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: string);
						public getTriggeringEvent(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export class CampaignProto {
							public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto>;
							public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module CampaignProto {
							export class ExperimentalCampaignPayload extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static EXPERIMENT_PAYLOAD_FIELD_NUMBER: number;
								public static CAMPAIGN_START_TIME_MILLIS_FIELD_NUMBER: number;
								public static CAMPAIGN_END_TIME_MILLIS_FIELD_NUMBER: number;
								public static CAMPAIGN_NAME_FIELD_NUMBER: number;
								public getCampaignEndTimeMillis(): number;
								public getCampaignName(): string;
								public getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getCampaignId(): string;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getCampaignStartTimeMillis(): number;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public hasExperimentPayload(): boolean;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload>;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
							}
							export module ExperimentalCampaignPayload {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder>;
									public setCampaignNameBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public clearCampaignName(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignEndTimeMillis(): number;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
									public setCampaignEndTimeMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public mergeExperimentPayload(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setExperimentPayload(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignId(): string;
									public clearExperimentPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignStartTimeMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignNameBytes(): com.google.protobuf.ByteString;
									public setCampaignName(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setExperimentPayload(param0: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public hasExperimentPayload(): boolean;
									public clearCampaignStartTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public clearCampaignEndTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignName(): string;
									public getCampaignStartTimeMillis(): number;
								}
							}
							export class ExperimentalCampaignPayloadOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ExperimentalCampaignPayloadOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									hasExperimentPayload(): boolean;
									getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
									getCampaignStartTimeMillis(): number;
									getCampaignEndTimeMillis(): number;
									getCampaignName(): string;
									getCampaignNameBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getCampaignEndTimeMillis(): number;
								public getCampaignStartTimeMillis(): number;
								public getCampaignName(): string;
								public getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getCampaignId(): string;
								public hasExperimentPayload(): boolean;
							}
							export class ExperimentalCampaignRollout extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout>;
								public static EXPERIMENT_ID_FIELD_NUMBER: number;
								public static SELECTED_VARIANT_INDEX_FIELD_NUMBER: number;
								public static PRIORITY_FIELD_NUMBER: number;
								public static START_TIME_FIELD_NUMBER: number;
								public static END_TIME_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getExperimentId(): string;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasEndTime(): boolean;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public hasStartTime(): boolean;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public hasPriority(): boolean;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout>;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getSelectedVariantIndex(): number;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getExperimentIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
							}
							export module ExperimentalCampaignRollout {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder>;
									public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public setEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public hasEndTime(): boolean;
									public setEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getExperimentId(): string;
									public clearSelectedVariantIndex(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setExperimentIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public clearExperimentId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setSelectedVariantIndex(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergeEndTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergePriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public hasPriority(): boolean;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getExperimentIdBytes(): com.google.protobuf.ByteString;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public getSelectedVariantIndex(): number;
									public clearStartTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public hasStartTime(): boolean;
									public clearEndTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setExperimentId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergeStartTime(param0: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								}
							}
							export class ExperimentalCampaignRolloutOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ExperimentalCampaignRolloutOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getExperimentId(): string;
									getExperimentIdBytes(): com.google.protobuf.ByteString;
									getSelectedVariantIndex(): number;
									hasPriority(): boolean;
									getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									hasStartTime(): boolean;
									getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									hasEndTime(): boolean;
									getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								});
								public constructor();
								public getExperimentId(): string;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasPriority(): boolean;
								public hasEndTime(): boolean;
								public getSelectedVariantIndex(): number;
								public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public hasStartTime(): boolean;
								public getExperimentIdBytes(): com.google.protobuf.ByteString;
							}
							export class ThickContent extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public static VANILLA_PAYLOAD_FIELD_NUMBER: number;
								public static EXPERIMENTAL_PAYLOAD_FIELD_NUMBER: number;
								public static CONTENT_FIELD_NUMBER: number;
								public static PRIORITY_FIELD_NUMBER: number;
								public static TRIGGERING_CONDITIONS_FIELD_NUMBER: number;
								public static IS_TEST_CAMPAIGN_FIELD_NUMBER: number;
								public static DATA_BUNDLE_FIELD_NUMBER: number;
								public getDataBundleCount(): number;
								public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								public getIsTestCampaign(): boolean;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getTriggeringConditionsCount(): number;
								/** @deprecated */
								public getDataBundle(): java.util.Map<string,string>;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getDataBundleMap(): java.util.Map<string,string>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public hasContent(): boolean;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public hasPriority(): boolean;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public hasExperimentalPayload(): boolean;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public getTriggeringConditionsOrBuilderList(): java.util.List<any>;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public hasVanillaPayload(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getDataBundleOrDefault(param0: string, param1: string): string;
								public getDataBundleOrThrow(param0: string): string;
								public getTriggeringConditionsOrBuilder(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder;
								public containsDataBundle(param0: string): boolean;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
							}
							export module ThickContent {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent,com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder>;
									public removeTriggeringConditions(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public setPriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergePriority(param0: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setExperimentalPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setExperimentalPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(param0: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearDataBundle(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									/** @deprecated */
									public getDataBundle(): java.util.Map<string,string>;
									public setVanillaPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearIsTestCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleCount(): number;
									public putDataBundle(param0: string, param1: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeVanillaPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setIsTestCampaign(param0: boolean): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									public hasContent(): boolean;
									public setVanillaPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public putAllDataBundle(param0: java.util.Map<string,string>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleOrThrow(param0: string): string;
									public hasExperimentalPayload(): boolean;
									public hasPriority(): boolean;
									public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
									public clearContent(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleMap(): java.util.Map<string,string>;
									public getIsTestCampaign(): boolean;
									public addAllTriggeringConditions(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									public clearVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public getTriggeringConditionsCount(): number;
									public clearTriggeringConditions(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeExperimentalPayload(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public removeDataBundle(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public containsDataBundle(param0: string): boolean;
									public setContent(param0: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public hasVanillaPayload(): boolean;
									public getDataBundleOrDefault(param0: string, param1: string): string;
									public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
									public setTriggeringConditions(param0: number, param1: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								}
								export class DataBundleDefaultEntryHolder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.DataBundleDefaultEntryHolder>;
								}
								export class PayloadCase {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase>;
									public static VANILLA_PAYLOAD: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static EXPERIMENTAL_PAYLOAD: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static PAYLOAD_NOT_SET: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static valueOf(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public getNumber(): number;
									public static forNumber(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static values(): native.Array<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase>;
									/** @deprecated */
									public static valueOf(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								}
							}
							export class ThickContentOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ThickContentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									hasVanillaPayload(): boolean;
									getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
									hasExperimentalPayload(): boolean;
									getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
									hasContent(): boolean;
									getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									hasPriority(): boolean;
									getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									getTriggeringConditionsCount(): number;
									getIsTestCampaign(): boolean;
									getDataBundleCount(): number;
									containsDataBundle(param0: string): boolean;
									getDataBundle(): java.util.Map<string,string>;
									getDataBundleMap(): java.util.Map<string,string>;
									getDataBundleOrDefault(param0: string, param1: string): string;
									getDataBundleOrThrow(param0: string): string;
									getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								});
								public constructor();
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public getDataBundleCount(): number;
								public hasPriority(): boolean;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								public hasExperimentalPayload(): boolean;
								public getIsTestCampaign(): boolean;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public hasVanillaPayload(): boolean;
								public getTriggeringConditionsCount(): number;
								public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								/** @deprecated */
								public getDataBundle(): java.util.Map<string,string>;
								public getDataBundleMap(): java.util.Map<string,string>;
								public hasContent(): boolean;
								public getDataBundleOrDefault(param0: string, param1: string): string;
								public getDataBundleOrThrow(param0: string): string;
								public containsDataBundle(param0: string): boolean;
							}
							export class VanillaCampaignPayload extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static EXPERIMENTAL_CAMPAIGN_ID_FIELD_NUMBER: number;
								public static CAMPAIGN_START_TIME_MILLIS_FIELD_NUMBER: number;
								public static CAMPAIGN_END_TIME_MILLIS_FIELD_NUMBER: number;
								public static CAMPAIGN_NAME_FIELD_NUMBER: number;
								public getCampaignEndTimeMillis(): number;
								public getCampaignName(): string;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getExperimentalCampaignId(): string;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getCampaignId(): string;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
								public getCampaignStartTimeMillis(): number;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload>;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
							}
							export module VanillaCampaignPayload {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload,com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder>;
									public setCampaignStartTimeMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignStartTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignEndTimeMillis(): number;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignEndTimeMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearExperimentalCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignNameBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignName(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignId(): string;
									public setExperimentalCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignNameBytes(): com.google.protobuf.ByteString;
									public setExperimentalCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignName(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
									public getCampaignName(): string;
									public getExperimentalCampaignId(): string;
									public getCampaignStartTimeMillis(): number;
									public clearCampaignEndTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
								}
							}
							export class VanillaCampaignPayloadOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$VanillaCampaignPayloadOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									getExperimentalCampaignId(): string;
									getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
									getCampaignStartTimeMillis(): number;
									getCampaignEndTimeMillis(): number;
									getCampaignName(): string;
									getCampaignNameBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getCampaignEndTimeMillis(): number;
								public getCampaignStartTimeMillis(): number;
								public getCampaignName(): string;
								public getExperimentalCampaignId(): string;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getCampaignId(): string;
								public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpression extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number;
								public static IMPRESSION_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getImpressionTimestampMillis(): number;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public getCampaignId(): string;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
							}
							export module CampaignImpression {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder>;
									public setCampaignIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getImpressionTimestampMillis(): number;
									public setImpressionTimestampMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getCampaignId(): string;
									public clearImpressionTimestampMillis(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignId(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								}
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpressionList extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
								public static ALREADY_SEEN_CAMPAIGNS_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public getAlreadySeenCampaignsCount(): number;
								public getAlreadySeenCampaignsOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public getAlreadySeenCampaignsOrBuilderList(): java.util.List<any>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
							}
							export module CampaignImpressionList {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList,com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder>;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public clearAlreadySeenCampaigns(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									public getAlreadySeenCampaignsCount(): number;
									public removeAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAllAlreadySeenCampaigns(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								}
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpressionListOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									getAlreadySeenCampaignsCount(): number;
								});
								public constructor();
								public getAlreadySeenCampaignsCount(): number;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class CampaignImpressionOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCampaignId(): string;
									getCampaignIdBytes(): com.google.protobuf.ByteString;
									getImpressionTimestampMillis(): number;
								});
								public constructor();
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getImpressionTimestampMillis(): number;
								public getCampaignId(): string;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class ClientAppInfo extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo,com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo>;
								public static GMP_APP_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number;
								public static APP_INSTANCE_ID_TOKEN_FIELD_NUMBER: number;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
								public getAppInstanceId(): string;
								public getAppInstanceIdToken(): string;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo>;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
								public getGmpAppId(): string;
							}
							export module ClientAppInfo {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo,com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder>;
									public clearGmpAppId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setAppInstanceId(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdToken(): string;
									public setAppInstanceIdTokenBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setGmpAppId(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
									public getGmpAppIdBytes(): com.google.protobuf.ByteString;
									public clearAppInstanceIdToken(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setGmpAppIdBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public clearAppInstanceId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									public setAppInstanceIdToken(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getGmpAppId(): string;
									public getAppInstanceId(): string;
								}
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class ClientAppInfoOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getGmpAppId(): string;
									getGmpAppIdBytes(): com.google.protobuf.ByteString;
									getAppInstanceId(): string;
									getAppInstanceIdBytes(): com.google.protobuf.ByteString;
									getAppInstanceIdToken(): string;
									getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								});
								public constructor();
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceId(): string;
								public getAppInstanceIdToken(): string;
								public getGmpAppId(): string;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest>;
								public static PROJECT_NUMBER_FIELD_NUMBER: number;
								public static REQUESTING_CLIENT_APP_FIELD_NUMBER: number;
								public static ALREADY_SEEN_CAMPAIGNS_FIELD_NUMBER: number;
								public static CLIENT_SIGNALS_FIELD_NUMBER: number;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public hasRequestingClientApp(): boolean;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public getAlreadySeenCampaignsCount(): number;
								public getAlreadySeenCampaignsOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder;
								public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaignsOrBuilderList(): java.util.List<any>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getProjectNumber(): string;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest>;
								public hasClientSignals(): boolean;
							}
							export module FetchEligibleCampaignsRequest {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder>;
									public mergeRequestingClientApp(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getProjectNumber(): string;
									public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getProjectNumberBytes(): com.google.protobuf.ByteString;
									public removeAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
									public setClientSignals(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public mergeClientSignals(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setProjectNumber(param0: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setClientSignals(param0: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public hasClientSignals(): boolean;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setProjectNumberBytes(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public hasRequestingClientApp(): boolean;
									public setRequestingClientApp(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public setRequestingClientApp(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAllAlreadySeenCampaigns(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public clearClientSignals(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public clearAlreadySeenCampaigns(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									public getAlreadySeenCampaignsCount(): number;
									public clearRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								}
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsRequestOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getProjectNumber(): string;
									getProjectNumberBytes(): com.google.protobuf.ByteString;
									hasRequestingClientApp(): boolean;
									getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
									getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									getAlreadySeenCampaignsCount(): number;
									hasClientSignals(): boolean;
									getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								});
								public constructor();
								public getAlreadySeenCampaignsCount(): number;
								public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getProjectNumber(): string;
								public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public hasRequestingClientApp(): boolean;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public hasClientSignals(): boolean;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder  {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static MESSAGES_FIELD_NUMBER: number;
								public static EXPIRATION_EPOCH_TIMESTAMP_MILLIS_FIELD_NUMBER: number;
								public static parseFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesOrBuilderList(): java.util.List<any>;
								public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
								public static parseFrom(param0: native.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public static parseFrom(param0: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesOrBuilder(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesCount(): number;
								public getExpirationEpochTimestampMillis(): number;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static newBuilder(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								public static parseDelimitedFrom(param0: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
							}
							export module FetchEligibleCampaignsResponse {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder  {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder>;
									public clearMessages(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
									public clearExpirationEpochTimestampMillis(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
									public removeMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addAllMessages(param0: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public setMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public setExpirationEpochTimestampMillis(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getExpirationEpochTimestampMillis(): number;
									public addMessages(param0: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessagesCount(): number;
									public setMessages(param0: number, param1: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								}
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FetchEligibleCampaignsResponseOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
									getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
									getMessagesCount(): number;
									getExpirationEpochTimestampMillis(): number;
								});
								public constructor();
								public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public getMessagesCount(): number;
								public getExpirationEpochTimestampMillis(): number;
								public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class FiamFetchService {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FiamFetchService>;
								public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
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
		export module internal {
			export module firebase {
				export module inappmessaging {
					export module v1 {
						export module sdkserving {
							export class InAppMessagingSdkServingGrpc {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc>;
								public static SERVICE_NAME: string;
								public static getServiceDescriptor(): io.grpc.ServiceDescriptor;
								public static getFetchEligibleCampaignsMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest,com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static newStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub;
								public static newFutureStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub;
								public static newBlockingStub(param0: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
							}
							export module InAppMessagingSdkServingGrpc {
								export class InAppMessagingSdkServingBlockingStub extends io.grpc.stub.AbstractBlockingStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>;
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
									public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
								}
								export class InAppMessagingSdkServingFutureStub extends io.grpc.stub.AbstractFutureStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub>;
									public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub;
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								}
								export abstract class InAppMessagingSdkServingImplBase {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingImplBase>;
									public constructor();
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
									public bindService(): io.grpc.ServerServiceDefinition;
								}
								export class InAppMessagingSdkServingStub extends io.grpc.stub.AbstractAsyncStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub>;
									public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub;
									public fetchEligibleCampaigns(param0: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, param1: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
								}
								export class MethodHandlers<Req, Resp>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.MethodHandlers<any,any>>;
									public invoke(param0: Req, param1: io.grpc.stub.StreamObserver<Resp>): void;
									public invoke(param0: io.grpc.stub.StreamObserver<Resp>): io.grpc.stub.StreamObserver<Req>;
								}
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.inappmessaging.dagger.Lazy:1
//com.google.firebase.inappmessaging.dagger.MembersInjector:1
//com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory:3
//com.google.firebase.inappmessaging.dagger.internal.AbstractMapFactory.Builder:3
//com.google.firebase.inappmessaging.dagger.internal.DelegateFactory:1
//com.google.firebase.inappmessaging.dagger.internal.DoubleCheck:1
//com.google.firebase.inappmessaging.dagger.internal.Factory:1
//com.google.firebase.inappmessaging.dagger.internal.InstanceFactory:1
//com.google.firebase.inappmessaging.dagger.internal.MapBuilder:2
//com.google.firebase.inappmessaging.dagger.internal.MapFactory:2
//com.google.firebase.inappmessaging.dagger.internal.MapFactory.Builder:2
//com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory:2
//com.google.firebase.inappmessaging.dagger.internal.MapProviderFactory.Builder:2
//com.google.firebase.inappmessaging.dagger.internal.ProviderOfLazy:1
//com.google.firebase.inappmessaging.dagger.internal.SetBuilder:1
//com.google.firebase.inappmessaging.dagger.internal.SetFactory:1
//com.google.firebase.inappmessaging.dagger.internal.SetFactory.Builder:1
//com.google.firebase.inappmessaging.dagger.internal.SingleCheck:1
//com.google.firebase.inappmessaging.display.dagger.Lazy:1
//com.google.firebase.inappmessaging.display.dagger.MembersInjector:1
//com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory:3
//com.google.firebase.inappmessaging.display.dagger.internal.AbstractMapFactory.Builder:3
//com.google.firebase.inappmessaging.display.dagger.internal.DelegateFactory:1
//com.google.firebase.inappmessaging.display.dagger.internal.DoubleCheck:1
//com.google.firebase.inappmessaging.display.dagger.internal.Factory:1
//com.google.firebase.inappmessaging.display.dagger.internal.InstanceFactory:1
//com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder:2
//com.google.firebase.inappmessaging.display.dagger.internal.MapFactory:2
//com.google.firebase.inappmessaging.display.dagger.internal.MapFactory.Builder:2
//com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory:2
//com.google.firebase.inappmessaging.display.dagger.internal.MapProviderFactory.Builder:2
//com.google.firebase.inappmessaging.display.dagger.internal.ProviderOfLazy:1
//com.google.firebase.inappmessaging.display.dagger.internal.SetBuilder:1
//com.google.firebase.inappmessaging.display.dagger.internal.SetFactory:1
//com.google.firebase.inappmessaging.display.dagger.internal.SetFactory.Builder:1
//com.google.firebase.inappmessaging.display.dagger.internal.SingleCheck:1
//com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener:1
//com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.MethodHandlers:2

