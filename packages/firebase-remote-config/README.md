# @nativescript/firebase-remote-config

## Contents
* [Intro](#intro)
* [Set up your app for Firebase](#set-up-your-app-for-firebase)
* [Add the Firebase Remote Config SDK to your app](#add-the-firebase-remote-config-sdk-to-your-app)
* [Create in-app default parameters](#create-in-app-default-parameters)
* [Set parameter values in the Remote Config backend](#set-parameter-values-in-the-remote-config-backend)
* [Fetch and activate values](#fetch-and-activate-values)
	* [Set a minimum fetch interval](#set-a-minimum-fetch-interval)
* [Reading parameters values](#reading-parameters-values)
	* [Read a single parameter](#read-a-single-parameter)
	* [Read all parameters at once](#read-all-parameters-at-once)
* [Get the source of a parameter's value](#get-the-source-of-a-parameters-value)
* [Set a minimum fetch interval](#set-a-minimum-fetch-interval)
* [API](#api)
	* [RemoteConfig class](#remoteconfig-class)
		* [android](#android)
		* [ios](#ios)
		* [app](#app)
		* [fetchTimeMillis](#fetchtimemillis)
		* [lastFetchStatus](#lastfetchstatus)
		* [settings](#settings)
		* [activate()](#activate)
		* [ensureInitialized()](#ensureinitialized)
		* [fetch()](#fetch)
		* [fetchAndActivate()](#fetchandactivate)
		* [getAll()](#getall)
		* [getBoolean()](#getboolean)
		* [getNumber()](#getnumber)
		* [getString()](#getstring)
		* [getValue()](#getvalue)
		* [reset()](#reset)
		* [setDefaults()](#setdefaults)
		* [setDefaultsFromResource()](#setdefaultsfromresource)
	* [ConfigValue object](#configvalue-object)
		* [android](#android-1)
		* [ios](#ios-1)
		* [asBoolean()](#asboolean)
		* [asNumber()](#asnumber)
		* [asString()](#asstring)
		* [getSource()](#getsource)
		

* [License](#license)


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

## Create in-app default parameters

Default in-app values help ensure that your application code runs as expected in scenarios where the device has not yet retrieved the values from the remote server.

To create default in-app Remote Config parameters, follow the steps:

1. [Firebase Console](https://console.firebase.google.com/project/_/config) and select your project.
2. On the **Remote Config** dashboard, click **Create configuration** to create a parameter.
3. You can add default in-app parameter values through either of the two options below. In both options, add the values to the Remote Config object early in your app's lifecycle, ideally in your bootstrap file (e.g. `app.ts` or `main.ts`)
	1. Download and add the `.xml` file with the parameter values to your app.
		* Add the in-app default parameters in the `.xml` file to the Remote Config object by calling the [setDefaultsFromResource](#setdefaultsfromresource) method.
		```ts
		import { firebase } from '@nativescript/firebase-core';

		firebase()
			.remoteConfig()
			.setDefaultsFromResource("remote_config_defaults")
			.then(() => {
				console.log('Default values set.');
			});
		```
	2. Add the in-app parameter values to the Remote Config object by passing them in an object to the [setDefaults](#setdefaults) method.
		```ts
		import { firebase } from '@nativescript/firebase-core';

		firebase()
			.remoteConfig()
			.setDefaults({
				awesome_new_feature: 'disabled',
			})
			.then(() => {
				console.log('Default values set.');
			});
		```

## Set parameter values in the Remote Config backend

To create new server-side default values that override the in-app values, see [Set parameter values in the Remote Config backend](https://firebase.google.com/docs/remote-config/get-started?platform=android#set-backend-par-values)

## Fetch and activate values

Once you've created your parameters in the Remote Config backend, you can fetch them from the server and activate them in your app. You can first fetch the values from the server and then activate them, or you can combine the two tasks into a single flow with the [fetchAndActivate](#fetchandactivate) method.

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

### Set a minimum fetch interval

Although Remote Config is a data storage, it is not designed for frequent reads. By default, Firebase caches the parameters for 12 hours. By design, this prevents the values from being able to change frequently and potentially causes users confusion.

- To set a different minimum fetch interval, pass it, in seconds, to the [fetch](#fetch) method:

```ts
import { firebase } from '@nativescript/firebase-core';
// Fetch and cache for 5 minutes
await firebase().remoteConfig().fetch(300);
```

- To bypass caching fully, you can pass a value of `0`. 
> **Note** Be warned Firebase may start to reject your requests if values are requested too frequently.

- You can also apply a global cache frequency by setting the `minimumFetchIntervalMillis` property of the `RemoteConfigSettings` object to the number of milliseconds to cache the values for. This can be done in the bootstrap file before the app starts:

```ts
import { firebase } from '@nativescript/firebase-core';
remoteConfig().settings.minimumFetchIntervalMillis = 30000;
```

## Reading parameters values

To read the fetched and activated parameters in your app, you can [Read a single parameter](#read-a-single-parameter) or [Read all parameters at once](#read-all-parameters-at-once).

### Read a single parameter

To read a single parameter value from the activated parameter values, call the [getValue](#getvalue) method on the Remote Config object. The [getValue](#getvalue) method returns a [ConfigValue](#configvalue-object) object, which you can use to get the value as a specific type (e.g. string, number, boolean, etc).

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

### Read all parameters at once

To read all the parameters from the Remote Config object at once, call the [getAll](#getall) method. The [getAll](#getall) method returns an object with the parameter keys as the object keys and the [ConfigValue](#configvalue-object) objects as the object values.

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

### Get the source of a parameter's value

When a value is read, it contains source data about the parameter. If a value is read before it has been fetched & activated then the value will fall back to the default in-app value set. If you need to validate whether the value returned from the module was local or remote, call the [getSource](#getsource) method on the [ConfigValue](#configvalue-object) object:

```ts
import { firebase } from '@nativescript/firebase-core';

const awesomeNewFeature: ConfigValue = firebase().remoteConfig().getValue('awesome_new_feature');

if (awesomeNewFeature.getSource() === 'remote') {
	console.log('Parameter value was from the Firebase servers.');
} else if (awesomeNewFeature.getSource() === 'default') {
	console.log('Parameter value was from a default value.');
} else {
	console.log('Parameter value was from a locally cached value.');
}
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
	fetchTimeMillis: 43200000,
	minimumFetchIntervalMillis: 30000,
};
```
Gets or sets the settings for this RemoteConfig instance.

---
#### activate()

```ts
import { firebase } from '@nativescript/firebase-core';

activated: boolean = await firebase().remoteConfig().activate();
```
Asynchronously activates the most recently fetched configs, so that the fetched key-value pairs take effect. For more information, see [activate()](https://firebase.google.com/docs/reference/android/com/google/firebase/remoteconfig/FirebaseRemoteConfig#activate()) on the Firebase website.

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
Fetches parameter values from the Remote Config backend, adhering to the default or specified minimum fetch interval. For more information, see [fetch()](https://firebase.google.com/docs/reference/android/com/google/firebase/remoteconfig/FirebaseRemoteConfig#fetch(long)) on the Firebase website.

| Parameter | Type | Description |
| --- | --- | --- |
| `expirationDurationSeconds` | `number` | 

---
#### fetchAndActivate()

```ts
import { firebase } from '@nativescript/firebase-core';

activated: boolean = await firebase().remoteConfig().fetchAndActivate();
```
Asynchronously fetches and then activates the fetched configs. For more information, see [fetchAndActivate()](https://firebase.google.com/docs/reference/android/com/google/firebase/remoteconfig/FirebaseRemoteConfig#fetchAndActivate()) on the Firebase website.

---
#### getAll()

```ts
import { firebase } from '@nativescript/firebase-core';

parameters: Record<string, ConfigValue> = firebase().remoteConfig().getAll();
```
Returns an object with all the parameters in the Remote Config.

---
#### getBoolean()

```ts
import { firebase } from '@nativescript/firebase-core';

value: boolean = firebase().remoteConfig().getBoolean(key);
```
Returns the parameter value for the given key as a boolean.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | The key of the parameter to get. |

---
#### getNumber()

```ts
import { firebase } from '@nativescript/firebase-core';

value: number = firebase().remoteConfig().getNumber(key);
```
Returns the parameter value for the given key as a number.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | The key of the parameter to get. |

---
#### getString()

```ts
import { firebase } from '@nativescript/firebase-core';

value: string = firebase().remoteConfig().getString(key);
```
Returns the parameter value for the given key as a string.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | The key of the parameter to get. |

---
#### getValue()

```ts
import { firebase } from '@nativescript/firebase-core';

value: ConfigValue = firebase().remoteConfig().getValue(key);
```
Returns the parameter value for the given key as a [ConfigValue](#configvalue-object).

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | The key of the parameter to get. |

---
#### reset()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().reset();
```
Deletes all activated, fetched and default configurations and resets all Firebase Remote Config settings.

---
#### setDefaults()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().setDefaults(defaults);
```

Sets default configs from a [ConfigDefaults](#configdefaults) object.

| Parameter | Type | Description |
| --- | --- | --- |
| `defaults` | [ConfigDefaults](#configdefaults) | The default configs object to set. |

#### ConfigDefaults
```ts
interface ConfigDefaults {
	[key: string]: number | string | boolean;
}
```

---
#### setDefaultsFromResource()

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().remoteConfig().setDefaultsFromResource(resourceName);
```
Sets default configs using an `XML` resource.

| Parameter | Type | Description |
| --- | --- | --- |
| `resourceName` | `string` | The resource name of the XML resource in the package's res folder. |

---
### ConfigValue object

This object is returned by the [getValue()](#getvalue) method and represents a parameter value for a given key. It provides several methods to get the value as a boolean, number or string.

#### android
```ts
configValue: ConfigValue = firebase().remoteConfig().getValue(key)

configValueAndroid: com.google.firebase.remoteconfig.FirebaseRemoteConfigValue = configValue.android;
```
Returns an instance of ConfigValue for Android.

---
#### ios
```ts
configValue: ConfigValue = firebase().remoteConfig().getValue(key)

configValueIOS: FIRRemoteConfigValue = configValue.ios;
```
Returns an instance of ConfigValue for iOS.

---
#### asBoolean()

```ts
configValue: ConfigValue = firebase().remoteConfig().getValue(key)

value: boolean = configValue.asBoolean();
```
Gets the parameter value as a boolean.

---
#### asNumber()

```ts
configValue: ConfigValue = firebase().remoteConfig().getValue(key)

value: number = configValue.asNumber();
```
Gets the parameter value as a number.

---
#### asString()

```ts
configValue: ConfigValue = firebase().remoteConfig().getValue(key)

value: string = configValue.asString();
```
Gets the parameter value as a string.

---
#### getSource()

```ts
configValue: ConfigValue = firebase().remoteConfig().getValue(key)

source: 'default' | 'static' | 'remote' = configValue.getSource();
```
Gets the source of the parameter value.

---
## License

Apache License Version 2.0
