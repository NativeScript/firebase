interface FIRAppCheckInterop {
	getLimitedUseTokenWithCompletion?(handler: (p1: FIRAppCheckTokenResultInterop) => void): void;

	getTokenForcingRefreshCompletion(forcingRefresh: boolean, handler: (p1: FIRAppCheckTokenResultInterop) => void): void;

	notificationAppNameKey(): string;

	notificationTokenKey(): string;

	tokenDidChangeNotificationName(): string;
}
declare var FIRAppCheckInterop: {
	prototype: FIRAppCheckInterop;
};

interface FIRAppCheckProtocol extends NSObjectProtocol {
	limitedUseTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;

	tokenForcingRefreshCompletion(forcingRefresh: boolean, handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;
}
declare var FIRAppCheckProtocol: {
	prototype: FIRAppCheckProtocol;
};

interface FIRAppCheckTokenResultInterop extends NSObjectProtocol {
	error: NSError;

	token: string;
}
declare var FIRAppCheckTokenResultInterop: {
	prototype: FIRAppCheckTokenResultInterop;
};

declare var FirebaseAppCheckInteropVersionNumber: number;

declare var FirebaseAppCheckInteropVersionString: interop.Reference<number>;
