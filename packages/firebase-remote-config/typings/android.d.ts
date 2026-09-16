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
			export module remoteconfig {
				export class AutoValue_ConfigUpdate extends com.google.firebase.remoteconfig.ConfigUpdate {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.AutoValue_ConfigUpdate>;
					public toString(): string;
					public equals(this_: any): boolean;
					public getUpdatedKeys(): java.util.Set<string>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.remoteconfig';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '23.1.0';
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
				export abstract class ConfigUpdate {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.ConfigUpdate>;
					public constructor();
					public getUpdatedKeys(): java.util.Set<string>;
					public static create(updatedKeys: java.util.Set<string>): com.google.firebase.remoteconfig.ConfigUpdate;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class ConfigUpdateListener {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.ConfigUpdateListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.ConfigUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onUpdate(param0: com.google.firebase.remoteconfig.ConfigUpdate): void; onError(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigException): void });
					public constructor();
					public onError(param0: com.google.firebase.remoteconfig.FirebaseRemoteConfigException): void;
					public onUpdate(param0: com.google.firebase.remoteconfig.ConfigUpdate): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class ConfigUpdateListenerRegistration {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.ConfigUpdateListenerRegistration>;
					/**
					 * Constructs a new instance of the com.google.firebase.remoteconfig.ConfigUpdateListenerRegistration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { remove(): void });
					public constructor();
					public remove(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module remoteconfig {
				export class CustomSignals {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.CustomSignals>;
				}
				export module CustomSignals {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.CustomSignals.Builder>;
						public constructor();
						public put(key: string, value: string): com.google.firebase.remoteconfig.CustomSignals.Builder;
						public put(key: string, value: number): com.google.firebase.remoteconfig.CustomSignals.Builder;
						public build(): com.google.firebase.remoteconfig.CustomSignals;
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
				export class FirebaseRemoteConfig {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfig>;
					public static DEFAULT_VALUE_FOR_STRING: string = '';
					public static DEFAULT_VALUE_FOR_LONG: number = 0;
					public static DEFAULT_VALUE_FOR_DOUBLE: number = 0.0;
					public static DEFAULT_VALUE_FOR_BOOLEAN: boolean = 0;
					public static DEFAULT_VALUE_FOR_BYTE_ARRAY: androidNative.Array<number>;
					public static VALUE_SOURCE_STATIC: number = 0;
					public static VALUE_SOURCE_DEFAULT: number = 1;
					public static VALUE_SOURCE_REMOTE: number = 2;
					public static LAST_FETCH_STATUS_SUCCESS: number = -1;
					public static LAST_FETCH_STATUS_NO_FETCH_YET: number = 0;
					public static LAST_FETCH_STATUS_FAILURE: number = 1;
					public static LAST_FETCH_STATUS_THROTTLED: number = 2;
					public static TAG: string = 'FirebaseRemoteConfig';
					public setDefaultsAsync(resourceId: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getLong(key: string): number;
					public static getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
					public getValue(key: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
					public setCustomSignals(customSignals: com.google.firebase.remoteconfig.CustomSignals): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
					public addOnConfigUpdateListener(configUpdateListener: com.google.firebase.remoteconfig.ConfigUpdateListener): com.google.firebase.remoteconfig.ConfigUpdateListenerRegistration;
					public static getInstance(): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
					public ensureInitialized(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo>;
					public schedule(runnable: java.lang.Runnable): void;
					public fetchAndActivate(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public getString(key: string): string;
					public getBoolean(key: string): boolean;
					public activate(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public fetch(minimumFetchIntervalInSeconds: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public fetch(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public reset(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getDouble(key: string): number;
					public getAll(): java.util.Map<string, com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
					public setDefaultsAsync(defaultsEntry: java.util.Map<string, any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getKeysByPrefix(prefix: string): java.util.Set<string>;
					public setConfigSettingsAsync(settings: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): com.google.android.gms.tasks.Task<java.lang.Void>;
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
					public constructor(detailMessage: string, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(detailMessage: string);
					public constructor(detailMessage: string, cause: java.lang.Throwable, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(detailMessage: string, cause: java.lang.Throwable);
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
					public constructor(detailMessage: string, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public getCode(): com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
					public constructor(detailMessage: string);
					public constructor(detailMessage: string, cause: java.lang.Throwable, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(detailMessage: string, cause: java.lang.Throwable);
				}
				export module FirebaseRemoteConfigException {
					export class Code {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code>;
						public static UNKNOWN: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
						public static CONFIG_UPDATE_STREAM_ERROR: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
						public static CONFIG_UPDATE_MESSAGE_INVALID: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
						public static CONFIG_UPDATE_NOT_FETCHED: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
						public static CONFIG_UPDATE_UNAVAILABLE: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
						public value(): number;
						public static valueOf(name: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code;
						public static values(): androidNative.Array<com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code>;
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
				export class FirebaseRemoteConfigFetchThrottledException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigFetchThrottledException>;
					public constructor(detailMessage: string, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public getThrottleEndTimeMillis(): number;
					public constructor(detailMessage: string);
					public constructor(message: string, throttledEndTimeInMillis: number);
					public constructor(detailMessage: string, cause: java.lang.Throwable, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(throttleEndTimeMillis: number);
					public constructor(detailMessage: string, cause: java.lang.Throwable);
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
					public constructor(implementation: { getFetchTimeMillis(): number; getLastFetchStatus(): number; getConfigSettings(): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings });
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
				export class FirebaseRemoteConfigKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigKtxRegistrar>;
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
				export class FirebaseRemoteConfigServerException extends com.google.firebase.remoteconfig.FirebaseRemoteConfigException {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.FirebaseRemoteConfigServerException>;
					public constructor(httpStatusCode: number, detailMessage: string, cause: java.lang.Throwable, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public getHttpStatusCode(): number;
					public constructor(detailMessage: string, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(httpStatusCode: number, detailMessage: string);
					public constructor(detailMessage: string);
					public constructor(httpStatusCode: number, detailMessage: string, cause: java.lang.Throwable);
					public constructor(detailMessage: string, cause: java.lang.Throwable, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(httpStatusCode: number, detailMessage: string, code: com.google.firebase.remoteconfig.FirebaseRemoteConfigException.Code);
					public constructor(detailMessage: string, cause: java.lang.Throwable);
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
						public constructor();
						public setMinimumFetchIntervalInSeconds(duration: number): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
						public getFetchTimeoutInSeconds(): number;
						public getMinimumFetchIntervalInSeconds(): number;
						public setFetchTimeoutInSeconds(duration: number): com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings.Builder;
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
					public constructor(implementation: { asLong(): number; asDouble(): number; asString(): string; asByteArray(): androidNative.Array<number>; asBoolean(): boolean; getSource(): number });
					public constructor();
					public asLong(): number;
					public asBoolean(): boolean;
					public getSource(): number;
					public asString(): string;
					public asByteArray(): androidNative.Array<number>;
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
					public static ACTIVATE_FILE_NAME: string = 'activate';
					public static FETCH_FILE_NAME: string = 'fetch';
					public static DEFAULTS_FILE_NAME: string = 'defaults';
					public static CONNECTION_TIMEOUT_IN_SECONDS: number = 60;
					public static DEFAULT_NAMESPACE: string = 'firebase';
					public registerRolloutsStateSubscriber(namespace: string, subscriber: com.google.firebase.remoteconfig.interop.rollouts.RolloutsStateSubscriber): void;
					public get(namespace: string): com.google.firebase.remoteconfig.FirebaseRemoteConfig;
					public setCustomHeaders(customHeaders: java.util.Map<string, string>): void;
					public constructor(context: globalAndroid.content.Context, executor: java.util.concurrent.ScheduledExecutorService, firebaseApp: com.google.firebase.FirebaseApp, firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi, firebaseAbt: com.google.firebase.abt.FirebaseABTesting, analyticsConnector: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>, loadGetDefault: boolean);
				}
				export module RemoteConfigComponent {
					export class GlobalBackgroundListener {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigComponent.GlobalBackgroundListener>;
						public onBackgroundStateChanged(isInBackground: boolean): void;
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
				export class RemoteConfigConstants {
					public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants>;
					public static FETCH_REGEX_URL: string = 'https://firebaseremoteconfig.googleapis.com/v1/projects/%s/namespaces/%s:fetch';
					public static REALTIME_REGEX_URL: string = 'https://firebaseremoteconfigrealtime.googleapis.com/v1/projects/%s/namespaces/%s:streamFetchInvalidations';
				}
				export module RemoteConfigConstants {
					export class ExperimentDescriptionFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.ExperimentDescriptionFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$ExperimentDescriptionFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static AFFECTED_PARAMETER_KEYS: string = 'affectedParameterKeys';
						public static EXPERIMENT_ID: string = 'experimentId';
						public static VARIANT_ID: string = 'variantId';
					}
					export class RequestFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.RequestFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$RequestFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static COUNTRY_CODE: string = 'countryCode';
						public static APP_VERSION: string = 'appVersion';
						public static APP_ID: string = 'appId';
						public static INSTANCE_ID_TOKEN: string = 'appInstanceIdToken';
						public static FIRST_OPEN_TIME: string = 'firstOpenTime';
						public static LANGUAGE_CODE: string = 'languageCode';
						public static SDK_VERSION: string = 'sdkVersion';
						public static CUSTOM_SIGNALS: string = 'customSignals';
						public static INSTANCE_ID: string = 'appInstanceId';
						public static PLATFORM_VERSION: string = 'platformVersion';
						public static TIME_ZONE: string = 'timeZone';
						public static PACKAGE_NAME: string = 'packageName';
						public static APP_BUILD: string = 'appBuild';
						public static ANALYTICS_USER_PROPERTIES: string = 'analyticsUserProperties';
					}
					export class ResponseFieldKey {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.RemoteConfigConstants.ResponseFieldKey>;
						/**
						 * Constructs a new instance of the com.google.firebase.remoteconfig.RemoteConfigConstants$ResponseFieldKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static EXPERIMENT_DESCRIPTIONS: string = 'experimentDescriptions';
						public static STATE: string = 'state';
						public static ROLLOUT_METADATA: string = 'rolloutMetadata';
						public static ENTRIES: string = 'entries';
						public static PERSONALIZATION_METADATA: string = 'personalizationMetadata';
						public static TEMPLATE_VERSION_NUMBER: string = 'templateVersion';
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
						public constructor(implementation: {});
						public constructor();
						public static DEADLINE_EXCEEDED: number = 4;
						public static UNAVAILABLE: number = 14;
						public static INVALID_ARGUMENT: number = 3;
						public static CANCELLED: number = 1;
						public static RESOURCE_EXHAUSTED: number = 8;
						public static UNIMPLEMENTED: number = 12;
						public static FAILED_PRECONDITION: number = 9;
						public static NOT_FOUND: number = 5;
						public static INTERNAL: number = 13;
						public static OUT_OF_RANGE: number = 11;
						public static UNKNOWN: number = 2;
						public static ABORTED: number = 10;
						public static OK: number = 0;
						public static UNAUTHENTICATED: number = 16;
						public static PERMISSION_DENIED: number = 7;
						public static ALREADY_EXISTS: number = 6;
						public static DATA_LOSS: number = 15;
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
					export class ConfigAutoFetch {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigAutoFetch>;
						public setIsInBackground(isInBackground: boolean): void;
						public listenForNotifications(): void;
						public fetchLatestConfig(remainingAttempts: number, targetVersion: number): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(httpURLConnection: java.net.HttpURLConnection, configFetchHandler: com.google.firebase.remoteconfig.internal.ConfigFetchHandler, activatedCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient, eventListeners: java.util.Set<com.google.firebase.remoteconfig.ConfigUpdateListener>, retryCallback: com.google.firebase.remoteconfig.ConfigUpdateListener, scheduledExecutorService: java.util.concurrent.ScheduledExecutorService, sharedPrefsClient: com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient);
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
						public put(configContainer: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public get(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public clear(): void;
						public put(configContainer: com.google.firebase.remoteconfig.internal.ConfigContainer, shouldUpdateInMemoryContainer: boolean): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigContainer>;
						public static getInstance(executor: java.util.concurrent.Executor, storageClient: com.google.firebase.remoteconfig.internal.ConfigStorageClient): com.google.firebase.remoteconfig.internal.ConfigCacheClient;
						public static clearInstancesForTest(): void;
					}
					export module ConfigCacheClient {
						export class AwaitListener<TResult> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigCacheClient.AwaitListener<any>>;
							public onFailure(e: java.lang.Exception): void;
							public onSuccess(o: TResult): void;
							public await(): void;
							public onCanceled(): void;
							public await(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
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
						public static ROLLOUT_METADATA_AFFECTED_KEYS: string = 'affectedParameterKeys';
						public static ROLLOUT_METADATA_ID: string = 'rolloutId';
						public static ROLLOUT_METADATA_VARIANT_ID: string = 'variantId';
						public getFetchTime(): java.util.Date;
						public getAbtExperiments(): org.json.JSONArray;
						public getRolloutMetadata(): org.json.JSONArray;
						public getConfigs(): org.json.JSONObject;
						public static newBuilder(): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						public static newBuilder(otherContainer: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
						public hashCode(): number;
						public getPersonalizationMetadata(): org.json.JSONObject;
						public equals(o: any): boolean;
						public getChangedParams(this_: com.google.firebase.remoteconfig.internal.ConfigContainer): java.util.Set<string>;
						public getTemplateVersionNumber(): number;
						public toString(): string;
					}
					export module ConfigContainer {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigContainer.Builder>;
							public withAbtExperiments(abtExperiments: org.json.JSONArray): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public build(): com.google.firebase.remoteconfig.internal.ConfigContainer;
							public withFetchTime(fetchTime: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public withRolloutMetadata(rolloutMetadata: org.json.JSONArray): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public replaceConfigsWith(configsJson: org.json.JSONObject): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public replaceConfigsWith(configsMap: java.util.Map<string, string>): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public withPersonalizationMetadata(personalizationMetadata: org.json.JSONObject): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public withTemplateVersionNumber(templateVersionNumber: number): com.google.firebase.remoteconfig.internal.ConfigContainer.Builder;
							public constructor(otherContainer: com.google.firebase.remoteconfig.internal.ConfigContainer);
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
						public fetch(minimumFetchIntervalInSeconds: number): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
						public fetch(): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
						public fetchNowWithTypeAndAttemptNumber(fetchType: com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchType, fetchAttemptNumber: number): com.google.android.gms.tasks.Task<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
						public constructor(
							firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi,
							analyticsConnector: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>,
							executor: java.util.concurrent.Executor,
							clock: com.google.android.gms.common.util.Clock,
							randomGenerator: java.util.Random,
							fetchedConfigsCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient,
							frcBackendApiClient: com.google.firebase.remoteconfig.internal.ConfigFetchHttpClient,
							frcSharedPrefs: com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient,
							customHttpHeaders: java.util.Map<string, string>
						);
						public getAnalyticsConnector(): com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>;
						public getTemplateVersionNumber(): number;
					}
					export module ConfigFetchHandler {
						export class FetchResponse {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse>;
							public static forBackendHasNoUpdates(fetchTime: java.util.Date, fetchedConfigs: com.google.firebase.remoteconfig.internal.ConfigContainer): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public static forLocalStorageUsed(fetchTime: java.util.Date): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public static forBackendUpdatesFetched(fetchedConfigs: com.google.firebase.remoteconfig.internal.ConfigContainer, lastFetchETag: string): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse;
							public getFetchedConfigs(): com.google.firebase.remoteconfig.internal.ConfigContainer;
						}
						export module FetchResponse {
							export class Status {
								public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchResponse.Status>;
								/**
								 * Constructs a new instance of the com.google.firebase.remoteconfig.internal.ConfigFetchHandler$FetchResponse$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {});
								public constructor();
								public static BACKEND_HAS_NO_UPDATES: number = 1;
								public static BACKEND_UPDATES_FETCHED: number = 0;
								public static LOCAL_STORAGE_USED: number = 2;
							}
						}
						export class FetchType {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchType>;
							public static BASE: com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchType;
							public static REALTIME: com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchType;
							public static values(): androidNative.Array<com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchType>;
							public static valueOf(name: string): com.google.firebase.remoteconfig.internal.ConfigFetchHandler.FetchType;
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
						public constructor(context: globalAndroid.content.Context, appId: string, apiKey: string, namespace: string, connectTimeoutInSeconds: number, readTimeoutInSeconds: number);
						public getReadTimeoutInSeconds(): number;
						public getConnectTimeoutInSeconds(): number;
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
						public getKeysByPrefix(prefix: string): java.util.Set<string>;
						public getByteArray(key: string): androidNative.Array<number>;
						public getString(key: string): string;
						public getBoolean(key: string): boolean;
						public getValue(key: string): com.google.firebase.remoteconfig.FirebaseRemoteConfigValue;
						public getDouble(key: string): number;
						public constructor(executor: java.util.concurrent.Executor, activatedConfigsCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient, defaultConfigsCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient);
						public getLong(key: string): number;
						public getAll(): java.util.Map<string, com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>;
						public addListener(listener: com.google.android.gms.common.util.BiConsumer<string, com.google.firebase.remoteconfig.internal.ConfigContainer>): void;
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
					export class ConfigRealtimeHandler {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigRealtimeHandler>;
						public setBackgroundState(isInBackground: boolean): void;
						public addRealtimeConfigUpdateListener(configUpdateListener: com.google.firebase.remoteconfig.ConfigUpdateListener): com.google.firebase.remoteconfig.ConfigUpdateListenerRegistration;
						public constructor(firebaseApp: com.google.firebase.FirebaseApp, firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi, configFetchHandler: com.google.firebase.remoteconfig.internal.ConfigFetchHandler, activatedCacheClient: com.google.firebase.remoteconfig.internal.ConfigCacheClient, context: globalAndroid.content.Context, namespace: string, sharedPrefsClient: com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient, scheduledExecutorService: java.util.concurrent.ScheduledExecutorService);
					}
					export module ConfigRealtimeHandler {
						export class ConfigUpdateListenerRegistrationInternal extends com.google.firebase.remoteconfig.ConfigUpdateListenerRegistration {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigRealtimeHandler.ConfigUpdateListenerRegistrationInternal>;
							public constructor(this$0: com.google.firebase.remoteconfig.internal.ConfigRealtimeHandler, listener: com.google.firebase.remoteconfig.ConfigUpdateListener);
							public remove(): void;
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
					export class ConfigRealtimeHttpClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigRealtimeHttpClient>;
						public getBackoffEndTime(): java.util.Date;
						public setIsInBackground(isInBackground: boolean): void;
						public getNumberOfFailedStreams(): number;
						public beginRealtimeHttpStream(): void;
						public createRealtimeConnection(): com.google.android.gms.tasks.Task<java.net.HttpURLConnection>;
						public closeRealtimeHttpConnection(inputStream: java.io.InputStream, errorStream: java.io.InputStream): void;
						public startHttpConnection(): void;
						public startAutoFetch(httpURLConnection: java.net.HttpURLConnection): com.google.firebase.remoteconfig.internal.ConfigAutoFetch;
						public setRequestParams(httpURLConnection: java.net.HttpURLConnection, installationId: string, authtoken: string): void;
						public constructor(
							firebaseApp: com.google.firebase.FirebaseApp,
							firebaseInstallations: com.google.firebase.installations.FirebaseInstallationsApi,
							configFetchHandler: com.google.firebase.remoteconfig.internal.ConfigFetchHandler,
							activatedCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient,
							context: globalAndroid.content.Context,
							namespace: string,
							listeners: java.util.Set<com.google.firebase.remoteconfig.ConfigUpdateListener>,
							sharedPrefsClient: com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient,
							scheduledExecutorService: java.util.concurrent.ScheduledExecutorService
						);
						public retryHttpConnectionWhenBackoffEnds(): void;
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
					export class ConfigSharedPrefsClient {
						public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient>;
						public static LAST_FETCH_TIME_IN_MILLIS_NO_FETCH_YET: number = -1;
						public setCustomSignals(value: java.util.Map<string, string>): void;
						public getInfo(): com.google.firebase.remoteconfig.FirebaseRemoteConfigInfo;
						public getFetchTimeoutInSeconds(): number;
						public getMinimumFetchIntervalInSeconds(): number;
						public getCustomSignals(): java.util.Map<string, string>;
						public setConfigSettingsWithoutWaitingOnDiskWrite(settings: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
						public setRealtimeBackoffEndTime(backoffEndTime: java.util.Date): void;
						public clear(): void;
						public setConfigSettings(settings: com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings): void;
						public constructor(frcSharedPrefs: globalAndroid.content.SharedPreferences);
						public getRealtimeBackoffMetadata(): com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient.RealtimeBackoffMetadata;
					}
					export module ConfigSharedPrefsClient {
						export class BackoffMetadata {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient.BackoffMetadata>;
						}
						export class RealtimeBackoffMetadata {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.ConfigSharedPrefsClient.RealtimeBackoffMetadata>;
							public constructor(numFailedStreams: number, backoffEndTime: java.util.Date);
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
						public static getInstance(context: globalAndroid.content.Context, fileName: string): com.google.firebase.remoteconfig.internal.ConfigStorageClient;
						public clear(): java.lang.Void;
						public write(container: com.google.firebase.remoteconfig.internal.ConfigContainer): java.lang.Void;
						public read(): com.google.firebase.remoteconfig.internal.ConfigContainer;
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
						public static getDefaultsFromXml(resources: globalAndroid.content.Context, xmlParser: number): java.util.Map<string, string>;
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
							public build(): com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl;
							public withLastSuccessfulFetchTimeInMillis(fetchTimeInMillis: number): com.google.firebase.remoteconfig.internal.FirebaseRemoteConfigInfoImpl.Builder;
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
						public asString(): string;
						public asBoolean(): boolean;
						public asByteArray(): androidNative.Array<number>;
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
						public static ANALYTICS_ORIGIN_PERSONALIZATION: string = 'fp';
						public static EXTERNAL_EVENT: string = 'personalization_assignment';
						public static EXTERNAL_RC_PARAMETER_PARAM: string = 'arm_key';
						public static EXTERNAL_ARM_VALUE_PARAM: string = 'arm_value';
						public static PERSONALIZATION_ID: string = 'personalizationId';
						public static EXTERNAL_PERSONALIZATION_ID_PARAM: string = 'personalization_id';
						public static ARM_INDEX: string = 'armIndex';
						public static EXTERNAL_ARM_INDEX_PARAM: string = 'arm_index';
						public static GROUP: string = 'group';
						public static EXTERNAL_GROUP_PARAM: string = 'group';
						public static INTERNAL_EVENT: string = '_fpc';
						public static CHOICE_ID: string = 'choiceId';
						public static INTERNAL_CHOICE_ID_PARAM: string = '_fpid';
						public constructor(analyticsConnector: com.google.firebase.inject.Provider<com.google.firebase.analytics.connector.AnalyticsConnector>);
						public logArmActive(rcParameter: string, configContainer: com.google.firebase.remoteconfig.internal.ConfigContainer): void;
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
					export module rollouts {
						export class RolloutsStateFactory {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.rollouts.RolloutsStateFactory>;
							public static create(activatedConfigsCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient, defaultConfigsCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient): com.google.firebase.remoteconfig.internal.rollouts.RolloutsStateFactory;
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
					export module rollouts {
						export class RolloutsStateSubscriptionsHandler {
							public static class: java.lang.Class<com.google.firebase.remoteconfig.internal.rollouts.RolloutsStateSubscriptionsHandler>;
							public publishActiveRolloutsState(activeRolloutsState: com.google.firebase.remoteconfig.internal.ConfigContainer): void;
							public constructor(activatedConfigsCache: com.google.firebase.remoteconfig.internal.ConfigCacheClient, rolloutsStateFactory: com.google.firebase.remoteconfig.internal.rollouts.RolloutsStateFactory, executor: java.util.concurrent.Executor);
							public registerRolloutsStateSubscriber(subscriber: com.google.firebase.remoteconfig.interop.rollouts.RolloutsStateSubscriber): void;
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
//com.google.firebase.remoteconfig.internal.ConfigCacheClient.AwaitListener:1
