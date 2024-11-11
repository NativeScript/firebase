declare class GULAppDelegateSwizzler extends NSProxy {
	static alloc(): GULAppDelegateSwizzler; // inherited from NSProxy

	static isAppDelegateProxyEnabled(): boolean;

	static proxyOriginalDelegate(): void;

	static proxyOriginalDelegateIncludingAPNSMethods(): void;

	static registerAppDelegateInterceptor(interceptor: UIApplicationDelegate): string;

	static sharedApplication(): UIApplication;

	static unregisterAppDelegateInterceptorWithID(interceptorID: string): void;
}

declare class GULAppEnvironmentUtil extends NSObject {
	static alloc(): GULAppEnvironmentUtil; // inherited from NSObject

	static appleDevicePlatform(): string;

	static applePlatform(): string;

	static deploymentType(): string;

	static deviceModel(): string;

	static deviceSimulatorModel(): string;

	static isAppExtension(): boolean;

	static isAppStoreReceiptSandbox(): boolean;

	static isFromAppStore(): boolean;

	static isSimulator(): boolean;

	static new(): GULAppEnvironmentUtil; // inherited from NSObject

	static systemVersion(): string;
}

declare function GULGetLoggerLevel(): GULLoggerLevel;

declare function GULIsLoggableLevel(loggerLevel: GULLoggerLevel): boolean;

declare class GULKeychainStorage extends NSObject {
	static alloc(): GULKeychainStorage; // inherited from NSObject

	static new(): GULKeychainStorage; // inherited from NSObject

	constructor(o: { service: string });

	getObjectForKeyObjectClassAccessGroupCompletionHandler(key: string, objectClass: typeof NSObject, accessGroup: string, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;

	initWithService(service: string): this;

	removeObjectForKeyAccessGroupCompletionHandler(key: string, accessGroup: string, completionHandler: (p1: NSError) => void): void;

	setObjectForKeyAccessGroupCompletionHandler(object: NSSecureCoding, key: string, accessGroup: string, completionHandler: (p1: NSSecureCoding, p2: NSError) => void): void;
}

declare class GULKeychainUtils extends NSObject {
	static alloc(): GULKeychainUtils; // inherited from NSObject

	static getItemWithQueryError(query: NSDictionary<any, any>): NSData;

	static new(): GULKeychainUtils; // inherited from NSObject

	static removeItemWithQueryError(query: NSDictionary<any, any>): boolean;

	static setItemWithQueryError(item: NSData, query: NSDictionary<any, any>): boolean;
}

declare function GULLoggerForceDebug(): void;

declare function GULLoggerInitialize(): void;

declare const enum GULLoggerLevel {
	Error = 3,

	Warning = 4,

	Notice = 5,

	Info = 6,

	Debug = 7,

	Min = 3,

	Max = 7,
}

declare function GULLoggerRegisterVersion(version: string): void;

declare class GULLoggerWrapper extends NSObject {
	static alloc(): GULLoggerWrapper; // inherited from NSObject

	static new(): GULLoggerWrapper; // inherited from NSObject
}

declare class GULMutableDictionary extends NSObject {
	static alloc(): GULMutableDictionary; // inherited from NSObject

	static new(): GULMutableDictionary; // inherited from NSObject

	count(): number;

	dictionary(): NSDictionary<any, any>;

	objectForKey(key: any): any;

	objectForKeyedSubscript(key: any): any;

	removeAllObjects(): void;

	removeObjectForKey(key: any): void;

	setObjectForKey(object: any, key: any): void;

	setObjectForKeyedSubscript(obj: any, key: any): void;
}

declare const enum GULNSDataZlibError {
	GreaterThan32BitsToCompress = 1024,

	Internal = 1025,

	DataRemaining = 1026,
}

declare var GULNSDataZlibErrorDomain: string;

declare var GULNSDataZlibErrorKey: string;

declare var GULNSDataZlibRemainingBytesKey: string;

declare class GULNetwork extends NSObject {
	static alloc(): GULNetwork; // inherited from NSObject

	static handleEventsForBackgroundURLSessionIDCompletionHandler(sessionID: string, completionHandler: () => void): void;

	static new(): GULNetwork; // inherited from NSObject

	isDebugModeEnabled: boolean;

	loggerDelegate: GULNetworkLoggerDelegate;

	readonly networkConnected: boolean;

	reachabilityDelegate: GULNetworkReachabilityDelegate;

	timeoutInterval: number;

	readonly uploadInProgress: boolean;

	constructor(o: { reachabilityHost: string });

	getURLHeadersQueueUsingBackgroundSessionCompletionHandler(url: NSURL, headers: NSDictionary<any, any>, queue: NSObject & OS_dispatch_queue, usingBackgroundSession: boolean, handler: (p1: NSHTTPURLResponse, p2: NSData, p3: NSError) => void): string;

	initWithReachabilityHost(reachabilityHost: string): this;

	postURLHeadersPayloadQueueUsingBackgroundSessionCompletionHandler(url: NSURL, headers: NSDictionary<any, any>, payload: NSData, queue: NSObject & OS_dispatch_queue, usingBackgroundSession: boolean, handler: (p1: NSHTTPURLResponse, p2: NSData, p3: NSError) => void): string;

	postURLPayloadQueueUsingBackgroundSessionCompletionHandler(url: NSURL, payload: NSData, queue: NSObject & OS_dispatch_queue, usingBackgroundSession: boolean, handler: (p1: NSHTTPURLResponse, p2: NSData, p3: NSError) => void): string;
}

declare const enum GULNetworkErrorCode {
	NetworkErrorCodeUnknown = 0,

	ErrorCodeNetworkInvalidURL = 1,

	ErrorCodeNetworkRequestCreation = 2,

	ErrorCodeNetworkPayloadCompression = 3,

	ErrorCodeNetworkSessionTaskCreation = 4,

	ErrorCodeNetworkInvalidResponse = 5,
}

declare class GULNetworkInfo extends NSObject {
	static alloc(): GULNetworkInfo; // inherited from NSObject

	static getNetworkRadioType(): string;

	static getNetworkType(): GULNetworkType;

	static new(): GULNetworkInfo; // inherited from NSObject
}

declare const enum GULNetworkLogLevel {
	kGULNetworkLogLevelError = 3,

	kGULNetworkLogLevelWarning = 4,

	kGULNetworkLogLevelInfo = 6,

	kGULNetworkLogLevelDebug = 7,
}

interface GULNetworkLoggerDelegate extends NSObjectProtocol {
	GULNetwork_logWithLevelMessageCodeMessage(logLevel: GULNetworkLogLevel, messageCode: GULNetworkMessageCode, message: string): void;

	GULNetwork_logWithLevelMessageCodeMessageContext(logLevel: GULNetworkLogLevel, messageCode: GULNetworkMessageCode, message: string, context: any): void;

	GULNetwork_logWithLevelMessageCodeMessageContexts(logLevel: GULNetworkLogLevel, messageCode: GULNetworkMessageCode, message: string, contexts: NSArray<any> | any[]): void;
}
declare var GULNetworkLoggerDelegate: {
	prototype: GULNetworkLoggerDelegate;
};

declare const enum GULNetworkMessageCode {
	kGULNetworkMessageCodeNetwork000 = 900000,

	kGULNetworkMessageCodeNetwork001 = 900001,

	kGULNetworkMessageCodeNetwork002 = 900002,

	kGULNetworkMessageCodeNetwork003 = 900003,

	kGULNetworkMessageCodeURLSession000 = 901000,

	kGULNetworkMessageCodeURLSession001 = 901001,

	kGULNetworkMessageCodeURLSession002 = 901002,

	kGULNetworkMessageCodeURLSession003 = 901003,

	kGULNetworkMessageCodeURLSession004 = 901004,

	kGULNetworkMessageCodeURLSession005 = 901005,

	kGULNetworkMessageCodeURLSession006 = 901006,

	kGULNetworkMessageCodeURLSession007 = 901007,

	kGULNetworkMessageCodeURLSession008 = 901008,

	kGULNetworkMessageCodeURLSession009 = 901009,

	kGULNetworkMessageCodeURLSession010 = 901010,

	kGULNetworkMessageCodeURLSession011 = 901011,

	kGULNetworkMessageCodeURLSession012 = 901012,

	kGULNetworkMessageCodeURLSession013 = 901013,

	kGULNetworkMessageCodeURLSession014 = 901014,

	kGULNetworkMessageCodeURLSession015 = 901015,

	kGULNetworkMessageCodeURLSession016 = 901016,

	kGULNetworkMessageCodeURLSession017 = 901017,

	kGULNetworkMessageCodeURLSession018 = 901018,

	kGULNetworkMessageCodeURLSession019 = 901019,
}

interface GULNetworkReachabilityDelegate {
	reachabilityDidChange(): void;
}
declare var GULNetworkReachabilityDelegate: {
	prototype: GULNetworkReachabilityDelegate;
};

declare const enum GULNetworkType {
	None = -1,

	Mobile = 0,

	WIFI = 1,
}

declare class GULNetworkURLSession extends NSObject {
	static alloc(): GULNetworkURLSession; // inherited from NSObject

	static handleEventsForBackgroundURLSessionIDCompletionHandler(sessionID: string, completionHandler: () => void): void;

	static new(): GULNetworkURLSession; // inherited from NSObject

	backgroundNetworkEnabled: boolean;

	loggerDelegate: GULNetworkLoggerDelegate;

	constructor(o: { networkLoggerDelegate: GULNetworkLoggerDelegate });

	initWithNetworkLoggerDelegate(networkLoggerDelegate: GULNetworkLoggerDelegate): this;

	sessionIDFromAsyncGETRequestCompletionHandler(request: NSURLRequest, handler: (p1: NSHTTPURLResponse, p2: NSData, p3: string, p4: NSError) => void): string;

	sessionIDFromAsyncPOSTRequestCompletionHandler(request: NSURLRequest, handler: (p1: NSHTTPURLResponse, p2: NSData, p3: string, p4: NSError) => void): string;
}

declare class GULReachabilityChecker extends NSObject {
	static alloc(): GULReachabilityChecker; // inherited from NSObject

	static new(): GULReachabilityChecker; // inherited from NSObject

	readonly host: string;

	readonly isActive: boolean;

	reachabilityDelegate: GULReachabilityDelegate;

	readonly reachabilityStatus: GULReachabilityStatus;

	constructor(o: { reachabilityDelegate: GULReachabilityDelegate; withHost: string });

	initWithReachabilityDelegateWithHost(reachabilityDelegate: GULReachabilityDelegate, host: string): this;

	start(): boolean;

	stop(): void;
}

interface GULReachabilityDelegate {
	reachabilityStatusChanged(reachability: GULReachabilityChecker, status: GULReachabilityStatus): void;
}
declare var GULReachabilityDelegate: {
	prototype: GULReachabilityDelegate;
};

declare const enum GULReachabilityStatus {
	kGULReachabilityUnknown = 0,

	kGULReachabilityNotReachable = 1,

	kGULReachabilityViaWifi = 2,

	kGULReachabilityViaCellular = 3,
}

declare function GULReachabilityStatusString(status: GULReachabilityStatus): string;

declare class GULSceneDelegateSwizzler extends NSProxy {
	static alloc(): GULSceneDelegateSwizzler; // inherited from NSProxy

	static isSceneDelegateProxyEnabled(): boolean;

	static proxyOriginalSceneDelegate(): void;

	/**
	 * @since 13.0
	 */
	static registerSceneDelegateInterceptor(interceptor: UISceneDelegate): string;

	/**
	 * @since 13.0
	 */
	static unregisterSceneDelegateInterceptorWithID(interceptorID: string): void;
}

declare function GULSetLoggerLevel(loggerLevel: GULLoggerLevel): void;

declare class GULSwizzler extends NSObject {
	static alloc(): GULSwizzler; // inherited from NSObject

	static currentImplementationForClassSelectorIsClassSelector(aClass: typeof NSObject, selector: string, isClassSelector: boolean): interop.FunctionReference<() => void>;

	static ivarObjectsForObject(object: any): NSArray<any>;

	static new(): GULSwizzler; // inherited from NSObject

	static selectorExistsInClassIsClassSelector(selector: string, aClass: typeof NSObject, isClassSelector: boolean): boolean;

	static swizzleClassSelectorIsClassSelectorWithBlock(aClass: typeof NSObject, selector: string, isClassSelector: boolean, block: any): void;
}

declare class GULUserDefaults extends NSObject {
	static alloc(): GULUserDefaults; // inherited from NSObject

	static new(): GULUserDefaults; // inherited from NSObject

	static standardUserDefaults(): GULUserDefaults;

	constructor(o: { suiteName: string });

	arrayForKey(defaultName: string): NSArray<any>;

	boolForKey(defaultName: string): boolean;

	dictionaryForKey(defaultName: string): NSDictionary<string, any>;

	doubleForKey(defaultName: string): number;

	floatForKey(defaultName: string): number;

	initWithSuiteName(suiteName: string): this;

	integerForKey(defaultName: string): number;

	objectForKey(defaultName: string): any;

	removeObjectForKey(defaultName: string): void;

	setBoolForKey(value: boolean, defaultName: string): void;

	setDoubleForKey(value: number, defaultName: string): void;

	setFloatForKey(value: number, defaultName: string): void;

	setIntegerForKey(value: number, defaultName: string): void;

	setObjectForKey(value: any, defaultName: string): void;

	stringForKey(defaultName: string): string;
}

declare var GoogleUtilitiesVersionNumber: number;

declare var GoogleUtilitiesVersionString: interop.Reference<number>;

declare var kGULKeychainUtilsErrorDomain: string;

declare var kGULLogSubsystem: string;

declare var kGULNetworkApplicationSupportSubdirectory: string;

declare var kGULNetworkBackgroundSessionConfigIDPrefix: string;

declare var kGULNetworkErrorContext: string;

declare var kGULNetworkHTTPStatusCodeCannotAcceptTraffic: number;

declare var kGULNetworkHTTPStatusCodeFound: number;

declare var kGULNetworkHTTPStatusCodeMovedPermanently: number;

declare var kGULNetworkHTTPStatusCodeMovedTemporarily: number;

declare var kGULNetworkHTTPStatusCodeMultipleChoices: number;

declare var kGULNetworkHTTPStatusCodeNotFound: number;

declare var kGULNetworkHTTPStatusCodeNotModified: number;

declare var kGULNetworkHTTPStatusCodeUnavailable: number;

declare var kGULNetworkHTTPStatusNoContent: number;

declare var kGULNetworkHTTPStatusOK: number;

declare var kGULNetworkReachabilityHost: string;

declare var kGULNetworkTempDirectoryName: string;

declare var kGULNetworkTempFolderExpireTime: number;

declare var kGULNetworkTimeOutInterval: number;
