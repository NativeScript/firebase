interface FIRAuthInterop {
	getTokenForcingRefreshWithCallback(forceRefresh: boolean, callback: (p1: string, p2: NSError) => void): void;

	getUserID(): string;
}
declare var FIRAuthInterop: {
	prototype: FIRAuthInterop;
};

declare var FirebaseAuthInteropVersionNumber: number;

declare var FirebaseAuthInteropVersionString: interop.Reference<number>;
