/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export class BuildConfig {
				public static class: java.lang.Class<com.google.firebase.BuildConfig>;
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

declare module com {
	export module google {
		export module firebase {
			export class DataCollectionDefaultChange {
				public static class: java.lang.Class<com.google.firebase.DataCollectionDefaultChange>;
				public enabled: boolean;
				public constructor(param0: boolean);
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseApp {
				public static class: java.lang.Class<com.google.firebase.FirebaseApp>;
				public static DEFAULT_APP_NAME: string;
				public static initializeApp(param0: globalAndroid.content.Context, param1: com.google.firebase.FirebaseOptions): com.google.firebase.FirebaseApp;
				public static clearInstancesForTest(): void;
				public getApplicationContext(): globalAndroid.content.Context;
				public addLifecycleEventListener(param0: com.google.firebase.FirebaseAppLifecycleListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.google.firebase.FirebaseOptions);
				public static initializeApp(param0: globalAndroid.content.Context): com.google.firebase.FirebaseApp;
				public delete(): void;
				public hashCode(): number;
				public static getPersistenceKey(param0: string, param1: com.google.firebase.FirebaseOptions): string;
				public equals(param0: any): boolean;
				public isDataCollectionDefaultEnabled(): boolean;
				public addBackgroundStateChangeListener(param0: com.google.firebase.FirebaseApp.BackgroundStateChangeListener): void;
				public static initializeApp(param0: globalAndroid.content.Context, param1: com.google.firebase.FirebaseOptions, param2: string): com.google.firebase.FirebaseApp;
				public isDefaultApp(): boolean;
				public setDataCollectionDefaultEnabled(param0: java.lang.Boolean): void;
				public getPersistenceKey(): string;
				public getName(): string;
				public setAutomaticResourceManagementEnabled(param0: boolean): void;
				public toString(): string;
				/** @deprecated */
				public setDataCollectionDefaultEnabled(param0: boolean): void;
				public get(param0: java.lang.Class): any;
				public removeLifecycleEventListener(param0: com.google.firebase.FirebaseAppLifecycleListener): void;
				public getOptions(): com.google.firebase.FirebaseOptions;
				public removeBackgroundStateChangeListener(param0: com.google.firebase.FirebaseApp.BackgroundStateChangeListener): void;
				public static getInstance(param0: string): com.google.firebase.FirebaseApp;
				public static getApps(param0: globalAndroid.content.Context): java.util.List<com.google.firebase.FirebaseApp>;
				public static getInstance(): com.google.firebase.FirebaseApp;
			}
			export module FirebaseApp {
				export class BackgroundStateChangeListener {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.BackgroundStateChangeListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.FirebaseApp$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackgroundStateChanged(param0: boolean): void;
					});
					public constructor();
					public onBackgroundStateChanged(param0: boolean): void;
				}
				export class GlobalBackgroundStateListener {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.GlobalBackgroundStateListener>;
					public onBackgroundStateChanged(param0: boolean): void;
				}
				export class UiExecutor {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.UiExecutor>;
					public execute(param0: java.lang.Runnable): void;
				}
				export class UserUnlockReceiver {
					public static class: java.lang.Class<com.google.firebase.FirebaseApp.UserUnlockReceiver>;
					public constructor(param0: globalAndroid.content.Context);
					public unregister(): void;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
				public constructor(implementation: {
					onDeleted(param0: string, param1: com.google.firebase.FirebaseOptions): void;
				});
				public constructor();
				public onDeleted(param0: string, param1: com.google.firebase.FirebaseOptions): void;
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
				public static ERROR_INVALID_CUSTOM_TOKEN: number;
				public static ERROR_CUSTOM_TOKEN_MISMATCH: number;
				public static ERROR_INVALID_CREDENTIAL: number;
				public static ERROR_USER_DISABLED: number;
				public static ERROR_OPERATION_NOT_ALLOWED: number;
				public static ERROR_EMAIL_ALREADY_IN_USE: number;
				public static ERROR_INVALID_EMAIL: number;
				public static ERROR_WRONG_PASSWORD: number;
				public static ERROR_TOO_MANY_REQUESTS: number;
				public static ERROR_USER_NOT_FOUND: number;
				public static ERROR_ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL: number;
				public static ERROR_REQUIRES_RECENT_LOGIN: number;
				public static ERROR_PROVIDER_ALREADY_LINKED: number;
				public static ERROR_NO_SUCH_PROVIDER: number;
				public static ERROR_INVALID_USER_TOKEN: number;
				public static ERROR_NETWORK_REQUEST_FAILED: number;
				public static ERROR_USER_TOKEN_EXPIRED: number;
				public static ERROR_INVALID_API_KEY: number;
				public static ERROR_USER_MISMATCH: number;
				public static ERROR_CREDENTIAL_ALREADY_IN_USE: number;
				public static ERROR_WEAK_PASSWORD: number;
				public static ERROR_APP_NOT_AUTHORIZED: number;
				public static ERROR_NO_SIGNED_IN_USER: number;
				public static ERROR_INTERNAL_ERROR: number;
				public constructor(param0: number);
				public getErrorCode(): number;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseNetworkException {
				public static class: java.lang.Class<com.google.firebase.FirebaseNetworkException>;
				public constructor(param0: string);
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
				public static fromResource(param0: globalAndroid.content.Context): com.google.firebase.FirebaseOptions;
				public getApiKey(): string;
				public getApplicationId(): string;
				public equals(param0: any): boolean;
				public getGcmSenderId(): string;
				public getDatabaseUrl(): string;
				public toString(): string;
				public getProjectId(): string;
			}
			export module FirebaseOptions {
				export class Builder {
					public static class: java.lang.Class<com.google.firebase.FirebaseOptions.Builder>;
					public constructor(param0: com.google.firebase.FirebaseOptions);
					public build(): com.google.firebase.FirebaseOptions;
					public setStorageBucket(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public constructor();
					public setDatabaseUrl(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public setApplicationId(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public setGcmSenderId(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public setGaTrackingId(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public setProjectId(param0: string): com.google.firebase.FirebaseOptions.Builder;
					public setApiKey(param0: string): com.google.firebase.FirebaseOptions.Builder;
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
				public constructor(param0: string);
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
					public constructor(implementation: {
					});
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
					public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public constructor();
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
					public constructor(param0: string, param1: number);
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
					public equals(param0: any): boolean;
					public toString(): string;
					public getMillis(): number;
					public getHeartBeat(): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
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
				export class AutoValue_SdkHeartBeatResult extends com.google.firebase.heartbeatinfo.SdkHeartBeatResult {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.AutoValue_SdkHeartBeatResult>;
					public equals(param0: any): boolean;
					public toString(): string;
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
				export class DefaultHeartBeatInfo extends com.google.firebase.heartbeatinfo.HeartBeatInfo {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.DefaultHeartBeatInfo>;
					public static component(): com.google.firebase.components.Component<com.google.firebase.heartbeatinfo.HeartBeatInfo>;
					public getHeartBeatCode(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
					public storeHeartBeatInfo(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getAndClearStoredHeartBeatInfo(): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.heartbeatinfo.HeartBeatResult>>;
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
					public constructor(implementation: {
					});
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
				export class HeartBeatInfo {
					public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatInfo>;
					/**
					 * Constructs a new instance of the com.google.firebase.heartbeatinfo.HeartBeatInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHeartBeatCode(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						storeHeartBeatInfo(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
						getAndClearStoredHeartBeatInfo(): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.heartbeatinfo.HeartBeatResult>>;
					});
					public constructor();
					public getHeartBeatCode(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
					public storeHeartBeatInfo(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getAndClearStoredHeartBeatInfo(): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.heartbeatinfo.HeartBeatResult>>;
				}
				export module HeartBeatInfo {
					export class HeartBeat {
						public static class: java.lang.Class<com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat>;
						public static NONE: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static SDK: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static GLOBAL: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static COMBINED: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static valueOf(param0: string): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
						public static values(): native.Array<com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat>;
						public getCode(): number;
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
					public getMillis(): number;
					public getHeartBeat(): com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat;
					public static create(param0: string, param1: number, param2: com.google.firebase.heartbeatinfo.HeartBeatInfo.HeartBeat): com.google.firebase.heartbeatinfo.HeartBeatResult;
					public getSdkName(): string;
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
					public static create(param0: string, param1: number): com.google.firebase.heartbeatinfo.SdkHeartBeatResult;
					public constructor();
					public getMillis(): number;
					public getSdkName(): string;
					public compareTo(param0: com.google.firebase.heartbeatinfo.SdkHeartBeatResult): number;
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
					public static DATA_COLLECTION_DEFAULT_ENABLED: string;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.google.firebase.events.Publisher);
					public setEnabled(param0: java.lang.Boolean): void;
					public isEnabled(): boolean;
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
					public equals(param0: any): boolean;
					public getVersion(): string;
					public toString(): string;
					public getLibraryName(): string;
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
					public registerVersion(param0: string, param1: string): void;
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
					public static create(param0: string, param1: string): com.google.firebase.components.Component<any>;
					public static fromContext(param0: string, param1: com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor<globalAndroid.content.Context>): com.google.firebase.components.Component<any>;
				}
				export module LibraryVersionComponent {
					export class VersionExtractor<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.platforminfo.LibraryVersionComponent$VersionExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extract(param0: T): string;
						});
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
					public constructor(implementation: {
						getUserAgent(): string;
					});
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
					public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
					public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
					public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
					public constructor();
					public onCreate(): boolean;
					public getType(param0: globalAndroid.net.Uri): string;
					public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
					public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1

