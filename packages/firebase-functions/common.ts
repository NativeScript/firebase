import { FirebaseApp } from '@nativescript/firebase-core';

export type FunctionsErrorCode = 'ok' | 'cancelled' | 'unknown' | 'invalid-argument' | 'deadline-exceeded' | 'not-found' | 'already-exists' | 'permission-denied' | 'resource-exhausted' | 'failed-precondition' | 'aborted' | 'out-of-range' | 'unimplemented' | 'internal' | 'unavailable' | 'data-loss' | 'unauthenticated';

export interface HttpsCallableOptions {
	timeout?: number;
}

export type HttpsCallableResult = any;

export interface HttpsCallable {
	(data?: any): Promise<HttpsCallableResult>;
}

export enum HttpsErrorCode {
	OK = 'ok',
	CANCELLED = 'cancelled',
	UNKNOWN = 'unknown',
	INVALID_ARGUMENT = 'invalid-argument',
	DEADLINE_EXCEEDED = 'deadline-exceeded',
	NOT_FOUND = 'not-found',
	ALREADY_EXISTS = 'already-exists',
	PERMISSION_DENIED = 'permission-denied',
	UNAUTHENTICATED = 'unauthenticated',
	RESOURCE_EXHAUSTED = 'resource-exhausted',
	FAILED_PRECONDITION = 'failed-precondition',
	ABORTED = 'aborted',
	OUT_OF_RANGE = 'out-of-range',
	UNIMPLEMENTED = 'unimplemented',
	INTERNAL = 'internal',
	UNAVAILABLE = 'unavailable',
	DATA_LOSS = 'data-loss',
}

export interface IFunctions {
	app: FirebaseApp;

	httpsCallable(name: string, options?: HttpsCallableOptions): HttpsCallable;

	useEmulator(host: string, port: number);
}
