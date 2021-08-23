
declare var FIRNamespaceGoogleMobilePlatform: string;

declare class FIRRemoteConfig extends NSObject implements NSFastEnumeration {

	static alloc(): FIRRemoteConfig; // inherited from NSObject

	static new(): FIRRemoteConfig; // inherited from NSObject

	static remoteConfig(): FIRRemoteConfig;

	static remoteConfigWithApp(app: FIRApp): FIRRemoteConfig;

	configSettings: FIRRemoteConfigSettings;

	readonly lastFetchStatus: FIRRemoteConfigFetchStatus;

	readonly lastFetchTime: Date;
	[Symbol.iterator](): Iterator<any>;

	activateWithCompletion(completion: (p1: boolean, p2: NSError) => void): void;

	allKeysFromSource(source: FIRRemoteConfigSource): NSArray<string>;

	configValueForKey(key: string): FIRRemoteConfigValue;

	configValueForKeySource(key: string, source: FIRRemoteConfigSource): FIRRemoteConfigValue;

	defaultValueForKey(key: string): FIRRemoteConfigValue;

	ensureInitializedWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	fetchAndActivateWithCompletionHandler(completionHandler: (p1: FIRRemoteConfigFetchAndActivateStatus, p2: NSError) => void): void;

	fetchWithCompletionHandler(completionHandler: (p1: FIRRemoteConfigFetchStatus, p2: NSError) => void): void;

	fetchWithExpirationDurationCompletionHandler(expirationDuration: number, completionHandler: (p1: FIRRemoteConfigFetchStatus, p2: NSError) => void): void;

	keysWithPrefix(prefix: string): NSSet<string>;

	objectForKeyedSubscript(key: string): FIRRemoteConfigValue;

	setDefaults(defaults: NSDictionary<string, NSObject>): void;

	setDefaultsFromPlistFileName(fileName: string): void;
}

declare const enum FIRRemoteConfigError {

	Unknown = 8001,

	Throttled = 8002,

	InternalError = 8003
}

declare var FIRRemoteConfigErrorDomain: string;

declare const enum FIRRemoteConfigFetchAndActivateStatus {

	SuccessFetchedFromRemote = 0,

	SuccessUsingPreFetchedData = 1,

	Error = 2
}

declare const enum FIRRemoteConfigFetchStatus {

	NoFetchYet = 0,

	Success = 1,

	Failure = 2,

	Throttled = 3
}

declare class FIRRemoteConfigSettings extends NSObject {

	static alloc(): FIRRemoteConfigSettings; // inherited from NSObject

	static new(): FIRRemoteConfigSettings; // inherited from NSObject

	fetchTimeout: number;

	minimumFetchInterval: number;
}

declare const enum FIRRemoteConfigSource {

	Remote = 0,

	Default = 1,

	Static = 2
}

declare var FIRRemoteConfigThrottledEndTimeInSecondsKey: string;

declare class FIRRemoteConfigValue extends NSObject implements NSCopying {

	static alloc(): FIRRemoteConfigValue; // inherited from NSObject

	static new(): FIRRemoteConfigValue; // inherited from NSObject

	readonly JSONValue: any;

	readonly boolValue: boolean;

	readonly dataValue: NSData;

	readonly numberValue: number;

	readonly source: FIRRemoteConfigSource;

	readonly stringValue: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var FirebaseRemoteConfigVersionNumber: number;

declare var FirebaseRemoteConfigVersionString: interop.Reference<number>;
