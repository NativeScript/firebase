# @nativescript/firebase-crashlytics

```cli
npm install @nativescript/firebase-crashlytics
```

## What does it do

Crashlytics helps you to collect analytics and details about crashes and errors that occur in your app. It does this through three aspects:

- **Logs**: Log events in your app to be sent with the crash report for context if your app crashes.
- **Crash reports**: Every crash is automatically turned into a crash report and sent.
- **Stack traces**: Even when an error is caught and your app recovers, the JavaScript stack trace can still be sent.

[![image](https://img.youtube.com/vi/k_mdNRZzd30/hqdefault.jpg)](https://www.youtube.com/watch?v=k_mdNRZzd30)

## Usage

Use the log method throughout your app to accumulate extra context for possible crashes that can happen. For additional context, Crashlytics also offers various methods to set attributes for the crash report. You can also test Crashlytics by forcing a crash through the crash method.

Crashlytics also supports sending JavaScript stack traces to the Firebase console. This can be used in any situation where an error occurs but is caught by your own code to recover gracefully. To send a stack trace, pass a JavaScript Error to the recordError method.

### Crash Attributes

There are various methods to set attributes for the crash report, in order to provide analytics for crashes and help you review them. You can use set methods to set predefined attributes, but you can also set your own custom attributes.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-crashlytics'; // only needs to be imported 1x

const crashlytics = firebase().crashlytics();
crashlytics.log('User signed in.');
crashlytics.setUserId(user.uid);
crashlytics().setAttribute('credits', String(user.credits));
crashlytics().setAttributes({
	role: 'admin',
	followers: '13',
	email: user.email,
	username: user.username,
});
```

### Error Reports

Even if you catch unexpected errors, in order for your app to recover and behave smoothly you can still report them through Crashlytics using the recordError method. This will also provide you with the associated stack trace.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().crashlytics().log('Updating user count.');

try {
	if (users) {
		someMethodToCatch();
	}
} catch (error) {
	crashlytics().recordError(error);
	console.log(error);
}
```

### Opt-out

As Crashlytics will be sending certain information regarding the user, users may want to opt-out of the crash reporting. This can be done throughout the app with a simple method call to setCrashlyticsCollectionEnabled:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().crashlytics().setCrashlyticsCollectionEnabled(true);
```

## License

Apache License Version 2.0
