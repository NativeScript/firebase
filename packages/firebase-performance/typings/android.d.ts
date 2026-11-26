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
			export module perf {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.perf.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.perf';
					public static BUILD_TYPE: string = 'release';
					public static ENFORCE_DEFAULT_LOG_SRC: java.lang.Boolean;
					public static FIREPERF_VERSION_NAME: string;
					public static TRANSPORT_LOG_SRC: string;
					public static VERSION_NAME: string = '22.0.6';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class FirebasePerfEarly {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerfEarly>;
					public constructor(this_: com.google.firebase.FirebaseApp, app: com.google.firebase.StartupTime, startupTime: java.util.concurrent.Executor);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class FirebasePerfKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerfKtxRegistrar>;
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
			export module perf {
				export class FirebasePerfRegistrar {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerfRegistrar>;
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
			export module perf {
				export class FirebasePerformance extends com.google.firebase.perf.FirebasePerformanceAttributable {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformance>;
					public static MAX_TRACE_NAME_LENGTH: number = 100;
					public static startTrace(traceName: string): com.google.firebase.perf.metrics.Trace;
					public setPerformanceCollectionEnabled(enable: boolean): void;
					public removeAttribute(attribute: string): void;
					public putAttribute(this_: string, attribute: string): void;
					public newHttpMetric(url: java.net.URL, httpMethod: string): com.google.firebase.perf.metrics.HttpMetric;
					public getAttribute(param0: string): string;
					public static getInstance(): com.google.firebase.perf.FirebasePerformance;
					public isPerformanceCollectionEnabled(): boolean;
					public getAttributes(): java.util.Map<string, string>;
					public newHttpMetric(url: string, httpMethod: string): com.google.firebase.perf.metrics.HttpMetric;
					public getAttribute(attribute: string): string;
					public setPerformanceCollectionEnabled(this_: java.lang.Boolean): void;
					public putAttribute(param0: string, param1: string): void;
					public newTrace(traceName: string): com.google.firebase.perf.metrics.Trace;
					public removeAttribute(param0: string): void;
				}
				export module FirebasePerformance {
					export class HttpMethod {
						public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformance.HttpMethod>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.FirebasePerformance$HttpMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static POST: string = 'POST';
						public static CONNECT: string = 'CONNECT';
						public static PUT: string = 'PUT';
						public static HEAD: string = 'HEAD';
						public static OPTIONS: string = 'OPTIONS';
						public static DELETE: string = 'DELETE';
						public static PATCH: string = 'PATCH';
						public static TRACE: string = 'TRACE';
						public static GET: string = 'GET';
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class FirebasePerformanceAttributable {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformanceAttributable>;
					/**
					 * Constructs a new instance of the com.google.firebase.perf.FirebasePerformanceAttributable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { putAttribute(param0: string, param1: string): void; getAttribute(param0: string): string; removeAttribute(param0: string): void; getAttributes(): java.util.Map<string, string> });
					public constructor();
					public static MAX_ATTRIBUTE_KEY_LENGTH: number = 40;
					public static MAX_TRACE_NAME_LENGTH: number = 100;
					public static MAX_TRACE_CUSTOM_ATTRIBUTES: number = 5;
					public static MAX_ATTRIBUTE_VALUE_LENGTH: number = 100;
					public getAttributes(): java.util.Map<string, string>;
					public putAttribute(param0: string, param1: string): void;
					public removeAttribute(param0: string): void;
					public getAttribute(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class FirebasePerformanceInitializer extends com.google.firebase.perf.application.AppStateMonitor.AppColdStartCallback {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformanceInitializer>;
					public onAppColdStart(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class FirebasePerformance_Factory extends dagger.internal.Factory<com.google.firebase.perf.FirebasePerformance> {
					public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformance_Factory>;
					public static create(
						firebaseAppProvider: dagger.internal.Provider<com.google.firebase.FirebaseApp>,
						firebaseRemoteConfigProvider: dagger.internal.Provider<com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>>,
						firebaseInstallationsApiProvider: dagger.internal.Provider<com.google.firebase.installations.FirebaseInstallationsApi>,
						transportFactoryProvider: dagger.internal.Provider<com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>>,
						remoteConfigManagerProvider: dagger.internal.Provider<com.google.firebase.perf.config.RemoteConfigManager>,
						configResolverProvider: dagger.internal.Provider<com.google.firebase.perf.config.ConfigResolver>,
						sessionManagerProvider: dagger.internal.Provider<com.google.firebase.perf.session.SessionManager>
					): com.google.firebase.perf.FirebasePerformance_Factory;
					public static newInstance(
						firebaseApp: com.google.firebase.FirebaseApp,
						firebaseRemoteConfigProvider: com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>,
						firebaseInstallationsApi: com.google.firebase.installations.FirebaseInstallationsApi,
						transportFactoryProvider: com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>,
						remoteConfigManager: com.google.firebase.perf.config.RemoteConfigManager,
						configResolver: com.google.firebase.perf.config.ConfigResolver,
						sessionManager: com.google.firebase.perf.session.SessionManager
					): com.google.firebase.perf.FirebasePerformance;
					public get(): com.google.firebase.perf.FirebasePerformance;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module application {
					export class AppStateMonitor {
						public static class: java.lang.Class<com.google.firebase.perf.application.AppStateMonitor>;
						public incrementTsnsCount(value: number): void;
						public onActivityResumed(activity: globalAndroid.app.Activity): void;
						public onActivityStopped(activity: globalAndroid.app.Activity): void;
						public incrementCount(this_: string, name: number): void;
						public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
						public isForeground(): boolean;
						public static getInstance(): com.google.firebase.perf.application.AppStateMonitor;
						public getAppState(): com.google.firebase.perf.v1.ApplicationProcessState;
						public onActivityDestroyed(this_: globalAndroid.app.Activity): void;
						public unregisterActivityLifecycleCallbacks(context: globalAndroid.content.Context): void;
						public registerForAppColdStart(subscriber: com.google.firebase.perf.application.AppStateMonitor.AppColdStartCallback): void;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
						public onActivityStarted(this_: globalAndroid.app.Activity): void;
						public setIsColdStart(isColdStart: boolean): void;
						public isScreenTraceSupported(): boolean;
						public registerForAppState(subscriber: java.lang.ref.WeakReference<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>): void;
						public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
						public static getScreenTraceName(activity: globalAndroid.app.Activity): string;
						public isColdStart(): boolean;
						public registerActivityLifecycleCallbacks(context: globalAndroid.content.Context): void;
						public unregisterForAppState(subscriber: java.lang.ref.WeakReference<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>): void;
					}
					export module AppStateMonitor {
						export class AppColdStartCallback {
							public static class: java.lang.Class<com.google.firebase.perf.application.AppStateMonitor.AppColdStartCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.application.AppStateMonitor$AppColdStartCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onAppColdStart(): void });
							public constructor();
							public onAppColdStart(): void;
						}
						export class AppStateCallback {
							public static class: java.lang.Class<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.application.AppStateMonitor$AppStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void });
							public constructor();
							public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module application {
					export abstract class AppStateUpdateHandler extends com.google.firebase.perf.application.AppStateMonitor.AppStateCallback {
						public static class: java.lang.Class<com.google.firebase.perf.application.AppStateUpdateHandler>;
						public constructor(appStateMonitor: com.google.firebase.perf.application.AppStateMonitor);
						public constructor();
						public unregisterForAppState(): void;
						public onUpdateAppState(newState: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public registerForAppState(): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public incrementTsnsCount(count: number): void;
						public getAppState(): com.google.firebase.perf.v1.ApplicationProcessState;
						public getAppStateCallback(): java.lang.ref.WeakReference<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module application {
					export class FragmentStateMonitor {
						public static class: java.lang.Class<com.google.firebase.perf.application.FragmentStateMonitor>;
						public getFragmentScreenTraceName(fragment: androidx.fragment.app.Fragment): string;
						public onFragmentResumed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
						public onFragmentPaused(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
						public constructor(clock: com.google.firebase.perf.util.Clock, transportManager: com.google.firebase.perf.transport.TransportManager, appStateMonitor: com.google.firebase.perf.application.AppStateMonitor, recorder: com.google.firebase.perf.application.FrameMetricsRecorder);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module application {
					export class FrameMetricsRecorder {
						public static class: java.lang.Class<com.google.firebase.perf.application.FrameMetricsRecorder>;
						public constructor(activity: globalAndroid.app.Activity);
						public start(): void;
						public stopFragment(fragment: androidx.fragment.app.Fragment): com.google.firebase.perf.util.Optional<com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics>;
						public stop(): com.google.firebase.perf.util.Optional<com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics>;
						public startFragment(fragment: androidx.fragment.app.Fragment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module config {
					export class ConfigResolver {
						public static class: java.lang.Class<com.google.firebase.perf.config.ConfigResolver>;
						public setIsPerformanceCollectionEnabled(isEnabled: java.lang.Boolean): void;
						public setContentProviderContext(context: globalAndroid.content.Context): void;
						public getFragmentSamplingRate(): number;
						public getIsExperimentTTIDEnabled(): boolean;
						public static clearInstance(): void;
						public getIsServiceCollectionEnabled(): boolean;
						public getSessionsCpuCaptureFrequencyBackgroundMs(): number;
						public getAndCacheLogSourceName(): string;
						public getIsPerformanceCollectionDeactivated(): java.lang.Boolean;
						public getTraceEventCountBackground(): number;
						public constructor(remoteConfigManager: com.google.firebase.perf.config.RemoteConfigManager, metadataBundle: com.google.firebase.perf.util.ImmutableBundle, deviceCacheManager: com.google.firebase.perf.config.DeviceCacheManager);
						public static getInstance(): com.google.firebase.perf.config.ConfigResolver;
						public getNetworkEventCountForeground(): number;
						public isCollectionEnabledConfigValueAvailable(): boolean;
						public getSessionsMemoryCaptureFrequencyForegroundMs(): number;
						public isPerformanceMonitoringEnabled(): boolean;
						public setMetadataBundle(bundle: com.google.firebase.perf.util.ImmutableBundle): void;
						public getNetworkRequestSamplingRate(): number;
						public getSessionsMemoryCaptureFrequencyBackgroundMs(): number;
						public getTraceEventCountForeground(): number;
						public getSessionsSamplingRate(): number;
						public setApplicationContext(appContext: globalAndroid.content.Context): void;
						public getTraceSamplingRate(): number;
						public setDeviceCacheManager(deviceCacheManager: com.google.firebase.perf.config.DeviceCacheManager): void;
						public getNetworkEventCountBackground(): number;
						public getIsPerformanceCollectionEnabled(): java.lang.Boolean;
						public getRateLimitSec(): number;
						public getSessionsCpuCaptureFrequencyForegroundMs(): number;
						public getSessionsMaxDurationMinutes(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module config {
					export class ConfigurationConstants {
						public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants>;
					}
					export module ConfigurationConstants {
						export class CollectionDeactivated extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.CollectionDeactivated>;
							public getDefault(): any;
							public getDefault(): java.lang.Boolean;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.CollectionDeactivated;
							public getMetadataFlag(): string;
						}
						export class CollectionEnabled extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.CollectionEnabled>;
							public getDefault(): any;
							public getDefault(): java.lang.Boolean;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.CollectionEnabled;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
						}
						export class ExperimentTTID extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.ExperimentTTID>;
							public getDefault(): any;
							public getDefault(): java.lang.Boolean;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.ExperimentTTID;
						}
						export class FragmentSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Double> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.FragmentSamplingRate>;
							public getDefault(): any;
							public getDefault(): java.lang.Double;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.FragmentSamplingRate;
						}
						export class LogSourceName extends com.google.firebase.perf.config.ConfigurationFlag<string> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.LogSourceName>;
							public getDefault(): any;
							public getDefault(): string;
							public static isLogSourceKnown(logSource: number): boolean;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.LogSourceName;
							public static getLogSourceName(logSource: number): string;
						}
						export class NetworkEventCountBackground extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.NetworkEventCountBackground>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.NetworkEventCountBackground;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefault(): java.lang.Long;
						}
						export class NetworkEventCountForeground extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.NetworkEventCountForeground>;
							public getDefault(): any;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.NetworkEventCountForeground;
							public getDefault(): java.lang.Long;
						}
						export class NetworkRequestSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Double> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.NetworkRequestSamplingRate>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.NetworkRequestSamplingRate;
							public getDefault(): java.lang.Double;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefaultOnRcFetchFail(): java.lang.Double;
							public getDefaultOnRcFetchFail(): any;
						}
						export class RateLimitSec extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.RateLimitSec>;
							public getDefault(): any;
							public getRemoteConfigFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.RateLimitSec;
							public getDeviceCacheFlag(): string;
							public getDefault(): java.lang.Long;
						}
						export class SdkDisabledVersions extends com.google.firebase.perf.config.ConfigurationFlag<string> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SdkDisabledVersions>;
							public constructor();
							public getDefault(): any;
							public getDefault(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SdkDisabledVersions;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
						}
						export class SdkEnabled extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SdkEnabled>;
							public constructor();
							public getDefault(): any;
							public getDefault(): java.lang.Boolean;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SdkEnabled;
						}
						export class SessionsCpuCaptureFrequencyBackgroundMs extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsCpuCaptureFrequencyBackgroundMs>;
							public getDefault(): any;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsCpuCaptureFrequencyBackgroundMs;
							public getDefault(): java.lang.Long;
						}
						export class SessionsCpuCaptureFrequencyForegroundMs extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsCpuCaptureFrequencyForegroundMs>;
							public getDefault(): any;
							public getDefaultOnRcFetchFail(): java.lang.Long;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public getDefaultOnRcFetchFail(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsCpuCaptureFrequencyForegroundMs;
							public getDefault(): java.lang.Long;
						}
						export class SessionsMaxDurationMinutes extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsMaxDurationMinutes>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsMaxDurationMinutes;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public getDefault(): java.lang.Long;
						}
						export class SessionsMemoryCaptureFrequencyBackgroundMs extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsMemoryCaptureFrequencyBackgroundMs>;
							public getDefault(): any;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsMemoryCaptureFrequencyBackgroundMs;
							public getMetadataFlag(): string;
							public getDefault(): java.lang.Long;
						}
						export class SessionsMemoryCaptureFrequencyForegroundMs extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsMemoryCaptureFrequencyForegroundMs>;
							public getDefault(): any;
							public getDefaultOnRcFetchFail(): java.lang.Long;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsMemoryCaptureFrequencyForegroundMs;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public getDefaultOnRcFetchFail(): any;
							public getDefault(): java.lang.Long;
						}
						export class SessionsSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Double> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsSamplingRate>;
							public getDefault(): any;
							public getDefault(): java.lang.Double;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefaultOnRcFetchFail(): java.lang.Double;
							public getMetadataFlag(): string;
							public getDefaultOnRcFetchFail(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsSamplingRate;
						}
						export class TraceEventCountBackground extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.TraceEventCountBackground>;
							public getDefault(): any;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.TraceEventCountBackground;
							public getDefault(): java.lang.Long;
						}
						export class TraceEventCountForeground extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Long> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.TraceEventCountForeground>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.TraceEventCountForeground;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefault(): java.lang.Long;
						}
						export class TraceSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Double> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.TraceSamplingRate>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.TraceSamplingRate;
							public getDefault(): java.lang.Double;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefaultOnRcFetchFail(): java.lang.Double;
							public getDefaultOnRcFetchFail(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module config {
					export abstract class ConfigurationFlag<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationFlag<any>>;
						public getDefault(): T;
						public getDefaultOnRcFetchFail(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module config {
					export class DeviceCacheManager {
						public static class: java.lang.Class<com.google.firebase.perf.config.DeviceCacheManager>;
						public containsKey(key: string): boolean;
						public static getInstance(): com.google.firebase.perf.config.DeviceCacheManager;
						public getBoolean(this_: string): com.google.firebase.perf.util.Optional<java.lang.Boolean>;
						public getLong(this_: string): com.google.firebase.perf.util.Optional<java.lang.Long>;
						public constructor(serialExecutor: java.util.concurrent.ExecutorService);
						public static clearInstance(): void;
						public setValue(key: string, value: number): boolean;
						public getString(this_: string): com.google.firebase.perf.util.Optional<string>;
						public clear(key: string): void;
						public setValue(key: string, value: string): boolean;
						public setValue(key: string, value: boolean): boolean;
						public getDouble(unused: string): com.google.firebase.perf.util.Optional<java.lang.Double>;
						public setContext(appContext: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module config {
					export class RemoteConfigManager {
						public static class: java.lang.Class<com.google.firebase.perf.config.RemoteConfigManager>;
						public getBoolean(this_: string): com.google.firebase.perf.util.Optional<java.lang.Boolean>;
						public getLong(this_: string): com.google.firebase.perf.util.Optional<java.lang.Long>;
						public setFirebaseRemoteConfigProvider(firebaseRemoteConfigProvider: com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>): void;
						public getDouble(this_: string): com.google.firebase.perf.util.Optional<java.lang.Double>;
						public getString(key: string): com.google.firebase.perf.util.Optional<string>;
						public static getInstance(): com.google.firebase.perf.config.RemoteConfigManager;
						public static getVersionCode(pi: globalAndroid.content.Context): number;
						public getRemoteConfigValueOrDefault(this_: string, key: any): any;
						public syncConfigValues(exception: java.util.Map<string, com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>): void;
						public getCurrentSystemTimeMillis(): number;
						public isFirebaseRemoteConfigAvailable(): boolean;
						public isLastFetchFailed(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module components {
						export class DaggerFirebasePerformanceComponent {
							public static class: java.lang.Class<com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent>;
							public static builder(): com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.Builder;
						}
						export module DaggerFirebasePerformanceComponent {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.Builder>;
								public build(): com.google.firebase.perf.injection.components.FirebasePerformanceComponent;
								public firebasePerformanceModule(firebasePerformanceModule: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.Builder;
							}
							export class FirebasePerformanceComponentImpl extends com.google.firebase.perf.injection.components.FirebasePerformanceComponent {
								public static class: java.lang.Class<com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.FirebasePerformanceComponentImpl>;
								public getFirebasePerformance(): com.google.firebase.perf.FirebasePerformance;
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
			export module perf {
				export module injection {
					export module components {
						export class FirebasePerformanceComponent {
							public static class: java.lang.Class<com.google.firebase.perf.injection.components.FirebasePerformanceComponent>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.injection.components.FirebasePerformanceComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getFirebasePerformance(): com.google.firebase.perf.FirebasePerformance });
							public constructor();
							public getFirebasePerformance(): com.google.firebase.perf.FirebasePerformance;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule>;
							public constructor(firebaseApp: com.google.firebase.FirebaseApp, firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi, remoteConfigComponentProvider: com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>, transportFactoryProvider: com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesConfigResolverFactory extends dagger.internal.Factory<com.google.firebase.perf.config.ConfigResolver> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesConfigResolverFactory>;
							public get(): com.google.firebase.perf.config.ConfigResolver;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesConfigResolverFactory;
							public static providesConfigResolver(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.config.ConfigResolver;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesFirebaseAppFactory extends dagger.internal.Factory<com.google.firebase.FirebaseApp> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesFirebaseAppFactory>;
							public static providesFirebaseApp(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.FirebaseApp;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesFirebaseAppFactory;
							public get(): com.google.firebase.FirebaseApp;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesFirebaseInstallationsFactory extends dagger.internal.Factory<com.google.firebase.installations.FirebaseInstallationsApi> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesFirebaseInstallationsFactory>;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesFirebaseInstallationsFactory;
							public get(): com.google.firebase.installations.FirebaseInstallationsApi;
							public static providesFirebaseInstallations(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.installations.FirebaseInstallationsApi;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesRemoteConfigComponentFactory extends dagger.internal.Factory<com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesRemoteConfigComponentFactory>;
							public static providesRemoteConfigComponent(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>;
							public get(): com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesRemoteConfigComponentFactory;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesRemoteConfigManagerFactory extends dagger.internal.Factory<com.google.firebase.perf.config.RemoteConfigManager> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesRemoteConfigManagerFactory>;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesRemoteConfigManagerFactory;
							public static providesRemoteConfigManager(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.config.RemoteConfigManager;
							public get(): com.google.firebase.perf.config.RemoteConfigManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesSessionManagerFactory extends dagger.internal.Factory<com.google.firebase.perf.session.SessionManager> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesSessionManagerFactory>;
							public static providesSessionManager(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.session.SessionManager;
							public get(): com.google.firebase.perf.session.SessionManager;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesSessionManagerFactory;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module injection {
					export module modules {
						export class FirebasePerformanceModule_ProvidesTransportFactoryProviderFactory extends dagger.internal.Factory<com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesTransportFactoryProviderFactory>;
							public static create(module: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesTransportFactoryProviderFactory;
							public get(): com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>;
							public static providesTransportFactoryProvider(instance: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module logging {
					export class AndroidLogger {
						public static class: java.lang.Class<com.google.firebase.perf.logging.AndroidLogger>;
						public setLogcatEnabled(logcatEnabled: boolean): void;
						public info(format: string, args: androidNative.Array<any>): void;
						public constructor(logWrapper: com.google.firebase.perf.logging.LogWrapper);
						public static getInstance(): com.google.firebase.perf.logging.AndroidLogger;
						public verbose(format: string, args: androidNative.Array<any>): void;
						public isLogcatEnabled(): boolean;
						public warn(msg: string): void;
						public verbose(msg: string): void;
						public info(msg: string): void;
						public error(msg: string): void;
						public error(format: string, args: androidNative.Array<any>): void;
						public debug(msg: string): void;
						public debug(format: string, args: androidNative.Array<any>): void;
						public warn(format: string, args: androidNative.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module logging {
					export class ConsoleUrlGenerator {
						public static class: java.lang.Class<com.google.firebase.perf.logging.ConsoleUrlGenerator>;
						public static generateDashboardUrl(projectId: string, packageName: string): string;
						public constructor();
						public static generateCustomTraceUrl(projectId: string, packageName: string, name: string): string;
						public static generateScreenTraceUrl(projectId: string, packageName: string, name: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module logging {
					export class LogWrapper {
						public static class: java.lang.Class<com.google.firebase.perf.logging.LogWrapper>;
						public static getInstance(): com.google.firebase.perf.logging.LogWrapper;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class AddTrace {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.AddTrace>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.metrics.AddTrace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { name(): string; enabled(): boolean });
						public constructor();
						public name(): string;
						public enabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class AppStartCause {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartCause>;
					}
					export module AppStartCause {
						export class Cause {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartCause.Cause>;
							public static FOREGROUND: com.google.firebase.perf.metrics.AppStartCause.Cause;
							public static UNKNOWN: com.google.firebase.perf.metrics.AppStartCause.Cause;
							public static valueOf(name: string): com.google.firebase.perf.metrics.AppStartCause.Cause;
							public static values(): androidNative.Array<com.google.firebase.perf.metrics.AppStartCause.Cause>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class AppStartTrace {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace>;
						public onActivityStopped(activity: globalAndroid.app.Activity): void;
						public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
						public static isAnyAppProcessInForeground(appProcess: globalAndroid.content.Context): boolean;
						public onActivityStarted(activity: globalAndroid.app.Activity): void;
						public static setLauncherActivityOnStartTime(activity: string): void;
						public onActivityResumed(this_: globalAndroid.app.Activity): void;
						public static setLauncherActivityOnCreateTime(activity: string): void;
						public static getInstance(): com.google.firebase.perf.metrics.AppStartTrace;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
						public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
						public unregisterActivityLifecycleCallbacks(): void;
						public static setLauncherActivityOnResumeTime(activity: string): void;
						public onAppEnteredBackground(): void;
						public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
						public onAppEnteredForeground(): void;
						public registerActivityLifecycleCallbacks(context: globalAndroid.content.Context): void;
					}
					export module AppStartTrace {
						export class DrawCounter {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace.DrawCounter>;
							public onDraw(): void;
						}
						export class StartFromBackgroundRunnable {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace.StartFromBackgroundRunnable>;
							public constructor(trace: com.google.firebase.perf.metrics.AppStartTrace);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class Counter {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.Counter>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.Counter>;
						public describeContents(): number;
						public constructor(name: string);
						public increment(counts: number): void;
						public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class FrameMetricsCalculator {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.FrameMetricsCalculator>;
						public constructor();
						public static calculateFrameMetrics(frameTime: androidNative.Array<globalAndroid.util.SparseIntArray>): com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics;
					}
					export module FrameMetricsCalculator {
						export class PerfFrameMetrics {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics>;
							public getTotalFrames(): number;
							public constructor(totalFrames: number, slowFrames: number, frozenFrames: number);
							public getFrozenFrames(): number;
							public deltaFrameMetricsFromSnapshot(that: com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics): com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics;
							public getSlowFrames(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class HttpMetric extends com.google.firebase.perf.FirebasePerformanceAttributable {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.HttpMetric>;
						public setResponseContentType(contentType: string): void;
						public markResponseStart(): void;
						public removeAttribute(attribute: string): void;
						public setRequestPayloadSize(bytes: number): void;
						public removeAttribute(param0: string): void;
						public constructor(url: string, httpMethod: string, transportManager: com.google.firebase.perf.transport.TransportManager, timer: com.google.firebase.perf.util.Timer);
						public stop(): void;
						public getAttribute(attribute: string): string;
						public setHttpResponseCode(responseCode: number): void;
						public setResponsePayloadSize(bytes: number): void;
						public start(): void;
						public putAttribute(this_: string, attribute: string): void;
						public getAttributes(): java.util.Map<string, string>;
						public markRequestComplete(): void;
						public putAttribute(param0: string, param1: string): void;
						public constructor(url: java.net.URL, httpMethod: string, transportManager: com.google.firebase.perf.transport.TransportManager, timer: com.google.firebase.perf.util.Timer);
						public getAttribute(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class NetworkRequestMetricBuilder extends com.google.firebase.perf.application.AppStateUpdateHandler implements com.google.firebase.perf.session.SessionAwareObject {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.NetworkRequestMetricBuilder>;
						public setResponsePayloadBytes(bytes: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public updateSession(param0: com.google.firebase.perf.session.PerfSession): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public setTimeToRequestCompletedMicros(time: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setHttpMethod(this_: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setRequestPayloadBytes(bytes: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setTimeToResponseCompletedMicros(time: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setHttpResponseCode(code: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setNetworkClientErrorReason(): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public constructor(transportManager: com.google.firebase.perf.transport.TransportManager, appStateMonitor: com.google.firebase.perf.application.AppStateMonitor, gaugeManager: com.google.firebase.perf.session.gauges.GaugeManager);
						public build(): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static builder(transportManager: com.google.firebase.perf.transport.TransportManager): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setResponseContentType(contentType: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public constructor();
						public setManualNetworkRequestMetric(): void;
						public setUrl(url: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public updateSession(session: com.google.firebase.perf.session.PerfSession): void;
						public getUrl(): string;
						public setRequestStartTimeMicros(time: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setCustomAttributes(attributes: java.util.Map<string, string>): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public constructor(appStateMonitor: com.google.firebase.perf.application.AppStateMonitor);
						public getTimeToResponseInitiatedMicros(): number;
						public setTimeToResponseInitiatedMicros(time: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public hasHttpResponseCode(): boolean;
						public setUserAgent(userAgent: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class Trace extends com.google.firebase.perf.application.AppStateUpdateHandler implements com.google.firebase.perf.FirebasePerformanceAttributable, com.google.firebase.perf.session.SessionAwareObject {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.Trace>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.metrics.Trace>;
						public updateSession(param0: com.google.firebase.perf.session.PerfSession): void;
						public constructor();
						public constructor(name: string, transportManager: com.google.firebase.perf.transport.TransportManager, clock: com.google.firebase.perf.util.Clock, appStateMonitor: com.google.firebase.perf.application.AppStateMonitor);
						public describeContents(): number;
						public removeAttribute(attribute: string): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public constructor(name: string, transportManager: com.google.firebase.perf.transport.TransportManager, clock: com.google.firebase.perf.util.Clock, appStateMonitor: com.google.firebase.perf.application.AppStateMonitor, gaugeManager: com.google.firebase.perf.session.gauges.GaugeManager);
						public updateSession(session: com.google.firebase.perf.session.PerfSession): void;
						public getLongMetric(metricName: string): number;
						public removeAttribute(param0: string): void;
						public putMetric(metricName: string, value: number): void;
						public stop(): void;
						public getName(): string;
						public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
						public finalize(): void;
						public constructor(appStateMonitor: com.google.firebase.perf.application.AppStateMonitor);
						public incrementMetric(metricName: string, incrementBy: number): void;
						public getAttribute(attribute: string): string;
						public start(): void;
						public putAttribute(this_: string, attribute: string): void;
						public getAttributes(): java.util.Map<string, string>;
						public putAttribute(param0: string, param1: string): void;
						public static create(name: string): com.google.firebase.perf.metrics.Trace;
						public getAttribute(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export class TraceMetricBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.TraceMetricBuilder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export module resource {
						export class ResourceType {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.resource.ResourceType>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.metrics.resource.ResourceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
							public static TRACE: string = 'Trace';
							public static NETWORK: string = 'Network';
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export module validator {
						export class FirebasePerfApplicationInfoValidator extends com.google.firebase.perf.metrics.validator.PerfMetricValidator {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.validator.FirebasePerfApplicationInfoValidator>;
							public isValidPerfMetric(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export module validator {
						export class FirebasePerfGaugeMetricValidator extends com.google.firebase.perf.metrics.validator.PerfMetricValidator {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.validator.FirebasePerfGaugeMetricValidator>;
							public isValidPerfMetric(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export module validator {
						export class FirebasePerfNetworkValidator extends com.google.firebase.perf.metrics.validator.PerfMetricValidator {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.validator.FirebasePerfNetworkValidator>;
							public isValidPerfMetric(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export module validator {
						export class FirebasePerfTraceValidator extends com.google.firebase.perf.metrics.validator.PerfMetricValidator {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.validator.FirebasePerfTraceValidator>;
							public isValidPerfMetric(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module metrics {
					export module validator {
						export abstract class PerfMetricValidator {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.validator.PerfMetricValidator>;
							public constructor();
							public static validateAttribute(key: string, value: string): void;
							public isValidPerfMetric(): boolean;
							public static isValid(validator: com.google.firebase.perf.v1.PerfMetric, perfMetric: globalAndroid.content.Context): boolean;
							public static validateMetricName(counterName: string): string;
							public static validateTraceName(traceName: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class FirebasePerfHttpClient {
						public static class: java.lang.Class<com.google.firebase.perf.network.FirebasePerfHttpClient>;
						public static execute(client: org.apache.http.client.HttpClient, target: org.apache.http.HttpHost, request: org.apache.http.HttpRequest, context: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
						public static execute(client: org.apache.http.client.HttpClient, target: org.apache.http.HttpHost, request: org.apache.http.HttpRequest, responseHandler: org.apache.http.client.ResponseHandler<any>): any;
						public static execute(client: org.apache.http.client.HttpClient, target: org.apache.http.HttpHost, request: org.apache.http.HttpRequest, responseHandler: org.apache.http.client.ResponseHandler<any>, context: org.apache.http.protocol.HttpContext): any;
						public static execute(client: org.apache.http.client.HttpClient, request: org.apache.http.client.methods.HttpUriRequest): org.apache.http.HttpResponse;
						public static execute(client: org.apache.http.client.HttpClient, request: org.apache.http.client.methods.HttpUriRequest, responseHandler: org.apache.http.client.ResponseHandler<any>, context: org.apache.http.protocol.HttpContext): any;
						public static execute(client: org.apache.http.client.HttpClient, request: org.apache.http.client.methods.HttpUriRequest, context: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
						public static execute(client: org.apache.http.client.HttpClient, target: org.apache.http.HttpHost, request: org.apache.http.HttpRequest): org.apache.http.HttpResponse;
						public static execute(client: org.apache.http.client.HttpClient, request: org.apache.http.client.methods.HttpUriRequest, responseHandler: org.apache.http.client.ResponseHandler<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class FirebasePerfOkHttpClient {
						public static class: java.lang.Class<com.google.firebase.perf.network.FirebasePerfOkHttpClient>;
						public static enqueue(call: okhttp3.Call, callback: okhttp3.Callback): void;
						public static execute(responseCompletedTimeMicros: okhttp3.Call): okhttp3.Response;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class FirebasePerfUrlConnection {
						public static class: java.lang.Class<com.google.firebase.perf.network.FirebasePerfUrlConnection>;
						public static instrument(connection: any): any;
						public static openStream(url: java.net.URL): java.io.InputStream;
						public static getContent(url: java.net.URL): any;
						public static getContent(url: java.net.URL, types: androidNative.Array<java.lang.Class<any>>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrHttpInputStream {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrHttpInputStream>;
						public constructor(inputStream: java.io.InputStream, builder: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder, timer: com.google.firebase.perf.util.Timer);
						public read(): number;
						public read(tempTime: androidNative.Array<number>, endOfStream: number, e: number): number;
						public close(): void;
						public mark(readlimit: number): void;
						public read(tempTime: androidNative.Array<number>): number;
						public skip(tempTime: number): number;
						public markSupported(): boolean;
						public reset(): void;
						public available(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrHttpOutputStream {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrHttpOutputStream>;
						public write(this_: androidNative.Array<number>): void;
						public write(this_: androidNative.Array<number>, b: number, off: number): void;
						public close(): void;
						public constructor(outputStream: java.io.OutputStream, builder: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder, timer: com.google.firebase.perf.util.Timer);
						public flush(): void;
						public write(this_: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrHttpURLConnection {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrHttpURLConnection>;
						public equals(obj: any): boolean;
						public getContentLength(): number;
						public getContent(): any;
						public getHeaderField(name: string): string;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public addRequestProperty(key: string, value: string): void;
						public getDate(): number;
						public setFixedLengthStreamingMode(contentLength: number): void;
						public getResponseMessage(): string;
						public setChunkedStreamingMode(chunklen: number): void;
						public connect(): void;
						public getHeaderFieldLong(name: string, defaultLong: number): number;
						public getConnectTimeout(): number;
						public setDoInput(doinput: boolean): void;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public getInstanceFollowRedirects(): boolean;
						public getResponseCode(): number;
						public hashCode(): number;
						public setReadTimeout(timeout: number): void;
						public getUseCaches(): boolean;
						public setRequestProperty(key: string, value: string): void;
						public setInstanceFollowRedirects(followRedirects: boolean): void;
						public getLastModified(): number;
						public getContentLengthLong(): number;
						public getHeaderFieldInt(name: string, defaultInt: number): number;
						public setAllowUserInteraction(allowuserinteraction: boolean): void;
						public setDoOutput(dooutput: boolean): void;
						public getHeaderFieldDate(name: string, defaultDate: number): number;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setIfModifiedSince(ifmodifiedsince: number): void;
						public getContent(classes: androidNative.Array<java.lang.Class<any>>): any;
						public setConnectTimeout(timeout: number): void;
						public getExpiration(): number;
						public setDefaultUseCaches(defaultusecaches: boolean): void;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHeaderField(n: number): string;
						public setRequestMethod(method: string): void;
						public getHeaderFieldKey(n: number): string;
						public setUseCaches(usecaches: boolean): void;
						public getHeaderFields(): java.util.Map<string, java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperty(key: string): string;
						public getRequestProperties(): java.util.Map<string, java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrHttpsURLConnection {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrHttpsURLConnection>;
						public equals(obj: any): boolean;
						public getContentLength(): number;
						public getContent(): any;
						public getHeaderField(name: string): string;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public setSSLSocketFactory(factory: javax.net.ssl.SSLSocketFactory): void;
						public addRequestProperty(key: string, value: string): void;
						public getDate(): number;
						public setFixedLengthStreamingMode(contentLength: number): void;
						public getResponseMessage(): string;
						public setChunkedStreamingMode(chunklen: number): void;
						public connect(): void;
						public getHeaderFieldLong(name: string, defaultLong: number): number;
						public getConnectTimeout(): number;
						public setDoInput(doinput: boolean): void;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public getDefaultUseCaches(): boolean;
						public getPeerPrincipal(): java.security.Principal;
						public getDoOutput(): boolean;
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public getInstanceFollowRedirects(): boolean;
						public getResponseCode(): number;
						public hashCode(): number;
						public getCipherSuite(): string;
						public setReadTimeout(timeout: number): void;
						public getUseCaches(): boolean;
						public setRequestProperty(key: string, value: string): void;
						public setInstanceFollowRedirects(followRedirects: boolean): void;
						public getLastModified(): number;
						public getContentLengthLong(): number;
						public getHeaderFieldInt(name: string, defaultInt: number): number;
						public setAllowUserInteraction(allowuserinteraction: boolean): void;
						public setDoOutput(dooutput: boolean): void;
						public setHostnameVerifier(verifier: javax.net.ssl.HostnameVerifier): void;
						public getHeaderFieldDate(name: string, defaultDate: number): number;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setIfModifiedSince(ifmodifiedsince: number): void;
						public getContent(classes: androidNative.Array<java.lang.Class<any>>): any;
						public setConnectTimeout(timeout: number): void;
						public getLocalCertificates(): androidNative.Array<java.security.cert.Certificate>;
						public getLocalPrincipal(): java.security.Principal;
						public getExpiration(): number;
						public setDefaultUseCaches(defaultusecaches: boolean): void;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getServerCertificates(): androidNative.Array<java.security.cert.Certificate>;
						public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
						public getHeaderField(n: number): string;
						public setRequestMethod(method: string): void;
						public getHeaderFieldKey(n: number): string;
						public setUseCaches(usecaches: boolean): void;
						public getHeaderFields(): java.util.Map<string, java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperty(key: string): string;
						public getRequestProperties(): java.util.Map<string, java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrURLConnectionBase {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrURLConnectionBase>;
						public constructor(connection: java.net.HttpURLConnection, timer: com.google.firebase.perf.util.Timer, builder: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder);
						public equals(obj: any): boolean;
						public getContentLength(): number;
						public getContent(): any;
						public getHeaderField(name: string): string;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getContent(e: androidNative.Array<java.lang.Class<any>>): any;
						public addRequestProperty(key: string, value: string): void;
						public getDate(): number;
						public setFixedLengthStreamingMode(contentLength: number): void;
						public getResponseMessage(): string;
						public setChunkedStreamingMode(chunklen: number): void;
						public connect(): void;
						public getHeaderFieldLong(name: string, defaultLong: number): number;
						public getConnectTimeout(): number;
						public setDoInput(doinput: boolean): void;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public getInstanceFollowRedirects(): boolean;
						public getResponseCode(): number;
						public hashCode(): number;
						public setReadTimeout(timeout: number): void;
						public getUseCaches(): boolean;
						public setRequestProperty(key: string, value: string): void;
						public setInstanceFollowRedirects(followRedirects: boolean): void;
						public getLastModified(): number;
						public getContentLengthLong(): number;
						public getHeaderFieldInt(name: string, defaultInt: number): number;
						public setAllowUserInteraction(allowuserinteraction: boolean): void;
						public setDoOutput(dooutput: boolean): void;
						public getHeaderFieldDate(name: string, defaultDate: number): number;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setIfModifiedSince(ifmodifiedsince: number): void;
						public setConnectTimeout(timeout: number): void;
						public getExpiration(): number;
						public setDefaultUseCaches(defaultusecaches: boolean): void;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHeaderField(n: number): string;
						public setRequestMethod(method: string): void;
						public getHeaderFieldKey(n: number): string;
						public setUseCaches(usecaches: boolean): void;
						public getHeaderFields(): java.util.Map<string, java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperty(key: string): string;
						public getRequestProperties(): java.util.Map<string, java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrumentApacheHttpResponseHandler<T> extends org.apache.http.client.ResponseHandler<any> {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrumentApacheHttpResponseHandler<any>>;
						public handleResponse(httpResponse: org.apache.http.HttpResponse): any;
						public constructor(responseHandler: org.apache.http.client.ResponseHandler<any>, timer: com.google.firebase.perf.util.Timer, builder: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class InstrumentOkHttpEnqueueCallback {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrumentOkHttpEnqueueCallback>;
						public constructor(callback: okhttp3.Callback, transportManager: com.google.firebase.perf.transport.TransportManager, timer: com.google.firebase.perf.util.Timer, startTime: number);
						public onFailure(method: okhttp3.Call, this_: java.io.IOException): void;
						public onResponse(call: okhttp3.Call, response: okhttp3.Response): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module network {
					export class NetworkRequestMetricBuilderUtil {
						public static class: java.lang.Class<com.google.firebase.perf.network.NetworkRequestMetricBuilderUtil>;
						public static logError(builder: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder): void;
						public static getApacheHttpMessageContentLength(contentLengthHeader: org.apache.http.HttpMessage): java.lang.Long;
						public static getApacheHttpResponseContentType(contentType: org.apache.http.HttpResponse): string;
						public static isAllowedUserAgent(userAgent: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export class PerfSession {
						public static class: java.lang.Class<com.google.firebase.perf.session.PerfSession>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.session.PerfSession>;
						public constructor(sessionId: string, clock: com.google.firebase.perf.util.Clock);
						public describeContents(): number;
						public static createWithId(sessionId: string): com.google.firebase.perf.session.PerfSession;
						public getTimer(): com.google.firebase.perf.util.Timer;
						public build(): com.google.firebase.perf.v1.PerfSession;
						public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
						public static shouldCollectGaugesAndEvents(): boolean;
						public static buildAndSort(perfSession: java.util.List<com.google.firebase.perf.session.PerfSession>): androidNative.Array<com.google.firebase.perf.v1.PerfSession>;
						public isSessionRunningTooLong(): boolean;
						public sessionId(): string;
						public isGaugeAndEventCollectionEnabled(): boolean;
						public setGaugeAndEventCollectionEnabled(enabled: boolean): void;
						public isVerbose(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export class SessionAwareObject {
						public static class: java.lang.Class<com.google.firebase.perf.session.SessionAwareObject>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.session.SessionAwareObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { updateSession(param0: com.google.firebase.perf.session.PerfSession): void });
						public constructor();
						public updateSession(param0: com.google.firebase.perf.session.PerfSession): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export class SessionManager extends com.google.firebase.perf.application.AppStateUpdateHandler {
						public static class: java.lang.Class<com.google.firebase.perf.session.SessionManager>;
						public constructor();
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public unregisterForSessionUpdates(client: java.lang.ref.WeakReference<com.google.firebase.perf.session.SessionAwareObject>): void;
						public setApplicationContext(appContext: globalAndroid.content.Context): void;
						public registerForSessionUpdates(client: java.lang.ref.WeakReference<com.google.firebase.perf.session.SessionAwareObject>): void;
						public initializeGaugeCollection(): void;
						public onUpdateAppState(session: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public constructor(appStateMonitor: com.google.firebase.perf.application.AppStateMonitor);
						public constructor(gaugeManager: com.google.firebase.perf.session.gauges.GaugeManager, perfSession: com.google.firebase.perf.session.PerfSession, appStateMonitor: com.google.firebase.perf.application.AppStateMonitor);
						public getSyncInitFuture(): java.util.concurrent.Future<any>;
						public stopGaugeCollectionIfSessionRunningTooLong(): void;
						public updatePerfSession(i: com.google.firebase.perf.session.PerfSession): void;
						public setPerfSession(perfSession: com.google.firebase.perf.session.PerfSession): void;
						public static getInstance(): com.google.firebase.perf.session.SessionManager;
						public perfSession(): com.google.firebase.perf.session.PerfSession;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export module gauges {
						export class CpuGaugeCollector {
							public static class: java.lang.Class<com.google.firebase.perf.session.gauges.CpuGaugeCollector>;
							public static INVALID_CPU_COLLECTION_FREQUENCY: number = -1;
							public cpuMetricReadings: java.util.concurrent.ConcurrentLinkedQueue<com.google.firebase.perf.v1.CpuMetricReading>;
							public collectOnce(referenceTime: com.google.firebase.perf.util.Timer): void;
							public startCollecting(cpuMetricCollectionRateMs: number, referenceTime: com.google.firebase.perf.util.Timer): void;
							public stopCollecting(): void;
							public static isInvalidCollectionFrequency(collectionFrequency: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export module gauges {
						export class GaugeManager {
							public static class: java.lang.Class<com.google.firebase.perf.session.gauges.GaugeManager>;
							public static getInstance(): com.google.firebase.perf.session.gauges.GaugeManager;
							public collectGaugeMetricOnce(referenceTime: com.google.firebase.perf.util.Timer): void;
							public initializeGaugeMetadataManager(appContext: globalAndroid.content.Context): void;
							public startCollectingGauges(this_: com.google.firebase.perf.session.PerfSession, session: com.google.firebase.perf.v1.ApplicationProcessState): void;
							public stopCollectingGauges(): void;
							public logGaugeMetadata(this_: string, sessionId: com.google.firebase.perf.v1.ApplicationProcessState): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export module gauges {
						export class GaugeMetadataManager {
							public static class: java.lang.Class<com.google.firebase.perf.session.gauges.GaugeMetadataManager>;
							public getDeviceRamSizeKb(): number;
							public getMaxEncouragedAppJavaHeapMemoryKb(): number;
							public getMaxAppJavaHeapMemoryKb(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module session {
					export module gauges {
						export class MemoryGaugeCollector {
							public static class: java.lang.Class<com.google.firebase.perf.session.gauges.MemoryGaugeCollector>;
							public static INVALID_MEMORY_COLLECTION_FREQUENCY: number = -1;
							public memoryMetricReadings: java.util.concurrent.ConcurrentLinkedQueue<com.google.firebase.perf.v1.AndroidMemoryReading>;
							public collectOnce(referenceTime: com.google.firebase.perf.util.Timer): void;
							public stopCollecting(): void;
							public startCollecting(memoryMetricCollectionRateMs: number, referenceTime: com.google.firebase.perf.util.Timer): void;
							public static isInvalidCollectionFrequency(collectionFrequency: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module transport {
					export class FlgTransport {
						public static class: java.lang.Class<com.google.firebase.perf.transport.FlgTransport>;
						public log(perfMetric: com.google.firebase.perf.v1.PerfMetric): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module transport {
					export class PendingPerfEvent {
						public static class: java.lang.Class<com.google.firebase.perf.transport.PendingPerfEvent>;
						public perfMetricBuilder: com.google.firebase.perf.v1.PerfMetric.Builder;
						public appState: com.google.firebase.perf.v1.ApplicationProcessState;
						public constructor(perfMetricBuilder: com.google.firebase.perf.v1.PerfMetric.Builder, appState: com.google.firebase.perf.v1.ApplicationProcessState);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module transport {
					export class RateLimiter {
						public static class: java.lang.Class<com.google.firebase.perf.transport.RateLimiter>;
						public isFragmentScreenTrace(metric: com.google.firebase.perf.v1.PerfMetric): boolean;
						public constructor(appContext: globalAndroid.content.Context, rate: com.google.firebase.perf.util.Rate, capacity: number);
					}
					export module RateLimiter {
						export class RateLimiterImpl {
							public static class: java.lang.Class<com.google.firebase.perf.transport.RateLimiter.RateLimiterImpl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module transport {
					export class TransportManager extends com.google.firebase.perf.application.AppStateMonitor.AppStateCallback {
						public static class: java.lang.Class<com.google.firebase.perf.transport.TransportManager>;
						public log(gaugeMetric: com.google.firebase.perf.v1.GaugeMetric, appState: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public setInitialized(initialized: boolean): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public log(networkRequestMetric: com.google.firebase.perf.v1.NetworkRequestMetric): void;
						public log(traceMetric: com.google.firebase.perf.v1.TraceMetric, appState: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public log(networkRequestMetric: com.google.firebase.perf.v1.NetworkRequestMetric, appState: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public isInitialized(): boolean;
						public log(traceMetric: com.google.firebase.perf.v1.TraceMetric): void;
						public static getInstance(): com.google.firebase.perf.transport.TransportManager;
						public onUpdateAppState(newAppState: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public initialize(firebaseApp: com.google.firebase.FirebaseApp, firebaseInstallationsApi: com.google.firebase.installations.FirebaseInstallationsApi, flgTransportFactoryProvider: com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>): void;
						public clearAppInstanceId(): void;
						public log(gaugeMetric: com.google.firebase.perf.v1.GaugeMetric): void;
						public getPendingEventsQueue(): java.util.concurrent.ConcurrentLinkedQueue<com.google.firebase.perf.transport.PendingPerfEvent>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class Clock {
						public static class: java.lang.Class<com.google.firebase.perf.util.Clock>;
						public constructor();
						public getTime(): com.google.firebase.perf.util.Timer;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class Constants {
						public static class: java.lang.Class<com.google.firebase.perf.util.Constants>;
						public static PREFS_NAME: string = 'FirebasePerfSharedPrefs';
						public static ENABLE_DISABLE: string = 'isEnabled';
						public static MIN_SAMPLING_RATE: number = 0.0;
						public static MAX_SAMPLING_RATE: number = 1.0;
						public static MAX_URL_LENGTH: number = 2000;
						public static MAX_HOST_LENGTH: number = 255;
						public static MAX_CONTENT_TYPE_LENGTH: number = 128;
						public static MAX_TRACE_CUSTOM_ATTRIBUTES: number = 5;
						public static MAX_TRACE_ID_LENGTH: number = 100;
						public static MAX_COUNTER_ID_LENGTH: number = 100;
						public static MAX_ATTRIBUTE_KEY_LENGTH: number = 40;
						public static MAX_ATTRIBUTE_VALUE_LENGTH: number = 100;
						public static MAX_SUBTRACE_DEEP: number = 1;
						public static RATE_PER_MINUTE: number = 100;
						public static BURST_CAPACITY: number = 500;
						public static SCREEN_TRACE_PREFIX: string = '_st_';
						public static PARENT_FRAGMENT_ATTRIBUTE_KEY: string = 'Parent_fragment';
						public static ACTIVITY_ATTRIBUTE_KEY: string = 'Hosting_activity';
						public static PARENT_FRAGMENT_ATTRIBUTE_VALUE_NONE: string = 'No parent';
						public static SLOW_FRAME_TIME: number = 16;
						public static FROZEN_FRAME_TIME: number = 700;
						public constructor();
					}
					export module Constants {
						export class CounterNames {
							public static class: java.lang.Class<com.google.firebase.perf.util.Constants.CounterNames>;
							public static TRACE_EVENT_RATE_LIMITED: com.google.firebase.perf.util.Constants.CounterNames;
							public static NETWORK_TRACE_EVENT_RATE_LIMITED: com.google.firebase.perf.util.Constants.CounterNames;
							public static TRACE_STARTED_NOT_STOPPED: com.google.firebase.perf.util.Constants.CounterNames;
							public static FRAMES_TOTAL: com.google.firebase.perf.util.Constants.CounterNames;
							public static FRAMES_SLOW: com.google.firebase.perf.util.Constants.CounterNames;
							public static FRAMES_FROZEN: com.google.firebase.perf.util.Constants.CounterNames;
							public static values(): androidNative.Array<com.google.firebase.perf.util.Constants.CounterNames>;
							public toString(): string;
							public static valueOf(name: string): com.google.firebase.perf.util.Constants.CounterNames;
						}
						export class TraceNames {
							public static class: java.lang.Class<com.google.firebase.perf.util.Constants.TraceNames>;
							public static APP_START_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static ON_CREATE_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static ON_START_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static ON_RESUME_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static FOREGROUND_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static BACKGROUND_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static values(): androidNative.Array<com.google.firebase.perf.util.Constants.TraceNames>;
							public static valueOf(name: string): com.google.firebase.perf.util.Constants.TraceNames;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class FirstDrawDoneListener {
						public static class: java.lang.Class<com.google.firebase.perf.util.FirstDrawDoneListener>;
						public onDraw(): void;
						public static registerForNextDraw(view: globalAndroid.view.View, drawDoneCallback: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class ImmutableBundle {
						public static class: java.lang.Class<com.google.firebase.perf.util.ImmutableBundle>;
						public containsKey(key: string): boolean;
						public constructor();
						public getLong(key: string): com.google.firebase.perf.util.Optional<java.lang.Long>;
						public getBoolean(e: string): com.google.firebase.perf.util.Optional<java.lang.Boolean>;
						public getDouble(key: string): com.google.firebase.perf.util.Optional<java.lang.Double>;
						public constructor(bundle: globalAndroid.os.Bundle);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class Optional<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.perf.util.Optional<any>>;
						public get(): T;
						public static fromNullable(value: any): com.google.firebase.perf.util.Optional<any>;
						public static of(value: any): com.google.firebase.perf.util.Optional<any>;
						public isAvailable(): boolean;
						public static absent(): com.google.firebase.perf.util.Optional<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class PreDrawListener {
						public static class: java.lang.Class<com.google.firebase.perf.util.PreDrawListener>;
						public onPreDraw(): boolean;
						public static registerForNextDraw(view: globalAndroid.view.View, drawDoneCallbackBoQ: java.lang.Runnable, drawDoneCallbackFoQ: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class Rate {
						public static class: java.lang.Class<com.google.firebase.perf.util.Rate>;
						public getTokensPerSeconds(): number;
						public constructor(numTokensPerTotalTimeUnit: number, numTimeUnits: number, timeUnit: java.util.concurrent.TimeUnit);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class ScreenTraceUtil {
						public static class: java.lang.Class<com.google.firebase.perf.util.ScreenTraceUtil>;
						public static addFrameCounters(screenTrace: com.google.firebase.perf.metrics.Trace, perfFrameMetrics: com.google.firebase.perf.metrics.FrameMetricsCalculator.PerfFrameMetrics): com.google.firebase.perf.metrics.Trace;
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
			export module perf {
				export module util {
					export abstract class StorageUnit {
						public static class: java.lang.Class<com.google.firebase.perf.util.StorageUnit>;
						public static TERABYTES: com.google.firebase.perf.util.StorageUnit;
						public static GIGABYTES: com.google.firebase.perf.util.StorageUnit;
						public static MEGABYTES: com.google.firebase.perf.util.StorageUnit;
						public static KILOBYTES: com.google.firebase.perf.util.StorageUnit;
						public static BYTES: com.google.firebase.perf.util.StorageUnit;
						public static values(): androidNative.Array<com.google.firebase.perf.util.StorageUnit>;
						public convert(param0: number, param1: com.google.firebase.perf.util.StorageUnit): number;
						public static valueOf(name: string): com.google.firebase.perf.util.StorageUnit;
						public toGigabytes(quantity: number): number;
						public toTerabytes(quantity: number): number;
						public toBytes(quantity: number): number;
						public toMegabytes(quantity: number): number;
						public toKilobytes(quantity: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class Timer {
						public static class: java.lang.Class<com.google.firebase.perf.util.Timer>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.perf.util.Timer>;
						public static ofElapsedRealtime(elapsedRealtimeMillis: number): com.google.firebase.perf.util.Timer;
						public constructor();
						public describeContents(): number;
						public getMicros(): number;
						public getDurationMicros(end: com.google.firebase.perf.util.Timer): number;
						public constructor(testTime: number);
						public getDurationMicros(): number;
						public getCurrentTimestampMicros(): number;
						public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class URLAllowlist {
						public static class: java.lang.Class<com.google.firebase.perf.util.URLAllowlist>;
						public constructor();
						public static isURLAllowlisted(allowlistedDomain: java.net.URI, uri: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class URLWrapper {
						public static class: java.lang.Class<com.google.firebase.perf.util.URLWrapper>;
						public openConnection(): java.net.URLConnection;
						public toString(): string;
						public constructor(url: java.net.URL);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module util {
					export class Utils {
						public static class: java.lang.Class<com.google.firebase.perf.util.Utils>;
						public constructor();
						public static stripSensitiveInfo(urlString: string): string;
						public static bufferToInt(i: androidNative.Array<number>): number;
						public static checkArgument(expression: boolean, errorMessage: string): void;
						public static saturatedIntCast(value: number): number;
						public static truncateURL(lastSlash: string, urlString: number): string;
						public static isDebugLoggingEnabled(ai: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class AndroidApplicationInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.AndroidApplicationInfo, com.google.firebase.perf.v1.AndroidApplicationInfo.Builder> implements com.google.firebase.perf.v1.AndroidApplicationInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidApplicationInfo>;
						public static PACKAGE_NAME_FIELD_NUMBER: number = 1;
						public static SDK_VERSION_FIELD_NUMBER: number = 2;
						public static VERSION_NAME_FIELD_NUMBER: number = 3;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.AndroidApplicationInfo>;
						public getVersionName(): string;
						public hasVersionName(): boolean;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getSdkVersionBytes(): com.google.protobuf.ByteString;
						public static newBuilder(prototype: com.google.firebase.perf.v1.AndroidApplicationInfo): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getVersionNameBytes(): com.google.protobuf.ByteString;
						public hasPackageName(): boolean;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public hasSdkVersion(): boolean;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getSdkVersion(): string;
						public getPackageName(): string;
						public static getDefaultInstance(): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getPackageNameBytes(): com.google.protobuf.ByteString;
						public static newBuilder(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
					}
					export module AndroidApplicationInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.AndroidApplicationInfo, com.google.firebase.perf.v1.AndroidApplicationInfo.Builder> implements com.google.firebase.perf.v1.AndroidApplicationInfoOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidApplicationInfo.Builder>;
							public setVersionName(value: string): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public getSdkVersion(): string;
							public getSdkVersionBytes(): com.google.protobuf.ByteString;
							public hasPackageName(): boolean;
							public getPackageNameBytes(): com.google.protobuf.ByteString;
							public hasSdkVersion(): boolean;
							public clearSdkVersion(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public getVersionName(): string;
							public setVersionNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public hasVersionName(): boolean;
							public getVersionNameBytes(): com.google.protobuf.ByteString;
							public getPackageName(): string;
							public clearPackageName(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setSdkVersion(value: string): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public clearVersionName(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setPackageNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setSdkVersionBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setPackageName(value: string): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class AndroidApplicationInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidApplicationInfoOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.AndroidApplicationInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasPackageName(): boolean; getPackageName(): string; getPackageNameBytes(): com.google.protobuf.ByteString; hasSdkVersion(): boolean; getSdkVersion(): string; getSdkVersionBytes(): com.google.protobuf.ByteString; hasVersionName(): boolean; getVersionName(): string; getVersionNameBytes(): com.google.protobuf.ByteString });
						public constructor();
						public getSdkVersion(): string;
						public getPackageName(): string;
						public getVersionNameBytes(): com.google.protobuf.ByteString;
						public hasPackageName(): boolean;
						public getVersionName(): string;
						public hasVersionName(): boolean;
						public getPackageNameBytes(): com.google.protobuf.ByteString;
						public hasSdkVersion(): boolean;
						public getSdkVersionBytes(): com.google.protobuf.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class AndroidMemoryReading extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.AndroidMemoryReading, com.google.firebase.perf.v1.AndroidMemoryReading.Builder> implements com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public static CLIENT_TIME_US_FIELD_NUMBER: number = 1;
						public static USED_APP_JAVA_HEAP_MEMORY_KB_FIELD_NUMBER: number = 2;
						public hasUsedAppJavaHeapMemoryKb(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static newBuilder(prototype: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.AndroidMemoryReading;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public hasClientTimeUs(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static getDefaultInstance(): com.google.firebase.perf.v1.AndroidMemoryReading;
						public getClientTimeUs(): number;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static newBuilder(): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
						public getUsedAppJavaHeapMemoryKb(): number;
					}
					export module AndroidMemoryReading {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.AndroidMemoryReading, com.google.firebase.perf.v1.AndroidMemoryReading.Builder> implements com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidMemoryReading.Builder>;
							public hasClientTimeUs(): boolean;
							public getClientTimeUs(): number;
							public clearClientTimeUs(): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
							public clearUsedAppJavaHeapMemoryKb(): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
							public hasUsedAppJavaHeapMemoryKb(): boolean;
							public getUsedAppJavaHeapMemoryKb(): number;
							public setUsedAppJavaHeapMemoryKb(value: number): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
							public setClientTimeUs(value: number): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class AndroidMemoryReadingOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasClientTimeUs(): boolean; getClientTimeUs(): number; hasUsedAppJavaHeapMemoryKb(): boolean; getUsedAppJavaHeapMemoryKb(): number });
						public constructor();
						public hasUsedAppJavaHeapMemoryKb(): boolean;
						public getClientTimeUs(): number;
						public hasClientTimeUs(): boolean;
						public getUsedAppJavaHeapMemoryKb(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class ApplicationInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.ApplicationInfo, com.google.firebase.perf.v1.ApplicationInfo.Builder> implements com.google.firebase.perf.v1.ApplicationInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationInfo>;
						public static GOOGLE_APP_ID_FIELD_NUMBER: number = 1;
						public static APP_INSTANCE_ID_FIELD_NUMBER: number = 2;
						public static ANDROID_APP_INFO_FIELD_NUMBER: number = 3;
						public static APPLICATION_PROCESS_STATE_FIELD_NUMBER: number = 5;
						public static CUSTOM_ATTRIBUTES_FIELD_NUMBER: number = 6;
						public hasGoogleAppId(): boolean;
						public hasAndroidAppInfo(): boolean;
						public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public getCustomAttributesCount(): number;
						public containsCustomAttributes(key: string): boolean;
						public getCustomAttributesOrDefault(key: string, defaultValue: string): string;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.ApplicationInfo;
						public hasApplicationProcessState(): boolean;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.ApplicationInfo;
						public hasAppInstanceId(): boolean;
						public getApplicationProcessState(): com.google.firebase.perf.v1.ApplicationProcessState;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.ApplicationInfo;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string, string>;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.ApplicationInfo;
						public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
						public getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public static newBuilder(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
						public static getDefaultInstance(): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getCustomAttributesOrThrow(key: string): string;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.ApplicationInfo;
						public getGoogleAppId(): string;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public getAppInstanceId(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.ApplicationInfo>;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string, string>;
						public static newBuilder(prototype: com.google.firebase.perf.v1.ApplicationInfo): com.google.firebase.perf.v1.ApplicationInfo.Builder;
						public getCustomAttributesOrThrow(param0: string): string;
					}
					export module ApplicationInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.ApplicationInfo, com.google.firebase.perf.v1.ApplicationInfo.Builder> implements com.google.firebase.perf.v1.ApplicationInfoOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationInfo.Builder>;
							public getCustomAttributesOrDefault(param0: string, param1: string): string;
							public removeCustomAttributes(key: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public putAllCustomAttributes(values: java.util.Map<string, string>): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public setAppInstanceIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
							public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
							public hasAndroidAppInfo(): boolean;
							public hasApplicationProcessState(): boolean;
							public getApplicationProcessState(): com.google.firebase.perf.v1.ApplicationProcessState;
							public containsCustomAttributes(param0: string): boolean;
							public hasAppInstanceId(): boolean;
							public getCustomAttributesCount(): number;
							public getAppInstanceId(): string;
							public hasGoogleAppId(): boolean;
							public setAndroidAppInfo(value: com.google.firebase.perf.v1.AndroidApplicationInfo): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public setGoogleAppIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public putCustomAttributes(key: string, value: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							/** @deprecated */
							public getCustomAttributes(): java.util.Map<string, string>;
							public getGoogleAppId(): string;
							public mergeAndroidAppInfo(value: com.google.firebase.perf.v1.AndroidApplicationInfo): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public clearApplicationProcessState(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public setApplicationProcessState(value: com.google.firebase.perf.v1.ApplicationProcessState): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public setGoogleAppId(value: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
							public containsCustomAttributes(key: string): boolean;
							public setAndroidAppInfo(builderForValue: com.google.firebase.perf.v1.AndroidApplicationInfo.Builder): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesMap(): java.util.Map<string, string>;
							public clearAppInstanceId(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public clearCustomAttributes(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesOrThrow(param0: string): string;
							public clearAndroidAppInfo(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesOrThrow(key: string): string;
							public setAppInstanceId(value: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public clearGoogleAppId(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesOrDefault(key: string, defaultValue: string): string;
						}
						export class CustomAttributesDefaultEntryHolder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationInfo.CustomAttributesDefaultEntryHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class ApplicationInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationInfoOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.ApplicationInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasGoogleAppId(): boolean;
							getGoogleAppId(): string;
							getGoogleAppIdBytes(): com.google.protobuf.ByteString;
							hasAppInstanceId(): boolean;
							getAppInstanceId(): string;
							getAppInstanceIdBytes(): com.google.protobuf.ByteString;
							hasAndroidAppInfo(): boolean;
							getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
							hasApplicationProcessState(): boolean;
							getApplicationProcessState(): com.google.firebase.perf.v1.ApplicationProcessState;
							getCustomAttributesCount(): number;
							containsCustomAttributes(param0: string): boolean;
							getCustomAttributes(): java.util.Map<string, string>;
							getCustomAttributesMap(): java.util.Map<string, string>;
							getCustomAttributesOrDefault(param0: string, param1: string): string;
							getCustomAttributesOrThrow(param0: string): string;
						});
						public constructor();
						public hasGoogleAppId(): boolean;
						public hasAndroidAppInfo(): boolean;
						public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						public getCustomAttributesCount(): number;
						public hasApplicationProcessState(): boolean;
						public hasAppInstanceId(): boolean;
						public getApplicationProcessState(): com.google.firebase.perf.v1.ApplicationProcessState;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string, string>;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public getGoogleAppId(): string;
						public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
						public getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getAppInstanceId(): string;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string, string>;
						public getCustomAttributesOrThrow(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class ApplicationProcessState extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationProcessState>;
						public static APPLICATION_PROCESS_STATE_UNKNOWN: com.google.firebase.perf.v1.ApplicationProcessState;
						public static FOREGROUND: com.google.firebase.perf.v1.ApplicationProcessState;
						public static BACKGROUND: com.google.firebase.perf.v1.ApplicationProcessState;
						public static FOREGROUND_BACKGROUND: com.google.firebase.perf.v1.ApplicationProcessState;
						public static APPLICATION_PROCESS_STATE_UNKNOWN_VALUE: number = 0;
						public static FOREGROUND_VALUE: number = 1;
						public static BACKGROUND_VALUE: number = 2;
						public static FOREGROUND_BACKGROUND_VALUE: number = 3;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.ApplicationProcessState>;
						public static forNumber(value: number): com.google.firebase.perf.v1.ApplicationProcessState;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(value: number): com.google.firebase.perf.v1.ApplicationProcessState;
						public static valueOf(name: string): com.google.firebase.perf.v1.ApplicationProcessState;
						public static values(): androidNative.Array<com.google.firebase.perf.v1.ApplicationProcessState>;
					}
					export module ApplicationProcessState {
						export class ApplicationProcessStateVerifier {
							public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationProcessState.ApplicationProcessStateVerifier>;
							public isInRange(number: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class CpuMetricReading extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.CpuMetricReading, com.google.firebase.perf.v1.CpuMetricReading.Builder> implements com.google.firebase.perf.v1.CpuMetricReadingOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.CpuMetricReading>;
						public static CLIENT_TIME_US_FIELD_NUMBER: number = 1;
						public static USER_TIME_US_FIELD_NUMBER: number = 2;
						public static SYSTEM_TIME_US_FIELD_NUMBER: number = 3;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public hasUserTimeUs(): boolean;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public hasSystemTimeUs(): boolean;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.CpuMetricReading;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public hasClientTimeUs(): boolean;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.CpuMetricReading;
						public getSystemTimeUs(): number;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public static newBuilder(prototype: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.CpuMetricReading.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.CpuMetricReading>;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public getClientTimeUs(): number;
						public static newBuilder(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.CpuMetricReading;
						public static getDefaultInstance(): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public getUserTimeUs(): number;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.CpuMetricReading;
					}
					export module CpuMetricReading {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.CpuMetricReading, com.google.firebase.perf.v1.CpuMetricReading.Builder> implements com.google.firebase.perf.v1.CpuMetricReadingOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.CpuMetricReading.Builder>;
							public clearUserTimeUs(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public clearSystemTimeUs(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public hasClientTimeUs(): boolean;
							public getClientTimeUs(): number;
							public hasSystemTimeUs(): boolean;
							public setClientTimeUs(value: number): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public getSystemTimeUs(): number;
							public clearClientTimeUs(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public setUserTimeUs(value: number): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public hasUserTimeUs(): boolean;
							public getUserTimeUs(): number;
							public setSystemTimeUs(value: number): com.google.firebase.perf.v1.CpuMetricReading.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class CpuMetricReadingOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.CpuMetricReadingOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.CpuMetricReadingOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasClientTimeUs(): boolean; getClientTimeUs(): number; hasUserTimeUs(): boolean; getUserTimeUs(): number; hasSystemTimeUs(): boolean; getSystemTimeUs(): number });
						public constructor();
						public getSystemTimeUs(): number;
						public getClientTimeUs(): number;
						public hasUserTimeUs(): boolean;
						public hasSystemTimeUs(): boolean;
						public getUserTimeUs(): number;
						public hasClientTimeUs(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class FirebasePerfMetricProto {
						public static class: java.lang.Class<com.google.firebase.perf.v1.FirebasePerfMetricProto>;
						public static registerAllExtensions(registry: com.google.protobuf.ExtensionRegistryLite): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class GaugeMetadata extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.GaugeMetadata, com.google.firebase.perf.v1.GaugeMetadata.Builder> implements com.google.firebase.perf.v1.GaugeMetadataOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetadata>;
						public static PROCESS_NAME_FIELD_NUMBER: number = 1;
						public static CPU_CLOCK_RATE_KHZ_FIELD_NUMBER: number = 2;
						public static CPU_PROCESSOR_COUNT_FIELD_NUMBER: number = 6;
						public static DEVICE_RAM_SIZE_KB_FIELD_NUMBER: number = 3;
						public static MAX_APP_JAVA_HEAP_MEMORY_KB_FIELD_NUMBER: number = 4;
						public static MAX_ENCOURAGED_APP_JAVA_HEAP_MEMORY_KB_FIELD_NUMBER: number = 5;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetadata;
						public hasCpuClockRateKhz(): boolean;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.GaugeMetadata>;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.GaugeMetadata;
						/** @deprecated */
						public getProcessName(): string;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public getCpuClockRateKhz(): number;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public static newBuilder(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
						public hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
						public getDeviceRamSizeKb(): number;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.GaugeMetadata;
						public getCpuProcessorCount(): number;
						public getMaxEncouragedAppJavaHeapMemoryKb(): number;
						/** @deprecated */
						public hasProcessName(): boolean;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public static getDefaultInstance(): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetadata;
						public getMaxAppJavaHeapMemoryKb(): number;
						public hasMaxAppJavaHeapMemoryKb(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						/** @deprecated */
						public getProcessNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public hasDeviceRamSizeKb(): boolean;
						public hasCpuProcessorCount(): boolean;
						public static newBuilder(prototype: com.google.firebase.perf.v1.GaugeMetadata): com.google.firebase.perf.v1.GaugeMetadata.Builder;
					}
					export module GaugeMetadata {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.GaugeMetadata, com.google.firebase.perf.v1.GaugeMetadata.Builder> implements com.google.firebase.perf.v1.GaugeMetadataOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetadata.Builder>;
							public getDeviceRamSizeKb(): number;
							public clearCpuProcessorCount(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							/** @deprecated */
							public hasProcessName(): boolean;
							public hasMaxAppJavaHeapMemoryKb(): boolean;
							public setMaxAppJavaHeapMemoryKb(value: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public setMaxEncouragedAppJavaHeapMemoryKb(value: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public clearMaxAppJavaHeapMemoryKb(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public clearCpuClockRateKhz(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							/** @deprecated */
							public getProcessName(): string;
							public hasDeviceRamSizeKb(): boolean;
							/** @deprecated */
							public setProcessNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public clearMaxEncouragedAppJavaHeapMemoryKb(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							/** @deprecated */
							public getProcessNameBytes(): com.google.protobuf.ByteString;
							public setCpuProcessorCount(value: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public getMaxEncouragedAppJavaHeapMemoryKb(): number;
							public setCpuClockRateKhz(value: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public hasCpuProcessorCount(): boolean;
							/** @deprecated */
							public setProcessName(value: string): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public clearDeviceRamSizeKb(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public getCpuProcessorCount(): number;
							public setDeviceRamSizeKb(value: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public getCpuClockRateKhz(): number;
							public hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
							/** @deprecated */
							public clearProcessName(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public hasCpuClockRateKhz(): boolean;
							public getMaxAppJavaHeapMemoryKb(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class GaugeMetadataOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetadataOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.GaugeMetadataOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasProcessName(): boolean; getProcessName(): string; getProcessNameBytes(): com.google.protobuf.ByteString; hasCpuClockRateKhz(): boolean; getCpuClockRateKhz(): number; hasCpuProcessorCount(): boolean; getCpuProcessorCount(): number; hasDeviceRamSizeKb(): boolean; getDeviceRamSizeKb(): number; hasMaxAppJavaHeapMemoryKb(): boolean; getMaxAppJavaHeapMemoryKb(): number; hasMaxEncouragedAppJavaHeapMemoryKb(): boolean; getMaxEncouragedAppJavaHeapMemoryKb(): number });
						public constructor();
						public hasCpuClockRateKhz(): boolean;
						/** @deprecated */
						public getProcessName(): string;
						public getCpuClockRateKhz(): number;
						public getMaxAppJavaHeapMemoryKb(): number;
						public hasMaxAppJavaHeapMemoryKb(): boolean;
						public hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
						public getDeviceRamSizeKb(): number;
						/** @deprecated */
						public getProcessNameBytes(): com.google.protobuf.ByteString;
						public getCpuProcessorCount(): number;
						public getMaxEncouragedAppJavaHeapMemoryKb(): number;
						public hasDeviceRamSizeKb(): boolean;
						public hasCpuProcessorCount(): boolean;
						/** @deprecated */
						public hasProcessName(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class GaugeMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.GaugeMetric, com.google.firebase.perf.v1.GaugeMetric.Builder> implements com.google.firebase.perf.v1.GaugeMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetric>;
						public static SESSION_ID_FIELD_NUMBER: number = 1;
						public static GAUGE_METADATA_FIELD_NUMBER: number = 3;
						public static CPU_METRIC_READINGS_FIELD_NUMBER: number = 2;
						public static ANDROID_MEMORY_READINGS_FIELD_NUMBER: number = 4;
						public hasSessionId(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public getAndroidMemoryReadingsOrBuilder(index: number): com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public getCpuMetricReadingsOrBuilderList(): java.util.List<any>;
						public getAndroidMemoryReadings(index: number): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetric;
						public getCpuMetricReadingsCount(): number;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetric;
						public getCpuMetricReadingsOrBuilder(index: number): com.google.firebase.perf.v1.CpuMetricReadingOrBuilder;
						public static newBuilder(prototype: com.google.firebase.perf.v1.GaugeMetric): com.google.firebase.perf.v1.GaugeMetric.Builder;
						public getAndroidMemoryReadingsList(): java.util.List<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.GaugeMetric>;
						public getAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static newBuilder(): com.google.firebase.perf.v1.GaugeMetric.Builder;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public hasGaugeMetadata(): boolean;
						public getAndroidMemoryReadingsCount(): number;
						public getCpuMetricReadingsList(): java.util.List<com.google.firebase.perf.v1.CpuMetricReading>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.GaugeMetric;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetadata;
						public getCpuMetricReadings(param0: number): com.google.firebase.perf.v1.CpuMetricReading;
						public getCpuMetricReadings(index: number): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public getSessionIdBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.GaugeMetric;
						public getSessionId(): string;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.GaugeMetric;
						public getAndroidMemoryReadingsOrBuilderList(): java.util.List<any>;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetric;
						public static getDefaultInstance(): com.google.firebase.perf.v1.GaugeMetric;
					}
					export module GaugeMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.GaugeMetric, com.google.firebase.perf.v1.GaugeMetric.Builder> implements com.google.firebase.perf.v1.GaugeMetricOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetric.Builder>;
							public getSessionIdBytes(): com.google.protobuf.ByteString;
							public setGaugeMetadata(builderForValue: com.google.firebase.perf.v1.GaugeMetadata.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public removeAndroidMemoryReadings(index: number): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAllCpuMetricReadings(values: java.lang.Iterable<any>): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearSessionId(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addCpuMetricReadings(index: number, builderForValue: com.google.firebase.perf.v1.CpuMetricReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearAndroidMemoryReadings(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading;
							public setGaugeMetadata(value: com.google.firebase.perf.v1.GaugeMetadata): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public mergeGaugeMetadata(value: com.google.firebase.perf.v1.GaugeMetadata): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAndroidMemoryReadings(value: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getCpuMetricReadings(param0: number): com.google.firebase.perf.v1.CpuMetricReading;
							public getSessionId(): string;
							public setSessionIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setSessionId(value: string): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getAndroidMemoryReadingsCount(): number;
							public setAndroidMemoryReadings(index: number, value: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getCpuMetricReadings(index: number): com.google.firebase.perf.v1.CpuMetricReading;
							public clearGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getAndroidMemoryReadingsList(): java.util.List<com.google.firebase.perf.v1.AndroidMemoryReading>;
							public getGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetadata;
							public getAndroidMemoryReadings(index: number): com.google.firebase.perf.v1.AndroidMemoryReading;
							public setCpuMetricReadings(index: number, value: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addCpuMetricReadings(value: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public removeCpuMetricReadings(index: number): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAllAndroidMemoryReadings(values: java.lang.Iterable<any>): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public hasSessionId(): boolean;
							public getCpuMetricReadingsCount(): number;
							public setCpuMetricReadings(index: number, builderForValue: com.google.firebase.perf.v1.CpuMetricReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAndroidMemoryReadings(builderForValue: com.google.firebase.perf.v1.AndroidMemoryReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearCpuMetricReadings(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAndroidMemoryReadings(index: number, value: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getCpuMetricReadingsList(): java.util.List<com.google.firebase.perf.v1.CpuMetricReading>;
							public addCpuMetricReadings(index: number, value: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addCpuMetricReadings(builderForValue: com.google.firebase.perf.v1.CpuMetricReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setAndroidMemoryReadings(index: number, builderForValue: com.google.firebase.perf.v1.AndroidMemoryReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public hasGaugeMetadata(): boolean;
							public addAndroidMemoryReadings(index: number, builderForValue: com.google.firebase.perf.v1.AndroidMemoryReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class GaugeMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetricOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.GaugeMetricOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasSessionId(): boolean;
							getSessionId(): string;
							getSessionIdBytes(): com.google.protobuf.ByteString;
							hasGaugeMetadata(): boolean;
							getGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetadata;
							getCpuMetricReadingsList(): java.util.List<com.google.firebase.perf.v1.CpuMetricReading>;
							getCpuMetricReadings(param0: number): com.google.firebase.perf.v1.CpuMetricReading;
							getCpuMetricReadingsCount(): number;
							getAndroidMemoryReadingsList(): java.util.List<com.google.firebase.perf.v1.AndroidMemoryReading>;
							getAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading;
							getAndroidMemoryReadingsCount(): number;
						});
						public constructor();
						public hasSessionId(): boolean;
						public getCpuMetricReadingsCount(): number;
						public hasGaugeMetadata(): boolean;
						public getSessionIdBytes(): com.google.protobuf.ByteString;
						public getSessionId(): string;
						public getAndroidMemoryReadingsList(): java.util.List<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public getAndroidMemoryReadingsCount(): number;
						public getCpuMetricReadingsList(): java.util.List<com.google.firebase.perf.v1.CpuMetricReading>;
						public getAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading;
						public getGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetadata;
						public getCpuMetricReadings(param0: number): com.google.firebase.perf.v1.CpuMetricReading;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class NetworkConnectionInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.NetworkConnectionInfo, com.google.firebase.perf.v1.NetworkConnectionInfo.Builder> implements com.google.firebase.perf.v1.NetworkConnectionInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo>;
						public static NETWORK_TYPE_FIELD_NUMBER: number = 1;
						public static MOBILE_SUBTYPE_FIELD_NUMBER: number = 2;
						public static getDefaultInstance(): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.NetworkConnectionInfo>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static newBuilder(): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static newBuilder(prototype: com.google.firebase.perf.v1.NetworkConnectionInfo): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
						public hasNetworkType(): boolean;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public hasMobileSubtype(): boolean;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.NetworkConnectionInfo;
					}
					export module NetworkConnectionInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.NetworkConnectionInfo, com.google.firebase.perf.v1.NetworkConnectionInfo.Builder> implements com.google.firebase.perf.v1.NetworkConnectionInfoOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.Builder>;
							public hasNetworkType(): boolean;
							public clearNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
							public setNetworkType(value: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
							public getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public hasMobileSubtype(): boolean;
							public getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public setMobileSubtype(value: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
							public clearMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
						}
						export class MobileSubtype extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype>;
							public static UNKNOWN_MOBILE_SUBTYPE: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static GPRS: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static EDGE: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static UMTS: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static CDMA: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static EVDO_0: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static EVDO_A: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static RTT: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static HSDPA: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static HSUPA: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static HSPA: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static IDEN: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static EVDO_B: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static LTE: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static EHRPD: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static HSPAP: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static GSM: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static TD_SCDMA: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static IWLAN: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static LTE_CA: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static COMBINED: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static UNKNOWN_MOBILE_SUBTYPE_VALUE: number = 0;
							public static GPRS_VALUE: number = 1;
							public static EDGE_VALUE: number = 2;
							public static UMTS_VALUE: number = 3;
							public static CDMA_VALUE: number = 4;
							public static EVDO_0_VALUE: number = 5;
							public static EVDO_A_VALUE: number = 6;
							public static RTT_VALUE: number = 7;
							public static HSDPA_VALUE: number = 8;
							public static HSUPA_VALUE: number = 9;
							public static HSPA_VALUE: number = 10;
							public static IDEN_VALUE: number = 11;
							public static EVDO_B_VALUE: number = 12;
							public static LTE_VALUE: number = 13;
							public static EHRPD_VALUE: number = 14;
							public static HSPAP_VALUE: number = 15;
							public static GSM_VALUE: number = 16;
							public static TD_SCDMA_VALUE: number = 17;
							public static IWLAN_VALUE: number = 18;
							public static LTE_CA_VALUE: number = 19;
							public static COMBINED_VALUE: number = 100;
							public static valueOf(name: string): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static values(): androidNative.Array<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype>;
							public static forNumber(value: number): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype>;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
						}
						export module MobileSubtype {
							export class MobileSubtypeVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype.MobileSubtypeVerifier>;
								public isInRange(number: number): boolean;
							}
						}
						export class NetworkType extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType>;
							public static NONE: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static WIFI: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_MMS: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_SUPL: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_DUN: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_HIPRI: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static WIMAX: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static BLUETOOTH: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static DUMMY: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static ETHERNET: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_FOTA: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_IMS: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_CBS: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static WIFI_P2P: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_IA: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static MOBILE_EMERGENCY: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static PROXY: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static VPN: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static NONE_VALUE: number = -1;
							public static MOBILE_VALUE: number = 0;
							public static WIFI_VALUE: number = 1;
							public static MOBILE_MMS_VALUE: number = 2;
							public static MOBILE_SUPL_VALUE: number = 3;
							public static MOBILE_DUN_VALUE: number = 4;
							public static MOBILE_HIPRI_VALUE: number = 5;
							public static WIMAX_VALUE: number = 6;
							public static BLUETOOTH_VALUE: number = 7;
							public static DUMMY_VALUE: number = 8;
							public static ETHERNET_VALUE: number = 9;
							public static MOBILE_FOTA_VALUE: number = 10;
							public static MOBILE_IMS_VALUE: number = 11;
							public static MOBILE_CBS_VALUE: number = 12;
							public static WIFI_P2P_VALUE: number = 13;
							public static MOBILE_IA_VALUE: number = 14;
							public static MOBILE_EMERGENCY_VALUE: number = 15;
							public static PROXY_VALUE: number = 16;
							public static VPN_VALUE: number = 17;
							public static valueOf(name: string): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static values(): androidNative.Array<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType>;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType>;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static forNumber(value: number): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
						}
						export module NetworkType {
							export class NetworkTypeVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType.NetworkTypeVerifier>;
								public isInRange(number: number): boolean;
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
			export module perf {
				export module v1 {
					export class NetworkConnectionInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfoOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.NetworkConnectionInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasNetworkType(): boolean; getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType; hasMobileSubtype(): boolean; getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype });
						public constructor();
						public hasNetworkType(): boolean;
						public getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
						public getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
						public hasMobileSubtype(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class NetworkRequestMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.NetworkRequestMetric, com.google.firebase.perf.v1.NetworkRequestMetric.Builder> implements com.google.firebase.perf.v1.NetworkRequestMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric>;
						public static URL_FIELD_NUMBER: number = 1;
						public static HTTP_METHOD_FIELD_NUMBER: number = 2;
						public static REQUEST_PAYLOAD_BYTES_FIELD_NUMBER: number = 3;
						public static RESPONSE_PAYLOAD_BYTES_FIELD_NUMBER: number = 4;
						public static NETWORK_CLIENT_ERROR_REASON_FIELD_NUMBER: number = 11;
						public static HTTP_RESPONSE_CODE_FIELD_NUMBER: number = 5;
						public static RESPONSE_CONTENT_TYPE_FIELD_NUMBER: number = 6;
						public static CLIENT_START_TIME_US_FIELD_NUMBER: number = 7;
						public static TIME_TO_REQUEST_COMPLETED_US_FIELD_NUMBER: number = 8;
						public static TIME_TO_RESPONSE_INITIATED_US_FIELD_NUMBER: number = 9;
						public static TIME_TO_RESPONSE_COMPLETED_US_FIELD_NUMBER: number = 10;
						public static CUSTOM_ATTRIBUTES_FIELD_NUMBER: number = 12;
						public static PERF_SESSIONS_FIELD_NUMBER: number = 13;
						public hasRequestPayloadBytes(): boolean;
						public static newBuilder(prototype: com.google.firebase.perf.v1.NetworkRequestMetric): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
						public getCustomAttributesOrDefault(key: string, defaultValue: string): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.NetworkRequestMetric>;
						public hasTimeToResponseInitiatedUs(): boolean;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public hasClientStartTimeUs(): boolean;
						public getRequestPayloadBytes(): number;
						public getPerfSessionsOrBuilderList(): java.util.List<any>;
						public hasNetworkClientErrorReason(): boolean;
						public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getUrl(): string;
						public static newBuilder(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
						public getHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public hasTimeToRequestCompletedUs(): boolean;
						public getTimeToResponseInitiatedUs(): number;
						public getPerfSessionsOrBuilder(index: number): com.google.firebase.perf.v1.PerfSessionOrBuilder;
						public getCustomAttributesOrThrow(key: string): string;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static getDefaultInstance(): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasResponseContentType(): boolean;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string, string>;
						public getCustomAttributesOrThrow(param0: string): string;
						public getTimeToResponseCompletedUs(): number;
						public getCustomAttributesCount(): number;
						public containsCustomAttributes(key: string): boolean;
						public getHttpResponseCode(): number;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string, string>;
						public hasUrl(): boolean;
						public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
						public getResponseContentType(): string;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
						public getPerfSessions(index: number): com.google.firebase.perf.v1.PerfSession;
						public getResponseContentTypeBytes(): com.google.protobuf.ByteString;
						public getPerfSessionsCount(): number;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getResponsePayloadBytes(): number;
						public getClientStartTimeUs(): number;
						public hasTimeToResponseCompletedUs(): boolean;
						public getUrlBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasResponsePayloadBytes(): boolean;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasHttpMethod(): boolean;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasHttpResponseCode(): boolean;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getTimeToRequestCompletedUs(): number;
					}
					export module NetworkRequestMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.NetworkRequestMetric, com.google.firebase.perf.v1.NetworkRequestMetric.Builder> implements com.google.firebase.perf.v1.NetworkRequestMetricOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.Builder>;
							public hasNetworkClientErrorReason(): boolean;
							public getCustomAttributesOrDefault(param0: string, param1: string): string;
							public hasTimeToResponseCompletedUs(): boolean;
							public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
							public getPerfSessionsCount(): number;
							public clearTimeToResponseCompletedUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(value: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setHttpMethod(value: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(builderForValue: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setResponseContentTypeBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getCustomAttributesCount(): number;
							public hasHttpResponseCode(): boolean;
							public clearClientStartTimeUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setResponsePayloadBytes(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasTimeToRequestCompletedUs(): boolean;
							/** @deprecated */
							public getCustomAttributes(): java.util.Map<string, string>;
							public setUrl(value: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(index: number, builderForValue: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setTimeToResponseCompletedUs(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(index: number, value: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setResponseContentType(value: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setHttpResponseCode(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasClientStartTimeUs(): boolean;
							public removePerfSessions(index: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getUrl(): string;
							public hasResponseContentType(): boolean;
							public removeCustomAttributes(key: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getPerfSessions(index: number): com.google.firebase.perf.v1.PerfSession;
							public hasHttpMethod(): boolean;
							public addAllPerfSessions(values: java.lang.Iterable<any>): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasRequestPayloadBytes(): boolean;
							public getCustomAttributesOrDefault(key: string, defaultValue: string): string;
							public hasTimeToResponseInitiatedUs(): boolean;
							public clearResponsePayloadBytes(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setNetworkClientErrorReason(value: com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearPerfSessions(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearRequestPayloadBytes(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public putAllCustomAttributes(values: java.util.Map<string, string>): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setTimeToRequestCompletedUs(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setUrlBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getUrlBytes(): com.google.protobuf.ByteString;
							public getHttpResponseCode(): number;
							public getResponseContentType(): string;
							public setPerfSessions(index: number, value: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearCustomAttributes(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getTimeToResponseCompletedUs(): number;
							public containsCustomAttributes(param0: string): boolean;
							public hasUrl(): boolean;
							public getClientStartTimeUs(): number;
							public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
							public getTimeToResponseInitiatedUs(): number;
							public getHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public getResponsePayloadBytes(): number;
							public setPerfSessions(index: number, builderForValue: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public putCustomAttributes(key: string, value: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasResponsePayloadBytes(): boolean;
							public clearUrl(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearTimeToRequestCompletedUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public containsCustomAttributes(key: string): boolean;
							public clearNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setClientStartTimeUs(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getCustomAttributesMap(): java.util.Map<string, string>;
							public getResponseContentTypeBytes(): com.google.protobuf.ByteString;
							public setTimeToResponseInitiatedUs(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getRequestPayloadBytes(): number;
							public setRequestPayloadBytes(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getCustomAttributesOrThrow(param0: string): string;
							public getTimeToRequestCompletedUs(): number;
							public getCustomAttributesOrThrow(key: string): string;
							public clearHttpResponseCode(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearResponseContentType(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public clearTimeToResponseInitiatedUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
						}
						export class CustomAttributesDefaultEntryHolder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.CustomAttributesDefaultEntryHolder>;
						}
						export class HttpMethod extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod>;
							public static HTTP_METHOD_UNKNOWN: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static GET: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static PUT: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static POST: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static DELETE: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static HEAD: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static PATCH: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static OPTIONS: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static TRACE: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static CONNECT: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static HTTP_METHOD_UNKNOWN_VALUE: number = 0;
							public static GET_VALUE: number = 1;
							public static PUT_VALUE: number = 2;
							public static POST_VALUE: number = 3;
							public static DELETE_VALUE: number = 4;
							public static HEAD_VALUE: number = 5;
							public static PATCH_VALUE: number = 6;
							public static OPTIONS_VALUE: number = 7;
							public static TRACE_VALUE: number = 8;
							public static CONNECT_VALUE: number = 9;
							public static valueOf(name: string): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod>;
							public static values(): androidNative.Array<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod>;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static forNumber(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
						}
						export module HttpMethod {
							export class HttpMethodVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod.HttpMethodVerifier>;
								public isInRange(number: number): boolean;
							}
						}
						export class NetworkClientErrorReason extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason>;
							public static NETWORK_CLIENT_ERROR_REASON_UNKNOWN: com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static GENERIC_CLIENT_ERROR: com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static NETWORK_CLIENT_ERROR_REASON_UNKNOWN_VALUE: number = 0;
							public static GENERIC_CLIENT_ERROR_VALUE: number = 1;
							public static valueOf(name: string): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason>;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static values(): androidNative.Array<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason>;
							public getNumber(): number;
							public static forNumber(value: number): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						}
						export module NetworkClientErrorReason {
							export class NetworkClientErrorReasonVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason.NetworkClientErrorReasonVerifier>;
								public isInRange(number: number): boolean;
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
			export module perf {
				export module v1 {
					export class NetworkRequestMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetricOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.NetworkRequestMetricOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasUrl(): boolean;
							getUrl(): string;
							getUrlBytes(): com.google.protobuf.ByteString;
							hasHttpMethod(): boolean;
							getHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							hasRequestPayloadBytes(): boolean;
							getRequestPayloadBytes(): number;
							hasResponsePayloadBytes(): boolean;
							getResponsePayloadBytes(): number;
							hasNetworkClientErrorReason(): boolean;
							getNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							hasHttpResponseCode(): boolean;
							getHttpResponseCode(): number;
							hasResponseContentType(): boolean;
							getResponseContentType(): string;
							getResponseContentTypeBytes(): com.google.protobuf.ByteString;
							hasClientStartTimeUs(): boolean;
							getClientStartTimeUs(): number;
							hasTimeToRequestCompletedUs(): boolean;
							getTimeToRequestCompletedUs(): number;
							hasTimeToResponseInitiatedUs(): boolean;
							getTimeToResponseInitiatedUs(): number;
							hasTimeToResponseCompletedUs(): boolean;
							getTimeToResponseCompletedUs(): number;
							getCustomAttributesCount(): number;
							containsCustomAttributes(param0: string): boolean;
							getCustomAttributes(): java.util.Map<string, string>;
							getCustomAttributesMap(): java.util.Map<string, string>;
							getCustomAttributesOrDefault(param0: string, param1: string): string;
							getCustomAttributesOrThrow(param0: string): string;
							getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
							getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
							getPerfSessionsCount(): number;
						});
						public constructor();
						public getTimeToResponseCompletedUs(): number;
						public hasRequestPayloadBytes(): boolean;
						public getCustomAttributesCount(): number;
						public getHttpResponseCode(): number;
						public hasTimeToResponseInitiatedUs(): boolean;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string, string>;
						public hasUrl(): boolean;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
						public hasClientStartTimeUs(): boolean;
						public getRequestPayloadBytes(): number;
						public getResponseContentType(): string;
						public hasNetworkClientErrorReason(): boolean;
						public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
						public getNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
						public getResponseContentTypeBytes(): com.google.protobuf.ByteString;
						public getUrl(): string;
						public getPerfSessionsCount(): number;
						public getResponsePayloadBytes(): number;
						public getClientStartTimeUs(): number;
						public getHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
						public hasTimeToResponseCompletedUs(): boolean;
						public getUrlBytes(): com.google.protobuf.ByteString;
						public hasTimeToRequestCompletedUs(): boolean;
						public getTimeToResponseInitiatedUs(): number;
						public hasResponsePayloadBytes(): boolean;
						public hasHttpMethod(): boolean;
						public hasHttpResponseCode(): boolean;
						public hasResponseContentType(): boolean;
						public getTimeToRequestCompletedUs(): number;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string, string>;
						public getCustomAttributesOrThrow(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class PerfMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.PerfMetric, com.google.firebase.perf.v1.PerfMetric.Builder> implements com.google.firebase.perf.v1.PerfMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.PerfMetric>;
						public static APPLICATION_INFO_FIELD_NUMBER: number = 1;
						public static TRACE_METRIC_FIELD_NUMBER: number = 2;
						public static NETWORK_REQUEST_METRIC_FIELD_NUMBER: number = 3;
						public static GAUGE_METRIC_FIELD_NUMBER: number = 4;
						public static TRANSPORT_INFO_FIELD_NUMBER: number = 5;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.PerfMetric;
						public hasTraceMetric(): boolean;
						public hasApplicationInfo(): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public hasNetworkRequestMetric(): boolean;
						public getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.PerfMetric;
						public getTraceMetric(): com.google.firebase.perf.v1.TraceMetric;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.PerfMetric;
						public hasGaugeMetric(): boolean;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public static newBuilder(prototype: com.google.firebase.perf.v1.PerfMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.PerfMetric>;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public static newBuilder(): com.google.firebase.perf.v1.PerfMetric.Builder;
						public hasTransportInfo(): boolean;
						public static getDefaultInstance(): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.PerfMetric;
						public getTransportInfo(): com.google.firebase.perf.v1.TransportInfo;
					}
					export module PerfMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.PerfMetric, com.google.firebase.perf.v1.PerfMetric.Builder> implements com.google.firebase.perf.v1.PerfMetricOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.PerfMetric.Builder>;
							public hasApplicationInfo(): boolean;
							public setApplicationInfo(builderForValue: com.google.firebase.perf.v1.ApplicationInfo.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public mergeGaugeMetric(value: com.google.firebase.perf.v1.GaugeMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric;
							public setGaugeMetric(value: com.google.firebase.perf.v1.GaugeMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearTransportInfo(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearApplicationInfo(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getTraceMetric(): com.google.firebase.perf.v1.TraceMetric;
							public clearNetworkRequestMetric(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setTraceMetric(builderForValue: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric;
							public setTransportInfo(value: com.google.firebase.perf.v1.TransportInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearGaugeMetric(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getTransportInfo(): com.google.firebase.perf.v1.TransportInfo;
							public mergeTraceMetric(value: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public mergeTransportInfo(value: com.google.firebase.perf.v1.TransportInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setNetworkRequestMetric(builderForValue: com.google.firebase.perf.v1.NetworkRequestMetric.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public hasNetworkRequestMetric(): boolean;
							public setGaugeMetric(builderForValue: com.google.firebase.perf.v1.GaugeMetric.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setNetworkRequestMetric(value: com.google.firebase.perf.v1.NetworkRequestMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public mergeNetworkRequestMetric(value: com.google.firebase.perf.v1.NetworkRequestMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo;
							public mergeApplicationInfo(value: com.google.firebase.perf.v1.ApplicationInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearTraceMetric(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public hasTransportInfo(): boolean;
							public setApplicationInfo(value: com.google.firebase.perf.v1.ApplicationInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setTransportInfo(builderForValue: com.google.firebase.perf.v1.TransportInfo.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public hasTraceMetric(): boolean;
							public hasGaugeMetric(): boolean;
							public setTraceMetric(value: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class PerfMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.PerfMetricOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.PerfMetricOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasApplicationInfo(): boolean; getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo; hasTraceMetric(): boolean; getTraceMetric(): com.google.firebase.perf.v1.TraceMetric; hasNetworkRequestMetric(): boolean; getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric; hasGaugeMetric(): boolean; getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric; hasTransportInfo(): boolean; getTransportInfo(): com.google.firebase.perf.v1.TransportInfo });
						public constructor();
						public hasNetworkRequestMetric(): boolean;
						public getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric;
						public getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo;
						public hasTransportInfo(): boolean;
						public getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasTraceMetric(): boolean;
						public hasApplicationInfo(): boolean;
						public getTraceMetric(): com.google.firebase.perf.v1.TraceMetric;
						public getTransportInfo(): com.google.firebase.perf.v1.TransportInfo;
						public hasGaugeMetric(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class PerfSession extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.PerfSession, com.google.firebase.perf.v1.PerfSession.Builder> implements com.google.firebase.perf.v1.PerfSessionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.PerfSession>;
						public static SESSION_ID_FIELD_NUMBER: number = 1;
						public static SESSION_VERBOSITY_FIELD_NUMBER: number = 2;
						public hasSessionId(): boolean;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public static newBuilder(prototype: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.PerfSession.Builder;
						public static getDefaultInstance(): com.google.firebase.perf.v1.PerfSession;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.PerfSession>;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.PerfSession;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public getSessionVerbosity(index: number): com.google.firebase.perf.v1.SessionVerbosity;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.PerfSession;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.PerfSession;
						public static newBuilder(): com.google.firebase.perf.v1.PerfSession.Builder;
						public getSessionIdBytes(): com.google.protobuf.ByteString;
						public getSessionId(): string;
						public getSessionVerbosityCount(): number;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.PerfSession;
					}
					export module PerfSession {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.PerfSession, com.google.firebase.perf.v1.PerfSession.Builder> implements com.google.firebase.perf.v1.PerfSessionOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.PerfSession.Builder>;
							public getSessionIdBytes(): com.google.protobuf.ByteString;
							public getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>;
							public addSessionVerbosity(value: com.google.firebase.perf.v1.SessionVerbosity): com.google.firebase.perf.v1.PerfSession.Builder;
							public setSessionId(value: string): com.google.firebase.perf.v1.PerfSession.Builder;
							public getSessionVerbosity(index: number): com.google.firebase.perf.v1.SessionVerbosity;
							public addAllSessionVerbosity(values: java.lang.Iterable<any>): com.google.firebase.perf.v1.PerfSession.Builder;
							public hasSessionId(): boolean;
							public clearSessionVerbosity(): com.google.firebase.perf.v1.PerfSession.Builder;
							public getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
							public getSessionId(): string;
							public clearSessionId(): com.google.firebase.perf.v1.PerfSession.Builder;
							public setSessionIdBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.PerfSession.Builder;
							public setSessionVerbosity(index: number, value: com.google.firebase.perf.v1.SessionVerbosity): com.google.firebase.perf.v1.PerfSession.Builder;
							public getSessionVerbosityCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class PerfSessionOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.PerfSessionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.PerfSessionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasSessionId(): boolean; getSessionId(): string; getSessionIdBytes(): com.google.protobuf.ByteString; getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>; getSessionVerbosityCount(): number; getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity });
						public constructor();
						public hasSessionId(): boolean;
						public getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
						public getSessionIdBytes(): com.google.protobuf.ByteString;
						public getSessionId(): string;
						public getSessionVerbosityCount(): number;
						public getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class SessionVerbosity extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firebase.perf.v1.SessionVerbosity>;
						public static SESSION_VERBOSITY_NONE: com.google.firebase.perf.v1.SessionVerbosity;
						public static GAUGES_AND_SYSTEM_EVENTS: com.google.firebase.perf.v1.SessionVerbosity;
						public static SESSION_VERBOSITY_NONE_VALUE: number = 0;
						public static GAUGES_AND_SYSTEM_EVENTS_VALUE: number = 1;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.SessionVerbosity>;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						public static forNumber(value: number): com.google.firebase.perf.v1.SessionVerbosity;
						public static valueOf(name: string): com.google.firebase.perf.v1.SessionVerbosity;
						public static values(): androidNative.Array<com.google.firebase.perf.v1.SessionVerbosity>;
						/** @deprecated */
						public static valueOf(value: number): com.google.firebase.perf.v1.SessionVerbosity;
					}
					export module SessionVerbosity {
						export class SessionVerbosityVerifier {
							public static class: java.lang.Class<com.google.firebase.perf.v1.SessionVerbosity.SessionVerbosityVerifier>;
							public isInRange(number: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class TraceMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.TraceMetric, com.google.firebase.perf.v1.TraceMetric.Builder> implements com.google.firebase.perf.v1.TraceMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetric>;
						public static NAME_FIELD_NUMBER: number = 1;
						public static IS_AUTO_FIELD_NUMBER: number = 2;
						public static CLIENT_START_TIME_US_FIELD_NUMBER: number = 4;
						public static DURATION_US_FIELD_NUMBER: number = 5;
						public static COUNTERS_FIELD_NUMBER: number = 6;
						public static SUBTRACES_FIELD_NUMBER: number = 7;
						public static CUSTOM_ATTRIBUTES_FIELD_NUMBER: number = 8;
						public static PERF_SESSIONS_FIELD_NUMBER: number = 9;
						public getDurationUs(): number;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.TraceMetric;
						public getSubtracesOrBuilder(index: number): com.google.firebase.perf.v1.TraceMetricOrBuilder;
						public getCountersOrThrow(key: string): number;
						public getCustomAttributesOrDefault(key: string, defaultValue: string): string;
						public getCountersOrThrow(param0: string): number;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.TraceMetric;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public hasDurationUs(): boolean;
						public getIsAuto(): boolean;
						public containsCounters(key: string): boolean;
						public getSubtracesCount(): number;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public getSubtraces(index: number): com.google.firebase.perf.v1.TraceMetric;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.TraceMetric>;
						public hasClientStartTimeUs(): boolean;
						public static getDefaultInstance(): com.google.firebase.perf.v1.TraceMetric;
						public getPerfSessionsOrBuilderList(): java.util.List<any>;
						public getCountersOrDefault(key: string, defaultValue: number): number;
						public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
						public getCountersOrDefault(param0: string, param1: number): number;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public static newBuilder(prototype: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.TraceMetric;
						public hasIsAuto(): boolean;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getSubtracesOrBuilderList(): java.util.List<any>;
						public getPerfSessionsOrBuilder(index: number): com.google.firebase.perf.v1.PerfSessionOrBuilder;
						public getCustomAttributesOrThrow(key: string): string;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.TraceMetric;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string, string>;
						public getCustomAttributesOrThrow(param0: string): string;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.TraceMetric;
						public getCustomAttributesCount(): number;
						public containsCustomAttributes(key: string): boolean;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public getName(): string;
						public static newBuilder(): com.google.firebase.perf.v1.TraceMetric.Builder;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string, string>;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
						public getCountersCount(): number;
						public getPerfSessions(index: number): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.TraceMetric;
						public getCountersMap(): java.util.Map<string, java.lang.Long>;
						public getPerfSessionsCount(): number;
						public getClientStartTimeUs(): number;
						public getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
						public hasName(): boolean;
						/** @deprecated */
						public getCounters(): java.util.Map<string, java.lang.Long>;
						public containsCounters(param0: string): boolean;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
					}
					export module TraceMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.TraceMetric, com.google.firebase.perf.v1.TraceMetric.Builder> implements com.google.firebase.perf.v1.TraceMetricOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetric.Builder>;
							public getCustomAttributesOrDefault(param0: string, param1: string): string;
							public hasIsAuto(): boolean;
							public getSubtraces(index: number): com.google.firebase.perf.v1.TraceMetric;
							public getCountersOrDefault(key: string, defaultValue: number): number;
							public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
							public getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
							public addSubtraces(value: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getPerfSessionsCount(): number;
							public containsCounters(key: string): boolean;
							/** @deprecated */
							public getCounters(): java.util.Map<string, java.lang.Long>;
							public removePerfSessions(index: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setClientStartTimeUs(value: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearDurationUs(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getSubtracesCount(): number;
							public setIsAuto(value: boolean): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCountersCount(): number;
							public removeCounters(key: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addPerfSessions(builderForValue: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addSubtraces(index: number, value: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCustomAttributesCount(): number;
							public addPerfSessions(value: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setPerfSessions(index: number, value: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addAllSubtraces(values: java.lang.Iterable<any>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
							/** @deprecated */
							public getCustomAttributes(): java.util.Map<string, string>;
							public addAllPerfSessions(values: java.lang.Iterable<any>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearPerfSessions(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCountersOrThrow(key: string): number;
							public putCounters(key: string, value: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public containsCounters(param0: string): boolean;
							public putAllCustomAttributes(values: java.util.Map<string, string>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addPerfSessions(index: number, value: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setSubtraces(index: number, value: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
							public hasClientStartTimeUs(): boolean;
							public setName(value: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getPerfSessions(index: number): com.google.firebase.perf.v1.PerfSession;
							public getCustomAttributesOrDefault(key: string, defaultValue: string): string;
							public clearName(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearIsAuto(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public putAllCounters(values: java.util.Map<string, java.lang.Long>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setSubtraces(index: number, builderForValue: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearCustomAttributes(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public removeCustomAttributes(key: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public removeSubtraces(index: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setPerfSessions(index: number, builderForValue: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public containsCustomAttributes(param0: string): boolean;
							public addPerfSessions(index: number, builderForValue: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public hasDurationUs(): boolean;
							public setNameBytes(value: com.google.protobuf.ByteString): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getClientStartTimeUs(): number;
							public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
							public putCustomAttributes(key: string, value: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearSubtraces(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public containsCustomAttributes(key: string): boolean;
							public hasName(): boolean;
							public setDurationUs(value: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addSubtraces(index: number, builderForValue: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getIsAuto(): boolean;
							public getCustomAttributesMap(): java.util.Map<string, string>;
							public clearClientStartTimeUs(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCountersOrThrow(param0: string): number;
							public getCountersOrDefault(param0: string, param1: number): number;
							public getDurationUs(): number;
							public getCustomAttributesOrThrow(param0: string): string;
							public getCountersMap(): java.util.Map<string, java.lang.Long>;
							public getCustomAttributesOrThrow(key: string): string;
							public getName(): string;
							public addSubtraces(builderForValue: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearCounters(): com.google.firebase.perf.v1.TraceMetric.Builder;
						}
						export class CountersDefaultEntryHolder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetric.CountersDefaultEntryHolder>;
						}
						export class CustomAttributesDefaultEntryHolder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetric.CustomAttributesDefaultEntryHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class TraceMetricOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetricOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.TraceMetricOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasName(): boolean;
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
							hasIsAuto(): boolean;
							getIsAuto(): boolean;
							hasClientStartTimeUs(): boolean;
							getClientStartTimeUs(): number;
							hasDurationUs(): boolean;
							getDurationUs(): number;
							getCountersCount(): number;
							containsCounters(param0: string): boolean;
							getCounters(): java.util.Map<string, java.lang.Long>;
							getCountersMap(): java.util.Map<string, java.lang.Long>;
							getCountersOrDefault(param0: string, param1: number): number;
							getCountersOrThrow(param0: string): number;
							getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
							getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
							getSubtracesCount(): number;
							getCustomAttributesCount(): number;
							containsCustomAttributes(param0: string): boolean;
							getCustomAttributes(): java.util.Map<string, string>;
							getCustomAttributesMap(): java.util.Map<string, string>;
							getCustomAttributesOrDefault(param0: string, param1: string): string;
							getCustomAttributesOrThrow(param0: string): string;
							getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
							getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
							getPerfSessionsCount(): number;
						});
						public constructor();
						public getDurationUs(): number;
						public getCountersOrThrow(param0: string): number;
						public getCustomAttributesCount(): number;
						public hasDurationUs(): boolean;
						public getIsAuto(): boolean;
						public getName(): string;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string, string>;
						public getSubtracesCount(): number;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
						public hasClientStartTimeUs(): boolean;
						public getCountersOrDefault(param0: string, param1: number): number;
						public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
						public getCountersCount(): number;
						public hasIsAuto(): boolean;
						public getCountersMap(): java.util.Map<string, java.lang.Long>;
						public getPerfSessionsCount(): number;
						public getClientStartTimeUs(): number;
						public getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
						public hasName(): boolean;
						public containsCounters(param0: string): boolean;
						/** @deprecated */
						public getCounters(): java.util.Map<string, java.lang.Long>;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string, string>;
						public getCustomAttributesOrThrow(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module perf {
				export module v1 {
					export class TransportInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.TransportInfo, com.google.firebase.perf.v1.TransportInfo.Builder> implements com.google.firebase.perf.v1.TransportInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo>;
						public static DISPATCH_DESTINATION_FIELD_NUMBER: number = 1;
						public static parseFrom(data: com.google.protobuf.ByteString, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseDelimitedFrom(input: java.io.InputStream): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(input: com.google.protobuf.CodedInputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(data: androidNative.Array<number>): com.google.firebase.perf.v1.TransportInfo;
						public static parseDelimitedFrom(input: java.io.InputStream, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static newBuilder(): com.google.firebase.perf.v1.TransportInfo.Builder;
						public static parseFrom(input: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.TransportInfo;
						public dynamicMethod(info: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, parser: any, this_: any): any;
						public getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
						public static parseFrom(data: java.nio.ByteBuffer): com.google.firebase.perf.v1.TransportInfo;
						public static newBuilder(prototype: com.google.firebase.perf.v1.TransportInfo): com.google.firebase.perf.v1.TransportInfo.Builder;
						public hasDispatchDestination(): boolean;
						public static parseFrom(data: androidNative.Array<number>, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(data: com.google.protobuf.ByteString): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(input: java.io.InputStream): com.google.firebase.perf.v1.TransportInfo;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.TransportInfo>;
						public static getDefaultInstance(): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(data: java.nio.ByteBuffer, extensionRegistry: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
					}
					export module TransportInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.TransportInfo, com.google.firebase.perf.v1.TransportInfo.Builder> implements com.google.firebase.perf.v1.TransportInfoOrBuilder {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo.Builder>;
							public clearDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.Builder;
							public getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public hasDispatchDestination(): boolean;
							public setDispatchDestination(value: com.google.firebase.perf.v1.TransportInfo.DispatchDestination): com.google.firebase.perf.v1.TransportInfo.Builder;
						}
						export class DispatchDestination extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo.DispatchDestination>;
							public static SOURCE_UNKNOWN: com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static FL_LEGACY_V1: com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static SOURCE_UNKNOWN_VALUE: number = 0;
							public static FL_LEGACY_V1_VALUE: number = 1;
							/** @deprecated */
							public static valueOf(value: number): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static valueOf(name: string): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.TransportInfo.DispatchDestination>;
							public static values(): androidNative.Array<com.google.firebase.perf.v1.TransportInfo.DispatchDestination>;
							public static forNumber(value: number): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
						}
						export module DispatchDestination {
							export class DispatchDestinationVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo.DispatchDestination.DispatchDestinationVerifier>;
								public isInRange(number: number): boolean;
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
			export module perf {
				export module v1 {
					export class TransportInfoOrBuilder {
						public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfoOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.v1.TransportInfoOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { hasDispatchDestination(): boolean; getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination });
						public constructor();
						public getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
						public hasDispatchDestination(): boolean;
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
//com.google.firebase.perf.config.ConfigurationFlag:1
//com.google.firebase.perf.network.InstrumentApacheHttpResponseHandler:1
//com.google.firebase.perf.util.Optional:1
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1
