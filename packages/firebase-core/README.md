# @nativescript/firebase-core

A plugin to initialize [FirebaseApp](https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp) in your app.

Use this plugin with any of:

- [@nativescript/firebase-admob](../firebase-admob/)
- [@nativescript/firebase-analytics](../firebase-admob/)
- [@nativescript/firebase-app-check](../firebase-app-check/)
- [@nativescript/firebase-app-check-debug](../firebase-app-check-debug/)
- [@nativescript/firebase-auth](../firebase-auth/)
- [@nativescript/firebase-crashlytics](../firebase-analytics/)
- [@nativescript/firebase-database](../firebase-database/)
- [@nativescript/firebase-dynamic-links](../firebase-dynamic-links/)
- [@nativescript/firebase-firestore](../firebase-firestore/)
- [@nativescript/firebase-functions](../firebase-functions/)
- [@nativescript/firebase-in-app-messaging](../firebase-in-app-messaging/)
- [@nativescript/firebase-installations](../firebase-installations/)
- [@nativescript/firebase-messaging](../firebase-messaging/)
- [@nativescript/firebase-messaging-core](../firebase-messaging-core/)
- [@nativescript/firebase-performance](../firebase-performance/)
- [@nativescript/firebase-remote-config](../firebase-remote-config/)
- [@nativescript/firebase-storage](../firebase-storage/)

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
