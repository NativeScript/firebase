declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export class AppCheckProvider {
					public static class: java.lang.Class<com.google.firebase.appcheck.AppCheckProvider>;
					/**
					 * Constructs a new instance of the com.google.firebase.appcheck.AppCheckProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
					});
					public constructor();
					public getToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export class AppCheckProviderFactory {
					public static class: java.lang.Class<com.google.firebase.appcheck.AppCheckProviderFactory>;
					/**
					 * Constructs a new instance of the com.google.firebase.appcheck.AppCheckProviderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider;
					});
					public constructor();
					public create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export abstract class AppCheckToken {
					public static class: java.lang.Class<com.google.firebase.appcheck.AppCheckToken>;
					public getExpireTimeMillis(): number;
					public constructor();
					public getToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export abstract class AppCheckTokenResult {
					public static class: java.lang.Class<com.google.firebase.appcheck.AppCheckTokenResult>;
					public getError(): com.google.firebase.FirebaseException;
					public constructor();
					public getToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.appcheck.BuildConfig>;
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
			export module appcheck {
				export abstract class FirebaseAppCheck extends com.google.firebase.appcheck.interop.InternalAppCheckTokenProvider {
					public static class: java.lang.Class<com.google.firebase.appcheck.FirebaseAppCheck>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.FirebaseAppCheck;
					public addAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
					public constructor();
					public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory): void;
					public addAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
					public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory, param1: boolean): void;
					public removeAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
					public setTokenAutoRefreshEnabled(param0: boolean): void;
					public static getInstance(): com.google.firebase.appcheck.FirebaseAppCheck;
					public removeAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
					public getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckTokenResult>;
					public getAppCheckToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
				}
				export module FirebaseAppCheck {
					export class AppCheckListener {
						public static class: java.lang.Class<com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.appcheck.FirebaseAppCheck$AppCheckListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAppCheckTokenChanged(param0: com.google.firebase.appcheck.AppCheckToken): void;
						});
						public constructor();
						public onAppCheckTokenChanged(param0: com.google.firebase.appcheck.AppCheckToken): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export class FirebaseAppCheckRegistrar {
					public static class: java.lang.Class<com.google.firebase.appcheck.FirebaseAppCheckRegistrar>;
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
			export module appcheck {
				export module internal {
					export class AppCheckTokenResponse {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.AppCheckTokenResponse>;
						public getTimeToLive(): string;
						public static fromJsonString(param0: string): com.google.firebase.appcheck.internal.AppCheckTokenResponse;
						public getAttestationToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class DefaultAppCheckToken extends com.google.firebase.appcheck.AppCheckToken {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.DefaultAppCheckToken>;
						public static constructFromRawToken(param0: string): com.google.firebase.appcheck.internal.DefaultAppCheckToken;
						public getExpireTimeMillis(): number;
						public static constructFromAppCheckTokenResponse(param0: com.google.firebase.appcheck.internal.AppCheckTokenResponse): com.google.firebase.appcheck.internal.DefaultAppCheckToken;
						public getToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class DefaultAppCheckTokenResult extends com.google.firebase.appcheck.AppCheckTokenResult {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.DefaultAppCheckTokenResult>;
						public static constructFromAppCheckToken(param0: com.google.firebase.appcheck.AppCheckToken): com.google.firebase.appcheck.internal.DefaultAppCheckTokenResult;
						public getError(): com.google.firebase.FirebaseException;
						public static constructFromError(param0: com.google.firebase.FirebaseException): com.google.firebase.appcheck.internal.DefaultAppCheckTokenResult;
						public getToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class DefaultFirebaseAppCheck extends com.google.firebase.appcheck.FirebaseAppCheck {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.DefaultFirebaseAppCheck>;
						public constructor();
						public getAppCheckToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
						public addAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inject.Provider<com.google.firebase.platforminfo.UserAgentPublisher>, param2: com.google.firebase.inject.Provider<com.google.firebase.heartbeatinfo.HeartBeatInfo>);
						public getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckTokenResult>;
						public getInstalledAppCheckProviderFactory(): com.google.firebase.appcheck.AppCheckProviderFactory;
						public removeAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
						public removeAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
						public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory, param1: boolean): void;
						public resetAppCheckState(): void;
						public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory): void;
						public addAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
						public setTokenAutoRefreshEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class DefaultTokenRefresher {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.DefaultTokenRefresher>;
						public scheduleRefresh(param0: number): void;
						public cancel(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class HttpErrorResponse {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.HttpErrorResponse>;
						public getErrorMessage(): string;
						public static fromJsonString(param0: string): com.google.firebase.appcheck.internal.HttpErrorResponse;
						public getErrorCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class NetworkClient {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.NetworkClient>;
						public static UNKNOWN: number;
						public static SAFETY_NET: number;
						public static DEBUG: number;
						public exchangeAttestationForAppCheckToken(param0: native.Array<number>, param1: number): com.google.firebase.appcheck.internal.AppCheckTokenResponse;
						public constructor(param0: com.google.firebase.FirebaseApp);
					}
					export module NetworkClient {
						export class AttestationTokenType {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.NetworkClient.AttestationTokenType>;
							/**
							 * Constructs a new instance of the com.google.firebase.appcheck.internal.NetworkClient$AttestationTokenType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module appcheck {
				export module internal {
					export class StorageHelper {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.StorageHelper>;
						public saveAppCheckToken(param0: com.google.firebase.appcheck.AppCheckToken): void;
						public retrieveAppCheckToken(): com.google.firebase.appcheck.AppCheckToken;
						public constructor(param0: globalAndroid.content.Context, param1: string);
					}
					export module StorageHelper {
						export class TokenType {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.StorageHelper.TokenType>;
							public static DEFAULT_APP_CHECK_TOKEN: com.google.firebase.appcheck.internal.StorageHelper.TokenType;
							public static UNKNOWN_APP_CHECK_TOKEN: com.google.firebase.appcheck.internal.StorageHelper.TokenType;
							public static values(): native.Array<com.google.firebase.appcheck.internal.StorageHelper.TokenType>;
							public static valueOf(param0: string): com.google.firebase.appcheck.internal.StorageHelper.TokenType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export class TokenRefreshManager {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.TokenRefreshManager>;
						public maybeScheduleTokenRefresh(param0: com.google.firebase.appcheck.AppCheckToken): void;
						public onListenerCountChanged(param0: number): void;
						public setIsAutoRefreshEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export module util {
						export class Clock {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.util.Clock>;
							/**
							 * Constructs a new instance of the com.google.firebase.appcheck.internal.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								currentTimeMillis(): number;
							});
							public constructor();
							public currentTimeMillis(): number;
						}
						export module Clock {
							export class DefaultClock extends com.google.firebase.appcheck.internal.util.Clock {
								public static class: java.lang.Class<com.google.firebase.appcheck.internal.util.Clock.DefaultClock>;
								public currentTimeMillis(): number;
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
			export module appcheck {
				export module internal {
					export module util {
						export class Logger {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.util.Logger>;
							public static TAG: string;
							public i(param0: string): void;
							public v(param0: string, param1: java.lang.Throwable): void;
							public w(param0: string, param1: java.lang.Throwable): void;
							public e(param0: string): void;
							public i(param0: string, param1: java.lang.Throwable): void;
							public constructor(param0: string);
							public static getLogger(): com.google.firebase.appcheck.internal.util.Logger;
							public d(param0: string): void;
							public log(param0: number, param1: string, param2: boolean): void;
							public e(param0: string, param1: java.lang.Throwable): void;
							public d(param0: string, param1: java.lang.Throwable): void;
							public v(param0: string): void;
							public log(param0: number, param1: string): void;
							public w(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module internal {
					export module util {
						export class TokenParser {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.util.TokenParser>;
							public constructor();
							public static parseTokenClaims(param0: string): java.util.Map<string,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module interop {
					export class AppCheckTokenListener {
						public static class: java.lang.Class<com.google.firebase.appcheck.interop.AppCheckTokenListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.appcheck.interop.AppCheckTokenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAppCheckTokenChanged(param0: com.google.firebase.appcheck.AppCheckTokenResult): void;
						});
						public constructor();
						public onAppCheckTokenChanged(param0: com.google.firebase.appcheck.AppCheckTokenResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module interop {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.firebase.appcheck.interop.BuildConfig>;
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
			export module appcheck {
				export module interop {
					export class InternalAppCheckTokenProvider {
						public static class: java.lang.Class<com.google.firebase.appcheck.interop.InternalAppCheckTokenProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.appcheck.interop.InternalAppCheckTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckTokenResult>;
							addAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
							removeAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
						});
						public constructor();
						public getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckTokenResult>;
						public removeAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
						public addAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module safetynet {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.firebase.appcheck.safetynet.BuildConfig>;
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
			export module appcheck {
				export module safetynet {
					export class SafetyNetAppCheckProviderFactory extends com.google.firebase.appcheck.AppCheckProviderFactory {
						public static class: java.lang.Class<com.google.firebase.appcheck.safetynet.SafetyNetAppCheckProviderFactory>;
						public static getInstance(): com.google.firebase.appcheck.safetynet.SafetyNetAppCheckProviderFactory;
						public create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module debug {
					export class DebugAppCheckProviderFactory extends com.google.firebase.appcheck.AppCheckProviderFactory {
						public static class: java.lang.Class<com.google.firebase.appcheck.debug.DebugAppCheckProviderFactory>;
						public static getInstance(): com.google.firebase.appcheck.debug.DebugAppCheckProviderFactory;
						public create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider;
					}
				}
			}
		}
	}
}



com.google.firebase.appcheck.debug

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module safetynet {
					export module internal {
						export class ExchangeSafetyNetTokenRequest {
							public static class: java.lang.Class<com.google.firebase.appcheck.safetynet.internal.ExchangeSafetyNetTokenRequest>;
							public constructor(param0: string);
							public toJsonString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module appcheck {
				export module safetynet {
					export module internal {
						export class SafetyNetAppCheckProvider extends com.google.firebase.appcheck.AppCheckProvider {
							public static class: java.lang.Class<com.google.firebase.appcheck.safetynet.internal.SafetyNetAppCheckProvider>;
							public constructor(param0: com.google.firebase.FirebaseApp);
							public exchangeSafetyNetJwsResultForToken(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
							public getToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
							public exchangeSafetyNetAttestationResponseForToken(param0: com.google.android.gms.safetynet.SafetyNetApi.AttestationResponse): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
						}
					}
				}
			}
		}
	}
}

//Generics information:

