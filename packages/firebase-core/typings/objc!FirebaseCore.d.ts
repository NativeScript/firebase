declare class FIRApp extends NSObject {
	static alloc(): FIRApp; // inherited from NSObject

	static appNamed(name: string): FIRApp;

	static configure(): void;

	static configureWithNameOptions(name: string, options: FIROptions): void;

	static configureWithOptions(options: FIROptions): void;

	static defaultApp(): FIRApp;

	static firebaseUserAgent(): string;

	static isDefaultAppConfigured(): boolean;

	static new(): FIRApp; // inherited from NSObject

	static registerInternalLibraryWithName(library: typeof NSObject, name: string): void;

	static registerInternalLibraryWithNameWithVersion(library: typeof NSObject, name: string, version: string): void;

	static registerLibraryWithVersion(name: string, version: string): void;

	static resetApps(): void;

	container: FIRComponentContainer;

	dataCollectionDefaultEnabled: boolean;

	readonly heartbeatLogger: FIRHeartbeatLogger;

	readonly isDefaultApp: boolean;

	readonly name: string;

	readonly options: FIROptions;

	static readonly allApps: NSDictionary<string, FIRApp>;

	constructor(o: { instanceWithName: string; options: FIROptions });

	deleteApp(completion: (p1: boolean) => void): void;

	initInstanceWithNameOptions(name: string, options: FIROptions): this;
}

declare class FIRConfiguration extends NSObject {
	static alloc(): FIRConfiguration; // inherited from NSObject

	static new(): FIRConfiguration; // inherited from NSObject

	static readonly sharedInstance: FIRConfiguration;

	setLoggerLevel(loggerLevel: FIRLoggerLevel): void;
}

declare function FIRFirebaseVersion(): string;

declare const enum FIRLoggerLevel {
	Error = 3,

	Warning = 4,

	Notice = 5,

	Info = 6,

	Debug = 7,

	Min = 3,

	Max = 7,
}

declare class FIROptions extends NSObject implements NSCopying {
	static alloc(): FIROptions; // inherited from NSObject

	static defaultOptions(): FIROptions;

	static defaultOptionsDictionary(): NSDictionary<any, any>;

	static new(): FIROptions; // inherited from NSObject

	static resetDefaultOptions(): void;

	APIKey: string;

	GCMSenderID: string;

	androidClientID: string;

	appGroupID: string;

	bundleID: string;

	clientID: string;

	databaseURL: string;

	deepLinkURLScheme: string;

	editingLocked: boolean;

	googleAppID: string;

	readonly isAnalyticsCollectionDeactivated: boolean;

	readonly isAnalyticsCollectionEnabled: boolean;

	readonly isAnalyticsCollectionExplicitlySet: boolean;

	readonly isMeasurementEnabled: boolean;

	readonly libraryVersionID: string;

	projectID: string;

	storageBucket: string;

	trackingID: string;

	usingOptionsFromDefaultPlist: boolean;

	constructor(o: { internalWithOptionsDictionary: NSDictionary<any, any> });

	constructor(o: { contentsOfFile: string });

	constructor(o: { googleAppID: string; GCMSenderID: string });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initInternalWithOptionsDictionary(serviceInfoDictionary: NSDictionary<any, any>): this;

	initWithContentsOfFile(plistPath: string): this;

	initWithGoogleAppIDGCMSenderID(googleAppID: string, GCMSenderID: string): this;
}

declare var FirebaseCoreVersionNumber: number;

declare var FirebaseCoreVersionString: interop.Reference<number>;
