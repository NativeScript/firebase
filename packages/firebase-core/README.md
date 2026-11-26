# @nativescript/firebase-core

A plugin to initialize [FirebaseApp](https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp) in your app.

Use this plugin with any of the following plugins:

- [@nativescript/firebase-ai](https://github.com/NativeScript/firebase/tree/main/packages/firebase-ai)
- [@nativescript/firebase-analytics](https://docs.nativescript.org/plugins/firebase-analytics)
- [@nativescript/firebase-app-check](https://docs.nativescript.org/plugins/firebase-app-check)
- [@nativescript/firebase-app-check-debug](https://docs.nativescript.org/plugins/firebase-app-check-debug)
- [@nativescript/firebase-auth](https://docs.nativescript.org/plugins/firebase-auth)
- [@nativescript/firebase-crashlytics](https://docs.nativescript.org/plugins/firebase-crashlytics)
- [@nativescript/firebase-database](https://docs.nativescript.org/plugins/firebase-database)
- [@nativescript/firebase-firestore](https://docs.nativescript.org/plugins/firebase-firestore)
- [@nativescript/firebase-functions](https://docs.nativescript.org/plugins/firebase-functions)
- [@nativescript/firebase-in-app-messaging](https://docs.nativescript.org/plugins/firebase-in-app-messaging)
- [@nativescript/firebase-installations](https://docs.nativescript.org/plugins/firebase-installations)
- [@nativescript/firebase-messaging](https://docs.nativescript.org/plugins/firebase-messaging)
- [@nativescript/firebase-messaging-core](https://docs.nativescript.org/plugins/firebase-messaging-core)
- [@nativescript/firebase-performance](https://docs.nativescript.org/plugins/firebase-performance)
- [@nativescript/firebase-remote-config](https://docs.nativescript.org/plugins/firebase-remote-config)
- [@nativescript/firebase-storage](https://docs.nativescript.org/plugins/firebase-storage)

## Requirements

| | Minimum |
| --- | --- |
| NativeScript CLI | **8.9.0** (9.0.3 to override a plugin's package) |
| iOS deployment target | 15.0 |
| Android `minSdkVersion` | 23 |
| Android `compileSdkVersion` | 35 |

The 6.x suite pulls its iOS dependencies with **Swift Package Manager** instead of CocoaPods.
Each plugin declares what it needs in its own `nativescript.config.ts`, and the CLI merges those
into your project — nothing to install by hand, but it does require CLI **8.9.0** or newer, which
is where plugin-declared Swift packages landed. On an older CLI the declarations are ignored and the
iOS build will fail to find the Firebase symbols. Overriding a plugin's package from your own
`nativescript.config.ts` (see the Analytics and UI plugins) additionally needs **9.0.3**.

Firebase is moving the same way: CocoaPods support for the Firebase Apple SDK is deprecated and
stops receiving new versions after October 2026.

These come from the native SDKs the 6.x suite wraps — Firebase iOS `12.19.x` and the Firebase
Android BOM `34.19.0`. Set the iOS target in `App_Resources/iOS/build.xcconfig`:

```
IPHONEOS_DEPLOYMENT_TARGET = 15.0;
```

and the Android levels in `App_Resources/Android/app.gradle`:

```groovy
android {
	compileSdkVersion 35
	defaultConfig {
		minSdkVersion 23
	}
}
```

To pin a different Firebase Android BOM, set `firebaseBomVersion` in `App_Resources/Android/before-plugins.gradle`:

```groovy
project.ext.firebaseBomVersion = "34.19.0"
```

## Installation

Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-core
```
## Configure Firebase for Android

To configure Firebase for Android, see [Add Firebase to your Android project](https://firebase.google.com/docs/android/setup) and follow the steps below. 

- [Create a Firebase project](https://firebase.google.com/docs/android/setup#create-firebase-project)

- [Register your app with Firebase](https://firebase.google.com/docs/android/setup#register-app)

- [Add a Firebase configuration file](https://firebase.google.com/docs/android/setup#add-config-file) : Download the `google-services.json` file and add it to `App_Resources/Android/src`.

## Configure Firebase for iOS

To set up Firebase for iOS, see [Add Firebase to your Apple project](https://firebase.google.com/docs/ios/setup) and follow the steps below:
- [Create a Firebase project](https://firebase.google.com/docs/ios/setup#create-firebase-project)
- [Register your app with Firebase](https://firebase.google.com/docs/ios/setup#register-app)
-  [Add a Firebase configuration file](https://firebase.google.com/docs/ios/setup#add-config-file): Download the `GoogleService-Info.plist` file and add it to `App_Resources/iOS/`.

## Use @nativescript/firebase-core

 🚨 Plugin requires both `@nativescript/firebase-core` and any other `@nativescript/firebase-*` plugin to successfully initialize.

### Instantiate Firebase and initialize a default app

Import the `firebase` function and call it to create a NativeScript Firebase instance. Next, call the `initializeApp` method on the Firebase instance to instantiate the native [FirebaseApp](https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp).
 
```ts
import { firebase } from '@nativescript/firebase-core'
const defaultApp = await firebase().initializeApp();
```

#### Initialize Secondary App

```ts
import { firebase, FirebaseOptions } from '@nativescript/firebase-core'
const config = new FirebaseOptions()
const secondaryApp = await firebase().initializeApp(config, 'SECONDARY_APP');
```


## License

Apache License Version 2.0
