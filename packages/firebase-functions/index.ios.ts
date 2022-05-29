import { FunctionsErrorCode, HttpsCallable, HttpsCallableOptions, HttpsErrorCode, IFunctions } from './common';
import { deserialize, firebase, FirebaseApp, serialize } from '@nativescript/firebase-core';

let defaultFunctions: Functions;

const fb = firebase();
Object.defineProperty(fb, 'functions', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultFunctions) {
				defaultFunctions = new Functions();
			}
			return defaultFunctions;
		}

		return new Functions(app);
	},
	writable: false,
});
/**
  Firebase Functions Region - Region for which to run HttpsCallable method
  Set parameter using firebase().app().functions(regionOrCustomDomain: string)
  @link https://firebase.google.com/docs/reference/node/firebase.app.App
  @link https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions
  @note If not set, default region is used ('us-central1')
  */
let defaultRegionOrCustomDomain: string;
/**
  Add 'functions' method to FirebaseApp class
  @param regionOrCustomDomain(string)(Optional): Name of the Region or Custom Domain for which to Functions results
  @return Functions
  @see FirebaseFunctions
  @link https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions
  @see Supported Regions
  @see https://firebase.google.com/docs/functions/locations
  */
const fbApp = FirebaseApp;
Object.defineProperty(fbApp.prototype, 'functions', {
	value: (regionOrCustomDomain?: string) => {
		defaultRegionOrCustomDomain = regionOrCustomDomain;
		if (!defaultFunctions) {
			defaultFunctions = new Functions();
		}
		return defaultFunctions;
	},
	writable: false,
});

function errorToCode(error: NSError) {
	let code = HttpsErrorCode.UNKNOWN;
	switch (error.code) {
		case FIRFunctionsErrorCode.OK:
			code = HttpsErrorCode.OK;
			break;
		case FIRFunctionsErrorCode.Cancelled:
			code = HttpsErrorCode.CANCELLED;
			break;
		case FIRFunctionsErrorCode.Unknown:
			code = HttpsErrorCode.UNKNOWN;
			break;
		case FIRFunctionsErrorCode.InvalidArgument:
			code = HttpsErrorCode.INVALID_ARGUMENT;
			break;
		case FIRFunctionsErrorCode.DeadlineExceeded:
			code = HttpsErrorCode.DEADLINE_EXCEEDED;
			break;
		case FIRFunctionsErrorCode.NotFound:
			code = HttpsErrorCode.NOT_FOUND;
			break;
		case FIRFunctionsErrorCode.AlreadyExists:
			code = HttpsErrorCode.ALREADY_EXISTS;
			break;
		case FIRFunctionsErrorCode.PermissionDenied:
			code = HttpsErrorCode.PERMISSION_DENIED;
			break;
		case FIRFunctionsErrorCode.ResourceExhausted:
			code = HttpsErrorCode.RESOURCE_EXHAUSTED;
			break;
		case FIRFunctionsErrorCode.FailedPrecondition:
			code = HttpsErrorCode.FAILED_PRECONDITION;
			break;
		case FIRFunctionsErrorCode.Aborted:
			code = HttpsErrorCode.ABORTED;
			break;
		case FIRFunctionsErrorCode.OutOfRange:
			code = HttpsErrorCode.OUT_OF_RANGE;
			break;
		case FIRFunctionsErrorCode.Unimplemented:
			code = HttpsErrorCode.UNIMPLEMENTED;
			break;
		case FIRFunctionsErrorCode.Internal:
			code = HttpsErrorCode.INTERNAL;
			break;
		case FIRFunctionsErrorCode.Unavailable:
			code = HttpsErrorCode.UNAVAILABLE;
			break;
		case FIRFunctionsErrorCode.DataLoss:
			code = HttpsErrorCode.DATA_LOSS;
			break;
		case FIRFunctionsErrorCode.Unauthenticated:
			code = HttpsErrorCode.UNAUTHENTICATED;
			break;
		default:
			break;
	}

	return code;
}

const FIRFunctionsErrorDomain = 'com.firebase.functions';
const FIRFunctionsErrorDetailsKey = 'details';

export class HttpsError extends Error {
	readonly code: FunctionsErrorCode;
	readonly details?: any;
	readonly native: any;

	constructor(code: FunctionsErrorCode, message: string, details = null, native = null) {
		super(message);
		this.code = code;
		this.details = details;
		this.native = native;
	}
}

function toHttpsError(error: NSError) {
	let details = null;
	if (error.domain == FIRFunctionsErrorDomain) {
		details = error.userInfo[FIRFunctionsErrorDetailsKey];
	}

	return new HttpsError(errorToCode(error), error.localizedDescription, details, error);
}

export class Functions implements IFunctions {
	#native: FIRFunctions;
	#app: FirebaseApp;

	constructor(app?: FirebaseApp) {
		if (app?.native) {
			if (defaultRegionOrCustomDomain) {
				this.#native = isRegion(defaultRegionOrCustomDomain) // Check whether a Region has been set
					? FIRFunctions.functionsForAppRegion(app.native, defaultRegionOrCustomDomain) // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functionsforapp:region:
					: isCustomDomain(defaultRegionOrCustomDomain) // Check whether using a Custom Domain has been set
					? FIRFunctions.functionsForAppCustomDomain(app.native, defaultRegionOrCustomDomain) // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functionsforapp:customdomain:
					: FIRFunctions.functionsForApp(app.native); // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functionsforapp:
			} else {
				this.#native = FIRFunctions.functionsForApp(app.native); // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functionsforapp:
			}
		} else {
			if (defaultFunctions) {
				return defaultFunctions;
			}
			defaultFunctions = this;
			if (defaultRegionOrCustomDomain) {
				this.#native = isRegion(defaultRegionOrCustomDomain) // Check whether a Region has been set
					? FIRFunctions.functionsForRegion(defaultRegionOrCustomDomain) // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functionsforregion:
					: isCustomDomain(defaultRegionOrCustomDomain) // Check whether using a Custom Domain has been set
					? FIRFunctions.functionsForCustomDomain(defaultRegionOrCustomDomain) // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functionsforcustomdomain:
					: FIRFunctions.functions(); // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functions
			} else {
				this.#native = FIRFunctions.functions(); // @see https://firebase.google.com/docs/reference/ios/firebasefunctions/api/reference/Classes/FIRFunctions#+functions
			}
		}
	}

	httpsCallable(name: string, options?: HttpsCallableOptions): HttpsCallable {
		const callable = this.native.HTTPSCallableWithName(name);
		if (typeof options?.timeout === 'number') {
			callable.timeoutInterval = options.timeout;
		}
		return (data: any) => {
			return new Promise((resolve, reject) => {
				if (data) {
					callable.callWithObjectCompletion(serialize(data), (result, error) => {
						if (error) {
							reject(toHttpsError(error));
						} else {
							resolve(deserialize(result.data));
						}
					});
				} else {
					callable.callWithCompletion((result, error) => {
						if (error) {
							reject(toHttpsError(error));
						} else {
							resolve(deserialize(result.data));
						}
					});
				}
			});
		};
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulatorWithHostPort(host, port);
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
}
/**
  Check whether a regionOrCustomDomain string is a Region for the http trigger, such as “us-central1”.
  @param regionOrCustomDomain(string): Text to parse
  @return boolean: TRUE if a Region; FALSE if not
  */
function isRegion(regionOrCustomDomain: string): boolean {
	const elems = regionOrCustomDomain.split('.');
	return elems.length === 1 ? true : false;
}
/**
  Check whether a regionOrCustomDomain string is a Custom Domain for the http trigger, such as “https://mydomain.com”
  @param regionOrCustomDomain(string): Text to parse
  @return boolean: TRUE if a CustomDomain; FALSE if not
  */
function isCustomDomain(regionOrCustomDomain: string): boolean {
	return !isRegion(regionOrCustomDomain);
}
