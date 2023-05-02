# @nativescript/firebase-remote-config

## Intro

This plugin allows you to use the [Firebase Remote Config](https://firebase.google.com/docs/remote-config/) API in your NativeScript app.

[![image](https://img.youtube.com/vi/_CXXVFPO6f0/hqdefault.jpg)](https://www.youtube.com/watch?v=_CXXVFPO6f0)

## Set up your app for Firebase

You need to set up your app for Firebase before you can enable Firebase Remote Config. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

## Add the Firebase Remote Config SDK to your app

To add the Firebase Remote Config to your app, follow these steps:

1. Install the `@nativescript/firebase-remote-config` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-remote-config
```

2. Add the SDK by importing the `@nativescript/firebase-remote-config` module. You should import this module once in your app, ideally in the main file (e.g. `app.ts` or `main.ts`).

```ts
import '@nativescript/firebase-remote-config';
```

## Create default parameters

To create default Remote Config parameters, follow the steps:

1. [Firebase Console](https://console.firebase.google.com/project/_/config) and select your project.
2. On the **Remote Config** page, click **Create configuration** to create a parameter.

### Set default values

Before fetching the parameters from Firebase, it is first important to set some default values. Default values help ensure that your application code runs as expected in scenarios where the device has not yet retrieved the values.

An example of this is having no network or you have not yet fetched them within your code.

Setting default values helps to ensure that both the local device & Firebase servers are both in sync. Call the [setDefaults](#setdefaults) method early on in your application:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-remote-config'; // only needs to be imported 1x

firebase()
	.remoteConfig()
	.setDefaults({
		awesome_new_feature: 'disabled',
	})
	.then(() => {
		console.log('Default values set.');
	});
```

### Fetch & Activate

Before reading the values from Firebase, we first need to pull them from Firebase (fetching) & then enable them on the device (activating). The fetchAndActivate API combines both tasks into a single flow:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.remoteConfig()
	.setDefaults({
		awesome_new_feature: 'disabled',
	})
	.then(() => remoteConfig().fetchAndActivate())
	.then((fetchedRemotely) => {
		if (fetchedRemotely) {
			console.log('Configs were retrieved from the backend and activated.');
		} else {
			console.log('No configs were fetched from the backend, and the local configs were already activated');
		}
	});
```

### Reading values

With the defaults set and the remote values fetched from Firebase, we can now use the getValue method to get the value and use a number of methods to retrieve the value (same API as Firebase Remote Config web SDK)

```ts
import { firebase } from '@nativescript/firebase-core';

const awesomeNewFeature = firebase().remoteConfig().getValue('awesome_new_feature');

// resolves value to string
if (awesomeNewFeature.asString() === 'enabled') {
	enableAwesomeNewFeature();
}
// resolves value to number
// if it is not a number or source is 'static', the value will be 0
if (awesomeNewFeature.asNumber() === 5) {
	enableAwesomeNewFeature();
}
// resolves value to boolean
// if value is any of the following: '1', 'true', 't', 'yes', 'y', 'on', it will resolve to true
// if source is 'static', value will be false
if (awesomeNewFeature.asBoolean() === true) {
	enableAwesomeNewFeature();
}
```

The API also provides a getAll method to read all parameters at once rather than by key:

```ts
import { firebase } from '@nativescript/firebase-core';

const parameters = firebase().remoteConfig().getAll();

Object.entries(parameters).forEach((item) => {
	const [key, entry] = item;
	console.log('Key: ', key);
	console.log('Source: ', entry.getSource());
	console.log('Value: ', entry.asString());
});
```

### Value source

When a value is read, it contains source data about the parameter. As explained above, if a value is read before it has been fetched & activated then the value will fallback to the default value set. If you need to validate whether the value returned from the module was local or remote, the getSource() method can be conditionally checked:

```ts
import { firebase } from '@nativescript/firebase-core';

const awesomeNewFeature = firebase().remoteConfig().getValue('awesome_new_feature');

if (awesomeNewFeature.getSource() === 'remote') {
	console.log('Parameter value was from the Firebase servers.');
} else if (awesomeNewFeature.getSource() === 'default') {
	console.log('Parameter value was from a default value.');
} else {
	console.log('Parameter value was from a locally cached value.');
}
```

### Caching

Although Remote Config is a data-store, it is not designed for frequent reads - Firebase heavily caches the parameters (default is 12 hours). By design, this prevents the values being able to change frequently and potentially cause users confusion.

You can however specify your own cache length by specifically calling the fetch method with the number of seconds to cache the values for:

```ts
import { firebase } from '@nativescript/firebase-core';
// Fetch and cache for 5 minutes
await firebase().remoteConfig().fetch(300);
```

To bypass caching fully, you can pass a value of 0. Be warned Firebase may start to reject your requests if values are requested too frequently.

You can also apply a global cache frequency by calling the setConfigSettings method with the minimumFetchIntervalMillis property:

```ts
import { firebase } from '@nativescript/firebase-core';
remoteConfig().settings.minimumFetchIntervalMillis = 30000;
```

## API

### RemoteConfig class

#### android

```ts
import { firebase } from '@nativescript/firebase-core';

remoteConfigAndroid: com.google.firebase.remoteconfig.FirebaseRemoteConfig = firebase().remoteConfig().android;
```
A `read-only` property that returns the naive object for Android wrapped by the instance of the RemoteConfig class.

---
#### ios

```ts
import { firebase } from '@nativescript/firebase-core';

remoteConfigIos: FIRRemoteConfig = firebase().remoteConfig().ios;
```
A `read-only` property that returns the naive object for iOS wrapped by the instance of the RemoteConfig class.

---
#### app

```ts
import { firebase } from '@nativescript/firebase-core';

remoteConfigApp: FirebaseApp = firebase().remoteConfig().app;
```
A `read-only` property that returns the FirebaseApp instance for the current app.

---
#### fetchTimeMillis

```ts
import { firebase } from '@nativescript/firebase-core';

remoteConfigFetchTimeMillis: number = firebase().remoteConfig().fetchTimeMillis;
```
A `read-only` property that returns the timestamp (milliseconds since epoch) of the last successful fetch, regardless of whether the fetch was activated or not.

---
#### lastFetchStatus

```ts
import { firebase } from '@nativescript/firebase-core';

remoteConfigLastFetchStatus: 'success' | 'failure' | 'no_fetch_yet' | 'throttled' = firebase().remoteConfig().lastFetchStatus;
```
A `read-only` property that returns the status of the most recent fetch attempt.

---
#### settings

```ts
import { firebase } from '@nativescript/firebase-core';

remoteConfigSettings: ConfigSettings = firebase().remoteConfig().settings;
// or
firebase().remoteConfig().settings = {
	minimumFetchIntervalMillis: 30000,
};
```

---
#### activate()

```ts
import { firebase } from '@nativescript/firebase-core';

activated: boolean = await firebase().remoteConfig().activate();
```

---
#### ensureInitialized()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().ensureInitialized();
```

---
#### fetch()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().fetch(expirationDurationSeconds);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `expirationDurationSeconds` | `number` |

---
#### fetchAndActivate()

```ts
import { firebase } from '@nativescript/firebase-core';

activated: boolean = await firebase().remoteConfig().fetchAndActivate();
```

---
#### getAll()

```ts
import { firebase } from '@nativescript/firebase-core';

parameters: Record<string, ConfigValue> = firebase().remoteConfig().getAll();
```

---
#### getBoolean()

```ts
import { firebase } from '@nativescript/firebase-core';

value: boolean = firebase().remoteConfig().getBoolean(key);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` |

---
#### getNumber()

```ts
import { firebase } from '@nativescript/firebase-core';

value: number = firebase().remoteConfig().getNumber(key);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` |

---
#### getString()

```ts
import { firebase } from '@nativescript/firebase-core';

value: string = firebase().remoteConfig().getString(key);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` |

---
#### getValue()

```ts
import { firebase } from '@nativescript/firebase-core';

value: ConfigValue = firebase().remoteConfig().getValue(key);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` |

---
#### reset()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().reset();
```

---
#### setDefaults()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().setDefaults(defaults);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `defaults` | `ConfigDefaults` |


---
#### setDefaultsFromResource()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().setDefaultsFromResource(resourceName);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `resourceName` | `string` |



```ts
export class RemoteConfig implements IRemoteConfig {
	constructor(app?: FirebaseApp);

	readonly native;
	readonly ios;
	readonly android;

	readonly app: FirebaseApp;

	readonly fetchTimeMillis: number;

	readonly lastFetchStatus: 'success' | 'failure' | 'no_fetch_yet' | 'throttled';

	settings: ConfigSettings;

	activate(): Promise<boolean>;

	ensureInitialized(): Promise<void>;

	fetch(expirationDurationSeconds?: number): Promise<void>;

	fetchAndActivate(): Promise<boolean>;

	getAll(): Record<string, ConfigValue>;

	getBoolean(key: string): boolean;

	getNumber(key: string): number;

	getString(key: string): string;

	getValue(key: string): ConfigValue;

	reset(): Promise<void>;

	setDefaults(defaults: ConfigDefaults): Promise<void>;

	setDefaultsFromResource(resourceName: string): Promise<void>;
}
```
## License

Apache License Version 2.0
