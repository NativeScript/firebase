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
			export module installations {
				export class AutoValue_InstallationTokenResult extends com.google.firebase.installations.InstallationTokenResult {
					public static class: java.lang.Class<com.google.firebase.installations.AutoValue_InstallationTokenResult>;
					public getTokenExpirationTimestamp(): number;
					public toString(): string;
					public equals(this_: any): boolean;
					public toBuilder(): com.google.firebase.installations.InstallationTokenResult.Builder;
					public getToken(): string;
					public getTokenCreationTimestamp(): number;
					public hashCode(): number;
				}
				export module AutoValue_InstallationTokenResult {
					export class Builder extends com.google.firebase.installations.InstallationTokenResult.Builder {
						public static class: java.lang.Class<com.google.firebase.installations.AutoValue_InstallationTokenResult.Builder>;
						public build(): com.google.firebase.installations.InstallationTokenResult;
						public setToken(token: string): com.google.firebase.installations.InstallationTokenResult.Builder;
						public setTokenExpirationTimestamp(tokenExpirationTimestamp: number): com.google.firebase.installations.InstallationTokenResult.Builder;
						public setTokenCreationTimestamp(tokenCreationTimestamp: number): com.google.firebase.installations.InstallationTokenResult.Builder;
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
					public await(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
					public onSuccess(): void;
					public onComplete(task: com.google.android.gms.tasks.Task<java.lang.Void>): void;
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
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.installations';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '19.1.2';
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
					public clearFidCache(): void;
					public static getInstance(): com.google.firebase.installations.FirebaseInstallations;
					public static getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.installations.FirebaseInstallations;
					public getId(): com.google.android.gms.tasks.Task<string>;
					public getToken(forceRefresh: boolean): com.google.android.gms.tasks.Task<com.google.firebase.installations.InstallationTokenResult>;
					public registerFidListener(listener: com.google.firebase.installations.internal.FidListener): com.google.firebase.installations.internal.FidListenerHandle;
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
					public constructor(implementation: { getId(): com.google.android.gms.tasks.Task<string>; getToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.installations.InstallationTokenResult>; delete(): com.google.android.gms.tasks.Task<java.lang.Void>; clearFidCache(): void; registerFidListener(param0: com.google.firebase.installations.internal.FidListener): com.google.firebase.installations.internal.FidListenerHandle });
					public constructor();
					public clearFidCache(): void;
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
					public constructor(status: com.google.firebase.installations.FirebaseInstallationsException.Status);
					public constructor(message: string, status: com.google.firebase.installations.FirebaseInstallationsException.Status);
					public getStatus(): com.google.firebase.installations.FirebaseInstallationsException.Status;
					public constructor(message: string, status: com.google.firebase.installations.FirebaseInstallationsException.Status, cause: java.lang.Throwable);
				}
				export module FirebaseInstallationsException {
					export class Status {
						public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallationsException.Status>;
						public static BAD_CONFIG: com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static UNAVAILABLE: com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static TOO_MANY_REQUESTS: com.google.firebase.installations.FirebaseInstallationsException.Status;
						public static values(): androidNative.Array<com.google.firebase.installations.FirebaseInstallationsException.Status>;
						public static valueOf(name: string): com.google.firebase.installations.FirebaseInstallationsException.Status;
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
				export class FirebaseInstallationsKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.installations.FirebaseInstallationsKtxRegistrar>;
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
					public onException(exception: java.lang.Exception): boolean;
					public onStateReached(persistedInstallationEntry: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
					public constructor(utils: com.google.firebase.installations.Utils, resultTaskCompletionSource: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.installations.InstallationTokenResult>);
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
					public onException(exception: java.lang.Exception): boolean;
					public constructor(taskCompletionSource: com.google.android.gms.tasks.TaskCompletionSource<string>);
					public onStateReached(persistedInstallationEntry: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
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
					public constructor(implementation: { onStateReached(param0: com.google.firebase.installations.local.PersistedInstallationEntry): boolean; onException(param0: java.lang.Exception): boolean });
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
					public getRandomDelayForSyncPrevention(): number;
					public static getInstance(): com.google.firebase.installations.Utils;
					public static getInstance(clock: com.google.firebase.installations.time.Clock): com.google.firebase.installations.Utils;
					public isAuthTokenExpired(entry: com.google.firebase.installations.local.PersistedInstallationEntry): boolean;
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
						public constructor(implementation: { onFidChanged(param0: string): void });
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
						public constructor(implementation: { unregister(): void });
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
						public static DEBUG: boolean = 0;
						public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.installations.interop';
						public static BUILD_TYPE: string = 'release';
						public static VERSION_NAME: string = '17.3.0';
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
						public equals(this_: any): boolean;
						public toBuilder(): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						public getAuthToken(): string;
						public getRefreshToken(): string;
						public hashCode(): number;
						public toString(): string;
					}
					export module AutoValue_PersistedInstallationEntry {
						export class Builder extends com.google.firebase.installations.local.PersistedInstallationEntry.Builder {
							public static class: java.lang.Class<com.google.firebase.installations.local.AutoValue_PersistedInstallationEntry.Builder>;
							public setAuthToken(authToken: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setFisError(fisError: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setExpiresInSecs(expiresInSecs: number): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public build(): com.google.firebase.installations.local.PersistedInstallationEntry;
							public setTokenCreationEpochInSecs(tokenCreationEpochInSecs: number): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setRegistrationStatus(registrationStatus: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setFirebaseInstallationId(firebaseInstallationId: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
							public setRefreshToken(refreshToken: string): com.google.firebase.installations.local.PersistedInstallationEntry.Builder;
						}
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
						public constructor(firebaseApp: com.google.firebase.FirebaseApp);
						public constructor(iidDataStore: com.google.firebase.datastorage.JavaDataStorage, defaultSenderId: string);
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
						public clearDataFile(): void;
						public constructor(firebaseApp: com.google.firebase.FirebaseApp);
						public insertOrUpdatePersistedInstallationEntry(tmpFile: com.google.firebase.installations.local.PersistedInstallationEntry): com.google.firebase.installations.local.PersistedInstallationEntry;
					}
					export module PersistedInstallation {
						export class RegistrationStatus {
							public static class: java.lang.Class<com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus>;
							public static ATTEMPT_MIGRATION: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static NOT_GENERATED: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static UNREGISTERED: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static REGISTERED: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static REGISTER_ERROR: com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
							public static values(): androidNative.Array<com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus>;
							public static valueOf(name: string): com.google.firebase.installations.local.PersistedInstallation.RegistrationStatus;
						}
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
						public withRegisteredFid(fid: string, refreshToken: string, creationTime: number, authToken: string, authTokenExpiration: number): com.google.firebase.installations.local.PersistedInstallationEntry;
						public withNoGeneratedFid(): com.google.firebase.installations.local.PersistedInstallationEntry;
						public isRegistered(): boolean;
						public withClearedAuthToken(): com.google.firebase.installations.local.PersistedInstallationEntry;
						public getExpiresInSecs(): number;
						public isErrored(): boolean;
						public shouldAttemptMigration(): boolean;
						public getFirebaseInstallationId(): string;
						public getFisError(): string;
						public getAuthToken(): string;
						public withAuthToken(authToken: string, authTokenExpiration: number, creationTime: number): com.google.firebase.installations.local.PersistedInstallationEntry;
						public withUnregisteredFid(fid: string): com.google.firebase.installations.local.PersistedInstallationEntry;
						public isNotGenerated(): boolean;
						public withFisError(message: string): com.google.firebase.installations.local.PersistedInstallationEntry;
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
						public equals(this_: any): boolean;
						public getRefreshToken(): string;
						public getResponseCode(): com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
						public hashCode(): number;
						public getAuthToken(): com.google.firebase.installations.remote.TokenResult;
						public toString(): string;
					}
					export module AutoValue_InstallationResponse {
						export class Builder extends com.google.firebase.installations.remote.InstallationResponse.Builder {
							public static class: java.lang.Class<com.google.firebase.installations.remote.AutoValue_InstallationResponse.Builder>;
							public setAuthToken(authToken: com.google.firebase.installations.remote.TokenResult): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setResponseCode(responseCode: com.google.firebase.installations.remote.InstallationResponse.ResponseCode): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setFid(fid: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public setUri(uri: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
							public build(): com.google.firebase.installations.remote.InstallationResponse;
							public setRefreshToken(refreshToken: string): com.google.firebase.installations.remote.InstallationResponse.Builder;
						}
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
						public equals(this_: any): boolean;
						public getResponseCode(): com.google.firebase.installations.remote.TokenResult.ResponseCode;
						public getTokenExpirationTimestamp(): number;
						public toBuilder(): com.google.firebase.installations.remote.TokenResult.Builder;
						public hashCode(): number;
						public getToken(): string;
						public toString(): string;
					}
					export module AutoValue_TokenResult {
						export class Builder extends com.google.firebase.installations.remote.TokenResult.Builder {
							public static class: java.lang.Class<com.google.firebase.installations.remote.AutoValue_TokenResult.Builder>;
							public setToken(token: string): com.google.firebase.installations.remote.TokenResult.Builder;
							public setTokenExpirationTimestamp(tokenExpirationTimestamp: number): com.google.firebase.installations.remote.TokenResult.Builder;
							public setResponseCode(responseCode: com.google.firebase.installations.remote.TokenResult.ResponseCode): com.google.firebase.installations.remote.TokenResult.Builder;
							public build(): com.google.firebase.installations.remote.TokenResult;
						}
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
						public deleteFirebaseInstallation(ignored: string, httpURLConnection: string, this_: string, apiKey: string): void;
						public generateAuthToken(ignored: string, httpURLConnection: string, retryCount: string, this_: string): com.google.firebase.installations.remote.TokenResult;
						public constructor(context: globalAndroid.content.Context, heartBeatProvider: com.google.firebase.inject.Provider<com.google.firebase.heartbeatinfo.HeartBeatController>);
						public createFirebaseInstallation(ignored: string, httpURLConnection: string, retryCount: string, this_: string, apiKey: string): com.google.firebase.installations.remote.InstallationResponse;
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
							public static valueOf(name: string): com.google.firebase.installations.remote.InstallationResponse.ResponseCode;
							public static values(): androidNative.Array<com.google.firebase.installations.remote.InstallationResponse.ResponseCode>;
						}
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
						public setNextRequestTime(responseCode: number): void;
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
							public static valueOf(name: string): com.google.firebase.installations.remote.TokenResult.ResponseCode;
							public static values(): androidNative.Array<com.google.firebase.installations.remote.TokenResult.ResponseCode>;
						}
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
						public constructor(implementation: { currentTimeMillis(): number });
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
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1
