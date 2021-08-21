
declare module com {
	export module google {
		export module firebase {
			export module crashlytics {
				export class AnalyticsDeferredProxy {
					public static class: java.lang.Class<com.google.firebase.crashlytics.AnalyticsDeferredProxy>;
					public getAnalyticsEventLogger(): com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger;
					public constructor(param0: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>);
					public constructor(param0: com.google.firebase.inject.Deferred<com.google.firebase.analytics.connector.AnalyticsConnector>, param1: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource, param2: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger);
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
			export module crashlytics {
				export class CrashlyticsAnalyticsListener {
					public static class: java.lang.Class<com.google.firebase.crashlytics.CrashlyticsAnalyticsListener>;
					public setCrashlyticsOriginEventReceiver(param0: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver): void;
					public setBreadcrumbEventReceiver(param0: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver): void;
					public onMessageTriggered(param0: number, param1: globalAndroid.os.Bundle): void;
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
						public putString(param0: string, param1: string): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putFloat(param0: string, param1: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putInt(param0: string, param1: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public constructor();
						public build(): com.google.firebase.crashlytics.CustomKeysAndValues;
						public putLong(param0: string, param1: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putBoolean(param0: string, param1: boolean): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
						public putDouble(param0: string, param1: number): com.google.firebase.crashlytics.CustomKeysAndValues.Builder;
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
					public setCustomKey(param0: string, param1: string): void;
					public recordException(param0: java.lang.Throwable): void;
					public setCustomKeys(param0: com.google.firebase.crashlytics.CustomKeysAndValues): void;
					public setCrashlyticsCollectionEnabled(param0: java.lang.Boolean): void;
					public log(param0: string): void;
					public setCrashlyticsCollectionEnabled(param0: boolean): void;
					public checkForUnsentReports(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
					public static getInstance(): com.google.firebase.crashlytics.FirebaseCrashlytics;
					public deleteUnsentReports(): void;
					public setUserId(param0: string): void;
					public setCustomKey(param0: string, param1: boolean): void;
					public setCustomKey(param0: string, param1: number): void;
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
						public constructor(implementation: {
							hasCrashDataForSession(param0: string): boolean;
							openSession(param0: string, param1: string, param2: number, param3: com.google.firebase.crashlytics.internal.model.StaticSessionData): void;
							finalizeSession(param0: string): void;
							getSessionFileProvider(param0: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider;
						});
						public constructor();
						public openSession(param0: string, param1: string, param2: number, param3: com.google.firebase.crashlytics.internal.model.StaticSessionData): void;
						public finalizeSession(param0: string): void;
						public getSessionFileProvider(param0: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider;
						public hasCrashDataForSession(param0: string): boolean;
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
						public openSession(param0: string, param1: string, param2: number, param3: com.google.firebase.crashlytics.internal.model.StaticSessionData): void;
						public finalizeSession(param0: string): void;
						public getSessionFileProvider(param0: string): com.google.firebase.crashlytics.internal.NativeSessionFileProvider;
						public hasCrashDataForSession(param0: string): boolean;
						public constructor(param0: com.google.firebase.inject.Deferred<com.google.firebase.crashlytics.internal.CrashlyticsNativeComponent>);
					}
					export module CrashlyticsNativeComponentDeferredProxy {
						export class MissingNativeSessionFileProvider extends com.google.firebase.crashlytics.internal.NativeSessionFileProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.CrashlyticsNativeComponentDeferredProxy.MissingNativeSessionFileProvider>;
							public getMetadataFile(): java.io.File;
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
					export class Logger {
						public static class: java.lang.Class<com.google.firebase.crashlytics.internal.Logger>;
						public static TAG: string;
						public e(param0: string): void;
						public e(param0: string, param1: java.lang.Throwable): void;
						public d(param0: string): void;
						public d(param0: string, param1: java.lang.Throwable): void;
						public i(param0: string, param1: java.lang.Throwable): void;
						public log(param0: number, param1: string, param2: boolean): void;
						public w(param0: string, param1: java.lang.Throwable): void;
						public static getLogger(): com.google.firebase.crashlytics.internal.Logger;
						public w(param0: string): void;
						public v(param0: string, param1: java.lang.Throwable): void;
						public i(param0: string): void;
						public log(param0: number, param1: string): void;
						public v(param0: string): void;
						public constructor(param0: string);
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
						public constructor(implementation: {
							getMinidumpFile(): java.io.File;
							getBinaryImagesFile(): java.io.File;
							getMetadataFile(): java.io.File;
							getSessionFile(): java.io.File;
							getAppFile(): java.io.File;
							getDeviceFile(): java.io.File;
							getOsFile(): java.io.File;
						});
						public constructor();
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
					export module analytics {
						export class AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							});
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
							public constructor(implementation: {
								onEvent(param0: string, param1: globalAndroid.os.Bundle): void;
							});
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
							public constructor(param0: com.google.firebase.crashlytics.internal.analytics.CrashlyticsOriginAnalyticsEventLogger, param1: number, param2: java.util.concurrent.TimeUnit);
							public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
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
						export class BreadcrumbAnalyticsEventReceiver implements com.google.firebase.crashlytics.internal.analytics.AnalyticsEventReceiver, com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.BreadcrumbAnalyticsEventReceiver>;
							public constructor();
							public registerBreadcrumbHandler(param0: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
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
						export class CrashlyticsOriginAnalyticsEventLogger extends com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.CrashlyticsOriginAnalyticsEventLogger>;
							public constructor(param0: com.google.firebase.analytics.connector.AnalyticsConnector);
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
						export class UnavailableAnalyticsEventLogger extends com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.analytics.UnavailableAnalyticsEventLogger>;
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
					export module breadcrumbs {
						export class BreadcrumbHandler {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								handleBreadcrumb(param0: string): void;
							});
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
							public constructor(implementation: {
								registerBreadcrumbHandler(param0: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbHandler): void;
							});
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
					export module common {
						export class AppData {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.AppData>;
							public googleAppId: string;
							public buildId: string;
							public installerPackageName: string;
							public packageName: string;
							public versionCode: string;
							public versionName: string;
							public unityVersionProvider: com.google.firebase.crashlytics.internal.unity.UnityVersionProvider;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.google.firebase.crashlytics.internal.unity.UnityVersionProvider);
							public static create(param0: globalAndroid.content.Context, param1: com.google.firebase.crashlytics.internal.common.IdManager, param2: string, param3: string, param4: com.google.firebase.crashlytics.internal.unity.UnityVersionProvider): com.google.firebase.crashlytics.internal.common.AppData;
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
					export module common {
						export class AutoValue_CrashlyticsReportWithSessionId extends com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.AutoValue_CrashlyticsReportWithSessionId>;
							public hashCode(): number;
							public getSessionId(): string;
							public getReport(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public toString(): string;
							public equals(param0: any): boolean;
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
					export module common {
						export abstract class BackgroundPriorityRunnable {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.BackgroundPriorityRunnable>;
							public constructor();
							public onRun(): void;
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
			export module crashlytics {
				export module internal {
					export module common {
						export class BatteryState {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.BatteryState>;
							public getBatteryVelocity(): number;
							public static get(param0: globalAndroid.content.Context): com.google.firebase.crashlytics.internal.common.BatteryState;
							public getBatteryLevel(): java.lang.Float;
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
					export module common {
						export class BytesBackedNativeSessionFile extends com.google.firebase.crashlytics.internal.common.NativeSessionFile {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.BytesBackedNativeSessionFile>;
							public getStream(): java.io.InputStream;
							public getReportsEndpointFilename(): string;
							public asFilePayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
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
					export module common {
						export class CLSUUID {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CLSUUID>;
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
			export module crashlytics {
				export module internal {
					export module common {
						export class CommonUtils {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CommonUtils>;
							public static SHARED_PREFS_NAME: string;
							public static LEGACY_SHARED_PREFS_NAME: string;
							public static DEVICE_STATE_ISSIMULATOR: number;
							public static DEVICE_STATE_JAILBROKEN: number;
							public static DEVICE_STATE_DEBUGGERATTACHED: number;
							public static DEVICE_STATE_BETAOS: number;
							public static DEVICE_STATE_VENDORINTERNAL: number;
							public static DEVICE_STATE_COMPROMISEDLIBRARIES: number;
							public static calculateFreeRamInBytes(param0: globalAndroid.content.Context): number;
							public static isRooted(param0: globalAndroid.content.Context): boolean;
							public static resolveUnityEditorVersion(param0: globalAndroid.content.Context): string;
							public static checkPermission(param0: globalAndroid.content.Context, param1: string): boolean;
							public static getResourcesIdentifier(param0: globalAndroid.content.Context, param1: string, param2: string): number;
							public static hexify(param0: native.Array<number>): string;
							public static createInstanceIdFrom(param0: native.Array<string>): string;
							/** @deprecated */
							public static isLoggingEnabled(param0: globalAndroid.content.Context): boolean;
							public static closeOrLog(param0: java.io.Closeable, param1: string): void;
							public static sha1(param0: string): string;
							public static getBooleanResourceValue(param0: globalAndroid.content.Context, param1: string, param2: boolean): boolean;
							public static getMappingFileId(param0: globalAndroid.content.Context): string;
							public static getResourcePackageName(param0: globalAndroid.content.Context): string;
							public static padWithZerosToMaxIntWidth(param0: number): string;
							public static calculateUsedDiskSpaceInBytes(param0: string): number;
							public constructor();
							public static getAppProcessInfo(param0: string, param1: globalAndroid.content.Context): globalAndroid.app.ActivityManager.RunningAppProcessInfo;
							public static getSharedPrefs(param0: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
							public static getLegacySharedPrefs(param0: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
							public static getDeviceState(param0: globalAndroid.content.Context): number;
							public static streamToString(param0: java.io.InputStream): string;
							public static isAppDebuggable(param0: globalAndroid.content.Context): boolean;
							public static getStringsFileValue(param0: globalAndroid.content.Context, param1: string): string;
							public static extractFieldFromSystemFile(param0: java.io.File, param1: string): string;
							public static getTotalRamInBytes(): number;
							public static isDebuggerAttached(): boolean;
							public static getCpuArchitectureInt(): number;
							public static canTryConnection(param0: globalAndroid.content.Context): boolean;
							public static getProximitySensorEnabled(param0: globalAndroid.content.Context): boolean;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static isEmulator(param0: globalAndroid.content.Context): boolean;
						}
						export module CommonUtils {
							export class Architecture {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture>;
								public static X86_32: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static X86_64: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static ARM_UNKNOWN: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static PPC: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static PPC64: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static ARMV6: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static ARMV7: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static UNKNOWN: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static ARMV7S: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static ARM64: com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static valueOf(param0: string): com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture;
								public static values(): native.Array<com.google.firebase.crashlytics.internal.common.CommonUtils.Architecture>;
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
					export module common {
						export class CrashlyticsBackgroundWorker {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsBackgroundWorker>;
							public submit(param0: java.util.concurrent.Callable): com.google.android.gms.tasks.Task;
							public checkRunningOnThread(): void;
							public constructor(param0: java.util.concurrent.Executor);
							public submitTask(param0: java.util.concurrent.Callable): com.google.android.gms.tasks.Task;
							public getExecutor(): java.util.concurrent.Executor;
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
					export module common {
						export class CrashlyticsController {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsController>;
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
					export module common {
						export class CrashlyticsCore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsCore>;
							public breadcrumbSource: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource;
							public doBackgroundInitializationAsync(param0: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider): com.google.android.gms.tasks.Task<java.lang.Void>;
							public setCustomKey(param0: string, param1: string): void;
							public onPreExecute(param0: com.google.firebase.crashlytics.internal.common.AppData, param1: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider): boolean;
							public sendUnsentReports(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public static getVersion(): string;
							public deleteUnsentReports(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.crashlytics.internal.common.IdManager, param2: com.google.firebase.crashlytics.internal.CrashlyticsNativeComponent, param3: com.google.firebase.crashlytics.internal.common.DataCollectionArbiter, param4: com.google.firebase.crashlytics.internal.breadcrumbs.BreadcrumbSource, param5: com.google.firebase.crashlytics.internal.analytics.AnalyticsEventLogger, param6: java.util.concurrent.ExecutorService);
							public log(param0: string): void;
							public checkForUnsentReports(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
							public didCrashOnPreviousExecution(): boolean;
							public setUserId(param0: string): void;
							public setInternalKey(param0: string, param1: string): void;
							public setCustomKeys(param0: java.util.Map<string,string>): void;
							public setCrashlyticsCollectionEnabled(param0: java.lang.Boolean): void;
							public logException(param0: java.lang.Throwable): void;
						}
						export module CrashlyticsCore {
							export class LogFileDirectoryProvider extends com.google.firebase.crashlytics.internal.log.LogFileManager.DirectoryProvider {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsCore.LogFileDirectoryProvider>;
								public constructor(param0: com.google.firebase.crashlytics.internal.persistence.FileStore);
								public getLogFileDir(): java.io.File;
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
					export module common {
						export class CrashlyticsFileMarker {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsFileMarker>;
							public create(): boolean;
							public constructor(param0: string, param1: com.google.firebase.crashlytics.internal.persistence.FileStore);
							public isPresent(): boolean;
							public remove(): boolean;
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
					export module common {
						export class CrashlyticsLifecycleEvents {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsLifecycleEvents>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.common.CrashlyticsLifecycleEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onBeginSession(param0: string, param1: number): void;
								onLog(param0: number, param1: string): void;
								onCustomKey(param0: string, param1: string): void;
								onUserId(param0: string): void;
							});
							public constructor();
							public onUserId(param0: string): void;
							public onBeginSession(param0: string, param1: number): void;
							public onLog(param0: number, param1: string): void;
							public onCustomKey(param0: string, param1: string): void;
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
					export module common {
						export class CrashlyticsReportDataCapture {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsReportDataCapture>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.crashlytics.internal.common.IdManager, param2: com.google.firebase.crashlytics.internal.common.AppData, param3: com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy);
							public captureAnrEventData(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
							public captureReportData(param0: string, param1: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public captureEventData(param0: java.lang.Throwable, param1: java.lang.Thread, param2: string, param3: number, param4: number, param5: number, param6: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
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
					export module common {
						export abstract class CrashlyticsReportWithSessionId {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId>;
							public constructor();
							public getSessionId(): string;
							public static create(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport, param1: string): com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId;
							public getReport(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
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
					export module common {
						export class CrashlyticsUncaughtExceptionHandler {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsUncaughtExceptionHandler>;
							public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
							public constructor(param0: com.google.firebase.crashlytics.internal.common.CrashlyticsUncaughtExceptionHandler.CrashListener, param1: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider, param2: java.lang.Thread.UncaughtExceptionHandler);
						}
						export module CrashlyticsUncaughtExceptionHandler {
							export class CrashListener {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CrashlyticsUncaughtExceptionHandler.CrashListener>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.common.CrashlyticsUncaughtExceptionHandler$CrashListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onUncaughtException(param0: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider, param1: java.lang.Thread, param2: java.lang.Throwable): void;
								});
								public constructor();
								public onUncaughtException(param0: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider, param1: java.lang.Thread, param2: java.lang.Throwable): void;
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
					export module common {
						export class CurrentTimeProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.CurrentTimeProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.common.CurrentTimeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentTimeMillis(): number;
							});
							public constructor();
							public getCurrentTimeMillis(): number;
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
					export module common {
						export class DataCollectionArbiter {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.DataCollectionArbiter>;
							public waitForAutomaticDataCollectionEnabled(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public grantDataCollectionPermission(param0: boolean): void;
							public waitForDataCollectionPermission(): com.google.android.gms.tasks.Task<java.lang.Void>;
							public constructor(param0: com.google.firebase.FirebaseApp);
							public setCrashlyticsDataCollectionEnabled(param0: java.lang.Boolean): void;
							public isAutomaticDataCollectionEnabled(): boolean;
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
					export module common {
						export class DeliveryMechanism {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.DeliveryMechanism>;
							public static DEVELOPER: com.google.firebase.crashlytics.internal.common.DeliveryMechanism;
							public static USER_SIDELOAD: com.google.firebase.crashlytics.internal.common.DeliveryMechanism;
							public static TEST_DISTRIBUTION: com.google.firebase.crashlytics.internal.common.DeliveryMechanism;
							public static APP_STORE: com.google.firebase.crashlytics.internal.common.DeliveryMechanism;
							public static values(): native.Array<com.google.firebase.crashlytics.internal.common.DeliveryMechanism>;
							public static determineFrom(param0: string): com.google.firebase.crashlytics.internal.common.DeliveryMechanism;
							public getId(): number;
							public toString(): string;
							public static valueOf(param0: string): com.google.firebase.crashlytics.internal.common.DeliveryMechanism;
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
					export module common {
						export class ExecutorUtils {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.ExecutorUtils>;
							public static getNamedThreadFactory(param0: string): java.util.concurrent.ThreadFactory;
							public static buildSingleThreadScheduledExecutorService(param0: string): java.util.concurrent.ScheduledExecutorService;
							public static buildSingleThreadExecutorService(param0: string): java.util.concurrent.ExecutorService;
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
					export module common {
						export class FileBackedNativeSessionFile extends com.google.firebase.crashlytics.internal.common.NativeSessionFile {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.FileBackedNativeSessionFile>;
							public getStream(): java.io.InputStream;
							public getReportsEndpointFilename(): string;
							public asFilePayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
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
					export module common {
						export class IdManager extends com.google.firebase.crashlytics.internal.common.InstallIdProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.IdManager>;
							public static DEFAULT_VERSION_NAME: string;
							public getAppIdentifier(): string;
							public getOsDisplayVersionString(): string;
							public getOsBuildVersionString(): string;
							public getCrashlyticsInstallId(): string;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.google.firebase.installations.FirebaseInstallationsApi, param3: com.google.firebase.crashlytics.internal.common.DataCollectionArbiter);
							public getModelName(): string;
							public getInstallerPackageName(): string;
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
					export module common {
						export class InstallIdProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.InstallIdProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.common.InstallIdProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCrashlyticsInstallId(): string;
							});
							public constructor();
							public getCrashlyticsInstallId(): string;
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
					export module common {
						export class InstallerPackageNameProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.InstallerPackageNameProvider>;
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
					export module common {
						export class KeysMap {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.KeysMap>;
							public getKeys(): java.util.Map<string,string>;
							public sanitizeAttribute(param0: string): string;
							public constructor(param0: number, param1: number);
							public setKeys(param0: java.util.Map<string,string>): void;
							public setKey(param0: string, param1: string): void;
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
					export module common {
						export class MetaDataStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.MetaDataStore>;
							public getKeysFileForSession(param0: string): java.io.File;
							public readUserData(param0: string): com.google.firebase.crashlytics.internal.common.UserMetadata;
							public constructor(param0: java.io.File);
							public getUserDataFileForSession(param0: string): java.io.File;
							public getInternalKeysFileForSession(param0: string): java.io.File;
							public writeUserData(param0: string, param1: com.google.firebase.crashlytics.internal.common.UserMetadata): void;
							public writeKeyData(param0: string, param1: java.util.Map<string,string>): void;
							public readKeyData(param0: string): java.util.Map<string,string>;
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
					export module common {
						export class NativeSessionFile {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.NativeSessionFile>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.common.NativeSessionFile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getReportsEndpointFilename(): string;
								getStream(): java.io.InputStream;
								asFilePayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
							});
							public constructor();
							public getStream(): java.io.InputStream;
							public getReportsEndpointFilename(): string;
							public asFilePayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
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
					export module common {
						export class NativeSessionFileGzipper {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.NativeSessionFileGzipper>;
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
					export module common {
						export class ResponseParser {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.ResponseParser>;
							public static ResponseActionDiscard: number;
							public static ResponseActionRetry: number;
							public constructor();
							public static parse(param0: number): number;
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
					export module common {
						export class SessionReportingCoordinator extends com.google.firebase.crashlytics.internal.common.CrashlyticsLifecycleEvents {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.SessionReportingCoordinator>;
							public removeAllReports(): void;
							public onUserId(param0: string): void;
							public static convertInputStreamToString(param0: java.io.InputStream): string;
							public onBeginSession(param0: string, param1: number): void;
							public sendReports(param0: java.util.concurrent.Executor): com.google.android.gms.tasks.Task<java.lang.Void>;
							public hasReportsToSend(): boolean;
							public finalizeSessionWithNativeEvent(param0: string, param1: java.util.List<com.google.firebase.crashlytics.internal.common.NativeSessionFile>): void;
							public persistUserId(param0: string): void;
							public listSortedOpenSessionIds(): java.util.List<string>;
							public persistNonFatalEvent(param0: java.lang.Throwable, param1: java.lang.Thread, param2: string, param3: number): void;
							public persistFatalEvent(param0: java.lang.Throwable, param1: java.lang.Thread, param2: string, param3: number): void;
							public persistAppExitInfoEvent(param0: string, param1: globalAndroid.app.ApplicationExitInfo, param2: com.google.firebase.crashlytics.internal.log.LogFileManager, param3: com.google.firebase.crashlytics.internal.common.UserMetadata): void;
							public onLog(param0: number, param1: string): void;
							public onCustomKey(param0: string, param1: string): void;
							public static create(param0: globalAndroid.content.Context, param1: com.google.firebase.crashlytics.internal.common.IdManager, param2: com.google.firebase.crashlytics.internal.persistence.FileStore, param3: com.google.firebase.crashlytics.internal.common.AppData, param4: com.google.firebase.crashlytics.internal.log.LogFileManager, param5: com.google.firebase.crashlytics.internal.common.UserMetadata, param6: com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy, param7: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider): com.google.firebase.crashlytics.internal.common.SessionReportingCoordinator;
							public finalizeSessions(param0: number, param1: string): void;
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
					export module common {
						export class SystemCurrentTimeProvider extends com.google.firebase.crashlytics.internal.common.CurrentTimeProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.SystemCurrentTimeProvider>;
							public constructor();
							public getCurrentTimeMillis(): number;
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
					export module common {
						export class UserMetadata {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.UserMetadata>;
							public constructor();
							public getCustomKeys(): java.util.Map<string,string>;
							public setCustomKey(param0: string, param1: string): void;
							public getInternalKeys(): java.util.Map<string,string>;
							public setUserId(param0: string): void;
							public setInternalKey(param0: string, param1: string): void;
							public getUserId(): string;
							public setCustomKeys(param0: java.util.Map<string,string>): void;
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
					export module common {
						export class Utils {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.common.Utils>;
							public static awaitEvenIfOnMainThread(param0: com.google.android.gms.tasks.Task): any;
							public static race(param0: com.google.android.gms.tasks.Task, param1: com.google.android.gms.tasks.Task): com.google.android.gms.tasks.Task;
							public static callTask(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable): com.google.android.gms.tasks.Task;
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
					export module log {
						export class FileLogStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.FileLogStore>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.log.FileLogStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								writeToLog(param0: number, param1: string): void;
								getLogAsBytes(): native.Array<number>;
								getLogAsString(): string;
								closeLogFile(): void;
								deleteLogFile(): void;
							});
							public constructor();
							public writeToLog(param0: number, param1: string): void;
							public getLogAsBytes(): native.Array<number>;
							public deleteLogFile(): void;
							public getLogAsString(): string;
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
					export module log {
						export class LogFileManager {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.LogFileManager>;
							public discardOldLogFiles(param0: java.util.Set<string>): void;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.crashlytics.internal.log.LogFileManager.DirectoryProvider, param2: string);
							public getBytesForLog(): native.Array<number>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.crashlytics.internal.log.LogFileManager.DirectoryProvider);
							public writeToLog(param0: number, param1: string): void;
							public setCurrentSession(param0: string): void;
							public getLogString(): string;
							public clearLog(): void;
						}
						export module LogFileManager {
							export class DirectoryProvider {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.LogFileManager.DirectoryProvider>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.log.LogFileManager$DirectoryProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getLogFileDir(): java.io.File;
								});
								public constructor();
								public getLogFileDir(): java.io.File;
							}
							export class NoopLogStore extends com.google.firebase.crashlytics.internal.log.FileLogStore {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.LogFileManager.NoopLogStore>;
								public writeToLog(param0: number, param1: string): void;
								public getLogAsString(): string;
								public deleteLogFile(): void;
								public getLogAsBytes(): native.Array<number>;
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
					export module log {
						export class QueueFile {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.QueueFile>;
							public size(): number;
							public close(): void;
							public usedBytes(): number;
							public remove(): void;
							public peek(param0: com.google.firebase.crashlytics.internal.log.QueueFile.ElementReader): void;
							public clear(): void;
							public toString(): string;
							public peek(): native.Array<number>;
							public constructor(param0: java.io.File);
							public add(param0: native.Array<number>): void;
							public forEach(param0: com.google.firebase.crashlytics.internal.log.QueueFile.ElementReader): void;
							public add(param0: native.Array<number>, param1: number, param2: number): void;
							public isEmpty(): boolean;
							public hasSpaceFor(param0: number, param1: number): boolean;
						}
						export module QueueFile {
							export class Element {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.QueueFile.Element>;
								public toString(): string;
							}
							export class ElementInputStream {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.QueueFile.ElementInputStream>;
								public read(param0: native.Array<number>, param1: number, param2: number): number;
								public read(): number;
							}
							export class ElementReader {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.QueueFile.ElementReader>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.log.QueueFile$ElementReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									read(param0: java.io.InputStream, param1: number): void;
								});
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
					export module log {
						export class QueueFileLogStore extends com.google.firebase.crashlytics.internal.log.FileLogStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.QueueFileLogStore>;
							public writeToLog(param0: number, param1: string): void;
							public getLogAsBytes(): native.Array<number>;
							public deleteLogFile(): void;
							public getLogAsString(): string;
							public closeLogFile(): void;
						}
						export module QueueFileLogStore {
							export class LogBytes {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.log.QueueFileLogStore.LogBytes>;
								public bytes: native.Array<number>;
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
					export module model {
						export class AutoCrashlyticsReportEncoder {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder>;
							public static CODEGEN_VERSION: number;
							public static CONFIG: com.google.firebase.encoders.config.Configurator;
							public configure(param0: com.google.firebase.encoders.config.EncoderConfig<any>): void;
						}
						export module AutoCrashlyticsReportEncoder {
							export class CrashlyticsReportApplicationExitInfoEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportApplicationExitInfoEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportCustomAttributeEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportCustomAttributeEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportFilesPayloadEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportFilesPayloadEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportFilesPayloadFileEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportFilesPayloadFileEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionApplicationEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionApplicationEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionApplicationOrganizationEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionApplicationOrganizationEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionDeviceEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionDeviceEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionBinaryImageEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionBinaryImageEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionExceptionEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionExceptionEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionSignalEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionSignalEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionThreadEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionThreadEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventApplicationExecutionThreadFrameEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventApplicationExecutionThreadFrameEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventDeviceEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventDeviceEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionEventLogEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionEventLogEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionOperatingSystemEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionOperatingSystemEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class CrashlyticsReportSessionUserEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User> {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoCrashlyticsReportEncoder.CrashlyticsReportSessionUserEncoder>;
								public encode(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
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
							public getNdkPayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
							public hashCode(): number;
							public getPlatform(): number;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							public toString(): string;
							public getInstallationUuid(): string;
							public equals(param0: any): boolean;
							public getBuildVersion(): string;
							public getSession(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
							public getDisplayVersion(): string;
						}
						export module AutoValue_CrashlyticsReport {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport.Builder>;
								public setInstallationUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setSession(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setGmpAppId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setBuildVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
								public setSdkVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setDisplayVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setPlatform(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setNdkPayload(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
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
							public hashCode(): number;
							public getImportance(): number;
							public getTimestamp(): number;
							public getTraceFile(): string;
							public toString(): string;
							public getReasonCode(): number;
							public getRss(): number;
							public equals(param0: any): boolean;
							public getPss(): number;
							public getPid(): number;
						}
						export module AutoValue_CrashlyticsReport_ApplicationExitInfo {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_ApplicationExitInfo.Builder>;
								public setTimestamp(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
								public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setPss(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setRss(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setReasonCode(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setTraceFile(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setProcessName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
								public setPid(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
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
							public getValue(): string;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_CustomAttribute {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_CustomAttribute.Builder>;
								public setValue(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
								public setKey(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute.Builder;
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
							public getFiles(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>;
							public hashCode(): number;
							public getOrgId(): string;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_FilesPayload {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_FilesPayload.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
								public setFiles(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
								public setOrgId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
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
							public getContents(): native.Array<number>;
							public toString(): string;
							public equals(param0: any): boolean;
							public getFilename(): string;
						}
						export module AutoValue_CrashlyticsReport_FilesPayload_File {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_FilesPayload_File.Builder>;
								public setContents(param0: native.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
								public setFilename(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
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
							public isCrashed(): boolean;
							public hashCode(): number;
							public getOs(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
							public getGenerator(): string;
							public getApp(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application;
							public toString(): string;
							public getStartedAt(): number;
							public getGeneratorType(): number;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
							public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
							public getUser(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User;
							public getIdentifier(): string;
							public equals(param0: any): boolean;
							public getEndedAt(): java.lang.Long;
							public getEvents(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>;
						}
						export module AutoValue_CrashlyticsReport_Session {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session.Builder>;
								public setUser(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
								public setGenerator(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setEndedAt(param0: java.lang.Long): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setOs(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setCrashed(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setApp(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setStartedAt(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setEvents(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setDevice(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public setGeneratorType(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
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
							public getDevelopmentPlatformVersion(): string;
							public getIdentifier(): string;
							public toString(): string;
							public getInstallationUuid(): string;
							public equals(param0: any): boolean;
							public getVersion(): string;
							public getDisplayVersion(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Application {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Application.Builder>;
								public setOrganization(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setDevelopmentPlatformVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setDisplayVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application;
								public setInstallationUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
								public setDevelopmentPlatform(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Builder;
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
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_Session_Application_Organization {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Application_Organization.Builder>;
								public setClsId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application.Organization.Builder;
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
							public getState(): number;
							public getManufacturer(): string;
							public toString(): string;
							public getRam(): number;
							public getDiskSpace(): number;
							public equals(param0: any): boolean;
							public getCores(): number;
							public isSimulator(): boolean;
							public getModelClass(): string;
							public getModel(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_Device {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Device.Builder>;
								public setArch(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setDiskSpace(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setSimulator(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setManufacturer(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setCores(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setRam(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
								public setModelClass(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setModel(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
								public setState(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device.Builder;
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
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
							public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
							public getLog(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
							public getTimestamp(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getType(): string;
							public getApp(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
						}
						export module AutoValue_CrashlyticsReport_Session_Event {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event.Builder>;
								public setTimestamp(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setLog(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setDevice(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setApp(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public setType(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
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
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
							public getUiOrientation(): number;
							public getBackground(): java.lang.Boolean;
							public hashCode(): number;
							public getExecution(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
							public toString(): string;
							public getCustomAttributes(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
							public equals(param0: any): boolean;
							public getInternalKeys(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
								public setExecution(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setInternalKeys(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setBackground(param0: java.lang.Boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setUiOrientation(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
								public setCustomAttributes(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
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
							public getThreads(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>;
							public getBinaries(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>;
							public getException(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution.Builder>;
								public setThreads(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setBinaries(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setSignal(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
								public setAppExitInfo(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
								public setException(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
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
							public getName(): string;
							public getBaseAddress(): number;
							public toString(): string;
							public getUuid(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_BinaryImage {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_BinaryImage.Builder>;
								public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public setSize(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public setBaseAddress(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
								public setUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
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
							public toString(): string;
							public getOverflowCount(): number;
							public equals(param0: any): boolean;
							public getFrames(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
							public getType(): string;
							public getReason(): string;
							public getCausedBy(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Exception {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Exception.Builder>;
								public setType(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setCausedBy(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setReason(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setFrames(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public setOverflowCount(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
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
							public getName(): string;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Signal {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Signal.Builder>;
								public setCode(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal;
								public setAddress(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
								public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal.Builder;
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
							public getName(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public getFrames(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread.Builder>;
								public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
								public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
								public setFrames(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread;
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
							public getFile(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public getOffset(): number;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread_Frame {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Application_Execution_Thread_Frame.Builder>;
								public setOffset(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setSymbol(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public setFile(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame;
								public setPc(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame.Builder;
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
							public getDiskUsed(): number;
							public toString(): string;
							public isProximityOn(): boolean;
							public equals(param0: any): boolean;
							public getOrientation(): number;
							public getRamUsed(): number;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Device {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Device.Builder>;
								public setBatteryLevel(param0: java.lang.Double): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setProximityOn(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setOrientation(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setBatteryVelocity(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
								public setRamUsed(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
								public setDiskUsed(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device.Builder;
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
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_Session_Event_Log {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_Event_Log.Builder>;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
								public setContent(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log.Builder;
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
							public getPlatform(): number;
							public isJailbroken(): boolean;
							public toString(): string;
							public equals(param0: any): boolean;
							public getBuildVersion(): string;
							public getVersion(): string;
						}
						export module AutoValue_CrashlyticsReport_Session_OperatingSystem {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_OperatingSystem.Builder>;
								public setVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
								public setPlatform(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
								public setBuildVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
								public setJailbroken(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem.Builder;
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
							public getIdentifier(): string;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_CrashlyticsReport_Session_User {
							export class Builder extends com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.AutoValue_CrashlyticsReport_Session_User.Builder>;
								public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User.Builder;
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
							public appData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData;
							public toString(): string;
							public equals(param0: any): boolean;
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
							public versionCode(): string;
							public toString(): string;
							public versionName(): string;
							public equals(param0: any): boolean;
							public appIdentifier(): string;
							public unityVersion(): string;
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
							public state(): number;
							public modelClass(): string;
							public manufacturer(): string;
							public toString(): string;
							public arch(): number;
							public diskSpace(): number;
							public equals(param0: any): boolean;
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
							public osRelease(): string;
							public isRooted(): boolean;
							public toString(): string;
							public osCodeName(): string;
							public equals(param0: any): boolean;
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
							public static DEVELOPMENT_PLATFORM_UNITY: string;
							public constructor();
							public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							public getSdkVersion(): string;
							public getGmpAppId(): string;
							public withEvents(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public withSessionEndFields(param0: number, param1: boolean, param2: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public getType(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
							public getDisplayVersion(): string;
							public getNdkPayload(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
							public getPlatform(): number;
							public withNdkPayload(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
							public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
							public getInstallationUuid(): string;
							public getBuildVersion(): string;
							public getSession(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
							public withOrganizationId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
						}
						export module CrashlyticsReport {
							export abstract class ApplicationExitInfo {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo>;
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
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder>;
									public constructor();
									public setPid(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
									public setReasonCode(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setTraceFile(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setTimestamp(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
									public setPss(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo.Builder;
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
								public constructor(implementation: {
								});
								public constructor();
								public static UNKNOWN: number;
								public static X86_64: number;
								public static X86_32: number;
								public static ARM64: number;
								public static ARMV7: number;
								public static ARMV6: number;
							}
							export abstract class Builder {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder>;
								public setInstallationUuid(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setSession(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setGmpAppId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setBuildVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
								public setSdkVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setDisplayVersion(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public constructor();
								public setPlatform(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
								public setNdkPayload(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Builder;
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
								public getFiles(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>;
								public getOrgId(): string;
								public constructor();
							}
							export module FilesPayload {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder>;
									public constructor();
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload;
									public setOrgId(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
									public setFiles(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.Builder;
								}
								export abstract class File {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File>;
									public constructor();
									public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
									public getContents(): native.Array<number>;
									public getFilename(): string;
								}
								export module File {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder>;
										public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File;
										public constructor();
										public setFilename(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
										public setContents(param0: native.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload.File.Builder;
									}
								}
							}
							export abstract class Session {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session>;
								public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
								public getGeneratorType(): number;
								public getEndedAt(): java.lang.Long;
								public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device;
								public getIdentifierUtf8Bytes(): native.Array<number>;
								public constructor();
								public getIdentifier(): string;
								public getOs(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem;
								public getStartedAt(): number;
								public getEvents(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>;
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
									public setEvents(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setGeneratorType(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setUser(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.User): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setApp(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setDevice(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setCrashed(param0: boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setGenerator(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setIdentifierFromUtf8Bytes(param0: native.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session;
									public setIdentifier(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setOs(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.OperatingSystem): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
									public setEndedAt(param0: java.lang.Long): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Builder;
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
									public getTimestamp(): number;
									public getLog(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log;
									public getDevice(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device;
									public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
								}
								export module Event {
									export abstract class Application {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application>;
										public getExecution(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
										public getCustomAttributes(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
										public getBackground(): java.lang.Boolean;
										public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
										public constructor();
										public getInternalKeys(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>;
										public toBuilder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
										public getUiOrientation(): number;
									}
									export module Application {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder>;
											public setBackground(param0: java.lang.Boolean): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application;
											public setExecution(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setCustomAttributes(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setInternalKeys(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.CustomAttribute>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public setUiOrientation(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Builder;
											public constructor();
										}
										export abstract class Execution {
											public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution>;
											public getBinaries(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>;
											public getAppExitInfo(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
											public getException(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
											public getSignal(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal;
											public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
											public constructor();
											public getThreads(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>;
										}
										export module Execution {
											export abstract class BinaryImage {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>;
												public constructor();
												public getName(): string;
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
												public getBaseAddress(): number;
												public getUuid(): string;
												public getSize(): number;
												public getUuidUtf8Bytes(): native.Array<number>;
											}
											export module BinaryImage {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder>;
													public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
													public setUuidFromUtf8Bytes(param0: native.Array<number>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage.Builder;
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
												public setBinaries(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.BinaryImage>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution;
												public setSignal(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Signal): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public setThreads(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
												public setAppExitInfo(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Builder;
											}
											export abstract class Exception {
												public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception>;
												public constructor();
												public getReason(): string;
												public getType(): string;
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
												public getCausedBy(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
												public getFrames(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
												public getOverflowCount(): number;
											}
											export module Exception {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder>;
													public setFrames(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public setType(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public setReason(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public constructor();
													public setCausedBy(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception.Builder;
													public build(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Exception;
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
												public static builder(): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
												public getFrames(): com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>;
											}
											export module Thread {
												export abstract class Builder {
													public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder>;
													public setImportance(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
													public setName(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
													public setFrames(param0: com.google.firebase.crashlytics.internal.model.ImmutableList<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Frame>): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application.Execution.Thread.Builder;
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
									}
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder>;
										public setLog(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Log): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setDevice(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Device): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setTimestamp(param0: number): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public setType(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
										public constructor();
										public setApp(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Application): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event.Builder;
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
								public static valueOf(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type;
								public static values(): native.Array<com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Type>;
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
						export class ImmutableList<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.ImmutableList<any>>;
							public contains(param0: any): boolean;
							public size(): number;
							public hashCode(): number;
							public toArray(): native.Array<any>;
							public subList(param0: number, param1: number): java.util.List<E>;
							public add(param0: E): boolean;
							public static from(param0: native.Array<any>): com.google.firebase.crashlytics.internal.model.ImmutableList<any>;
							public iterator(): java.util.Iterator<E>;
							public addAll(param0: java.util.Collection<any>): boolean;
							public remove(param0: number): E;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: E): void;
							public toArray(param0: native.Array<any>): native.Array<any>;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public lastIndexOf(param0: any): number;
							public remove(param0: any): boolean;
							public get(param0: number): E;
							public clear(): void;
							public indexOf(param0: any): number;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public set(param0: number, param1: E): E;
							public listIterator(): java.util.ListIterator<E>;
							public static from(param0: java.util.List): com.google.firebase.crashlytics.internal.model.ImmutableList<any>;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public listIterator(param0: number): java.util.ListIterator<E>;
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
							public static create(param0: com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData, param1: com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData, param2: com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData): com.google.firebase.crashlytics.internal.model.StaticSessionData;
							public appData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData;
							public deviceData(): com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData;
						}
						export module StaticSessionData {
							export abstract class AppData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData>;
								public appIdentifier(): string;
								public installUuid(): string;
								public versionCode(): string;
								public constructor();
								public unityVersion(): string;
								public static create(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string): com.google.firebase.crashlytics.internal.model.StaticSessionData.AppData;
								public deliveryMechanism(): number;
								public versionName(): string;
							}
							export abstract class DeviceData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData>;
								public arch(): number;
								public isEmulator(): boolean;
								public diskSpace(): number;
								public modelClass(): string;
								public model(): string;
								public constructor();
								public totalRam(): number;
								public static create(param0: number, param1: string, param2: number, param3: number, param4: number, param5: boolean, param6: number, param7: string, param8: string): com.google.firebase.crashlytics.internal.model.StaticSessionData.DeviceData;
								public manufacturer(): string;
								public availableProcessors(): number;
								public state(): number;
							}
							export abstract class OsData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData>;
								public osRelease(): string;
								public isRooted(): boolean;
								public constructor();
								public static create(param0: string, param1: string, param2: boolean): com.google.firebase.crashlytics.internal.model.StaticSessionData.OsData;
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
								public applicationExitInfoFromJson(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo;
								public applicationExitInfoToJson(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.ApplicationExitInfo): string;
								public reportFromJson(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport;
								public eventFromJson(param0: string): com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event;
								public reportToJson(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport): string;
								public constructor();
								public eventToJson(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event): string;
							}
							export module CrashlyticsReportJsonTransform {
								export class ObjectParser<T>  extends java.lang.Object {
									public static class: java.lang.Class<com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform.ObjectParser<any>>;
									/**
									 * Constructs a new instance of the com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform$ObjectParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										parse(param0: globalAndroid.util.JsonReader): T;
									});
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
							public header(param0: java.util.Map.Entry<string,string>): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
							public constructor(param0: string, param1: java.util.Map<string,string>);
							public execute(): com.google.firebase.crashlytics.internal.network.HttpResponse;
							public header(param0: string, param1: string): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
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
							public buildHttpGetRequest(param0: string): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
							public buildHttpGetRequest(param0: string, param1: java.util.Map<string,string>): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
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
							public constructor(param0: number, param1: string);
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
							public persistReport(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport): void;
							public finalizeSessionWithNativeEvent(param0: string, param1: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.FilesPayload): void;
							public loadFinalizedReports(): java.util.List<com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId>;
							public getStartTimestampMillis(param0: string): number;
							public constructor(param0: java.io.File, param1: com.google.firebase.crashlytics.internal.settings.SettingsDataProvider);
							public deleteFinalizedReport(param0: string): void;
							public hasFinalizedReports(): boolean;
							public persistEvent(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event, param1: string): void;
							public listSortedOpenSessionIds(): java.util.List<string>;
							public deleteAllReports(): void;
							public finalizeReports(param0: string, param1: number): void;
							public persistUserIdForSession(param0: string, param1: string): void;
							public persistEvent(param0: com.google.firebase.crashlytics.internal.model.CrashlyticsReport.Session.Event, param1: string, param2: boolean): void;
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
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.persistence.FileStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getFilesDir(): java.io.File;
								getFilesDirPath(): string;
							});
							public constructor();
							public getFilesDirPath(): string;
							public getFilesDir(): java.io.File;
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
						export class FileStoreImpl extends com.google.firebase.crashlytics.internal.persistence.FileStore {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.persistence.FileStoreImpl>;
							public static FILES_PATH: string;
							public getFilesDirPath(): string;
							public getFilesDir(): java.io.File;
							public constructor(param0: globalAndroid.content.Context);
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
							public sendReport(param0: com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.common.CrashlyticsReportWithSessionId>;
							public static create(param0: globalAndroid.content.Context): com.google.firebase.crashlytics.internal.send.DataTransportCrashlyticsReportSender;
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
							public writeCachedSettings(param0: number, param1: org.json.JSONObject): void;
							public readCachedSettings(): org.json.JSONObject;
							public constructor(param0: globalAndroid.content.Context);
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
							public buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.model.SettingsData;
							public toJson(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsData): org.json.JSONObject;
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
							public static valueOf(param0: string): com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior;
							public static values(): native.Array<com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior>;
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
						export class SettingsController extends com.google.firebase.crashlytics.internal.settings.SettingsDataProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsController>;
							public loadSettingsData(param0: com.google.firebase.crashlytics.internal.settings.SettingsCacheBehavior, param1: java.util.concurrent.Executor): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getSettings(): com.google.firebase.crashlytics.internal.settings.model.Settings;
							public loadSettingsData(param0: java.util.concurrent.Executor): com.google.android.gms.tasks.Task<java.lang.Void>;
							public getAppSettings(): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.settings.model.AppSettingsData>;
							public static create(param0: globalAndroid.content.Context, param1: string, param2: com.google.firebase.crashlytics.internal.common.IdManager, param3: com.google.firebase.crashlytics.internal.network.HttpRequestFactory, param4: string, param5: string, param6: com.google.firebase.crashlytics.internal.common.DataCollectionArbiter): com.google.firebase.crashlytics.internal.settings.SettingsController;
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
						export class SettingsDataProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.SettingsDataProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.settings.SettingsDataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSettings(): com.google.firebase.crashlytics.internal.settings.model.Settings;
								getAppSettings(): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.settings.model.AppSettingsData>;
							});
							public constructor();
							public getSettings(): com.google.firebase.crashlytics.internal.settings.model.Settings;
							public getAppSettings(): com.google.android.gms.tasks.Task<com.google.firebase.crashlytics.internal.settings.model.AppSettingsData>;
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
							public parseSettingsJson(param0: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.model.SettingsData;
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
							public constructor(implementation: {
								buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.model.SettingsData;
								toJson(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsData): org.json.JSONObject;
							});
							public constructor();
							public buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.model.SettingsData;
							public toJson(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsData): org.json.JSONObject;
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
							public buildFromJson(param0: com.google.firebase.crashlytics.internal.common.CurrentTimeProvider, param1: org.json.JSONObject): com.google.firebase.crashlytics.internal.settings.model.SettingsData;
							public toJson(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsData): org.json.JSONObject;
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
						export module model {
							export class AppRequestData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.AppRequestData>;
								public organizationId: string;
								public googleAppId: string;
								public appId: string;
								public displayVersion: string;
								public buildVersion: string;
								public instanceIdentifier: string;
								public name: string;
								public source: number;
								public minSdkVersion: string;
								public builtSdkVersion: string;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: number, param8: string, param9: string);
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
						export module model {
							export class AppSettingsData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.AppSettingsData>;
								public static STATUS_NEW: string;
								public static STATUS_CONFIGURED: string;
								public static STATUS_ACTIVATED: string;
								public status: string;
								public url: string;
								public reportsUrl: string;
								public ndkReportsUrl: string;
								public bundleId: string;
								public organizationId: string;
								public updateRequired: boolean;
								public reportUploadVariant: number;
								public nativeReportUploadVariant: number;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean);
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: number, param8: number);
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
						export module model {
							export class FeaturesSettingsData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.FeaturesSettingsData>;
								public collectReports: boolean;
								public collectAnrs: boolean;
								public constructor(param0: boolean, param1: boolean);
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
						export module model {
							export class SessionSettingsData {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.SessionSettingsData>;
								public maxCustomExceptionEvents: number;
								public maxCompleteSessionsCount: number;
								public constructor(param0: number, param1: number);
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
						export module model {
							export class Settings {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.Settings>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.settings.model.Settings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSessionData(): com.google.firebase.crashlytics.internal.settings.model.SessionSettingsData;
									getFeaturesData(): com.google.firebase.crashlytics.internal.settings.model.FeaturesSettingsData;
									getExpiresAtMillis(): number;
									getSettingsVersion(): number;
									getCacheDuration(): number;
									isExpired(param0: number): boolean;
								});
								public constructor();
								public getSettingsVersion(): number;
								public getCacheDuration(): number;
								public getExpiresAtMillis(): number;
								public getFeaturesData(): com.google.firebase.crashlytics.internal.settings.model.FeaturesSettingsData;
								public isExpired(param0: number): boolean;
								public getSessionData(): com.google.firebase.crashlytics.internal.settings.model.SessionSettingsData;
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
						export module model {
							export class SettingsData extends com.google.firebase.crashlytics.internal.settings.model.Settings {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.SettingsData>;
								public appData: com.google.firebase.crashlytics.internal.settings.model.AppSettingsData;
								public sessionData: com.google.firebase.crashlytics.internal.settings.model.SessionSettingsData;
								public featuresData: com.google.firebase.crashlytics.internal.settings.model.FeaturesSettingsData;
								public expiresAtMillis: number;
								public settingsVersion: number;
								public cacheDuration: number;
								public getAppSettingsData(): com.google.firebase.crashlytics.internal.settings.model.AppSettingsData;
								public getSettingsVersion(): number;
								public getCacheDuration(): number;
								public getExpiresAtMillis(): number;
								public getFeaturesData(): com.google.firebase.crashlytics.internal.settings.model.FeaturesSettingsData;
								public isExpired(param0: number): boolean;
								public constructor(param0: number, param1: com.google.firebase.crashlytics.internal.settings.model.AppSettingsData, param2: com.google.firebase.crashlytics.internal.settings.model.SessionSettingsData, param3: com.google.firebase.crashlytics.internal.settings.model.FeaturesSettingsData, param4: number, param5: number);
								public getSessionData(): com.google.firebase.crashlytics.internal.settings.model.SessionSettingsData;
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
						export module model {
							export class SettingsRequest {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.model.SettingsRequest>;
								public googleAppId: string;
								public deviceModel: string;
								public osBuildVersion: string;
								public osDisplayVersion: string;
								public installIdProvider: com.google.firebase.crashlytics.internal.common.InstallIdProvider;
								public instanceId: string;
								public displayVersion: string;
								public buildVersion: string;
								public source: number;
								public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.google.firebase.crashlytics.internal.common.InstallIdProvider, param5: string, param6: string, param7: string, param8: number);
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
						export module network {
							export class DefaultSettingsSpiCall extends com.google.firebase.crashlytics.internal.settings.network.SettingsSpiCall {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.network.DefaultSettingsSpiCall>;
								public constructor(param0: string, param1: com.google.firebase.crashlytics.internal.network.HttpRequestFactory);
								public invoke(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsRequest, param1: boolean): org.json.JSONObject;
								public createHttpGetRequest(param0: java.util.Map<string,string>): com.google.firebase.crashlytics.internal.network.HttpGetRequest;
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
						export module network {
							export class SettingsSpiCall {
								public static class: java.lang.Class<com.google.firebase.crashlytics.internal.settings.network.SettingsSpiCall>;
								/**
								 * Constructs a new instance of the com.google.firebase.crashlytics.internal.settings.network.SettingsSpiCall interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									invoke(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsRequest, param1: boolean): org.json.JSONObject;
								});
								public constructor();
								public invoke(param0: com.google.firebase.crashlytics.internal.settings.model.SettingsRequest, param1: boolean): org.json.JSONObject;
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
					export module stacktrace {
						export class MiddleOutFallbackStrategy extends com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.stacktrace.MiddleOutFallbackStrategy>;
							public constructor(param0: number, param1: native.Array<com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy>);
							public getTrimmedStackTrace(param0: native.Array<java.lang.StackTraceElement>): native.Array<java.lang.StackTraceElement>;
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
							public getTrimmedStackTrace(param0: native.Array<java.lang.StackTraceElement>): native.Array<java.lang.StackTraceElement>;
							public constructor(param0: number);
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
							public getTrimmedStackTrace(param0: native.Array<java.lang.StackTraceElement>): native.Array<java.lang.StackTraceElement>;
							public constructor(param0: number);
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
							public constructor(implementation: {
								getTrimmedStackTrace(param0: native.Array<java.lang.StackTraceElement>): native.Array<java.lang.StackTraceElement>;
							});
							public constructor();
							public getTrimmedStackTrace(param0: native.Array<java.lang.StackTraceElement>): native.Array<java.lang.StackTraceElement>;
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
							public stacktrace: native.Array<java.lang.StackTraceElement>;
							public cause: com.google.firebase.crashlytics.internal.stacktrace.TrimmedThrowableData;
							public constructor(param0: java.lang.Throwable, param1: com.google.firebase.crashlytics.internal.stacktrace.StackTraceTrimmingStrategy);
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
					export module unity {
						export class ResourceUnityVersionProvider extends com.google.firebase.crashlytics.internal.unity.UnityVersionProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.unity.ResourceUnityVersionProvider>;
							public getUnityVersion(): string;
							public constructor(param0: globalAndroid.content.Context);
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
					export module unity {
						export class UnityVersionProvider {
							public static class: java.lang.Class<com.google.firebase.crashlytics.internal.unity.UnityVersionProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.crashlytics.internal.unity.UnityVersionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getUnityVersion(): string;
							});
							public constructor();
							public getUnityVersion(): string;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.crashlytics.internal.model.ImmutableList:1
//com.google.firebase.crashlytics.internal.model.serialization.CrashlyticsReportJsonTransform.ObjectParser:1

