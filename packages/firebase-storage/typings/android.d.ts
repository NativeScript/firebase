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
			export module storage {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.storage.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.storage';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '22.0.2';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class CancelException {
					public static class: java.lang.Class<com.google.firebase.storage.CancelException>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class CancellableTask<StateT> extends com.google.android.gms.tasks.Task<any> {
					public static class: java.lang.Class<com.google.firebase.storage.CancellableTask<any>>;
					public cancel(): boolean;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public isInProgress(): boolean;
					public constructor();
					public addOnProgressListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public addOnProgressListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class ControllableTask<StateT> extends com.google.firebase.storage.CancellableTask<any> {
					public static class: java.lang.Class<com.google.firebase.storage.ControllableTask<any>>;
					public pause(): boolean;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public resume(): boolean;
					public constructor();
					public isPaused(): boolean;
					public addOnPausedListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public addOnPausedListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class DeleteStorageTask {
					public static class: java.lang.Class<com.google.firebase.storage.DeleteStorageTask>;
					public constructor(storageRef: com.google.firebase.storage.StorageReference, pendingResult: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>);
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FileDownloadTask extends com.google.firebase.storage.StorageTask<com.google.firebase.storage.FileDownloadTask.TaskSnapshot> {
					public static class: java.lang.Class<com.google.firebase.storage.FileDownloadTask>;
					public onCanceled(): void;
					public schedule(): void;
				}
				export module FileDownloadTask {
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public static class: java.lang.Class<com.google.firebase.storage.FileDownloadTask.TaskSnapshot>;
						public getTotalByteCount(): number;
						public getError(): java.lang.Exception;
						public getBytesTransferred(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FirebaseStorage {
					public static class: java.lang.Class<com.google.firebase.storage.FirebaseStorage>;
					public setMaxChunkUploadRetry(maxChunkRetryMillis: number): void;
					public setMaxDownloadRetryTimeMillis(maxTransferRetryMillis: number): void;
					public useEmulator(host: string, port: number): void;
					public static getInstance(e: com.google.firebase.FirebaseApp, app: string): com.google.firebase.storage.FirebaseStorage;
					public getMaxChunkUploadRetry(): number;
					public static getInstance(e: com.google.firebase.FirebaseApp): com.google.firebase.storage.FirebaseStorage;
					public getReference(location: string): com.google.firebase.storage.StorageReference;
					public getApp(): com.google.firebase.FirebaseApp;
					public static getInstance(url: string): com.google.firebase.storage.FirebaseStorage;
					public getReferenceFromUrl(e: string): com.google.firebase.storage.StorageReference;
					public setMaxOperationRetryTimeMillis(maxTransferRetryMillis: number): void;
					public static getInstance(): com.google.firebase.storage.FirebaseStorage;
					public getReference(): com.google.firebase.storage.StorageReference;
					public getMaxUploadRetryTimeMillis(): number;
					public getMaxDownloadRetryTimeMillis(): number;
					public setMaxUploadRetryTimeMillis(maxTransferRetryMillis: number): void;
					public getMaxOperationRetryTimeMillis(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FirebaseStorageComponent {
					public static class: java.lang.Class<com.google.firebase.storage.FirebaseStorageComponent>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class FirebaseStorageKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.storage.FirebaseStorageKtxRegistrar>;
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
			export module storage {
				export class GetDownloadUrlTask {
					public static class: java.lang.Class<com.google.firebase.storage.GetDownloadUrlTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class GetMetadataTask {
					public static class: java.lang.Class<com.google.firebase.storage.GetMetadataTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class ListResult {
					public static class: java.lang.Class<com.google.firebase.storage.ListResult>;
					public getPrefixes(): java.util.List<com.google.firebase.storage.StorageReference>;
					public getPageToken(): string;
					public getItems(): java.util.List<com.google.firebase.storage.StorageReference>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class ListTask {
					public static class: java.lang.Class<com.google.firebase.storage.ListTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class OnPausedListener<ProgressT> extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.OnPausedListener<any>>;
					/**
					 * Constructs a new instance of the com.google.firebase.storage.OnPausedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onPaused(param0: ProgressT): void });
					public constructor();
					public onPaused(param0: ProgressT): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class OnProgressListener<ProgressT> extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.OnProgressListener<any>>;
					/**
					 * Constructs a new instance of the com.google.firebase.storage.OnProgressListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onProgress(param0: ProgressT): void });
					public constructor();
					public onProgress(param0: ProgressT): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageException {
					public static class: java.lang.Class<com.google.firebase.storage.StorageException>;
					public static ERROR_UNKNOWN: number = -13000;
					public static ERROR_OBJECT_NOT_FOUND: number = -13010;
					public static ERROR_BUCKET_NOT_FOUND: number = -13011;
					public static ERROR_PROJECT_NOT_FOUND: number = -13012;
					public static ERROR_QUOTA_EXCEEDED: number = -13013;
					public static ERROR_NOT_AUTHENTICATED: number = -13020;
					public static ERROR_NOT_AUTHORIZED: number = -13021;
					public static ERROR_RETRY_LIMIT_EXCEEDED: number = -13030;
					public static ERROR_INVALID_CHECKSUM: number = -13031;
					public static ERROR_CANCELED: number = -13040;
					public static fromErrorStatus(status: com.google.android.gms.common.api.Status): com.google.firebase.storage.StorageException;
					public getIsRecoverableException(): boolean;
					public getErrorCode(): number;
					public static fromException(exception: java.lang.Throwable): com.google.firebase.storage.StorageException;
					public static fromExceptionAndHttpCode(exception: java.lang.Throwable, httpResultCode: number): com.google.firebase.storage.StorageException;
					public getCause(): java.lang.Throwable;
					public getHttpResultCode(): number;
				}
				export module StorageException {
					export class ErrorCode {
						public static class: java.lang.Class<com.google.firebase.storage.StorageException.ErrorCode>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StorageException$ErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module storage {
				export class StorageMetadata {
					public static class: java.lang.Class<com.google.firebase.storage.StorageMetadata>;
					public getMd5Hash(): string;
					public getCreationTimeMillis(): number;
					public getCustomMetadataKeys(): java.util.Set<string>;
					public getBucket(): string;
					public getContentType(): string;
					public getMetadataGeneration(): string;
					public getUpdatedTimeMillis(): number;
					public getCacheControl(): string;
					public getContentLanguage(): string;
					public getPath(): string;
					public getCustomMetadata(key: string): string;
					public getContentDisposition(): string;
					public getContentEncoding(): string;
					public constructor();
					public getName(): string;
					public getSizeBytes(): number;
					public getReference(): com.google.firebase.storage.StorageReference;
					public getGeneration(): string;
				}
				export module StorageMetadata {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.storage.StorageMetadata.Builder>;
						public constructor();
						public setContentDisposition(contentDisposition: string): com.google.firebase.storage.StorageMetadata.Builder;
						public setContentType(contentType: string): com.google.firebase.storage.StorageMetadata.Builder;
						public setContentLanguage(contentLanguage: string): com.google.firebase.storage.StorageMetadata.Builder;
						public getContentEncoding(): string;
						public setCacheControl(cacheControl: string): com.google.firebase.storage.StorageMetadata.Builder;
						public getContentLanguage(): string;
						public getContentDisposition(): string;
						public getContentType(): string;
						public build(): com.google.firebase.storage.StorageMetadata;
						public constructor(original: com.google.firebase.storage.StorageMetadata);
						public setContentEncoding(contentEncoding: string): com.google.firebase.storage.StorageMetadata.Builder;
						public getCacheControl(): string;
						public setCustomMetadata(key: string, value: string): com.google.firebase.storage.StorageMetadata.Builder;
					}
					export class MetadataValue<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.storage.StorageMetadata.MetadataValue<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageReference extends java.lang.Comparable<com.google.firebase.storage.StorageReference> {
					public static class: java.lang.Class<com.google.firebase.storage.StorageReference>;
					public getActiveUploadTasks(): java.util.List<com.google.firebase.storage.UploadTask>;
					public getActiveDownloadTasks(): java.util.List<com.google.firebase.storage.FileDownloadTask>;
					public getFile(destinationFile: java.io.File): com.google.firebase.storage.FileDownloadTask;
					public list(maxResults: number): com.google.android.gms.tasks.Task<com.google.firebase.storage.ListResult>;
					public getBucket(): string;
					public delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public updateMetadata(metadata: com.google.firebase.storage.StorageMetadata): com.google.android.gms.tasks.Task<com.google.firebase.storage.StorageMetadata>;
					public getParent(): com.google.firebase.storage.StorageReference;
					public getStorage(): com.google.firebase.storage.FirebaseStorage;
					public getStream(): com.google.firebase.storage.StreamDownloadTask;
					public toString(): string;
					public putFile(uri: globalAndroid.net.Uri, metadata: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public listAll(): com.google.android.gms.tasks.Task<com.google.firebase.storage.ListResult>;
					public hashCode(): number;
					public getRoot(): com.google.firebase.storage.StorageReference;
					public getBytes(maxDownloadSizeBytes: number): com.google.android.gms.tasks.Task<androidNative.Array<number>>;
					public putStream(stream: java.io.InputStream): com.google.firebase.storage.UploadTask;
					public equals(other: any): boolean;
					public getDownloadUrl(): com.google.android.gms.tasks.Task<globalAndroid.net.Uri>;
					public child(pathString: string): com.google.firebase.storage.StorageReference;
					public putFile(uri: globalAndroid.net.Uri): com.google.firebase.storage.UploadTask;
					public putFile(uri: globalAndroid.net.Uri, metadata: com.google.firebase.storage.StorageMetadata, existingUploadUri: globalAndroid.net.Uri): com.google.firebase.storage.UploadTask;
					public compareTo(other: com.google.firebase.storage.StorageReference): number;
					public getPath(): string;
					public putStream(stream: java.io.InputStream, metadata: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public getFile(destinationUri: globalAndroid.net.Uri): com.google.firebase.storage.FileDownloadTask;
					public getName(): string;
					public list(maxResults: number, pageToken: string): com.google.android.gms.tasks.Task<com.google.firebase.storage.ListResult>;
					public putBytes(bytes: androidNative.Array<number>, metadata: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
					public getMetadata(): com.google.android.gms.tasks.Task<com.google.firebase.storage.StorageMetadata>;
					public putBytes(bytes: androidNative.Array<number>): com.google.firebase.storage.UploadTask;
					public getStream(processor: com.google.firebase.storage.StreamDownloadTask.StreamProcessor): com.google.firebase.storage.StreamDownloadTask;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageRegistrar {
					public static class: java.lang.Class<com.google.firebase.storage.StorageRegistrar>;
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
			export module storage {
				export abstract class StorageTask<ResultT> extends com.google.firebase.storage.ControllableTask<any> {
					public static class: java.lang.Class<com.google.firebase.storage.StorageTask<any>>;
					public syncObject: any;
					public addOnProgressListener(param0: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public pause(): boolean;
					public addOnSuccessListener(executor: java.util.concurrent.Executor, listener: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public onSuccess(): void;
					public onPaused(): void;
					public isCanceled(): boolean;
					public onQueued(): void;
					public onFailure(): void;
					public addOnCanceledListener(executor: java.util.concurrent.Executor, listener: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public onCanceled(): void;
					public getResult(exceptionType: java.lang.Class<any>): com.google.firebase.storage.StorageTask.ProvideError;
					public constructor();
					public isSuccessful(): boolean;
					public continueWithTask(continuation: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnFailureListener(listener: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public removeOnProgressListener(listener: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(param0: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public addOnPausedListener(listener: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(executor: java.util.concurrent.Executor, listener: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public cancel(): boolean;
					public isInProgress(): boolean;
					public resume(): boolean;
					public addOnProgressListener(activity: globalAndroid.app.Activity, listener: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnCanceledListener(activity: globalAndroid.app.Activity, listener: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public removeOnFailureListener(listener: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public continueWith(executor: java.util.concurrent.Executor, continuation: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnSuccessListener(activity: globalAndroid.app.Activity, listener: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.CancellableTask<any>;
					public addOnPausedListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.ControllableTask<any>;
					public addOnCompleteListener(activity: globalAndroid.app.Activity, listener: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
					public onProgress(): void;
					public addOnFailureListener(executor: java.util.concurrent.Executor, listener: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public addOnCompleteListener(executor: java.util.concurrent.Executor, listener: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
					public continueWithTask(executor: java.util.concurrent.Executor, continuation: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public removeOnSuccessListener(listener: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public removeOnCompleteListener(listener: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
					public removeOnCanceledListener(listener: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public getException(): java.lang.Exception;
					public getResult(): any;
					public addOnFailureListener(activity: globalAndroid.app.Activity, listener: com.google.android.gms.tasks.OnFailureListener): com.google.firebase.storage.StorageTask<any>;
					public addOnSuccessListener(listener: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.firebase.storage.StorageTask<any>;
					public onSuccessTask(continuation: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
					public onSuccessTask(executor: java.util.concurrent.Executor, continuation: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
					public addOnProgressListener(listener: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnPausedListener(activity: globalAndroid.app.Activity, listener: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnProgressListener(executor: java.util.concurrent.Executor, listener: com.google.firebase.storage.OnProgressListener<any>): com.google.firebase.storage.StorageTask<any>;
					public getSnapshot(): any;
					public removeOnPausedListener(listener: com.google.firebase.storage.OnPausedListener<any>): com.google.firebase.storage.StorageTask<any>;
					public addOnCanceledListener(listener: com.google.android.gms.tasks.OnCanceledListener): com.google.firebase.storage.StorageTask<any>;
					public continueWith(continuation: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnCompleteListener(listener: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.firebase.storage.StorageTask<any>;
				}
				export module StorageTask {
					export class ProvideError {
						public static class: java.lang.Class<com.google.firebase.storage.StorageTask.ProvideError>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StorageTask$ProvideError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getError(): java.lang.Exception });
						public constructor();
						public getError(): java.lang.Exception;
					}
					export class SnapshotBase extends com.google.firebase.storage.StorageTask.ProvideError {
						public static class: java.lang.Class<com.google.firebase.storage.StorageTask.SnapshotBase>;
						public getTask(): com.google.firebase.storage.StorageTask<any>;
						public getError(): java.lang.Exception;
						public constructor(this$0: com.google.firebase.storage.StorageTask<any>, error: java.lang.Exception);
						public getStorage(): com.google.firebase.storage.StorageReference;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageTaskManager {
					public static class: java.lang.Class<com.google.firebase.storage.StorageTaskManager>;
					public getDownloadTasksUnder(entry: com.google.firebase.storage.StorageReference): java.util.List<com.google.firebase.storage.FileDownloadTask>;
					public getUploadTasksUnder(entry: com.google.firebase.storage.StorageReference): java.util.List<com.google.firebase.storage.UploadTask>;
					public ensureRegistered(targetTask: com.google.firebase.storage.StorageTask<any>): void;
					public unRegister(weakReference: com.google.firebase.storage.StorageTask<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StorageTaskScheduler {
					public static class: java.lang.Class<com.google.firebase.storage.StorageTaskScheduler>;
					public static sInstance: com.google.firebase.storage.StorageTaskScheduler;
					public getCommandPoolExecutor(): java.util.concurrent.Executor;
					public static initializeExecutors(firebaseExecutor: java.util.concurrent.Executor, uiExecutor: java.util.concurrent.Executor): void;
					public constructor();
					public getMainThreadExecutor(): java.util.concurrent.Executor;
					public static getInstance(): com.google.firebase.storage.StorageTaskScheduler;
					public scheduleCommand(task: java.lang.Runnable): void;
					public scheduleDownload(task: java.lang.Runnable): void;
					public scheduleUpload(task: java.lang.Runnable): void;
					public scheduleCallback(task: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class StreamDownloadTask extends com.google.firebase.storage.StorageTask<com.google.firebase.storage.StreamDownloadTask.TaskSnapshot> {
					public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask>;
					public onProgress(): void;
					public pause(): boolean;
					public onCanceled(): void;
					public resume(): boolean;
					public schedule(): void;
				}
				export module StreamDownloadTask {
					export class StreamProcessor {
						public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask.StreamProcessor>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.StreamDownloadTask$StreamProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: java.io.InputStream): void });
						public constructor();
						public doInBackground(param0: com.google.firebase.storage.StreamDownloadTask.TaskSnapshot, param1: java.io.InputStream): void;
					}
					export class StreamProgressWrapper {
						public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask.StreamProgressWrapper>;
						public read(): number;
						public close(): void;
						public mark(readlimit: number): void;
						public markSupported(): boolean;
						public read(deltaBytesRead: androidNative.Array<number>, e: number, this_: number): number;
						public skip(deltaBytesSkipped: number): number;
						public available(): number;
					}
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public static class: java.lang.Class<com.google.firebase.storage.StreamDownloadTask.TaskSnapshot>;
						public getTotalByteCount(): number;
						public getError(): java.lang.Exception;
						public getBytesTransferred(): number;
						public getStream(): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class TaskListenerImpl<ListenerTypeT, ResultT> extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.TaskListenerImpl<any, any>>;
					public onInternalStateChanged(): void;
					public removeListener(listener: ListenerTypeT): void;
					public constructor(task: com.google.firebase.storage.StorageTask<ResultT>, targetInternalStates: number, onRaise: com.google.firebase.storage.TaskListenerImpl.OnRaise<ListenerTypeT, ResultT>);
					public getListenerCount(): number;
					public addListener(snappedState: globalAndroid.app.Activity, this_: java.util.concurrent.Executor, activity: ListenerTypeT): void;
				}
				export module TaskListenerImpl {
					export class OnRaise<ListenerTypeT, ResultT> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.storage.TaskListenerImpl.OnRaise<any, any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.TaskListenerImpl$OnRaise interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { raise(param0: ListenerTypeT, param1: ResultT): void });
						public constructor();
						public raise(param0: ListenerTypeT, param1: ResultT): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export abstract class TaskState<T> extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.storage.TaskState<any>>;
				}
				export module TaskState {
					export class InProgress<T> extends com.google.firebase.storage.TaskState<any> {
						public static class: java.lang.Class<com.google.firebase.storage.TaskState.InProgress<any>>;
						public getSnapshot(): any;
						public constructor(snapshot: any);
					}
					export class Paused<T> extends com.google.firebase.storage.TaskState<any> {
						public static class: java.lang.Class<com.google.firebase.storage.TaskState.Paused<any>>;
						public getSnapshot(): any;
						public constructor(snapshot: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class UpdateMetadataTask {
					public static class: java.lang.Class<com.google.firebase.storage.UpdateMetadataTask>;
					public run(): void;
					public constructor(storageRef: com.google.firebase.storage.StorageReference, pendingResult: com.google.android.gms.tasks.TaskCompletionSource<com.google.firebase.storage.StorageMetadata>, newMetadata: com.google.firebase.storage.StorageMetadata);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export class UploadTask extends com.google.firebase.storage.StorageTask<com.google.firebase.storage.UploadTask.TaskSnapshot> {
					public static class: java.lang.Class<com.google.firebase.storage.UploadTask>;
					public onCanceled(): void;
					public resetState(): void;
					public schedule(): void;
				}
				export module UploadTask {
					export class TaskSnapshot extends com.google.firebase.storage.StorageTask.SnapshotBase {
						public static class: java.lang.Class<com.google.firebase.storage.UploadTask.TaskSnapshot>;
						public getTotalByteCount(): number;
						public getUploadSessionUri(): globalAndroid.net.Uri;
						public getError(): java.lang.Exception;
						public getMetadata(): com.google.firebase.storage.StorageMetadata;
						public getBytesTransferred(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class ActivityLifecycleListener {
						public static class: java.lang.Class<com.google.firebase.storage.internal.ActivityLifecycleListener>;
						public runOnActivityStopped(this_: globalAndroid.app.Activity, activityToListenOn: any, cookie: java.lang.Runnable): void;
						public removeCookie(this_: any): void;
						public static getInstance(): com.google.firebase.storage.internal.ActivityLifecycleListener;
					}
					export module ActivityLifecycleListener {
						export class LifecycleEntry {
							public static class: java.lang.Class<com.google.firebase.storage.internal.ActivityLifecycleListener.LifecycleEntry>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public getRunnable(): java.lang.Runnable;
							public getCookie(): any;
							public constructor(activity: globalAndroid.app.Activity, runnable: java.lang.Runnable, cookie: any);
							public getActivity(): globalAndroid.app.Activity;
						}
						export class OnStopCallback {
							public static class: java.lang.Class<com.google.firebase.storage.internal.ActivityLifecycleListener.OnStopCallback>;
							public addEntry(entry: com.google.firebase.storage.internal.ActivityLifecycleListener.LifecycleEntry): void;
							public onStop(): void;
							public removeEntry(listener: com.google.firebase.storage.internal.ActivityLifecycleListener.LifecycleEntry): void;
							public static getInstance(activity: globalAndroid.app.Activity): com.google.firebase.storage.internal.ActivityLifecycleListener.OnStopCallback;
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
			export module storage {
				export module internal {
					export class AdaptiveStreamBuffer {
						public static class: java.lang.Class<com.google.firebase.storage.internal.AdaptiveStreamBuffer>;
						public get(): androidNative.Array<number>;
						public close(): void;
						public fill(this_: number): number;
						public constructor(source: java.io.InputStream, initialBufferSize: number);
						public advance(currentSkip: number): number;
						public isFinished(): boolean;
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
			export module storage {
				export module internal {
					export class ExponentialBackoffSender {
						public static class: java.lang.Class<com.google.firebase.storage.internal.ExponentialBackoffSender>;
						public static RND_MAX: number = 250;
						public isRetryableError(resultCode: number): boolean;
						public sendWithExponentialBackoff(request: com.google.firebase.storage.network.NetworkRequest): void;
						public sendWithExponentialBackoff(this_: com.google.firebase.storage.network.NetworkRequest, request: boolean): void;
						public cancel(): void;
						public constructor(context: globalAndroid.content.Context, authProvider: com.google.firebase.auth.internal.InternalAuthProvider, appCheckProvider: com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider, retryTime: number);
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
			export module storage {
				export module internal {
					export class Slashes {
						public static class: java.lang.Class<com.google.firebase.storage.internal.Slashes>;
						public constructor();
						public static preserveSlashEncode(s: string): string;
						public static normalizeSlashes(stringSegment: string): string;
						public static slashize(s: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class Sleeper {
						public static class: java.lang.Class<com.google.firebase.storage.internal.Sleeper>;
						/**
						 * Constructs a new instance of the com.google.firebase.storage.internal.Sleeper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { sleep(param0: number): void });
						public constructor();
						public sleep(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class SleeperImpl extends com.google.firebase.storage.internal.Sleeper {
						public static class: java.lang.Class<com.google.firebase.storage.internal.SleeperImpl>;
						public sleep(milliseconds: number): void;
						public constructor();
						public sleep(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class SmartHandler {
						public static class: java.lang.Class<com.google.firebase.storage.internal.SmartHandler>;
						public callBack(runnable: java.lang.Runnable): void;
						public constructor(executor: java.util.concurrent.Executor);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class StorageReferenceUri {
						public static class: java.lang.Class<com.google.firebase.storage.internal.StorageReferenceUri>;
						public getGsUri(): globalAndroid.net.Uri;
						public getHttpUri(): globalAndroid.net.Uri;
						public constructor(gsUri: globalAndroid.net.Uri, emulatorSettings: com.google.firebase.emulators.EmulatedServiceSettings);
						public constructor(gsUri: globalAndroid.net.Uri);
						public getHttpBaseUri(): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module internal {
					export class Util {
						public static class: java.lang.Class<com.google.firebase.storage.internal.Util>;
						public static NETWORK_UNAVAILABLE: number = -2;
						public static ISO_8601_FORMAT: string = "yyyy-MM-dd'T'HH:mm:ss.SSSZ";
						public constructor();
						public static normalize(fullUri: com.google.firebase.FirebaseApp, bucket: string): globalAndroid.net.Uri;
						public static getCurrentAuthToken(pendingResult: com.google.firebase.auth.internal.InternalAuthProvider): string;
						public static getCurrentAppCheckToken(pendingResult: com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider): string;
						public static parseDateTime(e: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class DeleteNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.DeleteNetworkRequest>;
						public getAction(): string;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class GetMetadataNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.GetMetadataNetworkRequest>;
						public getAction(): string;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class GetNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.GetNetworkRequest>;
						public getAction(): string;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, startByte: number);
						public getQueryParameters(): java.util.Map<string, string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ListNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ListNetworkRequest>;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, maxPageSize: java.lang.Integer, nextPageToken: string);
						public getAction(): string;
						public getURL(): globalAndroid.net.Uri;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
						public getQueryParameters(): java.util.Map<string, string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export abstract class NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.NetworkRequest>;
						public static PROD_BASE_URL: globalAndroid.net.Uri;
						public static INITIALIZATION_EXCEPTION: number = -1;
						public static NETWORK_UNAVAILABLE: number = -2;
						public mException: java.lang.Exception;
						public getAction(): string;
						public performRequestEnd(): void;
						public getOutputJSON(): org.json.JSONObject;
						public getResultBody(): org.json.JSONObject;
						public getRawResult(): string;
						public isResultSuccess(): boolean;
						public getURL(): globalAndroid.net.Uri;
						public parseErrorResponse(resultStream: java.io.InputStream): void;
						public getResultHeaders(): java.util.Map<string, string>;
						public getResultHeadersImpl(): java.util.Map<string, java.util.List<string>>;
						public setCustomHeader(key: string, value: string): void;
						public getStream(): java.io.InputStream;
						public getOutputRaw(): androidNative.Array<number>;
						public getResultingContentLength(): number;
						public getOutputRawSize(): number;
						public performRequestStart(this_: string, authToken: string): void;
						public getStorageReferenceUri(): com.google.firebase.storage.internal.StorageReferenceUri;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
						public getQueryParameters(): java.util.Map<string, string>;
						public performRequest(authToken: string, appCheckToken: string, applicationContext: globalAndroid.content.Context): void;
						public static getBaseUrl(emulatorSettings: com.google.firebase.emulators.EmulatedServiceSettings): globalAndroid.net.Uri;
						public getResultString(this_: string): string;
						public parseSuccessulResponse(resultStream: java.io.InputStream): void;
						public completeTask(this_: com.google.android.gms.tasks.TaskCompletionSource, source: any): void;
						public getException(): java.lang.Exception;
						public getResultCode(): number;
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
			export module storage {
				export module network {
					export abstract class ResumableNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableNetworkRequest>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadByteRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadByteRequest>;
						public getAction(): string;
						public getURL(): globalAndroid.net.Uri;
						public getOutputRaw(): androidNative.Array<number>;
						public getOutputRawSize(): number;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, uploadURL: globalAndroid.net.Uri, chunk: androidNative.Array<number>, offset: number, bytesToWrite: number, isFinal: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadCancelRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadCancelRequest>;
						public static cancelCalled: boolean;
						public getAction(): string;
						public getURL(): globalAndroid.net.Uri;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, uploadURL: globalAndroid.net.Uri);
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadQueryRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadQueryRequest>;
						public getAction(): string;
						public getURL(): globalAndroid.net.Uri;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, uploadURL: globalAndroid.net.Uri);
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class ResumableUploadStartRequest extends com.google.firebase.storage.network.ResumableNetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.ResumableUploadStartRequest>;
						public getAction(): string;
						public getURL(): globalAndroid.net.Uri;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, metadata: org.json.JSONObject, contentType: string);
						public getOutputJSON(): org.json.JSONObject;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
						public getQueryParameters(): java.util.Map<string, string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export class UpdateMetadataNetworkRequest extends com.google.firebase.storage.network.NetworkRequest {
						public static class: java.lang.Class<com.google.firebase.storage.network.UpdateMetadataNetworkRequest>;
						public getAction(): string;
						public getOutputJSON(): org.json.JSONObject;
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp);
						public constructor(storageReferenceUri: com.google.firebase.storage.internal.StorageReferenceUri, app: com.google.firebase.FirebaseApp, metadata: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module storage {
				export module network {
					export module connection {
						export class HttpURLConnectionFactory {
							public static class: java.lang.Class<com.google.firebase.storage.network.connection.HttpURLConnectionFactory>;
							/**
							 * Constructs a new instance of the com.google.firebase.storage.network.connection.HttpURLConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { createInstance(param0: java.net.URL): java.net.HttpURLConnection });
							public constructor();
							public createInstance(param0: java.net.URL): java.net.HttpURLConnection;
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
			export module storage {
				export module network {
					export module connection {
						export class HttpURLConnectionFactoryImpl extends com.google.firebase.storage.network.connection.HttpURLConnectionFactory {
							public static class: java.lang.Class<com.google.firebase.storage.network.connection.HttpURLConnectionFactoryImpl>;
							public constructor();
							public createInstance(url: java.net.URL): java.net.HttpURLConnection;
							public createInstance(param0: java.net.URL): java.net.HttpURLConnection;
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
//com.google.firebase.storage.CancellableTask:1
//com.google.firebase.storage.ControllableTask:1
//com.google.firebase.storage.OnPausedListener:1
//com.google.firebase.storage.OnProgressListener:1
//com.google.firebase.storage.StorageMetadata.MetadataValue:1
//com.google.firebase.storage.StorageTask:1
//com.google.firebase.storage.TaskListenerImpl:2
//com.google.firebase.storage.TaskListenerImpl.OnRaise:2
//com.google.firebase.storage.TaskState:1
//com.google.firebase.storage.TaskState.InProgress:1
//com.google.firebase.storage.TaskState.Paused:1
