import {
  FunctionsErrorCode,
  HttpsCallable,
  HttpsCallableOptions,
  HttpsErrorCode,
  IFunctions,
} from "./common";
import {deserialize, firebase, FirebaseApp, serialize} from "@nativescript/firebase-core";


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


function errorToCode(error: com.google.firebase.functions.FirebaseFunctionsException.Code) {
  let code = HttpsErrorCode.UNKNOWN;
  switch (error) {
    case com.google.firebase.functions.FirebaseFunctionsException.Code.OK:
      code = HttpsErrorCode.OK;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.CANCELLED:
      code = HttpsErrorCode.CANCELLED;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.UNKNOWN:
      code = HttpsErrorCode.UNKNOWN;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.INVALID_ARGUMENT:
      code = HttpsErrorCode.INVALID_ARGUMENT;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.DEADLINE_EXCEEDED:
      code = HttpsErrorCode.DEADLINE_EXCEEDED;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.NOT_FOUND:
      code = HttpsErrorCode.NOT_FOUND;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.ALREADY_EXISTS:
      code = HttpsErrorCode.ALREADY_EXISTS;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.PERMISSION_DENIED:
      code = HttpsErrorCode.PERMISSION_DENIED;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.RESOURCE_EXHAUSTED:
      code = HttpsErrorCode.RESOURCE_EXHAUSTED;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.FAILED_PRECONDITION:
      code = HttpsErrorCode.FAILED_PRECONDITION;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.ABORTED:
      code = HttpsErrorCode.ABORTED;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.OUT_OF_RANGE:
      code = HttpsErrorCode.OUT_OF_RANGE;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.UNIMPLEMENTED:
      code = HttpsErrorCode.UNIMPLEMENTED;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.INTERNAL:
      code = HttpsErrorCode.INTERNAL;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.UNAVAILABLE:
      code = HttpsErrorCode.UNAVAILABLE;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.DATA_LOSS:
      code = HttpsErrorCode.DATA_LOSS;
      break;
    case com.google.firebase.functions.FirebaseFunctionsException.Code.UNAUTHENTICATED:
      code = HttpsErrorCode.UNAUTHENTICATED;
      break;
    default:
      break;
  }

  return code;
}

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

function toHttpsError(error: any) {
  let details = null;
  let message = error.getMessage?.()
  let code = HttpsErrorCode.UNKNOWN;
  const cause = error.getCause();
  if (cause instanceof com.google.firebase.functions.FirebaseFunctionsException) {
    const functionsException = cause;
    details = functionsException.getDetails();
    code = errorToCode(functionsException.getCode());
    message = (functionsException as any).getMessage?.();
    const isTimeout = code === HttpsErrorCode.DEADLINE_EXCEEDED;

    if ((functionsException as any).getCause?.() instanceof java.io.IOException && !isTimeout) {
      code = HttpsErrorCode.UNAVAILABLE;
      message = HttpsErrorCode.UNAVAILABLE;
    }
  }


  return new HttpsError(
    code, message, details, error
  )
}

export class Functions implements IFunctions {
  #native: com.google.firebase.functions.FirebaseFunctions;
  #app: FirebaseApp;

  constructor(app?: FirebaseApp) {
    if (app?.native) {
      this.#native = com.google.firebase.functions.FirebaseFunctions.getInstance(app.native);
    } else {
      if(defaultFunctions){
        return defaultFunctions;
      }
      defaultFunctions = this;
      this.#native = com.google.firebase.functions.FirebaseFunctions.getInstance();
    }
  }


  httpsCallable(name: string, options?: HttpsCallableOptions): HttpsCallable {
    const callable = this.native.getHttpsCallable(name);
    if (typeof options?.timeout === 'number') {
      callable.setTimeout(options.timeout, java.util.concurrent.TimeUnit.SECONDS);
    }
    return (data: any) => {
      return new Promise((resolve, reject) => {
        org.nativescript.firebase.functions.FirebaseFunctions.call(
          callable, data ? serialize(data) : null, new org.nativescript.firebase.functions.FirebaseFunctions.Callback<com.google.firebase.functions.HttpsCallableResult>({
            onSuccess(result: com.google.firebase.functions.HttpsCallableResult): void {
              resolve(deserialize(result?.getData?.()))
            }, onError(error): void {
              reject(toHttpsError(error))
            }
          })
        )
      })
    };
  }

  useEmulator(host: string, port: number) {
    this.native.useEmulator(host, port);
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  useFunctionsEmulatorOrigin(origin: string) {
    this.native.useFunctionsEmulator(origin);
  }

  get app(): FirebaseApp {
    if (!this.#app) {
      // @ts-ignore
      this.#app = FirebaseApp.fromNative(this.native.getApp());
    }
    return this.#app;
  }
}
