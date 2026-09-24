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
			export module database {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.database.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.database';
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
			export module database {
				export abstract class ChildEvent {
					public static class: java.lang.Class<com.google.firebase.database.ChildEvent>;
				}
				export module ChildEvent {
					export class Added extends com.google.firebase.database.ChildEvent {
						public static class: java.lang.Class<com.google.firebase.database.ChildEvent.Added>;
						public getSnapshot(): com.google.firebase.database.DataSnapshot;
						public copy(snapshot: com.google.firebase.database.DataSnapshot, previousChildName: string): com.google.firebase.database.ChildEvent.Added;
						public equals(other: any): boolean;
						public component1(): com.google.firebase.database.DataSnapshot;
						public component2(): string;
						public hashCode(): number;
						public constructor(snapshot: com.google.firebase.database.DataSnapshot, previousChildName: string);
						public getPreviousChildName(): string;
						public toString(): string;
					}
					export class Changed extends com.google.firebase.database.ChildEvent {
						public static class: java.lang.Class<com.google.firebase.database.ChildEvent.Changed>;
						public getSnapshot(): com.google.firebase.database.DataSnapshot;
						public equals(other: any): boolean;
						public component1(): com.google.firebase.database.DataSnapshot;
						public component2(): string;
						public copy(snapshot: com.google.firebase.database.DataSnapshot, previousChildName: string): com.google.firebase.database.ChildEvent.Changed;
						public hashCode(): number;
						public constructor(snapshot: com.google.firebase.database.DataSnapshot, previousChildName: string);
						public getPreviousChildName(): string;
						public toString(): string;
					}
					export class Moved extends com.google.firebase.database.ChildEvent {
						public static class: java.lang.Class<com.google.firebase.database.ChildEvent.Moved>;
						public getSnapshot(): com.google.firebase.database.DataSnapshot;
						public equals(other: any): boolean;
						public component1(): com.google.firebase.database.DataSnapshot;
						public component2(): string;
						public copy(snapshot: com.google.firebase.database.DataSnapshot, previousChildName: string): com.google.firebase.database.ChildEvent.Moved;
						public hashCode(): number;
						public constructor(snapshot: com.google.firebase.database.DataSnapshot, previousChildName: string);
						public getPreviousChildName(): string;
						public toString(): string;
					}
					export class Removed extends com.google.firebase.database.ChildEvent {
						public static class: java.lang.Class<com.google.firebase.database.ChildEvent.Removed>;
						public getSnapshot(): com.google.firebase.database.DataSnapshot;
						public equals(other: any): boolean;
						public component1(): com.google.firebase.database.DataSnapshot;
						public hashCode(): number;
						public constructor(snapshot: com.google.firebase.database.DataSnapshot);
						public toString(): string;
						public copy(snapshot: com.google.firebase.database.DataSnapshot): com.google.firebase.database.ChildEvent.Removed;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ChildEventListener {
					public static class: java.lang.Class<com.google.firebase.database.ChildEventListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.ChildEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onChildAdded(param0: com.google.firebase.database.DataSnapshot, param1: string): void; onChildChanged(param0: com.google.firebase.database.DataSnapshot, param1: string): void; onChildRemoved(param0: com.google.firebase.database.DataSnapshot): void; onChildMoved(param0: com.google.firebase.database.DataSnapshot, param1: string): void; onCancelled(param0: com.google.firebase.database.DatabaseError): void });
					public constructor();
					public onChildChanged(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
					public onCancelled(param0: com.google.firebase.database.DatabaseError): void;
					public onChildRemoved(param0: com.google.firebase.database.DataSnapshot): void;
					public onChildMoved(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
					public onChildAdded(param0: com.google.firebase.database.DataSnapshot, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DataSnapshot {
					public static class: java.lang.Class<com.google.firebase.database.DataSnapshot>;
					public getValue(t: com.google.firebase.database.GenericTypeIndicator<any>): any;
					public getValue(): any;
					public getRef(): com.google.firebase.database.DatabaseReference;
					public getChildrenCount(): number;
					public exists(): boolean;
					public getKey(): string;
					public getPriority(): any;
					public child(path: string): com.google.firebase.database.DataSnapshot;
					public getValue(useExportFormat: boolean): any;
					public toString(): string;
					public hasChild(path: string): boolean;
					public getChildren(): java.lang.Iterable<com.google.firebase.database.DataSnapshot>;
					public getValue(valueType: java.lang.Class<any>): any;
					public hasChildren(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseError {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseError>;
					public static DATA_STALE: number = -1;
					public static OPERATION_FAILED: number = -2;
					public static PERMISSION_DENIED: number = -3;
					public static DISCONNECTED: number = -4;
					public static EXPIRED_TOKEN: number = -6;
					public static INVALID_TOKEN: number = -7;
					public static MAX_RETRIES: number = -8;
					public static OVERRIDDEN_BY_SET: number = -9;
					public static UNAVAILABLE: number = -10;
					public static USER_CODE_EXCEPTION: number = -11;
					public static NETWORK_ERROR: number = -24;
					public static WRITE_CANCELED: number = -25;
					public static UNKNOWN_ERROR: number = -999;
					public toString(): string;
					public static fromStatus(status: string): com.google.firebase.database.DatabaseError;
					public static fromStatus(status: string, reason: string, details: string): com.google.firebase.database.DatabaseError;
					public getMessage(): string;
					public toException(): com.google.firebase.database.DatabaseException;
					public static fromStatus(status: string, reason: string): com.google.firebase.database.DatabaseError;
					public static fromException(e: java.lang.Throwable): com.google.firebase.database.DatabaseError;
					public getDetails(): string;
					public static fromCode(code: number): com.google.firebase.database.DatabaseError;
					public getCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseException {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseReference extends com.google.firebase.database.Query {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseReference>;
					public setPriority(priority: any, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public getDatabase(): com.google.firebase.database.FirebaseDatabase;
					public static goOffline(): void;
					public getRoot(): com.google.firebase.database.DatabaseReference;
					public setValue(value: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public runTransaction(handler: com.google.firebase.database.Transaction.Handler, fireLocalEvents: boolean): void;
					public removeValue(listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public equals(other: any): boolean;
					public updateChildren(update: java.util.Map<string, any>, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public child(pathString: string): com.google.firebase.database.DatabaseReference;
					public setPriority(priority: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public runTransaction(handler: com.google.firebase.database.Transaction.Handler): void;
					public getKey(): string;
					public setValue(value: any, priority: any, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public toString(): string;
					public setValue(value: any, priority: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getParent(): com.google.firebase.database.DatabaseReference;
					public setValue(value: any, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public onDisconnect(): com.google.firebase.database.OnDisconnect;
					public removeValue(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public static goOnline(): void;
					public updateChildren(update: java.util.Map<string, any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public hashCode(): number;
					public push(): com.google.firebase.database.DatabaseReference;
				}
				export module DatabaseReference {
					export class CompletionListener {
						public static class: java.lang.Class<com.google.firebase.database.DatabaseReference.CompletionListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.DatabaseReference$CompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onComplete(param0: com.google.firebase.database.DatabaseError, param1: com.google.firebase.database.DatabaseReference): void });
						public constructor();
						public onComplete(param0: com.google.firebase.database.DatabaseError, param1: com.google.firebase.database.DatabaseReference): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class DatabaseRegistrar {
					public static class: java.lang.Class<com.google.firebase.database.DatabaseRegistrar>;
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
			export module database {
				export class Exclude {
					public static class: java.lang.Class<com.google.firebase.database.Exclude>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.Exclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module database {
				export class FirebaseDatabase {
					public static class: java.lang.Class<com.google.firebase.database.FirebaseDatabase>;
					public setPersistenceCacheSizeBytes(cacheSizeInBytes: number): void;
					public useEmulator(host: string, port: number): void;
					public getReference(): com.google.firebase.database.DatabaseReference;
					public purgeOutstandingWrites(): void;
					public goOffline(): void;
					public getReference(path: string): com.google.firebase.database.DatabaseReference;
					public static getInstance(): com.google.firebase.database.FirebaseDatabase;
					public static getInstance(url: string): com.google.firebase.database.FirebaseDatabase;
					public getReferenceFromUrl(url: string): com.google.firebase.database.DatabaseReference;
					public getApp(): com.google.firebase.FirebaseApp;
					public setLogLevel(logLevel: com.google.firebase.database.Logger.Level): void;
					public setPersistenceEnabled(isEnabled: boolean): void;
					public goOnline(): void;
					public static getSdkVersion(): string;
					public static getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.database.FirebaseDatabase;
					public static getInstance(app: com.google.firebase.FirebaseApp, url: string): com.google.firebase.database.FirebaseDatabase;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class FirebaseDatabaseComponent {
					public static class: java.lang.Class<com.google.firebase.database.FirebaseDatabaseComponent>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class FirebaseDatabaseKtxRegistrar {
					public static class: java.lang.Class<com.google.firebase.database.FirebaseDatabaseKtxRegistrar>;
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
			export module database {
				export abstract class GenericTypeIndicator<T> extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.database.GenericTypeIndicator<any>>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class IgnoreExtraProperties {
					public static class: java.lang.Class<com.google.firebase.database.IgnoreExtraProperties>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.IgnoreExtraProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module database {
				export class InternalHelpers {
					public static class: java.lang.Class<com.google.firebase.database.InternalHelpers>;
					public static createMutableData(node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.MutableData;
					public constructor();
					public static createDataSnapshot(ref: com.google.firebase.database.DatabaseReference, node: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.DataSnapshot;
					public static createReference(repo: com.google.firebase.database.core.Repo, path: com.google.firebase.database.core.Path): com.google.firebase.database.DatabaseReference;
					public static createDatabaseForTests(app: com.google.firebase.FirebaseApp, repoInfo: com.google.firebase.database.core.RepoInfo, config: com.google.firebase.database.core.DatabaseConfig): com.google.firebase.database.FirebaseDatabase;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class Logger {
					public static class: java.lang.Class<com.google.firebase.database.Logger>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export module Logger {
					export class Level {
						public static class: java.lang.Class<com.google.firebase.database.Logger.Level>;
						public static DEBUG: com.google.firebase.database.Logger.Level;
						public static INFO: com.google.firebase.database.Logger.Level;
						public static WARN: com.google.firebase.database.Logger.Level;
						public static ERROR: com.google.firebase.database.Logger.Level;
						public static NONE: com.google.firebase.database.Logger.Level;
						public static values(): androidNative.Array<com.google.firebase.database.Logger.Level>;
						public static valueOf(name: string): com.google.firebase.database.Logger.Level;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class MutableData {
					public static class: java.lang.Class<com.google.firebase.database.MutableData>;
					public getValue(t: com.google.firebase.database.GenericTypeIndicator<any>): any;
					public getValue(): any;
					public getChildren(): java.lang.Iterable<com.google.firebase.database.MutableData>;
					public getChildrenCount(): number;
					public equals(o: any): boolean;
					public getKey(): string;
					public getPriority(): any;
					public toString(): string;
					public hasChild(path: string): boolean;
					public getValue(valueType: java.lang.Class<any>): any;
					public setPriority(priority: any): void;
					public setValue(value: any): void;
					public child(path: string): com.google.firebase.database.MutableData;
					public hasChildren(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class OnDisconnect {
					public static class: java.lang.Class<com.google.firebase.database.OnDisconnect>;
					public setValue(value: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setValue(value: any, priority: number, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(value: any, priority: java.util.Map<any, any>, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public removeValue(listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(value: any, priority: string, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public updateChildren(update: java.util.Map<string, any>, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public cancel(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setValue(value: any, listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public removeValue(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public updateChildren(update: java.util.Map<string, any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public cancel(listener: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					public setValue(value: any, priority: number): com.google.android.gms.tasks.Task<java.lang.Void>;
					public setValue(value: any, priority: string): com.google.android.gms.tasks.Task<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class PropertyName {
					public static class: java.lang.Class<com.google.firebase.database.PropertyName>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.PropertyName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { value(): string });
					public constructor();
					public value(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class Query {
					public static class: java.lang.Class<com.google.firebase.database.Query>;
					public repo: com.google.firebase.database.core.Repo;
					public path: com.google.firebase.database.core.Path;
					public params: com.google.firebase.database.core.view.QueryParams;
					public startAt(value: string): com.google.firebase.database.Query;
					public startAfter(value: number, key: string): com.google.firebase.database.Query;
					public startAt(value: boolean, key: string): com.google.firebase.database.Query;
					public endBefore(value: string, key: string): com.google.firebase.database.Query;
					public startAt(value: boolean): com.google.firebase.database.Query;
					public startAt(value: number, key: string): com.google.firebase.database.Query;
					public endAt(value: number, key: string): com.google.firebase.database.Query;
					public endBefore(value: number): com.google.firebase.database.Query;
					public limitToLast(limit: number): com.google.firebase.database.Query;
					public equalTo(value: string, key: string): com.google.firebase.database.Query;
					public addChildEventListener(listener: com.google.firebase.database.ChildEventListener): com.google.firebase.database.ChildEventListener;
					public equalTo(value: number): com.google.firebase.database.Query;
					public equalTo(value: boolean): com.google.firebase.database.Query;
					public equalTo(value: number, key: string): com.google.firebase.database.Query;
					public startAfter(value: number): com.google.firebase.database.Query;
					public getPath(): com.google.firebase.database.core.Path;
					public addListenerForSingleValueEvent(listener: com.google.firebase.database.ValueEventListener): void;
					public endAt(value: string, key: string): com.google.firebase.database.Query;
					public removeEventListener(listener: com.google.firebase.database.ChildEventListener): void;
					public addValueEventListener(listener: com.google.firebase.database.ValueEventListener): com.google.firebase.database.ValueEventListener;
					public startAfter(value: boolean, key: string): com.google.firebase.database.Query;
					public orderByPriority(): com.google.firebase.database.Query;
					public keepSynced(keepSynced: boolean): void;
					public endBefore(value: number, key: string): com.google.firebase.database.Query;
					public equalTo(value: string): com.google.firebase.database.Query;
					public getRef(): com.google.firebase.database.DatabaseReference;
					public endAt(value: number): com.google.firebase.database.Query;
					public startAfter(value: string): com.google.firebase.database.Query;
					public endAt(value: string): com.google.firebase.database.Query;
					public get(): com.google.android.gms.tasks.Task<com.google.firebase.database.DataSnapshot>;
					public getRepo(): com.google.firebase.database.core.Repo;
					public endAt(value: boolean, key: string): com.google.firebase.database.Query;
					public endAt(value: boolean): com.google.firebase.database.Query;
					public startAt(value: number): com.google.firebase.database.Query;
					public orderByValue(): com.google.firebase.database.Query;
					public endBefore(value: string): com.google.firebase.database.Query;
					public endBefore(value: boolean, key: string): com.google.firebase.database.Query;
					public orderByKey(): com.google.firebase.database.Query;
					public getSpec(): com.google.firebase.database.core.view.QuerySpec;
					public startAfter(value: boolean): com.google.firebase.database.Query;
					public limitToFirst(limit: number): com.google.firebase.database.Query;
					public startAt(value: string, key: string): com.google.firebase.database.Query;
					public startAfter(value: string, key: string): com.google.firebase.database.Query;
					public endBefore(value: boolean): com.google.firebase.database.Query;
					public removeEventListener(listener: com.google.firebase.database.ValueEventListener): void;
					public equalTo(value: boolean, key: string): com.google.firebase.database.Query;
					public orderByChild(path: string): com.google.firebase.database.Query;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ServerValue {
					public static class: java.lang.Class<com.google.firebase.database.ServerValue>;
					public static TIMESTAMP: java.util.Map<string, string>;
					public constructor();
					public static increment(delta: number): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ThrowOnExtraProperties {
					public static class: java.lang.Class<com.google.firebase.database.ThrowOnExtraProperties>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.ThrowOnExtraProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module database {
				export class Transaction {
					public static class: java.lang.Class<com.google.firebase.database.Transaction>;
					public static success(resultData: com.google.firebase.database.MutableData): com.google.firebase.database.Transaction.Result;
					public constructor();
					public static abort(): com.google.firebase.database.Transaction.Result;
				}
				export module Transaction {
					export class Handler {
						public static class: java.lang.Class<com.google.firebase.database.Transaction.Handler>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.Transaction$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { doTransaction(param0: com.google.firebase.database.MutableData): com.google.firebase.database.Transaction.Result; onComplete(param0: com.google.firebase.database.DatabaseError, param1: boolean, param2: com.google.firebase.database.DataSnapshot): void });
						public constructor();
						public onComplete(param0: com.google.firebase.database.DatabaseError, param1: boolean, param2: com.google.firebase.database.DataSnapshot): void;
						public doTransaction(param0: com.google.firebase.database.MutableData): com.google.firebase.database.Transaction.Result;
					}
					export class Result {
						public static class: java.lang.Class<com.google.firebase.database.Transaction.Result>;
						public isSuccess(): boolean;
						public getNode(): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export class ValueEventListener {
					public static class: java.lang.Class<com.google.firebase.database.ValueEventListener>;
					/**
					 * Constructs a new instance of the com.google.firebase.database.ValueEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onDataChange(param0: com.google.firebase.database.DataSnapshot): void; onCancelled(param0: com.google.firebase.database.DatabaseError): void });
					public constructor();
					public onCancelled(param0: com.google.firebase.database.DatabaseError): void;
					public onDataChange(param0: com.google.firebase.database.DataSnapshot): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class AndroidAppCheckTokenProvider extends com.google.firebase.database.core.TokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidAppCheckTokenProvider>;
						public removeTokenChangeListener(tokenListener: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public removeTokenChangeListener(param0: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public getToken(this_: boolean, forceRefresh: com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener): void;
						public constructor(deferredAppCheckProvider: com.google.firebase.inject.Deferred<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>);
						public getToken(param0: boolean, param1: com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener): void;
						public addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public addTokenChangeListener(executorService: java.util.concurrent.ExecutorService, tokenListener: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class AndroidAuthTokenProvider extends com.google.firebase.database.core.TokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidAuthTokenProvider>;
						public removeTokenChangeListener(tokenListener: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public removeTokenChangeListener(param0: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public getToken(this_: boolean, forceRefresh: com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener): void;
						public getToken(param0: boolean, param1: com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener): void;
						public addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public constructor(deferredAuthProvider: com.google.firebase.inject.Deferred<com.google.firebase.auth.internal.InternalAuthProvider>);
						public addTokenChangeListener(executorService: java.util.concurrent.ExecutorService, tokenListener: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class AndroidEventTarget extends com.google.firebase.database.core.EventTarget {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidEventTarget>;
						public constructor();
						public shutdown(): void;
						public postEvent(r: java.lang.Runnable): void;
						public postEvent(param0: java.lang.Runnable): void;
						public restart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class AndroidPlatform extends com.google.firebase.database.core.Platform {
						public static class: java.lang.Class<com.google.firebase.database.android.AndroidPlatform>;
						public newPersistentConnection(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.connection.ConnectionContext, param2: com.google.firebase.database.connection.HostInfo, param3: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public getUserAgent(context: com.google.firebase.database.core.Context): string;
						public createPersistenceManager(firebaseContext: com.google.firebase.database.core.Context, firebaseId: string): com.google.firebase.database.core.persistence.PersistenceManager;
						public getUserAgent(param0: com.google.firebase.database.core.Context): string;
						public createPersistenceManager(param0: com.google.firebase.database.core.Context, param1: string): com.google.firebase.database.core.persistence.PersistenceManager;
						public newPersistentConnection(context: com.google.firebase.database.core.Context, connectionContext: com.google.firebase.database.connection.ConnectionContext, info: com.google.firebase.database.connection.HostInfo, delegate: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public newRunLoop(ctx: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
						public getSSLCacheDirectory(): java.io.File;
						public getPlatformVersion(): string;
						public newLogger(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.logging.Logger.Level, param2: java.util.List<string>): com.google.firebase.database.logging.Logger;
						public constructor(app: com.google.firebase.FirebaseApp);
						public newEventTarget(context: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
						public newEventTarget(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
						public newRunLoop(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
						public newLogger(context: com.google.firebase.database.core.Context, component: com.google.firebase.database.logging.Logger.Level, enabledComponents: java.util.List<string>): com.google.firebase.database.logging.Logger;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module android {
					export class SqlPersistenceStorageEngine extends com.google.firebase.database.core.persistence.PersistenceStorageEngine {
						public static class: java.lang.Class<com.google.firebase.database.android.SqlPersistenceStorageEngine>;
						public updateTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						public pruneCache(rowId: com.google.firebase.database.core.Path, rowPath: com.google.firebase.database.core.persistence.PruneForest): void;
						public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
						public loadTrackedQueryKeys(duration: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
						public close(): void;
						public loadTrackedQueryKeys(param0: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
						public pruneCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.persistence.PruneForest): void;
						public mergeIntoServerCache(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node): void;
						public loadTrackedQueryKeys(param0: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
						public updateTrackedQueryKeys(values: number, addedKey: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, this_: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						public saveTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						public saveTrackedQuery(param0: com.google.firebase.database.core.persistence.TrackedQuery): void;
						public serverCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public loadTrackedQueryKeys(trackedQueryId: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
						public constructor(e: globalAndroid.content.Context, this_: com.google.firebase.database.core.Context, context: string);
						public resetPreviouslyActiveTrackedQueries(lastUse: number): void;
						public beginTransaction(): void;
						public saveTrackedQuery(trackedQuery: com.google.firebase.database.core.persistence.TrackedQuery): void;
						public saveTrackedQueryKeys(addedKey: number, this_: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
						public serverCacheEstimatedSizeInBytes(): number;
						public deleteTrackedQuery(param0: number): void;
						public setTransactionSuccessful(): void;
						public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
						public removeUserWrite(writeId: number): void;
						public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
						public overwriteServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
						public removeAllUserWrites(): void;
						public purgeCache(): void;
						public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
						public resetPreviouslyActiveTrackedQueries(param0: number): void;
						public endTransaction(): void;
						public saveUserMerge(path: com.google.firebase.database.core.Path, children: com.google.firebase.database.core.CompoundWrite, writeId: number): void;
						public serverCache(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public loadTrackedQueries(): java.util.List<com.google.firebase.database.core.persistence.TrackedQuery>;
						public removeUserWrite(param0: number): void;
						public saveUserOverwrite(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node, writeId: number): void;
						public mergeIntoServerCache(this_: com.google.firebase.database.core.Path, path: com.google.firebase.database.core.CompoundWrite): void;
						public overwriteServerCache(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node): void;
						public deleteTrackedQuery(trackedQueryId: number): void;
						public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
					}
					export module SqlPersistenceStorageEngine {
						export class PersistentCacheOpenHelper {
							public static class: java.lang.Class<com.google.firebase.database.android.SqlPersistenceStorageEngine.PersistentCacheOpenHelper>;
							public constructor(context: globalAndroid.content.Context, cacheId: string);
							public onUpgrade(db: globalAndroid.database.sqlite.SQLiteDatabase, oldVersion: number, newVersion: number): void;
							public onCreate(db: globalAndroid.database.sqlite.SQLiteDatabase): void;
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
			export module database {
				export module annotations {
					export class NotNull {
						public static class: java.lang.Class<com.google.firebase.database.annotations.NotNull>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.annotations.NotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module annotations {
					export class Nullable {
						public static class: java.lang.Class<com.google.firebase.database.annotations.Nullable>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.annotations.Nullable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class CompoundHash {
						public static class: java.lang.Class<com.google.firebase.database.connection.CompoundHash>;
						public constructor(posts: java.util.List<java.util.List<string>>, hashes: java.util.List<string>);
						public getPosts(): java.util.List<java.util.List<string>>;
						public getHashes(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class Connection extends com.google.firebase.database.connection.WebsocketConnection.Delegate {
						public static class: java.lang.Class<com.google.firebase.database.connection.Connection>;
						public sendRequest(message: java.util.Map<string, any>, isSensitive: boolean): void;
						public close(): void;
						public open(): void;
						public onMessage(param0: java.util.Map<string, any>): void;
						public constructor(context: com.google.firebase.database.connection.ConnectionContext, hostInfo: com.google.firebase.database.connection.HostInfo, cachedHost: string, delegate: com.google.firebase.database.connection.Connection.Delegate, optLastSessionId: string, appCheckToken: string);
						public close(reason: com.google.firebase.database.connection.Connection.DisconnectReason): void;
						public onMessage(data: java.util.Map<string, any>): void;
						public onDisconnect(wasEverConnected: boolean): void;
						public onDisconnect(param0: boolean): void;
						public injectConnectionFailure(): void;
					}
					export module Connection {
						export class Delegate {
							public static class: java.lang.Class<com.google.firebase.database.connection.Connection.Delegate>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.Connection$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCacheHost(param0: string): void; onReady(param0: number, param1: string): void; onDataMessage(param0: java.util.Map<string, any>): void; onDisconnect(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void; onKill(param0: string): void });
							public constructor();
							public onReady(param0: number, param1: string): void;
							public onKill(param0: string): void;
							public onCacheHost(param0: string): void;
							public onDisconnect(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void;
							public onDataMessage(param0: java.util.Map<string, any>): void;
						}
						export class DisconnectReason {
							public static class: java.lang.Class<com.google.firebase.database.connection.Connection.DisconnectReason>;
							public static SERVER_RESET: com.google.firebase.database.connection.Connection.DisconnectReason;
							public static OTHER: com.google.firebase.database.connection.Connection.DisconnectReason;
							public static values(): androidNative.Array<com.google.firebase.database.connection.Connection.DisconnectReason>;
							public static valueOf(name: string): com.google.firebase.database.connection.Connection.DisconnectReason;
						}
						export class State {
							public static class: java.lang.Class<com.google.firebase.database.connection.Connection.State>;
							public static REALTIME_CONNECTING: com.google.firebase.database.connection.Connection.State;
							public static REALTIME_CONNECTED: com.google.firebase.database.connection.Connection.State;
							public static REALTIME_DISCONNECTED: com.google.firebase.database.connection.Connection.State;
							public static values(): androidNative.Array<com.google.firebase.database.connection.Connection.State>;
							public static valueOf(name: string): com.google.firebase.database.connection.Connection.State;
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
			export module database {
				export module connection {
					export class ConnectionContext {
						public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionContext>;
						public constructor(logger: com.google.firebase.database.logging.Logger, authTokenProvider: com.google.firebase.database.connection.ConnectionTokenProvider, appCheckTokenProvider: com.google.firebase.database.connection.ConnectionTokenProvider, executorService: java.util.concurrent.ScheduledExecutorService, persistenceEnabled: boolean, clientSdkVersion: string, userAgent: string, applicationId: string, sslCacheDirectory: string);
						public isPersistenceEnabled(): boolean;
						public getApplicationId(): string;
						public getAuthTokenProvider(): com.google.firebase.database.connection.ConnectionTokenProvider;
						public getExecutorService(): java.util.concurrent.ScheduledExecutorService;
						public getUserAgent(): string;
						public getLogger(): com.google.firebase.database.logging.Logger;
						public getClientSdkVersion(): string;
						public getAppCheckTokenProvider(): com.google.firebase.database.connection.ConnectionTokenProvider;
						public getSslCacheDirectory(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class ConnectionTokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionTokenProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.ConnectionTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getToken(param0: boolean, param1: com.google.firebase.database.connection.ConnectionTokenProvider.GetTokenCallback): void });
						public constructor();
						public getToken(param0: boolean, param1: com.google.firebase.database.connection.ConnectionTokenProvider.GetTokenCallback): void;
					}
					export module ConnectionTokenProvider {
						export class GetTokenCallback {
							public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionTokenProvider.GetTokenCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.ConnectionTokenProvider$GetTokenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onSuccess(param0: string): void; onError(param0: string): void });
							public constructor();
							public onError(param0: string): void;
							public onSuccess(param0: string): void;
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
			export module database {
				export module connection {
					export class ConnectionUtils {
						public static class: java.lang.Class<com.google.firebase.database.connection.ConnectionUtils>;
						public static hardAssert(condition: boolean, message: string, args: androidNative.Array<any>): void;
						public constructor();
						public static pathToString(segment: java.util.List<string>): string;
						public static longFromObject(o: any): java.lang.Long;
						public static hardAssert(condition: boolean): void;
						public static stringToPath(i: string): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class Constants {
						public static class: java.lang.Class<com.google.firebase.database.connection.Constants>;
						public static DOT_INFO_SERVERTIME_OFFSET: string = 'serverTimeOffset';
						public static WIRE_PROTOCOL_VERSION: string = '5';
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class HostInfo {
						public static class: java.lang.Class<com.google.firebase.database.connection.HostInfo>;
						public constructor(host: string, namespace: string, secure: boolean);
						public isSecure(): boolean;
						public static getConnectionUrl(host: string, secure: boolean, namespace: string, optLastSessionId: string): java.net.URI;
						public getHost(): string;
						public toString(): string;
						public getNamespace(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class ListenHashProvider {
						public static class: java.lang.Class<com.google.firebase.database.connection.ListenHashProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.ListenHashProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getSimpleHash(): string; shouldIncludeCompoundHash(): boolean; getCompoundHash(): com.google.firebase.database.connection.CompoundHash });
						public constructor();
						public shouldIncludeCompoundHash(): boolean;
						public getSimpleHash(): string;
						public getCompoundHash(): com.google.firebase.database.connection.CompoundHash;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class PersistentConnection {
						public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnection>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.PersistentConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(): void;
							shutdown(): void;
							refreshAuthToken(): void;
							refreshAuthToken(param0: string): void;
							refreshAppCheckToken(): void;
							refreshAppCheckToken(param0: string): void;
							listen(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.ListenHashProvider, param3: java.lang.Long, param4: com.google.firebase.database.connection.RequestResultCallback): void;
							unlisten(param0: java.util.List<string>, param1: java.util.Map<string, any>): void;
							get(param0: java.util.List<string>, param1: java.util.Map<string, any>): com.google.android.gms.tasks.Task<any>;
							purgeOutstandingWrites(): void;
							put(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							compareAndPut(param0: java.util.List<string>, param1: any, param2: string, param3: com.google.firebase.database.connection.RequestResultCallback): void;
							merge(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							onDisconnectPut(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							onDisconnectMerge(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
							onDisconnectCancel(param0: java.util.List<string>, param1: com.google.firebase.database.connection.RequestResultCallback): void;
							interrupt(param0: string): void;
							resume(param0: string): void;
							isInterrupted(param0: string): boolean;
						});
						public constructor();
						public onDisconnectCancel(param0: java.util.List<string>, param1: com.google.firebase.database.connection.RequestResultCallback): void;
						public put(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public unlisten(param0: java.util.List<string>, param1: java.util.Map<string, any>): void;
						public isInterrupted(param0: string): boolean;
						public refreshAuthToken(): void;
						public onDisconnectPut(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public listen(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.ListenHashProvider, param3: java.lang.Long, param4: com.google.firebase.database.connection.RequestResultCallback): void;
						public shutdown(): void;
						public purgeOutstandingWrites(): void;
						public resume(param0: string): void;
						public refreshAuthToken(param0: string): void;
						public refreshAppCheckToken(param0: string): void;
						public interrupt(param0: string): void;
						public initialize(): void;
						public refreshAppCheckToken(): void;
						public get(param0: java.util.List<string>, param1: java.util.Map<string, any>): com.google.android.gms.tasks.Task<any>;
						public compareAndPut(param0: java.util.List<string>, param1: any, param2: string, param3: com.google.firebase.database.connection.RequestResultCallback): void;
						public onDisconnectMerge(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public merge(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
					}
					export module PersistentConnection {
						export class Delegate {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnection.Delegate>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.PersistentConnection$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onDataUpdate(param0: java.util.List<string>, param1: any, param2: boolean, param3: java.lang.Long): void; onRangeMergeUpdate(param0: java.util.List<string>, param1: java.util.List<com.google.firebase.database.connection.RangeMerge>, param2: java.lang.Long): void; onConnect(): void; onDisconnect(): void; onConnectionStatus(param0: boolean): void; onServerInfoUpdate(param0: java.util.Map<string, any>): void });
							public constructor();
							public onServerInfoUpdate(param0: java.util.Map<string, any>): void;
							public onConnect(): void;
							public onDataUpdate(param0: java.util.List<string>, param1: any, param2: boolean, param3: java.lang.Long): void;
							public onConnectionStatus(param0: boolean): void;
							public onDisconnect(): void;
							public onRangeMergeUpdate(param0: java.util.List<string>, param1: java.util.List<com.google.firebase.database.connection.RangeMerge>, param2: java.lang.Long): void;
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
			export module database {
				export module connection {
					export class PersistentConnectionImpl implements com.google.firebase.database.connection.Connection.Delegate, com.google.firebase.database.connection.PersistentConnection {
						public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl>;
						public onDisconnectCancel(param0: java.util.List<string>, param1: com.google.firebase.database.connection.RequestResultCallback): void;
						public onDisconnect(timeSinceLastConnectSucceeded: com.google.firebase.database.connection.Connection.DisconnectReason): void;
						public onReady(param0: number, param1: string): void;
						public put(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public openNetworkConnection(authToken: string, appCheckToken: string): void;
						public isInterrupted(param0: string): boolean;
						public put(path: java.util.List<string>, data: any, onComplete: com.google.firebase.database.connection.RequestResultCallback): void;
						public onKill(reason: string): void;
						public onDataMessage(param0: java.util.Map<string, any>): void;
						public onDisconnectCancel(path: java.util.List<string>, onComplete: com.google.firebase.database.connection.RequestResultCallback): void;
						public onKill(param0: string): void;
						public isInterrupted(reason: string): boolean;
						public shutdown(): void;
						public resume(param0: string): void;
						public onDisconnect(param0: com.google.firebase.database.connection.Connection.DisconnectReason): void;
						public refreshAuthToken(param0: string): void;
						public refreshAppCheckToken(param0: string): void;
						public refreshAppCheckToken(): void;
						public refreshAuthToken(token: string): void;
						public onDisconnectMerge(path: java.util.List<string>, updates: java.util.Map<string, any>, onComplete: com.google.firebase.database.connection.RequestResultCallback): void;
						public compareAndPut(param0: java.util.List<string>, param1: any, param2: string, param3: com.google.firebase.database.connection.RequestResultCallback): void;
						public merge(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public resume(reason: string): void;
						public interrupt(reason: string): void;
						public onDisconnectPut(path: java.util.List<string>, data: any, onComplete: com.google.firebase.database.connection.RequestResultCallback): void;
						public unlisten(param0: java.util.List<string>, param1: java.util.Map<string, any>): void;
						public get(path: java.util.List<string>, queryParams: java.util.Map<string, any>): com.google.android.gms.tasks.Task<any>;
						public onDataMessage(rn: java.util.Map<string, any>): void;
						public refreshAppCheckToken(token: string): void;
						public refreshAuthToken(): void;
						public onDisconnectPut(param0: java.util.List<string>, param1: any, param2: com.google.firebase.database.connection.RequestResultCallback): void;
						public onCacheHost(param0: string): void;
						public listen(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.ListenHashProvider, param3: java.lang.Long, param4: com.google.firebase.database.connection.RequestResultCallback): void;
						public compareAndPut(path: java.util.List<string>, data: any, hash: string, onComplete: com.google.firebase.database.connection.RequestResultCallback): void;
						public merge(path: java.util.List<string>, data: java.util.Map<string, any>, onComplete: com.google.firebase.database.connection.RequestResultCallback): void;
						public injectConnectionFailure(): void;
						public onReady(timestamp: number, sessionId: string): void;
						public purgeOutstandingWrites(): void;
						public interrupt(param0: string): void;
						public constructor(context: com.google.firebase.database.connection.ConnectionContext, info: com.google.firebase.database.connection.HostInfo, delegate: com.google.firebase.database.connection.PersistentConnection.Delegate);
						public initialize(): void;
						public listen(path: java.util.List<string>, queryParams: java.util.Map<string, any>, currentHashFn: com.google.firebase.database.connection.ListenHashProvider, tag: java.lang.Long, listener: com.google.firebase.database.connection.RequestResultCallback): void;
						public onCacheHost(host: string): void;
						public get(param0: java.util.List<string>, param1: java.util.Map<string, any>): com.google.android.gms.tasks.Task<any>;
						public unlisten(path: java.util.List<string>, queryParams: java.util.Map<string, any>): void;
						public onDisconnectMerge(param0: java.util.List<string>, param1: java.util.Map<string, any>, param2: com.google.firebase.database.connection.RequestResultCallback): void;
					}
					export module PersistentConnectionImpl {
						export class ConnectionRequestCallback {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionRequestCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.PersistentConnectionImpl$ConnectionRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onResponse(param0: java.util.Map<string, any>): void });
							public constructor();
							public onResponse(param0: java.util.Map<string, any>): void;
						}
						export class ConnectionState {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState>;
							public static Disconnected: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static GettingToken: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static Connecting: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static Authenticating: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static Connected: com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
							public static values(): androidNative.Array<com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState>;
							public static valueOf(name: string): com.google.firebase.database.connection.PersistentConnectionImpl.ConnectionState;
						}
						export class OutstandingDisconnect {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingDisconnect>;
							public getPath(): java.util.List<string>;
							public getOnComplete(): com.google.firebase.database.connection.RequestResultCallback;
							public getAction(): string;
							public getData(): any;
						}
						export class OutstandingGet {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingGet>;
						}
						export class OutstandingListen {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingListen>;
							public getHashFunction(): com.google.firebase.database.connection.ListenHashProvider;
							public toString(): string;
							public getQuery(): com.google.firebase.database.connection.PersistentConnectionImpl.QuerySpec;
							public getTag(): java.lang.Long;
						}
						export class OutstandingPut {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.OutstandingPut>;
							public wasSent(): boolean;
							public getOnComplete(): com.google.firebase.database.connection.RequestResultCallback;
							public getAction(): string;
							public markSent(): void;
							public getRequest(): java.util.Map<string, any>;
						}
						export class QuerySpec {
							public static class: java.lang.Class<com.google.firebase.database.connection.PersistentConnectionImpl.QuerySpec>;
							public hashCode(): number;
							public constructor(path: java.util.List<string>, queryParams: java.util.Map<string, any>);
							public equals(o: any): boolean;
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
			export module database {
				export module connection {
					export class RangeMerge {
						public static class: java.lang.Class<com.google.firebase.database.connection.RangeMerge>;
						public getOptExclusiveStart(): java.util.List<string>;
						public getOptInclusiveEnd(): java.util.List<string>;
						public getSnap(): any;
						public constructor(optExclusiveStart: java.util.List<string>, optInclusiveEnd: java.util.List<string>, snap: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class RequestResultCallback {
						public static class: java.lang.Class<com.google.firebase.database.connection.RequestResultCallback>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.connection.RequestResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onRequestResult(param0: string, param1: string): void });
						public constructor();
						public onRequestResult(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module connection {
					export class WebsocketConnection {
						public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection>;
						public send(toSend: java.util.Map<string, any>): void;
						public start(): void;
						public close(): void;
						public constructor(connectionContext: com.google.firebase.database.connection.ConnectionContext, hostInfo: com.google.firebase.database.connection.HostInfo, optCachedHost: string, appCheckToken: string, delegate: com.google.firebase.database.connection.WebsocketConnection.Delegate, optLastSessionId: string);
						public open(): void;
					}
					export module WebsocketConnection {
						export class Delegate {
							public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection.Delegate>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.WebsocketConnection$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMessage(param0: java.util.Map<string, any>): void; onDisconnect(param0: boolean): void });
							public constructor();
							public onMessage(param0: java.util.Map<string, any>): void;
							public onDisconnect(param0: boolean): void;
						}
						export class WSClient {
							public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection.WSClient>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.connection.WebsocketConnection$WSClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { connect(): void; close(): void; send(param0: string): void });
							public constructor();
							public close(): void;
							public send(param0: string): void;
							public connect(): void;
						}
						export class WSClientTubesock implements com.google.firebase.database.connection.WebsocketConnection.WSClient, com.google.firebase.database.tubesock.WebSocketEventHandler {
							public static class: java.lang.Class<com.google.firebase.database.connection.WebsocketConnection.WSClientTubesock>;
							public onClose(): void;
							public close(): void;
							public send(param0: string): void;
							public onError(e: com.google.firebase.database.tubesock.WebSocketException): void;
							public onLogMessage(param0: string): void;
							public onOpen(): void;
							public onMessage(msg: com.google.firebase.database.tubesock.WebSocketMessage): void;
							public send(msg: string): void;
							public connect(): void;
							public onMessage(param0: com.google.firebase.database.tubesock.WebSocketMessage): void;
							public onError(param0: com.google.firebase.database.tubesock.WebSocketException): void;
							public onLogMessage(msg: string): void;
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
			export module database {
				export module connection {
					export module util {
						export class RetryHelper {
							public static class: java.lang.Class<com.google.firebase.database.connection.util.RetryHelper>;
							public setMaxDelay(): void;
							public cancel(): void;
							public retry(newDelay: java.lang.Runnable): void;
							public signalSuccess(): void;
						}
						export module RetryHelper {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.database.connection.util.RetryHelper.Builder>;
								public withMinDelayAfterFailure(delay: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
								public build(): com.google.firebase.database.connection.util.RetryHelper;
								public withMaxDelay(delay: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
								public constructor(service: java.util.concurrent.ScheduledExecutorService, logger: com.google.firebase.database.logging.Logger, tag: string);
								public withJitterFactor(random: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
								public withRetryExponent(exponent: number): com.google.firebase.database.connection.util.RetryHelper.Builder;
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
			export module database {
				export module connection {
					export module util {
						export class StringListReader {
							public static class: java.lang.Class<com.google.firebase.database.connection.util.StringListReader>;
							public constructor();
							public read(this_: java.nio.CharBuffer): number;
							public close(): void;
							public mark(readAheadLimit: number): void;
							public read(this_: androidNative.Array<string>, cbuf: number, off: number): number;
							public read(): number;
							public toString(): string;
							public skip(n: number): number;
							public reset(): void;
							public markSupported(): boolean;
							public freeze(): void;
							public ready(): boolean;
							public addString(string: string): void;
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
			export module database {
				export module core {
					export class ChildEventRegistration extends com.google.firebase.database.core.EventRegistration {
						public static class: java.lang.Class<com.google.firebase.database.core.ChildEventRegistration>;
						public clone(newQuery: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						public isSameListener(other: com.google.firebase.database.core.EventRegistration): boolean;
						public constructor();
						public equals(other: any): boolean;
						public respondsTo(eventType: com.google.firebase.database.core.view.Event.EventType): boolean;
						public fireCancelEvent(error: com.google.firebase.database.DatabaseError): void;
						public hashCode(): number;
						public fireEvent(eventData: com.google.firebase.database.core.view.DataEvent): void;
						public createEvent(change: com.google.firebase.database.core.view.Change, query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
						public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
						public toString(): string;
						public constructor(repo: com.google.firebase.database.core.Repo, eventListener: com.google.firebase.database.ChildEventListener, spec: com.google.firebase.database.core.view.QuerySpec);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class CompoundWrite extends java.lang.Iterable<java.util.Map.Entry<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>> {
						public static class: java.lang.Class<com.google.firebase.database.core.CompoundWrite>;
						public childCompoundWrites(): java.util.Map<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.core.CompoundWrite>;
						public removeWrite(this_: com.google.firebase.database.core.Path): com.google.firebase.database.core.CompoundWrite;
						public rootWrite(): com.google.firebase.database.snapshot.Node;
						public hashCode(): number;
						public iterator(): java.util.Iterator<java.util.Map.Entry<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>>;
						public static fromChildMerge(tree: java.util.Map<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.snapshot.Node>): com.google.firebase.database.core.CompoundWrite;
						public static fromPathMerge(tree: java.util.Map<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>): com.google.firebase.database.core.CompoundWrite;
						public toString(): string;
						public hasCompleteWrite(path: com.google.firebase.database.core.Path): boolean;
						public addWrites(path: com.google.firebase.database.core.Path, updates: com.google.firebase.database.core.CompoundWrite): com.google.firebase.database.core.CompoundWrite;
						public static emptyWrite(): com.google.firebase.database.core.CompoundWrite;
						public apply(node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public static fromValue(tree: java.util.Map<string, any>): com.google.firebase.database.core.CompoundWrite;
						public getValue(exportFormat: boolean): java.util.Map<string, any>;
						public addWrite(value: com.google.firebase.database.core.Path, back: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.CompoundWrite;
						public addWrite(key: com.google.firebase.database.snapshot.ChildKey, node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.CompoundWrite;
						public isEmpty(): boolean;
						public getCompleteNode(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public getCompleteChildren(): java.util.List<com.google.firebase.database.snapshot.NamedNode>;
						public equals(o: any): boolean;
						public childCompoundWrite(this_: com.google.firebase.database.core.Path): com.google.firebase.database.core.CompoundWrite;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Constants {
						public static class: java.lang.Class<com.google.firebase.database.core.Constants>;
						public static DOT_INFO: com.google.firebase.database.snapshot.ChildKey;
						public static DOT_INFO_SERVERTIME_OFFSET: com.google.firebase.database.snapshot.ChildKey;
						public static DOT_INFO_AUTHENTICATED: com.google.firebase.database.snapshot.ChildKey;
						public static DOT_INFO_CONNECTED: com.google.firebase.database.snapshot.ChildKey;
						public static WIRE_PROTOCOL_VERSION: string = '5';
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
			export module database {
				export module core {
					export class Context {
						public static class: java.lang.Class<com.google.firebase.database.core.Context>;
						public logger: com.google.firebase.database.logging.Logger;
						public eventTarget: com.google.firebase.database.core.EventTarget;
						public authTokenProvider: com.google.firebase.database.core.TokenProvider;
						public appCheckTokenProvider: com.google.firebase.database.core.TokenProvider;
						public runLoop: com.google.firebase.database.core.RunLoop;
						public persistenceKey: string;
						public loggedComponents: java.util.List<string>;
						public userAgent: string;
						public logLevel: com.google.firebase.database.logging.Logger.Level;
						public persistenceEnabled: boolean;
						public cacheSize: number;
						public firebaseApp: com.google.firebase.FirebaseApp;
						public getOptDebugLogComponents(): java.util.List<string>;
						public getPersistenceCacheSizeBytes(): number;
						public getRunLoop(): com.google.firebase.database.core.RunLoop;
						public newPersistentConnection(info: com.google.firebase.database.connection.HostInfo, delegate: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public constructor();
						public isPersistenceEnabled(): boolean;
						public isStopped(): boolean;
						public getLogger(component: string): com.google.firebase.database.logging.LogWrapper;
						public getUserAgent(): string;
						public getConnectionContext(): com.google.firebase.database.connection.ConnectionContext;
						public getLogger(): com.google.firebase.database.logging.Logger;
						public getSessionPersistenceKey(): string;
						public requireStarted(): void;
						public getSSLCacheDirectory(): java.io.File;
						public getPlatformVersion(): string;
						public getEventTarget(): com.google.firebase.database.core.EventTarget;
						public assertUnfrozen(): void;
						public getLogger(component: string, prefix: string): com.google.firebase.database.logging.LogWrapper;
						public getAuthTokenProvider(): com.google.firebase.database.core.TokenProvider;
						public isFrozen(): boolean;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
						public getAppCheckTokenProvider(): com.google.firebase.database.core.TokenProvider;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class DatabaseConfig extends com.google.firebase.database.core.Context {
						public static class: java.lang.Class<com.google.firebase.database.core.DatabaseConfig>;
						public setSessionPersistenceKey(sessionKey: string): void;
						public constructor();
						public setRunLoop(runLoop: com.google.firebase.database.core.RunLoop): void;
						public setAuthTokenProvider(provider: com.google.firebase.database.core.TokenProvider): void;
						public setFirebaseApp(app: com.google.firebase.FirebaseApp): void;
						public setPersistenceCacheSizeBytes(cacheSizeInBytes: number): void;
						public setLogger(logger: com.google.firebase.database.logging.Logger): void;
						public setLogLevel(logLevel: com.google.firebase.database.Logger.Level): void;
						public setPersistenceEnabled(isEnabled: boolean): void;
						public setDebugLogComponents(debugComponents: java.util.List<string>): void;
						public setAppCheckTokenProvider(provider: com.google.firebase.database.core.TokenProvider): void;
						public setEventTarget(eventTarget: com.google.firebase.database.core.EventTarget): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export abstract class EventRegistration {
						public static class: java.lang.Class<com.google.firebase.database.core.EventRegistration>;
						public respondsTo(param0: com.google.firebase.database.core.view.Event.EventType): boolean;
						public constructor();
						public isSameListener(param0: com.google.firebase.database.core.EventRegistration): boolean;
						public createEvent(param0: com.google.firebase.database.core.view.Change, param1: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
						public clone(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						public isUserInitiated(): boolean;
						public fireCancelEvent(param0: com.google.firebase.database.DatabaseError): void;
						public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
						public fireEvent(param0: com.google.firebase.database.core.view.DataEvent): void;
						public isZombied(): boolean;
						public setOnZombied(listener: com.google.firebase.database.core.EventRegistrationZombieListener): void;
						public setIsUserInitiated(isUserInitiated: boolean): void;
						public zombify(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class EventRegistrationZombieListener {
						public static class: java.lang.Class<com.google.firebase.database.core.EventRegistrationZombieListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.EventRegistrationZombieListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onZombied(param0: com.google.firebase.database.core.EventRegistration): void });
						public constructor();
						public onZombied(param0: com.google.firebase.database.core.EventRegistration): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class EventTarget {
						public static class: java.lang.Class<com.google.firebase.database.core.EventTarget>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.EventTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { postEvent(param0: java.lang.Runnable): void; shutdown(): void; restart(): void });
						public constructor();
						public shutdown(): void;
						public postEvent(param0: java.lang.Runnable): void;
						public restart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Path extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.database.core.Path>;
						public wireFormat(): string;
						public constructor(this_: java.util.List<string>);
						public contains(other: com.google.firebase.database.core.Path): boolean;
						public equals(j: any): boolean;
						public child(child: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.Path;
						public hashCode(): number;
						public constructor(this_: androidNative.Array<com.google.firebase.database.snapshot.ChildKey>);
						public toString(): string;
						public getParent(): com.google.firebase.database.core.Path;
						public getFront(): com.google.firebase.database.snapshot.ChildKey;
						public popFront(): com.google.firebase.database.core.Path;
						public child(path: com.google.firebase.database.core.Path): com.google.firebase.database.core.Path;
						public compareTo(this_: com.google.firebase.database.core.Path): number;
						public constructor(segment: string);
						public isEmpty(): boolean;
						public static getEmptyPath(): com.google.firebase.database.core.Path;
						public static getRelative(from: com.google.firebase.database.core.Path, to: com.google.firebase.database.core.Path): com.google.firebase.database.core.Path;
						public size(): number;
						public getBack(): com.google.firebase.database.snapshot.ChildKey;
						public asList(): java.util.List<string>;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.ChildKey>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Platform {
						public static class: java.lang.Class<com.google.firebase.database.core.Platform>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.Platform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							newLogger(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.logging.Logger.Level, param2: java.util.List<string>): com.google.firebase.database.logging.Logger;
							newEventTarget(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
							newRunLoop(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
							newPersistentConnection(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.connection.ConnectionContext, param2: com.google.firebase.database.connection.HostInfo, param3: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
							getUserAgent(param0: com.google.firebase.database.core.Context): string;
							getPlatformVersion(): string;
							createPersistenceManager(param0: com.google.firebase.database.core.Context, param1: string): com.google.firebase.database.core.persistence.PersistenceManager;
							getSSLCacheDirectory(): java.io.File;
						});
						public constructor();
						public newPersistentConnection(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.connection.ConnectionContext, param2: com.google.firebase.database.connection.HostInfo, param3: com.google.firebase.database.connection.PersistentConnection.Delegate): com.google.firebase.database.connection.PersistentConnection;
						public getSSLCacheDirectory(): java.io.File;
						public getPlatformVersion(): string;
						public newLogger(param0: com.google.firebase.database.core.Context, param1: com.google.firebase.database.logging.Logger.Level, param2: java.util.List<string>): com.google.firebase.database.logging.Logger;
						public getUserAgent(param0: com.google.firebase.database.core.Context): string;
						public createPersistenceManager(param0: com.google.firebase.database.core.Context, param1: string): com.google.firebase.database.core.persistence.PersistenceManager;
						public newEventTarget(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.EventTarget;
						public newRunLoop(param0: com.google.firebase.database.core.Context): com.google.firebase.database.core.RunLoop;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class Repo extends com.google.firebase.database.connection.PersistentConnection.Delegate {
						public static class: java.lang.Class<com.google.firebase.database.core.Repo>;
						public dataUpdateCount: number;
						public scheduleNow(r: java.lang.Runnable): void;
						public postEvent(r: java.lang.Runnable): void;
						public getServerTime(): number;
						public updateChildren(affectedPath: com.google.firebase.database.core.Path, update: com.google.firebase.database.core.CompoundWrite, this_: com.google.firebase.database.DatabaseReference.CompletionListener, path: java.util.Map<string, any>): void;
						public getValue(query: com.google.firebase.database.Query): com.google.android.gms.tasks.Task<com.google.firebase.database.DataSnapshot>;
						public onDisconnect(): void;
						public onDisconnectSetValue(path: com.google.firebase.database.core.Path, newValue: com.google.firebase.database.snapshot.Node, onComplete: com.google.firebase.database.DatabaseReference.CompletionListener): void;
						public onConnect(): void;
						public onDataUpdate(entry: java.util.List<string>, taggedChildren: any, rawMergeData: boolean, events: java.lang.Long): void;
						public onServerInfoUpdate(this_: java.util.Map<string, any>): void;
						public getDatabase(): com.google.firebase.database.FirebaseDatabase;
						public scheduleDelayed(r: java.lang.Runnable, millis: number): void;
						public onServerInfoUpdate(param0: java.util.Map<string, any>): void;
						public keepSynced(query: com.google.firebase.database.core.view.QuerySpec, keep: boolean): void;
						public onDataUpdate(param0: java.util.List<string>, param1: any, param2: boolean, param3: java.lang.Long): void;
						public onConnectionStatus(connectionOk: boolean): void;
						public keepSynced(query: com.google.firebase.database.core.view.QuerySpec, keep: boolean, skipDedup: boolean): void;
						public getRepoInfo(): com.google.firebase.database.core.RepoInfo;
						public onServerInfoUpdate(key: com.google.firebase.database.snapshot.ChildKey, value: any): void;
						public setHijackHash(hijackHash: boolean): void;
						public toString(): string;
						public onDisconnectCancel(path: com.google.firebase.database.core.Path, onComplete: com.google.firebase.database.DatabaseReference.CompletionListener): void;
						public purgeOutstandingWrites(): void;
						public removeEventCallback(this_: com.google.firebase.database.core.EventRegistration): void;
						public onRangeMergeUpdate(param0: java.util.List<string>, param1: java.util.List<com.google.firebase.database.connection.RangeMerge>, param2: java.lang.Long): void;
						public onRangeMergeUpdate(events: java.util.List<string>, this_: java.util.List<com.google.firebase.database.connection.RangeMerge>, pathSegments: java.lang.Long): void;
						public onDisconnectUpdate(path: com.google.firebase.database.core.Path, newChildren: java.util.Map<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>, listener: com.google.firebase.database.DatabaseReference.CompletionListener, unParsedUpdates: java.util.Map<string, any>): void;
						public onConnectionStatus(param0: boolean): void;
						public startTransaction(e: com.google.firebase.database.core.Path, innerClassError: com.google.firebase.database.Transaction.Handler, snap: boolean): void;
						public addEventCallback(this_: com.google.firebase.database.core.EventRegistration): void;
						public setValue(path: com.google.firebase.database.core.Path, newValueUnresolved: com.google.firebase.database.snapshot.Node, onComplete: com.google.firebase.database.DatabaseReference.CompletionListener): void;
					}
					export module Repo {
						export class TransactionData extends java.lang.Comparable<com.google.firebase.database.core.Repo.TransactionData> {
							public static class: java.lang.Class<com.google.firebase.database.core.Repo.TransactionData>;
							public compareTo(o: com.google.firebase.database.core.Repo.TransactionData): number;
						}
						export class TransactionStatus {
							public static class: java.lang.Class<com.google.firebase.database.core.Repo.TransactionStatus>;
							public static INITIALIZING: com.google.firebase.database.core.Repo.TransactionStatus;
							public static RUN: com.google.firebase.database.core.Repo.TransactionStatus;
							public static SENT: com.google.firebase.database.core.Repo.TransactionStatus;
							public static COMPLETED: com.google.firebase.database.core.Repo.TransactionStatus;
							public static SENT_NEEDS_ABORT: com.google.firebase.database.core.Repo.TransactionStatus;
							public static NEEDS_ABORT: com.google.firebase.database.core.Repo.TransactionStatus;
							public static valueOf(name: string): com.google.firebase.database.core.Repo.TransactionStatus;
							public static values(): androidNative.Array<com.google.firebase.database.core.Repo.TransactionStatus>;
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
			export module database {
				export module core {
					export class RepoInfo {
						public static class: java.lang.Class<com.google.firebase.database.core.RepoInfo>;
						public host: string;
						public secure: boolean;
						public namespace: string;
						public internalHost: string;
						public getConnectionURL(optLastSessionId: string): java.net.URI;
						public constructor();
						public toDebugString(): string;
						public isSecure(): boolean;
						public isDemoHost(): boolean;
						public hashCode(): number;
						public isCustomHost(): boolean;
						public equals(o: any): boolean;
						public toString(): string;
						public applyEmulatorSettings(settings: com.google.firebase.emulators.EmulatedServiceSettings): void;
						public isCacheableHost(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class RepoManager {
						public static class: java.lang.Class<com.google.firebase.database.core.RepoManager>;
						public static getRepo(ctx: com.google.firebase.database.core.Context, info: com.google.firebase.database.core.RepoInfo): com.google.firebase.database.core.Repo;
						public static clear(): void;
						public static resume(ctx: com.google.firebase.database.core.Context): void;
						public constructor();
						public static interrupt(ctx: com.google.firebase.database.core.Context): void;
						public static resume(repo: com.google.firebase.database.core.Repo): void;
						public static interrupt(repo: com.google.firebase.database.core.Repo): void;
						public static createRepo(ctx: com.google.firebase.database.core.Context, info: com.google.firebase.database.core.RepoInfo, database: com.google.firebase.database.FirebaseDatabase): com.google.firebase.database.core.Repo;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class RunLoop {
						public static class: java.lang.Class<com.google.firebase.database.core.RunLoop>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.RunLoop interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { scheduleNow(param0: java.lang.Runnable): void; schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.ScheduledFuture<any>; shutdown(): void; restart(): void });
						public constructor();
						public shutdown(): void;
						public scheduleNow(param0: java.lang.Runnable): void;
						public restart(): void;
						public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.ScheduledFuture<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ServerValues {
						public static class: java.lang.Class<com.google.firebase.database.core.ServerValues>;
						public static NAME_SUBKEY_SERVERVALUE: string = '.sv';
						public static NAME_OP_TIMESTAMP: string = 'timestamp';
						public static NAME_OP_INCREMENT: string = 'increment';
						public constructor();
						public static generateServerValues(clock: com.google.firebase.database.core.utilities.Clock): java.util.Map<string, any>;
						public static resolveDeferredValueSnapshot(data: com.google.firebase.database.snapshot.Node, existing: com.google.firebase.database.snapshot.Node, serverValues: java.util.Map<string, any>): com.google.firebase.database.snapshot.Node;
						public static resolveDeferredValueSnapshot(data: com.google.firebase.database.snapshot.Node, syncTree: com.google.firebase.database.core.SyncTree, path: com.google.firebase.database.core.Path, serverValues: java.util.Map<string, any>): com.google.firebase.database.snapshot.Node;
						public static resolveDeferredLeafValue(value: any, existing: com.google.firebase.database.core.ValueProvider, serverValues: java.util.Map<string, any>): any;
						public static resolveDeferredValueMerge(deferredValue: com.google.firebase.database.core.CompoundWrite, entry: com.google.firebase.database.core.SyncTree, merge: com.google.firebase.database.core.Path, syncTree: java.util.Map<string, any>): com.google.firebase.database.core.CompoundWrite;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SnapshotHolder {
						public static class: java.lang.Class<com.google.firebase.database.core.SnapshotHolder>;
						public getRootNode(): com.google.firebase.database.snapshot.Node;
						public update(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node): void;
						public constructor(node: com.google.firebase.database.snapshot.Node);
						public getNode(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SparseSnapshotTree {
						public static class: java.lang.Class<com.google.firebase.database.core.SparseSnapshotTree>;
						public constructor();
						public forget(child: com.google.firebase.database.core.Path): boolean;
						public remember(child: com.google.firebase.database.core.Path, this_: com.google.firebase.database.snapshot.Node): void;
						public forEachChild(this_: com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotChildVisitor): void;
						public forEachTree(prefixPath: com.google.firebase.database.core.Path, visitor: com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotTreeVisitor): void;
					}
					export module SparseSnapshotTree {
						export class SparseSnapshotChildVisitor {
							public static class: java.lang.Class<com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotChildVisitor>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SparseSnapshotTree$SparseSnapshotChildVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { visitChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.core.SparseSnapshotTree): void });
							public constructor();
							public visitChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.core.SparseSnapshotTree): void;
						}
						export class SparseSnapshotTreeVisitor {
							public static class: java.lang.Class<com.google.firebase.database.core.SparseSnapshotTree.SparseSnapshotTreeVisitor>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SparseSnapshotTree$SparseSnapshotTreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { visitTree(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void });
							public constructor();
							public visitTree(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
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
			export module database {
				export module core {
					export class SyncPoint {
						public static class: java.lang.Class<com.google.firebase.database.core.SyncPoint>;
						public hasCompleteView(): boolean;
						public applyOperation(view: com.google.firebase.database.core.operation.Operation, entry: com.google.firebase.database.core.WriteTreeRef, events: com.google.firebase.database.snapshot.Node): java.util.List<com.google.firebase.database.core.view.DataEvent>;
						public getCompleteServerCache(view: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public constructor(persistenceManager: com.google.firebase.database.core.persistence.PersistenceManager);
						public getView(eventCache: com.google.firebase.database.core.view.QuerySpec, eventCacheComplete: com.google.firebase.database.core.WriteTreeRef, indexed: com.google.firebase.database.core.view.CacheNode): com.google.firebase.database.core.view.View;
						public getCompleteView(): com.google.firebase.database.core.view.View;
						public removeEventRegistration(view: com.google.firebase.database.core.view.QuerySpec, iterator: com.google.firebase.database.core.EventRegistration, param2: com.google.firebase.database.DatabaseError): com.google.firebase.database.core.utilities.Pair<java.util.List<com.google.firebase.database.core.view.QuerySpec>, java.util.List<com.google.firebase.database.core.view.Event>>;
						public isEmpty(): boolean;
						public viewForQuery(query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.View;
						public viewExistsForQuery(query: com.google.firebase.database.core.view.QuerySpec): boolean;
						public addEventRegistration(allChildren: com.google.firebase.database.core.EventRegistration, this_: com.google.firebase.database.core.WriteTreeRef, eventRegistration: com.google.firebase.database.core.view.CacheNode): java.util.List<com.google.firebase.database.core.view.DataEvent>;
						public getQueryViews(): java.util.List<com.google.firebase.database.core.view.View>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class SyncTree {
						public static class: java.lang.Class<com.google.firebase.database.core.SyncTree>;
						public addEventRegistration(eventRegistration: com.google.firebase.database.core.EventRegistration, skipListenerSetup: boolean): java.util.List<any>;
						public removeAllEventRegistrations(query: com.google.firebase.database.core.view.QuerySpec, error: com.google.firebase.database.DatabaseError): java.util.List<com.google.firebase.database.core.view.Event>;
						public removeEventRegistration(eventRegistration: com.google.firebase.database.core.EventRegistration, skipDedup: boolean): java.util.List<com.google.firebase.database.core.view.Event>;
						public applyTaggedRangeMerges(syncPoint: com.google.firebase.database.core.Path, view: java.util.List<com.google.firebase.database.snapshot.RangeMerge>, serverNode: com.google.firebase.database.core.Tag): java.util.List<any>;
						public applyTaggedQueryOverwrite(path: com.google.firebase.database.core.Path, snap: com.google.firebase.database.snapshot.Node, tag: com.google.firebase.database.core.Tag): java.util.List<any>;
						public getServerValue(query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.snapshot.Node;
						public tagForQuery(query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.Tag;
						public applyServerRangeMerges(serverNode: com.google.firebase.database.core.Path, view: java.util.List<com.google.firebase.database.snapshot.RangeMerge>): java.util.List<any>;
						public setQueryInactive(query: com.google.firebase.database.core.view.QuerySpec): void;
						public persistenceServerCache(query: com.google.firebase.database.Query): com.google.firebase.database.DataSnapshot;
						public isEmpty(): boolean;
						public removeAllWrites(): java.util.List<any>;
						public constructor(context: com.google.firebase.database.core.Context, persistenceManager: com.google.firebase.database.core.persistence.PersistenceManager, listenProvider: com.google.firebase.database.core.SyncTree.ListenProvider);
						public applyTaggedQueryMerge(path: com.google.firebase.database.core.Path, changedChildren: java.util.Map<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>, tag: com.google.firebase.database.core.Tag): java.util.List<any>;
						public addEventRegistration(eventRegistration: com.google.firebase.database.core.EventRegistration): java.util.List<any>;
						public applyServerOverwrite(path: com.google.firebase.database.core.Path, newData: com.google.firebase.database.snapshot.Node): java.util.List<any>;
						public applyTaggedListenComplete(tag: com.google.firebase.database.core.Tag): java.util.List<any>;
						public calcCompleteEventCache(relativePath: com.google.firebase.database.core.Path, this_: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public applyServerMerge(path: com.google.firebase.database.core.Path, changedChildren: java.util.Map<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>): java.util.List<any>;
						public applyUserOverwrite(path: com.google.firebase.database.core.Path, newDataUnresolved: com.google.firebase.database.snapshot.Node, newData: com.google.firebase.database.snapshot.Node, writeId: number, visible: boolean, persist: boolean): java.util.List<any>;
						public keepSynced(query: com.google.firebase.database.core.view.QuerySpec, keep: boolean): void;
						public calcCompleteEventCacheFromRoot(path: com.google.firebase.database.core.Path, writeIdsToExclude: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public keepSynced(query: com.google.firebase.database.core.view.QuerySpec, keep: boolean, skipDedup: boolean): void;
						public removeEventRegistration(eventRegistration: com.google.firebase.database.core.EventRegistration): java.util.List<com.google.firebase.database.core.view.Event>;
						public setQueryActive(query: com.google.firebase.database.core.view.QuerySpec): void;
						public applyListenComplete(path: com.google.firebase.database.core.Path): java.util.List<any>;
						public ackUserWrite(writeId: number, revert: boolean, persist: boolean, serverClock: com.google.firebase.database.core.utilities.Clock): java.util.List<any>;
						public applyUserMerge(path: com.google.firebase.database.core.Path, unresolvedChildren: com.google.firebase.database.core.CompoundWrite, children: com.google.firebase.database.core.CompoundWrite, writeId: number, persist: boolean): java.util.List<any>;
					}
					export module SyncTree {
						export class CompletionListener {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.CompletionListener>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SyncTree$CompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onListenComplete(param0: com.google.firebase.database.DatabaseError): java.util.List<any> });
							public constructor();
							public onListenComplete(param0: com.google.firebase.database.DatabaseError): java.util.List<any>;
						}
						export class KeepSyncedEventRegistration extends com.google.firebase.database.core.EventRegistration {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.KeepSyncedEventRegistration>;
							public constructor();
							public fireEvent(dataEvent: com.google.firebase.database.core.view.DataEvent): void;
							public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
							public constructor(spec: com.google.firebase.database.core.view.QuerySpec);
							public hashCode(): number;
							public isSameListener(other: com.google.firebase.database.core.EventRegistration): boolean;
							public equals(other: any): boolean;
							public respondsTo(eventType: com.google.firebase.database.core.view.Event.EventType): boolean;
							public createEvent(change: com.google.firebase.database.core.view.Change, query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
							public fireCancelEvent(error: com.google.firebase.database.DatabaseError): void;
							public clone(newQuery: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						}
						export class ListenContainer implements com.google.firebase.database.connection.ListenHashProvider, com.google.firebase.database.core.SyncTree.CompletionListener {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.ListenContainer>;
							public onListenComplete(this_: com.google.firebase.database.DatabaseError): java.util.List<any>;
							public constructor(view: com.google.firebase.database.core.SyncTree, param1: com.google.firebase.database.core.view.View);
							public onListenComplete(param0: com.google.firebase.database.DatabaseError): java.util.List<any>;
							public getSimpleHash(): string;
							public getCompoundHash(): com.google.firebase.database.connection.CompoundHash;
							public shouldIncludeCompoundHash(): boolean;
						}
						export class ListenProvider {
							public static class: java.lang.Class<com.google.firebase.database.core.SyncTree.ListenProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.SyncTree$ListenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { startListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag, param2: com.google.firebase.database.connection.ListenHashProvider, param3: com.google.firebase.database.core.SyncTree.CompletionListener): void; stopListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag): void });
							public constructor();
							public stopListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag): void;
							public startListening(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.core.Tag, param2: com.google.firebase.database.connection.ListenHashProvider, param3: com.google.firebase.database.core.SyncTree.CompletionListener): void;
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
			export module database {
				export module core {
					export class Tag {
						public static class: java.lang.Class<com.google.firebase.database.core.Tag>;
						public constructor(tagNumber: number);
						public hashCode(): number;
						public getTagNumber(): number;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ThreadBackgroundExecutor {
						public static class: java.lang.Class<com.google.firebase.database.core.ThreadBackgroundExecutor>;
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
			export module database {
				export module core {
					export class ThreadInitializer {
						public static class: java.lang.Class<com.google.firebase.database.core.ThreadInitializer>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.ThreadInitializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setName(param0: java.lang.Thread, param1: string): void; setDaemon(param0: java.lang.Thread, param1: boolean): void; setUncaughtExceptionHandler(param0: java.lang.Thread, param1: java.lang.Thread.UncaughtExceptionHandler): void; '<clinit>'(): void });
						public constructor();
						public static defaultInstance: com.google.firebase.database.core.ThreadInitializer;
						public setName(param0: java.lang.Thread, param1: string): void;
						public setUncaughtExceptionHandler(param0: java.lang.Thread, param1: java.lang.Thread.UncaughtExceptionHandler): void;
						public setDaemon(param0: java.lang.Thread, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ThreadPoolEventTarget extends com.google.firebase.database.core.EventTarget {
						public static class: java.lang.Class<com.google.firebase.database.core.ThreadPoolEventTarget>;
						public shutdown(): void;
						public postEvent(r: java.lang.Runnable): void;
						public postEvent(param0: java.lang.Runnable): void;
						public constructor(wrappedFactory: java.util.concurrent.ThreadFactory, threadInitializer: com.google.firebase.database.core.ThreadInitializer);
						public restart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class TokenProvider {
						public static class: java.lang.Class<com.google.firebase.database.core.TokenProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.core.TokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getToken(param0: boolean, param1: com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener): void; addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void; removeTokenChangeListener(param0: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void });
						public constructor();
						public removeTokenChangeListener(param0: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
						public getToken(param0: boolean, param1: com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener): void;
						public addTokenChangeListener(param0: java.util.concurrent.ExecutorService, param1: com.google.firebase.database.core.TokenProvider.TokenChangeListener): void;
					}
					export module TokenProvider {
						export class GetTokenCompletionListener {
							public static class: java.lang.Class<com.google.firebase.database.core.TokenProvider.GetTokenCompletionListener>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.TokenProvider$GetTokenCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onSuccess(param0: string): void; onError(param0: string): void });
							public constructor();
							public onError(param0: string): void;
							public onSuccess(param0: string): void;
						}
						export class TokenChangeListener {
							public static class: java.lang.Class<com.google.firebase.database.core.TokenProvider.TokenChangeListener>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.TokenProvider$TokenChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onTokenChange(param0: string): void; onTokenChange(): void });
							public constructor();
							public onTokenChange(param0: string): void;
							public onTokenChange(): void;
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
			export module database {
				export module core {
					export class UserWriteRecord {
						public static class: java.lang.Class<com.google.firebase.database.core.UserWriteRecord>;
						public constructor(writeId: number, path: com.google.firebase.database.core.Path, overwrite: com.google.firebase.database.snapshot.Node, visible: boolean);
						public isMerge(): boolean;
						public isVisible(): boolean;
						public getMerge(): com.google.firebase.database.core.CompoundWrite;
						public isOverwrite(): boolean;
						public hashCode(): number;
						public getPath(): com.google.firebase.database.core.Path;
						public getOverwrite(): com.google.firebase.database.snapshot.Node;
						public equals(o: any): boolean;
						public getWriteId(): number;
						public constructor(writeId: number, path: com.google.firebase.database.core.Path, merge: com.google.firebase.database.core.CompoundWrite);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ValidationPath {
						public static class: java.lang.Class<com.google.firebase.database.core.ValidationPath>;
						public static MAX_PATH_LENGTH_BYTES: number = 768;
						public static MAX_PATH_DEPTH: number = 32;
						public static validateWithObject(path: com.google.firebase.database.core.Path, value: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ValueEventRegistration extends com.google.firebase.database.core.EventRegistration {
						public static class: java.lang.Class<com.google.firebase.database.core.ValueEventRegistration>;
						public clone(newQuery: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.EventRegistration;
						public isSameListener(other: com.google.firebase.database.core.EventRegistration): boolean;
						public constructor();
						public equals(other: any): boolean;
						public constructor(repo: com.google.firebase.database.core.Repo, eventListener: com.google.firebase.database.ValueEventListener, spec: com.google.firebase.database.core.view.QuerySpec);
						public respondsTo(eventType: com.google.firebase.database.core.view.Event.EventType): boolean;
						public fireCancelEvent(error: com.google.firebase.database.DatabaseError): void;
						public hashCode(): number;
						public fireEvent(eventData: com.google.firebase.database.core.view.DataEvent): void;
						public createEvent(change: com.google.firebase.database.core.view.Change, query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.DataEvent;
						public getQuerySpec(): com.google.firebase.database.core.view.QuerySpec;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export abstract class ValueProvider {
						public static class: java.lang.Class<com.google.firebase.database.core.ValueProvider>;
						public node(): com.google.firebase.database.snapshot.Node;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.ValueProvider;
					}
					export module ValueProvider {
						export class DeferredValueProvider extends com.google.firebase.database.core.ValueProvider {
							public static class: java.lang.Class<com.google.firebase.database.core.ValueProvider.DeferredValueProvider>;
							public getImmediateChild(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.ValueProvider;
							public node(): com.google.firebase.database.snapshot.Node;
						}
						export class ExistingValueProvider extends com.google.firebase.database.core.ValueProvider {
							public static class: java.lang.Class<com.google.firebase.database.core.ValueProvider.ExistingValueProvider>;
							public getImmediateChild(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.ValueProvider;
							public node(): com.google.firebase.database.snapshot.Node;
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
			export module database {
				export module core {
					export class WriteTree {
						public static class: java.lang.Class<com.google.firebase.database.core.WriteTree>;
						public removeWrite(currentWrite: number): boolean;
						public constructor();
						public shadowingWrite(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public addMerge(path: com.google.firebase.database.core.Path, changedChildren: com.google.firebase.database.core.CompoundWrite, writeId: java.lang.Long): void;
						public calcCompleteEventCache(treePath: com.google.firebase.database.core.Path, completeServerCache: com.google.firebase.database.snapshot.Node, writeIdsToExclude: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public addOverwrite(path: com.google.firebase.database.core.Path, snap: com.google.firebase.database.snapshot.Node, writeId: java.lang.Long, visible: boolean): void;
						public calcCompleteChild(this_: com.google.firebase.database.core.Path, treePath: com.google.firebase.database.snapshot.ChildKey, childKey: com.google.firebase.database.core.view.CacheNode): com.google.firebase.database.snapshot.Node;
						public childWrites(path: com.google.firebase.database.core.Path): com.google.firebase.database.core.WriteTreeRef;
						public getCompleteWriteData(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(treePath: com.google.firebase.database.core.Path, completeServerCache: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(layeredCache: com.google.firebase.database.core.Path, subMerge: com.google.firebase.database.snapshot.Node, shadowingNode: java.util.List<java.lang.Long>, filter: boolean): com.google.firebase.database.snapshot.Node;
						public getWrite(this_: number): com.google.firebase.database.core.UserWriteRecord;
						public purgeAllWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
						public calcEventCacheAfterServerOverwrite(this_: com.google.firebase.database.core.Path, treePath: com.google.firebase.database.core.Path, childPath: com.google.firebase.database.snapshot.Node, existingEventSnap: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public calcNextNodeAfterPost(toIterate: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node, this_: com.google.firebase.database.snapshot.NamedNode, treePath: boolean, completeServerData: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.NamedNode;
						public calcCompleteEventChildren(node: com.google.firebase.database.core.Path, entry: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class WriteTreeRef {
						public static class: java.lang.Class<com.google.firebase.database.core.WriteTreeRef>;
						public shadowingWrite(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public calcEventCacheAfterServerOverwrite(path: com.google.firebase.database.core.Path, existingEventSnap: com.google.firebase.database.snapshot.Node, existingServerSnap: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public child(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.WriteTreeRef;
						public calcNextNodeAfterPost(completeServerData: com.google.firebase.database.snapshot.Node, startPost: com.google.firebase.database.snapshot.NamedNode, reverse: boolean, index: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.NamedNode;
						public calcCompleteChild(childKey: com.google.firebase.database.snapshot.ChildKey, existingServerCache: com.google.firebase.database.core.view.CacheNode): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(completeServerCache: com.google.firebase.database.snapshot.Node, writeIdsToExclude: java.util.List<java.lang.Long>, includeHiddenWrites: boolean): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(completeServerCache: com.google.firebase.database.snapshot.Node, writeIdsToExclude: java.util.List<java.lang.Long>): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventChildren(completeServerChildren: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public calcCompleteEventCache(completeServerCache: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public constructor(path: com.google.firebase.database.core.Path, writeTree: com.google.firebase.database.core.WriteTree);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export class ZombieEventManager extends com.google.firebase.database.core.EventRegistrationZombieListener {
						public static class: java.lang.Class<com.google.firebase.database.core.ZombieEventManager>;
						public zombifyForRemove(i: com.google.firebase.database.core.EventRegistration): void;
						public onZombied(zombiedInstance: com.google.firebase.database.core.EventRegistration): void;
						public recordEventRegistration(registrationList: com.google.firebase.database.core.EventRegistration): void;
						public static getInstance(): com.google.firebase.database.core.ZombieEventManager;
						public onZombied(param0: com.google.firebase.database.core.EventRegistration): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module core {
					export module operation {
						export class AckUserWrite extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.AckUserWrite>;
							public constructor(path: com.google.firebase.database.core.Path, affectedTree: com.google.firebase.database.core.utilities.ImmutableTree<java.lang.Boolean>, revert: boolean);
							public operationForChild(this_: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public isRevert(): boolean;
							public toString(): string;
							public constructor(type: com.google.firebase.database.core.operation.Operation.OperationType, source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path);
							public getAffectedTree(): com.google.firebase.database.core.utilities.ImmutableTree<java.lang.Boolean>;
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
			export module database {
				export module core {
					export module operation {
						export class ListenComplete extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.ListenComplete>;
							public constructor(source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path);
							public operationForChild(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public toString(): string;
							public constructor(type: com.google.firebase.database.core.operation.Operation.OperationType, source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path);
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
			export module database {
				export module core {
					export module operation {
						export class Merge extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.Merge>;
							public constructor(source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path, children: com.google.firebase.database.core.CompoundWrite);
							public operationForChild(this_: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public toString(): string;
							public constructor(type: com.google.firebase.database.core.operation.Operation.OperationType, source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path);
							public getChildren(): com.google.firebase.database.core.CompoundWrite;
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
			export module database {
				export module core {
					export module operation {
						export abstract class Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.Operation>;
							public type: com.google.firebase.database.core.operation.Operation.OperationType;
							public source: com.google.firebase.database.core.operation.OperationSource;
							public path: com.google.firebase.database.core.Path;
							public operationForChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public getPath(): com.google.firebase.database.core.Path;
							public getSource(): com.google.firebase.database.core.operation.OperationSource;
							public constructor(type: com.google.firebase.database.core.operation.Operation.OperationType, source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path);
							public getType(): com.google.firebase.database.core.operation.Operation.OperationType;
						}
						export module Operation {
							export class OperationType {
								public static class: java.lang.Class<com.google.firebase.database.core.operation.Operation.OperationType>;
								public static Overwrite: com.google.firebase.database.core.operation.Operation.OperationType;
								public static Merge: com.google.firebase.database.core.operation.Operation.OperationType;
								public static AckUserWrite: com.google.firebase.database.core.operation.Operation.OperationType;
								public static ListenComplete: com.google.firebase.database.core.operation.Operation.OperationType;
								public static valueOf(name: string): com.google.firebase.database.core.operation.Operation.OperationType;
								public static values(): androidNative.Array<com.google.firebase.database.core.operation.Operation.OperationType>;
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
			export module database {
				export module core {
					export module operation {
						export class OperationSource {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.OperationSource>;
							public static USER: com.google.firebase.database.core.operation.OperationSource;
							public static SERVER: com.google.firebase.database.core.operation.OperationSource;
							public constructor(source: com.google.firebase.database.core.operation.OperationSource.Source, queryParams: com.google.firebase.database.core.view.QueryParams, tagged: boolean);
							public static forServerTaggedQuery(queryParams: com.google.firebase.database.core.view.QueryParams): com.google.firebase.database.core.operation.OperationSource;
							public isFromUser(): boolean;
							public getQueryParams(): com.google.firebase.database.core.view.QueryParams;
							public toString(): string;
							public isTagged(): boolean;
							public isFromServer(): boolean;
						}
						export module OperationSource {
							export class Source {
								public static class: java.lang.Class<com.google.firebase.database.core.operation.OperationSource.Source>;
								public static User: com.google.firebase.database.core.operation.OperationSource.Source;
								public static Server: com.google.firebase.database.core.operation.OperationSource.Source;
								public static valueOf(name: string): com.google.firebase.database.core.operation.OperationSource.Source;
								public static values(): androidNative.Array<com.google.firebase.database.core.operation.OperationSource.Source>;
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
			export module database {
				export module core {
					export module operation {
						export class Overwrite extends com.google.firebase.database.core.operation.Operation {
							public static class: java.lang.Class<com.google.firebase.database.core.operation.Overwrite>;
							public operationForChild(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.operation.Operation;
							public toString(): string;
							public getSnapshot(): com.google.firebase.database.snapshot.Node;
							public constructor(source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path, snapshot: com.google.firebase.database.snapshot.Node);
							public constructor(type: com.google.firebase.database.core.operation.Operation.OperationType, source: com.google.firebase.database.core.operation.OperationSource, path: com.google.firebase.database.core.Path);
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
			export module database {
				export module core {
					export module persistence {
						export class CachePolicy {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.CachePolicy>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.persistence.CachePolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { shouldPrune(param0: number, param1: number): boolean; shouldCheckCacheSize(param0: number): boolean; getPercentOfQueriesToPruneAtOnce(): number; getMaxNumberOfQueriesToKeep(): number; '<clinit>'(): void });
							public constructor();
							public static NONE: com.google.firebase.database.core.persistence.CachePolicy;
							public shouldCheckCacheSize(param0: number): boolean;
							public shouldPrune(param0: number, param1: number): boolean;
							public getMaxNumberOfQueriesToKeep(): number;
							public getPercentOfQueriesToPruneAtOnce(): number;
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
			export module database {
				export module core {
					export module persistence {
						export class DefaultPersistenceManager extends com.google.firebase.database.core.persistence.PersistenceManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.DefaultPersistenceManager>;
							public serverCache(trackedQuery: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public setQueryComplete(query: com.google.firebase.database.core.view.QuerySpec): void;
							public setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public saveUserMerge(path: com.google.firebase.database.core.Path, children: com.google.firebase.database.core.CompoundWrite, writeId: number): void;
							public removeUserWrite(writeId: number): void;
							public setTrackedQueryKeys(query: com.google.firebase.database.core.view.QuerySpec, keys: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public runInTransaction(param0: java.util.concurrent.Callable<any>): any;
							public updateServerCache(query: com.google.firebase.database.core.view.QuerySpec, node: com.google.firebase.database.snapshot.Node): void;
							public updateServerCache(path: com.google.firebase.database.core.Path, children: com.google.firebase.database.core.CompoundWrite): void;
							public constructor(ctx: com.google.firebase.database.core.Context, engine: com.google.firebase.database.core.persistence.PersistenceStorageEngine, cachePolicy: com.google.firebase.database.core.persistence.CachePolicy);
							public serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public constructor(ctx: com.google.firebase.database.core.Context, engine: com.google.firebase.database.core.persistence.PersistenceStorageEngine, cachePolicy: com.google.firebase.database.core.persistence.CachePolicy, clock: com.google.firebase.database.core.utilities.Clock);
							public runInTransaction(e: java.util.concurrent.Callable<any>): any;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public setQueryActive(query: com.google.firebase.database.core.view.QuerySpec): void;
							public updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
							public saveUserOverwrite(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node, writeId: number): void;
							public applyUserWriteToServerCache(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node): void;
							public removeAllUserWrites(): void;
							public updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public updateTrackedQueryKeys(query: com.google.firebase.database.core.view.QuerySpec, added: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, removed: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public setQueryInactive(query: com.google.firebase.database.core.view.QuerySpec): void;
							public setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public removeUserWrite(param0: number): void;
							public applyUserWriteToServerCache(writeNode: com.google.firebase.database.core.Path, write: com.google.firebase.database.core.CompoundWrite): void;
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
			export module database {
				export module core {
					export module persistence {
						export class LRUCachePolicy extends com.google.firebase.database.core.persistence.CachePolicy {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.LRUCachePolicy>;
							public maxSizeBytes: number;
							public shouldPrune(currentSizeBytes: number, countOfPrunableQueries: number): boolean;
							public shouldCheckCacheSize(serverUpdatesSinceLastCheck: number): boolean;
							public shouldCheckCacheSize(param0: number): boolean;
							public shouldPrune(param0: number, param1: number): boolean;
							public constructor(maxSizeBytes: number);
							public getMaxNumberOfQueriesToKeep(): number;
							public getPercentOfQueriesToPruneAtOnce(): number;
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
			export module database {
				export module core {
					export module persistence {
						export class NoopPersistenceManager extends com.google.firebase.database.core.persistence.PersistenceManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.NoopPersistenceManager>;
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public setQueryComplete(query: com.google.firebase.database.core.view.QuerySpec): void;
							public setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public saveUserMerge(path: com.google.firebase.database.core.Path, children: com.google.firebase.database.core.CompoundWrite, writeId: number): void;
							public removeUserWrite(writeId: number): void;
							public setTrackedQueryKeys(query: com.google.firebase.database.core.view.QuerySpec, keys: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public runInTransaction(param0: java.util.concurrent.Callable<any>): any;
							public updateServerCache(query: com.google.firebase.database.core.view.QuerySpec, node: com.google.firebase.database.snapshot.Node): void;
							public updateServerCache(path: com.google.firebase.database.core.Path, children: com.google.firebase.database.core.CompoundWrite): void;
							public serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public constructor();
							public applyUserWriteToServerCache(path: com.google.firebase.database.core.Path, merge: com.google.firebase.database.core.CompoundWrite): void;
							public serverCache(query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public setQueryActive(query: com.google.firebase.database.core.view.QuerySpec): void;
							public updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
							public saveUserOverwrite(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node, writeId: number): void;
							public applyUserWriteToServerCache(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node): void;
							public removeAllUserWrites(): void;
							public updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public updateTrackedQueryKeys(query: com.google.firebase.database.core.view.QuerySpec, added: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, removed: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public setQueryInactive(query: com.google.firebase.database.core.view.QuerySpec): void;
							public runInTransaction(this_: java.util.concurrent.Callable<any>): any;
							public setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public removeUserWrite(param0: number): void;
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
			export module database {
				export module core {
					export module persistence {
						export class PersistenceManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.PersistenceManager>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.persistence.PersistenceManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
								saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
								removeUserWrite(param0: number): void;
								removeAllUserWrites(): void;
								applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
								applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
								loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
								serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
								updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
								updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
								setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
								setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
								setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
								setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								runInTransaction(param0: java.util.concurrent.Callable<any>): any;
							});
							public constructor();
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public setQueryComplete(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public applyUserWriteToServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public updateServerCache(param0: com.google.firebase.database.core.view.QuerySpec, param1: com.google.firebase.database.snapshot.Node): void;
							public setQueryActive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public runInTransaction(param0: java.util.concurrent.Callable<any>): any;
							public removeAllUserWrites(): void;
							public updateServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public setQueryInactive(param0: com.google.firebase.database.core.view.QuerySpec): void;
							public serverCache(param0: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.view.CacheNode;
							public setTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public removeUserWrite(param0: number): void;
							public updateTrackedQueryKeys(param0: com.google.firebase.database.core.view.QuerySpec, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
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
			export module database {
				export module core {
					export module persistence {
						export class PersistenceStorageEngine {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.PersistenceStorageEngine>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.persistence.PersistenceStorageEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
								saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
								removeUserWrite(param0: number): void;
								loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
								removeAllUserWrites(): void;
								serverCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
								overwriteServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
								mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
								mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
								serverCacheEstimatedSizeInBytes(): number;
								saveTrackedQuery(param0: com.google.firebase.database.core.persistence.TrackedQuery): void;
								deleteTrackedQuery(param0: number): void;
								loadTrackedQueries(): java.util.List<com.google.firebase.database.core.persistence.TrackedQuery>;
								resetPreviouslyActiveTrackedQueries(param0: number): void;
								saveTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								updateTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
								loadTrackedQueryKeys(param0: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
								loadTrackedQueryKeys(param0: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
								pruneCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.persistence.PruneForest): void;
								beginTransaction(): void;
								endTransaction(): void;
								setTransactionSuccessful(): void;
								close(): void;
							});
							public constructor();
							public close(): void;
							public saveUserMerge(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite, param2: number): void;
							public pruneCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.persistence.PruneForest): void;
							public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public resetPreviouslyActiveTrackedQueries(param0: number): void;
							public loadUserWrites(): java.util.List<com.google.firebase.database.core.UserWriteRecord>;
							public saveUserOverwrite(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node, param2: number): void;
							public saveTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public serverCache(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
							public mergeIntoServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.core.CompoundWrite): void;
							public loadTrackedQueryKeys(param0: number): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
							public endTransaction(): void;
							public removeAllUserWrites(): void;
							public beginTransaction(): void;
							public overwriteServerCache(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): void;
							public updateTrackedQueryKeys(param0: number, param1: java.util.Set<com.google.firebase.database.snapshot.ChildKey>, param2: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): void;
							public loadTrackedQueries(): java.util.List<com.google.firebase.database.core.persistence.TrackedQuery>;
							public loadTrackedQueryKeys(param0: java.util.Set<java.lang.Long>): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
							public deleteTrackedQuery(param0: number): void;
							public removeUserWrite(param0: number): void;
							public serverCacheEstimatedSizeInBytes(): number;
							public saveTrackedQuery(param0: com.google.firebase.database.core.persistence.TrackedQuery): void;
							public setTransactionSuccessful(): void;
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
			export module database {
				export module core {
					export module persistence {
						export class PruneForest {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.PruneForest>;
							public constructor();
							public foldKeptNodes(startValue: any, treeVisitor: com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any, any>): any;
							public prune(this_: com.google.firebase.database.core.Path): com.google.firebase.database.core.persistence.PruneForest;
							public keep(this_: com.google.firebase.database.core.Path): com.google.firebase.database.core.persistence.PruneForest;
							public hashCode(): number;
							public prunesAnything(): boolean;
							public toString(): string;
							public keepAll(path: com.google.firebase.database.core.Path, children: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): com.google.firebase.database.core.persistence.PruneForest;
							public pruneAll(path: com.google.firebase.database.core.Path, children: java.util.Set<com.google.firebase.database.snapshot.ChildKey>): com.google.firebase.database.core.persistence.PruneForest;
							public shouldPruneUnkeptDescendants(path: com.google.firebase.database.core.Path): boolean;
							public shouldKeep(path: com.google.firebase.database.core.Path): boolean;
							public child(key: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.persistence.PruneForest;
							public equals(o: any): boolean;
							public child(path: com.google.firebase.database.core.Path): com.google.firebase.database.core.persistence.PruneForest;
							public affectsPath(path: com.google.firebase.database.core.Path): boolean;
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
			export module database {
				export module core {
					export module persistence {
						export class TrackedQuery {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.TrackedQuery>;
							public id: number;
							public querySpec: com.google.firebase.database.core.view.QuerySpec;
							public lastUse: number;
							public complete: boolean;
							public active: boolean;
							public updateLastUse(lastUse: number): com.google.firebase.database.core.persistence.TrackedQuery;
							public setComplete(): com.google.firebase.database.core.persistence.TrackedQuery;
							public hashCode(): number;
							public equals(o: any): boolean;
							public toString(): string;
							public setActiveState(isActive: boolean): com.google.firebase.database.core.persistence.TrackedQuery;
							public constructor(id: number, querySpec: com.google.firebase.database.core.view.QuerySpec, lastUse: number, complete: boolean, active: boolean);
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
			export module database {
				export module core {
					export module persistence {
						export class TrackedQueryManager {
							public static class: java.lang.Class<com.google.firebase.database.core.persistence.TrackedQueryManager>;
							public findTrackedQuery(query: com.google.firebase.database.core.view.QuerySpec): com.google.firebase.database.core.persistence.TrackedQuery;
							public setQueryActive(query: com.google.firebase.database.core.view.QuerySpec): void;
							public getKnownCompleteChildren(childTree: com.google.firebase.database.core.Path): java.util.Set<com.google.firebase.database.snapshot.ChildKey>;
							public isQueryComplete(this_: com.google.firebase.database.core.view.QuerySpec): boolean;
							public ensureCompleteTrackedQuery(trackedQuery: com.google.firebase.database.core.Path): void;
							public setQueryInactive(query: com.google.firebase.database.core.view.QuerySpec): void;
							public countOfPrunableQueries(): number;
							public constructor(this_: com.google.firebase.database.core.persistence.PersistenceStorageEngine, storageLayer: com.google.firebase.database.logging.LogWrapper, logger: com.google.firebase.database.core.utilities.Clock);
							public pruneOldQueries(i: com.google.firebase.database.core.persistence.CachePolicy): com.google.firebase.database.core.persistence.PruneForest;
							public hasActiveDefaultQuery(path: com.google.firebase.database.core.Path): boolean;
							public setQueriesComplete(path: com.google.firebase.database.core.Path): void;
							public removeTrackedQuery(query: com.google.firebase.database.core.view.QuerySpec): void;
							public setQueryCompleteIfExists(query: com.google.firebase.database.core.view.QuerySpec): void;
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
			export module database {
				export module core {
					export module utilities {
						export class Clock {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Clock>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.utilities.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { millis(): number });
							public constructor();
							public millis(): number;
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
			export module database {
				export module core {
					export module utilities {
						export class DefaultClock extends com.google.firebase.database.core.utilities.Clock {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.DefaultClock>;
							public constructor();
							public millis(): number;
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
			export module database {
				export module core {
					export module utilities {
						export abstract class DefaultRunLoop extends com.google.firebase.database.core.RunLoop {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.DefaultRunLoop>;
							public constructor();
							public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.ScheduledFuture<any>;
							public getThreadFactory(): java.util.concurrent.ThreadFactory;
							public getThreadInitializer(): com.google.firebase.database.core.ThreadInitializer;
							public scheduleNow(runnable: java.lang.Runnable): void;
							public scheduleNow(param0: java.lang.Runnable): void;
							public static messageForException(t: java.lang.Throwable): string;
							public handleException(param0: java.lang.Throwable): void;
							public getExecutorService(): java.util.concurrent.ScheduledExecutorService;
							public restart(): void;
							public shutdown(): void;
							public schedule(runnable: java.lang.Runnable, milliseconds: number): java.util.concurrent.ScheduledFuture<any>;
						}
						export module DefaultRunLoop {
							export class FirebaseThreadFactory {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.DefaultRunLoop.FirebaseThreadFactory>;
								public newThread(r: java.lang.Runnable): java.lang.Thread;
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
			export module database {
				export module core {
					export module utilities {
						export class ImmutableTree<T> extends java.lang.Iterable<java.util.Map.Entry<com.google.firebase.database.core.Path, any>> {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.ImmutableTree<any>>;
							public getValue(): any;
							public getChild(child: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public hashCode(): number;
							public constructor(value: any);
							public subtree(childTree: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public toString(): string;
							public getChildren(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.core.utilities.ImmutableTree<any>>;
							public fold(accum: any, visitor: com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any, any>): any;
							public values(): java.util.Collection<any>;
							public static emptyInstance(): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public foreach(visitor: com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any, java.lang.Void>): void;
							public constructor(value: any, children: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.core.utilities.ImmutableTree<any>>);
							public set(child: com.google.firebase.database.core.Path, newChild: any): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public remove(newChild: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public equals(o: any): boolean;
							public findRootMostMatchingPath(front: com.google.firebase.database.core.Path, child: com.google.firebase.database.core.utilities.Predicate<any>): com.google.firebase.database.core.Path;
							public get(child: com.google.firebase.database.core.Path): any;
							public rootMostValueMatching(currentTree: com.google.firebase.database.core.Path, this_: com.google.firebase.database.core.utilities.Predicate<any>): any;
							public leafMostValueMatching(this_: com.google.firebase.database.core.Path, path: com.google.firebase.database.core.utilities.Predicate<any>): any;
							public iterator(): java.util.Iterator<java.util.Map.Entry<com.google.firebase.database.core.Path, any>>;
							public findRootMostPathWithValue(relativePath: com.google.firebase.database.core.Path): com.google.firebase.database.core.Path;
							public rootMostValue(relativePath: com.google.firebase.database.core.Path): any;
							public leafMostValue(relativePath: com.google.firebase.database.core.Path): any;
							public setTree(front: com.google.firebase.database.core.Path, child: com.google.firebase.database.core.utilities.ImmutableTree<any>): com.google.firebase.database.core.utilities.ImmutableTree<any>;
							public isEmpty(): boolean;
							public containsMatchingValue(this_: com.google.firebase.database.core.utilities.Predicate<any>): boolean;
						}
						export module ImmutableTree {
							export class TreeVisitor<T, R> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor<any, any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.utilities.ImmutableTree$TreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onNodeValue(param0: com.google.firebase.database.core.Path, param1: T, param2: R): R });
								public constructor();
								public onNodeValue(param0: com.google.firebase.database.core.Path, param1: T, param2: R): R;
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
			export module database {
				export module core {
					export module utilities {
						export class NodeSizeEstimator {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.NodeSizeEstimator>;
							public constructor();
							public static estimateSerializedNodeSize(entry: com.google.firebase.database.snapshot.Node): number;
							public static nodeCount(entry: com.google.firebase.database.snapshot.Node): number;
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
			export module database {
				export module core {
					export module utilities {
						export class OffsetClock extends com.google.firebase.database.core.utilities.Clock {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.OffsetClock>;
							public setOffset(offset: number): void;
							public constructor(baseClock: com.google.firebase.database.core.utilities.Clock, offset: number);
							public millis(): number;
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
			export module database {
				export module core {
					export module utilities {
						export class Pair<T, U> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Pair<any, any>>;
							public constructor(first: T, second: U);
							public hashCode(): number;
							public equals(o: any): boolean;
							public toString(): string;
							public getSecond(): U;
							public getFirst(): T;
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
			export module database {
				export module core {
					export module utilities {
						export class ParsedUrl {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.ParsedUrl>;
							public repoInfo: com.google.firebase.database.core.RepoInfo;
							public path: com.google.firebase.database.core.Path;
							public constructor();
							public hashCode(): number;
							public equals(o: any): boolean;
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
			export module database {
				export module core {
					export module utilities {
						export class Predicate<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Predicate<any>>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.utilities.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { evaluate(param0: T): boolean; '<clinit>'(): void });
							public constructor();
							public static TRUE: com.google.firebase.database.core.utilities.Predicate<any>;
							public evaluate(param0: T): boolean;
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
			export module database {
				export module core {
					export module utilities {
						export class PushIdGenerator {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.PushIdGenerator>;
							public constructor();
							public static generatePushChildName(i: number): string;
							public static successor(key: string): string;
							public static predecessor(key: string): string;
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
			export module database {
				export module core {
					export module utilities {
						export class Tree<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Tree<any>>;
							public constructor(name: com.google.firebase.database.snapshot.ChildKey, parent: com.google.firebase.database.core.utilities.Tree<T>, node: com.google.firebase.database.core.utilities.TreeNode<T>);
							public constructor();
							public forEachDescendant(visitor: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>, includeSelf: boolean, childrenFirst: boolean): void;
							public forEachAncestor(filter: com.google.firebase.database.core.utilities.Tree.TreeFilter<T>): boolean;
							public forEachDescendant(visitor: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>): void;
							public toString(): string;
							public subTree(this_: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.Tree<T>;
							public getParent(): com.google.firebase.database.core.utilities.Tree<T>;
							public forEachChild(subTree: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>): void;
							public getValue(): T;
							public getPath(): com.google.firebase.database.core.Path;
							public lastNodeOnPath(this_: com.google.firebase.database.core.Path): com.google.firebase.database.core.utilities.TreeNode<T>;
							public forEachDescendant(visitor: com.google.firebase.database.core.utilities.Tree.TreeVisitor<T>, includeSelf: boolean): void;
							public setValue(value: T): void;
							public getName(): com.google.firebase.database.snapshot.ChildKey;
							public hasChildren(): boolean;
							public isEmpty(): boolean;
							public forEachAncestor(filter: com.google.firebase.database.core.utilities.Tree.TreeFilter<T>, includeSelf: boolean): boolean;
						}
						export module Tree {
							export class TreeFilter<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.Tree.TreeFilter<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.utilities.Tree$TreeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { filterTreeNode(param0: com.google.firebase.database.core.utilities.Tree<T>): boolean });
								public constructor();
								public filterTreeNode(param0: com.google.firebase.database.core.utilities.Tree<T>): boolean;
							}
							export class TreeVisitor<T> extends java.lang.Object {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.Tree.TreeVisitor<any>>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.utilities.Tree$TreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { visitTree(param0: com.google.firebase.database.core.utilities.Tree<T>): void });
								public constructor();
								public visitTree(param0: com.google.firebase.database.core.utilities.Tree<T>): void;
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
			export module database {
				export module core {
					export module utilities {
						export class TreeNode<T> extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.TreeNode<any>>;
							public children: java.util.Map<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.core.utilities.TreeNode<T>>;
							public value: T;
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
			export module database {
				export module core {
					export module utilities {
						export class Utilities {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Utilities>;
							public constructor();
							public static castOrNull(o: any, clazz: java.lang.Class<any>): any;
							public static sha1HexDigest(md: string): string;
							public static compareLongs(i: number, j: number): number;
							public static parseUrl(parts: string): com.google.firebase.database.core.utilities.ParsedUrl;
							public static wrapOnComplete(source: com.google.firebase.database.DatabaseReference.CompletionListener): com.google.firebase.database.core.utilities.Pair<com.google.android.gms.tasks.Task<java.lang.Void>, com.google.firebase.database.DatabaseReference.CompletionListener>;
							public static tryParseInt(c: string): java.lang.Integer;
							public static doubleToHashString(byteValue: number): string;
							public static hardAssert(condition: boolean): void;
							public static compareInts(i: number, j: number): number;
							public static stringHashV2Representation(value: string): string;
							public static getOrNull(o: any, key: string, clazz: java.lang.Class<any>): any;
							public static hardAssert(condition: boolean, message: string): void;
							public static equals(left: any, right: any): boolean;
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
			export module database {
				export module core {
					export module utilities {
						export class Validation {
							public static class: java.lang.Class<com.google.firebase.database.core.utilities.Validation>;
							public constructor();
							public static validateWritablePath(path: com.google.firebase.database.core.Path): void;
							public static validatePathString(pathString: string): void;
							public static validateWritableKey(key: string): void;
							public static validateNullableKey(key: string): void;
							public static parseAndValidateUpdate(parsedValue: com.google.firebase.database.core.Path, updatePath: java.util.Map<string, any>): java.util.Map<com.google.firebase.database.core.Path, com.google.firebase.database.snapshot.Node>;
							public static validateRootPathString(pathString: string): void;
							public static validateWritableObject(entry: any): void;
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
			export module database {
				export module core {
					export module utilities {
						export module encoding {
							export class CustomClassMapper {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.encoding.CustomClassMapper>;
								public static convertToPlainJavaTypes(object: any): any;
								public constructor();
								public static convertToCustomClass(object: any, clazz: java.lang.Class<any>): any;
								public static convertToCustomClass(parameterizedType: any, type: com.google.firebase.database.GenericTypeIndicator<any>): any;
								public static convertToPlainJavaTypes(update: java.util.Map<string, any>): java.util.Map<string, any>;
							}
							export module CustomClassMapper {
								export class BeanMapper<T> extends java.lang.Object {
									public static class: java.lang.Class<com.google.firebase.database.core.utilities.encoding.CustomClassMapper.BeanMapper<any>>;
									public deserialize(e: java.util.Map<string, any>, param1: java.util.Map<java.lang.reflect.TypeVariable<java.lang.Class<T>>, java.lang.reflect.Type>): T;
									public constructor(propertyName: java.lang.Class<T>);
									public serialize(e: T): java.util.Map<string, any>;
									public deserialize(values: java.util.Map<string, any>): T;
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
			export module database {
				export module core {
					export module utilities {
						export module tuple {
							export class NameAndPriority extends java.lang.Comparable<com.google.firebase.database.core.utilities.tuple.NameAndPriority> {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.tuple.NameAndPriority>;
								public getPriority(): com.google.firebase.database.snapshot.Node;
								public compareTo(o: com.google.firebase.database.core.utilities.tuple.NameAndPriority): number;
								public getName(): com.google.firebase.database.snapshot.ChildKey;
								public constructor(name: com.google.firebase.database.snapshot.ChildKey, priority: com.google.firebase.database.snapshot.Node);
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
			export module database {
				export module core {
					export module utilities {
						export module tuple {
							export class NodeAndPath {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.tuple.NodeAndPath>;
								public constructor(node: com.google.firebase.database.snapshot.Node, path: com.google.firebase.database.core.Path);
								public getNode(): com.google.firebase.database.snapshot.Node;
								public setNode(node: com.google.firebase.database.snapshot.Node): void;
								public getPath(): com.google.firebase.database.core.Path;
								public setPath(path: com.google.firebase.database.core.Path): void;
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
			export module database {
				export module core {
					export module utilities {
						export module tuple {
							export class PathAndId {
								public static class: java.lang.Class<com.google.firebase.database.core.utilities.tuple.PathAndId>;
								public getId(): number;
								public constructor(path: com.google.firebase.database.core.Path, id: number);
								public getPath(): com.google.firebase.database.core.Path;
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
			export module database {
				export module core {
					export module view {
						export class CacheNode {
							public static class: java.lang.Class<com.google.firebase.database.core.view.CacheNode>;
							public constructor(node: com.google.firebase.database.snapshot.IndexedNode, fullyInitialized: boolean, filtered: boolean);
							public isFullyInitialized(): boolean;
							public isFiltered(): boolean;
							public isCompleteForChild(key: com.google.firebase.database.snapshot.ChildKey): boolean;
							public getIndexedNode(): com.google.firebase.database.snapshot.IndexedNode;
							public isCompleteForPath(this_: com.google.firebase.database.core.Path): boolean;
							public getNode(): com.google.firebase.database.snapshot.Node;
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
			export module database {
				export module core {
					export module view {
						export class CancelEvent extends com.google.firebase.database.core.view.Event {
							public static class: java.lang.Class<com.google.firebase.database.core.view.CancelEvent>;
							public getPath(): com.google.firebase.database.core.Path;
							public constructor(eventRegistration: com.google.firebase.database.core.EventRegistration, error: com.google.firebase.database.DatabaseError, path: com.google.firebase.database.core.Path);
							public toString(): string;
							public fire(): void;
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
			export module database {
				export module core {
					export module view {
						export class Change {
							public static class: java.lang.Class<com.google.firebase.database.core.view.Change>;
							public static valueChange(snapshot: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public static childRemovedChange(childKey: com.google.firebase.database.snapshot.ChildKey, snapshot: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public getOldIndexedNode(): com.google.firebase.database.snapshot.IndexedNode;
							public getEventType(): com.google.firebase.database.core.view.Event.EventType;
							public static childAddedChange(childKey: com.google.firebase.database.snapshot.ChildKey, snapshot: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public getIndexedNode(): com.google.firebase.database.snapshot.IndexedNode;
							public static childChangedChange(childKey: com.google.firebase.database.snapshot.ChildKey, newSnapshot: com.google.firebase.database.snapshot.IndexedNode, oldSnapshot: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public static childAddedChange(childKey: com.google.firebase.database.snapshot.ChildKey, snapshot: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public toString(): string;
							public getPrevName(): com.google.firebase.database.snapshot.ChildKey;
							public static childMovedChange(childKey: com.google.firebase.database.snapshot.ChildKey, snapshot: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public changeWithPrevName(prevName: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.view.Change;
							public getChildKey(): com.google.firebase.database.snapshot.ChildKey;
							public static childChangedChange(childKey: com.google.firebase.database.snapshot.ChildKey, newSnapshot: com.google.firebase.database.snapshot.Node, oldSnapshot: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.Change;
							public static childRemovedChange(childKey: com.google.firebase.database.snapshot.ChildKey, snapshot: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
							public static childMovedChange(childKey: com.google.firebase.database.snapshot.ChildKey, snapshot: com.google.firebase.database.snapshot.IndexedNode): com.google.firebase.database.core.view.Change;
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
			export module database {
				export module core {
					export module view {
						export class DataEvent extends com.google.firebase.database.core.view.Event {
							public static class: java.lang.Class<com.google.firebase.database.core.view.DataEvent>;
							public getPreviousName(): string;
							public getEventType(): com.google.firebase.database.core.view.Event.EventType;
							public getPath(): com.google.firebase.database.core.Path;
							public constructor(eventType: com.google.firebase.database.core.view.Event.EventType, eventRegistration: com.google.firebase.database.core.EventRegistration, snapshot: com.google.firebase.database.DataSnapshot, prevName: string);
							public getSnapshot(): com.google.firebase.database.DataSnapshot;
							public toString(): string;
							public fire(): void;
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
			export module database {
				export module core {
					export module view {
						export class Event {
							public static class: java.lang.Class<com.google.firebase.database.core.view.Event>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.core.view.Event interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { getPath(): com.google.firebase.database.core.Path; fire(): void; toString(): string });
							public constructor();
							public getPath(): com.google.firebase.database.core.Path;
							public toString(): string;
							public fire(): void;
						}
						export module Event {
							export class EventType {
								public static class: java.lang.Class<com.google.firebase.database.core.view.Event.EventType>;
								public static CHILD_REMOVED: com.google.firebase.database.core.view.Event.EventType;
								public static CHILD_ADDED: com.google.firebase.database.core.view.Event.EventType;
								public static CHILD_MOVED: com.google.firebase.database.core.view.Event.EventType;
								public static CHILD_CHANGED: com.google.firebase.database.core.view.Event.EventType;
								public static VALUE: com.google.firebase.database.core.view.Event.EventType;
								public static valueOf(name: string): com.google.firebase.database.core.view.Event.EventType;
								public static values(): androidNative.Array<com.google.firebase.database.core.view.Event.EventType>;
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
			export module database {
				export module core {
					export module view {
						export class EventGenerator {
							public static class: java.lang.Class<com.google.firebase.database.core.view.EventGenerator>;
							public constructor(query: com.google.firebase.database.core.view.QuerySpec);
							public generateEventsForChanges(this_: java.util.List<com.google.firebase.database.core.view.Change>, changes: com.google.firebase.database.snapshot.IndexedNode, eventCache: java.util.List<com.google.firebase.database.core.EventRegistration>): java.util.List<com.google.firebase.database.core.view.DataEvent>;
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
			export module database {
				export module core {
					export module view {
						export class EventRaiser {
							public static class: java.lang.Class<com.google.firebase.database.core.view.EventRaiser>;
							public constructor(ctx: com.google.firebase.database.core.Context);
							public raiseEvents(events: java.util.List<any>): void;
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
			export module database {
				export module core {
					export module view {
						export class QueryParams {
							public static class: java.lang.Class<com.google.firebase.database.core.view.QueryParams>;
							public static DEFAULT_PARAMS: com.google.firebase.database.core.view.QueryParams;
							public limitToFirst(limit: number): com.google.firebase.database.core.view.QueryParams;
							public hashCode(): number;
							public getIndexEndName(): com.google.firebase.database.snapshot.ChildKey;
							public getIndex(): com.google.firebase.database.snapshot.Index;
							public hasEnd(): boolean;
							public endAt(indexEndValue: com.google.firebase.database.snapshot.Node, indexEndName: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.view.QueryParams;
							public toString(): string;
							public getIndexStartValue(): com.google.firebase.database.snapshot.Node;
							public isValid(): boolean;
							public startAt(indexStartValue: com.google.firebase.database.snapshot.Node, indexStartName: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.core.view.QueryParams;
							public limitToLast(limit: number): com.google.firebase.database.core.view.QueryParams;
							public equals(o: any): boolean;
							public hasAnchoredLimit(): boolean;
							public constructor();
							public getIndexStartName(): com.google.firebase.database.snapshot.ChildKey;
							public isDefault(): boolean;
							public getIndexEndValue(): com.google.firebase.database.snapshot.Node;
							public hasLimit(): boolean;
							public isViewFromLeft(): boolean;
							public hasStart(): boolean;
							public orderBy(index: com.google.firebase.database.snapshot.Index): com.google.firebase.database.core.view.QueryParams;
							public loadsAllData(): boolean;
							public getNodeFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
							public getWireProtocolParams(): java.util.Map<string, any>;
							public toJSON(): string;
							public getLimit(): number;
							public static fromQueryObject(indexStartValue: java.util.Map<string, any>): com.google.firebase.database.core.view.QueryParams;
						}
						export module QueryParams {
							export class ViewFrom {
								public static class: java.lang.Class<com.google.firebase.database.core.view.QueryParams.ViewFrom>;
								public static LEFT: com.google.firebase.database.core.view.QueryParams.ViewFrom;
								public static RIGHT: com.google.firebase.database.core.view.QueryParams.ViewFrom;
								public static values(): androidNative.Array<com.google.firebase.database.core.view.QueryParams.ViewFrom>;
								public static valueOf(name: string): com.google.firebase.database.core.view.QueryParams.ViewFrom;
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
			export module database {
				export module core {
					export module view {
						export class QuerySpec {
							public static class: java.lang.Class<com.google.firebase.database.core.view.QuerySpec>;
							public static fromPathAndQueryObject(path: com.google.firebase.database.core.Path, map: java.util.Map<string, any>): com.google.firebase.database.core.view.QuerySpec;
							public isDefault(): boolean;
							public loadsAllData(): boolean;
							public getPath(): com.google.firebase.database.core.Path;
							public hashCode(): number;
							public getParams(): com.google.firebase.database.core.view.QueryParams;
							public getIndex(): com.google.firebase.database.snapshot.Index;
							public toString(): string;
							public equals(o: any): boolean;
							public static defaultQueryAtPath(path: com.google.firebase.database.core.Path): com.google.firebase.database.core.view.QuerySpec;
							public constructor(path: com.google.firebase.database.core.Path, params: com.google.firebase.database.core.view.QueryParams);
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
			export module database {
				export module core {
					export module view {
						export class View {
							public static class: java.lang.Class<com.google.firebase.database.core.view.View>;
							public getCompleteNode(): com.google.firebase.database.snapshot.Node;
							public removeEventRegistration(path: com.google.firebase.database.core.EventRegistration, cancelEvents: com.google.firebase.database.DatabaseError): java.util.List<com.google.firebase.database.core.view.Event>;
							public applyOperation(operation: com.google.firebase.database.core.operation.Operation, writesCache: com.google.firebase.database.core.WriteTreeRef, optCompleteServerCache: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.View.OperationResult;
							public getQuery(): com.google.firebase.database.core.view.QuerySpec;
							public getCompleteServerCache(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
							public getInitialEvents(this_: com.google.firebase.database.core.EventRegistration): java.util.List<com.google.firebase.database.core.view.DataEvent>;
							public isEmpty(): boolean;
							public addEventRegistration(registration: com.google.firebase.database.core.EventRegistration): void;
							public constructor(query: com.google.firebase.database.core.view.QuerySpec, initialViewCache: com.google.firebase.database.core.view.ViewCache);
							public getServerCache(): com.google.firebase.database.snapshot.Node;
							public getEventCache(): com.google.firebase.database.snapshot.Node;
						}
						export module View {
							export class OperationResult {
								public static class: java.lang.Class<com.google.firebase.database.core.view.View.OperationResult>;
								public events: java.util.List<com.google.firebase.database.core.view.DataEvent>;
								public changes: java.util.List<com.google.firebase.database.core.view.Change>;
								public constructor(events: java.util.List<com.google.firebase.database.core.view.DataEvent>, changes: java.util.List<com.google.firebase.database.core.view.Change>);
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
			export module database {
				export module core {
					export module view {
						export class ViewCache {
							public static class: java.lang.Class<com.google.firebase.database.core.view.ViewCache>;
							public getEventCache(): com.google.firebase.database.core.view.CacheNode;
							public updateServerSnap(serverSnap: com.google.firebase.database.snapshot.IndexedNode, complete: boolean, filtered: boolean): com.google.firebase.database.core.view.ViewCache;
							public getCompleteServerSnap(): com.google.firebase.database.snapshot.Node;
							public updateEventSnap(eventSnap: com.google.firebase.database.snapshot.IndexedNode, complete: boolean, filtered: boolean): com.google.firebase.database.core.view.ViewCache;
							public getCompleteEventSnap(): com.google.firebase.database.snapshot.Node;
							public getServerCache(): com.google.firebase.database.core.view.CacheNode;
							public constructor(eventSnap: com.google.firebase.database.core.view.CacheNode, serverSnap: com.google.firebase.database.core.view.CacheNode);
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
			export module database {
				export module core {
					export module view {
						export class ViewProcessor {
							public static class: java.lang.Class<com.google.firebase.database.core.view.ViewProcessor>;
							public constructor(filter: com.google.firebase.database.core.view.filter.NodeFilter);
							public applyOperation(filterServerNode: com.google.firebase.database.core.view.ViewCache, overwrite: com.google.firebase.database.core.operation.Operation, newViewCache: com.google.firebase.database.core.WriteTreeRef, param3: com.google.firebase.database.snapshot.Node): com.google.firebase.database.core.view.ViewProcessor.ProcessorResult;
							public revertUserWrite(newNode: com.google.firebase.database.core.view.ViewCache, indexedNode: com.google.firebase.database.core.Path, newEventCache: com.google.firebase.database.core.WriteTreeRef, param3: com.google.firebase.database.snapshot.Node, param4: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.core.view.ViewCache;
						}
						export module ViewProcessor {
							export class ProcessorResult {
								public static class: java.lang.Class<com.google.firebase.database.core.view.ViewProcessor.ProcessorResult>;
								public viewCache: com.google.firebase.database.core.view.ViewCache;
								public changes: java.util.List<com.google.firebase.database.core.view.Change>;
								public constructor(viewCache: com.google.firebase.database.core.view.ViewCache, changes: java.util.List<com.google.firebase.database.core.view.Change>);
							}
							export class WriteTreeCompleteChildSource extends com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource {
								public static class: java.lang.Class<com.google.firebase.database.core.view.ViewProcessor.WriteTreeCompleteChildSource>;
								public constructor(writes: com.google.firebase.database.core.WriteTreeRef, viewCache: com.google.firebase.database.core.view.ViewCache, optCompleteServerCache: com.google.firebase.database.snapshot.Node);
								public getCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
								public getCompleteChild(serverNode: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
								public getChildAfterChild(index: com.google.firebase.database.snapshot.Index, child: com.google.firebase.database.snapshot.NamedNode, reverse: boolean): com.google.firebase.database.snapshot.NamedNode;
								public getChildAfterChild(param0: com.google.firebase.database.snapshot.Index, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): com.google.firebase.database.snapshot.NamedNode;
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
			export module database {
				export module core {
					export module view {
						export module filter {
							export class ChildChangeAccumulator {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.ChildChangeAccumulator>;
								public getChanges(): java.util.List<com.google.firebase.database.core.view.Change>;
								public constructor();
								public trackChildChange(oldType: com.google.firebase.database.core.view.Change): void;
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
			export module database {
				export module core {
					export module view {
						export module filter {
							export class IndexedFilter extends com.google.firebase.database.core.view.filter.NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.IndexedFilter>;
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public updatePriority(oldSnap: com.google.firebase.database.snapshot.IndexedNode, newPriority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(indexedNode: com.google.firebase.database.snapshot.IndexedNode, key: com.google.firebase.database.snapshot.ChildKey, newChild: com.google.firebase.database.snapshot.Node, affectedPath: com.google.firebase.database.core.Path, source: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, optChangeAccumulator: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updateFullNode(oldChild: com.google.firebase.database.snapshot.IndexedNode, child: com.google.firebase.database.snapshot.IndexedNode, this_: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public constructor(index: com.google.firebase.database.snapshot.Index);
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
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
			export module database {
				export module core {
					export module view {
						export module filter {
							export class LimitedFilter extends com.google.firebase.database.core.view.filter.NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.LimitedFilter>;
								public constructor(params: com.google.firebase.database.core.view.QueryParams);
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public updatePriority(oldSnap: com.google.firebase.database.snapshot.IndexedNode, newPriority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public updateFullNode(startPost: com.google.firebase.database.snapshot.IndexedNode, endPost: com.google.firebase.database.snapshot.IndexedNode, iterator: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updateChild(snap: com.google.firebase.database.snapshot.IndexedNode, key: com.google.firebase.database.snapshot.ChildKey, newChild: com.google.firebase.database.snapshot.Node, affectedPath: com.google.firebase.database.core.Path, source: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, optChangeAccumulator: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
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
			export module database {
				export module core {
					export module view {
						export module filter {
							export class NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.NodeFilter>;
								/**
								 * Constructs a new instance of the com.google.firebase.database.core.view.filter.NodeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
									updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
									updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
									filtersNodes(): boolean;
									getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
									getIndex(): com.google.firebase.database.snapshot.Index;
								});
								public constructor();
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
							}
							export module NodeFilter {
								export class CompleteChildSource {
									public static class: java.lang.Class<com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource>;
									/**
									 * Constructs a new instance of the com.google.firebase.database.core.view.filter.NodeFilter$CompleteChildSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: { getCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node; getChildAfterChild(param0: com.google.firebase.database.snapshot.Index, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): com.google.firebase.database.snapshot.NamedNode });
									public constructor();
									public getChildAfterChild(param0: com.google.firebase.database.snapshot.Index, param1: com.google.firebase.database.snapshot.NamedNode, param2: boolean): com.google.firebase.database.snapshot.NamedNode;
									public getCompleteChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
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
			export module database {
				export module core {
					export module view {
						export module filter {
							export class RangedFilter extends com.google.firebase.database.core.view.filter.NodeFilter {
								public static class: java.lang.Class<com.google.firebase.database.core.view.filter.RangedFilter>;
								public getIndexedFilter(): com.google.firebase.database.core.view.filter.NodeFilter;
								public getEndPost(): com.google.firebase.database.snapshot.NamedNode;
								public updatePriority(oldSnap: com.google.firebase.database.snapshot.IndexedNode, newPriority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public matches(node: com.google.firebase.database.snapshot.NamedNode): boolean;
								public updateChild(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.ChildKey, param2: com.google.firebase.database.snapshot.Node, param3: com.google.firebase.database.core.Path, param4: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, param5: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updatePriority(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
								public updateFullNode(child: com.google.firebase.database.snapshot.IndexedNode, this_: com.google.firebase.database.snapshot.IndexedNode, oldSnap: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public updateFullNode(param0: com.google.firebase.database.snapshot.IndexedNode, param1: com.google.firebase.database.snapshot.IndexedNode, param2: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public constructor(params: com.google.firebase.database.core.view.QueryParams);
								public getStartPost(): com.google.firebase.database.snapshot.NamedNode;
								public getIndex(): com.google.firebase.database.snapshot.Index;
								public updateChild(snap: com.google.firebase.database.snapshot.IndexedNode, key: com.google.firebase.database.snapshot.ChildKey, newChild: com.google.firebase.database.snapshot.Node, affectedPath: com.google.firebase.database.core.Path, source: com.google.firebase.database.core.view.filter.NodeFilter.CompleteChildSource, optChangeAccumulator: com.google.firebase.database.core.view.filter.ChildChangeAccumulator): com.google.firebase.database.snapshot.IndexedNode;
								public filtersNodes(): boolean;
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
			export module database {
				export module logging {
					export class AndroidLogger extends com.google.firebase.database.logging.DefaultLogger {
						public static class: java.lang.Class<com.google.firebase.database.logging.AndroidLogger>;
						public error(tag: string, toLog: string): void;
						public onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
						public constructor(level: com.google.firebase.database.logging.Logger.Level, enabledComponents: java.util.List<string>);
						public buildLogMessage(level: com.google.firebase.database.logging.Logger.Level, tag: string, message: string, msTimestamp: number): string;
						public warn(tag: string, toLog: string): void;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
						public info(tag: string, toLog: string): void;
						public debug(tag: string, toLog: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class DefaultLogger extends com.google.firebase.database.logging.Logger {
						public static class: java.lang.Class<com.google.firebase.database.logging.DefaultLogger>;
						public onLogMessage(this_: com.google.firebase.database.logging.Logger.Level, level: string, tag: string, message: number): void;
						public shouldLog(level: com.google.firebase.database.logging.Logger.Level, tag: string): boolean;
						public error(tag: string, toLog: string): void;
						public onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
						public constructor(level: com.google.firebase.database.logging.Logger.Level, enabledComponents: java.util.List<string>);
						public buildLogMessage(level: com.google.firebase.database.logging.Logger.Level, tag: string, message: string, msTimestamp: number): string;
						public warn(tag: string, toLog: string): void;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
						public info(tag: string, toLog: string): void;
						public debug(tag: string, toLog: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class LogWrapper {
						public static class: java.lang.Class<com.google.firebase.database.logging.LogWrapper>;
						public error(message: string, e: java.lang.Throwable): void;
						public warn(message: string): void;
						public constructor(logger: com.google.firebase.database.logging.Logger, component: string, prefix: string);
						public logsDebug(): boolean;
						public warn(message: string, e: java.lang.Throwable): void;
						public debug(this_: string, message: java.lang.Throwable, e: androidNative.Array<any>): void;
						public debug(message: string, args: androidNative.Array<any>): void;
						public constructor(logger: com.google.firebase.database.logging.Logger, component: string);
						public info(message: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module logging {
					export class Logger {
						public static class: java.lang.Class<com.google.firebase.database.logging.Logger>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.logging.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void; getLogLevel(): com.google.firebase.database.logging.Logger.Level });
						public constructor();
						public onLogMessage(param0: com.google.firebase.database.logging.Logger.Level, param1: string, param2: string, param3: number): void;
						public getLogLevel(): com.google.firebase.database.logging.Logger.Level;
					}
					export module Logger {
						export class Level {
							public static class: java.lang.Class<com.google.firebase.database.logging.Logger.Level>;
							public static DEBUG: com.google.firebase.database.logging.Logger.Level;
							public static INFO: com.google.firebase.database.logging.Logger.Level;
							public static WARN: com.google.firebase.database.logging.Logger.Level;
							public static ERROR: com.google.firebase.database.logging.Logger.Level;
							public static NONE: com.google.firebase.database.logging.Logger.Level;
							public static valueOf(name: string): com.google.firebase.database.logging.Logger.Level;
							public static values(): androidNative.Array<com.google.firebase.database.logging.Logger.Level>;
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
			export module database {
				export module snapshot {
					export class BooleanNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.BooleanNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.BooleanNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public equals(other: any): boolean;
						public getValue(): any;
						public hashCode(): number;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getValue(this_: boolean): any;
						public getHashRepresentation(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.BooleanNode;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public compareLeafValues(other: com.google.firebase.database.snapshot.BooleanNode): number;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public constructor(value: java.lang.Boolean, priority: com.google.firebase.database.snapshot.Node);
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class ChildKey extends java.lang.Comparable<com.google.firebase.database.snapshot.ChildKey> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildKey>;
						public static MAX_KEY_NAME: string = '[MAX_KEY]';
						public static MIN_KEY_NAME: string = '[MIN_NAME]';
						public static getMaxName(): com.google.firebase.database.snapshot.ChildKey;
						public static getPriorityKey(): com.google.firebase.database.snapshot.ChildKey;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public intValue(): number;
						public toString(): string;
						public compareTo(this_: com.google.firebase.database.snapshot.ChildKey): number;
						public isPriorityChildName(): boolean;
						public static fromString(key: string): com.google.firebase.database.snapshot.ChildKey;
						public static getInfoKey(): com.google.firebase.database.snapshot.ChildKey;
						public asString(): string;
						public isInt(): boolean;
						public static getMinName(): com.google.firebase.database.snapshot.ChildKey;
					}
					export module ChildKey {
						export class IntegerChildKey extends com.google.firebase.database.snapshot.ChildKey {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildKey.IntegerChildKey>;
							public isInt(): boolean;
							public intValue(): number;
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
			export module database {
				export module snapshot {
					export class ChildrenNode extends com.google.firebase.database.snapshot.Node {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildrenNode>;
						public static NAME_ONLY_COMPARATOR: java.util.Comparator<com.google.firebase.database.snapshot.ChildKey>;
						public getSuccessorChildKey(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public updateChild(this_: com.google.firebase.database.core.Path, path: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public getValue(key: boolean): any;
						public getValue(): any;
						public constructor(children: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.snapshot.Node>, priority: com.google.firebase.database.snapshot.Node);
						public hashCode(): number;
						public updateImmediateChild(this_: com.google.firebase.database.snapshot.ChildKey, key: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getValue(param0: boolean): any;
						public hasChild(name: com.google.firebase.database.snapshot.ChildKey): boolean;
						public getImmediateChild(name: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public getChild(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public isEmpty(): boolean;
						public getPredecessorChildKey(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getLastChildKey(): com.google.firebase.database.snapshot.ChildKey;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public constructor();
						public getHashRepresentation(hashString: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getChildCount(): number;
						public forEachChild(visitor: com.google.firebase.database.snapshot.ChildrenNode.ChildVisitor, includePriority: boolean): void;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getFirstChildKey(): com.google.firebase.database.snapshot.ChildKey;
						public toString(): string;
						public forEachChild(visitor: com.google.firebase.database.snapshot.ChildrenNode.ChildVisitor): void;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public compareTo(o: com.google.firebase.database.snapshot.Node): number;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public equals(otherNamedNode: any): boolean;
					}
					export module ChildrenNode {
						export abstract class ChildVisitor extends com.google.firebase.database.collection.LLRBNode.NodeVisitor<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.snapshot.Node> {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildrenNode.ChildVisitor>;
							public constructor();
							public visitEntry(key: com.google.firebase.database.snapshot.ChildKey, value: com.google.firebase.database.snapshot.Node): void;
							public visitChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): void;
						}
						export class NamedNodeIterator extends java.util.Iterator<com.google.firebase.database.snapshot.NamedNode> {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.ChildrenNode.NamedNodeIterator>;
							public hasNext(): boolean;
							public remove(): void;
							public next(): com.google.firebase.database.snapshot.NamedNode;
							public constructor(iterator: java.util.Iterator<java.util.Map.Entry<com.google.firebase.database.snapshot.ChildKey, com.google.firebase.database.snapshot.Node>>);
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
			export module database {
				export module snapshot {
					export class CompoundHash {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash>;
						public getPosts(): java.util.List<com.google.firebase.database.core.Path>;
						public static fromNode(node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.CompoundHash;
						public static fromNode(state: com.google.firebase.database.snapshot.Node, node: com.google.firebase.database.snapshot.CompoundHash.SplitStrategy): com.google.firebase.database.snapshot.CompoundHash;
						public getHashes(): java.util.List<string>;
					}
					export module CompoundHash {
						export class CompoundHashBuilder {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder>;
							public constructor(strategy: com.google.firebase.database.snapshot.CompoundHash.SplitStrategy);
							public currentPath(): com.google.firebase.database.core.Path;
							public currentHashLength(): number;
							public buildingRange(): boolean;
						}
						export class SimpleSizeSplitStrategy extends com.google.firebase.database.snapshot.CompoundHash.SplitStrategy {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash.SimpleSizeSplitStrategy>;
							public shouldSplit(param0: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean;
							public constructor(node: com.google.firebase.database.snapshot.Node);
							public shouldSplit(state: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean;
						}
						export class SplitStrategy {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.CompoundHash.SplitStrategy>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.snapshot.CompoundHash$SplitStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { shouldSplit(param0: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean });
							public constructor();
							public shouldSplit(param0: com.google.firebase.database.snapshot.CompoundHash.CompoundHashBuilder): boolean;
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
			export module database {
				export module snapshot {
					export class DeferredValueNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.DeferredValueNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.DeferredValueNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public equals(other: any): boolean;
						public getValue(): any;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.DeferredValueNode;
						public hashCode(): number;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getValue(this_: boolean): any;
						public getHashRepresentation(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public constructor(value: java.util.Map<any, any>, priority: com.google.firebase.database.snapshot.Node);
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public compareLeafValues(other: com.google.firebase.database.snapshot.DeferredValueNode): number;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class DoubleNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.DoubleNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.DoubleNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public equals(other: any): boolean;
						public getValue(): any;
						public hashCode(): number;
						public compareLeafValues(other: com.google.firebase.database.snapshot.DoubleNode): number;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getValue(this_: boolean): any;
						public getHashRepresentation(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.DoubleNode;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public constructor(value: java.lang.Double, priority: com.google.firebase.database.snapshot.Node);
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class EmptyNode extends com.google.firebase.database.snapshot.ChildrenNode implements com.google.firebase.database.snapshot.Node {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.EmptyNode>;
						public getSuccessorChildKey(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public getValue(key: boolean): any;
						public getValue(): any;
						public hashCode(): number;
						public static Empty(): com.google.firebase.database.snapshot.EmptyNode;
						public getValue(param0: boolean): any;
						public hasChild(name: com.google.firebase.database.snapshot.ChildKey): boolean;
						public getHashRepresentation(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getImmediateChild(name: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public getChild(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public getValue(useExportFormat: boolean): any;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public isEmpty(): boolean;
						public getPredecessorChildKey(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public equals(o: any): boolean;
						public updateChild(newImmediateChild: com.google.firebase.database.core.Path, this_: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public toString(): string;
						public updateImmediateChild(name: com.google.firebase.database.snapshot.ChildKey, node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public compareTo(o: com.google.firebase.database.snapshot.Node): number;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.EmptyNode;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export abstract class Index extends java.util.Comparator<com.google.firebase.database.snapshot.NamedNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.Index>;
						public constructor();
						public indexedValueChanged(oldNode: com.google.firebase.database.snapshot.Node, newNode: com.google.firebase.database.snapshot.Node): boolean;
						public isDefinedOn(param0: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public makePost(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public minPost(): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public compare(one: com.google.firebase.database.snapshot.NamedNode, two: com.google.firebase.database.snapshot.NamedNode, reverse: boolean): number;
						public static fromQueryDefinition(str: string): com.google.firebase.database.snapshot.Index;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class IndexedNode extends java.lang.Iterable<com.google.firebase.database.snapshot.NamedNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.IndexedNode>;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public updateChild(newIndexed: com.google.firebase.database.snapshot.ChildKey, this_: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getLastChild(): com.google.firebase.database.snapshot.NamedNode;
						public static from(node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
						public hasIndex(index: com.google.firebase.database.snapshot.Index): boolean;
						public getNode(): com.google.firebase.database.snapshot.Node;
						public getFirstChild(): com.google.firebase.database.snapshot.NamedNode;
						public getPredecessorChildName(this_: com.google.firebase.database.snapshot.ChildKey, childKey: com.google.firebase.database.snapshot.Node, childNode: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.ChildKey;
						public static from(node: com.google.firebase.database.snapshot.Node, index: com.google.firebase.database.snapshot.Index): com.google.firebase.database.snapshot.IndexedNode;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.IndexedNode;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class KeyIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.KeyIndex>;
						public compare(o1: com.google.firebase.database.snapshot.NamedNode, o2: com.google.firebase.database.snapshot.NamedNode): number;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public makePost(name: com.google.firebase.database.snapshot.ChildKey, value: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public hashCode(): number;
						public static getInstance(): com.google.firebase.database.snapshot.KeyIndex;
						public compare(one: com.google.firebase.database.snapshot.NamedNode, two: com.google.firebase.database.snapshot.NamedNode, reverse: boolean): number;
						public equals(o: any): boolean;
						public isDefinedOn(a: com.google.firebase.database.snapshot.Node): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export abstract class LeafNode<T> extends com.google.firebase.database.snapshot.Node {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.LeafNode<any>>;
						public priority: com.google.firebase.database.snapshot.Node;
						public getSuccessorChildKey(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public getValue(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public compareLeafValues(param0: any): number;
						public leafCompare(this_: com.google.firebase.database.snapshot.LeafNode<any>): number;
						public getValue(param0: boolean): any;
						public getValue(this_: boolean): any;
						public getImmediateChild(name: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public iterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public getChild(path: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public isEmpty(): boolean;
						public getPredecessorChildKey(childKey: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public updateChild(path: com.google.firebase.database.core.Path, node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPriorityHash(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public toString(): string;
						public updateImmediateChild(name: com.google.firebase.database.snapshot.ChildKey, node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public hasChild(childKey: com.google.firebase.database.snapshot.ChildKey): boolean;
						public compareTo(other: com.google.firebase.database.snapshot.Node): number;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
					export module LeafNode {
						export class LeafType {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.LeafNode.LeafType>;
							public static DeferredValue: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static Boolean: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static Number: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static String: com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static valueOf(name: string): com.google.firebase.database.snapshot.LeafNode.LeafType;
							public static values(): androidNative.Array<com.google.firebase.database.snapshot.LeafNode.LeafType>;
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
			export module database {
				export module snapshot {
					export class LongNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.LongNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.LongNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public equals(other: any): boolean;
						public getValue(): any;
						public hashCode(): number;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getValue(this_: boolean): any;
						public getHashRepresentation(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public compareLeafValues(other: com.google.firebase.database.snapshot.LongNode): number;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.LongNode;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public constructor(value: java.lang.Long, priority: com.google.firebase.database.snapshot.Node);
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class NamedNode {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.NamedNode>;
						public constructor(name: com.google.firebase.database.snapshot.ChildKey, node: com.google.firebase.database.snapshot.Node);
						public static getMaxNode(): com.google.firebase.database.snapshot.NamedNode;
						public getName(): com.google.firebase.database.snapshot.ChildKey;
						public hashCode(): number;
						public static getMinNode(): com.google.firebase.database.snapshot.NamedNode;
						public getNode(): com.google.firebase.database.snapshot.Node;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class Node extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.Node>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.snapshot.Node interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isLeafNode(): boolean;
							getPriority(): com.google.firebase.database.snapshot.Node;
							getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
							getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
							updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
							getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
							getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
							updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
							updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
							hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
							isEmpty(): boolean;
							getChildCount(): number;
							getValue(): any;
							getValue(param0: boolean): any;
							getHash(): string;
							getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
							reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
							'<clinit>'(): void;
						});
						public constructor();
						public static MAX_NODE: com.google.firebase.database.snapshot.ChildrenNode;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public getChildCount(): number;
						public getValue(): any;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getValue(param0: boolean): any;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
					}
					export module Node {
						export class HashVersion {
							public static class: java.lang.Class<com.google.firebase.database.snapshot.Node.HashVersion>;
							public static V1: com.google.firebase.database.snapshot.Node.HashVersion;
							public static V2: com.google.firebase.database.snapshot.Node.HashVersion;
							public static valueOf(name: string): com.google.firebase.database.snapshot.Node.HashVersion;
							public static values(): androidNative.Array<com.google.firebase.database.snapshot.Node.HashVersion>;
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
			export module database {
				export module snapshot {
					export class NodeUtilities {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.NodeUtilities>;
						public static NodeFromJSON(mapValue: any, node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public static nameAndPriorityCompare(aKey: com.google.firebase.database.snapshot.ChildKey, aPriority: com.google.firebase.database.snapshot.Node, bKey: com.google.firebase.database.snapshot.ChildKey, bPriority: com.google.firebase.database.snapshot.Node): number;
						public constructor();
						public static NodeFromJSON(value: any): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class PathIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.PathIndex>;
						public constructor();
						public isDefinedOn(snapshot: com.google.firebase.database.snapshot.Node): boolean;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public makePost(name: com.google.firebase.database.snapshot.ChildKey, value: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public hashCode(): number;
						public compare(a: com.google.firebase.database.snapshot.NamedNode, b: com.google.firebase.database.snapshot.NamedNode): number;
						public compare(one: com.google.firebase.database.snapshot.NamedNode, two: com.google.firebase.database.snapshot.NamedNode, reverse: boolean): number;
						public equals(o: any): boolean;
						public constructor(indexPath: com.google.firebase.database.core.Path);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class PriorityIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.PriorityIndex>;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public makePost(name: com.google.firebase.database.snapshot.ChildKey, value: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public hashCode(): number;
						public compare(a: com.google.firebase.database.snapshot.NamedNode, b: com.google.firebase.database.snapshot.NamedNode): number;
						public compare(one: com.google.firebase.database.snapshot.NamedNode, two: com.google.firebase.database.snapshot.NamedNode, reverse: boolean): number;
						public equals(o: any): boolean;
						public isDefinedOn(a: com.google.firebase.database.snapshot.Node): boolean;
						public toString(): string;
						public static getInstance(): com.google.firebase.database.snapshot.PriorityIndex;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class PriorityUtilities {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.PriorityUtilities>;
						public static NullPriority(): com.google.firebase.database.snapshot.Node;
						public static parsePriority(nodePath: com.google.firebase.database.core.Path, value: any): com.google.firebase.database.snapshot.Node;
						public constructor();
						public static parsePriority(value: any): com.google.firebase.database.snapshot.Node;
						public static isValidPriority(priority: com.google.firebase.database.snapshot.Node): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class RangeMerge {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.RangeMerge>;
						public constructor(rangeMerge: com.google.firebase.database.connection.RangeMerge);
						public toString(): string;
						public constructor(optExclusiveStart: com.google.firebase.database.core.Path, optInclusiveEnd: com.google.firebase.database.core.Path, snap: com.google.firebase.database.snapshot.Node);
						public applyTo(node: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class StringNode extends com.google.firebase.database.snapshot.LeafNode<com.google.firebase.database.snapshot.StringNode> {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.StringNode>;
						public getImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.Node;
						public equals(other: any): boolean;
						public getValue(): any;
						public updatePriority(priority: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.StringNode;
						public hashCode(): number;
						public compareLeafValues(param0: any): number;
						public getValue(param0: boolean): any;
						public getValue(this_: boolean): any;
						public getHashRepresentation(version: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public compareLeafValues(other: com.google.firebase.database.snapshot.StringNode): number;
						public isLeafNode(): boolean;
						public getPriority(): com.google.firebase.database.snapshot.Node;
						public hasChild(param0: com.google.firebase.database.snapshot.ChildKey): boolean;
						public updateChild(param0: com.google.firebase.database.core.Path, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public isEmpty(): boolean;
						public updatePriority(param0: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHash(): string;
						public constructor(value: string, priority: com.google.firebase.database.snapshot.Node);
						public getChildCount(): number;
						public getSuccessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public getPredecessorChildKey(param0: com.google.firebase.database.snapshot.ChildKey): com.google.firebase.database.snapshot.ChildKey;
						public reverseIterator(): java.util.Iterator<com.google.firebase.database.snapshot.NamedNode>;
						public getChild(param0: com.google.firebase.database.core.Path): com.google.firebase.database.snapshot.Node;
						public updateImmediateChild(param0: com.google.firebase.database.snapshot.ChildKey, param1: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.Node;
						public getHashRepresentation(param0: com.google.firebase.database.snapshot.Node.HashVersion): string;
						public getLeafType(): com.google.firebase.database.snapshot.LeafNode.LeafType;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module snapshot {
					export class ValueIndex extends com.google.firebase.database.snapshot.Index {
						public static class: java.lang.Class<com.google.firebase.database.snapshot.ValueIndex>;
						public compare(one: com.google.firebase.database.snapshot.NamedNode, two: com.google.firebase.database.snapshot.NamedNode): number;
						public maxPost(): com.google.firebase.database.snapshot.NamedNode;
						public getQueryDefinition(): string;
						public makePost(name: com.google.firebase.database.snapshot.ChildKey, value: com.google.firebase.database.snapshot.Node): com.google.firebase.database.snapshot.NamedNode;
						public hashCode(): number;
						public compare(one: com.google.firebase.database.snapshot.NamedNode, two: com.google.firebase.database.snapshot.NamedNode, reverse: boolean): number;
						public equals(o: any): boolean;
						public isDefinedOn(a: com.google.firebase.database.snapshot.Node): boolean;
						public toString(): string;
						public static getInstance(): com.google.firebase.database.snapshot.ValueIndex;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class MessageBuilderFactory {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory>;
					}
					export module MessageBuilderFactory {
						export class BinaryBuilder extends com.google.firebase.database.tubesock.MessageBuilderFactory.Builder {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory.BinaryBuilder>;
							public appendBytes(bytes: androidNative.Array<number>): boolean;
							public toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
							public appendBytes(param0: androidNative.Array<number>): boolean;
						}
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory.Builder>;
							/**
							 * Constructs a new instance of the com.google.firebase.database.tubesock.MessageBuilderFactory$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { appendBytes(param0: androidNative.Array<number>): boolean; toMessage(): com.google.firebase.database.tubesock.WebSocketMessage });
							public constructor();
							public appendBytes(param0: androidNative.Array<number>): boolean;
							public toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
						}
						export class TextBuilder extends com.google.firebase.database.tubesock.MessageBuilderFactory.Builder {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.MessageBuilderFactory.TextBuilder>;
							public appendBytes(bytes: androidNative.Array<number>): boolean;
							public toMessage(): com.google.firebase.database.tubesock.WebSocketMessage;
							public appendBytes(param0: androidNative.Array<number>): boolean;
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
			export module database {
				export module tubesock {
					export class ThreadInitializer {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.ThreadInitializer>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.tubesock.ThreadInitializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setName(param0: java.lang.Thread, param1: string): void });
						public constructor();
						public setName(param0: java.lang.Thread, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocket {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocket>;
						public blockClose(): void;
						public static setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory, intializer: com.google.firebase.database.tubesock.ThreadInitializer): void;
						public constructor(context: com.google.firebase.database.connection.ConnectionContext, url: java.net.URI, protocol: string);
						public constructor(context: com.google.firebase.database.connection.ConnectionContext, url: java.net.URI, protocol: string, extraHeaders: java.util.Map<string, string>);
						public close(): void;
						public setEventHandler(eventHandler: com.google.firebase.database.tubesock.WebSocketEventHandler): void;
						public send(data: string): void;
						public send(data: androidNative.Array<number>): void;
						public connect(): void;
						public constructor(context: com.google.firebase.database.connection.ConnectionContext, url: java.net.URI);
					}
					export module WebSocket {
						export class State {
							public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocket.State>;
							public static NONE: com.google.firebase.database.tubesock.WebSocket.State;
							public static CONNECTING: com.google.firebase.database.tubesock.WebSocket.State;
							public static CONNECTED: com.google.firebase.database.tubesock.WebSocket.State;
							public static DISCONNECTING: com.google.firebase.database.tubesock.WebSocket.State;
							public static DISCONNECTED: com.google.firebase.database.tubesock.WebSocket.State;
							public static valueOf(name: string): com.google.firebase.database.tubesock.WebSocket.State;
							public static values(): androidNative.Array<com.google.firebase.database.tubesock.WebSocket.State>;
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
			export module database {
				export module tubesock {
					export class WebSocketEventHandler {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketEventHandler>;
						/**
						 * Constructs a new instance of the com.google.firebase.database.tubesock.WebSocketEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onOpen(): void; onMessage(param0: com.google.firebase.database.tubesock.WebSocketMessage): void; onClose(): void; onError(param0: com.google.firebase.database.tubesock.WebSocketException): void; onLogMessage(param0: string): void });
						public constructor();
						public onOpen(): void;
						public onMessage(param0: com.google.firebase.database.tubesock.WebSocketMessage): void;
						public onError(param0: com.google.firebase.database.tubesock.WebSocketException): void;
						public onLogMessage(param0: string): void;
						public onClose(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketException {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketException>;
						public constructor(message: string, t: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketHandshake {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketHandshake>;
						public verifyServerHandshakeHeaders(lowercaseHeaders: java.util.HashMap<string, string>): void;
						public constructor(url: java.net.URI, protocol: string, extraHeaders: java.util.Map<string, string>);
						public getHandshake(): androidNative.Array<number>;
						public verifyServerStatusLine(statusLine: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketMessage {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketMessage>;
						public constructor(message: androidNative.Array<number>);
						public isBinary(): boolean;
						public constructor(message: string);
						public getBytes(): androidNative.Array<number>;
						public isText(): boolean;
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketReceiver {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketReceiver>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module tubesock {
					export class WebSocketWriter {
						public static class: java.lang.Class<com.google.firebase.database.tubesock.WebSocketWriter>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module database {
				export module util {
					export class GAuthToken {
						public static class: java.lang.Class<com.google.firebase.database.util.GAuthToken>;
						public serializeToString(): string;
						public getAuth(): java.util.Map<string, any>;
						public constructor(token: string, auth: java.util.Map<string, any>);
						public static tryParseFromString(tokenMap: string): com.google.firebase.database.util.GAuthToken;
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
			export module database {
				export module util {
					export class JsonMapper {
						public static class: java.lang.Class<com.google.firebase.database.util.JsonMapper>;
						public static serializeJson(object: java.util.Map<string, any>): string;
						public static parseJsonValue(e: string): any;
						public constructor();
						public static serializeJsonValue(e: any): string;
						public static parseJson(e: string): java.util.Map<string, any>;
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
//com.google.firebase.database.GenericTypeIndicator:1
//com.google.firebase.database.core.utilities.ImmutableTree:1
//com.google.firebase.database.core.utilities.ImmutableTree.TreeVisitor:2
//com.google.firebase.database.core.utilities.Pair:2
//com.google.firebase.database.core.utilities.Predicate:1
//com.google.firebase.database.core.utilities.Tree:1
//com.google.firebase.database.core.utilities.Tree.TreeFilter:1
//com.google.firebase.database.core.utilities.Tree.TreeVisitor:1
//com.google.firebase.database.core.utilities.TreeNode:1
//com.google.firebase.database.core.utilities.encoding.CustomClassMapper.BeanMapper:1
//com.google.firebase.database.snapshot.LeafNode:1
//com.google.firebase.platforminfo.LibraryVersionComponent.VersionExtractor:1
