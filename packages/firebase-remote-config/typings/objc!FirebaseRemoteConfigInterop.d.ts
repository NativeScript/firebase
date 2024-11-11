declare class FIRRemoteConfigConstants extends NSObject {
	static alloc(): FIRRemoteConfigConstants; // inherited from NSObject

	static new(): FIRRemoteConfigConstants; // inherited from NSObject

	static readonly FIRNamespaceGoogleMobilePlatform: string;
}

interface FIRRemoteConfigInterop {
	registerRolloutsStateSubscriberFor(subscriber: FIRRolloutsStateSubscriber, namespace_: string): void;
}
declare var FIRRemoteConfigInterop: {
	prototype: FIRRemoteConfigInterop;
};

declare class FIRRolloutAssignment extends NSObject {
	static alloc(): FIRRolloutAssignment; // inherited from NSObject

	static new(): FIRRolloutAssignment; // inherited from NSObject

	parameterKey: string;

	parameterValue: string;

	rolloutId: string;

	templateVersion: number;

	variantId: string;

	constructor(o: { rolloutId: string; variantId: string; templateVersion: number; parameterKey: string; parameterValue: string });

	initWithRolloutIdVariantIdTemplateVersionParameterKeyParameterValue(rolloutId: string, variantId: string, templateVersion: number, parameterKey: string, parameterValue: string): this;
}

declare class FIRRolloutsState extends NSObject {
	static alloc(): FIRRolloutsState; // inherited from NSObject

	static new(): FIRRolloutsState; // inherited from NSObject

	assignments: NSSet<FIRRolloutAssignment>;

	constructor(o: { assignmentList: NSArray<FIRRolloutAssignment> | FIRRolloutAssignment[] });

	initWithAssignmentList(assignmentList: NSArray<FIRRolloutAssignment> | FIRRolloutAssignment[]): this;
}

interface FIRRolloutsStateSubscriber {
	rolloutsStateDidChange(rolloutsState: FIRRolloutsState): void;
}
declare var FIRRolloutsStateSubscriber: {
	prototype: FIRRolloutsStateSubscriber;
};

declare var FirebaseRemoteConfigInteropVersionNumber: number;

declare var FirebaseRemoteConfigInteropVersionString: interop.Reference<number>;
