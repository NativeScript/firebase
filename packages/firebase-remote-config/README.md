# @nativescript/firebase-remote-config

```cli
ns plugin add @nativescript/firebase-remote-config
```

### What does it do

Remote Config allows you to change the appearance and/or functionality of your app without requiring an app update. Remote Config values are input into the Firebase console and accessible via a JavaScript API. This gives you full control over when and how these Remote Config values are applied and affect your application.

[![image](https://img.youtube.com/vi/_CXXVFPO6f0/hqdefault.jpg)](https://www.youtube.com/watch?v=_CXXVFPO6f0)

## Usage

To get started, you need to define some parameters over on the [Firebase Console](https://console.firebase.google.com/project/_/config).

## Default values

Before fetching the parameters from Firebase, it is first important to set some default values. Default values help ensure that your application code runs as expected in scenarios where the device has not yet retrieved the values.

An example of this is having no network or you have not yet fetched them within your own code.

Setting default values helps to ensure that both the local device & Firebase servers are both in sync. Call the setDefaults method early on in your application:

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

## License

Apache License Version 2.0
