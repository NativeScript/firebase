declare class FIRAddFieldsStageBridge extends FIRStageBridge {
	static alloc(): FIRAddFieldsStageBridge; // inherited from NSObject

	static new(): FIRAddFieldsStageBridge; // inherited from NSObject

	constructor(o: { fields: NSDictionary<string, FIRExprBridge> });

	initWithFields(fields: NSDictionary<string, FIRExprBridge>): this;
}

declare class FIRAggregateField extends NSObject {
	static aggregateFieldForAverageOfField(field: string): FIRAggregateField;

	static aggregateFieldForAverageOfFieldPath(fieldPath: FIRFieldPath): FIRAggregateField;

	static aggregateFieldForCount(): FIRAggregateField;

	static aggregateFieldForSumOfField(field: string): FIRAggregateField;

	static aggregateFieldForSumOfFieldPath(fieldPath: FIRFieldPath): FIRAggregateField;

	static alloc(): FIRAggregateField; // inherited from NSObject

	static new(): FIRAggregateField; // inherited from NSObject
}

declare class FIRAggregateFunctionBridge extends NSObject {
	static alloc(): FIRAggregateFunctionBridge; // inherited from NSObject

	static new(): FIRAggregateFunctionBridge; // inherited from NSObject

	constructor(o: { name: string; args: NSArray<FIRExprBridge> | FIRExprBridge[] });

	initWithNameArgs(name: string, args: NSArray<FIRExprBridge> | FIRExprBridge[]): this;
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

declare class FIRAggregateStageBridge extends FIRStageBridge {
	static alloc(): FIRAggregateStageBridge; // inherited from NSObject

	static new(): FIRAggregateStageBridge; // inherited from NSObject

	constructor(o: { accumulators: NSDictionary<string, FIRAggregateFunctionBridge>; groups: NSDictionary<string, FIRExprBridge> });

	initWithAccumulatorsGroups(accumulators: NSDictionary<string, FIRAggregateFunctionBridge>, groups: NSDictionary<string, FIRExprBridge>): this;
}

declare class FIRCollectionGroupSourceStageBridge extends FIRStageBridge {
	static alloc(): FIRCollectionGroupSourceStageBridge; // inherited from NSObject

	static new(): FIRCollectionGroupSourceStageBridge; // inherited from NSObject

	constructor(o: { collectionId: string; forceIndex: string });

	initWithCollectionIdForceIndex(id: string, force_index: string): this;
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

declare class FIRCollectionSourceStageBridge extends FIRStageBridge {
	static alloc(): FIRCollectionSourceStageBridge; // inherited from NSObject

	static new(): FIRCollectionSourceStageBridge; // inherited from NSObject

	constructor(o: { ref: FIRCollectionReference; firestore: FIRFirestore; forceIndex: string });

	initWithRefFirestoreForceIndex(ref: FIRCollectionReference, db: FIRFirestore, force_index: string): this;
}

declare class FIRConstantBridge extends FIRExprBridge {
	static alloc(): FIRConstantBridge; // inherited from NSObject

	static new(): FIRConstantBridge; // inherited from NSObject

	constructor();

	init(input: any): this;
}

declare class FIRDatabaseSourceStageBridge extends FIRStageBridge {
	static alloc(): FIRDatabaseSourceStageBridge; // inherited from NSObject

	static new(): FIRDatabaseSourceStageBridge; // inherited from NSObject
}

declare class FIRDefineStageBridge extends FIRStageBridge {
	static alloc(): FIRDefineStageBridge; // inherited from NSObject

	static new(): FIRDefineStageBridge; // inherited from NSObject

	constructor(o: { variables: NSDictionary<string, FIRExprBridge> });

	initWithVariables(variables: NSDictionary<string, FIRExprBridge>): this;
}

declare class FIRDistinctStageBridge extends FIRStageBridge {
	static alloc(): FIRDistinctStageBridge; // inherited from NSObject

	static new(): FIRDistinctStageBridge; // inherited from NSObject

	constructor(o: { groups: NSDictionary<string, FIRExprBridge> });

	initWithGroups(groups: NSDictionary<string, FIRExprBridge>): this;
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

	addSnapshotListenerWithOptionsListener(options: FIRSnapshotListenOptions, listener: (p1: FIRDocumentSnapshot, p2: NSError) => void): FIRListenerRegistration;

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

declare class FIRDocumentsSourceStageBridge extends FIRStageBridge {
	static alloc(): FIRDocumentsSourceStageBridge; // inherited from NSObject

	static new(): FIRDocumentsSourceStageBridge; // inherited from NSObject

	constructor(o: { documents: NSArray<FIRDocumentReference> | FIRDocumentReference[]; firestore: FIRFirestore });

	initWithDocumentsFirestore(documents: NSArray<FIRDocumentReference> | FIRDocumentReference[], db: FIRFirestore): this;
}

declare class FIRExprBridge extends NSObject {
	static alloc(): FIRExprBridge; // inherited from NSObject

	static new(): FIRExprBridge; // inherited from NSObject
}

declare class FIRFieldBridge extends FIRExprBridge {
	static alloc(): FIRFieldBridge; // inherited from NSObject

	static new(): FIRFieldBridge; // inherited from NSObject

	constructor(o: { name: string });

	constructor(o: { path: FIRFieldPath });

	field_name(): string;

	initWithName(name: string): this;

	initWithPath(path: FIRFieldPath): this;
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

	static fieldValueForDoubleMaximum(d: number): FIRFieldValue;

	static fieldValueForDoubleMinimum(d: number): FIRFieldValue;

	static fieldValueForIntegerIncrement(l: number): FIRFieldValue;

	static fieldValueForIntegerMaximum(l: number): FIRFieldValue;

	static fieldValueForIntegerMinimum(l: number): FIRFieldValue;

	static fieldValueForServerTimestamp(): FIRFieldValue;

	static new(): FIRFieldValue; // inherited from NSObject

	static vectorWithArray(array: NSArray<number> | number[]): FIRVectorValue;
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

declare class FIRFindNearestStageBridge extends FIRStageBridge {
	static alloc(): FIRFindNearestStageBridge; // inherited from NSObject

	static new(): FIRFindNearestStageBridge; // inherited from NSObject

	constructor(o: { field: FIRFieldBridge; vectorValue: FIRVectorValue; distanceMeasure: string; limit: number; distanceField: FIRExprBridge });

	initWithFieldVectorValueDistanceMeasureLimitDistanceField(field: FIRFieldBridge, vectorValue: FIRVectorValue, distanceMeasure: string, limit: number, distanceField: FIRExprBridge): this;
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

	dispatchQueue: NSObject & OS_dispatch_queue;

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

declare class FIRFunctionExprBridge extends FIRExprBridge {
	static alloc(): FIRFunctionExprBridge; // inherited from NSObject

	static new(): FIRFunctionExprBridge; // inherited from NSObject

	constructor(o: { name: string; args: NSArray<FIRExprBridge> | FIRExprBridge[]; options: NSDictionary<string, FIRExprBridge> });

	initWithNameArgsOptions(name: string, args: NSArray<FIRExprBridge> | FIRExprBridge[], options: NSDictionary<string, FIRExprBridge>): this;
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

declare class FIRLimitStageBridge extends FIRStageBridge {
	static alloc(): FIRLimitStageBridge; // inherited from NSObject

	static new(): FIRLimitStageBridge; // inherited from NSObject

	constructor(o: { limit: number });

	initWithLimit(value: number): this;
}

declare const enum FIRListenSource {
	Default = 0,

	Cache = 1,
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

declare class FIROffsetStageBridge extends FIRStageBridge {
	static alloc(): FIROffsetStageBridge; // inherited from NSObject

	static new(): FIROffsetStageBridge; // inherited from NSObject

	constructor(o: { offset: number });

	initWithOffset(value: number): this;
}

declare class FIROrderingBridge extends NSObject {
	static alloc(): FIROrderingBridge; // inherited from NSObject

	static new(): FIROrderingBridge; // inherited from NSObject

	constructor(o: { expr: FIRExprBridge; direction: string });

	initWithExprDirection(expr: FIRExprBridge, direction: string): this;
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

declare class FIRPipelineBridge extends NSObject {
	static alloc(): FIRPipelineBridge; // inherited from NSObject

	static createStageBridgesFromQuery(query: FIRQuery): NSArray<FIRStageBridge>;

	static new(): FIRPipelineBridge; // inherited from NSObject

	constructor(o: { stages: NSArray<FIRStageBridge> | FIRStageBridge[]; db: FIRFirestore });

	executeWithCompletion(completion: (p1: __FIRPipelineSnapshotBridge, p2: NSError) => void): void;

	initWithStagesDb(stages: NSArray<FIRStageBridge> | FIRStageBridge[], db: FIRFirestore): this;
}

declare class FIRPipelineExprBridge extends FIRExprBridge {
	static alloc(): FIRPipelineExprBridge; // inherited from NSObject

	static new(): FIRPipelineExprBridge; // inherited from NSObject

	constructor(o: { stages: NSArray<FIRStageBridge> | FIRStageBridge[] });

	initWithStages(stages: NSArray<FIRStageBridge> | FIRStageBridge[]): this;
}

declare class FIRQuery extends NSObject {
	static alloc(): FIRQuery; // inherited from NSObject

	static new(): FIRQuery; // inherited from NSObject

	readonly count: FIRAggregateQuery;

	readonly firestore: FIRFirestore;

	addSnapshotListener(listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

	addSnapshotListenerWithIncludeMetadataChangesListener(includeMetadataChanges: boolean, listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

	addSnapshotListenerWithOptionsListener(options: FIRSnapshotListenOptions, listener: (p1: FIRQuerySnapshot, p2: NSError) => void): FIRListenerRegistration;

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

declare class FIRRawStageBridge extends FIRStageBridge {
	static alloc(): FIRRawStageBridge; // inherited from NSObject

	static new(): FIRRawStageBridge; // inherited from NSObject

	constructor(o: { name: string; params: NSArray<any> | any[]; options: NSDictionary<string, FIRExprBridge> });

	initWithNameParamsOptions(name: string, params: NSArray<any> | any[], options: NSDictionary<string, FIRExprBridge>): this;
}

declare class FIRRealtimePipelineBridge extends NSObject {
	static alloc(): FIRRealtimePipelineBridge; // inherited from NSObject

	static new(): FIRRealtimePipelineBridge; // inherited from NSObject

	constructor(o: { stages: NSArray<FIRStageBridge> | FIRStageBridge[]; db: FIRFirestore });

	addSnapshotListenerWithOptionsListener(options: __FIRPipelineListenOptionsBridge, listener: (p1: __FIRRealtimePipelineSnapshotBridge, p2: NSError) => void): FIRListenerRegistration;

	initWithStagesDb(stages: NSArray<FIRStageBridge> | FIRStageBridge[], db: FIRFirestore): this;
}

declare class FIRRemoveFieldsStageBridge extends FIRStageBridge {
	static alloc(): FIRRemoveFieldsStageBridge; // inherited from NSObject

	static new(): FIRRemoveFieldsStageBridge; // inherited from NSObject

	constructor(o: { fields: NSArray<string> | string[] });

	initWithFields(fields: NSArray<string> | string[]): this;
}

declare class FIRReplaceWithStageBridge extends FIRStageBridge {
	static alloc(): FIRReplaceWithStageBridge; // inherited from NSObject

	static new(): FIRReplaceWithStageBridge; // inherited from NSObject

	constructor(o: { expr: FIRExprBridge });

	initWithExpr(expr: FIRExprBridge): this;
}

declare class FIRSampleStageBridge extends FIRStageBridge {
	static alloc(): FIRSampleStageBridge; // inherited from NSObject

	static new(): FIRSampleStageBridge; // inherited from NSObject

	constructor(o: { count: number });

	constructor(o: { percentage: number });

	initWithCount(count: number): this;

	initWithPercentage(percentage: number): this;
}

declare class FIRSearchStageBridge extends FIRStageBridge {
	static alloc(): FIRSearchStageBridge; // inherited from NSObject

	static new(): FIRSearchStageBridge; // inherited from NSObject

	constructor(o: { options: NSDictionary<string, FIRExprBridge>; addFields: NSDictionary<string, FIRExprBridge>; select: NSDictionary<string, FIRExprBridge>; sort: NSArray<FIROrderingBridge> | FIROrderingBridge[] });

	initWithOptionsAddFieldsSelectSort(options: NSDictionary<string, FIRExprBridge>, add_fields: NSDictionary<string, FIRExprBridge>, select: NSDictionary<string, FIRExprBridge>, sort: NSArray<FIROrderingBridge> | FIROrderingBridge[]): this;
}

declare class FIRSelectStageBridge extends FIRStageBridge {
	static alloc(): FIRSelectStageBridge; // inherited from NSObject

	static new(): FIRSelectStageBridge; // inherited from NSObject

	constructor(o: { selections: NSDictionary<string, FIRExprBridge> });

	initWithSelections(selections: NSDictionary<string, FIRExprBridge>): this;
}

declare const enum FIRServerTimestampBehavior {
	None = 0,

	Estimate = 1,

	Previous = 2,
}

declare class FIRSnapshotListenOptions extends NSObject {
	static alloc(): FIRSnapshotListenOptions; // inherited from NSObject

	static new(): FIRSnapshotListenOptions; // inherited from NSObject

	readonly includeMetadataChanges: boolean;

	readonly source: FIRListenSource;

	optionsWithIncludeMetadataChanges(includeMetadataChanges: boolean): FIRSnapshotListenOptions;

	optionsWithSource(source: FIRListenSource): FIRSnapshotListenOptions;
}

declare class FIRSnapshotMetadata extends NSObject {
	static alloc(): FIRSnapshotMetadata; // inherited from NSObject

	static new(): FIRSnapshotMetadata; // inherited from NSObject

	readonly fromCache: boolean;

	readonly pendingWrites: boolean;
}

declare class FIRSorStageBridge extends FIRStageBridge {
	static alloc(): FIRSorStageBridge; // inherited from NSObject

	static new(): FIRSorStageBridge; // inherited from NSObject

	constructor(o: { orderings: NSArray<any> | any[] });

	initWithOrderings(orderings: NSArray<any> | any[]): this;
}

declare class FIRStageBridge extends NSObject {
	static alloc(): FIRStageBridge; // inherited from NSObject

	static new(): FIRStageBridge; // inherited from NSObject

	readonly name: string;
}

declare class FIRSubcollectionSourceStageBridge extends FIRStageBridge {
	static alloc(): FIRSubcollectionSourceStageBridge; // inherited from NSObject

	static new(): FIRSubcollectionSourceStageBridge; // inherited from NSObject

	constructor(o: { path: string });

	initWithPath(path: string): this;
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

declare class FIRUnionStageBridge extends FIRStageBridge {
	static alloc(): FIRUnionStageBridge; // inherited from NSObject

	static new(): FIRUnionStageBridge; // inherited from NSObject

	constructor(o: { other: FIRPipelineBridge });

	initWithOther(other: FIRPipelineBridge): this;
}

declare class FIRUnnestStageBridge extends FIRStageBridge {
	static alloc(): FIRUnnestStageBridge; // inherited from NSObject

	static new(): FIRUnnestStageBridge; // inherited from NSObject

	constructor(o: { field: FIRExprBridge; alias: FIRExprBridge; indexField: FIRExprBridge });

	initWithFieldAliasIndexField(field: FIRExprBridge, alias: FIRExprBridge, index_field: FIRExprBridge): this;
}

declare class FIRVariableBridge extends FIRExprBridge {
	static alloc(): FIRVariableBridge; // inherited from NSObject

	static new(): FIRVariableBridge; // inherited from NSObject

	constructor(o: { name: string });

	initWithName(name: string): this;
}

declare class FIRVectorValue extends NSObject {
	static alloc(): FIRVectorValue; // inherited from NSObject

	static new(): FIRVectorValue; // inherited from NSObject

	readonly array: NSArray<number>;

	constructor(o: { array: NSArray<number> | number[] });

	initWithArray(array: NSArray<number> | number[]): this;
}

declare class FIRWhereStageBridge extends FIRStageBridge {
	static alloc(): FIRWhereStageBridge; // inherited from NSObject

	static new(): FIRWhereStageBridge; // inherited from NSObject

	constructor(o: { expr: FIRExprBridge });

	initWithExpr(expr: FIRExprBridge): this;
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

declare class __FIRPipelineListenOptionsBridge extends NSObject {
	static alloc(): __FIRPipelineListenOptionsBridge; // inherited from NSObject

	static new(): __FIRPipelineListenOptionsBridge; // inherited from NSObject

	readonly includeMetadata: boolean;

	readonly serverTimestampBehavior: string;

	readonly source: FIRListenSource;

	constructor(o: { serverTimestampBehavior: string; includeMetadata: boolean; source: FIRListenSource });

	initWithServerTimestampBehaviorIncludeMetadataSource(serverTimestampBehavior: string, includeMetadata: boolean, source: FIRListenSource): this;
}

declare class __FIRPipelineResultBridge extends NSObject {
	static alloc(): __FIRPipelineResultBridge; // inherited from NSObject

	static new(): __FIRPipelineResultBridge; // inherited from NSObject

	readonly create_time: FIRTimestamp;

	readonly documentID: string;

	readonly reference: FIRDocumentReference;

	readonly update_time: FIRTimestamp;

	data(): NSDictionary<string, any>;

	dataWithServerTimestampBehavior(serverTimestampBehavior: FIRServerTimestampBehavior): NSDictionary<string, any>;

	get(field: any): any;

	getServerTimestampBehavior(field: any, serverTimestampBehavior: FIRServerTimestampBehavior): any;
}

declare class __FIRPipelineResultChangeBridge extends NSObject {
	static alloc(): __FIRPipelineResultChangeBridge; // inherited from NSObject

	static new(): __FIRPipelineResultChangeBridge; // inherited from NSObject

	readonly newIndex: number;

	readonly oldIndex: number;

	readonly result: __FIRPipelineResultBridge;

	readonly type: FIRDocumentChangeType;
}

declare class __FIRPipelineSnapshotBridge extends NSObject {
	static alloc(): __FIRPipelineSnapshotBridge; // inherited from NSObject

	static new(): __FIRPipelineSnapshotBridge; // inherited from NSObject

	readonly execution_time: FIRTimestamp;

	readonly results: NSArray<__FIRPipelineResultBridge>;
}

declare class __FIRRealtimePipelineSnapshotBridge extends NSObject {
	static alloc(): __FIRRealtimePipelineSnapshotBridge; // inherited from NSObject

	static new(): __FIRRealtimePipelineSnapshotBridge; // inherited from NSObject

	readonly changes: NSArray<__FIRPipelineResultChangeBridge>;

	readonly metadata: FIRSnapshotMetadata;

	readonly results: NSArray<__FIRPipelineResultBridge>;
}

declare var kFIRFirestoreCacheSizeUnlimited: number;
