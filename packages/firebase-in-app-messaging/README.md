# @nativescript/firebase-in-app-messaging

## Contents

- [Intro](#intro)
- [Set up your app for Firebase](#set-up-your-app-for-firebase)
- [Add the Firebase In-App Messaging SDK to your app](#add-the-firebase-in-app-messaging-sdk-to-your-app)
- [Firebase In-App Messaging limitations](#firebase-in-app-messaging-limitations)
- [Create message campaigns](#create-message-campaigns)
- [Control messages display](#control-messages-display)
- [Trigger contextual messages](#trigger-contextual-messages)
- [API](#api)
  - [InAppMessaging class](#inappmessaging-class)
    - [app](#app)
    - [isAutomaticDataCollectionEnabled](#isautomaticdatacollectionenabled)
    - [isMessagesDisplaySuppressed](#ismessagesdisplaysuppressed)
    - [triggerEvent()](#triggerevent)
- [License](#license)
## Intro

This plugin allows you to use the [Firebase In-App Messaging SDK](https://firebase.google.com/docs/in-app-messaging) in your NativeScript app.

[![image](https://img.youtube.com/vi/5MRKpvKV2pg/hqdefault.jpg)](https://www.youtube.com/watch?v=5MRKpvKV2pg)

## Set up your app for Firebase

You need to set up your app for Firebase before you can use the Firebase in-app messaging. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.


## Add the Firebase In-App Messaging SDK to your app

To add the Firebase In-App Messaging SDK to your app follow these steps:

1. Install the `@nativescript/firebase-in-app-messaging` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-in-app-messaging
```
2. Add the SDK by importing the `@nativescript/firebase-in-app-messaging` module in your app's main file (e.g. `app.ts` or `main.ts`).
```ts
import '@nativescript/firebase-in-app-messaging';
```

## Firebase In-App Messaging limitations

According to a github issue https://github.com/firebase/firebase-ios-sdk/issues/4768, Firebase In-App Messaging allows only 1 campaign per day on app foreground or app launch. This limit is to prevent you from accidentally overwhelming your users with non-contextually appropriate messages. However, if you use contextual triggers (for example Analytics events or programmatically triggered in-app-messaging campaigns), there is no daily rate limit.

## Create message campaigns

To create a message campaign, go to the `In-App Messaging` page in the [Firebase Console](https://console.firebase.google.com/u/0/project/_/inappmessaging) and follow the instructions there. You can create campaigns and customize elements such as Image, Banner, Modal & Cards to appear on predefined events (e.g. purchase).

Any published campaigns from the Firebase Console are automatically handled and displayed on your user's device.

## Control messages display

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

## Trigger contextual messages

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
| Parameter | Type | Description |
| --- | --- | --- |
| `eventId` | `string` | The name of the event to trigger. 

For the description of this method, see [triggerEvent](https://firebase.google.com/docs/reference/android/com/google/firebase/inappmessaging/FirebaseInAppMessaging#triggerEvent(java.lang.String)) on the Firebase documentation.

---


## License

Apache License Version 2.0
