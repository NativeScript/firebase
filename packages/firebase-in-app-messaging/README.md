# @nativescript/firebase-in-app-messaging

```javascript
ns plugin add @nativescript/firebase-in-app-messaging
```

## What does it do

Firebase In-App Messaging helps you to engage your apps active users by sending them targeted, contextual messages that encourage them to use key app features. For example, you could send an in-app message to get users to subscribe, watch a video, complete a level, or buy an item. You can customize messages as cards, banners, modals, or images, and set up triggers so that they appear exactly when they'd benefit your users most.


[![image](https://img.youtube.com/vi/5MRKpvKV2pg/hqdefault.jpg)](https://www.youtube.com/watch?v=5MRKpvKV2pg)


## Usage

Most of the set up occurs on [Firebase Console](https://console.firebase.google.com/u/0/project/_/inappmessaging) in the In-App Messaging tab. You can create campaigns and customize elements such as Image, Banner, Modal & Cards to appear on predefined events (e.g. purchase). This involves no code for the developer to implement. Any published campaigns from the Firebase Console are automatically handled and displayed on your user's device.

This module provides a JavaScript API to allow greater control of the displaying of these messages.


## Limitations


According to github issue https://github.com/firebase/firebase-ios-sdk/issues/4768 Firebase In-App Messaging allows only 1 campaign per day on app foreground or app launch. This limit is to prevent you from accidentally overwhelming your users with non-contextually appropriate messages. However, if you use the contextual triggers (for example: Analytics event or programmatically triggered in-app-messaging campaigns), there is no daily rate limit.


## Displaying Messages

The isMessagesDisplaySuppressed property allows you to control when messages can/cannot be displayed. Below illustrates a use case for controlling the flow of messages:


> **The suppressed state is not persisted between restarts, so ensure it is called as early as possible.**



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

## License

Apache License Version 2.0
