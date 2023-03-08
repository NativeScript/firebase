# @nativescript/firebase-core

A plugin to initialize [Firebase](https://firebase.google.com/docs/android/setup) in your app.

## Installation

```cli
npm install @nativescript/firebase-core
```
## Configure Firebase for Android
To configure Firebase for Android, visit [Add Firebase to your Android project](https://firebase.google.com/docs/android/setup) and follow the steps below. 

- [Create a Firebase project](https://firebase.google.com/docs/android/setup#create-firebase-project)

- [Register your app with Firebase](https://firebase.google.com/docs/android/setup#register-app)

- [Add a Firebase configuration file](https://firebase.google.com/docs/android/setup#add-config-file) : Download the `google-services.json` file and add it to `App_Resources/Android/src`.

## Configure Firebase for iOS

To set up Firebase for iOS, visit [Add Firebase to your Apple project](https://firebase.google.com/docs/ios/setup) and follow the steps below:
- [Create a Firebase project](https://firebase.google.com/docs/ios/setup#create-firebase-project)
- [Register your app with Firebase](https://firebase.google.com/docs/ios/setup#register-app)
-  [Add a Firebase configuration file](https://firebase.google.com/docs/ios/setup#add-config-file), `GoogleService-Info.plist.` to `App_Resources/iOS/`.

## Use @nativescript/firebase-core

### Instantiate Firebase and initialize a default app

Import the `firebase` function and call it to create a Firebase instance. Next, call the `initializeApp` method on the Firebase instance to instantiate an app.
 
```ts
import { firebase } from '@nativescript/firebase-core'
const defaultApp = await firebase().initializeApp();
```

### Initialize Secondary App

```ts
import { firebase, FirebaseOptions } from '@nativescript/firebase-core'
const config = new FirebaseOptions()
const secondaryApp = await firebase().initializeApp(config, 'SECONDARY_APP');
```


## License

Apache License Version 2.0
