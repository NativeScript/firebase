interface FIRAppCheckInterop extends NSObjectProtocol {
	getLimitedUseTokenWithCompletion?(handler: (p1: FIRAppCheckTokenResultInterop) => void): void;

	getTokenForcingRefreshCompletion(forcingRefresh: boolean, handler: (p1: FIRAppCheckTokenResultInterop) => void): void;

	notificationAppNameKey(): string;

	notificationTokenKey(): string;

	tokenDidChangeNotificationName(): string;
}
declare var FIRAppCheckInterop: {
	prototype: FIRAppCheckInterop;
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
