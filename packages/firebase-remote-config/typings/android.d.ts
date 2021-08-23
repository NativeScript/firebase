declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.BuildConfig>;
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
			export module remoteconfig {
				export class FirebaseRemoteConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfig>;
					public static DEFAULT_VALUE_FOR_STRING: string;
					public static DEFAULT_VALUE_FOR_LONG: number;
					public static DEFAULT_VALUE_FOR_DOUBLE: number;
					public static DEFAULT_VALUE_FOR_BOOLEAN: boolean;
					public static DEFAULT_VALUE_FOR_BYTE_ARRAY: native.Array<number>;
					public static VALUE_SOURCE_STATIC: number;
					public static VALUE_SOURCE_DEFAULT: number;
					public static VALUE_SOURCE_REMOTE: number;
					public static LAST_FETCH_STATUS_SUCCESS: number;
					public static LAST_FETCH_STATUS_NO_FETCH_YET: number;
					public static LAST_FETCH_STATUS_FAILURE: number;
					public static LAST_FETCH_STATUS_THROTTLED: number;
					public static TAG: string;
					public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
					public static getInstance(): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
					public ensureInitialized(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>;
					public getString(param0: string): string;
					public fetchAndActivate(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public activate(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public getKeysByPrefix(param0: string): java.util.Set<string>;
					public setConfigSettingsAsync(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getBoolean(param0: string): boolean;
					public fetch(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setDefaultsAsync(param0: java.util.Map<string,any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public fetch(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getValue(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
					public setDefaultsAsync(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getDouble(param0: string): number;
					public reset(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getLong(param0: string): number;
					public getAll(): java.util.Map<string,com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigClientException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigClientException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigFetchThrottledException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchThrottledException>;
					public getThrottleEndTimeMillis(): number;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: string, param1: number);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigInfo {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFetchTimeMillis(): number;
						getLastFetchStatus(): number;
						getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					});
					public constructor();
					public getFetchTimeMillis(): number;
					public getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					public getLastFetchStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigServerException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigServerException>;
					public getHttpStatusCode(): number;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: number, param1: string, param2: java.lang.Throwable);
					public constructor(param0: number, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigSettings {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings>;
					public getMinimumFetchIntervalInSeconds(): number;
					public getFetchTimeoutInSeconds(): number;
					public toBuilder(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
				}
				export module FirebaseRemoteConfigSettings {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder>;
						public setMinimumFetchIntervalInSeconds(param0: number): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public constructor();
						public getFetchTimeoutInSeconds(): number;
						public getMinimumFetchIntervalInSeconds(): number;
						public setFetchTimeoutInSeconds(param0: number): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public build(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class FirebaseRemoteConfigValue {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.FirebaseRemoteConfigValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						asLong(): number;
						asDouble(): number;
						asString(): string;
						asByteArray(): native.Array<number>;
						asBoolean(): boolean;
						getSource(): number;
					});
					public constructor();
					public asLong(): number;
					public asBoolean(): boolean;
					public getSource(): number;
					public asByteArray(): native.Array<number>;
					public asString(): string;
					public asDouble(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class RemoteConfigComponent {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigComponent>;
					public static ACTIVATE_FILE_NAME: string;
					public static FETCH_FILE_NAME: string;
					public static DEFAULTS_FILE_NAME: string;
					public static CONNECTION_TIMEOUT_IN_SECONDS: number;
					public static DEFAULT_NAMESPACE: string;
					public setCustomHeaders(param0: java.util.Map<string,string>): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.ExecutorService, param2: com.google.firebase.FirebaseApp, param3: com.google.firebase.installations.FirebaseInstallationsApi, param4: com.google.firebase.abt.FirebaseABTesting, param5: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param6: boolean);
					public get(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class RemoteConfigConstants {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants>;
					public static FETCH_REGEX_URL: string;
				}
				export module RemoteConfigConstants {
					export class ExperimentDescriptionFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.ExperimentDescriptionFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$ExperimentDescriptionFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static VARIANT_ID: string;
						public static EXPERIMENT_ID: string;
					}
					export class RequestFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.RequestFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$RequestFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static APP_ID: string;
						public static TIME_ZONE: string;
						public static LANGUAGE_CODE: string;
						public static INSTANCE_ID_TOKEN: string;
						public static PLATFORM_VERSION: string;
						public static SDK_VERSION: string;
						public static APP_BUILD: string;
						public static ANALYTICS_USER_PROPERTIES: string;
						public static PACKAGE_NAME: string;
						public static APP_VERSION: string;
						public static INSTANCE_ID: string;
						public static COUNTRY_CODE: string;
					}
					export class ResponseFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.ResponseFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$ResponseFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static PERSONALIZATION_METADATA: string;
						public static STATE: string;
						public static EXPERIMENT_DESCRIPTIONS: string;
						public static ENTRIES: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class RemoteConfigRegistrar {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigRegistrar>;
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
			export module remoteconfig {
				export module internal {
					export class Code {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.Code>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.internal.Code interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static DEADLINE_EXCEEDED: number;
						public static OUT_OF_RANGE: number;
						public static NOT_FOUND: number;
						public static UNAUTHENTICATED: number;
						public static RESOURCE_EXHAUSTED: number;
						public static FAILED_PRECONDITION: number;
						public static ALREADY_EXISTS: number;
						public static UNIMPLEMENTED: number;
						public static UNAVAILABLE: number;
						public static INTERNAL: number;
						public static UNKNOWN: number;
						public static ABORTED: number;
						public static OK: number;
						public static INVALID_ARGUMENT: number;
						public static PERMISSION_DENIED: number;
						public static CANCELLED: number;
						public static DATA_LOSS: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigCacheClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigCacheClient>;
						public getBlocking(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						public static getInstance(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.remoteconfig.internal.ConfigStorageClient): com.google.firebase.remoteconfig.internal.ConfigCacheClient;
						public put(param0: com.google.firebase.remoteconfig.internal.ConfigContainer, param1: boolean): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public get(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public clear(): void;
						public put(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public static clearInstancesForTest(): void;
					}
					export module ConfigCacheClient {
						export class AwaitListener<TResult>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigCacheClient.AwaitListener<any>>;
							public onFailure(param0: java.lang.Exception): void;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public await(): void;
							public onSuccess(param0: TResult): void;
							public onCanceled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigContainer {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public getFetchTime(): java.util.Date;
						public static newBuilder(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						public getAbtExperiments(): org.json.JSONArray;
						public getConfigs(): org.json.JSONObject;
						public static newBuilder(): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPersonalizationMetadata(): org.json.JSONObject;
						public toString(): string;
					}
					export module ConfigContainer {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigContainer.Builder>;
							public constructor(param0: com.google.firebase.remoteconfig.internal.ConfigContainer);
							public withFetchTime(param0: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public build(): com.google.firebase.remoteconfig.internal.ConfigContainer;
							public withPersonalizationMetadata(param0: org.json.JSONObject): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public replaceConfigsWith(param0: org.json.JSONObject): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public withAbtExperiments(param0: org.json.JSONArray): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public replaceConfigsWith(param0: java.util.Map<string,string>): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigFetchHandler {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler>;
						public static DEFAULT_MINIMUM_FETCH_INTERVAL_IN_SECONDS: number;
						public fetch(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
						public constructor(param0: com.google.firebase.installations.FirebaseInstallationsApi, param1: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, param2: java.util.concurrent.Executor, param3: com.google.android.gms.common.util.Clock, param4: java.util.Random, param5: com.google.firebase.remoteconfig.internal.ConfigCacheClient, param6: com.google.firebase.remoteconfig.internal.ConfigFetchHttpClient, param7: com.google.firebase.remoteconfig.internal.ConfigMetadataClient, param8: java.util.Map<string,string>);
						public getAnalyticsConnector(): com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>;
						public fetch(param0: number): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
					}
					export module ConfigFetchHandler {
						export class FetchResponse {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
							public static forBackendUpdatesFetched(param0: com.google.firebase.remoteconfig.internal.ConfigContainer, param1: string): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public static forBackendHasNoUpdates(param0: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public static forLocalStorageUsed(param0: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public getFetchedConfigs(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						}
						export module FetchResponse {
							export class Status {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse.Status>;
								/**
								 * Constructs a new instance of the com.google.firebase.remoteconfig.internal.ConfigFetchHandler$FetchResponse$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static BACKEND_HAS_NO_UPDATES: number;
								public static BACKEND_UPDATES_FETCHED: number;
								public static LOCAL_STORAGE_USED: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigFetchHttpClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHttpClient>;
						public getReadTimeoutInSeconds(): number;
						public getConnectTimeoutInSeconds(): number;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: number, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigGetParameterHandler {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigGetParameterHandler>;
						public static FRC_BYTE_ARRAY_ENCODING: java.nio.charset.Charset;
						public getKeysByPrefix(param0: string): java.util.Set<string>;
						public getDouble(param0: string): number;
						public getValue(param0: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
						public getByteArray(param0: string): native.Array<number>;
						public getLong(param0: string): number;
						public getAll(): java.util.Map<string,com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
						public addListener(param0: com.google.android.gms.common.util.BiConsumer<string,com.google.firebase.remoteconfig.internal.ConfigContainer>): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.firebase.remoteconfig.internal.ConfigCacheClient, param2: com.google.firebase.remoteconfig.internal.ConfigCacheClient);
						public getString(param0: string): string;
						public getBoolean(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigMetadataClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigMetadataClient>;
						public static LAST_FETCH_TIME_IN_MILLIS_NO_FETCH_YET: number;
						public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
						public getFetchTimeoutInSeconds(): number;
						public getMinimumFetchIntervalInSeconds(): number;
						public setConfigSettingsWithoutWaitingOnDiskWrite(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
						public constructor(param0: globalAndroid.content.SharedPreferences);
						public clear(): void;
						public setConfigSettings(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
					}
					export module ConfigMetadataClient {
						export class BackoffMetadata {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigMetadataClient.BackoffMetadata>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class ConfigStorageClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigStorageClient>;
						public clear(): java.lang.Void;
						public read(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						public write(param0: com.google.firebase.remoteconfig.internal.ConfigContainer): java.lang.Void;
						public static getInstance(param0: globalAndroid.content.Context, param1: string): com.google.firebase.remoteconfig.internal.ConfigStorageClient;
						public static clearInstancesForTest(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class DefaultsXmlParser {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.DefaultsXmlParser>;
						public constructor();
						public static getDefaultsFromXml(param0: globalAndroid.content.Context, param1: number): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class FirebaseRemoteConfigInfoImpl extends com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl>;
						public getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings;
						public getLastFetchStatus(): number;
						public getFetchTimeMillis(): number;
					}
					export module FirebaseRemoteConfigInfoImpl {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl.Builder>;
							public withLastSuccessfulFetchTimeInMillis(param0: number): com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl.Builder;
							public build(): com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class FirebaseRemoteConfigValueImpl extends com.google.firebase.remoteconfig.FirebaseRemoteConfigValue {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigValueImpl>;
						public asDouble(): number;
						public getSource(): number;
						public asLong(): number;
						public asByteArray(): native.Array<number>;
						public asString(): string;
						public asBoolean(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export module internal {
					export class Personalization {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.Personalization>;
						public static ANALYTICS_ORIGIN_PERSONALIZATION: string;
						public static EXTERNAL_EVENT: string;
						public static EXTERNAL_RC_PARAMETER_PARAM: string;
						public static EXTERNAL_ARM_VALUE_PARAM: string;
						public static PERSONALIZATION_ID: string;
						public static EXTERNAL_PERSONALIZATION_ID_PARAM: string;
						public static ARM_INDEX: string;
						public static EXTERNAL_ARM_INDEX_PARAM: string;
						public static GROUP: string;
						public static EXTERNAL_GROUP_PARAM: string;
						public static INTERNAL_EVENT: string;
						public static CHOICE_ID: string;
						public static INTERNAL_CHOICE_ID_PARAM: string;
						public logArmActive(param0: string, param1: com.google.firebase.remoteconfig.internal.ConfigContainer): void;
						public constructor(param0: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>);
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.remoteconfig.internal.ConfigCacheClient.AwaitListener:1

