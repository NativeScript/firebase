/**
 * @since 13
 */
declare class FIRStorage extends NSObject {
	static alloc(): FIRStorage; // inherited from NSObject

	static new(): FIRStorage; // inherited from NSObject

	static storage(): FIRStorage;

	static storageForApp(app: FIRApp): FIRStorage;

	static storageForAppURL(app: FIRApp, url: string): FIRStorage;

	static storageWithURL(url: string): FIRStorage;

	readonly app: FIRApp;

	callbackQueue: NSObject & OS_dispatch_queue;

	maxDownloadRetryTime: number;

	maxOperationRetryTime: number;

	maxUploadRetryTime: number;

	uploadChunkSizeBytes: number;

	/**
	 * @since 13
	 */
	reference(): FIRStorageReference;

	/**
	 * @since 13
	 */
	referenceForURL(url: string): FIRStorageReference;

	referenceWithPath(path: string): FIRStorageReference;

	useEmulatorWithHostPort(host: string, port: number): void;
}

/**
 * @since 13
 */
declare class FIRStorageDownloadTask extends FIRStorageObservableTask implements FIRStorageTaskManagement, SDWebImageOperation {
	static alloc(): FIRStorageDownloadTask; // inherited from NSObject

	static new(): FIRStorageDownloadTask; // inherited from NSObject

	readonly cancelled: boolean; // inherited from SDWebImageOperation

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	enqueue(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pause(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	resume(): void;

	retainCount(): number;

	self(): this;
}

declare const enum FIRStorageErrorCode {
	Unknown = -13000,

	ObjectNotFound = -13010,

	BucketNotFound = -13011,

	ProjectNotFound = -13012,

	QuotaExceeded = -13013,

	Unauthenticated = -13020,

	Unauthorized = -13021,

	RetryLimitExceeded = -13030,

	NonMatchingChecksum = -13031,

	DownloadSizeExceeded = -13032,

	Cancelled = -13040,

	InvalidArgument = -13050,

	BucketMismatch = -13051,

	InternalError = -13052,

	PathError = -13053,
}

/**
 * @since 13
 */
declare class FIRStorageListResult extends NSObject {
	static alloc(): FIRStorageListResult; // inherited from NSObject

	static new(): FIRStorageListResult; // inherited from NSObject

	readonly items: NSArray<FIRStorageReference>;

	readonly pageToken: string;

	readonly prefixes: NSArray<FIRStorageReference>;
}

/**
 * @since 13
 */
declare class FIRStorageMetadata extends NSObject {
	static alloc(): FIRStorageMetadata; // inherited from NSObject

	static new(): FIRStorageMetadata; // inherited from NSObject

	readonly bucket: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentType: string;

	customMetadata: NSDictionary<string, string>;

	readonly generation: number;

	readonly isFile: boolean;

	readonly isFolder: boolean;

	readonly md5Hash: string;

	readonly metageneration: number;

	readonly name: string;

	readonly path: string;

	readonly size: number;

	readonly storageReference: FIRStorageReference;

	readonly timeCreated: Date;

	readonly updated: Date;

	constructor(o: { dictionary: NSDictionary<string, NSObject> });

	dictionaryRepresentation(): NSDictionary<string, NSObject>;

	initWithDictionary(dictionary: NSDictionary<string, NSObject>): this;
}

/**
 * @since 13
 */
declare class FIRStorageObservableTask extends FIRStorageTask {
	static alloc(): FIRStorageObservableTask; // inherited from NSObject

	static new(): FIRStorageObservableTask; // inherited from NSObject

	observeStatusHandler(status: FIRStorageTaskStatus, handler: (p1: FIRStorageTaskSnapshot) => void): string;

	removeAllObservers(): void;

	removeAllObserversForStatus(status: FIRStorageTaskStatus): void;

	removeObserverWithHandle(handle: string): void;
}

/**
 * @since 13
 */
declare class FIRStorageReference extends NSObject {
	static alloc(): FIRStorageReference; // inherited from NSObject

	static new(): FIRStorageReference; // inherited from NSObject

	readonly bucket: string;

	readonly fullPath: string;

	readonly name: string;

	readonly storage: FIRStorage;

	child(path: string): FIRStorageReference;

	dataWithMaxSizeCompletion(maxSize: number, completion: (p1: NSData, p2: NSError) => void): FIRStorageDownloadTask;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	downloadURLWithCompletion(completion: (p1: NSURL, p2: NSError) => void): void;

	listAllWithCompletion(completion: (p1: FIRStorageListResult, p2: NSError) => void): void;

	listWithMaxResultsCompletion(maxResults: number, completion: (p1: FIRStorageListResult, p2: NSError) => void): void;

	listWithMaxResultsPageTokenCompletion(maxResults: number, pageToken: string, completion: (p1: FIRStorageListResult, p2: NSError) => void): void;

	metadataWithCompletion(completion: (p1: FIRStorageMetadata, p2: NSError) => void): void;

	parent(): FIRStorageReference;

	putData(uploadData: NSData): FIRStorageUploadTask;

	putDataMetadata(uploadData: NSData, metadata: FIRStorageMetadata): FIRStorageUploadTask;

	putDataMetadataCompletion(uploadData: NSData, metadata: FIRStorageMetadata, completion: (p1: FIRStorageMetadata, p2: NSError) => void): FIRStorageUploadTask;

	putFile(fileURL: NSURL): FIRStorageUploadTask;

	putFileMetadata(fileURL: NSURL, metadata: FIRStorageMetadata): FIRStorageUploadTask;

	putFileMetadataCompletion(fileURL: NSURL, metadata: FIRStorageMetadata, completion: (p1: FIRStorageMetadata, p2: NSError) => void): FIRStorageUploadTask;

	root(): FIRStorageReference;

	updateMetadataCompletion(metadata: FIRStorageMetadata, completion: (p1: FIRStorageMetadata, p2: NSError) => void): void;

	writeToFile(fileURL: NSURL): FIRStorageDownloadTask;

	writeToFileCompletion(fileURL: NSURL, completion: (p1: NSURL, p2: NSError) => void): FIRStorageDownloadTask;
}

/**
 * @since 13
 */
declare class FIRStorageTask extends NSObject {
	static alloc(): FIRStorageTask; // inherited from NSObject

	static new(): FIRStorageTask; // inherited from NSObject

	readonly snapshot: FIRStorageTaskSnapshot;
}

interface FIRStorageTaskManagement extends NSObjectProtocol {
	cancel?(): void;

	enqueue(): void;

	pause?(): void;

	resume?(): void;
}
declare var FIRStorageTaskManagement: {
	prototype: FIRStorageTaskManagement;
};

/**
 * @since 13
 */
declare class FIRStorageTaskSnapshot extends NSObject {
	static alloc(): FIRStorageTaskSnapshot; // inherited from NSObject

	static new(): FIRStorageTaskSnapshot; // inherited from NSObject

	readonly error: NSError;

	readonly metadata: FIRStorageMetadata;

	readonly progress: NSProgress;

	readonly reference: FIRStorageReference;

	readonly status: FIRStorageTaskStatus;

	readonly task: FIRStorageTask;
}

declare const enum FIRStorageTaskStatus {
	Unknown = 0,

	Resume = 1,

	Progress = 2,

	Pause = 3,

	Success = 4,

	Failure = 5,
}

/**
 * @since 13
 */
declare class FIRStorageUploadTask extends FIRStorageObservableTask implements FIRStorageTaskManagement {
	static alloc(): FIRStorageUploadTask; // inherited from NSObject

	static new(): FIRStorageUploadTask; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	enqueue(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pause(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	resume(): void;

	retainCount(): number;

	self(): this;
}

declare var FirebaseStorageVersionNumber: number;

declare var FirebaseStorageVersionString: interop.Reference<number>;
