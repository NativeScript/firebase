import { FunctionsErrorCode, HttpsCallable, HttpsCallableOptions, HttpsErrorCode, IFunctions } from './common';
import { FirebaseApp } from '@nativescript/firebase-core';

export { FunctionsErrorCode, HttpsErrorCode, HttpsCallableOptions, HttpsCallable };

export declare class HttpsError extends Error {
	readonly code: FunctionsErrorCode;
	readonly details?: any;
	readonly native: any;
}

export declare class Functions implements IFunctions {
	constructor(app?: FirebaseApp);

	httpsCallable(name: string, options?: HttpsCallableOptions): HttpsCallable;

	useEmulator(host: string, port: number);

	readonly native: any;
	readonly ios: any;
	readonly android: any;

	useFunctionsEmulatorOrigin(origin: string);

	readonly app: FirebaseApp;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseFunctions {}
}

export interface FirebaseFunctions {
	static functions(app?: FirebaseApp): Functions;
}
