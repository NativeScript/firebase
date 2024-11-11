declare var FIRAuthStateDidChangeInternalNotification: string;

declare var FIRAuthStateDidChangeInternalNotificationAppKey: string;

declare var FIRAuthStateDidChangeInternalNotificationTokenKey: string;

declare var FIRAuthStateDidChangeInternalNotificationUIDKey: string;

declare class FIRComponent extends NSObject {
	static alloc(): FIRComponent; // inherited from NSObject

	static componentWithProtocolCreationBlock(protocol: any /* Protocol */, creationBlock: (p1: FIRComponentContainer, p2: interop.Pointer | interop.Reference<boolean>) => any): FIRComponent;

	static componentWithProtocolInstantiationTimingCreationBlock(protocol: any /* Protocol */, instantiationTiming: FIRInstantiationTiming, creationBlock: (p1: FIRComponentContainer, p2: interop.Pointer | interop.Reference<boolean>) => any): FIRComponent;

	static new(): FIRComponent; // inherited from NSObject

	readonly creationBlock: (p1: FIRComponentContainer, p2: interop.Pointer | interop.Reference<boolean>) => any;

	readonly instantiationTiming: FIRInstantiationTiming;

	readonly protocol: any /* Protocol */;
}

declare class FIRComponentContainer extends NSObject {
	static alloc(): FIRComponentContainer; // inherited from NSObject

	static new(): FIRComponentContainer; // inherited from NSObject

	readonly app: FIRApp;

	__instanceForProtocol(protocol: any /* Protocol */): any;
}

interface FIRComponentLifecycleMaintainer {
	appWillBeDeleted(app: FIRApp): void;
}
declare var FIRComponentLifecycleMaintainer: {
	prototype: FIRComponentLifecycleMaintainer;
};

declare class FIRComponentType<T> extends NSObject {
	static alloc<T>(): FIRComponentType<T>; // inherited from NSObject

	static instanceForProtocolInContainer(protocol: any /* Protocol */, container: FIRComponentContainer): any;

	static new<T>(): FIRComponentType<T>; // inherited from NSObject
}

declare const enum FIRConfigType {
	Core = 1,

	SDK = 2,
}

declare const enum FIRDailyHeartbeatCode {
	None = 0,

	Some = 2,
}

declare function FIRGetLoggerLevel(): FIRLoggerLevel;

declare function FIRHeaderValueFromHeartbeatsPayload(heartbeatsPayload: FIRHeartbeatsPayload): string;

declare class FIRHeartbeatLogger extends NSObject implements FIRHeartbeatLoggerProtocol {
	static alloc(): FIRHeartbeatLogger; // inherited from NSObject

	static new(): FIRHeartbeatLogger; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { appID: string });

	/**
	 * @since 13.0
	 */
	asyncHeaderValueWithCompletionHandler(completionHandler: (p1: string) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	flushHeartbeatsIntoPayload(): FIRHeartbeatsPayload;

	/**
	 * @since 13.0
	 */
	flushHeartbeatsIntoPayloadWithCompletionHandler(completionHandler: (p1: FIRHeartbeatsPayload) => void): void;

	headerValue(): string;

	heartbeatCodeForToday(): FIRDailyHeartbeatCode;

	initWithAppID(appID: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	log(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface FIRHeartbeatLoggerProtocol extends NSObjectProtocol {
	/**
	 * @since 13.0
	 */
	asyncHeaderValueWithCompletionHandler(completionHandler: (p1: string) => void): void;

	headerValue(): string;

	heartbeatCodeForToday(): FIRDailyHeartbeatCode;

	log(): void;
}
declare var FIRHeartbeatLoggerProtocol: {
	prototype: FIRHeartbeatLoggerProtocol;
};

declare const enum FIRInstantiationTiming {
	Lazy = 0,

	AlwaysEager = 1,

	EagerInDefaultApp = 2,
}

declare function FIRIsLoggableLevel(loggerLevel: FIRLoggerLevel, analyticsComponent: boolean): boolean;

declare function FIRIsLoggableLevelDebug(): boolean;

declare function FIRIsLoggableLevelError(): boolean;

declare function FIRIsLoggableLevelNotice(): boolean;

declare function FIRIsLoggableLevelWarning(): boolean;

interface FIRLibrary {}
declare var FIRLibrary: {
	prototype: FIRLibrary;

	componentsToRegister(): NSArray<FIRComponent>;
};

declare class FIRLoggerWrapper extends NSObject {
	static alloc(): FIRLoggerWrapper; // inherited from NSObject

	static logWithLevelServiceCodeMessage(level: FIRLoggerLevel, category: string, code: string, message: string): void;

	static new(): FIRLoggerWrapper; // inherited from NSObject
}

declare function FIRSetAnalyticsDebugMode(analyticsDebugMode: boolean): void;

declare function FIRSetLoggerLevel(loggerLevel: FIRLoggerLevel): void;

declare function FIRSetLoggerLevelDebug(): void;

declare function FIRSetLoggerLevelError(): void;

declare function FIRSetLoggerLevelNotice(): void;

declare function FIRSetLoggerLevelWarning(): void;

declare var FirebaseCoreExtensionVersionNumber: number;

declare var FirebaseCoreExtensionVersionString: interop.Reference<number>;

declare var kFIRAPIKey: string;

declare var kFIRAndroidClientID: string;

declare var kFIRAppDeleteNotification: string;

declare var kFIRAppIsDefaultAppKey: string;

declare var kFIRAppNameKey: string;

declare var kFIRAppReadyToConfigureSDKNotification: string;

declare var kFIRBundleID: string;

declare var kFIRClientID: string;

declare var kFIRDatabaseURL: string;

declare var kFIRDefaultAppName: string;

declare var kFIRGCMSenderID: string;

declare var kFIRGlobalAppDataCollectionEnabledDefaultsKeyFormat: string;

declare var kFIRGlobalAppDataCollectionEnabledPlistKey: string;

declare var kFIRGoogleAppID: string;

declare var kFIRGoogleAppIDKey: string;

declare var kFIRLoggerAnalytics: string;

declare var kFIRLoggerCore: string;

declare var kFIRLoggerCrash: string;

declare var kFIRLoggerErrorCountKey: string;

declare var kFIRLoggerRemoteConfig: string;

declare var kFIRLoggerWarningCountKey: string;

declare var kFIRProjectID: string;

declare var kFIRStorageBucket: string;

declare var kFIRTrackingID: string;

declare var kFirebaseCoreErrorDomain: string;

declare var kServiceInfoFileName: string;

declare var kServiceInfoFileType: string;
