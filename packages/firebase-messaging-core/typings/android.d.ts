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
			export module iid {
				export class FirebaseInstanceIdReceiver {
					public static class: java.lang.Class<com.google.firebase.iid.FirebaseInstanceIdReceiver>;
					public constructor();
					public onNotificationDismissed(context: globalAndroid.content.Context, data: globalAndroid.os.Bundle): void;
					public onMessageReceive(this_: globalAndroid.content.Context, context: com.google.android.gms.cloudmessaging.CloudMessage): number;
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
			export module messaging {
				export class AutoProtoEncoderDoNotUseEncoder {
					public static class: java.lang.Class<com.google.firebase.messaging.AutoProtoEncoderDoNotUseEncoder>;
					public static CODEGEN_VERSION: number = 2;
					public static CONFIG: com.google.firebase.encoders.config.Configurator;
					public configure(cfg: com.google.firebase.encoders.config.EncoderConfig<any>): void;
				}
				export module AutoProtoEncoderDoNotUseEncoder {
					export class MessagingClientEventEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.messaging.reporting.MessagingClientEvent> {
						public static class: java.lang.Class<com.google.firebase.messaging.AutoProtoEncoderDoNotUseEncoder.MessagingClientEventEncoder>;
						public encode(value: com.google.firebase.messaging.reporting.MessagingClientEvent, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
					}
					export class MessagingClientEventExtensionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.messaging.reporting.MessagingClientEventExtension> {
						public static class: java.lang.Class<com.google.firebase.messaging.AutoProtoEncoderDoNotUseEncoder.MessagingClientEventExtensionEncoder>;
						public encode(value: com.google.firebase.messaging.reporting.MessagingClientEventExtension, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
					}
					export class ProtoEncoderDoNotUseEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.messaging.ProtoEncoderDoNotUse> {
						public static class: java.lang.Class<com.google.firebase.messaging.AutoProtoEncoderDoNotUseEncoder.ProtoEncoderDoNotUseEncoder>;
						public encode(value: com.google.firebase.messaging.ProtoEncoderDoNotUse, ctx: com.google.firebase.encoders.ObjectEncoderContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.messaging.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.messaging';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '25.1.3';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class ByteStreams {
					public static class: java.lang.Class<com.google.firebase.messaging.ByteStreams>;
					public static toByteArray(in_: java.io.InputStream): androidNative.Array<number>;
					public static limit(in_: java.io.InputStream, limit: number): java.io.InputStream;
				}
				export module ByteStreams {
					export class LimitedInputStream {
						public static class: java.lang.Class<com.google.firebase.messaging.ByteStreams.LimitedInputStream>;
						public read(): number;
						public mark(readLimit: number): void;
						public read(b: androidNative.Array<number>, off: number, len: number): number;
						public reset(): void;
						public available(): number;
						public skip(n: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class CommonNotificationBuilder {
					public static class: java.lang.Class<com.google.firebase.messaging.CommonNotificationBuilder>;
					public static METADATA_DEFAULT_COLOR: string = 'com.google.firebase.messaging.default_notification_color';
					public static METADATA_DEFAULT_ICON: string = 'com.google.firebase.messaging.default_notification_icon';
					public static METADATA_DEFAULT_CHANNEL_ID: string = 'com.google.firebase.messaging.default_notification_channel_id';
					public static FCM_FALLBACK_NOTIFICATION_CHANNEL: string = 'fcm_fallback_notification_channel';
					public static FCM_FALLBACK_NOTIFICATION_CHANNEL_LABEL: string = 'fcm_fallback_notification_channel_label';
					public static getOrCreateChannel(e: globalAndroid.content.Context, defaultChannelName: string, channelLabelResourceId: globalAndroid.os.Bundle): string;
					public static createNotificationInfo(callingContext: globalAndroid.content.Context, appContext: globalAndroid.content.Context, params: com.google.firebase.messaging.NotificationParams, channelId: string, manifestMetadata: globalAndroid.os.Bundle): com.google.firebase.messaging.CommonNotificationBuilder.DisplayNotificationInfo;
				}
				export module CommonNotificationBuilder {
					export class DisplayNotificationInfo {
						public static class: java.lang.Class<com.google.firebase.messaging.CommonNotificationBuilder.DisplayNotificationInfo>;
						public notificationBuilder: androidx.core.app.NotificationCompat.Builder;
						public tag: string;
						public id: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class Constants {
					public static class: java.lang.Class<com.google.firebase.messaging.Constants>;
					public static TAG: string = 'FirebaseMessaging';
					public static FCM_WAKE_LOCK: string = 'wake:com.google.firebase.messaging';
					public static WAKE_LOCK_ACQUIRE_TIMEOUT_MILLIS: number;
					public static IPC_BUNDLE_KEY_SEND_ERROR: string = 'error';
				}
				export module Constants {
					export class AnalyticsKeys {
						public static class: java.lang.Class<com.google.firebase.messaging.Constants.AnalyticsKeys>;
						public static PREFIX: string = 'google.c.a.';
						public static ENABLED: string = 'google.c.a.e';
						public static COMPOSER_ID: string = 'google.c.a.c_id';
						public static COMPOSER_LABEL: string = 'google.c.a.c_l';
						public static MESSAGE_TIMESTAMP: string = 'google.c.a.ts';
						public static MESSAGE_USE_DEVICE_TIME: string = 'google.c.a.udt';
						public static TRACK_CONVERSIONS: string = 'google.c.a.tc';
						public static ABT_EXPERIMENT: string = 'google.c.a.abt';
						public static MESSAGE_LABEL: string = 'google.c.a.m_l';
						public static MESSAGE_CHANNEL: string = 'google.c.a.m_c';
					}
					export class FirelogAnalytics {
						public static class: java.lang.Class<com.google.firebase.messaging.Constants.FirelogAnalytics>;
						public static FCM_LOG_SOURCE: string = 'FCM_CLIENT_EVENT_LOGGING';
					}
					export class MessageNotificationKeys {
						public static class: java.lang.Class<com.google.firebase.messaging.Constants.MessageNotificationKeys>;
						public static RESERVED_PREFIX: string = 'gcm.';
						public static NOTIFICATION_PREFIX: string = 'gcm.n.';
						public static NOTIFICATION_PREFIX_OLD: string = 'gcm.notification.';
						public static ENABLE_NOTIFICATION: string = 'gcm.n.e';
						public static DO_NOT_PROXY: string = 'gcm.n.dnp';
						public static NO_UI: string = 'gcm.n.noui';
						public static TITLE: string = 'gcm.n.title';
						public static BODY: string = 'gcm.n.body';
						public static ICON: string = 'gcm.n.icon';
						public static IMAGE_URL: string = 'gcm.n.image';
						public static TAG: string = 'gcm.n.tag';
						public static COLOR: string = 'gcm.n.color';
						public static TICKER: string = 'gcm.n.ticker';
						public static LOCAL_ONLY: string = 'gcm.n.local_only';
						public static STICKY: string = 'gcm.n.sticky';
						public static NOTIFICATION_PRIORITY: string = 'gcm.n.notification_priority';
						public static DEFAULT_SOUND: string = 'gcm.n.default_sound';
						public static DEFAULT_VIBRATE_TIMINGS: string = 'gcm.n.default_vibrate_timings';
						public static DEFAULT_LIGHT_SETTINGS: string = 'gcm.n.default_light_settings';
						public static NOTIFICATION_COUNT: string = 'gcm.n.notification_count';
						public static VISIBILITY: string = 'gcm.n.visibility';
						public static VIBRATE_TIMINGS: string = 'gcm.n.vibrate_timings';
						public static LIGHT_SETTINGS: string = 'gcm.n.light_settings';
						public static EVENT_TIME: string = 'gcm.n.event_time';
						public static SOUND_2: string = 'gcm.n.sound2';
						public static SOUND: string = 'gcm.n.sound';
						public static CLICK_ACTION: string = 'gcm.n.click_action';
						public static LINK: string = 'gcm.n.link';
						public static LINK_ANDROID: string = 'gcm.n.link_android';
						public static CHANNEL: string = 'gcm.n.android_channel_id';
						public static ANALYTICS_DATA: string = 'gcm.n.analytics_data';
						public static TEXT_RESOURCE_SUFFIX: string = '_loc_key';
						public static TEXT_ARGS_SUFFIX: string = '_loc_args';
					}
					export class MessagePayloadKeys {
						public static class: java.lang.Class<com.google.firebase.messaging.Constants.MessagePayloadKeys>;
						public static RESERVED_PREFIX: string = 'google.';
						public static FROM: string = 'from';
						public static RAW_DATA: string = 'rawData';
						public static MESSAGE_TYPE: string = 'message_type';
						public static COLLAPSE_KEY: string = 'collapse_key';
						public static MSGID_SERVER: string = 'message_id';
						public static TO: string = 'google.to';
						public static MSGID: string = 'google.message_id';
						public static TTL: string = 'google.ttl';
						public static SENT_TIME: string = 'google.sent_time';
						public static ORIGINAL_PRIORITY: string = 'google.original_priority';
						public static DELIVERED_PRIORITY: string = 'google.delivered_priority';
						public static PRIORITY_V19: string = 'google.priority';
						public static PRIORITY_REDUCED_V19: string = 'google.priority_reduced';
						public static PRODUCT_ID: string = 'google.product_id';
						public static RESERVED_CLIENT_LIB_PREFIX: string = 'google.c.';
						public static SENDER_ID: string = 'google.c.sender.id';
						public static extractDeveloperDefinedPayload(stringValue: globalAndroid.os.Bundle): androidx.collection.ArrayMap<string, string>;
					}
					export class MessageTypes {
						public static class: java.lang.Class<com.google.firebase.messaging.Constants.MessageTypes>;
						public static MESSAGE: string = 'gcm';
						public static DELETED: string = 'deleted_messages';
						public static SEND_EVENT: string = 'send_event';
						public static SEND_ERROR: string = 'send_error';
					}
					export class ScionAnalytics {
						public static class: java.lang.Class<com.google.firebase.messaging.Constants.ScionAnalytics>;
						public static ORIGIN_FCM: string = 'fcm';
						public static PARAM_SOURCE: string = 'source';
						public static PARAM_MEDIUM: string = 'medium';
						public static PARAM_LABEL: string = 'label';
						public static PARAM_TOPIC: string = '_nt';
						public static PARAM_CAMPAIGN: string = 'campaign';
						public static PARAM_MESSAGE_NAME: string = '_nmn';
						public static PARAM_MESSAGE_TIME: string = '_nmt';
						public static PARAM_MESSAGE_DEVICE_TIME: string = '_ndt';
						public static PARAM_MESSAGE_CHANNEL: string = 'message_channel';
						public static PARAM_MESSAGE_TYPE: string = '_nmc';
						public static EVENT_FIREBASE_CAMPAIGN: string = '_cmp';
						public static EVENT_NOTIFICATION_RECEIVE: string = '_nr';
						public static EVENT_NOTIFICATION_OPEN: string = '_no';
						public static EVENT_NOTIFICATION_DISMISS: string = '_nd';
						public static EVENT_NOTIFICATION_FOREGROUND: string = '_nf';
						public static USER_PROPERTY_FIREBASE_LAST_NOTIFICATION: string = '_ln';
					}
					export module ScionAnalytics {
						export class MessageType {
							public static class: java.lang.Class<com.google.firebase.messaging.Constants.ScionAnalytics.MessageType>;
							/**
							 * Constructs a new instance of the com.google.firebase.messaging.Constants$ScionAnalytics$MessageType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
							public static DISPLAY_NOTIFICATION: string = 'display';
							public static DATA_MESSAGE: string = 'data';
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class DisplayNotification {
					public static class: java.lang.Class<com.google.firebase.messaging.DisplayNotification>;
					public constructor(context: globalAndroid.content.Context, params: com.google.firebase.messaging.NotificationParams, networkIoExecutor: java.util.concurrent.ExecutorService);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export abstract class EnhancedIntentService {
					public static class: java.lang.Class<com.google.firebase.messaging.EnhancedIntentService>;
					public onStartCommand(originalIntent: globalAndroid.content.Intent, flags: number, startId: number): number;
					public constructor();
					public handleIntentOnMainThread(intent: globalAndroid.content.Intent): boolean;
					public onBind(intent: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public onDestroy(): void;
					public getStartCommandIntent(originalIntent: globalAndroid.content.Intent): globalAndroid.content.Intent;
					public handleIntent(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FcmBroadcastProcessor {
					public static class: java.lang.Class<com.google.firebase.messaging.FcmBroadcastProcessor>;
					public static reset(): void;
					public process(intent: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<java.lang.Integer>;
					public constructor(context: globalAndroid.content.Context, executor: java.util.concurrent.ExecutorService);
					public static setServiceConnection(connection: com.google.firebase.messaging.WithinAppServiceConnection): void;
					public constructor(context: globalAndroid.content.Context);
					public startMessagingService(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<java.lang.Integer>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FcmExecutors {
					public static class: java.lang.Class<com.google.firebase.messaging.FcmExecutors>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FcmLifecycleCallbacks {
					public static class: java.lang.Class<com.google.firebase.messaging.FcmLifecycleCallbacks>;
					public onActivityPaused(pausedActivity: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
					public onActivityResumed(activity: globalAndroid.app.Activity): void;
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public onActivityCreated(createdActivity: globalAndroid.app.Activity, instanceState: globalAndroid.os.Bundle): void;
					public onActivityDestroyed(destroyedActivity: globalAndroid.app.Activity): void;
					public onActivityStarted(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FirebaseMessaging {
					public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessaging>;
					public static INSTANCE_ID_SCOPE: string = 'FCM';
					public subscribeToTopic(topic: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setNotificationDelegationEnabled(enable: boolean): com.google.android.gms.tasks.Task<java.lang.Void>;
					public static getInstance(): com.google.firebase.messaging.FirebaseMessaging;
					public setDeliveryMetricsExportToBigQuery(enable: boolean): void;
					public unsubscribeFromTopic(topic: string): com.google.android.gms.tasks.Task<java.lang.Void>;
					public deliveryMetricsExportToBigQueryEnabled(): boolean;
					public setAutoInitEnabled(enable: boolean): void;
					public unregister(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public static getTransportFactory(): com.google.android.datatransport.TransportFactory;
					public isAutoInitEnabled(): boolean;
					public isNotificationDelegationEnabled(): boolean;
					public register(): com.google.android.gms.tasks.Task<java.lang.Void>;
					/** @deprecated */
					public getToken(): com.google.android.gms.tasks.Task<string>;
					/** @deprecated */
					public send(message: com.google.firebase.messaging.RemoteMessage): void;
					/** @deprecated */
					public deleteToken(): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
				export module FirebaseMessaging {
					export class AutoInit {
						public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessaging.AutoInit>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class FirebaseMessagingKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessagingKtxRegistrar>;
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
			export module messaging {
				export class FirebaseMessagingRegistrar {
					public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessagingRegistrar>;
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
			export module messaging {
				export class FirebaseMessagingService extends com.google.firebase.messaging.EnhancedIntentService {
					public static class: java.lang.Class<com.google.firebase.messaging.FirebaseMessagingService>;
					public static ACTION_DIRECT_BOOT_REMOTE_INTENT: string = 'com.google.firebase.messaging.RECEIVE_DIRECT_BOOT';
					/** @deprecated */
					public onSendError(msgId: string, exception: java.lang.Exception): void;
					/** @deprecated */
					public onNewToken(token: string): void;
					public onUnregistered(installationId: string): void;
					public constructor();
					public onDeletedMessages(): void;
					public onMessageReceived(message: com.google.firebase.messaging.RemoteMessage): void;
					public handleIntent(intent: globalAndroid.content.Intent): void;
					/** @deprecated */
					public onMessageSent(msgId: string): void;
					public onRegistered(installationId: string): void;
					public getStartCommandIntent(originalIntent: globalAndroid.content.Intent): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class GmsRegistrationClient {
					public static class: java.lang.Class<com.google.firebase.messaging.GmsRegistrationClient>;
					public unregister(): com.google.android.gms.tasks.Task<any>;
					public register(): com.google.android.gms.tasks.Task<string>;
					public isV1RegistrationEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class GmsRpc {
					public static class: java.lang.Class<com.google.firebase.messaging.GmsRpc>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class ImageDownload {
					public static class: java.lang.Class<com.google.firebase.messaging.ImageDownload>;
					public start(executor: java.util.concurrent.ExecutorService): void;
					public static create(e: string): com.google.firebase.messaging.ImageDownload;
					public close(): void;
					public getTask(): com.google.android.gms.tasks.Task<globalAndroid.graphics.Bitmap>;
					public blockingDownload(): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class MessagingAnalytics {
					public static class: java.lang.Class<com.google.firebase.messaging.MessagingAnalytics>;
					public static shouldUploadScionMetrics(intent: globalAndroid.content.Intent): boolean;
					public constructor();
					public static shouldUploadScionMetrics(extras: globalAndroid.os.Bundle): boolean;
					public static logNotificationReceived(intent: globalAndroid.content.Intent): void;
					public static logNotificationDismiss(intent: globalAndroid.content.Intent): void;
					public static shouldUploadFirelogAnalytics(intent: globalAndroid.content.Intent): boolean;
					public static logNotificationForeground(intent: globalAndroid.content.Intent): void;
					public static logNotificationOpen(extras: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class Metadata {
					public static class: java.lang.Class<com.google.firebase.messaging.Metadata>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class NotificationParams {
					public static class: java.lang.Class<com.google.firebase.messaging.NotificationParams>;
					public getLocalizationArgsForKey(this_: string): androidNative.Array<any>;
					public getLocalizationResourceForKey(key: string): string;
					public paramsForAnalyticsIntent(): globalAndroid.os.Bundle;
					public getPossiblyLocalizedString(resources: globalAndroid.content.res.Resources, packageName: string, key: string): string;
					public getLocalizedString(this_: globalAndroid.content.res.Resources, resources: string, packageName: string): string;
					public paramsWithReservedKeysRemoved(): globalAndroid.os.Bundle;
					public getLong(this_: string): java.lang.Long;
					public getJSONArray(this_: string): org.json.JSONArray;
					public getString(key: string): string;
					public getBoolean(key: string): boolean;
					public getNotificationChannelId(): string;
					public getInteger(this_: string): java.lang.Integer;
					public getVibrateTimings(): androidNative.Array<number>;
					public isNotification(): boolean;
					public getLink(): globalAndroid.net.Uri;
					public hasImage(): boolean;
					public getSoundResourceName(): string;
					public static isNotification(data: globalAndroid.os.Bundle): boolean;
					public constructor(data: globalAndroid.os.Bundle);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export abstract class ProtoEncoderDoNotUse {
					public static class: java.lang.Class<com.google.firebase.messaging.ProtoEncoderDoNotUse>;
					public getMessagingClientEventExtension(): com.google.firebase.messaging.reporting.MessagingClientEventExtension;
					public static encode(value: any): androidNative.Array<number>;
					public static encode(value: any, output: java.io.OutputStream): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class ProxyNotificationInitializer {
					public static class: java.lang.Class<com.google.firebase.messaging.ProxyNotificationInitializer>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class ProxyNotificationPreferences {
					public static class: java.lang.Class<com.google.firebase.messaging.ProxyNotificationPreferences>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class RemoteMessage {
					public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage>;
					public static PRIORITY_UNKNOWN: number = 0;
					public static PRIORITY_HIGH: number = 1;
					public static PRIORITY_NORMAL: number = 2;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.messaging.RemoteMessage>;
					public getPriority(): number;
					public getMessageId(): string;
					public toIntent(): globalAndroid.content.Intent;
					public getFrom(): string;
					public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					public getSentTime(): number;
					public getOriginalPriority(): number;
					public getNotification(): com.google.firebase.messaging.RemoteMessage.Notification;
					/** @deprecated */
					public getSenderId(): string;
					public getRawData(): androidNative.Array<number>;
					public getData(): java.util.Map<string, string>;
					/** @deprecated */
					public getTo(): string;
					public getMessageType(): string;
					public constructor(bundle: globalAndroid.os.Bundle);
					public getCollapseKey(): string;
					public getTtl(): number;
				}
				export module RemoteMessage {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage.Builder>;
						public constructor(to: string);
						public getMessageId(): string;
						public getCollapseKey(): string;
						public getData(): java.util.Map<string, string>;
						public getTtl(): number;
						public setCollapseKey(collapseKey: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public build(): com.google.firebase.messaging.RemoteMessage;
						public setMessageId(messageId: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public setData(data: java.util.Map<string, string>): com.google.firebase.messaging.RemoteMessage.Builder;
						public setTtl(ttl: number): com.google.firebase.messaging.RemoteMessage.Builder;
						public setRawData(data: androidNative.Array<number>): com.google.firebase.messaging.RemoteMessage.Builder;
						public addData(key: string, value: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public setMessageType(messageType: string): com.google.firebase.messaging.RemoteMessage.Builder;
						public clearData(): com.google.firebase.messaging.RemoteMessage.Builder;
						public getMessageType(): string;
					}
					export class MessagePriority {
						public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage.MessagePriority>;
						/**
						 * Constructs a new instance of the com.google.firebase.messaging.RemoteMessage$MessagePriority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class Notification {
						public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessage.Notification>;
						public getDefaultSound(): boolean;
						public getBodyLocalizationArgs(): androidNative.Array<string>;
						public getChannelId(): string;
						public getClickAction(): string;
						public getVibrateTimings(): androidNative.Array<number>;
						public getBody(): string;
						public getLocalOnly(): boolean;
						public getDefaultVibrateSettings(): boolean;
						public getVisibility(): java.lang.Integer;
						public getSound(): string;
						public getNotificationPriority(): java.lang.Integer;
						public getTicker(): string;
						public getIcon(): string;
						public getNotificationCount(): java.lang.Integer;
						public getLink(): globalAndroid.net.Uri;
						public getColor(): string;
						public getSticky(): boolean;
						public getTitleLocalizationKey(): string;
						public getTitle(): string;
						public getImageUrl(): globalAndroid.net.Uri;
						public getEventTime(): java.lang.Long;
						public getTitleLocalizationArgs(): androidNative.Array<string>;
						public getTag(): string;
						public getDefaultLightSettings(): boolean;
						public getBodyLocalizationKey(): string;
						public getLightSettings(): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class RemoteMessageCreator extends globalAndroid.os.Parcelable.Creator<com.google.firebase.messaging.RemoteMessage> {
					public static class: java.lang.Class<com.google.firebase.messaging.RemoteMessageCreator>;
					public static CONTENT_DESCRIPTION: number = 0;
					public newArray(size: number): androidNative.Array<com.google.firebase.messaging.RemoteMessage>;
					public constructor();
					public createFromParcel(this_: globalAndroid.os.Parcel): com.google.firebase.messaging.RemoteMessage;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class RequestDeduplicator {
					public static class: java.lang.Class<com.google.firebase.messaging.RequestDeduplicator>;
				}
				export module RequestDeduplicator {
					export class GetTokenRequest {
						public static class: java.lang.Class<com.google.firebase.messaging.RequestDeduplicator.GetTokenRequest>;
						/**
						 * Constructs a new instance of the com.google.firebase.messaging.RequestDeduplicator$GetTokenRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { start(): com.google.android.gms.tasks.Task<string> });
						public constructor();
						public start(): com.google.android.gms.tasks.Task<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class SendException {
					public static class: java.lang.Class<com.google.firebase.messaging.SendException>;
					public static ERROR_UNKNOWN: number = 0;
					public static ERROR_INVALID_PARAMETERS: number = 1;
					public static ERROR_SIZE: number = 2;
					public static ERROR_TTL_EXCEEDED: number = 3;
					public static ERROR_TOO_MANY_MESSAGES: number = 4;
					public getErrorCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class ServiceStarter {
					public static class: java.lang.Class<com.google.firebase.messaging.ServiceStarter>;
					public static SUCCESS: number = -1;
					public static ERROR_UNKNOWN: number = 500;
					public startMessagingService(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): number;
					public static setForTesting(serviceStarter: com.google.firebase.messaging.ServiceStarter): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class SharedPreferencesQueue {
					public static class: java.lang.Class<com.google.firebase.messaging.SharedPreferencesQueue>;
					public toList(): java.util.List<string>;
					public peek(): string;
					public add(item: string): boolean;
					public serializeSync(): string;
					public beginTransaction(): void;
					public clear(): void;
					public serialize(): string;
					public remove(o: any): boolean;
					public remove(): string;
					public size(): number;
					public commitTransaction(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class Store {
					public static class: java.lang.Class<com.google.firebase.messaging.Store>;
					public isEmpty(): boolean;
					public deleteAll(): void;
					public saveToken(subtype: string, audience: string, token: string, appVersion: string): void;
					public deleteToken(subtype: string, audience: string): void;
					public constructor(context: globalAndroid.content.Context);
					public getToken(subtype: string, audience: string): com.google.firebase.messaging.Store.Token;
				}
				export module Store {
					export class Token {
						public static class: java.lang.Class<com.google.firebase.messaging.Store.Token>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class SyncTask {
					public static class: java.lang.Class<com.google.firebase.messaging.SyncTask>;
					public constructor(firebaseMessaging: com.google.firebase.messaging.FirebaseMessaging, nextDelaySeconds: number);
					public run(): void;
				}
				export module SyncTask {
					export class ConnectivityChangeReceiver {
						public static class: java.lang.Class<com.google.firebase.messaging.SyncTask.ConnectivityChangeReceiver>;
						public registerReceiver(): void;
						public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
						public constructor(task: com.google.firebase.messaging.SyncTask);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class TopicOperation {
					public static class: java.lang.Class<com.google.firebase.messaging.TopicOperation>;
					public equals(obj: any): boolean;
					public static subscribe(topic: string): com.google.firebase.messaging.TopicOperation;
					public getTopic(): string;
					public getOperation(): string;
					public serialize(): string;
					public static unsubscribe(topic: string): com.google.firebase.messaging.TopicOperation;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class TopicSubscriptionClient {
					public static class: java.lang.Class<com.google.firebase.messaging.TopicSubscriptionClient>;
					public createConnection(url: java.net.URL): java.net.HttpURLConnection;
					public static setConnectionFactoryForTesting(factory: com.google.firebase.messaging.TopicSubscriptionClient.HttpConnectionFactory): void;
				}
				export module TopicSubscriptionClient {
					export class HttpConnectionFactory {
						public static class: java.lang.Class<com.google.firebase.messaging.TopicSubscriptionClient.HttpConnectionFactory>;
						/**
						 * Constructs a new instance of the com.google.firebase.messaging.TopicSubscriptionClient$HttpConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { createConnection(param0: java.net.URL): java.net.HttpURLConnection });
						public constructor();
						public createConnection(param0: java.net.URL): java.net.HttpURLConnection;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class TopicsStore {
					public static class: java.lang.Class<com.google.firebase.messaging.TopicsStore>;
					public static getInstance(sharedPrefs: globalAndroid.content.Context, context: java.util.concurrent.Executor): com.google.firebase.messaging.TopicsStore;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class TopicsSubscriber {
					public static class: java.lang.Class<com.google.firebase.messaging.TopicsSubscriber>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class TopicsSyncTask {
					public static class: java.lang.Class<com.google.firebase.messaging.TopicsSyncTask>;
					public run(): void;
				}
				export module TopicsSyncTask {
					export class ConnectivityChangeReceiver {
						public static class: java.lang.Class<com.google.firebase.messaging.TopicsSyncTask.ConnectivityChangeReceiver>;
						public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
						public registerReceiver(): void;
						public constructor(this$0: com.google.firebase.messaging.TopicsSyncTask, task: com.google.firebase.messaging.TopicsSyncTask);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class WakeLockHolder {
					public static class: java.lang.Class<com.google.firebase.messaging.WakeLockHolder>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class WithinAppServiceBinder {
					public static class: java.lang.Class<com.google.firebase.messaging.WithinAppServiceBinder>;
				}
				export module WithinAppServiceBinder {
					export class IntentHandler {
						public static class: java.lang.Class<com.google.firebase.messaging.WithinAppServiceBinder.IntentHandler>;
						/**
						 * Constructs a new instance of the com.google.firebase.messaging.WithinAppServiceBinder$IntentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { handle(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<java.lang.Void> });
						public constructor();
						public handle(param0: globalAndroid.content.Intent): com.google.android.gms.tasks.Task<java.lang.Void>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export class WithinAppServiceConnection {
					public static class: java.lang.Class<com.google.firebase.messaging.WithinAppServiceConnection>;
					public onServiceConnected(componentName: globalAndroid.content.ComponentName, iBinder: globalAndroid.os.IBinder): void;
					public onServiceDisconnected(componentName: globalAndroid.content.ComponentName): void;
				}
				export module WithinAppServiceConnection {
					export class BindRequest {
						public static class: java.lang.Class<com.google.firebase.messaging.WithinAppServiceConnection.BindRequest>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export module reporting {
					export class MessagingClientEvent {
						public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEvent>;
						public getMessageId(): string;
						public getCollapseKey(): string;
						public getProjectNumber(): number;
						public getEvent(): com.google.firebase.messaging.reporting.MessagingClientEvent.Event;
						public getComposerLabel(): string;
						public getInstanceId(): string;
						public getSdkPlatform(): com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform;
						public getTtl(): number;
						public getCampaignId(): number;
						public static newBuilder(): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
						public getPackageName(): string;
						public getTopic(): string;
						public getPriority(): number;
						public static getDefaultInstance(): com.google.firebase.messaging.reporting.MessagingClientEvent;
						public getMessageType(): com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType;
						public getAnalyticsLabel(): string;
						public getBulkId(): number;
					}
					export module MessagingClientEvent {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEvent.Builder>;
							public setCampaignId(campaign_id_: number): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setSdkPlatform(sdk_platform_: com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setPackageName(package_name_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setInstanceId(instance_id_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setTopic(topic_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public build(): com.google.firebase.messaging.reporting.MessagingClientEvent;
							public setMessageType(message_type_: com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setComposerLabel(composer_label_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setAnalyticsLabel(analytics_label_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setMessageId(message_id_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setTtl(ttl_: number): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setCollapseKey(collapse_key_: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setProjectNumber(project_number_: number): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setEvent(event_: com.google.firebase.messaging.reporting.MessagingClientEvent.Event): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setBulkId(bulk_id_: number): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
							public setPriority(priority_: number): com.google.firebase.messaging.reporting.MessagingClientEvent.Builder;
						}
						export class Event extends com.google.firebase.encoders.proto.ProtoEnum {
							public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEvent.Event>;
							public static UNKNOWN_EVENT: com.google.firebase.messaging.reporting.MessagingClientEvent.Event;
							public static MESSAGE_DELIVERED: com.google.firebase.messaging.reporting.MessagingClientEvent.Event;
							public static MESSAGE_OPEN: com.google.firebase.messaging.reporting.MessagingClientEvent.Event;
							public static values(): androidNative.Array<com.google.firebase.messaging.reporting.MessagingClientEvent.Event>;
							public getNumber(): number;
							public static valueOf(name: string): com.google.firebase.messaging.reporting.MessagingClientEvent.Event;
						}
						export class MessageType extends com.google.firebase.encoders.proto.ProtoEnum {
							public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType>;
							public static UNKNOWN: com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType;
							public static DATA_MESSAGE: com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType;
							public static TOPIC: com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType;
							public static DISPLAY_NOTIFICATION: com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType;
							public static valueOf(name: string): com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType;
							public getNumber(): number;
							public static values(): androidNative.Array<com.google.firebase.messaging.reporting.MessagingClientEvent.MessageType>;
						}
						export class SDKPlatform extends com.google.firebase.encoders.proto.ProtoEnum {
							public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform>;
							public static UNKNOWN_OS: com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform;
							public static ANDROID: com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform;
							public static IOS: com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform;
							public static WEB: com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform;
							public static valueOf(name: string): com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform;
							public static values(): androidNative.Array<com.google.firebase.messaging.reporting.MessagingClientEvent.SDKPlatform>;
							public getNumber(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export module reporting {
					export class MessagingClientEventExtension {
						public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEventExtension>;
						public getMessagingClientEvent(): com.google.firebase.messaging.reporting.MessagingClientEvent;
						public getMessagingClientEventInternal(): com.google.firebase.messaging.reporting.MessagingClientEvent;
						public toByteArray(): androidNative.Array<number>;
						public writeTo(output: java.io.OutputStream): void;
						public static newBuilder(): com.google.firebase.messaging.reporting.MessagingClientEventExtension.Builder;
						public static getDefaultInstance(): com.google.firebase.messaging.reporting.MessagingClientEventExtension;
					}
					export module MessagingClientEventExtension {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.messaging.reporting.MessagingClientEventExtension.Builder>;
							public setMessagingClientEvent(messaging_client_event_: com.google.firebase.messaging.reporting.MessagingClientEvent): com.google.firebase.messaging.reporting.MessagingClientEventExtension.Builder;
							public build(): com.google.firebase.messaging.reporting.MessagingClientEventExtension;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export module threads {
					export class ExecutorFactory {
						public static class: java.lang.Class<com.google.firebase.messaging.threads.ExecutorFactory>;
						/**
						 * Constructs a new instance of the com.google.firebase.messaging.threads.ExecutorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newThreadPool(param0: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							newThreadPool(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							newThreadPool(param0: number, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							newThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory, param2: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							newSingleThreadExecutor(param0: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							newSingleThreadExecutor(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							newScheduledThreadPool(param0: number, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
							newScheduledThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory, param2: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
							executeOneOff(param0: string, param1: string, param2: com.google.firebase.messaging.threads.ThreadPriority, param3: java.lang.Runnable): void;
							submitOneOff(param0: string, param1: string, param2: com.google.firebase.messaging.threads.ThreadPriority, param3: java.lang.Runnable): java.util.concurrent.Future<any>;
						});
						public constructor();
						public newSingleThreadExecutor(param0: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
						public newScheduledThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory, param2: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
						public newThreadPool(param0: number, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
						public newScheduledThreadPool(param0: number, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
						public executeOneOff(param0: string, param1: string, param2: com.google.firebase.messaging.threads.ThreadPriority, param3: java.lang.Runnable): void;
						public newThreadPool(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
						public newThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory, param2: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
						public newSingleThreadExecutor(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
						public submitOneOff(param0: string, param1: string, param2: com.google.firebase.messaging.threads.ThreadPriority, param3: java.lang.Runnable): java.util.concurrent.Future<any>;
						public newThreadPool(param0: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export module threads {
					export class PoolableExecutors {
						public static class: java.lang.Class<com.google.firebase.messaging.threads.PoolableExecutors>;
						public static factory(): com.google.firebase.messaging.threads.ExecutorFactory;
					}
					export module PoolableExecutors {
						export class DefaultExecutorFactory extends com.google.firebase.messaging.threads.ExecutorFactory {
							public static class: java.lang.Class<com.google.firebase.messaging.threads.PoolableExecutors.DefaultExecutorFactory>;
							public newThreadPool(priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public submitOneOff(moduleName: string, name: string, priority: com.google.firebase.messaging.threads.ThreadPriority, runnable: java.lang.Runnable): java.util.concurrent.Future<any>;
							public executeOneOff(moduleName: string, name: string, priority: com.google.firebase.messaging.threads.ThreadPriority, runnable: java.lang.Runnable): void;
							public newSingleThreadExecutor(param0: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newSingleThreadExecutor(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newThreadPool(param0: number, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory, param2: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newThreadPool(param0: java.util.concurrent.ThreadFactory, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newThreadPool(maxConcurrency: number, priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newScheduledThreadPool(maxConcurrency: number, threadFactory: java.util.concurrent.ThreadFactory, priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
							public newThreadPool(maxConcurrency: number, threadFactory: java.util.concurrent.ThreadFactory, priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newThreadPool(threadFactory: java.util.concurrent.ThreadFactory, priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newScheduledThreadPool(param0: number, param1: java.util.concurrent.ThreadFactory, param2: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
							public newSingleThreadExecutor(threadFactory: java.util.concurrent.ThreadFactory, priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newScheduledThreadPool(maxConcurrency: number, priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
							public newSingleThreadExecutor(priority: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public executeOneOff(param0: string, param1: string, param2: com.google.firebase.messaging.threads.ThreadPriority, param3: java.lang.Runnable): void;
							public newThreadPool(param0: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ExecutorService;
							public newScheduledThreadPool(param0: number, param1: com.google.firebase.messaging.threads.ThreadPriority): java.util.concurrent.ScheduledExecutorService;
							public submitOneOff(param0: string, param1: string, param2: com.google.firebase.messaging.threads.ThreadPriority, param3: java.lang.Runnable): java.util.concurrent.Future<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module messaging {
				export module threads {
					export class ThreadPriority {
						public static class: java.lang.Class<com.google.firebase.messaging.threads.ThreadPriority>;
						public static LOW_POWER: com.google.firebase.messaging.threads.ThreadPriority;
						public static HIGH_SPEED: com.google.firebase.messaging.threads.ThreadPriority;
						public static values(): androidNative.Array<com.google.firebase.messaging.threads.ThreadPriority>;
						public static valueOf(name: string): com.google.firebase.messaging.threads.ThreadPriority;
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
