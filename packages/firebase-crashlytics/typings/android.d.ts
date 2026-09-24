/// <reference path="android-declarations.d.ts"/>

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
			export module crashlytics {
				export class AnalyticsDeferredProxy {
					public static class: java.lang.Class<com.google.firebase.crashlytics.AnalyticsDeferredProxy>;
					public getAnalyticsEventLogger(): com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger;
					public constructor(analyticsConnectorDeferred: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>);
					public constructor(analyticsConnectorDeferred: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>, breadcrumbSource: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource, analyticsEventLogger: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger);
					public getDeferredBreadcrumbSource(): com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.crashlytics.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.crashlytics';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '20.1.1';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class CrashlyticsAnalyticsListener {
					public static class: java.lang.Class<com.google.firebase.crashlytics.CrashlyticsAnalyticsListener>;
					public setCrashlyticsOriginEventReceiver(receiver: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver): void;
					public onMessageTriggered(this_: number, id: globalAndroid.os.Bundle): void;
					public setBreadcrumbEventReceiver(receiver: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class CrashlyticsRegistrar {
					public static class: java.lang.Class<com.google.firebase.crashlytics.CrashlyticsRegistrar>;
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
			export module crashlytics {
				export class CustomKeysAndValues {
					public static class: java.lang.Class<com.google.firebase.crashlytics.CustomKeysAndValues>;
				}
				export module CustomKeysAndValues {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.crashlytics.CustomKeysAndValues.Builder>;
						public constructor();
						public putLong(key: string, value: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public build(): com.google.firebase.crashlytics.CustomKeysAndValues;
						public putBoolean(key: string, value: boolean): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putFloat(key: string, value: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putInt(key: string, value: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putDouble(key: string, value: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putString(key: string, value: string): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class FirebaseCrashlytics {
					public static class: java.lang.Class<com.google.firebase.crashlytics.FirebaseCrashlytics>;
					public sendUnsentReports(): void;
					public didCrashOnPreviousExecution(): boolean;
					public setCrashlyticsCollectionEnabled(enabled: boolean): void;
					public log(message: string): void;
					public isCrashlyticsCollectionEnabled(): boolean;
					public setUserId(identifier: string): void;
					public setCustomKey(key: string, value: number): void;
					public setCustomKeys(keysAndValues: com.google.firebase.crashlytics.CustomKeysAndValues): void;
					public setCustomKey(key: string, value: string): void;
					public setCrashlyticsCollectionEnabled(enabled: java.lang.Boolean): void;
					public recordException(throwable: java.lang.Throwable, keysAndValues: com.google.firebase.crashlytics.CustomKeysAndValues): void;
					public checkForUnsentReports(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public static getInstance(): com.google.firebase.crashlytics.FirebaseCrashlytics;
					public deleteUnsentReports(): void;
					public setCustomKey(key: string, value: boolean): void;
					public recordException(throwable: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class FirebaseCrashlyticsKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.crashlytics.FirebaseCrashlyticsKtxRegistrar>;
					public constructor();
					public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				}
				export module FirebaseCrashlyticsKtxRegistrar {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.crashlytics.FirebaseCrashlyticsKtxRegistrar.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class KeyValueBuilder {
					public static class: java.lang.Class<com.google.firebase.crashlytics.KeyValueBuilder>;
					public build$com_google_firebase_firebase_crashlytics(): com.google.firebase.crashlytics.CustomKeysAndValues;
					public constructor();
					public key(key: string, value: number): void;
					public key(key: string, value: string): void;
					public key(key: string, value: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class CrashlyticsNativeComponent {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.CrashlyticsNativeComponent>;
						/**
						 * Constructs a new instance of the com.google.firebase.crashlytics.internal.CrashlyticsNativeComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasCrashDataForCurrentSession(): boolean; hasCrashDataForSession(param0: string): boolean; prepareNativeSession(param0: string, param1: string, param2: number, param3: com.google.firebase.crashlytics.internal.model.StaticSessionData): void; getSessionFileProvider(param0: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider });
						public constructor();
						public getSessionFileProvider(param0: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider;
						public prepareNativeSession(param0: string, param1: string, param2: number, param3: com.google.firebase.crashlytics.internal.model.StaticSessionData): void;
						public hasCrashDataForSession(param0: string): boolean;
						public hasCrashDataForCurrentSession(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class CrashlyticsNativeComponentDeferredProxy extends com.google.firebase.crashlytics.internal.CrashlyticsNativeComponent {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.CrashlyticsNativeComponentDeferredProxy>;
						public getSessionFileProvider(param0: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider;
						public prepareNativeSession(param0: string, param1: string, param2: number, param3: com.google.firebase.crashlytics.internal.model.StaticSessionData): void;
						public hasCrashDataForSession(sessionId: string): boolean;
						public hasCrashDataForSession(param0: string): boolean;
						public constructor(deferredNativeComponent: com.google.firebase.inject.Deferred<com.google.firebase.crashlytics.internal.CrashlyticsNativeComponent>);
						public prepareNativeSession(sessionId: string, generator: string, startedAtSeconds: number, sessionData: com.google.firebase.crashlytics.internal.model.StaticSessionData): void;
						public getSessionFileProvider(sessionId: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider;
						public hasCrashDataForCurrentSession(): boolean;
					}
					export module CrashlyticsNativeComponentDeferredProxy {
						export class MissingNativeSessionFileProvider extends com.google.firebase.crashlytics.internal.NativeSessionFileProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.CrashlyticsNativeComponentDeferredProxy.MissingNativeSessionFileProvider>;
							public getMetadataFile(): java.io.File;
							public getApplicationExitInto(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
							public getOsFile(): java.io.File;
							public getMinidumpFile(): java.io.File;
							public getBinaryImagesFile(): java.io.File;
							public getDeviceFile(): java.io.File;
							public getSessionFile(): java.io.File;
							public getAppFile(): java.io.File;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class CrashlyticsRemoteConfigListener {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.CrashlyticsRemoteConfigListener>;
						public constructor(userMetadata: com.google.firebase.crashlytics.internal.metadata.UserMetadata);
						public onRolloutsStateChanged(it: com.google.firebase.remoteconfig.interop.rollouts.RolloutsState): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class DevelopmentPlatformProvider {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.DevelopmentPlatformProvider>;
						public static isUnity(context: globalAndroid.content.Context): boolean;
						public getDevelopmentPlatform(): string;
						public getDevelopmentPlatformVersion(): string;
						public constructor(context: globalAndroid.content.Context);
					}
					export module DevelopmentPlatformProvider {
						export class DevelopmentPlatform {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.DevelopmentPlatformProvider.DevelopmentPlatform>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class Logger {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.Logger>;
						public static TAG: string = 'FirebaseCrashlytics';
						public w(text: string, throwable: java.lang.Throwable): void;
						public e(text: string, throwable: java.lang.Throwable): void;
						public d(text: string, throwable: java.lang.Throwable): void;
						public log(priority: number, msg: string, forceLog: boolean): void;
						public v(text: string): void;
						public log(priority: number, msg: string): void;
						public static getLogger(): com.google.firebase.crashlytics.internal.Logger;
						public i(text: string, throwable: java.lang.Throwable): void;
						public i(text: string): void;
						public d(text: string): void;
						public w(text: string): void;
						public constructor(tag: string);
						public v(text: string, throwable: java.lang.Throwable): void;
						public e(text: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class NativeSessionFileProvider {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.NativeSessionFileProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.crashlytics.internal.NativeSessionFileProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getMinidumpFile(): java.io.File; getApplicationExitInto(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo; getBinaryImagesFile(): java.io.File; getMetadataFile(): java.io.File; getSessionFile(): java.io.File; getAppFile(): java.io.File; getDeviceFile(): java.io.File; getOsFile(): java.io.File });
						public constructor();
						public getApplicationExitInto(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
						public getBinaryImagesFile(): java.io.File;
						public getDeviceFile(): java.io.File;
						public getAppFile(): java.io.File;
						public getMetadataFile(): java.io.File;
						public getMinidumpFile(): java.io.File;
						public getOsFile(): java.io.File;
						public getSessionFile(): java.io.File;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class ProcessDetailsProvider {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.ProcessDetailsProvider>;
						public static INSTANCE: com.google.firebase.crashlytics.internal.ProcessDetailsProvider;
						public getAppProcessDetails(it: globalAndroid.content.Context): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails>;
						public buildProcessDetails(processName: string, pid: number, importance: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
						public buildProcessDetails(processName: string, pid: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
						public getCurrentProcessDetails(it: globalAndroid.content.Context): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
						public buildProcessDetails(processName: string, pid: number, importance: number, isDefaultProcess: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
						public buildProcessDetails(processName: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export class RemoteConfigDeferredProxy {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.RemoteConfigDeferredProxy>;
						public constructor(remoteConfigInteropDeferred: com.google.firebase.inject.Deferred<com.google.firebase.remoteconfig.interop.FirebaseRemoteConfigInterop>);
						public setupListener(metadata: com.google.firebase.crashlytics.internal.metadata.UserMetadata): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module analytics {
						export class AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { logEvent(param0: string, param1: globalAndroid.os.Bundle): void });
							public constructor();
							public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module analytics {
						export class AnalyticsEventReceiver {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onEvent(param0: string, param1: globalAndroid.os.Bundle): void });
							public constructor();
							public onEvent(param0: string, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module analytics {
						export class BlockingAnalyticsEventLogger implements com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver, com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.BlockingAnalyticsEventLogger>;
							public logEvent(this_: string, name: globalAndroid.os.Bundle): void;
							public onEvent(name: string, params: globalAndroid.os.Bundle): void;
							public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							public onEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							public constructor(baseAnalyticsEventLogger: com.google.firebase.crashlytics.internal.analytics.CrashlyticsOriginAnalyticsEventLogger, timeout: number, timeUnit: java.util.concurrent.TimeUnit);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module analytics {
						export class BreadcrumbAnalyticsEventReceiver implements com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver, com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.BreadcrumbAnalyticsEventReceiver>;
							public constructor();
							public registerBreadcrumbHandler(breadcrumbHandler: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
							public registerBreadcrumbHandler(param0: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
							public onEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							public onEvent(e: string, this_: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module analytics {
						export class CrashlyticsOriginAnalyticsEventLogger extends com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.CrashlyticsOriginAnalyticsEventLogger>;
							public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							public constructor(analyticsConnector: com.google.firebase.analytics.connector.AnalyticsConnector);
							public logEvent(name: string, params: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module analytics {
						export class UnavailableAnalyticsEventLogger extends com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.UnavailableAnalyticsEventLogger>;
							public constructor();
							public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							public logEvent(name: string, params: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module breadcrumbs {
						export class BreadcrumbHandler {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { handleBreadcrumb(param0: string): void });
							public constructor();
							public handleBreadcrumb(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module breadcrumbs {
						export class BreadcrumbSource {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { registerBreadcrumbHandler(param0: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void });
							public constructor();
							public registerBreadcrumbHandler(param0: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module breadcrumbs {
						export class DisabledBreadcrumbSource extends com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.breadcrumbs.DisabledBreadcrumbSource>;
							public constructor();
							public registerBreadcrumbHandler(breadcrumbHandler: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
							public registerBreadcrumbHandler(param0: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module concurrency {
						export class CrashlyticsTasks {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.concurrency.CrashlyticsTasks>;
							public static race(task1: com.google.android.gms.tasks.Task, task2: com.google.android.gms.tasks.Task): com.google.android.gms.tasks.Task;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module concurrency {
						export class CrashlyticsWorker {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorker>;
							public getExecutor(): java.util.concurrent.ExecutorService;
							public submit(this_: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task;
							public submit(this_: java.lang.Runnable): com.google.android.gms.tasks.Task<java.lang.Void>;
							public submitTaskOnSuccess(this_: java.util.concurrent.Callable<any>, callable: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
							public submitTask(this_: java.util.concurrent.Callable<any>, callable: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
							public await(): void;
							public submitTask(this_: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task;
							public execute(runnable: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module concurrency {
						export class CrashlyticsWorkers {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorkers>;
							public common: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorker;
							public diskWrite: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorker;
							public dataCollect: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorker;
							public network: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorker;
							public static getEnforcement(): boolean;
							public static setEnforcement(value: boolean): void;
							public static checkBlockingThread(): void;
							public constructor(backgroundExecutorService: java.util.concurrent.ExecutorService, blockingExecutorService: java.util.concurrent.ExecutorService);
							public static checkBackgroundThread(): void;
							public static checkNotMainThread(): void;
						}
						export module CrashlyticsWorkers {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorkers.Companion>;
								public getEnforcement(): boolean;
								public checkBlockingThread(): void;
								public setEnforcement(value: boolean): void;
								public checkBackgroundThread(): void;
								public checkNotMainThread(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class AutoRolloutAssignmentEncoder {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.AutoRolloutAssignmentEncoder>;
							public static CODEGEN_VERSION: number = 2;
							public static CONFIG: com.google.firebase.encoders.config.Configurator;
							public configure(cfg: com.google.firebase.encoders.config.EncoderConfig<any>): void;
						}
						export module AutoRolloutAssignmentEncoder {
							export class RolloutAssignmentEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.AutoRolloutAssignmentEncoder.RolloutAssignmentEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.metadata.RolloutAssignment, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class AutoValue_RolloutAssignment extends com.google.firebase.crashlytics.internal.metadata.RolloutAssignment {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.AutoValue_RolloutAssignment>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getVariantId(): string;
							public getParameterKey(): string;
							public getTemplateVersion(): number;
							public toString(): string;
							public getParameterValue(): string;
							public getRolloutId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class EventMetadata {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.EventMetadata>;
							public copy(sessionId: string, timestamp: number, additionalCustomKeys: java.util.Map<string, string>): com.google.firebase.crashlytics.internal.metadata.EventMetadata;
							public component3(): java.util.Map<string, string>;
							public hashCode(): number;
							public component2(): number;
							public getSessionId(): string;
							public equals(other: any): boolean;
							public getTimestamp(): number;
							public toString(): string;
							public constructor(sessionId: string, timestamp: number, additionalCustomKeys: java.util.Map<string, string>);
							public getAdditionalCustomKeys(): java.util.Map<string, string>;
							public component1(): string;
							public constructor(sessionId: string, timestamp: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class FileLogStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.FileLogStore>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.metadata.FileLogStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { writeToLog(param0: number, param1: string): void; getLogAsBytes(): androidNative.Array<number>; getLogAsString(): string; closeLogFile(): void; deleteLogFile(): void });
							public constructor();
							public writeToLog(param0: number, param1: string): void;
							public deleteLogFile(): void;
							public getLogAsString(): string;
							public getLogAsBytes(): androidNative.Array<number>;
							public closeLogFile(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class KeysMap {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.KeysMap>;
							public setKeys(sanitizedKey: java.util.Map<string, string>): void;
							public getKeys(): java.util.Map<string, string>;
							public static sanitizeString(input: string, maxLength: number): string;
							public setKey(this_: string, key: string): boolean;
							public constructor(maxEntries: number, maxEntryLength: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class LogFileManager {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.LogFileManager>;
							public constructor(fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore, currentSessionId: string);
							public writeToLog(timestamp: number, msg: string): void;
							public constructor(fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore);
							public setCurrentSession(sessionId: string): void;
							public getBytesForLog(): androidNative.Array<number>;
							public getLogString(): string;
							public clearLog(): void;
						}
						export module LogFileManager {
							export class NoopLogStore extends com.google.firebase.crashlytics.internal.metadata.FileLogStore {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.LogFileManager.NoopLogStore>;
								public writeToLog(timestamp: number, msg: string): void;
								public writeToLog(param0: number, param1: string): void;
								public getLogAsString(): string;
								public deleteLogFile(): void;
								public getLogAsBytes(): androidNative.Array<number>;
								public closeLogFile(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class MetaDataStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.MetaDataStore>;
							public readKeyData(sessionId: string): java.util.Map<string, string>;
							public readUserId(e: string): string;
							public getRolloutsStateForSession(sessionId: string): java.io.File;
							public readRolloutsState(e: string): java.util.List<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment>;
							public writeRolloutState(e: string, this_: java.util.List<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment>): void;
							public constructor(fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore);
							public writeKeyData(e: string, this_: java.util.Map<string, string>, sessionId: boolean): void;
							public getUserDataFileForSession(sessionId: string): java.io.File;
							public writeUserData(e: string, this_: string): void;
							public writeKeyData(sessionId: string, keyData: java.util.Map<string, string>): void;
							public getKeysFileForSession(sessionId: string): java.io.File;
							public getInternalKeysFileForSession(sessionId: string): java.io.File;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class QueueFile {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.QueueFile>;
							public peek(): androidNative.Array<number>;
							public size(): number;
							public close(): void;
							public usedBytes(): number;
							public remove(): void;
							public clear(): void;
							public toString(): string;
							public add(data: androidNative.Array<number>): void;
							public hasSpaceFor(dataSizeBytes: number, maxSizeBytes: number): boolean;
							public constructor(file: java.io.File);
							public add(data: androidNative.Array<number>, offset: number, count: number): void;
							public forEach(i: com.google.firebase.crashlytics.internal.metadata.QueueFile.ElementReader): void;
							public isEmpty(): boolean;
							public peek(reader: com.google.firebase.crashlytics.internal.metadata.QueueFile.ElementReader): void;
						}
						export module QueueFile {
							export class Element {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.QueueFile.Element>;
								public toString(): string;
							}
							export class ElementInputStream {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.QueueFile.ElementInputStream>;
								public read(buffer: androidNative.Array<number>, offset: number, length: number): number;
								public read(): number;
							}
							export class ElementReader {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.QueueFile.ElementReader>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.metadata.QueueFile$ElementReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { read(param0: java.io.InputStream, param1: number): void });
								public constructor();
								public read(param0: java.io.InputStream, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class QueueFileLogStore extends com.google.firebase.crashlytics.internal.metadata.FileLogStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.QueueFileLogStore>;
							public writeToLog(param0: number, param1: string): void;
							public writeToLog(timestamp: number, msg: string): void;
							public deleteLogFile(): void;
							public getLogAsString(): string;
							public getLogAsBytes(): androidNative.Array<number>;
							public closeLogFile(): void;
						}
						export module QueueFileLogStore {
							export class LogBytes {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.QueueFileLogStore.LogBytes>;
								public bytes: androidNative.Array<number>;
								public offset: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export abstract class RolloutAssignment {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment>;
							public static ROLLOUT_ASSIGNMENT_JSON_ENCODER: com.google.firebase.encoders.DataEncoder;
							public constructor();
							public getVariantId(): string;
							public getParameterKey(): string;
							public getTemplateVersion(): number;
							public getParameterValue(): string;
							public getRolloutId(): string;
							public static create(rolloutId: string, parameterKey: string, parameterValue: string, variantId: string, templateVersion: number): com.google.firebase.crashlytics.internal.metadata.RolloutAssignment;
							public toReportProto(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class RolloutAssignmentList {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.RolloutAssignmentList>;
							public constructor(maxEntries: number);
							public updateRolloutAssignmentList(this_: java.util.List<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment>): boolean;
							public getRolloutAssignmentList(): java.util.List<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment>;
							public getReportRolloutsState(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module metadata {
						export class UserMetadata {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.UserMetadata>;
							public static USERDATA_FILENAME: string = 'user-data';
							public static KEYDATA_FILENAME: string = 'keys';
							public static INTERNAL_KEYDATA_FILENAME: string = 'internal-keys';
							public static ROLLOUTS_STATE_FILENAME: string = 'rollouts-state';
							public static MAX_ATTRIBUTES: number = 64;
							public static MAX_ATTRIBUTE_SIZE: number = 1024;
							public static MAX_INTERNAL_KEY_SIZE: number = 8192;
							public static MAX_ROLLOUT_ASSIGNMENTS: number = 128;
							public constructor(sessionIdentifier: string, fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore, crashlyticsWorkers: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorkers);
							public static loadFromExistingSession(sessionId: string, fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore, crashlyticsWorkers: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorkers): com.google.firebase.crashlytics.internal.metadata.UserMetadata;
							public setNewSession(rolloutAssignments: string): void;
							public getInternalKeys(): java.util.Map<string, string>;
							public getUserId(): string;
							public static readUserId(sessionId: string, fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore): string;
							public updateRolloutsState(this_: java.util.List<com.google.firebase.crashlytics.internal.metadata.RolloutAssignment>): boolean;
							public getRolloutsState(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>;
							public getCustomKeys(): java.util.Map<string, string>;
							public setUserId(this_: string): void;
							public setInternalKey(key: string, value: string): boolean;
							public getCustomKeys(sanitizedKey: java.util.Map<string, string>): java.util.Map<string, string>;
							public setCustomKeys(keysAndValues: java.util.Map<string, string>): void;
							public setCustomKey(key: string, value: string): boolean;
						}
						export module UserMetadata {
							export class SerializeableKeysMap {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.metadata.UserMetadata.SerializeableKeysMap>;
								public getKeys(): java.util.Map<string, string>;
								public setKey(key: string, value: string): boolean;
								public setKeys(keysAndValues: java.util.Map<string, string>): void;
								public constructor(isInternal: com.google.firebase.crashlytics.internal.metadata.UserMetadata, keysMap: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoCrashlyticsReportEncoder {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder>;
							public static CODEGEN_VERSION: number = 2;
							public static CONFIG: com.google.firebase.encoders.config.Configurator;
							public configure(cfg: com.google.firebase.encoders.config.EncoderConfig<any>): void;
						}
						export module AutoCrashlyticsReportEncoder {
							export class CrashlyticsReportApplicationExitInfoBuildIdMappingForArchEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportApplicationExitInfoBuildIdMappingForArchEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportApplicationExitInfoEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportApplicationExitInfoEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportCustomAttributeEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportCustomAttributeEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportFilesPayloadEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportFilesPayloadEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportFilesPayloadFileEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportFilesPayloadFileEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportProfilingManagerInfoEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportProfilingManagerInfoEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportProfilingManagerInfoProfilingTriggerEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportProfilingManagerInfoProfilingTriggerEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionApplicationEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionApplicationEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionApplicationOrganizationEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionApplicationOrganizationEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionDeviceEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionDeviceEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionBinaryImageEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionBinaryImageEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionExceptionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionExceptionEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionSignalEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionSignalEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionThreadEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionThreadEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionThreadFrameEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionThreadFrameEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationProcessDetailsEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationProcessDetailsEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventDeviceEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventDeviceEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventLogEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventLogEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventRolloutAssignmentEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventRolloutAssignmentEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventRolloutAssignmentRolloutVariantEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventRolloutAssignmentRolloutVariantEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventRolloutsStateEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventRolloutsStateEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionOperatingSystemEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionOperatingSystemEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionUserEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionUserEncoder>;
								public encode(value: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport>;
							public getSdkVersion(): string;
							public getGmpAppId(): string;
							public hashCode(): number;
							public toString(): string;
							public getFirebaseInstallationId(): string;
							public getDisplayVersion(): string;
							public getAppQualitySessionId(): string;
							public getAppExitInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
							public getNdkPayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
							public getFirebaseAuthenticationToken(): string;
							public equals(this_: any): boolean;
							public getPlatform(): number;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							public getInstallationUuid(): string;
							public getBuildVersion(): string;
							public getSession(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
						}
						export module AutoValue_CrashlyticsReport {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport.Builder>;
								public setDisplayVersion(displayVersion: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setSdkVersion(sdkVersion: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setAppQualitySessionId(appQualitySessionId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setFirebaseAuthenticationToken(firebaseAuthenticationToken: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setBuildVersion(buildVersion: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setSession(session: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setInstallationUuid(installationUuid: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setNdkPayload(ndkPayload: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setFirebaseInstallationId(firebaseInstallationId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setGmpAppId(gmpAppId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setAppExitInfo(appExitInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setPlatform(platform: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_ApplicationExitInfo extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ApplicationExitInfo>;
							public getProcessName(): string;
							public getBuildIdMappingForArch(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch>;
							public hashCode(): number;
							public getImportance(): number;
							public equals(this_: any): boolean;
							public getTimestamp(): number;
							public getTraceFile(): string;
							public toString(): string;
							public getReasonCode(): number;
							public getRss(): number;
							public getPss(): number;
							public getPid(): number;
						}
						export module AutoValue_CrashlyticsReport_ApplicationExitInfo {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ApplicationExitInfo.Builder>;
								public setProcessName(processName: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setPss(pss: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setRss(rss: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setPid(pid: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
								public setTraceFile(traceFile: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setReasonCode(reasonCode: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setImportance(importance: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setBuildIdMappingForArch(buildIdMappingForArch: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setTimestamp(timestamp: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_ApplicationExitInfo_BuildIdMappingForArch extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ApplicationExitInfo_BuildIdMappingForArch>;
							public getLibraryName(): string;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getArch(): string;
							public toString(): string;
							public getBuildId(): string;
						}
						export module AutoValue_CrashlyticsReport_ApplicationExitInfo_BuildIdMappingForArch {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ApplicationExitInfo_BuildIdMappingForArch.Builder>;
								public setArch(arch: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch;
								public setLibraryName(libraryName: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
								public setBuildId(buildId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_CustomAttribute extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_CustomAttribute>;
							public getKey(): string;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getValue(): string;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_CustomAttribute {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_CustomAttribute.Builder>;
								public setValue(value: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
								public setKey(key: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_FilesPayload extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_FilesPayload>;
							public hashCode(): number;
							public getOrgId(): string;
							public equals(this_: any): boolean;
							public getFiles(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_FilesPayload {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_FilesPayload.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
								public setOrgId(orgId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
								public setFiles(files: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_FilesPayload_File extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_FilesPayload_File>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getContents(): androidNative.Array<number>;
							public toString(): string;
							public getFilename(): string;
						}
						export module AutoValue_CrashlyticsReport_FilesPayload_File {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_FilesPayload_File.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
								public setFilename(filename: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
								public setContents(contents: androidNative.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_ProfilingManagerInfo extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ProfilingManagerInfo>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getProfilingTrigger(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_ProfilingManagerInfo {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ProfilingManagerInfo.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo;
								public setProfilingTrigger(profilingTrigger: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_ProfilingManagerInfo_ProfilingTrigger extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ProfilingManagerInfo_ProfilingTrigger>;
							public getTrigger(): number;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_ProfilingManagerInfo_ProfilingTrigger {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ProfilingManagerInfo_ProfilingTrigger.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger;
								public setTrigger(trigger: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session>;
							public getEvents(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>;
							public isCrashed(): boolean;
							public hashCode(): number;
							public getOs(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
							public getGenerator(): string;
							public getApp(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application;
							public toString(): string;
							public getStartedAt(): number;
							public getGeneratorType(): number;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
							public getAppQualitySessionId(): string;
							public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
							public equals(this_: any): boolean;
							public getUser(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User;
							public getIdentifier(): string;
							public getEndedAt(): java.lang.Long;
						}
						export module AutoValue_CrashlyticsReport_Session {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
								public setAppQualitySessionId(appQualitySessionId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setStartedAt(startedAt: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setEndedAt(endedAt: java.lang.Long): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setApp(app: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setOs(os: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setGenerator(generator: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setUser(user: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setDevice(device: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setCrashed(crashed: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setEvents(events: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setIdentifier(identifier: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setGeneratorType(generatorType: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Application extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Application>;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
							public getOrganization(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization;
							public getDevelopmentPlatform(): string;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getDevelopmentPlatformVersion(): string;
							public getIdentifier(): string;
							public toString(): string;
							public getInstallationUuid(): string;
							public getVersion(): string;
							public getDisplayVersion(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Application {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Application.Builder>;
								public setDisplayVersion(displayVersion: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setInstallationUuid(installationUuid: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setVersion(version: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setDevelopmentPlatformVersion(developmentPlatformVersion: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setIdentifier(identifier: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application;
								public setOrganization(organization: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setDevelopmentPlatform(developmentPlatform: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Application_Organization extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Application_Organization>;
							public getClsId(): string;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Application_Organization {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Application_Organization.Builder>;
								public setClsId(clsId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Device extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Device>;
							public getArch(): number;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getState(): number;
							public getManufacturer(): string;
							public toString(): string;
							public getRam(): number;
							public getDiskSpace(): number;
							public getCores(): number;
							public isSimulator(): boolean;
							public getModelClass(): string;
							public getModel(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Device {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Device.Builder>;
								public setArch(arch: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setManufacturer(manufacturer: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setModel(model: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setDiskSpace(diskSpace: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setRam(ram: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setState(state: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setCores(cores: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setSimulator(simulator: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
								public setModelClass(modelClass: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
							public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
							public getLog(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
							public getTimestamp(): number;
							public toString(): string;
							public getRollouts(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState;
							public getType(): string;
							public getApp(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
						}
						export module AutoValue_CrashlyticsReport_Session_Event {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event.Builder>;
								public setApp(app: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setType(type: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
								public setRollouts(rollouts: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setTimestamp(timestamp: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setDevice(device: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setLog(log: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application>;
							public getCustomAttributes(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
							public getCurrentProcessDetails(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
							public getUiOrientation(): number;
							public getBackground(): java.lang.Boolean;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getAppProcessDetails(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails>;
							public getExecution(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
							public toString(): string;
							public getInternalKeys(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application.Builder>;
								public setUiOrientation(uiOrientation: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
								public setCustomAttributes(customAttributes: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setInternalKeys(internalKeys: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setCurrentProcessDetails(currentProcessDetails: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setBackground(background: java.lang.Boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setExecution(execution: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setAppProcessDetails(appProcessDetails: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_Execution extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution>;
							public getAppExitInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
							public getSignal(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getException(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
							public toString(): string;
							public getThreads(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
							public getProfilingManagerInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo;
							public getBinaries(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution.Builder>;
								public setException(exception: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
								public setAppExitInfo(appExitInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setThreads(threads: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setBinaries(binaries: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setProfilingManagerInfo(profilingManagerInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setSignal(signal: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_Execution_BinaryImage extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_BinaryImage>;
							public getSize(): number;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getName(): string;
							public getBaseAddress(): number;
							public toString(): string;
							public getUuid(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_BinaryImage {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_BinaryImage.Builder>;
								public setName(name: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public setBaseAddress(baseAddress: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public setSize(size: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public setUuid(uuid: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Exception extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Exception>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toString(): string;
							public getOverflowCount(): number;
							public getType(): string;
							public getReason(): string;
							public getFrames(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
							public getCausedBy(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Exception {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Exception.Builder>;
								public setCausedBy(causedBy: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setReason(reason: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setType(type: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setOverflowCount(overflowCount: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
								public setFrames(frames: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Signal extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Signal>;
							public getCode(): string;
							public getAddress(): number;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getName(): string;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Signal {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Signal.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal;
								public setCode(code: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
								public setName(name: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
								public setAddress(address: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread>;
							public hashCode(): number;
							public getImportance(): number;
							public equals(this_: any): boolean;
							public getName(): string;
							public toString(): string;
							public getFrames(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread.Builder>;
								public setImportance(importance: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
								public setName(name: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread;
								public setFrames(frames: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread_Frame extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread_Frame>;
							public getSymbol(): string;
							public getPc(): number;
							public hashCode(): number;
							public getImportance(): number;
							public equals(this_: any): boolean;
							public getFile(): string;
							public toString(): string;
							public getOffset(): number;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread_Frame {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread_Frame.Builder>;
								public setFile(file: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setOffset(offset: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setImportance(importance: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setSymbol(symbol: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setPc(pc: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Application_ProcessDetails extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_ProcessDetails>;
							public getProcessName(): string;
							public isDefaultProcess(): boolean;
							public hashCode(): number;
							public getImportance(): number;
							public equals(this_: any): boolean;
							public toString(): string;
							public getPid(): number;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_ProcessDetails {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_ProcessDetails.Builder>;
								public setImportance(importance: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
								public setProcessName(processName: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
								public setPid(pid: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
								public setDefaultProcess(defaultProcess: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Device extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Device>;
							public getBatteryVelocity(): number;
							public getBatteryLevel(): java.lang.Double;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getDiskUsed(): number;
							public toString(): string;
							public isProximityOn(): boolean;
							public getOrientation(): number;
							public getRamUsed(): number;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Device {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Device.Builder>;
								public setDiskUsed(diskUsed: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setOrientation(orientation: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setProximityOn(proximityOn: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
								public setBatteryVelocity(batteryVelocity: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setBatteryLevel(batteryLevel: java.lang.Double): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setRamUsed(ramUsed: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_Log extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Log>;
							public getContent(): string;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Log {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Log.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
								public setContent(content: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getRolloutVariant(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant;
							public getParameterKey(): string;
							public getTemplateVersion(): number;
							public toString(): string;
							public getParameterValue(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment.Builder>;
								public setParameterValue(parameterValue: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
								public setTemplateVersion(templateVersion: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
								public setParameterKey(parameterKey: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment;
								public setRolloutVariant(rolloutVariant: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment_RolloutVariant extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment_RolloutVariant>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getVariantId(): string;
							public toString(): string;
							public getRolloutId(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment_RolloutVariant {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_RolloutAssignment_RolloutVariant.Builder>;
								public setRolloutId(rolloutId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant;
								public setVariantId(variantId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_Event_RolloutsState extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_RolloutsState>;
							public getRolloutAssignments(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_RolloutsState {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_RolloutsState.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState;
								public setRolloutAssignments(rolloutAssignments: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_OperatingSystem extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_OperatingSystem>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getPlatform(): number;
							public isJailbroken(): boolean;
							public toString(): string;
							public getBuildVersion(): string;
							public getVersion(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_OperatingSystem {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_OperatingSystem.Builder>;
								public setBuildVersion(buildVersion: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
								public setJailbroken(jailbroken: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
								public setPlatform(platform: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
								public setVersion(version: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_CrashlyticsReport_Session_User extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_User>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public getIdentifier(): string;
							public toString(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_User {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_User.Builder>;
								public setIdentifier(identifier: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_StaticSessionData extends com.google.firebase.crashlytics.internal.model.StaticSessionData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_StaticSessionData>;
							public osData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public appData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData;
							public toString(): string;
							public deviceData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_StaticSessionData_AppData extends com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_StaticSessionData_AppData>;
							public installUuid(): string;
							public deliveryMechanism(): number;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public versionCode(): string;
							public developmentPlatformProvider(): com.google.firebase.crashlytics.internal.DevelopmentPlatformProvider;
							public toString(): string;
							public versionName(): string;
							public appIdentifier(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_StaticSessionData_DeviceData extends com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_StaticSessionData_DeviceData>;
							public totalRam(): number;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public state(): number;
							public modelClass(): string;
							public manufacturer(): string;
							public toString(): string;
							public arch(): number;
							public diskSpace(): number;
							public isEmulator(): boolean;
							public model(): string;
							public availableProcessors(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export class AutoValue_StaticSessionData_OsData extends com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_StaticSessionData_OsData>;
							public hashCode(): number;
							public equals(this_: any): boolean;
							public osRelease(): string;
							public isRooted(): boolean;
							public toString(): string;
							public osCodeName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export abstract class CrashlyticsReport {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport>;
							public constructor();
							public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							public getSdkVersion(): string;
							public getGmpAppId(): string;
							public withApplicationExitInfo(appExitInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public getFirebaseInstallationId(): string;
							public withNdkPayload(filesPayload: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public getType(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
							public getDisplayVersion(): string;
							public getAppQualitySessionId(): string;
							public getAppExitInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
							public getNdkPayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
							public withAppQualitySessionId(appQualitySessionId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public withEvents(events: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public getFirebaseAuthenticationToken(): string;
							public withSessionEndFields(endedAt: number, isCrashed: boolean, userId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public getPlatform(): number;
							public withFirebaseAuthenticationToken(firebaseAuthenticationToken: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							public withFirebaseInstallationId(firebaseInstallationId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public getInstallationUuid(): string;
							public getBuildVersion(): string;
							public getSession(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
							public withOrganizationId(organizationId: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
						}
						export module CrashlyticsReport {
							export abstract class ApplicationExitInfo {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo>;
								public getBuildIdMappingForArch(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch>;
								public getRss(): number;
								public getPid(): number;
								public getProcessName(): string;
								public getReasonCode(): number;
								public getTraceFile(): string;
								public constructor();
								public getPss(): number;
								public getImportance(): number;
								public getTimestamp(): number;
								public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
							}
							export module ApplicationExitInfo {
								export abstract class BuildIdMappingForArch {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch>;
									public getLibraryName(): string;
									public constructor();
									public getArch(): string;
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
									public getBuildId(): string;
								}
								export module BuildIdMappingForArch {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder>;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch;
										public setArch(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
										public setLibraryName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
										public constructor();
										public setBuildId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch.Builder;
									}
								}
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder>;
									public constructor();
									public setPid(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
									public setReasonCode(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setTraceFile(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setTimestamp(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setPss(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setBuildIdMappingForArch(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.BuildIdMappingForArch>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setRss(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setProcessName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								}
							}
							export class Architecture {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Architecture>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.model.CrashlyticsReport$Architecture interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
								public static UNKNOWN: number = 7;
								public static X86_64: number = 1;
								public static ARM64: number = 9;
								public static X86_32: number = 0;
								public static ARMV6: number = 5;
								public static ARMV7: number = 6;
							}
							export abstract class Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder>;
								public setSession(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setAppExitInfo(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setGmpAppId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setFirebaseAuthenticationToken(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setSdkVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public constructor();
								public setPlatform(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setNdkPayload(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setInstallationUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setBuildVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setFirebaseInstallationId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
								public setAppQualitySessionId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setDisplayVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							}
							export abstract class CustomAttribute {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
								public constructor();
								public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
								public getKey(): string;
								public getValue(): string;
							}
							export module CustomAttribute {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder>;
									public setValue(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
									public constructor();
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute;
									public setKey(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
								}
							}
							export abstract class FilesPayload {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload>;
								public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
								public getOrgId(): string;
								public getFiles(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>;
								public constructor();
							}
							export module FilesPayload {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder>;
									public constructor();
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
									public setFiles(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
									public setOrgId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
								}
								export abstract class File {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>;
									public getContents(): androidNative.Array<number>;
									public constructor();
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
									public getFilename(): string;
								}
								export module File {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder>;
										public setContents(param0: androidNative.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
										public constructor();
										public setFilename(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
									}
								}
							}
							export abstract class ProfilingManagerInfo {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo>;
								public getProfilingTrigger(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger;
								public constructor();
								public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.Builder;
							}
							export module ProfilingManagerInfo {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.Builder>;
									public constructor();
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo;
									public setProfilingTrigger(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.Builder;
								}
								export abstract class ProfilingTrigger {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger>;
									public constructor();
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger.Builder;
									public getTrigger(): number;
								}
								export module ProfilingTrigger {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger.Builder>;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger;
										public constructor();
										public setTrigger(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo.ProfilingTrigger.Builder;
									}
								}
							}
							export abstract class Session {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session>;
								public getEvents(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>;
								public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public getGeneratorType(): number;
								public getEndedAt(): java.lang.Long;
								public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
								public getAppQualitySessionId(): string;
								public constructor();
								public getIdentifier(): string;
								public getOs(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
								public getStartedAt(): number;
								public getIdentifierUtf8Bytes(): androidNative.Array<number>;
								public getGenerator(): string;
								public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public isCrashed(): boolean;
								public getApp(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application;
								public getUser(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User;
							}
							export module Session {
								export abstract class Application {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application>;
									public constructor();
									public getDevelopmentPlatform(): string;
									public getInstallationUuid(): string;
									public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
									public getDevelopmentPlatformVersion(): string;
									public getOrganization(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization;
									public getIdentifier(): string;
									public getDisplayVersion(): string;
									public getVersion(): string;
								}
								export module Application {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder>;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application;
										public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
										public setOrganization(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
										public setDisplayVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
										public constructor();
										public setDevelopmentPlatformVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
										public setVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
										public setInstallationUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
										public setDevelopmentPlatform(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
									}
									export abstract class Organization {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization>;
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
										public getClsId(): string;
										public constructor();
										public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
									}
									export module Organization {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder>;
											public setClsId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization;
											public constructor();
										}
									}
								}
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder>;
									public constructor();
									public setStartedAt(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setGeneratorType(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setUser(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setApp(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setDevice(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setCrashed(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setAppQualitySessionId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setGenerator(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setEvents(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
									public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setOs(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setEndedAt(param0: java.lang.Long): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setIdentifierFromUtf8Bytes(utf8Bytes: androidNative.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								}
								export abstract class Device {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device>;
									public constructor();
									public getCores(): number;
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
									public getState(): number;
									public getRam(): number;
									public getManufacturer(): string;
									public getModelClass(): string;
									public getModel(): string;
									public getDiskSpace(): number;
									public isSimulator(): boolean;
									public getArch(): number;
								}
								export module Device {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder>;
										public setModel(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public setState(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
										public setArch(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public setSimulator(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public setDiskSpace(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public setManufacturer(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public setCores(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public constructor();
										public setRam(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
										public setModelClass(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
									}
								}
								export abstract class Event {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>;
									public getApp(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
									public constructor();
									public getType(): string;
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
									public getRollouts(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState;
									public getTimestamp(): number;
									public getLog(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
									public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
									public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								}
								export module Event {
									export abstract class Application {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application>;
										public getExecution(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
										public getInternalKeys(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
										public getBackground(): java.lang.Boolean;
										public getAppProcessDetails(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails>;
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
										public getCurrentProcessDetails(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
										public constructor();
										public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
										public getCustomAttributes(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
										public getUiOrientation(): number;
									}
									export module Application {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder>;
											public setInternalKeys(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setCustomAttributes(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setBackground(param0: java.lang.Boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setAppProcessDetails(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
											public setExecution(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setCurrentProcessDetails(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setUiOrientation(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public constructor();
										}
										export abstract class Execution {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution>;
											public getProfilingManagerInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo;
											public getAppExitInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
											public getBinaries(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>;
											public getException(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
											public getThreads(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>;
											public getSignal(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal;
											public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
											public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
											public constructor();
										}
										export module Execution {
											export abstract class BinaryImage {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>;
												public constructor();
												public getName(): string;
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
												public getBaseAddress(): number;
												public getUuid(): string;
												public getUuidUtf8Bytes(): androidNative.Array<number>;
												public getSize(): number;
											}
											export module BinaryImage {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder>;
													public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
													public setUuidFromUtf8Bytes(utf8Bytes: androidNative.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
													public constructor();
													public setSize(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
													public setUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
													public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage;
													public setBaseAddress(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
												}
											}
											export abstract class Builder {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder>;
												public constructor();
												public setException(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public setProfilingManagerInfo(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
												public setSignal(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public setBinaries(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public setThreads(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public setAppExitInfo(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
											}
											export abstract class Exception {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception>;
												public constructor();
												public getFrames(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
												public getReason(): string;
												public getType(): string;
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
												public getCausedBy(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
												public getOverflowCount(): number;
											}
											export module Exception {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder>;
													public setType(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public setReason(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public constructor();
													public setCausedBy(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
													public setFrames(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public setOverflowCount(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
												}
											}
											export abstract class Signal {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal>;
												public constructor();
												public getName(): string;
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
												public getCode(): string;
												public getAddress(): number;
											}
											export module Signal {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder>;
													public setCode(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
													public setAddress(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
													public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal;
													public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
													public constructor();
												}
											}
											export abstract class Thread {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>;
												public constructor();
												public getName(): string;
												public getImportance(): number;
												public getFrames(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
											}
											export module Thread {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder>;
													public setFrames(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
													public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
													public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
													public constructor();
													public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread;
												}
												export abstract class Frame {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
													public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
													public getFile(): string;
													public getPc(): number;
													public getImportance(): number;
													public getOffset(): number;
													public constructor();
													public getSymbol(): string;
												}
												export module Frame {
													export abstract class Builder {
														public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder>;
														public setSymbol(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
														public setOffset(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
														public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
														public constructor();
														public setFile(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
														public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame;
														public setPc(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
													}
												}
											}
										}
										export abstract class ProcessDetails {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails>;
											public getPid(): number;
											public isDefaultProcess(): boolean;
											public getProcessName(): string;
											public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
											public getImportance(): number;
											public constructor();
										}
										export module ProcessDetails {
											export abstract class Builder {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder>;
												public constructor();
												public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
												public setProcessName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
												public setPid(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
												public setDefaultProcess(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails.Builder;
												public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.ProcessDetails;
											}
										}
									}
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder>;
										public setLog(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setDevice(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setTimestamp(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setType(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public constructor();
										public setApp(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setRollouts(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
									}
									export abstract class Device {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device>;
										public getBatteryVelocity(): number;
										public getRamUsed(): number;
										public getOrientation(): number;
										public getDiskUsed(): number;
										public constructor();
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
										public isProximityOn(): boolean;
										public getBatteryLevel(): java.lang.Double;
									}
									export module Device {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder>;
											public setBatteryVelocity(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
											public setBatteryLevel(param0: java.lang.Double): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
											public setRamUsed(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
											public setProximityOn(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
											public setDiskUsed(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
											public constructor();
											public setOrientation(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
										}
									}
									export abstract class Log {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log>;
										public constructor();
										public getContent(): string;
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder;
									}
									export module Log {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder>;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
											public constructor();
											public setContent(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder;
										}
									}
									export abstract class RolloutAssignment {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>;
										public getRolloutVariant(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant;
										public getParameterKey(): string;
										public constructor();
										public getTemplateVersion(): number;
										public getParameterValue(): string;
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
									}
									export module RolloutAssignment {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder>;
											public setTemplateVersion(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
											public setParameterValue(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
											public setParameterKey(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment;
											public setRolloutVariant(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.Builder;
											public constructor();
										}
										export abstract class RolloutVariant {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant>;
											public getVariantId(): string;
											public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder;
											public getRolloutId(): string;
											public constructor();
										}
										export module RolloutVariant {
											export abstract class Builder {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder>;
												public setVariantId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder;
												public constructor();
												public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant;
												public setRolloutId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment.RolloutVariant.Builder;
											}
										}
									}
									export abstract class RolloutsState {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState>;
										public getRolloutAssignments(): java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>;
										public constructor();
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState.Builder;
									}
									export module RolloutsState {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState.Builder>;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState;
											public setRolloutAssignments(param0: java.util.List<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutAssignment>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.RolloutsState.Builder;
											public constructor();
										}
									}
								}
								export abstract class OperatingSystem {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem>;
									public constructor();
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
									public getPlatform(): number;
									public getBuildVersion(): string;
									public isJailbroken(): boolean;
									public getVersion(): string;
								}
								export module OperatingSystem {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder>;
										public setJailbroken(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
										public setBuildVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
										public constructor();
										public setPlatform(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
										public setVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
									}
								}
								export abstract class User {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User>;
									public constructor();
									public getIdentifier(): string;
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder;
								}
								export module User {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder>;
										public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder;
										public constructor();
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User;
									}
								}
							}
							export class Type {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type>;
								public static INCOMPLETE: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
								public static JAVA: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
								public static NATIVE: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
								public static valueOf(name: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
								public static values(): androidNative.Array<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export abstract class StaticSessionData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData>;
							public constructor();
							public osData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData;
							public static create(appData: com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData, osData: com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData, deviceData: com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData): com.google.firebase.crashlytics.internal.model.StaticSessionData;
							public appData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData;
							public deviceData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData;
						}
						export module StaticSessionData {
							export abstract class AppData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData>;
								public static create(appIdentifier: string, versionCode: string, versionName: string, installUuid: string, deliveryMechanism: number, developmentPlatformProvider: com.google.firebase.crashlytics.internal.DevelopmentPlatformProvider): com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData;
								public appIdentifier(): string;
								public developmentPlatformProvider(): com.google.firebase.crashlytics.internal.DevelopmentPlatformProvider;
								public installUuid(): string;
								public versionCode(): string;
								public constructor();
								public deliveryMechanism(): number;
								public versionName(): string;
							}
							export abstract class DeviceData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData>;
								public arch(): number;
								public isEmulator(): boolean;
								public diskSpace(): number;
								public modelClass(): string;
								public static create(arch: number, model: string, availableProcessors: number, totalRam: number, diskSpace: number, isEmulator: boolean, state: number, manufacturer: string, modelClass: string): com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData;
								public model(): string;
								public constructor();
								public totalRam(): number;
								public manufacturer(): string;
								public availableProcessors(): number;
								public state(): number;
							}
							export abstract class OsData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData>;
								public osRelease(): string;
								public isRooted(): boolean;
								public static create(osRelease: string, osCodeName: string, isRooted: boolean): com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData;
								public constructor();
								public osCodeName(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module model {
						export module serialization {
							export class CrashlyticsReportJsonTransform {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform>;
								public eventFromJson(e: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
								public reportToJson(report: com.google.firebase.crashlytics.internal.model.CrashlyticsReport): string;
								public applicationExitInfoFromJson(e: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
								public profilingManagerInfoFromJson(e: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo;
								public eventToJson(event: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event): string;
								public constructor();
								public profilingManagerInfoToJson(profilingManagerInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo): string;
								public applicationExitInfoToJson(applicationExitInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): string;
								public reportFromJson(e: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							}
							export module CrashlyticsReportJsonTransform {
								export class ObjectParser<T> extends java.lang.Object {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform.ObjectParser<any>>;
									/**
									 * Constructs a new instance of the com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform$ObjectParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { parse(param0: globalAndroid.util.JsonReader): T });
									public constructor();
									public parse(param0: globalAndroid.util.JsonReader): T;
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
			export module crashlytics {
				export module internal {
					export module network {
						export class HttpGetRequest {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.network.HttpGetRequest>;
							public header(name: string, value: string): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
							public constructor(url: string, queryParams: java.util.Map<string, string>);
							public header(entry: java.util.Map.Entry<string, string>): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
							public execute(): com.google.firebase.crashlytics.internal.network.HttpResponse;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module network {
						export class HttpRequestFactory {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.network.HttpRequestFactory>;
							public constructor();
							public buildHttpGetRequest(url: string, queryParams: java.util.Map<string, string>): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
							public buildHttpGetRequest(url: string): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module network {
						export class HttpResponse {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.network.HttpResponse>;
							public body(): string;
							public code(): number;
							public constructor(code: number, body: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module persistence {
						export class CrashlyticsReportPersistence {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.persistence.CrashlyticsReportPersistence>;
							public persistProfilingManagerInfo(e: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ProfilingManagerInfo, this_: string): void;
							public loadFinalizedReports(): java.util.List<com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId>;
							public getStartTimestampMillis(sessionId: string): number;
							public finalizeReports(this_: string, currentSessionId: number): void;
							public finalizeSessionWithNativeEvent(previousSessionId: string, ndkPayload: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload, applicationExitInfo: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): void;
							public persistReport(e: com.google.firebase.crashlytics.internal.model.CrashlyticsReport): void;
							public persistEvent(event: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event, sessionId: string): void;
							public getOpenSessionIds(): java.util.SortedSet<string>;
							public deleteAllReports(): void;
							public persistEvent(this_: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event, event: string, sessionId: boolean): void;
							public constructor(fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore, settingsProvider: com.google.firebase.crashlytics.internal.settings.SettingsProvider, sessionsSubscriber: com.google.firebase.crashlytics.internal.common.CrashlyticsAppQualitySessionsSubscriber);
							public hasFinalizedReports(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module persistence {
						export class FileStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.persistence.FileStore>;
							public getReport(sessionId: string): java.io.File;
							public getAllOpenSessionIds(): java.util.List<string>;
							public getSessionFile(sessionId: string, filename: string): java.io.File;
							public cleanupPreviousFileSystems(): void;
							public getReports(): java.util.List<java.io.File>;
							public deleteSessionFiles(sessionId: string): boolean;
							public deleteAllCrashlyticsFiles(): void;
							public getCommonFile(filename: string): java.io.File;
							public getSessionFiles(sessionId: string, filter: java.io.FilenameFilter): java.util.List<java.io.File>;
							public getNativeReports(): java.util.List<java.io.File>;
							public getPriorityReport(sessionId: string): java.io.File;
							public getPriorityReports(): java.util.List<java.io.File>;
							public getCommonFiles(filter: java.io.FilenameFilter): java.util.List<java.io.File>;
							public getNativeSessionDir(sessionId: string): java.io.File;
							public constructor(context: globalAndroid.content.Context);
							public getNativeReport(sessionId: string): java.io.File;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module send {
						export class DataTransportCrashlyticsReportSender {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.send.DataTransportCrashlyticsReportSender>;
							public enqueueReport(reportWithSessionId: com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId, isOnDemand: boolean): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId>;
							public static create(context: globalAndroid.content.Context, settingsProvider: com.google.firebase.crashlytics.internal.settings.SettingsProvider, onDemandCounter: com.google.firebase.crashlytics.internal.common.OnDemandCounter): com.google.firebase.crashlytics.internal.send.DataTransportCrashlyticsReportSender;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module send {
						export class ReportQueue {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.send.ReportQueue>;
							public flushScheduledReportsIfAble(): void;
						}
						export module ReportQueue {
							export class ReportRunnable {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.send.ReportQueue.ReportRunnable>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class CachedSettingsIo {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.CachedSettingsIo>;
							public constructor(fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore);
							public readCachedSettings(): org.json.JSONObject;
							public writeCachedSettings(writer: number, this_: org.json.JSONObject): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class DefaultSettingsJsonTransform extends com.google.firebase.crashlytics.internal.settings.SettingsJsonTransform {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.DefaultSettingsJsonTransform>;
							public buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings;
							public buildFromJson(currentTimeProvider: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, json: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class DefaultSettingsSpiCall extends com.google.firebase.crashlytics.internal.settings.SettingsSpiCall {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.DefaultSettingsSpiCall>;
							public createHttpGetRequest(queryParams: java.util.Map<string, string>): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
							public invoke(param0: com.google.firebase.crashlytics.internal.settings.SettingsRequest, param1: boolean): org.json.JSONObject;
							public invoke(httpRequest: com.google.firebase.crashlytics.internal.settings.SettingsRequest, httpResponse: boolean): org.json.JSONObject;
							public constructor(url: string, requestFactory: com.google.firebase.crashlytics.internal.network.HttpRequestFactory);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class Settings {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.Settings>;
							public sessionData: com.google.firebase.crashlytics.internal.settings.Settings.SessionData;
							public featureFlagData: com.google.firebase.crashlytics.internal.settings.Settings.FeatureFlagData;
							public expiresAtMillis: number;
							public settingsVersion: number;
							public cacheDuration: number;
							public onDemandUploadRatePerMinute: number;
							public onDemandBackoffBase: number;
							public onDemandBackoffStepDurationSeconds: number;
							public constructor(expiresAtMillis: number, sessionData: com.google.firebase.crashlytics.internal.settings.Settings.SessionData, featureFlagData: com.google.firebase.crashlytics.internal.settings.Settings.FeatureFlagData, settingsVersion: number, cacheDuration: number, onDemandUploadRatePerMinute: number, onDemandBackoffBase: number, onDemandBackoffStepDurationSeconds: number);
							public isExpired(currentTimeMillis: number): boolean;
						}
						export module Settings {
							export class FeatureFlagData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.Settings.FeatureFlagData>;
								public collectReports: boolean;
								public collectAnrs: boolean;
								public collectBuildIds: boolean;
								public constructor(collectReports: boolean, collectAnrs: boolean, collectBuildIds: boolean);
							}
							export class SessionData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.Settings.SessionData>;
								public maxCustomExceptionEvents: number;
								public maxCompleteSessionsCount: number;
								public constructor(maxCustomExceptionEvents: number, maxCompleteSessionsCount: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsCacheBehavior {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior>;
							public static USE_CACHE: com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior;
							public static SKIP_CACHE_LOOKUP: com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior;
							public static IGNORE_CACHE_EXPIRATION: com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior;
							public static values(): androidNative.Array<com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior>;
							public static valueOf(name: string): com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsController extends com.google.firebase.crashlytics.internal.settings.SettingsProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsController>;
							public loadSettingsData(this_: com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior, cacheBehavior: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorkers): com.google.android.gms.tasks.Task<java.lang.Void>;
							public loadSettingsData(crashlyticsWorkers: com.google.firebase.crashlytics.internal.concurrency.CrashlyticsWorkers): com.google.android.gms.tasks.Task<java.lang.Void>;
							public static create(context: globalAndroid.content.Context, googleAppId: string, idManager: com.google.firebase.crashlytics.internal.common.IdManager, httpRequestFactory: com.google.firebase.crashlytics.internal.network.HttpRequestFactory, versionCode: string, versionName: string, fileStore: com.google.firebase.crashlytics.internal.persistence.FileStore, dataCollectionArbiter: com.google.firebase.crashlytics.internal.common.DataCollectionArbiter): com.google.firebase.crashlytics.internal.settings.SettingsController;
							public getSettingsAsync(): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.settings.Settings>;
							public getSettingsSync(): com.google.firebase.crashlytics.internal.settings.Settings;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsJsonConstants {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsJsonConstants>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsJsonParser {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsJsonParser>;
							public parseSettingsJson(settingsJson: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsJsonTransform {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsJsonTransform>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.settings.SettingsJsonTransform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings });
							public constructor();
							public buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.settings.SettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getSettingsSync(): com.google.firebase.crashlytics.internal.settings.Settings; getSettingsAsync(): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.settings.Settings> });
							public constructor();
							public getSettingsAsync(): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.settings.Settings>;
							public getSettingsSync(): com.google.firebase.crashlytics.internal.settings.Settings;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsRequest {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsRequest>;
							public googleAppId: string;
							public deviceModel: string;
							public osBuildVersion: string;
							public osDisplayVersion: string;
							public installIdProvider: com.google.firebase.crashlytics.internal.common.InstallIdProvider;
							public instanceId: string;
							public displayVersion: string;
							public buildVersion: string;
							public source: number;
							public constructor(googleAppId: string, deviceModel: string, osBuildVersion: string, osDisplayVersion: string, installIdProvider: com.google.firebase.crashlytics.internal.common.InstallIdProvider, instanceId: string, displayVersion: string, buildVersion: string, source: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsSpiCall {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsSpiCall>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.settings.SettingsSpiCall interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { invoke(param0: com.google.firebase.crashlytics.internal.settings.SettingsRequest, param1: boolean): org.json.JSONObject });
							public constructor();
							public invoke(param0: com.google.firebase.crashlytics.internal.settings.SettingsRequest, param1: boolean): org.json.JSONObject;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module settings {
						export class SettingsV3JsonTransform extends com.google.firebase.crashlytics.internal.settings.SettingsJsonTransform {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsV3JsonTransform>;
							public buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings;
							public buildFromJson(currentTimeProvider: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, json: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.Settings;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module stacktrace {
						export class MiddleOutFallbackStrategy extends com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.stacktrace.MiddleOutFallbackStrategy>;
							public getTrimmedStackTrace(this_: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
							public getTrimmedStackTrace(param0: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
							public constructor(maximumStackSize: number, strategies: androidNative.Array<com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module stacktrace {
						export class MiddleOutStrategy extends com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.stacktrace.MiddleOutStrategy>;
							public getTrimmedStackTrace(param0: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
							public getTrimmedStackTrace(stacktrace: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
							public constructor(trimmedSize: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module stacktrace {
						export class RemoveRepeatsStrategy extends com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.stacktrace.RemoveRepeatsStrategy>;
							public constructor();
							public getTrimmedStackTrace(param0: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
							public getTrimmedStackTrace(stacktrace: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
							public constructor(maxRepetitions: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module stacktrace {
						export class StackTraceTrimmingStrategy {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getTrimmedStackTrace(param0: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement> });
							public constructor();
							public getTrimmedStackTrace(param0: androidNative.Array<java.lang.StackTraceElement>): androidNative.Array<java.lang.StackTraceElement>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export module internal {
					export module stacktrace {
						export class TrimmedThrowableData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.stacktrace.TrimmedThrowableData>;
							public localizedMessage: string;
							public className: string;
							public stacktrace: androidNative.Array<java.lang.StackTraceElement>;
							public cause: com.google.firebase.crashlytics.internal.stacktrace.TrimmedThrowableData;
							public static makeTrimmedThrowableData(throwable: java.lang.Throwable, ex: com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy): com.google.firebase.crashlytics.internal.stacktrace.TrimmedThrowableData;
						}
					}
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

//Generics information:
//com.google.firebase.concurrent.DelegatingScheduledFuture:1
//com.google.firebase.concurrent.DelegatingScheduledFuture.Completer:1
//com.google.firebase.concurrent.DelegatingScheduledFuture.Resolver:1
//com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform.ObjectParser:1
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1
