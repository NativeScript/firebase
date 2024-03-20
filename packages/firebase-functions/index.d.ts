import { FunctionsErrorCode, HttpsCallable, HttpsCallableOptions, HttpsErrorCode, IFunctions } from './common';
import { FirebaseApp } from '@nativescript-asharghi/firebase-core';

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

declare module '@nativescript-asharghi/firebase-core' {
	export interface Firebase extends FirebaseFunctions {}
	// Add 'functions' method to FirebaseApp
	export interface FirebaseApp extends FirebaseFunctionsApp {}
}

export interface FirebaseFunctions {
	static functions(app?: FirebaseApp): Functions;
}
/**
	Add Region (Android & iOS) or Custom Domain (iOS only) to Firebase Functions HTTPS call
	@param regionOrCustomDomain (string) (optional): Region (Android or iOS) or Custom Domain (iOS only)
	@return Functions
	@see Supported Regions: https://firebase.google.com/docs/functions/locations
	@example firebase().app().functions("us-central1")
	*/
export interface FirebaseFunctionsApp {
	static functions(regionOrCustomDomain?: string): Functions;
}
