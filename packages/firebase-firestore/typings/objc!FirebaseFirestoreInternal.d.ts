declare class FIRAggregateField extends NSObject {
	static aggregateFieldForAverageOfField(field: string): FIRAggregateField;

	static aggregateFieldForAverageOfFieldPath(fieldPath: FIRFieldPath): FIRAggregateField;

	static aggregateFieldForCount(): FIRAggregateField;

	static aggregateFieldForSumOfField(field: string): FIRAggregateField;

	static aggregateFieldForSumOfFieldPath(fieldPath: FIRFieldPath): FIRAggregateField;

	static alloc(): FIRAggregateField; // inherited from NSObject

	static new(): FIRAggregateField; // inherited from NSObject
}

declare class FIRAggregateQuery extends NSObject {
	static alloc(): FIRAggregateQuery; // inherited from NSObject

	static new(): FIRAggregateQuery; // inherited from NSObject

	readonly query: FIRQuery;

	aggregationWithSourceCompletion(source: FIRAggregateSource, completion: (p1: FIRAggregateQuerySnapshot, p2: NSError) => void): void;
}

declare class FIRAggregateQuerySnapshot extends NSObject {
	static alloc(): FIRAggregateQuerySnapshot; // inherited from NSObject

	static new(): FIRAggregateQuerySnapshot; // inherited from NSObject

	readonly count: number;

	readonly query: FIRAggregateQuery;

	valueForAggregateField(aggregateField: FIRAggregateField): any;
}

declare const enum FIRAggregateSource {
	Server = 0,
}

declare class FIRCollectionReference extends FIRQuery {
	static alloc(): FIRCollectionReference; // inherited from NSObject

	static new(): FIRCollectionReference; // inherited from NSObject

	readonly collectionID: string;

	readonly parent: FIRDocumentReference;

	readonly path: string;

	addDocumentWithData(data: NSDictionary<string, any>): FIRDocumentReference;

	addDocumentWithDataCompletion(data: NSDictionary<string, any>, completion: (p1: NSError) => void): FIRDocumentReference;

	documentWithAutoID(): FIRDocumentReference;

	documentWithPath(documentPath: string): FIRDocumentReference;
}

declare class FIRDocumentChange extends NSObject {
	static alloc(): FIRDocumentChange; // inherited from NSObject

	static new(): FIRDocumentChange; // inherited from NSObject

	readonly document: FIRQueryDocumentSnapshot;

	readonly newIndex: number;

	readonly oldIndex: number;

	readonly type: FIRDocumentChangeType;
}

declare const enum FIRDocumentChangeType {
	Added = 0,

	Modified = 1,

	Removed = 2,
}

declare class FIRDocumentReference extends NSObject {
	static alloc(): FIRDocumentReference; // inherited from NSObject

	static new(): FIRDocumentReference; // inherited from NSObject

	readonly documentID: string;

	readonly firestore: FIRFirestore;

	readonly parent: FIRCollectionReference;

	readonly path: string;

	addSnapshotListener(listener: (p1: FIRDocumentSnapshot, p2: NSError) => void): FIRListenerRegistration;

	addSnapshotListenerWithIncludeMetadataChangesListener(includeMetadataChanges: boolean, listener: (p1: FIRDocumentSnapshot, p2: NSError) => void): FIRListenerRegistration;

	collectionWithPath(collectionPath: string): FIRCollectionReference;

	deleteDocument(): void;

	deleteDocumentWithCompletion(completion: (p1: NSError) => void): void;

	getDocumentWithCompletion(completion: (p1: FIRDocumentSnapshot, p2: NSError) => void): void;

	getDocumentWithSourceCompletion(source: FIRFirestoreSource, completion: (p1: FIRDocumentSnapshot, p2: NSError) => void): void;

	setData(documentData: NSDictionary<string, any>): void;

	setDataCompletion(documentData: NSDictionary<string, any>, completion: (p1: NSError) => void): void;

	setDataMerge(documentData: NSDictionary<string, any>, merge: boolean): void;

	setDataMergeCompletion(documentData: NSDictionary<string, any>, merge: boolean, completion: (p1: NSError) => void): void;

	setDataMergeFields(documentData: NSDictionary<string, any>, mergeFields: NSArray<any> | any[]): void;

	setDataMergeFieldsCompletion(documentData: NSDictionary<string, any>, mergeFields: NSArray<any> | any[], completion: (p1: NSError) => void): void;

	updateData(fields: NSDictionary<any, any>): void;

	updateDataCompletion(fields: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
}

declare class FIRDocumentSnapshot extends NSObject {
	static alloc(): FIRDocumentSnapshot; // inherited from NSObject

	static new(): FIRDocumentSnapshot; // inherited from NSObject

	readonly documentID: string;

	readonly exists: boolean;

	readonly metadata: FIRSnapshotMetadata;

	readonly reference: FIRDocumentReference;

	data(): NSDictionary<string, any>;

	dataWithServerTimestampBehavior(serverTimestampBehavior: FIRServerTimestampBehavior): NSDictionary<string, any>;

	objectForKeyedSubscript(key: any): any;

	valueForField(field: any): any;

	valueForFieldServerTimestampBehavior(field: any, serverTimestampBehavior: FIRServerTimestampBehavior): any;
}

declare class FIRFieldPath extends NSObject implements NSCopying {
	static alloc(): FIRFieldPath; // inherited from NSObject

	static documentID(): FIRFieldPath;

	static new(): FIRFieldPath; // inherited from NSObject

	constructor(o: { fields: NSArray<string> | string[] });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithFields(fieldNames: NSArray<string> | string[]): this;
}

declare class FIRFieldValue extends NSObject {
	static alloc(): FIRFieldValue; // inherited from NSObject

	static fieldValueForArrayRemove(elements: NSArray<any> | any[]): FIRFieldValue;

	static fieldValueForArrayUnion(elements: NSArray<any> | any[]): FIRFieldValue;

	static fieldValueForDelete(): FIRFieldValue;

	static fieldValueForDoubleIncrement(d: number): FIRFieldValue;

	static fieldValueForIntegerIncrement(l: number): FIRFieldValue;

	static fieldValueForServerTimestamp(): FIRFieldValue;

	static new(): FIRFieldValue; // inherited from NSObject
}

declare class FIRFilter extends NSObject {
	static alloc(): FIRFilter; // inherited from NSObject

	static andFilterWithFilters(filters: NSArray<FIRFilter> | FIRFilter[]): FIRFilter;

	static filterWhereFieldArrayContains(field: string, value: any): FIRFilter;

	static filterWhereFieldArrayContainsAny(field: string, values: NSArray<any> | any[]): FIRFilter;

	static filterWhereFieldIn(field: string, values: NSArray<any> | any[]): FIRFilter;

	static filterWhereFieldIsEqualTo(field: string, value: any): FIRFilter;

	static filterWhereFieldIsGreaterThan(field: string, value: any): FIRFilter;

	static filterWhereFieldIsGreaterThanOrEqualTo(field: string, value: any): FIRFilter;

	static filterWhereFieldIsLessThan(field: string, value: any): FIRFilter;

	static filterWhereFieldIsLessThanOrEqualTo(field: string, value: any): FIRFilter;

	static filterWhereFieldIsNotEqualTo(field: string, value: any): FIRFilter;

	static filterWhereFieldNotIn(field: string, values: NSArray<any> | any[]): FIRFilter;

	static filterWhereFieldPathArrayContains(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathArrayContainsAny(path: FIRFieldPath, values: NSArray<any> | any[]): FIRFilter;

	static filterWhereFieldPathIn(path: FIRFieldPath, values: NSArray<any> | any[]): FIRFilter;

	static filterWhereFieldPathIsEqualTo(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathIsGreaterThan(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathIsGreaterThanOrEqualTo(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathIsLessThan(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathIsLessThanOrEqualTo(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathIsNotEqualTo(path: FIRFieldPath, value: any): FIRFilter;

	static filterWhereFieldPathNotIn(path: FIRFieldPath, values: NSArray<any> | any[]): FIRFilter;

	static new(): FIRFilter; // inherited from NSObject

	static orFilterWithFilters(filters: NSArray<FIRFilter> | FIRFilter[]): FIRFilter;
}

declare class FIRFirestore extends NSObject {
	static alloc(): FIRFirestore; // inherited from NSObject

	static enableLogging(logging: boolean): void;

	static firestore(): FIRFirestore;

	static firestoreForApp(app: FIRApp): FIRFirestore;

	static firestoreForAppDatabase(app: FIRApp, database: string): FIRFirestore;

	static firestoreForDatabase(database: string): FIRFirestore;

	static new(): FIRFirestore; // inherited from NSObject

	readonly app: FIRApp;

	readonly persistentCacheIndexManager: FIRPersistentCacheIndexManager;

	settings: FIRFirestoreSettings;

	addSnapshotsInSyncListener(listener: () => void): FIRListenerRegistration;

	batch(): FIRWriteBatch;

	clearPersistenceWithCompletion(completion: (p1: NSError) => void): void;

	collectionGroupWithID(collectionID: string): FIRQuery;

	collectionWithPath(collectionPath: string): FIRCollectionReference;

	disableNetworkWithCompletion(completion: (p1: NSError) => void): void;

	documentWithPath(documentPath: string): FIRDocumentReference;

	enableNetworkWithCompletion(completion: (p1: NSError) => void): void;

	getQueryNamedCompletion(name: string, completion: (p1: FIRQuery) => void): void;

	loadBundle(bundleData: NSData): FIRLoadBundleTask;

	loadBundleCompletion(bundleData: NSData, completion: (p1: FIRLoadBundleTaskProgress, p2: NSError) => void): FIRLoadBundleTask;

	loadBundleStream(bundleStream: NSInputStream): FIRLoadBundleTask;

	loadBundleStreamCompletion(bundleStream: NSInputStream, completion: (p1: FIRLoadBundleTaskProgress, p2: NSError) => void): FIRLoadBundleTask;

	runTransactionWithBlockCompletion(updateBlock: (p1: FIRTransaction, p2: interop.Pointer | interop.Reference<NSError>) => any, completion: (p1: any, p2: NSError) => void): void;

	runTransactionWithOptionsBlockCompletion(options: FIRTransactionOptions, updateBlock: (p1: FIRTransaction, p2: interop.Pointer | interop.Reference<NSError>) => any, completion: (p1: any, p2: NSError) => void): void;

	setIndexConfigurationFromJSONCompletion(json: string, completion: (p1: NSError) => void): void;

	setIndexConfigurationFromStreamCompletion(stream: NSInputStream, completion: (p1: NSError) => void): void;

	terminateWithCompletion(completion: (p1: NSError) => void): void;

	useEmulatorWithHostPort(host: string, port: number): void;

	waitForPendingWritesWithCompletion(completion: (p1: NSError) => void): void;
}

declare const enum FIRFirestoreErrorCode {
	OK = 0,

	Cancelled = 1,

	Unknown = 2,

	InvalidArgument = 3,

	DeadlineExceeded = 4,

	NotFound = 5,

	AlreadyExists = 6,

	PermissionDenied = 7,

	ResourceExhausted = 8,

	FailedPrecondition = 9,

	Aborted = 10,

	OutOfRange = 11,

	Unimplemented = 12,

	Internal = 13,

	Unavailable = 14,

	DataLoss = 15,

	Unauthenticated = 16,
}

declare var FIRFirestoreErrorDomain: string;

declare class FIRFirestoreSettings extends NSObject implements NSCopying {
	static alloc(): FIRFirestoreSettings; // inherited from NSObject

	static new(): FIRFirestoreSettings; // inherited from NSObject

	cacheSettings: any;

	cacheSizeBytes: number;

	host: string;

	persistenceEnabled: boolean;

	sslEnabled: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum FIRFirestoreSource {
	Default = 0,

	Server = 1,

	Cache = 2,
}

declare class FIRGeoPoint extends NSObject implements NSCopying {
	static alloc(): FIRGeoPoint; // inherited from NSObject

	static new(): FIRGeoPoint; // inherited from NSObject

	readonly latitude: number;

	readonly longitude: number;

	constructor(o: { latitude: number; longitude: number });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithLatitudeLongitude(latitude: number, longitude: number): this;
}

interface FIRListenerRegistration extends NSObjectProtocol {
	remove(): void;
}
declare var FIRListenerRegistration: {
	prototype: FIRListenerRegistration;
};

declare class FIRLoadBundleTask extends NSObject {
	static alloc(): FIRLoadBundleTask; // inherited from NSObject

	static new(): FIRLoadBundleTask; // inherited from NSObject

	addObserver(observer: (p1: FIRLoadBundleTaskProgress) => void): number;

	removeAllObservers(): void;

	removeObserverWithHandle(handle: number): void;
}

declare class FIRLoadBundleTaskProgress extends NSObject {
	static alloc(): FIRLoadBundleTaskProgress; // inherited from NSObject

	static new(): FIRLoadBundleTaskProgress; // inherited from NSObject

	readonly bytesLoaded: number;

	readonly documentsLoaded: number;

	readonly state: FIRLoadBundleTaskState;

	readonly totalBytes: number;

	readonly totalDocuments: number;
}

declare const enum FIRLoadBundleTaskState {
	Error = 0,

	InProgress = 1,

	Success = 2,
}

interface FIRLocalCacheSettings {}
declare var FIRLocalCacheSettings: {
	prototype: FIRLocalCacheSettings;
};

declare class FIRMemoryCacheSettings extends NSObject implements FIRLocalCacheSettings, NSCopying {
	static alloc(): FIRMemoryCacheSettings; // inherited from NSObject

	static new(): FIRMemoryCacheSettings; // inherited from NSObject

	constructor(o: { garbageCollectorSettings: any });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithGarbageCollectorSettings(settings: any): this;
}

declare class FIRMemoryEagerGCSettings extends NSObject implements FIRMemoryGarbageCollectorSettings, NSCopying {
	static alloc(): FIRMemoryEagerGCSettings; // inherited from NSObject

	static new(): FIRMemoryEagerGCSettings; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface FIRMemoryGarbageCollectorSettings {}
declare var FIRMemoryGarbageCollectorSettings: {
	prototype: FIRMemoryGarbageCollectorSettings;
};

declare class FIRMemoryLRUGCSettings extends NSObject implements FIRMemoryGarbageCollectorSettings, NSCopying {
	static alloc(): FIRMemoryLRUGCSettings; // inherited from NSObject

	static new(): FIRMemoryLRUGCSettings; // inherited from NSObject

	constructor(o: { sizeBytes: number });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSizeBytes(size: number): this;
}

declare class FIRPersistentCacheIndexManager extends NSObject {
	static alloc(): FIRPersistentCacheIndexManager; // inherited from NSObject

	static new(): FIRPersistentCacheIndexManager; // inherited from NSObject

	deleteAllIndexes(): void;

	disableIndexAutoCreation(): void;

	enableIndexAutoCreation(): void;
}

declare class FIRPersistentCacheSettings extends NSObject implements FIRLocalCacheSettings, NSCopying {
	static alloc(): FIRPersistentCacheSettings; // inherited from NSObject

	static new(): FIRPersistentCacheSettings; // inherited from NSObject

	constructor(o: { sizeBytes: number });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSizeBytes(size: number): this;
}

declare class FIRQuery extends NSObject {
	static alloc(): FIRQuery; // inherited from NSObject

	static new(): FIRQuery; // inherited from NSObject

	readonly count: FIRAggregateQuery;

	readonly firestore: FIRFirestore;

	addSnapshotListener(listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

	addSnapshotListenerWithIncludeMetadataChangesListener(includeMetadataChanges: boolean, listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

	aggregate(aggregateFields: NSArray<FIRAggregateField> | FIRAggregateField[]): FIRAggregateQuery;

	getDocumentsWithCompletion(completion: (p1: FIRQuerySnapshot, p2: NSError) => void): void;

	getDocumentsWithSourceCompletion(source: FIRFirestoreSource, completion: (p1: FIRQuerySnapshot, p2: NSError) => void): void;

	queryEndingAtDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryEndingAtValues(fieldValues: NSArray<any> | any[]): FIRQuery;

	queryEndingBeforeDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryEndingBeforeValues(fieldValues: NSArray<any> | any[]): FIRQuery;

	queryFilteredUsingPredicate(predicate: NSPredicate): FIRQuery;

	queryLimitedTo(limit: number): FIRQuery;

	queryLimitedToLast(limit: number): FIRQuery;

	queryOrderedByField(field: string): FIRQuery;

	queryOrderedByFieldDescending(field: string, descending: boolean): FIRQuery;

	queryOrderedByFieldPath(path: FIRFieldPath): FIRQuery;

	queryOrderedByFieldPathDescending(path: FIRFieldPath, descending: boolean): FIRQuery;

	queryStartingAfterDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryStartingAfterValues(fieldValues: NSArray<any> | any[]): FIRQuery;

	queryStartingAtDocument(document: FIRDocumentSnapshot): FIRQuery;

	queryStartingAtValues(fieldValues: NSArray<any> | any[]): FIRQuery;

	queryWhereFieldArrayContains(field: string, value: any): FIRQuery;

	queryWhereFieldArrayContainsAny(field: string, values: NSArray<any> | any[]): FIRQuery;

	queryWhereFieldIn(field: string, values: NSArray<any> | any[]): FIRQuery;

	queryWhereFieldIsEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldIsGreaterThan(field: string, value: any): FIRQuery;

	queryWhereFieldIsGreaterThanOrEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldIsLessThan(field: string, value: any): FIRQuery;

	queryWhereFieldIsLessThanOrEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldIsNotEqualTo(field: string, value: any): FIRQuery;

	queryWhereFieldNotIn(field: string, values: NSArray<any> | any[]): FIRQuery;

	queryWhereFieldPathArrayContains(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathArrayContainsAny(path: FIRFieldPath, values: NSArray<any> | any[]): FIRQuery;

	queryWhereFieldPathIn(path: FIRFieldPath, values: NSArray<any> | any[]): FIRQuery;

	queryWhereFieldPathIsEqualTo(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsGreaterThan(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsGreaterThanOrEqualTo(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsLessThan(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsLessThanOrEqualTo(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathIsNotEqualTo(path: FIRFieldPath, value: any): FIRQuery;

	queryWhereFieldPathNotIn(path: FIRFieldPath, values: NSArray<any> | any[]): FIRQuery;

	queryWhereFilter(filter: FIRFilter): FIRQuery;
}

declare class FIRQueryDocumentSnapshot extends FIRDocumentSnapshot {
	static alloc(): FIRQueryDocumentSnapshot; // inherited from NSObject

	static new(): FIRQueryDocumentSnapshot; // inherited from NSObject
}

declare class FIRQuerySnapshot extends NSObject {
	static alloc(): FIRQuerySnapshot; // inherited from NSObject

	static new(): FIRQuerySnapshot; // inherited from NSObject

	readonly count: number;

	readonly documentChanges: NSArray<FIRDocumentChange>;

	readonly documents: NSArray<FIRQueryDocumentSnapshot>;

	readonly empty: boolean;

	readonly metadata: FIRSnapshotMetadata;

	readonly query: FIRQuery;

	documentChangesWithIncludeMetadataChanges(includeMetadataChanges: boolean): NSArray<FIRDocumentChange>;
}

declare const enum FIRServerTimestampBehavior {
	None = 0,

	Estimate = 1,

	Previous = 2,
}

declare class FIRSnapshotMetadata extends NSObject {
	static alloc(): FIRSnapshotMetadata; // inherited from NSObject

	static new(): FIRSnapshotMetadata; // inherited from NSObject

	readonly fromCache: boolean;

	readonly pendingWrites: boolean;
}

declare class FIRTimestamp extends NSObject implements NSCopying {
	static alloc(): FIRTimestamp; // inherited from NSObject

	static new(): FIRTimestamp; // inherited from NSObject

	static timestamp(): FIRTimestamp;

	static timestampWithDate(date: Date): FIRTimestamp;

	static timestampWithSecondsNanoseconds(seconds: number, nanoseconds: number): FIRTimestamp;

	readonly nanoseconds: number;

	readonly seconds: number;

	constructor(o: { seconds: number; nanoseconds: number });

	compare(other: FIRTimestamp): NSComparisonResult;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dateValue(): Date;

	initWithSecondsNanoseconds(seconds: number, nanoseconds: number): this;
}

declare class FIRTransaction extends NSObject {
	static alloc(): FIRTransaction; // inherited from NSObject

	static new(): FIRTransaction; // inherited from NSObject

	deleteDocument(document: FIRDocumentReference): FIRTransaction;

	getDocumentError(document: FIRDocumentReference): FIRDocumentSnapshot;

	setDataForDocument(data: NSDictionary<string, any>, document: FIRDocumentReference): FIRTransaction;

	setDataForDocumentMerge(data: NSDictionary<string, any>, document: FIRDocumentReference, merge: boolean): FIRTransaction;

	setDataForDocumentMergeFields(data: NSDictionary<string, any>, document: FIRDocumentReference, mergeFields: NSArray<any> | any[]): FIRTransaction;

	updateDataForDocument(fields: NSDictionary<any, any>, document: FIRDocumentReference): FIRTransaction;
}

declare class FIRTransactionOptions extends NSObject implements NSCopying {
	static alloc(): FIRTransactionOptions; // inherited from NSObject

	static new(): FIRTransactionOptions; // inherited from NSObject

	maxAttempts: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class FIRWriteBatch extends NSObject {
	static alloc(): FIRWriteBatch; // inherited from NSObject

	static new(): FIRWriteBatch; // inherited from NSObject

	commit(): void;

	commitWithCompletion(completion: (p1: NSError) => void): void;

	deleteDocument(document: FIRDocumentReference): FIRWriteBatch;

	setDataForDocument(data: NSDictionary<string, any>, document: FIRDocumentReference): FIRWriteBatch;

	setDataForDocumentMerge(data: NSDictionary<string, any>, document: FIRDocumentReference, merge: boolean): FIRWriteBatch;

	setDataForDocumentMergeFields(data: NSDictionary<string, any>, document: FIRDocumentReference, mergeFields: NSArray<any> | any[]): FIRWriteBatch;

	updateDataForDocument(fields: NSDictionary<any, any>, document: FIRDocumentReference): FIRWriteBatch;
}

declare var FirebaseFirestoreInternalVersionNumber: number;

declare var FirebaseFirestoreInternalVersionString: interop.Reference<number>;

declare var kFIRFirestoreCacheSizeUnlimited: number;
