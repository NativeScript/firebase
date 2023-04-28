# @nativescript/firebase-performance

## Intro

This plugin allows you to use the [Firebase Performance Monitoring](https://firebase.google.com/docs/perf-mon) API in your NativeScript app.

[![image](https://img.youtube.com/vi/0EHSPFvH7vk/hqdefault.jpg)](https://www.youtube.com/watch?v=0EHSPFvH7vk)

## Set up your app for Firebase

You need to set up your app for Firebase before you can enable Firebase Performance Monitoring. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

## Add the Firebase Performance Monitoring SDK to your app

To add the Firebase Performance Monitoring to your app, follow these steps:

1. Install the `@nativescript/firebase-performance` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-performance
```

2. Add the SDK by importing the `@nativescript/firebase-performance` module. You should import this module once in your app, ideally in the main file (e.g. `app.ts` or `main.ts`).

```ts
import '@nativescript/firebase-performance';
```

## Usage

### Custom tracing

Below is how you would measure the amount of time it would take to complete a specific task in your app code.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-performance';
async function customTrace() {
	// Define & start a trace
	const trace = await firebase().perf().startTrace('custom_trace');

	// Define trace meta details
	trace.putAttribute('user', 'abcd');
	trace.putMetric('credits', 30);

	// Stop the trace
	await trace.stop();
}
```

### HTTP Request Tracing

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-performance';

async function getRequest(url) {
	// Define the network metric
	const metric = await firebase().perf().newHttpMetric(url, 'GET');

	// Define meta details
	metric.putAttribute('user', 'abcd');

	// Start the metric
	await metric.start();

	// Perform a HTTP request and provide response information
	const response = await fetch(url);
	metric.setHttpResponseCode(response.statusCode);
	metric.setResponseContentType(response.headers['Content-Type']);
	metric.setResponsePayloadSize(response.headers['Content-Length']);

	// Stop the metric
	await metric.stop();

	return response.toJSON();
}

// Call API
getRequest('https://api.com').then((json) => {
	console.log(json);
});
```
## API
### Performance class
#### android
```ts
import { firebase } from '@nativescript/firebase-core';

performanceAndroid: com.google.firebase.perf.FirebasePerformance = firebase().perf().android;
```
A `read-only` property that returns the Permormance Monitoring instance for Android.

---
#### ios
```ts
import { firebase } from '@nativescript/firebase-core';

performanceIOS: FIRPerformance = firebase().perf().ios;
```
A `read-only` property that returns the Permormance Monitoring instance for iOS.

---
#### app
```ts
import { firebase } from '@nativescript/firebase-core';

performanceApp: FirebaseApp = firebase().perf().app;
```
A `read-only` property that returns the FirebaseApp instance for the current app.

---
#### isPerformanceCollectionEnabled
```ts
import { firebase } from '@nativescript/firebase-core';

isPerformanceCollectionEnabled: boolean = firebase().perf().isPerformanceCollectionEnabled;
// or
firebase().perf().isPerformanceCollectionEnabled = true;
```

---
#### newHttpMetric()
```ts
import { firebase } from '@nativescript/firebase-core';

firebase().perf().newHttpMetric(url, httpMethod);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `url` | `string` | 
| `httpMethod` | [HttpMethod](#httpmethod) |

---
#### newTrace()
```ts
import { firebase } from '@nativescript/firebase-core';

trace: Trace = firebase().perf().newTrace(identifier);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `identifier` | `string` |

---
#### startTrace()
```ts
import { firebase } from '@nativescript/firebase-core';

trace: Trace = firebase().perf().startTrace(identifier);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `identifier` | `string` |

---
### HttpMetric class


### Trace class
## License

Apache License Version 2.0
