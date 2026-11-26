/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module developers {
			export module mobile {
				export module targeting {
					export module proto {
						export class ClientSignalsProto {
							public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto>;
							public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module ClientSignalsProto {
							export class AppInstanceClaim extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim, com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim>;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number = 1;
								public static APP_INSTANCE_TOKEN_FIELD_NUMBER: number = 2;
								public static GMP_APP_ID_FIELD_NUMBER: number = 3;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getAppInstanceId(): string;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim>;
								public getAppInstanceToken(): string;
								public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(input: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(data: androidNative.Array<number>): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public static newBuilder(prototype: com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
								public getGmpAppId(): string;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module AppInstanceClaim {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim, com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaimOrBuilder {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder>;
									public setAppInstanceTokenBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setGmpAppId(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
									public clearAppInstanceId(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceId(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setGmpAppIdBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public getGmpAppIdBytes(): com.google.protobuf.ByteString;
									public setAppInstanceToken(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public clearGmpAppId(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public setAppInstanceIdBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
									public clearAppInstanceToken(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.AppInstanceClaim.Builder;
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
								public constructor(implementation: { getAppInstanceId(): string; getAppInstanceIdBytes(): com.google.protobuf.ByteString; getAppInstanceToken(): string; getAppInstanceTokenBytes(): com.google.protobuf.ByteString; getGmpAppId(): string; getGmpAppIdBytes(): com.google.protobuf.ByteString });
								public constructor();
								public getAppInstanceToken(): string;
								public getAppInstanceTokenBytes(): com.google.protobuf.ByteString;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public getAppInstanceId(): string;
								public getGmpAppId(): string;
							}
							export class ClientSignals extends com.google.protobuf.GeneratedMessageLite<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals, com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals>;
								public static APP_VERSION_FIELD_NUMBER: number = 1;
								public static PLATFORM_VERSION_FIELD_NUMBER: number = 2;
								public static LANGUAGE_CODE_FIELD_NUMBER: number = 3;
								public static TIME_ZONE_FIELD_NUMBER: number = 4;
								public getAppVersion(): string;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public getTimeZone(): string;
								public getLanguageCodeBytes(): com.google.protobuf.ByteString;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public getTimeZoneBytes(): com.google.protobuf.ByteString;
								public getAppVersionBytes(): com.google.protobuf.ByteString;
								public static newBuilder(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
								public static newBuilder(prototype: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
								public static getDefaultInstance(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(data: androidNative.Array<number>): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(input: java.io.InputStream): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public getLanguageCode(): string;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parser(): com.google.protobuf.Parser<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals>;
								public getPlatformVersionBytes(): com.google.protobuf.ByteString;
								public getPlatformVersion(): string;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module ClientSignals {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals, com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder> implements com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder {
									public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder>;
									public clearPlatformVersion(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setPlatformVersionBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getAppVersionBytes(): com.google.protobuf.ByteString;
									public getTimeZone(): string;
									public setAppVersion(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setLanguageCodeBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getLanguageCode(): string;
									public clearLanguageCode(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public clearTimeZone(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setTimeZoneBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setAppVersionBytes(value: com.google.protobuf.ByteString): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setPlatformVersion(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getPlatformVersion(): string;
									public getPlatformVersionBytes(): com.google.protobuf.ByteString;
									public getLanguageCodeBytes(): com.google.protobuf.ByteString;
									public getTimeZoneBytes(): com.google.protobuf.ByteString;
									public clearAppVersion(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setLanguageCode(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public setTimeZone(value: string): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder;
									public getAppVersion(): string;
								}
							}
							export class ClientSignalsOrBuilder {
								public static class: java.lang.Class<com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignalsOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.developers.mobile.targeting.proto.ClientSignalsProto$ClientSignalsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { getAppVersion(): string; getAppVersionBytes(): com.google.protobuf.ByteString; getPlatformVersion(): string; getPlatformVersionBytes(): com.google.protobuf.ByteString; getLanguageCode(): string; getLanguageCodeBytes(): com.google.protobuf.ByteString; getTimeZone(): string; getTimeZoneBytes(): com.google.protobuf.ByteString });
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
			export class AutoValue_StartupTime extends com.google.firebase.StartupTime {
				public static class: java.lang.Class<com.google.firebase.AutoValue_StartupTime>;
				public getEpochMillis(): number;
				public equals(this_: any): boolean;
				public hashCode(): number;
				public getUptimeMillis(): number;
				public toString(): string;
				public getElapsedRealtime(): number;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class BuildConfig {
				public static class: java.lang.Class<com.google.firebase.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase';
				public static BUILD_TYPE: string = 'release';
				public static VERSION_NAME: string = '22.2.1';
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class DataCollectionDefaultChange {
				public static class: java.lang.Class<com.google.firebase.DataCollectionDefaultChange>;
				public enabled: boolean;
				public constructor(enabled: boolean);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class Firebase {
				public static class: java.lang.Class<com.google.firebase.Firebase>;
				public static INSTANCE: com.google.firebase.Firebase;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseApp {
				public static class: java.lang.Class<com.google.firebase.FirebaseApp>;
				public static DEFAULT_APP_NAME: string = '[DEFAULT]';
				/** @deprecated */
				public setDataCollectionDefaultEnabled(enabled: boolean): void;
				public static clearInstancesForTest(): void;
				public getApplicationContext(): globalAndroid.content.Context;
				public static getPersistenceKey(name: string, options: com.google.firebase.FirebaseOptions): string;
				public delete(): void;
				public hashCode(): number;
				public addLifecycleEventListener(listener: com.google.firebase.FirebaseAppLifecycleListener): void;
				public equals(o: any): boolean;
				public isDataCollectionDefaultEnabled(): boolean;
				public get(anInterface: java.lang.Class<any>): any;
				public static initializeApp(applicationContext: globalAndroid.content.Context, firebaseApp: com.google.firebase.FirebaseOptions, context: string): com.google.firebase.FirebaseApp;
				public setDataCollectionDefaultEnabled(enabled: java.lang.Boolean): void;
				public static getApps(context: globalAndroid.content.Context): java.util.List<com.google.firebase.FirebaseApp>;
				public isDefaultApp(): boolean;
				public removeBackgroundStateChangeListener(listener: com.google.firebase.FirebaseApp.BackgroundStateChangeListener): void;
				public getPersistenceKey(): string;
				public getName(): string;
				public toString(): string;
				public addBackgroundStateChangeListener(listener: com.google.firebase.FirebaseApp.BackgroundStateChangeListener): void;
				public static getInstance(availableAppNamesMessage: string): com.google.firebase.FirebaseApp;
				public static initializeApp(context: globalAndroid.content.Context, options: com.google.firebase.FirebaseOptions): com.google.firebase.FirebaseApp;
				public getOptions(): com.google.firebase.FirebaseOptions;
				public constructor(applicationContext: globalAndroid.content.Context, name: string, options: com.google.firebase.FirebaseOptions);
				public static initializeApp(firebaseOptions: globalAndroid.content.Context): com.google.firebase.FirebaseApp;
				public setAutomaticResourceManagementEnabled(this_: boolean): void;
				public removeLifecycleEventListener(listener: com.google.firebase.FirebaseAppLifecycleListener): void;
				public static getInstance(): com.google.firebase.FirebaseApp;
			}
			export module FirebaseApp {
				export class BackgroundStateChangeListener {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.BackgroundStateChangeListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.FirebaseApp$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onBackgroundStateChanged(param0: boolean): void });
					public constructor();
					public onBackgroundStateChanged(param0: boolean): void;
				}
				export class GlobalBackgroundStateListener {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.GlobalBackgroundStateListener>;
					public onBackgroundStateChanged(this_: boolean): void;
				}
				export class UserUnlockReceiver {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.UserUnlockReceiver>;
					public onReceive(this_: globalAndroid.content.Context, context: globalAndroid.content.Intent): void;
					public unregister(): void;
					public constructor(applicationContext: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseAppLifecycleListener {
				public static class: java.lang.Class<com.google.firebase.FirebaseAppLifecycleListener>;
				/**
				 * Constructs a new instance of the com.google.firebase.FirebaseAppLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onDeleted(param0: string, param1: com.google.firebase.FirebaseOptions): void });
				public constructor();
				public onDeleted(param0: string, param1: com.google.firebase.FirebaseOptions): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseCommonKtxRegistrar {
				public static class: java.lang.Class<com.google.firebase.FirebaseCommonKtxRegistrar>;
				public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseCommonRegistrar {
				public static class: java.lang.Class<com.google.firebase.FirebaseCommonRegistrar>;
				public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseError {
				public static class: java.lang.Class<com.google.firebase.FirebaseError>;
				public static ERROR_INVALID_CUSTOM_TOKEN: number = 17000;
				public static ERROR_CUSTOM_TOKEN_MISMATCH: number = 17002;
				public static ERROR_INVALID_CREDENTIAL: number = 17004;
				public static ERROR_USER_DISABLED: number = 17005;
				public static ERROR_OPERATION_NOT_ALLOWED: number = 17006;
				public static ERROR_EMAIL_ALREADY_IN_USE: number = 17007;
				public static ERROR_INVALID_EMAIL: number = 17008;
				public static ERROR_WRONG_PASSWORD: number = 17009;
				public static ERROR_TOO_MANY_REQUESTS: number = 17010;
				public static ERROR_USER_NOT_FOUND: number = 17011;
				public static ERROR_ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL: number = 17012;
				public static ERROR_REQUIRES_RECENT_LOGIN: number = 17014;
				public static ERROR_PROVIDER_ALREADY_LINKED: number = 17015;
				public static ERROR_NO_SUCH_PROVIDER: number = 17016;
				public static ERROR_INVALID_USER_TOKEN: number = 17017;
				public static ERROR_NETWORK_REQUEST_FAILED: number = 17020;
				public static ERROR_USER_TOKEN_EXPIRED: number = 17021;
				public static ERROR_INVALID_API_KEY: number = 17023;
				public static ERROR_USER_MISMATCH: number = 17024;
				public static ERROR_CREDENTIAL_ALREADY_IN_USE: number = 17025;
				public static ERROR_WEAK_PASSWORD: number = 17026;
				public static ERROR_APP_NOT_AUTHORIZED: number = 17028;
				public static ERROR_NO_SIGNED_IN_USER: number = 17495;
				public static ERROR_INTERNAL_ERROR: number = 17499;
				public getErrorCode(): number;
				public constructor(errorCode: number);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseNetworkException {
				public static class: java.lang.Class<com.google.firebase.FirebaseNetworkException>;
				public constructor(detailMessage: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseOptions {
				public static class: java.lang.Class<com.google.firebase.FirebaseOptions>;
				public getGaTrackingId(): string;
				public hashCode(): number;
				public getStorageBucket(): string;
				public getApiKey(): string;
				public getApplicationId(): string;
				public getGcmSenderId(): string;
				public equals(o: any): boolean;
				public getDatabaseUrl(): string;
				public toString(): string;
				public static fromResource(context: globalAndroid.content.Context): com.google.firebase.FirebaseOptions;
				public getProjectId(): string;
			}
			export module FirebaseOptions {
				export class Builder {
					public static class: java.lang.Class<com.google.firebase.FirebaseOptions.Builder>;
					public setGaTrackingId(gaTrackingId: string): com.google.firebase.FirebaseOptions.Builder;
					public build(): com.google.firebase.FirebaseOptions;
					public setApplicationId(applicationId: string): com.google.firebase.FirebaseOptions.Builder;
					public setDatabaseUrl(databaseUrl: string): com.google.firebase.FirebaseOptions.Builder;
					/** @deprecated */
					public setRecaptchaSiteKey(recaptchaSiteKey: string): com.google.firebase.FirebaseOptions.Builder;
					public constructor();
					public setApiKey(apiKey: string): com.google.firebase.FirebaseOptions.Builder;
					public setStorageBucket(storageBucket: string): com.google.firebase.FirebaseOptions.Builder;
					public constructor(options: com.google.firebase.FirebaseOptions);
					public setGcmSenderId(gcmSenderId: string): com.google.firebase.FirebaseOptions.Builder;
					public setProjectId(projectId: string): com.google.firebase.FirebaseOptions.Builder;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseTooManyRequestsException {
				public static class: java.lang.Class<com.google.firebase.FirebaseTooManyRequestsException>;
				public constructor(message: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export abstract class StartupTime {
				public static class: java.lang.Class<com.google.firebase.StartupTime>;
				public getEpochMillis(): number;
				public static now(): com.google.firebase.StartupTime;
				public getUptimeMillis(): number;
				public constructor();
				public getElapsedRealtime(): number;
				public static create(epochMillis: number, elapsedRealtime: number, uptimeMillis: number): com.google.firebase.StartupTime;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class Timestamp extends java.lang.Object {
				public static class: java.lang.Class<com.google.firebase.Timestamp>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.Timestamp>;
				public constructor(time: java.time.Instant);
				public getSeconds(): number;
				public static now(): com.google.firebase.Timestamp;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				public toString(): string;
				public compareTo(other: com.google.firebase.Timestamp): number;
				public toDate(): java.util.Date;
				public toInstant(): java.time.Instant;
				public constructor(seconds: number, nanoseconds: number);
				public equals(other: any): boolean;
				public constructor(nanoseconds: java.util.Date);
				public hashCode(): number;
				public describeContents(): number;
				public getNanoseconds(): number;
			}
			export module Timestamp {
				export class Companion {
					public static class: java.lang.Class<com.google.firebase.Timestamp.Companion>;
					public now(): com.google.firebase.Timestamp;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module annotations {
				export class PublicApi {
					public static class: java.lang.Class<com.google.firebase.annotations.PublicApi>;
					/**
					 * Constructs a new instance of the com.google.firebase.annotations.PublicApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module components {
				export class ComponentDiscoveryService {
					public static class: java.lang.Class<com.google.firebase.components.ComponentDiscoveryService>;
					public constructor();
					public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class CustomThreadFactory {
					public static class: java.lang.Class<com.google.firebase.concurrent.CustomThreadFactory>;
					public newThread(r: java.lang.Runnable): java.lang.Thread;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class DelegatingScheduledExecutorService {
					public static class: java.lang.Class<com.google.firebase.concurrent.DelegatingScheduledExecutorService>;
					public isTerminated(): boolean;
					public scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number, period: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public schedule(command: java.lang.Runnable, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public invokeAll(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isShutdown(): boolean;
					public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public schedule(callable: java.util.concurrent.Callable<any>, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>;
					public shutdown(): void;
					public submit(task: java.lang.Runnable, result: any): java.util.concurrent.Future<any>;
					public invokeAll(tasks: java.util.Collection<any>): java.util.List<any>;
					public invokeAny(tasks: java.util.Collection<any>): any;
					public scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public execute(command: java.lang.Runnable): void;
					public invokeAny(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): any;
					public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class DelegatingScheduledFuture<V> extends androidx.concurrent.futures.AbstractResolvableFuture<any> implements java.util.concurrent.ScheduledFuture<any> {
					public static class: java.lang.Class<com.google.firebase.concurrent.DelegatingScheduledFuture<any>>;
					public afterDone(): void;
					public compareTo(o: java.util.concurrent.Delayed): number;
					public getDelay(unit: java.util.concurrent.TimeUnit): number;
				}
				export module DelegatingScheduledFuture {
					export class Completer<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.concurrent.DelegatingScheduledFuture.Completer<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.concurrent.DelegatingScheduledFuture$Completer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { set(param0: T): void; setException(param0: java.lang.Throwable): void });
						public constructor();
						public set(param0: T): void;
						public setException(param0: java.lang.Throwable): void;
					}
					export class Resolver<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.concurrent.DelegatingScheduledFuture.Resolver<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.concurrent.DelegatingScheduledFuture$Resolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { addCompleter(param0: com.google.firebase.concurrent.DelegatingScheduledFuture.Completer<T>): java.util.concurrent.ScheduledFuture<any> });
						public constructor();
						public addCompleter(param0: com.google.firebase.concurrent.DelegatingScheduledFuture.Completer<T>): java.util.concurrent.ScheduledFuture<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class ExecutorsRegistrar {
					public static class: java.lang.Class<com.google.firebase.concurrent.ExecutorsRegistrar>;
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
			export module concurrent {
				export class FirebaseExecutors {
					public static class: java.lang.Class<com.google.firebase.concurrent.FirebaseExecutors>;
					public static newPausableExecutor(delegate: java.util.concurrent.Executor): com.google.firebase.concurrent.PausableExecutor;
					public static newPausableScheduledExecutorService(delegate: java.util.concurrent.ScheduledExecutorService): com.google.firebase.concurrent.PausableScheduledExecutorService;
					public static directExecutor(): java.util.concurrent.Executor;
					public static newLimitedConcurrencyExecutor(delegate: java.util.concurrent.Executor, concurrency: number): java.util.concurrent.Executor;
					public static newPausableExecutorService(delegate: java.util.concurrent.ExecutorService): com.google.firebase.concurrent.PausableExecutorService;
					public static newLimitedConcurrencyScheduledExecutorService(delegate: java.util.concurrent.ExecutorService, concurrency: number): java.util.concurrent.ScheduledExecutorService;
					public static newLimitedConcurrencyExecutorService(delegate: java.util.concurrent.ExecutorService, concurrency: number): java.util.concurrent.ExecutorService;
					public static newSequentialExecutor(delegate: java.util.concurrent.Executor): java.util.concurrent.Executor;
				}
				export module FirebaseExecutors {
					export class DirectExecutor extends java.util.concurrent.Executor {
						public static class: java.lang.Class<com.google.firebase.concurrent.FirebaseExecutors.DirectExecutor>;
						public static INSTANCE: com.google.firebase.concurrent.FirebaseExecutors.DirectExecutor;
						public static values(): androidNative.Array<com.google.firebase.concurrent.FirebaseExecutors.DirectExecutor>;
						public static valueOf(name: string): com.google.firebase.concurrent.FirebaseExecutors.DirectExecutor;
						public execute(command: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class LimitedConcurrencyExecutor {
					public static class: java.lang.Class<com.google.firebase.concurrent.LimitedConcurrencyExecutor>;
					public execute(command: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class LimitedConcurrencyExecutorService extends com.google.firebase.concurrent.LimitedConcurrencyExecutor {
					public static class: java.lang.Class<com.google.firebase.concurrent.LimitedConcurrencyExecutorService>;
					public isTerminated(): boolean;
					public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>;
					public shutdown(): void;
					public submit(task: java.lang.Runnable, result: any): java.util.concurrent.Future<any>;
					public invokeAll(tasks: java.util.Collection<any>): java.util.List<any>;
					public invokeAny(tasks: java.util.Collection<any>): any;
					public invokeAll(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isShutdown(): boolean;
					public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public invokeAny(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): any;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class PausableExecutor {
					public static class: java.lang.Class<com.google.firebase.concurrent.PausableExecutor>;
					/**
					 * Constructs a new instance of the com.google.firebase.concurrent.PausableExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { pause(): void; resume(): void; isPaused(): boolean });
					public constructor();
					public pause(): void;
					public resume(): void;
					public isPaused(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class PausableExecutorImpl extends com.google.firebase.concurrent.PausableExecutor {
					public static class: java.lang.Class<com.google.firebase.concurrent.PausableExecutorImpl>;
					public pause(): void;
					public resume(): void;
					public execute(command: java.lang.Runnable): void;
					public isPaused(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class PausableExecutorService extends com.google.firebase.concurrent.PausableExecutor {
					public static class: java.lang.Class<com.google.firebase.concurrent.PausableExecutorService>;
					/**
					 * Constructs a new instance of the com.google.firebase.concurrent.PausableExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { pause(): void; resume(): void; isPaused(): boolean });
					public constructor();
					public pause(): void;
					public resume(): void;
					public isPaused(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class PausableExecutorServiceImpl extends com.google.firebase.concurrent.PausableExecutorService {
					public static class: java.lang.Class<com.google.firebase.concurrent.PausableExecutorServiceImpl>;
					public isTerminated(): boolean;
					public isPaused(): boolean;
					public invokeAll(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isShutdown(): boolean;
					public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>;
					public shutdown(): void;
					public pause(): void;
					public submit(task: java.lang.Runnable, result: any): java.util.concurrent.Future<any>;
					public resume(): void;
					public invokeAll(tasks: java.util.Collection<any>): java.util.List<any>;
					public invokeAny(tasks: java.util.Collection<any>): any;
					public execute(command: java.lang.Runnable): void;
					public invokeAny(tasks: java.util.Collection<any>, timeout: number, unit: java.util.concurrent.TimeUnit): any;
					public awaitTermination(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class PausableScheduledExecutorService extends com.google.firebase.concurrent.PausableExecutorService {
					public static class: java.lang.Class<com.google.firebase.concurrent.PausableScheduledExecutorService>;
					/**
					 * Constructs a new instance of the com.google.firebase.concurrent.PausableScheduledExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { pause(): void; resume(): void; isPaused(): boolean });
					public constructor();
					public pause(): void;
					public resume(): void;
					public isPaused(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class PausableScheduledExecutorServiceImpl extends com.google.firebase.concurrent.DelegatingScheduledExecutorService implements com.google.firebase.concurrent.PausableScheduledExecutorService {
					public static class: java.lang.Class<com.google.firebase.concurrent.PausableScheduledExecutorServiceImpl>;
					public scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number, period: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public pause(): void;
					public resume(): void;
					public scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number, delay: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public isPaused(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class SequentialExecutor {
					public static class: java.lang.Class<com.google.firebase.concurrent.SequentialExecutor>;
					public toString(): string;
					public execute(oldRunCount: java.lang.Runnable): void;
				}
				export module SequentialExecutor {
					export class QueueWorker {
						public static class: java.lang.Class<com.google.firebase.concurrent.SequentialExecutor.QueueWorker>;
						public run(): void;
						public toString(): string;
					}
					export class WorkerRunningState {
						public static class: java.lang.Class<com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState>;
						public static IDLE: com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState;
						public static QUEUING: com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState;
						public static QUEUED: com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState;
						public static RUNNING: com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState;
						public static valueOf(name: string): com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState;
						public static values(): androidNative.Array<com.google.firebase.concurrent.SequentialExecutor.WorkerRunningState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module concurrent {
				export class UiExecutor extends java.util.concurrent.Executor {
					public static class: java.lang.Class<com.google.firebase.concurrent.UiExecutor>;
					public static INSTANCE: com.google.firebase.concurrent.UiExecutor;
					public static valueOf(name: string): com.google.firebase.concurrent.UiExecutor;
					public execute(command: java.lang.Runnable): void;
					public static values(): androidNative.Array<com.google.firebase.concurrent.UiExecutor>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module datastorage {
				export class JavaDataStorage {
					public static class: java.lang.Class<com.google.firebase.datastorage.JavaDataStorage>;
					public getName(): string;
					public constructor(context: globalAndroid.content.Context, name: string);
					public getSync(key: androidx.datastore.preferences.core.Preferences.Key, defaultValue: any): any;
					public putSync(key: androidx.datastore.preferences.core.Preferences.Key, value: any): androidx.datastore.preferences.core.Preferences;
					public getContext(): globalAndroid.content.Context;
					public getAllSync(): java.util.Map<androidx.datastore.preferences.core.Preferences.Key<any>, any>;
					public contains(key: androidx.datastore.preferences.core.Preferences.Key): boolean;
					public editSync(transform: any): androidx.datastore.preferences.core.Preferences;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module emulators {
				export class EmulatedServiceSettings {
					public static class: java.lang.Class<com.google.firebase.emulators.EmulatedServiceSettings>;
					public getPort(): number;
					public constructor(host: string, port: number);
					public getHost(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class AutoValue_HeartBeatResult extends com.google.firebase.heartbeatinfo.HeartBeatResult {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.AutoValue_HeartBeatResult>;
					public toString(): string;
					public equals(this_: any): boolean;
					public getUserAgent(): string;
					public getUsedDates(): java.util.List<string>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class AutoValue_SdkHeartBeatResult extends com.google.firebase.heartbeatinfo.SdkHeartBeatResult {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.AutoValue_SdkHeartBeatResult>;
					public toString(): string;
					public equals(this_: any): boolean;
					public getMillis(): number;
					public getSdkName(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class DefaultHeartBeatController implements com.google.firebase.heartbeatinfo.HeartBeatController, com.google.firebase.heartbeatinfo.HeartBeatInfo {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.DefaultHeartBeatController>;
					public getHeartBeatCode(heartBeatTag: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
					public getHeartBeatCode(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
					public static component(): com.google.firebase.components.Component<com.google.firebase.heartbeatinfo.DefaultHeartBeatController>;
					public getHeartBeatsHeader(): com.google.android.gms.tasks.Task<string>;
					public registerHeartBeat(): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class HeartBeatConsumer {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatConsumer>;
					/**
					 * Constructs a new instance of the com.google.firebase.heartbeatinfo.HeartBeatConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class HeartBeatConsumerComponent {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatConsumerComponent>;
					public static create(): com.google.firebase.components.Component<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class HeartBeatController {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatController>;
					/**
					 * Constructs a new instance of the com.google.firebase.heartbeatinfo.HeartBeatController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getHeartBeatsHeader(): com.google.android.gms.tasks.Task<string> });
					public constructor();
					public getHeartBeatsHeader(): com.google.android.gms.tasks.Task<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class HeartBeatInfo {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.heartbeatinfo.HeartBeatInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getHeartBeatCode(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat });
					public constructor();
					public getHeartBeatCode(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
				}
				export module HeartBeatInfo {
					export class HeartBeat {
						public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat>;
						public static NONE: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static SDK: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static GLOBAL: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static COMBINED: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public getCode(): number;
						public static values(): androidNative.Array<com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat>;
						public static valueOf(name: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export class HeartBeatInfoStorage {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatInfoStorage>;
					public constructor(applicationContext: globalAndroid.content.Context, persistenceKey: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export abstract class HeartBeatResult {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatResult>;
					public constructor();
					public static create(userAgent: string, dateList: java.util.List<string>): com.google.firebase.heartbeatinfo.HeartBeatResult;
					public getUserAgent(): string;
					public getUsedDates(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module heartbeatinfo {
				export abstract class SdkHeartBeatResult extends java.lang.Comparable<com.google.firebase.heartbeatinfo.SdkHeartBeatResult> {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.SdkHeartBeatResult>;
					public constructor();
					public static create(sdkName: string, millis: number): com.google.firebase.heartbeatinfo.SdkHeartBeatResult;
					public getMillis(): number;
					public compareTo(sdkHeartBeatResult: com.google.firebase.heartbeatinfo.SdkHeartBeatResult): number;
					public getSdkName(): string;
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
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.inappmessaging';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '22.0.3';
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
				export class CampaignAnalytics extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CampaignAnalytics, com.google.firebase.inappmessaging.CampaignAnalytics.Builder> implements com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics>;
					public static PROJECT_NUMBER_FIELD_NUMBER: number = 1;
					public static CAMPAIGN_ID_FIELD_NUMBER: number = 2;
					public static CLIENT_APP_FIELD_NUMBER: number = 3;
					public static CLIENT_TIMESTAMP_MILLIS_FIELD_NUMBER: number = 4;
					public static EVENT_TYPE_FIELD_NUMBER: number = 5;
					public static DISMISS_TYPE_FIELD_NUMBER: number = 6;
					public static RENDER_ERROR_REASON_FIELD_NUMBER: number = 7;
					public static FETCH_ERROR_REASON_FIELD_NUMBER: number = 8;
					public static FIAM_SDK_VERSION_FIELD_NUMBER: number = 9;
					public static ENGAGEMENTMETRICS_DELIVERY_RETRY_COUNT_FIELD_NUMBER: number = 10;
					public static newBuilder(prototype: com.google.firebase.inappmessaging.CampaignAnalytics): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
					public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CampaignAnalytics>;
					public getCampaignIdBytes(): com.google.protobuf.ByteString;
					public hasClientTimestampMillis(): boolean;
					public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
					public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
					public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getCampaignId(): string;
					public hasProjectNumber(): boolean;
					public getProjectNumberBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
					public hasEngagementMetricsDeliveryRetryCount(): boolean;
					public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
					public hasEventType(): boolean;
					public getEventType(): com.google.firebase.inappmessaging.EventType;
					public hasClientApp(): boolean;
					public static newBuilder(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
					public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasRenderErrorReason(): boolean;
					public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasDismissType(): boolean;
					public getEngagementMetricsDeliveryRetryCount(): number;
					public getClientTimestampMillis(): number;
					public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasCampaignId(): boolean;
					public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getDismissType(): com.google.firebase.inappmessaging.DismissType;
					public hasFiamSdkVersion(): boolean;
					public static getDefaultInstance(): com.google.firebase.inappmessaging.CampaignAnalytics;
					public hasFetchErrorReason(): boolean;
					public getFiamSdkVersion(): string;
					public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CampaignAnalytics;
					public getProjectNumber(): string;
					public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CampaignAnalytics;
				}
				export module CampaignAnalytics {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CampaignAnalytics, com.google.firebase.inappmessaging.CampaignAnalytics.Builder> implements com.google.firebase.inappmessaging.CampaignAnalyticsOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics.Builder>;
						public setCampaignIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasRenderErrorReason(): boolean;
						public getDismissType(): com.google.firebase.inappmessaging.DismissType;
						public getClientTimestampMillis(): number;
						public setCampaignId(value: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearEvent(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFiamSdkVersionBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasDismissType(): boolean;
						public clearRenderErrorReason(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getCampaignId(): string;
						public setProjectNumberBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setRenderErrorReason(value: com.google.firebase.inappmessaging.RenderErrorReason): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasCampaignId(): boolean;
						public getFetchErrorReason(): com.google.firebase.inappmessaging.FetchErrorReason;
						public getClientApp(): com.google.firebase.inappmessaging.ClientAppInfo;
						public clearFiamSdkVersion(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getEventCase(): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public setProjectNumber(value: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasEngagementMetricsDeliveryRetryCount(): boolean;
						public clearEventType(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setClientTimestampMillis(value: number): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasProjectNumber(): boolean;
						public getEngagementMetricsDeliveryRetryCount(): number;
						public getFiamSdkVersion(): string;
						public hasClientApp(): boolean;
						public setClientApp(value: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setDismissType(value: com.google.firebase.inappmessaging.DismissType): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setEventType(value: com.google.firebase.inappmessaging.EventType): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFiamSdkVersion(value: string): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasEventType(): boolean;
						public getEventType(): com.google.firebase.inappmessaging.EventType;
						public clearCampaignId(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public setFetchErrorReason(value: com.google.firebase.inappmessaging.FetchErrorReason): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getFiamSdkVersionBytes(): com.google.protobuf.ByteString;
						public clearClientApp(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasClientTimestampMillis(): boolean;
						public setEngagementMetricsDeliveryRetryCount(value: number): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasFetchErrorReason(): boolean;
						public clearFetchErrorReason(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public hasFiamSdkVersion(): boolean;
						public getProjectNumberBytes(): com.google.protobuf.ByteString;
						public clearClientTimestampMillis(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getProjectNumber(): string;
						public getCampaignIdBytes(): com.google.protobuf.ByteString;
						public setClientApp(builderForValue: com.google.firebase.inappmessaging.ClientAppInfo.Builder): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearDismissType(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public mergeClientApp(value: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearProjectNumber(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public clearEngagementMetricsDeliveryRetryCount(): com.google.firebase.inappmessaging.CampaignAnalytics.Builder;
						public getRenderErrorReason(): com.google.firebase.inappmessaging.RenderErrorReason;
					}
					export class EventCase {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CampaignAnalytics.EventCase>;
						public static EVENT_TYPE: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static DISMISS_TYPE: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static RENDER_ERROR_REASON: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static FETCH_ERROR_REASON: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static EVENT_NOT_SET: com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						/** @deprecated */
						public static valueOf(value: number): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.CampaignAnalytics.EventCase>;
						public getNumber(): number;
						public static valueOf(name: string): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
						public static forNumber(value: number): com.google.firebase.inappmessaging.CampaignAnalytics.EventCase;
					}
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
				export class ClientAppInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ClientAppInfo, com.google.firebase.inappmessaging.ClientAppInfo.Builder> implements com.google.firebase.inappmessaging.ClientAppInfoOrBuilder {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfo>;
					public static GOOGLE_APP_ID_FIELD_NUMBER: number = 1;
					public static FIREBASE_INSTANCE_ID_FIELD_NUMBER: number = 2;
					public static newBuilder(): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public static newBuilder(prototype: com.google.firebase.inappmessaging.ClientAppInfo): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
					public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public getGoogleAppId(): string;
					public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static getDefaultInstance(): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ClientAppInfo>;
					public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.ClientAppInfo;
					public getFirebaseInstanceId(): string;
					public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
					public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
					public hasFirebaseInstanceId(): boolean;
					public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo;
					public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ClientAppInfo;
					public hasGoogleAppId(): boolean;
					public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
				}
				export module ClientAppInfo {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ClientAppInfo, com.google.firebase.inappmessaging.ClientAppInfo.Builder> implements com.google.firebase.inappmessaging.ClientAppInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ClientAppInfo.Builder>;
						public getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString;
						public hasGoogleAppId(): boolean;
						public getGoogleAppId(): string;
						public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						public getFirebaseInstanceId(): string;
						public setFirebaseInstanceIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public setFirebaseInstanceId(value: string): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public setGoogleAppId(value: string): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
						public setGoogleAppIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ClientAppInfo.Builder;
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
					public constructor(implementation: { hasGoogleAppId(): boolean; getGoogleAppId(): string; getGoogleAppIdBytes(): com.google.protobuf.ByteString; hasFirebaseInstanceId(): boolean; getFirebaseInstanceId(): string; getFirebaseInstanceIdBytes(): com.google.protobuf.ByteString });
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
					public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
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
						public static UNKNOWN_CAMPAIGN_STATE_VALUE: number = 0;
						public static DRAFT_VALUE: number = 1;
						public static PUBLISHED_VALUE: number = 2;
						public static STOPPED_VALUE: number = 3;
						public static DELETED_VALUE: number = 4;
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public static forNumber(value: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public getNumber(): number;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState>;
						/** @deprecated */
						public static valueOf(value: number): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
						public static valueOf(name: string): com.google.firebase.inappmessaging.CommonTypesProto.CampaignState;
					}
					export module CampaignState {
						export class CampaignStateVerifier {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignState.CampaignStateVerifier>;
							public isInRange(number: number): boolean;
						}
					}
					export class CampaignTime extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime, com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime>;
						public static DATE_FIELD_NUMBER: number = 1;
						public static TIME_FIELD_NUMBER: number = 2;
						public static TIME_ZONE_FIELD_NUMBER: number = 3;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTimeZoneBytes(): com.google.protobuf.ByteString;
						public getDate(): com.google.type.Date;
						public hasTime(): boolean;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public hasDate(): boolean;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTime(): com.google.type.TimeOfDay;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public getTimeZone(): string;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime>;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
					}
					export module CampaignTime {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime, com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder>;
							public clearDate(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public hasDate(): boolean;
							public mergeTime(value: com.google.type.TimeOfDay): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public mergeDate(value: com.google.type.Date): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTimeZoneBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public hasTime(): boolean;
							public clearTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public clearTimeZone(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTimeZone(): string;
							public setDate(builderForValue: com.google.type.Date.Builder): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTime(): com.google.type.TimeOfDay;
							public setTime(builderForValue: com.google.type.TimeOfDay.Builder): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getDate(): com.google.type.Date;
							public setDate(value: com.google.type.Date): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTimeZone(value: string): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public setTime(value: com.google.type.TimeOfDay): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder;
							public getTimeZoneBytes(): com.google.protobuf.ByteString;
						}
					}
					export class CampaignTimeOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.CampaignTimeOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$CampaignTimeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasDate(): boolean; getDate(): com.google.type.Date; hasTime(): boolean; getTime(): com.google.type.TimeOfDay; getTimeZone(): string; getTimeZoneBytes(): com.google.protobuf.ByteString });
						public constructor();
						public getTimeZoneBytes(): com.google.protobuf.ByteString;
						public getDate(): com.google.type.Date;
						public hasTime(): boolean;
						public getTimeZone(): string;
						public hasDate(): boolean;
						public getTime(): com.google.type.TimeOfDay;
					}
					export class DailyAnalyticsSummary extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary, com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
						public static START_OF_DAY_MILLIS_FIELD_NUMBER: number = 1;
						public static IMPRESSIONS_FIELD_NUMBER: number = 2;
						public static CLICKS_FIELD_NUMBER: number = 3;
						public static ERRORS_FIELD_NUMBER: number = 4;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary>;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getErrors(): number;
						public getImpressions(): number;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
						public getStartOfDayMillis(): number;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public getClicks(): number;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
					}
					export module DailyAnalyticsSummary {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary, com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder>;
							public getClicks(): number;
							public setImpressions(value: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setClicks(value: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public getErrors(): number;
							public setStartOfDayMillis(value: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public setErrors(value: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearStartOfDayMillis(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearClicks(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public clearErrors(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
							public getStartOfDayMillis(): number;
							public getImpressions(): number;
							public clearImpressions(): com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummary.Builder;
						}
					}
					export class DailyAnalyticsSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyAnalyticsSummaryOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$DailyAnalyticsSummaryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getStartOfDayMillis(): number; getImpressions(): number; getClicks(): number; getErrors(): number });
						public constructor();
						public getStartOfDayMillis(): number;
						public getErrors(): number;
						public getImpressions(): number;
						public getClicks(): number;
					}
					export class DailyConversionSummary extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary, com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
						public static START_OF_DAY_MILLIS_FIELD_NUMBER: number = 1;
						public static CONVERSIONS_FIELD_NUMBER: number = 2;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary>;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public getStartOfDayMillis(): number;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public getConversions(): number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary;
					}
					export module DailyConversionSummary {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary, com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummaryOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder>;
							public setStartOfDayMillis(value: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
							public setConversions(value: number): com.google.firebase.inappmessaging.CommonTypesProto.DailyConversionSummary.Builder;
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
						public constructor(implementation: { getStartOfDayMillis(): number; getConversions(): number });
						public constructor();
						public getStartOfDayMillis(): number;
						public getConversions(): number;
					}
					export class Event extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.Event, com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.EventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Event>;
						public static TRIGGER_PARAMS_FIELD_NUMBER: number = 1;
						public static NAME_FIELD_NUMBER: number = 2;
						public static TIMESTAMP_MILLIS_FIELD_NUMBER: number = 3;
						public static PREVIOUS_TIMESTAMP_MILLIS_FIELD_NUMBER: number = 4;
						public static COUNT_FIELD_NUMBER: number = 5;
						public getTriggerParamsOrBuilderList(): java.util.List<any>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTriggerParams(index: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTimestampMillis(): number;
						public getPreviousTimestampMillis(): number;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getName(): string;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTriggerParamsCount(): number;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
						public getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getCount(): number;
						public getTriggerParamsOrBuilder(index: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.Event): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.Event>;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Event;
					}
					export module Event {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.Event, com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.EventOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder>;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getTimestampMillis(): number;
							public clearPreviousTimestampMillis(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setTriggerParams(index: number, value: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getTriggerParamsCount(): number;
							public setPreviousTimestampMillis(value: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public clearCount(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public clearTriggerParams(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
							public removeTriggerParams(index: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(value: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(index: number, builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setName(value: string): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setTriggerParams(index: number, builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public setCount(value: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public addTriggerParams(index: number, value: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getCount(): number;
							public getTriggerParams(index: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
							public getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
							public addAllTriggerParams(values: java.lang.Iterable<any>): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getName(): string;
							public setTimestampMillis(value: number): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public clearTimestampMillis(): com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder;
							public getPreviousTimestampMillis(): number;
						}
					}
					export class EventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.EventOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$EventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getTriggerParamsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>; getTriggerParams(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam; getTriggerParamsCount(): number; getName(): string; getNameBytes(): com.google.protobuf.ByteString; getTimestampMillis(): number; getPreviousTimestampMillis(): number; getCount(): number });
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
					export class ExperimentVariant extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant, com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant>;
						public static INDEX_FIELD_NUMBER: number = 1;
						public static CONTENT_FIELD_NUMBER: number = 2;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant>;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getIndex(): number;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public hasContent(): boolean;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant;
					}
					export module ExperimentVariant {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant, com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder>;
							public clearIndex(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
							public getIndex(): number;
							public setIndex(value: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public setContent(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public hasContent(): boolean;
							public setContent(value: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public mergeContent(value: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
							public clearContent(): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariant.Builder;
						}
					}
					export class ExperimentVariantOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentVariantOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$ExperimentVariantOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getIndex(): number; hasContent(): boolean; getContent(): com.google.firebase.inappmessaging.MessagesProto.Content });
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
						public static UNKNOWN_EXPERIMENTAL_CAMPAIGN_STATE_VALUE: number = 0;
						public static EXPERIMENT_DRAFT_VALUE: number = 1;
						public static EXPERIMENT_RUNNING_VALUE: number = 2;
						public static EXPERIMENT_STOPPED_VALUE: number = 3;
						public static EXPERIMENT_ROLLED_OUT_VALUE: number = 4;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(value: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState>;
						public static forNumber(value: number): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
						public static valueOf(name: string): com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState;
					}
					export module ExperimentalCampaignState {
						export class ExperimentalCampaignStateVerifier {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ExperimentalCampaignState.ExperimentalCampaignStateVerifier>;
							public isInRange(number: number): boolean;
						}
					}
					export class Priority extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.Priority, com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Priority>;
						public static VALUE_FIELD_NUMBER: number = 1;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.Priority>;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
						public getValue(): number;
					}
					export module Priority {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.Priority, com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder>;
							public setValue(value: number): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
							public getValue(): number;
							public clearValue(): com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder;
						}
					}
					export class PriorityOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.PriorityOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$PriorityOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getValue(): number });
						public constructor();
						public getValue(): number;
					}
					export class ScionConversionEvent extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent, com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
						public static NAME_FIELD_NUMBER: number = 1;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent>;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public getName(): string;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent;
					}
					export module ScionConversionEvent {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent, com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder>;
							public setName(value: string): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public getName(): string;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public setNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEvent.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
						}
					}
					export class ScionConversionEventOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.ScionConversionEventOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$ScionConversionEventOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getName(): string; getNameBytes(): com.google.protobuf.ByteString });
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
						public static UNKNOWN_TRIGGER_VALUE: number = 0;
						public static APP_LAUNCH_VALUE: number = 1;
						public static ON_FOREGROUND_VALUE: number = 2;
						public static forNumber(value: number): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.CommonTypesProto.Trigger>;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(value: number): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static valueOf(name: string): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
					}
					export module Trigger {
						export class TriggerVerifier {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.Trigger.TriggerVerifier>;
							public isInRange(number: number): boolean;
						}
					}
					export class TriggerParam extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam, com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
						public static NAME_FIELD_NUMBER: number = 1;
						public static STRING_VALUE_FIELD_NUMBER: number = 2;
						public static INT_VALUE_FIELD_NUMBER: number = 3;
						public static FLOAT_VALUE_FIELD_NUMBER: number = 4;
						public static DOUBLE_VALUE_FIELD_NUMBER: number = 5;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getStringValueBytes(): com.google.protobuf.ByteString;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getName(): string;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getIntValue(): number;
						public getFloatValue(): number;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
						public getDoubleValue(): number;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getStringValue(): string;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam>;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam;
					}
					export module TriggerParam {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam, com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder>;
							public setNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setStringValueBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public getStringValue(): string;
							public clearName(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getFloatValue(): number;
							public getDoubleValue(): number;
							public clearStringValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setFloatValue(value: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getName(): string;
							public getStringValueBytes(): com.google.protobuf.ByteString;
							public setStringValue(value: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public clearDoubleValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setName(value: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public setDoubleValue(value: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public clearIntValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public clearFloatValue(): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
							public getIntValue(): number;
							public setIntValue(value: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggerParam.Builder;
						}
					}
					export class TriggerParamOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggerParamOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$TriggerParamOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getName(): string; getNameBytes(): com.google.protobuf.ByteString; getStringValue(): string; getStringValueBytes(): com.google.protobuf.ByteString; getIntValue(): number; getFloatValue(): number; getDoubleValue(): number });
						public constructor();
						public getDoubleValue(): number;
						public getStringValue(): string;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getStringValueBytes(): com.google.protobuf.ByteString;
						public getName(): string;
						public getIntValue(): number;
						public getFloatValue(): number;
					}
					export class TriggeringCondition extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition, com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
						public static FIAM_TRIGGER_FIELD_NUMBER: number = 1;
						public static EVENT_FIELD_NUMBER: number = 2;
						public hasFiamTrigger(): boolean;
						public getFiamTriggerValue(): number;
						public getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static newBuilder(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public hasEvent(): boolean;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
					}
					export module TriggeringCondition {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition, com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder> implements com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder>;
							public hasEvent(): boolean;
							public setEvent(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.Event.Builder): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public setFiamTriggerValue(value: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public clearFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event;
							public getFiamTriggerValue(): number;
							public getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger;
							public clearEvent(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public mergeEvent(value: com.google.firebase.inappmessaging.CommonTypesProto.Event): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public hasFiamTrigger(): boolean;
							public clearCondition(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public setEvent(value: com.google.firebase.inappmessaging.CommonTypesProto.Event): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
							public setFiamTrigger(value: com.google.firebase.inappmessaging.CommonTypesProto.Trigger): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder;
						}
						export class ConditionCase {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase>;
							public static FIAM_TRIGGER: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static EVENT: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static CONDITION_NOT_SET: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public static valueOf(name: string): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
							public getNumber(): number;
							public static values(): androidNative.Array<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase>;
							public static forNumber(value: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase;
						}
					}
					export class TriggeringConditionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.CommonTypesProto$TriggeringConditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasFiamTrigger(): boolean; getFiamTriggerValue(): number; getFiamTrigger(): com.google.firebase.inappmessaging.CommonTypesProto.Trigger; hasEvent(): boolean; getEvent(): com.google.firebase.inappmessaging.CommonTypesProto.Event; getConditionCase(): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.ConditionCase });
						public constructor();
						public hasFiamTrigger(): boolean;
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
					public static UNKNOWN_DISMISS_TYPE_VALUE: number = 0;
					public static AUTO_VALUE: number = 1;
					public static CLICK_VALUE: number = 2;
					public static SWIPE_VALUE: number = 3;
					public getNumber(): number;
					public static valueOf(name: string): com.google.firebase.inappmessaging.DismissType;
					public static forNumber(value: number): com.google.firebase.inappmessaging.DismissType;
					public static values(): androidNative.Array<com.google.firebase.inappmessaging.DismissType>;
					/** @deprecated */
					public static valueOf(value: number): com.google.firebase.inappmessaging.DismissType;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.DismissType>;
				}
				export module DismissType {
					export class DismissTypeVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.DismissType.DismissTypeVerifier>;
						public isInRange(number: number): boolean;
					}
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
					public static UNKNOWN_EVENT_TYPE_VALUE: number = 0;
					public static IMPRESSION_EVENT_TYPE_VALUE: number = 1;
					public static CLICK_EVENT_TYPE_VALUE: number = 2;
					public static valueOf(name: string): com.google.firebase.inappmessaging.EventType;
					public getNumber(): number;
					public static forNumber(value: number): com.google.firebase.inappmessaging.EventType;
					public static values(): androidNative.Array<com.google.firebase.inappmessaging.EventType>;
					/** @deprecated */
					public static valueOf(value: number): com.google.firebase.inappmessaging.EventType;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.EventType>;
				}
				export module EventType {
					export class EventTypeVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.EventType.EventTypeVerifier>;
						public isInRange(number: number): boolean;
					}
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
					public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module ExperimentPayloadProto {
					export class ExperimentLite extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite, com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public static EXPERIMENT_ID_FIELD_NUMBER: number = 1;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static newBuilder(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
					}
					export module ExperimentLite {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite, com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder>;
							public setExperimentIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
							public setExperimentId(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
							public getExperimentId(): string;
							public getExperimentIdBytes(): com.google.protobuf.ByteString;
							public clearExperimentId(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder;
						}
					}
					export class ExperimentLiteOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.ExperimentPayloadProto$ExperimentLiteOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getExperimentId(): string; getExperimentIdBytes(): com.google.protobuf.ByteString });
						public constructor();
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
					}
					export class ExperimentPayload extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload, com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayloadOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload>;
						public static EXPERIMENT_ID_FIELD_NUMBER: number = 1;
						public static VARIANT_ID_FIELD_NUMBER: number = 2;
						public static EXPERIMENT_START_TIME_MILLIS_FIELD_NUMBER: number = 3;
						public static TRIGGER_EVENT_FIELD_NUMBER: number = 4;
						public static TRIGGER_TIMEOUT_MILLIS_FIELD_NUMBER: number = 5;
						public static TIME_TO_LIVE_MILLIS_FIELD_NUMBER: number = 6;
						public static SET_EVENT_TO_LOG_FIELD_NUMBER: number = 7;
						public static ACTIVATE_EVENT_TO_LOG_FIELD_NUMBER: number = 8;
						public static CLEAR_EVENT_TO_LOG_FIELD_NUMBER: number = 9;
						public static TIMEOUT_EVENT_TO_LOG_FIELD_NUMBER: number = 10;
						public static TTL_EXPIRY_EVENT_TO_LOG_FIELD_NUMBER: number = 11;
						public static OVERFLOW_POLICY_FIELD_NUMBER: number = 12;
						public static ONGOING_EXPERIMENTS_FIELD_NUMBER: number = 13;
						public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
						public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
						public getExperimentId(): string;
						public getExperimentIdBytes(): com.google.protobuf.ByteString;
						public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
						public getTriggerTimeoutMillis(): number;
						public getActivateEventToLog(): string;
						public getClearEventToLogBytes(): com.google.protobuf.ByteString;
						public getTriggerEvent(): string;
						public getSetEventToLog(): string;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getOngoingExperimentsList(): java.util.List<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
						public getOngoingExperiments(index: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getTimeoutEventToLog(): string;
						public getOverflowPolicyValue(): number;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getClearEventToLog(): string;
						public getOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getOngoingExperimentsOrBuilder(index: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLiteOrBuilder;
						public getOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
						public getTimeToLiveMillis(): number;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getVariantIdBytes(): com.google.protobuf.ByteString;
						public getOngoingExperimentsOrBuilderList(): java.util.List<any>;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public getExperimentStartTimeMillis(): number;
						public getTriggerEventBytes(): com.google.protobuf.ByteString;
						public getOngoingExperimentsCount(): number;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static newBuilder(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
						public getSetEventToLogBytes(): com.google.protobuf.ByteString;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload>;
						public getVariantId(): string;
						public getTtlExpiryEventToLog(): string;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
					}
					export module ExperimentPayload {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload, com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder> implements com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayloadOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder>;
							public getTriggerEvent(): string;
							public clearExperimentStartTimeMillis(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTriggerEventBytes(): com.google.protobuf.ByteString;
							public setSetEventToLogBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addOngoingExperiments(builderForValue: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getVariantIdBytes(): com.google.protobuf.ByteString;
							public clearSetEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearClearEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setExperimentIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getOngoingExperiments(index: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
							public clearTimeoutEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTimeoutEventToLogBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getActivateEventToLog(): string;
							public getOngoingExperimentsList(): java.util.List<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite>;
							public setVariantIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getClearEventToLog(): string;
							public setOverflowPolicyValue(value: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getOngoingExperiments(param0: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite;
							public getSetEventToLog(): string;
							public setTimeToLiveMillis(value: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setClearEventToLog(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearExperimentId(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setActivateEventToLog(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setExperimentId(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addOngoingExperiments(index: number, value: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearVariantId(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearTriggerTimeoutMillis(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addAllOngoingExperiments(values: java.lang.Iterable<any>): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTimeoutEventToLog(): string;
							public getOverflowPolicyValue(): number;
							public getTimeToLiveMillis(): number;
							public clearTriggerEvent(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setOngoingExperiments(index: number, value: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearActivateEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setClearEventToLogBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setActivateEventToLogBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTtlExpiryEventToLogBytes(): com.google.protobuf.ByteString;
							public setTriggerEventBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setOngoingExperiments(index: number, builderForValue: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public removeOngoingExperiments(index: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTriggerTimeoutMillis(): number;
							public clearOngoingExperiments(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getSetEventToLogBytes(): com.google.protobuf.ByteString;
							public setTimeoutEventToLog(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public clearTimeToLiveMillis(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getVariantId(): string;
							public setTriggerEvent(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setTtlExpiryEventToLog(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getClearEventToLogBytes(): com.google.protobuf.ByteString;
							public getExperimentStartTimeMillis(): number;
							public setExperimentStartTimeMillis(value: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTimeoutEventToLogBytes(): com.google.protobuf.ByteString;
							public setTriggerTimeoutMillis(value: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getTtlExpiryEventToLog(): string;
							public setTtlExpiryEventToLogBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setOverflowPolicy(value: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public getActivateEventToLogBytes(): com.google.protobuf.ByteString;
							public setSetEventToLog(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public setVariantId(value: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getExperimentId(): string;
							public clearTtlExpiryEventToLog(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getExperimentIdBytes(): com.google.protobuf.ByteString;
							public clearOverflowPolicy(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public addOngoingExperiments(index: number, builderForValue: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite.Builder): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
							public getOngoingExperimentsCount(): number;
							public addOngoingExperiments(value: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentLite): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder;
						}
						export class ExperimentOverflowPolicy extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy>;
							public static POLICY_UNSPECIFIED: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static DISCARD_OLDEST: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static IGNORE_NEWEST: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static UNRECOGNIZED: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static POLICY_UNSPECIFIED_VALUE: number = 0;
							public static DISCARD_OLDEST_VALUE: number = 1;
							public static IGNORE_NEWEST_VALUE: number = 2;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static values(): androidNative.Array<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy>;
							public static forNumber(value: number): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static valueOf(name: string): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy>;
						}
						export module ExperimentOverflowPolicy {
							export class ExperimentOverflowPolicyVerifier {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.ExperimentOverflowPolicy.ExperimentOverflowPolicyVerifier>;
								public isInRange(number: number): boolean;
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
					public static UNSPECIFIED_FETCH_ERROR_VALUE: number = 0;
					public static SERVER_ERROR_VALUE: number = 1;
					public static CLIENT_ERROR_VALUE: number = 2;
					public static NETWORK_ERROR_VALUE: number = 3;
					public static values(): androidNative.Array<com.google.firebase.inappmessaging.FetchErrorReason>;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.FetchErrorReason>;
					public getNumber(): number;
					public static valueOf(name: string): com.google.firebase.inappmessaging.FetchErrorReason;
					public static forNumber(value: number): com.google.firebase.inappmessaging.FetchErrorReason;
					/** @deprecated */
					public static valueOf(value: number): com.google.firebase.inappmessaging.FetchErrorReason;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
				}
				export module FetchErrorReason {
					export class FetchErrorReasonVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FetchErrorReason.FetchErrorReasonVerifier>;
						public isInRange(number: number): boolean;
					}
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
					public triggerEvent(eventName: string): void;
					public setAutomaticDataCollectionEnabled(isAutomaticCollectionEnabled: java.lang.Boolean): void;
					public addClickListener(clickListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
					public addDismissListener(dismissListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener): void;
					public setMessagesSuppressed(areMessagesSuppressed: java.lang.Boolean): void;
					public addImpressionListener(impressionListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, executor: java.util.concurrent.Executor): void;
					public addDismissListener(dismissListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener, executor: java.util.concurrent.Executor): void;
					public addImpressionListener(impressionListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
					public addClickListener(clickListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, executor: java.util.concurrent.Executor): void;
					public areMessagesSuppressed(): boolean;
					public clearDisplayListener(): void;
					public addDisplayErrorListener(displayErrorListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					public addDisplayErrorListener(displayErrorListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, executor: java.util.concurrent.Executor): void;
					public isAutomaticDataCollectionEnabled(): boolean;
					public setAutomaticDataCollectionEnabled(isAutomaticCollectionEnabled: boolean): void;
					public removeAllListeners(): void;
					public removeImpressionListener(impressionListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
					public setMessageDisplayComponent(messageDisplay: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplay): void;
					public static getInstance(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
					public removeClickListener(clickListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
					public removeDisplayErrorListener(displayErrorListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
					public removeDismissListener(dismissListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener): void;
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
					public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
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
					public constructor(implementation: { messageClicked(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.model.Action): void });
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
					public constructor(triggerName: string);
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
					public constructor(implementation: { messageDismissed(param0: com.google.firebase.inappmessaging.model.InAppMessage): void });
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
					public constructor(implementation: { displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void });
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
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType>;
						public static valueOf(name: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType;
					}
					export class InAppMessagingErrorReason {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason>;
						public static UNSPECIFIED_RENDER_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_FETCH_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_DISPLAY_ERROR: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static IMAGE_UNSUPPORTED_FORMAT: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static valueOf(name: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason;
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason>;
					}
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
					public constructor(implementation: { displayErrorEncountered(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void });
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
					public constructor(implementation: { impressionDetected(param0: com.google.firebase.inappmessaging.model.InAppMessage): void });
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
				export class FirebaseInAppMessagingKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.inappmessaging.FirebaseInAppMessagingKtxRegistrar>;
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
					public static create(
						inAppMessageStreamManagerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.InAppMessageStreamManager>,
						programaticContextualTriggersProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers>,
						dataCollectionHelperProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>,
						firebaseInstallationsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.installations.FirebaseInstallationsApi>,
						displayCallbacksFactoryProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory>,
						developerListenerManagerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>,
						lightWeightExecutorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor>
					): com.google.firebase.inappmessaging.FirebaseInAppMessaging_Factory;
					public get(): any;
					public static newInstance(
						inAppMessageStreamManager: com.google.firebase.inappmessaging.internal.InAppMessageStreamManager,
						programaticContextualTriggers: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers,
						dataCollectionHelper: com.google.firebase.inappmessaging.internal.DataCollectionHelper,
						firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi,
						displayCallbacksFactory: com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory,
						developerListenerManager: com.google.firebase.inappmessaging.internal.DeveloperListenerManager,
						lightWeightExecutor: java.util.concurrent.Executor
					): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
					public get(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
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
					public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
				}
				export module MessagesProto {
					export class Action extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Action, com.google.firebase.inappmessaging.MessagesProto.Action.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Action>;
						public static ACTION_URL_FIELD_NUMBER: number = 1;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						public getActionUrlBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public getActionUrl(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Action>;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module Action {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Action, com.google.firebase.inappmessaging.MessagesProto.Action.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Action.Builder>;
							public getActionUrlBytes(): com.google.protobuf.ByteString;
							public getActionUrl(): string;
							public clearActionUrl(): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
							public setActionUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
							public setActionUrl(value: string): com.google.firebase.inappmessaging.MessagesProto.Action.Builder;
						}
					}
					export class ActionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ActionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ActionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getActionUrl(): string; getActionUrlBytes(): com.google.protobuf.ByteString });
						public constructor();
						public getActionUrlBytes(): com.google.protobuf.ByteString;
						public getActionUrl(): string;
					}
					export class BannerMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.BannerMessage, com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessage>;
						public static TITLE_FIELD_NUMBER: number = 1;
						public static BODY_FIELD_NUMBER: number = 2;
						public static IMAGE_URL_FIELD_NUMBER: number = 3;
						public static ACTION_FIELD_NUMBER: number = 4;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number = 5;
						public hasTitle(): boolean;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public hasAction(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public hasBody(): boolean;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getBackgroundHexColor(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.BannerMessage>;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
					}
					export module BannerMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.BannerMessage, com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder>;
							public getImageUrl(): string;
							public setImageUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public hasAction(): boolean;
							public setBackgroundHexColorBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getBackgroundHexColor(): string;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setImageUrl(value: string): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public hasTitle(): boolean;
							public setAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public setBackgroundHexColor(value: string): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeTitle(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBody(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setTitle(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setAction(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setTitle(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public setBody(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public mergeBody(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public hasBody(): boolean;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder;
						}
					}
					export class BannerMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.BannerMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$BannerMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasTitle(): boolean; getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text; hasBody(): boolean; getBody(): com.google.firebase.inappmessaging.MessagesProto.Text; getImageUrl(): string; getImageUrlBytes(): com.google.protobuf.ByteString; hasAction(): boolean; getAction(): com.google.firebase.inappmessaging.MessagesProto.Action; getBackgroundHexColor(): string; getBackgroundHexColorBytes(): com.google.protobuf.ByteString });
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
					export class Button extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Button, com.google.firebase.inappmessaging.MessagesProto.Button.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Button>;
						public static TEXT_FIELD_NUMBER: number = 1;
						public static BUTTON_HEX_COLOR_FIELD_NUMBER: number = 2;
						public getButtonHexColor(): string;
						public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Button;
						public hasText(): boolean;
						public getButtonHexColorBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Button>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Button;
					}
					export module Button {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Button, com.google.firebase.inappmessaging.MessagesProto.Button.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ButtonOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Button.Builder>;
							public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setText(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public mergeText(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public setText(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public getButtonHexColorBytes(): com.google.protobuf.ByteString;
							public setButtonHexColor(value: string): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
							public hasText(): boolean;
							public setButtonHexColorBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Button.Builder;
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
						public constructor(implementation: { hasText(): boolean; getText(): com.google.firebase.inappmessaging.MessagesProto.Text; getButtonHexColor(): string; getButtonHexColorBytes(): com.google.protobuf.ByteString });
						public constructor();
						public getButtonHexColor(): string;
						public hasText(): boolean;
						public getText(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getButtonHexColorBytes(): com.google.protobuf.ByteString;
					}
					export class CardMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.CardMessage, com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessage>;
						public static TITLE_FIELD_NUMBER: number = 1;
						public static BODY_FIELD_NUMBER: number = 2;
						public static PORTRAIT_IMAGE_URL_FIELD_NUMBER: number = 3;
						public static LANDSCAPE_IMAGE_URL_FIELD_NUMBER: number = 4;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number = 5;
						public static PRIMARY_ACTION_BUTTON_FIELD_NUMBER: number = 6;
						public static PRIMARY_ACTION_FIELD_NUMBER: number = 7;
						public static SECONDARY_ACTION_BUTTON_FIELD_NUMBER: number = 8;
						public static SECONDARY_ACTION_FIELD_NUMBER: number = 9;
						public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public hasTitle(): boolean;
						public hasPrimaryActionButton(): boolean;
						public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.CardMessage>;
						public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public hasPrimaryAction(): boolean;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
						public hasBody(): boolean;
						public getBackgroundHexColor(): string;
						public getPortraitImageUrl(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
						public hasSecondaryAction(): boolean;
						public hasSecondaryActionButton(): boolean;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getLandscapeImageUrl(): string;
					}
					export module CardMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.CardMessage, com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.CardMessageOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder>;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryAction(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public getPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public setPortraitImageUrl(value: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBody(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPrimaryActionButton(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setTitle(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setPortraitImageUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public setBackgroundHexColorBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setLandscapeImageUrl(value: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryActionButton(value: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergePrimaryActionButton(value: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasSecondaryAction(): boolean;
							public setSecondaryActionButton(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearPrimaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPrimaryAction(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public setBody(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearPortraitImageUrl(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setSecondaryAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasBody(): boolean;
							public hasPrimaryActionButton(): boolean;
							public getSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public hasPrimaryAction(): boolean;
							public getBackgroundHexColor(): string;
							public setPrimaryAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setBackgroundHexColor(value: string): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearSecondaryActionButton(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeTitle(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public hasTitle(): boolean;
							public mergeBody(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getLandscapeImageUrl(): string;
							public mergeSecondaryActionButton(value: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getLandscapeImageUrlBytes(): com.google.protobuf.ByteString;
							public mergePrimaryAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public hasSecondaryActionButton(): boolean;
							public getPortraitImageUrlBytes(): com.google.protobuf.ByteString;
							public clearPrimaryAction(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setPrimaryActionButton(value: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setTitle(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public getPortraitImageUrl(): string;
							public clearLandscapeImageUrl(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public mergeSecondaryAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public clearSecondaryAction(): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
							public setLandscapeImageUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder;
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
					export class Content extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Content, com.google.firebase.inappmessaging.MessagesProto.Content.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content>;
						public static BANNER_FIELD_NUMBER: number = 1;
						public static MODAL_FIELD_NUMBER: number = 2;
						public static IMAGE_ONLY_FIELD_NUMBER: number = 3;
						public static CARD_FIELD_NUMBER: number = 4;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public hasModal(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
						public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
						public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public hasImageOnly(): boolean;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						public hasBanner(): boolean;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Content>;
						public hasCard(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Content;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Content;
					}
					export module Content {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Content, com.google.firebase.inappmessaging.MessagesProto.Content.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content.Builder>;
							public clearCard(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setBanner(builderForValue: com.google.firebase.inappmessaging.MessagesProto.BannerMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setBanner(value: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public hasBanner(): boolean;
							public getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
							public hasImageOnly(): boolean;
							public clearModal(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public hasCard(): boolean;
							public getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage;
							public mergeImageOnly(value: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setCard(builderForValue: com.google.firebase.inappmessaging.MessagesProto.CardMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearMessageDetails(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public clearBanner(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setModal(value: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setImageOnly(value: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeCard(value: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeBanner(value: com.google.firebase.inappmessaging.MessagesProto.BannerMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public mergeModal(value: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
							public getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage;
							public clearImageOnly(): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setModal(builderForValue: com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public hasModal(): boolean;
							public setImageOnly(builderForValue: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
							public setCard(value: com.google.firebase.inappmessaging.MessagesProto.CardMessage): com.google.firebase.inappmessaging.MessagesProto.Content.Builder;
						}
						export class MessageDetailsCase {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase>;
							public static BANNER: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static MODAL: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static IMAGE_ONLY: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static CARD: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static MESSAGEDETAILS_NOT_SET: com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static valueOf(name: string): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public getNumber(): number;
							public static forNumber(value: number): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase;
							public static values(): androidNative.Array<com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase>;
						}
					}
					export class ContentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ContentOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ContentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasBanner(): boolean; getBanner(): com.google.firebase.inappmessaging.MessagesProto.BannerMessage; hasModal(): boolean; getModal(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage; hasImageOnly(): boolean; getImageOnly(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage; hasCard(): boolean; getCard(): com.google.firebase.inappmessaging.MessagesProto.CardMessage; getMessageDetailsCase(): com.google.firebase.inappmessaging.MessagesProto.Content.MessageDetailsCase });
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
					export class ImageOnlyMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage, com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage>;
						public static IMAGE_URL_FIELD_NUMBER: number = 1;
						public static ACTION_FIELD_NUMBER: number = 2;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage>;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						public hasAction(): boolean;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module ImageOnlyMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage, com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder>;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public hasAction(): boolean;
							public setImageUrl(value: string): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public mergeAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public setImageUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public setAction(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessage.Builder;
						}
					}
					export class ImageOnlyMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ImageOnlyMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ImageOnlyMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getImageUrl(): string; getImageUrlBytes(): com.google.protobuf.ByteString; hasAction(): boolean; getAction(): com.google.firebase.inappmessaging.MessagesProto.Action });
						public constructor();
						public hasAction(): boolean;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export class ModalMessage extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.ModalMessage, com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessage>;
						public static TITLE_FIELD_NUMBER: number = 1;
						public static BODY_FIELD_NUMBER: number = 2;
						public static IMAGE_URL_FIELD_NUMBER: number = 3;
						public static ACTION_BUTTON_FIELD_NUMBER: number = 4;
						public static ACTION_FIELD_NUMBER: number = 5;
						public static BACKGROUND_HEX_COLOR_FIELD_NUMBER: number = 6;
						public hasActionButton(): boolean;
						public hasTitle(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.ModalMessage): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.ModalMessage>;
						public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasAction(): boolean;
						public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public hasBody(): boolean;
						public getBackgroundHexColor(): string;
						public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
						public getImageUrlBytes(): com.google.protobuf.ByteString;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.ModalMessage;
						public getImageUrl(): string;
						public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
					}
					export module ModalMessage {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.ModalMessage, com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder> implements com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder>;
							public getImageUrl(): string;
							public getAction(): com.google.firebase.inappmessaging.MessagesProto.Action;
							public setTitle(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasAction(): boolean;
							public setBody(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getBackgroundHexColor(): string;
							public setBody(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setActionButton(value: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getImageUrlBytes(): com.google.protobuf.ByteString;
							public hasTitle(): boolean;
							public setTitle(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Text.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setActionButton(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Button.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearBody(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setImageUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearAction(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public mergeTitle(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getBackgroundHexColorBytes(): com.google.protobuf.ByteString;
							public getBody(): com.google.firebase.inappmessaging.MessagesProto.Text;
							public clearTitle(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setAction(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Action.Builder): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasActionButton(): boolean;
							public setBackgroundHexColorBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearBackgroundHexColor(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public mergeAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearActionButton(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public clearImageUrl(): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button;
							public mergeActionButton(value: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setImageUrl(value: string): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public hasBody(): boolean;
							public mergeBody(value: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setAction(value: com.google.firebase.inappmessaging.MessagesProto.Action): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
							public setBackgroundHexColor(value: string): com.google.firebase.inappmessaging.MessagesProto.ModalMessage.Builder;
						}
					}
					export class ModalMessageOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.ModalMessageOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$ModalMessageOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasTitle(): boolean; getTitle(): com.google.firebase.inappmessaging.MessagesProto.Text; hasBody(): boolean; getBody(): com.google.firebase.inappmessaging.MessagesProto.Text; getImageUrl(): string; getImageUrlBytes(): com.google.protobuf.ByteString; hasActionButton(): boolean; getActionButton(): com.google.firebase.inappmessaging.MessagesProto.Button; hasAction(): boolean; getAction(): com.google.firebase.inappmessaging.MessagesProto.Action; getBackgroundHexColor(): string; getBackgroundHexColorBytes(): com.google.protobuf.ByteString });
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
					export class Text extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.MessagesProto.Text, com.google.firebase.inappmessaging.MessagesProto.Text.Builder> implements com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Text>;
						public static TEXT_FIELD_NUMBER: number = 1;
						public static HEX_COLOR_FIELD_NUMBER: number = 2;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.MessagesProto.Text>;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getHexColor(): string;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public getHexColorBytes(): com.google.protobuf.ByteString;
						public getText(): string;
						public static newBuilder(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getTextBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static getDefaultInstance(): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.MessagesProto.Text;
						public static newBuilder(prototype: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
					}
					export module Text {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.MessagesProto.Text, com.google.firebase.inappmessaging.MessagesProto.Text.Builder> implements com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.Text.Builder>;
							public setText(value: string): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public clearHexColor(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public clearText(): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getText(): string;
							public setHexColor(value: string): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public setTextBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public setHexColorBytes(value: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.MessagesProto.Text.Builder;
							public getHexColorBytes(): com.google.protobuf.ByteString;
							public getTextBytes(): com.google.protobuf.ByteString;
							public getHexColor(): string;
						}
					}
					export class TextOrBuilder {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.MessagesProto.TextOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.MessagesProto$TextOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getText(): string; getTextBytes(): com.google.protobuf.ByteString; getHexColor(): string; getHexColorBytes(): com.google.protobuf.ByteString });
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
					public static UNSPECIFIED_RENDER_ERROR_VALUE: number = 0;
					public static IMAGE_FETCH_ERROR_VALUE: number = 1;
					public static IMAGE_DISPLAY_ERROR_VALUE: number = 2;
					public static IMAGE_UNSUPPORTED_FORMAT_VALUE: number = 3;
					public static forNumber(value: number): com.google.firebase.inappmessaging.RenderErrorReason;
					public getNumber(): number;
					/** @deprecated */
					public static valueOf(value: number): com.google.firebase.inappmessaging.RenderErrorReason;
					public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
					public static values(): androidNative.Array<com.google.firebase.inappmessaging.RenderErrorReason>;
					public static valueOf(name: string): com.google.firebase.inappmessaging.RenderErrorReason;
					public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.inappmessaging.RenderErrorReason>;
				}
				export module RenderErrorReason {
					export class RenderErrorReasonVerifier {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.RenderErrorReason.RenderErrorReasonVerifier>;
						public isInRange(number: number): boolean;
					}
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
						public constructor(implementation: {});
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
						public constructor(implementation: { modules(): androidNative.Array<java.lang.Class<any>>; dependencies(): androidNative.Array<java.lang.Class<any>> });
						public constructor();
						public modules(): androidNative.Array<java.lang.Class<any>>;
						public dependencies(): androidNative.Array<java.lang.Class<any>>;
					}
					export module Component {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Component.Builder>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class Factory {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Component.Factory>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Component$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
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
					export class Lazy<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Lazy<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { get(): T });
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
					export class Module {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.Module>;
						/**
						 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { includes(): androidNative.Array<java.lang.Class<any>>; subcomponents(): androidNative.Array<java.lang.Class<any>> });
						public constructor();
						public includes(): androidNative.Array<java.lang.Class<any>>;
						public subcomponents(): androidNative.Array<java.lang.Class<any>>;
					}
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
						public constructor(implementation: {});
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
					export module internal {
						export class DaggerGenerated {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.DaggerGenerated>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.DaggerGenerated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
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
						export class DoubleCheck<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.DoubleCheck<any>>;
							public static lazy(lazy: com.google.firebase.inappmessaging.dagger.internal.Provider<any>): com.google.firebase.inappmessaging.dagger.Lazy<any>;
							public get(): T;
							public static lazy(provider: javax.inject.Provider): com.google.firebase.inappmessaging.dagger.Lazy<any>;
							public static provider(delegate: com.google.firebase.inappmessaging.dagger.internal.Provider<any>): com.google.firebase.inappmessaging.dagger.internal.Provider<any>;
							/** @deprecated */
							public static provider(delegate: javax.inject.Provider): javax.inject.Provider;
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
						export class Factory<T> extends com.google.firebase.inappmessaging.dagger.internal.Provider<any> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.Factory<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { get(): any });
							public constructor();
							public get(): any;
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
						export class InstanceFactory<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.InstanceFactory<any>>;
							public static createNullable(instance: any): com.google.firebase.inappmessaging.dagger.internal.Factory<any>;
							public get(): T;
							public static create(instance: any): com.google.firebase.inappmessaging.dagger.internal.Factory<any>;
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
							public static checkBuilderRequirement(requirement: any, clazz: java.lang.Class<any>): void;
							public static checkNotNullFromComponent(reference: any): any;
							public static checkNotNull(argString: any, reference: string, errorMessageTemplate: any): any;
							public static checkNotNull(reference: any): any;
							public static checkNotNullFromProvides(reference: any): any;
							public static checkNotNull(reference: any, errorMessage: string): any;
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
						export class Provider<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.Provider<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { get(): T });
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
				export module dagger {
					export module internal {
						export class Providers {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.Providers>;
							public static asDaggerProvider(provider: javax.inject.Provider): com.google.firebase.inappmessaging.dagger.internal.Provider<any>;
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
						export class QualifierMetadata {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.QualifierMetadata>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.QualifierMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { value(): androidNative.Array<string> });
							public constructor();
							public value(): androidNative.Array<string>;
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
						export class ScopeMetadata {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.dagger.internal.ScopeMetadata>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.dagger.internal.ScopeMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { value(): string });
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
						public static DEBUG: boolean = 0;
						public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.inappmessaging.display';
						public static BUILD_TYPE: string = 'release';
						public static VERSION_NAME: string = '22.0.3';
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
						public constructor(implementation: { onFiamTrigger(): void; onFiamClick(): void; onFiamDismiss(): void });
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
						public onActivityResumed(activity: globalAndroid.app.Activity): void;
						public setFiamListener(listener: com.google.firebase.inappmessaging.display.FiamListener): void;
						public static getInstance(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
						public testMessage(activity: globalAndroid.app.Activity, inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage, callbacks: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
						public displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
						public clearFiamListener(): void;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
					}
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
					export class FirebaseInAppMessagingDisplayKtxRegistrar {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplayKtxRegistrar>;
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
						public get(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
						public static create(
							headlessInAppMessagingProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.FirebaseInAppMessaging>,
							layoutConfigsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>>,
							imageLoaderProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.FiamImageLoader>,
							impressionTimerProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.RenewableTimer>,
							autoDismissTimerProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.RenewableTimer>,
							windowManagerProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.FiamWindowManager>,
							applicationProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.app.Application>,
							bindingWrapperFactoryProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory>,
							animatorProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.FiamAnimator>
						): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay_Factory;
						public static newInstance(
							headlessInAppMessaging: com.google.firebase.inappmessaging.FirebaseInAppMessaging,
							layoutConfigs: java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>,
							imageLoader: com.google.firebase.inappmessaging.display.internal.FiamImageLoader,
							impressionTimer: com.google.firebase.inappmessaging.display.internal.RenewableTimer,
							autoDismissTimer: com.google.firebase.inappmessaging.display.internal.RenewableTimer,
							windowManager: com.google.firebase.inappmessaging.display.internal.FiamWindowManager,
							application: globalAndroid.app.Application,
							bindingWrapperFactory: com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory,
							animator: com.google.firebase.inappmessaging.display.internal.FiamAnimator
						): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
						public get(): any;
					}
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
							public constructor(implementation: { modules(): androidNative.Array<java.lang.Class<any>>; dependencies(): androidNative.Array<java.lang.Class<any>> });
							public constructor();
							public dependencies(): androidNative.Array<java.lang.Class<any>>;
							public modules(): androidNative.Array<java.lang.Class<any>>;
						}
						export module Component {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Component.Builder>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
							}
							export class Factory {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Component.Factory>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Component$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
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
						export class Lazy<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Lazy<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { get(): T });
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
							public constructor(implementation: { unwrapValue(): boolean });
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
						export class Module {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.Module>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { includes(): androidNative.Array<java.lang.Class<any>>; subcomponents(): androidNative.Array<java.lang.Class<any>> });
							public constructor();
							public subcomponents(): androidNative.Array<java.lang.Class<any>>;
							public includes(): androidNative.Array<java.lang.Class<any>>;
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
							public constructor(implementation: {});
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
						export module internal {
							export class DaggerCollections {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.DaggerCollections>;
								public static hasDuplicates(list: java.util.List<any>): boolean;
								public static newLinkedHashMapWithExpectedSize(expectedSize: number): java.util.LinkedHashMap<any, any>;
								public static presizedList(size: number): java.util.List<any>;
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
							export class DaggerGenerated {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.DaggerGenerated>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.DaggerGenerated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
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
							export class DoubleCheck<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.DoubleCheck<any>>;
								public static lazy(lazy: com.google.firebase.inappmessaging.display.dagger.internal.Provider<any>): com.google.firebase.inappmessaging.display.dagger.Lazy<any>;
								public get(): T;
								public static provider(delegate: com.google.firebase.inappmessaging.display.dagger.internal.Provider<any>): com.google.firebase.inappmessaging.display.dagger.internal.Provider<any>;
								public static lazy(provider: javax.inject.Provider): com.google.firebase.inappmessaging.display.dagger.Lazy<any>;
								/** @deprecated */
								public static provider(delegate: javax.inject.Provider): javax.inject.Provider;
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
							export class Factory<T> extends com.google.firebase.inappmessaging.display.dagger.internal.Provider<any> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.Factory<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { get(): any });
								public constructor();
								public get(): any;
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
							export class MapBuilder<K, V> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<any, any>>;
								public putAll(map: java.util.Map<K, V>): com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<K, V>;
								public put(key: K, value: V): com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<K, V>;
								public build(): java.util.Map<K, V>;
								public static newMapBuilder(size: number): com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder<any, any>;
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
								public static checkNotNull(argString: any, reference: string, errorMessageTemplate: any): any;
								public static checkNotNullFromProvides(reference: any): any;
								public static checkNotNull(reference: any, errorMessage: string): any;
								public static checkBuilderRequirement(requirement: any, clazz: java.lang.Class<any>): void;
								public static checkNotNullFromComponent(reference: any): any;
								public static checkNotNull(reference: any): any;
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
							export class Provider<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.Provider<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { get(): T });
								public constructor();
								public get(): T;
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
							export class Providers {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.Providers>;
								public static asDaggerProvider(provider: javax.inject.Provider): com.google.firebase.inappmessaging.display.dagger.internal.Provider<any>;
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
							export class QualifierMetadata {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.QualifierMetadata>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.QualifierMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { value(): androidNative.Array<string> });
								public constructor();
								public value(): androidNative.Array<string>;
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
							export class ScopeMetadata {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.internal.ScopeMetadata>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.internal.ScopeMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { value(): string });
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
						export module multibindings {
							export class IntoMap {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.dagger.multibindings.IntoMap>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.dagger.multibindings.IntoMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
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
								public constructor(implementation: { value(): string });
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
							public createCardBindingWrapper(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
							public createModalBindingWrapper(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
							public createImageBindingWrapper(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
							public createBannerBindingWrapper(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper;
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
							public get(): any;
							public static create(applicationProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory_Factory;
							public get(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
							public static newInstance(application: globalAndroid.app.Application): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
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
							public slideIntoView(app: globalAndroid.app.Application, view: globalAndroid.view.View, startPosition: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position): void;
							public slideOutOfView(app: globalAndroid.app.Application, view: globalAndroid.view.View, end: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position, completeListener: com.google.firebase.inappmessaging.display.internal.FiamAnimator.AnimationCompleteListener): void;
						}
						export module FiamAnimator {
							export class AnimationCompleteListener {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator.AnimationCompleteListener>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.FiamAnimator$AnimationCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onComplete(): void });
								public constructor();
								public onComplete(): void;
							}
							export class Position {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position>;
								public static LEFT: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static RIGHT: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static TOP: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static BOTTOM: com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static valueOf(name: string): com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position;
								public static values(): androidNative.Array<com.google.firebase.inappmessaging.display.internal.FiamAnimator.Position>;
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
							public get(): any;
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
							public load(imageUrl: string): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
							public constructor(requestManager: com.bumptech.glide.RequestManager);
							public cancelTag(targets: java.lang.Class<any>): void;
						}
						export module FiamImageLoader {
							export abstract class Callback extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamImageLoader.Callback>;
								public onLoadCleared(placeholder: globalAndroid.graphics.drawable.Drawable): void;
								public onSuccess(): void;
								public onLoadFailed(errorDrawable: globalAndroid.graphics.drawable.Drawable): void;
								public onResourceReady(resource: globalAndroid.graphics.drawable.Drawable, transition: com.bumptech.glide.request.transition.Transition<any>): void;
								public constructor();
								public onError(param0: java.lang.Exception): void;
							}
							export class FiamImageRequestCreator {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator>;
								public tag(c: java.lang.Class<any>): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
								public addErrorListener(glideErrorListener: com.google.firebase.inappmessaging.display.internal.GlideErrorListener): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
								public placeholder(placeholderResId: number): com.google.firebase.inappmessaging.display.internal.FiamImageLoader.FiamImageRequestCreator;
								public into(imageView: globalAndroid.widget.ImageView, callback: com.google.firebase.inappmessaging.display.internal.FiamImageLoader.Callback): void;
								public constructor(this$0: com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>);
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
							public get(): any;
							public static newInstance(requestManager: com.bumptech.glide.RequestManager): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
							public static create(requestManagerProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.bumptech.glide.RequestManager>): com.google.firebase.inappmessaging.display.internal.FiamImageLoader_Factory;
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
							public show(this_: com.google.firebase.inappmessaging.display.internal.bindingwrappers.BindingWrapper, bindingWrapper: globalAndroid.app.Activity): void;
							public isFiamDisplayed(): boolean;
							public destroy(activity: globalAndroid.app.Activity): void;
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
							public get(): any;
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
							public displayMessage(inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage, callbacks: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
							public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
							public onActivityPaused(activity: globalAndroid.app.Activity): void;
							public onActivityResumed(activity: globalAndroid.app.Activity): void;
							public onActivityStopped(activity: globalAndroid.app.Activity): void;
							public onActivityCreated(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
							public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
							public onActivityStarted(activity: globalAndroid.app.Activity): void;
							public displayMessage(param0: com.google.firebase.inappmessaging.model.InAppMessage, param1: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks): void;
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
						export class GlideErrorListener extends com.bumptech.glide.request.RequestListener<globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.GlideErrorListener>;
							public onResourceReady(resource: globalAndroid.graphics.drawable.Drawable, model: any, target: com.bumptech.glide.request.target.Target<globalAndroid.graphics.drawable.Drawable>, dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): boolean;
							public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException, model: any, target: com.bumptech.glide.request.target.Target<globalAndroid.graphics.drawable.Drawable>, isFirstResource: boolean): boolean;
							public constructor(inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage, displayCallbacks: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks);
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
								public setMaxBodyWidthWeight(maxBodyWidthWeight: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setWindowFlag(windowFlag: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setViewWindowGravity(viewWindowGravity: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxDialogHeightPx(maxDialogHeightPx: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setBackgroundEnabled(backgroundEnabled: java.lang.Boolean): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setAnimate(animate: java.lang.Boolean): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxImageWidthWeight(maxImageWidthWeight: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setAutoDismiss(autoDismiss: java.lang.Boolean): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public constructor();
								public setMaxBodyHeightWeight(maxBodyHeightWeight: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxDialogWidthPx(maxDialogWidthPx: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public build(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public setWindowHeight(windowHeight: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setMaxImageHeightWeight(maxImageHeightWeight: java.lang.Float): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
								public setWindowWidth(windowWidth: java.lang.Integer): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig.Builder;
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
							public static loge(message: string): void;
							public static logd(message: string): void;
							public static logi(message: string): void;
							public static logdHeader(label: string): void;
							public static logdNumber(label: string, num: number): void;
							public static logdPair(label: string, fst: number, snd: number): void;
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
							public onFling(e1: globalAndroid.view.MotionEvent, e2: globalAndroid.view.MotionEvent, velocityX: number, velocityY: number): boolean;
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
							public start(c: com.google.firebase.inappmessaging.display.internal.RenewableTimer.Callback, duration: number, interval: number): void;
						}
						export module RenewableTimer {
							export class Callback {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.RenewableTimer.Callback>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.RenewableTimer$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onFinish(): void });
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
							public get(): any;
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
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
							public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
							public onMeasure(adjustViewBounds: number, this_: number): void;
							public constructor(context: globalAndroid.content.Context);
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
							public onTouch(velocityX: globalAndroid.view.View, absVelocityX: globalAndroid.view.MotionEvent): boolean;
							public constructor(view: globalAndroid.view.View, token: any, callbacks: com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener.DismissCallbacks);
							public getTranslationX(): number;
							public startDismissAnimation(dismissRight: boolean): void;
							public setTranslationX(translationX: number): void;
							public startCancelAnimation(): void;
							public setAlpha(alpha: number): void;
						}
						export module SwipeDismissTouchListener {
							export class DismissCallbacks {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener.DismissCallbacks>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.internal.SwipeDismissTouchListener$DismissCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { canDismiss(param0: any): boolean; onDismiss(param0: globalAndroid.view.View, param1: any): void });
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
								public inflate(this_: java.util.Map<com.google.firebase.inappmessaging.model.Action, globalAndroid.view.View.OnClickListener>, actionListeners: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public constructor(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage);
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
								public static newInstance(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
								public get(): any;
								public static create(configProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, inflaterProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.view.LayoutInflater>, messageProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper_Factory;
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
								public setViewBgColorFromHex(this_: globalAndroid.view.View, view: string): void;
								public static setButtonBgColorFromHex(drawable: globalAndroid.widget.Button, compatDrawable: string): void;
								public canSwipeToDismiss(): boolean;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public static setupViewButtonFromModel(viewButton: globalAndroid.widget.Button, modelButton: com.google.firebase.inappmessaging.model.Button): void;
								public constructor(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage);
								public inflate(param0: java.util.Map<com.google.firebase.inappmessaging.model.Action, globalAndroid.view.View.OnClickListener>, param1: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getDismissListener(): globalAndroid.view.View.OnClickListener;
								public setButtonActionListener(button: globalAndroid.widget.Button, actionListener: globalAndroid.view.View.OnClickListener): void;
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
								public setLayoutListener(listener: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
								public inflate(actionListeners: java.util.Map<com.google.firebase.inappmessaging.model.Action, globalAndroid.view.View.OnClickListener>, dismissOnClickListener: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public getSecondaryButton(): globalAndroid.widget.Button;
								public constructor(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage);
								public getDismissListener(): globalAndroid.view.View.OnClickListener;
								public getImageView(): globalAndroid.widget.ImageView;
								public getDialogView(): globalAndroid.view.View;
								public getScrollView(): globalAndroid.view.View;
								public getRootView(): globalAndroid.view.ViewGroup;
							}
							export module CardBindingWrapper {
								export class ScrollViewAdjustableListener {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper.ScrollViewAdjustableListener>;
									public onGlobalLayout(): void;
									public constructor(this$0: com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper);
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
								public static newInstance(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
								public get(): any;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
								public static create(configProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, inflaterProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.view.LayoutInflater>, messageProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper_Factory;
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
								public inflate(this_: java.util.Map<com.google.firebase.inappmessaging.model.Action, globalAndroid.view.View.OnClickListener>, actionListeners: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public constructor(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage);
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
								public static newInstance(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
								public get(): any;
								public static create(configProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, inflaterProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.view.LayoutInflater>, messageProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper_Factory;
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
								public setLayoutListener(listener: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
								public inflate(actionListeners: java.util.Map<com.google.firebase.inappmessaging.model.Action, globalAndroid.view.View.OnClickListener>, dismissOnClickListener: globalAndroid.view.View.OnClickListener): globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener;
								public getConfig(): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
								public constructor(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage);
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
									public constructor(this$0: com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper);
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
								public static newInstance(config: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, inflater: globalAndroid.view.LayoutInflater, message: com.google.firebase.inappmessaging.model.InAppMessage): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
								public get(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
								public static create(configProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>, inflaterProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.view.LayoutInflater>, messageProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.model.InAppMessage>): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper_Factory;
								public get(): any;
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
									public constructor(implementation: { providesFirebaseInAppMessagingUI(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay; fiamImageLoader(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader });
									public constructor();
									public fiamImageLoader(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
									public providesFirebaseInAppMessagingUI(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
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
								export class DaggerAppComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent>;
									public static builder(): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
								}
								export module DaggerAppComponent {
									export class AppComponentImpl extends com.google.firebase.inappmessaging.display.internal.injection.components.AppComponent {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.AppComponentImpl>;
										public providesFirebaseInAppMessagingUI(): com.google.firebase.inappmessaging.display.FirebaseInAppMessagingDisplay;
										public fiamImageLoader(): com.google.firebase.inappmessaging.display.internal.FiamImageLoader;
									}
									export module AppComponentImpl {
										export class FiamWindowManagerProvider extends com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.FiamWindowManager> {
											public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.AppComponentImpl.FiamWindowManagerProvider>;
											public get(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
											public get(): any;
										}
										export class InflaterClientProvider extends com.google.firebase.inappmessaging.display.dagger.internal.Provider<com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory> {
											public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.AppComponentImpl.InflaterClientProvider>;
											public get(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
											public get(): any;
										}
										export class MyKeyStringMapProvider extends com.google.firebase.inappmessaging.display.dagger.internal.Provider<java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>> {
											public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.AppComponentImpl.MyKeyStringMapProvider>;
											public get(): java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
											public get(): any;
										}
										export class ProvidesApplicationProvider extends com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.app.Application> {
											public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.AppComponentImpl.ProvidesApplicationProvider>;
											public get(): globalAndroid.app.Application;
											public get(): any;
										}
									}
									export class Builder {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder>;
										public headlessInAppMessagingModule(headlessInAppMessagingModule: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
										public glideModule(glideModule: com.google.firebase.inappmessaging.display.internal.injection.modules.GlideModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
										public build(): com.google.firebase.inappmessaging.display.internal.injection.components.AppComponent;
										public universalComponent(universalComponent: com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerAppComponent.Builder;
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
								export class DaggerInAppMessageComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent>;
									public static builder(): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.Builder;
								}
								export module DaggerInAppMessageComponent {
									export class Builder {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.Builder>;
										public inflaterModule(inflaterModule: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.Builder;
										public build(): com.google.firebase.inappmessaging.display.internal.injection.components.InAppMessageComponent;
									}
									export class InAppMessageComponentImpl extends com.google.firebase.inappmessaging.display.internal.injection.components.InAppMessageComponent {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerInAppMessageComponent.InAppMessageComponentImpl>;
										public imageBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper;
										public bannerBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper;
										public modalBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper;
										public cardBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper;
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
								export class DaggerUniversalComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent>;
									public static builder(): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder;
								}
								export module DaggerUniversalComponent {
									export class Builder {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder>;
										public applicationModule(applicationModule: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder;
										public inflaterConfigModule(inflaterConfigModule: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule): com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.Builder;
										public build(): com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent;
									}
									export class UniversalComponentImpl extends com.google.firebase.inappmessaging.display.internal.injection.components.UniversalComponent {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.components.DaggerUniversalComponent.UniversalComponentImpl>;
										public myKeyStringMap(): java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
										public providesApplication(): globalAndroid.app.Application;
										public displayMetrics(): globalAndroid.util.DisplayMetrics;
										public fiamWindowManager(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
										public inflaterClient(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
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
									public constructor(implementation: { imageBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ImageBindingWrapper; modalBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.ModalBindingWrapper; bannerBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.BannerBindingWrapper; cardBindingWrapper(): com.google.firebase.inappmessaging.display.internal.bindingwrappers.CardBindingWrapper });
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
									public constructor(implementation: { providesApplication(): globalAndroid.app.Application; displayMetrics(): globalAndroid.util.DisplayMetrics; fiamWindowManager(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager; inflaterClient(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory; myKeyStringMap(): java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>> });
									public constructor();
									public fiamWindowManager(): com.google.firebase.inappmessaging.display.internal.FiamWindowManager;
									public providesApplication(): globalAndroid.app.Application;
									public inflaterClient(): com.google.firebase.inappmessaging.display.internal.BindingWrapperFactory;
									public displayMetrics(): globalAndroid.util.DisplayMetrics;
									public myKeyStringMap(): java.util.Map<string, javax.inject.Provider<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig>>;
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
									public static MODAL_PORTRAIT: string = 'MODAL_PORTRAIT';
									public static MODAL_LANDSCAPE: string = 'MODAL_LANDSCAPE';
									public static CARD_PORTRAIT: string = 'CARD_PORTRAIT';
									public static CARD_LANDSCAPE: string = 'CARD_LANDSCAPE';
									public static IMAGE_ONLY_PORTRAIT: string = 'IMAGE_ONLY_PORTRAIT';
									public static IMAGE_ONLY_LANDSCAPE: string = 'IMAGE_ONLY_LANDSCAPE';
									public static BANNER_PORTRAIT: string = 'BANNER_PORTRAIT';
									public static BANNER_LANDSCAPE: string = 'BANNER_LANDSCAPE';
									public static UNSUPPORTED: string = 'UNSUPPORTED';
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
									public providesApplication(): globalAndroid.app.Application;
									public constructor(application: globalAndroid.app.Application);
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
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory;
									public get(): any;
									public get(): globalAndroid.app.Application;
									public static providesApplication(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.ApplicationModule): globalAndroid.app.Application;
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
								export class GlideModule {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.GlideModule>;
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
								export class GlideModule_ProvidesGlideRequestManagerFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.bumptech.glide.RequestManager> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.GlideModule_ProvidesGlideRequestManagerFactory>;
									public get(): com.bumptech.glide.RequestManager;
									public get(): any;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.GlideModule, applicationProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.display.internal.injection.modules.GlideModule_ProvidesGlideRequestManagerFactory;
									public static providesGlideRequestManager(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.GlideModule, application: globalAndroid.app.Application): com.bumptech.glide.RequestManager;
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
									public constructor(headless: com.google.firebase.inappmessaging.FirebaseInAppMessaging);
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
									public get(): any;
									public static providesHeadlesssSingleton(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule): com.google.firebase.inappmessaging.display.internal.injection.modules.HeadlessInAppMessagingModule_ProvidesHeadlesssSingletonFactory;
									public get(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
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
									public providesPortraitImageLayoutConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesBannerLandscapeLayoutConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesCardPortraitConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesCardLandscapeConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesModalPortraitConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesLandscapeImageLayoutConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesBannerPortraitLayoutConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public providesModalLandscapeConfig(displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static configFor(type: com.google.firebase.inappmessaging.model.MessageType, orientation: number): string;
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
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesBannerLandscapeLayoutConfigFactory;
									public get(): any;
									public static providesBannerLandscapeLayoutConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
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
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesBannerPortraitLayoutConfigFactory;
									public get(): any;
									public static providesBannerPortraitLayoutConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
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
									public static providesCardLandscapeConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public get(): any;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesCardLandscapeConfigFactory;
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
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesCardPortraitConfigFactory;
									public static providesCardPortraitConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public get(): any;
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
								export class InflaterConfigModule_ProvidesDisplayMetricsFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<globalAndroid.util.DisplayMetrics> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesDisplayMetricsFactory>;
									public static providesDisplayMetrics(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, application: globalAndroid.app.Application): globalAndroid.util.DisplayMetrics;
									public get(): any;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, applicationProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesDisplayMetricsFactory;
									public get(): globalAndroid.util.DisplayMetrics;
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
									public get(): any;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesLandscapeImageLayoutConfigFactory;
									public static providesLandscapeImageLayoutConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
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
									public get(): any;
									public static providesModalLandscapeConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalLandscapeConfigFactory;
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
								export class InflaterConfigModule_ProvidesModalPortraitConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalPortraitConfigFactory>;
									public static providesModalPortraitConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public get(): any;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesModalPortraitConfigFactory;
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
								export class InflaterConfigModule_ProvidesPortraitImageLayoutConfigFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesPortraitImageLayoutConfigFactory>;
									public get(): any;
									public static providesPortraitImageLayoutConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetrics: globalAndroid.util.DisplayMetrics): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule, displayMetricsProvider: com.google.firebase.inappmessaging.display.dagger.internal.Provider<globalAndroid.util.DisplayMetrics>): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterConfigModule_ProvidesPortraitImageLayoutConfigFactory;
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
									public providesInflaterservice(): globalAndroid.view.LayoutInflater;
									public constructor(inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage, inAppMessageLayoutConfig: com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig, application: globalAndroid.app.Application);
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
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_InAppMessageLayoutConfigFactory;
									public static inAppMessageLayoutConfig(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.InAppMessageLayoutConfig;
									public get(): any;
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
								export class InflaterModule_ProvidesBannerMessageFactory extends com.google.firebase.inappmessaging.display.dagger.internal.Factory<com.google.firebase.inappmessaging.model.InAppMessage> {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesBannerMessageFactory>;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesBannerMessageFactory;
									public static providesBannerMessage(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.model.InAppMessage;
									public get(): com.google.firebase.inappmessaging.model.InAppMessage;
									public get(): any;
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
									public static providesInflaterservice(instance: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): globalAndroid.view.LayoutInflater;
									public get(): globalAndroid.view.LayoutInflater;
									public static create(module: com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule): com.google.firebase.inappmessaging.display.internal.injection.modules.InflaterModule_ProvidesInflaterserviceFactory;
									public get(): any;
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
									public constructor(implementation: {});
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
									public constructor(implementation: {});
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
								public constructor(implementation: { setDismissListener(param0: globalAndroid.view.View.OnClickListener): void });
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
								public dpToPixels(dp: number): number;
								public getMaxHeightPct(): number;
								public roundToNearest(num: number, unit: number): number;
								public getDesiredWidth(child: globalAndroid.view.View): number;
								public getVisibleChildren(): java.util.List<globalAndroid.view.View>;
								public calculateBaseHeight(this_: number): number;
								public layoutChild(view: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
								public getDesiredHeight(child: globalAndroid.view.View): number;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public getMaxWidthPct(): number;
								public calculateBaseWidth(this_: number): number;
								public measureChildWithMargins(child: globalAndroid.view.View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
								public getMarginTop(child: globalAndroid.view.View): number;
								public onMeasure(i: number, this_: number): void;
								public getLayoutParams(child: globalAndroid.view.View): globalAndroid.widget.FrameLayout.LayoutParams;
								public findChildById(id: number): globalAndroid.view.View;
								public layoutChild(view: globalAndroid.view.View, left: number, top: number): void;
								public getMarginBottom(child: globalAndroid.view.View): number;
								public getDisplayMetrics(): globalAndroid.util.DisplayMetrics;
								public getWidthWithMargins(child: globalAndroid.view.View): number;
								public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
								public getHeightWithMargins(child: globalAndroid.view.View): number;
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
								public onMeasure(this_: number, widthMeasureSpec: number): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
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
								public onLayout(childHeight: boolean, childWidth: number, childTop: number, childBottom: number, childLeft: number): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public onMeasure(i: number, this_: number): void;
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
								public setDismissListener(listener: globalAndroid.view.View.OnClickListener): void;
								public constructor(context: globalAndroid.content.Context);
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
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
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
								public setDismissListener(listener: globalAndroid.view.View.OnClickListener): void;
								public constructor(context: globalAndroid.content.Context);
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
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
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
								public setDismissListener(listener: globalAndroid.view.View.OnClickListener): void;
								public constructor(context: globalAndroid.content.Context);
								public setDismissListener(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): boolean;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
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
								public onMeasure(view: number, param1: number): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public layoutCenterHorizontal(child: globalAndroid.view.View, left: number, top: number, right: number, bottom: number): void;
								public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
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
								public onLayout(halfWidth: boolean, childLeft: number, childRight: number, child: number, layoutParams: number): void;
								public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
								public onMeasure(i: number, vm: number): void;
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
									public dispatchKeyEvent(event: globalAndroid.view.KeyEvent): java.lang.Boolean;
									public constructor(viewGroup: globalAndroid.view.ViewGroup, listener: globalAndroid.view.View.OnClickListener);
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
									public static measureFullWidth(child: globalAndroid.view.View, width: number, height: number): void;
									public static measureFullHeight(child: globalAndroid.view.View, width: number, height: number): void;
									public static measureExactly(child: globalAndroid.view.View, width: number, height: number): void;
									public static measureAtMost(child: globalAndroid.view.View, width: number, height: number): void;
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
									public constructor(w: number, h: number);
									public constructor();
									public getTotalFixedHeight(): number;
									public allocateSpace(vm: number): void;
									public reset(w: number, h: number): void;
									public getViews(): java.util.List<com.google.firebase.inappmessaging.display.internal.layout.util.ViewMeasure>;
									public getTotalHeight(): number;
									public add(view: globalAndroid.view.View, flex: boolean): void;
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
									public getDesiredWidth(): number;
									public getMaxWidth(): number;
									public preMeasure(w: number, h: number): void;
									public getView(): globalAndroid.view.View;
									public setMaxDimens(w: number, h: number): void;
									public getMaxHeight(): number;
									public constructor(view: globalAndroid.view.View, flex: boolean);
									public getDesiredHeight(): number;
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
				export module display {
					export module jakarta {
						export module inject {
							export class Provider<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.display.jakarta.inject.Provider<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.display.jakarta.inject.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { get(): T });
								public constructor();
								public get(): T;
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
					export module org {
						export module jspecify {
							export module annotations {
								export class Nullable {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.display.org.jspecify.annotations.Nullable>;
									/**
									 * Constructs a new instance of the com.google.firebase.inappmessaging.display.org.jspecify.annotations.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {});
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
				export module internal {
					export class AbtIntegrationHelper {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper>;
						public constructor(abTesting: com.google.firebase.abt.FirebaseABTesting, blockingExecutor: java.util.concurrent.Executor);
					}
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
						public static newInstance(abTesting: com.google.firebase.abt.FirebaseABTesting, blockingExecutor: java.util.concurrent.Executor): com.google.firebase.inappmessaging.internal.AbtIntegrationHelper;
						public static create(abTestingProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.abt.FirebaseABTesting>, blockingExecutorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor>): com.google.firebase.inappmessaging.internal.AbtIntegrationHelper_Factory;
						public get(): any;
					}
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
						public updateContextualTriggers(serviceResponse: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(analyticsConnector: com.google.firebase.analytics.connector.AnalyticsConnector);
						public getAnalyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
						public getHandle(): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle;
					}
					export module AnalyticsEventsManager {
						export class AnalyticsFlowableSubscriber extends io.reactivex.FlowableOnSubscribe<string> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager.AnalyticsFlowableSubscriber>;
							public subscribe(emitter: io.reactivex.FlowableEmitter<string>): void;
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
						public constructor(grpcClient: javax.inject.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>, firebaseApp: com.google.firebase.FirebaseApp, application: globalAndroid.app.Application, clock: com.google.firebase.inappmessaging.internal.time.Clock, providerInstaller: com.google.firebase.inappmessaging.internal.ProviderInstaller);
					}
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
						public equals(this_: any): boolean;
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
						public put(fetchEligibleCampaignsResponse: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): io.reactivex.Completable;
						public get(): io.reactivex.Maybe<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
					}
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
						public static create(storageClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>, clockProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.time.Clock>): com.google.firebase.inappmessaging.internal.CampaignCacheClient_Factory;
						public static newInstance(storageClient: com.google.firebase.inappmessaging.internal.ProtoStorageClient, application: globalAndroid.app.Application, clock: com.google.firebase.inappmessaging.internal.time.Clock): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
						public get(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
						public get(): any;
					}
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
						public setAutomaticDataCollectionEnabled(isEnabled: java.lang.Boolean): void;
						public setAutomaticDataCollectionEnabled(isEnabled: boolean): void;
						public constructor(firebaseApp: com.google.firebase.FirebaseApp, sharedPreferencesUtils: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, firebaseEventsSubscriber: com.google.firebase.events.Subscriber);
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
						public static create(firebaseAppProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.FirebaseApp>, sharedPreferencesUtilsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, firebaseEventsSubscriberProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.events.Subscriber>): com.google.firebase.inappmessaging.internal.DataCollectionHelper_Factory;
						public get(): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
						public get(): any;
						public static newInstance(firebaseApp: com.google.firebase.FirebaseApp, sharedPreferencesUtils: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, firebaseEventsSubscriber: com.google.firebase.events.Subscriber): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
					}
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
						public getAllListeners(): java.util.Map<any, any>;
						public addClickListener(clickListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
						public addDisplayErrorListener(displayErrorListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, executor: java.util.concurrent.Executor): void;
						public addDismissListener(dismissListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener): void;
						public messageClicked(this_: com.google.firebase.inappmessaging.model.InAppMessage, inAppMessage: com.google.firebase.inappmessaging.model.Action): void;
						public constructor(backgroundExecutor: java.util.concurrent.Executor);
						public addImpressionListener(impressionListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
						public addImpressionListener(impressionListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, executor: java.util.concurrent.Executor): void;
						public removeDismissListener(dismissListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener): void;
						public removeAllListeners(): void;
						public addClickListener(clickListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, executor: java.util.concurrent.Executor): void;
						public addDismissListener(dismissListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener, executor: java.util.concurrent.Executor): void;
						public removeClickListener(clickListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener): void;
						public displayErrorEncountered(this_: com.google.firebase.inappmessaging.model.InAppMessage, inAppMessage: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): void;
						public removeImpressionListener(impressionListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener): void;
						public addDisplayErrorListener(displayErrorListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
						public impressionDetected(this_: com.google.firebase.inappmessaging.model.InAppMessage): void;
						public removeDisplayErrorListener(displayErrorListener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener): void;
						public messageDismissed(this_: com.google.firebase.inappmessaging.model.InAppMessage): void;
					}
					export module DeveloperListenerManager {
						export class ClicksExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ClicksExecutorAndListener>;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener, e: java.util.concurrent.Executor);
							public getListener(): any;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener);
							public constructor(e: java.util.concurrent.Executor);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingClickListener;
						}
						export class DismissExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.DismissExecutorAndListener>;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener, e: java.util.concurrent.Executor);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener;
							public getListener(): any;
							public constructor(e: java.util.concurrent.Executor);
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDismissListener);
						}
						export class ErrorsExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ErrorsExecutorAndListener>;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener, e: java.util.concurrent.Executor);
							public getListener(): any;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayErrorListener;
							public constructor(e: java.util.concurrent.Executor);
						}
						export abstract class ExecutorAndListener<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<any>>;
							public getListener(): T;
							public withExecutor(defaultExecutor: java.util.concurrent.Executor): java.util.concurrent.Executor;
							public constructor(e: java.util.concurrent.Executor);
						}
						export class ImpressionExecutorAndListener extends com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener<com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener> {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ImpressionExecutorAndListener>;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener);
							public getListener(): com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener;
							public constructor(listener: com.google.firebase.inappmessaging.FirebaseInAppMessagingImpressionListener, e: java.util.concurrent.Executor);
							public getListener(): any;
							public constructor(e: java.util.concurrent.Executor);
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
						public constructor(
							impressionStorageClient: com.google.firebase.inappmessaging.internal.ImpressionStorageClient,
							clock: com.google.firebase.inappmessaging.internal.time.Clock,
							schedulers: com.google.firebase.inappmessaging.internal.Schedulers,
							rateLimiterClient: com.google.firebase.inappmessaging.internal.RateLimiterClient,
							campaignCacheClient: com.google.firebase.inappmessaging.internal.CampaignCacheClient,
							appForegroundRateLimit: com.google.firebase.inappmessaging.model.RateLimit,
							metricsLoggerClient: com.google.firebase.inappmessaging.internal.MetricsLoggerClient,
							dataCollectionHelper: com.google.firebase.inappmessaging.internal.DataCollectionHelper
						);
						public generateDisplayCallback(inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage, triggeringEvent: string): com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks;
					}
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
						public get(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
						public static create(
							impressionStorageClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>,
							clockProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.time.Clock>,
							schedulersProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.Schedulers>,
							rateLimiterClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>,
							campaignCacheClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>,
							appForegroundRateLimitProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.model.RateLimit>,
							metricsLoggerClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.MetricsLoggerClient>,
							dataCollectionHelperProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>
						): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory_Factory;
						public static newInstance(
							impressionStorageClient: com.google.firebase.inappmessaging.internal.ImpressionStorageClient,
							clock: com.google.firebase.inappmessaging.internal.time.Clock,
							schedulers: com.google.firebase.inappmessaging.internal.Schedulers,
							rateLimiterClient: com.google.firebase.inappmessaging.internal.RateLimiterClient,
							campaignCacheClient: com.google.firebase.inappmessaging.internal.CampaignCacheClient,
							appForegroundRateLimit: com.google.firebase.inappmessaging.model.RateLimit,
							metricsLoggerClient: com.google.firebase.inappmessaging.internal.MetricsLoggerClient,
							dataCollectionHelper: com.google.firebase.inappmessaging.internal.DataCollectionHelper
						): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
						public get(): any;
					}
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
						public messageClicked(action: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
						public impressionDetected(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public displayErrorEncountered(this_: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingErrorReason): com.google.android.gms.tasks.Task<java.lang.Void>;
						/** @deprecated */
						public messageClicked(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageClicked(param0: com.google.firebase.inappmessaging.model.Action): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageDismissed(param0: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
						public messageDismissed(this_: com.google.firebase.inappmessaging.FirebaseInAppMessagingDisplayCallbacks.InAppMessagingDismissType): com.google.android.gms.tasks.Task<java.lang.Void>;
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
						public onMessageTriggered(id: number, extras: globalAndroid.os.Bundle): void;
					}
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
						public static DELAY_MILLIS: number = 1000;
						public onActivityResumed(activity: globalAndroid.app.Activity): void;
						public constructor();
						public onActivityStopped(activity: globalAndroid.app.Activity): void;
						public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
						public onActivityStarted(activity: globalAndroid.app.Activity): void;
						public foregroundFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
						public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
					}
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
						public fetchEligibleCampaigns(req: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
					}
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
						public static create(stubProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>): com.google.firebase.inappmessaging.internal.GrpcClient_Factory;
						public get(): com.google.firebase.inappmessaging.internal.GrpcClient;
						public get(): any;
						public static newInstance(stub: com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub): com.google.firebase.inappmessaging.internal.GrpcClient;
					}
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
						public clearImpressions(content: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): io.reactivex.Completable;
						public storeImpression(impression: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): io.reactivex.Completable;
						public isImpressed(content: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): io.reactivex.Single<java.lang.Boolean>;
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
						public static newInstance(storageClient: com.google.firebase.inappmessaging.internal.ProtoStorageClient): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
						public static create(storageClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>): com.google.firebase.inappmessaging.internal.ImpressionStorageClient_Factory;
						public get(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
						public get(): any;
					}
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
						public static ON_FOREGROUND: string = 'ON_FOREGROUND';
						public static isAppForegroundEvent(event: string): boolean;
						public static isAppForegroundEvent(event: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): boolean;
						public createFirebaseInAppMessageStream(): io.reactivex.Flowable<com.google.firebase.inappmessaging.model.TriggeredInAppMessage>;
						public constructor(
							appForegroundEventFlowable: io.reactivex.flowables.ConnectableFlowable<string>,
							programmaticTriggerEventFlowable: io.reactivex.flowables.ConnectableFlowable<string>,
							campaignCacheClient: com.google.firebase.inappmessaging.internal.CampaignCacheClient,
							clock: com.google.firebase.inappmessaging.internal.time.Clock,
							apiClient: com.google.firebase.inappmessaging.internal.ApiClient,
							analyticsEventsManager: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager,
							schedulers: com.google.firebase.inappmessaging.internal.Schedulers,
							impressionStorageClient: com.google.firebase.inappmessaging.internal.ImpressionStorageClient,
							rateLimiterClient: com.google.firebase.inappmessaging.internal.RateLimiterClient,
							appForegroundRateLimit: com.google.firebase.inappmessaging.model.RateLimit,
							testDeviceHelper: com.google.firebase.inappmessaging.internal.TestDeviceHelper,
							firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi,
							dataCollectionHelper: com.google.firebase.inappmessaging.internal.DataCollectionHelper,
							abtIntegrationHelper: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper,
							blockingExecutor: java.util.concurrent.Executor
						);
					}
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
						public get(): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager;
						public static create(
							appForegroundEventFlowableProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.flowables.ConnectableFlowable<string>>,
							programmaticTriggerEventFlowableProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.flowables.ConnectableFlowable<string>>,
							campaignCacheClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient>,
							clockProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.time.Clock>,
							apiClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ApiClient>,
							analyticsEventsManagerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>,
							schedulersProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.Schedulers>,
							impressionStorageClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient>,
							rateLimiterClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient>,
							appForegroundRateLimitProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.model.RateLimit>,
							testDeviceHelperProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.TestDeviceHelper>,
							firebaseInstallationsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.installations.FirebaseInstallationsApi>,
							dataCollectionHelperProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DataCollectionHelper>,
							abtIntegrationHelperProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.AbtIntegrationHelper>,
							blockingExecutorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor>
						): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager_Factory;
						public static newInstance(
							appForegroundEventFlowable: io.reactivex.flowables.ConnectableFlowable<string>,
							programmaticTriggerEventFlowable: io.reactivex.flowables.ConnectableFlowable<string>,
							campaignCacheClient: com.google.firebase.inappmessaging.internal.CampaignCacheClient,
							clock: com.google.firebase.inappmessaging.internal.time.Clock,
							apiClient: com.google.firebase.inappmessaging.internal.ApiClient,
							analyticsEventsManager: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager,
							schedulers: com.google.firebase.inappmessaging.internal.Schedulers,
							impressionStorageClient: com.google.firebase.inappmessaging.internal.ImpressionStorageClient,
							rateLimiterClient: com.google.firebase.inappmessaging.internal.RateLimiterClient,
							appForegroundRateLimit: com.google.firebase.inappmessaging.model.RateLimit,
							testDeviceHelper: com.google.firebase.inappmessaging.internal.TestDeviceHelper,
							firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi,
							dataCollectionHelper: com.google.firebase.inappmessaging.internal.DataCollectionHelper,
							abtIntegrationHelper: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper,
							blockingExecutor: java.util.concurrent.Executor
						): com.google.firebase.inappmessaging.internal.InAppMessageStreamManager;
						public get(): any;
					}
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
						public static create(installationId: string, installationTokenResult: com.google.firebase.installations.InstallationTokenResult): com.google.firebase.inappmessaging.internal.InstallationIdResult;
					}
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
						public static TAG: string = 'FIAM.Headless';
						public static loge(message: string): void;
						public constructor();
						public static logd(message: string): void;
						public static logi(message: string): void;
						public static logw(message: string): void;
					}
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
						public constructor(engagementMetricsLogger: com.google.firebase.inappmessaging.internal.MetricsLoggerClient.EngagementMetricsLoggerInterface, analyticsConnector: com.google.firebase.analytics.connector.AnalyticsConnector, firebaseApp: com.google.firebase.FirebaseApp, firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi, clock: com.google.firebase.inappmessaging.internal.time.Clock, developerListenerManager: com.google.firebase.inappmessaging.internal.DeveloperListenerManager, blockingExecutor: java.util.concurrent.Executor);
					}
					export module MetricsLoggerClient {
						export class EngagementMetricsLoggerInterface {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.MetricsLoggerClient.EngagementMetricsLoggerInterface>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.MetricsLoggerClient$EngagementMetricsLoggerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { logEvent(param0: androidNative.Array<number>): void });
							public constructor();
							public logEvent(param0: androidNative.Array<number>): void;
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
						public triggerEvent(eventName: string): void;
						public setListener(listener: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener): void;
						public removeListener(listener: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener): void;
					}
					export module ProgramaticContextualTriggers {
						export class Listener {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers.Listener>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onEventTrigger(param0: string): void });
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
						public write(messageLite: com.google.protobuf.AbstractMessageLite): io.reactivex.Completable;
						public read(parser: com.google.protobuf.Parser): io.reactivex.Maybe;
						public constructor(application: globalAndroid.app.Application, fileName: string);
					}
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
						public get(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
						public static create(applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.ProviderInstaller_Factory;
						public static newInstance(application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProviderInstaller;
						public get(): any;
					}
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
						public clearConditionalUserProperty(s: string, s1: string, bundle: globalAndroid.os.Bundle): void;
						public logEvent(s: string, s1: string, bundle: globalAndroid.os.Bundle): void;
						public setConditionalUserProperty(conditionalUserProperty: com.google.firebase.analytics.connector.AnalyticsConnector.ConditionalUserProperty): void;
						public constructor(analyticsConnector: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>);
						public registerAnalyticsConnectorListener(s: string, analyticsConnectorListener: com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorListener): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle;
						public getUserProperties(b: boolean): java.util.Map<string, any>;
						public getConditionalUserProperties(s: string, s1: string): java.util.List<com.google.firebase.analytics.connector.AnalyticsConnector.ConditionalUserProperty>;
						public getMaxUserProperties(s: string): number;
						public setUserProperty(s: string, s1: string, o: any): void;
					}
					export module ProxyAnalyticsConnector {
						export class ProxyAnalyticsConnectorHandle {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.ProxyAnalyticsConnector.ProxyAnalyticsConnectorHandle>;
							public unregister(): void;
							public unregisterEventNames(): void;
							public registerEventNames(this_: java.util.Set<string>): void;
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
						public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
					}
					export module RateLimitProto {
						export class Counter extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static VALUE_FIELD_NUMBER: number = 1;
							public static START_TIME_EPOCH_FIELD_NUMBER: number = 2;
							public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static getDefaultInstance(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static newBuilder(): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getStartTimeEpoch(): number;
							public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static newBuilder(prototype: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
							public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							public getValue(): number;
							public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
						}
						export module Counter {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.CounterOrBuilder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder>;
								public setStartTimeEpoch(value: number): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
								public getValue(): number;
								public setValue(value: number): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter.Builder;
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
							public constructor(implementation: { getValue(): number; getStartTimeEpoch(): number });
							public constructor();
							public getStartTimeEpoch(): number;
							public getValue(): number;
						}
						export class RateLimit extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit, com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit>;
							public static LIMITS_FIELD_NUMBER: number = 1;
							public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getLimitsCount(): number;
							public static newBuilder(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
							public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(data: androidNative.Array<number>): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public containsLimits(param0: string): boolean;
							public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static parser(): com.google.protobuf.Parser<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit>;
							public static newBuilder(prototype: com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
							public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public static getDefaultInstance(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit;
							public getLimitsOrDefault(key: string, defaultValue: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							/** @deprecated */
							public getLimits(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getLimitsMap(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getLimitsOrThrow(key: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public containsLimits(key: string): boolean;
						}
						export module RateLimit {
							export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit, com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder> implements com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimitOrBuilder {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder>;
								public getLimitsMap(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								public getLimitsOrThrow(key: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								/** @deprecated */
								public getLimits(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								public removeLimits(key: string): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public putLimits(key: string, value: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public containsLimits(key: string): boolean;
								public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								public putAllLimits(values: java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								public getLimitsCount(): number;
								public clearLimits(): com.google.firebase.inappmessaging.internal.RateLimitProto.RateLimit.Builder;
								public getLimitsOrDefault(key: string, defaultValue: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
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
								getLimits(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								getLimitsMap(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
								getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
								getLimitsOrThrow(param0: string): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							});
							public constructor();
							public getLimitsOrDefault(param0: string, param1: com.google.firebase.inappmessaging.internal.RateLimitProto.Counter): com.google.firebase.inappmessaging.internal.RateLimitProto.Counter;
							public getLimitsCount(): number;
							/** @deprecated */
							public getLimits(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
							public getLimitsMap(): java.util.Map<string, com.google.firebase.inappmessaging.internal.RateLimitProto.Counter>;
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
						public increment(limit: com.google.firebase.inappmessaging.model.RateLimit): io.reactivex.Completable;
						public isRateLimited(limit: com.google.firebase.inappmessaging.model.RateLimit): io.reactivex.Single<java.lang.Boolean>;
					}
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
						public get(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
						public static create(storageClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProtoStorageClient>, clockProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.time.Clock>): com.google.firebase.inappmessaging.internal.RateLimiterClient_Factory;
						public static newInstance(storageClient: com.google.firebase.inappmessaging.internal.ProtoStorageClient, clock: com.google.firebase.inappmessaging.internal.time.Clock): com.google.firebase.inappmessaging.internal.RateLimiterClient;
						public get(): any;
					}
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
						public static newInstance(ioScheduler: io.reactivex.Scheduler, computeScheduler: io.reactivex.Scheduler, mainThreadScheduler: io.reactivex.Scheduler): com.google.firebase.inappmessaging.internal.Schedulers;
						public get(): com.google.firebase.inappmessaging.internal.Schedulers;
						public static create(ioSchedulerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.Scheduler>, computeSchedulerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.Scheduler>, mainThreadSchedulerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.Scheduler>): com.google.firebase.inappmessaging.internal.Schedulers_Factory;
						public get(): any;
					}
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
						public getAndSetBooleanPreference(this_: string, preference: boolean): boolean;
						public isPreferenceSet(preference: string): boolean;
						public clearPreference(preference: string): void;
						public constructor(firebaseApp: com.google.firebase.FirebaseApp);
						public getBooleanManifestValue(packageManager: string, this_: boolean): boolean;
						public setBooleanPreference(preference: string, value: boolean): void;
						public getBooleanPreference(this_: string, preference: boolean): boolean;
						public isManifestSet(packageManager: string): boolean;
					}
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
						public static newInstance(firebaseApp: com.google.firebase.FirebaseApp): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
						public get(): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
						public static create(firebaseAppProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.FirebaseApp>): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils_Factory;
						public get(): any;
					}
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
						public processCampaignFetch(messages: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): void;
						public constructor(sharedPreferencesUtils: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils);
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
						public static newInstance(sharedPreferencesUtils: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
						public get(): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
						public static create(sharedPreferencesUtilsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>): com.google.firebase.inappmessaging.internal.TestDeviceHelper_Factory;
						public get(): any;
					}
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
								public constructor(implementation: { providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging; displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory });
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
							export class DaggerAppComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent>;
								public static builder(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
							}
							export module DaggerAppComponent {
								export class AppComponentImpl extends com.google.firebase.inappmessaging.internal.injection.components.AppComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl>;
									public displayCallbacksFactory(): com.google.firebase.inappmessaging.internal.DisplayCallbacksFactory;
									public providesFirebaseInAppMessaging(): com.google.firebase.inappmessaging.FirebaseInAppMessaging;
								}
								export module AppComponentImpl {
									export class AnalyticsConnectorProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.analytics.connector.AnalyticsConnector> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.AnalyticsConnectorProvider>;
										public get(): any;
										public get(): com.google.firebase.analytics.connector.AnalyticsConnector;
									}
									export class AnalyticsEventsManagerProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.AnalyticsEventsManagerProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
									}
									export class AppForegroundEventFlowableProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.flowables.ConnectableFlowable<string>> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.AppForegroundEventFlowableProvider>;
										public get(): any;
										public get(): io.reactivex.flowables.ConnectableFlowable<string>;
									}
									export class AppForegroundRateLimitProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.model.RateLimit> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.AppForegroundRateLimitProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.model.RateLimit;
									}
									export class ApplicationProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.ApplicationProvider>;
										public get(): any;
										public get(): globalAndroid.app.Application;
									}
									export class BlockingExecutorProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.BlockingExecutorProvider>;
										public get(): any;
										public get(): java.util.concurrent.Executor;
									}
									export class CampaignCacheClientProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.CampaignCacheClient> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.CampaignCacheClientProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
									}
									export class ClockProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.time.Clock> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.ClockProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.time.Clock;
									}
									export class DeveloperListenerManagerProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.DeveloperListenerManagerProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
									}
									export class FirebaseEventsSubscriberProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.events.Subscriber> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.FirebaseEventsSubscriberProvider>;
										public get(): any;
										public get(): com.google.firebase.events.Subscriber;
									}
									export class GRPCChannelProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<io.grpc.Channel> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.GRPCChannelProvider>;
										public get(): any;
										public get(): io.grpc.Channel;
									}
									export class ImpressionStorageClientProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ImpressionStorageClient> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.ImpressionStorageClientProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
									}
									export class LightWeightExecutorProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.LightWeightExecutorProvider>;
										public get(): any;
										public get(): java.util.concurrent.Executor;
									}
									export class ProgrammaticContextualTriggerFlowableProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<io.reactivex.flowables.ConnectableFlowable<string>> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.ProgrammaticContextualTriggerFlowableProvider>;
										public get(): any;
										public get(): io.reactivex.flowables.ConnectableFlowable<string>;
									}
									export class ProgrammaticContextualTriggersProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.ProgrammaticContextualTriggersProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
									}
									export class ProviderInstallerProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.ProviderInstallerProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
									}
									export class RateLimiterClientProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.RateLimiterClient> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.RateLimiterClientProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
									}
									export class SchedulersProvider extends com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.Schedulers> {
										public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.AppComponentImpl.SchedulersProvider>;
										public get(): any;
										public get(): com.google.firebase.inappmessaging.internal.Schedulers;
									}
								}
								export class Builder extends com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder>;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.AppComponent;
									public universalComponent(param0: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public transportFactory(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public abtIntegrationHelper(param0: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public apiClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public abtIntegrationHelper(integrationHelper: com.google.firebase.inappmessaging.internal.AbtIntegrationHelper): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public apiClientModule(module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public grpcClientModule(param0: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.AppComponent.Builder;
									public grpcClientModule(module: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public universalComponent(component: com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
									public transportFactory(transportFactory: com.google.android.datatransport.TransportFactory): com.google.firebase.inappmessaging.internal.injection.components.DaggerAppComponent.Builder;
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
							export class DaggerUniversalComponent {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent>;
								public static builder(): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
							}
							export module DaggerUniversalComponent {
								export class Builder {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder>;
									public protoStorageClientModule(protoStorageClientModule: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public appMeasurementModule(appMeasurementModule: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public executorsModule(executorsModule: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public build(): com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent;
									public foregroundFlowableModule(foregroundFlowableModule: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public grpcChannelModule(grpcChannelModule: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public analyticsEventsModule(analyticsEventsModule: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public rateLimitModule(rateLimitModule: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public systemClockModule(systemClockModule: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public applicationModule(applicationModule: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public schedulerModule(schedulerModule: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
									public programmaticContextualTriggerFlowableModule(programmaticContextualTriggerFlowableModule: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.Builder;
								}
								export class UniversalComponentImpl extends com.google.firebase.inappmessaging.internal.injection.components.UniversalComponent {
									public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.components.DaggerUniversalComponent.UniversalComponentImpl>;
									public firebaseEventsSubscriber(): com.google.firebase.events.Subscriber;
									public campaignCacheClient(): com.google.firebase.inappmessaging.internal.CampaignCacheClient;
									public gRPCChannel(): io.grpc.Channel;
									public providerInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
									public lightWeightExecutor(): java.util.concurrent.Executor;
									public analyticsConnector(): com.google.firebase.analytics.connector.AnalyticsConnector;
									public analyticsEventsManager(): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
									public appForegroundRateLimit(): com.google.firebase.inappmessaging.model.RateLimit;
									public blockingExecutor(): java.util.concurrent.Executor;
									public analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									public clock(): com.google.firebase.inappmessaging.internal.time.Clock;
									public protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
									public programmaticContextualTriggerFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									public application(): globalAndroid.app.Application;
									public programmaticContextualTriggers(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
									public rateLimiterClient(): com.google.firebase.inappmessaging.internal.RateLimiterClient;
									public developerListenerManager(): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
									public appForegroundEventFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
									public schedulers(): com.google.firebase.inappmessaging.internal.Schedulers;
									public impressionStorageClient(): com.google.firebase.inappmessaging.internal.ImpressionStorageClient;
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
									providerInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
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
									lightWeightExecutor(): java.util.concurrent.Executor;
									blockingExecutor(): java.util.concurrent.Executor;
								});
								public constructor();
								public blockingExecutor(): java.util.concurrent.Executor;
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
								public lightWeightExecutor(): java.util.concurrent.Executor;
								public analyticsEventsFlowable(): io.reactivex.flowables.ConnectableFlowable<string>;
								public protoMarshallerClient(): com.google.firebase.inappmessaging.model.ProtoMarshallerClient;
								public providerInstaller(): com.google.firebase.inappmessaging.internal.ProviderInstaller;
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
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, analyticsEventsManagerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.AnalyticsEventsManager>): com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsConnectorEventsFactory;
								public get(): any;
								public static providesAnalyticsConnectorEvents(instance: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, analyticsEventsManager: com.google.firebase.inappmessaging.internal.AnalyticsEventsManager): io.reactivex.flowables.ConnectableFlowable<string>;
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
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, analyticsConnectorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>): com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule_ProvidesAnalyticsEventsManagerFactory;
								public static providesAnalyticsEventsManager(instance: com.google.firebase.inappmessaging.internal.injection.modules.AnalyticsEventsModule, analyticsConnector: com.google.firebase.analytics.connector.AnalyticsConnector): com.google.firebase.inappmessaging.internal.AnalyticsEventsManager;
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
								public constructor(firebaseApp: com.google.firebase.FirebaseApp, firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi, clock: com.google.firebase.inappmessaging.internal.time.Clock);
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
								public get(): any;
								public static create(
									module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule,
									grpcClientProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>,
									applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>,
									providerInstallerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.ProviderInstaller>
								): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesApiClientFactory;
								public static providesApiClient(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, grpcClient: javax.inject.Provider<com.google.firebase.inappmessaging.internal.GrpcClient>, application: globalAndroid.app.Application, providerInstaller: com.google.firebase.inappmessaging.internal.ProviderInstaller): com.google.firebase.inappmessaging.internal.ApiClient;
								public get(): com.google.firebase.inappmessaging.internal.ApiClient;
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
								public static providesDataCollectionHelper(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, sharedPreferencesUtils: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils, firebaseEventSubscriber: com.google.firebase.events.Subscriber): com.google.firebase.inappmessaging.internal.DataCollectionHelper;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, sharedPreferencesUtilsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>, firebaseEventSubscriberProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.events.Subscriber>): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesDataCollectionHelperFactory;
								public get(): any;
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseAppFactory;
								public static providesFirebaseApp(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.FirebaseApp;
								public get(): any;
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
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesFirebaseInstallationsFactory;
								public static providesFirebaseInstallations(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.installations.FirebaseInstallationsApi;
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
								public static providesSharedPreferencesUtils(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
								public get(): com.google.firebase.inappmessaging.internal.SharedPreferencesUtils;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesSharedPreferencesUtilsFactory;
								public get(): any;
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
								public static providesTestDeviceHelper(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, sharedPreferencesUtils: com.google.firebase.inappmessaging.internal.SharedPreferencesUtils): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
								public get(): any;
								public get(): com.google.firebase.inappmessaging.internal.TestDeviceHelper;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule, sharedPreferencesUtilsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.SharedPreferencesUtils>): com.google.firebase.inappmessaging.internal.injection.modules.ApiClientModule_ProvidesTestDeviceHelperFactory;
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
								public constructor(analyticsConnector: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>, firebaseEventsSubscriber: com.google.firebase.events.Subscriber);
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesAnalyticsConnectorFactory;
								public get(): any;
								public static providesAnalyticsConnector(instance: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.analytics.connector.AnalyticsConnector;
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule_ProvidesSubsriberFactory;
								public get(): any;
								public get(): com.google.firebase.events.Subscriber;
								public static providesSubsriber(instance: com.google.firebase.inappmessaging.internal.injection.modules.AppMeasurementModule): com.google.firebase.events.Subscriber;
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
								public constructor(application: globalAndroid.app.Application);
								public providesApplication(): globalAndroid.app.Application;
								public developerListenerManager(backgroundExecutor: java.util.concurrent.Executor): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
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
								public static developerListenerManager(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule, backgroundExecutor: java.util.concurrent.Executor): com.google.firebase.inappmessaging.internal.DeveloperListenerManager;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule, backgroundExecutorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor>): com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_DeveloperListenerManagerFactory;
								public get(): any;
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
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule_ProvidesApplicationFactory;
								public static providesApplication(instance: com.google.firebase.inappmessaging.internal.injection.modules.ApplicationModule): globalAndroid.app.Application;
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
							export class ExecutorsModule {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule>;
								public providesBlockingExecutor(): java.util.concurrent.Executor;
								public providesLightWeightExecutor(): java.util.concurrent.Executor;
								public providesBackgroundExecutor(): java.util.concurrent.Executor;
								public constructor(lightWeightExecutor: java.util.concurrent.Executor, backgroundExecutor: java.util.concurrent.Executor, blockingExecutor: java.util.concurrent.Executor);
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
							export class ExecutorsModule_ProvidesBackgroundExecutorFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<java.util.concurrent.Executor> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule_ProvidesBackgroundExecutorFactory>;
								public get(): java.util.concurrent.Executor;
								public static providesBackgroundExecutor(instance: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): java.util.concurrent.Executor;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule_ProvidesBackgroundExecutorFactory;
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
							export class ExecutorsModule_ProvidesBlockingExecutorFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<java.util.concurrent.Executor> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule_ProvidesBlockingExecutorFactory>;
								public get(): java.util.concurrent.Executor;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule_ProvidesBlockingExecutorFactory;
								public static providesBlockingExecutor(instance: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): java.util.concurrent.Executor;
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
							export class ExecutorsModule_ProvidesLightWeightExecutorFactory extends com.google.firebase.inappmessaging.dagger.internal.Factory<java.util.concurrent.Executor> {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule_ProvidesLightWeightExecutorFactory>;
								public get(): java.util.concurrent.Executor;
								public static providesLightWeightExecutor(instance: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): java.util.concurrent.Executor;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule): com.google.firebase.inappmessaging.internal.injection.modules.ExecutorsModule_ProvidesLightWeightExecutorFactory;
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
								public providesAppForegroundEventStream(application: globalAndroid.app.Application): io.reactivex.flowables.ConnectableFlowable<string>;
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
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule_ProvidesAppForegroundEventStreamFactory;
								public get(): any;
								public static providesAppForegroundEventStream(instance: com.google.firebase.inappmessaging.internal.injection.modules.ForegroundFlowableModule, application: globalAndroid.app.Application): io.reactivex.flowables.ConnectableFlowable<string>;
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
								public providesGrpcChannel(host: string): io.grpc.Channel;
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
								public static providesGrpcChannel(instance: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, host: string): io.grpc.Channel;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule, hostProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<string>): com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesGrpcChannelFactory;
								public get(): io.grpc.Channel;
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
								public static providesServiceHost(instance: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): string;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule): com.google.firebase.inappmessaging.internal.injection.modules.GrpcChannelModule_ProvidesServiceHostFactory;
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
								public constructor(firebaseApp: com.google.firebase.FirebaseApp);
								public providesApiKeyHeaders(): io.grpc.Metadata;
								public static getSignature(packageInfo: globalAndroid.content.pm.PackageManager, e: string): string;
								public providesInAppMessagingSdkServingStub(channel: io.grpc.Channel, metadata: io.grpc.Metadata): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
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
								public get(): io.grpc.Metadata;
								public static providesApiKeyHeaders(instance: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): io.grpc.Metadata;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule): com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesApiKeyHeadersFactory;
								public get(): any;
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, channelProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.grpc.Channel>, metadataProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<io.grpc.Metadata>): com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule_ProvidesInAppMessagingSdkServingStubFactory;
								public get(): any;
								public static providesInAppMessagingSdkServingStub(instance: com.google.firebase.inappmessaging.internal.injection.modules.GrpcClientModule, channel: io.grpc.Channel, metadata: io.grpc.Metadata): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
								public get(): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
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
								public constructor(triggers: com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers);
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
								public get(): io.reactivex.flowables.ConnectableFlowable<string>;
								public static providesProgramaticContextualTriggerStream(instance: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): io.reactivex.flowables.ConnectableFlowable<string>;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggerStreamFactory;
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
								public get(): any;
								public static providesProgramaticContextualTriggers(instance: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public get(): com.google.firebase.inappmessaging.internal.ProgramaticContextualTriggers;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule): com.google.firebase.inappmessaging.internal.injection.modules.ProgrammaticContextualTriggerFlowableModule_ProvidesProgramaticContextualTriggersFactory;
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
								public static CAMPAIGN_CACHE_FILE: string = 'fiam_eligible_campaigns_cache_file';
								public static IMPRESSIONS_STORE_FILE: string = 'fiam_impressions_store_file';
								public static RATE_LIMIT_STORE_FILE: string = 'rate_limit_store_file';
								public providesProtoStorageClientForImpressionStore(application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public providesProtoStorageClientForLimiterStore(application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public constructor();
								public providesProtoStorageClientForCampaign(application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
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
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForCampaignFactory;
								public static providesProtoStorageClientForCampaign(instance: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
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
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForImpressionStoreFactory;
								public static providesProtoStorageClientForImpressionStore(instance: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, applicationProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<globalAndroid.app.Application>): com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule_ProvidesProtoStorageClientForLimiterStoreFactory;
								public get(): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
								public get(): any;
								public static providesProtoStorageClientForLimiterStore(instance: com.google.firebase.inappmessaging.internal.injection.modules.ProtoStorageClientModule, application: globalAndroid.app.Application): com.google.firebase.inappmessaging.internal.ProtoStorageClient;
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule_ProvidesAppForegroundRateLimitFactory;
								public get(): any;
								public static providesAppForegroundRateLimit(instance: com.google.firebase.inappmessaging.internal.injection.modules.RateLimitModule): com.google.firebase.inappmessaging.model.RateLimit;
								public get(): com.google.firebase.inappmessaging.model.RateLimit;
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
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesComputeSchedulerFactory;
								public static providesComputeScheduler(instance: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): io.reactivex.Scheduler;
								public get(): any;
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
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesIOSchedulerFactory;
								public static providesIOScheduler(instance: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): io.reactivex.Scheduler;
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
								public get(): any;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule_ProvidesMainThreadSchedulerFactory;
								public static providesMainThreadScheduler(instance: com.google.firebase.inappmessaging.internal.injection.modules.SchedulerModule): io.reactivex.Scheduler;
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
								public static providesSystemClockModule(instance: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.time.Clock;
								public get(): any;
								public get(): com.google.firebase.inappmessaging.internal.time.Clock;
								public static create(module: com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule): com.google.firebase.inappmessaging.internal.injection.modules.SystemClockModule_ProvidesSystemClockModuleFactory;
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
								public static providesMetricsLoggerClient(
									app: com.google.firebase.FirebaseApp,
									transportFactory: com.google.android.datatransport.TransportFactory,
									analyticsConnector: com.google.firebase.analytics.connector.AnalyticsConnector,
									firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi,
									clock: com.google.firebase.inappmessaging.internal.time.Clock,
									developerListenerManager: com.google.firebase.inappmessaging.internal.DeveloperListenerManager,
									blockingExecutor: java.util.concurrent.Executor
								): com.google.firebase.inappmessaging.internal.MetricsLoggerClient;
								public static create(
									appProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.FirebaseApp>,
									transportFactoryProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.android.datatransport.TransportFactory>,
									analyticsConnectorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>,
									firebaseInstallationsProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.installations.FirebaseInstallationsApi>,
									clockProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.time.Clock>,
									developerListenerManagerProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<com.google.firebase.inappmessaging.internal.DeveloperListenerManager>,
									blockingExecutorProvider: com.google.firebase.inappmessaging.dagger.internal.Provider<java.util.concurrent.Executor>
								): com.google.firebase.inappmessaging.internal.injection.modules.TransportClientModule_ProvidesMetricsLoggerClientFactory;
								public get(): any;
								public get(): com.google.firebase.inappmessaging.internal.MetricsLoggerClient;
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
								public constructor(implementation: {});
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
							public constructor(implementation: { now(): number });
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
							public get(): any;
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
				export module jakarta {
					export module inject {
						export class Provider<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.jakarta.inject.Provider<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.inappmessaging.jakarta.inject.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { get(): T });
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
				export module model {
					export class Action {
						public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Action>;
						public getActionUrl(): string;
						public getButton(): com.google.firebase.inappmessaging.model.Button;
						public hashCode(): number;
						public static builder(): com.google.firebase.inappmessaging.model.Action.Builder;
						public equals(o: any): boolean;
					}
					export module Action {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Action.Builder>;
							public constructor();
							public setActionUrl(actionUrl: string): com.google.firebase.inappmessaging.model.Action.Builder;
							public setButton(button: com.google.firebase.inappmessaging.model.Button): com.google.firebase.inappmessaging.model.Action.Builder;
							public setButton(button: com.google.firebase.inappmessaging.MessagesProto.Button): com.google.firebase.inappmessaging.model.Action.Builder;
							public build(): com.google.firebase.inappmessaging.model.Action;
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
						public equals(this_: any): boolean;
						public limit(): number;
						public hashCode(): number;
						public timeToLiveMillis(): number;
						public toString(): string;
					}
					export module AutoValue_RateLimit {
						export class Builder extends com.google.firebase.inappmessaging.model.RateLimit.Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.AutoValue_RateLimit.Builder>;
							public setLimiterKey(limiterKey: string): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public setLimit(limit: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public setTimeToLiveMillis(timeToLiveMillis: number): com.google.firebase.inappmessaging.model.RateLimit.Builder;
							public build(): com.google.firebase.inappmessaging.model.RateLimit;
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
						public hashCode(): number;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public equals(o: any): boolean;
						public static builder(): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module BannerMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.BannerMessage.Builder>;
							public constructor();
							public setImageData(imageData: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setTitle(title: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setAction(action: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setBody(body: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public setBackgroundHexColor(backgroundHexColor: string): com.google.firebase.inappmessaging.model.BannerMessage.Builder;
							public build(campaignMetadata: com.google.firebase.inappmessaging.model.CampaignMetadata, data: java.util.Map<string, string>): com.google.firebase.inappmessaging.model.BannerMessage;
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
						public static builder(): com.google.firebase.inappmessaging.model.Button.Builder;
						public equals(o: any): boolean;
						public getText(): com.google.firebase.inappmessaging.model.Text;
					}
					export module Button {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Button.Builder>;
							public constructor();
							public setButtonHexColor(buttonHexColor: string): com.google.firebase.inappmessaging.model.Button.Builder;
							public setText(text: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.model.Button.Builder;
							public setText(text: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.Button.Builder;
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
						public constructor(campaignId: string, campaignName: string, isTestMessage: boolean);
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
						public static builder(): com.google.firebase.inappmessaging.model.CardMessage.Builder;
						public hashCode(): number;
						public getSecondaryAction(): com.google.firebase.inappmessaging.model.Action;
						public getPortraitImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getPrimaryAction(): com.google.firebase.inappmessaging.model.Action;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public equals(o: any): boolean;
						public getLandscapeImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module CardMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.CardMessage.Builder>;
							public constructor();
							public setBody(body: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setTitle(title: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setPrimaryAction(primaryAction: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setBackgroundHexColor(backgroundHexColor: string): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setPortraitImageData(portraitImageData: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setSecondaryAction(secondaryAction: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public setLandscapeImageData(landscapeImageData: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.CardMessage.Builder;
							public build(campaignMetadata: com.google.firebase.inappmessaging.model.CampaignMetadata, data: java.util.Map<string, string>): com.google.firebase.inappmessaging.model.CardMessage;
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
						public getBitmapData(): globalAndroid.graphics.Bitmap;
						public hashCode(): number;
						public constructor(imageUrl: string, bitmapData: globalAndroid.graphics.Bitmap);
						public equals(o: any): boolean;
						public getImageUrl(): string;
						public static builder(): com.google.firebase.inappmessaging.model.ImageData.Builder;
					}
					export module ImageData {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageData.Builder>;
							public constructor();
							public setBitmapData(bitmapData: globalAndroid.graphics.Bitmap): com.google.firebase.inappmessaging.model.ImageData.Builder;
							public setImageUrl(imageUrl: string): com.google.firebase.inappmessaging.model.ImageData.Builder;
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
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public equals(o: any): boolean;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module ImageOnlyMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder>;
							public constructor();
							public setAction(action: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
							public build(campaignMetadata: com.google.firebase.inappmessaging.model.CampaignMetadata, data: java.util.Map<string, string>): com.google.firebase.inappmessaging.model.ImageOnlyMessage;
							public setImageData(imageData: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.ImageOnlyMessage.Builder;
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
						public constructor(title: com.google.firebase.inappmessaging.model.Text, body: com.google.firebase.inappmessaging.model.Text, imageUrl: string, imageData: com.google.firebase.inappmessaging.model.ImageData, actionButton: com.google.firebase.inappmessaging.model.Button, action: com.google.firebase.inappmessaging.model.Action, backgroundHexColor: string, campaignId: string, campaignName: string, isTestMessage: java.lang.Boolean, messageType: com.google.firebase.inappmessaging.model.MessageType, data: java.util.Map<string, string>);
						/** @deprecated */
						public getBackgroundHexColor(): string;
						/** @deprecated */
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						/** @deprecated */
						public getCampaignId(): string;
						public getData(): java.util.Map<string, string>;
						/** @deprecated */
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						/** @deprecated */
						public getIsTestMessage(): java.lang.Boolean;
						/** @deprecated */
						public getActionButton(): com.google.firebase.inappmessaging.model.Button;
						/** @deprecated */
						public getAction(): com.google.firebase.inappmessaging.model.Action;
						public constructor(campaignMetadata: com.google.firebase.inappmessaging.model.CampaignMetadata, messageType: com.google.firebase.inappmessaging.model.MessageType, data: java.util.Map<string, string>);
						/** @deprecated */
						public getImageUrl(): string;
						public getCampaignMetadata(): com.google.firebase.inappmessaging.model.CampaignMetadata;
						public getMessageType(): com.google.firebase.inappmessaging.model.MessageType;
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
						public static valueOf(name: string): com.google.firebase.inappmessaging.model.MessageType;
						public static values(): androidNative.Array<com.google.firebase.inappmessaging.model.MessageType>;
					}
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
						public static builder(): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
						public hashCode(): number;
						public getImageData(): com.google.firebase.inappmessaging.model.ImageData;
						public getBody(): com.google.firebase.inappmessaging.model.Text;
						public equals(o: any): boolean;
						public getTitle(): com.google.firebase.inappmessaging.model.Text;
						public getAction(): com.google.firebase.inappmessaging.model.Action;
					}
					export module ModalMessage {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.ModalMessage.Builder>;
							public constructor();
							public setBody(body: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setImageData(imageData: com.google.firebase.inappmessaging.model.ImageData): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setBackgroundHexColor(backgroundHexColor: string): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setAction(action: com.google.firebase.inappmessaging.model.Action): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public setTitle(title: com.google.firebase.inappmessaging.model.Text): com.google.firebase.inappmessaging.model.ModalMessage.Builder;
							public build(campaignMetadata: com.google.firebase.inappmessaging.model.CampaignMetadata, data: java.util.Map<string, string>): com.google.firebase.inappmessaging.model.ModalMessage;
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
						public static decode(in_: com.google.firebase.inappmessaging.MessagesProto.Content, campaignId: string, campaignName: string, isTestMessage: boolean, data: java.util.Map<string, string>): com.google.firebase.inappmessaging.model.InAppMessage;
					}
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
						public get(): any;
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
						public getHexColor(): string;
						public static builder(): com.google.firebase.inappmessaging.model.Text.Builder;
						public equals(o: any): boolean;
						public getText(): string;
					}
					export module Text {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.inappmessaging.model.Text.Builder>;
							public constructor();
							public setHexColor(hexColor: string): com.google.firebase.inappmessaging.model.Text.Builder;
							public build(): com.google.firebase.inappmessaging.model.Text;
							public setText(text: string): com.google.firebase.inappmessaging.model.Text.Builder;
							public setText(text: com.google.firebase.inappmessaging.MessagesProto.Text): com.google.firebase.inappmessaging.model.Text.Builder;
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
						public constructor(inAppMessage: com.google.firebase.inappmessaging.model.InAppMessage, triggeringEvent: string);
						public getTriggeringEvent(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module inappmessaging {
				export module org {
					export module jspecify {
						export module annotations {
							export class Nullable {
								public static class: java.lang.Class<com.google.firebase.inappmessaging.org.jspecify.annotations.Nullable>;
								/**
								 * Constructs a new instance of the com.google.firebase.inappmessaging.org.jspecify.annotations.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
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
			export module internal {
				export class DataCollectionConfigStorage {
					public static class: java.lang.Class<com.google.firebase.internal.DataCollectionConfigStorage>;
					public static DATA_COLLECTION_DEFAULT_ENABLED: string = 'firebase_data_collection_default_enabled';
					public constructor(applicationContext: globalAndroid.content.Context, persistenceKey: string, publisher: com.google.firebase.events.Publisher);
					public isEnabled(): boolean;
					public setEnabled(this_: java.lang.Boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module logger {
				export abstract class Logger {
					public static class: java.lang.Class<com.google.firebase.logger.Logger>;
					public info(format: string, args: androidNative.Array<any>): number;
					public setEnabled(value: boolean): void;
					public error(msg: string, throwable: java.lang.Throwable): number;
					public setMinLevel(value: com.google.firebase.logger.Logger.Level): void;
					public error(format: string, args: androidNative.Array<any>): number;
					public error(msg: string): number;
					public debug(format: string, args: androidNative.Array<any>): number;
					public debug(msg: string): number;
					public getEnabled(): boolean;
					public getMinLevel(): com.google.firebase.logger.Logger.Level;
					public debug(format: string, args: androidNative.Array<any>, throwable: java.lang.Throwable): number;
					public warn(format: string, args: androidNative.Array<any>): number;
					public debug(msg: string, throwable: java.lang.Throwable): number;
					public verbose(msg: string): number;
					public static getLogger(tag: string, enabled: boolean, minLevel: com.google.firebase.logger.Logger.Level): com.google.firebase.logger.Logger;
					public info(msg: string, throwable: java.lang.Throwable): number;
					public warn(msg: string): number;
					public static setupFakeLogger(tag: string, enabled: boolean, minLevel: com.google.firebase.logger.Logger.Level): com.google.firebase.logger.Logger.FakeLogger;
					public verbose(format: string, args: androidNative.Array<any>): number;
					public getTag(): string;
					public info(format: string, args: androidNative.Array<any>, throwable: java.lang.Throwable): number;
					public warn(format: string, args: androidNative.Array<any>, throwable: java.lang.Throwable): number;
					public verbose(msg: string, throwable: java.lang.Throwable): number;
					public verbose(format: string, args: androidNative.Array<any>, throwable: java.lang.Throwable): number;
					public warn(msg: string, throwable: java.lang.Throwable): number;
					public log(param0: com.google.firebase.logger.Logger.Level, param1: string, param2: androidNative.Array<any>, param3: java.lang.Throwable): number;
					public error(format: string, args: androidNative.Array<any>, throwable: java.lang.Throwable): number;
					public info(msg: string): number;
				}
				export module Logger {
					export class AndroidLogger extends com.google.firebase.logger.Logger {
						public static class: java.lang.Class<com.google.firebase.logger.Logger.AndroidLogger>;
						public constructor(tag: string, enabled: boolean, minLevel: com.google.firebase.logger.Logger.Level);
						public log(it: com.google.firebase.logger.Logger.Level, param1: string, param2: androidNative.Array<any>, param3: java.lang.Throwable): number;
					}
					export module AndroidLogger {
						export class WhenMappings {
							public static class: java.lang.Class<com.google.firebase.logger.Logger.AndroidLogger.WhenMappings>;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.logger.Logger.Companion>;
						public getLogger(param0: string, default$iv: boolean, $i$f$getOrPut: com.google.firebase.logger.Logger.Level): com.google.firebase.logger.Logger;
						public setupFakeLogger(this_: string, tag: boolean, enabled: com.google.firebase.logger.Logger.Level): com.google.firebase.logger.Logger.FakeLogger;
					}
					export class FakeLogger extends com.google.firebase.logger.Logger {
						public static class: java.lang.Class<com.google.firebase.logger.Logger.FakeLogger>;
						public constructor(tag: string, enabled: boolean, minLevel: com.google.firebase.logger.Logger.Level);
						public hasLogMessage(it: string): boolean;
						public clearLogMessages(): void;
						public hasLogMessageThat($i$f$any: any): boolean;
						public log(this_: com.google.firebase.logger.Logger.Level, level: string, format: androidNative.Array<any>, args: java.lang.Throwable): number;
					}
					export class Level {
						public static class: java.lang.Class<com.google.firebase.logger.Logger.Level>;
						public static VERBOSE: com.google.firebase.logger.Logger.Level;
						public static DEBUG: com.google.firebase.logger.Logger.Level;
						public static INFO: com.google.firebase.logger.Logger.Level;
						public static WARN: com.google.firebase.logger.Logger.Level;
						public static ERROR: com.google.firebase.logger.Logger.Level;
						public getPriority$com_google_firebase_firebase_common(): number;
						public static getEntries(): any;
						public static valueOf(value: string): com.google.firebase.logger.Logger.Level;
						public static values(): androidNative.Array<com.google.firebase.logger.Logger.Level>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export class AutoValue_LibraryVersion extends com.google.firebase.platforminfo.LibraryVersion {
					public static class: java.lang.Class<com.google.firebase.platforminfo.AutoValue_LibraryVersion>;
					public getVersion(): string;
					public toString(): string;
					public getLibraryName(): string;
					public equals(this_: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export class DefaultUserAgentPublisher extends com.google.firebase.platforminfo.UserAgentPublisher {
					public static class: java.lang.Class<com.google.firebase.platforminfo.DefaultUserAgentPublisher>;
					public getUserAgent(): string;
					public static component(): com.google.firebase.components.Component<com.google.firebase.platforminfo.UserAgentPublisher>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export class GlobalLibraryVersionRegistrar {
					public static class: java.lang.Class<com.google.firebase.platforminfo.GlobalLibraryVersionRegistrar>;
					public registerVersion(sdkName: string, version: string): void;
					public static getInstance(): com.google.firebase.platforminfo.GlobalLibraryVersionRegistrar;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export class KotlinDetector {
					public static class: java.lang.Class<com.google.firebase.platforminfo.KotlinDetector>;
					public static detectVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export abstract class LibraryVersion {
					public static class: java.lang.Class<com.google.firebase.platforminfo.LibraryVersion>;
					public getVersion(): string;
					public getLibraryName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export class LibraryVersionComponent {
					public static class: java.lang.Class<com.google.firebase.platforminfo.LibraryVersionComponent>;
					public static fromContext(sdkName: string, extractor: com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor<globalAndroid.content.Context>): com.google.firebase.components.Component<any>;
					public static create(sdkName: string, version: string): com.google.firebase.components.Component<any>;
				}
				export module LibraryVersionComponent {
					export class VersionExtractor<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.platforminfo.LibraryVersionComponent$VersionExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { extract(param0: T): string });
						public constructor();
						public extract(param0: T): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module platforminfo {
				export class UserAgentPublisher {
					public static class: java.lang.Class<com.google.firebase.platforminfo.UserAgentPublisher>;
					/**
					 * Constructs a new instance of the com.google.firebase.platforminfo.UserAgentPublisher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getUserAgent(): string });
					public constructor();
					public getUserAgent(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module provider {
				export class FirebaseInitProvider {
					public static class: java.lang.Class<com.google.firebase.provider.FirebaseInitProvider>;
					public static isCurrentlyInitializing(): boolean;
					public getType(uri: globalAndroid.net.Uri): string;
					public attachInfo(context: globalAndroid.content.Context, info: globalAndroid.content.pm.ProviderInfo): void;
					public constructor();
					public onCreate(): boolean;
					public delete(uri: globalAndroid.net.Uri, selection: string, selectionArgs: androidNative.Array<string>): number;
					public update(uri: globalAndroid.net.Uri, values: globalAndroid.content.ContentValues, selection: string, selectionArgs: androidNative.Array<string>): number;
					public query(uri: globalAndroid.net.Uri, projection: androidNative.Array<string>, selection: string, selectionArgs: androidNative.Array<string>, sortOrder: string): globalAndroid.database.Cursor;
					public static getStartupTime(): com.google.firebase.StartupTime;
					public insert(uri: globalAndroid.net.Uri, values: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module tracing {
				export class ComponentMonitor {
					public static class: java.lang.Class<com.google.firebase.tracing.ComponentMonitor>;
					public constructor();
					public processRegistrar(name: com.google.firebase.components.ComponentRegistrar): java.util.List<com.google.firebase.components.Component<any>>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module tracing {
				export class FirebaseTrace {
					public static class: java.lang.Class<com.google.firebase.tracing.FirebaseTrace>;
					public static pushTrace(name: string): void;
					public static popTrace(): void;
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
							public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
						}
						export module CampaignProto {
							export class ExperimentalCampaignPayload extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload, com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number = 1;
								public static EXPERIMENT_PAYLOAD_FIELD_NUMBER: number = 2;
								public static CAMPAIGN_START_TIME_MILLIS_FIELD_NUMBER: number = 3;
								public static CAMPAIGN_END_TIME_MILLIS_FIELD_NUMBER: number = 4;
								public static CAMPAIGN_NAME_FIELD_NUMBER: number = 5;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getCampaignEndTimeMillis(): number;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getCampaignName(): string;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public getCampaignId(): string;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public getCampaignStartTimeMillis(): number;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public hasExperimentPayload(): boolean;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload>;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module ExperimentalCampaignPayload {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload, com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayloadOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder>;
									public mergeExperimentPayload(value: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public clearCampaignName(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignStartTimeMillis(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignId(value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignEndTimeMillis(): number;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setExperimentPayload(builderForValue: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setExperimentPayload(value: com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignName(value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignId(): string;
									public clearExperimentPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public getCampaignNameBytes(): com.google.protobuf.ByteString;
									public hasExperimentPayload(): boolean;
									public setCampaignEndTimeMillis(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
									public setCampaignNameBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder;
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
								public constructor(implementation: { getCampaignId(): string; getCampaignIdBytes(): com.google.protobuf.ByteString; hasExperimentPayload(): boolean; getExperimentPayload(): com.google.firebase.inappmessaging.ExperimentPayloadProto.ExperimentPayload; getCampaignStartTimeMillis(): number; getCampaignEndTimeMillis(): number; getCampaignName(): string; getCampaignNameBytes(): com.google.protobuf.ByteString });
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
							export class ExperimentalCampaignRollout extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout, com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout>;
								public static EXPERIMENT_ID_FIELD_NUMBER: number = 1;
								public static SELECTED_VARIANT_INDEX_FIELD_NUMBER: number = 2;
								public static PRIORITY_FIELD_NUMBER: number = 3;
								public static START_TIME_FIELD_NUMBER: number = 4;
								public static END_TIME_FIELD_NUMBER: number = 5;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getExperimentId(): string;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public hasEndTime(): boolean;
								public hasStartTime(): boolean;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public hasPriority(): boolean;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout>;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getSelectedVariantIndex(): number;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout;
								public getExperimentIdBytes(): com.google.protobuf.ByteString;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module ExperimentalCampaignRollout {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout, com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder>;
									public getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public setPriority(value: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime;
									public hasEndTime(): boolean;
									public getExperimentId(): string;
									public clearSelectedVariantIndex(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergeStartTime(value: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergeEndTime(value: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setExperimentId(value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setStartTime(value: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public mergePriority(value: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setEndTime(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public clearExperimentId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setEndTime(value: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setPriority(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setExperimentIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public hasPriority(): boolean;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setStartTime(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public getExperimentIdBytes(): com.google.protobuf.ByteString;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public getSelectedVariantIndex(): number;
									public clearStartTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public hasStartTime(): boolean;
									public clearEndTime(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
									public setSelectedVariantIndex(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRollout.Builder;
								}
							}
							export class ExperimentalCampaignRolloutOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignRolloutOrBuilder>;
								/**
								 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.CampaignProto$ExperimentalCampaignRolloutOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { getExperimentId(): string; getExperimentIdBytes(): com.google.protobuf.ByteString; getSelectedVariantIndex(): number; hasPriority(): boolean; getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority; hasStartTime(): boolean; getStartTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime; hasEndTime(): boolean; getEndTime(): com.google.firebase.inappmessaging.CommonTypesProto.CampaignTime });
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
							export class ThickContent extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent, com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public static VANILLA_PAYLOAD_FIELD_NUMBER: number = 1;
								public static EXPERIMENTAL_PAYLOAD_FIELD_NUMBER: number = 2;
								public static CONTENT_FIELD_NUMBER: number = 3;
								public static PRIORITY_FIELD_NUMBER: number = 4;
								public static TRIGGERING_CONDITIONS_FIELD_NUMBER: number = 5;
								public static IS_TEST_CAMPAIGN_FIELD_NUMBER: number = 7;
								public static DATA_BUNDLE_FIELD_NUMBER: number = 8;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getDataBundleCount(): number;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
								public getIsTestCampaign(): boolean;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public getTriggeringConditionsCount(): number;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								/** @deprecated */
								public getDataBundle(): java.util.Map<string, string>;
								public getDataBundleMap(): java.util.Map<string, string>;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public hasContent(): boolean;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getDataBundleOrThrow(key: string): string;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public containsDataBundle(key: string): boolean;
								public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								public hasPriority(): boolean;
								public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
								public hasExperimentalPayload(): boolean;
								public getDataBundleOrDefault(key: string, defaultValue: string): string;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
								public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
								public getTriggeringConditionsOrBuilderList(): java.util.List<any>;
								public getTriggeringConditionsOrBuilder(index: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringConditionOrBuilder;
								public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public hasVanillaPayload(): boolean;
								public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public getTriggeringConditions(index: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
								public getDataBundleOrDefault(param0: string, param1: string): string;
								public getDataBundleOrThrow(param0: string): string;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public containsDataBundle(param0: string): boolean;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module ThickContent {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent, com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder>;
									public getTriggeringConditions(index: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									public setContent(value: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setTriggeringConditions(index: number, value: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addAllTriggeringConditions(values: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getPayloadCase(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public removeTriggeringConditions(index: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getContent(): com.google.firebase.inappmessaging.MessagesProto.Content;
									public setContent(builderForValue: com.google.firebase.inappmessaging.MessagesProto.Content.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setTriggeringConditions(index: number, builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(index: number, value: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearDataBundle(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public removeDataBundle(key: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeContent(value: com.google.firebase.inappmessaging.MessagesProto.Content): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									/** @deprecated */
									public getDataBundle(): java.util.Map<string, string>;
									public setVanillaPayload(builderForValue: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public putDataBundle(key: string, value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearIsTestCampaign(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setPriority(value: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleCount(): number;
									public mergeExperimentalPayload(value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public putAllDataBundle(values: java.util.Map<string, string>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleOrDefault(key: string, defaultValue: string): string;
									public clearPriority(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getTriggeringConditionsList(): java.util.List<com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition>;
									public setExperimentalPayload(builderForValue: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public hasContent(): boolean;
									public mergePriority(value: com.google.firebase.inappmessaging.CommonTypesProto.Priority): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public mergeVanillaPayload(value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public containsDataBundle(key: string): boolean;
									public getDataBundleOrThrow(param0: string): string;
									public hasExperimentalPayload(): boolean;
									public setVanillaPayload(value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setPriority(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.Priority.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public hasPriority(): boolean;
									public addTriggeringConditions(builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getExperimentalPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload;
									public clearContent(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleMap(): java.util.Map<string, string>;
									public getIsTestCampaign(): boolean;
									public setIsTestCampaign(value: boolean): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getTriggeringConditions(param0: number): com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition;
									public clearVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getPriority(): com.google.firebase.inappmessaging.CommonTypesProto.Priority;
									public getTriggeringConditionsCount(): number;
									public clearTriggeringConditions(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(index: number, builderForValue: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition.Builder): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public setExperimentalPayload(value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ExperimentalCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public addTriggeringConditions(value: com.google.firebase.inappmessaging.CommonTypesProto.TriggeringCondition): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public clearPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder;
									public getDataBundleOrThrow(key: string): string;
									public containsDataBundle(param0: string): boolean;
									public hasVanillaPayload(): boolean;
									public getDataBundleOrDefault(param0: string, param1: string): string;
									public getVanillaPayload(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								}
								export class DataBundleDefaultEntryHolder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.DataBundleDefaultEntryHolder>;
								}
								export class PayloadCase {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase>;
									public static VANILLA_PAYLOAD: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static EXPERIMENTAL_PAYLOAD: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static PAYLOAD_NOT_SET: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public getNumber(): number;
									public static valueOf(name: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									/** @deprecated */
									public static valueOf(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static forNumber(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase;
									public static values(): androidNative.Array<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.PayloadCase>;
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
									getDataBundle(): java.util.Map<string, string>;
									getDataBundleMap(): java.util.Map<string, string>;
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
								public getDataBundle(): java.util.Map<string, string>;
								public getDataBundleMap(): java.util.Map<string, string>;
								public hasContent(): boolean;
								public getDataBundleOrDefault(param0: string, param1: string): string;
								public getDataBundleOrThrow(param0: string): string;
								public containsDataBundle(param0: string): boolean;
							}
							export class VanillaCampaignPayload extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload, com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number = 1;
								public static EXPERIMENTAL_CAMPAIGN_ID_FIELD_NUMBER: number = 2;
								public static CAMPAIGN_START_TIME_MILLIS_FIELD_NUMBER: number = 3;
								public static CAMPAIGN_END_TIME_MILLIS_FIELD_NUMBER: number = 4;
								public static CAMPAIGN_NAME_FIELD_NUMBER: number = 5;
								public getCampaignEndTimeMillis(): number;
								public getCampaignName(): string;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getExperimentalCampaignId(): string;
								public getCampaignNameBytes(): com.google.protobuf.ByteString;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getCampaignId(): string;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getCampaignStartTimeMillis(): number;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload>;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module VanillaCampaignPayload {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload, com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder> implements com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayloadOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder>;
									public clearCampaignStartTimeMillis(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignName(value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignEndTimeMillis(): number;
									public setCampaignId(value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignStartTimeMillis(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignEndTimeMillis(value: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public clearExperimentalCampaignId(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setCampaignNameBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public setExperimentalCampaignIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getCampaignId(): string;
									public getCampaignNameBytes(): com.google.protobuf.ByteString;
									public clearCampaignName(): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
									public getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString;
									public setExperimentalCampaignId(value: string): com.google.internal.firebase.inappmessaging.v1.CampaignProto.VanillaCampaignPayload.Builder;
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
								public constructor(implementation: { getCampaignId(): string; getCampaignIdBytes(): com.google.protobuf.ByteString; getExperimentalCampaignId(): string; getExperimentalCampaignIdBytes(): com.google.protobuf.ByteString; getCampaignStartTimeMillis(): number; getCampaignEndTimeMillis(): number; getCampaignName(): string; getCampaignNameBytes(): com.google.protobuf.ByteString });
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
							export class CampaignImpression extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression, com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static CAMPAIGN_ID_FIELD_NUMBER: number = 1;
								public static IMPRESSION_TIMESTAMP_MILLIS_FIELD_NUMBER: number = 2;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getImpressionTimestampMillis(): number;
								public getCampaignId(): string;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public getCampaignIdBytes(): com.google.protobuf.ByteString;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module CampaignImpression {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression, com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder>;
									public getImpressionTimestampMillis(): number;
									public getCampaignId(): string;
									public setCampaignId(value: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public setImpressionTimestampMillis(value: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public clearImpressionTimestampMillis(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
									public getCampaignIdBytes(): com.google.protobuf.ByteString;
									public setCampaignIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder;
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
							export class CampaignImpressionList extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList, com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
								public static ALREADY_SEEN_CAMPAIGNS_FIELD_NUMBER: number = 1;
								public getAlreadySeenCampaignsCount(): number;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList>;
								public getAlreadySeenCampaignsOrBuilderList(): java.util.List<any>;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
								public getAlreadySeenCampaignsOrBuilder(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public getAlreadySeenCampaigns(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module CampaignImpressionList {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList, com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionListOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder>;
									public setAlreadySeenCampaigns(index: number, value: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAllAlreadySeenCampaigns(values: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaigns(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public addAlreadySeenCampaigns(value: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public removeAlreadySeenCampaigns(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public setAlreadySeenCampaigns(index: number, builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public clearAlreadySeenCampaigns(): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public addAlreadySeenCampaigns(index: number, builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
									public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									public getAlreadySeenCampaignsCount(): number;
									public addAlreadySeenCampaigns(index: number, value: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionList.Builder;
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
								public constructor(implementation: { getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>; getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression; getAlreadySeenCampaignsCount(): number });
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
								public constructor(implementation: { getCampaignId(): string; getCampaignIdBytes(): com.google.protobuf.ByteString; getImpressionTimestampMillis(): number });
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
							export class ClientAppInfo extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo, com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo>;
								public static GMP_APP_ID_FIELD_NUMBER: number = 1;
								public static APP_INSTANCE_ID_FIELD_NUMBER: number = 2;
								public static APP_INSTANCE_ID_TOKEN_FIELD_NUMBER: number = 3;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
								public getAppInstanceId(): string;
								public getAppInstanceIdToken(): string;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo>;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getGmpAppIdBytes(): com.google.protobuf.ByteString;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
								public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getGmpAppId(): string;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module ClientAppInfo {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo, com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfoOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder>;
									public clearGmpAppId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdToken(): string;
									public setAppInstanceIdTokenBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setGmpAppId(value: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setGmpAppIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setAppInstanceIdBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString;
									public setAppInstanceId(value: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getGmpAppIdBytes(): com.google.protobuf.ByteString;
									public clearAppInstanceIdToken(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public setAppInstanceIdToken(value: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public clearAppInstanceId(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder;
									public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
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
								public constructor(implementation: { getGmpAppId(): string; getGmpAppIdBytes(): com.google.protobuf.ByteString; getAppInstanceId(): string; getAppInstanceIdBytes(): com.google.protobuf.ByteString; getAppInstanceIdToken(): string; getAppInstanceIdTokenBytes(): com.google.protobuf.ByteString });
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
							export class FetchEligibleCampaignsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest>;
								public static PROJECT_NUMBER_FIELD_NUMBER: number = 1;
								public static REQUESTING_CLIENT_APP_FIELD_NUMBER: number = 2;
								public static ALREADY_SEEN_CAMPAIGNS_FIELD_NUMBER: number = 3;
								public static CLIENT_SIGNALS_FIELD_NUMBER: number = 4;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public hasRequestingClientApp(): boolean;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
								public getAlreadySeenCampaigns(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getProjectNumberBytes(): com.google.protobuf.ByteString;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getAlreadySeenCampaignsCount(): number;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
								public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
								public getAlreadySeenCampaignsOrBuilderList(): java.util.List<any>;
								public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public getAlreadySeenCampaignsOrBuilder(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpressionOrBuilder;
								public getProjectNumber(): string;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest>;
								public hasClientSignals(): boolean;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module FetchEligibleCampaignsRequest {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequestOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder>;
									public getAlreadySeenCampaigns(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public setClientSignals(builderForValue: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getProjectNumber(): string;
									public clearProjectNumber(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getProjectNumberBytes(): com.google.protobuf.ByteString;
									public getClientSignals(): com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals;
									public setAlreadySeenCampaigns(index: number, builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setProjectNumberBytes(value: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(index: number, value: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public hasClientSignals(): boolean;
									public mergeClientSignals(value: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo;
									public setRequestingClientApp(builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public removeAlreadySeenCampaigns(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public hasRequestingClientApp(): boolean;
									public setClientSignals(value: com.google.developers.mobile.targeting.proto.ClientSignalsProto.ClientSignals): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setAlreadySeenCampaigns(index: number, value: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getAlreadySeenCampaigns(param0: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression;
									public setProjectNumber(value: string): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(index: number, builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public clearClientSignals(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(builderForValue: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAllAlreadySeenCampaigns(values: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public clearAlreadySeenCampaigns(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public getAlreadySeenCampaignsList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression>;
									public getAlreadySeenCampaignsCount(): number;
									public clearRequestingClientApp(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public addAlreadySeenCampaigns(value: com.google.internal.firebase.inappmessaging.v1.sdkserving.CampaignImpression): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public setRequestingClientApp(value: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
									public mergeRequestingClientApp(value: com.google.internal.firebase.inappmessaging.v1.sdkserving.ClientAppInfo): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest.Builder;
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
							export class FetchEligibleCampaignsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse, com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder {
								public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static MESSAGES_FIELD_NUMBER: number = 1;
								public static EXPIRATION_EPOCH_TIMESTAMP_MILLIS_FIELD_NUMBER: number = 2;
								public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesOrBuilder(index: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContentOrBuilder;
								public static parseFrom(data: androidNative.Array<number>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesOrBuilderList(): java.util.List<any>;
								public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static newBuilder(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								public static parseFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
								public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static getDefaultInstance(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(data: java.nio.ByteBuffer): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public getMessagesCount(): number;
								public getExpirationEpochTimestampMillis(): number;
								public static parser(): com.google.protobuf.Parser<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public getMessages(index: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
								public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseDelimitedFrom(input: java.io.InputStream): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(data: com.google.protobuf.ByteString): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								public static newBuilder(prototype: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
								public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
							}
							export module FetchEligibleCampaignsResponse {
								export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse, com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder> implements com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponseOrBuilder {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder>;
									public getMessages(index: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
									public addMessages(value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public clearMessages(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public setMessages(index: number, value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(index: number, value: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>;
									public clearExpirationEpochTimestampMillis(): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent;
									public removeMessages(index: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getExpirationEpochTimestampMillis(): number;
									public addMessages(index: number, builderForValue: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addAllMessages(values: java.lang.Iterable<any>): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public setExpirationEpochTimestampMillis(value: number): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public getMessagesCount(): number;
									public setMessages(index: number, builderForValue: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
									public addMessages(builderForValue: com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent.Builder): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse.Builder;
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
								public constructor(implementation: { getMessagesList(): java.util.List<com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent>; getMessages(param0: number): com.google.internal.firebase.inappmessaging.v1.CampaignProto.ThickContent; getMessagesCount(): number; getExpirationEpochTimestampMillis(): number });
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
								public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
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
								public static SERVICE_NAME: string = 'google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServing';
								public static getServiceDescriptor(): io.grpc.ServiceDescriptor;
								public static newFutureStub(channel: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub;
								public static getFetchEligibleCampaignsMethod(): io.grpc.MethodDescriptor<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
								public static newStub(channel: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub;
								public static bindService(service: com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.AsyncService): io.grpc.ServerServiceDefinition;
								public static newBlockingStub(channel: io.grpc.Channel): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
							}
							export module InAppMessagingSdkServingGrpc {
								export class AsyncService {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.AsyncService>;
									/**
									 * Constructs a new instance of the com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc$AsyncService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { fetchEligibleCampaigns(request: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, responseObserver: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void });
									public constructor();
									public fetchEligibleCampaigns(request: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, responseObserver: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
								}
								export class InAppMessagingSdkServingBlockingStub extends io.grpc.stub.AbstractBlockingStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub>;
									public build(channel: io.grpc.Channel, callOptions: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingBlockingStub;
									public fetchEligibleCampaigns(request: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse;
								}
								export class InAppMessagingSdkServingFutureStub extends io.grpc.stub.AbstractFutureStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub>;
									public fetchEligibleCampaigns(request: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest): com.google.common.util.concurrent.ListenableFuture<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>;
									public build(channel: io.grpc.Channel, callOptions: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingFutureStub;
								}
								export abstract class InAppMessagingSdkServingImplBase extends com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.AsyncService {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingImplBase>;
									public constructor();
									public bindService(): io.grpc.ServerServiceDefinition;
									public fetchEligibleCampaigns(request: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, responseObserver: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
								}
								export class InAppMessagingSdkServingStub extends io.grpc.stub.AbstractAsyncStub<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub> {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub>;
									public build(channel: io.grpc.Channel, callOptions: io.grpc.CallOptions): com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.InAppMessagingSdkServingStub;
									public fetchEligibleCampaigns(request: com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsRequest, responseObserver: io.grpc.stub.StreamObserver<com.google.internal.firebase.inappmessaging.v1.sdkserving.FetchEligibleCampaignsResponse>): void;
								}
								export class MethodHandlers<Req, Resp> extends java.lang.Object {
									public static class: java.lang.Class<com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.MethodHandlers<any, any>>;
									public invoke(request: Req, responseObserver: io.grpc.stub.StreamObserver<Resp>): void;
									public invoke(responseObserver: io.grpc.stub.StreamObserver<Resp>): io.grpc.stub.StreamObserver<Req>;
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
//com.google.firebase.concurrent.DelegatingScheduledFuture:1
//com.google.firebase.concurrent.DelegatingScheduledFuture.Completer:1
//com.google.firebase.concurrent.DelegatingScheduledFuture.Resolver:1
//com.google.firebase.inappmessaging.dagger.Lazy:1
//com.google.firebase.inappmessaging.dagger.internal.DoubleCheck:1
//com.google.firebase.inappmessaging.dagger.internal.Factory:1
//com.google.firebase.inappmessaging.dagger.internal.InstanceFactory:1
//com.google.firebase.inappmessaging.dagger.internal.Provider:1
//com.google.firebase.inappmessaging.display.dagger.Lazy:1
//com.google.firebase.inappmessaging.display.dagger.internal.DoubleCheck:1
//com.google.firebase.inappmessaging.display.dagger.internal.Factory:1
//com.google.firebase.inappmessaging.display.dagger.internal.MapBuilder:2
//com.google.firebase.inappmessaging.display.dagger.internal.Provider:1
//com.google.firebase.inappmessaging.display.jakarta.inject.Provider:1
//com.google.firebase.inappmessaging.internal.DeveloperListenerManager.ExecutorAndListener:1
//com.google.firebase.inappmessaging.jakarta.inject.Provider:1
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1
//com.google.internal.firebase.inappmessaging.v1.sdkserving.InAppMessagingSdkServingGrpc.MethodHandlers:2
