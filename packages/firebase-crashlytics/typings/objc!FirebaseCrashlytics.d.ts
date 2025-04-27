interface FIRCLSPersistenceLog {
	debugLogWithMessage(message: string): void;

	updateRolloutsStateToPersistenceWithRolloutsReportID(rollouts: NSData, reportID: string): void;
}
declare var FIRCLSPersistenceLog: {
	prototype: FIRCLSPersistenceLog;
};

declare class FIRCLSRemoteConfigManager extends NSObject {
	static alloc(): FIRCLSRemoteConfigManager; // inherited from NSObject

	static new(): FIRCLSRemoteConfigManager; // inherited from NSObject

	readonly rolloutAssignment: NSArray<FIRRolloutAssignment>;

	constructor(o: { remoteConfig: FIRRemoteConfigInterop; persistenceDelegate: FIRCLSPersistenceLog });

	getRolloutAssignmentsEncodedJsonString(): string;

	initWithRemoteConfigPersistenceDelegate(remoteConfig: FIRRemoteConfigInterop, persistenceDelegate: FIRCLSPersistenceLog): this;

	updateRolloutsStateWithRolloutsStateReportID(rolloutsState: FIRRolloutsState, reportID: string): void;
}

declare class FIRCLSwiftFileUtility extends NSObject {
	static alloc(): FIRCLSwiftFileUtility; // inherited from NSObject

	static new(): FIRCLSwiftFileUtility; // inherited from NSObject

	static stringToHexConverterFor(string: string): string;
}

declare class FIRCrashlytics extends NSObject {
	static alloc(): FIRCrashlytics; // inherited from NSObject

	static crashlytics(): FIRCrashlytics;

	static new(): FIRCrashlytics; // inherited from NSObject

	checkAndUpdateUnsentReportsWithCompletion(completion: (p1: FIRCrashlyticsReport) => void): void;

	checkForUnsentReportsWithCompletion(completion: (p1: boolean) => void): void;

	deleteUnsentReports(): void;

	didCrashDuringPreviousExecution(): boolean;

	isCrashlyticsCollectionEnabled(): boolean;

	log(msg: string): void;

	recordError(error: NSError): void;

	recordErrorUserInfo(error: NSError, userInfo: NSDictionary<string, any>): void;

	recordExceptionModel(exceptionModel: FIRExceptionModel): void;

	sendUnsentReports(): void;

	setCrashlyticsCollectionEnabled(enabled: boolean): void;

	setCustomKeysAndValues(keysAndValues: NSDictionary<any, any>): void;

	setCustomValueForKey(value: any, key: string): void;

	setUserID(userID: string): void;
}

declare class FIRCrashlyticsReport extends NSObject {
	static alloc(): FIRCrashlyticsReport; // inherited from NSObject

	static new(): FIRCrashlyticsReport; // inherited from NSObject

	readonly dateCreated: Date;

	readonly hasCrash: boolean;

	readonly reportID: string;

	log(msg: string): void;

	setCustomKeysAndValues(keysAndValues: NSDictionary<any, any>): void;

	setCustomValueForKey(value: any, key: string): void;

	setUserID(userID: string): void;
}

declare class FIRExceptionModel extends NSObject {
	static alloc(): FIRExceptionModel; // inherited from NSObject

	static exceptionModelWithNameReason(name: string, reason: string): FIRExceptionModel;

	static new(): FIRExceptionModel; // inherited from NSObject

	stackTrace: NSArray<FIRStackFrame>;

	constructor(o: { name: string; reason: string });

	initWithNameReason(name: string, reason: string): this;
}

declare class FIRStackFrame extends NSObject {
	static alloc(): FIRStackFrame; // inherited from NSObject

	static new(): FIRStackFrame; // inherited from NSObject

	static stackFrameWithAddress(address: number): FIRStackFrame;

	static stackFrameWithSymbolFileLine(symbol: string, file: string, line: number): FIRStackFrame;

	constructor(o: { symbol: string; file: string; line: number });

	initWithSymbolFileLine(symbol: string, file: string, line: number): this;
}

declare var FirebaseCrashlyticsVersionNumber: number;

declare var FirebaseCrashlyticsVersionString: interop.Reference<number>;
