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
			export module functions {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.functions.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.functions';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '22.1.1';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class ContextProvider {
					public static class: java.lang.Class<com.google.firebase.functions.ContextProvider>;
					/**
					 * Constructs a new instance of the com.google.firebase.functions.ContextProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getContext(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext> });
					public constructor();
					public getContext(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class DaggerFunctionsComponent {
					public static class: java.lang.Class<com.google.firebase.functions.DaggerFunctionsComponent>;
					public static builder(): com.google.firebase.functions.FunctionsComponent.Builder;
				}
				export module DaggerFunctionsComponent {
					export class Builder extends com.google.firebase.functions.FunctionsComponent.Builder {
						public static class: java.lang.Class<com.google.firebase.functions.DaggerFunctionsComponent.Builder>;
						public setUiExecutor(param0: java.util.concurrent.Executor): com.google.firebase.functions.FunctionsComponent.Builder;
						public setAppCheck(appCheck: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
						public build(): com.google.firebase.functions.FunctionsComponent;
						public setFirebaseOptions(options: com.google.firebase.FirebaseOptions): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
						public setAppCheck(param0: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>): com.google.firebase.functions.FunctionsComponent.Builder;
						public setIid(iid: com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
						public setAuth(param0: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>): com.google.firebase.functions.FunctionsComponent.Builder;
						public setAuth(auth: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
						public setFirebaseOptions(param0: com.google.firebase.FirebaseOptions): com.google.firebase.functions.FunctionsComponent.Builder;
						public setLiteExecutor(param0: java.util.concurrent.Executor): com.google.firebase.functions.FunctionsComponent.Builder;
						public setApplicationContext(applicationContext: globalAndroid.content.Context): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
						public setApplicationContext(param0: globalAndroid.content.Context): com.google.firebase.functions.FunctionsComponent.Builder;
						public setIid(param0: com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>): com.google.firebase.functions.FunctionsComponent.Builder;
						public setUiExecutor(executor: java.util.concurrent.Executor): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
						public setLiteExecutor(executor: java.util.concurrent.Executor): com.google.firebase.functions.DaggerFunctionsComponent.Builder;
					}
					export class FunctionsComponentImpl extends com.google.firebase.functions.FunctionsComponent {
						public static class: java.lang.Class<com.google.firebase.functions.DaggerFunctionsComponent.FunctionsComponentImpl>;
						public getMultiResourceComponent(): com.google.firebase.functions.FunctionsMultiResourceComponent;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseContextProvider extends com.google.firebase.functions.ContextProvider {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseContextProvider>;
					public constructor(tokenProvider: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>, instanceId: com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>, appCheckDeferred: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>, executor: java.util.concurrent.Executor);
					public getContext(appCheckToken: boolean): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>;
					public getContext(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseContextProvider_Factory extends com.google.firebase.functions.dagger.internal.Factory<com.google.firebase.functions.FirebaseContextProvider> {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseContextProvider_Factory>;
					public get(): com.google.firebase.functions.FirebaseContextProvider;
					public get(): any;
					public static newInstance(tokenProvider: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>, instanceId: com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>, appCheckDeferred: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>, executor: java.util.concurrent.Executor): com.google.firebase.functions.FirebaseContextProvider;
					public static create(
						tokenProvider: com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>>,
						instanceIdProvider: com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>>,
						appCheckDeferredProvider: com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>>,
						executorProvider: com.google.firebase.functions.dagger.internal.Provider<java.util.concurrent.Executor>
					): com.google.firebase.functions.FirebaseContextProvider_Factory;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseFunctions {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctions>;
					public getHttpsCallable(name: string): com.google.firebase.functions.HttpsCallableReference;
					public static getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.functions.FirebaseFunctions;
					public useEmulator(host: string, port: number): void;
					public call$com_google_firebase_firebase_functions(url: java.net.URL, data: any, options: com.google.firebase.functions.HttpsCallOptions): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public getHttpsCallable(name: string, options: com.google.firebase.functions.HttpsCallableOptions): com.google.firebase.functions.HttpsCallableReference;
					public call$com_google_firebase_firebase_functions(name: string, data: any, options: com.google.firebase.functions.HttpsCallOptions): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public static getInstance(app: com.google.firebase.FirebaseApp, regionOrCustomDomain: string): com.google.firebase.functions.FirebaseFunctions;
					public static getInstance(): com.google.firebase.functions.FirebaseFunctions;
					public constructor(isRegion: globalAndroid.content.Context, this_: string, context: string, projectId: com.google.firebase.functions.ContextProvider, regionOrCustomDomain: java.util.concurrent.Executor, contextProvider: java.util.concurrent.Executor);
					public static getInstance(regionOrCustomDomain: string): com.google.firebase.functions.FirebaseFunctions;
					public stream$com_google_firebase_firebase_functions(this_: java.net.URL, url: any, data: com.google.firebase.functions.HttpsCallOptions): org.reactivestreams.Publisher<com.google.firebase.functions.StreamResponse>;
					public getURL$com_google_firebase_firebase_functions(emulatorSettings: string): java.net.URL;
					public getHttpsCallableFromUrl(url: java.net.URL, options: com.google.firebase.functions.HttpsCallableOptions): com.google.firebase.functions.HttpsCallableReference;
					public stream$com_google_firebase_firebase_functions(name: string, data: any, options: com.google.firebase.functions.HttpsCallOptions): org.reactivestreams.Publisher<com.google.firebase.functions.StreamResponse>;
					/** @deprecated */
					public useFunctionsEmulator(origin: string): void;
					public getHttpsCallableFromUrl(url: java.net.URL): com.google.firebase.functions.HttpsCallableReference;
				}
				export module FirebaseFunctions {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctions.Companion>;
						public getInstance(regionOrCustomDomain: string): com.google.firebase.functions.FirebaseFunctions;
						public getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.functions.FirebaseFunctions;
						public getInstance(): com.google.firebase.functions.FirebaseFunctions;
						public getInstance(this_: com.google.firebase.FirebaseApp, app: string): com.google.firebase.functions.FirebaseFunctions;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseFunctionsException {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsException>;
					public constructor(message: string, code: com.google.firebase.functions.FirebaseFunctionsException.Code, details: any, cause: java.lang.Throwable);
					public getCode(): com.google.firebase.functions.FirebaseFunctionsException.Code;
					public static fromResponse$com_google_firebase_firebase_functions(code: com.google.firebase.functions.FirebaseFunctionsException.Code, body: string, serializer: com.google.firebase.functions.Serializer): com.google.firebase.functions.FirebaseFunctionsException;
					public constructor(message: string, code: com.google.firebase.functions.FirebaseFunctionsException.Code, details: any);
					public getDetails(): any;
				}
				export module FirebaseFunctionsException {
					export class Code {
						public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsException.Code>;
						public static OK: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static CANCELLED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNKNOWN: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static INVALID_ARGUMENT: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static DEADLINE_EXCEEDED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static NOT_FOUND: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static ALREADY_EXISTS: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static PERMISSION_DENIED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static RESOURCE_EXHAUSTED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static FAILED_PRECONDITION: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static ABORTED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static OUT_OF_RANGE: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNIMPLEMENTED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static INTERNAL: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNAVAILABLE: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static DATA_LOSS: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static UNAUTHENTICATED: com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static valueOf(value: string): com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static fromHttpStatus(status: number): com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static fromValue(value: number): com.google.firebase.functions.FirebaseFunctionsException.Code;
						public static values(): androidNative.Array<com.google.firebase.functions.FirebaseFunctionsException.Code>;
						public static getEntries(): any;
					}
					export module Code {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsException.Code.Companion>;
							public fromValue(value: number): com.google.firebase.functions.FirebaseFunctionsException.Code;
							public fromHttpStatus(status: number): com.google.firebase.functions.FirebaseFunctionsException.Code;
						}
					}
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsException.Companion>;
						public fromResponse$com_google_firebase_firebase_functions(error: com.google.firebase.functions.FirebaseFunctionsException.Code, iae: string, actualCode: com.google.firebase.functions.Serializer): com.google.firebase.functions.FirebaseFunctionsException;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FirebaseFunctionsKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctionsKtxRegistrar>;
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
			export module functions {
				export class FirebaseFunctions_Factory {
					public static class: java.lang.Class<com.google.firebase.functions.FirebaseFunctions_Factory>;
					public get(regionOrCustomDomain: string): com.google.firebase.functions.FirebaseFunctions;
					public static newInstance(context: globalAndroid.content.Context, projectId: string, regionOrCustomDomain: string, contextProvider: com.google.firebase.functions.ContextProvider, executor: java.util.concurrent.Executor, uiExecutor: java.util.concurrent.Executor): com.google.firebase.functions.FirebaseFunctions;
					public static create(
						contextProvider: com.google.firebase.functions.dagger.internal.Provider<globalAndroid.content.Context>,
						projectIdProvider: com.google.firebase.functions.dagger.internal.Provider<string>,
						contextProvider2: com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.functions.ContextProvider>,
						executorProvider: com.google.firebase.functions.dagger.internal.Provider<java.util.concurrent.Executor>,
						uiExecutorProvider: com.google.firebase.functions.dagger.internal.Provider<java.util.concurrent.Executor>
					): com.google.firebase.functions.FirebaseFunctions_Factory;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsComponent {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsComponent>;
					/**
					 * Constructs a new instance of the com.google.firebase.functions.FunctionsComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getMultiResourceComponent(): com.google.firebase.functions.FunctionsMultiResourceComponent });
					public constructor();
					public getMultiResourceComponent(): com.google.firebase.functions.FunctionsMultiResourceComponent;
				}
				export module FunctionsComponent {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.functions.FunctionsComponent.Builder>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.FunctionsComponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setApplicationContext(param0: globalAndroid.content.Context): com.google.firebase.functions.FunctionsComponent.Builder;
							setFirebaseOptions(param0: com.google.firebase.FirebaseOptions): com.google.firebase.functions.FunctionsComponent.Builder;
							setLiteExecutor(param0: java.util.concurrent.Executor): com.google.firebase.functions.FunctionsComponent.Builder;
							setUiExecutor(param0: java.util.concurrent.Executor): com.google.firebase.functions.FunctionsComponent.Builder;
							setAuth(param0: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>): com.google.firebase.functions.FunctionsComponent.Builder;
							setIid(param0: com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>): com.google.firebase.functions.FunctionsComponent.Builder;
							setAppCheck(param0: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>): com.google.firebase.functions.FunctionsComponent.Builder;
							build(): com.google.firebase.functions.FunctionsComponent;
						});
						public constructor();
						public setFirebaseOptions(param0: com.google.firebase.FirebaseOptions): com.google.firebase.functions.FunctionsComponent.Builder;
						public setLiteExecutor(param0: java.util.concurrent.Executor): com.google.firebase.functions.FunctionsComponent.Builder;
						public setUiExecutor(param0: java.util.concurrent.Executor): com.google.firebase.functions.FunctionsComponent.Builder;
						public build(): com.google.firebase.functions.FunctionsComponent;
						public setAppCheck(param0: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>): com.google.firebase.functions.FunctionsComponent.Builder;
						public setApplicationContext(param0: globalAndroid.content.Context): com.google.firebase.functions.FunctionsComponent.Builder;
						public setIid(param0: com.google.firebase.inject.Provider<com.google.firebase.iid.internal.FirebaseInstanceIdInternal>): com.google.firebase.functions.FunctionsComponent.Builder;
						public setAuth(param0: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>): com.google.firebase.functions.FunctionsComponent.Builder;
					}
					export class MainModule {
						public static class: java.lang.Class<com.google.firebase.functions.FunctionsComponent.MainModule>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.FunctionsComponent$MainModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { contextProvider(param0: com.google.firebase.functions.FirebaseContextProvider): com.google.firebase.functions.ContextProvider; '<clinit>'(): void });
						public constructor();
						public contextProvider(param0: com.google.firebase.functions.FirebaseContextProvider): com.google.firebase.functions.ContextProvider;
					}
					export module MainModule {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.functions.FunctionsComponent.MainModule.Companion>;
							public bindProjectId(options: com.google.firebase.FirebaseOptions): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsComponent_MainModule_Companion_BindProjectIdFactory extends com.google.firebase.functions.dagger.internal.Factory<string> {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsComponent_MainModule_Companion_BindProjectIdFactory>;
					public get(): string;
					public get(): any;
					public static create(optionsProvider: com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.FirebaseOptions>): com.google.firebase.functions.FunctionsComponent_MainModule_Companion_BindProjectIdFactory;
					public static bindProjectId(options: com.google.firebase.FirebaseOptions): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsMultiResourceComponent {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsMultiResourceComponent>;
					public get(this_: string): com.google.firebase.functions.FirebaseFunctions;
					public constructor(functionsFactory: com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory);
				}
				export module FunctionsMultiResourceComponent {
					export class FirebaseFunctionsFactory {
						public static class: java.lang.Class<com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.FunctionsMultiResourceComponent$FirebaseFunctionsFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { create(param0: string): com.google.firebase.functions.FirebaseFunctions });
						public constructor();
						public create(param0: string): com.google.firebase.functions.FirebaseFunctions;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsMultiResourceComponent_Factory extends com.google.firebase.functions.dagger.internal.Factory<com.google.firebase.functions.FunctionsMultiResourceComponent> {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsMultiResourceComponent_Factory>;
					public static newInstance(functionsFactory: com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory): com.google.firebase.functions.FunctionsMultiResourceComponent;
					public get(): any;
					public get(): com.google.firebase.functions.FunctionsMultiResourceComponent;
					public static create(functionsFactoryProvider: com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory>): com.google.firebase.functions.FunctionsMultiResourceComponent_Factory;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsMultiResourceComponent_FirebaseFunctionsFactory_Impl extends com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsMultiResourceComponent_FirebaseFunctionsFactory_Impl>;
					public create(regionOrCustomDomain: string): com.google.firebase.functions.FirebaseFunctions;
					public static createFactoryProvider(delegateFactory: com.google.firebase.functions.FirebaseFunctions_Factory): com.google.firebase.functions.dagger.internal.Provider<com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory>;
					public static create(delegateFactory: com.google.firebase.functions.FirebaseFunctions_Factory): javax.inject.Provider<com.google.firebase.functions.FunctionsMultiResourceComponent.FirebaseFunctionsFactory>;
					public create(param0: string): com.google.firebase.functions.FirebaseFunctions;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class FunctionsRegistrar {
					public static class: java.lang.Class<com.google.firebase.functions.FunctionsRegistrar>;
					public constructor();
					public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				}
				export module FunctionsRegistrar {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.functions.FunctionsRegistrar.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallOptions {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallOptions>;
					public limitedUseAppCheckTokens: boolean;
					public setTimeout$com_google_firebase_firebase_functions(timeout: number, units: java.util.concurrent.TimeUnit): void;
					public getLimitedUseAppCheckTokens$com_google_firebase_firebase_functions(): boolean;
					public constructor();
					public constructor(publicCallableOptions: com.google.firebase.functions.HttpsCallableOptions);
					public getTimeout$com_google_firebase_firebase_functions(): number;
					public apply$com_google_firebase_firebase_functions(client: okhttp3.OkHttpClient): okhttp3.OkHttpClient;
				}
				export module HttpsCallOptions {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.functions.HttpsCallOptions.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableContext {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableContext>;
					public getAppCheckToken(): string;
					public getAuthToken(): string;
					public constructor(authToken: string, instanceIdToken: string, appCheckToken: string);
					public getInstanceIdToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableOptions {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableOptions>;
					public limitedUseAppCheckTokens: boolean;
					public getLimitedUseAppCheckTokens(): boolean;
				}
				export module HttpsCallableOptions {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableOptions.Builder>;
						public limitedUseAppCheckTokens: boolean;
						public build(): com.google.firebase.functions.HttpsCallableOptions;
						public constructor();
						public getLimitedUseAppCheckTokens(): boolean;
						public setLimitedUseAppCheckTokens(limitedUse: boolean): com.google.firebase.functions.HttpsCallableOptions.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableReference {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableReference>;
					public setTimeout(timeout: number, units: java.util.concurrent.TimeUnit): void;
					public call(data: any): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public stream(data: any): org.reactivestreams.Publisher<com.google.firebase.functions.StreamResponse>;
					public getTimeout(): number;
					public constructor(functionsClient: com.google.firebase.functions.FirebaseFunctions, url: java.net.URL, options: com.google.firebase.functions.HttpsCallOptions);
					public call(): com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableResult>;
					public constructor(functionsClient: com.google.firebase.functions.FirebaseFunctions, name: string, options: com.google.firebase.functions.HttpsCallOptions);
					public withTimeout(this_: number, timeout: java.util.concurrent.TimeUnit): com.google.firebase.functions.HttpsCallableReference;
					public getOptions$com_google_firebase_firebase_functions(): com.google.firebase.functions.HttpsCallOptions;
					public stream(): org.reactivestreams.Publisher<com.google.firebase.functions.StreamResponse>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class HttpsCallableResult {
					public static class: java.lang.Class<com.google.firebase.functions.HttpsCallableResult>;
					public data: any;
					public getData(): any;
					public constructor(data: any);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class PublisherStream extends org.reactivestreams.Publisher<com.google.firebase.functions.StreamResponse> {
					public static class: java.lang.Class<com.google.firebase.functions.PublisherStream>;
					public constructor(url: java.net.URL, data: any, options: com.google.firebase.functions.HttpsCallOptions, client: okhttp3.OkHttpClient, serializer: com.google.firebase.functions.Serializer, contextTask: com.google.android.gms.tasks.Task<com.google.firebase.functions.HttpsCallableContext>, executor: java.util.concurrent.Executor);
					public subscribe(param0: org.reactivestreams.Subscriber<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export class Serializer {
					public static class: java.lang.Class<com.google.firebase.functions.Serializer>;
					public static LONG_TYPE: string = 'type.googleapis.com/google.protobuf.Int64Value';
					public static UNSIGNED_LONG_TYPE: string = 'type.googleapis.com/google.protobuf.UInt64Value';
					public encode(wrapped: any): any;
					public constructor();
					public decode(e: any): any;
				}
				export module Serializer {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.functions.Serializer.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export abstract class StreamResponse {
					public static class: java.lang.Class<com.google.firebase.functions.StreamResponse>;
				}
				export module StreamResponse {
					export class Message extends com.google.firebase.functions.StreamResponse {
						public static class: java.lang.Class<com.google.firebase.functions.StreamResponse.Message>;
						public constructor(message: com.google.firebase.functions.HttpsCallableResult);
						public getMessage(): com.google.firebase.functions.HttpsCallableResult;
					}
					export class Result extends com.google.firebase.functions.StreamResponse {
						public static class: java.lang.Class<com.google.firebase.functions.StreamResponse.Result>;
						public constructor(result: com.google.firebase.functions.HttpsCallableResult);
						public getResult(): com.google.firebase.functions.HttpsCallableResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export module dagger {
					export class Binds {
						public static class: java.lang.Class<com.google.firebase.functions.dagger.Binds>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.dagger.Binds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export class BindsInstance {
						public static class: java.lang.Class<com.google.firebase.functions.dagger.BindsInstance>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.dagger.BindsInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export class Component {
						public static class: java.lang.Class<com.google.firebase.functions.dagger.Component>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.dagger.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { modules(): androidNative.Array<java.lang.Class<any>>; dependencies(): androidNative.Array<java.lang.Class<any>> });
						public constructor();
						public modules(): androidNative.Array<java.lang.Class<any>>;
						public dependencies(): androidNative.Array<java.lang.Class<any>>;
					}
					export module Component {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.Component.Builder>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
						export class Factory {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.Component.Factory>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.Component$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export class Lazy<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.functions.dagger.Lazy<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export class Module {
						public static class: java.lang.Class<com.google.firebase.functions.dagger.Module>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export class Provides {
						public static class: java.lang.Class<com.google.firebase.functions.dagger.Provides>;
						/**
						 * Constructs a new instance of the com.google.firebase.functions.dagger.Provides interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module assisted {
						export class Assisted {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.assisted.Assisted>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.assisted.Assisted interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module assisted {
						export class AssistedFactory {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.assisted.AssistedFactory>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.assisted.AssistedFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module assisted {
						export class AssistedInject {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.assisted.AssistedInject>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.assisted.AssistedInject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module internal {
						export class DaggerGenerated {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.DaggerGenerated>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.internal.DaggerGenerated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module internal {
						export class DoubleCheck<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.DoubleCheck<any>>;
							public static provider(delegate: com.google.firebase.functions.dagger.internal.Provider<any>): com.google.firebase.functions.dagger.internal.Provider<any>;
							public static lazy(lazy: com.google.firebase.functions.dagger.internal.Provider<any>): com.google.firebase.functions.dagger.Lazy<any>;
							public get(): T;
							public static lazy(provider: javax.inject.Provider): com.google.firebase.functions.dagger.Lazy<any>;
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
			export module functions {
				export module dagger {
					export module internal {
						export class Factory<T> extends com.google.firebase.functions.dagger.internal.Provider<any> {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.Factory<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module internal {
						export class InstanceFactory<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.InstanceFactory<any>>;
							public static create(instance: any): com.google.firebase.functions.dagger.internal.Factory<any>;
							public static createNullable(instance: any): com.google.firebase.functions.dagger.internal.Factory<any>;
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
			export module functions {
				export module dagger {
					export module internal {
						export class Preconditions {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.Preconditions>;
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
			export module functions {
				export module dagger {
					export module internal {
						export class Provider<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.Provider<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.internal.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module internal {
						export class Providers {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.Providers>;
							public static asDaggerProvider(provider: javax.inject.Provider): com.google.firebase.functions.dagger.internal.Provider<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module functions {
				export module dagger {
					export module internal {
						export class QualifierMetadata {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.QualifierMetadata>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.internal.QualifierMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module dagger {
					export module internal {
						export class ScopeMetadata {
							public static class: java.lang.Class<com.google.firebase.functions.dagger.internal.ScopeMetadata>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.dagger.internal.ScopeMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module jakarta {
					export module inject {
						export class Provider<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.functions.jakarta.inject.Provider<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.functions.jakarta.inject.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module functions {
				export module org {
					export module jspecify {
						export module annotations {
							export class Nullable {
								public static class: java.lang.Class<com.google.firebase.functions.org.jspecify.annotations.Nullable>;
								/**
								 * Constructs a new instance of the com.google.firebase.functions.org.jspecify.annotations.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
//com.google.firebase.functions.dagger.Lazy:1
//com.google.firebase.functions.dagger.internal.DoubleCheck:1
//com.google.firebase.functions.dagger.internal.Factory:1
//com.google.firebase.functions.dagger.internal.InstanceFactory:1
//com.google.firebase.functions.dagger.internal.Provider:1
//com.google.firebase.functions.jakarta.inject.Provider:1
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1
