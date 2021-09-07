declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class AutoValue_InstallationTokenResult extends com.google.firebase.installations.InstallationTokenResult {
					public static class: java.lang.Class<com.google.firebase.installations.AutoValue_InstallationTokenResult>;
					public getTokenExpirationTimestamp(): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public toBuilder(): com.google.firebase.installations.InstallationTokenResult.Builder;
					public getToken(): string;
					public getTokenCreationTimestamp(): number;
					public hashCode(): number;
				}
				export module AutoValue_InstallationTokenResult {
					export class Builder extends com.google.firebase.installations.InstallationTokenResult.Builder {
						public static class: java.lang.Class<com.google.firebase.installations.AutoValue_InstallationTokenResult.Builder>;
						public build(): com.google.firebase.installations.InstallationTokenResult;
						public setTokenExpirationTimestamp(param0: number): com.google.firebase.installations.InstallationTokenResult.Builder;
						public setTokenCreationTimestamp(param0: number): com.google.firebase.installations.InstallationTokenResult.Builder;
						public setToken(param0: string): com.google.firebase.installations.InstallationTokenResult.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class AwaitListener extends com.google.android.gms.tasks.OnCompleteListener<java.lang.Void> {
					public static class: java.lang.Class<com.google.firebase.installations.AwaitListener>;
					public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public onSuccess(): void;
					public onComplete(param0: com.google.android.gms.tasks.Task<java.lang.Void>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.installations.BuildConfig>;
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
			export module installations {
				export class CrossProcessLock {
					public static class: java.lang.Class<com.google.firebase.installations.CrossProcessLock>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class FirebaseInstallations extends com.google.firebase.installations.FirebaseInstallationsApi {
					public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallations>;
					public static getInstance(): com.google.firebase.installations.FirebaseInstallations;
					public getId(): com.google.android.gms.tasks.Task<string>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.installations.FirebaseInstallations;
					public delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.installations.InstallationTokenResult>;
					public registerFidListener(param0: com.google.firebase.installations.internal.FidListener): com.google.firebase.installations.internal.FidListenerHandle;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class FirebaseInstallationsApi {
					public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallationsApi>;
					/**
					 * Constructs a new instance of the com.google.firebase.installations.FirebaseInstallationsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): com.google.android.gms.tasks.Task<string>;
						getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.installations.InstallationTokenResult>;
						delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
						registerFidListener(param0: com.google.firebase.installations.internal.FidListener): com.google.firebase.installations.internal.FidListenerHandle;
					});
					public constructor();
					public getId(): com.google.android.gms.tasks.Task<string>;
					public delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.installations.InstallationTokenResult>;
					public registerFidListener(param0: com.google.firebase.installations.internal.FidListener): com.google.firebase.installations.internal.FidListenerHandle;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class FirebaseInstallationsException {
					public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallationsException>;
					public constructor(param0: string, param1: com.google.firebase.installations.FirebaseInstallationsException.Status);
					public constructor(param0: com.google.firebase.installations.FirebaseInstallationsException.Status);
					public getStatus(): com.google.firebase.installations.FirebaseInstallationsException.Status;
					public constructor(param0: string, param1: com.google.firebase.installations.FirebaseInstallationsException.Status, param2: java.lang.Throwable);
				}
				export module FirebaseInstallationsException {
					export class Status {
						public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallationsException.Status>;
						public static BAD_CONFIG: com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static UNAVAILABLE: com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static TOO_MANY_REQUESTS: com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static valueOf(param0: string): com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static values(): native.Array<com.google.firebase.installations.FirebaseInstallationsException.Status>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class FirebaseInstallationsRegistrar {
					public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallationsRegistrar>;
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
			export module installations {
				export class GetAuthTokenListener extends com.google.firebase.installations.StateListener {
					public static class: java.lang.Class<com.google.firebase.installations.GetAuthTokenListener>;
					public constructor(param0: com.google.firebase.installations.Utils, param1: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.installations.InstallationTokenResult>);
					public onStateReached(param0: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
					public onException(param0: java.lang.Exception): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class GetIdListener extends com.google.firebase.installations.StateListener {
					public static class: java.lang.Class<com.google.firebase.installations.GetIdListener>;
					public onStateReached(param0: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
					public onException(param0: java.lang.Exception): boolean;
					public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource<string>);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export abstract class InstallationTokenResult {
					public static class: java.lang.Class<com.google.firebase.installations.InstallationTokenResult>;
					public getTokenExpirationTimestamp(): number;
					public constructor();
					public toBuilder(): com.google.firebase.installations.InstallationTokenResult.Builder;
					public static builder(): com.google.firebase.installations.InstallationTokenResult.Builder;
					public getToken(): string;
					public getTokenCreationTimestamp(): number;
				}
				export module InstallationTokenResult {
					export abstract class Builder {
						public static class: java.lang.Class<com.google.firebase.installations.InstallationTokenResult.Builder>;
						public constructor();
						public build(): com.google.firebase.installations.InstallationTokenResult;
						public setTokenExpirationTimestamp(param0: number): com.google.firebase.installations.InstallationTokenResult.Builder;
						public setTokenCreationTimestamp(param0: number): com.google.firebase.installations.InstallationTokenResult.Builder;
						public setToken(param0: string): com.google.firebase.installations.InstallationTokenResult.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class RandomFidGenerator {
					public static class: java.lang.Class<com.google.firebase.installations.RandomFidGenerator>;
					public constructor();
					public createRandomFid(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class StateListener {
					public static class: java.lang.Class<com.google.firebase.installations.StateListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.installations.StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStateReached(param0: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
						onException(param0: java.lang.Exception): boolean;
					});
					public constructor();
					public onStateReached(param0: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
					public onException(param0: java.lang.Exception): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export class Utils {
					public static class: java.lang.Class<com.google.firebase.installations.Utils>;
					public static AUTH_TOKEN_EXPIRATION_BUFFER_IN_SECS: number;
					public currentTimeInMillis(): number;
					public isAuthTokenExpired(param0: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
					public static getInstance(param0: com.google.firebase.installations.time.Clock): com.google.firebase.installations.Utils;
					public getRandomDelayForSyncPrevention(): number;
					public static getInstance(): com.google.firebase.installations.Utils;
					public currentTimeInSecs(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module internal {
					export class FidListener {
						public static class: java.lang.Class<com.google.firebase.installations.internal.FidListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.installations.internal.FidListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFidChanged(param0: string): void;
						});
						public constructor();
						public onFidChanged(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module internal {
					export class FidListenerHandle {
						public static class: java.lang.Class<com.google.firebase.installations.internal.FidListenerHandle>;
						/**
						 * Constructs a new instance of the com.google.firebase.installations.internal.FidListenerHandle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							unregister(): void;
						});
						public constructor();
						public unregister(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module interop {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.firebase.installations.interop.BuildConfig>;
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
			export module installations {
				export module local {
					export class AutoValue_PersistedInstallationEntry extends com.google.firebase.installations.local.PersistedInstallationEntry {
						public static class: java.lang.Class<com.google.firebase.installations.local.AutoValue_PersistedInstallationEntry>;
						public getTokenCreationEpochInSecs(): number;
						public getRegistrationStatus(): com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
						public getExpiresInSecs(): number;
						public getFirebaseInstallationId(): string;
						public getFisError(): string;
						public toBuilder(): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						public getAuthToken(): string;
						public getRefreshToken(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module AutoValue_PersistedInstallationEntry {
						export class Builder extends com.google.firebase.installations.local.PersistedInstallationEntry.Builder {
							public static class: java.lang.Class<com.google.firebase.installations.local.AutoValue_PersistedInstallationEntry.Builder>;
							public setFirebaseInstallationId(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public build(): com.google.firebase.installations.local.PersistedInstallationEntry;
							public setTokenCreationEpochInSecs(param0: number): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setFisError(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setAuthToken(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setExpiresInSecs(param0: number): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setRegistrationStatus(param0: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setRefreshToken(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module local {
					export class IidStore {
						public static class: java.lang.Class<com.google.firebase.installations.local.IidStore>;
						public readIid(): string;
						public readToken(): string;
						public constructor(param0: globalAndroid.content.SharedPreferences, param1: string);
						public constructor(param0: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module local {
					export class PersistedInstallation {
						public static class: java.lang.Class<com.google.firebase.installations.local.PersistedInstallation>;
						public clearForTesting(): void;
						public readPersistedInstallationEntryValue(): com.google.firebase.installations.local.PersistedInstallationEntry;
						public insertOrUpdatePersistedInstallationEntry(param0: com.google.firebase.installations.local.PersistedInstallationEntry): com.google.firebase.installations.local.PersistedInstallationEntry;
						public constructor(param0: com.google.firebase.FirebaseApp);
					}
					export module PersistedInstallation {
						export class RegistrationStatus {
							public static class: java.lang.Class<com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus>;
							public static ATTEMPT_MIGRATION: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static NOT_GENERATED: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static UNREGISTERED: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static REGISTERED: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static REGISTER_ERROR: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static values(): native.Array<com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus>;
							public static valueOf(param0: string): com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module local {
					export abstract class PersistedInstallationEntry {
						public static class: java.lang.Class<com.google.firebase.installations.local.PersistedInstallationEntry>;
						public static INSTANCE: com.google.firebase.installations.local.PersistedInstallationEntry;
						public getTokenCreationEpochInSecs(): number;
						public getRegistrationStatus(): com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
						public constructor();
						public isUnregistered(): boolean;
						public toBuilder(): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						public getRefreshToken(): string;
						public static builder(): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						public withNoGeneratedFid(): com.google.firebase.installations.local.PersistedInstallationEntry;
						public withRegisteredFid(param0: string, param1: string, param2: number, param3: string, param4: number): com.google.firebase.installations.local.PersistedInstallationEntry;
						public isRegistered(): boolean;
						public withUnregisteredFid(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry;
						public withAuthToken(param0: string, param1: number, param2: number): com.google.firebase.installations.local.PersistedInstallationEntry;
						public withClearedAuthToken(): com.google.firebase.installations.local.PersistedInstallationEntry;
						public getExpiresInSecs(): number;
						public isErrored(): boolean;
						public shouldAttemptMigration(): boolean;
						public getFirebaseInstallationId(): string;
						public getFisError(): string;
						public getAuthToken(): string;
						public isNotGenerated(): boolean;
						public withFisError(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry;
					}
					export module PersistedInstallationEntry {
						export abstract class Builder {
							public static class: java.lang.Class<com.google.firebase.installations.local.PersistedInstallationEntry.Builder>;
							public constructor();
							public setFirebaseInstallationId(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public build(): com.google.firebase.installations.local.PersistedInstallationEntry;
							public setTokenCreationEpochInSecs(param0: number): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setFisError(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setAuthToken(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setExpiresInSecs(param0: number): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setRegistrationStatus(param0: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setRefreshToken(param0: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module remote {
					export class AutoValue_InstallationResponse extends com.google.firebase.installations.remote.InstallationResponse {
						public static class: java.lang.Class<com.google.firebase.installations.remote.AutoValue_InstallationResponse>;
						public toBuilder(): com.google.firebase.installations.remote.InstallationResponse.Builder;
						public getUri(): string;
						public getFid(): string;
						public getRefreshToken(): string;
						public getResponseCode(): com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getAuthToken(): com.google.firebase.installations.remote.TokenResult;
						public toString(): string;
					}
					export module AutoValue_InstallationResponse {
						export class Builder extends com.google.firebase.installations.remote.InstallationResponse.Builder {
							public static class: java.lang.Class<com.google.firebase.installations.remote.AutoValue_InstallationResponse.Builder>;
							public setResponseCode(param0: com.google.firebase.installations.remote.InstallationResponse.ResponseCode): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setUri(param0: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public build(): com.google.firebase.installations.remote.InstallationResponse;
							public setAuthToken(param0: com.google.firebase.installations.remote.TokenResult): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setFid(param0: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setRefreshToken(param0: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module remote {
					export class AutoValue_TokenResult extends com.google.firebase.installations.remote.TokenResult {
						public static class: java.lang.Class<com.google.firebase.installations.remote.AutoValue_TokenResult>;
						public getResponseCode(): com.google.firebase.installations.remote.TokenResult.ResponseCode;
						public getTokenExpirationTimestamp(): number;
						public toBuilder(): com.google.firebase.installations.remote.TokenResult.Builder;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getToken(): string;
						public toString(): string;
					}
					export module AutoValue_TokenResult {
						export class Builder extends com.google.firebase.installations.remote.TokenResult.Builder {
							public static class: java.lang.Class<com.google.firebase.installations.remote.AutoValue_TokenResult.Builder>;
							public setResponseCode(param0: com.google.firebase.installations.remote.TokenResult.ResponseCode): com.google.firebase.installations.remote.TokenResult.Builder;
							public build(): com.google.firebase.installations.remote.TokenResult;
							public setTokenExpirationTimestamp(param0: number): com.google.firebase.installations.remote.TokenResult.Builder;
							public setToken(param0: string): com.google.firebase.installations.remote.TokenResult.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module remote {
					export class FirebaseInstallationServiceClient {
						public static class: java.lang.Class<com.google.firebase.installations.remote.FirebaseInstallationServiceClient>;
						public generateAuthToken(param0: string, param1: string, param2: string, param3: string): com.google.firebase.installations.remote.TokenResult;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.inject.Provider<com.google.firebase.platforminfo.UserAgentPublisher>, param2: com.google.firebase.inject.Provider<com.google.firebase.heartbeatinfo.HeartBeatInfo>);
						public deleteFirebaseInstallation(param0: string, param1: string, param2: string, param3: string): void;
						public createFirebaseInstallation(param0: string, param1: string, param2: string, param3: string, param4: string): com.google.firebase.installations.remote.InstallationResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module remote {
					export abstract class InstallationResponse {
						public static class: java.lang.Class<com.google.firebase.installations.remote.InstallationResponse>;
						public constructor();
						public toBuilder(): com.google.firebase.installations.remote.InstallationResponse.Builder;
						public getUri(): string;
						public getFid(): string;
						public getRefreshToken(): string;
						public getResponseCode(): com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
						public getAuthToken(): com.google.firebase.installations.remote.TokenResult;
						public static builder(): com.google.firebase.installations.remote.InstallationResponse.Builder;
					}
					export module InstallationResponse {
						export abstract class Builder {
							public static class: java.lang.Class<com.google.firebase.installations.remote.InstallationResponse.Builder>;
							public constructor();
							public setResponseCode(param0: com.google.firebase.installations.remote.InstallationResponse.ResponseCode): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setUri(param0: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public build(): com.google.firebase.installations.remote.InstallationResponse;
							public setAuthToken(param0: com.google.firebase.installations.remote.TokenResult): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setFid(param0: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setRefreshToken(param0: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
						}
						export class ResponseCode {
							public static class: java.lang.Class<com.google.firebase.installations.remote.InstallationResponse.ResponseCode>;
							public static OK: com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
							public static BAD_CONFIG: com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
							public static values(): native.Array<com.google.firebase.installations.remote.InstallationResponse.ResponseCode>;
							public static valueOf(param0: string): com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module remote {
					export class RequestLimiter {
						public static class: java.lang.Class<com.google.firebase.installations.remote.RequestLimiter>;
						public setNextRequestTime(param0: number): void;
						public isRequestAllowed(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module remote {
					export abstract class TokenResult {
						public static class: java.lang.Class<com.google.firebase.installations.remote.TokenResult>;
						public constructor();
						public getResponseCode(): com.google.firebase.installations.remote.TokenResult.ResponseCode;
						public getTokenExpirationTimestamp(): number;
						public toBuilder(): com.google.firebase.installations.remote.TokenResult.Builder;
						public static builder(): com.google.firebase.installations.remote.TokenResult.Builder;
						public getToken(): string;
					}
					export module TokenResult {
						export abstract class Builder {
							public static class: java.lang.Class<com.google.firebase.installations.remote.TokenResult.Builder>;
							public constructor();
							public setResponseCode(param0: com.google.firebase.installations.remote.TokenResult.ResponseCode): com.google.firebase.installations.remote.TokenResult.Builder;
							public build(): com.google.firebase.installations.remote.TokenResult;
							public setTokenExpirationTimestamp(param0: number): com.google.firebase.installations.remote.TokenResult.Builder;
							public setToken(param0: string): com.google.firebase.installations.remote.TokenResult.Builder;
						}
						export class ResponseCode {
							public static class: java.lang.Class<com.google.firebase.installations.remote.TokenResult.ResponseCode>;
							public static OK: com.google.firebase.installations.remote.TokenResult.ResponseCode;
							public static BAD_CONFIG: com.google.firebase.installations.remote.TokenResult.ResponseCode;
							public static AUTH_ERROR: com.google.firebase.installations.remote.TokenResult.ResponseCode;
							public static valueOf(param0: string): com.google.firebase.installations.remote.TokenResult.ResponseCode;
							public static values(): native.Array<com.google.firebase.installations.remote.TokenResult.ResponseCode>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module time {
					export class Clock {
						public static class: java.lang.Class<com.google.firebase.installations.time.Clock>;
						/**
						 * Constructs a new instance of the com.google.firebase.installations.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							currentTimeMillis(): number;
						});
						public constructor();
						public currentTimeMillis(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module installations {
				export module time {
					export class SystemClock extends com.google.firebase.installations.time.Clock {
						public static class: java.lang.Class<com.google.firebase.installations.time.SystemClock>;
						public currentTimeMillis(): number;
						public static getInstance(): com.google.firebase.installations.time.SystemClock;
					}
				}
			}
		}
	}
}

//Generics information:

