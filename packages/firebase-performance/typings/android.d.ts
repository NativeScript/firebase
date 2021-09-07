declare module com {
	export module google {
		export module firebase {
			export module perf {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.perf.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static ENFORCE_DEFAULT_LOG_SRC: java.lang.Boolean;
					public static FIREPERF_VERSION_NAME: string;
					public static TRANSPORT_LOG_SRC: string;
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
					public static MAX_TRACE_NAME_LENGTH: number;
					public setPerformanceCollectionEnabled(param0: boolean): void;
					public newHttpMetric(param0: string, param1: string): com.google.firebase.perf.metrics.HttpMetric;
					public newHttpMetric(param0: java.net.URL, param1: string): com.google.firebase.perf.metrics.HttpMetric;
					public static getInstance(): com.google.firebase.perf.FirebasePerformance;
					public isPerformanceCollectionEnabled(): boolean;
					public setPerformanceCollectionEnabled(param0: java.lang.Boolean): void;
					public getAttributes(): java.util.Map<string,string>;
					public putAttribute(param0: string, param1: string): void;
					public removeAttribute(param0: string): void;
					public newTrace(param0: string): com.google.firebase.perf.metrics.Trace;
					public static startTrace(param0: string): com.google.firebase.perf.metrics.Trace;
					public getAttribute(param0: string): string;
				}
				export module FirebasePerformance {
					export class HttpMethod {
						public static class: java.lang.Class<com.google.firebase.perf.FirebasePerformance.HttpMethod>;
						/**
						 * Constructs a new instance of the com.google.firebase.perf.FirebasePerformance$HttpMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static HEAD: string;
						public static TRACE: string;
						public static DELETE: string;
						public static POST: string;
						public static GET: string;
						public static CONNECT: string;
						public static OPTIONS: string;
						public static PUT: string;
						public static PATCH: string;
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
					public constructor(implementation: {
						putAttribute(param0: string, param1: string): void;
						getAttribute(param0: string): string;
						removeAttribute(param0: string): void;
						getAttributes(): java.util.Map<string,string>;
					});
					public constructor();
					public static MAX_ATTRIBUTE_KEY_LENGTH: number;
					public static MAX_TRACE_NAME_LENGTH: number;
					public static MAX_TRACE_CUSTOM_ATTRIBUTES: number;
					public static MAX_ATTRIBUTE_VALUE_LENGTH: number;
					public getAttributes(): java.util.Map<string,string>;
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
					public static newInstance(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>, param2: com.google.firebase.installations.FirebaseInstallationsApi, param3: com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>, param4: com.google.firebase.perf.config.RemoteConfigManager, param5: com.google.firebase.perf.config.ConfigResolver, param6: com.google.firebase.perf.session.gauges.GaugeManager): com.google.firebase.perf.FirebasePerformance;
					public constructor(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>>, param2: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param3: javax.inject.Provider<com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>>, param4: javax.inject.Provider<com.google.firebase.perf.config.RemoteConfigManager>, param5: javax.inject.Provider<com.google.firebase.perf.config.ConfigResolver>, param6: javax.inject.Provider<com.google.firebase.perf.session.gauges.GaugeManager>);
					public static create(param0: javax.inject.Provider<com.google.firebase.FirebaseApp>, param1: javax.inject.Provider<com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>>, param2: javax.inject.Provider<com.google.firebase.installations.FirebaseInstallationsApi>, param3: javax.inject.Provider<com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>>, param4: javax.inject.Provider<com.google.firebase.perf.config.RemoteConfigManager>, param5: javax.inject.Provider<com.google.firebase.perf.config.ConfigResolver>, param6: javax.inject.Provider<com.google.firebase.perf.session.gauges.GaugeManager>): com.google.firebase.perf.FirebasePerformance_Factory;
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
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public setIsColdStart(param0: boolean): void;
						public incrementCount(param0: string, param1: number): void;
						public incrementTsnsCount(param0: number): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public isForeground(): boolean;
						public static getInstance(): com.google.firebase.perf.application.AppStateMonitor;
						public getAppState(): com.google.firebase.perf.v1.ApplicationProcessState;
						public registerForAppColdStart(param0: com.google.firebase.perf.application.AppStateMonitor.AppColdStartCallback): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public static getScreenTraceName(param0: globalAndroid.app.Activity): string;
						public registerActivityLifecycleCallbacks(param0: globalAndroid.content.Context): void;
						public unregisterActivityLifecycleCallbacks(param0: globalAndroid.content.Context): void;
						public registerForAppState(param0: java.lang.ref.WeakReference<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>): void;
						public unregisterForAppState(param0: java.lang.ref.WeakReference<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>): void;
						public isColdStart(): boolean;
					}
					export module AppStateMonitor {
						export class AppColdStartCallback {
							public static class: java.lang.Class<com.google.firebase.perf.application.AppStateMonitor.AppColdStartCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.application.AppStateMonitor$AppColdStartCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAppColdStart(): void;
							});
							public constructor();
							public onAppColdStart(): void;
						}
						export class AppStateCallback {
							public static class: java.lang.Class<com.google.firebase.perf.application.AppStateMonitor.AppStateCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.perf.application.AppStateMonitor$AppStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
							});
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
						public constructor();
						public unregisterForAppState(): void;
						public registerForAppState(): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public constructor(param0: com.google.firebase.perf.application.AppStateMonitor);
						public incrementTsnsCount(param0: number): void;
						public getAppState(): com.google.firebase.perf.v1.ApplicationProcessState;
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
						public static clearInstance(): void;
						public getIsServiceCollectionEnabled(): boolean;
						public getSessionsCpuCaptureFrequencyBackgroundMs(): number;
						public setMetadataBundle(param0: com.google.firebase.perf.util.ImmutableBundle): void;
						public getAndCacheLogSourceName(): string;
						public getIsPerformanceCollectionDeactivated(): java.lang.Boolean;
						public getTraceEventCountBackground(): number;
						public setContentProviderContext(param0: globalAndroid.content.Context): void;
						public static getInstance(): com.google.firebase.perf.config.ConfigResolver;
						public getNetworkEventCountForeground(): number;
						public getSessionsMemoryCaptureFrequencyForegroundMs(): number;
						public isPerformanceMonitoringEnabled(): boolean;
						public getNetworkRequestSamplingRate(): number;
						public getSessionsMemoryCaptureFrequencyBackgroundMs(): number;
						public getTraceEventCountForeground(): number;
						public getSessionsSamplingRate(): number;
						public setApplicationContext(param0: globalAndroid.content.Context): void;
						public getTraceSamplingRate(): number;
						public setDeviceCacheManager(param0: com.google.firebase.perf.config.DeviceCacheManager): void;
						public getNetworkEventCountBackground(): number;
						public getIsPerformanceCollectionEnabled(): java.lang.Boolean;
						public getRateLimitSec(): number;
						public constructor(param0: com.google.firebase.perf.config.RemoteConfigManager, param1: com.google.firebase.perf.util.ImmutableBundle, param2: com.google.firebase.perf.config.DeviceCacheManager);
						public setIsPerformanceCollectionEnabled(param0: java.lang.Boolean): void;
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
						export class LogSourceName extends com.google.firebase.perf.config.ConfigurationFlag<string> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.LogSourceName>;
							public getDefault(): any;
							public getDefault(): string;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public static getLogSourceName(param0: number): string;
							public static isLogSourceKnown(param0: number): boolean;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.LogSourceName;
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
						export class NetworkRequestSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Float> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.NetworkRequestSamplingRate>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.NetworkRequestSamplingRate;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefault(): java.lang.Float;
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
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
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
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.SessionsMemoryCaptureFrequencyForegroundMs;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getMetadataFlag(): string;
							public getDefault(): java.lang.Long;
						}
						export class SessionsSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Float> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.SessionsSamplingRate>;
							public getDefault(): any;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefault(): java.lang.Float;
							public getMetadataFlag(): string;
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
						export class TraceSamplingRate extends com.google.firebase.perf.config.ConfigurationFlag<java.lang.Float> {
							public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationConstants.TraceSamplingRate>;
							public getDefault(): any;
							public static getInstance(): com.google.firebase.perf.config.ConfigurationConstants.TraceSamplingRate;
							public getRemoteConfigFlag(): string;
							public getDeviceCacheFlag(): string;
							public getDefault(): java.lang.Float;
						}
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
					export abstract class ConfigurationFlag<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.perf.config.ConfigurationFlag<any>>;
						public getDefault(): T;
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
						public static getInstance(): com.google.firebase.perf.config.DeviceCacheManager;
						public setValue(param0: string, param1: string): boolean;
						public getFloat(param0: string): com.google.firebase.perf.util.Optional<java.lang.Float>;
						public setContext(param0: globalAndroid.content.Context): void;
						public static clearInstance(): void;
						public setValue(param0: string, param1: boolean): boolean;
						public getBoolean(param0: string): com.google.firebase.perf.util.Optional<java.lang.Boolean>;
						public containsKey(param0: string): boolean;
						public getLong(param0: string): com.google.firebase.perf.util.Optional<java.lang.Long>;
						public constructor(param0: java.util.concurrent.ExecutorService);
						public getString(param0: string): com.google.firebase.perf.util.Optional<string>;
						public clear(param0: string): void;
						public setValue(param0: string, param1: number): boolean;
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
						public getRemoteConfigValueOrDefault(param0: string, param1: any): any;
						public getFloat(param0: string): com.google.firebase.perf.util.Optional<java.lang.Float>;
						public setFirebaseRemoteConfigProvider(param0: com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>): void;
						public static getInstance(): com.google.firebase.perf.config.RemoteConfigManager;
						public getLong(param0: string): com.google.firebase.perf.util.Optional<java.lang.Long>;
						public syncConfigValues(param0: java.util.Map<string,com.google.firebase.remoteconfig.FirebaseRemoteConfigValue>): void;
						public static getVersionCode(param0: globalAndroid.content.Context): number;
						public getString(param0: string): com.google.firebase.perf.util.Optional<string>;
						public getCurrentSystemTimeMillis(): number;
						public isFirebaseRemoteConfigAvailable(): boolean;
						public isLastFetchFailed(): boolean;
						public getBoolean(param0: string): com.google.firebase.perf.util.Optional<java.lang.Boolean>;
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
						export class DaggerFirebasePerformanceComponent extends com.google.firebase.perf.injection.components.FirebasePerformanceComponent {
							public static class: java.lang.Class<com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent>;
							public static builder(): com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.Builder;
							public getFirebasePerformance(): com.google.firebase.perf.FirebasePerformance;
						}
						export module DaggerFirebasePerformanceComponent {
							export class Builder {
								public static class: java.lang.Class<com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.Builder>;
								public build(): com.google.firebase.perf.injection.components.FirebasePerformanceComponent;
								public firebasePerformanceModule(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.components.DaggerFirebasePerformanceComponent.Builder;
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
							public constructor(implementation: {
								getFirebasePerformance(): com.google.firebase.perf.FirebasePerformance;
							});
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
							public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.installations.FirebaseInstallationsApi, param2: com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>, param3: com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>);
						}
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
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public get(): com.google.firebase.perf.config.ConfigResolver;
							public static providesConfigResolver(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.config.ConfigResolver;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesConfigResolverFactory;
						}
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
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public static providesFirebaseApp(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.FirebaseApp;
							public get(): com.google.firebase.FirebaseApp;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesFirebaseAppFactory;
						}
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
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public static providesFirebaseInstallations(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.installations.FirebaseInstallationsApi;
							public get(): com.google.firebase.installations.FirebaseInstallationsApi;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesFirebaseInstallationsFactory;
						}
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
						export class FirebasePerformanceModule_ProvidesGaugeManagerFactory extends dagger.internal.Factory<com.google.firebase.perf.session.gauges.GaugeManager> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesGaugeManagerFactory>;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesGaugeManagerFactory;
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public get(): com.google.firebase.perf.session.gauges.GaugeManager;
							public static providesGaugeManager(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.session.gauges.GaugeManager;
						}
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
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public get(): com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>;
							public static providesRemoteConfigComponent(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.inject.Provider<com.google.firebase.remoteconfig.RemoteConfigComponent>;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesRemoteConfigComponentFactory;
						}
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
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public static providesRemoteConfigManager(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.config.RemoteConfigManager;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesRemoteConfigManagerFactory;
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
						export class FirebasePerformanceModule_ProvidesTransportFactoryProviderFactory extends dagger.internal.Factory<com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>> {
							public static class: java.lang.Class<com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesTransportFactoryProviderFactory>;
							public constructor(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule);
							public static providesTransportFactoryProvider(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>;
							public get(): com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>;
							public static create(param0: com.google.firebase.perf.injection.modules.FirebasePerformanceModule): com.google.firebase.perf.injection.modules.FirebasePerformanceModule_ProvidesTransportFactoryProviderFactory;
						}
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
						public debug(param0: string): void;
						public warn(param0: string, param1: native.Array<any>): void;
						public static getInstance(): com.google.firebase.perf.logging.AndroidLogger;
						public isLogcatEnabled(): boolean;
						public info(param0: string): void;
						public info(param0: string, param1: native.Array<any>): void;
						public verbose(param0: string): void;
						public constructor(param0: com.google.firebase.perf.logging.LogWrapper);
						public error(param0: string, param1: native.Array<any>): void;
						public debug(param0: string, param1: native.Array<any>): void;
						public verbose(param0: string, param1: native.Array<any>): void;
						public warn(param0: string): void;
						public error(param0: string): void;
						public setLogcatEnabled(param0: boolean): void;
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
						public constructor();
						public static generateScreenTraceUrl(param0: string, param1: string, param2: string): string;
						public static generateDashboardUrl(param0: string, param1: string): string;
						public static generateCustomTraceUrl(param0: string, param1: string, param2: string): string;
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
						public constructor(implementation: {
							name(): string;
							enabled(): boolean;
						});
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
					export class AppStartTrace {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace>;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public static setLauncherActivityOnResumeTime(param0: string): void;
						public static getInstance(): com.google.firebase.perf.metrics.AppStartTrace;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public static setLauncherActivityOnStartTime(param0: string): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public static setLauncherActivityOnCreateTime(param0: string): void;
						public registerActivityLifecycleCallbacks(param0: globalAndroid.content.Context): void;
						public unregisterActivityLifecycleCallbacks(): void;
					}
					export module AppStartTrace {
						export class StartFromBackgroundRunnable {
							public static class: java.lang.Class<com.google.firebase.perf.metrics.AppStartTrace.StartFromBackgroundRunnable>;
							public constructor(param0: com.google.firebase.perf.metrics.AppStartTrace);
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
						public increment(param0: number): void;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
			export module perf {
				export module metrics {
					export class HttpMetric extends com.google.firebase.perf.FirebasePerformanceAttributable {
						public static class: java.lang.Class<com.google.firebase.perf.metrics.HttpMetric>;
						public markResponseStart(): void;
						public removeAttribute(param0: string): void;
						public stop(): void;
						public constructor(param0: string, param1: string, param2: com.google.firebase.perf.transport.TransportManager, param3: com.google.firebase.perf.util.Timer);
						public setResponseContentType(param0: string): void;
						public start(): void;
						public getAttributes(): java.util.Map<string,string>;
						public markRequestComplete(): void;
						public putAttribute(param0: string, param1: string): void;
						public setRequestPayloadSize(param0: number): void;
						public constructor(param0: java.net.URL, param1: string, param2: com.google.firebase.perf.transport.TransportManager, param3: com.google.firebase.perf.util.Timer);
						public setHttpResponseCode(param0: number): void;
						public getAttribute(param0: string): string;
						public setResponsePayloadSize(param0: number): void;
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
						public setTimeToResponseCompletedMicros(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public updateSession(param0: com.google.firebase.perf.session.PerfSession): void;
						public setHttpResponseCode(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setRequestStartTimeMicros(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public constructor();
						public setManualNetworkRequestMetric(): void;
						public setResponseContentType(param0: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public setUserAgent(param0: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setRequestPayloadBytes(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public getUrl(): string;
						public setTimeToRequestCompletedMicros(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setUrl(param0: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setCustomAttributes(param0: java.util.Map<string,string>): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public getTimeToResponseInitiatedMicros(): number;
						public constructor(param0: com.google.firebase.perf.application.AppStateMonitor);
						public hasHttpResponseCode(): boolean;
						public constructor(param0: com.google.firebase.perf.transport.TransportManager, param1: com.google.firebase.perf.application.AppStateMonitor, param2: com.google.firebase.perf.session.gauges.GaugeManager);
						public setNetworkClientErrorReason(): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public static builder(param0: com.google.firebase.perf.transport.TransportManager): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setTimeToResponseInitiatedMicros(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setHttpMethod(param0: string): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public setResponsePayloadBytes(param0: number): com.google.firebase.perf.metrics.NetworkRequestMetricBuilder;
						public build(): com.google.firebase.perf.v1.NetworkRequestMetric;
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
						public static create(param0: string): com.google.firebase.perf.metrics.Trace;
						public constructor();
						public incrementMetric(param0: string, param1: number): void;
						public describeContents(): number;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public constructor(param0: string, param1: com.google.firebase.perf.transport.TransportManager, param2: com.google.firebase.perf.util.Clock, param3: com.google.firebase.perf.application.AppStateMonitor, param4: com.google.firebase.perf.session.gauges.GaugeManager);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public removeAttribute(param0: string): void;
						public stop(): void;
						public finalize(): void;
						public start(): void;
						public constructor(param0: string, param1: com.google.firebase.perf.transport.TransportManager, param2: com.google.firebase.perf.util.Clock, param3: com.google.firebase.perf.application.AppStateMonitor);
						public getAttributes(): java.util.Map<string,string>;
						public constructor(param0: com.google.firebase.perf.application.AppStateMonitor);
						public putAttribute(param0: string, param1: string): void;
						public getLongMetric(param0: string): number;
						public putMetric(param0: string, param1: number): void;
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
							public constructor(implementation: {
							});
							public constructor();
							public static TRACE: string;
							public static NETWORK: string;
						}
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
							public static validateTraceName(param0: string): string;
							public isValidPerfMetric(): boolean;
							public static isValid(param0: com.google.firebase.perf.v1.PerfMetric, param1: globalAndroid.content.Context): boolean;
							public static validateMetricName(param0: string): string;
							public static validateAttribute(param0: java.util.Map.Entry<string,string>): string;
						}
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
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler): any;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler, param4: org.apache.http.protocol.HttpContext): any;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler): any;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest): org.apache.http.HttpResponse;
						public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler, param3: org.apache.http.protocol.HttpContext): any;
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
						public static execute(param0: okhttp3.Call): okhttp3.Response;
						public static enqueue(param0: okhttp3.Call, param1: okhttp3.Callback): void;
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
						public static getContent(param0: java.net.URL): any;
						public static instrument(param0: any): any;
						public static getContent(param0: java.net.URL, param1: native.Array<java.lang.Class>): any;
						public static openStream(param0: java.net.URL): java.io.InputStream;
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
						public read(): number;
						public skip(param0: number): number;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public reset(): void;
						public constructor(param0: java.io.InputStream, param1: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder, param2: com.google.firebase.perf.util.Timer);
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
						public close(): void;
						public write(param0: number): void;
						public constructor(param0: java.io.OutputStream, param1: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder, param2: com.google.firebase.perf.util.Timer);
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public flush(): void;
						public write(param0: native.Array<number>): void;
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
						public getContentLength(): number;
						public equals(param0: any): boolean;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public hashCode(): number;
						public getUseCaches(): boolean;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
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
						public getContentLength(): number;
						public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
						public equals(param0: any): boolean;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public getLocalCertificates(): native.Array<java.security.cert.Certificate>;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getServerCertificates(): native.Array<java.security.cert.Certificate>;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getPeerPrincipal(): java.security.Principal;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public hashCode(): number;
						public getCipherSuite(): string;
						public getUseCaches(): boolean;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getLocalPrincipal(): java.security.Principal;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
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
						public getContentLength(): number;
						public equals(param0: any): boolean;
						public setRequestMethod(param0: string): void;
						public getContent(): any;
						public getRequestMethod(): string;
						public constructor(param0: java.net.HttpURLConnection, param1: com.google.firebase.perf.util.Timer, param2: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder);
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public getHeaderFieldKey(param0: number): string;
						public getHeaderField(param0: number): string;
						public getContent(param0: native.Array<java.lang.Class>): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getConnectTimeout(): number;
						public getRequestProperty(param0: string): string;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public hashCode(): number;
						public getUseCaches(): boolean;
						public getLastModified(): number;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getExpiration(): number;
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getContentType(): string;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
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
					export class InstrumentApacheHttpResponseHandler<T>  extends org.apache.http.client.ResponseHandler<any> {
						public static class: java.lang.Class<com.google.firebase.perf.network.InstrumentApacheHttpResponseHandler<any>>;
						public handleResponse(param0: org.apache.http.HttpResponse): any;
						public constructor(param0: org.apache.http.client.ResponseHandler<any>, param1: com.google.firebase.perf.util.Timer, param2: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder);
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
						public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
						public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
						public constructor(param0: okhttp3.Callback, param1: com.google.firebase.perf.transport.TransportManager, param2: com.google.firebase.perf.util.Timer, param3: number);
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
						public static isAllowedUserAgent(param0: string): boolean;
						public static logError(param0: com.google.firebase.perf.metrics.NetworkRequestMetricBuilder): void;
						public static getApacheHttpResponseContentType(param0: org.apache.http.HttpResponse): string;
						public static getApacheHttpMessageContentLength(param0: org.apache.http.HttpMessage): java.lang.Long;
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
				export module provider {
					export class FirebasePerfProvider {
						public static class: java.lang.Class<com.google.firebase.perf.provider.FirebasePerfProvider>;
						public constructor();
						public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
						public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
						public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						public onCreate(): boolean;
						public static getAppStartTime(): com.google.firebase.perf.util.Timer;
						public getType(param0: globalAndroid.net.Uri): string;
						public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
						public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
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
						public isExpired(): boolean;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getTimer(): com.google.firebase.perf.util.Timer;
						public setGaugeAndEventCollectionEnabled(param0: boolean): void;
						public static buildAndSort(param0: java.util.List<com.google.firebase.perf.session.PerfSession>): native.Array<com.google.firebase.perf.v1.PerfSession>;
						public build(): com.google.firebase.perf.v1.PerfSession;
						public constructor(param0: string, param1: com.google.firebase.perf.util.Clock);
						public static shouldCollectGaugesAndEvents(): boolean;
						public sessionId(): string;
						public isGaugeAndEventCollectionEnabled(): boolean;
						public static create(): com.google.firebase.perf.session.PerfSession;
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
						public constructor(implementation: {
							updateSession(param0: com.google.firebase.perf.session.PerfSession): void;
						});
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
						public registerForSessionUpdates(param0: java.lang.ref.WeakReference<com.google.firebase.perf.session.SessionAwareObject>): void;
						public constructor();
						public setPerfSession(param0: com.google.firebase.perf.session.PerfSession): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public constructor(param0: com.google.firebase.perf.application.AppStateMonitor);
						public constructor(param0: com.google.firebase.perf.session.gauges.GaugeManager, param1: com.google.firebase.perf.session.PerfSession, param2: com.google.firebase.perf.application.AppStateMonitor);
						public updatePerfSessionIfExpired(): boolean;
						public unregisterForSessionUpdates(param0: java.lang.ref.WeakReference<com.google.firebase.perf.session.SessionAwareObject>): void;
						public updatePerfSession(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
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
							public static INVALID_CPU_COLLECTION_FREQUENCY: number;
							public cpuMetricReadings: java.util.concurrent.ConcurrentLinkedQueue<com.google.firebase.perf.v1.CpuMetricReading>;
							public startCollecting(param0: number, param1: com.google.firebase.perf.util.Timer): void;
							public collectOnce(param0: com.google.firebase.perf.util.Timer): void;
							public static isInvalidCollectionFrequency(param0: number): boolean;
							public static getInstance(): com.google.firebase.perf.session.gauges.CpuGaugeCollector;
							public stopCollecting(): void;
						}
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
							public startCollectingGauges(param0: com.google.firebase.perf.session.PerfSession, param1: com.google.firebase.perf.v1.ApplicationProcessState): void;
							public collectGaugeMetricOnce(param0: com.google.firebase.perf.util.Timer): void;
							public static getInstance(): com.google.firebase.perf.session.gauges.GaugeManager;
							public setApplicationContext(param0: globalAndroid.content.Context): void;
							public logGaugeMetadata(param0: string, param1: com.google.firebase.perf.v1.ApplicationProcessState): boolean;
							public stopCollectingGauges(): void;
						}
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
							public getProcessName(): string;
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
							public static INVALID_MEMORY_COLLECTION_FREQUENCY: number;
							public memoryMetricReadings: java.util.concurrent.ConcurrentLinkedQueue<com.google.firebase.perf.v1.AndroidMemoryReading>;
							public static getInstance(): com.google.firebase.perf.session.gauges.MemoryGaugeCollector;
							public startCollecting(param0: number, param1: com.google.firebase.perf.util.Timer): void;
							public collectOnce(param0: com.google.firebase.perf.util.Timer): void;
							public static isInvalidCollectionFrequency(param0: number): boolean;
							public stopCollecting(): void;
						}
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
						public log(param0: com.google.firebase.perf.v1.PerfMetric): void;
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
						public constructor(param0: com.google.firebase.perf.v1.PerfMetric.Builder, param1: com.google.firebase.perf.v1.ApplicationProcessState);
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
						public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.perf.util.Rate, param2: number);
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
						public log(param0: com.google.firebase.perf.v1.TraceMetric): void;
						public log(param0: com.google.firebase.perf.v1.GaugeMetric): void;
						public log(param0: com.google.firebase.perf.v1.TraceMetric, param1: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public onUpdateAppState(param0: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public log(param0: com.google.firebase.perf.v1.NetworkRequestMetric, param1: com.google.firebase.perf.v1.ApplicationProcessState): void;
						public isInitialized(): boolean;
						public static getInstance(): com.google.firebase.perf.transport.TransportManager;
						public initialize(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.installations.FirebaseInstallationsApi, param2: com.google.firebase.inject.Provider<com.google.android.datatransport.TransportFactory>): void;
						public clearAppInstanceId(): void;
						public getPendingEventsQueue(): java.util.concurrent.ConcurrentLinkedQueue<com.google.firebase.perf.transport.PendingPerfEvent>;
						public log(param0: com.google.firebase.perf.v1.NetworkRequestMetric): void;
						public setInitialized(param0: boolean): void;
						public log(param0: com.google.firebase.perf.v1.GaugeMetric, param1: com.google.firebase.perf.v1.ApplicationProcessState): void;
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
						public static PREFS_NAME: string;
						public static ENABLE_DISABLE: string;
						public static MIN_SAMPLING_RATE: number;
						public static MAX_SAMPLING_RATE: number;
						public static MAX_URL_LENGTH: number;
						public static MAX_HOST_LENGTH: number;
						public static MAX_CONTENT_TYPE_LENGTH: number;
						public static MAX_TRACE_CUSTOM_ATTRIBUTES: number;
						public static MAX_TRACE_ID_LENGTH: number;
						public static MAX_COUNTER_ID_LENGTH: number;
						public static MAX_ATTRIBUTE_KEY_LENGTH: number;
						public static MAX_ATTRIBUTE_VALUE_LENGTH: number;
						public static MAX_SUBTRACE_DEEP: number;
						public static RATE_PER_MINUTE: number;
						public static BURST_CAPACITY: number;
						public static SCREEN_TRACE_PREFIX: string;
						public static SLOW_FRAME_TIME: number;
						public static FROZEN_FRAME_TIME: number;
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
							public static values(): native.Array<com.google.firebase.perf.util.Constants.CounterNames>;
							public toString(): string;
							public static valueOf(param0: string): com.google.firebase.perf.util.Constants.CounterNames;
						}
						export class TraceNames {
							public static class: java.lang.Class<com.google.firebase.perf.util.Constants.TraceNames>;
							public static APP_START_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static ON_CREATE_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static ON_START_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static ON_RESUME_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static FOREGROUND_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static BACKGROUND_TRACE_NAME: com.google.firebase.perf.util.Constants.TraceNames;
							public static valueOf(param0: string): com.google.firebase.perf.util.Constants.TraceNames;
							public static values(): native.Array<com.google.firebase.perf.util.Constants.TraceNames>;
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
					export class ImmutableBundle {
						public static class: java.lang.Class<com.google.firebase.perf.util.ImmutableBundle>;
						public containsKey(param0: string): boolean;
						public constructor(param0: globalAndroid.os.Bundle);
						public constructor();
						public getFloat(param0: string): com.google.firebase.perf.util.Optional<java.lang.Float>;
						public getLong(param0: string): com.google.firebase.perf.util.Optional<java.lang.Long>;
						public getBoolean(param0: string): com.google.firebase.perf.util.Optional<java.lang.Boolean>;
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
					export class Optional<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.perf.util.Optional<any>>;
						public static of(param0: any): com.google.firebase.perf.util.Optional<any>;
						public get(): T;
						public static fromNullable(param0: any): com.google.firebase.perf.util.Optional<any>;
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
					export class Rate {
						public static class: java.lang.Class<com.google.firebase.perf.util.Rate>;
						public getTokensPerSeconds(): number;
						public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
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
						public convert(param0: number, param1: com.google.firebase.perf.util.StorageUnit): number;
						public static values(): native.Array<com.google.firebase.perf.util.StorageUnit>;
						public toTerabytes(param0: number): number;
						public toMegabytes(param0: number): number;
						public static valueOf(param0: string): com.google.firebase.perf.util.StorageUnit;
						public toBytes(param0: number): number;
						public toKilobytes(param0: number): number;
						public toGigabytes(param0: number): number;
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
						public getHighResTime(): number;
						public constructor();
						public describeContents(): number;
						public getMicros(): number;
						public constructor(param0: number);
						public getDurationMicros(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getCurrentTimestampMicros(): number;
						public getDurationMicros(param0: com.google.firebase.perf.util.Timer): number;
						public constructor(param0: number, param1: number);
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
						public static isURLAllowlisted(param0: java.net.URI, param1: globalAndroid.content.Context): boolean;
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
						public constructor(param0: java.net.URL);
						public openConnection(): java.net.URLConnection;
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
			export module perf {
				export module util {
					export class Utils {
						public static class: java.lang.Class<com.google.firebase.perf.util.Utils>;
						public constructor();
						public static bufferToInt(param0: native.Array<number>): number;
						public static truncateURL(param0: string, param1: number): string;
						public static isDebugLoggingEnabled(param0: globalAndroid.content.Context): boolean;
						public static checkArgument(param0: boolean, param1: string): void;
						public static stripSensitiveInfo(param0: string): string;
						public static saturatedIntCast(param0: number): number;
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
					export class AndroidApplicationInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.AndroidApplicationInfo,com.google.firebase.perf.v1.AndroidApplicationInfo.Builder> implements com.google.firebase.perf.v1.AndroidApplicationInfoOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidApplicationInfo>;
						public static PACKAGE_NAME_FIELD_NUMBER: number;
						public static SDK_VERSION_FIELD_NUMBER: number;
						public static VERSION_NAME_FIELD_NUMBER: number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.AndroidApplicationInfo>;
						public getVersionName(): string;
						public hasVersionName(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getSdkVersionBytes(): com.google.protobuf.ByteString;
						public getVersionNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public hasPackageName(): boolean;
						public hasSdkVersion(): boolean;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getSdkVersion(): string;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getPackageName(): string;
						public static getDefaultInstance(): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static newBuilder(param0: com.google.firebase.perf.v1.AndroidApplicationInfo): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
						public getPackageNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static newBuilder(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
					}
					export module AndroidApplicationInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.AndroidApplicationInfo,com.google.firebase.perf.v1.AndroidApplicationInfo.Builder> implements com.google.firebase.perf.v1.AndroidApplicationInfoOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidApplicationInfo.Builder>;
							public getSdkVersion(): string;
							public getSdkVersionBytes(): com.google.protobuf.ByteString;
							public hasPackageName(): boolean;
							public getPackageNameBytes(): com.google.protobuf.ByteString;
							public hasSdkVersion(): boolean;
							public setVersionNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public clearSdkVersion(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public getVersionName(): string;
							public setSdkVersionBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public hasVersionName(): boolean;
							public getVersionNameBytes(): com.google.protobuf.ByteString;
							public setPackageNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setPackageName(param0: string): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setVersionName(param0: string): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public setSdkVersion(param0: string): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public getPackageName(): string;
							public clearPackageName(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
							public clearVersionName(): com.google.firebase.perf.v1.AndroidApplicationInfo.Builder;
						}
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
						public constructor(implementation: {
							hasPackageName(): boolean;
							getPackageName(): string;
							getPackageNameBytes(): com.google.protobuf.ByteString;
							hasSdkVersion(): boolean;
							getSdkVersion(): string;
							getSdkVersionBytes(): com.google.protobuf.ByteString;
							hasVersionName(): boolean;
							getVersionName(): string;
							getVersionNameBytes(): com.google.protobuf.ByteString;
						});
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
					export class AndroidMemoryReading extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.AndroidMemoryReading,com.google.firebase.perf.v1.AndroidMemoryReading.Builder> implements com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public static CLIENT_TIME_US_FIELD_NUMBER: number;
						public static USED_APP_JAVA_HEAP_MEMORY_KB_FIELD_NUMBER: number;
						public hasUsedAppJavaHeapMemoryKb(): boolean;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.AndroidMemoryReading;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.AndroidMemoryReading;
						public hasClientTimeUs(): boolean;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static newBuilder(param0: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
						public static getDefaultInstance(): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public getClientTimeUs(): number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static newBuilder(): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
						public getUsedAppJavaHeapMemoryKb(): number;
					}
					export module AndroidMemoryReading {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.AndroidMemoryReading,com.google.firebase.perf.v1.AndroidMemoryReading.Builder> implements com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.AndroidMemoryReading.Builder>;
							public hasClientTimeUs(): boolean;
							public getClientTimeUs(): number;
							public clearClientTimeUs(): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
							public clearUsedAppJavaHeapMemoryKb(): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
							public hasUsedAppJavaHeapMemoryKb(): boolean;
							public getUsedAppJavaHeapMemoryKb(): number;
							public setUsedAppJavaHeapMemoryKb(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
							public setClientTimeUs(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading.Builder;
						}
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
						public constructor(implementation: {
							hasClientTimeUs(): boolean;
							getClientTimeUs(): number;
							hasUsedAppJavaHeapMemoryKb(): boolean;
							getUsedAppJavaHeapMemoryKb(): number;
						});
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
					export class ApplicationInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.ApplicationInfo,com.google.firebase.perf.v1.ApplicationInfo.Builder> implements com.google.firebase.perf.v1.ApplicationInfoOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationInfo>;
						public static GOOGLE_APP_ID_FIELD_NUMBER: number;
						public static APP_INSTANCE_ID_FIELD_NUMBER: number;
						public static ANDROID_APP_INFO_FIELD_NUMBER: number;
						public static APPLICATION_PROCESS_STATE_FIELD_NUMBER: number;
						public static CUSTOM_ATTRIBUTES_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.ApplicationInfo;
						public hasGoogleAppId(): boolean;
						public hasAndroidAppInfo(): boolean;
						public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public getCustomAttributesCount(): number;
						public hasApplicationProcessState(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public hasAppInstanceId(): boolean;
						public getApplicationProcessState(): com.google.firebase.perf.v1.ApplicationProcessState;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string,string>;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.ApplicationInfo;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.ApplicationInfo;
						public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
						public getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.ApplicationInfo;
						public static newBuilder(param0: com.google.firebase.perf.v1.ApplicationInfo): com.google.firebase.perf.v1.ApplicationInfo.Builder;
						public static newBuilder(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
						public static getDefaultInstance(): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.ApplicationInfo;
						public getGoogleAppId(): string;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.ApplicationInfo;
						public getAppInstanceId(): string;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.ApplicationInfo>;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string,string>;
						public getCustomAttributesOrThrow(param0: string): string;
					}
					export module ApplicationInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.ApplicationInfo,com.google.firebase.perf.v1.ApplicationInfo.Builder> implements com.google.firebase.perf.v1.ApplicationInfoOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationInfo.Builder>;
							public setGoogleAppId(param0: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesOrDefault(param0: string, param1: string): string;
							public getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
							public getGoogleAppIdBytes(): com.google.protobuf.ByteString;
							public removeCustomAttributes(param0: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public hasAndroidAppInfo(): boolean;
							public hasApplicationProcessState(): boolean;
							public getApplicationProcessState(): com.google.firebase.perf.v1.ApplicationProcessState;
							public setApplicationProcessState(param0: com.google.firebase.perf.v1.ApplicationProcessState): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public setAppInstanceId(param0: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public containsCustomAttributes(param0: string): boolean;
							public hasAppInstanceId(): boolean;
							public mergeAndroidAppInfo(param0: com.google.firebase.perf.v1.AndroidApplicationInfo): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesCount(): number;
							public getAppInstanceId(): string;
							public hasGoogleAppId(): boolean;
							public putCustomAttributes(param0: string, param1: string): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							/** @deprecated */
							public getCustomAttributes(): java.util.Map<string,string>;
							public setGoogleAppIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getGoogleAppId(): string;
							public setAndroidAppInfo(param0: com.google.firebase.perf.v1.AndroidApplicationInfo): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public clearApplicationProcessState(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
							public setAppInstanceIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesMap(): java.util.Map<string,string>;
							public clearAppInstanceId(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public clearCustomAttributes(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public setAndroidAppInfo(param0: com.google.firebase.perf.v1.AndroidApplicationInfo.Builder): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public getCustomAttributesOrThrow(param0: string): string;
							public clearAndroidAppInfo(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public clearGoogleAppId(): com.google.firebase.perf.v1.ApplicationInfo.Builder;
							public putAllCustomAttributes(param0: java.util.Map<string,string>): com.google.firebase.perf.v1.ApplicationInfo.Builder;
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
							getCustomAttributes(): java.util.Map<string,string>;
							getCustomAttributesMap(): java.util.Map<string,string>;
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
						public getCustomAttributesMap(): java.util.Map<string,string>;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public getGoogleAppId(): string;
						public getAppInstanceIdBytes(): com.google.protobuf.ByteString;
						public getAndroidAppInfo(): com.google.firebase.perf.v1.AndroidApplicationInfo;
						public getAppInstanceId(): string;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string,string>;
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
						public static APPLICATION_PROCESS_STATE_UNKNOWN_VALUE: number;
						public static FOREGROUND_VALUE: number;
						public static BACKGROUND_VALUE: number;
						public static FOREGROUND_BACKGROUND_VALUE: number;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.ApplicationProcessState>;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firebase.perf.v1.ApplicationProcessState;
						public static values(): native.Array<com.google.firebase.perf.v1.ApplicationProcessState>;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firebase.perf.v1.ApplicationProcessState;
						public static forNumber(param0: number): com.google.firebase.perf.v1.ApplicationProcessState;
					}
					export module ApplicationProcessState {
						export class ApplicationProcessStateVerifier {
							public static class: java.lang.Class<com.google.firebase.perf.v1.ApplicationProcessState.ApplicationProcessStateVerifier>;
							public isInRange(param0: number): boolean;
						}
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
					export class CpuMetricReading extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.CpuMetricReading,com.google.firebase.perf.v1.CpuMetricReading.Builder> implements com.google.firebase.perf.v1.CpuMetricReadingOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.CpuMetricReading>;
						public static CLIENT_TIME_US_FIELD_NUMBER: number;
						public static USER_TIME_US_FIELD_NUMBER: number;
						public static SYSTEM_TIME_US_FIELD_NUMBER: number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public hasUserTimeUs(): boolean;
						public hasSystemTimeUs(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.CpuMetricReading;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public hasClientTimeUs(): boolean;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public getSystemTimeUs(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.CpuMetricReading>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.CpuMetricReading;
						public getClientTimeUs(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public static newBuilder(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
						public static getDefaultInstance(): com.google.firebase.perf.v1.CpuMetricReading;
						public getUserTimeUs(): number;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.CpuMetricReading;
						public static newBuilder(param0: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.CpuMetricReading.Builder;
					}
					export module CpuMetricReading {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.CpuMetricReading,com.google.firebase.perf.v1.CpuMetricReading.Builder> implements com.google.firebase.perf.v1.CpuMetricReadingOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.CpuMetricReading.Builder>;
							public clearUserTimeUs(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public setClientTimeUs(param0: number): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public clearSystemTimeUs(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public hasClientTimeUs(): boolean;
							public getClientTimeUs(): number;
							public hasSystemTimeUs(): boolean;
							public setUserTimeUs(param0: number): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public getSystemTimeUs(): number;
							public clearClientTimeUs(): com.google.firebase.perf.v1.CpuMetricReading.Builder;
							public hasUserTimeUs(): boolean;
							public getUserTimeUs(): number;
							public setSystemTimeUs(param0: number): com.google.firebase.perf.v1.CpuMetricReading.Builder;
						}
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
						public constructor(implementation: {
							hasClientTimeUs(): boolean;
							getClientTimeUs(): number;
							hasUserTimeUs(): boolean;
							getUserTimeUs(): number;
							hasSystemTimeUs(): boolean;
							getSystemTimeUs(): number;
						});
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
						public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
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
					export class GaugeMetadata extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.GaugeMetadata,com.google.firebase.perf.v1.GaugeMetadata.Builder> implements com.google.firebase.perf.v1.GaugeMetadataOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetadata>;
						public static PROCESS_NAME_FIELD_NUMBER: number;
						public static CPU_CLOCK_RATE_KHZ_FIELD_NUMBER: number;
						public static CPU_PROCESSOR_COUNT_FIELD_NUMBER: number;
						public static DEVICE_RAM_SIZE_KB_FIELD_NUMBER: number;
						public static MAX_APP_JAVA_HEAP_MEMORY_KB_FIELD_NUMBER: number;
						public static MAX_ENCOURAGED_APP_JAVA_HEAP_MEMORY_KB_FIELD_NUMBER: number;
						public hasCpuClockRateKhz(): boolean;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.GaugeMetadata>;
						public getCpuClockRateKhz(): number;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.GaugeMetadata;
						public hasProcessName(): boolean;
						public static newBuilder(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
						public hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getDeviceRamSizeKb(): number;
						public getProcessName(): string;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetadata;
						public getCpuProcessorCount(): number;
						public getMaxEncouragedAppJavaHeapMemoryKb(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public getProcessNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public static getDefaultInstance(): com.google.firebase.perf.v1.GaugeMetadata;
						public getMaxAppJavaHeapMemoryKb(): number;
						public hasMaxAppJavaHeapMemoryKb(): boolean;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.GaugeMetadata;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetadata;
						public static newBuilder(param0: com.google.firebase.perf.v1.GaugeMetadata): com.google.firebase.perf.v1.GaugeMetadata.Builder;
						public hasDeviceRamSizeKb(): boolean;
						public hasCpuProcessorCount(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.GaugeMetadata;
					}
					export module GaugeMetadata {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.GaugeMetadata,com.google.firebase.perf.v1.GaugeMetadata.Builder> implements com.google.firebase.perf.v1.GaugeMetadataOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetadata.Builder>;
							public getDeviceRamSizeKb(): number;
							public getProcessName(): string;
							public clearCpuProcessorCount(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public hasMaxAppJavaHeapMemoryKb(): boolean;
							public setDeviceRamSizeKb(param0: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public clearMaxAppJavaHeapMemoryKb(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public hasProcessName(): boolean;
							public getProcessNameBytes(): com.google.protobuf.ByteString;
							public setMaxEncouragedAppJavaHeapMemoryKb(param0: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public clearCpuClockRateKhz(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public hasDeviceRamSizeKb(): boolean;
							public clearMaxEncouragedAppJavaHeapMemoryKb(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public setCpuProcessorCount(param0: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public setProcessNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public getMaxEncouragedAppJavaHeapMemoryKb(): number;
							public hasCpuProcessorCount(): boolean;
							public clearDeviceRamSizeKb(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public getCpuProcessorCount(): number;
							public getCpuClockRateKhz(): number;
							public hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
							public setMaxAppJavaHeapMemoryKb(param0: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public hasCpuClockRateKhz(): boolean;
							public getMaxAppJavaHeapMemoryKb(): number;
							public clearProcessName(): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public setProcessName(param0: string): com.google.firebase.perf.v1.GaugeMetadata.Builder;
							public setCpuClockRateKhz(param0: number): com.google.firebase.perf.v1.GaugeMetadata.Builder;
						}
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
						public constructor(implementation: {
							hasProcessName(): boolean;
							getProcessName(): string;
							getProcessNameBytes(): com.google.protobuf.ByteString;
							hasCpuClockRateKhz(): boolean;
							getCpuClockRateKhz(): number;
							hasCpuProcessorCount(): boolean;
							getCpuProcessorCount(): number;
							hasDeviceRamSizeKb(): boolean;
							getDeviceRamSizeKb(): number;
							hasMaxAppJavaHeapMemoryKb(): boolean;
							getMaxAppJavaHeapMemoryKb(): number;
							hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
							getMaxEncouragedAppJavaHeapMemoryKb(): number;
						});
						public constructor();
						public hasCpuClockRateKhz(): boolean;
						public getCpuClockRateKhz(): number;
						public hasProcessName(): boolean;
						public getMaxAppJavaHeapMemoryKb(): number;
						public hasMaxAppJavaHeapMemoryKb(): boolean;
						public hasMaxEncouragedAppJavaHeapMemoryKb(): boolean;
						public getDeviceRamSizeKb(): number;
						public getProcessName(): string;
						public getCpuProcessorCount(): number;
						public getMaxEncouragedAppJavaHeapMemoryKb(): number;
						public hasDeviceRamSizeKb(): boolean;
						public getProcessNameBytes(): com.google.protobuf.ByteString;
						public hasCpuProcessorCount(): boolean;
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
					export class GaugeMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.GaugeMetric,com.google.firebase.perf.v1.GaugeMetric.Builder> implements com.google.firebase.perf.v1.GaugeMetricOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetric>;
						public static SESSION_ID_FIELD_NUMBER: number;
						public static GAUGE_METADATA_FIELD_NUMBER: number;
						public static CPU_METRIC_READINGS_FIELD_NUMBER: number;
						public static ANDROID_MEMORY_READINGS_FIELD_NUMBER: number;
						public hasSessionId(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.GaugeMetric;
						public getCpuMetricReadingsOrBuilderList(): java.util.List<any>;
						public getAndroidMemoryReadingsOrBuilder(param0: number): com.google.firebase.perf.v1.AndroidMemoryReadingOrBuilder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetric;
						public getCpuMetricReadingsOrBuilder(param0: number): com.google.firebase.perf.v1.CpuMetricReadingOrBuilder;
						public getCpuMetricReadingsCount(): number;
						public getAndroidMemoryReadingsList(): java.util.List<com.google.firebase.perf.v1.AndroidMemoryReading>;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.GaugeMetric>;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.GaugeMetric;
						public static newBuilder(param0: com.google.firebase.perf.v1.GaugeMetric): com.google.firebase.perf.v1.GaugeMetric.Builder;
						public getAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading;
						public static newBuilder(): com.google.firebase.perf.v1.GaugeMetric.Builder;
						public hasGaugeMetadata(): boolean;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.GaugeMetric;
						public getAndroidMemoryReadingsCount(): number;
						public getCpuMetricReadingsList(): java.util.List<com.google.firebase.perf.v1.CpuMetricReading>;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public getGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetadata;
						public getCpuMetricReadings(param0: number): com.google.firebase.perf.v1.CpuMetricReading;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public getSessionIdBytes(): com.google.protobuf.ByteString;
						public getSessionId(): string;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.GaugeMetric;
						public getAndroidMemoryReadingsOrBuilderList(): java.util.List<any>;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetric;
						public static getDefaultInstance(): com.google.firebase.perf.v1.GaugeMetric;
					}
					export module GaugeMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.GaugeMetric,com.google.firebase.perf.v1.GaugeMetric.Builder> implements com.google.firebase.perf.v1.GaugeMetricOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.GaugeMetric.Builder>;
							public getSessionIdBytes(): com.google.protobuf.ByteString;
							public setCpuMetricReadings(param0: number, param1: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setAndroidMemoryReadings(param0: number, param1: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearSessionId(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAllCpuMetricReadings(param0: java.lang.Iterable<any>): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearAndroidMemoryReadings(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.AndroidMemoryReading;
							public addAndroidMemoryReadings(param0: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getCpuMetricReadings(param0: number): com.google.firebase.perf.v1.CpuMetricReading;
							public getSessionId(): string;
							public addCpuMetricReadings(param0: com.google.firebase.perf.v1.CpuMetricReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getAndroidMemoryReadingsCount(): number;
							public removeCpuMetricReadings(param0: number): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public removeAndroidMemoryReadings(param0: number): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addCpuMetricReadings(param0: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setCpuMetricReadings(param0: number, param1: com.google.firebase.perf.v1.CpuMetricReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAndroidMemoryReadings(param0: com.google.firebase.perf.v1.AndroidMemoryReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getAndroidMemoryReadingsList(): java.util.List<com.google.firebase.perf.v1.AndroidMemoryReading>;
							public addCpuMetricReadings(param0: number, param1: com.google.firebase.perf.v1.CpuMetricReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAllAndroidMemoryReadings(param0: java.lang.Iterable<any>): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setSessionIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getGaugeMetadata(): com.google.firebase.perf.v1.GaugeMetadata;
							public mergeGaugeMetadata(param0: com.google.firebase.perf.v1.GaugeMetadata): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAndroidMemoryReadings(param0: number, param1: com.google.firebase.perf.v1.AndroidMemoryReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public hasSessionId(): boolean;
							public getCpuMetricReadingsCount(): number;
							public setGaugeMetadata(param0: com.google.firebase.perf.v1.GaugeMetadata.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public clearCpuMetricReadings(): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setAndroidMemoryReadings(param0: number, param1: com.google.firebase.perf.v1.AndroidMemoryReading.Builder): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public getCpuMetricReadingsList(): java.util.List<com.google.firebase.perf.v1.CpuMetricReading>;
							public addCpuMetricReadings(param0: number, param1: com.google.firebase.perf.v1.CpuMetricReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public addAndroidMemoryReadings(param0: number, param1: com.google.firebase.perf.v1.AndroidMemoryReading): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public hasGaugeMetadata(): boolean;
							public setGaugeMetadata(param0: com.google.firebase.perf.v1.GaugeMetadata): com.google.firebase.perf.v1.GaugeMetric.Builder;
							public setSessionId(param0: string): com.google.firebase.perf.v1.GaugeMetric.Builder;
						}
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
					export class NetworkConnectionInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.NetworkConnectionInfo,com.google.firebase.perf.v1.NetworkConnectionInfo.Builder> implements com.google.firebase.perf.v1.NetworkConnectionInfoOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo>;
						public static NETWORK_TYPE_FIELD_NUMBER: number;
						public static MOBILE_SUBTYPE_FIELD_NUMBER: number;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static getDefaultInstance(): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.NetworkConnectionInfo>;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
						public static newBuilder(): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static newBuilder(param0: com.google.firebase.perf.v1.NetworkConnectionInfo): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public hasNetworkType(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.NetworkConnectionInfo;
						public hasMobileSubtype(): boolean;
					}
					export module NetworkConnectionInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.NetworkConnectionInfo,com.google.firebase.perf.v1.NetworkConnectionInfo.Builder> implements com.google.firebase.perf.v1.NetworkConnectionInfoOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.Builder>;
							public hasNetworkType(): boolean;
							public clearNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
							public getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public setNetworkType(param0: com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
							public hasMobileSubtype(): boolean;
							public setMobileSubtype(param0: com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype): com.google.firebase.perf.v1.NetworkConnectionInfo.Builder;
							public getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
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
							public static UNKNOWN_MOBILE_SUBTYPE_VALUE: number;
							public static GPRS_VALUE: number;
							public static EDGE_VALUE: number;
							public static UMTS_VALUE: number;
							public static CDMA_VALUE: number;
							public static EVDO_0_VALUE: number;
							public static EVDO_A_VALUE: number;
							public static RTT_VALUE: number;
							public static HSDPA_VALUE: number;
							public static HSUPA_VALUE: number;
							public static HSPA_VALUE: number;
							public static IDEN_VALUE: number;
							public static EVDO_B_VALUE: number;
							public static LTE_VALUE: number;
							public static EHRPD_VALUE: number;
							public static HSPAP_VALUE: number;
							public static GSM_VALUE: number;
							public static TD_SCDMA_VALUE: number;
							public static IWLAN_VALUE: number;
							public static LTE_CA_VALUE: number;
							public static COMBINED_VALUE: number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static forNumber(param0: number): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype>;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static values(): native.Array<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype>;
							public static valueOf(param0: string): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
						}
						export module MobileSubtype {
							export class MobileSubtypeVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype.MobileSubtypeVerifier>;
								public isInRange(param0: number): boolean;
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
							public static NONE_VALUE: number;
							public static MOBILE_VALUE: number;
							public static WIFI_VALUE: number;
							public static MOBILE_MMS_VALUE: number;
							public static MOBILE_SUPL_VALUE: number;
							public static MOBILE_DUN_VALUE: number;
							public static MOBILE_HIPRI_VALUE: number;
							public static WIMAX_VALUE: number;
							public static BLUETOOTH_VALUE: number;
							public static DUMMY_VALUE: number;
							public static ETHERNET_VALUE: number;
							public static MOBILE_FOTA_VALUE: number;
							public static MOBILE_IMS_VALUE: number;
							public static MOBILE_CBS_VALUE: number;
							public static WIFI_P2P_VALUE: number;
							public static MOBILE_IA_VALUE: number;
							public static MOBILE_EMERGENCY_VALUE: number;
							public static PROXY_VALUE: number;
							public static VPN_VALUE: number;
							public static valueOf(param0: string): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public static values(): native.Array<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType>;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType>;
							public static forNumber(param0: number): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
						}
						export module NetworkType {
							export class NetworkTypeVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType.NetworkTypeVerifier>;
								public isInRange(param0: number): boolean;
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
						public constructor(implementation: {
							hasNetworkType(): boolean;
							getNetworkType(): com.google.firebase.perf.v1.NetworkConnectionInfo.NetworkType;
							hasMobileSubtype(): boolean;
							getMobileSubtype(): com.google.firebase.perf.v1.NetworkConnectionInfo.MobileSubtype;
						});
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
					export class NetworkRequestMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.NetworkRequestMetric,com.google.firebase.perf.v1.NetworkRequestMetric.Builder> implements com.google.firebase.perf.v1.NetworkRequestMetricOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric>;
						public static URL_FIELD_NUMBER: number;
						public static HTTP_METHOD_FIELD_NUMBER: number;
						public static REQUEST_PAYLOAD_BYTES_FIELD_NUMBER: number;
						public static RESPONSE_PAYLOAD_BYTES_FIELD_NUMBER: number;
						public static NETWORK_CLIENT_ERROR_REASON_FIELD_NUMBER: number;
						public static HTTP_RESPONSE_CODE_FIELD_NUMBER: number;
						public static RESPONSE_CONTENT_TYPE_FIELD_NUMBER: number;
						public static CLIENT_START_TIME_US_FIELD_NUMBER: number;
						public static TIME_TO_REQUEST_COMPLETED_US_FIELD_NUMBER: number;
						public static TIME_TO_RESPONSE_INITIATED_US_FIELD_NUMBER: number;
						public static TIME_TO_RESPONSE_COMPLETED_US_FIELD_NUMBER: number;
						public static CUSTOM_ATTRIBUTES_FIELD_NUMBER: number;
						public static PERF_SESSIONS_FIELD_NUMBER: number;
						public hasRequestPayloadBytes(): boolean;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.NetworkRequestMetric>;
						public hasTimeToResponseInitiatedUs(): boolean;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public hasClientStartTimeUs(): boolean;
						public getRequestPayloadBytes(): number;
						public getPerfSessionsOrBuilder(param0: number): com.google.firebase.perf.v1.PerfSessionOrBuilder;
						public getPerfSessionsOrBuilderList(): java.util.List<any>;
						public hasNetworkClientErrorReason(): boolean;
						public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
						public getUrl(): string;
						public static newBuilder(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
						public getHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static newBuilder(param0: com.google.firebase.perf.v1.NetworkRequestMetric): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
						public hasTimeToRequestCompletedUs(): boolean;
						public getTimeToResponseInitiatedUs(): number;
						public static getDefaultInstance(): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasResponseContentType(): boolean;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string,string>;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getCustomAttributesOrThrow(param0: string): string;
						public getTimeToResponseCompletedUs(): number;
						public getCustomAttributesCount(): number;
						public getHttpResponseCode(): number;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public containsCustomAttributes(param0: string): boolean;
						public getCustomAttributesMap(): java.util.Map<string,string>;
						public hasUrl(): boolean;
						public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
						public getResponseContentType(): string;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getResponseContentTypeBytes(): com.google.protobuf.ByteString;
						public getPerfSessionsCount(): number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getResponsePayloadBytes(): number;
						public getClientStartTimeUs(): number;
						public hasTimeToResponseCompletedUs(): boolean;
						public getUrlBytes(): com.google.protobuf.ByteString;
						public hasResponsePayloadBytes(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.NetworkRequestMetric;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.NetworkRequestMetric;
						public hasHttpMethod(): boolean;
						public hasHttpResponseCode(): boolean;
						public getTimeToRequestCompletedUs(): number;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.NetworkRequestMetric;
					}
					export module NetworkRequestMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.NetworkRequestMetric,com.google.firebase.perf.v1.NetworkRequestMetric.Builder> implements com.google.firebase.perf.v1.NetworkRequestMetricOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.Builder>;
							public hasNetworkClientErrorReason(): boolean;
							public getCustomAttributesOrDefault(param0: string, param1: string): string;
							public hasTimeToResponseCompletedUs(): boolean;
							public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
							public putAllCustomAttributes(param0: java.util.Map<string,string>): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getPerfSessionsCount(): number;
							public clearTimeToResponseCompletedUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setResponseContentTypeBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setTimeToResponseInitiatedUs(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getCustomAttributesCount(): number;
							public hasHttpResponseCode(): boolean;
							public clearClientStartTimeUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasTimeToRequestCompletedUs(): boolean;
							/** @deprecated */
							public getCustomAttributes(): java.util.Map<string,string>;
							public addAllPerfSessions(param0: java.lang.Iterable<any>): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(param0: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setNetworkClientErrorReason(param0: com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setTimeToResponseCompletedUs(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public removeCustomAttributes(param0: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setResponsePayloadBytes(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasClientStartTimeUs(): boolean;
							public getUrl(): string;
							public hasResponseContentType(): boolean;
							public hasHttpMethod(): boolean;
							public hasRequestPayloadBytes(): boolean;
							public hasTimeToResponseInitiatedUs(): boolean;
							public putCustomAttributes(param0: string, param1: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearResponsePayloadBytes(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearPerfSessions(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearRequestPayloadBytes(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getUrlBytes(): com.google.protobuf.ByteString;
							public getHttpResponseCode(): number;
							public getResponseContentType(): string;
							public clearCustomAttributes(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setUrlBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getTimeToResponseCompletedUs(): number;
							public containsCustomAttributes(param0: string): boolean;
							public removePerfSessions(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setHttpMethod(param0: com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(param0: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public hasUrl(): boolean;
							public getClientStartTimeUs(): number;
							public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
							public getTimeToResponseInitiatedUs(): number;
							public setPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setUrl(param0: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public addPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getHttpMethod(): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public getResponsePayloadBytes(): number;
							public hasResponsePayloadBytes(): boolean;
							public clearUrl(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setClientStartTimeUs(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearTimeToRequestCompletedUs(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public clearNetworkClientErrorReason(): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setHttpResponseCode(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public setTimeToRequestCompletedUs(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getCustomAttributesMap(): java.util.Map<string,string>;
							public getResponseContentTypeBytes(): com.google.protobuf.ByteString;
							public setRequestPayloadBytes(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getRequestPayloadBytes(): number;
							public getCustomAttributesOrThrow(param0: string): string;
							public setResponseContentType(param0: string): com.google.firebase.perf.v1.NetworkRequestMetric.Builder;
							public getTimeToRequestCompletedUs(): number;
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
							public static HTTP_METHOD_UNKNOWN_VALUE: number;
							public static GET_VALUE: number;
							public static PUT_VALUE: number;
							public static POST_VALUE: number;
							public static DELETE_VALUE: number;
							public static HEAD_VALUE: number;
							public static PATCH_VALUE: number;
							public static OPTIONS_VALUE: number;
							public static TRACE_VALUE: number;
							public static CONNECT_VALUE: number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static forNumber(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod>;
							public static valueOf(param0: string): com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static values(): native.Array<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod>;
						}
						export module HttpMethod {
							export class HttpMethodVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.HttpMethod.HttpMethodVerifier>;
								public isInRange(param0: number): boolean;
							}
						}
						export class NetworkClientErrorReason extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason>;
							public static NETWORK_CLIENT_ERROR_REASON_UNKNOWN: com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static GENERIC_CLIENT_ERROR: com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static NETWORK_CLIENT_ERROR_REASON_UNKNOWN_VALUE: number;
							public static GENERIC_CLIENT_ERROR_VALUE: number;
							public static values(): native.Array<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason>;
							public static forNumber(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason>;
							public static valueOf(param0: string): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public getNumber(): number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						}
						export module NetworkClientErrorReason {
							export class NetworkClientErrorReasonVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.NetworkRequestMetric.NetworkClientErrorReason.NetworkClientErrorReasonVerifier>;
								public isInRange(param0: number): boolean;
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
							getCustomAttributes(): java.util.Map<string,string>;
							getCustomAttributesMap(): java.util.Map<string,string>;
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
						public getCustomAttributesMap(): java.util.Map<string,string>;
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
						public getCustomAttributes(): java.util.Map<string,string>;
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
					export class PerfMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.PerfMetric,com.google.firebase.perf.v1.PerfMetric.Builder> implements com.google.firebase.perf.v1.PerfMetricOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.PerfMetric>;
						public static APPLICATION_INFO_FIELD_NUMBER: number;
						public static TRACE_METRIC_FIELD_NUMBER: number;
						public static NETWORK_REQUEST_METRIC_FIELD_NUMBER: number;
						public static GAUGE_METRIC_FIELD_NUMBER: number;
						public static TRANSPORT_INFO_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.PerfMetric;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public hasTraceMetric(): boolean;
						public hasApplicationInfo(): boolean;
						public static newBuilder(param0: com.google.firebase.perf.v1.PerfMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.PerfMetric;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.PerfMetric;
						public hasNetworkRequestMetric(): boolean;
						public getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.PerfMetric;
						public getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric;
						public getTraceMetric(): com.google.firebase.perf.v1.TraceMetric;
						public hasGaugeMetric(): boolean;
						public getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.PerfMetric>;
						public static newBuilder(): com.google.firebase.perf.v1.PerfMetric.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfMetric;
						public hasTransportInfo(): boolean;
						public static getDefaultInstance(): com.google.firebase.perf.v1.PerfMetric;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.PerfMetric;
						public getTransportInfo(): com.google.firebase.perf.v1.TransportInfo;
					}
					export module PerfMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.PerfMetric,com.google.firebase.perf.v1.PerfMetric.Builder> implements com.google.firebase.perf.v1.PerfMetricOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.PerfMetric.Builder>;
							public hasApplicationInfo(): boolean;
							public setTransportInfo(param0: com.google.firebase.perf.v1.TransportInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric;
							public clearTransportInfo(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setTraceMetric(param0: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearApplicationInfo(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getTraceMetric(): com.google.firebase.perf.v1.TraceMetric;
							public clearNetworkRequestMetric(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric;
							public setApplicationInfo(param0: com.google.firebase.perf.v1.ApplicationInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public mergeTraceMetric(param0: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearGaugeMetric(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getTransportInfo(): com.google.firebase.perf.v1.TransportInfo;
							public mergeGaugeMetric(param0: com.google.firebase.perf.v1.GaugeMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setGaugeMetric(param0: com.google.firebase.perf.v1.GaugeMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setApplicationInfo(param0: com.google.firebase.perf.v1.ApplicationInfo.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public mergeNetworkRequestMetric(param0: com.google.firebase.perf.v1.NetworkRequestMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
							public hasNetworkRequestMetric(): boolean;
							public mergeTransportInfo(param0: com.google.firebase.perf.v1.TransportInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setTraceMetric(param0: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo;
							public mergeApplicationInfo(param0: com.google.firebase.perf.v1.ApplicationInfo): com.google.firebase.perf.v1.PerfMetric.Builder;
							public clearTraceMetric(): com.google.firebase.perf.v1.PerfMetric.Builder;
							public hasTransportInfo(): boolean;
							public setGaugeMetric(param0: com.google.firebase.perf.v1.GaugeMetric.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setNetworkRequestMetric(param0: com.google.firebase.perf.v1.NetworkRequestMetric.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public setTransportInfo(param0: com.google.firebase.perf.v1.TransportInfo.Builder): com.google.firebase.perf.v1.PerfMetric.Builder;
							public hasTraceMetric(): boolean;
							public hasGaugeMetric(): boolean;
							public setNetworkRequestMetric(param0: com.google.firebase.perf.v1.NetworkRequestMetric): com.google.firebase.perf.v1.PerfMetric.Builder;
						}
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
						public constructor(implementation: {
							hasApplicationInfo(): boolean;
							getApplicationInfo(): com.google.firebase.perf.v1.ApplicationInfo;
							hasTraceMetric(): boolean;
							getTraceMetric(): com.google.firebase.perf.v1.TraceMetric;
							hasNetworkRequestMetric(): boolean;
							getNetworkRequestMetric(): com.google.firebase.perf.v1.NetworkRequestMetric;
							hasGaugeMetric(): boolean;
							getGaugeMetric(): com.google.firebase.perf.v1.GaugeMetric;
							hasTransportInfo(): boolean;
							getTransportInfo(): com.google.firebase.perf.v1.TransportInfo;
						});
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
					export class PerfSession extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.PerfSession,com.google.firebase.perf.v1.PerfSession.Builder> implements com.google.firebase.perf.v1.PerfSessionOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.PerfSession>;
						public static SESSION_ID_FIELD_NUMBER: number;
						public static SESSION_VERBOSITY_FIELD_NUMBER: number;
						public hasSessionId(): boolean;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.PerfSession;
						public static getDefaultInstance(): com.google.firebase.perf.v1.PerfSession;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.PerfSession>;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public static newBuilder(): com.google.firebase.perf.v1.PerfSession.Builder;
						public getSessionIdBytes(): com.google.protobuf.ByteString;
						public getSessionId(): string;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public static newBuilder(param0: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.PerfSession.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.PerfSession;
						public getSessionVerbosityCount(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.PerfSession;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.PerfSession;
					}
					export module PerfSession {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.PerfSession,com.google.firebase.perf.v1.PerfSession.Builder> implements com.google.firebase.perf.v1.PerfSessionOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.PerfSession.Builder>;
							public getSessionIdBytes(): com.google.protobuf.ByteString;
							public getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>;
							public setSessionId(param0: string): com.google.firebase.perf.v1.PerfSession.Builder;
							public addAllSessionVerbosity(param0: java.lang.Iterable<any>): com.google.firebase.perf.v1.PerfSession.Builder;
							public addSessionVerbosity(param0: com.google.firebase.perf.v1.SessionVerbosity): com.google.firebase.perf.v1.PerfSession.Builder;
							public hasSessionId(): boolean;
							public setSessionVerbosity(param0: number, param1: com.google.firebase.perf.v1.SessionVerbosity): com.google.firebase.perf.v1.PerfSession.Builder;
							public clearSessionVerbosity(): com.google.firebase.perf.v1.PerfSession.Builder;
							public getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
							public getSessionId(): string;
							public setSessionIdBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.PerfSession.Builder;
							public clearSessionId(): com.google.firebase.perf.v1.PerfSession.Builder;
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
						public constructor(implementation: {
							hasSessionId(): boolean;
							getSessionId(): string;
							getSessionIdBytes(): com.google.protobuf.ByteString;
							getSessionVerbosityList(): java.util.List<com.google.firebase.perf.v1.SessionVerbosity>;
							getSessionVerbosityCount(): number;
							getSessionVerbosity(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
						});
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
						public static SESSION_VERBOSITY_NONE_VALUE: number;
						public static GAUGES_AND_SYSTEM_EVENTS_VALUE: number;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.SessionVerbosity>;
						public static forNumber(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						public static values(): native.Array<com.google.firebase.perf.v1.SessionVerbosity>;
						public static valueOf(param0: string): com.google.firebase.perf.v1.SessionVerbosity;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firebase.perf.v1.SessionVerbosity;
					}
					export module SessionVerbosity {
						export class SessionVerbosityVerifier {
							public static class: java.lang.Class<com.google.firebase.perf.v1.SessionVerbosity.SessionVerbosityVerifier>;
							public isInRange(param0: number): boolean;
						}
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
					export class TraceMetric extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.TraceMetric,com.google.firebase.perf.v1.TraceMetric.Builder> implements com.google.firebase.perf.v1.TraceMetricOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetric>;
						public static NAME_FIELD_NUMBER: number;
						public static IS_AUTO_FIELD_NUMBER: number;
						public static CLIENT_START_TIME_US_FIELD_NUMBER: number;
						public static DURATION_US_FIELD_NUMBER: number;
						public static COUNTERS_FIELD_NUMBER: number;
						public static SUBTRACES_FIELD_NUMBER: number;
						public static CUSTOM_ATTRIBUTES_FIELD_NUMBER: number;
						public static PERF_SESSIONS_FIELD_NUMBER: number;
						public getDurationUs(): number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public getCountersOrThrow(param0: string): number;
						public getCustomAttributesCount(): number;
						public static newBuilder(param0: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public hasDurationUs(): boolean;
						public getIsAuto(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.TraceMetric;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public getName(): string;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public containsCustomAttributes(param0: string): boolean;
						public static newBuilder(): com.google.firebase.perf.v1.TraceMetric.Builder;
						public getCustomAttributesMap(): java.util.Map<string,string>;
						public getSubtracesCount(): number;
						public getCustomAttributesOrDefault(param0: string, param1: string): string;
						public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.TraceMetric>;
						public hasClientStartTimeUs(): boolean;
						public static getDefaultInstance(): com.google.firebase.perf.v1.TraceMetric;
						public getPerfSessionsOrBuilder(param0: number): com.google.firebase.perf.v1.PerfSessionOrBuilder;
						public getPerfSessionsOrBuilderList(): java.util.List<any>;
						public getCountersOrDefault(param0: string, param1: number): number;
						public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TraceMetric;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.TraceMetric;
						public getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
						public getCountersCount(): number;
						public hasIsAuto(): boolean;
						public getCountersMap(): java.util.Map<string,java.lang.Long>;
						public getPerfSessionsCount(): number;
						public getClientStartTimeUs(): number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.TraceMetric;
						public getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
						public hasName(): boolean;
						public containsCounters(param0: string): boolean;
						/** @deprecated */
						public getCounters(): java.util.Map<string,java.lang.Long>;
						public getSubtracesOrBuilderList(): java.util.List<any>;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.TraceMetric;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.TraceMetric;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.TraceMetric;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string,string>;
						public getSubtracesOrBuilder(param0: number): com.google.firebase.perf.v1.TraceMetricOrBuilder;
						public getCustomAttributesOrThrow(param0: string): string;
					}
					export module TraceMetric {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.TraceMetric,com.google.firebase.perf.v1.TraceMetric.Builder> implements com.google.firebase.perf.v1.TraceMetricOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TraceMetric.Builder>;
							public getCustomAttributesOrDefault(param0: string, param1: string): string;
							public hasIsAuto(): boolean;
							public removeCounters(param0: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getPerfSessionsList(): java.util.List<com.google.firebase.perf.v1.PerfSession>;
							public getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
							public getPerfSessionsCount(): number;
							public setClientStartTimeUs(param0: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							/** @deprecated */
							public getCounters(): java.util.Map<string,java.lang.Long>;
							public setSubtraces(param0: number, param1: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearDurationUs(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getSubtracesCount(): number;
							public removeSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCountersCount(): number;
							public setDurationUs(param0: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCustomAttributesCount(): number;
							public addPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
							public addSubtraces(param0: number, param1: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
							/** @deprecated */
							public getCustomAttributes(): java.util.Map<string,string>;
							public putAllCustomAttributes(param0: java.util.Map<string,string>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearPerfSessions(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addSubtraces(param0: com.google.firebase.perf.v1.TraceMetric): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addPerfSessions(param0: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addSubtraces(param0: number, param1: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public containsCounters(param0: string): boolean;
							public hasClientStartTimeUs(): boolean;
							public putAllCounters(param0: java.util.Map<string,java.lang.Long>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearName(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearIsAuto(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearCustomAttributes(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public addSubtraces(param0: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public containsCustomAttributes(param0: string): boolean;
							public removePerfSessions(param0: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setIsAuto(param0: boolean): com.google.firebase.perf.v1.TraceMetric.Builder;
							public hasDurationUs(): boolean;
							public getClientStartTimeUs(): number;
							public setSubtraces(param0: number, param1: com.google.firebase.perf.v1.TraceMetric.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getPerfSessions(param0: number): com.google.firebase.perf.v1.PerfSession;
							public addAllSubtraces(param0: java.lang.Iterable<any>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addAllPerfSessions(param0: java.lang.Iterable<any>): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearSubtraces(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public setName(param0: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public addPerfSessions(param0: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.TraceMetric.Builder;
							public hasName(): boolean;
							public getIsAuto(): boolean;
							public getCustomAttributesMap(): java.util.Map<string,string>;
							public setPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearClientStartTimeUs(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getCountersOrThrow(param0: string): number;
							public getCountersOrDefault(param0: string, param1: number): number;
							public getDurationUs(): number;
							public getCustomAttributesOrThrow(param0: string): string;
							public getCountersMap(): java.util.Map<string,java.lang.Long>;
							public addPerfSessions(param0: number, param1: com.google.firebase.perf.v1.PerfSession.Builder): com.google.firebase.perf.v1.TraceMetric.Builder;
							public getName(): string;
							public removeCustomAttributes(param0: string): com.google.firebase.perf.v1.TraceMetric.Builder;
							public putCounters(param0: string, param1: number): com.google.firebase.perf.v1.TraceMetric.Builder;
							public clearCounters(): com.google.firebase.perf.v1.TraceMetric.Builder;
							public putCustomAttributes(param0: string, param1: string): com.google.firebase.perf.v1.TraceMetric.Builder;
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
							getCounters(): java.util.Map<string,java.lang.Long>;
							getCountersMap(): java.util.Map<string,java.lang.Long>;
							getCountersOrDefault(param0: string, param1: number): number;
							getCountersOrThrow(param0: string): number;
							getSubtracesList(): java.util.List<com.google.firebase.perf.v1.TraceMetric>;
							getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
							getSubtracesCount(): number;
							getCustomAttributesCount(): number;
							containsCustomAttributes(param0: string): boolean;
							getCustomAttributes(): java.util.Map<string,string>;
							getCustomAttributesMap(): java.util.Map<string,string>;
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
						public getCustomAttributesMap(): java.util.Map<string,string>;
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
						public getCountersMap(): java.util.Map<string,java.lang.Long>;
						public getPerfSessionsCount(): number;
						public getClientStartTimeUs(): number;
						public getSubtraces(param0: number): com.google.firebase.perf.v1.TraceMetric;
						public hasName(): boolean;
						public containsCounters(param0: string): boolean;
						/** @deprecated */
						public getCounters(): java.util.Map<string,java.lang.Long>;
						/** @deprecated */
						public getCustomAttributes(): java.util.Map<string,string>;
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
					export class TransportInfo extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.perf.v1.TransportInfo,com.google.firebase.perf.v1.TransportInfo.Builder> implements com.google.firebase.perf.v1.TransportInfoOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo>;
						public static DISPATCH_DESTINATION_FIELD_NUMBER: number;
						public static parseFrom(param0: native.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.perf.v1.TransportInfo;
						public static newBuilder(param0: com.google.firebase.perf.v1.TransportInfo): com.google.firebase.perf.v1.TransportInfo.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.TransportInfo;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.perf.v1.TransportInfo;
						public static newBuilder(): com.google.firebase.perf.v1.TransportInfo.Builder;
						public getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.perf.v1.TransportInfo;
						public hasDispatchDestination(): boolean;
						public static parseFrom(param0: native.Array<number>): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.perf.v1.TransportInfo;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.perf.v1.TransportInfo;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.perf.v1.TransportInfo>;
						public static getDefaultInstance(): com.google.firebase.perf.v1.TransportInfo;
					}
					export module TransportInfo {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.perf.v1.TransportInfo,com.google.firebase.perf.v1.TransportInfo.Builder> implements com.google.firebase.perf.v1.TransportInfoOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo.Builder>;
							public clearDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.Builder;
							public getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public setDispatchDestination(param0: com.google.firebase.perf.v1.TransportInfo.DispatchDestination): com.google.firebase.perf.v1.TransportInfo.Builder;
							public hasDispatchDestination(): boolean;
						}
						export class DispatchDestination extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo.DispatchDestination>;
							public static SOURCE_UNKNOWN: com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static FL_LEGACY_V1: com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static SOURCE_UNKNOWN_VALUE: number;
							public static FL_LEGACY_V1_VALUE: number;
							public static valueOf(param0: string): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public getNumber(): number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firebase.perf.v1.TransportInfo.DispatchDestination>;
							public static forNumber(param0: number): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
							public static values(): native.Array<com.google.firebase.perf.v1.TransportInfo.DispatchDestination>;
						}
						export module DispatchDestination {
							export class DispatchDestinationVerifier {
								public static class: java.lang.Class<com.google.firebase.perf.v1.TransportInfo.DispatchDestination.DispatchDestinationVerifier>;
								public isInRange(param0: number): boolean;
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
						public constructor(implementation: {
							hasDispatchDestination(): boolean;
							getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
						});
						public constructor();
						public getDispatchDestination(): com.google.firebase.perf.v1.TransportInfo.DispatchDestination;
						public hasDispatchDestination(): boolean;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.perf.config.ConfigurationFlag:1
//com.google.firebase.perf.network.InstrumentApacheHttpResponseHandler:1
//com.google.firebase.perf.util.Optional:1

