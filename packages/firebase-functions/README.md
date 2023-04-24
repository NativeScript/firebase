# @nativescript/firebase-functions

## Contents
* [Intro](#intro)
* [Set up your app for Firebase](#set-up-your-app-for-firebase)
* [Add the Firebase Functions SDK to your app](#add-the-firebase-functions-sdk-to-your-app)
* [Use @nativescript/firebase-functions](#use-nativescriptfirebase-functions)
	* [Calling an endpoint](#calling-an-endpoint)
	* [Set and access regional Cloud Functions endpoints](#set-and-access-regional-cloud-functions-endpoints)
		* [Set regional function endpoint](#set-regional-function-endpoint)
		* [Access regional function endpoint](#access-regional-function-endpoint)
	* [Test Cloud Functions with a local emulator](#test-cloud-functions-with-a-local-emulator)
* [API](#api)
	* [Functions class](#functions-class)
		* [ios](#ios)
		* [android](#android)
		* [app](#app)
		* [constructor()](#constructor)
		* [httpsCallable()](#httpscallable)
		* [useEmulator()](#useemulator)
	
## Intro
This plugin allows you to use [Firebase Cloud Functions](https://firebase.google.com/docs/functions) with NativeScript.

[![image](https://img.youtube.com/vi/vr0Gfvp5v1A/hqdefault.jpg)](https://www.youtube.com/watch?v=vr0Gfvp5v1A)

## Set up your app for Firebase

- To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

<!-- ## Create your Firestore database

To create your Firestore database, follow the instructions at [Create a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart#create). -->

## Add the Firebase Functions SDK to your app

To add the Cloud Firebase Functions SDK to your app, install the `@nativescript/firebase-functions` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-functions
```

## Use @nativescript/firebase-functions

The Cloud Functions module provides the functionality to directly trigger deployed HTTPS callable functions, without worrying about security or implementing an HTTP request library.

Functions deployed to Firebase have unique names, allowing you to easily identify which endpoint you wish to send a request to. 

## Calling an endpoint

Assuming we have to deploy a callable endpoint named `listProducts`. To call the endpoint, the library exposes a `httpsCallable` method. For example:

```ts
// Deployed HTTPS callable
exports.listProducts = functions.https.onCall(() => {
	return [
		/* ... */
		// Return some data
	];
});
```

Within the application, the list of products returned can be directly accessed by passing the name of the endpoint to the `httpsCallable` method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-functions';
firebase()
	.functions()
	.httpsCallable('listProducts')()
	.then((response) => {
		setProducts(response.data);
		setLoading(false);
	});
```

## Set and access regional Cloud Functions endpoints

Cloud Functions are _regional_, which means the infrastructure that runs your Cloud Function is located in specific regions.

By default, functions run in the `us-central1` region. To see supported regions, see [supported regions](https://firebase.google.com/docs/functions/locations#supported_regions).

### Set regional function endpoint

To run functions in a different region after initializing Firebase App, set the region using `firebase().app().functions(region)`.

The code below shows an example of setting a regional function endpoint(`europe-west2`):
```ts
// Deployed HTTPS callable
exports.listProducts = functions.region("europe-west2").https.onCall(() => {
	return [
		/* ... */
		// Return some data
	];
});
```

### Access regional function endpoint

To access a regional function endpoint, call the `firebase().app().functions(region)` method on the Firebase App instance:
```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-functions';

firebase().initializeApp();
firebase().app().functions("europe-west2");

firebase()
	.functions()
	.httpsCallable('listProducts')()
	.then((response) => {
		setProducts(response.data);
		setLoading(false);
	});
```

## Test Cloud Functions with a local emulator

Whilst developing your application with Cloud Functions, you can run the functions inside of a local emulator.

To call the emulated functions, connect the Cloud Functions to a local emulator by calling the [useEmulator](#useemulator) method on the `Functions` instance with the host and port of the emulator.

```ts
import { firebase } from '@nativescript/firebase-core';
firebase().functions().useEmulator('localhost', 5000);
```

## API
### Functions class

#### ios
```ts
functionsIOs: FIRFunctions = firebase.functions().ios;
```
A `readonly` property that returns the native iOS `FIRFunctions` instance.

---
#### android
```ts
functionsAndroid: com.google.firebase.functions.FirebaseFunctions = firebase.functions().android;
```

A `readonly` property that returns the native Android `com.google.firebase.functions.FirebaseFunctions` instance.

---
#### app
```ts
app: FirebaseApp = firebase().functions().app;
```

A `readonly` property that returns the FirebaseApp instance associated with the Functions instance.

---
#### constructor() 
```ts
functions: Functions = new Functions(app);
```
Creates a new Functions instance.

| Parameter | Type | Description |
| --- | --- | --- |
| `app` | `FirebaseApp` | An _optional_ FirebaseApp instance to use. |

---
#### httpsCallable()
```ts
task: HttpsCallable = firebase().functions().httpsCallable(name, options);

httpsCallable(data).then((response: HttpsCallableResult) => {
	// Do something with the response
}).catch((error: HttpsCallableError) => {
	console.log(error.code, error.message, error.details);

});
```
Returns a task function that can be called with optional data. The task function returns a Promise that will be resolved with the result(`HttpsCallableResult`) of the function execution. If the task fails, the Promise will be rejected with an [HttpsCallableError](https://github.com/NativeScript/firebase/blob/main/packages/firebase-functions/index.d.ts#L6-L10).

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `string` |  The name of the reference to the Callable HTTPS trigger. |
| `options` | [HttpsCallableOptions](https://github.com/NativeScript/firebase/blob/main/packages/firebase-functions/common.ts#L5-L7) | An _optional_ object that sets the length of timeout, in `seconds`, for calls for this `Functions` instance. |

---

#### useEmulator()
```ts
firebase().functions().useEmulator(host, port);
```
Allows you to test  Cloud Functions locally by connecting to the emulator.

| Parameter | Type | Description |
| --- | --- | --- |
| `host` | `string` | The host of the emulator to connect to. |
| `port` | `number` | The port of the emulator to connect to. |

---

## License

Apache License Version 2.0
