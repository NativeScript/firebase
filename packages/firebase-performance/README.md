# @nativescript/firebase-performance

```cli
npm install @nativescript/firebase-performance
```

## What does it do

Performance Monitoring allows you to gain insight into key performance characteristics within your application. It provides a simple API to track custom trace and HTTP request metrics

[![image](https://img.youtube.com/vi/0EHSPFvH7vk/hqdefault.jpg)](https://www.youtube.com/watch?v=0EHSPFvH7vk)

Review and analyze that data in the Firebase console. Performance Monitoring helps you to understand where and when the performance of your app can be improved so that you can use that information to fix performance issues.

Performance Monitoring package automatically traces events and metrics which are sent to Firebase. For more information on the automatic traces, please see the Firebase Performance Monitoring [documentation](https://firebase.google.com/docs/perf-mon/auto_duration-traces-metrics_ios-android). The package also allows you to performance monitor custom aspects to your application like network requests & task specific app code. All performance metrics are available on your Firebase [console](https://console.firebase.google.com/u/0/) performance tab.

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

## License

Apache License Version 2.0
