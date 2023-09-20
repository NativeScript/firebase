# @nativescript/firebase-crashlytics

- [Intro](#Intro)
- [Installation](#Installation)
- [Use @nativescript/firebase-crashlytics](#use-nativescriptfirebase-crashlytics)
  - [Log a crash context](#log-a-crash-context)
  - [Set crash attributes for more context data](#set-crash-attributes-for-more-context-data)
  - [Test crashlytics](#test-crashlytics)
  - [Report errors manually](#report-errors-manually)
  - [Manually enable or disable crashlytics collection](#manually-enable-or-disable-crashlytics-collection
- [API](#API)
  - [Crashlytics](#Crashlytics)
    - [Properties](#Properties)
    - [Methods](#Methods)
- [License](#License)

A plugin that allows you to add [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics) to your NativeScript app.

> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase.

Crashlytics helps you to collect analytics and details about crashes and errors that occur in your app. It does this through three aspects:

- **Logs**: Log events in your app to be sent with the crash report for context when your app crashes.
- **Crash reports**: Every crash is automatically turned into a crash report and sent.
- **Stack traces**: Even when an error is caught and your app recovers, the JavaScript stack trace can still be sent.

[![image](https://img.youtube.com/vi/k_mdNRZzd30/hqdefault.jpg)](https://www.youtube.com/watch?v=k_mdNRZzd30)

## Installation

Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-crashlytics
```

## Use @nativescript/firebase-crashlytics

### Log a crash context

Use the `log` method throughout your app to accumulate extra context for possible crashes that can happen.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-crashlytics'; // only needs to be imported 1x

const crashlytics = firebase().crashlytics();
crashlytics.log('User signed in.');
```

### Set crash attributes for more context data

For additional context, Crashlytics also offers various methods to set attributes for the crash report.

- To set a single attribute, call the `setAttribute` method passing it the attribute name as the first argument and its value as the second argument.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-crashlytics'; // only needs to be imported 1x

const crashlytics = firebase().crashlytics();

crashlytics().setAttribute('credits', String(user.credits));
```

- To set multiple attributes at once, call the `setAttributes` method with an object containing the attributes.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-crashlytics'; // only needs to be imported 1x

const crashlytics = firebase().crashlytics();

crashlytics().setAttributes({
  role: 'admin',
  followers: '13',
  email: user.email,
  username: user.username,
});
```

You can use set methods to set predefined attributes, but you can also set your own custom attributes.

- You can also set the user ID. To do that call the `setUserId` method on `firebase().crashlytics()`

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-crashlytics'; // only needs to be imported 1x

const crashlytics = firebase().crashlytics();

crashlytics.setUserId(user.uid);
```

### Test crashlytics

To test Crashlytics for your app, call the `crash` method to force a crash and in Firebase Console, see if the crash is logged.

```ts
firebase().crashlytics().crash();
```

### Report errors manually

Crashlytics also supports sending JavaScript stack traces to the Firebase console. This can be used in any situation where an error occurs but is caught by your code to recover gracefully.

To send a stack trace, pass a JavaScript Error to the `recordError` method.

Even if you catch unexpected errors, for your app to recover and behave smoothly you can still report them through Crashlytics using the `recordError` method. This will also provide you with the associated stack trace.

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

### Manually enable or disable crashlytics collection

As Crashlytics will be sending certain information regarding the user, users may want to opt out of the crash reporting. To disable crashlytics collection, call the `setCrashlyticsCollectionEnabled` method on `firebase().crashlytics()` passing it `false` This can be done throughout the app with a simple method call to setCrashlyticsCollectionEnabled:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().crashlytics().setCrashlyticsCollectionEnabled(false);
```

## API

### Crashlytics

The Crashlytics class has the following members.

#### Properties

| Property  | Type            | Description |
| --------- | --------------- | ----------- |
| `ios`     |                 | _readonly_  |
| `android` | _readonly_      |
| `app`     | [FirebaseApp](https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp) | _readonly_  |

#### Methods

| Method                                                                      | Returns            | Description |
| --------------------------------------------------------------------------- | ------------------ | ----------- |
| `checkForUnsentReports()`                                                   | `Promise<boolean>` |             |
| `crash()`                                                                   | `void`             |             |
| `deleteUnsentReports()`                                                     | `void`             |             |
| `didCrashOnPreviousExecution()`                                             | `boolean`          |             |
| `log(message: string)`                                                      | `void`             |             |
| `recordError(error: any)`                                                   | `void`             |             |
| `sendUnsentReports()`                                                       | `void`             |             |
| `setAttribute(name: string, value: string \| number \| boolean)`            | `void`             |             |
| `setAttributes(attributes: { [key: string]: string \| number \| boolean })` | `void`             |             |
| `setCrashlyticsCollectionEnabled(enabled: boolean)`                         | `void`             |             |
| `setUserId(userId: string)`                                                 | `void`             |             |

## License

Apache License Version 2.0
