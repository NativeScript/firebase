declare module com {
	export module google {
		export module cloud {
			export module datastore {
				export module core {
					export module number {
						export class IndexNumberDecoder {
							public static class: java.lang.Class<com.google.cloud.datastore.core.number.IndexNumberDecoder>;
							public constructor();
							public resultAsLong(): number;
							public isResultDouble(): boolean;
							public resultAsDouble(): number;
							public decode(param0: boolean, param1: androidNative.Array<number>, param2: number): number;
							public isResultLong(): boolean;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module cloud {
			export module datastore {
				export module core {
					export module number {
						export class IndexNumberEncoder {
							public static class: java.lang.Class<com.google.cloud.datastore.core.number.IndexNumberEncoder>;
							public static MAX_ENCODED_BYTES: number;
							public static encodeDouble(param0: boolean, param1: number, param2: androidNative.Array<number>, param3: number): number;
							public static encodeLong(param0: boolean, param1: number, param2: androidNative.Array<number>, param3: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module cloud {
			export module datastore {
				export module core {
					export module number {
						export class NumberComparisonHelper {
							public static class: java.lang.Class<com.google.cloud.datastore.core.number.NumberComparisonHelper>;
							public static LONG_INCLUSIVE_LOWER_BOUND_AS_DOUBLE: number;
							public static LONG_EXCLUSIVE_UPPER_BOUND_AS_DOUBLE: number;
							public static MAX_SAFE_LONG: number;
							public static MIN_SAFE_LONG: number;
							public static firestoreCompareDoubles(param0: number, param1: number): number;
							public static compareLongs(param0: number, param1: number): number;
							public static firestoreCompareDoubleWithLong(param0: number, param1: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module cloud {
			export module datastore {
				export module core {
					export module number {
						export class NumberIndexEncoder {
							public static class: java.lang.Class<com.google.cloud.datastore.core.number.NumberIndexEncoder>;
							public constructor();
							public static decodeLong(param0: androidNative.Array<number>): number;
							public static encodeLong(param0: number): androidNative.Array<number>;
							public static decodeDouble(param0: androidNative.Array<number>): number;
							public static encodeDouble(param0: number): androidNative.Array<number>;
							public static decode(param0: androidNative.Array<number>): com.google.cloud.datastore.core.number.NumberIndexEncoder.DecodedNumberParts;
							public static encode(param0: com.google.cloud.datastore.core.number.NumberParts): androidNative.Array<number>;
						}
						export module NumberIndexEncoder {
							export class DecodedNumberParts {
								public static class: java.lang.Class<com.google.cloud.datastore.core.number.NumberIndexEncoder.DecodedNumberParts>;
								public bytesRead(): number;
								public parts(): com.google.cloud.datastore.core.number.NumberParts;
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
		export module cloud {
			export module datastore {
				export module core {
					export module number {
						export class NumberParts {
							public static class: java.lang.Class<com.google.cloud.datastore.core.number.NumberParts>;
							public static create(param0: boolean, param1: number, param2: number): com.google.cloud.datastore.core.number.NumberParts;
							public negate(): com.google.cloud.datastore.core.number.NumberParts;
							public asLong(): number;
							public hashCode(): number;
							public representableAsDouble(): boolean;
							public asDouble(): number;
							public isNaN(): boolean;
							public static fromLong(param0: number): com.google.cloud.datastore.core.number.NumberParts;
							public isInfinite(): boolean;
							public representableAsLong(): boolean;
							public significand(): number;
							public exponent(): number;
							public isZero(): boolean;
							public negative(): boolean;
							public static fromDouble(param0: number): com.google.cloud.datastore.core.number.NumberParts;
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
			export class Timestamp extends java.lang.Object {
				public static class: java.lang.Class<com.google.firebase.Timestamp>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.firebase.Timestamp>;
				public constructor(param0: number, param1: number);
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static now(): com.google.firebase.Timestamp;
				public getSeconds(): number;
				public constructor(param0: java.util.Date);
				public toString(): string;
				public constructor(param0: globalAndroid.os.Parcel);
				public toDate(): java.util.Date;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public getNanoseconds(): number;
				public compareTo(param0: com.google.firebase.Timestamp): number;
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Blob extends java.lang.Comparable<com.google.firebase.firestore.Blob> {
					public static class: java.lang.Class<com.google.firebase.firestore.Blob>;
					public equals(param0: any): boolean;
					public toBytes(): androidNative.Array<number>;
					public toString(): string;
					public compareTo(param0: com.google.firebase.firestore.Blob): number;
					public static fromByteString(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.Blob;
					public static fromBytes(param0: androidNative.Array<number>): com.google.firebase.firestore.Blob;
					public toByteString(): com.google.protobuf.ByteString;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.firestore.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static USE_EMULATOR_FOR_TESTS: boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class CollectionReference extends com.google.firebase.firestore.Query {
					public static class: java.lang.Class<com.google.firebase.firestore.CollectionReference>;
					public getPath(): string;
					public getId(): string;
					public add(param0: any): com.google.android.gms.tasks.Task<com.google.firebase.firestore.DocumentReference>;
					public document(): com.google.firebase.firestore.DocumentReference;
					public document(param0: string): com.google.firebase.firestore.DocumentReference;
					public getParent(): com.google.firebase.firestore.DocumentReference;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentChange {
					public static class: java.lang.Class<com.google.firebase.firestore.DocumentChange>;
					public equals(param0: any): boolean;
					public getNewIndex(): number;
					public getDocument(): com.google.firebase.firestore.QueryDocumentSnapshot;
					public getOldIndex(): number;
					public getType(): com.google.firebase.firestore.DocumentChange.Type;
					public hashCode(): number;
				}
				export module DocumentChange {
					export class Type {
						public static class: java.lang.Class<com.google.firebase.firestore.DocumentChange.Type>;
						public static ADDED: com.google.firebase.firestore.DocumentChange.Type;
						public static MODIFIED: com.google.firebase.firestore.DocumentChange.Type;
						public static REMOVED: com.google.firebase.firestore.DocumentChange.Type;
						public static valueOf(param0: string): com.google.firebase.firestore.DocumentChange.Type;
						public static values(): androidNative.Array<com.google.firebase.firestore.DocumentChange.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentId {
					public static class: java.lang.Class<com.google.firebase.firestore.DocumentId>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.DocumentId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentReference {
					public static class: java.lang.Class<com.google.firebase.firestore.DocumentReference>;
					public addSnapshotListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public addSnapshotListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public getId(): string;
					public addSnapshotListener(param0: com.google.firebase.firestore.MetadataChanges, param1: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public get(): com.google.android.gms.tasks.Task<com.google.firebase.firestore.DocumentSnapshot>;
					public update(param0: java.util.Map<string,any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public delete(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public addSnapshotListener(param0: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public addSnapshotListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.firestore.MetadataChanges, param2: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public collection(param0: string): com.google.firebase.firestore.CollectionReference;
					public set(param0: any): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getPath(): string;
					public equals(param0: any): boolean;
					public update(param0: com.google.firebase.firestore.FieldPath, param1: any, param2: androidNative.Array<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public get(param0: com.google.firebase.firestore.Source): com.google.android.gms.tasks.Task<com.google.firebase.firestore.DocumentSnapshot>;
					public getParent(): com.google.firebase.firestore.CollectionReference;
					public getFirestore(): com.google.firebase.firestore.FirebaseFirestore;
					public update(param0: string, param1: any, param2: androidNative.Array<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
					public set(param0: any, param1: com.google.firebase.firestore.SetOptions): com.google.android.gms.tasks.Task<java.lang.Void>;
					public hashCode(): number;
					public addSnapshotListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.firestore.MetadataChanges, param2: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>): com.google.firebase.firestore.ListenerRegistration;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class DocumentSnapshot {
					public static class: java.lang.Class<com.google.firebase.firestore.DocumentSnapshot>;
					public getData(param0: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): java.util.Map<string,any>;
					public get(param0: string, param1: java.lang.Class): any;
					public getId(): string;
					public getDocumentReference(param0: string): com.google.firebase.firestore.DocumentReference;
					public getBlob(param0: string): com.google.firebase.firestore.Blob;
					public contains(param0: com.google.firebase.firestore.FieldPath): boolean;
					public getReference(): com.google.firebase.firestore.DocumentReference;
					public toObject(param0: java.lang.Class): any;
					public get(param0: com.google.firebase.firestore.FieldPath, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): any;
					public getDate(param0: string, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): java.util.Date;
					public toString(): string;
					public get(param0: string, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): any;
					public get(param0: com.google.firebase.firestore.FieldPath, param1: java.lang.Class, param2: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): any;
					public toObject(param0: java.lang.Class, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): any;
					public contains(param0: string): boolean;
					public getTimestamp(param0: string): com.google.firebase.Timestamp;
					public hashCode(): number;
					public get(param0: string): any;
					public getTimestamp(param0: string, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): com.google.firebase.Timestamp;
					public getData(): java.util.Map<string,any>;
					public getString(param0: string): string;
					public get(param0: com.google.firebase.firestore.FieldPath, param1: java.lang.Class): any;
					public getLong(param0: string): java.lang.Long;
					public exists(): boolean;
					public getDate(param0: string): java.util.Date;
					public getGeoPoint(param0: string): com.google.firebase.firestore.GeoPoint;
					public get(param0: string, param1: java.lang.Class, param2: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): any;
					public equals(param0: any): boolean;
					public get(param0: com.google.firebase.firestore.FieldPath): any;
					public getBoolean(param0: string): java.lang.Boolean;
					public getDouble(param0: string): java.lang.Double;
					public getMetadata(): com.google.firebase.firestore.SnapshotMetadata;
				}
				export module DocumentSnapshot {
					export class ServerTimestampBehavior {
						public static class: java.lang.Class<com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior>;
						public static NONE: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior;
						public static ESTIMATE: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior;
						public static PREVIOUS: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior;
						public static values(): androidNative.Array<com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior>;
						public static valueOf(param0: string): com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class EventListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.firestore.EventListener<any>>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.EventListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEvent(param0: T, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
					});
					public constructor();
					public onEvent(param0: T, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Exclude {
					public static class: java.lang.Class<com.google.firebase.firestore.Exclude>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.Exclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FieldPath {
					public static class: java.lang.Class<com.google.firebase.firestore.FieldPath>;
					public equals(param0: any): boolean;
					public toString(): string;
					public static of(param0: androidNative.Array<string>): com.google.firebase.firestore.FieldPath;
					public static documentId(): com.google.firebase.firestore.FieldPath;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export abstract class FieldValue {
					public static class: java.lang.Class<com.google.firebase.firestore.FieldValue>;
					public static serverTimestamp(): com.google.firebase.firestore.FieldValue;
					public static increment(param0: number): com.google.firebase.firestore.FieldValue;
					public static arrayRemove(param0: androidNative.Array<any>): com.google.firebase.firestore.FieldValue;
					public static arrayUnion(param0: androidNative.Array<any>): com.google.firebase.firestore.FieldValue;
					public static delete(): com.google.firebase.firestore.FieldValue;
				}
				export module FieldValue {
					export class ArrayRemoveFieldValue extends com.google.firebase.firestore.FieldValue {
						public static class: java.lang.Class<com.google.firebase.firestore.FieldValue.ArrayRemoveFieldValue>;
					}
					export class ArrayUnionFieldValue extends com.google.firebase.firestore.FieldValue {
						public static class: java.lang.Class<com.google.firebase.firestore.FieldValue.ArrayUnionFieldValue>;
					}
					export class DeleteFieldValue extends com.google.firebase.firestore.FieldValue {
						public static class: java.lang.Class<com.google.firebase.firestore.FieldValue.DeleteFieldValue>;
					}
					export class NumericIncrementFieldValue extends com.google.firebase.firestore.FieldValue {
						public static class: java.lang.Class<com.google.firebase.firestore.FieldValue.NumericIncrementFieldValue>;
					}
					export class ServerTimestampFieldValue extends com.google.firebase.firestore.FieldValue {
						public static class: java.lang.Class<com.google.firebase.firestore.FieldValue.ServerTimestampFieldValue>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirebaseFirestore {
					public static class: java.lang.Class<com.google.firebase.firestore.FirebaseFirestore>;
					public document(param0: string): com.google.firebase.firestore.DocumentReference;
					public useEmulator(param0: string, param1: number): void;
					public collection(param0: string): com.google.firebase.firestore.CollectionReference;
					public loadBundle(param0: java.nio.ByteBuffer): com.google.firebase.firestore.LoadBundleTask;
					public waitForPendingWrites(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public addSnapshotsInSyncListener(param0: java.util.concurrent.Executor, param1: java.lang.Runnable): com.google.firebase.firestore.ListenerRegistration;
					public runTransaction(param0: com.google.firebase.firestore.Transaction.Function<any>): com.google.android.gms.tasks.Task;
					public runBatch(param0: com.google.firebase.firestore.WriteBatch.Function): com.google.android.gms.tasks.Task<java.lang.Void>;
					public addSnapshotsInSyncListener(param0: java.lang.Runnable): com.google.firebase.firestore.ListenerRegistration;
					public clearPersistence(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public addSnapshotsInSyncListener(param0: globalAndroid.app.Activity, param1: java.lang.Runnable): com.google.firebase.firestore.ListenerRegistration;
					public loadBundle(param0: java.io.InputStream): com.google.firebase.firestore.LoadBundleTask;
					public static getInstance(): com.google.firebase.firestore.FirebaseFirestore;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.firestore.FirebaseFirestore;
					public collectionGroup(param0: string): com.google.firebase.firestore.Query;
					public getApp(): com.google.firebase.FirebaseApp;
					public disableNetwork(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public loadBundle(param0: androidNative.Array<number>): com.google.firebase.firestore.LoadBundleTask;
					public static setLoggingEnabled(param0: boolean): void;
					public enableNetwork(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public batch(): com.google.firebase.firestore.WriteBatch;
					public getNamedQuery(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.firestore.Query>;
					public setFirestoreSettings(param0: com.google.firebase.firestore.FirebaseFirestoreSettings): void;
					public terminate(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public getFirestoreSettings(): com.google.firebase.firestore.FirebaseFirestoreSettings;
				}
				export module FirebaseFirestore {
					export class InstanceRegistry {
						public static class: java.lang.Class<com.google.firebase.firestore.FirebaseFirestore.InstanceRegistry>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.FirebaseFirestore$InstanceRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							remove(param0: string): void;
						});
						public constructor();
						public remove(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirebaseFirestoreException {
					public static class: java.lang.Class<com.google.firebase.firestore.FirebaseFirestoreException>;
					public constructor(param0: string, param1: com.google.firebase.firestore.FirebaseFirestoreException.Code);
					public getCode(): com.google.firebase.firestore.FirebaseFirestoreException.Code;
					public constructor(param0: string, param1: com.google.firebase.firestore.FirebaseFirestoreException.Code, param2: java.lang.Throwable);
				}
				export module FirebaseFirestoreException {
					export class Code {
						public static class: java.lang.Class<com.google.firebase.firestore.FirebaseFirestoreException.Code>;
						public static OK: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static CANCELLED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNKNOWN: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static INVALID_ARGUMENT: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static DEADLINE_EXCEEDED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static NOT_FOUND: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static ALREADY_EXISTS: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static PERMISSION_DENIED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static RESOURCE_EXHAUSTED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static FAILED_PRECONDITION: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static ABORTED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static OUT_OF_RANGE: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNIMPLEMENTED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static INTERNAL: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNAVAILABLE: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static DATA_LOSS: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static UNAUTHENTICATED: com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public static values(): androidNative.Array<com.google.firebase.firestore.FirebaseFirestoreException.Code>;
						public static fromValue(param0: number): com.google.firebase.firestore.FirebaseFirestoreException.Code;
						public value(): number;
						public static valueOf(param0: string): com.google.firebase.firestore.FirebaseFirestoreException.Code;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirebaseFirestoreSettings {
					public static class: java.lang.Class<com.google.firebase.firestore.FirebaseFirestoreSettings>;
					public static CACHE_SIZE_UNLIMITED: number;
					public static DEFAULT_HOST: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public isSslEnabled(): boolean;
					public hashCode(): number;
					public isPersistenceEnabled(): boolean;
					public getCacheSizeBytes(): number;
					public getHost(): string;
				}
				export module FirebaseFirestoreSettings {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.firestore.FirebaseFirestoreSettings.Builder>;
						public setCacheSizeBytes(param0: number): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public constructor();
						public isPersistenceEnabled(): boolean;
						public getCacheSizeBytes(): number;
						public setPersistenceEnabled(param0: boolean): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public build(): com.google.firebase.firestore.FirebaseFirestoreSettings;
						public setHost(param0: string): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public getHost(): string;
						public isSslEnabled(): boolean;
						public setSslEnabled(param0: boolean): com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;
						public constructor(param0: com.google.firebase.firestore.FirebaseFirestoreSettings);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirestoreMultiDbComponent extends com.google.firebase.firestore.FirebaseFirestore.InstanceRegistry {
					public static class: java.lang.Class<com.google.firebase.firestore.FirestoreMultiDbComponent>;
					public remove(param0: string): void;
					public onDeleted(param0: string, param1: com.google.firebase.FirebaseOptions): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class FirestoreRegistrar {
					public static class: java.lang.Class<com.google.firebase.firestore.FirestoreRegistrar>;
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
			export module firestore {
				export class GeoPoint extends java.lang.Comparable<com.google.firebase.firestore.GeoPoint> {
					public static class: java.lang.Class<com.google.firebase.firestore.GeoPoint>;
					public compareTo(param0: com.google.firebase.firestore.GeoPoint): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public getLatitude(): number;
					public getLongitude(): number;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class IgnoreExtraProperties {
					public static class: java.lang.Class<com.google.firebase.firestore.IgnoreExtraProperties>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.IgnoreExtraProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class ListenerRegistration {
					public static class: java.lang.Class<com.google.firebase.firestore.ListenerRegistration>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.ListenerRegistration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						remove(): void;
					});
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
			export module firestore {
				export class LoadBundleTask extends com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress> {
					public static class: java.lang.Class<com.google.firebase.firestore.LoadBundleTask>;
					public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public setException(param0: java.lang.Exception): void;
					public setResult(param0: com.google.firebase.firestore.LoadBundleTaskProgress): void;
					public getResult(): com.google.firebase.firestore.LoadBundleTaskProgress;
					public isComplete(): boolean;
					public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
					public isCanceled(): boolean;
					public constructor();
					public isSuccessful(): boolean;
					public getException(): java.lang.Exception;
					public getResult(param0: java.lang.Class): com.google.firebase.firestore.LoadBundleTaskProgress;
					public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation): com.google.android.gms.tasks.Task;
					public addOnProgressListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.firestore.OnProgressListener<com.google.firebase.firestore.LoadBundleTaskProgress>): com.google.firebase.firestore.LoadBundleTask;
					public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public continueWithTask(param0: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<com.google.firebase.firestore.LoadBundleTaskProgress>): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public continueWith(param0: com.google.android.gms.tasks.Continuation): com.google.android.gms.tasks.Task;
					public addOnProgressListener(param0: com.google.firebase.firestore.OnProgressListener<com.google.firebase.firestore.LoadBundleTaskProgress>): com.google.firebase.firestore.LoadBundleTask;
					public addOnProgressListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.firestore.OnProgressListener<com.google.firebase.firestore.LoadBundleTaskProgress>): com.google.firebase.firestore.LoadBundleTask;
					public updateProgress(param0: com.google.firebase.firestore.LoadBundleTaskProgress): void;
					public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<com.google.firebase.firestore.LoadBundleTaskProgress>): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<com.google.firebase.firestore.LoadBundleTaskProgress>): com.google.android.gms.tasks.Task<com.google.firebase.firestore.LoadBundleTaskProgress>;
				}
				export module LoadBundleTask {
					export class ManagedListener {
						public static class: java.lang.Class<com.google.firebase.firestore.LoadBundleTask.ManagedListener>;
						public invokeAsync(param0: com.google.firebase.firestore.LoadBundleTaskProgress): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class LoadBundleTaskProgress {
					public static class: java.lang.Class<com.google.firebase.firestore.LoadBundleTaskProgress>;
					public equals(param0: any): boolean;
					public getBytesLoaded(): number;
					public getTotalDocuments(): number;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: java.lang.Exception, param5: com.google.firebase.firestore.LoadBundleTaskProgress.TaskState);
					public getTotalBytes(): number;
					public getException(): java.lang.Exception;
					public static forInitial(param0: com.google.firebase.firestore.bundle.BundleMetadata): com.google.firebase.firestore.LoadBundleTaskProgress;
					public static forSuccess(param0: com.google.firebase.firestore.bundle.BundleMetadata): com.google.firebase.firestore.LoadBundleTaskProgress;
					public getDocumentsLoaded(): number;
					public hashCode(): number;
					public getTaskState(): com.google.firebase.firestore.LoadBundleTaskProgress.TaskState;
				}
				export module LoadBundleTaskProgress {
					export class TaskState {
						public static class: java.lang.Class<com.google.firebase.firestore.LoadBundleTaskProgress.TaskState>;
						public static ERROR: com.google.firebase.firestore.LoadBundleTaskProgress.TaskState;
						public static RUNNING: com.google.firebase.firestore.LoadBundleTaskProgress.TaskState;
						public static SUCCESS: com.google.firebase.firestore.LoadBundleTaskProgress.TaskState;
						public static valueOf(param0: string): com.google.firebase.firestore.LoadBundleTaskProgress.TaskState;
						public static values(): androidNative.Array<com.google.firebase.firestore.LoadBundleTaskProgress.TaskState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class MetadataChanges {
					public static class: java.lang.Class<com.google.firebase.firestore.MetadataChanges>;
					public static EXCLUDE: com.google.firebase.firestore.MetadataChanges;
					public static INCLUDE: com.google.firebase.firestore.MetadataChanges;
					public static valueOf(param0: string): com.google.firebase.firestore.MetadataChanges;
					public static values(): androidNative.Array<com.google.firebase.firestore.MetadataChanges>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class OnProgressListener<ProgressT>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.firebase.firestore.OnProgressListener<any>>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.OnProgressListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProgress(param0: ProgressT): void;
					});
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
			export module firestore {
				export class PropertyName {
					public static class: java.lang.Class<com.google.firebase.firestore.PropertyName>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.PropertyName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
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
			export module firestore {
				export class Query {
					public static class: java.lang.Class<com.google.firebase.firestore.Query>;
					public get(param0: com.google.firebase.firestore.Source): com.google.android.gms.tasks.Task<com.google.firebase.firestore.QuerySnapshot>;
					public whereEqualTo(param0: string, param1: any): com.google.firebase.firestore.Query;
					public orderBy(param0: com.google.firebase.firestore.FieldPath, param1: com.google.firebase.firestore.Query.Direction): com.google.firebase.firestore.Query;
					public endAt(param0: androidNative.Array<any>): com.google.firebase.firestore.Query;
					public whereArrayContainsAny(param0: string, param1: java.util.List<any>): com.google.firebase.firestore.Query;
					public endBefore(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: com.google.firebase.firestore.MetadataChanges, param1: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public whereNotIn(param0: com.google.firebase.firestore.FieldPath, param1: java.util.List<any>): com.google.firebase.firestore.Query;
					public orderBy(param0: string): com.google.firebase.firestore.Query;
					public whereLessThanOrEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public whereArrayContains(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public whereLessThanOrEqualTo(param0: string, param1: any): com.google.firebase.firestore.Query;
					public whereArrayContains(param0: string, param1: any): com.google.firebase.firestore.Query;
					public whereEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public limitToLast(param0: number): com.google.firebase.firestore.Query;
					public startAfter(param0: androidNative.Array<any>): com.google.firebase.firestore.Query;
					public whereIn(param0: string, param1: java.util.List<any>): com.google.firebase.firestore.Query;
					public whereLessThan(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public whereGreaterThanOrEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public getFirestore(): com.google.firebase.firestore.FirebaseFirestore;
					public addSnapshotListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public startAt(param0: androidNative.Array<any>): com.google.firebase.firestore.Query;
					public orderBy(param0: com.google.firebase.firestore.FieldPath): com.google.firebase.firestore.Query;
					public hashCode(): number;
					public addSnapshotListener(param0: globalAndroid.app.Activity, param1: com.google.firebase.firestore.MetadataChanges, param2: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public limit(param0: number): com.google.firebase.firestore.Query;
					public whereGreaterThan(param0: string, param1: any): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public whereGreaterThan(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public whereNotEqualTo(param0: string, param1: any): com.google.firebase.firestore.Query;
					public whereLessThan(param0: string, param1: any): com.google.firebase.firestore.Query;
					public whereArrayContainsAny(param0: com.google.firebase.firestore.FieldPath, param1: java.util.List<any>): com.google.firebase.firestore.Query;
					public addSnapshotListener(param0: java.util.concurrent.Executor, param1: com.google.firebase.firestore.MetadataChanges, param2: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>): com.google.firebase.firestore.ListenerRegistration;
					public startAt(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public startAfter(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public whereIn(param0: com.google.firebase.firestore.FieldPath, param1: java.util.List<any>): com.google.firebase.firestore.Query;
					public endAt(param0: com.google.firebase.firestore.DocumentSnapshot): com.google.firebase.firestore.Query;
					public equals(param0: any): boolean;
					public orderBy(param0: string, param1: com.google.firebase.firestore.Query.Direction): com.google.firebase.firestore.Query;
					public endBefore(param0: androidNative.Array<any>): com.google.firebase.firestore.Query;
					public whereNotEqualTo(param0: com.google.firebase.firestore.FieldPath, param1: any): com.google.firebase.firestore.Query;
					public get(): com.google.android.gms.tasks.Task<com.google.firebase.firestore.QuerySnapshot>;
					public whereGreaterThanOrEqualTo(param0: string, param1: any): com.google.firebase.firestore.Query;
					public whereNotIn(param0: string, param1: java.util.List<any>): com.google.firebase.firestore.Query;
				}
				export module Query {
					export class Direction {
						public static class: java.lang.Class<com.google.firebase.firestore.Query.Direction>;
						public static ASCENDING: com.google.firebase.firestore.Query.Direction;
						public static DESCENDING: com.google.firebase.firestore.Query.Direction;
						public static valueOf(param0: string): com.google.firebase.firestore.Query.Direction;
						public static values(): androidNative.Array<com.google.firebase.firestore.Query.Direction>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class QueryDocumentSnapshot extends com.google.firebase.firestore.DocumentSnapshot {
					public static class: java.lang.Class<com.google.firebase.firestore.QueryDocumentSnapshot>;
					public getData(param0: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): java.util.Map<string,any>;
					public toObject(param0: java.lang.Class, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): any;
					public getData(): java.util.Map<string,any>;
					public toObject(param0: java.lang.Class): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class QuerySnapshot extends java.lang.Iterable<com.google.firebase.firestore.QueryDocumentSnapshot> {
					public static class: java.lang.Class<com.google.firebase.firestore.QuerySnapshot>;
					public equals(param0: any): boolean;
					public getDocumentChanges(param0: com.google.firebase.firestore.MetadataChanges): java.util.List<com.google.firebase.firestore.DocumentChange>;
					public isEmpty(): boolean;
					public getDocumentChanges(): java.util.List<com.google.firebase.firestore.DocumentChange>;
					public toObjects(param0: java.lang.Class): java.util.List;
					public toObjects(param0: java.lang.Class, param1: com.google.firebase.firestore.DocumentSnapshot.ServerTimestampBehavior): java.util.List;
					public size(): number;
					public getQuery(): com.google.firebase.firestore.Query;
					public hashCode(): number;
					public getMetadata(): com.google.firebase.firestore.SnapshotMetadata;
					public getDocuments(): java.util.List<com.google.firebase.firestore.DocumentSnapshot>;
					public iterator(): java.util.Iterator<com.google.firebase.firestore.QueryDocumentSnapshot>;
				}
				export module QuerySnapshot {
					export class QuerySnapshotIterator extends java.util.Iterator<com.google.firebase.firestore.QueryDocumentSnapshot> {
						public static class: java.lang.Class<com.google.firebase.firestore.QuerySnapshot.QuerySnapshotIterator>;
						public next(): com.google.firebase.firestore.QueryDocumentSnapshot;
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class ServerTimestamp {
					public static class: java.lang.Class<com.google.firebase.firestore.ServerTimestamp>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.ServerTimestamp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class SetOptions {
					public static class: java.lang.Class<com.google.firebase.firestore.SetOptions>;
					public getFieldMask(): com.google.firebase.firestore.model.mutation.FieldMask;
					public equals(param0: any): boolean;
					public static mergeFields(param0: java.util.List<string>): com.google.firebase.firestore.SetOptions;
					public static merge(): com.google.firebase.firestore.SetOptions;
					public static mergeFields(param0: androidNative.Array<string>): com.google.firebase.firestore.SetOptions;
					public hashCode(): number;
					public static mergeFieldPaths(param0: java.util.List<com.google.firebase.firestore.FieldPath>): com.google.firebase.firestore.SetOptions;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class SnapshotMetadata {
					public static class: java.lang.Class<com.google.firebase.firestore.SnapshotMetadata>;
					public equals(param0: any): boolean;
					public toString(): string;
					public isFromCache(): boolean;
					public hashCode(): number;
					public hasPendingWrites(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Source {
					public static class: java.lang.Class<com.google.firebase.firestore.Source>;
					public static DEFAULT: com.google.firebase.firestore.Source;
					public static SERVER: com.google.firebase.firestore.Source;
					public static CACHE: com.google.firebase.firestore.Source;
					public static valueOf(param0: string): com.google.firebase.firestore.Source;
					public static values(): androidNative.Array<com.google.firebase.firestore.Source>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class ThrowOnExtraProperties {
					public static class: java.lang.Class<com.google.firebase.firestore.ThrowOnExtraProperties>;
					/**
					 * Constructs a new instance of the com.google.firebase.firestore.ThrowOnExtraProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class Transaction {
					public static class: java.lang.Class<com.google.firebase.firestore.Transaction>;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: any): com.google.firebase.firestore.Transaction;
					public delete(param0: com.google.firebase.firestore.DocumentReference): com.google.firebase.firestore.Transaction;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.FieldPath, param2: any, param3: androidNative.Array<any>): com.google.firebase.firestore.Transaction;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: string, param2: any, param3: androidNative.Array<any>): com.google.firebase.firestore.Transaction;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: java.util.Map<string,any>): com.google.firebase.firestore.Transaction;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: any, param2: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.Transaction;
					public get(param0: com.google.firebase.firestore.DocumentReference): com.google.firebase.firestore.DocumentSnapshot;
				}
				export module Transaction {
					export class Function<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.Transaction.Function<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.Transaction$Function interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: com.google.firebase.firestore.Transaction): TResult;
						});
						public constructor();
						public apply(param0: com.google.firebase.firestore.Transaction): TResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class UserDataReader {
					public static class: java.lang.Class<com.google.firebase.firestore.UserDataReader>;
					public parseQueryValue(param0: any, param1: boolean): com.google.firestore.v1.Value;
					public parseMergeData(param0: any, param1: com.google.firebase.firestore.model.mutation.FieldMask): com.google.firebase.firestore.core.UserData.ParsedSetData;
					public parseUpdateData(param0: java.util.Map<string,any>): com.google.firebase.firestore.core.UserData.ParsedUpdateData;
					public constructor(param0: com.google.firebase.firestore.model.DatabaseId);
					public parseQueryValue(param0: any): com.google.firestore.v1.Value;
					public parseSetData(param0: any): com.google.firebase.firestore.core.UserData.ParsedSetData;
					public convertAndParseFieldData(param0: any, param1: com.google.firebase.firestore.core.UserData.ParseContext): com.google.firestore.v1.Value;
					public parseUpdateData(param0: java.util.List<any>): com.google.firebase.firestore.core.UserData.ParsedUpdateData;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class UserDataWriter {
					public static class: java.lang.Class<com.google.firebase.firestore.UserDataWriter>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export class WriteBatch {
					public static class: java.lang.Class<com.google.firebase.firestore.WriteBatch>;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: any): com.google.firebase.firestore.WriteBatch;
					public set(param0: com.google.firebase.firestore.DocumentReference, param1: any, param2: com.google.firebase.firestore.SetOptions): com.google.firebase.firestore.WriteBatch;
					public delete(param0: com.google.firebase.firestore.DocumentReference): com.google.firebase.firestore.WriteBatch;
					public commit(): com.google.android.gms.tasks.Task<java.lang.Void>;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: string, param2: any, param3: androidNative.Array<any>): com.google.firebase.firestore.WriteBatch;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: java.util.Map<string,any>): com.google.firebase.firestore.WriteBatch;
					public update(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.FieldPath, param2: any, param3: androidNative.Array<any>): com.google.firebase.firestore.WriteBatch;
				}
				export module WriteBatch {
					export class Function {
						public static class: java.lang.Class<com.google.firebase.firestore.WriteBatch.Function>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.WriteBatch$Function interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: com.google.firebase.firestore.WriteBatch): void;
						});
						public constructor();
						public apply(param0: com.google.firebase.firestore.WriteBatch): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module auth {
					export abstract class CredentialsProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.auth.CredentialsProvider>;
						public constructor();
						public removeChangeListener(): void;
						public invalidateToken(): void;
						public setChangeListener(param0: com.google.firebase.firestore.util.Listener<com.google.firebase.firestore.auth.User>): void;
						public getToken(): com.google.android.gms.tasks.Task<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module auth {
					export class FirebaseAuthCredentialsProvider extends com.google.firebase.firestore.auth.CredentialsProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.auth.FirebaseAuthCredentialsProvider>;
						public constructor();
						public removeChangeListener(): void;
						public invalidateToken(): void;
						public constructor(param0: com.google.firebase.inject.Deferred<com.google.firebase.auth.internal.InternalAuthProvider>);
						public setChangeListener(param0: com.google.firebase.firestore.util.Listener<com.google.firebase.firestore.auth.User>): void;
						public getToken(): com.google.android.gms.tasks.Task<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module auth {
					export class Token {
						public static class: java.lang.Class<com.google.firebase.firestore.auth.Token>;
						public constructor(param0: string, param1: com.google.firebase.firestore.auth.User);
						public getUser(): com.google.firebase.firestore.auth.User;
						public getValue(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module auth {
					export class User {
						public static class: java.lang.Class<com.google.firebase.firestore.auth.User>;
						public static UNAUTHENTICATED: com.google.firebase.firestore.auth.User;
						public getUid(): string;
						public isAuthenticated(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
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
			export module firestore {
				export module bundle {
					export class BundleCallback {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleCallback>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.bundle.BundleCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyBundledDocuments(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>, param1: string): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
							saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery, param1: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): void;
							saveBundle(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
						});
						public constructor();
						public saveBundle(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
						public applyBundledDocuments(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>, param1: string): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery, param1: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundleDocument extends com.google.firebase.firestore.bundle.BundleElement {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleDocument>;
						public getDocument(): com.google.firebase.firestore.model.MutableDocument;
						public constructor(param0: com.google.firebase.firestore.model.MutableDocument);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getKey(): com.google.firebase.firestore.model.DocumentKey;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundleElement {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleElement>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.bundle.BundleElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
			export module firestore {
				export module bundle {
					export class BundleLoader {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleLoader>;
						public constructor(param0: com.google.firebase.firestore.bundle.BundleCallback, param1: com.google.firebase.firestore.bundle.BundleMetadata);
						public applyChanges(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public addElement(param0: com.google.firebase.firestore.bundle.BundleElement, param1: number): com.google.firebase.firestore.LoadBundleTaskProgress;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundleMetadata extends com.google.firebase.firestore.bundle.BundleElement {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleMetadata>;
						public getSchemaVersion(): number;
						public getBundleId(): string;
						public getTotalBytes(): number;
						public getTotalDocuments(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: number, param2: com.google.firebase.firestore.model.SnapshotVersion, param3: number, param4: number);
						public getCreateTime(): com.google.firebase.firestore.model.SnapshotVersion;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundleReader {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleReader>;
						public static BUFFER_CAPACITY: number;
						public close(): void;
						public getNextElement(): com.google.firebase.firestore.bundle.BundleElement;
						public getBytesRead(): number;
						public getBundleMetadata(): com.google.firebase.firestore.bundle.BundleMetadata;
						public constructor(param0: com.google.firebase.firestore.bundle.BundleSerializer, param1: java.io.InputStream);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundleSerializer {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundleSerializer>;
						public decodeNamedQuery(param0: org.json.JSONObject): com.google.firebase.firestore.bundle.NamedQuery;
						public decodeBundledDocumentMetadata(param0: org.json.JSONObject): com.google.firebase.firestore.bundle.BundledDocumentMetadata;
						public constructor(param0: com.google.firebase.firestore.remote.RemoteSerializer);
						public decodeBundleMetadata(param0: org.json.JSONObject): com.google.firebase.firestore.bundle.BundleMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundledDocumentMetadata extends com.google.firebase.firestore.bundle.BundleElement {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundledDocumentMetadata>;
						public getQueries(): java.util.List<string>;
						public exists(): boolean;
						public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: boolean, param3: java.util.List<string>);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getReadTime(): com.google.firebase.firestore.model.SnapshotVersion;
						public getKey(): com.google.firebase.firestore.model.DocumentKey;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class BundledQuery extends com.google.firebase.firestore.bundle.BundleElement {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.BundledQuery>;
						public getLimitType(): com.google.firebase.firestore.core.Query.LimitType;
						public constructor(param0: com.google.firebase.firestore.core.Target, param1: com.google.firebase.firestore.core.Query.LimitType);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTarget(): com.google.firebase.firestore.core.Target;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module bundle {
					export class NamedQuery extends com.google.firebase.firestore.bundle.BundleElement {
						public static class: java.lang.Class<com.google.firebase.firestore.bundle.NamedQuery>;
						public constructor(param0: string, param1: com.google.firebase.firestore.bundle.BundledQuery, param2: com.google.firebase.firestore.model.SnapshotVersion);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getReadTime(): com.google.firebase.firestore.model.SnapshotVersion;
						public getName(): string;
						public getBundledQuery(): com.google.firebase.firestore.bundle.BundledQuery;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ActivityScope {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ActivityScope>;
						public constructor();
						public static bind(param0: globalAndroid.app.Activity, param1: com.google.firebase.firestore.ListenerRegistration): com.google.firebase.firestore.ListenerRegistration;
					}
					export module ActivityScope {
						export class CallbackList {
							public static class: java.lang.Class<com.google.firebase.firestore.core.ActivityScope.CallbackList>;
						}
						export class StopListenerFragment {
							public static class: java.lang.Class<com.google.firebase.firestore.core.ActivityScope.StopListenerFragment>;
							public constructor();
							public onStop(): void;
						}
						export class StopListenerSupportFragment {
							public static class: java.lang.Class<com.google.firebase.firestore.core.ActivityScope.StopListenerSupportFragment>;
							public constructor();
							public onStop(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ArrayContainsAnyFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ArrayContainsAnyFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ArrayContainsFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ArrayContainsFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class AsyncEventListener<T>  extends com.google.firebase.firestore.EventListener<any> {
						public static class: java.lang.Class<com.google.firebase.firestore.core.AsyncEventListener<any>>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.firebase.firestore.EventListener<any>);
						public mute(): void;
						public onEvent(param0: any, param1: com.google.firebase.firestore.FirebaseFirestoreException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class Bound {
						public static class: java.lang.Class<com.google.firebase.firestore.core.Bound>;
						public sortsBeforeDocument(param0: java.util.List<com.google.firebase.firestore.core.OrderBy>, param1: com.google.firebase.firestore.model.Document): boolean;
						public canonicalString(): string;
						public constructor(param0: java.util.List<com.google.firestore.v1.Value>, param1: boolean);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPosition(): java.util.List<com.google.firestore.v1.Value>;
						public isBefore(): boolean;
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
			export module firestore {
				export module core {
					export abstract class ComponentProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ComponentProvider>;
						public constructor();
						public createConnectivityMonitor(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.remote.ConnectivityMonitor;
						public getSyncEngine(): com.google.firebase.firestore.core.SyncEngine;
						public getEventManager(): com.google.firebase.firestore.core.EventManager;
						public createEventManager(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.core.EventManager;
						public initialize(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): void;
						public createPersistence(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.Persistence;
						public createRemoteStore(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.remote.RemoteStore;
						public getConnectivityMonitor(): com.google.firebase.firestore.remote.ConnectivityMonitor;
						public getLocalStore(): com.google.firebase.firestore.local.LocalStore;
						public createSyncEngine(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.core.SyncEngine;
						public createGarbageCollectionScheduler(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.GarbageCollectionScheduler;
						public getPersistence(): com.google.firebase.firestore.local.Persistence;
						public getRemoteStore(): com.google.firebase.firestore.remote.RemoteStore;
						public createLocalStore(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.LocalStore;
						public getGargabeCollectionScheduler(): com.google.firebase.firestore.local.GarbageCollectionScheduler;
					}
					export module ComponentProvider {
						export class Configuration {
							public static class: java.lang.Class<com.google.firebase.firestore.core.ComponentProvider.Configuration>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.firestore.util.AsyncQueue, param2: com.google.firebase.firestore.core.DatabaseInfo, param3: com.google.firebase.firestore.remote.Datastore, param4: com.google.firebase.firestore.auth.User, param5: number, param6: com.google.firebase.firestore.FirebaseFirestoreSettings);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class DatabaseInfo {
						public static class: java.lang.Class<com.google.firebase.firestore.core.DatabaseInfo>;
						public getHost(): string;
						public isSslEnabled(): boolean;
						public constructor(param0: com.google.firebase.firestore.model.DatabaseId, param1: string, param2: string, param3: boolean);
						public getDatabaseId(): com.google.firebase.firestore.model.DatabaseId;
						public toString(): string;
						public getPersistenceKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class DocumentViewChange {
						public static class: java.lang.Class<com.google.firebase.firestore.core.DocumentViewChange>;
						public static create(param0: com.google.firebase.firestore.core.DocumentViewChange.Type, param1: com.google.firebase.firestore.model.Document): com.google.firebase.firestore.core.DocumentViewChange;
						public getDocument(): com.google.firebase.firestore.model.Document;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getType(): com.google.firebase.firestore.core.DocumentViewChange.Type;
						public toString(): string;
					}
					export module DocumentViewChange {
						export class Type {
							public static class: java.lang.Class<com.google.firebase.firestore.core.DocumentViewChange.Type>;
							public static REMOVED: com.google.firebase.firestore.core.DocumentViewChange.Type;
							public static ADDED: com.google.firebase.firestore.core.DocumentViewChange.Type;
							public static MODIFIED: com.google.firebase.firestore.core.DocumentViewChange.Type;
							public static METADATA: com.google.firebase.firestore.core.DocumentViewChange.Type;
							public static valueOf(param0: string): com.google.firebase.firestore.core.DocumentViewChange.Type;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.DocumentViewChange.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class DocumentViewChangeSet {
						public static class: java.lang.Class<com.google.firebase.firestore.core.DocumentViewChangeSet>;
						public constructor();
						public addChange(param0: com.google.firebase.firestore.core.DocumentViewChange): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class EventManager extends com.google.firebase.firestore.core.SyncEngine.SyncEngineCallback {
						public static class: java.lang.Class<com.google.firebase.firestore.core.EventManager>;
						public onError(param0: com.google.firebase.firestore.core.Query, param1: io.grpc.Status): void;
						public removeQueryListener(param0: com.google.firebase.firestore.core.QueryListener): void;
						public removeSnapshotsInSyncListener(param0: com.google.firebase.firestore.EventListener<java.lang.Void>): void;
						public handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
						public constructor(param0: com.google.firebase.firestore.core.SyncEngine);
						public addQueryListener(param0: com.google.firebase.firestore.core.QueryListener): number;
						public addSnapshotsInSyncListener(param0: com.google.firebase.firestore.EventListener<java.lang.Void>): void;
						public onViewSnapshots(param0: java.util.List<com.google.firebase.firestore.core.ViewSnapshot>): void;
					}
					export module EventManager {
						export class ListenOptions {
							public static class: java.lang.Class<com.google.firebase.firestore.core.EventManager.ListenOptions>;
							public includeDocumentMetadataChanges: boolean;
							public includeQueryMetadataChanges: boolean;
							public waitForSyncWhenOnline: boolean;
							public constructor();
						}
						export class QueryListenersInfo {
							public static class: java.lang.Class<com.google.firebase.firestore.core.EventManager.QueryListenersInfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class FieldFilter extends com.google.firebase.firestore.core.Filter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.FieldFilter>;
						public isInequality(): boolean;
						public constructor();
						public static create(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firebase.firestore.core.Filter.Operator, param2: com.google.firestore.v1.Value): com.google.firebase.firestore.core.FieldFilter;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public getField(): com.google.firebase.firestore.model.FieldPath;
						public getCanonicalId(): string;
						public constructor(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firebase.firestore.core.Filter.Operator, param2: com.google.firestore.v1.Value);
						public getOperator(): com.google.firebase.firestore.core.Filter.Operator;
						public matchesComparison(param0: number): boolean;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
						public getValue(): com.google.firestore.v1.Value;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export abstract class Filter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.Filter>;
						public getField(): com.google.firebase.firestore.model.FieldPath;
						public getCanonicalId(): string;
						public constructor();
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
					export module Filter {
						export class Operator {
							public static class: java.lang.Class<com.google.firebase.firestore.core.Filter.Operator>;
							public static LESS_THAN: com.google.firebase.firestore.core.Filter.Operator;
							public static LESS_THAN_OR_EQUAL: com.google.firebase.firestore.core.Filter.Operator;
							public static EQUAL: com.google.firebase.firestore.core.Filter.Operator;
							public static NOT_EQUAL: com.google.firebase.firestore.core.Filter.Operator;
							public static GREATER_THAN: com.google.firebase.firestore.core.Filter.Operator;
							public static GREATER_THAN_OR_EQUAL: com.google.firebase.firestore.core.Filter.Operator;
							public static ARRAY_CONTAINS: com.google.firebase.firestore.core.Filter.Operator;
							public static ARRAY_CONTAINS_ANY: com.google.firebase.firestore.core.Filter.Operator;
							public static IN: com.google.firebase.firestore.core.Filter.Operator;
							public static NOT_IN: com.google.firebase.firestore.core.Filter.Operator;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.Filter.Operator>;
							public static valueOf(param0: string): com.google.firebase.firestore.core.Filter.Operator;
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
			export module firestore {
				export module core {
					export class FirestoreClient {
						public static class: java.lang.Class<com.google.firebase.firestore.core.FirestoreClient>;
						public terminate(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public isTerminated(): boolean;
						public removeSnapshotsInSyncListener(param0: com.google.firebase.firestore.EventListener<java.lang.Void>): void;
						public disableNetwork(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public transaction(param0: com.google.firebase.firestore.util.Function<any,any>): com.google.android.gms.tasks.Task;
						public getDocumentFromLocalCache(param0: com.google.firebase.firestore.model.DocumentKey): com.google.android.gms.tasks.Task<com.google.firebase.firestore.model.Document>;
						public stopListening(param0: com.google.firebase.firestore.core.QueryListener): void;
						public listen(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.core.EventManager.ListenOptions, param2: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.core.ViewSnapshot>): com.google.firebase.firestore.core.QueryListener;
						public loadBundle(param0: java.io.InputStream, param1: com.google.firebase.firestore.LoadBundleTask): void;
						public enableNetwork(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getNamedQuery(param0: string): com.google.android.gms.tasks.Task<com.google.firebase.firestore.core.Query>;
						public write(param0: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.firebase.firestore.core.DatabaseInfo, param2: com.google.firebase.firestore.FirebaseFirestoreSettings, param3: com.google.firebase.firestore.auth.CredentialsProvider, param4: com.google.firebase.firestore.util.AsyncQueue, param5: com.google.firebase.firestore.remote.GrpcMetadataProvider);
						public getDocumentsFromLocalCache(param0: com.google.firebase.firestore.core.Query): com.google.android.gms.tasks.Task<com.google.firebase.firestore.core.ViewSnapshot>;
						public waitForPendingWrites(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public addSnapshotsInSyncListener(param0: com.google.firebase.firestore.EventListener<java.lang.Void>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class InFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.InFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class IndexRange {
						public static class: java.lang.Class<com.google.firebase.firestore.core.IndexRange>;
						public getStart(): com.google.firestore.v1.Value;
						public getEnd(): com.google.firestore.v1.Value;
						public getFieldPath(): com.google.firebase.firestore.model.FieldPath;
						public static builder(): com.google.firebase.firestore.core.IndexRange.Builder;
					}
					export module IndexRange {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.firestore.core.IndexRange.Builder>;
							public constructor();
							public setStart(param0: com.google.firestore.v1.Value): com.google.firebase.firestore.core.IndexRange.Builder;
							public build(): com.google.firebase.firestore.core.IndexRange;
							public setEnd(param0: com.google.firestore.v1.Value): com.google.firebase.firestore.core.IndexRange.Builder;
							public setFieldPath(param0: com.google.firebase.firestore.model.FieldPath): com.google.firebase.firestore.core.IndexRange.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class KeyFieldFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.KeyFieldFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class KeyFieldInFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.KeyFieldInFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class KeyFieldNotInFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.KeyFieldNotInFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class LimboDocumentChange {
						public static class: java.lang.Class<com.google.firebase.firestore.core.LimboDocumentChange>;
						public constructor(param0: com.google.firebase.firestore.core.LimboDocumentChange.Type, param1: com.google.firebase.firestore.model.DocumentKey);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getType(): com.google.firebase.firestore.core.LimboDocumentChange.Type;
						public getKey(): com.google.firebase.firestore.model.DocumentKey;
					}
					export module LimboDocumentChange {
						export class Type {
							public static class: java.lang.Class<com.google.firebase.firestore.core.LimboDocumentChange.Type>;
							public static ADDED: com.google.firebase.firestore.core.LimboDocumentChange.Type;
							public static REMOVED: com.google.firebase.firestore.core.LimboDocumentChange.Type;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.LimboDocumentChange.Type>;
							public static valueOf(param0: string): com.google.firebase.firestore.core.LimboDocumentChange.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ListenSequence {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ListenSequence>;
						public static INVALID: number;
						public next(): number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ListenerRegistrationImpl extends com.google.firebase.firestore.ListenerRegistration {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ListenerRegistrationImpl>;
						public constructor(param0: com.google.firebase.firestore.core.FirestoreClient, param1: com.google.firebase.firestore.core.QueryListener, param2: com.google.firebase.firestore.core.AsyncEventListener<com.google.firebase.firestore.core.ViewSnapshot>);
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class MemoryComponentProvider extends com.google.firebase.firestore.core.ComponentProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.core.MemoryComponentProvider>;
						public constructor();
						public createConnectivityMonitor(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.remote.ConnectivityMonitor;
						public createRemoteStore(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.remote.RemoteStore;
						public createSyncEngine(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.core.SyncEngine;
						public createGarbageCollectionScheduler(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.GarbageCollectionScheduler;
						public createEventManager(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.core.EventManager;
						public createLocalStore(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.LocalStore;
						public createPersistence(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.Persistence;
						public createConnectivityMonitor(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.remote.AndroidConnectivityMonitor;
					}
					export module MemoryComponentProvider {
						export class RemoteStoreCallback extends com.google.firebase.firestore.remote.RemoteStore.RemoteStoreCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.core.MemoryComponentProvider.RemoteStoreCallback>;
							public getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
							public handleRemoteEvent(param0: com.google.firebase.firestore.remote.RemoteEvent): void;
							public handleSuccessfulWrite(param0: com.google.firebase.firestore.model.mutation.MutationBatchResult): void;
							public handleRejectedWrite(param0: number, param1: io.grpc.Status): void;
							public handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
							public handleRejectedListen(param0: number, param1: io.grpc.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class NotInFilter extends com.google.firebase.firestore.core.FieldFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.core.NotInFilter>;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class OnlineState {
						public static class: java.lang.Class<com.google.firebase.firestore.core.OnlineState>;
						public static UNKNOWN: com.google.firebase.firestore.core.OnlineState;
						public static ONLINE: com.google.firebase.firestore.core.OnlineState;
						public static OFFLINE: com.google.firebase.firestore.core.OnlineState;
						public static valueOf(param0: string): com.google.firebase.firestore.core.OnlineState;
						public static values(): androidNative.Array<com.google.firebase.firestore.core.OnlineState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class OrderBy {
						public static class: java.lang.Class<com.google.firebase.firestore.core.OrderBy>;
						public getField(): com.google.firebase.firestore.model.FieldPath;
						public getDirection(): com.google.firebase.firestore.core.OrderBy.Direction;
						public static getInstance(param0: com.google.firebase.firestore.core.OrderBy.Direction, param1: com.google.firebase.firestore.model.FieldPath): com.google.firebase.firestore.core.OrderBy;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module OrderBy {
						export class Direction {
							public static class: java.lang.Class<com.google.firebase.firestore.core.OrderBy.Direction>;
							public static ASCENDING: com.google.firebase.firestore.core.OrderBy.Direction;
							public static DESCENDING: com.google.firebase.firestore.core.OrderBy.Direction;
							public static valueOf(param0: string): com.google.firebase.firestore.core.OrderBy.Direction;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.OrderBy.Direction>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class Query {
						public static class: java.lang.Class<com.google.firebase.firestore.core.Query>;
						public constructor(param0: com.google.firebase.firestore.model.ResourcePath, param1: string);
						public getPath(): com.google.firebase.firestore.model.ResourcePath;
						public hasLimitToFirst(): boolean;
						public comparator(): java.util.Comparator<com.google.firebase.firestore.model.Document>;
						public limitToLast(param0: number): com.google.firebase.firestore.core.Query;
						public getLimitToFirst(): number;
						public getFirstOrderByField(): com.google.firebase.firestore.model.FieldPath;
						public startAt(param0: com.google.firebase.firestore.core.Bound): com.google.firebase.firestore.core.Query;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public isDocumentQuery(): boolean;
						public toTarget(): com.google.firebase.firestore.core.Target;
						public getCanonicalId(): string;
						public asCollectionQueryAtPath(param0: com.google.firebase.firestore.model.ResourcePath): com.google.firebase.firestore.core.Query;
						public getLimitType(): com.google.firebase.firestore.core.Query.LimitType;
						public static atPath(param0: com.google.firebase.firestore.model.ResourcePath): com.google.firebase.firestore.core.Query;
						public inequalityField(): com.google.firebase.firestore.model.FieldPath;
						public getOrderBy(): java.util.List<com.google.firebase.firestore.core.OrderBy>;
						public filter(param0: com.google.firebase.firestore.core.Filter): com.google.firebase.firestore.core.Query;
						public endAt(param0: com.google.firebase.firestore.core.Bound): com.google.firebase.firestore.core.Query;
						public constructor(param0: com.google.firebase.firestore.model.ResourcePath, param1: string, param2: java.util.List<com.google.firebase.firestore.core.Filter>, param3: java.util.List<com.google.firebase.firestore.core.OrderBy>, param4: number, param5: com.google.firebase.firestore.core.Query.LimitType, param6: com.google.firebase.firestore.core.Bound, param7: com.google.firebase.firestore.core.Bound);
						public hasLimitToLast(): boolean;
						public matchesAllDocuments(): boolean;
						public getExplicitOrderBy(): java.util.List<com.google.firebase.firestore.core.OrderBy>;
						public findFilterOperator(param0: java.util.List<com.google.firebase.firestore.core.Filter.Operator>): com.google.firebase.firestore.core.Filter.Operator;
						public getCollectionGroup(): string;
						public toString(): string;
						public orderBy(param0: com.google.firebase.firestore.core.OrderBy): com.google.firebase.firestore.core.Query;
						public getFilters(): java.util.List<com.google.firebase.firestore.core.Filter>;
						public getLimitToLast(): number;
						public getEndAt(): com.google.firebase.firestore.core.Bound;
						public isCollectionGroupQuery(): boolean;
						public getStartAt(): com.google.firebase.firestore.core.Bound;
						public limitToFirst(param0: number): com.google.firebase.firestore.core.Query;
						public matches(param0: com.google.firebase.firestore.model.Document): boolean;
					}
					export module Query {
						export class LimitType {
							public static class: java.lang.Class<com.google.firebase.firestore.core.Query.LimitType>;
							public static LIMIT_TO_FIRST: com.google.firebase.firestore.core.Query.LimitType;
							public static LIMIT_TO_LAST: com.google.firebase.firestore.core.Query.LimitType;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.Query.LimitType>;
							public static valueOf(param0: string): com.google.firebase.firestore.core.Query.LimitType;
						}
						export class QueryComparator extends java.util.Comparator<com.google.firebase.firestore.model.Document> {
							public static class: java.lang.Class<com.google.firebase.firestore.core.Query.QueryComparator>;
							public compare(param0: com.google.firebase.firestore.model.Document, param1: com.google.firebase.firestore.model.Document): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class QueryListener {
						public static class: java.lang.Class<com.google.firebase.firestore.core.QueryListener>;
						public constructor(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.core.EventManager.ListenOptions, param2: com.google.firebase.firestore.EventListener<com.google.firebase.firestore.core.ViewSnapshot>);
						public getQuery(): com.google.firebase.firestore.core.Query;
						public onViewSnapshot(param0: com.google.firebase.firestore.core.ViewSnapshot): boolean;
						public onOnlineStateChanged(param0: com.google.firebase.firestore.core.OnlineState): boolean;
						public onError(param0: com.google.firebase.firestore.FirebaseFirestoreException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class QueryView {
						public static class: java.lang.Class<com.google.firebase.firestore.core.QueryView>;
						public getQuery(): com.google.firebase.firestore.core.Query;
						public getTargetId(): number;
						public getView(): com.google.firebase.firestore.core.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class SQLiteComponentProvider extends com.google.firebase.firestore.core.MemoryComponentProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.core.SQLiteComponentProvider>;
						public constructor();
						public createGarbageCollectionScheduler(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.GarbageCollectionScheduler;
						public createPersistence(param0: com.google.firebase.firestore.core.ComponentProvider.Configuration): com.google.firebase.firestore.local.Persistence;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class SyncEngine extends com.google.firebase.firestore.remote.RemoteStore.RemoteStoreCallback {
						public static class: java.lang.Class<com.google.firebase.firestore.core.SyncEngine>;
						public constructor(param0: com.google.firebase.firestore.local.LocalStore, param1: com.google.firebase.firestore.remote.RemoteStore, param2: com.google.firebase.firestore.auth.User, param3: number);
						public getEnqueuedLimboDocumentResolutions(): java.util.List<com.google.firebase.firestore.model.DocumentKey>;
						public transaction(param0: com.google.firebase.firestore.util.AsyncQueue, param1: com.google.firebase.firestore.util.Function<any,any>): com.google.android.gms.tasks.Task;
						public registerPendingWritesTask(param0: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
						public getActiveLimboDocumentResolutions(): java.util.Map<com.google.firebase.firestore.model.DocumentKey,java.lang.Integer>;
						public writeMutations(param0: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
						public handleRejectedListen(param0: number, param1: io.grpc.Status): void;
						public handleRejectedWrite(param0: number, param1: io.grpc.Status): void;
						public handleCredentialChange(param0: com.google.firebase.firestore.auth.User): void;
						public handleRemoteEvent(param0: com.google.firebase.firestore.remote.RemoteEvent): void;
						public setCallback(param0: com.google.firebase.firestore.core.SyncEngine.SyncEngineCallback): void;
						public handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
						public loadBundle(param0: com.google.firebase.firestore.bundle.BundleReader, param1: com.google.firebase.firestore.LoadBundleTask): void;
						public handleSuccessfulWrite(param0: com.google.firebase.firestore.model.mutation.MutationBatchResult): void;
						public getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public listen(param0: com.google.firebase.firestore.core.Query): number;
					}
					export module SyncEngine {
						export class LimboResolution {
							public static class: java.lang.Class<com.google.firebase.firestore.core.SyncEngine.LimboResolution>;
						}
						export class SyncEngineCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.core.SyncEngine.SyncEngineCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.core.SyncEngine$SyncEngineCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onViewSnapshots(param0: java.util.List<com.google.firebase.firestore.core.ViewSnapshot>): void;
								onError(param0: com.google.firebase.firestore.core.Query, param1: io.grpc.Status): void;
								handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
							});
							public constructor();
							public onViewSnapshots(param0: java.util.List<com.google.firebase.firestore.core.ViewSnapshot>): void;
							public onError(param0: com.google.firebase.firestore.core.Query, param1: io.grpc.Status): void;
							public handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class Target {
						public static class: java.lang.Class<com.google.firebase.firestore.core.Target>;
						public static NO_LIMIT: number;
						public getPath(): com.google.firebase.firestore.model.ResourcePath;
						public hasLimit(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getCollectionGroup(): string;
						public constructor(param0: com.google.firebase.firestore.model.ResourcePath, param1: string, param2: java.util.List<com.google.firebase.firestore.core.Filter>, param3: java.util.List<com.google.firebase.firestore.core.OrderBy>, param4: number, param5: com.google.firebase.firestore.core.Bound, param6: com.google.firebase.firestore.core.Bound);
						public isDocumentQuery(): boolean;
						public toString(): string;
						public getFilters(): java.util.List<com.google.firebase.firestore.core.Filter>;
						public getCanonicalId(): string;
						public getEndAt(): com.google.firebase.firestore.core.Bound;
						public getStartAt(): com.google.firebase.firestore.core.Bound;
						public getOrderBy(): java.util.List<com.google.firebase.firestore.core.OrderBy>;
						public getLimit(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class TargetIdGenerator {
						public static class: java.lang.Class<com.google.firebase.firestore.core.TargetIdGenerator>;
						public static forSyncEngine(): com.google.firebase.firestore.core.TargetIdGenerator;
						public static forTargetCache(param0: number): com.google.firebase.firestore.core.TargetIdGenerator;
						public nextId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class Transaction {
						public static class: java.lang.Class<com.google.firebase.firestore.core.Transaction>;
						public set(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.core.UserData.ParsedSetData): void;
						public update(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.core.UserData.ParsedUpdateData): void;
						public delete(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public static getDefaultExecutor(): java.util.concurrent.Executor;
						public commit(): com.google.android.gms.tasks.Task<java.lang.Void>;
						public constructor(param0: com.google.firebase.firestore.remote.Datastore);
						public lookup(param0: java.util.List<com.google.firebase.firestore.model.DocumentKey>): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.firestore.model.MutableDocument>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class TransactionRunner<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.core.TransactionRunner<any>>;
						public static DEFAULT_MAX_ATTEMPTS_COUNT: number;
						public constructor(param0: com.google.firebase.firestore.util.AsyncQueue, param1: com.google.firebase.firestore.remote.RemoteStore, param2: com.google.firebase.firestore.util.Function<com.google.firebase.firestore.core.Transaction,com.google.android.gms.tasks.Task<TResult>>);
						public run(): com.google.android.gms.tasks.Task<TResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class UserData {
						public static class: java.lang.Class<com.google.firebase.firestore.core.UserData>;
					}
					export module UserData {
						export class ParseAccumulator {
							public static class: java.lang.Class<com.google.firebase.firestore.core.UserData.ParseAccumulator>;
							public toMergeData(param0: com.google.firebase.firestore.model.ObjectValue, param1: com.google.firebase.firestore.model.mutation.FieldMask): com.google.firebase.firestore.core.UserData.ParsedSetData;
							public getDataSource(): com.google.firebase.firestore.core.UserData.Source;
							public getFieldTransforms(): java.util.List<com.google.firebase.firestore.model.mutation.FieldTransform>;
							public contains(param0: com.google.firebase.firestore.model.FieldPath): boolean;
							public toUpdateData(param0: com.google.firebase.firestore.model.ObjectValue): com.google.firebase.firestore.core.UserData.ParsedUpdateData;
							public toSetData(param0: com.google.firebase.firestore.model.ObjectValue): com.google.firebase.firestore.core.UserData.ParsedSetData;
							public constructor(param0: com.google.firebase.firestore.core.UserData.Source);
							public rootContext(): com.google.firebase.firestore.core.UserData.ParseContext;
							public toMergeData(param0: com.google.firebase.firestore.model.ObjectValue): com.google.firebase.firestore.core.UserData.ParsedSetData;
						}
						export class ParseContext {
							public static class: java.lang.Class<com.google.firebase.firestore.core.UserData.ParseContext>;
							public childContext(param0: string): com.google.firebase.firestore.core.UserData.ParseContext;
							public getDataSource(): com.google.firebase.firestore.core.UserData.Source;
							public isArrayElement(): boolean;
							public isWrite(): boolean;
							public childContext(param0: com.google.firebase.firestore.model.FieldPath): com.google.firebase.firestore.core.UserData.ParseContext;
							public getPath(): com.google.firebase.firestore.model.FieldPath;
							public addToFieldMask(param0: com.google.firebase.firestore.model.FieldPath): void;
							public createError(param0: string): java.lang.RuntimeException;
							public childContext(param0: number): com.google.firebase.firestore.core.UserData.ParseContext;
							public addToFieldTransforms(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firebase.firestore.model.mutation.TransformOperation): void;
						}
						export class ParsedSetData {
							public static class: java.lang.Class<com.google.firebase.firestore.core.UserData.ParsedSetData>;
							public toMutation(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.mutation.Precondition): com.google.firebase.firestore.model.mutation.Mutation;
							public getData(): com.google.firebase.firestore.model.ObjectValue;
							public getFieldMask(): com.google.firebase.firestore.model.mutation.FieldMask;
							public getFieldTransforms(): java.util.List<com.google.firebase.firestore.model.mutation.FieldTransform>;
						}
						export class ParsedUpdateData {
							public static class: java.lang.Class<com.google.firebase.firestore.core.UserData.ParsedUpdateData>;
							public toMutation(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.mutation.Precondition): com.google.firebase.firestore.model.mutation.Mutation;
							public getData(): com.google.firebase.firestore.model.ObjectValue;
							public getFieldMask(): com.google.firebase.firestore.model.mutation.FieldMask;
							public getFieldTransforms(): java.util.List<com.google.firebase.firestore.model.mutation.FieldTransform>;
						}
						export class Source {
							public static class: java.lang.Class<com.google.firebase.firestore.core.UserData.Source>;
							public static Set: com.google.firebase.firestore.core.UserData.Source;
							public static MergeSet: com.google.firebase.firestore.core.UserData.Source;
							public static Update: com.google.firebase.firestore.core.UserData.Source;
							public static Argument: com.google.firebase.firestore.core.UserData.Source;
							public static ArrayArgument: com.google.firebase.firestore.core.UserData.Source;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.UserData.Source>;
							public static valueOf(param0: string): com.google.firebase.firestore.core.UserData.Source;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class View {
						public static class: java.lang.Class<com.google.firebase.firestore.core.View>;
						public applyChanges(param0: com.google.firebase.firestore.core.View.DocumentChanges): com.google.firebase.firestore.core.ViewChange;
						public applyOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): com.google.firebase.firestore.core.ViewChange;
						public constructor(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>);
						public applyChanges(param0: com.google.firebase.firestore.core.View.DocumentChanges, param1: com.google.firebase.firestore.remote.TargetChange): com.google.firebase.firestore.core.ViewChange;
						public computeDocChanges(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>, param1: com.google.firebase.firestore.core.View.DocumentChanges): com.google.firebase.firestore.core.View.DocumentChanges;
						public getSyncState(): com.google.firebase.firestore.core.ViewSnapshot.SyncState;
						public computeDocChanges(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>): com.google.firebase.firestore.core.View.DocumentChanges;
					}
					export module View {
						export class DocumentChanges {
							public static class: java.lang.Class<com.google.firebase.firestore.core.View.DocumentChanges>;
							public needsRefill(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ViewChange {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ViewChange>;
						public getLimboChanges(): java.util.List<com.google.firebase.firestore.core.LimboDocumentChange>;
						public getSnapshot(): com.google.firebase.firestore.core.ViewSnapshot;
						public constructor(param0: com.google.firebase.firestore.core.ViewSnapshot, param1: java.util.List<com.google.firebase.firestore.core.LimboDocumentChange>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module core {
					export class ViewSnapshot {
						public static class: java.lang.Class<com.google.firebase.firestore.core.ViewSnapshot>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getOldDocuments(): com.google.firebase.firestore.model.DocumentSet;
						public excludesMetadataChanges(): boolean;
						public getMutatedKeys(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public toString(): string;
						public getQuery(): com.google.firebase.firestore.core.Query;
						public constructor(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.DocumentSet, param2: com.google.firebase.firestore.model.DocumentSet, param3: java.util.List<com.google.firebase.firestore.core.DocumentViewChange>, param4: boolean, param5: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param6: boolean, param7: boolean);
						public isFromCache(): boolean;
						public static fromInitialDocuments(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.DocumentSet, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param3: boolean, param4: boolean): com.google.firebase.firestore.core.ViewSnapshot;
						public getChanges(): java.util.List<com.google.firebase.firestore.core.DocumentViewChange>;
						public hasPendingWrites(): boolean;
						public getDocuments(): com.google.firebase.firestore.model.DocumentSet;
						public didSyncStateChange(): boolean;
					}
					export module ViewSnapshot {
						export class SyncState {
							public static class: java.lang.Class<com.google.firebase.firestore.core.ViewSnapshot.SyncState>;
							public static NONE: com.google.firebase.firestore.core.ViewSnapshot.SyncState;
							public static LOCAL: com.google.firebase.firestore.core.ViewSnapshot.SyncState;
							public static SYNCED: com.google.firebase.firestore.core.ViewSnapshot.SyncState;
							public static values(): androidNative.Array<com.google.firebase.firestore.core.ViewSnapshot.SyncState>;
							public static valueOf(param0: string): com.google.firebase.firestore.core.ViewSnapshot.SyncState;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class BundleCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.BundleCache>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.BundleCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBundleMetadata(param0: string): com.google.firebase.firestore.bundle.BundleMetadata;
							saveBundleMetadata(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
							getNamedQuery(param0: string): com.google.firebase.firestore.bundle.NamedQuery;
							saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery): void;
						});
						public constructor();
						public getNamedQuery(param0: string): com.google.firebase.firestore.bundle.NamedQuery;
						public saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery): void;
						public saveBundleMetadata(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
						public getBundleMetadata(param0: string): com.google.firebase.firestore.bundle.BundleMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class DefaultQueryEngine extends com.google.firebase.firestore.local.QueryEngine {
						public static class: java.lang.Class<com.google.firebase.firestore.local.DefaultQueryEngine>;
						public constructor();
						public handleDocumentChange(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.MutableDocument): void;
						public getDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public setLocalDocumentsView(param0: com.google.firebase.firestore.local.LocalDocumentsView): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class DocumentReference {
						public static class: java.lang.Class<com.google.firebase.firestore.local.DocumentReference>;
						public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class EncodedPath {
						public static class: java.lang.Class<com.google.firebase.firestore.local.EncodedPath>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class GarbageCollectionScheduler {
						public static class: java.lang.Class<com.google.firebase.firestore.local.GarbageCollectionScheduler>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.GarbageCollectionScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							start(): void;
							stop(): void;
						});
						public constructor();
						public start(): void;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class IndexCursor {
						public static class: java.lang.Class<com.google.firebase.firestore.local.IndexCursor>;
						public constructor();
						public close(): void;
						public getDocumentKey(): com.google.firebase.firestore.model.DocumentKey;
						public next(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class IndexManager {
						public static class: java.lang.Class<com.google.firebase.firestore.local.IndexManager>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.IndexManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addToCollectionParentIndex(param0: com.google.firebase.firestore.model.ResourcePath): void;
							getCollectionParents(param0: string): java.util.List<com.google.firebase.firestore.model.ResourcePath>;
						});
						public constructor();
						public getCollectionParents(param0: string): java.util.List<com.google.firebase.firestore.model.ResourcePath>;
						public addToCollectionParentIndex(param0: com.google.firebase.firestore.model.ResourcePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class IndexedQueryEngine extends com.google.firebase.firestore.local.QueryEngine {
						public static class: java.lang.Class<com.google.firebase.firestore.local.IndexedQueryEngine>;
						public handleDocumentChange(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.MutableDocument): void;
						public getDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public setLocalDocumentsView(param0: com.google.firebase.firestore.local.LocalDocumentsView): void;
						public constructor(param0: com.google.firebase.firestore.local.SQLiteCollectionIndex);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LocalDocumentsView {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LocalDocumentsView>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LocalSerializer {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LocalSerializer>;
						public encodeBundledQuery(param0: com.google.firebase.firestore.bundle.BundledQuery): com.google.firestore.bundle.BundledQuery;
						public decodeBundledQuery(param0: com.google.firestore.bundle.BundledQuery): com.google.firebase.firestore.bundle.BundledQuery;
						public constructor(param0: com.google.firebase.firestore.remote.RemoteSerializer);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LocalStore extends com.google.firebase.firestore.bundle.BundleCallback {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LocalStore>;
						public applyRemoteEvent(param0: com.google.firebase.firestore.remote.RemoteEvent): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public getHighestUnacknowledgedBatchId(): number;
						public getLastStreamToken(): com.google.protobuf.ByteString;
						public releaseTarget(param0: number): void;
						public constructor(param0: com.google.firebase.firestore.local.Persistence, param1: com.google.firebase.firestore.local.QueryEngine, param2: com.google.firebase.firestore.auth.User);
						public rejectBatch(param0: number): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public getNextMutationBatch(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public getRemoteDocumentKeys(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public notifyLocalViewChanges(param0: java.util.List<com.google.firebase.firestore.local.LocalViewChanges>): void;
						public getLastRemoteSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public readDocument(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.Document;
						public getNamedQuery(param0: string): com.google.firebase.firestore.bundle.NamedQuery;
						public saveBundle(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
						public collectGarbage(param0: com.google.firebase.firestore.local.LruGarbageCollector): com.google.firebase.firestore.local.LruGarbageCollector.Results;
						public hasNewerBundle(param0: com.google.firebase.firestore.bundle.BundleMetadata): boolean;
						public start(): void;
						public writeLocally(param0: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.firebase.firestore.local.LocalWriteResult;
						public allocateTarget(param0: com.google.firebase.firestore.core.Target): com.google.firebase.firestore.local.TargetData;
						public applyBundledDocuments(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>, param1: string): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery, param1: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): void;
						public acknowledgeBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatchResult): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public executeQuery(param0: com.google.firebase.firestore.core.Query, param1: boolean): com.google.firebase.firestore.local.QueryResult;
						public handleUserChange(param0: com.google.firebase.firestore.auth.User): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public setLastStreamToken(param0: com.google.protobuf.ByteString): void;
					}
					export module LocalStore {
						export class AllocateQueryHolder {
							public static class: java.lang.Class<com.google.firebase.firestore.local.LocalStore.AllocateQueryHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LocalViewChanges {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LocalViewChanges>;
						public getTargetId(): number;
						public static fromViewSnapshot(param0: number, param1: com.google.firebase.firestore.core.ViewSnapshot): com.google.firebase.firestore.local.LocalViewChanges;
						public getAdded(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public getRemoved(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public isFromCache(): boolean;
						public constructor(param0: number, param1: boolean, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param3: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LocalWriteResult {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LocalWriteResult>;
						public getBatchId(): number;
						public getChanges(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LruDelegate {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LruDelegate>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.LruDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
							getSequenceNumberCount(): number;
							forEachOrphanedDocumentSequenceNumber(param0: com.google.firebase.firestore.util.Consumer<java.lang.Long>): void;
							removeTargets(param0: number, param1: globalAndroid.util.SparseArray<any>): number;
							removeOrphanedDocuments(param0: number): number;
							getGarbageCollector(): com.google.firebase.firestore.local.LruGarbageCollector;
							getByteSize(): number;
						});
						public constructor();
						public forEachOrphanedDocumentSequenceNumber(param0: com.google.firebase.firestore.util.Consumer<java.lang.Long>): void;
						public getByteSize(): number;
						public removeTargets(param0: number, param1: globalAndroid.util.SparseArray<any>): number;
						public getSequenceNumberCount(): number;
						public getGarbageCollector(): com.google.firebase.firestore.local.LruGarbageCollector;
						public removeOrphanedDocuments(param0: number): number;
						public forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class LruGarbageCollector {
						public static class: java.lang.Class<com.google.firebase.firestore.local.LruGarbageCollector>;
						public newScheduler(param0: com.google.firebase.firestore.util.AsyncQueue, param1: com.google.firebase.firestore.local.LocalStore): com.google.firebase.firestore.local.LruGarbageCollector.Scheduler;
					}
					export module LruGarbageCollector {
						export class Params {
							public static class: java.lang.Class<com.google.firebase.firestore.local.LruGarbageCollector.Params>;
							public static WithCacheSizeBytes(param0: number): com.google.firebase.firestore.local.LruGarbageCollector.Params;
							public static Default(): com.google.firebase.firestore.local.LruGarbageCollector.Params;
							public static Disabled(): com.google.firebase.firestore.local.LruGarbageCollector.Params;
						}
						export class Results {
							public static class: java.lang.Class<com.google.firebase.firestore.local.LruGarbageCollector.Results>;
							public getSequenceNumbersCollected(): number;
							public getTargetsRemoved(): number;
							public getDocumentsRemoved(): number;
							public hasRun(): boolean;
						}
						export class RollingSequenceNumberBuffer {
							public static class: java.lang.Class<com.google.firebase.firestore.local.LruGarbageCollector.RollingSequenceNumberBuffer>;
						}
						export class Scheduler extends com.google.firebase.firestore.local.GarbageCollectionScheduler {
							public static class: java.lang.Class<com.google.firebase.firestore.local.LruGarbageCollector.Scheduler>;
							public constructor(param0: com.google.firebase.firestore.local.LruGarbageCollector, param1: com.google.firebase.firestore.util.AsyncQueue, param2: com.google.firebase.firestore.local.LocalStore);
							public stop(): void;
							public start(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryBundleCache extends com.google.firebase.firestore.local.BundleCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryBundleCache>;
						public getNamedQuery(param0: string): com.google.firebase.firestore.bundle.NamedQuery;
						public saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery): void;
						public saveBundleMetadata(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
						public getBundleMetadata(param0: string): com.google.firebase.firestore.bundle.BundleMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryEagerReferenceDelegate extends com.google.firebase.firestore.local.ReferenceDelegate {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryEagerReferenceDelegate>;
						public updateLimboDocument(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public addReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public removeMutationReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public onTransactionCommitted(): void;
						public getCurrentSequenceNumber(): number;
						public setInMemoryPins(param0: com.google.firebase.firestore.local.ReferenceSet): void;
						public removeTarget(param0: com.google.firebase.firestore.local.TargetData): void;
						public removeReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public onTransactionStarted(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryIndexManager extends com.google.firebase.firestore.local.IndexManager {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryIndexManager>;
						public getCollectionParents(param0: string): java.util.List<com.google.firebase.firestore.model.ResourcePath>;
						public addToCollectionParentIndex(param0: com.google.firebase.firestore.model.ResourcePath): void;
					}
					export module MemoryIndexManager {
						export class MemoryCollectionParentIndex {
							public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryIndexManager.MemoryCollectionParentIndex>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryLruReferenceDelegate implements com.google.firebase.firestore.local.ReferenceDelegate, com.google.firebase.firestore.local.LruDelegate {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryLruReferenceDelegate>;
						public forEachOrphanedDocumentSequenceNumber(param0: com.google.firebase.firestore.util.Consumer<java.lang.Long>): void;
						public getByteSize(): number;
						public removeTargets(param0: number, param1: globalAndroid.util.SparseArray<any>): number;
						public addReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public onTransactionCommitted(): void;
						public getCurrentSequenceNumber(): number;
						public getSequenceNumberCount(): number;
						public getGarbageCollector(): com.google.firebase.firestore.local.LruGarbageCollector;
						public removeReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public updateLimboDocument(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public removeMutationReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public setInMemoryPins(param0: com.google.firebase.firestore.local.ReferenceSet): void;
						public removeOrphanedDocuments(param0: number): number;
						public forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
						public removeTarget(param0: com.google.firebase.firestore.local.TargetData): void;
						public onTransactionStarted(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryMutationQueue extends com.google.firebase.firestore.local.MutationQueue {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryMutationQueue>;
						public getAllMutationBatchesAffectingDocumentKey(param0: com.google.firebase.firestore.model.DocumentKey): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public getAllMutationBatchesAffectingDocumentKeys(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public getLastStreamToken(): com.google.protobuf.ByteString;
						public getHighestUnacknowledgedBatchId(): number;
						public lookupMutationBatch(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public addMutationBatch(param0: com.google.firebase.Timestamp, param1: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>, param2: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.firebase.firestore.model.mutation.MutationBatch;
						public acknowledgeBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch, param1: com.google.protobuf.ByteString): void;
						public getAllMutationBatches(): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public performConsistencyCheck(): void;
						public getAllMutationBatchesAffectingQuery(param0: com.google.firebase.firestore.core.Query): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public start(): void;
						public isEmpty(): boolean;
						public getNextMutationBatchAfterBatchId(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public removeMutationBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch): void;
						public setLastStreamToken(param0: com.google.protobuf.ByteString): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryPersistence extends com.google.firebase.firestore.local.Persistence {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryPersistence>;
						public shutdown(): void;
						public start(): void;
						public static createEagerGcMemoryPersistence(): com.google.firebase.firestore.local.MemoryPersistence;
						public isStarted(): boolean;
						public static createLruGcMemoryPersistence(param0: com.google.firebase.firestore.local.LruGarbageCollector.Params, param1: com.google.firebase.firestore.local.LocalSerializer): com.google.firebase.firestore.local.MemoryPersistence;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryRemoteDocumentCache extends com.google.firebase.firestore.local.RemoteDocumentCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryRemoteDocumentCache>;
						public add(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.SnapshotVersion): void;
						public get(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.MutableDocument;
						public getAllDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
						public remove(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public getAll(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.Map<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
					}
					export module MemoryRemoteDocumentCache {
						export class DocumentIterable extends java.lang.Iterable<com.google.firebase.firestore.model.MutableDocument> {
							public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryRemoteDocumentCache.DocumentIterable>;
							public iterator(): java.util.Iterator<com.google.firebase.firestore.model.MutableDocument>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MemoryTargetCache extends com.google.firebase.firestore.local.TargetCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MemoryTargetCache>;
						public removeMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public getHighestTargetId(): number;
						public getTargetData(param0: com.google.firebase.firestore.core.Target): com.google.firebase.firestore.local.TargetData;
						public getTargetCount(): number;
						public addMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public setLastRemoteSnapshotVersion(param0: com.google.firebase.firestore.model.SnapshotVersion): void;
						public getLastRemoteSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public getHighestListenSequenceNumber(): number;
						public removeMatchingKeysForTargetId(param0: number): void;
						public containsKey(param0: com.google.firebase.firestore.model.DocumentKey): boolean;
						public getMatchingKeysForTargetId(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
						public updateTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
						public addTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
						public removeTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class MutationQueue {
						public static class: java.lang.Class<com.google.firebase.firestore.local.MutationQueue>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.MutationQueue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							start(): void;
							isEmpty(): boolean;
							acknowledgeBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch, param1: com.google.protobuf.ByteString): void;
							getLastStreamToken(): com.google.protobuf.ByteString;
							setLastStreamToken(param0: com.google.protobuf.ByteString): void;
							addMutationBatch(param0: com.google.firebase.Timestamp, param1: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>, param2: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.firebase.firestore.model.mutation.MutationBatch;
							lookupMutationBatch(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
							getNextMutationBatchAfterBatchId(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
							getHighestUnacknowledgedBatchId(): number;
							getAllMutationBatches(): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
							getAllMutationBatchesAffectingDocumentKey(param0: com.google.firebase.firestore.model.DocumentKey): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
							getAllMutationBatchesAffectingDocumentKeys(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
							getAllMutationBatchesAffectingQuery(param0: com.google.firebase.firestore.core.Query): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
							removeMutationBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch): void;
							performConsistencyCheck(): void;
						});
						public constructor();
						public getAllMutationBatchesAffectingDocumentKey(param0: com.google.firebase.firestore.model.DocumentKey): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public getAllMutationBatchesAffectingDocumentKeys(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public getLastStreamToken(): com.google.protobuf.ByteString;
						public getHighestUnacknowledgedBatchId(): number;
						public lookupMutationBatch(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public addMutationBatch(param0: com.google.firebase.Timestamp, param1: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>, param2: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.firebase.firestore.model.mutation.MutationBatch;
						public acknowledgeBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch, param1: com.google.protobuf.ByteString): void;
						public getAllMutationBatches(): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public performConsistencyCheck(): void;
						public getAllMutationBatchesAffectingQuery(param0: com.google.firebase.firestore.core.Query): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public start(): void;
						public isEmpty(): boolean;
						public getNextMutationBatchAfterBatchId(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public removeMutationBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch): void;
						public setLastStreamToken(param0: com.google.protobuf.ByteString): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export abstract class Persistence {
						public static class: java.lang.Class<com.google.firebase.firestore.local.Persistence>;
						public static INDEXING_SUPPORT_ENABLED: boolean;
						public shutdown(): void;
						public start(): void;
						public isStarted(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class QueryEngine {
						public static class: java.lang.Class<com.google.firebase.firestore.local.QueryEngine>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.QueryEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setLocalDocumentsView(param0: com.google.firebase.firestore.local.LocalDocumentsView): void;
							getDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
							handleDocumentChange(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.MutableDocument): void;
						});
						public constructor();
						public handleDocumentChange(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.MutableDocument): void;
						public getDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public setLocalDocumentsView(param0: com.google.firebase.firestore.local.LocalDocumentsView): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class QueryPurpose {
						public static class: java.lang.Class<com.google.firebase.firestore.local.QueryPurpose>;
						public static LISTEN: com.google.firebase.firestore.local.QueryPurpose;
						public static EXISTENCE_FILTER_MISMATCH: com.google.firebase.firestore.local.QueryPurpose;
						public static LIMBO_RESOLUTION: com.google.firebase.firestore.local.QueryPurpose;
						public static values(): androidNative.Array<com.google.firebase.firestore.local.QueryPurpose>;
						public static valueOf(param0: string): com.google.firebase.firestore.local.QueryPurpose;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class QueryResult {
						public static class: java.lang.Class<com.google.firebase.firestore.local.QueryResult>;
						public getRemoteKeys(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public getDocuments(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public constructor(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>, param1: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class ReferenceDelegate {
						public static class: java.lang.Class<com.google.firebase.firestore.local.ReferenceDelegate>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.ReferenceDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setInMemoryPins(param0: com.google.firebase.firestore.local.ReferenceSet): void;
							addReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
							removeReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
							removeMutationReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
							removeTarget(param0: com.google.firebase.firestore.local.TargetData): void;
							updateLimboDocument(param0: com.google.firebase.firestore.model.DocumentKey): void;
							getCurrentSequenceNumber(): number;
							onTransactionStarted(): void;
							onTransactionCommitted(): void;
						});
						public constructor();
						public updateLimboDocument(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public addReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public removeMutationReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public onTransactionCommitted(): void;
						public getCurrentSequenceNumber(): number;
						public setInMemoryPins(param0: com.google.firebase.firestore.local.ReferenceSet): void;
						public removeTarget(param0: com.google.firebase.firestore.local.TargetData): void;
						public removeReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public onTransactionStarted(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class ReferenceSet {
						public static class: java.lang.Class<com.google.firebase.firestore.local.ReferenceSet>;
						public constructor();
						public removeReference(param0: com.google.firebase.firestore.model.DocumentKey, param1: number): void;
						public removeReferences(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public containsKey(param0: com.google.firebase.firestore.model.DocumentKey): boolean;
						public removeReferencesForId(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public isEmpty(): boolean;
						public addReferences(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public referencesForId(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public removeAllReferences(): void;
						public addReference(param0: com.google.firebase.firestore.model.DocumentKey, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class RemoteDocumentCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.RemoteDocumentCache>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.RemoteDocumentCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							add(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.SnapshotVersion): void;
							remove(param0: com.google.firebase.firestore.model.DocumentKey): void;
							get(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.MutableDocument;
							getAll(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.Map<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
							getAllDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
						});
						public constructor();
						public add(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.SnapshotVersion): void;
						public get(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.MutableDocument;
						public getAllDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
						public remove(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public getAll(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.Map<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteBundleCache extends com.google.firebase.firestore.local.BundleCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteBundleCache>;
						public getNamedQuery(param0: string): com.google.firebase.firestore.bundle.NamedQuery;
						public saveNamedQuery(param0: com.google.firebase.firestore.bundle.NamedQuery): void;
						public saveBundleMetadata(param0: com.google.firebase.firestore.bundle.BundleMetadata): void;
						public getBundleMetadata(param0: string): com.google.firebase.firestore.bundle.BundleMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteCollectionIndex {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteCollectionIndex>;
						public removeEntry(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firestore.v1.Value, param2: com.google.firebase.firestore.model.DocumentKey): void;
						public addEntry(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firestore.v1.Value, param2: com.google.firebase.firestore.model.DocumentKey): void;
						public getCursor(param0: com.google.firebase.firestore.model.ResourcePath, param1: com.google.firebase.firestore.core.IndexRange): com.google.firebase.firestore.local.IndexCursor;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteIndexManager extends com.google.firebase.firestore.local.IndexManager {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteIndexManager>;
						public getCollectionParents(param0: string): java.util.List<com.google.firebase.firestore.model.ResourcePath>;
						public addToCollectionParentIndex(param0: com.google.firebase.firestore.model.ResourcePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteLruReferenceDelegate implements com.google.firebase.firestore.local.ReferenceDelegate, com.google.firebase.firestore.local.LruDelegate {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteLruReferenceDelegate>;
						public forEachOrphanedDocumentSequenceNumber(param0: com.google.firebase.firestore.util.Consumer<java.lang.Long>): void;
						public getByteSize(): number;
						public removeTargets(param0: number, param1: globalAndroid.util.SparseArray<any>): number;
						public addReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public onTransactionCommitted(): void;
						public getCurrentSequenceNumber(): number;
						public getSequenceNumberCount(): number;
						public getGarbageCollector(): com.google.firebase.firestore.local.LruGarbageCollector;
						public removeReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public updateLimboDocument(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public removeMutationReference(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public setInMemoryPins(param0: com.google.firebase.firestore.local.ReferenceSet): void;
						public removeOrphanedDocuments(param0: number): number;
						public forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
						public removeTarget(param0: com.google.firebase.firestore.local.TargetData): void;
						public onTransactionStarted(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteMutationQueue extends com.google.firebase.firestore.local.MutationQueue {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteMutationQueue>;
						public getAllMutationBatchesAffectingDocumentKey(param0: com.google.firebase.firestore.model.DocumentKey): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public getAllMutationBatchesAffectingDocumentKeys(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public getLastStreamToken(): com.google.protobuf.ByteString;
						public getHighestUnacknowledgedBatchId(): number;
						public lookupMutationBatch(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public addMutationBatch(param0: com.google.firebase.Timestamp, param1: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>, param2: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.firebase.firestore.model.mutation.MutationBatch;
						public acknowledgeBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch, param1: com.google.protobuf.ByteString): void;
						public getAllMutationBatches(): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public performConsistencyCheck(): void;
						public getAllMutationBatchesAffectingQuery(param0: com.google.firebase.firestore.core.Query): java.util.List<com.google.firebase.firestore.model.mutation.MutationBatch>;
						public start(): void;
						public isEmpty(): boolean;
						public getNextMutationBatchAfterBatchId(param0: number): com.google.firebase.firestore.model.mutation.MutationBatch;
						public removeMutationBatch(param0: com.google.firebase.firestore.model.mutation.MutationBatch): void;
						public setLastStreamToken(param0: com.google.protobuf.ByteString): void;
					}
					export module SQLiteMutationQueue {
						export class BlobAccumulator extends com.google.firebase.firestore.util.Consumer<globalAndroid.database.Cursor> {
							public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteMutationQueue.BlobAccumulator>;
							public accept(param0: any): void;
							public accept(param0: globalAndroid.database.Cursor): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLitePersistence extends com.google.firebase.firestore.local.Persistence {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLitePersistence>;
						public getReferenceDelegate(): com.google.firebase.firestore.local.SQLiteLruReferenceDelegate;
						public shutdown(): void;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.google.firebase.firestore.model.DatabaseId, param3: com.google.firebase.firestore.local.LocalSerializer, param4: com.google.firebase.firestore.local.LruGarbageCollector.Params);
						public constructor(param0: com.google.firebase.firestore.local.LocalSerializer, param1: com.google.firebase.firestore.local.LruGarbageCollector.Params, param2: globalAndroid.database.sqlite.SQLiteOpenHelper);
						public start(): void;
						public isStarted(): boolean;
						public static databaseName(param0: string, param1: com.google.firebase.firestore.model.DatabaseId): string;
						public static clearPersistence(param0: globalAndroid.content.Context, param1: com.google.firebase.firestore.model.DatabaseId, param2: string): void;
					}
					export module SQLitePersistence {
						export class LongQuery {
							public static class: java.lang.Class<com.google.firebase.firestore.local.SQLitePersistence.LongQuery>;
						}
						export class OpenHelper {
							public static class: java.lang.Class<com.google.firebase.firestore.local.SQLitePersistence.OpenHelper>;
							public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
							public onConfigure(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
							public onOpen(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
							public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
							public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						}
						export class Query {
							public static class: java.lang.Class<com.google.firebase.firestore.local.SQLitePersistence.Query>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteRemoteDocumentCache extends com.google.firebase.firestore.local.RemoteDocumentCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteRemoteDocumentCache>;
						public add(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.SnapshotVersion): void;
						public get(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.MutableDocument;
						public getAllDocumentsMatchingQuery(param0: com.google.firebase.firestore.core.Query, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
						public remove(param0: com.google.firebase.firestore.model.DocumentKey): void;
						public getAll(param0: java.lang.Iterable<com.google.firebase.firestore.model.DocumentKey>): java.util.Map<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteSchema {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteSchema>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class SQLiteTargetCache extends com.google.firebase.firestore.local.TargetCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteTargetCache>;
						public removeMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public getHighestTargetId(): number;
						public getTargetData(param0: com.google.firebase.firestore.core.Target): com.google.firebase.firestore.local.TargetData;
						public getTargetCount(): number;
						public addMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public setLastRemoteSnapshotVersion(param0: com.google.firebase.firestore.model.SnapshotVersion): void;
						public getLastRemoteSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public getHighestListenSequenceNumber(): number;
						public removeMatchingKeysForTargetId(param0: number): void;
						public containsKey(param0: com.google.firebase.firestore.model.DocumentKey): boolean;
						public getMatchingKeysForTargetId(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
						public updateTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
						public addTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
						public removeTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
					}
					export module SQLiteTargetCache {
						export class DocumentKeysHolder {
							public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteTargetCache.DocumentKeysHolder>;
						}
						export class TargetDataHolder {
							public static class: java.lang.Class<com.google.firebase.firestore.local.SQLiteTargetCache.TargetDataHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class TargetCache {
						public static class: java.lang.Class<com.google.firebase.firestore.local.TargetCache>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.local.TargetCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getHighestTargetId(): number;
							getHighestListenSequenceNumber(): number;
							getTargetCount(): number;
							forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
							getLastRemoteSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
							setLastRemoteSnapshotVersion(param0: com.google.firebase.firestore.model.SnapshotVersion): void;
							addTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
							updateTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
							removeTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
							getTargetData(param0: com.google.firebase.firestore.core.Target): com.google.firebase.firestore.local.TargetData;
							addMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
							removeMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
							removeMatchingKeysForTargetId(param0: number): void;
							getMatchingKeysForTargetId(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
							containsKey(param0: com.google.firebase.firestore.model.DocumentKey): boolean;
						});
						public constructor();
						public removeMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public getHighestTargetId(): number;
						public getTargetData(param0: com.google.firebase.firestore.core.Target): com.google.firebase.firestore.local.TargetData;
						public getTargetCount(): number;
						public addMatchingKeys(param0: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param1: number): void;
						public setLastRemoteSnapshotVersion(param0: com.google.firebase.firestore.model.SnapshotVersion): void;
						public getLastRemoteSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public getHighestListenSequenceNumber(): number;
						public removeMatchingKeysForTargetId(param0: number): void;
						public containsKey(param0: com.google.firebase.firestore.model.DocumentKey): boolean;
						public getMatchingKeysForTargetId(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public forEachTarget(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.local.TargetData>): void;
						public updateTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
						public addTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
						public removeTargetData(param0: com.google.firebase.firestore.local.TargetData): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module local {
					export class TargetData {
						public static class: java.lang.Class<com.google.firebase.firestore.local.TargetData>;
						public getPurpose(): com.google.firebase.firestore.local.QueryPurpose;
						public getLastLimboFreeSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public getSequenceNumber(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTarget(): com.google.firebase.firestore.core.Target;
						public toString(): string;
						public getTargetId(): number;
						public withResumeToken(param0: com.google.protobuf.ByteString, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.local.TargetData;
						public getResumeToken(): com.google.protobuf.ByteString;
						public withLastLimboFreeSnapshotVersion(param0: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.local.TargetData;
						public withSequenceNumber(param0: number): com.google.firebase.firestore.local.TargetData;
						public getSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public constructor(param0: com.google.firebase.firestore.core.Target, param1: number, param2: number, param3: com.google.firebase.firestore.local.QueryPurpose);
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export abstract class BasePath<B>  extends java.lang.Comparable<any> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.BasePath<any>>;
						public popFirst(param0: number): any;
						public getFirstSegment(): string;
						public canonicalString(): string;
						public length(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public compareTo(param0: any): number;
						public append(param0: any): any;
						public isPrefixOf(param0: any): boolean;
						public toString(): string;
						public getSegment(param0: number): string;
						public append(param0: string): any;
						public keepFirst(param0: number): any;
						public popLast(): any;
						public getLastSegment(): string;
						public isImmediateParentOf(param0: any): boolean;
						public isEmpty(): boolean;
						public popFirst(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class DatabaseId extends java.lang.Comparable<com.google.firebase.firestore.model.DatabaseId> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.DatabaseId>;
						public static DEFAULT_DATABASE_ID: string;
						public compareTo(param0: com.google.firebase.firestore.model.DatabaseId): number;
						public getProjectId(): string;
						public static fromName(param0: string): com.google.firebase.firestore.model.DatabaseId;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static forProject(param0: string): com.google.firebase.firestore.model.DatabaseId;
						public static forDatabase(param0: string, param1: string): com.google.firebase.firestore.model.DatabaseId;
						public getDatabaseId(): string;
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
			export module firestore {
				export module model {
					export class Document {
						public static class: java.lang.Class<com.google.firebase.firestore.model.Document>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.model.Document interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getKey(): com.google.firebase.firestore.model.DocumentKey;
							getVersion(): com.google.firebase.firestore.model.SnapshotVersion;
							isValidDocument(): boolean;
							isFoundDocument(): boolean;
							isNoDocument(): boolean;
							isUnknownDocument(): boolean;
							getData(): com.google.firebase.firestore.model.ObjectValue;
							getField(param0: com.google.firebase.firestore.model.FieldPath): com.google.firestore.v1.Value;
							hasLocalMutations(): boolean;
							hasCommittedMutations(): boolean;
							hasPendingWrites(): boolean;
							lambda$static$0(param0: com.google.firebase.firestore.model.Document, param1: com.google.firebase.firestore.model.Document): number;
							<clinit>(): void;
						});
						public constructor();
						public static KEY_COMPARATOR: java.util.Comparator<com.google.firebase.firestore.model.Document>;
						public isUnknownDocument(): boolean;
						public hasCommittedMutations(): boolean;
						public getField(param0: com.google.firebase.firestore.model.FieldPath): com.google.firestore.v1.Value;
						public getVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public isNoDocument(): boolean;
						public hasLocalMutations(): boolean;
						public hasPendingWrites(): boolean;
						public isFoundDocument(): boolean;
						public getKey(): com.google.firebase.firestore.model.DocumentKey;
						public isValidDocument(): boolean;
						public getData(): com.google.firebase.firestore.model.ObjectValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class DocumentCollections {
						public static class: java.lang.Class<com.google.firebase.firestore.model.DocumentCollections>;
						public constructor();
						public static emptyDocumentMap(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>;
						public static emptyMutableDocumentMap(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
						public static emptyVersionMap(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.SnapshotVersion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class DocumentKey extends java.lang.Comparable<com.google.firebase.firestore.model.DocumentKey> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.DocumentKey>;
						public static KEY_FIELD_NAME: string;
						public static fromName(param0: string): com.google.firebase.firestore.model.DocumentKey;
						public static comparator(): java.util.Comparator<com.google.firebase.firestore.model.DocumentKey>;
						public getPath(): com.google.firebase.firestore.model.ResourcePath;
						public static isDocumentKey(param0: com.google.firebase.firestore.model.ResourcePath): boolean;
						public static empty(): com.google.firebase.firestore.model.DocumentKey;
						public compareTo(param0: com.google.firebase.firestore.model.DocumentKey): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static fromSegments(param0: java.util.List<string>): com.google.firebase.firestore.model.DocumentKey;
						public static fromPathString(param0: string): com.google.firebase.firestore.model.DocumentKey;
						public toString(): string;
						public hasCollectionId(param0: string): boolean;
						public static fromPath(param0: com.google.firebase.firestore.model.ResourcePath): com.google.firebase.firestore.model.DocumentKey;
						public static emptyKeySet(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class DocumentSet extends java.lang.Iterable<com.google.firebase.firestore.model.Document> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.DocumentSet>;
						public getLastDocument(): com.google.firebase.firestore.model.Document;
						public getDocument(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.Document;
						public indexOf(param0: com.google.firebase.firestore.model.DocumentKey): number;
						public add(param0: com.google.firebase.firestore.model.Document): com.google.firebase.firestore.model.DocumentSet;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public remove(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.DocumentSet;
						public static emptySet(param0: java.util.Comparator<com.google.firebase.firestore.model.Document>): com.google.firebase.firestore.model.DocumentSet;
						public toString(): string;
						public iterator(): java.util.Iterator<com.google.firebase.firestore.model.Document>;
						public isEmpty(): boolean;
						public toList(): java.util.List<com.google.firebase.firestore.model.Document>;
						public getPredecessor(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.Document;
						public size(): number;
						public contains(param0: com.google.firebase.firestore.model.DocumentKey): boolean;
						public getFirstDocument(): com.google.firebase.firestore.model.Document;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class FieldPath extends com.google.firebase.firestore.model.BasePath<com.google.firebase.firestore.model.FieldPath> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.FieldPath>;
						public static KEY_PATH: com.google.firebase.firestore.model.FieldPath;
						public static EMPTY_PATH: com.google.firebase.firestore.model.FieldPath;
						public static fromServerFormat(param0: string): com.google.firebase.firestore.model.FieldPath;
						public canonicalString(): string;
						public static fromSegments(param0: java.util.List<string>): com.google.firebase.firestore.model.FieldPath;
						public static fromSingleSegment(param0: string): com.google.firebase.firestore.model.FieldPath;
						public isKeyField(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class MutableDocument extends com.google.firebase.firestore.model.Document {
						public static class: java.lang.Class<com.google.firebase.firestore.model.MutableDocument>;
						public hasCommittedMutations(): boolean;
						public isUnknownDocument(): boolean;
						public clone(): com.google.firebase.firestore.model.MutableDocument;
						public static newNoDocument(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.model.MutableDocument;
						public convertToNoDocument(param0: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.model.MutableDocument;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static newInvalidDocument(param0: com.google.firebase.firestore.model.DocumentKey): com.google.firebase.firestore.model.MutableDocument;
						public static newUnknownDocument(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.model.MutableDocument;
						public toString(): string;
						public getData(): com.google.firebase.firestore.model.ObjectValue;
						public isValidDocument(): boolean;
						public convertToUnknownDocument(param0: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.model.MutableDocument;
						public getField(param0: com.google.firebase.firestore.model.FieldPath): com.google.firestore.v1.Value;
						public getVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public isNoDocument(): boolean;
						public setHasLocalMutations(): com.google.firebase.firestore.model.MutableDocument;
						public hasLocalMutations(): boolean;
						public setHasCommittedMutations(): com.google.firebase.firestore.model.MutableDocument;
						public convertToFoundDocument(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: com.google.firebase.firestore.model.ObjectValue): com.google.firebase.firestore.model.MutableDocument;
						public static newFoundDocument(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: com.google.firebase.firestore.model.ObjectValue): com.google.firebase.firestore.model.MutableDocument;
						public hasPendingWrites(): boolean;
						public isFoundDocument(): boolean;
						public getKey(): com.google.firebase.firestore.model.DocumentKey;
					}
					export module MutableDocument {
						export class DocumentState {
							public static class: java.lang.Class<com.google.firebase.firestore.model.MutableDocument.DocumentState>;
							public static HAS_LOCAL_MUTATIONS: com.google.firebase.firestore.model.MutableDocument.DocumentState;
							public static HAS_COMMITTED_MUTATIONS: com.google.firebase.firestore.model.MutableDocument.DocumentState;
							public static SYNCED: com.google.firebase.firestore.model.MutableDocument.DocumentState;
							public static values(): androidNative.Array<com.google.firebase.firestore.model.MutableDocument.DocumentState>;
							public static valueOf(param0: string): com.google.firebase.firestore.model.MutableDocument.DocumentState;
						}
						export class DocumentType {
							public static class: java.lang.Class<com.google.firebase.firestore.model.MutableDocument.DocumentType>;
							public static INVALID: com.google.firebase.firestore.model.MutableDocument.DocumentType;
							public static FOUND_DOCUMENT: com.google.firebase.firestore.model.MutableDocument.DocumentType;
							public static NO_DOCUMENT: com.google.firebase.firestore.model.MutableDocument.DocumentType;
							public static UNKNOWN_DOCUMENT: com.google.firebase.firestore.model.MutableDocument.DocumentType;
							public static values(): androidNative.Array<com.google.firebase.firestore.model.MutableDocument.DocumentType>;
							public static valueOf(param0: string): com.google.firebase.firestore.model.MutableDocument.DocumentType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class ObjectValue {
						public static class: java.lang.Class<com.google.firebase.firestore.model.ObjectValue>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
						public set(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firestore.v1.Value): void;
						public getFieldMask(): com.google.firebase.firestore.model.mutation.FieldMask;
						public toString(): string;
						public delete(param0: com.google.firebase.firestore.model.FieldPath): void;
						public clone(): com.google.firebase.firestore.model.ObjectValue;
						public static fromMap(param0: java.util.Map<string,com.google.firestore.v1.Value>): com.google.firebase.firestore.model.ObjectValue;
						public get(param0: com.google.firebase.firestore.model.FieldPath): com.google.firestore.v1.Value;
						public constructor(param0: com.google.firestore.v1.Value);
						public setAll(param0: java.util.Map<com.google.firebase.firestore.model.FieldPath,com.google.firestore.v1.Value>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class ResourcePath extends com.google.firebase.firestore.model.BasePath<com.google.firebase.firestore.model.ResourcePath> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.ResourcePath>;
						public static EMPTY: com.google.firebase.firestore.model.ResourcePath;
						public static fromString(param0: string): com.google.firebase.firestore.model.ResourcePath;
						public canonicalString(): string;
						public static fromSegments(param0: java.util.List<string>): com.google.firebase.firestore.model.ResourcePath;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class ServerTimestamps {
						public static class: java.lang.Class<com.google.firebase.firestore.model.ServerTimestamps>;
						public static isServerTimestamp(param0: com.google.firestore.v1.Value): boolean;
						public static getPreviousValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						public static getLocalWriteTime(param0: com.google.firestore.v1.Value): com.google.protobuf.Timestamp;
						public static valueOf(param0: com.google.firebase.Timestamp, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export class SnapshotVersion extends java.lang.Comparable<com.google.firebase.firestore.model.SnapshotVersion> {
						public static class: java.lang.Class<com.google.firebase.firestore.model.SnapshotVersion>;
						public static NONE: com.google.firebase.firestore.model.SnapshotVersion;
						public constructor(param0: com.google.firebase.Timestamp);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getTimestamp(): com.google.firebase.Timestamp;
						public compareTo(param0: com.google.firebase.firestore.model.SnapshotVersion): number;
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
			export module firestore {
				export module model {
					export class Values {
						public static class: java.lang.Class<com.google.firebase.firestore.model.Values>;
						public static NAN_VALUE: com.google.firestore.v1.Value;
						public static NULL_VALUE: com.google.firestore.v1.Value;
						public static TYPE_ORDER_NULL: number;
						public static TYPE_ORDER_BOOLEAN: number;
						public static TYPE_ORDER_NUMBER: number;
						public static TYPE_ORDER_TIMESTAMP: number;
						public static TYPE_ORDER_SERVER_TIMESTAMP: number;
						public static TYPE_ORDER_STRING: number;
						public static TYPE_ORDER_BLOB: number;
						public static TYPE_ORDER_REFERENCE: number;
						public static TYPE_ORDER_GEOPOINT: number;
						public static TYPE_ORDER_ARRAY: number;
						public static TYPE_ORDER_MAP: number;
						public static isInteger(param0: com.google.firestore.v1.Value): boolean;
						public constructor();
						public static canonicalId(param0: com.google.firestore.v1.Value): string;
						public static isMapValue(param0: com.google.firestore.v1.Value): boolean;
						public static compare(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): number;
						public static typeOrder(param0: com.google.firestore.v1.Value): number;
						public static isArray(param0: com.google.firestore.v1.Value): boolean;
						public static equals(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): boolean;
						public static isNumber(param0: com.google.firestore.v1.Value): boolean;
						public static isNanValue(param0: com.google.firestore.v1.Value): boolean;
						public static isDouble(param0: com.google.firestore.v1.Value): boolean;
						public static isNullValue(param0: com.google.firestore.v1.Value): boolean;
						public static refValue(param0: com.google.firebase.firestore.model.DatabaseId, param1: com.google.firebase.firestore.model.DocumentKey): com.google.firestore.v1.Value;
						public static isReferenceValue(param0: com.google.firestore.v1.Value): boolean;
						public static contains(param0: com.google.firestore.v1.ArrayValueOrBuilder, param1: com.google.firestore.v1.Value): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export abstract class ArrayTransformOperation extends com.google.firebase.firestore.model.mutation.TransformOperation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.ArrayTransformOperation>;
							public computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							public applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
							public hashCode(): number;
							public apply(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							public getElements(): java.util.List<com.google.firestore.v1.Value>;
							public applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							public equals(param0: any): boolean;
						}
						export module ArrayTransformOperation {
							export class Remove extends com.google.firebase.firestore.model.mutation.ArrayTransformOperation {
								public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.ArrayTransformOperation.Remove>;
								public computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
								public apply(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
								public constructor(param0: java.util.List<com.google.firestore.v1.Value>);
								public applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
								public applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							}
							export class Union extends com.google.firebase.firestore.model.mutation.ArrayTransformOperation {
								public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.ArrayTransformOperation.Union>;
								public computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
								public apply(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
								public constructor(param0: java.util.List<com.google.firestore.v1.Value>);
								public applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
								public applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
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
			export module firestore {
				export module model {
					export module mutation {
						export class DeleteMutation extends com.google.firebase.firestore.model.mutation.Mutation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.DeleteMutation>;
							public applyToLocalView(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.Timestamp): void;
							public hashCode(): number;
							public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.mutation.Precondition);
							public applyToRemoteDocument(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.mutation.MutationResult): void;
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
			export module firestore {
				export module model {
					export module mutation {
						export class FieldMask {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.FieldMask>;
							public hashCode(): number;
							public static fromSet(param0: java.util.Set<com.google.firebase.firestore.model.FieldPath>): com.google.firebase.firestore.model.mutation.FieldMask;
							public getMask(): java.util.Set<com.google.firebase.firestore.model.FieldPath>;
							public covers(param0: com.google.firebase.firestore.model.FieldPath): boolean;
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
			export module firestore {
				export module model {
					export module mutation {
						export class FieldTransform {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.FieldTransform>;
							public getOperation(): com.google.firebase.firestore.model.mutation.TransformOperation;
							public hashCode(): number;
							public getFieldPath(): com.google.firebase.firestore.model.FieldPath;
							public equals(param0: any): boolean;
							public constructor(param0: com.google.firebase.firestore.model.FieldPath, param1: com.google.firebase.firestore.model.mutation.TransformOperation);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export abstract class Mutation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.Mutation>;
							public applyToLocalView(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.Timestamp): void;
							public getKey(): com.google.firebase.firestore.model.DocumentKey;
							public getFieldTransforms(): java.util.List<com.google.firebase.firestore.model.mutation.FieldTransform>;
							public applyToRemoteDocument(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.mutation.MutationResult): void;
							public localTransformResults(param0: com.google.firebase.Timestamp, param1: com.google.firebase.firestore.model.MutableDocument): java.util.Map<com.google.firebase.firestore.model.FieldPath,com.google.firestore.v1.Value>;
							public extractTransformBaseValue(param0: com.google.firebase.firestore.model.Document): com.google.firebase.firestore.model.ObjectValue;
							public serverTransformResults(param0: com.google.firebase.firestore.model.MutableDocument, param1: java.util.List<com.google.firestore.v1.Value>): java.util.Map<com.google.firebase.firestore.model.FieldPath,com.google.firestore.v1.Value>;
							public getPrecondition(): com.google.firebase.firestore.model.mutation.Precondition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class MutationBatch {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.MutationBatch>;
							public static UNKNOWN: number;
							public hashCode(): number;
							public applyToRemoteDocument(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.mutation.MutationBatchResult): void;
							public applyToLocalDocumentSet(param0: com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.Document>): void;
							public getBatchId(): number;
							public getBaseMutations(): java.util.List<com.google.firebase.firestore.model.mutation.Mutation>;
							public getKeys(): java.util.Set<com.google.firebase.firestore.model.DocumentKey>;
							public applyToLocalView(param0: com.google.firebase.firestore.model.MutableDocument): void;
							public toString(): string;
							public constructor(param0: number, param1: com.google.firebase.Timestamp, param2: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>, param3: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>);
							public getMutations(): java.util.List<com.google.firebase.firestore.model.mutation.Mutation>;
							public equals(param0: any): boolean;
							public getLocalWriteTime(): com.google.firebase.Timestamp;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class MutationBatchResult {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.MutationBatchResult>;
							public getMutationResults(): java.util.List<com.google.firebase.firestore.model.mutation.MutationResult>;
							public getCommitVersion(): com.google.firebase.firestore.model.SnapshotVersion;
							public static create(param0: com.google.firebase.firestore.model.mutation.MutationBatch, param1: com.google.firebase.firestore.model.SnapshotVersion, param2: java.util.List<com.google.firebase.firestore.model.mutation.MutationResult>, param3: com.google.protobuf.ByteString): com.google.firebase.firestore.model.mutation.MutationBatchResult;
							public getDocVersions(): com.google.firebase.database.collection.ImmutableSortedMap<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.SnapshotVersion>;
							public getBatch(): com.google.firebase.firestore.model.mutation.MutationBatch;
							public getStreamToken(): com.google.protobuf.ByteString;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class MutationResult {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.MutationResult>;
							public getTransformResults(): java.util.List<com.google.firestore.v1.Value>;
							public getVersion(): com.google.firebase.firestore.model.SnapshotVersion;
							public constructor(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: java.util.List<com.google.firestore.v1.Value>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class NumericIncrementTransformOperation extends com.google.firebase.firestore.model.mutation.TransformOperation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.NumericIncrementTransformOperation>;
							public computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							public applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
							public getOperand(): com.google.firestore.v1.Value;
							public constructor(param0: com.google.firestore.v1.Value);
							public applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class PatchMutation extends com.google.firebase.firestore.model.mutation.Mutation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.PatchMutation>;
							public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.ObjectValue, param2: com.google.firebase.firestore.model.mutation.FieldMask, param3: com.google.firebase.firestore.model.mutation.Precondition, param4: java.util.List<com.google.firebase.firestore.model.mutation.FieldTransform>);
							public applyToLocalView(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.Timestamp): void;
							public hashCode(): number;
							public applyToRemoteDocument(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.mutation.MutationResult): void;
							public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.ObjectValue, param2: com.google.firebase.firestore.model.mutation.FieldMask, param3: com.google.firebase.firestore.model.mutation.Precondition);
							public toString(): string;
							public getValue(): com.google.firebase.firestore.model.ObjectValue;
							public getMask(): com.google.firebase.firestore.model.mutation.FieldMask;
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
			export module firestore {
				export module model {
					export module mutation {
						export class Precondition {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.Precondition>;
							public static NONE: com.google.firebase.firestore.model.mutation.Precondition;
							public static exists(param0: boolean): com.google.firebase.firestore.model.mutation.Precondition;
							public static updateTime(param0: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.model.mutation.Precondition;
							public getExists(): java.lang.Boolean;
							public hashCode(): number;
							public toString(): string;
							public getUpdateTime(): com.google.firebase.firestore.model.SnapshotVersion;
							public equals(param0: any): boolean;
							public isNone(): boolean;
							public isValidFor(param0: com.google.firebase.firestore.model.MutableDocument): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class ServerTimestampOperation extends com.google.firebase.firestore.model.mutation.TransformOperation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.ServerTimestampOperation>;
							public computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							public applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
							public static getInstance(): com.google.firebase.firestore.model.mutation.ServerTimestampOperation;
							public applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class SetMutation extends com.google.firebase.firestore.model.mutation.Mutation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.SetMutation>;
							public applyToLocalView(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.Timestamp): void;
							public hashCode(): number;
							public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.ObjectValue, param2: com.google.firebase.firestore.model.mutation.Precondition);
							public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.ObjectValue, param2: com.google.firebase.firestore.model.mutation.Precondition, param3: java.util.List<com.google.firebase.firestore.model.mutation.FieldTransform>);
							public applyToRemoteDocument(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.mutation.MutationResult): void;
							public toString(): string;
							public getValue(): com.google.firebase.firestore.model.ObjectValue;
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
			export module firestore {
				export module model {
					export module mutation {
						export class TransformOperation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.TransformOperation>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.model.mutation.TransformOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
								applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
								computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							});
							public constructor();
							public computeBaseValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
							public applyToLocalView(param0: com.google.firestore.v1.Value, param1: com.google.firebase.Timestamp): com.google.firestore.v1.Value;
							public applyToRemoteDocument(param0: com.google.firestore.v1.Value, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module model {
					export module mutation {
						export class VerifyMutation extends com.google.firebase.firestore.model.mutation.Mutation {
							public static class: java.lang.Class<com.google.firebase.firestore.model.mutation.VerifyMutation>;
							public applyToLocalView(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.Timestamp): void;
							public hashCode(): number;
							public constructor(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.mutation.Precondition);
							public applyToRemoteDocument(param0: com.google.firebase.firestore.model.MutableDocument, param1: com.google.firebase.firestore.model.mutation.MutationResult): void;
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
			export module firestore {
				export module proto {
					export class MaybeDocument extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.MaybeDocument,com.google.firebase.firestore.proto.MaybeDocument.Builder> implements com.google.firebase.firestore.proto.MaybeDocumentOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.MaybeDocument>;
						public static NO_DOCUMENT_FIELD_NUMBER: number;
						public static DOCUMENT_FIELD_NUMBER: number;
						public static UNKNOWN_DOCUMENT_FIELD_NUMBER: number;
						public static HAS_COMMITTED_MUTATIONS_FIELD_NUMBER: number;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.MaybeDocument;
						public getHasCommittedMutations(): boolean;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.MaybeDocument;
						public hasNoDocument(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public hasUnknownDocument(): boolean;
						public getUnknownDocument(): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MaybeDocument;
						public static newBuilder(param0: com.google.firebase.firestore.proto.MaybeDocument): com.google.firebase.firestore.proto.MaybeDocument.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.MaybeDocument;
						public hasDocument(): boolean;
						public getDocument(): com.google.firestore.v1.Document;
						public getNoDocument(): com.google.firebase.firestore.proto.NoDocument;
						public getDocumentTypeCase(): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.MaybeDocument;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MaybeDocument;
						public static newBuilder(): com.google.firebase.firestore.proto.MaybeDocument.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.MaybeDocument>;
					}
					export module MaybeDocument {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.MaybeDocument,com.google.firebase.firestore.proto.MaybeDocument.Builder> implements com.google.firebase.firestore.proto.MaybeDocumentOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.MaybeDocument.Builder>;
							public clearHasCommittedMutations(): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public clearDocumentType(): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public setDocument(param0: com.google.firestore.v1.Document.Builder): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public hasNoDocument(): boolean;
							public mergeUnknownDocument(param0: com.google.firebase.firestore.proto.UnknownDocument): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public getHasCommittedMutations(): boolean;
							public getDocument(): com.google.firestore.v1.Document;
							public clearNoDocument(): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public setUnknownDocument(param0: com.google.firebase.firestore.proto.UnknownDocument): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public setHasCommittedMutations(param0: boolean): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public getNoDocument(): com.google.firebase.firestore.proto.NoDocument;
							public hasDocument(): boolean;
							public clearDocument(): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public mergeDocument(param0: com.google.firestore.v1.Document): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public setDocument(param0: com.google.firestore.v1.Document): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public hasUnknownDocument(): boolean;
							public setNoDocument(param0: com.google.firebase.firestore.proto.NoDocument): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public clearUnknownDocument(): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public mergeNoDocument(param0: com.google.firebase.firestore.proto.NoDocument): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public getUnknownDocument(): com.google.firebase.firestore.proto.UnknownDocument;
							public setUnknownDocument(param0: com.google.firebase.firestore.proto.UnknownDocument.Builder): com.google.firebase.firestore.proto.MaybeDocument.Builder;
							public getDocumentTypeCase(): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							public setNoDocument(param0: com.google.firebase.firestore.proto.NoDocument.Builder): com.google.firebase.firestore.proto.MaybeDocument.Builder;
						}
						export class DocumentTypeCase {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase>;
							public static NO_DOCUMENT: com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							public static DOCUMENT: com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							public static UNKNOWN_DOCUMENT: com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							public static DOCUMENTTYPE_NOT_SET: com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							public static values(): androidNative.Array<com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase>;
							public getNumber(): number;
							public static valueOf(param0: string): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
							public static forNumber(param0: number): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class MaybeDocumentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.MaybeDocumentOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.MaybeDocumentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasNoDocument(): boolean;
							getNoDocument(): com.google.firebase.firestore.proto.NoDocument;
							hasDocument(): boolean;
							getDocument(): com.google.firestore.v1.Document;
							hasUnknownDocument(): boolean;
							getUnknownDocument(): com.google.firebase.firestore.proto.UnknownDocument;
							getHasCommittedMutations(): boolean;
							getDocumentTypeCase(): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
						});
						public constructor();
						public getDocument(): com.google.firestore.v1.Document;
						public getNoDocument(): com.google.firebase.firestore.proto.NoDocument;
						public getHasCommittedMutations(): boolean;
						public hasNoDocument(): boolean;
						public getDocumentTypeCase(): com.google.firebase.firestore.proto.MaybeDocument.DocumentTypeCase;
						public hasUnknownDocument(): boolean;
						public getUnknownDocument(): com.google.firebase.firestore.proto.UnknownDocument;
						public hasDocument(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class MaybeDocumentOuterClass {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.MaybeDocumentOuterClass>;
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
			export module firestore {
				export module proto {
					export class Mutation {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.Mutation>;
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
			export module firestore {
				export module proto {
					export class MutationQueue extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.MutationQueue,com.google.firebase.firestore.proto.MutationQueue.Builder> implements com.google.firebase.firestore.proto.MutationQueueOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.MutationQueue>;
						public static LAST_ACKNOWLEDGED_BATCH_ID_FIELD_NUMBER: number;
						public static LAST_STREAM_TOKEN_FIELD_NUMBER: number;
						public static newBuilder(): com.google.firebase.firestore.proto.MutationQueue.Builder;
						public getLastStreamToken(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MutationQueue;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.MutationQueue;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.MutationQueue>;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.MutationQueue;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.MutationQueue;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static newBuilder(param0: com.google.firebase.firestore.proto.MutationQueue): com.google.firebase.firestore.proto.MutationQueue.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.MutationQueue;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.MutationQueue;
						public getLastAcknowledgedBatchId(): number;
					}
					export module MutationQueue {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.MutationQueue,com.google.firebase.firestore.proto.MutationQueue.Builder> implements com.google.firebase.firestore.proto.MutationQueueOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.MutationQueue.Builder>;
							public setLastStreamToken(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.MutationQueue.Builder;
							public getLastAcknowledgedBatchId(): number;
							public getLastStreamToken(): com.google.protobuf.ByteString;
							public clearLastStreamToken(): com.google.firebase.firestore.proto.MutationQueue.Builder;
							public setLastAcknowledgedBatchId(param0: number): com.google.firebase.firestore.proto.MutationQueue.Builder;
							public clearLastAcknowledgedBatchId(): com.google.firebase.firestore.proto.MutationQueue.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class MutationQueueOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.MutationQueueOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.MutationQueueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLastAcknowledgedBatchId(): number;
							getLastStreamToken(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getLastStreamToken(): com.google.protobuf.ByteString;
						public getLastAcknowledgedBatchId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class NoDocument extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.NoDocument,com.google.firebase.firestore.proto.NoDocument.Builder> implements com.google.firebase.firestore.proto.NoDocumentOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.NoDocument>;
						public static NAME_FIELD_NUMBER: number;
						public static READ_TIME_FIELD_NUMBER: number;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.NoDocument;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.NoDocument>;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.NoDocument;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getName(): string;
						public hasReadTime(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.NoDocument;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.NoDocument;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.NoDocument;
						public getReadTime(): com.google.protobuf.Timestamp;
						public static newBuilder(param0: com.google.firebase.firestore.proto.NoDocument): com.google.firebase.firestore.proto.NoDocument.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.NoDocument;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.NoDocument;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.NoDocument;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.NoDocument;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.NoDocument;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.NoDocument;
						public static newBuilder(): com.google.firebase.firestore.proto.NoDocument.Builder;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.NoDocument;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.NoDocument;
					}
					export module NoDocument {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.NoDocument,com.google.firebase.firestore.proto.NoDocument.Builder> implements com.google.firebase.firestore.proto.NoDocumentOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.NoDocument.Builder>;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.NoDocument.Builder;
							public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firebase.firestore.proto.NoDocument.Builder;
							public clearReadTime(): com.google.firebase.firestore.proto.NoDocument.Builder;
							public getReadTime(): com.google.protobuf.Timestamp;
							public getName(): string;
							public clearName(): com.google.firebase.firestore.proto.NoDocument.Builder;
							public setName(param0: string): com.google.firebase.firestore.proto.NoDocument.Builder;
							public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.NoDocument.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public hasReadTime(): boolean;
							public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.NoDocument.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class NoDocumentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.NoDocumentOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.NoDocumentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
							hasReadTime(): boolean;
							getReadTime(): com.google.protobuf.Timestamp;
						});
						public constructor();
						public hasReadTime(): boolean;
						public getReadTime(): com.google.protobuf.Timestamp;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class Target extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.Target,com.google.firebase.firestore.proto.Target.Builder> implements com.google.firebase.firestore.proto.TargetOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.Target>;
						public static TARGET_ID_FIELD_NUMBER: number;
						public static SNAPSHOT_VERSION_FIELD_NUMBER: number;
						public static RESUME_TOKEN_FIELD_NUMBER: number;
						public static LAST_LISTEN_SEQUENCE_NUMBER_FIELD_NUMBER: number;
						public static QUERY_FIELD_NUMBER: number;
						public static DOCUMENTS_FIELD_NUMBER: number;
						public static LAST_LIMBO_FREE_SNAPSHOT_VERSION_FIELD_NUMBER: number;
						public hasQuery(): boolean;
						public getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
						public getLastLimboFreeSnapshotVersion(): com.google.protobuf.Timestamp;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.Target;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.Target;
						public getTargetId(): number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.Target;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.Target;
						public hasSnapshotVersion(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.Target;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.Target;
						public getQuery(): com.google.firestore.v1.Target.QueryTarget;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.Target;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.Target>;
						public static newBuilder(): com.google.firebase.firestore.proto.Target.Builder;
						public getTargetTypeCase(): com.google.firebase.firestore.proto.Target.TargetTypeCase;
						public hasDocuments(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.Target;
						public static newBuilder(param0: com.google.firebase.firestore.proto.Target): com.google.firebase.firestore.proto.Target.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.Target;
						public getResumeToken(): com.google.protobuf.ByteString;
						public getLastListenSequenceNumber(): number;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.Target;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.Target;
						public hasLastLimboFreeSnapshotVersion(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.Target;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.Target;
						public getSnapshotVersion(): com.google.protobuf.Timestamp;
					}
					export module Target {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.Target,com.google.firebase.firestore.proto.Target.Builder> implements com.google.firebase.firestore.proto.TargetOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.Target.Builder>;
							public hasQuery(): boolean;
							public getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
							public hasSnapshotVersion(): boolean;
							public mergeQuery(param0: com.google.firestore.v1.Target.QueryTarget): com.google.firebase.firestore.proto.Target.Builder;
							public clearSnapshotVersion(): com.google.firebase.firestore.proto.Target.Builder;
							public mergeLastLimboFreeSnapshotVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.Target.Builder;
							public clearLastLimboFreeSnapshotVersion(): com.google.firebase.firestore.proto.Target.Builder;
							public clearDocuments(): com.google.firebase.firestore.proto.Target.Builder;
							public getLastListenSequenceNumber(): number;
							public setSnapshotVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.Target.Builder;
							public setResumeToken(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.Target.Builder;
							public setDocuments(param0: com.google.firestore.v1.Target.DocumentsTarget.Builder): com.google.firebase.firestore.proto.Target.Builder;
							public getQuery(): com.google.firestore.v1.Target.QueryTarget;
							public clearResumeToken(): com.google.firebase.firestore.proto.Target.Builder;
							public mergeDocuments(param0: com.google.firestore.v1.Target.DocumentsTarget): com.google.firebase.firestore.proto.Target.Builder;
							public mergeSnapshotVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.Target.Builder;
							public setLastListenSequenceNumber(param0: number): com.google.firebase.firestore.proto.Target.Builder;
							public getTargetId(): number;
							public setTargetId(param0: number): com.google.firebase.firestore.proto.Target.Builder;
							public setQuery(param0: com.google.firestore.v1.Target.QueryTarget): com.google.firebase.firestore.proto.Target.Builder;
							public clearTargetId(): com.google.firebase.firestore.proto.Target.Builder;
							public hasDocuments(): boolean;
							public clearTargetType(): com.google.firebase.firestore.proto.Target.Builder;
							public getLastLimboFreeSnapshotVersion(): com.google.protobuf.Timestamp;
							public clearQuery(): com.google.firebase.firestore.proto.Target.Builder;
							public setDocuments(param0: com.google.firestore.v1.Target.DocumentsTarget): com.google.firebase.firestore.proto.Target.Builder;
							public hasLastLimboFreeSnapshotVersion(): boolean;
							public getResumeToken(): com.google.protobuf.ByteString;
							public setSnapshotVersion(param0: com.google.protobuf.Timestamp.Builder): com.google.firebase.firestore.proto.Target.Builder;
							public setQuery(param0: com.google.firestore.v1.Target.QueryTarget.Builder): com.google.firebase.firestore.proto.Target.Builder;
							public clearLastListenSequenceNumber(): com.google.firebase.firestore.proto.Target.Builder;
							public setLastLimboFreeSnapshotVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.Target.Builder;
							public getSnapshotVersion(): com.google.protobuf.Timestamp;
							public setLastLimboFreeSnapshotVersion(param0: com.google.protobuf.Timestamp.Builder): com.google.firebase.firestore.proto.Target.Builder;
							public getTargetTypeCase(): com.google.firebase.firestore.proto.Target.TargetTypeCase;
						}
						export class TargetTypeCase {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.Target.TargetTypeCase>;
							public static QUERY: com.google.firebase.firestore.proto.Target.TargetTypeCase;
							public static DOCUMENTS: com.google.firebase.firestore.proto.Target.TargetTypeCase;
							public static TARGETTYPE_NOT_SET: com.google.firebase.firestore.proto.Target.TargetTypeCase;
							public static forNumber(param0: number): com.google.firebase.firestore.proto.Target.TargetTypeCase;
							public static values(): androidNative.Array<com.google.firebase.firestore.proto.Target.TargetTypeCase>;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firebase.firestore.proto.Target.TargetTypeCase;
							public static valueOf(param0: string): com.google.firebase.firestore.proto.Target.TargetTypeCase;
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
			export module firestore {
				export module proto {
					export class TargetGlobal extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.TargetGlobal,com.google.firebase.firestore.proto.TargetGlobal.Builder> implements com.google.firebase.firestore.proto.TargetGlobalOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.TargetGlobal>;
						public static HIGHEST_TARGET_ID_FIELD_NUMBER: number;
						public static HIGHEST_LISTEN_SEQUENCE_NUMBER_FIELD_NUMBER: number;
						public static LAST_REMOTE_SNAPSHOT_VERSION_FIELD_NUMBER: number;
						public static TARGET_COUNT_FIELD_NUMBER: number;
						public getHighestTargetId(): number;
						public hasLastRemoteSnapshotVersion(): boolean;
						public getTargetCount(): number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.TargetGlobal;
						public static newBuilder(): com.google.firebase.firestore.proto.TargetGlobal.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.TargetGlobal;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.TargetGlobal;
						public getHighestListenSequenceNumber(): number;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.TargetGlobal;
						public static newBuilder(param0: com.google.firebase.firestore.proto.TargetGlobal): com.google.firebase.firestore.proto.TargetGlobal.Builder;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.TargetGlobal>;
						public getLastRemoteSnapshotVersion(): com.google.protobuf.Timestamp;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.TargetGlobal;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.TargetGlobal;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.TargetGlobal;
					}
					export module TargetGlobal {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.TargetGlobal,com.google.firebase.firestore.proto.TargetGlobal.Builder> implements com.google.firebase.firestore.proto.TargetGlobalOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.TargetGlobal.Builder>;
							public hasLastRemoteSnapshotVersion(): boolean;
							public clearTargetCount(): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public getHighestTargetId(): number;
							public getTargetCount(): number;
							public setHighestTargetId(param0: number): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public getHighestListenSequenceNumber(): number;
							public setTargetCount(param0: number): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public clearLastRemoteSnapshotVersion(): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public getLastRemoteSnapshotVersion(): com.google.protobuf.Timestamp;
							public mergeLastRemoteSnapshotVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public clearHighestTargetId(): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public setHighestListenSequenceNumber(param0: number): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public clearHighestListenSequenceNumber(): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public setLastRemoteSnapshotVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.TargetGlobal.Builder;
							public setLastRemoteSnapshotVersion(param0: com.google.protobuf.Timestamp.Builder): com.google.firebase.firestore.proto.TargetGlobal.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class TargetGlobalOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.TargetGlobalOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.TargetGlobalOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getHighestTargetId(): number;
							getHighestListenSequenceNumber(): number;
							hasLastRemoteSnapshotVersion(): boolean;
							getLastRemoteSnapshotVersion(): com.google.protobuf.Timestamp;
							getTargetCount(): number;
						});
						public constructor();
						public getHighestTargetId(): number;
						public hasLastRemoteSnapshotVersion(): boolean;
						public getLastRemoteSnapshotVersion(): com.google.protobuf.Timestamp;
						public getTargetCount(): number;
						public getHighestListenSequenceNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class TargetOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.TargetOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.TargetOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTargetId(): number;
							hasSnapshotVersion(): boolean;
							getSnapshotVersion(): com.google.protobuf.Timestamp;
							getResumeToken(): com.google.protobuf.ByteString;
							getLastListenSequenceNumber(): number;
							hasQuery(): boolean;
							getQuery(): com.google.firestore.v1.Target.QueryTarget;
							hasDocuments(): boolean;
							getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
							hasLastLimboFreeSnapshotVersion(): boolean;
							getLastLimboFreeSnapshotVersion(): com.google.protobuf.Timestamp;
							getTargetTypeCase(): com.google.firebase.firestore.proto.Target.TargetTypeCase;
						});
						public constructor();
						public getTargetId(): number;
						public getQuery(): com.google.firestore.v1.Target.QueryTarget;
						public getResumeToken(): com.google.protobuf.ByteString;
						public getLastListenSequenceNumber(): number;
						public hasQuery(): boolean;
						public getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
						public getTargetTypeCase(): com.google.firebase.firestore.proto.Target.TargetTypeCase;
						public hasDocuments(): boolean;
						public getLastLimboFreeSnapshotVersion(): com.google.protobuf.Timestamp;
						public hasSnapshotVersion(): boolean;
						public hasLastLimboFreeSnapshotVersion(): boolean;
						public getSnapshotVersion(): com.google.protobuf.Timestamp;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class TargetOuterClass {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.TargetOuterClass>;
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
			export module firestore {
				export module proto {
					export class UnknownDocument extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.UnknownDocument,com.google.firebase.firestore.proto.UnknownDocument.Builder> implements com.google.firebase.firestore.proto.UnknownDocumentOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.UnknownDocument>;
						public static NAME_FIELD_NUMBER: number;
						public static VERSION_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.UnknownDocument;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.UnknownDocument>;
						public getVersion(): com.google.protobuf.Timestamp;
						public hasVersion(): boolean;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getName(): string;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.UnknownDocument;
						public static newBuilder(): com.google.firebase.firestore.proto.UnknownDocument.Builder;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.UnknownDocument;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.UnknownDocument;
						public getNameBytes(): com.google.protobuf.ByteString;
						public static newBuilder(param0: com.google.firebase.firestore.proto.UnknownDocument): com.google.firebase.firestore.proto.UnknownDocument.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.UnknownDocument;
					}
					export module UnknownDocument {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.UnknownDocument,com.google.firebase.firestore.proto.UnknownDocument.Builder> implements com.google.firebase.firestore.proto.UnknownDocumentOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.UnknownDocument.Builder>;
							public setVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.UnknownDocument.Builder;
							public setVersion(param0: com.google.protobuf.Timestamp.Builder): com.google.firebase.firestore.proto.UnknownDocument.Builder;
							public getName(): string;
							public clearName(): com.google.firebase.firestore.proto.UnknownDocument.Builder;
							public getVersion(): com.google.protobuf.Timestamp;
							public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.UnknownDocument.Builder;
							public hasVersion(): boolean;
							public mergeVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.UnknownDocument.Builder;
							public clearVersion(): com.google.firebase.firestore.proto.UnknownDocument.Builder;
							public getNameBytes(): com.google.protobuf.ByteString;
							public setName(param0: string): com.google.firebase.firestore.proto.UnknownDocument.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class UnknownDocumentOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.UnknownDocumentOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.UnknownDocumentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getNameBytes(): com.google.protobuf.ByteString;
							hasVersion(): boolean;
							getVersion(): com.google.protobuf.Timestamp;
						});
						public constructor();
						public getVersion(): com.google.protobuf.Timestamp;
						public getNameBytes(): com.google.protobuf.ByteString;
						public hasVersion(): boolean;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class WriteBatch extends com.google.protobuf.GeneratedMessageLite<com.google.firebase.firestore.proto.WriteBatch,com.google.firebase.firestore.proto.WriteBatch.Builder> implements com.google.firebase.firestore.proto.WriteBatchOrBuilder  {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.WriteBatch>;
						public static BATCH_ID_FIELD_NUMBER: number;
						public static WRITES_FIELD_NUMBER: number;
						public static LOCAL_WRITE_TIME_FIELD_NUMBER: number;
						public static BASE_WRITES_FIELD_NUMBER: number;
						public getWritesCount(): number;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.WriteBatch;
						public getWrites(param0: number): com.google.firestore.v1.Write;
						public getBaseWritesList(): java.util.List<com.google.firestore.v1.Write>;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.WriteBatch;
						public static newBuilder(param0: com.google.firebase.firestore.proto.WriteBatch): com.google.firebase.firestore.proto.WriteBatch.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.WriteBatch;
						public getBaseWrites(param0: number): com.google.firestore.v1.Write;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firebase.firestore.proto.WriteBatch;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getBatchId(): number;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.WriteBatch;
						public getWritesOrBuilderList(): java.util.List<any>;
						public getLocalWriteTime(): com.google.protobuf.Timestamp;
						public hasLocalWriteTime(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firebase.firestore.proto.WriteBatch;
						public getBaseWritesOrBuilderList(): java.util.List<any>;
						public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.WriteBatch;
						public getWritesOrBuilder(param0: number): com.google.firestore.v1.WriteOrBuilder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.WriteBatch;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firebase.firestore.proto.WriteBatch;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firebase.firestore.proto.WriteBatch;
						public getBaseWritesCount(): number;
						public static getDefaultInstance(): com.google.firebase.firestore.proto.WriteBatch;
						public static parseFrom(param0: java.io.InputStream): com.google.firebase.firestore.proto.WriteBatch;
						public getBaseWritesOrBuilder(param0: number): com.google.firestore.v1.WriteOrBuilder;
						public static newBuilder(): com.google.firebase.firestore.proto.WriteBatch.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firebase.firestore.proto.WriteBatch;
						public static parser(): com.google.protobuf.Parser<com.google.firebase.firestore.proto.WriteBatch>;
					}
					export module WriteBatch {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firebase.firestore.proto.WriteBatch,com.google.firebase.firestore.proto.WriteBatch.Builder> implements com.google.firebase.firestore.proto.WriteBatchOrBuilder  {
							public static class: java.lang.Class<com.google.firebase.firestore.proto.WriteBatch.Builder>;
							public getWritesCount(): number;
							public setLocalWriteTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
							public getWrites(param0: number): com.google.firestore.v1.Write;
							public setBaseWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public clearLocalWriteTime(): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public setWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public getBaseWritesCount(): number;
							public addBaseWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public setBaseWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public setBatchId(param0: number): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addAllBaseWrites(param0: java.lang.Iterable<any>): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addAllWrites(param0: java.lang.Iterable<any>): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public getLocalWriteTime(): com.google.protobuf.Timestamp;
							public getBaseWrites(param0: number): com.google.firestore.v1.Write;
							public setWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addWrites(param0: com.google.firestore.v1.Write.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public mergeLocalWriteTime(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addBaseWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public getBatchId(): number;
							public clearBatchId(): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addBaseWrites(param0: com.google.firestore.v1.Write.Builder): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addBaseWrites(param0: com.google.firestore.v1.Write): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addWrites(param0: com.google.firestore.v1.Write): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public removeBaseWrites(param0: number): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public addWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public hasLocalWriteTime(): boolean;
							public getBaseWritesList(): java.util.List<com.google.firestore.v1.Write>;
							public setLocalWriteTime(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public clearWrites(): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public removeWrites(param0: number): com.google.firebase.firestore.proto.WriteBatch.Builder;
							public clearBaseWrites(): com.google.firebase.firestore.proto.WriteBatch.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module proto {
					export class WriteBatchOrBuilder {
						public static class: java.lang.Class<com.google.firebase.firestore.proto.WriteBatchOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.proto.WriteBatchOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getBatchId(): number;
							getWritesList(): java.util.List<com.google.firestore.v1.Write>;
							getWrites(param0: number): com.google.firestore.v1.Write;
							getWritesCount(): number;
							hasLocalWriteTime(): boolean;
							getLocalWriteTime(): com.google.protobuf.Timestamp;
							getBaseWritesList(): java.util.List<com.google.firestore.v1.Write>;
							getBaseWrites(param0: number): com.google.firestore.v1.Write;
							getBaseWritesCount(): number;
						});
						public constructor();
						public getWritesCount(): number;
						public getWrites(param0: number): com.google.firestore.v1.Write;
						public getBaseWritesCount(): number;
						public getBaseWritesList(): java.util.List<com.google.firestore.v1.Write>;
						public getLocalWriteTime(): com.google.protobuf.Timestamp;
						public getBaseWrites(param0: number): com.google.firestore.v1.Write;
						public hasLocalWriteTime(): boolean;
						public getBatchId(): number;
						public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export abstract class AbstractStream<ReqT, RespT, CallbackT>  extends com.google.firebase.firestore.remote.Stream<any> {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.AbstractStream<any,any,any>>;
						public tearDown(): void;
						public inhibitBackoff(): void;
						public start(): void;
						public isStarted(): boolean;
						public onNext(param0: any): void;
						public isOpen(): boolean;
						public stop(): void;
						public writeRequest(param0: any): void;
					}
					export module AbstractStream {
						export class CloseGuardedRunner {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.AbstractStream.CloseGuardedRunner>;
						}
						export class IdleTimeoutRunnable {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.AbstractStream.IdleTimeoutRunnable>;
							public run(): void;
						}
						export class StreamObserver extends com.google.firebase.firestore.remote.IncomingStreamObserver<any> {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.AbstractStream.StreamObserver>;
							public onNext(param0: any): void;
							public onHeaders(param0: io.grpc.Metadata): void;
							public onOpen(): void;
							public onClose(param0: io.grpc.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class AndroidConnectivityMonitor extends com.google.firebase.firestore.remote.ConnectivityMonitor {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.AndroidConnectivityMonitor>;
						public shutdown(): void;
						public constructor(param0: globalAndroid.content.Context);
						public addCallback(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus>): void;
						public raiseForegroundNotification(): void;
					}
					export module AndroidConnectivityMonitor {
						export class DefaultNetworkCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.AndroidConnectivityMonitor.DefaultNetworkCallback>;
							public onLost(param0: globalAndroid.net.Network): void;
							public onAvailable(param0: globalAndroid.net.Network): void;
						}
						export class NetworkReceiver {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.AndroidConnectivityMonitor.NetworkReceiver>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class ConnectivityMonitor {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.ConnectivityMonitor>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.remote.ConnectivityMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addCallback(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus>): void;
							shutdown(): void;
						});
						public constructor();
						public shutdown(): void;
						public addCallback(param0: com.google.firebase.firestore.util.Consumer<com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus>): void;
					}
					export module ConnectivityMonitor {
						export class NetworkStatus {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus>;
							public static UNREACHABLE: com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus;
							public static REACHABLE: com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus;
							public static values(): androidNative.Array<com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus>;
							public static valueOf(param0: string): com.google.firebase.firestore.remote.ConnectivityMonitor.NetworkStatus;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class Datastore {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.Datastore>;
						public commit(param0: java.util.List<com.google.firebase.firestore.model.mutation.Mutation>): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.firestore.model.mutation.MutationResult>>;
						public constructor(param0: com.google.firebase.firestore.core.DatabaseInfo, param1: com.google.firebase.firestore.util.AsyncQueue, param2: com.google.firebase.firestore.auth.CredentialsProvider, param3: globalAndroid.content.Context, param4: com.google.firebase.firestore.remote.GrpcMetadataProvider);
						public static isPermanentError(param0: com.google.firebase.firestore.FirebaseFirestoreException.Code): boolean;
						public static isPermanentWriteError(param0: io.grpc.Status): boolean;
						public static isPermanentError(param0: io.grpc.Status): boolean;
						public static isMissingSslCiphers(param0: io.grpc.Status): boolean;
						public lookup(param0: java.util.List<com.google.firebase.firestore.model.DocumentKey>): com.google.android.gms.tasks.Task<java.util.List<com.google.firebase.firestore.model.MutableDocument>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class ExistenceFilter {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.ExistenceFilter>;
						public constructor(param0: number);
						public getCount(): number;
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
			export module firestore {
				export module remote {
					export class FirebaseClientGrpcMetadataProvider extends com.google.firebase.firestore.remote.GrpcMetadataProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.FirebaseClientGrpcMetadataProvider>;
						public updateMetadata(param0: io.grpc.Metadata): void;
						public constructor(param0: com.google.firebase.inject.Provider<com.google.firebase.platforminfo.UserAgentPublisher>, param1: com.google.firebase.inject.Provider<com.google.firebase.heartbeatinfo.HeartBeatInfo>, param2: com.google.firebase.FirebaseOptions);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class FirestoreCallCredentials {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.FirestoreCallCredentials>;
						public applyRequestMetadata(param0: io.grpc.CallCredentials.RequestInfo, param1: java.util.concurrent.Executor, param2: io.grpc.CallCredentials.MetadataApplier): void;
						public thisUsesUnstableApi(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class FirestoreChannel {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.FirestoreChannel>;
						public shutdown(): void;
						public invalidateToken(): void;
						public static setClientLanguage(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class GrpcCallProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.GrpcCallProvider>;
						public static overrideChannelBuilder(param0: com.google.firebase.firestore.util.Supplier<io.grpc.ManagedChannelBuilder<any>>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class GrpcMetadataProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.GrpcMetadataProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.remote.GrpcMetadataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							updateMetadata(param0: io.grpc.Metadata): void;
						});
						public constructor();
						public updateMetadata(param0: io.grpc.Metadata): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class IncomingStreamObserver<RespT>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.IncomingStreamObserver<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.remote.IncomingStreamObserver<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onHeaders(param0: io.grpc.Metadata): void;
							onNext(param0: RespT): void;
							onOpen(): void;
							onClose(param0: io.grpc.Status): void;
						});
						public constructor();
						public onNext(param0: RespT): void;
						public onOpen(): void;
						public onClose(param0: io.grpc.Status): void;
						public onHeaders(param0: io.grpc.Metadata): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class OnlineStateTracker {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.OnlineStateTracker>;
					}
					export module OnlineStateTracker {
						export class OnlineStateCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.OnlineStateTracker.OnlineStateCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.remote.OnlineStateTracker$OnlineStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
							});
							public constructor();
							public handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class RemoteEvent {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.RemoteEvent>;
						public getResolvedLimboDocuments(): java.util.Set<com.google.firebase.firestore.model.DocumentKey>;
						public getTargetChanges(): java.util.Map<java.lang.Integer,com.google.firebase.firestore.remote.TargetChange>;
						public constructor(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: java.util.Map<java.lang.Integer,com.google.firebase.firestore.remote.TargetChange>, param2: java.util.Set<java.lang.Integer>, param3: java.util.Map<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>, param4: java.util.Set<com.google.firebase.firestore.model.DocumentKey>);
						public getSnapshotVersion(): com.google.firebase.firestore.model.SnapshotVersion;
						public getDocumentUpdates(): java.util.Map<com.google.firebase.firestore.model.DocumentKey,com.google.firebase.firestore.model.MutableDocument>;
						public getTargetMismatches(): java.util.Set<java.lang.Integer>;
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
			export module firestore {
				export module remote {
					export class RemoteSerializer {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.RemoteSerializer>;
						public encodeVersion(param0: com.google.firebase.firestore.model.SnapshotVersion): com.google.protobuf.Timestamp;
						public decodeDocumentsTarget(param0: com.google.firestore.v1.Target.DocumentsTarget): com.google.firebase.firestore.core.Target;
						public decodeWatchChange(param0: com.google.firestore.v1.ListenResponse): com.google.firebase.firestore.remote.WatchChange;
						public decodeQueryTarget(param0: com.google.firestore.v1.Target.QueryTarget): com.google.firebase.firestore.core.Target;
						public decodeMaybeDocument(param0: com.google.firestore.v1.BatchGetDocumentsResponse): com.google.firebase.firestore.model.MutableDocument;
						public encodeMutation(param0: com.google.firebase.firestore.model.mutation.Mutation): com.google.firestore.v1.Write;
						public constructor(param0: com.google.firebase.firestore.model.DatabaseId);
						public encodeTimestamp(param0: com.google.firebase.Timestamp): com.google.protobuf.Timestamp;
						public encodeTarget(param0: com.google.firebase.firestore.local.TargetData): com.google.firestore.v1.Target;
						public decodeKey(param0: string): com.google.firebase.firestore.model.DocumentKey;
						public encodeDocument(param0: com.google.firebase.firestore.model.DocumentKey, param1: com.google.firebase.firestore.model.ObjectValue): com.google.firestore.v1.Document;
						public decodeMutation(param0: com.google.firestore.v1.Write): com.google.firebase.firestore.model.mutation.Mutation;
						public encodeDocumentsTarget(param0: com.google.firebase.firestore.core.Target): com.google.firestore.v1.Target.DocumentsTarget;
						public encodeQueryTarget(param0: com.google.firebase.firestore.core.Target): com.google.firestore.v1.Target.QueryTarget;
						public decodeVersion(param0: com.google.protobuf.Timestamp): com.google.firebase.firestore.model.SnapshotVersion;
						public decodeVersionFromListenResponse(param0: com.google.firestore.v1.ListenResponse): com.google.firebase.firestore.model.SnapshotVersion;
						public decodeTimestamp(param0: com.google.protobuf.Timestamp): com.google.firebase.Timestamp;
						public isLocalResourceName(param0: com.google.firebase.firestore.model.ResourcePath): boolean;
						public decodeQueryTarget(param0: string, param1: com.google.firestore.v1.StructuredQuery): com.google.firebase.firestore.core.Target;
						public encodeKey(param0: com.google.firebase.firestore.model.DocumentKey): string;
						public decodeMutationResult(param0: com.google.firestore.v1.WriteResult, param1: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.model.mutation.MutationResult;
						public databaseName(): string;
						public encodeListenRequestLabels(param0: com.google.firebase.firestore.local.TargetData): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class RemoteStore extends com.google.firebase.firestore.remote.WatchChangeAggregator.TargetMetadataProvider {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.RemoteStore>;
						public fillWritePipeline(): void;
						public stopListening(param0: number): void;
						public handleCredentialChange(): void;
						public enableNetwork(): void;
						public createTransaction(): com.google.firebase.firestore.core.Transaction;
						public shutdown(): void;
						public constructor(param0: com.google.firebase.firestore.remote.RemoteStore.RemoteStoreCallback, param1: com.google.firebase.firestore.local.LocalStore, param2: com.google.firebase.firestore.remote.Datastore, param3: com.google.firebase.firestore.util.AsyncQueue, param4: com.google.firebase.firestore.remote.ConnectivityMonitor);
						public start(): void;
						public getTargetDataForTarget(param0: number): com.google.firebase.firestore.local.TargetData;
						public disableNetwork(): void;
						public listen(param0: com.google.firebase.firestore.local.TargetData): void;
						public canUseNetwork(): boolean;
						public getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
					}
					export module RemoteStore {
						export class RemoteStoreCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.RemoteStore.RemoteStoreCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.remote.RemoteStore$RemoteStoreCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								handleRemoteEvent(param0: com.google.firebase.firestore.remote.RemoteEvent): void;
								handleRejectedListen(param0: number, param1: io.grpc.Status): void;
								handleSuccessfulWrite(param0: com.google.firebase.firestore.model.mutation.MutationBatchResult): void;
								handleRejectedWrite(param0: number, param1: io.grpc.Status): void;
								handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
								getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
							});
							public constructor();
							public getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
							public handleRemoteEvent(param0: com.google.firebase.firestore.remote.RemoteEvent): void;
							public handleSuccessfulWrite(param0: com.google.firebase.firestore.model.mutation.MutationBatchResult): void;
							public handleRejectedWrite(param0: number, param1: io.grpc.Status): void;
							public handleOnlineStateChange(param0: com.google.firebase.firestore.core.OnlineState): void;
							public handleRejectedListen(param0: number, param1: io.grpc.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class Stream<CallbackType>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.Stream<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.remote.Stream<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isStarted(): boolean;
							isOpen(): boolean;
							start(): void;
							stop(): void;
							inhibitBackoff(): void;
						});
						public constructor();
						public inhibitBackoff(): void;
						public start(): void;
						public isStarted(): boolean;
						public isOpen(): boolean;
						public stop(): void;
					}
					export module Stream {
						export class State {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.Stream.State>;
							public static Initial: com.google.firebase.firestore.remote.Stream.State;
							public static Starting: com.google.firebase.firestore.remote.Stream.State;
							public static Open: com.google.firebase.firestore.remote.Stream.State;
							public static Error: com.google.firebase.firestore.remote.Stream.State;
							public static Backoff: com.google.firebase.firestore.remote.Stream.State;
							public static valueOf(param0: string): com.google.firebase.firestore.remote.Stream.State;
							public static values(): androidNative.Array<com.google.firebase.firestore.remote.Stream.State>;
						}
						export class StreamCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.Stream.StreamCallback>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.remote.Stream$StreamCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOpen(): void;
								onClose(param0: io.grpc.Status): void;
							});
							public constructor();
							public onOpen(): void;
							public onClose(param0: io.grpc.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class TargetChange {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.TargetChange>;
						public getResumeToken(): com.google.protobuf.ByteString;
						public isCurrent(): boolean;
						public constructor(param0: com.google.protobuf.ByteString, param1: boolean, param2: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param3: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>, param4: com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>);
						public getAddedDocuments(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRemovedDocuments(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
						public static createSynthesizedTargetChangeForCurrentChange(param0: boolean): com.google.firebase.firestore.remote.TargetChange;
						public getModifiedDocuments(): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class TargetState {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.TargetState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export abstract class WatchChange {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChange>;
					}
					export module WatchChange {
						export class DocumentChange extends com.google.firebase.firestore.remote.WatchChange {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChange.DocumentChange>;
							public getDocumentKey(): com.google.firebase.firestore.model.DocumentKey;
							public getRemovedTargetIds(): java.util.List<java.lang.Integer>;
							public constructor(param0: java.util.List<java.lang.Integer>, param1: java.util.List<java.lang.Integer>, param2: com.google.firebase.firestore.model.DocumentKey, param3: com.google.firebase.firestore.model.MutableDocument);
							public hashCode(): number;
							public getNewDocument(): com.google.firebase.firestore.model.MutableDocument;
							public toString(): string;
							public equals(param0: any): boolean;
							public getUpdatedTargetIds(): java.util.List<java.lang.Integer>;
						}
						export class ExistenceFilterWatchChange extends com.google.firebase.firestore.remote.WatchChange {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChange.ExistenceFilterWatchChange>;
							public getExistenceFilter(): com.google.firebase.firestore.remote.ExistenceFilter;
							public toString(): string;
							public constructor(param0: number, param1: com.google.firebase.firestore.remote.ExistenceFilter);
							public getTargetId(): number;
						}
						export class WatchTargetChange extends com.google.firebase.firestore.remote.WatchChange {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChange.WatchTargetChange>;
							public getTargetIds(): java.util.List<java.lang.Integer>;
							public getResumeToken(): com.google.protobuf.ByteString;
							public getChangeType(): com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
							public hashCode(): number;
							public getCause(): io.grpc.Status;
							public constructor(param0: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType, param1: java.util.List<java.lang.Integer>);
							public toString(): string;
							public constructor(param0: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType, param1: java.util.List<java.lang.Integer>, param2: com.google.protobuf.ByteString);
							public equals(param0: any): boolean;
							public constructor(param0: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType, param1: java.util.List<java.lang.Integer>, param2: com.google.protobuf.ByteString, param3: io.grpc.Status);
						}
						export class WatchTargetChangeType {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType>;
							public static NoChange: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
							public static Added: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
							public static Removed: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
							public static Current: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
							public static Reset: com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
							public static values(): androidNative.Array<com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType>;
							public static valueOf(param0: string): com.google.firebase.firestore.remote.WatchChange.WatchTargetChangeType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class WatchChangeAggregator {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChangeAggregator>;
						public constructor(param0: com.google.firebase.firestore.remote.WatchChangeAggregator.TargetMetadataProvider);
						public handleDocumentChange(param0: com.google.firebase.firestore.remote.WatchChange.DocumentChange): void;
						public createRemoteEvent(param0: com.google.firebase.firestore.model.SnapshotVersion): com.google.firebase.firestore.remote.RemoteEvent;
						public handleTargetChange(param0: com.google.firebase.firestore.remote.WatchChange.WatchTargetChange): void;
						public handleExistenceFilter(param0: com.google.firebase.firestore.remote.WatchChange.ExistenceFilterWatchChange): void;
					}
					export module WatchChangeAggregator {
						export class TargetMetadataProvider {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchChangeAggregator.TargetMetadataProvider>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.remote.WatchChangeAggregator$TargetMetadataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
								getTargetDataForTarget(param0: number): com.google.firebase.firestore.local.TargetData;
							});
							public constructor();
							public getRemoteKeysForTarget(param0: number): com.google.firebase.database.collection.ImmutableSortedSet<com.google.firebase.firestore.model.DocumentKey>;
							public getTargetDataForTarget(param0: number): com.google.firebase.firestore.local.TargetData;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class WatchStream extends com.google.firebase.firestore.remote.AbstractStream<com.google.firestore.v1.ListenRequest,com.google.firestore.v1.ListenResponse,com.google.firebase.firestore.remote.WatchStream.Callback> {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchStream>;
						public static EMPTY_RESUME_TOKEN: com.google.protobuf.ByteString;
						public inhibitBackoff(): void;
						public start(): void;
						public isStarted(): boolean;
						public onNext(param0: any): void;
						public isOpen(): boolean;
						public stop(): void;
						public watchQuery(param0: com.google.firebase.firestore.local.TargetData): void;
						public unwatchTarget(param0: number): void;
						public onNext(param0: com.google.firestore.v1.ListenResponse): void;
					}
					export module WatchStream {
						export class Callback extends com.google.firebase.firestore.remote.Stream.StreamCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WatchStream.Callback>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.remote.WatchStream$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onWatchChange(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: com.google.firebase.firestore.remote.WatchChange): void;
								onOpen(): void;
								onClose(param0: io.grpc.Status): void;
							});
							public constructor();
							public onOpen(): void;
							public onClose(param0: io.grpc.Status): void;
							public onWatchChange(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: com.google.firebase.firestore.remote.WatchChange): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module remote {
					export class WriteStream extends com.google.firebase.firestore.remote.AbstractStream<com.google.firestore.v1.WriteRequest,com.google.firestore.v1.WriteResponse,com.google.firebase.firestore.remote.WriteStream.Callback> {
						public static class: java.lang.Class<com.google.firebase.firestore.remote.WriteStream>;
						public static EMPTY_STREAM_TOKEN: com.google.protobuf.ByteString;
						public handshakeComplete: boolean;
						public tearDown(): void;
						public inhibitBackoff(): void;
						public start(): void;
						public isStarted(): boolean;
						public onNext(param0: any): void;
						public onNext(param0: com.google.firestore.v1.WriteResponse): void;
						public isOpen(): boolean;
						public stop(): void;
					}
					export module WriteStream {
						export class Callback extends com.google.firebase.firestore.remote.Stream.StreamCallback {
							public static class: java.lang.Class<com.google.firebase.firestore.remote.WriteStream.Callback>;
							/**
							 * Constructs a new instance of the com.google.firebase.firestore.remote.WriteStream$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onHandshakeComplete(): void;
								onWriteResponse(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: java.util.List<com.google.firebase.firestore.model.mutation.MutationResult>): void;
								onOpen(): void;
								onClose(param0: io.grpc.Status): void;
							});
							public constructor();
							public onOpen(): void;
							public onHandshakeComplete(): void;
							public onClose(param0: io.grpc.Status): void;
							public onWriteResponse(param0: com.google.firebase.firestore.model.SnapshotVersion, param1: java.util.List<com.google.firebase.firestore.model.mutation.MutationResult>): void;
						}
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class ApiUtil {
						public static class: java.lang.Class<com.google.firebase.firestore.util.ApiUtil>;
						public constructor();
						public static newAssertionError(param0: string, param1: java.lang.Throwable): java.lang.AssertionError;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Assert {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Assert>;
						public static hardAssert(param0: boolean, param1: string, param2: androidNative.Array<any>): void;
						public constructor();
						public static fail(param0: string, param1: androidNative.Array<any>): java.lang.AssertionError;
						public static fail(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): java.lang.AssertionError;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class AsyncQueue {
						public static class: java.lang.Class<com.google.firebase.firestore.util.AsyncQueue>;
						public enqueueAndForgetEvenAfterShutdown(param0: java.lang.Runnable): void;
						public verifyIsCurrentThread(): void;
						public constructor();
						public static callTask(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable): com.google.android.gms.tasks.Task;
						public enqueueAndForget(param0: java.lang.Runnable): void;
						public enqueue(param0: java.lang.Runnable): com.google.android.gms.tasks.Task<java.lang.Void>;
						public getExecutor(): java.util.concurrent.Executor;
						public containsDelayedTask(param0: com.google.firebase.firestore.util.AsyncQueue.TimerId): boolean;
						public runDelayedTasksUntil(param0: com.google.firebase.firestore.util.AsyncQueue.TimerId): void;
						public panic(param0: java.lang.Throwable): void;
						public skipDelaysForTimerId(param0: com.google.firebase.firestore.util.AsyncQueue.TimerId): void;
						public shutdown(): void;
						public enqueueAfterDelay(param0: com.google.firebase.firestore.util.AsyncQueue.TimerId, param1: number, param2: java.lang.Runnable): com.google.firebase.firestore.util.AsyncQueue.DelayedTask;
						public enqueueAndInitiateShutdown(param0: java.lang.Runnable): com.google.android.gms.tasks.Task<java.lang.Void>;
						public enqueue(param0: java.util.concurrent.Callable): com.google.android.gms.tasks.Task;
						public isShuttingDown(): boolean;
						public runSync(param0: java.lang.Runnable): void;
					}
					export module AsyncQueue {
						export class DelayedTask {
							public static class: java.lang.Class<com.google.firebase.firestore.util.AsyncQueue.DelayedTask>;
							public cancel(): void;
						}
						export class SynchronizedShutdownAwareExecutor {
							public static class: java.lang.Class<com.google.firebase.firestore.util.AsyncQueue.SynchronizedShutdownAwareExecutor>;
							public execute(param0: java.lang.Runnable): void;
							public executeEvenAfterShutdown(param0: java.lang.Runnable): void;
						}
						export module SynchronizedShutdownAwareExecutor {
							export class DelayedStartFactory {
								public static class: java.lang.Class<com.google.firebase.firestore.util.AsyncQueue.SynchronizedShutdownAwareExecutor.DelayedStartFactory>;
								public run(): void;
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
						}
						export class TimerId {
							public static class: java.lang.Class<com.google.firebase.firestore.util.AsyncQueue.TimerId>;
							public static ALL: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static LISTEN_STREAM_IDLE: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static LISTEN_STREAM_CONNECTION_BACKOFF: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static WRITE_STREAM_IDLE: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static WRITE_STREAM_CONNECTION_BACKOFF: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static ONLINE_STATE_TIMEOUT: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static GARBAGE_COLLECTION: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static RETRY_TRANSACTION: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static CONNECTIVITY_ATTEMPT_TIMER: com.google.firebase.firestore.util.AsyncQueue.TimerId;
							public static values(): androidNative.Array<com.google.firebase.firestore.util.AsyncQueue.TimerId>;
							public static valueOf(param0: string): com.google.firebase.firestore.util.AsyncQueue.TimerId;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class BackgroundQueue {
						public static class: java.lang.Class<com.google.firebase.firestore.util.BackgroundQueue>;
						public constructor();
						public execute(param0: java.lang.Runnable): void;
						public drain(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class ByteBufferInputStream {
						public static class: java.lang.Class<com.google.firebase.firestore.util.ByteBufferInputStream>;
						public read(): number;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public constructor(param0: java.nio.ByteBuffer);
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
			export module firestore {
				export module util {
					export class Consumer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Consumer<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.util.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: T): void;
						});
						public constructor();
						public accept(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class CustomClassMapper {
						public static class: java.lang.Class<com.google.firebase.firestore.util.CustomClassMapper>;
						public constructor();
						public static convertToCustomClass(param0: any, param1: java.lang.Class, param2: com.google.firebase.firestore.DocumentReference): any;
						public static convertToPlainJavaTypes(param0: any): any;
						public static convertToPlainJavaTypes(param0: java.util.Map<any,any>): java.util.Map<string,any>;
					}
					export module CustomClassMapper {
						export class BeanMapper<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.firebase.firestore.util.CustomClassMapper.BeanMapper<any>>;
						}
						export class DeserializeContext {
							public static class: java.lang.Class<com.google.firebase.firestore.util.CustomClassMapper.DeserializeContext>;
						}
						export class ErrorPath {
							public static class: java.lang.Class<com.google.firebase.firestore.util.CustomClassMapper.ErrorPath>;
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
			export module firestore {
				export module util {
					export class Executors {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Executors>;
						public static DEFAULT_CALLBACK_EXECUTOR: java.util.concurrent.Executor;
						public static DIRECT_EXECUTOR: java.util.concurrent.Executor;
						public static BACKGROUND_EXECUTOR: java.util.concurrent.Executor;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class ExponentialBackoff {
						public static class: java.lang.Class<com.google.firebase.firestore.util.ExponentialBackoff>;
						public static DEFAULT_BACKOFF_INITIAL_DELAY_MS: number;
						public static DEFAULT_BACKOFF_FACTOR: number;
						public static DEFAULT_BACKOFF_MAX_DELAY_MS: number;
						public setTemporaryMaxDelay(param0: number): void;
						public cancel(): void;
						public constructor(param0: com.google.firebase.firestore.util.AsyncQueue, param1: com.google.firebase.firestore.util.AsyncQueue.TimerId);
						public constructor(param0: com.google.firebase.firestore.util.AsyncQueue, param1: com.google.firebase.firestore.util.AsyncQueue.TimerId, param2: number, param3: number, param4: number);
						public resetToMax(): void;
						public backoffAndRun(param0: java.lang.Runnable): void;
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
			export module firestore {
				export module util {
					export class FileUtil {
						public static class: java.lang.Class<com.google.firebase.firestore.util.FileUtil>;
						public constructor();
						public static delete(param0: java.io.File): void;
					}
					export module FileUtil {
						export class DefaultFileDeleter {
							public static class: java.lang.Class<com.google.firebase.firestore.util.FileUtil.DefaultFileDeleter>;
							public static delete(param0: java.io.File): void;
						}
						export class LegacyFileDeleter {
							public static class: java.lang.Class<com.google.firebase.firestore.util.FileUtil.LegacyFileDeleter>;
							public static delete(param0: java.io.File): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Function<F, T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Function<any,any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.util.Function<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: F): T;
							equals(param0: any): boolean;
						});
						public constructor();
						public apply(param0: F): T;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Listener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Listener<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.util.Listener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onValue(param0: T): void;
						});
						public constructor();
						public onValue(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Logger {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Logger>;
						public constructor();
						public static setLogLevel(param0: com.google.firebase.firestore.util.Logger.Level): void;
						public static isDebugEnabled(): boolean;
						public static debug(param0: string, param1: string, param2: androidNative.Array<any>): void;
						public static warn(param0: string, param1: string, param2: androidNative.Array<any>): void;
					}
					export module Logger {
						export class Level {
							public static class: java.lang.Class<com.google.firebase.firestore.util.Logger.Level>;
							public static DEBUG: com.google.firebase.firestore.util.Logger.Level;
							public static WARN: com.google.firebase.firestore.util.Logger.Level;
							public static NONE: com.google.firebase.firestore.util.Logger.Level;
							public static valueOf(param0: string): com.google.firebase.firestore.util.Logger.Level;
							public static values(): androidNative.Array<com.google.firebase.firestore.util.Logger.Level>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Preconditions {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Preconditions>;
						public constructor();
						public static checkNotNull(param0: any): any;
						public static checkArgument(param0: boolean, param1: string, param2: androidNative.Array<any>): void;
						public static checkNotNull(param0: any, param1: any): any;
						public static checkState(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Supplier<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Supplier<any>>;
						/**
						 * Constructs a new instance of the com.google.firebase.firestore.util.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
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
			export module firestore {
				export module util {
					export class ThrottledForwardingExecutor {
						public static class: java.lang.Class<com.google.firebase.firestore.util.ThrottledForwardingExecutor>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module firestore {
				export module util {
					export class Util {
						public static class: java.lang.Class<com.google.firebase.firestore.util.Util>;
						public static compareIntegers(param0: number, param1: number): number;
						public constructor();
						public static crashMainThread(param0: java.lang.RuntimeException): void;
						public static compareByteStrings(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ByteString): number;
						public static collectUpdateArguments(param0: number, param1: any, param2: any, param3: androidNative.Array<any>): java.util.List<any>;
						public static convertThrowableToException(param0: java.lang.Throwable): java.lang.Exception;
						public static voidErrorTransformer(): com.google.android.gms.tasks.Continuation<java.lang.Void,java.lang.Void>;
						public static comparator(): java.util.Comparator;
						public static exceptionFromStatus(param0: io.grpc.Status): com.google.firebase.firestore.FirebaseFirestoreException;
						public static compareMixed(param0: number, param1: number): number;
						public static compareLongs(param0: number, param1: number): number;
						public static compareDoubles(param0: number, param1: number): number;
						public static toDebugString(param0: com.google.protobuf.ByteString): string;
						public static autoId(): string;
						public static compareBooleans(param0: boolean, param1: boolean): number;
						public static typeName(param0: any): string;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundleElement extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.bundle.BundleElement,com.google.firestore.bundle.BundleElement.Builder> implements com.google.firestore.bundle.BundleElementOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.bundle.BundleElement>;
					public static METADATA_FIELD_NUMBER: number;
					public static NAMED_QUERY_FIELD_NUMBER: number;
					public static DOCUMENT_METADATA_FIELD_NUMBER: number;
					public static DOCUMENT_FIELD_NUMBER: number;
					public getElementTypeCase(): com.google.firestore.bundle.BundleElement.ElementTypeCase;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleElement;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundleElement;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundleElement;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleElement;
					public static newBuilder(): com.google.firestore.bundle.BundleElement.Builder;
					public static getDefaultInstance(): com.google.firestore.bundle.BundleElement;
					public hasDocument(): boolean;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.bundle.BundleElement;
					public getNamedQuery(): com.google.firestore.bundle.NamedQuery;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleElement;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getDocument(): com.google.firestore.v1.Document;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleElement;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.bundle.BundleElement;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundleElement;
					public getDocumentMetadata(): com.google.firestore.bundle.BundledDocumentMetadata;
					public hasDocumentMetadata(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleElement;
					public static newBuilder(param0: com.google.firestore.bundle.BundleElement): com.google.firestore.bundle.BundleElement.Builder;
					public getMetadata(): com.google.firestore.bundle.BundleMetadata;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleElement;
					public hasNamedQuery(): boolean;
					public hasMetadata(): boolean;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.bundle.BundleElement;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.bundle.BundleElement>;
				}
				export module BundleElement {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.bundle.BundleElement,com.google.firestore.bundle.BundleElement.Builder> implements com.google.firestore.bundle.BundleElementOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.bundle.BundleElement.Builder>;
						public setNamedQuery(param0: com.google.firestore.bundle.NamedQuery.Builder): com.google.firestore.bundle.BundleElement.Builder;
						public setMetadata(param0: com.google.firestore.bundle.BundleMetadata): com.google.firestore.bundle.BundleElement.Builder;
						public hasMetadata(): boolean;
						public mergeNamedQuery(param0: com.google.firestore.bundle.NamedQuery): com.google.firestore.bundle.BundleElement.Builder;
						public getElementTypeCase(): com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public getMetadata(): com.google.firestore.bundle.BundleMetadata;
						public hasDocumentMetadata(): boolean;
						public clearDocument(): com.google.firestore.bundle.BundleElement.Builder;
						public setMetadata(param0: com.google.firestore.bundle.BundleMetadata.Builder): com.google.firestore.bundle.BundleElement.Builder;
						public mergeMetadata(param0: com.google.firestore.bundle.BundleMetadata): com.google.firestore.bundle.BundleElement.Builder;
						public setNamedQuery(param0: com.google.firestore.bundle.NamedQuery): com.google.firestore.bundle.BundleElement.Builder;
						public clearDocumentMetadata(): com.google.firestore.bundle.BundleElement.Builder;
						public hasDocument(): boolean;
						public getDocument(): com.google.firestore.v1.Document;
						public hasNamedQuery(): boolean;
						public mergeDocument(param0: com.google.firestore.v1.Document): com.google.firestore.bundle.BundleElement.Builder;
						public getNamedQuery(): com.google.firestore.bundle.NamedQuery;
						public clearNamedQuery(): com.google.firestore.bundle.BundleElement.Builder;
						public mergeDocumentMetadata(param0: com.google.firestore.bundle.BundledDocumentMetadata): com.google.firestore.bundle.BundleElement.Builder;
						public clearElementType(): com.google.firestore.bundle.BundleElement.Builder;
						public setDocumentMetadata(param0: com.google.firestore.bundle.BundledDocumentMetadata): com.google.firestore.bundle.BundleElement.Builder;
						public setDocument(param0: com.google.firestore.v1.Document): com.google.firestore.bundle.BundleElement.Builder;
						public getDocumentMetadata(): com.google.firestore.bundle.BundledDocumentMetadata;
						public setDocumentMetadata(param0: com.google.firestore.bundle.BundledDocumentMetadata.Builder): com.google.firestore.bundle.BundleElement.Builder;
						public setDocument(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.bundle.BundleElement.Builder;
						public clearMetadata(): com.google.firestore.bundle.BundleElement.Builder;
					}
					export class ElementTypeCase {
						public static class: java.lang.Class<com.google.firestore.bundle.BundleElement.ElementTypeCase>;
						public static METADATA: com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static NAMED_QUERY: com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static DOCUMENT_METADATA: com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static DOCUMENT: com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static ELEMENTTYPE_NOT_SET: com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static valueOf(param0: string): com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static forNumber(param0: number): com.google.firestore.bundle.BundleElement.ElementTypeCase;
						public static values(): androidNative.Array<com.google.firestore.bundle.BundleElement.ElementTypeCase>;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.bundle.BundleElement.ElementTypeCase;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundleElementOrBuilder {
					public static class: java.lang.Class<com.google.firestore.bundle.BundleElementOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.bundle.BundleElementOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasMetadata(): boolean;
						getMetadata(): com.google.firestore.bundle.BundleMetadata;
						hasNamedQuery(): boolean;
						getNamedQuery(): com.google.firestore.bundle.NamedQuery;
						hasDocumentMetadata(): boolean;
						getDocumentMetadata(): com.google.firestore.bundle.BundledDocumentMetadata;
						hasDocument(): boolean;
						getDocument(): com.google.firestore.v1.Document;
						getElementTypeCase(): com.google.firestore.bundle.BundleElement.ElementTypeCase;
					});
					public constructor();
					public hasDocumentMetadata(): boolean;
					public getMetadata(): com.google.firestore.bundle.BundleMetadata;
					public getElementTypeCase(): com.google.firestore.bundle.BundleElement.ElementTypeCase;
					public hasNamedQuery(): boolean;
					public getNamedQuery(): com.google.firestore.bundle.NamedQuery;
					public getDocument(): com.google.firestore.v1.Document;
					public hasDocument(): boolean;
					public hasMetadata(): boolean;
					public getDocumentMetadata(): com.google.firestore.bundle.BundledDocumentMetadata;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundleMetadata extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.bundle.BundleMetadata,com.google.firestore.bundle.BundleMetadata.Builder> implements com.google.firestore.bundle.BundleMetadataOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.bundle.BundleMetadata>;
					public static ID_FIELD_NUMBER: number;
					public static CREATE_TIME_FIELD_NUMBER: number;
					public static VERSION_FIELD_NUMBER: number;
					public static TOTAL_DOCUMENTS_FIELD_NUMBER: number;
					public static TOTAL_BYTES_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleMetadata;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleMetadata;
					public getId(): string;
					public getIdBytes(): com.google.protobuf.ByteString;
					public getCreateTime(): com.google.protobuf.Timestamp;
					public getVersion(): number;
					public static getDefaultInstance(): com.google.firestore.bundle.BundleMetadata;
					public getTotalBytes(): number;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundleMetadata;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleMetadata;
					public hasCreateTime(): boolean;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleMetadata;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.bundle.BundleMetadata;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.bundle.BundleMetadata;
					public getTotalDocuments(): number;
					public static newBuilder(): com.google.firestore.bundle.BundleMetadata.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundleMetadata;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.bundle.BundleMetadata;
					public static newBuilder(param0: com.google.firestore.bundle.BundleMetadata): com.google.firestore.bundle.BundleMetadata.Builder;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.bundle.BundleMetadata>;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundleMetadata;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleMetadata;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundleMetadata;
				}
				export module BundleMetadata {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.bundle.BundleMetadata,com.google.firestore.bundle.BundleMetadata.Builder> implements com.google.firestore.bundle.BundleMetadataOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.bundle.BundleMetadata.Builder>;
						public setCreateTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.bundle.BundleMetadata.Builder;
						public getTotalBytes(): number;
						public clearVersion(): com.google.firestore.bundle.BundleMetadata.Builder;
						public getTotalDocuments(): number;
						public getVersion(): number;
						public setTotalBytes(param0: number): com.google.firestore.bundle.BundleMetadata.Builder;
						public setId(param0: string): com.google.firestore.bundle.BundleMetadata.Builder;
						public clearCreateTime(): com.google.firestore.bundle.BundleMetadata.Builder;
						public clearTotalBytes(): com.google.firestore.bundle.BundleMetadata.Builder;
						public hasCreateTime(): boolean;
						public mergeCreateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.bundle.BundleMetadata.Builder;
						public getCreateTime(): com.google.protobuf.Timestamp;
						public setCreateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.bundle.BundleMetadata.Builder;
						public setIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundleMetadata.Builder;
						public clearId(): com.google.firestore.bundle.BundleMetadata.Builder;
						public setTotalDocuments(param0: number): com.google.firestore.bundle.BundleMetadata.Builder;
						public setVersion(param0: number): com.google.firestore.bundle.BundleMetadata.Builder;
						public getId(): string;
						public getIdBytes(): com.google.protobuf.ByteString;
						public clearTotalDocuments(): com.google.firestore.bundle.BundleMetadata.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundleMetadataOrBuilder {
					public static class: java.lang.Class<com.google.firestore.bundle.BundleMetadataOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.bundle.BundleMetadataOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
						getIdBytes(): com.google.protobuf.ByteString;
						hasCreateTime(): boolean;
						getCreateTime(): com.google.protobuf.Timestamp;
						getVersion(): number;
						getTotalDocuments(): number;
						getTotalBytes(): number;
					});
					public constructor();
					public getTotalDocuments(): number;
					public getId(): string;
					public getIdBytes(): com.google.protobuf.ByteString;
					public getCreateTime(): com.google.protobuf.Timestamp;
					public getVersion(): number;
					public getTotalBytes(): number;
					public hasCreateTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundleProto {
					public static class: java.lang.Class<com.google.firestore.bundle.BundleProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundledDocumentMetadata extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.bundle.BundledDocumentMetadata,com.google.firestore.bundle.BundledDocumentMetadata.Builder> implements com.google.firestore.bundle.BundledDocumentMetadataOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.bundle.BundledDocumentMetadata>;
					public static NAME_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static EXISTS_FIELD_NUMBER: number;
					public static QUERIES_FIELD_NUMBER: number;
					public getQueriesBytes(param0: number): com.google.protobuf.ByteString;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.bundle.BundledDocumentMetadata>;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledDocumentMetadata;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledDocumentMetadata;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledDocumentMetadata;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.bundle.BundledDocumentMetadata;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.bundle.BundledDocumentMetadata;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasReadTime(): boolean;
					public getQueriesList(): java.util.List<string>;
					public static newBuilder(): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundledDocumentMetadata;
					public getQueriesCount(): number;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundledDocumentMetadata;
					public getNameBytes(): com.google.protobuf.ByteString;
					public static getDefaultInstance(): com.google.firestore.bundle.BundledDocumentMetadata;
					public static newBuilder(param0: com.google.firestore.bundle.BundledDocumentMetadata): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledDocumentMetadata;
					public getQueries(param0: number): string;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledDocumentMetadata;
					public getName(): string;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledDocumentMetadata;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.bundle.BundledDocumentMetadata;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundledDocumentMetadata;
					public getExists(): boolean;
					public getReadTime(): com.google.protobuf.Timestamp;
				}
				export module BundledDocumentMetadata {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.bundle.BundledDocumentMetadata,com.google.firestore.bundle.BundledDocumentMetadata.Builder> implements com.google.firestore.bundle.BundledDocumentMetadataOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.bundle.BundledDocumentMetadata.Builder>;
						public getQueriesList(): java.util.List<string>;
						public clearQueries(): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public clearReadTime(): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public getQueriesBytes(param0: number): com.google.protobuf.ByteString;
						public setExists(param0: boolean): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public addQueries(param0: string): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public getName(): string;
						public getQueries(param0: number): string;
						public clearExists(): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public addQueriesBytes(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public clearName(): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public hasReadTime(): boolean;
						public addAllQueries(param0: java.lang.Iterable<string>): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public setName(param0: string): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public getExists(): boolean;
						public setQueries(param0: number, param1: string): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
						public getQueriesCount(): number;
						public getNameBytes(): com.google.protobuf.ByteString;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.bundle.BundledDocumentMetadata.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundledDocumentMetadataOrBuilder {
					public static class: java.lang.Class<com.google.firestore.bundle.BundledDocumentMetadataOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.bundle.BundledDocumentMetadataOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						getNameBytes(): com.google.protobuf.ByteString;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getExists(): boolean;
						getQueriesList(): java.util.List<string>;
						getQueriesCount(): number;
						getQueries(param0: number): string;
						getQueriesBytes(param0: number): com.google.protobuf.ByteString;
					});
					public constructor();
					public getQueriesBytes(param0: number): com.google.protobuf.ByteString;
					public getQueriesList(): java.util.List<string>;
					public getQueries(param0: number): string;
					public getName(): string;
					public getQueriesCount(): number;
					public getNameBytes(): com.google.protobuf.ByteString;
					public getExists(): boolean;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundledQuery extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.bundle.BundledQuery,com.google.firestore.bundle.BundledQuery.Builder> implements com.google.firestore.bundle.BundledQueryOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.bundle.BundledQuery>;
					public static PARENT_FIELD_NUMBER: number;
					public static STRUCTURED_QUERY_FIELD_NUMBER: number;
					public static LIMIT_TYPE_FIELD_NUMBER: number;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledQuery;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundledQuery;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledQuery;
					public getLimitTypeValue(): number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.bundle.BundledQuery;
					public static newBuilder(param0: com.google.firestore.bundle.BundledQuery): com.google.firestore.bundle.BundledQuery.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledQuery;
					public static getDefaultInstance(): com.google.firestore.bundle.BundledQuery;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledQuery;
					public static newBuilder(): com.google.firestore.bundle.BundledQuery.Builder;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledQuery;
					public hasStructuredQuery(): boolean;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.bundle.BundledQuery;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.bundle.BundledQuery>;
					public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.bundle.BundledQuery;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getQueryTypeCase(): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
					public getLimitType(): com.google.firestore.bundle.BundledQuery.LimitType;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundledQuery;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.bundle.BundledQuery;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.BundledQuery;
				}
				export module BundledQuery {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.bundle.BundledQuery,com.google.firestore.bundle.BundledQuery.Builder> implements com.google.firestore.bundle.BundledQueryOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.bundle.BundledQuery.Builder>;
						public getQueryTypeCase(): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
						public mergeStructuredQuery(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.bundle.BundledQuery.Builder;
						public setLimitTypeValue(param0: number): com.google.firestore.bundle.BundledQuery.Builder;
						public getLimitType(): com.google.firestore.bundle.BundledQuery.LimitType;
						public setStructuredQuery(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.bundle.BundledQuery.Builder;
						public clearStructuredQuery(): com.google.firestore.bundle.BundledQuery.Builder;
						public clearQueryType(): com.google.firestore.bundle.BundledQuery.Builder;
						public getParent(): string;
						public setParent(param0: string): com.google.firestore.bundle.BundledQuery.Builder;
						public setParentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.BundledQuery.Builder;
						public hasStructuredQuery(): boolean;
						public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
						public clearLimitType(): com.google.firestore.bundle.BundledQuery.Builder;
						public getLimitTypeValue(): number;
						public setStructuredQuery(param0: com.google.firestore.v1.StructuredQuery.Builder): com.google.firestore.bundle.BundledQuery.Builder;
						public setLimitType(param0: com.google.firestore.bundle.BundledQuery.LimitType): com.google.firestore.bundle.BundledQuery.Builder;
						public getParentBytes(): com.google.protobuf.ByteString;
						public clearParent(): com.google.firestore.bundle.BundledQuery.Builder;
					}
					export class LimitType extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firestore.bundle.BundledQuery.LimitType>;
						public static FIRST: com.google.firestore.bundle.BundledQuery.LimitType;
						public static LAST: com.google.firestore.bundle.BundledQuery.LimitType;
						public static UNRECOGNIZED: com.google.firestore.bundle.BundledQuery.LimitType;
						public static FIRST_VALUE: number;
						public static LAST_VALUE: number;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.bundle.BundledQuery.LimitType;
						public static values(): androidNative.Array<com.google.firestore.bundle.BundledQuery.LimitType>;
						public static valueOf(param0: string): com.google.firestore.bundle.BundledQuery.LimitType;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.bundle.BundledQuery.LimitType>;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public getNumber(): number;
						public static forNumber(param0: number): com.google.firestore.bundle.BundledQuery.LimitType;
					}
					export module LimitType {
						export class LimitTypeVerifier {
							public static class: java.lang.Class<com.google.firestore.bundle.BundledQuery.LimitType.LimitTypeVerifier>;
							public isInRange(param0: number): boolean;
						}
					}
					export class QueryTypeCase {
						public static class: java.lang.Class<com.google.firestore.bundle.BundledQuery.QueryTypeCase>;
						public static STRUCTURED_QUERY: com.google.firestore.bundle.BundledQuery.QueryTypeCase;
						public static QUERYTYPE_NOT_SET: com.google.firestore.bundle.BundledQuery.QueryTypeCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
						public static forNumber(param0: number): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
						public static valueOf(param0: string): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
						public getNumber(): number;
						public static values(): androidNative.Array<com.google.firestore.bundle.BundledQuery.QueryTypeCase>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class BundledQueryOrBuilder {
					public static class: java.lang.Class<com.google.firestore.bundle.BundledQueryOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.bundle.BundledQueryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParent(): string;
						getParentBytes(): com.google.protobuf.ByteString;
						hasStructuredQuery(): boolean;
						getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
						getLimitTypeValue(): number;
						getLimitType(): com.google.firestore.bundle.BundledQuery.LimitType;
						getQueryTypeCase(): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
					});
					public constructor();
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public hasStructuredQuery(): boolean;
					public getLimitTypeValue(): number;
					public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
					public getQueryTypeCase(): com.google.firestore.bundle.BundledQuery.QueryTypeCase;
					public getLimitType(): com.google.firestore.bundle.BundledQuery.LimitType;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class NamedQuery extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.bundle.NamedQuery,com.google.firestore.bundle.NamedQuery.Builder> implements com.google.firestore.bundle.NamedQueryOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.bundle.NamedQuery>;
					public static NAME_FIELD_NUMBER: number;
					public static BUNDLED_QUERY_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.NamedQuery;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.bundle.NamedQuery;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.NamedQuery;
					public getNameBytes(): com.google.protobuf.ByteString;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.bundle.NamedQuery>;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.NamedQuery;
					public hasBundledQuery(): boolean;
					public getBundledQuery(): com.google.firestore.bundle.BundledQuery;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.NamedQuery;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.bundle.NamedQuery;
					public static newBuilder(): com.google.firestore.bundle.NamedQuery.Builder;
					public static getDefaultInstance(): com.google.firestore.bundle.NamedQuery;
					public static newBuilder(param0: com.google.firestore.bundle.NamedQuery): com.google.firestore.bundle.NamedQuery.Builder;
					public getName(): string;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.bundle.NamedQuery;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.bundle.NamedQuery;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.NamedQuery;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.NamedQuery;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.bundle.NamedQuery;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.bundle.NamedQuery;
					public hasReadTime(): boolean;
				}
				export module NamedQuery {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.bundle.NamedQuery,com.google.firestore.bundle.NamedQuery.Builder> implements com.google.firestore.bundle.NamedQueryOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.bundle.NamedQuery.Builder>;
						public clearName(): com.google.firestore.bundle.NamedQuery.Builder;
						public setBundledQuery(param0: com.google.firestore.bundle.BundledQuery): com.google.firestore.bundle.NamedQuery.Builder;
						public clearBundledQuery(): com.google.firestore.bundle.NamedQuery.Builder;
						public setBundledQuery(param0: com.google.firestore.bundle.BundledQuery.Builder): com.google.firestore.bundle.NamedQuery.Builder;
						public hasBundledQuery(): boolean;
						public getName(): string;
						public hasReadTime(): boolean;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.bundle.NamedQuery.Builder;
						public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firestore.bundle.NamedQuery.Builder;
						public mergeBundledQuery(param0: com.google.firestore.bundle.BundledQuery): com.google.firestore.bundle.NamedQuery.Builder;
						public setName(param0: string): com.google.firestore.bundle.NamedQuery.Builder;
						public getBundledQuery(): com.google.firestore.bundle.BundledQuery;
						public getReadTime(): com.google.protobuf.Timestamp;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.bundle.NamedQuery.Builder;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.bundle.NamedQuery.Builder;
						public getNameBytes(): com.google.protobuf.ByteString;
						public clearReadTime(): com.google.firestore.bundle.NamedQuery.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module bundle {
				export class NamedQueryOrBuilder {
					public static class: java.lang.Class<com.google.firestore.bundle.NamedQueryOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.bundle.NamedQueryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						getNameBytes(): com.google.protobuf.ByteString;
						hasBundledQuery(): boolean;
						getBundledQuery(): com.google.firestore.bundle.BundledQuery;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getName(): string;
					public getNameBytes(): com.google.protobuf.ByteString;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasBundledQuery(): boolean;
					public getBundledQuery(): com.google.firestore.bundle.BundledQuery;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ArrayValue extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ArrayValue,com.google.firestore.v1.ArrayValue.Builder> implements com.google.firestore.v1.ArrayValueOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ArrayValue>;
					public static VALUES_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ArrayValue;
					public static newBuilder(): com.google.firestore.v1.ArrayValue.Builder;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ArrayValue;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ArrayValue>;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ArrayValue;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ArrayValue;
					public getValues(param0: number): com.google.firestore.v1.Value;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ArrayValue;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ArrayValue;
					public static newBuilder(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.ArrayValue.Builder;
					public getValuesCount(): number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ArrayValue;
					public getValuesOrBuilder(param0: number): com.google.firestore.v1.ValueOrBuilder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ArrayValue;
					public static getDefaultInstance(): com.google.firestore.v1.ArrayValue;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ArrayValue;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ArrayValue;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ArrayValue;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ArrayValue;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getValuesList(): java.util.List<com.google.firestore.v1.Value>;
					public getValuesOrBuilderList(): java.util.List<any>;
				}
				export module ArrayValue {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ArrayValue,com.google.firestore.v1.ArrayValue.Builder> implements com.google.firestore.v1.ArrayValueOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ArrayValue.Builder>;
						public addAllValues(param0: java.lang.Iterable<any>): com.google.firestore.v1.ArrayValue.Builder;
						public getValuesList(): java.util.List<com.google.firestore.v1.Value>;
						public addValues(param0: number, param1: com.google.firestore.v1.Value): com.google.firestore.v1.ArrayValue.Builder;
						public removeValues(param0: number): com.google.firestore.v1.ArrayValue.Builder;
						public getValues(param0: number): com.google.firestore.v1.Value;
						public setValues(param0: number, param1: com.google.firestore.v1.Value): com.google.firestore.v1.ArrayValue.Builder;
						public addValues(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.ArrayValue.Builder;
						public setValues(param0: number, param1: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.ArrayValue.Builder;
						public addValues(param0: number, param1: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.ArrayValue.Builder;
						public getValuesCount(): number;
						public addValues(param0: com.google.firestore.v1.Value): com.google.firestore.v1.ArrayValue.Builder;
						public clearValues(): com.google.firestore.v1.ArrayValue.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ArrayValueOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ArrayValueOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ArrayValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getValuesList(): java.util.List<com.google.firestore.v1.Value>;
						getValues(param0: number): com.google.firestore.v1.Value;
						getValuesCount(): number;
					});
					public constructor();
					public getValues(param0: number): com.google.firestore.v1.Value;
					public getValuesCount(): number;
					public getValuesList(): java.util.List<com.google.firestore.v1.Value>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BatchGetDocumentsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.BatchGetDocumentsRequest,com.google.firestore.v1.BatchGetDocumentsRequest.Builder> implements com.google.firestore.v1.BatchGetDocumentsRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsRequest>;
					public static DATABASE_FIELD_NUMBER: number;
					public static DOCUMENTS_FIELD_NUMBER: number;
					public static MASK_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static NEW_TRANSACTION_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsRequest;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsRequest;
					public getDocuments(param0: number): string;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.BatchGetDocumentsRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.BatchGetDocumentsRequest>;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.BatchGetDocumentsRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.BatchGetDocumentsRequest;
					public hasNewTransaction(): boolean;
					public getDatabase(): string;
					public getNewTransaction(): com.google.firestore.v1.TransactionOptions;
					public getDocumentsCount(): number;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsRequest;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.BatchGetDocumentsRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsRequest;
					public hasReadTime(): boolean;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsRequest;
					public getDocumentsList(): java.util.List<string>;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.BatchGetDocumentsRequest;
					public static newBuilder(param0: com.google.firestore.v1.BatchGetDocumentsRequest): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsRequest;
					public getConsistencySelectorCase(): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
					public hasMask(): boolean;
					public static getDefaultInstance(): com.google.firestore.v1.BatchGetDocumentsRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsRequest;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static newBuilder(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
				}
				export module BatchGetDocumentsRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.BatchGetDocumentsRequest,com.google.firestore.v1.BatchGetDocumentsRequest.Builder> implements com.google.firestore.v1.BatchGetDocumentsRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsRequest.Builder>;
						public hasNewTransaction(): boolean;
						public setNewTransaction(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public clearConsistencySelector(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getMask(): com.google.firestore.v1.DocumentMask;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public setDocuments(param0: number, param1: string): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public clearDatabase(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public addDocuments(param0: string): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public setDatabaseBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public clearTransaction(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public getNewTransaction(): com.google.firestore.v1.TransactionOptions;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public setNewTransaction(param0: com.google.firestore.v1.TransactionOptions.Builder): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getDocuments(param0: number): string;
						public setMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public clearNewTransaction(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public clearMask(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getTransaction(): com.google.protobuf.ByteString;
						public clearDocuments(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getConsistencySelectorCase(): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public getDatabase(): string;
						public mergeNewTransaction(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
						public setMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public addAllDocuments(param0: java.lang.Iterable<string>): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getDocumentsCount(): number;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public mergeMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public addDocumentsBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public hasReadTime(): boolean;
						public getDatabaseBytes(): com.google.protobuf.ByteString;
						public hasMask(): boolean;
						public clearReadTime(): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
						public getDocumentsList(): java.util.List<string>;
						public setDatabase(param0: string): com.google.firestore.v1.BatchGetDocumentsRequest.Builder;
					}
					export class ConsistencySelectorCase {
						public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase>;
						public static TRANSACTION: com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public static NEW_TRANSACTION: com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public static READ_TIME: com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public static CONSISTENCYSELECTOR_NOT_SET: com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public static values(): androidNative.Array<com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase>;
						public static valueOf(param0: string): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public static forNumber(param0: number): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
						public getNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BatchGetDocumentsRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.BatchGetDocumentsRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDatabase(): string;
						getDatabaseBytes(): com.google.protobuf.ByteString;
						getDocumentsList(): java.util.List<string>;
						getDocumentsCount(): number;
						getDocuments(param0: number): string;
						getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
						hasMask(): boolean;
						getMask(): com.google.firestore.v1.DocumentMask;
						getTransaction(): com.google.protobuf.ByteString;
						hasNewTransaction(): boolean;
						getNewTransaction(): com.google.firestore.v1.TransactionOptions;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getConsistencySelectorCase(): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
					});
					public constructor();
					public getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public getDocumentsList(): java.util.List<string>;
					public getTransaction(): com.google.protobuf.ByteString;
					public getDocuments(param0: number): string;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public hasNewTransaction(): boolean;
					public getDatabase(): string;
					public getNewTransaction(): com.google.firestore.v1.TransactionOptions;
					public getConsistencySelectorCase(): com.google.firestore.v1.BatchGetDocumentsRequest.ConsistencySelectorCase;
					public hasMask(): boolean;
					public getDocumentsCount(): number;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BatchGetDocumentsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.BatchGetDocumentsResponse,com.google.firestore.v1.BatchGetDocumentsResponse.Builder> implements com.google.firestore.v1.BatchGetDocumentsResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsResponse>;
					public static FOUND_FIELD_NUMBER: number;
					public static MISSING_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.BatchGetDocumentsResponse;
					public getTransaction(): com.google.protobuf.ByteString;
					public static getDefaultInstance(): com.google.firestore.v1.BatchGetDocumentsResponse;
					public getMissing(): string;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static newBuilder(): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsResponse;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasFound(): boolean;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsResponse;
					public hasReadTime(): boolean;
					public getResultCase(): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
					public getMissingBytes(): com.google.protobuf.ByteString;
					public getFound(): com.google.firestore.v1.Document;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.BatchGetDocumentsResponse>;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BatchGetDocumentsResponse;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static newBuilder(param0: com.google.firestore.v1.BatchGetDocumentsResponse): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
				}
				export module BatchGetDocumentsResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.BatchGetDocumentsResponse,com.google.firestore.v1.BatchGetDocumentsResponse.Builder> implements com.google.firestore.v1.BatchGetDocumentsResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsResponse.Builder>;
						public getMissingBytes(): com.google.protobuf.ByteString;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public getResultCase(): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
						public clearReadTime(): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public setMissingBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public mergeFound(param0: com.google.firestore.v1.Document): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public clearTransaction(): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public clearFound(): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public hasReadTime(): boolean;
						public setFound(param0: com.google.firestore.v1.Document): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public setFound(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public getMissing(): string;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public clearResult(): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public clearMissing(): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public hasFound(): boolean;
						public setMissing(param0: string): com.google.firestore.v1.BatchGetDocumentsResponse.Builder;
						public getFound(): com.google.firestore.v1.Document;
						public getTransaction(): com.google.protobuf.ByteString;
					}
					export class ResultCase {
						public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase>;
						public static FOUND: com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
						public static MISSING: com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
						public static RESULT_NOT_SET: com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
						public static values(): androidNative.Array<com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase>;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
						public static forNumber(param0: number): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BatchGetDocumentsResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.BatchGetDocumentsResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.BatchGetDocumentsResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasFound(): boolean;
						getFound(): com.google.firestore.v1.Document;
						getMissing(): string;
						getMissingBytes(): com.google.protobuf.ByteString;
						getTransaction(): com.google.protobuf.ByteString;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getResultCase(): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
					});
					public constructor();
					public getMissingBytes(): com.google.protobuf.ByteString;
					public getTransaction(): com.google.protobuf.ByteString;
					public getFound(): com.google.firestore.v1.Document;
					public hasFound(): boolean;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
					public getMissing(): string;
					public getResultCase(): com.google.firestore.v1.BatchGetDocumentsResponse.ResultCase;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BeginTransactionRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.BeginTransactionRequest,com.google.firestore.v1.BeginTransactionRequest.Builder> implements com.google.firestore.v1.BeginTransactionRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.BeginTransactionRequest>;
					public static DATABASE_FIELD_NUMBER: number;
					public static OPTIONS_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.BeginTransactionRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.BeginTransactionRequest>;
					public static newBuilder(param0: com.google.firestore.v1.BeginTransactionRequest): com.google.firestore.v1.BeginTransactionRequest.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionRequest;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.BeginTransactionRequest;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.BeginTransactionRequest;
					public getDatabase(): string;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.BeginTransactionRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.BeginTransactionRequest;
					public static getDefaultInstance(): com.google.firestore.v1.BeginTransactionRequest;
					public hasOptions(): boolean;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BeginTransactionRequest;
					public static newBuilder(): com.google.firestore.v1.BeginTransactionRequest.Builder;
					public getOptions(): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionRequest;
				}
				export module BeginTransactionRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.BeginTransactionRequest,com.google.firestore.v1.BeginTransactionRequest.Builder> implements com.google.firestore.v1.BeginTransactionRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.BeginTransactionRequest.Builder>;
						public getDatabaseBytes(): com.google.protobuf.ByteString;
						public hasOptions(): boolean;
						public getOptions(): com.google.firestore.v1.TransactionOptions;
						public mergeOptions(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.BeginTransactionRequest.Builder;
						public getDatabase(): string;
						public clearOptions(): com.google.firestore.v1.BeginTransactionRequest.Builder;
						public clearDatabase(): com.google.firestore.v1.BeginTransactionRequest.Builder;
						public setDatabaseBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BeginTransactionRequest.Builder;
						public setOptions(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.BeginTransactionRequest.Builder;
						public setDatabase(param0: string): com.google.firestore.v1.BeginTransactionRequest.Builder;
						public setOptions(param0: com.google.firestore.v1.TransactionOptions.Builder): com.google.firestore.v1.BeginTransactionRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BeginTransactionRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.BeginTransactionRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.BeginTransactionRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDatabase(): string;
						getDatabaseBytes(): com.google.protobuf.ByteString;
						hasOptions(): boolean;
						getOptions(): com.google.firestore.v1.TransactionOptions;
					});
					public constructor();
					public getDatabase(): string;
					public hasOptions(): boolean;
					public getOptions(): com.google.firestore.v1.TransactionOptions;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BeginTransactionResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.BeginTransactionResponse,com.google.firestore.v1.BeginTransactionResponse.Builder> implements com.google.firestore.v1.BeginTransactionResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.BeginTransactionResponse>;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.BeginTransactionResponse;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionResponse;
					public static getDefaultInstance(): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BeginTransactionResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.BeginTransactionResponse;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.BeginTransactionResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.BeginTransactionResponse>;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static newBuilder(param0: com.google.firestore.v1.BeginTransactionResponse): com.google.firestore.v1.BeginTransactionResponse.Builder;
					public static newBuilder(): com.google.firestore.v1.BeginTransactionResponse.Builder;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.BeginTransactionResponse;
				}
				export module BeginTransactionResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.BeginTransactionResponse,com.google.firestore.v1.BeginTransactionResponse.Builder> implements com.google.firestore.v1.BeginTransactionResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.BeginTransactionResponse.Builder>;
						public clearTransaction(): com.google.firestore.v1.BeginTransactionResponse.Builder;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.BeginTransactionResponse.Builder;
						public getTransaction(): com.google.protobuf.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class BeginTransactionResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.BeginTransactionResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.BeginTransactionResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTransaction(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getTransaction(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CommitRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.CommitRequest,com.google.firestore.v1.CommitRequest.Builder> implements com.google.firestore.v1.CommitRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.CommitRequest>;
					public static DATABASE_FIELD_NUMBER: number;
					public static WRITES_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.CommitRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.CommitRequest>;
					public getTransaction(): com.google.protobuf.ByteString;
					public static getDefaultInstance(): com.google.firestore.v1.CommitRequest;
					public getDatabase(): string;
					public getWritesOrBuilderList(): java.util.List<any>;
					public getWritesCount(): number;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitRequest;
					public static newBuilder(param0: com.google.firestore.v1.CommitRequest): com.google.firestore.v1.CommitRequest.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.CommitRequest;
					public static newBuilder(): com.google.firestore.v1.CommitRequest.Builder;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getWritesOrBuilder(param0: number): com.google.firestore.v1.WriteOrBuilder;
					public getWrites(param0: number): com.google.firestore.v1.Write;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.CommitRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.CommitRequest;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.CommitRequest;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CommitRequest;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitRequest;
				}
				export module CommitRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.CommitRequest,com.google.firestore.v1.CommitRequest.Builder> implements com.google.firestore.v1.CommitRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.CommitRequest.Builder>;
						public getWritesCount(): number;
						public getWrites(param0: number): com.google.firestore.v1.Write;
						public addWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firestore.v1.CommitRequest.Builder;
						public setDatabase(param0: string): com.google.firestore.v1.CommitRequest.Builder;
						public clearWrites(): com.google.firestore.v1.CommitRequest.Builder;
						public getDatabase(): string;
						public addWrites(param0: com.google.firestore.v1.Write.Builder): com.google.firestore.v1.CommitRequest.Builder;
						public setWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firestore.v1.CommitRequest.Builder;
						public setWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firestore.v1.CommitRequest.Builder;
						public setDatabaseBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CommitRequest.Builder;
						public getDatabaseBytes(): com.google.protobuf.ByteString;
						public addWrites(param0: com.google.firestore.v1.Write): com.google.firestore.v1.CommitRequest.Builder;
						public clearDatabase(): com.google.firestore.v1.CommitRequest.Builder;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CommitRequest.Builder;
						public addWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firestore.v1.CommitRequest.Builder;
						public clearTransaction(): com.google.firestore.v1.CommitRequest.Builder;
						public addAllWrites(param0: java.lang.Iterable<any>): com.google.firestore.v1.CommitRequest.Builder;
						public removeWrites(param0: number): com.google.firestore.v1.CommitRequest.Builder;
						public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
						public getTransaction(): com.google.protobuf.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CommitRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.CommitRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.CommitRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDatabase(): string;
						getDatabaseBytes(): com.google.protobuf.ByteString;
						getWritesList(): java.util.List<com.google.firestore.v1.Write>;
						getWrites(param0: number): com.google.firestore.v1.Write;
						getWritesCount(): number;
						getTransaction(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getDatabase(): string;
					public getWritesCount(): number;
					public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
					public getTransaction(): com.google.protobuf.ByteString;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public getWrites(param0: number): com.google.firestore.v1.Write;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CommitResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.CommitResponse,com.google.firestore.v1.CommitResponse.Builder> implements com.google.firestore.v1.CommitResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.CommitResponse>;
					public static WRITE_RESULTS_FIELD_NUMBER: number;
					public static COMMIT_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.CommitResponse;
					public getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.CommitResponse;
					public static newBuilder(): com.google.firestore.v1.CommitResponse.Builder;
					public static newBuilder(param0: com.google.firestore.v1.CommitResponse): com.google.firestore.v1.CommitResponse.Builder;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.CommitResponse;
					public getWriteResultsOrBuilderList(): java.util.List<any>;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitResponse;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.CommitResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitResponse;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.CommitResponse>;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CommitResponse;
					public getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
					public getWriteResultsCount(): number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.CommitResponse;
					public getWriteResultsOrBuilder(param0: number): com.google.firestore.v1.WriteResultOrBuilder;
					public hasCommitTime(): boolean;
					public getCommitTime(): com.google.protobuf.Timestamp;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CommitResponse;
					public static getDefaultInstance(): com.google.firestore.v1.CommitResponse;
				}
				export module CommitResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.CommitResponse,com.google.firestore.v1.CommitResponse.Builder> implements com.google.firestore.v1.CommitResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.CommitResponse.Builder>;
						public clearCommitTime(): com.google.firestore.v1.CommitResponse.Builder;
						public removeWriteResults(param0: number): com.google.firestore.v1.CommitResponse.Builder;
						public getCommitTime(): com.google.protobuf.Timestamp;
						public addWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult.Builder): com.google.firestore.v1.CommitResponse.Builder;
						public getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
						public mergeCommitTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.CommitResponse.Builder;
						public setCommitTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.CommitResponse.Builder;
						public addWriteResults(param0: com.google.firestore.v1.WriteResult): com.google.firestore.v1.CommitResponse.Builder;
						public setCommitTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.CommitResponse.Builder;
						public getWriteResultsCount(): number;
						public addWriteResults(param0: com.google.firestore.v1.WriteResult.Builder): com.google.firestore.v1.CommitResponse.Builder;
						public getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
						public addAllWriteResults(param0: java.lang.Iterable<any>): com.google.firestore.v1.CommitResponse.Builder;
						public setWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult.Builder): com.google.firestore.v1.CommitResponse.Builder;
						public setWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult): com.google.firestore.v1.CommitResponse.Builder;
						public addWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult): com.google.firestore.v1.CommitResponse.Builder;
						public clearWriteResults(): com.google.firestore.v1.CommitResponse.Builder;
						public hasCommitTime(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CommitResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.CommitResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.CommitResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
						getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
						getWriteResultsCount(): number;
						hasCommitTime(): boolean;
						getCommitTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
					public getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
					public getWriteResultsCount(): number;
					public hasCommitTime(): boolean;
					public getCommitTime(): com.google.protobuf.Timestamp;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CommonProto {
					public static class: java.lang.Class<com.google.firestore.v1.CommonProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CreateDocumentRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.CreateDocumentRequest,com.google.firestore.v1.CreateDocumentRequest.Builder> implements com.google.firestore.v1.CreateDocumentRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.CreateDocumentRequest>;
					public static PARENT_FIELD_NUMBER: number;
					public static COLLECTION_ID_FIELD_NUMBER: number;
					public static DOCUMENT_ID_FIELD_NUMBER: number;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static MASK_FIELD_NUMBER: number;
					public getDocumentId(): string;
					public static newBuilder(param0: com.google.firestore.v1.CreateDocumentRequest): com.google.firestore.v1.CreateDocumentRequest.Builder;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.CreateDocumentRequest;
					public static newBuilder(): com.google.firestore.v1.CreateDocumentRequest.Builder;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CreateDocumentRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.CreateDocumentRequest;
					public hasDocument(): boolean;
					public static getDefaultInstance(): com.google.firestore.v1.CreateDocumentRequest;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getDocument(): com.google.firestore.v1.Document;
					public getDocumentIdBytes(): com.google.protobuf.ByteString;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.CreateDocumentRequest;
					public getCollectionIdBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CreateDocumentRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.CreateDocumentRequest;
					public hasMask(): boolean;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CreateDocumentRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CreateDocumentRequest;
					public getCollectionId(): string;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CreateDocumentRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.CreateDocumentRequest>;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.CreateDocumentRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.CreateDocumentRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CreateDocumentRequest;
				}
				export module CreateDocumentRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.CreateDocumentRequest,com.google.firestore.v1.CreateDocumentRequest.Builder> implements com.google.firestore.v1.CreateDocumentRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.CreateDocumentRequest.Builder>;
						public clearParent(): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setDocumentIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setDocument(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public getCollectionId(): string;
						public setDocumentId(param0: string): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public getParent(): string;
						public getMask(): com.google.firestore.v1.DocumentMask;
						public mergeMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public clearDocument(): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public getParentBytes(): com.google.protobuf.ByteString;
						public getDocumentIdBytes(): com.google.protobuf.ByteString;
						public mergeDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public hasDocument(): boolean;
						public getDocument(): com.google.firestore.v1.Document;
						public getDocumentId(): string;
						public clearDocumentId(): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setParentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public clearCollectionId(): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setCollectionIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public hasMask(): boolean;
						public setParent(param0: string): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public getCollectionIdBytes(): com.google.protobuf.ByteString;
						public setCollectionId(param0: string): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public setDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.CreateDocumentRequest.Builder;
						public clearMask(): com.google.firestore.v1.CreateDocumentRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CreateDocumentRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.CreateDocumentRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.CreateDocumentRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParent(): string;
						getParentBytes(): com.google.protobuf.ByteString;
						getCollectionId(): string;
						getCollectionIdBytes(): com.google.protobuf.ByteString;
						getDocumentId(): string;
						getDocumentIdBytes(): com.google.protobuf.ByteString;
						hasDocument(): boolean;
						getDocument(): com.google.firestore.v1.Document;
						hasMask(): boolean;
						getMask(): com.google.firestore.v1.DocumentMask;
					});
					public constructor();
					public getDocumentId(): string;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public hasMask(): boolean;
					public getCollectionId(): string;
					public getCollectionIdBytes(): com.google.protobuf.ByteString;
					public getDocument(): com.google.firestore.v1.Document;
					public hasDocument(): boolean;
					public getDocumentIdBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class Cursor extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Cursor,com.google.firestore.v1.Cursor.Builder> implements com.google.firestore.v1.CursorOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.Cursor>;
					public static VALUES_FIELD_NUMBER: number;
					public static BEFORE_FIELD_NUMBER: number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Cursor;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Cursor;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Cursor;
					public static newBuilder(): com.google.firestore.v1.Cursor.Builder;
					public static getDefaultInstance(): com.google.firestore.v1.Cursor;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Cursor;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Cursor;
					public getBefore(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Cursor;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Cursor;
					public getValues(param0: number): com.google.firestore.v1.Value;
					public static newBuilder(param0: com.google.firestore.v1.Cursor): com.google.firestore.v1.Cursor.Builder;
					public getValuesCount(): number;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Cursor>;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Cursor;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Cursor;
					public getValuesOrBuilder(param0: number): com.google.firestore.v1.ValueOrBuilder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Cursor;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Cursor;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Cursor;
					public getValuesList(): java.util.List<com.google.firestore.v1.Value>;
					public getValuesOrBuilderList(): java.util.List<any>;
				}
				export module Cursor {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Cursor,com.google.firestore.v1.Cursor.Builder> implements com.google.firestore.v1.CursorOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Cursor.Builder>;
						public clearValues(): com.google.firestore.v1.Cursor.Builder;
						public removeValues(param0: number): com.google.firestore.v1.Cursor.Builder;
						public setValues(param0: number, param1: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.Cursor.Builder;
						public addValues(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Cursor.Builder;
						public getValuesCount(): number;
						public setBefore(param0: boolean): com.google.firestore.v1.Cursor.Builder;
						public addValues(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.Cursor.Builder;
						public addValues(param0: number, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Cursor.Builder;
						public getValuesList(): java.util.List<com.google.firestore.v1.Value>;
						public addValues(param0: number, param1: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.Cursor.Builder;
						public getValues(param0: number): com.google.firestore.v1.Value;
						public setValues(param0: number, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Cursor.Builder;
						public clearBefore(): com.google.firestore.v1.Cursor.Builder;
						public addAllValues(param0: java.lang.Iterable<any>): com.google.firestore.v1.Cursor.Builder;
						public getBefore(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class CursorOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.CursorOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.CursorOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getValuesList(): java.util.List<com.google.firestore.v1.Value>;
						getValues(param0: number): com.google.firestore.v1.Value;
						getValuesCount(): number;
						getBefore(): boolean;
					});
					public constructor();
					public getBefore(): boolean;
					public getValues(param0: number): com.google.firestore.v1.Value;
					public getValuesCount(): number;
					public getValuesList(): java.util.List<com.google.firestore.v1.Value>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DeleteDocumentRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DeleteDocumentRequest,com.google.firestore.v1.DeleteDocumentRequest.Builder> implements com.google.firestore.v1.DeleteDocumentRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.DeleteDocumentRequest>;
					public static NAME_FIELD_NUMBER: number;
					public static CURRENT_DOCUMENT_FIELD_NUMBER: number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DeleteDocumentRequest;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DeleteDocumentRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DeleteDocumentRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DeleteDocumentRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DeleteDocumentRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DeleteDocumentRequest;
					public getNameBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DeleteDocumentRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DeleteDocumentRequest>;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DeleteDocumentRequest;
					public static newBuilder(param0: com.google.firestore.v1.DeleteDocumentRequest): com.google.firestore.v1.DeleteDocumentRequest.Builder;
					public hasCurrentDocument(): boolean;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DeleteDocumentRequest;
					public getCurrentDocument(): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DeleteDocumentRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DeleteDocumentRequest;
					public getName(): string;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DeleteDocumentRequest;
					public static getDefaultInstance(): com.google.firestore.v1.DeleteDocumentRequest;
					public static newBuilder(): com.google.firestore.v1.DeleteDocumentRequest.Builder;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
				}
				export module DeleteDocumentRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DeleteDocumentRequest,com.google.firestore.v1.DeleteDocumentRequest.Builder> implements com.google.firestore.v1.DeleteDocumentRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DeleteDocumentRequest.Builder>;
						public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DeleteDocumentRequest.Builder;
						public hasCurrentDocument(): boolean;
						public setCurrentDocument(param0: com.google.firestore.v1.Precondition.Builder): com.google.firestore.v1.DeleteDocumentRequest.Builder;
						public getCurrentDocument(): com.google.firestore.v1.Precondition;
						public mergeCurrentDocument(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.DeleteDocumentRequest.Builder;
						public setName(param0: string): com.google.firestore.v1.DeleteDocumentRequest.Builder;
						public clearCurrentDocument(): com.google.firestore.v1.DeleteDocumentRequest.Builder;
						public setCurrentDocument(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.DeleteDocumentRequest.Builder;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getName(): string;
						public clearName(): com.google.firestore.v1.DeleteDocumentRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DeleteDocumentRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DeleteDocumentRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DeleteDocumentRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						getNameBytes(): com.google.protobuf.ByteString;
						hasCurrentDocument(): boolean;
						getCurrentDocument(): com.google.firestore.v1.Precondition;
					});
					public constructor();
					public getCurrentDocument(): com.google.firestore.v1.Precondition;
					public getName(): string;
					public getNameBytes(): com.google.protobuf.ByteString;
					public hasCurrentDocument(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class Document extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Document,com.google.firestore.v1.Document.Builder> implements com.google.firestore.v1.DocumentOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.Document>;
					public static NAME_FIELD_NUMBER: number;
					public static FIELDS_FIELD_NUMBER: number;
					public static CREATE_TIME_FIELD_NUMBER: number;
					public static UPDATE_TIME_FIELD_NUMBER: number;
					public getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Document;
					public getFieldsCount(): number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Document;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Document;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Document>;
					/** @deprecated */
					public getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
					public getUpdateTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Document;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Document;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Document;
					public static newBuilder(param0: com.google.firestore.v1.Document): com.google.firestore.v1.Document.Builder;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Document;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static newBuilder(): com.google.firestore.v1.Document.Builder;
					public getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
					public getCreateTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Document;
					public getNameBytes(): com.google.protobuf.ByteString;
					public containsFields(param0: string): boolean;
					public hasCreateTime(): boolean;
					public hasUpdateTime(): boolean;
					public static getDefaultInstance(): com.google.firestore.v1.Document;
					public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
					public getName(): string;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Document;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Document;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Document;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Document;
				}
				export module Document {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Document,com.google.firestore.v1.Document.Builder> implements com.google.firestore.v1.DocumentOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Document.Builder>;
						/** @deprecated */
						public getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
						public setUpdateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Document.Builder;
						public putAllFields(param0: java.util.Map<string,com.google.firestore.v1.Value>): com.google.firestore.v1.Document.Builder;
						public getName(): string;
						public getCreateTime(): com.google.protobuf.Timestamp;
						public clearName(): com.google.firestore.v1.Document.Builder;
						public getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
						public mergeCreateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Document.Builder;
						public getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						public getNameBytes(): com.google.protobuf.ByteString;
						public removeFields(param0: string): com.google.firestore.v1.Document.Builder;
						public clearUpdateTime(): com.google.firestore.v1.Document.Builder;
						public setName(param0: string): com.google.firestore.v1.Document.Builder;
						public setUpdateTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.Document.Builder;
						public mergeUpdateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Document.Builder;
						public setCreateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Document.Builder;
						public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
						public getUpdateTime(): com.google.protobuf.Timestamp;
						public hasCreateTime(): boolean;
						public hasUpdateTime(): boolean;
						public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Document.Builder;
						public setCreateTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.Document.Builder;
						public containsFields(param0: string): boolean;
						public putFields(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Document.Builder;
						public getFieldsCount(): number;
						public clearFields(): com.google.firestore.v1.Document.Builder;
						public clearCreateTime(): com.google.firestore.v1.Document.Builder;
					}
					export class FieldsDefaultEntryHolder {
						public static class: java.lang.Class<com.google.firestore.v1.Document.FieldsDefaultEntryHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentChange extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DocumentChange,com.google.firestore.v1.DocumentChange.Builder> implements com.google.firestore.v1.DocumentChangeOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentChange>;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static TARGET_IDS_FIELD_NUMBER: number;
					public static REMOVED_TARGET_IDS_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DocumentChange;
					public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
					public static newBuilder(): com.google.firestore.v1.DocumentChange.Builder;
					public static getDefaultInstance(): com.google.firestore.v1.DocumentChange;
					public hasDocument(): boolean;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DocumentChange>;
					public getRemovedTargetIdsCount(): number;
					public getRemovedTargetIds(param0: number): number;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentChange;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getDocument(): com.google.firestore.v1.Document;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentChange;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DocumentChange;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentChange;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DocumentChange;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentChange;
					public getTargetIdsCount(): number;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentChange;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentChange;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentChange;
					public getTargetIds(param0: number): number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentChange;
					public getTargetIdsList(): java.util.List<java.lang.Integer>;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentChange;
					public static newBuilder(param0: com.google.firestore.v1.DocumentChange): com.google.firestore.v1.DocumentChange.Builder;
				}
				export module DocumentChange {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DocumentChange,com.google.firestore.v1.DocumentChange.Builder> implements com.google.firestore.v1.DocumentChangeOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentChange.Builder>;
						public getDocument(): com.google.firestore.v1.Document;
						public addRemovedTargetIds(param0: number): com.google.firestore.v1.DocumentChange.Builder;
						public clearTargetIds(): com.google.firestore.v1.DocumentChange.Builder;
						public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
						public clearRemovedTargetIds(): com.google.firestore.v1.DocumentChange.Builder;
						public getTargetIds(param0: number): number;
						public addTargetIds(param0: number): com.google.firestore.v1.DocumentChange.Builder;
						public mergeDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.DocumentChange.Builder;
						public addAllRemovedTargetIds(param0: java.lang.Iterable<any>): com.google.firestore.v1.DocumentChange.Builder;
						public setTargetIds(param0: number, param1: number): com.google.firestore.v1.DocumentChange.Builder;
						public getTargetIdsList(): java.util.List<java.lang.Integer>;
						public setRemovedTargetIds(param0: number, param1: number): com.google.firestore.v1.DocumentChange.Builder;
						public clearDocument(): com.google.firestore.v1.DocumentChange.Builder;
						public getRemovedTargetIds(param0: number): number;
						public addAllTargetIds(param0: java.lang.Iterable<any>): com.google.firestore.v1.DocumentChange.Builder;
						public getTargetIdsCount(): number;
						public hasDocument(): boolean;
						public setDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.DocumentChange.Builder;
						public setDocument(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.DocumentChange.Builder;
						public getRemovedTargetIdsCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentChangeOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentChangeOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DocumentChangeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasDocument(): boolean;
						getDocument(): com.google.firestore.v1.Document;
						getTargetIdsList(): java.util.List<java.lang.Integer>;
						getTargetIdsCount(): number;
						getTargetIds(param0: number): number;
						getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
						getRemovedTargetIdsCount(): number;
						getRemovedTargetIds(param0: number): number;
					});
					public constructor();
					public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
					public getRemovedTargetIdsCount(): number;
					public getRemovedTargetIds(param0: number): number;
					public getTargetIds(param0: number): number;
					public getDocument(): com.google.firestore.v1.Document;
					public getTargetIdsList(): java.util.List<java.lang.Integer>;
					public hasDocument(): boolean;
					public getTargetIdsCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentDelete extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DocumentDelete,com.google.firestore.v1.DocumentDelete.Builder> implements com.google.firestore.v1.DocumentDeleteOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentDelete>;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static REMOVED_TARGET_IDS_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public getDocumentBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentDelete;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentDelete;
					public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentDelete;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentDelete;
					public getDocument(): string;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentDelete;
					public static newBuilder(): com.google.firestore.v1.DocumentDelete.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DocumentDelete;
					public static getDefaultInstance(): com.google.firestore.v1.DocumentDelete;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentDelete;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentDelete;
					public getRemovedTargetIdsCount(): number;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DocumentDelete>;
					public getRemovedTargetIds(param0: number): number;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentDelete;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentDelete;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DocumentDelete;
					public static newBuilder(param0: com.google.firestore.v1.DocumentDelete): com.google.firestore.v1.DocumentDelete.Builder;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DocumentDelete;
					public hasReadTime(): boolean;
				}
				export module DocumentDelete {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DocumentDelete,com.google.firestore.v1.DocumentDelete.Builder> implements com.google.firestore.v1.DocumentDeleteOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentDelete.Builder>;
						public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
						public addAllRemovedTargetIds(param0: java.lang.Iterable<any>): com.google.firestore.v1.DocumentDelete.Builder;
						public clearReadTime(): com.google.firestore.v1.DocumentDelete.Builder;
						public setRemovedTargetIds(param0: number, param1: number): com.google.firestore.v1.DocumentDelete.Builder;
						public getDocument(): string;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.DocumentDelete.Builder;
						public getDocumentBytes(): com.google.protobuf.ByteString;
						public clearRemovedTargetIds(): com.google.firestore.v1.DocumentDelete.Builder;
						public addRemovedTargetIds(param0: number): com.google.firestore.v1.DocumentDelete.Builder;
						public setDocument(param0: string): com.google.firestore.v1.DocumentDelete.Builder;
						public clearDocument(): com.google.firestore.v1.DocumentDelete.Builder;
						public hasReadTime(): boolean;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.DocumentDelete.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public getRemovedTargetIds(param0: number): number;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.DocumentDelete.Builder;
						public setDocumentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentDelete.Builder;
						public getRemovedTargetIdsCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentDeleteOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentDeleteOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DocumentDeleteOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDocument(): string;
						getDocumentBytes(): com.google.protobuf.ByteString;
						getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
						getRemovedTargetIdsCount(): number;
						getRemovedTargetIds(param0: number): number;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getDocumentBytes(): com.google.protobuf.ByteString;
					public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
					public getRemovedTargetIdsCount(): number;
					public getDocument(): string;
					public getRemovedTargetIds(param0: number): number;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentMask extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DocumentMask,com.google.firestore.v1.DocumentMask.Builder> implements com.google.firestore.v1.DocumentMaskOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentMask>;
					public static FIELD_PATHS_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentMask;
					public static newBuilder(): com.google.firestore.v1.DocumentMask.Builder;
					public getFieldPathsCount(): number;
					public static getDefaultInstance(): com.google.firestore.v1.DocumentMask;
					public getFieldPathsList(): java.util.List<string>;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DocumentMask;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DocumentMask>;
					public static newBuilder(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.DocumentMask.Builder;
					public getFieldPathsBytes(param0: number): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentMask;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentMask;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentMask;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getFieldPaths(param0: number): string;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DocumentMask;
				}
				export module DocumentMask {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DocumentMask,com.google.firestore.v1.DocumentMask.Builder> implements com.google.firestore.v1.DocumentMaskOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentMask.Builder>;
						public getFieldPathsList(): java.util.List<string>;
						public clearFieldPaths(): com.google.firestore.v1.DocumentMask.Builder;
						public getFieldPathsBytes(param0: number): com.google.protobuf.ByteString;
						public getFieldPaths(param0: number): string;
						public setFieldPaths(param0: number, param1: string): com.google.firestore.v1.DocumentMask.Builder;
						public addFieldPaths(param0: string): com.google.firestore.v1.DocumentMask.Builder;
						public addFieldPathsBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentMask.Builder;
						public addAllFieldPaths(param0: java.lang.Iterable<string>): com.google.firestore.v1.DocumentMask.Builder;
						public getFieldPathsCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentMaskOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentMaskOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DocumentMaskOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFieldPathsList(): java.util.List<string>;
						getFieldPathsCount(): number;
						getFieldPaths(param0: number): string;
						getFieldPathsBytes(param0: number): com.google.protobuf.ByteString;
					});
					public constructor();
					public getFieldPathsBytes(param0: number): com.google.protobuf.ByteString;
					public getFieldPathsCount(): number;
					public getFieldPaths(param0: number): string;
					public getFieldPathsList(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DocumentOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						getNameBytes(): com.google.protobuf.ByteString;
						getFieldsCount(): number;
						containsFields(param0: string): boolean;
						getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
						getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
						getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
						hasCreateTime(): boolean;
						getCreateTime(): com.google.protobuf.Timestamp;
						hasUpdateTime(): boolean;
						getUpdateTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
					public getUpdateTime(): com.google.protobuf.Timestamp;
					public getFieldsCount(): number;
					public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
					public getName(): string;
					public getCreateTime(): com.google.protobuf.Timestamp;
					public getNameBytes(): com.google.protobuf.ByteString;
					public containsFields(param0: string): boolean;
					public hasCreateTime(): boolean;
					public hasUpdateTime(): boolean;
					public getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
					/** @deprecated */
					public getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentProto {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentRemove extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DocumentRemove,com.google.firestore.v1.DocumentRemove.Builder> implements com.google.firestore.v1.DocumentRemoveOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentRemove>;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static REMOVED_TARGET_IDS_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DocumentRemove;
					public getDocumentBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentRemove;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentRemove;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentRemove;
					public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentRemove;
					public static newBuilder(param0: com.google.firestore.v1.DocumentRemove): com.google.firestore.v1.DocumentRemove.Builder;
					public getDocument(): string;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentRemove;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DocumentRemove;
					public static newBuilder(): com.google.firestore.v1.DocumentRemove.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DocumentRemove;
					public static getDefaultInstance(): com.google.firestore.v1.DocumentRemove;
					public getRemovedTargetIdsCount(): number;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentRemove;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DocumentRemove>;
					public getRemovedTargetIds(param0: number): number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentRemove;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentRemove;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentRemove;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
				}
				export module DocumentRemove {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DocumentRemove,com.google.firestore.v1.DocumentRemove.Builder> implements com.google.firestore.v1.DocumentRemoveOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentRemove.Builder>;
						public clearReadTime(): com.google.firestore.v1.DocumentRemove.Builder;
						public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
						public addAllRemovedTargetIds(param0: java.lang.Iterable<any>): com.google.firestore.v1.DocumentRemove.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.DocumentRemove.Builder;
						public getDocument(): string;
						public clearRemovedTargetIds(): com.google.firestore.v1.DocumentRemove.Builder;
						public getDocumentBytes(): com.google.protobuf.ByteString;
						public setDocument(param0: string): com.google.firestore.v1.DocumentRemove.Builder;
						public setRemovedTargetIds(param0: number, param1: number): com.google.firestore.v1.DocumentRemove.Builder;
						public hasReadTime(): boolean;
						public setDocumentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentRemove.Builder;
						public addRemovedTargetIds(param0: number): com.google.firestore.v1.DocumentRemove.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.DocumentRemove.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.DocumentRemove.Builder;
						public clearDocument(): com.google.firestore.v1.DocumentRemove.Builder;
						public getRemovedTargetIds(param0: number): number;
						public getRemovedTargetIdsCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentRemoveOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentRemoveOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DocumentRemoveOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDocument(): string;
						getDocumentBytes(): com.google.protobuf.ByteString;
						getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
						getRemovedTargetIdsCount(): number;
						getRemovedTargetIds(param0: number): number;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getDocumentBytes(): com.google.protobuf.ByteString;
					public getRemovedTargetIdsList(): java.util.List<java.lang.Integer>;
					public getRemovedTargetIdsCount(): number;
					public getDocument(): string;
					public getRemovedTargetIds(param0: number): number;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentTransform extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DocumentTransform,com.google.firestore.v1.DocumentTransform.Builder> implements com.google.firestore.v1.DocumentTransformOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform>;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static FIELD_TRANSFORMS_FIELD_NUMBER: number;
					public getDocumentBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DocumentTransform;
					public getFieldTransformsOrBuilder(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransformOrBuilder;
					public getFieldTransformsCount(): number;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform;
					public getDocument(): string;
					public static newBuilder(): com.google.firestore.v1.DocumentTransform.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DocumentTransform;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentTransform;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentTransform;
					public getFieldTransformsOrBuilderList(): java.util.List<any>;
					public getFieldTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DocumentTransform>;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentTransform;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DocumentTransform;
					public static newBuilder(param0: com.google.firestore.v1.DocumentTransform): com.google.firestore.v1.DocumentTransform.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform;
					public getFieldTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform;
					public static getDefaultInstance(): com.google.firestore.v1.DocumentTransform;
				}
				export module DocumentTransform {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DocumentTransform,com.google.firestore.v1.DocumentTransform.Builder> implements com.google.firestore.v1.DocumentTransformOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.Builder>;
						public getFieldTransformsCount(): number;
						public getDocument(): string;
						public addFieldTransforms(param0: com.google.firestore.v1.DocumentTransform.FieldTransform.Builder): com.google.firestore.v1.DocumentTransform.Builder;
						public getDocumentBytes(): com.google.protobuf.ByteString;
						public addFieldTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.DocumentTransform.Builder;
						public getFieldTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
						public addFieldTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform.Builder): com.google.firestore.v1.DocumentTransform.Builder;
						public removeFieldTransforms(param0: number): com.google.firestore.v1.DocumentTransform.Builder;
						public getFieldTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public clearDocument(): com.google.firestore.v1.DocumentTransform.Builder;
						public setFieldTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.DocumentTransform.Builder;
						public setFieldTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform.Builder): com.google.firestore.v1.DocumentTransform.Builder;
						public addFieldTransforms(param0: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.DocumentTransform.Builder;
						public setDocument(param0: string): com.google.firestore.v1.DocumentTransform.Builder;
						public setDocumentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentTransform.Builder;
						public addAllFieldTransforms(param0: java.lang.Iterable<any>): com.google.firestore.v1.DocumentTransform.Builder;
						public clearFieldTransforms(): com.google.firestore.v1.DocumentTransform.Builder;
					}
					export class FieldTransform extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.DocumentTransform.FieldTransform,com.google.firestore.v1.DocumentTransform.FieldTransform.Builder> implements com.google.firestore.v1.DocumentTransform.FieldTransformOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.FieldTransform>;
						public static FIELD_PATH_FIELD_NUMBER: number;
						public static SET_TO_SERVER_VALUE_FIELD_NUMBER: number;
						public static INCREMENT_FIELD_NUMBER: number;
						public static MAXIMUM_FIELD_NUMBER: number;
						public static MINIMUM_FIELD_NUMBER: number;
						public static APPEND_MISSING_ELEMENTS_FIELD_NUMBER: number;
						public static REMOVE_ALL_FROM_ARRAY_FIELD_NUMBER: number;
						public getMinimum(): com.google.firestore.v1.Value;
						public getSetToServerValue(): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public static getDefaultInstance(): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public hasAppendMissingElements(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public getSetToServerValueValue(): number;
						public hasMaximum(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public getIncrement(): com.google.firestore.v1.Value;
						public getRemoveAllFromArray(): com.google.firestore.v1.ArrayValue;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public hasIncrement(): boolean;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public getFieldPathBytes(): com.google.protobuf.ByteString;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.DocumentTransform.FieldTransform>;
						public static newBuilder(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public getFieldPath(): string;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public hasMinimum(): boolean;
						public static newBuilder(param0: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
						public getMaximum(): com.google.firestore.v1.Value;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public getTransformTypeCase(): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
						public hasRemoveAllFromArray(): boolean;
						public getAppendMissingElements(): com.google.firestore.v1.ArrayValue;
					}
					export module FieldTransform {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.DocumentTransform.FieldTransform,com.google.firestore.v1.DocumentTransform.FieldTransform.Builder> implements com.google.firestore.v1.DocumentTransform.FieldTransformOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.FieldTransform.Builder>;
							public setIncrement(param0: com.google.firestore.v1.Value): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getMinimum(): com.google.firestore.v1.Value;
							public setMinimum(param0: com.google.firestore.v1.Value): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getTransformTypeCase(): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public clearIncrement(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getMaximum(): com.google.firestore.v1.Value;
							public clearSetToServerValue(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getFieldPathBytes(): com.google.protobuf.ByteString;
							public getRemoveAllFromArray(): com.google.firestore.v1.ArrayValue;
							public clearRemoveAllFromArray(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public hasMaximum(): boolean;
							public mergeIncrement(param0: com.google.firestore.v1.Value): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public clearFieldPath(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getIncrement(): com.google.firestore.v1.Value;
							public setMaximum(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getFieldPath(): string;
							public hasIncrement(): boolean;
							public mergeMaximum(param0: com.google.firestore.v1.Value): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public clearMaximum(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setRemoveAllFromArray(param0: com.google.firestore.v1.ArrayValue.Builder): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setIncrement(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public mergeAppendMissingElements(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setRemoveAllFromArray(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public clearTransformType(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public mergeMinimum(param0: com.google.firestore.v1.Value): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public hasRemoveAllFromArray(): boolean;
							public setFieldPathBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getAppendMissingElements(): com.google.firestore.v1.ArrayValue;
							public setSetToServerValueValue(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setMinimum(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setMaximum(param0: com.google.firestore.v1.Value): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setSetToServerValue(param0: com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public setAppendMissingElements(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public clearAppendMissingElements(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public hasMinimum(): boolean;
							public setAppendMissingElements(param0: com.google.firestore.v1.ArrayValue.Builder): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getSetToServerValue(): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							public clearMinimum(): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public hasAppendMissingElements(): boolean;
							public mergeRemoveAllFromArray(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
							public getSetToServerValueValue(): number;
							public setFieldPath(param0: string): com.google.firestore.v1.DocumentTransform.FieldTransform.Builder;
						}
						export class ServerValue extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue>;
							public static SERVER_VALUE_UNSPECIFIED: com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							public static REQUEST_TIME: com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							public static UNRECOGNIZED: com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							public static SERVER_VALUE_UNSPECIFIED_VALUE: number;
							public static REQUEST_TIME_VALUE: number;
							public static valueOf(param0: string): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							public static forNumber(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue>;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static values(): androidNative.Array<com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue>;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
						}
						export module ServerValue {
							export class ServerValueVerifier {
								public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue.ServerValueVerifier>;
								public isInRange(param0: number): boolean;
							}
						}
						export class TransformTypeCase {
							public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase>;
							public static SET_TO_SERVER_VALUE: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static INCREMENT: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static MAXIMUM: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static MINIMUM: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static APPEND_MISSING_ELEMENTS: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static REMOVE_ALL_FROM_ARRAY: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static TRANSFORMTYPE_NOT_SET: com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static valueOf(param0: string): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public getNumber(): number;
							public static forNumber(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
							public static values(): androidNative.Array<com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase>;
						}
					}
					export class FieldTransformOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.DocumentTransform.FieldTransformOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.DocumentTransform$FieldTransformOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFieldPath(): string;
							getFieldPathBytes(): com.google.protobuf.ByteString;
							getSetToServerValueValue(): number;
							getSetToServerValue(): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
							hasIncrement(): boolean;
							getIncrement(): com.google.firestore.v1.Value;
							hasMaximum(): boolean;
							getMaximum(): com.google.firestore.v1.Value;
							hasMinimum(): boolean;
							getMinimum(): com.google.firestore.v1.Value;
							hasAppendMissingElements(): boolean;
							getAppendMissingElements(): com.google.firestore.v1.ArrayValue;
							hasRemoveAllFromArray(): boolean;
							getRemoveAllFromArray(): com.google.firestore.v1.ArrayValue;
							getTransformTypeCase(): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
						});
						public constructor();
						public getMinimum(): com.google.firestore.v1.Value;
						public hasIncrement(): boolean;
						public getFieldPathBytes(): com.google.protobuf.ByteString;
						public getSetToServerValue(): com.google.firestore.v1.DocumentTransform.FieldTransform.ServerValue;
						public hasAppendMissingElements(): boolean;
						public getFieldPath(): string;
						public getSetToServerValueValue(): number;
						public hasMaximum(): boolean;
						public hasMinimum(): boolean;
						public getIncrement(): com.google.firestore.v1.Value;
						public getRemoveAllFromArray(): com.google.firestore.v1.ArrayValue;
						public getMaximum(): com.google.firestore.v1.Value;
						public hasRemoveAllFromArray(): boolean;
						public getTransformTypeCase(): com.google.firestore.v1.DocumentTransform.FieldTransform.TransformTypeCase;
						public getAppendMissingElements(): com.google.firestore.v1.ArrayValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class DocumentTransformOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.DocumentTransformOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.DocumentTransformOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDocument(): string;
						getDocumentBytes(): com.google.protobuf.ByteString;
						getFieldTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
						getFieldTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
						getFieldTransformsCount(): number;
					});
					public constructor();
					public getFieldTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
					public getDocumentBytes(): com.google.protobuf.ByteString;
					public getFieldTransformsCount(): number;
					public getDocument(): string;
					public getFieldTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ExistenceFilter extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ExistenceFilter,com.google.firestore.v1.ExistenceFilter.Builder> implements com.google.firestore.v1.ExistenceFilterOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ExistenceFilter>;
					public static TARGET_ID_FIELD_NUMBER: number;
					public static COUNT_FIELD_NUMBER: number;
					public getCount(): number;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ExistenceFilter>;
					public getTargetId(): number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ExistenceFilter;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ExistenceFilter;
					public static newBuilder(param0: com.google.firestore.v1.ExistenceFilter): com.google.firestore.v1.ExistenceFilter.Builder;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ExistenceFilter;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ExistenceFilter;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static getDefaultInstance(): com.google.firestore.v1.ExistenceFilter;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ExistenceFilter;
					public static newBuilder(): com.google.firestore.v1.ExistenceFilter.Builder;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ExistenceFilter;
				}
				export module ExistenceFilter {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ExistenceFilter,com.google.firestore.v1.ExistenceFilter.Builder> implements com.google.firestore.v1.ExistenceFilterOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ExistenceFilter.Builder>;
						public getTargetId(): number;
						public setTargetId(param0: number): com.google.firestore.v1.ExistenceFilter.Builder;
						public clearTargetId(): com.google.firestore.v1.ExistenceFilter.Builder;
						public clearCount(): com.google.firestore.v1.ExistenceFilter.Builder;
						public getCount(): number;
						public setCount(param0: number): com.google.firestore.v1.ExistenceFilter.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ExistenceFilterOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ExistenceFilterOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ExistenceFilterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTargetId(): number;
						getCount(): number;
					});
					public constructor();
					public getCount(): number;
					public getTargetId(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class FirestoreGrpc {
					public static class: java.lang.Class<com.google.firestore.v1.FirestoreGrpc>;
					public static SERVICE_NAME: string;
					public static getGetDocumentMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.GetDocumentRequest,com.google.firestore.v1.Document>;
					public static getCommitMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.CommitRequest,com.google.firestore.v1.CommitResponse>;
					public static newStub(param0: io.grpc.Channel): com.google.firestore.v1.FirestoreGrpc.FirestoreStub;
					public static getBatchGetDocumentsMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.BatchGetDocumentsRequest,com.google.firestore.v1.BatchGetDocumentsResponse>;
					public static getUpdateDocumentMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.UpdateDocumentRequest,com.google.firestore.v1.Document>;
					public static getRunQueryMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.RunQueryRequest,com.google.firestore.v1.RunQueryResponse>;
					public static getListenMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.ListenRequest,com.google.firestore.v1.ListenResponse>;
					public static newBlockingStub(param0: io.grpc.Channel): com.google.firestore.v1.FirestoreGrpc.FirestoreBlockingStub;
					public static getListDocumentsMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.ListDocumentsRequest,com.google.firestore.v1.ListDocumentsResponse>;
					public static getDeleteDocumentMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.DeleteDocumentRequest,com.google.protobuf.Empty>;
					public static getListCollectionIdsMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.ListCollectionIdsRequest,com.google.firestore.v1.ListCollectionIdsResponse>;
					public static getCreateDocumentMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.CreateDocumentRequest,com.google.firestore.v1.Document>;
					public static getRollbackMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.RollbackRequest,com.google.protobuf.Empty>;
					public static getServiceDescriptor(): io.grpc.ServiceDescriptor;
					public static newFutureStub(param0: io.grpc.Channel): com.google.firestore.v1.FirestoreGrpc.FirestoreFutureStub;
					public static getBeginTransactionMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.BeginTransactionRequest,com.google.firestore.v1.BeginTransactionResponse>;
					public static getWriteMethod(): io.grpc.MethodDescriptor<com.google.firestore.v1.WriteRequest,com.google.firestore.v1.WriteResponse>;
				}
				export module FirestoreGrpc {
					export class FirestoreBlockingStub extends io.grpc.stub.AbstractBlockingStub<com.google.firestore.v1.FirestoreGrpc.FirestoreBlockingStub> {
						public static class: java.lang.Class<com.google.firestore.v1.FirestoreGrpc.FirestoreBlockingStub>;
						public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.firestore.v1.FirestoreGrpc.FirestoreBlockingStub;
						public rollback(param0: com.google.firestore.v1.RollbackRequest): com.google.protobuf.Empty;
						public deleteDocument(param0: com.google.firestore.v1.DeleteDocumentRequest): com.google.protobuf.Empty;
						public listCollectionIds(param0: com.google.firestore.v1.ListCollectionIdsRequest): com.google.firestore.v1.ListCollectionIdsResponse;
						public updateDocument(param0: com.google.firestore.v1.UpdateDocumentRequest): com.google.firestore.v1.Document;
						public listDocuments(param0: com.google.firestore.v1.ListDocumentsRequest): com.google.firestore.v1.ListDocumentsResponse;
						public commit(param0: com.google.firestore.v1.CommitRequest): com.google.firestore.v1.CommitResponse;
						public getDocument(param0: com.google.firestore.v1.GetDocumentRequest): com.google.firestore.v1.Document;
						public createDocument(param0: com.google.firestore.v1.CreateDocumentRequest): com.google.firestore.v1.Document;
						public batchGetDocuments(param0: com.google.firestore.v1.BatchGetDocumentsRequest): java.util.Iterator<com.google.firestore.v1.BatchGetDocumentsResponse>;
						public beginTransaction(param0: com.google.firestore.v1.BeginTransactionRequest): com.google.firestore.v1.BeginTransactionResponse;
						public runQuery(param0: com.google.firestore.v1.RunQueryRequest): java.util.Iterator<com.google.firestore.v1.RunQueryResponse>;
					}
					export class FirestoreFutureStub extends io.grpc.stub.AbstractFutureStub<com.google.firestore.v1.FirestoreGrpc.FirestoreFutureStub> {
						public static class: java.lang.Class<com.google.firestore.v1.FirestoreGrpc.FirestoreFutureStub>;
						public deleteDocument(param0: com.google.firestore.v1.DeleteDocumentRequest): com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty>;
						public rollback(param0: com.google.firestore.v1.RollbackRequest): com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty>;
						public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.firestore.v1.FirestoreGrpc.FirestoreFutureStub;
						public commit(param0: com.google.firestore.v1.CommitRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.CommitResponse>;
						public createDocument(param0: com.google.firestore.v1.CreateDocumentRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.Document>;
						public getDocument(param0: com.google.firestore.v1.GetDocumentRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.Document>;
						public listCollectionIds(param0: com.google.firestore.v1.ListCollectionIdsRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.ListCollectionIdsResponse>;
						public updateDocument(param0: com.google.firestore.v1.UpdateDocumentRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.Document>;
						public listDocuments(param0: com.google.firestore.v1.ListDocumentsRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.ListDocumentsResponse>;
						public beginTransaction(param0: com.google.firestore.v1.BeginTransactionRequest): com.google.common.util.concurrent.ListenableFuture<com.google.firestore.v1.BeginTransactionResponse>;
					}
					export abstract class FirestoreImplBase {
						public static class: java.lang.Class<com.google.firestore.v1.FirestoreGrpc.FirestoreImplBase>;
						public updateDocument(param0: com.google.firestore.v1.UpdateDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.Document>): void;
						public runQuery(param0: com.google.firestore.v1.RunQueryRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.RunQueryResponse>): void;
						public constructor();
						public rollback(param0: com.google.firestore.v1.RollbackRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
						public bindService(): io.grpc.ServerServiceDefinition;
						public listDocuments(param0: com.google.firestore.v1.ListDocumentsRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.ListDocumentsResponse>): void;
						public createDocument(param0: com.google.firestore.v1.CreateDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.Document>): void;
						public beginTransaction(param0: com.google.firestore.v1.BeginTransactionRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.BeginTransactionResponse>): void;
						public write(param0: io.grpc.stub.StreamObserver<com.google.firestore.v1.WriteResponse>): io.grpc.stub.StreamObserver<com.google.firestore.v1.WriteRequest>;
						public deleteDocument(param0: com.google.firestore.v1.DeleteDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
						public listCollectionIds(param0: com.google.firestore.v1.ListCollectionIdsRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.ListCollectionIdsResponse>): void;
						public getDocument(param0: com.google.firestore.v1.GetDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.Document>): void;
						public batchGetDocuments(param0: com.google.firestore.v1.BatchGetDocumentsRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.BatchGetDocumentsResponse>): void;
						public listen(param0: io.grpc.stub.StreamObserver<com.google.firestore.v1.ListenResponse>): io.grpc.stub.StreamObserver<com.google.firestore.v1.ListenRequest>;
						public commit(param0: com.google.firestore.v1.CommitRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.CommitResponse>): void;
					}
					export class FirestoreStub extends io.grpc.stub.AbstractAsyncStub<com.google.firestore.v1.FirestoreGrpc.FirestoreStub> {
						public static class: java.lang.Class<com.google.firestore.v1.FirestoreGrpc.FirestoreStub>;
						public updateDocument(param0: com.google.firestore.v1.UpdateDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.Document>): void;
						public runQuery(param0: com.google.firestore.v1.RunQueryRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.RunQueryResponse>): void;
						public rollback(param0: com.google.firestore.v1.RollbackRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
						public listDocuments(param0: com.google.firestore.v1.ListDocumentsRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.ListDocumentsResponse>): void;
						public createDocument(param0: com.google.firestore.v1.CreateDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.Document>): void;
						public beginTransaction(param0: com.google.firestore.v1.BeginTransactionRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.BeginTransactionResponse>): void;
						public write(param0: io.grpc.stub.StreamObserver<com.google.firestore.v1.WriteResponse>): io.grpc.stub.StreamObserver<com.google.firestore.v1.WriteRequest>;
						public build(param0: io.grpc.Channel, param1: io.grpc.CallOptions): com.google.firestore.v1.FirestoreGrpc.FirestoreStub;
						public deleteDocument(param0: com.google.firestore.v1.DeleteDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.protobuf.Empty>): void;
						public listCollectionIds(param0: com.google.firestore.v1.ListCollectionIdsRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.ListCollectionIdsResponse>): void;
						public getDocument(param0: com.google.firestore.v1.GetDocumentRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.Document>): void;
						public batchGetDocuments(param0: com.google.firestore.v1.BatchGetDocumentsRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.BatchGetDocumentsResponse>): void;
						public listen(param0: io.grpc.stub.StreamObserver<com.google.firestore.v1.ListenResponse>): io.grpc.stub.StreamObserver<com.google.firestore.v1.ListenRequest>;
						public commit(param0: com.google.firestore.v1.CommitRequest, param1: io.grpc.stub.StreamObserver<com.google.firestore.v1.CommitResponse>): void;
					}
					export class MethodHandlers<Req, Resp>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.firestore.v1.FirestoreGrpc.MethodHandlers<any,any>>;
						public invoke(param0: io.grpc.stub.StreamObserver<Resp>): io.grpc.stub.StreamObserver<Req>;
						public invoke(param0: Req, param1: io.grpc.stub.StreamObserver<Resp>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class FirestoreProto {
					public static class: java.lang.Class<com.google.firestore.v1.FirestoreProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class GetDocumentRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.GetDocumentRequest,com.google.firestore.v1.GetDocumentRequest.Builder> implements com.google.firestore.v1.GetDocumentRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.GetDocumentRequest>;
					public static NAME_FIELD_NUMBER: number;
					public static MASK_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.GetDocumentRequest;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.GetDocumentRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.GetDocumentRequest;
					public static getDefaultInstance(): com.google.firestore.v1.GetDocumentRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.GetDocumentRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.GetDocumentRequest;
					public getConsistencySelectorCase(): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.GetDocumentRequest;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static newBuilder(param0: com.google.firestore.v1.GetDocumentRequest): com.google.firestore.v1.GetDocumentRequest.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.GetDocumentRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.GetDocumentRequest;
					public hasReadTime(): boolean;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.GetDocumentRequest;
					public static newBuilder(): com.google.firestore.v1.GetDocumentRequest.Builder;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public getNameBytes(): com.google.protobuf.ByteString;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.GetDocumentRequest;
					public hasMask(): boolean;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.GetDocumentRequest>;
					public getName(): string;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.GetDocumentRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.GetDocumentRequest;
				}
				export module GetDocumentRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.GetDocumentRequest,com.google.firestore.v1.GetDocumentRequest.Builder> implements com.google.firestore.v1.GetDocumentRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.GetDocumentRequest.Builder>;
						public setNameBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.GetDocumentRequest.Builder;
						public clearMask(): com.google.firestore.v1.GetDocumentRequest.Builder;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.GetDocumentRequest.Builder;
						public getName(): string;
						public getMask(): com.google.firestore.v1.DocumentMask;
						public hasReadTime(): boolean;
						public hasMask(): boolean;
						public clearName(): com.google.firestore.v1.GetDocumentRequest.Builder;
						public clearReadTime(): com.google.firestore.v1.GetDocumentRequest.Builder;
						public setMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.GetDocumentRequest.Builder;
						public mergeMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.GetDocumentRequest.Builder;
						public setMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.GetDocumentRequest.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.GetDocumentRequest.Builder;
						public setName(param0: string): com.google.firestore.v1.GetDocumentRequest.Builder;
						public clearTransaction(): com.google.firestore.v1.GetDocumentRequest.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.GetDocumentRequest.Builder;
						public clearConsistencySelector(): com.google.firestore.v1.GetDocumentRequest.Builder;
						public getConsistencySelectorCase(): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						public getNameBytes(): com.google.protobuf.ByteString;
						public getTransaction(): com.google.protobuf.ByteString;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.GetDocumentRequest.Builder;
					}
					export class ConsistencySelectorCase {
						public static class: java.lang.Class<com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase>;
						public static TRANSACTION: com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						public static READ_TIME: com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						public static CONSISTENCYSELECTOR_NOT_SET: com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						public static valueOf(param0: string): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						public static values(): androidNative.Array<com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase>;
						public static forNumber(param0: number): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
						public getNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class GetDocumentRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.GetDocumentRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.GetDocumentRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						getNameBytes(): com.google.protobuf.ByteString;
						hasMask(): boolean;
						getMask(): com.google.firestore.v1.DocumentMask;
						getTransaction(): com.google.protobuf.ByteString;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getConsistencySelectorCase(): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
					});
					public constructor();
					public getMask(): com.google.firestore.v1.DocumentMask;
					public hasMask(): boolean;
					public getName(): string;
					public getConsistencySelectorCase(): com.google.firestore.v1.GetDocumentRequest.ConsistencySelectorCase;
					public getTransaction(): com.google.protobuf.ByteString;
					public getNameBytes(): com.google.protobuf.ByteString;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListCollectionIdsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ListCollectionIdsRequest,com.google.firestore.v1.ListCollectionIdsRequest.Builder> implements com.google.firestore.v1.ListCollectionIdsRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ListCollectionIdsRequest>;
					public static PARENT_FIELD_NUMBER: number;
					public static PAGE_SIZE_FIELD_NUMBER: number;
					public static PAGE_TOKEN_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ListCollectionIdsRequest;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public getPageToken(): string;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsRequest;
					public static getDefaultInstance(): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ListCollectionIdsRequest;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getPageSize(): number;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsRequest;
					public getPageTokenBytes(): com.google.protobuf.ByteString;
					public static newBuilder(param0: com.google.firestore.v1.ListCollectionIdsRequest): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListCollectionIdsRequest;
					public static newBuilder(): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ListCollectionIdsRequest>;
				}
				export module ListCollectionIdsRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ListCollectionIdsRequest,com.google.firestore.v1.ListCollectionIdsRequest.Builder> implements com.google.firestore.v1.ListCollectionIdsRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ListCollectionIdsRequest.Builder>;
						public setParentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public clearPageSize(): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public getPageTokenBytes(): com.google.protobuf.ByteString;
						public clearParent(): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public clearPageToken(): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public setPageSize(param0: number): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public getParent(): string;
						public setParent(param0: string): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public getPageToken(): string;
						public setPageToken(param0: string): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
						public getParentBytes(): com.google.protobuf.ByteString;
						public getPageSize(): number;
						public setPageTokenBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListCollectionIdsRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListCollectionIdsRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ListCollectionIdsRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ListCollectionIdsRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParent(): string;
						getParentBytes(): com.google.protobuf.ByteString;
						getPageSize(): number;
						getPageToken(): string;
						getPageTokenBytes(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public getPageToken(): string;
					public getPageSize(): number;
					public getPageTokenBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListCollectionIdsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ListCollectionIdsResponse,com.google.firestore.v1.ListCollectionIdsResponse.Builder> implements com.google.firestore.v1.ListCollectionIdsResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ListCollectionIdsResponse>;
					public static COLLECTION_IDS_FIELD_NUMBER: number;
					public static NEXT_PAGE_TOKEN_FIELD_NUMBER: number;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ListCollectionIdsResponse>;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsResponse;
					public getNextPageTokenBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListCollectionIdsResponse;
					public getCollectionIdsCount(): number;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListCollectionIdsResponse;
					public getCollectionIdsBytes(param0: number): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ListCollectionIdsResponse;
					public static newBuilder(): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ListCollectionIdsResponse;
					public static newBuilder(param0: com.google.firestore.v1.ListCollectionIdsResponse): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getCollectionIdsList(): java.util.List<string>;
					public getCollectionIds(param0: number): string;
					public getNextPageToken(): string;
					public static getDefaultInstance(): com.google.firestore.v1.ListCollectionIdsResponse;
				}
				export module ListCollectionIdsResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ListCollectionIdsResponse,com.google.firestore.v1.ListCollectionIdsResponse.Builder> implements com.google.firestore.v1.ListCollectionIdsResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ListCollectionIdsResponse.Builder>;
						public clearNextPageToken(): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public getCollectionIdsBytes(param0: number): com.google.protobuf.ByteString;
						public getCollectionIds(param0: number): string;
						public setNextPageTokenBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public clearCollectionIds(): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public getCollectionIdsCount(): number;
						public addAllCollectionIds(param0: java.lang.Iterable<string>): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public getNextPageTokenBytes(): com.google.protobuf.ByteString;
						public addCollectionIds(param0: string): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public setCollectionIds(param0: number, param1: string): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public getCollectionIdsList(): java.util.List<string>;
						public getNextPageToken(): string;
						public addCollectionIdsBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
						public setNextPageToken(param0: string): com.google.firestore.v1.ListCollectionIdsResponse.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListCollectionIdsResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ListCollectionIdsResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ListCollectionIdsResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCollectionIdsList(): java.util.List<string>;
						getCollectionIdsCount(): number;
						getCollectionIds(param0: number): string;
						getCollectionIdsBytes(param0: number): com.google.protobuf.ByteString;
						getNextPageToken(): string;
						getNextPageTokenBytes(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getCollectionIdsBytes(param0: number): com.google.protobuf.ByteString;
					public getNextPageTokenBytes(): com.google.protobuf.ByteString;
					public getCollectionIdsList(): java.util.List<string>;
					public getCollectionIds(param0: number): string;
					public getNextPageToken(): string;
					public getCollectionIdsCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListDocumentsRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ListDocumentsRequest,com.google.firestore.v1.ListDocumentsRequest.Builder> implements com.google.firestore.v1.ListDocumentsRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsRequest>;
					public static PARENT_FIELD_NUMBER: number;
					public static COLLECTION_ID_FIELD_NUMBER: number;
					public static PAGE_SIZE_FIELD_NUMBER: number;
					public static PAGE_TOKEN_FIELD_NUMBER: number;
					public static ORDER_BY_FIELD_NUMBER: number;
					public static MASK_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static SHOW_MISSING_FIELD_NUMBER: number;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsRequest;
					public static newBuilder(): com.google.firestore.v1.ListDocumentsRequest.Builder;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ListDocumentsRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ListDocumentsRequest;
					public static getDefaultInstance(): com.google.firestore.v1.ListDocumentsRequest;
					public static newBuilder(param0: com.google.firestore.v1.ListDocumentsRequest): com.google.firestore.v1.ListDocumentsRequest.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsRequest;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public getConsistencySelectorCase(): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ListDocumentsRequest;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsRequest;
					public getOrderByBytes(): com.google.protobuf.ByteString;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getPageTokenBytes(): com.google.protobuf.ByteString;
					public hasReadTime(): boolean;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ListDocumentsRequest>;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ListDocumentsRequest;
					public getOrderBy(): string;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ListDocumentsRequest;
					public getCollectionIdBytes(): com.google.protobuf.ByteString;
					public getPageToken(): string;
					public hasMask(): boolean;
					public getCollectionId(): string;
					public getShowMissing(): boolean;
					public getPageSize(): number;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsRequest;
				}
				export module ListDocumentsRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ListDocumentsRequest,com.google.firestore.v1.ListDocumentsRequest.Builder> implements com.google.firestore.v1.ListDocumentsRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsRequest.Builder>;
						public mergeMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getConsistencySelectorCase(): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public clearConsistencySelector(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getCollectionId(): string;
						public clearShowMissing(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public setParent(param0: string): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getOrderByBytes(): com.google.protobuf.ByteString;
						public getParent(): string;
						public getMask(): com.google.firestore.v1.DocumentMask;
						public getShowMissing(): boolean;
						public setCollectionId(param0: string): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public setMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public setShowMissing(param0: boolean): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public clearOrderBy(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getParentBytes(): com.google.protobuf.ByteString;
						public clearCollectionId(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getPageSize(): number;
						public setPageToken(param0: string): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public clearPageToken(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getTransaction(): com.google.protobuf.ByteString;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getOrderBy(): string;
						public setMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getPageTokenBytes(): com.google.protobuf.ByteString;
						public setPageTokenBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public setOrderByBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public clearParent(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public hasReadTime(): boolean;
						public clearReadTime(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public setPageSize(param0: number): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public setOrderBy(param0: string): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public hasMask(): boolean;
						public setCollectionIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getPageToken(): string;
						public clearTransaction(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public getCollectionIdBytes(): com.google.protobuf.ByteString;
						public setParentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public clearPageSize(): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.ListDocumentsRequest.Builder;
						public clearMask(): com.google.firestore.v1.ListDocumentsRequest.Builder;
					}
					export class ConsistencySelectorCase {
						public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase>;
						public static TRANSACTION: com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
						public static READ_TIME: com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
						public static CONSISTENCYSELECTOR_NOT_SET: com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
						public static valueOf(param0: string): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
						public static forNumber(param0: number): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
						public getNumber(): number;
						public static values(): androidNative.Array<com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase>;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListDocumentsRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ListDocumentsRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParent(): string;
						getParentBytes(): com.google.protobuf.ByteString;
						getCollectionId(): string;
						getCollectionIdBytes(): com.google.protobuf.ByteString;
						getPageSize(): number;
						getPageToken(): string;
						getPageTokenBytes(): com.google.protobuf.ByteString;
						getOrderBy(): string;
						getOrderByBytes(): com.google.protobuf.ByteString;
						hasMask(): boolean;
						getMask(): com.google.firestore.v1.DocumentMask;
						getTransaction(): com.google.protobuf.ByteString;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getShowMissing(): boolean;
						getConsistencySelectorCase(): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
					});
					public constructor();
					public getMask(): com.google.firestore.v1.DocumentMask;
					public getOrderBy(): string;
					public getTransaction(): com.google.protobuf.ByteString;
					public getCollectionIdBytes(): com.google.protobuf.ByteString;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public getPageToken(): string;
					public hasMask(): boolean;
					public getConsistencySelectorCase(): com.google.firestore.v1.ListDocumentsRequest.ConsistencySelectorCase;
					public getCollectionId(): string;
					public getOrderByBytes(): com.google.protobuf.ByteString;
					public getShowMissing(): boolean;
					public getPageSize(): number;
					public getReadTime(): com.google.protobuf.Timestamp;
					public getPageTokenBytes(): com.google.protobuf.ByteString;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListDocumentsResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ListDocumentsResponse,com.google.firestore.v1.ListDocumentsResponse.Builder> implements com.google.firestore.v1.ListDocumentsResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsResponse>;
					public static DOCUMENTS_FIELD_NUMBER: number;
					public static NEXT_PAGE_TOKEN_FIELD_NUMBER: number;
					public static getDefaultInstance(): com.google.firestore.v1.ListDocumentsResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsResponse;
					public static newBuilder(): com.google.firestore.v1.ListDocumentsResponse.Builder;
					public getDocumentsOrBuilderList(): java.util.List<any>;
					public getDocuments(param0: number): com.google.firestore.v1.Document;
					public getNextPageTokenBytes(): com.google.protobuf.ByteString;
					public getDocumentsList(): java.util.List<com.google.firestore.v1.Document>;
					public static newBuilder(param0: com.google.firestore.v1.ListDocumentsResponse): com.google.firestore.v1.ListDocumentsResponse.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsResponse;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ListDocumentsResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ListDocumentsResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ListDocumentsResponse>;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsResponse;
					public getDocumentsOrBuilder(param0: number): com.google.firestore.v1.DocumentOrBuilder;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsResponse;
					public getDocumentsCount(): number;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ListDocumentsResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsResponse;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ListDocumentsResponse;
					public getNextPageToken(): string;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ListDocumentsResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsResponse;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListDocumentsResponse;
				}
				export module ListDocumentsResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ListDocumentsResponse,com.google.firestore.v1.ListDocumentsResponse.Builder> implements com.google.firestore.v1.ListDocumentsResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsResponse.Builder>;
						public addAllDocuments(param0: java.lang.Iterable<any>): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public setDocuments(param0: number, param1: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public getDocumentsCount(): number;
						public getDocumentsList(): java.util.List<com.google.firestore.v1.Document>;
						public getDocuments(param0: number): com.google.firestore.v1.Document;
						public clearDocuments(): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public removeDocuments(param0: number): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public setNextPageToken(param0: string): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public setNextPageTokenBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public setDocuments(param0: number, param1: com.google.firestore.v1.Document): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public addDocuments(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public getNextPageTokenBytes(): com.google.protobuf.ByteString;
						public addDocuments(param0: number, param1: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public clearNextPageToken(): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public addDocuments(param0: com.google.firestore.v1.Document): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public addDocuments(param0: number, param1: com.google.firestore.v1.Document): com.google.firestore.v1.ListDocumentsResponse.Builder;
						public getNextPageToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListDocumentsResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ListDocumentsResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ListDocumentsResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDocumentsList(): java.util.List<com.google.firestore.v1.Document>;
						getDocuments(param0: number): com.google.firestore.v1.Document;
						getDocumentsCount(): number;
						getNextPageToken(): string;
						getNextPageTokenBytes(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getDocuments(param0: number): com.google.firestore.v1.Document;
					public getNextPageTokenBytes(): com.google.protobuf.ByteString;
					public getDocumentsList(): java.util.List<com.google.firestore.v1.Document>;
					public getDocumentsCount(): number;
					public getNextPageToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListenRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ListenRequest,com.google.firestore.v1.ListenRequest.Builder> implements com.google.firestore.v1.ListenRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ListenRequest>;
					public static DATABASE_FIELD_NUMBER: number;
					public static ADD_TARGET_FIELD_NUMBER: number;
					public static REMOVE_TARGET_FIELD_NUMBER: number;
					public static LABELS_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListenRequest;
					public getAddTarget(): com.google.firestore.v1.Target;
					public getRemoveTarget(): number;
					public getLabelsOrDefault(param0: string, param1: string): string;
					public getLabelsMap(): java.util.Map<string,string>;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenRequest;
					public getDatabase(): string;
					public static newBuilder(param0: com.google.firestore.v1.ListenRequest): com.google.firestore.v1.ListenRequest.Builder;
					public getLabelsOrThrow(param0: string): string;
					public getLabelsCount(): number;
					public containsLabels(param0: string): boolean;
					public getTargetChangeCase(): com.google.firestore.v1.ListenRequest.TargetChangeCase;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenRequest;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					/** @deprecated */
					public getLabels(): java.util.Map<string,string>;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ListenRequest;
					public static getDefaultInstance(): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenRequest;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ListenRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ListenRequest;
					public hasAddTarget(): boolean;
					public static newBuilder(): com.google.firestore.v1.ListenRequest.Builder;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ListenRequest>;
				}
				export module ListenRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ListenRequest,com.google.firestore.v1.ListenRequest.Builder> implements com.google.firestore.v1.ListenRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ListenRequest.Builder>;
						public getRemoveTarget(): number;
						public setRemoveTarget(param0: number): com.google.firestore.v1.ListenRequest.Builder;
						public setAddTarget(param0: com.google.firestore.v1.Target): com.google.firestore.v1.ListenRequest.Builder;
						public hasAddTarget(): boolean;
						public clearAddTarget(): com.google.firestore.v1.ListenRequest.Builder;
						public clearDatabase(): com.google.firestore.v1.ListenRequest.Builder;
						public getLabelsOrThrow(param0: string): string;
						public putAllLabels(param0: java.util.Map<string,string>): com.google.firestore.v1.ListenRequest.Builder;
						public clearTargetChange(): com.google.firestore.v1.ListenRequest.Builder;
						public getAddTarget(): com.google.firestore.v1.Target;
						public getLabelsOrDefault(param0: string, param1: string): string;
						public getTargetChangeCase(): com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public setAddTarget(param0: com.google.firestore.v1.Target.Builder): com.google.firestore.v1.ListenRequest.Builder;
						public setDatabase(param0: string): com.google.firestore.v1.ListenRequest.Builder;
						public putLabels(param0: string, param1: string): com.google.firestore.v1.ListenRequest.Builder;
						public getDatabase(): string;
						public getLabelsCount(): number;
						public clearLabels(): com.google.firestore.v1.ListenRequest.Builder;
						public getDatabaseBytes(): com.google.protobuf.ByteString;
						public setDatabaseBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListenRequest.Builder;
						public removeLabels(param0: string): com.google.firestore.v1.ListenRequest.Builder;
						/** @deprecated */
						public getLabels(): java.util.Map<string,string>;
						public mergeAddTarget(param0: com.google.firestore.v1.Target): com.google.firestore.v1.ListenRequest.Builder;
						public getLabelsMap(): java.util.Map<string,string>;
						public clearRemoveTarget(): com.google.firestore.v1.ListenRequest.Builder;
						public containsLabels(param0: string): boolean;
					}
					export class LabelsDefaultEntryHolder {
						public static class: java.lang.Class<com.google.firestore.v1.ListenRequest.LabelsDefaultEntryHolder>;
					}
					export class TargetChangeCase {
						public static class: java.lang.Class<com.google.firestore.v1.ListenRequest.TargetChangeCase>;
						public static ADD_TARGET: com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public static REMOVE_TARGET: com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public static TARGETCHANGE_NOT_SET: com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public static valueOf(param0: string): com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public static forNumber(param0: number): com.google.firestore.v1.ListenRequest.TargetChangeCase;
						public static values(): androidNative.Array<com.google.firestore.v1.ListenRequest.TargetChangeCase>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListenRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ListenRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ListenRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDatabase(): string;
						getDatabaseBytes(): com.google.protobuf.ByteString;
						hasAddTarget(): boolean;
						getAddTarget(): com.google.firestore.v1.Target;
						getRemoveTarget(): number;
						getLabelsCount(): number;
						containsLabels(param0: string): boolean;
						getLabels(): java.util.Map<string,string>;
						getLabelsMap(): java.util.Map<string,string>;
						getLabelsOrDefault(param0: string, param1: string): string;
						getLabelsOrThrow(param0: string): string;
						getTargetChangeCase(): com.google.firestore.v1.ListenRequest.TargetChangeCase;
					});
					public constructor();
					public getDatabase(): string;
					public hasAddTarget(): boolean;
					public getAddTarget(): com.google.firestore.v1.Target;
					public getRemoveTarget(): number;
					public getLabelsOrDefault(param0: string, param1: string): string;
					public getLabelsOrThrow(param0: string): string;
					public getLabelsCount(): number;
					public containsLabels(param0: string): boolean;
					public getTargetChangeCase(): com.google.firestore.v1.ListenRequest.TargetChangeCase;
					public getLabelsMap(): java.util.Map<string,string>;
					/** @deprecated */
					public getLabels(): java.util.Map<string,string>;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListenResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.ListenResponse,com.google.firestore.v1.ListenResponse.Builder> implements com.google.firestore.v1.ListenResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.ListenResponse>;
					public static TARGET_CHANGE_FIELD_NUMBER: number;
					public static DOCUMENT_CHANGE_FIELD_NUMBER: number;
					public static DOCUMENT_DELETE_FIELD_NUMBER: number;
					public static DOCUMENT_REMOVE_FIELD_NUMBER: number;
					public static FILTER_FIELD_NUMBER: number;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.ListenResponse;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.ListenResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.ListenResponse;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenResponse;
					public hasFilter(): boolean;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenResponse;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenResponse;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.ListenResponse;
					public static getDefaultInstance(): com.google.firestore.v1.ListenResponse;
					public hasTargetChange(): boolean;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.ListenResponse;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenResponse;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasDocumentChange(): boolean;
					public static newBuilder(param0: com.google.firestore.v1.ListenResponse): com.google.firestore.v1.ListenResponse.Builder;
					public getDocumentRemove(): com.google.firestore.v1.DocumentRemove;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.ListenResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.ListenResponse>;
					public getTargetChange(): com.google.firestore.v1.TargetChange;
					public getDocumentChange(): com.google.firestore.v1.DocumentChange;
					public getResponseTypeCase(): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
					public hasDocumentRemove(): boolean;
					public getFilter(): com.google.firestore.v1.ExistenceFilter;
					public static newBuilder(): com.google.firestore.v1.ListenResponse.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.ListenResponse;
					public getDocumentDelete(): com.google.firestore.v1.DocumentDelete;
					public hasDocumentDelete(): boolean;
				}
				export module ListenResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.ListenResponse,com.google.firestore.v1.ListenResponse.Builder> implements com.google.firestore.v1.ListenResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.ListenResponse.Builder>;
						public hasTargetChange(): boolean;
						public setTargetChange(param0: com.google.firestore.v1.TargetChange): com.google.firestore.v1.ListenResponse.Builder;
						public clearDocumentChange(): com.google.firestore.v1.ListenResponse.Builder;
						public clearFilter(): com.google.firestore.v1.ListenResponse.Builder;
						public mergeDocumentDelete(param0: com.google.firestore.v1.DocumentDelete): com.google.firestore.v1.ListenResponse.Builder;
						public mergeDocumentChange(param0: com.google.firestore.v1.DocumentChange): com.google.firestore.v1.ListenResponse.Builder;
						public hasFilter(): boolean;
						public getDocumentChange(): com.google.firestore.v1.DocumentChange;
						public mergeDocumentRemove(param0: com.google.firestore.v1.DocumentRemove): com.google.firestore.v1.ListenResponse.Builder;
						public getDocumentRemove(): com.google.firestore.v1.DocumentRemove;
						public clearDocumentDelete(): com.google.firestore.v1.ListenResponse.Builder;
						public clearTargetChange(): com.google.firestore.v1.ListenResponse.Builder;
						public setFilter(param0: com.google.firestore.v1.ExistenceFilter.Builder): com.google.firestore.v1.ListenResponse.Builder;
						public getResponseTypeCase(): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public clearResponseType(): com.google.firestore.v1.ListenResponse.Builder;
						public clearDocumentRemove(): com.google.firestore.v1.ListenResponse.Builder;
						public setTargetChange(param0: com.google.firestore.v1.TargetChange.Builder): com.google.firestore.v1.ListenResponse.Builder;
						public hasDocumentDelete(): boolean;
						public setDocumentChange(param0: com.google.firestore.v1.DocumentChange.Builder): com.google.firestore.v1.ListenResponse.Builder;
						public hasDocumentRemove(): boolean;
						public setDocumentRemove(param0: com.google.firestore.v1.DocumentRemove): com.google.firestore.v1.ListenResponse.Builder;
						public getFilter(): com.google.firestore.v1.ExistenceFilter;
						public setDocumentDelete(param0: com.google.firestore.v1.DocumentDelete): com.google.firestore.v1.ListenResponse.Builder;
						public getDocumentDelete(): com.google.firestore.v1.DocumentDelete;
						public setDocumentDelete(param0: com.google.firestore.v1.DocumentDelete.Builder): com.google.firestore.v1.ListenResponse.Builder;
						public hasDocumentChange(): boolean;
						public setDocumentChange(param0: com.google.firestore.v1.DocumentChange): com.google.firestore.v1.ListenResponse.Builder;
						public getTargetChange(): com.google.firestore.v1.TargetChange;
						public mergeTargetChange(param0: com.google.firestore.v1.TargetChange): com.google.firestore.v1.ListenResponse.Builder;
						public setDocumentRemove(param0: com.google.firestore.v1.DocumentRemove.Builder): com.google.firestore.v1.ListenResponse.Builder;
						public setFilter(param0: com.google.firestore.v1.ExistenceFilter): com.google.firestore.v1.ListenResponse.Builder;
						public mergeFilter(param0: com.google.firestore.v1.ExistenceFilter): com.google.firestore.v1.ListenResponse.Builder;
					}
					export class ResponseTypeCase {
						public static class: java.lang.Class<com.google.firestore.v1.ListenResponse.ResponseTypeCase>;
						public static TARGET_CHANGE: com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static DOCUMENT_CHANGE: com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static DOCUMENT_DELETE: com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static DOCUMENT_REMOVE: com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static FILTER: com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static RESPONSETYPE_NOT_SET: com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static forNumber(param0: number): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public static values(): androidNative.Array<com.google.firestore.v1.ListenResponse.ResponseTypeCase>;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ListenResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ListenResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ListenResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasTargetChange(): boolean;
						getTargetChange(): com.google.firestore.v1.TargetChange;
						hasDocumentChange(): boolean;
						getDocumentChange(): com.google.firestore.v1.DocumentChange;
						hasDocumentDelete(): boolean;
						getDocumentDelete(): com.google.firestore.v1.DocumentDelete;
						hasDocumentRemove(): boolean;
						getDocumentRemove(): com.google.firestore.v1.DocumentRemove;
						hasFilter(): boolean;
						getFilter(): com.google.firestore.v1.ExistenceFilter;
						getResponseTypeCase(): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
					});
					public constructor();
					public getTargetChange(): com.google.firestore.v1.TargetChange;
					public getFilter(): com.google.firestore.v1.ExistenceFilter;
					public hasTargetChange(): boolean;
					public hasFilter(): boolean;
					public hasDocumentChange(): boolean;
					public getDocumentChange(): com.google.firestore.v1.DocumentChange;
					public getDocumentDelete(): com.google.firestore.v1.DocumentDelete;
					public hasDocumentDelete(): boolean;
					public getDocumentRemove(): com.google.firestore.v1.DocumentRemove;
					public getResponseTypeCase(): com.google.firestore.v1.ListenResponse.ResponseTypeCase;
					public hasDocumentRemove(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class MapValue extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.MapValue,com.google.firestore.v1.MapValue.Builder> implements com.google.firestore.v1.MapValueOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.MapValue>;
					public static FIELDS_FIELD_NUMBER: number;
					public getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.MapValue;
					public getFieldsCount(): number;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.MapValue;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.MapValue;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.MapValue;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.MapValue;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.MapValue;
					public containsFields(param0: string): boolean;
					public static newBuilder(param0: com.google.firestore.v1.MapValue): com.google.firestore.v1.MapValue.Builder;
					/** @deprecated */
					public getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.MapValue;
					public static getDefaultInstance(): com.google.firestore.v1.MapValue;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.MapValue;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.MapValue;
					public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.MapValue;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.MapValue>;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static newBuilder(): com.google.firestore.v1.MapValue.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.MapValue;
					public getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.MapValue;
				}
				export module MapValue {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.MapValue,com.google.firestore.v1.MapValue.Builder> implements com.google.firestore.v1.MapValueOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.MapValue.Builder>;
						public containsFields(param0: string): boolean;
						/** @deprecated */
						public getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
						public getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
						public getFieldsCount(): number;
						public clearFields(): com.google.firestore.v1.MapValue.Builder;
						public getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						public putAllFields(param0: java.util.Map<string,com.google.firestore.v1.Value>): com.google.firestore.v1.MapValue.Builder;
						public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
						public putFields(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.MapValue.Builder;
						public removeFields(param0: string): com.google.firestore.v1.MapValue.Builder;
					}
					export class FieldsDefaultEntryHolder {
						public static class: java.lang.Class<com.google.firestore.v1.MapValue.FieldsDefaultEntryHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class MapValueOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.MapValueOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.MapValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFieldsCount(): number;
						containsFields(param0: string): boolean;
						getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
						getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
						getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
						getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
					});
					public constructor();
					public getFieldsOrDefault(param0: string, param1: com.google.firestore.v1.Value): com.google.firestore.v1.Value;
					public getFieldsCount(): number;
					public getFieldsMap(): java.util.Map<string,com.google.firestore.v1.Value>;
					public containsFields(param0: string): boolean;
					public getFieldsOrThrow(param0: string): com.google.firestore.v1.Value;
					/** @deprecated */
					public getFields(): java.util.Map<string,com.google.firestore.v1.Value>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class Precondition extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Precondition,com.google.firestore.v1.Precondition.Builder> implements com.google.firestore.v1.PreconditionOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.Precondition>;
					public static EXISTS_FIELD_NUMBER: number;
					public static UPDATE_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Precondition;
					public hasUpdateTime(): boolean;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Precondition;
					public static getDefaultInstance(): com.google.firestore.v1.Precondition;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Precondition>;
					public getUpdateTime(): com.google.protobuf.Timestamp;
					public static newBuilder(): com.google.firestore.v1.Precondition.Builder;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Precondition;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Precondition;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Precondition;
					public static newBuilder(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.Precondition.Builder;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getExists(): boolean;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Precondition;
					public getConditionTypeCase(): com.google.firestore.v1.Precondition.ConditionTypeCase;
				}
				export module Precondition {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Precondition,com.google.firestore.v1.Precondition.Builder> implements com.google.firestore.v1.PreconditionOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Precondition.Builder>;
						public clearExists(): com.google.firestore.v1.Precondition.Builder;
						public clearConditionType(): com.google.firestore.v1.Precondition.Builder;
						public getExists(): boolean;
						public setExists(param0: boolean): com.google.firestore.v1.Precondition.Builder;
						public setUpdateTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.Precondition.Builder;
						public clearUpdateTime(): com.google.firestore.v1.Precondition.Builder;
						public setUpdateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Precondition.Builder;
						public mergeUpdateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Precondition.Builder;
						public getUpdateTime(): com.google.protobuf.Timestamp;
						public hasUpdateTime(): boolean;
						public getConditionTypeCase(): com.google.firestore.v1.Precondition.ConditionTypeCase;
					}
					export class ConditionTypeCase {
						public static class: java.lang.Class<com.google.firestore.v1.Precondition.ConditionTypeCase>;
						public static EXISTS: com.google.firestore.v1.Precondition.ConditionTypeCase;
						public static UPDATE_TIME: com.google.firestore.v1.Precondition.ConditionTypeCase;
						public static CONDITIONTYPE_NOT_SET: com.google.firestore.v1.Precondition.ConditionTypeCase;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.Precondition.ConditionTypeCase;
						public static valueOf(param0: string): com.google.firestore.v1.Precondition.ConditionTypeCase;
						public static forNumber(param0: number): com.google.firestore.v1.Precondition.ConditionTypeCase;
						public static values(): androidNative.Array<com.google.firestore.v1.Precondition.ConditionTypeCase>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class PreconditionOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.PreconditionOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.PreconditionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExists(): boolean;
						hasUpdateTime(): boolean;
						getUpdateTime(): com.google.protobuf.Timestamp;
						getConditionTypeCase(): com.google.firestore.v1.Precondition.ConditionTypeCase;
					});
					public constructor();
					public getUpdateTime(): com.google.protobuf.Timestamp;
					public getExists(): boolean;
					public hasUpdateTime(): boolean;
					public getConditionTypeCase(): com.google.firestore.v1.Precondition.ConditionTypeCase;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class QueryProto {
					public static class: java.lang.Class<com.google.firestore.v1.QueryProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class RollbackRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.RollbackRequest,com.google.firestore.v1.RollbackRequest.Builder> implements com.google.firestore.v1.RollbackRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.RollbackRequest>;
					public static DATABASE_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RollbackRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.RollbackRequest;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RollbackRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.RollbackRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RollbackRequest;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.RollbackRequest;
					public static newBuilder(param0: com.google.firestore.v1.RollbackRequest): com.google.firestore.v1.RollbackRequest.Builder;
					public getDatabase(): string;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RollbackRequest;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RollbackRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RollbackRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RollbackRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.RollbackRequest>;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.RollbackRequest;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static getDefaultInstance(): com.google.firestore.v1.RollbackRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.RollbackRequest;
					public static newBuilder(): com.google.firestore.v1.RollbackRequest.Builder;
				}
				export module RollbackRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.RollbackRequest,com.google.firestore.v1.RollbackRequest.Builder> implements com.google.firestore.v1.RollbackRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.RollbackRequest.Builder>;
						public getDatabaseBytes(): com.google.protobuf.ByteString;
						public setDatabaseBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RollbackRequest.Builder;
						public getDatabase(): string;
						public clearTransaction(): com.google.firestore.v1.RollbackRequest.Builder;
						public setDatabase(param0: string): com.google.firestore.v1.RollbackRequest.Builder;
						public getTransaction(): com.google.protobuf.ByteString;
						public clearDatabase(): com.google.firestore.v1.RollbackRequest.Builder;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RollbackRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class RollbackRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.RollbackRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.RollbackRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDatabase(): string;
						getDatabaseBytes(): com.google.protobuf.ByteString;
						getTransaction(): com.google.protobuf.ByteString;
					});
					public constructor();
					public getDatabase(): string;
					public getTransaction(): com.google.protobuf.ByteString;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class RunQueryRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.RunQueryRequest,com.google.firestore.v1.RunQueryRequest.Builder> implements com.google.firestore.v1.RunQueryRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.RunQueryRequest>;
					public static PARENT_FIELD_NUMBER: number;
					public static STRUCTURED_QUERY_FIELD_NUMBER: number;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static NEW_TRANSACTION_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public getQueryTypeCase(): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.RunQueryRequest;
					public static newBuilder(): com.google.firestore.v1.RunQueryRequest.Builder;
					public hasNewTransaction(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryRequest;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public getNewTransaction(): com.google.firestore.v1.TransactionOptions;
					public hasStructuredQuery(): boolean;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryRequest;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryRequest;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.RunQueryRequest;
					public hasReadTime(): boolean;
					public static newBuilder(param0: com.google.firestore.v1.RunQueryRequest): com.google.firestore.v1.RunQueryRequest.Builder;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.RunQueryRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryRequest;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.RunQueryRequest>;
					public static getDefaultInstance(): com.google.firestore.v1.RunQueryRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.RunQueryRequest;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryRequest;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.RunQueryRequest;
					public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
					public getReadTime(): com.google.protobuf.Timestamp;
					public getConsistencySelectorCase(): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RunQueryRequest;
				}
				export module RunQueryRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.RunQueryRequest,com.google.firestore.v1.RunQueryRequest.Builder> implements com.google.firestore.v1.RunQueryRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.RunQueryRequest.Builder>;
						public getConsistencySelectorCase(): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public hasNewTransaction(): boolean;
						public setStructuredQuery(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.v1.RunQueryRequest.Builder;
						public setNewTransaction(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.RunQueryRequest.Builder;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RunQueryRequest.Builder;
						public getParent(): string;
						public setParent(param0: string): com.google.firestore.v1.RunQueryRequest.Builder;
						public hasStructuredQuery(): boolean;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.RunQueryRequest.Builder;
						public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
						public setStructuredQuery(param0: com.google.firestore.v1.StructuredQuery.Builder): com.google.firestore.v1.RunQueryRequest.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public getParentBytes(): com.google.protobuf.ByteString;
						public getNewTransaction(): com.google.firestore.v1.TransactionOptions;
						public clearNewTransaction(): com.google.firestore.v1.RunQueryRequest.Builder;
						public setNewTransaction(param0: com.google.firestore.v1.TransactionOptions.Builder): com.google.firestore.v1.RunQueryRequest.Builder;
						public clearConsistencySelector(): com.google.firestore.v1.RunQueryRequest.Builder;
						public getTransaction(): com.google.protobuf.ByteString;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.RunQueryRequest.Builder;
						public clearParent(): com.google.firestore.v1.RunQueryRequest.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.RunQueryRequest.Builder;
						public setParentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RunQueryRequest.Builder;
						public clearTransaction(): com.google.firestore.v1.RunQueryRequest.Builder;
						public hasReadTime(): boolean;
						public clearReadTime(): com.google.firestore.v1.RunQueryRequest.Builder;
						public clearQueryType(): com.google.firestore.v1.RunQueryRequest.Builder;
						public clearStructuredQuery(): com.google.firestore.v1.RunQueryRequest.Builder;
						public mergeNewTransaction(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.RunQueryRequest.Builder;
						public getQueryTypeCase(): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						public mergeStructuredQuery(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.v1.RunQueryRequest.Builder;
					}
					export class ConsistencySelectorCase {
						public static class: java.lang.Class<com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase>;
						public static TRANSACTION: com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public static NEW_TRANSACTION: com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public static READ_TIME: com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public static CONSISTENCYSELECTOR_NOT_SET: com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public static values(): androidNative.Array<com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase>;
						public static forNumber(param0: number): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public static valueOf(param0: string): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
						public getNumber(): number;
					}
					export class QueryTypeCase {
						public static class: java.lang.Class<com.google.firestore.v1.RunQueryRequest.QueryTypeCase>;
						public static STRUCTURED_QUERY: com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						public static QUERYTYPE_NOT_SET: com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						public static forNumber(param0: number): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						public static values(): androidNative.Array<com.google.firestore.v1.RunQueryRequest.QueryTypeCase>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class RunQueryRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.RunQueryRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.RunQueryRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParent(): string;
						getParentBytes(): com.google.protobuf.ByteString;
						hasStructuredQuery(): boolean;
						getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
						getTransaction(): com.google.protobuf.ByteString;
						hasNewTransaction(): boolean;
						getNewTransaction(): com.google.firestore.v1.TransactionOptions;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getQueryTypeCase(): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
						getConsistencySelectorCase(): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
					});
					public constructor();
					public getQueryTypeCase(): com.google.firestore.v1.RunQueryRequest.QueryTypeCase;
					public getParent(): string;
					public getParentBytes(): com.google.protobuf.ByteString;
					public getNewTransaction(): com.google.firestore.v1.TransactionOptions;
					public hasStructuredQuery(): boolean;
					public getTransaction(): com.google.protobuf.ByteString;
					public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
					public getReadTime(): com.google.protobuf.Timestamp;
					public getConsistencySelectorCase(): com.google.firestore.v1.RunQueryRequest.ConsistencySelectorCase;
					public hasNewTransaction(): boolean;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class RunQueryResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.RunQueryResponse,com.google.firestore.v1.RunQueryResponse.Builder> implements com.google.firestore.v1.RunQueryResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.RunQueryResponse>;
					public static TRANSACTION_FIELD_NUMBER: number;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static SKIPPED_RESULTS_FIELD_NUMBER: number;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.RunQueryResponse;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.RunQueryResponse;
					public getTransaction(): com.google.protobuf.ByteString;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryResponse;
					public static getDefaultInstance(): com.google.firestore.v1.RunQueryResponse;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryResponse;
					public hasDocument(): boolean;
					public static newBuilder(param0: com.google.firestore.v1.RunQueryResponse): com.google.firestore.v1.RunQueryResponse.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.RunQueryResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryResponse;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.RunQueryResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RunQueryResponse;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getDocument(): com.google.firestore.v1.Document;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.RunQueryResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.RunQueryResponse>;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryResponse;
					public static newBuilder(): com.google.firestore.v1.RunQueryResponse.Builder;
					public hasReadTime(): boolean;
					public getSkippedResults(): number;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.RunQueryResponse;
				}
				export module RunQueryResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.RunQueryResponse,com.google.firestore.v1.RunQueryResponse.Builder> implements com.google.firestore.v1.RunQueryResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.RunQueryResponse.Builder>;
						public getDocument(): com.google.firestore.v1.Document;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.RunQueryResponse.Builder;
						public clearReadTime(): com.google.firestore.v1.RunQueryResponse.Builder;
						public setTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.RunQueryResponse.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.RunQueryResponse.Builder;
						public getSkippedResults(): number;
						public setDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.RunQueryResponse.Builder;
						public clearTransaction(): com.google.firestore.v1.RunQueryResponse.Builder;
						public clearDocument(): com.google.firestore.v1.RunQueryResponse.Builder;
						public hasReadTime(): boolean;
						public getReadTime(): com.google.protobuf.Timestamp;
						public setSkippedResults(param0: number): com.google.firestore.v1.RunQueryResponse.Builder;
						public setDocument(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.RunQueryResponse.Builder;
						public mergeDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.RunQueryResponse.Builder;
						public getTransaction(): com.google.protobuf.ByteString;
						public hasDocument(): boolean;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.RunQueryResponse.Builder;
						public clearSkippedResults(): com.google.firestore.v1.RunQueryResponse.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class RunQueryResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.RunQueryResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.RunQueryResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTransaction(): com.google.protobuf.ByteString;
						hasDocument(): boolean;
						getDocument(): com.google.firestore.v1.Document;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getSkippedResults(): number;
					});
					public constructor();
					public getTransaction(): com.google.protobuf.ByteString;
					public getDocument(): com.google.firestore.v1.Document;
					public getReadTime(): com.google.protobuf.Timestamp;
					public hasDocument(): boolean;
					public hasReadTime(): boolean;
					public getSkippedResults(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class StructuredQuery extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery,com.google.firestore.v1.StructuredQuery.Builder> implements com.google.firestore.v1.StructuredQueryOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery>;
					public static SELECT_FIELD_NUMBER: number;
					public static FROM_FIELD_NUMBER: number;
					public static WHERE_FIELD_NUMBER: number;
					public static ORDER_BY_FIELD_NUMBER: number;
					public static START_AT_FIELD_NUMBER: number;
					public static END_AT_FIELD_NUMBER: number;
					public static OFFSET_FIELD_NUMBER: number;
					public static LIMIT_FIELD_NUMBER: number;
					public getWhere(): com.google.firestore.v1.StructuredQuery.Filter;
					public getFromList(): java.util.List<com.google.firestore.v1.StructuredQuery.CollectionSelector>;
					public getOffset(): number;
					public hasEndAt(): boolean;
					public getOrderByCount(): number;
					public getFromOrBuilder(param0: number): com.google.firestore.v1.StructuredQuery.CollectionSelectorOrBuilder;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery;
					public hasLimit(): boolean;
					public getLimit(): com.google.protobuf.Int32Value;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery>;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery;
					public getOrderByList(): java.util.List<com.google.firestore.v1.StructuredQuery.Order>;
					public getOrderByOrBuilderList(): java.util.List<any>;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static newBuilder(): com.google.firestore.v1.StructuredQuery.Builder;
					public static newBuilder(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.v1.StructuredQuery.Builder;
					public getFrom(param0: number): com.google.firestore.v1.StructuredQuery.CollectionSelector;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery;
					public getStartAt(): com.google.firestore.v1.Cursor;
					public getOrderByOrBuilder(param0: number): com.google.firestore.v1.StructuredQuery.OrderOrBuilder;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery;
					public hasSelect(): boolean;
					public getOrderBy(param0: number): com.google.firestore.v1.StructuredQuery.Order;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery;
					public getFromOrBuilderList(): java.util.List<any>;
					public hasWhere(): boolean;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery;
					public getSelect(): com.google.firestore.v1.StructuredQuery.Projection;
					public getEndAt(): com.google.firestore.v1.Cursor;
					public getFromCount(): number;
					public hasStartAt(): boolean;
					public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery;
				}
				export module StructuredQuery {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery,com.google.firestore.v1.StructuredQuery.Builder> implements com.google.firestore.v1.StructuredQueryOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Builder>;
						public mergeEndAt(param0: com.google.firestore.v1.Cursor): com.google.firestore.v1.StructuredQuery.Builder;
						public addOrderBy(param0: number, param1: com.google.firestore.v1.StructuredQuery.Order.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public setSelect(param0: com.google.firestore.v1.StructuredQuery.Projection): com.google.firestore.v1.StructuredQuery.Builder;
						public setOffset(param0: number): com.google.firestore.v1.StructuredQuery.Builder;
						public getWhere(): com.google.firestore.v1.StructuredQuery.Filter;
						public setEndAt(param0: com.google.firestore.v1.Cursor.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public hasWhere(): boolean;
						public hasStartAt(): boolean;
						public addOrderBy(param0: com.google.firestore.v1.StructuredQuery.Order): com.google.firestore.v1.StructuredQuery.Builder;
						public mergeStartAt(param0: com.google.firestore.v1.Cursor): com.google.firestore.v1.StructuredQuery.Builder;
						public getFrom(param0: number): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public getFromCount(): number;
						public setWhere(param0: com.google.firestore.v1.StructuredQuery.Filter.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public getEndAt(): com.google.firestore.v1.Cursor;
						public addOrderBy(param0: com.google.firestore.v1.StructuredQuery.Order.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public setWhere(param0: com.google.firestore.v1.StructuredQuery.Filter): com.google.firestore.v1.StructuredQuery.Builder;
						public getFromList(): java.util.List<com.google.firestore.v1.StructuredQuery.CollectionSelector>;
						public mergeWhere(param0: com.google.firestore.v1.StructuredQuery.Filter): com.google.firestore.v1.StructuredQuery.Builder;
						public setLimit(param0: com.google.protobuf.Int32Value): com.google.firestore.v1.StructuredQuery.Builder;
						public setLimit(param0: com.google.protobuf.Int32Value.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public clearSelect(): com.google.firestore.v1.StructuredQuery.Builder;
						public removeFrom(param0: number): com.google.firestore.v1.StructuredQuery.Builder;
						public clearLimit(): com.google.firestore.v1.StructuredQuery.Builder;
						public clearOffset(): com.google.firestore.v1.StructuredQuery.Builder;
						public setStartAt(param0: com.google.firestore.v1.Cursor): com.google.firestore.v1.StructuredQuery.Builder;
						public hasEndAt(): boolean;
						public setFrom(param0: number, param1: com.google.firestore.v1.StructuredQuery.CollectionSelector): com.google.firestore.v1.StructuredQuery.Builder;
						public mergeLimit(param0: com.google.protobuf.Int32Value): com.google.firestore.v1.StructuredQuery.Builder;
						public setSelect(param0: com.google.firestore.v1.StructuredQuery.Projection.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public clearEndAt(): com.google.firestore.v1.StructuredQuery.Builder;
						public addFrom(param0: com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public clearFrom(): com.google.firestore.v1.StructuredQuery.Builder;
						public setOrderBy(param0: number, param1: com.google.firestore.v1.StructuredQuery.Order): com.google.firestore.v1.StructuredQuery.Builder;
						public addFrom(param0: number, param1: com.google.firestore.v1.StructuredQuery.CollectionSelector): com.google.firestore.v1.StructuredQuery.Builder;
						public addOrderBy(param0: number, param1: com.google.firestore.v1.StructuredQuery.Order): com.google.firestore.v1.StructuredQuery.Builder;
						public getOrderBy(param0: number): com.google.firestore.v1.StructuredQuery.Order;
						public setEndAt(param0: com.google.firestore.v1.Cursor): com.google.firestore.v1.StructuredQuery.Builder;
						public setOrderBy(param0: number, param1: com.google.firestore.v1.StructuredQuery.Order.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public getOrderByList(): java.util.List<com.google.firestore.v1.StructuredQuery.Order>;
						public mergeSelect(param0: com.google.firestore.v1.StructuredQuery.Projection): com.google.firestore.v1.StructuredQuery.Builder;
						public clearOrderBy(): com.google.firestore.v1.StructuredQuery.Builder;
						public getStartAt(): com.google.firestore.v1.Cursor;
						public hasSelect(): boolean;
						public removeOrderBy(param0: number): com.google.firestore.v1.StructuredQuery.Builder;
						public hasLimit(): boolean;
						public getLimit(): com.google.protobuf.Int32Value;
						public setFrom(param0: number, param1: com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public addAllOrderBy(param0: java.lang.Iterable<any>): com.google.firestore.v1.StructuredQuery.Builder;
						public clearStartAt(): com.google.firestore.v1.StructuredQuery.Builder;
						public addAllFrom(param0: java.lang.Iterable<any>): com.google.firestore.v1.StructuredQuery.Builder;
						public addFrom(param0: number, param1: com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public clearWhere(): com.google.firestore.v1.StructuredQuery.Builder;
						public getOffset(): number;
						public addFrom(param0: com.google.firestore.v1.StructuredQuery.CollectionSelector): com.google.firestore.v1.StructuredQuery.Builder;
						public getSelect(): com.google.firestore.v1.StructuredQuery.Projection;
						public setStartAt(param0: com.google.firestore.v1.Cursor.Builder): com.google.firestore.v1.StructuredQuery.Builder;
						public getOrderByCount(): number;
					}
					export class CollectionSelector extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.CollectionSelector,com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder> implements com.google.firestore.v1.StructuredQuery.CollectionSelectorOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CollectionSelector>;
						public static COLLECTION_ID_FIELD_NUMBER: number;
						public static ALL_DESCENDANTS_FIELD_NUMBER: number;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public getCollectionId(): string;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.CollectionSelector>;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public getCollectionIdBytes(): com.google.protobuf.ByteString;
						public getAllDescendants(): boolean;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.CollectionSelector): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.CollectionSelector;
					}
					export module CollectionSelector {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.CollectionSelector,com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder> implements com.google.firestore.v1.StructuredQuery.CollectionSelectorOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder>;
							public getAllDescendants(): boolean;
							public getCollectionId(): string;
							public setCollectionIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
							public clearCollectionId(): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
							public clearAllDescendants(): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
							public setCollectionId(param0: string): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
							public setAllDescendants(param0: boolean): com.google.firestore.v1.StructuredQuery.CollectionSelector.Builder;
							public getCollectionIdBytes(): com.google.protobuf.ByteString;
						}
					}
					export class CollectionSelectorOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CollectionSelectorOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$CollectionSelectorOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCollectionId(): string;
							getCollectionIdBytes(): com.google.protobuf.ByteString;
							getAllDescendants(): boolean;
						});
						public constructor();
						public getCollectionIdBytes(): com.google.protobuf.ByteString;
						public getAllDescendants(): boolean;
						public getCollectionId(): string;
					}
					export class CompositeFilter extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.CompositeFilter,com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder> implements com.google.firestore.v1.StructuredQuery.CompositeFilterOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CompositeFilter>;
						public static OP_FIELD_NUMBER: number;
						public static FILTERS_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public getOp(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public getOpValue(): number;
						public getFiltersOrBuilderList(): java.util.List<any>;
						public getFiltersOrBuilder(param0: number): com.google.firestore.v1.StructuredQuery.FilterOrBuilder;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.CompositeFilter>;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.CompositeFilter): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public getFiltersList(): java.util.List<com.google.firestore.v1.StructuredQuery.Filter>;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public getFilters(param0: number): com.google.firestore.v1.StructuredQuery.Filter;
						public getFiltersCount(): number;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.CompositeFilter;
					}
					export module CompositeFilter {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.CompositeFilter,com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder> implements com.google.firestore.v1.StructuredQuery.CompositeFilterOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder>;
							public addFilters(param0: com.google.firestore.v1.StructuredQuery.Filter.Builder): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public getOp(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							public setOp(param0: com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public clearFilters(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public removeFilters(param0: number): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public setFilters(param0: number, param1: com.google.firestore.v1.StructuredQuery.Filter.Builder): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public addFilters(param0: com.google.firestore.v1.StructuredQuery.Filter): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public getOpValue(): number;
							public setOpValue(param0: number): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public addFilters(param0: number, param1: com.google.firestore.v1.StructuredQuery.Filter): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public addAllFilters(param0: java.lang.Iterable<any>): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public getFilters(param0: number): com.google.firestore.v1.StructuredQuery.Filter;
							public addFilters(param0: number, param1: com.google.firestore.v1.StructuredQuery.Filter.Builder): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public clearOp(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
							public getFiltersList(): java.util.List<com.google.firestore.v1.StructuredQuery.Filter>;
							public getFiltersCount(): number;
							public setFilters(param0: number, param1: com.google.firestore.v1.StructuredQuery.Filter): com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder;
						}
						export class Operator extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator>;
							public static OPERATOR_UNSPECIFIED: com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							public static AND: com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							public static UNRECOGNIZED: com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							public static OPERATOR_UNSPECIFIED_VALUE: number;
							public static AND_VALUE: number;
							public static values(): androidNative.Array<com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator>;
							public getNumber(): number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static valueOf(param0: string): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator>;
							public static forNumber(param0: number): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
						}
						export module Operator {
							export class OperatorVerifier {
								public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator.OperatorVerifier>;
								public isInRange(param0: number): boolean;
							}
						}
					}
					export class CompositeFilterOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.CompositeFilterOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$CompositeFilterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getOpValue(): number;
							getOp(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
							getFiltersList(): java.util.List<com.google.firestore.v1.StructuredQuery.Filter>;
							getFilters(param0: number): com.google.firestore.v1.StructuredQuery.Filter;
							getFiltersCount(): number;
						});
						public constructor();
						public getFiltersList(): java.util.List<com.google.firestore.v1.StructuredQuery.Filter>;
						public getOp(): com.google.firestore.v1.StructuredQuery.CompositeFilter.Operator;
						public getFilters(param0: number): com.google.firestore.v1.StructuredQuery.Filter;
						public getFiltersCount(): number;
						public getOpValue(): number;
					}
					export class Direction extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Direction>;
						public static DIRECTION_UNSPECIFIED: com.google.firestore.v1.StructuredQuery.Direction;
						public static ASCENDING: com.google.firestore.v1.StructuredQuery.Direction;
						public static DESCENDING: com.google.firestore.v1.StructuredQuery.Direction;
						public static UNRECOGNIZED: com.google.firestore.v1.StructuredQuery.Direction;
						public static DIRECTION_UNSPECIFIED_VALUE: number;
						public static ASCENDING_VALUE: number;
						public static DESCENDING_VALUE: number;
						public static forNumber(param0: number): com.google.firestore.v1.StructuredQuery.Direction;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.v1.StructuredQuery.Direction>;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.StructuredQuery.Direction;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public static valueOf(param0: string): com.google.firestore.v1.StructuredQuery.Direction;
						public getNumber(): number;
						public static values(): androidNative.Array<com.google.firestore.v1.StructuredQuery.Direction>;
					}
					export module Direction {
						export class DirectionVerifier {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Direction.DirectionVerifier>;
							public isInRange(param0: number): boolean;
						}
					}
					export class FieldFilter extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.FieldFilter,com.google.firestore.v1.StructuredQuery.FieldFilter.Builder> implements com.google.firestore.v1.StructuredQuery.FieldFilterOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldFilter>;
						public static FIELD_FIELD_NUMBER: number;
						public static OP_FIELD_NUMBER: number;
						public static VALUE_FIELD_NUMBER: number;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public hasValue(): boolean;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public getOp(): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.FieldFilter): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public getOpValue(): number;
						public hasField(): boolean;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public getValue(): com.google.firestore.v1.Value;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.FieldFilter>;
					}
					export module FieldFilter {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.FieldFilter,com.google.firestore.v1.StructuredQuery.FieldFilter.Builder> implements com.google.firestore.v1.StructuredQuery.FieldFilterOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldFilter.Builder>;
							public setValue(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public setOpValue(param0: number): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public hasValue(): boolean;
							public clearField(): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public setField(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public hasField(): boolean;
							public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
							public mergeField(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public setOp(param0: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public clearValue(): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public getOpValue(): number;
							public setValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public getOp(): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public mergeValue(param0: com.google.firestore.v1.Value): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public setField(param0: com.google.firestore.v1.StructuredQuery.FieldReference.Builder): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public clearOp(): com.google.firestore.v1.StructuredQuery.FieldFilter.Builder;
							public getValue(): com.google.firestore.v1.Value;
						}
						export class Operator extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldFilter.Operator>;
							public static OPERATOR_UNSPECIFIED: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static LESS_THAN: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static LESS_THAN_OR_EQUAL: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static GREATER_THAN: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static GREATER_THAN_OR_EQUAL: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static EQUAL: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static NOT_EQUAL: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static ARRAY_CONTAINS: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static IN: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static ARRAY_CONTAINS_ANY: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static NOT_IN: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static UNRECOGNIZED: com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static OPERATOR_UNSPECIFIED_VALUE: number;
							public static LESS_THAN_VALUE: number;
							public static LESS_THAN_OR_EQUAL_VALUE: number;
							public static GREATER_THAN_VALUE: number;
							public static GREATER_THAN_OR_EQUAL_VALUE: number;
							public static EQUAL_VALUE: number;
							public static NOT_EQUAL_VALUE: number;
							public static ARRAY_CONTAINS_VALUE: number;
							public static IN_VALUE: number;
							public static ARRAY_CONTAINS_ANY_VALUE: number;
							public static NOT_IN_VALUE: number;
							public static values(): androidNative.Array<com.google.firestore.v1.StructuredQuery.FieldFilter.Operator>;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static forNumber(param0: number): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.v1.StructuredQuery.FieldFilter.Operator>;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							public static valueOf(param0: string): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
						}
						export module Operator {
							export class OperatorVerifier {
								public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldFilter.Operator.OperatorVerifier>;
								public isInRange(param0: number): boolean;
							}
						}
					}
					export class FieldFilterOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldFilterOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$FieldFilterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasField(): boolean;
							getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
							getOpValue(): number;
							getOp(): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
							hasValue(): boolean;
							getValue(): com.google.firestore.v1.Value;
						});
						public constructor();
						public hasField(): boolean;
						public hasValue(): boolean;
						public getOp(): com.google.firestore.v1.StructuredQuery.FieldFilter.Operator;
						public getValue(): com.google.firestore.v1.Value;
						public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
						public getOpValue(): number;
					}
					export class FieldReference extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.FieldReference,com.google.firestore.v1.StructuredQuery.FieldReference.Builder> implements com.google.firestore.v1.StructuredQuery.FieldReferenceOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldReference>;
						public static FIELD_PATH_FIELD_NUMBER: number;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.FieldReference.Builder;
						public getFieldPathBytes(): com.google.protobuf.ByteString;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.FieldReference>;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.FieldReference;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.FieldReference;
						public getFieldPath(): string;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.FieldReference.Builder;
					}
					export module FieldReference {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.FieldReference,com.google.firestore.v1.StructuredQuery.FieldReference.Builder> implements com.google.firestore.v1.StructuredQuery.FieldReferenceOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldReference.Builder>;
							public setFieldPath(param0: string): com.google.firestore.v1.StructuredQuery.FieldReference.Builder;
							public getFieldPath(): string;
							public clearFieldPath(): com.google.firestore.v1.StructuredQuery.FieldReference.Builder;
							public setFieldPathBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.FieldReference.Builder;
							public getFieldPathBytes(): com.google.protobuf.ByteString;
						}
					}
					export class FieldReferenceOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FieldReferenceOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$FieldReferenceOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFieldPath(): string;
							getFieldPathBytes(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getFieldPath(): string;
						public getFieldPathBytes(): com.google.protobuf.ByteString;
					}
					export class Filter extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.Filter,com.google.firestore.v1.StructuredQuery.Filter.Builder> implements com.google.firestore.v1.StructuredQuery.FilterOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Filter>;
						public static COMPOSITE_FILTER_FIELD_NUMBER: number;
						public static FIELD_FILTER_FIELD_NUMBER: number;
						public static UNARY_FILTER_FIELD_NUMBER: number;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Filter;
						public hasCompositeFilter(): boolean;
						public hasUnaryFilter(): boolean;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Filter;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.Filter;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.Filter>;
						public getCompositeFilter(): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public getUnaryFilter(): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public getFieldFilter(): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.Filter;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Filter;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.Filter.Builder;
						public hasFieldFilter(): boolean;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.Filter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Filter;
						public getFilterTypeCase(): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
					}
					export module Filter {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.Filter,com.google.firestore.v1.StructuredQuery.Filter.Builder> implements com.google.firestore.v1.StructuredQuery.FilterOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Filter.Builder>;
							public hasFieldFilter(): boolean;
							public setFieldFilter(param0: com.google.firestore.v1.StructuredQuery.FieldFilter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public mergeFieldFilter(param0: com.google.firestore.v1.StructuredQuery.FieldFilter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public mergeUnaryFilter(param0: com.google.firestore.v1.StructuredQuery.UnaryFilter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public getFieldFilter(): com.google.firestore.v1.StructuredQuery.FieldFilter;
							public getUnaryFilter(): com.google.firestore.v1.StructuredQuery.UnaryFilter;
							public setCompositeFilter(param0: com.google.firestore.v1.StructuredQuery.CompositeFilter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public hasCompositeFilter(): boolean;
							public hasUnaryFilter(): boolean;
							public clearUnaryFilter(): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public getFilterTypeCase(): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public clearFieldFilter(): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public getCompositeFilter(): com.google.firestore.v1.StructuredQuery.CompositeFilter;
							public setUnaryFilter(param0: com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public setFieldFilter(param0: com.google.firestore.v1.StructuredQuery.FieldFilter.Builder): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public setCompositeFilter(param0: com.google.firestore.v1.StructuredQuery.CompositeFilter.Builder): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public clearFilterType(): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public mergeCompositeFilter(param0: com.google.firestore.v1.StructuredQuery.CompositeFilter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public clearCompositeFilter(): com.google.firestore.v1.StructuredQuery.Filter.Builder;
							public setUnaryFilter(param0: com.google.firestore.v1.StructuredQuery.UnaryFilter): com.google.firestore.v1.StructuredQuery.Filter.Builder;
						}
						export class FilterTypeCase {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase>;
							public static COMPOSITE_FILTER: com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public static FIELD_FILTER: com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public static UNARY_FILTER: com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public static FILTERTYPE_NOT_SET: com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public static forNumber(param0: number): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public static values(): androidNative.Array<com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase>;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public static valueOf(param0: string): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
							public getNumber(): number;
						}
					}
					export class FilterOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.FilterOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$FilterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasCompositeFilter(): boolean;
							getCompositeFilter(): com.google.firestore.v1.StructuredQuery.CompositeFilter;
							hasFieldFilter(): boolean;
							getFieldFilter(): com.google.firestore.v1.StructuredQuery.FieldFilter;
							hasUnaryFilter(): boolean;
							getUnaryFilter(): com.google.firestore.v1.StructuredQuery.UnaryFilter;
							getFilterTypeCase(): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
						});
						public constructor();
						public getCompositeFilter(): com.google.firestore.v1.StructuredQuery.CompositeFilter;
						public getUnaryFilter(): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public getFieldFilter(): com.google.firestore.v1.StructuredQuery.FieldFilter;
						public hasCompositeFilter(): boolean;
						public hasUnaryFilter(): boolean;
						public hasFieldFilter(): boolean;
						public getFilterTypeCase(): com.google.firestore.v1.StructuredQuery.Filter.FilterTypeCase;
					}
					export class Order extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.Order,com.google.firestore.v1.StructuredQuery.Order.Builder> implements com.google.firestore.v1.StructuredQuery.OrderOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Order>;
						public static FIELD_FIELD_NUMBER: number;
						public static DIRECTION_FIELD_NUMBER: number;
						public getDirection(): com.google.firestore.v1.StructuredQuery.Direction;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Order;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.Order;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.Order.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Order;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.Order>;
						public getDirectionValue(): number;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.Order): com.google.firestore.v1.StructuredQuery.Order.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.Order;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.Order;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Order;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.Order;
						public hasField(): boolean;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Order;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.Order;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Order;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Order;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.Order;
						public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.Order;
					}
					export module Order {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.Order,com.google.firestore.v1.StructuredQuery.Order.Builder> implements com.google.firestore.v1.StructuredQuery.OrderOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Order.Builder>;
							public setField(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.Order.Builder;
							public mergeField(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.Order.Builder;
							public setDirectionValue(param0: number): com.google.firestore.v1.StructuredQuery.Order.Builder;
							public getDirection(): com.google.firestore.v1.StructuredQuery.Direction;
							public getDirectionValue(): number;
							public hasField(): boolean;
							public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
							public setField(param0: com.google.firestore.v1.StructuredQuery.FieldReference.Builder): com.google.firestore.v1.StructuredQuery.Order.Builder;
							public setDirection(param0: com.google.firestore.v1.StructuredQuery.Direction): com.google.firestore.v1.StructuredQuery.Order.Builder;
							public clearDirection(): com.google.firestore.v1.StructuredQuery.Order.Builder;
							public clearField(): com.google.firestore.v1.StructuredQuery.Order.Builder;
						}
					}
					export class OrderOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.OrderOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$OrderOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasField(): boolean;
							getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
							getDirectionValue(): number;
							getDirection(): com.google.firestore.v1.StructuredQuery.Direction;
						});
						public constructor();
						public hasField(): boolean;
						public getDirection(): com.google.firestore.v1.StructuredQuery.Direction;
						public getDirectionValue(): number;
						public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
					}
					export class Projection extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.Projection,com.google.firestore.v1.StructuredQuery.Projection.Builder> implements com.google.firestore.v1.StructuredQuery.ProjectionOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Projection>;
						public static FIELDS_FIELD_NUMBER: number;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.Projection>;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Projection;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Projection;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Projection;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Projection;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.Projection): com.google.firestore.v1.StructuredQuery.Projection.Builder;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Projection;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.Projection;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.Projection;
						public getFieldsOrBuilder(param0: number): com.google.firestore.v1.StructuredQuery.FieldReferenceOrBuilder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.Projection;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.Projection;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.Projection;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.Projection.Builder;
						public getFieldsList(): java.util.List<com.google.firestore.v1.StructuredQuery.FieldReference>;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.Projection;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.Projection;
						public getFieldsCount(): number;
						public getFieldsOrBuilderList(): java.util.List<any>;
						public getFields(param0: number): com.google.firestore.v1.StructuredQuery.FieldReference;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.Projection;
					}
					export module Projection {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.Projection,com.google.firestore.v1.StructuredQuery.Projection.Builder> implements com.google.firestore.v1.StructuredQuery.ProjectionOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.Projection.Builder>;
							public addFields(param0: number, param1: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public addAllFields(param0: java.lang.Iterable<any>): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public addFields(param0: number, param1: com.google.firestore.v1.StructuredQuery.FieldReference.Builder): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public getFields(param0: number): com.google.firestore.v1.StructuredQuery.FieldReference;
							public addFields(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public clearFields(): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public getFieldsCount(): number;
							public addFields(param0: com.google.firestore.v1.StructuredQuery.FieldReference.Builder): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public getFieldsList(): java.util.List<com.google.firestore.v1.StructuredQuery.FieldReference>;
							public removeFields(param0: number): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public setFields(param0: number, param1: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.Projection.Builder;
							public setFields(param0: number, param1: com.google.firestore.v1.StructuredQuery.FieldReference.Builder): com.google.firestore.v1.StructuredQuery.Projection.Builder;
						}
					}
					export class ProjectionOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.ProjectionOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$ProjectionOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFieldsList(): java.util.List<com.google.firestore.v1.StructuredQuery.FieldReference>;
							getFields(param0: number): com.google.firestore.v1.StructuredQuery.FieldReference;
							getFieldsCount(): number;
						});
						public constructor();
						public getFieldsList(): java.util.List<com.google.firestore.v1.StructuredQuery.FieldReference>;
						public getFieldsCount(): number;
						public getFields(param0: number): com.google.firestore.v1.StructuredQuery.FieldReference;
					}
					export class UnaryFilter extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.StructuredQuery.UnaryFilter,com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder> implements com.google.firestore.v1.StructuredQuery.UnaryFilterOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.UnaryFilter>;
						public static OP_FIELD_NUMBER: number;
						public static FIELD_FIELD_NUMBER: number;
						public static newBuilder(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
						public getOp(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static getDefaultInstance(): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public getOperandTypeCase(): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public getOpValue(): number;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public hasField(): boolean;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static newBuilder(param0: com.google.firestore.v1.StructuredQuery.UnaryFilter): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.StructuredQuery.UnaryFilter>;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.StructuredQuery.UnaryFilter;
						public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
					}
					export module UnaryFilter {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.StructuredQuery.UnaryFilter,com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder> implements com.google.firestore.v1.StructuredQuery.UnaryFilterOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder>;
							public getOperandTypeCase(): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
							public hasField(): boolean;
							public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
							public clearOperandType(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public getOp(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public getOpValue(): number;
							public setOp(param0: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public setField(param0: com.google.firestore.v1.StructuredQuery.FieldReference.Builder): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public mergeField(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public clearOp(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public setField(param0: com.google.firestore.v1.StructuredQuery.FieldReference): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public clearField(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
							public setOpValue(param0: number): com.google.firestore.v1.StructuredQuery.UnaryFilter.Builder;
						}
						export class OperandTypeCase {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase>;
							public static FIELD: com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
							public static OPERANDTYPE_NOT_SET: com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
							public static values(): androidNative.Array<com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase>;
							public getNumber(): number;
							public static valueOf(param0: string): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
							public static forNumber(param0: number): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
						}
						export class Operator extends com.google.protobuf.Internal.EnumLite {
							public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator>;
							public static OPERATOR_UNSPECIFIED: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static IS_NAN: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static IS_NULL: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static IS_NOT_NAN: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static IS_NOT_NULL: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static UNRECOGNIZED: com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static OPERATOR_UNSPECIFIED_VALUE: number;
							public static IS_NAN_VALUE: number;
							public static IS_NULL_VALUE: number;
							public static IS_NOT_NAN_VALUE: number;
							public static IS_NOT_NULL_VALUE: number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static valueOf(param0: string): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator>;
							public getNumber(): number;
							public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
							public static forNumber(param0: number): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							public static values(): androidNative.Array<com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator>;
						}
						export module Operator {
							export class OperatorVerifier {
								public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator.OperatorVerifier>;
								public isInRange(param0: number): boolean;
							}
						}
					}
					export class UnaryFilterOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.StructuredQuery.UnaryFilterOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.StructuredQuery$UnaryFilterOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getOpValue(): number;
							getOp(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
							hasField(): boolean;
							getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
							getOperandTypeCase(): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
						});
						public constructor();
						public hasField(): boolean;
						public getOp(): com.google.firestore.v1.StructuredQuery.UnaryFilter.Operator;
						public getOperandTypeCase(): com.google.firestore.v1.StructuredQuery.UnaryFilter.OperandTypeCase;
						public getOpValue(): number;
						public getField(): com.google.firestore.v1.StructuredQuery.FieldReference;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class StructuredQueryOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.StructuredQueryOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.StructuredQueryOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasSelect(): boolean;
						getSelect(): com.google.firestore.v1.StructuredQuery.Projection;
						getFromList(): java.util.List<com.google.firestore.v1.StructuredQuery.CollectionSelector>;
						getFrom(param0: number): com.google.firestore.v1.StructuredQuery.CollectionSelector;
						getFromCount(): number;
						hasWhere(): boolean;
						getWhere(): com.google.firestore.v1.StructuredQuery.Filter;
						getOrderByList(): java.util.List<com.google.firestore.v1.StructuredQuery.Order>;
						getOrderBy(param0: number): com.google.firestore.v1.StructuredQuery.Order;
						getOrderByCount(): number;
						hasStartAt(): boolean;
						getStartAt(): com.google.firestore.v1.Cursor;
						hasEndAt(): boolean;
						getEndAt(): com.google.firestore.v1.Cursor;
						getOffset(): number;
						hasLimit(): boolean;
						getLimit(): com.google.protobuf.Int32Value;
					});
					public constructor();
					public getWhere(): com.google.firestore.v1.StructuredQuery.Filter;
					public getStartAt(): com.google.firestore.v1.Cursor;
					public hasSelect(): boolean;
					public getFromList(): java.util.List<com.google.firestore.v1.StructuredQuery.CollectionSelector>;
					public getOffset(): number;
					public getOrderBy(param0: number): com.google.firestore.v1.StructuredQuery.Order;
					public hasWhere(): boolean;
					public hasEndAt(): boolean;
					public getOrderByCount(): number;
					public hasLimit(): boolean;
					public getLimit(): com.google.protobuf.Int32Value;
					public getSelect(): com.google.firestore.v1.StructuredQuery.Projection;
					public getEndAt(): com.google.firestore.v1.Cursor;
					public getFromCount(): number;
					public getOrderByList(): java.util.List<com.google.firestore.v1.StructuredQuery.Order>;
					public hasStartAt(): boolean;
					public getFrom(param0: number): com.google.firestore.v1.StructuredQuery.CollectionSelector;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class Target extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Target,com.google.firestore.v1.Target.Builder> implements com.google.firestore.v1.TargetOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.Target>;
					public static QUERY_FIELD_NUMBER: number;
					public static DOCUMENTS_FIELD_NUMBER: number;
					public static RESUME_TOKEN_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static TARGET_ID_FIELD_NUMBER: number;
					public static ONCE_FIELD_NUMBER: number;
					public static newBuilder(param0: com.google.firestore.v1.Target): com.google.firestore.v1.Target.Builder;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Target;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target;
					public static getDefaultInstance(): com.google.firestore.v1.Target;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target;
					public getResumeTypeCase(): com.google.firestore.v1.Target.ResumeTypeCase;
					public getTargetId(): number;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Target>;
					public getTargetTypeCase(): com.google.firestore.v1.Target.TargetTypeCase;
					public getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Target;
					public getResumeToken(): com.google.protobuf.ByteString;
					public hasQuery(): boolean;
					public static newBuilder(): com.google.firestore.v1.Target.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasReadTime(): boolean;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Target;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Target;
					public getOnce(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target;
					public getQuery(): com.google.firestore.v1.Target.QueryTarget;
					public hasDocuments(): boolean;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Target;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Target;
				}
				export module Target {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Target,com.google.firestore.v1.Target.Builder> implements com.google.firestore.v1.TargetOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Target.Builder>;
						public getTargetTypeCase(): com.google.firestore.v1.Target.TargetTypeCase;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.Target.Builder;
						public getOnce(): boolean;
						public clearQuery(): com.google.firestore.v1.Target.Builder;
						public setQuery(param0: com.google.firestore.v1.Target.QueryTarget.Builder): com.google.firestore.v1.Target.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Target.Builder;
						public hasQuery(): boolean;
						public getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
						public clearOnce(): com.google.firestore.v1.Target.Builder;
						public clearTargetId(): com.google.firestore.v1.Target.Builder;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Target.Builder;
						public mergeDocuments(param0: com.google.firestore.v1.Target.DocumentsTarget): com.google.firestore.v1.Target.Builder;
						public getTargetId(): number;
						public setQuery(param0: com.google.firestore.v1.Target.QueryTarget): com.google.firestore.v1.Target.Builder;
						public getReadTime(): com.google.protobuf.Timestamp;
						public setResumeToken(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Target.Builder;
						public clearTargetType(): com.google.firestore.v1.Target.Builder;
						public getQuery(): com.google.firestore.v1.Target.QueryTarget;
						public clearReadTime(): com.google.firestore.v1.Target.Builder;
						public clearDocuments(): com.google.firestore.v1.Target.Builder;
						public hasDocuments(): boolean;
						public setDocuments(param0: com.google.firestore.v1.Target.DocumentsTarget): com.google.firestore.v1.Target.Builder;
						public mergeQuery(param0: com.google.firestore.v1.Target.QueryTarget): com.google.firestore.v1.Target.Builder;
						public clearResumeToken(): com.google.firestore.v1.Target.Builder;
						public hasReadTime(): boolean;
						public setOnce(param0: boolean): com.google.firestore.v1.Target.Builder;
						public getResumeToken(): com.google.protobuf.ByteString;
						public getResumeTypeCase(): com.google.firestore.v1.Target.ResumeTypeCase;
						public clearResumeType(): com.google.firestore.v1.Target.Builder;
						public setTargetId(param0: number): com.google.firestore.v1.Target.Builder;
						public setDocuments(param0: com.google.firestore.v1.Target.DocumentsTarget.Builder): com.google.firestore.v1.Target.Builder;
					}
					export class DocumentsTarget extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Target.DocumentsTarget,com.google.firestore.v1.Target.DocumentsTarget.Builder> implements com.google.firestore.v1.Target.DocumentsTargetOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Target.DocumentsTarget>;
						public static DOCUMENTS_FIELD_NUMBER: number;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Target.DocumentsTarget;
						public static getDefaultInstance(): com.google.firestore.v1.Target.DocumentsTarget;
						public getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Target.DocumentsTarget;
						public getDocumentsCount(): number;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Target.DocumentsTarget>;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Target.DocumentsTarget;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.DocumentsTarget;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.DocumentsTarget;
						public static newBuilder(): com.google.firestore.v1.Target.DocumentsTarget.Builder;
						public getDocumentsList(): java.util.List<string>;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.DocumentsTarget;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.DocumentsTarget;
						public getDocuments(param0: number): string;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Target.DocumentsTarget;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.DocumentsTarget;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Target.DocumentsTarget;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Target.DocumentsTarget;
						public static newBuilder(param0: com.google.firestore.v1.Target.DocumentsTarget): com.google.firestore.v1.Target.DocumentsTarget.Builder;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.DocumentsTarget;
					}
					export module DocumentsTarget {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Target.DocumentsTarget,com.google.firestore.v1.Target.DocumentsTarget.Builder> implements com.google.firestore.v1.Target.DocumentsTargetOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.Target.DocumentsTarget.Builder>;
							public addDocuments(param0: string): com.google.firestore.v1.Target.DocumentsTarget.Builder;
							public addDocumentsBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Target.DocumentsTarget.Builder;
							public getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
							public getDocumentsCount(): number;
							public getDocumentsList(): java.util.List<string>;
							public clearDocuments(): com.google.firestore.v1.Target.DocumentsTarget.Builder;
							public setDocuments(param0: number, param1: string): com.google.firestore.v1.Target.DocumentsTarget.Builder;
							public addAllDocuments(param0: java.lang.Iterable<string>): com.google.firestore.v1.Target.DocumentsTarget.Builder;
							public getDocuments(param0: number): string;
						}
					}
					export class DocumentsTargetOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.Target.DocumentsTargetOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.Target$DocumentsTargetOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDocumentsList(): java.util.List<string>;
							getDocumentsCount(): number;
							getDocuments(param0: number): string;
							getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
						});
						public constructor();
						public getDocumentsList(): java.util.List<string>;
						public getDocumentsBytes(param0: number): com.google.protobuf.ByteString;
						public getDocumentsCount(): number;
						public getDocuments(param0: number): string;
					}
					export class QueryTarget extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Target.QueryTarget,com.google.firestore.v1.Target.QueryTarget.Builder> implements com.google.firestore.v1.Target.QueryTargetOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Target.QueryTarget>;
						public static PARENT_FIELD_NUMBER: number;
						public static STRUCTURED_QUERY_FIELD_NUMBER: number;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Target.QueryTarget;
						public getQueryTypeCase(): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Target.QueryTarget;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Target.QueryTarget;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Target.QueryTarget>;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static newBuilder(): com.google.firestore.v1.Target.QueryTarget.Builder;
						public getParent(): string;
						public hasStructuredQuery(): boolean;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.QueryTarget;
						public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.QueryTarget;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Target.QueryTarget;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Target.QueryTarget;
						public static newBuilder(param0: com.google.firestore.v1.Target.QueryTarget): com.google.firestore.v1.Target.QueryTarget.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.QueryTarget;
						public getParentBytes(): com.google.protobuf.ByteString;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.QueryTarget;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.QueryTarget;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Target.QueryTarget;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Target.QueryTarget;
						public static getDefaultInstance(): com.google.firestore.v1.Target.QueryTarget;
					}
					export module QueryTarget {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Target.QueryTarget,com.google.firestore.v1.Target.QueryTarget.Builder> implements com.google.firestore.v1.Target.QueryTargetOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.Target.QueryTarget.Builder>;
							public getParent(): string;
							public clearQueryType(): com.google.firestore.v1.Target.QueryTarget.Builder;
							public clearParent(): com.google.firestore.v1.Target.QueryTarget.Builder;
							public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
							public hasStructuredQuery(): boolean;
							public setStructuredQuery(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.v1.Target.QueryTarget.Builder;
							public clearStructuredQuery(): com.google.firestore.v1.Target.QueryTarget.Builder;
							public setParentBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Target.QueryTarget.Builder;
							public getQueryTypeCase(): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
							public getParentBytes(): com.google.protobuf.ByteString;
							public setParent(param0: string): com.google.firestore.v1.Target.QueryTarget.Builder;
							public setStructuredQuery(param0: com.google.firestore.v1.StructuredQuery.Builder): com.google.firestore.v1.Target.QueryTarget.Builder;
							public mergeStructuredQuery(param0: com.google.firestore.v1.StructuredQuery): com.google.firestore.v1.Target.QueryTarget.Builder;
						}
						export class QueryTypeCase {
							public static class: java.lang.Class<com.google.firestore.v1.Target.QueryTarget.QueryTypeCase>;
							public static STRUCTURED_QUERY: com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
							public static QUERYTYPE_NOT_SET: com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
							public static values(): androidNative.Array<com.google.firestore.v1.Target.QueryTarget.QueryTypeCase>;
							public static valueOf(param0: string): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
							public getNumber(): number;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
							public static forNumber(param0: number): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
						}
					}
					export class QueryTargetOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.Target.QueryTargetOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.Target$QueryTargetOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getParent(): string;
							getParentBytes(): com.google.protobuf.ByteString;
							hasStructuredQuery(): boolean;
							getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
							getQueryTypeCase(): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
						});
						public constructor();
						public hasStructuredQuery(): boolean;
						public getQueryTypeCase(): com.google.firestore.v1.Target.QueryTarget.QueryTypeCase;
						public getStructuredQuery(): com.google.firestore.v1.StructuredQuery;
						public getParentBytes(): com.google.protobuf.ByteString;
						public getParent(): string;
					}
					export class ResumeTypeCase {
						public static class: java.lang.Class<com.google.firestore.v1.Target.ResumeTypeCase>;
						public static RESUME_TOKEN: com.google.firestore.v1.Target.ResumeTypeCase;
						public static READ_TIME: com.google.firestore.v1.Target.ResumeTypeCase;
						public static RESUMETYPE_NOT_SET: com.google.firestore.v1.Target.ResumeTypeCase;
						public static values(): androidNative.Array<com.google.firestore.v1.Target.ResumeTypeCase>;
						public getNumber(): number;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.Target.ResumeTypeCase;
						public static forNumber(param0: number): com.google.firestore.v1.Target.ResumeTypeCase;
						public static valueOf(param0: string): com.google.firestore.v1.Target.ResumeTypeCase;
					}
					export class TargetTypeCase {
						public static class: java.lang.Class<com.google.firestore.v1.Target.TargetTypeCase>;
						public static QUERY: com.google.firestore.v1.Target.TargetTypeCase;
						public static DOCUMENTS: com.google.firestore.v1.Target.TargetTypeCase;
						public static TARGETTYPE_NOT_SET: com.google.firestore.v1.Target.TargetTypeCase;
						public static valueOf(param0: string): com.google.firestore.v1.Target.TargetTypeCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.Target.TargetTypeCase;
						public static forNumber(param0: number): com.google.firestore.v1.Target.TargetTypeCase;
						public getNumber(): number;
						public static values(): androidNative.Array<com.google.firestore.v1.Target.TargetTypeCase>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class TargetChange extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.TargetChange,com.google.firestore.v1.TargetChange.Builder> implements com.google.firestore.v1.TargetChangeOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.TargetChange>;
					public static TARGET_CHANGE_TYPE_FIELD_NUMBER: number;
					public static TARGET_IDS_FIELD_NUMBER: number;
					public static CAUSE_FIELD_NUMBER: number;
					public static RESUME_TOKEN_FIELD_NUMBER: number;
					public static READ_TIME_FIELD_NUMBER: number;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TargetChange;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.TargetChange>;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TargetChange;
					public static getDefaultInstance(): com.google.firestore.v1.TargetChange;
					public getCause(): com.google.rpc.Status;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.TargetChange;
					public static newBuilder(): com.google.firestore.v1.TargetChange.Builder;
					public getResumeToken(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TargetChange;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.TargetChange;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public hasCause(): boolean;
					public hasReadTime(): boolean;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.TargetChange;
					public getTargetChangeType(): com.google.firestore.v1.TargetChange.TargetChangeType;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TargetChange;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TargetChange;
					public getTargetIdsCount(): number;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TargetChange;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.TargetChange;
					public getTargetChangeTypeValue(): number;
					public getTargetIds(param0: number): number;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.TargetChange;
					public getTargetIdsList(): java.util.List<java.lang.Integer>;
					public getReadTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.TargetChange;
					public static newBuilder(param0: com.google.firestore.v1.TargetChange): com.google.firestore.v1.TargetChange.Builder;
				}
				export module TargetChange {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.TargetChange,com.google.firestore.v1.TargetChange.Builder> implements com.google.firestore.v1.TargetChangeOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.TargetChange.Builder>;
						public hasCause(): boolean;
						public setCause(param0: com.google.rpc.Status.Builder): com.google.firestore.v1.TargetChange.Builder;
						public clearTargetIds(): com.google.firestore.v1.TargetChange.Builder;
						public setTargetChangeType(param0: com.google.firestore.v1.TargetChange.TargetChangeType): com.google.firestore.v1.TargetChange.Builder;
						public getTargetIdsList(): java.util.List<java.lang.Integer>;
						public getReadTime(): com.google.protobuf.Timestamp;
						public getCause(): com.google.rpc.Status;
						public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.TargetChange.Builder;
						public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.TargetChange.Builder;
						public setTargetIds(param0: number, param1: number): com.google.firestore.v1.TargetChange.Builder;
						public setResumeToken(param0: com.google.protobuf.ByteString): com.google.firestore.v1.TargetChange.Builder;
						public addAllTargetIds(param0: java.lang.Iterable<any>): com.google.firestore.v1.TargetChange.Builder;
						public getTargetIds(param0: number): number;
						public setCause(param0: com.google.rpc.Status): com.google.firestore.v1.TargetChange.Builder;
						public mergeCause(param0: com.google.rpc.Status): com.google.firestore.v1.TargetChange.Builder;
						public clearReadTime(): com.google.firestore.v1.TargetChange.Builder;
						public clearCause(): com.google.firestore.v1.TargetChange.Builder;
						public clearResumeToken(): com.google.firestore.v1.TargetChange.Builder;
						public setTargetChangeTypeValue(param0: number): com.google.firestore.v1.TargetChange.Builder;
						public hasReadTime(): boolean;
						public clearTargetChangeType(): com.google.firestore.v1.TargetChange.Builder;
						public getResumeToken(): com.google.protobuf.ByteString;
						public addTargetIds(param0: number): com.google.firestore.v1.TargetChange.Builder;
						public getTargetChangeTypeValue(): number;
						public getTargetChangeType(): com.google.firestore.v1.TargetChange.TargetChangeType;
						public getTargetIdsCount(): number;
						public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.TargetChange.Builder;
					}
					export class TargetChangeType extends com.google.protobuf.Internal.EnumLite {
						public static class: java.lang.Class<com.google.firestore.v1.TargetChange.TargetChangeType>;
						public static NO_CHANGE: com.google.firestore.v1.TargetChange.TargetChangeType;
						public static ADD: com.google.firestore.v1.TargetChange.TargetChangeType;
						public static REMOVE: com.google.firestore.v1.TargetChange.TargetChangeType;
						public static CURRENT: com.google.firestore.v1.TargetChange.TargetChangeType;
						public static RESET: com.google.firestore.v1.TargetChange.TargetChangeType;
						public static UNRECOGNIZED: com.google.firestore.v1.TargetChange.TargetChangeType;
						public static NO_CHANGE_VALUE: number;
						public static ADD_VALUE: number;
						public static REMOVE_VALUE: number;
						public static CURRENT_VALUE: number;
						public static RESET_VALUE: number;
						public static internalGetVerifier(): com.google.protobuf.Internal.EnumVerifier;
						public static valueOf(param0: string): com.google.firestore.v1.TargetChange.TargetChangeType;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.TargetChange.TargetChangeType;
						public getNumber(): number;
						public static forNumber(param0: number): com.google.firestore.v1.TargetChange.TargetChangeType;
						public static internalGetValueMap(): com.google.protobuf.Internal.EnumLiteMap<com.google.firestore.v1.TargetChange.TargetChangeType>;
						public static values(): androidNative.Array<com.google.firestore.v1.TargetChange.TargetChangeType>;
					}
					export module TargetChangeType {
						export class TargetChangeTypeVerifier {
							public static class: java.lang.Class<com.google.firestore.v1.TargetChange.TargetChangeType.TargetChangeTypeVerifier>;
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
		export module firestore {
			export module v1 {
				export class TargetChangeOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.TargetChangeOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.TargetChangeOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTargetChangeTypeValue(): number;
						getTargetChangeType(): com.google.firestore.v1.TargetChange.TargetChangeType;
						getTargetIdsList(): java.util.List<java.lang.Integer>;
						getTargetIdsCount(): number;
						getTargetIds(param0: number): number;
						hasCause(): boolean;
						getCause(): com.google.rpc.Status;
						getResumeToken(): com.google.protobuf.ByteString;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getTargetChangeTypeValue(): number;
					public getResumeToken(): com.google.protobuf.ByteString;
					public getTargetChangeType(): com.google.firestore.v1.TargetChange.TargetChangeType;
					public getTargetIds(param0: number): number;
					public getCause(): com.google.rpc.Status;
					public getTargetIdsList(): java.util.List<java.lang.Integer>;
					public getReadTime(): com.google.protobuf.Timestamp;
					public getTargetIdsCount(): number;
					public hasCause(): boolean;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class TargetOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.TargetOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.TargetOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasQuery(): boolean;
						getQuery(): com.google.firestore.v1.Target.QueryTarget;
						hasDocuments(): boolean;
						getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
						getResumeToken(): com.google.protobuf.ByteString;
						hasReadTime(): boolean;
						getReadTime(): com.google.protobuf.Timestamp;
						getTargetId(): number;
						getOnce(): boolean;
						getTargetTypeCase(): com.google.firestore.v1.Target.TargetTypeCase;
						getResumeTypeCase(): com.google.firestore.v1.Target.ResumeTypeCase;
					});
					public constructor();
					public getResumeToken(): com.google.protobuf.ByteString;
					public hasQuery(): boolean;
					public getOnce(): boolean;
					public getResumeTypeCase(): com.google.firestore.v1.Target.ResumeTypeCase;
					public getTargetId(): number;
					public getTargetTypeCase(): com.google.firestore.v1.Target.TargetTypeCase;
					public getQuery(): com.google.firestore.v1.Target.QueryTarget;
					public hasDocuments(): boolean;
					public getReadTime(): com.google.protobuf.Timestamp;
					public getDocuments(): com.google.firestore.v1.Target.DocumentsTarget;
					public hasReadTime(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class TransactionOptions extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.TransactionOptions,com.google.firestore.v1.TransactionOptions.Builder> implements com.google.firestore.v1.TransactionOptionsOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions>;
					public static READ_ONLY_FIELD_NUMBER: number;
					public static READ_WRITE_FIELD_NUMBER: number;
					public getReadWrite(): com.google.firestore.v1.TransactionOptions.ReadWrite;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.TransactionOptions;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.TransactionOptions;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.TransactionOptions>;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions;
					public hasReadOnly(): boolean;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.TransactionOptions;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions;
					public static newBuilder(): com.google.firestore.v1.TransactionOptions.Builder;
					public getModeCase(): com.google.firestore.v1.TransactionOptions.ModeCase;
					public hasReadWrite(): boolean;
					public static newBuilder(param0: com.google.firestore.v1.TransactionOptions): com.google.firestore.v1.TransactionOptions.Builder;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getReadOnly(): com.google.firestore.v1.TransactionOptions.ReadOnly;
					public static getDefaultInstance(): com.google.firestore.v1.TransactionOptions;
				}
				export module TransactionOptions {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.TransactionOptions,com.google.firestore.v1.TransactionOptions.Builder> implements com.google.firestore.v1.TransactionOptionsOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.Builder>;
						public hasReadOnly(): boolean;
						public mergeReadOnly(param0: com.google.firestore.v1.TransactionOptions.ReadOnly): com.google.firestore.v1.TransactionOptions.Builder;
						public getModeCase(): com.google.firestore.v1.TransactionOptions.ModeCase;
						public setReadOnly(param0: com.google.firestore.v1.TransactionOptions.ReadOnly): com.google.firestore.v1.TransactionOptions.Builder;
						public hasReadWrite(): boolean;
						public mergeReadWrite(param0: com.google.firestore.v1.TransactionOptions.ReadWrite): com.google.firestore.v1.TransactionOptions.Builder;
						public getReadWrite(): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public setReadWrite(param0: com.google.firestore.v1.TransactionOptions.ReadWrite): com.google.firestore.v1.TransactionOptions.Builder;
						public clearMode(): com.google.firestore.v1.TransactionOptions.Builder;
						public getReadOnly(): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public clearReadWrite(): com.google.firestore.v1.TransactionOptions.Builder;
						public clearReadOnly(): com.google.firestore.v1.TransactionOptions.Builder;
						public setReadWrite(param0: com.google.firestore.v1.TransactionOptions.ReadWrite.Builder): com.google.firestore.v1.TransactionOptions.Builder;
						public setReadOnly(param0: com.google.firestore.v1.TransactionOptions.ReadOnly.Builder): com.google.firestore.v1.TransactionOptions.Builder;
					}
					export class ModeCase {
						public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ModeCase>;
						public static READ_ONLY: com.google.firestore.v1.TransactionOptions.ModeCase;
						public static READ_WRITE: com.google.firestore.v1.TransactionOptions.ModeCase;
						public static MODE_NOT_SET: com.google.firestore.v1.TransactionOptions.ModeCase;
						public static values(): androidNative.Array<com.google.firestore.v1.TransactionOptions.ModeCase>;
						public static forNumber(param0: number): com.google.firestore.v1.TransactionOptions.ModeCase;
						public getNumber(): number;
						public static valueOf(param0: string): com.google.firestore.v1.TransactionOptions.ModeCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.TransactionOptions.ModeCase;
					}
					export class ReadOnly extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.TransactionOptions.ReadOnly,com.google.firestore.v1.TransactionOptions.ReadOnly.Builder> implements com.google.firestore.v1.TransactionOptions.ReadOnlyOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadOnly>;
						public static READ_TIME_FIELD_NUMBER: number;
						public static newBuilder(param0: com.google.firestore.v1.TransactionOptions.ReadOnly): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static newBuilder(): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
						public getConsistencySelectorCase(): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
						public hasReadTime(): boolean;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.TransactionOptions.ReadOnly>;
						public getReadTime(): com.google.protobuf.Timestamp;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static getDefaultInstance(): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadOnly;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.TransactionOptions.ReadOnly;
					}
					export module ReadOnly {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.TransactionOptions.ReadOnly,com.google.firestore.v1.TransactionOptions.ReadOnly.Builder> implements com.google.firestore.v1.TransactionOptions.ReadOnlyOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadOnly.Builder>;
							public getReadTime(): com.google.protobuf.Timestamp;
							public mergeReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
							public setReadTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
							public getConsistencySelectorCase(): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
							public clearConsistencySelector(): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
							public clearReadTime(): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
							public setReadTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.TransactionOptions.ReadOnly.Builder;
							public hasReadTime(): boolean;
						}
						export class ConsistencySelectorCase {
							public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase>;
							public static READ_TIME: com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
							public static CONSISTENCYSELECTOR_NOT_SET: com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
							public static valueOf(param0: string): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
							/** @deprecated */
							public static valueOf(param0: number): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
							public static forNumber(param0: number): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
							public getNumber(): number;
							public static values(): androidNative.Array<com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase>;
						}
					}
					export class ReadOnlyOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadOnlyOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.TransactionOptions$ReadOnlyOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasReadTime(): boolean;
							getReadTime(): com.google.protobuf.Timestamp;
							getConsistencySelectorCase(): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
						});
						public constructor();
						public hasReadTime(): boolean;
						public getReadTime(): com.google.protobuf.Timestamp;
						public getConsistencySelectorCase(): com.google.firestore.v1.TransactionOptions.ReadOnly.ConsistencySelectorCase;
					}
					export class ReadWrite extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.TransactionOptions.ReadWrite,com.google.firestore.v1.TransactionOptions.ReadWrite.Builder> implements com.google.firestore.v1.TransactionOptions.ReadWriteOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadWrite>;
						public static RETRY_TRANSACTION_FIELD_NUMBER: number;
						public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static getDefaultInstance(): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static newBuilder(): com.google.firestore.v1.TransactionOptions.ReadWrite.Builder;
						public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.TransactionOptions.ReadWrite>;
						public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
						public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public getRetryTransaction(): com.google.protobuf.ByteString;
						public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.TransactionOptions.ReadWrite;
						public static newBuilder(param0: com.google.firestore.v1.TransactionOptions.ReadWrite): com.google.firestore.v1.TransactionOptions.ReadWrite.Builder;
						public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.TransactionOptions.ReadWrite;
					}
					export module ReadWrite {
						export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.TransactionOptions.ReadWrite,com.google.firestore.v1.TransactionOptions.ReadWrite.Builder> implements com.google.firestore.v1.TransactionOptions.ReadWriteOrBuilder  {
							public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadWrite.Builder>;
							public clearRetryTransaction(): com.google.firestore.v1.TransactionOptions.ReadWrite.Builder;
							public setRetryTransaction(param0: com.google.protobuf.ByteString): com.google.firestore.v1.TransactionOptions.ReadWrite.Builder;
							public getRetryTransaction(): com.google.protobuf.ByteString;
						}
					}
					export class ReadWriteOrBuilder {
						public static class: java.lang.Class<com.google.firestore.v1.TransactionOptions.ReadWriteOrBuilder>;
						/**
						 * Constructs a new instance of the com.google.firestore.v1.TransactionOptions$ReadWriteOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getRetryTransaction(): com.google.protobuf.ByteString;
						});
						public constructor();
						public getRetryTransaction(): com.google.protobuf.ByteString;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class TransactionOptionsOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.TransactionOptionsOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.TransactionOptionsOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasReadOnly(): boolean;
						getReadOnly(): com.google.firestore.v1.TransactionOptions.ReadOnly;
						hasReadWrite(): boolean;
						getReadWrite(): com.google.firestore.v1.TransactionOptions.ReadWrite;
						getModeCase(): com.google.firestore.v1.TransactionOptions.ModeCase;
					});
					public constructor();
					public getReadWrite(): com.google.firestore.v1.TransactionOptions.ReadWrite;
					public getModeCase(): com.google.firestore.v1.TransactionOptions.ModeCase;
					public hasReadWrite(): boolean;
					public hasReadOnly(): boolean;
					public getReadOnly(): com.google.firestore.v1.TransactionOptions.ReadOnly;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class UpdateDocumentRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.UpdateDocumentRequest,com.google.firestore.v1.UpdateDocumentRequest.Builder> implements com.google.firestore.v1.UpdateDocumentRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.UpdateDocumentRequest>;
					public static DOCUMENT_FIELD_NUMBER: number;
					public static UPDATE_MASK_FIELD_NUMBER: number;
					public static MASK_FIELD_NUMBER: number;
					public static CURRENT_DOCUMENT_FIELD_NUMBER: number;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.UpdateDocumentRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.UpdateDocumentRequest;
					public static getDefaultInstance(): com.google.firestore.v1.UpdateDocumentRequest;
					public hasDocument(): boolean;
					public hasCurrentDocument(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.UpdateDocumentRequest;
					public getUpdateMask(): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.UpdateDocumentRequest;
					public hasUpdateMask(): boolean;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.UpdateDocumentRequest;
					public getDocument(): com.google.firestore.v1.Document;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.UpdateDocumentRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.UpdateDocumentRequest;
					public getMask(): com.google.firestore.v1.DocumentMask;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.UpdateDocumentRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.UpdateDocumentRequest;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.UpdateDocumentRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.UpdateDocumentRequest;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.UpdateDocumentRequest;
					public static newBuilder(): com.google.firestore.v1.UpdateDocumentRequest.Builder;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.UpdateDocumentRequest>;
					public getCurrentDocument(): com.google.firestore.v1.Precondition;
					public hasMask(): boolean;
					public static newBuilder(param0: com.google.firestore.v1.UpdateDocumentRequest): com.google.firestore.v1.UpdateDocumentRequest.Builder;
				}
				export module UpdateDocumentRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.UpdateDocumentRequest,com.google.firestore.v1.UpdateDocumentRequest.Builder> implements com.google.firestore.v1.UpdateDocumentRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.UpdateDocumentRequest.Builder>;
						public getDocument(): com.google.firestore.v1.Document;
						public getCurrentDocument(): com.google.firestore.v1.Precondition;
						public setUpdateMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public getMask(): com.google.firestore.v1.DocumentMask;
						public setUpdateMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public mergeMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public clearDocument(): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public hasMask(): boolean;
						public setMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public hasCurrentDocument(): boolean;
						public clearUpdateMask(): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public setCurrentDocument(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public mergeUpdateMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public setMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public setDocument(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public setDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public getUpdateMask(): com.google.firestore.v1.DocumentMask;
						public clearMask(): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public mergeDocument(param0: com.google.firestore.v1.Document): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public hasUpdateMask(): boolean;
						public mergeCurrentDocument(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public setCurrentDocument(param0: com.google.firestore.v1.Precondition.Builder): com.google.firestore.v1.UpdateDocumentRequest.Builder;
						public hasDocument(): boolean;
						public clearCurrentDocument(): com.google.firestore.v1.UpdateDocumentRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class UpdateDocumentRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.UpdateDocumentRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.UpdateDocumentRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasDocument(): boolean;
						getDocument(): com.google.firestore.v1.Document;
						hasUpdateMask(): boolean;
						getUpdateMask(): com.google.firestore.v1.DocumentMask;
						hasMask(): boolean;
						getMask(): com.google.firestore.v1.DocumentMask;
						hasCurrentDocument(): boolean;
						getCurrentDocument(): com.google.firestore.v1.Precondition;
					});
					public constructor();
					public getMask(): com.google.firestore.v1.DocumentMask;
					public getCurrentDocument(): com.google.firestore.v1.Precondition;
					public getUpdateMask(): com.google.firestore.v1.DocumentMask;
					public hasMask(): boolean;
					public hasUpdateMask(): boolean;
					public getDocument(): com.google.firestore.v1.Document;
					public hasDocument(): boolean;
					public hasCurrentDocument(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class Value extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Value,com.google.firestore.v1.Value.Builder> implements com.google.firestore.v1.ValueOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.Value>;
					public static NULL_VALUE_FIELD_NUMBER: number;
					public static BOOLEAN_VALUE_FIELD_NUMBER: number;
					public static INTEGER_VALUE_FIELD_NUMBER: number;
					public static DOUBLE_VALUE_FIELD_NUMBER: number;
					public static TIMESTAMP_VALUE_FIELD_NUMBER: number;
					public static STRING_VALUE_FIELD_NUMBER: number;
					public static BYTES_VALUE_FIELD_NUMBER: number;
					public static REFERENCE_VALUE_FIELD_NUMBER: number;
					public static GEO_POINT_VALUE_FIELD_NUMBER: number;
					public static ARRAY_VALUE_FIELD_NUMBER: number;
					public static MAP_VALUE_FIELD_NUMBER: number;
					public getNullValue(): com.google.protobuf.NullValue;
					public getDoubleValue(): number;
					public getReferenceValue(): string;
					public getMapValue(): com.google.firestore.v1.MapValue;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Value;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Value;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Value;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Value;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Value;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Value;
					public static getDefaultInstance(): com.google.firestore.v1.Value;
					public getGeoPointValue(): com.google.type.LatLng;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Value;
					public hasMapValue(): boolean;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Value;
					public getValueTypeCase(): com.google.firestore.v1.Value.ValueTypeCase;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Value;
					public getTimestampValue(): com.google.protobuf.Timestamp;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Value>;
					public getStringValueBytes(): com.google.protobuf.ByteString;
					public hasArrayValue(): boolean;
					public getIntegerValue(): number;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Value;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Value;
					public getBooleanValue(): boolean;
					public static newBuilder(): com.google.firestore.v1.Value.Builder;
					public getReferenceValueBytes(): com.google.protobuf.ByteString;
					public static newBuilder(param0: com.google.firestore.v1.Value): com.google.firestore.v1.Value.Builder;
					public getNullValueValue(): number;
					public hasTimestampValue(): boolean;
					public hasGeoPointValue(): boolean;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Value;
					public getArrayValue(): com.google.firestore.v1.ArrayValue;
					public getBytesValue(): com.google.protobuf.ByteString;
					public getStringValue(): string;
				}
				export module Value {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Value,com.google.firestore.v1.Value.Builder> implements com.google.firestore.v1.ValueOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Value.Builder>;
						public setDoubleValue(param0: number): com.google.firestore.v1.Value.Builder;
						public clearValueType(): com.google.firestore.v1.Value.Builder;
						public getStringValueBytes(): com.google.protobuf.ByteString;
						public getDoubleValue(): number;
						public clearNullValue(): com.google.firestore.v1.Value.Builder;
						public clearBooleanValue(): com.google.firestore.v1.Value.Builder;
						public getReferenceValueBytes(): com.google.protobuf.ByteString;
						public hasArrayValue(): boolean;
						public clearIntegerValue(): com.google.firestore.v1.Value.Builder;
						public hasGeoPointValue(): boolean;
						public getTimestampValue(): com.google.protobuf.Timestamp;
						public clearBytesValue(): com.google.firestore.v1.Value.Builder;
						public setArrayValue(param0: com.google.firestore.v1.ArrayValue.Builder): com.google.firestore.v1.Value.Builder;
						public getMapValue(): com.google.firestore.v1.MapValue;
						public getGeoPointValue(): com.google.type.LatLng;
						public getIntegerValue(): number;
						public getReferenceValue(): string;
						public setGeoPointValue(param0: com.google.type.LatLng.Builder): com.google.firestore.v1.Value.Builder;
						public mergeArrayValue(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.Value.Builder;
						public setArrayValue(param0: com.google.firestore.v1.ArrayValue): com.google.firestore.v1.Value.Builder;
						public getNullValueValue(): number;
						public setTimestampValue(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Value.Builder;
						public clearReferenceValue(): com.google.firestore.v1.Value.Builder;
						public clearStringValue(): com.google.firestore.v1.Value.Builder;
						public getStringValue(): string;
						public mergeMapValue(param0: com.google.firestore.v1.MapValue): com.google.firestore.v1.Value.Builder;
						public hasMapValue(): boolean;
						public getArrayValue(): com.google.firestore.v1.ArrayValue;
						public setGeoPointValue(param0: com.google.type.LatLng): com.google.firestore.v1.Value.Builder;
						public getBytesValue(): com.google.protobuf.ByteString;
						public mergeGeoPointValue(param0: com.google.type.LatLng): com.google.firestore.v1.Value.Builder;
						public setNullValue(param0: com.google.protobuf.NullValue): com.google.firestore.v1.Value.Builder;
						public setStringValue(param0: string): com.google.firestore.v1.Value.Builder;
						public clearDoubleValue(): com.google.firestore.v1.Value.Builder;
						public setNullValueValue(param0: number): com.google.firestore.v1.Value.Builder;
						public clearMapValue(): com.google.firestore.v1.Value.Builder;
						public getBooleanValue(): boolean;
						public setStringValueBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Value.Builder;
						public hasTimestampValue(): boolean;
						public setBytesValue(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Value.Builder;
						public getValueTypeCase(): com.google.firestore.v1.Value.ValueTypeCase;
						public getNullValue(): com.google.protobuf.NullValue;
						public setReferenceValueBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Value.Builder;
						public setIntegerValue(param0: number): com.google.firestore.v1.Value.Builder;
						public clearGeoPointValue(): com.google.firestore.v1.Value.Builder;
						public clearArrayValue(): com.google.firestore.v1.Value.Builder;
						public mergeTimestampValue(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.Value.Builder;
						public setMapValue(param0: com.google.firestore.v1.MapValue.Builder): com.google.firestore.v1.Value.Builder;
						public clearTimestampValue(): com.google.firestore.v1.Value.Builder;
						public setReferenceValue(param0: string): com.google.firestore.v1.Value.Builder;
						public setMapValue(param0: com.google.firestore.v1.MapValue): com.google.firestore.v1.Value.Builder;
						public setBooleanValue(param0: boolean): com.google.firestore.v1.Value.Builder;
						public setTimestampValue(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.Value.Builder;
					}
					export class ValueTypeCase {
						public static class: java.lang.Class<com.google.firestore.v1.Value.ValueTypeCase>;
						public static NULL_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static BOOLEAN_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static INTEGER_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static DOUBLE_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static TIMESTAMP_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static STRING_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static BYTES_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static REFERENCE_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static GEO_POINT_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static ARRAY_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static MAP_VALUE: com.google.firestore.v1.Value.ValueTypeCase;
						public static VALUETYPE_NOT_SET: com.google.firestore.v1.Value.ValueTypeCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.Value.ValueTypeCase;
						public getNumber(): number;
						public static values(): androidNative.Array<com.google.firestore.v1.Value.ValueTypeCase>;
						public static forNumber(param0: number): com.google.firestore.v1.Value.ValueTypeCase;
						public static valueOf(param0: string): com.google.firestore.v1.Value.ValueTypeCase;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class ValueOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.ValueOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.ValueOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getNullValueValue(): number;
						getNullValue(): com.google.protobuf.NullValue;
						getBooleanValue(): boolean;
						getIntegerValue(): number;
						getDoubleValue(): number;
						hasTimestampValue(): boolean;
						getTimestampValue(): com.google.protobuf.Timestamp;
						getStringValue(): string;
						getStringValueBytes(): com.google.protobuf.ByteString;
						getBytesValue(): com.google.protobuf.ByteString;
						getReferenceValue(): string;
						getReferenceValueBytes(): com.google.protobuf.ByteString;
						hasGeoPointValue(): boolean;
						getGeoPointValue(): com.google.type.LatLng;
						hasArrayValue(): boolean;
						getArrayValue(): com.google.firestore.v1.ArrayValue;
						hasMapValue(): boolean;
						getMapValue(): com.google.firestore.v1.MapValue;
						getValueTypeCase(): com.google.firestore.v1.Value.ValueTypeCase;
					});
					public constructor();
					public getNullValue(): com.google.protobuf.NullValue;
					public hasArrayValue(): boolean;
					public getIntegerValue(): number;
					public getDoubleValue(): number;
					public getReferenceValue(): string;
					public getMapValue(): com.google.firestore.v1.MapValue;
					public getBooleanValue(): boolean;
					public getReferenceValueBytes(): com.google.protobuf.ByteString;
					public getNullValueValue(): number;
					public hasTimestampValue(): boolean;
					public getGeoPointValue(): com.google.type.LatLng;
					public hasGeoPointValue(): boolean;
					public hasMapValue(): boolean;
					public getValueTypeCase(): com.google.firestore.v1.Value.ValueTypeCase;
					public getArrayValue(): com.google.firestore.v1.ArrayValue;
					public getTimestampValue(): com.google.protobuf.Timestamp;
					public getStringValueBytes(): com.google.protobuf.ByteString;
					public getBytesValue(): com.google.protobuf.ByteString;
					public getStringValue(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class Write extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.Write,com.google.firestore.v1.Write.Builder> implements com.google.firestore.v1.WriteOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.Write>;
					public static UPDATE_FIELD_NUMBER: number;
					public static DELETE_FIELD_NUMBER: number;
					public static VERIFY_FIELD_NUMBER: number;
					public static TRANSFORM_FIELD_NUMBER: number;
					public static UPDATE_MASK_FIELD_NUMBER: number;
					public static UPDATE_TRANSFORMS_FIELD_NUMBER: number;
					public static CURRENT_DOCUMENT_FIELD_NUMBER: number;
					public hasTransform(): boolean;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.Write;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Write;
					public hasCurrentDocument(): boolean;
					public getUpdateMask(): com.google.firestore.v1.DocumentMask;
					public getUpdate(): com.google.firestore.v1.Document;
					public getOperationCase(): com.google.firestore.v1.Write.OperationCase;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Write;
					public hasUpdateMask(): boolean;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static getDefaultInstance(): com.google.firestore.v1.Write;
					public static newBuilder(): com.google.firestore.v1.Write.Builder;
					public getUpdateTransformsCount(): number;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.Write;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.Write;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Write;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Write;
					public getUpdateTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.Write;
					public getUpdateTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
					public hasUpdate(): boolean;
					public getDeleteBytes(): com.google.protobuf.ByteString;
					public getDelete(): string;
					public getTransform(): com.google.firestore.v1.DocumentTransform;
					public getUpdateTransformsOrBuilder(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransformOrBuilder;
					public getUpdateTransformsOrBuilderList(): java.util.List<any>;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Write;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.Write>;
					public static newBuilder(param0: com.google.firestore.v1.Write): com.google.firestore.v1.Write.Builder;
					public getCurrentDocument(): com.google.firestore.v1.Precondition;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Write;
					public getVerifyBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.Write;
					public getVerify(): string;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.Write;
				}
				export module Write {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.Write,com.google.firestore.v1.Write.Builder> implements com.google.firestore.v1.WriteOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.Write.Builder>;
						public setCurrentDocument(param0: com.google.firestore.v1.Precondition.Builder): com.google.firestore.v1.Write.Builder;
						public clearVerify(): com.google.firestore.v1.Write.Builder;
						public getUpdateTransformsCount(): number;
						public removeUpdateTransforms(param0: number): com.google.firestore.v1.Write.Builder;
						public setUpdate(param0: com.google.firestore.v1.Document.Builder): com.google.firestore.v1.Write.Builder;
						public getCurrentDocument(): com.google.firestore.v1.Precondition;
						public mergeUpdate(param0: com.google.firestore.v1.Document): com.google.firestore.v1.Write.Builder;
						public setDelete(param0: string): com.google.firestore.v1.Write.Builder;
						public setTransform(param0: com.google.firestore.v1.DocumentTransform): com.google.firestore.v1.Write.Builder;
						public addUpdateTransforms(param0: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.Write.Builder;
						public setUpdateMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.Write.Builder;
						public clearOperation(): com.google.firestore.v1.Write.Builder;
						public setCurrentDocument(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.Write.Builder;
						public hasCurrentDocument(): boolean;
						public getOperationCase(): com.google.firestore.v1.Write.OperationCase;
						public setUpdateTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.Write.Builder;
						public getDelete(): string;
						public clearUpdateMask(): com.google.firestore.v1.Write.Builder;
						public getUpdateTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
						public clearUpdate(): com.google.firestore.v1.Write.Builder;
						public hasUpdateMask(): boolean;
						public getVerify(): string;
						public clearUpdateTransforms(): com.google.firestore.v1.Write.Builder;
						public getTransform(): com.google.firestore.v1.DocumentTransform;
						public mergeCurrentDocument(param0: com.google.firestore.v1.Precondition): com.google.firestore.v1.Write.Builder;
						public hasTransform(): boolean;
						public setUpdateTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform.Builder): com.google.firestore.v1.Write.Builder;
						public hasUpdate(): boolean;
						public setVerify(param0: string): com.google.firestore.v1.Write.Builder;
						public addUpdateTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform): com.google.firestore.v1.Write.Builder;
						public clearCurrentDocument(): com.google.firestore.v1.Write.Builder;
						public setUpdateMask(param0: com.google.firestore.v1.DocumentMask.Builder): com.google.firestore.v1.Write.Builder;
						public addUpdateTransforms(param0: com.google.firestore.v1.DocumentTransform.FieldTransform.Builder): com.google.firestore.v1.Write.Builder;
						public getUpdateTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
						public clearDelete(): com.google.firestore.v1.Write.Builder;
						public getUpdate(): com.google.firestore.v1.Document;
						public addUpdateTransforms(param0: number, param1: com.google.firestore.v1.DocumentTransform.FieldTransform.Builder): com.google.firestore.v1.Write.Builder;
						public setDeleteBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Write.Builder;
						public setTransform(param0: com.google.firestore.v1.DocumentTransform.Builder): com.google.firestore.v1.Write.Builder;
						public mergeTransform(param0: com.google.firestore.v1.DocumentTransform): com.google.firestore.v1.Write.Builder;
						public getUpdateMask(): com.google.firestore.v1.DocumentMask;
						public setVerifyBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.Write.Builder;
						public clearTransform(): com.google.firestore.v1.Write.Builder;
						public addAllUpdateTransforms(param0: java.lang.Iterable<any>): com.google.firestore.v1.Write.Builder;
						public setUpdate(param0: com.google.firestore.v1.Document): com.google.firestore.v1.Write.Builder;
						public getDeleteBytes(): com.google.protobuf.ByteString;
						public getVerifyBytes(): com.google.protobuf.ByteString;
						public mergeUpdateMask(param0: com.google.firestore.v1.DocumentMask): com.google.firestore.v1.Write.Builder;
					}
					export class OperationCase {
						public static class: java.lang.Class<com.google.firestore.v1.Write.OperationCase>;
						public static UPDATE: com.google.firestore.v1.Write.OperationCase;
						public static DELETE: com.google.firestore.v1.Write.OperationCase;
						public static VERIFY: com.google.firestore.v1.Write.OperationCase;
						public static TRANSFORM: com.google.firestore.v1.Write.OperationCase;
						public static OPERATION_NOT_SET: com.google.firestore.v1.Write.OperationCase;
						public static valueOf(param0: string): com.google.firestore.v1.Write.OperationCase;
						/** @deprecated */
						public static valueOf(param0: number): com.google.firestore.v1.Write.OperationCase;
						public getNumber(): number;
						public static values(): androidNative.Array<com.google.firestore.v1.Write.OperationCase>;
						public static forNumber(param0: number): com.google.firestore.v1.Write.OperationCase;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.WriteOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.WriteOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasUpdate(): boolean;
						getUpdate(): com.google.firestore.v1.Document;
						getDelete(): string;
						getDeleteBytes(): com.google.protobuf.ByteString;
						getVerify(): string;
						getVerifyBytes(): com.google.protobuf.ByteString;
						hasTransform(): boolean;
						getTransform(): com.google.firestore.v1.DocumentTransform;
						hasUpdateMask(): boolean;
						getUpdateMask(): com.google.firestore.v1.DocumentMask;
						getUpdateTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
						getUpdateTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
						getUpdateTransformsCount(): number;
						hasCurrentDocument(): boolean;
						getCurrentDocument(): com.google.firestore.v1.Precondition;
						getOperationCase(): com.google.firestore.v1.Write.OperationCase;
					});
					public constructor();
					public getUpdateTransforms(param0: number): com.google.firestore.v1.DocumentTransform.FieldTransform;
					public getUpdateTransformsList(): java.util.List<com.google.firestore.v1.DocumentTransform.FieldTransform>;
					public hasUpdate(): boolean;
					public hasTransform(): boolean;
					public getDeleteBytes(): com.google.protobuf.ByteString;
					public getDelete(): string;
					public getTransform(): com.google.firestore.v1.DocumentTransform;
					public hasCurrentDocument(): boolean;
					public getCurrentDocument(): com.google.firestore.v1.Precondition;
					public getUpdateMask(): com.google.firestore.v1.DocumentMask;
					public getUpdate(): com.google.firestore.v1.Document;
					public getVerifyBytes(): com.google.protobuf.ByteString;
					public getOperationCase(): com.google.firestore.v1.Write.OperationCase;
					public hasUpdateMask(): boolean;
					public getVerify(): string;
					public getUpdateTransformsCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteProto {
					public static class: java.lang.Class<com.google.firestore.v1.WriteProto>;
					public static registerAllExtensions(param0: com.google.protobuf.ExtensionRegistryLite): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteRequest extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.WriteRequest,com.google.firestore.v1.WriteRequest.Builder> implements com.google.firestore.v1.WriteRequestOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.WriteRequest>;
					public static DATABASE_FIELD_NUMBER: number;
					public static STREAM_ID_FIELD_NUMBER: number;
					public static WRITES_FIELD_NUMBER: number;
					public static STREAM_TOKEN_FIELD_NUMBER: number;
					public static LABELS_FIELD_NUMBER: number;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteRequest;
					public getLabelsOrDefault(param0: string, param1: string): string;
					public getLabelsMap(): java.util.Map<string,string>;
					public getDatabase(): string;
					public getWritesOrBuilderList(): java.util.List<any>;
					public getWritesCount(): number;
					public getLabelsOrThrow(param0: string): string;
					public getLabelsCount(): number;
					public containsLabels(param0: string): boolean;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getWritesOrBuilder(param0: number): com.google.firestore.v1.WriteOrBuilder;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteRequest;
					/** @deprecated */
					public getLabels(): java.util.Map<string,string>;
					public getStreamToken(): com.google.protobuf.ByteString;
					public getWrites(param0: number): com.google.firestore.v1.Write;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.WriteRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.WriteRequest;
					public static newBuilder(param0: com.google.firestore.v1.WriteRequest): com.google.firestore.v1.WriteRequest.Builder;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteRequest;
					public static getDefaultInstance(): com.google.firestore.v1.WriteRequest;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public getStreamId(): string;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.WriteRequest;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteRequest;
					public static newBuilder(): com.google.firestore.v1.WriteRequest.Builder;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.WriteRequest;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.WriteRequest;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteRequest;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteRequest;
					public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteRequest;
					public getStreamIdBytes(): com.google.protobuf.ByteString;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.WriteRequest>;
				}
				export module WriteRequest {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.WriteRequest,com.google.firestore.v1.WriteRequest.Builder> implements com.google.firestore.v1.WriteRequestOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.WriteRequest.Builder>;
						public setDatabase(param0: string): com.google.firestore.v1.WriteRequest.Builder;
						public getWritesCount(): number;
						public setWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firestore.v1.WriteRequest.Builder;
						public clearWrites(): com.google.firestore.v1.WriteRequest.Builder;
						public getWrites(param0: number): com.google.firestore.v1.Write;
						public removeWrites(param0: number): com.google.firestore.v1.WriteRequest.Builder;
						public getStreamId(): string;
						public addAllWrites(param0: java.lang.Iterable<any>): com.google.firestore.v1.WriteRequest.Builder;
						public putAllLabels(param0: java.util.Map<string,string>): com.google.firestore.v1.WriteRequest.Builder;
						public clearLabels(): com.google.firestore.v1.WriteRequest.Builder;
						public clearStreamId(): com.google.firestore.v1.WriteRequest.Builder;
						public setStreamIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteRequest.Builder;
						public addWrites(param0: com.google.firestore.v1.Write.Builder): com.google.firestore.v1.WriteRequest.Builder;
						public getLabelsOrThrow(param0: string): string;
						public setStreamToken(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteRequest.Builder;
						public addWrites(param0: com.google.firestore.v1.Write): com.google.firestore.v1.WriteRequest.Builder;
						public putLabels(param0: string, param1: string): com.google.firestore.v1.WriteRequest.Builder;
						public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
						public getLabelsOrDefault(param0: string, param1: string): string;
						public getStreamToken(): com.google.protobuf.ByteString;
						public getStreamIdBytes(): com.google.protobuf.ByteString;
						public getDatabase(): string;
						public getLabelsCount(): number;
						public clearStreamToken(): com.google.firestore.v1.WriteRequest.Builder;
						public addWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firestore.v1.WriteRequest.Builder;
						public getDatabaseBytes(): com.google.protobuf.ByteString;
						/** @deprecated */
						public getLabels(): java.util.Map<string,string>;
						public setDatabaseBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteRequest.Builder;
						public setWrites(param0: number, param1: com.google.firestore.v1.Write.Builder): com.google.firestore.v1.WriteRequest.Builder;
						public clearDatabase(): com.google.firestore.v1.WriteRequest.Builder;
						public addWrites(param0: number, param1: com.google.firestore.v1.Write): com.google.firestore.v1.WriteRequest.Builder;
						public getLabelsMap(): java.util.Map<string,string>;
						public removeLabels(param0: string): com.google.firestore.v1.WriteRequest.Builder;
						public containsLabels(param0: string): boolean;
						public setStreamId(param0: string): com.google.firestore.v1.WriteRequest.Builder;
					}
					export class LabelsDefaultEntryHolder {
						public static class: java.lang.Class<com.google.firestore.v1.WriteRequest.LabelsDefaultEntryHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteRequestOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.WriteRequestOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.WriteRequestOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDatabase(): string;
						getDatabaseBytes(): com.google.protobuf.ByteString;
						getStreamId(): string;
						getStreamIdBytes(): com.google.protobuf.ByteString;
						getWritesList(): java.util.List<com.google.firestore.v1.Write>;
						getWrites(param0: number): com.google.firestore.v1.Write;
						getWritesCount(): number;
						getStreamToken(): com.google.protobuf.ByteString;
						getLabelsCount(): number;
						containsLabels(param0: string): boolean;
						getLabels(): java.util.Map<string,string>;
						getLabelsMap(): java.util.Map<string,string>;
						getLabelsOrDefault(param0: string, param1: string): string;
						getLabelsOrThrow(param0: string): string;
					});
					public constructor();
					public getLabelsOrDefault(param0: string, param1: string): string;
					public getLabelsMap(): java.util.Map<string,string>;
					public getDatabaseBytes(): com.google.protobuf.ByteString;
					public getStreamId(): string;
					public getDatabase(): string;
					public getWritesCount(): number;
					public getLabelsOrThrow(param0: string): string;
					public getWritesList(): java.util.List<com.google.firestore.v1.Write>;
					public getLabelsCount(): number;
					public containsLabels(param0: string): boolean;
					public getStreamIdBytes(): com.google.protobuf.ByteString;
					/** @deprecated */
					public getLabels(): java.util.Map<string,string>;
					public getStreamToken(): com.google.protobuf.ByteString;
					public getWrites(param0: number): com.google.firestore.v1.Write;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteResponse extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.WriteResponse,com.google.firestore.v1.WriteResponse.Builder> implements com.google.firestore.v1.WriteResponseOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.WriteResponse>;
					public static STREAM_ID_FIELD_NUMBER: number;
					public static STREAM_TOKEN_FIELD_NUMBER: number;
					public static WRITE_RESULTS_FIELD_NUMBER: number;
					public static COMMIT_TIME_FIELD_NUMBER: number;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResponse;
					public getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
					public getWriteResultsCount(): number;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResponse;
					public hasCommitTime(): boolean;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResponse;
					public getStreamToken(): com.google.protobuf.ByteString;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.WriteResponse;
					public static newBuilder(param0: com.google.firestore.v1.WriteResponse): com.google.firestore.v1.WriteResponse.Builder;
					public static newBuilder(): com.google.firestore.v1.WriteResponse.Builder;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.WriteResponse;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResponse;
					public getStreamId(): string;
					public getWriteResultsOrBuilderList(): java.util.List<any>;
					public static getDefaultInstance(): com.google.firestore.v1.WriteResponse;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.WriteResponse>;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.WriteResponse;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResponse;
					public getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
					public getWriteResultsOrBuilder(param0: number): com.google.firestore.v1.WriteResultOrBuilder;
					public getCommitTime(): com.google.protobuf.Timestamp;
					public getStreamIdBytes(): com.google.protobuf.ByteString;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteResponse;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResponse;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.WriteResponse;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.WriteResponse;
				}
				export module WriteResponse {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.WriteResponse,com.google.firestore.v1.WriteResponse.Builder> implements com.google.firestore.v1.WriteResponseOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.WriteResponse.Builder>;
						public addWriteResults(param0: com.google.firestore.v1.WriteResult): com.google.firestore.v1.WriteResponse.Builder;
						public getStreamId(): string;
						public mergeCommitTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.WriteResponse.Builder;
						public setCommitTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.WriteResponse.Builder;
						public clearWriteResults(): com.google.firestore.v1.WriteResponse.Builder;
						public setWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult): com.google.firestore.v1.WriteResponse.Builder;
						public setStreamIdBytes(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteResponse.Builder;
						public setStreamToken(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteResponse.Builder;
						public addWriteResults(param0: com.google.firestore.v1.WriteResult.Builder): com.google.firestore.v1.WriteResponse.Builder;
						public removeWriteResults(param0: number): com.google.firestore.v1.WriteResponse.Builder;
						public hasCommitTime(): boolean;
						public clearCommitTime(): com.google.firestore.v1.WriteResponse.Builder;
						public setCommitTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.WriteResponse.Builder;
						public setWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult.Builder): com.google.firestore.v1.WriteResponse.Builder;
						public getStreamToken(): com.google.protobuf.ByteString;
						public getStreamIdBytes(): com.google.protobuf.ByteString;
						public addWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult): com.google.firestore.v1.WriteResponse.Builder;
						public getCommitTime(): com.google.protobuf.Timestamp;
						public setStreamId(param0: string): com.google.firestore.v1.WriteResponse.Builder;
						public getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
						public addWriteResults(param0: number, param1: com.google.firestore.v1.WriteResult.Builder): com.google.firestore.v1.WriteResponse.Builder;
						public clearStreamToken(): com.google.firestore.v1.WriteResponse.Builder;
						public getWriteResultsCount(): number;
						public getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
						public clearStreamId(): com.google.firestore.v1.WriteResponse.Builder;
						public addAllWriteResults(param0: java.lang.Iterable<any>): com.google.firestore.v1.WriteResponse.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteResponseOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.WriteResponseOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.WriteResponseOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getStreamId(): string;
						getStreamIdBytes(): com.google.protobuf.ByteString;
						getStreamToken(): com.google.protobuf.ByteString;
						getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
						getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
						getWriteResultsCount(): number;
						hasCommitTime(): boolean;
						getCommitTime(): com.google.protobuf.Timestamp;
					});
					public constructor();
					public getWriteResultsList(): java.util.List<com.google.firestore.v1.WriteResult>;
					public getWriteResults(param0: number): com.google.firestore.v1.WriteResult;
					public getWriteResultsCount(): number;
					public hasCommitTime(): boolean;
					public getCommitTime(): com.google.protobuf.Timestamp;
					public getStreamIdBytes(): com.google.protobuf.ByteString;
					public getStreamId(): string;
					public getStreamToken(): com.google.protobuf.ByteString;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteResult extends com.google.protobuf.GeneratedMessageLite<com.google.firestore.v1.WriteResult,com.google.firestore.v1.WriteResult.Builder> implements com.google.firestore.v1.WriteResultOrBuilder  {
					public static class: java.lang.Class<com.google.firestore.v1.WriteResult>;
					public static UPDATE_TIME_FIELD_NUMBER: number;
					public static TRANSFORM_RESULTS_FIELD_NUMBER: number;
					public static parser(): com.google.protobuf.Parser<com.google.firestore.v1.WriteResult>;
					public static parseFrom(param0: com.google.protobuf.ByteString): com.google.firestore.v1.WriteResult;
					public static getDefaultInstance(): com.google.firestore.v1.WriteResult;
					public static parseFrom(param0: java.nio.ByteBuffer): com.google.firestore.v1.WriteResult;
					public static newBuilder(param0: com.google.firestore.v1.WriteResult): com.google.firestore.v1.WriteResult.Builder;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResult;
					public getTransformResultsOrBuilder(param0: number): com.google.firestore.v1.ValueOrBuilder;
					public static newBuilder(): com.google.firestore.v1.WriteResult.Builder;
					public hasUpdateTime(): boolean;
					public getTransformResultsCount(): number;
					public static parseFrom(param0: androidNative.Array<number>, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResult;
					public static parseFrom(param0: com.google.protobuf.CodedInputStream): com.google.firestore.v1.WriteResult;
					public static parseFrom(param0: androidNative.Array<number>): com.google.firestore.v1.WriteResult;
					public getUpdateTime(): com.google.protobuf.Timestamp;
					public static parseFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResult;
					public static parseDelimitedFrom(param0: java.io.InputStream, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResult;
					public getTransformResultsOrBuilderList(): java.util.List<any>;
					public static parseFrom(param0: java.nio.ByteBuffer, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResult;
					public static parseFrom(param0: com.google.protobuf.ByteString, param1: com.google.protobuf.ExtensionRegistryLite): com.google.firestore.v1.WriteResult;
					public getTransformResultsList(): java.util.List<com.google.firestore.v1.Value>;
					public dynamicMethod(param0: com.google.protobuf.GeneratedMessageLite.MethodToInvoke, param1: any, param2: any): any;
					public getTransformResults(param0: number): com.google.firestore.v1.Value;
					public static parseFrom(param0: java.io.InputStream): com.google.firestore.v1.WriteResult;
					public static parseDelimitedFrom(param0: java.io.InputStream): com.google.firestore.v1.WriteResult;
				}
				export module WriteResult {
					export class Builder extends com.google.protobuf.GeneratedMessageLite.Builder<com.google.firestore.v1.WriteResult,com.google.firestore.v1.WriteResult.Builder> implements com.google.firestore.v1.WriteResultOrBuilder  {
						public static class: java.lang.Class<com.google.firestore.v1.WriteResult.Builder>;
						public getTransformResultsList(): java.util.List<com.google.firestore.v1.Value>;
						public getTransformResults(param0: number): com.google.firestore.v1.Value;
						public addTransformResults(param0: number, param1: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.WriteResult.Builder;
						public setTransformResults(param0: number, param1: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.WriteResult.Builder;
						public getTransformResultsCount(): number;
						public setUpdateTime(param0: com.google.protobuf.Timestamp.Builder): com.google.firestore.v1.WriteResult.Builder;
						public getUpdateTime(): com.google.protobuf.Timestamp;
						public removeTransformResults(param0: number): com.google.firestore.v1.WriteResult.Builder;
						public hasUpdateTime(): boolean;
						public clearTransformResults(): com.google.firestore.v1.WriteResult.Builder;
						public setTransformResults(param0: number, param1: com.google.firestore.v1.Value): com.google.firestore.v1.WriteResult.Builder;
						public addAllTransformResults(param0: java.lang.Iterable<any>): com.google.firestore.v1.WriteResult.Builder;
						public mergeUpdateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.WriteResult.Builder;
						public addTransformResults(param0: com.google.firestore.v1.Value.Builder): com.google.firestore.v1.WriteResult.Builder;
						public addTransformResults(param0: com.google.firestore.v1.Value): com.google.firestore.v1.WriteResult.Builder;
						public clearUpdateTime(): com.google.firestore.v1.WriteResult.Builder;
						public setUpdateTime(param0: com.google.protobuf.Timestamp): com.google.firestore.v1.WriteResult.Builder;
						public addTransformResults(param0: number, param1: com.google.firestore.v1.Value): com.google.firestore.v1.WriteResult.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firestore {
			export module v1 {
				export class WriteResultOrBuilder {
					public static class: java.lang.Class<com.google.firestore.v1.WriteResultOrBuilder>;
					/**
					 * Constructs a new instance of the com.google.firestore.v1.WriteResultOrBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasUpdateTime(): boolean;
						getUpdateTime(): com.google.protobuf.Timestamp;
						getTransformResultsList(): java.util.List<com.google.firestore.v1.Value>;
						getTransformResults(param0: number): com.google.firestore.v1.Value;
						getTransformResultsCount(): number;
					});
					public constructor();
					public getUpdateTime(): com.google.protobuf.Timestamp;
					public getTransformResultsList(): java.util.List<com.google.firestore.v1.Value>;
					public getTransformResults(param0: number): com.google.firestore.v1.Value;
					public hasUpdateTime(): boolean;
					public getTransformResultsCount(): number;
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.firestore.EventListener:1
//com.google.firebase.firestore.OnProgressListener:1
//com.google.firebase.firestore.Transaction.Function:1
//com.google.firebase.firestore.core.AsyncEventListener:1
//com.google.firebase.firestore.core.TransactionRunner:1
//com.google.firebase.firestore.model.BasePath:1
//com.google.firebase.firestore.remote.AbstractStream:3
//com.google.firebase.firestore.remote.IncomingStreamObserver:1
//com.google.firebase.firestore.remote.Stream:1
//com.google.firebase.firestore.util.Consumer:1
//com.google.firebase.firestore.util.CustomClassMapper.BeanMapper:1
//com.google.firebase.firestore.util.Function:2
//com.google.firebase.firestore.util.Listener:1
//com.google.firebase.firestore.util.Supplier:1
//com.google.firestore.v1.FirestoreGrpc.MethodHandlers:2

