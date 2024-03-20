# @nativescript-asharghi/firebase-performance

## Contents
* [Intro](#intro)
* [Set up your app for Firebase](#set-up-your-app-for-firebase)
* [Add the Firebase Performance Monitoring SDK to your app](#add-the-firebase-performance-monitoring-sdk-to-your-app)
* [Add custom tracing](#add-custom-tracing)
* [Add HTTP Request Tracing](#add-http-request-tracing)
* [API](#api)
	* [Performance class](#performance-class)
		* [android](#android)
		* [ios](#ios)
		* [app](#app)
		* [isPerformanceCollectionEnabled](#isperformancecollectionenabled)
		* [newHttpMetric()](#newhttpmetric)
		* [newTrace()](#newtrace)
	* [HttpMetric class](#httpmetric-class)
		* [android](#android-1)
		* [ios](#ios-1)
		* [getAttribute()](#getattribute)
		* [getAttributes()](#getattributes)
		* [putAttribute()](#putattribute)
		* [removeAttribute()](#removeattribute)
		* [setHttpResponseCode()](#sethttpresponsecode)
		* [setRequestPayloadSize()](#setrequestpayloadsize)
		* [setResponseContentType()](#setresponsecontenttype)
		* [start()](#start)
		* [stop()](#stop)
	* [Trace class](#trace-class)
		* [android](#android-2)
		* [ios](#ios-2)
		* [getAttribute()](#getattribute-1)
		* [getMetric()](#getmetric)
		* [getMetrics()](#getmetrics)
		* [incrementMetric()](#incrementmetric)
		* [putAttribute()](#putattribute-1)
		* [putMetric()](#putmetric)
		* [removeMetric()](#removemetric)
		* [start()](#start-1)
		* [stop()](#stop-1)
		



## Intro

This plugin allows you to use the [Firebase Performance Monitoring](https://firebase.google.com/docs/perf-mon) API in your NativeScript app.

[![image](https://img.youtube.com/vi/0EHSPFvH7vk/hqdefault.jpg)](https://www.youtube.com/watch?v=0EHSPFvH7vk)

## Set up your app for Firebase

You need to set up your app for Firebase before you can enable Firebase Performance Monitoring. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript-asharghi/firebase-core](../firebase-core/) plugin.

## Add the Firebase Performance Monitoring SDK to your app

To add the Firebase Performance Monitoring to your app, follow these steps:

1. Install the `@nativescript-asharghi/firebase-performance` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript-asharghi/firebase-performance
```

2. Add the SDK by importing the `@nativescript-asharghi/firebase-performance` module. You should import this module once in your app, ideally in the main file (e.g. `app.ts` or `main.ts`).

```ts
import '@nativescript-asharghi/firebase-performance';
```

## Add custom tracing

You can use custom traces to measure the amount of time it takes for your app to complete a specific task.

You start your custom trace by calling the [startTrace](#starttrace) method with a string to identify the trace. You can then add custom attributes and metrics to the trace. Finally, you stop the trace by calling the [stop](#stop-1) method.

```ts
import { firebase } from '@nativescript-asharghi/firebase-core';
import '@nativescript-asharghi/firebase-performance';
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

## Add HTTP Request Tracing

To create a trace for a network request, follow these steps:

- Create an instance of the [HttpMetric](#httpmetric-class) class with the URL to which the request is being made and the HTTP method used. 
```ts
const metric = await firebase().perf().newHttpMetric(url, 'GET');
```
- Add custom attributes to the metric.
```ts
metric.putAttribute('user', 'abcd');
```
- Start the metric.
```ts
await metric.start();
```
- Perform the HTTP request and provide response information.
```ts
const response = await fetch(url);
metric.setHttpResponseCode(response.statusCode);
metric.setResponseContentType(response.headers['Content-Type']);
metric.setResponsePayloadSize(response.headers['Content-Length']);
```

- Stop the metric.
```ts
await metric.stop();
```

The above steps combined would look as follows:

```ts
import { firebase } from '@nativescript-asharghi/firebase-core';
import '@nativescript-asharghi/firebase-performance';

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
import { firebase } from '@nativescript-asharghi/firebase-core';

performanceAndroid: com.google.firebase.perf.FirebasePerformance = firebase().perf().android;
```
A `read-only` property that returns the Performance Monitoring instance for Android.

---
#### ios
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

performanceIOS: FIRPerformance = firebase().perf().ios;
```
A `read-only` property that returns the Performance Monitoring instance for iOS.

---
#### app
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

performanceApp: FirebaseApp = firebase().perf().app;
```
A `read-only` property that returns the FirebaseApp instance for the current app.

---
#### isPerformanceCollectionEnabled
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

isPerformanceCollectionEnabled: boolean = firebase().perf().isPerformanceCollectionEnabled;
// or
firebase().perf().isPerformanceCollectionEnabled = true;
```
A `read-write` property that returns `true` or `false` depending on whether performance monitoring is enabled or not. You can also set this property to enable or disable performance monitoring.

---
#### newHttpMetric()
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

httpMetric: HttpMetric = firebase().perf().newHttpMetric(url, httpMethod);
```

Creates a new HttpMetric instance, used to represent an HTTP request tracing, with the given URL and httpMethod.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `url` | `string` | 
| `httpMethod` | [HttpMethod]() |

---
#### newTrace()
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

trace: Trace = firebase().perf().newTrace(identifier);
```
Creates a new Trace instance with the given identifier.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `identifier` | `string` |

---
#### startTrace()
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

trace: Trace = firebase().perf().startTrace(identifier);
```

Creates and starts a new Trace instance with the given identifier.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `identifier` | `string` |

---
### HttpMetric class
#### android
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

httpMetricAndroid: com.google.firebase.perf.metrics.HttpMetric = httpMetric.android;
```
A `read-only` property that returns the HttpMetrics instance for Android.

---
#### ios
```ts
import { firebase } from '@nativescript-asharghi/firebase-core';

httpMetricIOS: FIRHTTPMetric = httpMetric.ios;

```
A `read-only` property that returns the HttpMetric instance for iOS.

---
#### getAttribute()
```ts
someAttribute: string = httpMetric.getAttribute(attribute);
```

Returns the value for the specified attribute.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `attribute` | `string` | The name of the attribute to retrieve the value for. |

---
#### getAttributes()
```ts
attributes: { [key: string]: string } = httpMetric.getAttributes();
```

---
#### putAttribute()
```ts
httpMetric.putAttribute(attribute, value);
```

For the description of this method, see [putAttribute()](https://firebase.google.com/docs/reference/android/com/google/firebase/perf/metrics/HttpMetric#putAttribute(java.lang.String,java.lang.String)) on the Firebase documentation. 

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `attribute` | `string` | The name of the attribute to set. |
| `value` | `string` | The value of the attribute to set. |

---
#### removeAttribute()
```ts
httpMetric.removeAttribute(attribute);
```
Remove the specified attribute from the tracing metric.

---
#### setHttpResponseCode()
```ts
httpMetric.setHttpResponseCode(code);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `code` | `number` | The HTTP response code. |

---
#### setRequestPayloadSize()
```ts
httpMetric.setRequestPayloadSize(bytes);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `bytes` | `number` | The size of the request payload. |

---
#### setResponseContentType()
```ts
httpMetric.setResponseContentType(contentType);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `contentType` | `string` | The content type of the HTTP response. Examples: `text/html`, `application/json` |

---
#### start()
```ts
httpMetric.start();
```
Marks the start of an HTTP request/response tracing.


---
#### stop()
```ts
httpMetric.stop();
```

Marks the end time of the response and queues the network request metric on the device for transmission.

---
### Trace class

#### android
```ts
traceAndroid: com.google.firebase.perf.metrics.Trace = trace.android;
```
A `read-only` property that returns the Trace instance for Android.

---
#### ios
```ts
traceIOS: FIRTrace = trace.ios;
```
A `read-only` property that returns the Trace instance for iOS.

---
#### getAttribute()
```ts
someAttribute: string = trace.getAttribute(attribute);
```
Returns the value for the specified attribute of the trace.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `attribute` | `string` | The name of the attribute to retrieve the value for. |

---
#### getMetric()
```ts
someMetric: number = trace.getMetric(metricName);
```
Gets the value of the metric with the given name in the current trace. For more, information see [getMetric()](https://firebase.google.com/docs/reference/android/com/google/firebase/perf/metrics/Trace#getLongMetric(java.lang.String)) on the Firebase documentation.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `metricName` | `string` | The name of the metric to retrieve the value for. |

---
#### getMetrics()
```ts
metrics: { [key: string]: number } = trace.getMetrics();
```

---
#### incrementMetric()
```ts
trace.incrementMetric(metricName, incrementBy);
```

For the description of this method, see [incrementMetric()](https://firebase.google.com/docs/reference/android/com/google/firebase/perf/metrics/Trace#incrementMetric(java.lang.String,long)) on the Firebase documentation.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `metricName` | `string` | The name of the trace metric to increment. |
| `incrementBy` | `number` | The value to increment the metric by. |

---
#### putAttribute()
```ts
trace.putAttribute(attribute, value);
```

For the description of this method, see [putAttribute()](https://firebase.google.com/docs/reference/android/com/google/firebase/perf/metrics/Trace#putAttribute(java.lang.String,java.lang.String)) on the Firebase documentation.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `attribute` | `string` |
| `value` | `string` |

---
#### putMetric()
```ts
trace.putMetric(metricName, value);
```

For the description of this method, see [putMetric()](https://firebase.google.com/docs/reference/android/com/google/firebase/perf/metrics/Trace#putMetric(java.lang.String,long)) on the Firebase documentation.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `metricName` | `string` | The name of the trace metric to set. |
| `value` | `number` | The value to set the metric to. |

---
#### removeMetric()
```ts
trace.removeMetric(metricName);
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `metricName` | `string` | The name of the trace metric to remove from the Trace instance. |

---
#### start()
```ts
trace.start();
```
Marks the start time of the trace.

---
#### stop()
```ts
trace.stop();
```
Marks the end time of the trace and queues the trace on the device for transmission.

---
## License

Apache License Version 2.0
