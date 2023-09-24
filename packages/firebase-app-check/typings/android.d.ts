declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export class AppCheckProvider {
					public static class: java.lang.Class<com.google.firebase.appcheck.AppCheckProvider>;
					/**
					 * Constructs a new instance of the com.google.firebase.appcheck.AppCheckProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken> });
					public constructor();
					public getToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export class AppCheckProviderFactory {
					public static class: java.lang.Class<com.google.firebase.appcheck.AppCheckProviderFactory>;
					/**
					 * Constructs a new instance of the com.google.firebase.appcheck.AppCheckProviderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider });
					public constructor();
					public create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.appcheck.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export abstract class FirebaseAppCheck {
					public static class: java.lang.Class<com.google.firebase.appcheck.FirebaseAppCheck>;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.FirebaseAppCheck;
					public constructor();
					public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory): void;
					public addAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
					public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory, param1: boolean): void;
					public setTokenAutoRefreshEnabled(param0: boolean): void;
					public static getInstance(): com.google.firebase.appcheck.FirebaseAppCheck;
					public removeAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
					public getLimitedUseAppCheckToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
					public getAppCheckToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
				}
				export namespace FirebaseAppCheck {
					export class AppCheckListener {
						public static class: java.lang.Class<com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.appcheck.FirebaseAppCheck$AppCheckListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAppCheckTokenChanged(param0: com.google.firebase.appcheck.AppCheckToken): void });
						public constructor();
						public onAppCheckTokenChanged(param0: com.google.firebase.appcheck.AppCheckToken): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export class FirebaseAppCheckRegistrar {
					public static class: java.lang.Class<com.google.firebase.appcheck.FirebaseAppCheckRegistrar>;
					public constructor();
					public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export class AppCheckTokenResponse {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.AppCheckTokenResponse>;
						public getTimeToLive(): string;
						public static fromJsonString(param0: string): com.google.firebase.appcheck.internal.AppCheckTokenResponse;
						public getToken(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export class DefaultAppCheckTokenResult {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.DefaultAppCheckTokenResult>;
						public static constructFromAppCheckToken(param0: com.google.firebase.appcheck.AppCheckToken): com.google.firebase.appcheck.internal.DefaultAppCheckTokenResult;
						public getError(): java.lang.Exception;
						public static constructFromError(param0: com.google.firebase.FirebaseException): com.google.firebase.appcheck.internal.DefaultAppCheckTokenResult;
						public getToken(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export class DefaultFirebaseAppCheck extends com.google.firebase.appcheck.FirebaseAppCheck {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.DefaultFirebaseAppCheck>;
						public constructor();
						public getAppCheckToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
						public addAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
						public getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckTokenResult>;
						public getInstalledAppCheckProviderFactory(): com.google.firebase.appcheck.AppCheckProviderFactory;
						public removeAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
						public removeAppCheckListener(param0: com.google.firebase.appcheck.FirebaseAppCheck.AppCheckListener): void;
						public getLimitedUseToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckTokenResult>;
						public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory, param1: boolean): void;
						public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inject.Provider<com.google.firebase.heartbeatinfo.HeartBeatController>, param2: java.util.concurrent.Executor, param3: java.util.concurrent.Executor, param4: java.util.concurrent.Executor, param5: java.util.concurrent.ScheduledExecutorService);
						public resetAppCheckState(): void;
						public installAppCheckProviderFactory(param0: com.google.firebase.appcheck.AppCheckProviderFactory): void;
						public addAppCheckTokenListener(param0: com.google.firebase.appcheck.interop.AppCheckTokenListener): void;
						public setTokenAutoRefreshEnabled(param0: boolean): void;
						public getLimitedUseAppCheckToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export class NetworkClient {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.NetworkClient>;
						public static UNKNOWN: number;
						public static SAFETY_NET: number;
						public static DEBUG: number;
						public static PLAY_INTEGRITY: number;
						public generatePlayIntegrityChallenge(param0: androidNative.Array<number>, param1: com.google.firebase.appcheck.internal.RetryManager): string;
						public exchangeAttestationForAppCheckToken(param0: androidNative.Array<number>, param1: number, param2: com.google.firebase.appcheck.internal.RetryManager): com.google.firebase.appcheck.internal.AppCheckTokenResponse;
						public constructor(param0: com.google.firebase.FirebaseApp);
					}
					export namespace NetworkClient {
						export class AttestationTokenType {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.NetworkClient.AttestationTokenType>;
							/**
							 * Constructs a new instance of the com.google.firebase.appcheck.internal.NetworkClient$AttestationTokenType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export class RetryManager {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.RetryManager>;
						public resetBackoffOnSuccess(): void;
						public constructor();
						public canRetry(): boolean;
						public updateBackoffOnFailure(param0: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export class StorageHelper {
						public static class: java.lang.Class<com.google.firebase.appcheck.internal.StorageHelper>;
						public saveAppCheckToken(param0: com.google.firebase.appcheck.AppCheckToken): void;
						public retrieveAppCheckToken(): com.google.firebase.appcheck.AppCheckToken;
						public constructor(param0: globalAndroid.content.Context, param1: string);
					}
					export namespace StorageHelper {
						export class TokenType {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.StorageHelper.TokenType>;
							public static DEFAULT_APP_CHECK_TOKEN: com.google.firebase.appcheck.internal.StorageHelper.TokenType;
							public static UNKNOWN_APP_CHECK_TOKEN: com.google.firebase.appcheck.internal.StorageHelper.TokenType;
							public static values(): androidNative.Array<com.google.firebase.appcheck.internal.StorageHelper.TokenType>;
							public static valueOf(param0: string): com.google.firebase.appcheck.internal.StorageHelper.TokenType;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export namespace util {
						export class Clock {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.util.Clock>;
							/**
							 * Constructs a new instance of the com.google.firebase.appcheck.internal.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { currentTimeMillis(): number });
							public constructor();
							public currentTimeMillis(): number;
						}
						export namespace Clock {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export namespace util {
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

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace internal {
					export namespace util {
						export class TokenParser {
							public static class: java.lang.Class<com.google.firebase.appcheck.internal.util.TokenParser>;
							public constructor();
							public static parseTokenClaims(param0: string): java.util.Map<string, any>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export class FirebaseAppCheckPlayIntegrityRegistrar {
						public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.FirebaseAppCheckPlayIntegrityRegistrar>;
						public constructor();
						public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export class PlayIntegrityAppCheckProviderFactory extends com.google.firebase.appcheck.AppCheckProviderFactory {
						public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.PlayIntegrityAppCheckProviderFactory>;
						public constructor();
						public static getInstance(): com.google.firebase.appcheck.playintegrity.PlayIntegrityAppCheckProviderFactory;
						public create(param0: com.google.firebase.FirebaseApp): com.google.firebase.appcheck.AppCheckProvider;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export namespace internal {
						export class ExchangePlayIntegrityTokenRequest {
							public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.internal.ExchangePlayIntegrityTokenRequest>;
							public constructor(param0: string);
							public toJsonString(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export namespace internal {
						export class GeneratePlayIntegrityChallengeRequest {
							public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.internal.GeneratePlayIntegrityChallengeRequest>;
							public constructor();
							public toJsonString(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export namespace internal {
						export class GeneratePlayIntegrityChallengeResponse {
							public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.internal.GeneratePlayIntegrityChallengeResponse>;
							public static fromJsonString(param0: string): com.google.firebase.appcheck.playintegrity.internal.GeneratePlayIntegrityChallengeResponse;
							public getTimeToLive(): string;
							public getChallenge(): string;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace appcheck {
				export namespace playintegrity {
					export namespace internal {
						export class PlayIntegrityAppCheckProvider extends com.google.firebase.appcheck.AppCheckProvider {
							public static class: java.lang.Class<com.google.firebase.appcheck.playintegrity.internal.PlayIntegrityAppCheckProvider>;
							public getToken(): com.google.android.gms.tasks.Task<com.google.firebase.appcheck.AppCheckToken>;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: java.util.concurrent.Executor, param2: java.util.concurrent.Executor);
						}
					}
				}
			}
		}
	}
}

//Generics information:
