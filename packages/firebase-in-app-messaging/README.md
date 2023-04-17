# @nativescript/firebase-in-app-messaging

## Intro

This plugin allows you to use the [Firebase In-App Messaging SDK](https://firebase.google.com/docs/in-app-messaging) in your NativeScript app.

[![image](https://img.youtube.com/vi/5MRKpvKV2pg/hqdefault.jpg)](https://www.youtube.com/watch?v=5MRKpvKV2pg)

## Set up your app for Firebase

You need to set up your app for Firebase before you can use the Firebase in-app messaging. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.


## Add the Firebase In-App Messaging SDK to your app

To add the Firebase In-App Messaging SDK to your app, install the `@nativescript/firebase-in-app-messaging` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-in-app-messaging
```
## Firebase In-App Messaging limitations


According to github issue https://github.com/firebase/firebase-ios-sdk/issues/4768, Firebase In-App Messaging allows only 1 campaign per day on app foreground or app launch. This limit is to prevent you from accidentally overwhelming your users with non-contextually appropriate messages. However, if you use contextual triggers (for example Analytics events or programmatically triggered in-app-messaging campaigns), there is no daily rate limit.

## Usage

Most of the set up occurs on [Firebase Console](https://console.firebase.google.com/u/0/project/_/inappmessaging) in the In-App Messaging tab. You can create campaigns and customize elements such as Image, Banner, Modal & Cards to appear on predefined events (e.g. purchase). This involves no code for the developer to implement. Any published campaigns from the Firebase Console are automatically handled and displayed on your user's device.

### Control messages display

To control whether to display messages or not, set the `isMessagesDisplaySuppressed` property of the `InAppMessaging` instance to `true` or `false`. The `InAppMessaging` instance is returneb calling the `inAppMessaging()` on the FirebaseApp instance. By default, `isMessagesDisplaySuppressed` is set to `false` which means messages will be displayed.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-in-app-messaging';

async function bootstrap() {
  firebase().inAppMessaging().isMessagesDisplaySuppressed = true;
}

async function onSetup(user) {
  await setupUser(user);
  // Allow user to receive messages now setup is complete
  firebase().inAppMessaging().isMessagesDisplaySuppressed = false;
}
```
> **Note:** The suppressed state is not persisted between restarts, so ensure it is called as early as possible ideally in the app bootstrapping file(`app.ts` or `main.ts`).

### Trigger contextual messages

To trigger contextual messages, call the `triggerEvent()` method of the `InAppMessaging` instance with the event name as a parameter. This triggers the display of any messages that are configured on the Firebase Console.
```ts
import { firebase } from '@nativescript/firebase-core';

firebase().inAppMessaging().triggerEvent('purchase');
```

## API

### InAppMessaging class

#### app
```ts
inAppMessagingApp = firebase().inAppMessaging().app;
```

The `app` property returns the `FirebaseApp` instance that the current `InAppMessaging` instance is associated with.


---
#### isAutomaticDataCollectionEnabled
```ts
firebase().inAppMessaging().isAutomaticDataCollectionEnabled = true;
```

For the description of this property, see [isAutomaticDataCollectionEnabled](https://firebase.google.com/docs/reference/android/com/google/firebase/inappmessaging/FirebaseInAppMessaging#isAutomaticDataCollectionEnabled()) on the Firebase documentation.

---
#### isMessagesDisplaySuppressed
```ts
firebase().inAppMessaging().isMessagesDisplaySuppressed = true;
// or
firebase().inAppMessaging().isMessagesDisplaySuppressed = false;
```

For the description of this property, see [areMessagesSuppressed](https://firebase.google.com/docs/reference/android/com/google/firebase/inappmessaging/FirebaseInAppMessaging#areMessagesSuppressed()) on the Firebase documentation.

---
#### triggerEvent()
```ts
firebase().inAppMessaging().triggerEvent(eventId);
```
For the description of this method, see [triggerEvent](https://firebase.google.com/docs/reference/android/com/google/firebase/inappmessaging/FirebaseInAppMessaging#triggerEvent(java.lang.String)) on the Firebase documentation.

---


## License

Apache License Version 2.0
