declare class FIRHeartbeatController extends NSObject {
	static alloc(): FIRHeartbeatController; // inherited from NSObject

	static new(): FIRHeartbeatController; // inherited from NSObject

	constructor(o: { id: string });

	flush(): FIRHeartbeatsPayload;

	flushHeartbeatFromToday(): FIRHeartbeatsPayload;

	initWithId(id: string): this;

	log(agent: string): void;
}

declare class FIRHeartbeatsPayload extends NSObject {
	static alloc(): FIRHeartbeatsPayload; // inherited from NSObject

	static new(): FIRHeartbeatsPayload; // inherited from NSObject

	readonly isEmpty: boolean;

	headerValue(): string;
}

declare var FirebaseCoreInternalVersionNumber: number;

declare var FirebaseCoreInternalVersionString: interop.Reference<number>;
