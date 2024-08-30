# @nativescript/firebase-core

A plugin to initialize [FirebaseApp](https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp) in your app.

Use this plugin with any of the following plugins:

- [@nativescript/firebase-admob](https://docs.nativescript.org/plugins/firebase-admob)
- [@nativescript/firebase-analytics](https://docs.nativescript.org/plugins/firebase-analytics)
- [@nativescript/firebase-app-check](https://docs.nativescript.org/plugins/firebase-app-check)
- [@nativescript/firebase-app-check-debug](https://docs.nativescript.org/plugins/firebase-app-check-debug)
- [@nativescript/firebase-auth](https://docs.nativescript.org/plugins/firebase-auth)
- [@nativescript/firebase-crashlytics](https://docs.nativescript.org/plugins/firebase-crashlytics)
- [@nativescript/firebase-database](https://docs.nativescript.org/plugins/firebase-database)
- [@nativescript/firebase-dynamic-links](https://docs.nativescript.org/plugins/firebase-dynamic-links)
- [@nativescript/firebase-firestore](https://docs.nativescript.org/plugins/firebase-firestore)
- [@nativescript/firebase-functions](https://docs.nativescript.org/plugins/firebase-functions)
- [@nativescript/firebase-in-app-messaging](https://docs.nativescript.org/plugins/firebase-in-app-messaging)
- [@nativescript/firebase-installations](https://docs.nativescript.org/plugins/firebase-installations)
- [@nativescript/firebase-messaging](https://docs.nativescript.org/plugins/firebase-messaging)
- [@nativescript/firebase-messaging-core](https://docs.nativescript.org/plugins/firebase-messaging-core)
- [@nativescript/firebase-performance](https://docs.nativescript.org/plugins/firebase-performance)
- [@nativescript/firebase-remote-config](https://docs.nativescript.org/plugins/firebase-remote-config)
- [@nativescript/firebase-storage](https://docs.nativescript.org/plugins/firebase-storage)

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
