declare class FIRIMPLStorage extends NSObject {
	static alloc(): FIRIMPLStorage; // inherited from NSObject

	static bucketForApp(app: FIRApp): string;

	static bucketForAppURL(app: FIRApp, url: string): string;

	static new(): FIRIMPLStorage; // inherited from NSObject

	readonly app: FIRApp;

	callbackQueue: NSObject;

	maxDownloadRetryTime: number;

	maxOperationRetryTime: number;

	maxUploadRetryTime: number;

	constructor(o: { app: FIRApp; bucket: string; auth: FIRAuthInterop; appCheck: FIRAppCheckInterop });

	initWithAppBucketAuthAppCheck(app: FIRApp, bucket: string, auth: FIRAuthInterop, appCheck: FIRAppCheckInterop): this;

	reference(): FIRIMPLStorageReference;

	referenceForURL(string: string): FIRIMPLStorageReference;

	referenceWithPath(string: string): FIRIMPLStorageReference;

	useEmulatorWithHostPort(host: string, port: number): void;
}

declare class FIRIMPLStorageDownloadTask extends FIRIMPLStorageObservableTask implements FIRIMPLStorageTaskManagement {
	static alloc(): FIRIMPLStorageDownloadTask; // inherited from NSObject

	static new(): FIRIMPLStorageDownloadTask; // inherited from NSObject

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

declare const enum FIRIMPLStorageErrorCode {
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
}

declare class FIRIMPLStorageListResult extends NSObject implements NSCopying {
	static alloc(): FIRIMPLStorageListResult; // inherited from NSObject

	static new(): FIRIMPLStorageListResult; // inherited from NSObject

	readonly items: NSArray<FIRIMPLStorageReference>;

	readonly pageToken: string;

	readonly prefixes: NSArray<FIRIMPLStorageReference>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class FIRIMPLStorageMetadata extends NSObject implements NSCopying {
	static alloc(): FIRIMPLStorageMetadata; // inherited from NSObject

	static new(): FIRIMPLStorageMetadata; // inherited from NSObject

	readonly bucket: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;

	contentLanguage: string;

	contentType: string;

	customMetadata: NSDictionary<string, string>;

	readonly file: boolean;

	readonly folder: boolean;

	readonly generation: number;

	readonly md5Hash: string;

	readonly metageneration: number;

	readonly name: string;

	readonly path: string;

	readonly size: number;

	readonly storageReference: FIRIMPLStorageReference;

	readonly timeCreated: Date;

	readonly updated: Date;

	constructor(o: { dictionary: NSDictionary<string, any> });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dictionaryRepresentation(): NSDictionary<string, any>;

	initWithDictionary(dictionary: NSDictionary<string, any>): this;
}

declare class FIRIMPLStorageObservableTask extends FIRIMPLStorageTask {
	static alloc(): FIRIMPLStorageObservableTask; // inherited from NSObject

	static new(): FIRIMPLStorageObservableTask; // inherited from NSObject

	observeStatusHandler(status: FIRIMPLStorageTaskStatus, handler: (p1: FIRIMPLStorageTaskSnapshot) => void): string;

	removeAllObservers(): void;

	removeAllObserversForStatus(status: FIRIMPLStorageTaskStatus): void;

	removeObserverWithHandle(handle: string): void;
}

declare class FIRIMPLStorageReference extends NSObject {
	static alloc(): FIRIMPLStorageReference; // inherited from NSObject

	static new(): FIRIMPLStorageReference; // inherited from NSObject

	readonly bucket: string;

	readonly fullPath: string;

	readonly name: string;

	readonly storage: FIRIMPLStorage;

	child(path: string): FIRIMPLStorageReference;

	dataWithMaxSizeCompletion(size: number, completion: (p1: NSData, p2: NSError) => void): FIRIMPLStorageDownloadTask;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	downloadURLWithCompletion(completion: (p1: NSURL, p2: NSError) => void): void;

	listAllWithCompletion(completion: (p1: FIRIMPLStorageListResult, p2: NSError) => void): void;

	listWithMaxResultsCompletion(maxResults: number, completion: (p1: FIRIMPLStorageListResult, p2: NSError) => void): void;

	listWithMaxResultsPageTokenCompletion(maxResults: number, pageToken: string, completion: (p1: FIRIMPLStorageListResult, p2: NSError) => void): void;

	metadataWithCompletion(completion: (p1: FIRIMPLStorageMetadata, p2: NSError) => void): void;

	parent(): FIRIMPLStorageReference;

	putData(uploadData: NSData): FIRIMPLStorageUploadTask;

	putDataMetadata(uploadData: NSData, metadata: FIRIMPLStorageMetadata): FIRIMPLStorageUploadTask;

	putDataMetadataCompletion(uploadData: NSData, metadata: FIRIMPLStorageMetadata, completion: (p1: FIRIMPLStorageMetadata, p2: NSError) => void): FIRIMPLStorageUploadTask;

	putFile(fileURL: NSURL): FIRIMPLStorageUploadTask;

	putFileMetadata(fileURL: NSURL, metadata: FIRIMPLStorageMetadata): FIRIMPLStorageUploadTask;

	putFileMetadataCompletion(fileURL: NSURL, metadata: FIRIMPLStorageMetadata, completion: (p1: FIRIMPLStorageMetadata, p2: NSError) => void): FIRIMPLStorageUploadTask;

	root(): FIRIMPLStorageReference;

	updateMetadataCompletion(metadata: FIRIMPLStorageMetadata, completion: (p1: FIRIMPLStorageMetadata, p2: NSError) => void): void;

	writeToFile(fileURL: NSURL): FIRIMPLStorageDownloadTask;

	writeToFileCompletion(fileURL: NSURL, completion: (p1: NSURL, p2: NSError) => void): FIRIMPLStorageDownloadTask;
}

declare class FIRIMPLStorageTask extends NSObject {
	static alloc(): FIRIMPLStorageTask; // inherited from NSObject

	static new(): FIRIMPLStorageTask; // inherited from NSObject

	readonly snapshot: FIRIMPLStorageTaskSnapshot;
}

interface FIRIMPLStorageTaskManagement extends NSObjectProtocol {
	cancel?(): void;

	enqueue(): void;

	pause?(): void;

	resume?(): void;
}
declare var FIRIMPLStorageTaskManagement: {
	prototype: FIRIMPLStorageTaskManagement;
};

declare class FIRIMPLStorageTaskSnapshot extends NSObject {
	static alloc(): FIRIMPLStorageTaskSnapshot; // inherited from NSObject

	static new(): FIRIMPLStorageTaskSnapshot; // inherited from NSObject

	readonly error: NSError;

	readonly metadata: FIRIMPLStorageMetadata;

	readonly progress: NSProgress;

	readonly reference: FIRIMPLStorageReference;

	readonly status: FIRIMPLStorageTaskStatus;

	readonly task: FIRIMPLStorageTask;
}

declare const enum FIRIMPLStorageTaskStatus {
	Unknown = 0,

	Resume = 1,

	Progress = 2,

	Pause = 3,

	Success = 4,

	Failure = 5,
}

declare class FIRIMPLStorageUploadTask extends FIRIMPLStorageObservableTask implements FIRIMPLStorageTaskManagement {
	static alloc(): FIRIMPLStorageUploadTask; // inherited from NSObject

	static new(): FIRIMPLStorageUploadTask; // inherited from NSObject

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

declare var FirebaseStorageInternalVersionNumber: number;

declare var FirebaseStorageInternalVersionString: interop.Reference<number>;
