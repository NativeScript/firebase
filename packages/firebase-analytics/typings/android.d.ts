declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class ConsentBuilder {
					public static class: java.lang.Class<com.google.firebase.analytics.ConsentBuilder>;
					public getAdPersonalization(): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
					public asMap(): java.util.Map<com.google.firebase.analytics.FirebaseAnalytics.ConsentType, com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus>;
					public setAdPersonalization(param0: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus): void;
					public setAdStorage(param0: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus): void;
					public constructor();
					public setAdUserData(param0: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus): void;
					public getAdStorage(): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
					public getAdUserData(): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
					public setAnalyticsStorage(param0: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus): void;
					public getAnalyticsStorage(): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class FirebaseAnalytics {
					public static class: java.lang.Class<com.google.firebase.analytics.FirebaseAnalytics>;
					public getAppInstanceId(): com.google.android.gms.tasks.Task<string>;
					public setConsent(param0: java.util.Map<com.google.firebase.analytics.FirebaseAnalytics.ConsentType, com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus>): void;
					public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
					public setDefaultEventParameters(param0: globalAndroid.os.Bundle): void;
					public getSessionId(): com.google.android.gms.tasks.Task<java.lang.Long>;
					public resetAnalyticsData(): void;
					public setUserProperty(param0: string, param1: string): void;
					public static getInstance(param0: globalAndroid.content.Context): com.google.firebase.analytics.FirebaseAnalytics;
					public getFirebaseInstanceId(): string;
					/** @deprecated */
					public setCurrentScreen(param0: globalAndroid.app.Activity, param1: string, param2: string): void;
					public setAnalyticsCollectionEnabled(param0: boolean): void;
					public static getScionFrontendApiImplementation(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): any /* com.google.android.gms.measurement.internal.zzjz*/;
					public setUserId(param0: string): void;
					public setSessionTimeoutDuration(param0: number): void;
				}
				export namespace FirebaseAnalytics {
					export class ConsentStatus {
						public static class: java.lang.Class<com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus>;
						public static GRANTED: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
						public static DENIED: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
						public static values(): androidNative.Array<com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus>;
						public static valueOf(param0: string): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
					}
					export class ConsentType {
						public static class: java.lang.Class<com.google.firebase.analytics.FirebaseAnalytics.ConsentType>;
						public static AD_STORAGE: com.google.firebase.analytics.FirebaseAnalytics.ConsentType;
						public static ANALYTICS_STORAGE: com.google.firebase.analytics.FirebaseAnalytics.ConsentType;
						public static AD_USER_DATA: com.google.firebase.analytics.FirebaseAnalytics.ConsentType;
						public static AD_PERSONALIZATION: com.google.firebase.analytics.FirebaseAnalytics.ConsentType;
						public static valueOf(param0: string): com.google.firebase.analytics.FirebaseAnalytics.ConsentType;
						public static values(): androidNative.Array<com.google.firebase.analytics.FirebaseAnalytics.ConsentType>;
					}
					export class Event {
						public static class: java.lang.Class<com.google.firebase.analytics.FirebaseAnalytics.Event>;
						public static AD_IMPRESSION: string;
						public static ADD_PAYMENT_INFO: string;
						public static ADD_TO_CART: string;
						public static ADD_TO_WISHLIST: string;
						public static APP_OPEN: string;
						public static BEGIN_CHECKOUT: string;
						public static CAMPAIGN_DETAILS: string;
						public static GENERATE_LEAD: string;
						public static JOIN_GROUP: string;
						public static LEVEL_END: string;
						public static LEVEL_START: string;
						public static LEVEL_UP: string;
						public static LOGIN: string;
						public static POST_SCORE: string;
						public static SEARCH: string;
						public static SELECT_CONTENT: string;
						public static SHARE: string;
						public static SIGN_UP: string;
						public static SPEND_VIRTUAL_CURRENCY: string;
						public static TUTORIAL_BEGIN: string;
						public static TUTORIAL_COMPLETE: string;
						public static UNLOCK_ACHIEVEMENT: string;
						public static VIEW_ITEM: string;
						public static VIEW_ITEM_LIST: string;
						public static VIEW_SEARCH_RESULTS: string;
						public static EARN_VIRTUAL_CURRENCY: string;
						public static SCREEN_VIEW: string;
						public static REMOVE_FROM_CART: string;
						public static ADD_SHIPPING_INFO: string;
						public static PURCHASE: string;
						public static REFUND: string;
						public static SELECT_ITEM: string;
						public static SELECT_PROMOTION: string;
						public static VIEW_CART: string;
						public static VIEW_PROMOTION: string;
						public constructor();
					}
					export class Param {
						public static class: java.lang.Class<com.google.firebase.analytics.FirebaseAnalytics.Param>;
						public static ACHIEVEMENT_ID: string;
						public static AD_FORMAT: string;
						public static AD_PLATFORM: string;
						public static AD_SOURCE: string;
						public static AD_UNIT_NAME: string;
						public static CHARACTER: string;
						public static TRAVEL_CLASS: string;
						public static CONTENT_TYPE: string;
						public static CURRENCY: string;
						public static COUPON: string;
						public static START_DATE: string;
						public static END_DATE: string;
						public static EXTEND_SESSION: string;
						public static FLIGHT_NUMBER: string;
						public static GROUP_ID: string;
						public static ITEM_CATEGORY: string;
						public static ITEM_ID: string;
						public static ITEM_NAME: string;
						public static LOCATION: string;
						public static LEVEL: string;
						public static LEVEL_NAME: string;
						public static METHOD: string;
						public static NUMBER_OF_NIGHTS: string;
						public static NUMBER_OF_PASSENGERS: string;
						public static NUMBER_OF_ROOMS: string;
						public static DESTINATION: string;
						public static ORIGIN: string;
						public static PRICE: string;
						public static QUANTITY: string;
						public static SCORE: string;
						public static SHIPPING: string;
						public static TRANSACTION_ID: string;
						public static SEARCH_TERM: string;
						public static SUCCESS: string;
						public static TAX: string;
						public static VALUE: string;
						public static VIRTUAL_CURRENCY_NAME: string;
						public static CAMPAIGN: string;
						public static SOURCE: string;
						public static MEDIUM: string;
						public static TERM: string;
						public static CONTENT: string;
						public static ACLID: string;
						public static CP1: string;
						public static CAMPAIGN_ID: string;
						public static SOURCE_PLATFORM: string;
						public static CREATIVE_FORMAT: string;
						public static MARKETING_TACTIC: string;
						public static ITEM_BRAND: string;
						public static ITEM_VARIANT: string;
						public static CREATIVE_NAME: string;
						public static CREATIVE_SLOT: string;
						public static AFFILIATION: string;
						public static INDEX: string;
						public static DISCOUNT: string;
						public static ITEM_CATEGORY2: string;
						public static ITEM_CATEGORY3: string;
						public static ITEM_CATEGORY4: string;
						public static ITEM_CATEGORY5: string;
						public static ITEM_LIST_ID: string;
						public static ITEM_LIST_NAME: string;
						public static ITEMS: string;
						public static LOCATION_ID: string;
						public static PAYMENT_TYPE: string;
						public static PROMOTION_ID: string;
						public static PROMOTION_NAME: string;
						public static SCREEN_CLASS: string;
						public static SCREEN_NAME: string;
						public static SHIPPING_TIER: string;
						public constructor();
					}
					export class UserProperty {
						public static class: java.lang.Class<com.google.firebase.analytics.FirebaseAnalytics.UserProperty>;
						public static SIGN_UP_METHOD: string;
						public static ALLOW_AD_PERSONALIZATION_SIGNALS: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class ParametersBuilder {
					public static class: java.lang.Class<com.google.firebase.analytics.ParametersBuilder>;
					public constructor();
					public param(param0: string, param1: number): void;
					public getBundle(): globalAndroid.os.Bundle;
					// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
					public param(param0: string, param1: string): void;
					public param(param0: string, param1: androidNative.Array<globalAndroid.os.Bundle>): void;
					public param(param0: string, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export class AnalyticsConnectorImpl {
						public static class: java.lang.Class<com.google.firebase.analytics.connector.AnalyticsConnectorImpl>;
						public static getInstance(param0: com.google.firebase.FirebaseApp, param1: globalAndroid.content.Context, param2: com.google.firebase.events.Subscriber): com.google.firebase.analytics.connector.AnalyticsConnector;
						public getMaxUserProperties(param0: string): number;
						public setUserProperty(param0: string, param1: string, param2: any): void;
						public clearConditionalUserProperty(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
						// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
						public static getInstance(): com.google.firebase.analytics.connector.AnalyticsConnector;
						public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.analytics.connector.AnalyticsConnector;
						public logEvent(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
						public registerAnalyticsConnectorListener(param0: string, param1: com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorListener): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorHandle;
						public getConditionalUserProperties(param0: string, param1: string): java.util.List<com.google.firebase.analytics.connector.AnalyticsConnector.ConditionalUserProperty>;
						public setConditionalUserProperty(param0: com.google.firebase.analytics.connector.AnalyticsConnector.ConditionalUserProperty): void;
						public getUserProperties(param0: boolean): java.util.Map<string, any>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class AnalyticsConnectorRegistrar {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar>;
							public constructor();
							public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zza {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zza>;
							/**
							 * Constructs a new instance of the com.google.firebase.analytics.connector.internal.zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { zza(): com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorListener; zza(param0: java.util.Set<string>): void; zzb(): void });
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zzb {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zzb>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zzc {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zzc>;
							public create(param0: com.google.firebase.components.ComponentContainer): any;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zzd {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zzd>;
							public constructor(param0: any /* com.google.firebase.analytics.connector.internal.zze*/);
							public onEvent(param0: string, param1: string, param2: globalAndroid.os.Bundle, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zze extends com.google.firebase.analytics.connector.internal.zza {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zze>;
							public constructor(param0: com.google.android.gms.measurement.api.AppMeasurementSdk, param1: com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorListener);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zzf {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zzf>;
							public constructor(param0: any /* com.google.firebase.analytics.connector.internal.zzg*/);
							public onEvent(param0: string, param1: string, param2: globalAndroid.os.Bundle, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export namespace internal {
						export class zzg extends com.google.firebase.analytics.connector.internal.zza {
							public static class: java.lang.Class<com.google.firebase.analytics.connector.internal.zzg>;
							public constructor(param0: com.google.android.gms.measurement.api.AppMeasurementSdk, param1: com.google.firebase.analytics.connector.AnalyticsConnector.AnalyticsConnectorListener);
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export class zza {
						public static class: java.lang.Class<com.google.firebase.analytics.connector.zza>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace connector {
					export class zzb {
						public static class: java.lang.Class<com.google.firebase.analytics.connector.zzb>;
						public handle(param0: com.google.firebase.events.Event): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace ktx {
					export class ConsentBuilder {
						public static class: java.lang.Class<com.google.firebase.analytics.ktx.ConsentBuilder>;
						public getAnalyticsStorage(): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
						public constructor();
						public getAdStorage(): com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus;
						public setAdStorage(param0: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus): void;
						public asMap(): java.util.Map<com.google.firebase.analytics.FirebaseAnalytics.ConsentType, com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus>;
						public setAnalyticsStorage(param0: com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export namespace ktx {
					export class ParametersBuilder {
						public static class: java.lang.Class<com.google.firebase.analytics.ktx.ParametersBuilder>;
						/** @deprecated */
						public param(param0: string, param1: globalAndroid.os.Bundle): void;
						public constructor();
						/** @deprecated */
						// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
						public param(param0: string, param1: number): void;
						public getBundle(): globalAndroid.os.Bundle;
						/** @deprecated */
						// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
						public param(param0: string, param1: string): void;
						/** @deprecated */
						public param(param0: string, param1: androidNative.Array<globalAndroid.os.Bundle>): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class zza extends java.util.concurrent.Callable<string> {
					public static class: java.lang.Class<com.google.firebase.analytics.zza>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class zzb {
					public static class: java.lang.Class<com.google.firebase.analytics.zzb>;
					public execute(param0: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class zzc {
					public static class: java.lang.Class<com.google.firebase.analytics.zzc>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace firebase {
			export namespace analytics {
				export class zzd extends java.util.concurrent.Callable<java.lang.Long> {
					public static class: java.lang.Class<com.google.firebase.analytics.zzd>;
				}
			}
		}
	}
}

//Generics information:
