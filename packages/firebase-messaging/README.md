# @nativescript/firebase-messaging

## Contents
* [Intro](#intro)
* [Set up your app for Firebase](#set-up-your-app-for-firebase)
* [Add the Firebase Cloud Messaging SDK to your app](#add-the-firebase-cloud-messaging-sdk-to-your-app)
* [iOS: Requesting permissions](#ios-requesting-permissions)
* [Android: Requesting permissions](#android-requesting-permissions)
* [How the app state affects messages delivery](#how-the-app-state-affects-messages-delivery)
  * [Notifications messages delivery and app state](#notifications-messages-delivery-and-app-state)
	* [Always show notifications in the foreground](#always-show-notifications-in-the-foreground)
	* [Listen to notification messages in the foreground](#listen-to-notification-messages-in-the-foreground)
  * [Data-only messages delivery and app state](#data-only-messages-delivery-and-app-state)
* [Send messages from your servers](#send-messages-from-your-servers)
	* [Send messages using user device tokens](#send-messages-using-user-device-tokens)
	* [Saving tokens](#saving-tokens)
	* [Using the stored tokens](#using-the-stored-tokens)
	* [Handle tokens when authenticating users](#handle-tokens-when-authenticating-users)
* [Send messages via topics](#send-messages-via-topics)
	* [Subscribing to topics](#subscribing-to-topics)
	* [Unsubscribing from topics](#unsubscribing-from-topics)
    * [Send messages to a user device via topics](#send-messages-to-a-user-device-via-topics)
	* [Send messages to conditional topics](#send-messages-to-conditional-topics)
* [Send an image in the notification payload](#send-an-image-in-the-notification-payload)
	* [iOS-specific options](#ios-specific-options)
	* [Android-specific options](#android-specific-options)
	* [send one image notification for both iOS and Android](#send-one-image-notification-for-both-ios-and-android)
* [Android: Configure Push notification icon and color](#android-configure-push-notification-icon-and-color)
* [iOS: Enable the support for the delivery of push notification in the background in Xcode](#ios-enable-the-support-for-the-delivery-of-push-notification-in-the-background-in-xcode)
	* [Copy the entitlements file](#copy-the-entitlements-file)
	* [Allow processing when a background push notification is received](#allow-processing-when-a-background-push-notification-is-received)
* [API](#api)
	* [Messaging class](#messaging-class)
		* [android](#android)
		* [ios](#ios)
		* [app](#app)
		* [isAutoInitEnabled](#isautoinitenabled)
		* [showNotificationsWhenInForeground](#shownotificationswheninforeground)
		* [isDeviceRegisteredForRemoteMessages](#isdeviceregisteredforremotemessages)
		* [deleteToken()](#deletetoken)
		* [getToken()](#gettoken)
		* [getAPNSToken()](#getapnstoken)
		* [deleteToken()](#deletetoken)
		* [hasPermission()](#haspermission)
		* [onMessage()](#onmessage)
		* [onNotificationTap()](#onnotificationtap)
		* [onToken()](#ontoken)
		* [registerDeviceForRemoteMessages()](#registerdeviceforremotemessages)
		* [requestPermission()](#requestpermission)
		* [subscribeToTopic()](#subscribetotopic)
		* [unregisterDeviceForRemoteMessages()](#unregisterdeviceforremotemessages)
		* [unsubscribeFromTopic()](#unsubscribefromtopic)

* [License](#license)

## Intro

This plugin allows you to use [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) in your NativeScript app. 

[![image](https://img.youtube.com/vi/sioEY4tWmLI/hqdefault.jpg)](https://www.youtube.com/watch?v=sioEY4tWmLI)

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to `4 KB` to a client app.

FCM messages can be sent to real Android/iOS devices and Android emulators.  iOS simulators however do not handle cloud messages.

Common use cases for handling messages could be:

- Displaying a notification (see [Listen to notification messages in the foreground](#listen-to-notification-messages-in-the-foreground)).
- Syncing message data silently on the device (e.g. via the ApplicationSettings class).
- Updating the application's UI.


## Set up your app for Firebase

You need to set up your app for Firebase before you can enable Firebase Messaging. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

## Add the Firebase Cloud Messaging SDK to your app

To add the Firebase Cloud Messaging SDK to your app follow these steps:

1. Install the `@nativescript/firebase-messaging` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-messaging
```

2. Add the SDK by importing the `@nativescript/firebase-messaging` module. You should import this module once in your app, ideally in the main file (e.g. `app.ts` or `main.ts`).

```ts
import '@nativescript/firebase-messaging';
```

## iOS: Requesting permissions

iOS prevents messages containing notification (or 'alert') payloads from being displayed unless you have received explicit permission from the user.

To request permission, call the [requestPermission](#requestpermission) method on the [Messaging class](#messaging-class) instance returned by `firebase().messaging()`. This method triggers a native permission dialog requesting the user's permission. The user can choose to allow or deny the request.

```ts
import { firebase } from '@nativescript/firebase-core';
import { AuthorizationStatus } from '@nativescript/firebase-messaging-core';

async function requestUserPermission() {
	const authStatus = await firebase()
		.messaging()
		.requestPermission({
			ios: {
				alert: true,
			},
		});
	const enabled = authStatus === AuthorizationStatus.AUTHORIZED || authStatus === AuthorizationStatus.PROVISIONAL;

	if (enabled) {
		console.log('Authorization status:', authStatus);

		const didRegister = await firebase().messaging()
                .registerDeviceForRemoteMessages();
	}
}
```

## Android: Requesting permissions

On Android, you do not need to request user permission. This method can still be called on Android devices; however, and will always resolve successfully.

## Firebase Cloud Messages types and how the user app affects delivery

FCM allows you to send the following two types of messages:

- [Notifications messages](#notifications-messages-delivery-and-app-state)
- [Data-only messages](#data-only-messages-delivery-and-app-state)

How these messages are delivered depends on whether the app is in the foreground or background.

### Notifications messages delivery and app state

The following table shows how the notification messages are delivered to the user app depending on the app state.

<table>
<thead>
<tr>
<th>Notification messages types</th>
<th colspan="2">App state</th>
</tr>
</thead>

<tbody>
<tr>
<td></td>
<td>Foreground</td>
<td>Background</td>
</tr>

<tr>
<td>Notification only</td>
<td>Displayed to the user by the FCM SDK</td>
<td>Passed to the onMessage handler for the app code to handle</td>
</tr>

<tr>
<td>Notification + optional data</td>
<td>App receives a message object with both payloads available.</td>
<td>App receives the notification payload in the notification tray, and when the user taps on the notification, the data payload is passed to the <a href="#onmessage">onMessage handler</a></td>
</tr>
</tbody>
</table>

#### Always show notifications in the foreground

If you want to always display notifications while the application is in the foreground without sending additional parameters/data when sending the push notification, set the [showNotificationsWhenInForeground](#shownotificationswheninforeground) property of the `Messaging` instance to `true`:

```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().showNotificationsWhenInForeground = true;
```
#### Listen to notification messages in the foreground

Since notification messages are displayed automatically(see [Notifications messages delivery and app state](#notifications-messages-delivery-and-app-state)) when the app is in the foreground, sometimes you may want to handle the display of the message manually. To listen to a message in the foreground and handle their display manually, call the [onMessage](#onmessage) method on the instance of [Messaging class](#messaging-class). Code executed via this handler can interact with your application (e.g. updating the state or UI).

For example, you could display a new Alert each time a message is delivered:

```ts
import { alert } from '@nativescript/core';
import { firebase } from '@nativescript/firebase-core';

firebase()
	.messaging()
	.onMessage(async (remoteMessage) => {
		alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
	});
```

### Data-only messages delivery and app state

The following table shows how the data messages are delivered to the user app depending on the app state.

| Foreground | Background
| :--------: | :--------: |
| App receives the data payload in a callback function passed to the onMessage method. | App receives the data payload in a callback function passed to the onMessage method. |

- When the client app is not in the foreground, both Android & iOS treat the message as low priority and will ignore it (i.e. no event will be sent). To allow data-only messages to trigger, set the payload `priority` property to `high` for Android and the `contentAvailable` property to `true` for iOS.

For example, if using the Node.js [firebase-admin](https://www.npmjs.com/package/firebase-admin) package to send a message, you would set the payload as follows:

```ts
admin.messaging().sendToDevice(
	[], // device fcm tokens...
	{
		data: {
			owner: JSON.stringify(owner),
			user: JSON.stringify(user),
			picture: JSON.stringify(picture),
		},
	},
	{
		// Required for background/quit data-only messages on iOS
		contentAvailable: true,
		// Required for background/quit data-only messages on Android
		priority: 'high',
	}
);
```
- For iOS, in addition to setting the `contentAvailable` property to `true`, the payload must contain appropriate APNs headers. For more information about the APN headers, see [Sending Notification Requests to APNs](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns/). For example, if using the Node.js [firebase-admin](https://www.npmjs.com/package/firebase-admin) package to send a message, the payload would look like this:

```ts
admin.messaging().send({
	data: {
		//some data
	},
	apns: {
		payload: {
			aps: {
				contentAvailable: true,
			},
		},
		headers: {
			'apns-push-type': 'background',
			'apns-priority': '5',
			'apns-topic': '', // your app bundle identifier
		},
	},
	//must include token, topic, or condition
	//token: //device token
	//topic: //notification topic
	//condition: //notification condition
});
```

## Send messages from your servers

The Cloud Messaging module provides the tools required to enable you to send custom messages directly from your servers. For example, you could send an FCM message to a specific device when a new chat message is saved to your database and display a notification, or update local device storage, so the message is instantly available.

Firebase provides several SDKs for that purpose in different languages such as [Node.JS](https://www.npmjs.com/package/firebase-admin), [Java](https://firebase.google.com/docs/reference/admin/java/reference/com/google/firebase/messaging/package-summary), [Python](https://firebase.google.com/docs/reference/admin/python/firebase_admin.messaging), [C#](https://firebase.google.com/docs/reference/admin/dotnet/namespace/firebase-admin/messaging) and [Go](https://godoc.org/firebase.google.com/go/messaging). It also supports sending messages over [HTTP](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages). These methods allow you to send messages directly to your user's devices via the FCM servers.

### Send messages using user device tokens

To send a message to a device, you must access its unique token. A token is automatically generated by the device and can be accessed using the Cloud Messaging module. The token should be saved on your servers and should be easily accessible when required.

The examples below use a Cloud Firestore database to store and manage the tokens, and Firebase Authentication to manage the user's identity. You can however use any data store or authentication method of your choice.

#### Saving tokens

Once your application has started, you can call the [getToken](#gettoken) method on the [Messaging](#messaging-class) instance to get the unique device token. If you are using a different push notification provider, such as Amazon SNS, you will need to call [getAPNSToken](#getapnstoken) on iOS:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';
import { FieldValue } from '@nativescript/firebase-auth';
import '@nativescript/firebase-firestore';

async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = firebase().auth().currentUser.uid;

  // Add the token to the users datastore
  await firebase().firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: FieldValue.arrayUnion(token),
    });
}

// Get the device token
    firebase().messaging()
      .getToken()
      .then(token => {
        return saveTokenToDatabase(token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    //  if (global.isIOS) {
    //      saveTokenToDatabase(firebase().messaging().getAPNSToken());
    // }


    // Listen to whether the token changes
    firebase().messaging().onToken(token => {
      saveTokenToDatabase(token);

}
```

The above code snippet stores the device FCM token on a remote database.

Inside the `saveTokenToDatabase` method, we store the token in the current user's document. Notice that the token is being added via the [FieldValue.arrayUnion](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L426) method. A user can have more than one token (for example using 2 devices) so it's important to ensure that we store all tokens in the database and the `FieldValue.arrayUnion` allows us to do that.

#### Using the stored tokens

With the tokens stored in a secure data store, we can now send messages via FCM to those devices.

> **Note:** The following example uses the Node.JS firebase-admin package to send messages to our devices. However, you can use any of the SDKs listed above can be used.

Go ahead and set up the `firebase-tools` library on your server environment. Once setup, our script needs to perform two actions:

1. Fetch the tokens required to send the message.
2. Send a data payload to the devices that the tokens are registered for.
Imagine our application being similar to Instagram. Users can upload pictures, and other users can "like" those pictures. Each time a post is liked, we want to send a message to the user that uploaded the picture. The code below simulates a function that is called with all of the information required when a picture is liked:

```ts
// Node.js
var admin = require('firebase-admin');

// ownerId - who owns the picture someone liked
// userId - id of the user who liked the picture
// picture - metadata about the picture

async function onUserPictureLiked(ownerId, userId, picture) {
	// Get the owners details
	const owner = admin.firestore().collection('users').doc(ownerId).get();

	// Get the users details
	const user = admin.firestore().collection('users').doc(userId).get();

	await admin.messaging().sendToDevice(
		owner.tokens, // ['token_1', 'token_2', ...]
		{
			data: {
				owner: JSON.stringify(owner),
				user: JSON.stringify(user),
				picture: JSON.stringify(picture),
			},
		},
		{
			// Required for background/quit data-only messages on iOS
			contentAvailable: true,
			// Required for background/quit data-only messages on Android
			priority: 'high',
		}
	);
}
```

### Handle tokens when authenticating users

Firebase Cloud Messaging tokens are associated with the instance of the installed app. By default, only token expiration or uninstalling/reinstalling the app will generate a fresh token.

This means that by default, if two users login into your app from the same device, the same FCM token will be used for both users. Usually, this is not what you want, so you must take care to cycle the FCM token at the same time you handle user logout/login.

How and when you invalidate a token and generate a new one will be specific to your project, but a common pattern is to delete the FCM token during logout and update your back end to remove it. Then, you fetch the FCM token during login and update your backend systems to associate the new token with the logged-in user.

Note that when a token is deleted by calling the [deleteToken](#deletetoken) method, it is immediately and permanently invalid.

## Send messages via topics

Topics are mechanisms that allow a device to subscribe and unsubscribe from named [PubSub channels](https://redis.io/commands/pubsub-channels/), all managed via FCM. Rather than sending a message to a specific device by FCM token, you can instead send a message to a topic and any devices subscribed to that topic will receive the message.

Topics allow you to simplify FCM server integration as you do not need to keep a store of device tokens. There are, however, some things to keep in mind about topics:

- Messages sent to topics should not contain sensitive or private information. 
- Do not create a topic for a specific user to subscribe to.
- Topic messaging supports unlimited subscriptions for each topic.
- One app instance can be subscribed to no more than 2000 topics.
- The frequency of new subscriptions is rate-limited per project. If you send too many subscription requests in a short period, FCM servers will respond with a `429 RESOURCE_EXHAUSTED` ("quota exceeded") response. Retry with exponential backoff.
- A server integration can send a single message to multiple topics at once. However, this is limited to `5` topics.

To learn more about how to send messages to devices subscribed to topics, see [Topic messaging on Android](https://firebase.google.com/docs/cloud-messaging/android/topic-messaging) or [Send messages to topics on Apple platforms](https://firebase.google.com/docs/cloud-messaging/ios/topic-messaging).

### Subscribing to topics

To subscribe a device to a topic, call the [subscribeToTopic](#subscribetotopic) method on the [Messsaging](#messaging-class) instance with the topic name (must not include ´/´):

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.messaging()
	.subscribeToTopic('weather')
	.then(() => console.log('Subscribed to topic!'));
```

### Unsubscribing to topics

To unsubscribe from a topic, call the [unsubscribeFromTopic](#unsubscribefromtopic) method with the topic name:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.messaging()
	.unsubscribeFromTopic('weather')
	.then(() => console.log('Unsubscribed fom the topic!'));
```

### Send messages to a user device via topics

Topics are mechanisms that allow a device to subscribe and unsubscribe from named [PubSub channels](https://redis.io/commands/pubsub-channels/), all managed via FCM. Rather than sending a message to a specific device by FCM token, you can instead send a message to a topic and any devices subscribed to that topic will receive the message.

Topics allow you to simplify FCM server integration as you do not need to keep a store of device tokens. There are, however, some things to keep in mind about topics:

- Messages sent to topics should not contain sensitive or private information. 
- Do not create a topic for a specific user to subscribe to.
- Topic messaging supports unlimited subscriptions for each topic.
- One app instance can be subscribed to no more than 2000 topics.
- The frequency of new subscriptions is rate-limited per project. If you send too many subscription requests in a short period, FCM servers will respond with a `429 RESOURCE_EXHAUSTED` ("quota exceeded") response. 
- A server integration can send a single message to multiple topics at once. However, this is limited to `5` topics.

To learn more about how to send messages to devices subscribed to topics, see [Topic messaging on Android](https://firebase.google.com/docs/cloud-messaging/android/topic-messaging) or [Send messages to topics on Apple platforms](https://firebase.google.com/docs/cloud-messaging/ios/topic-messaging).

### Subscribing to topics

To subscribe a device to a topic, call the [subscribeToTopic](#subscribetotopic) method on the [Messaging](#messaging-class) instance with the topic name (must not include `/`):

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.messaging()
	.subscribeToTopic('weather')
	.then(() => console.log('Subscribed to topic!'));
```

### Unsubscribing from topics

To unsubscribe from a topic, call the [unsubscribeFromTopic](#unsubscribefromtopic) method with the topic name:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.messaging()
	.unsubscribeFromTopic('weather')
	.then(() => console.log('Unsubscribed fom the topic!'));
```

### Send messages to a user device via topics

Using the firebase-admin Admin SDK as an example, we can send a message to devices subscribed to a topic(`weather`):

```ts
const admin = require('firebase-admin');

const message = {
	data: {
		type: 'warning',
		content: 'A new weather warning has been created!',
	},
	topic: 'weather',// topic name
};

admin
	.messaging()
	.send(message)
	.then((response) => {
		console.log('Successfully sent message:', response);
	})
	.catch((error) => {
		console.log('Error sending message:', error);
	});
```

### Use conditions to send a messages to more than one topic at once

To send a message to a combination of topics, specify a condition, which is a boolean expression that specifies the target topics. For example, the following condition will send messages to devices that are subscribed to `weather` and either `news` or `traffic` tpoics:

```ts
condition: "'weather' in topics && ('news' in topics || 'traffic' in topics)";
```

To send a message to this condition, replace the topic key with the condition:

```ts
const admin = require('firebase-admin');

const message = {
	data: {
		content: 'New updates are available!',
	},
	condition: "'weather' in topics && ('news' in topics || 'traffic' in topics)",
};

admin
	.messaging()
	.send(message)
	.then((response) => {
		console.log('Successfully sent message:', response);
	})
	.catch((error) => {
		console.log('Error sending message:', error);
	});
```

## Send an image in the notification payload

Both the Notifications composer and the FCM API support image links in the message payload.

### iOS-specific options

To successfully send an image using the Admin SDK, set the `ApnsConfig` options with the `apns` property for iOS:

```ts
const payload = {
	notification: {
		body: 'This is an FCM notification that displays an image!',
		title: 'FCM Notification',
	},
	apns: {
		payload: {
			aps: {
				'mutable-content': 1, // 1 or true
			},
		},
		fcm_options: {
			image: 'image-url',
		},
	},
};
```

> **Note:** To see the list of available configuration for iOS, check out the [official Firebase documentation](https://firebase.google.com/docs/cloud-messaging/ios/send-image).

### Android-specific options

Similarly to iOS, some configurations specific to Android are needed:

```ts
const payload = {
	notification: {
		body: 'This is an FCM notification that displays an image!',
		title: 'FCM Notification',
	},
	android: {
		notification: {
			image: 'image-url',
		},
	},
};
```

> **Note:** For more information about sending an image on Android, see [Send an image in the notification payload](https://firebase.google.com/docs/cloud-messaging/android/send-image).

### Send one image notification for both iOS and Android

It's possible to send one notification that will be delivered to both platforms using the Admin SDK:

```ts
const admin = require('firebase-admin');

// Create a list containing up to 500 registration tokens.
// These registration tokens come from the client FCM SDKs.
const registrationTokens = ['YOUR_REGISTRATION_TOKEN_1', 'YOUR_REGISTRATION_TOKEN_2'];

const message = {
	tokens: registrationTokens,
	notification: {
		body: 'This is an FCM notification that displays an image!',
		title: 'FCM Notification',
	},
	apns: {
		payload: {
			aps: {
				'mutable-content': 1,
			},
		},
		fcm_options: {
			image: 'image-url',
		},
	},
	android: {
		notification: {
			image: 'image-url',
		},
	},
};

admin
	.messaging()
	.send(message)
	.then((response) => {
		console.log('Successfully sent message:', response);
	})
	.catch((error) => {
		console.log('Error sending message:', error);
	});
```

### Android: Configure Push notification icon and color

If you want to use a specific icon and color for the push notification, configure them in in the `App_Resources/Android/src/main/AndroidManifest.xml` file:

```xml
<meta-data android:name="com.google.firebase.messaging.default_notification_icon"
  android:resource="@drawable/your_drawable_name" />
<meta-data android:name="com.google.firebase.messaging.default_notification_color"
  android:resource="@color/ns_primary" />
```

### iOS: Enable the support for the delivery of push notifications in the background in Xcode

Open /platforms/ios/yourproject.**xcworkspace** (!) and go to your project's target and head over to "Capabilities" to switch this on (if it isn't already):
![push-xcode-config](https://raw.githubusercontent.com/NativeScript/firebase/main/packages/firebase-messaging/assets/images/push-xcode-config.png)

> **Note:** Without this enabled you will receive push messages in the foreground, but **NOT in the background**.

#### Copy the entitlements file

The previous step created the file `platforms/ios/YourAppName/Resources/YourAppName.entitlements`.
To prevent the file from being deleted when you run `ns clean`, move and rename it to `app/App_Resources/iOS/app.entitlements` (if it doesn't exist yet, otherwise merge its contents). The relevant content for background push in that file is:

```xml
	<key>aps-environment</key>
	<string>development</string>
```

#### Allow processing received a background push notification

Open `app/App_Resources/iOS/Info.plist` and add the following code at the bottom:

```xml
<key>UIBackgroundModes</key>
<array>
  <string>remote-notification</string>
</array>
```

<!-- #### Provisioning

Follow [this guide](https://firebase.google.com/docs/cloud-messaging/ios/certs) to the letter. Once you've done it run tns run ios and upon starting the app it should prompt you for notification support. That also works on the simulator, but receiving (background) notifications is only possible on a real device. -->

## API
### Messaging class
#### android
```ts
import { firebase } from '@nativescript/firebase-core';

messagingAndroid: com.google.firebase.messaging.FirebaseMessaging = firebase().messaging().android;
```
A `read-only` property that returns the instance of the Messaging class for Android.  

---
#### ios
```ts
import { firebase } from '@nativescript/firebase-core';

messagingIos: MessagingCore = firebase().messaging().ios;
```
A `read-only` property that returns the instance of the Messaging class for iOS.

---
#### app
```ts
import { firebase } from '@nativescript/firebase-core';
messageApp: FirebaseApp = firebase().messaging().app;
```
A `read-only` property that returns the instance of the FirebaseApp class associated with this Cloud Messaging instance.

---
#### isAutoInitEnabled
```ts
import { firebase } from '@nativescript/firebase-core';
isAutoInitEnabled: boolean = firebase().messaging().isAutoInitEnabled;
// or
firebase().messaging().isAutoInitEnabled = true;
```

Determines whether to enable or disable auto-initialization of Firebase Cloud Messaging. For more information about this property for iOS, see [autoInitEnabled](https://firebase.google.com/docs/reference/ios/firebasemessaging/api/reference/Classes/FIRMessaging#autoinitenabled).

---
#### showNotificationsWhenInForeground
```ts
import { firebase } from '@nativescript/firebase-core';
showNotificationsWhenInForeground: boolean = firebase().messaging().showNotificationsWhenInForeground;
// or
firebase().messaging().showNotificationsWhenInForeground = true;
```
Allows you to always display notifications while the application is in the foreground without sending additional parameters/data when sending the push notification

---
#### isDeviceRegisteredForRemoteMessages
```ts
import { firebase } from '@nativescript/firebase-core';
isDeviceRegisteredForRemoteMessages: boolean = firebase().messaging().isDeviceRegisteredForRemoteMessages;
```
A property that returns a boolean value indicating whether the app is registered to receive remote notifications or not.

---
#### getToken()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().getToken()
	.then((token: string) => {
		console.log('Token: ', token);
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```
Gets the user's device token. For more information, see [getToken()](https://firebase.google.com/docs/reference/kotlin/com/google/firebase/messaging/FirebaseMessaging#getToken())

---
#### getAPNSToken()
```ts
import { firebase } from '@nativescript/firebase-core';
aPNSToken: string | null = firebase().messaging().getAPNSToken()
```
Returns an Apple Push Notification service (APNs) token for the app’s current device. For more information, see [apnsToken](https://firebase.google.com/docs/reference/ios/firebasemessaging/api/reference/Classes/FIRMessaging#apnstoken).

---
#### hasPermission()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().hasPermission()
	.then((status: AuthorizationStatus) => {
		console.log('Authorization status: ', status);
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```
Checks if the app, on iOS, has permission to send notifications to the user.

---
#### onMessage()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().onMessage(listener);
```
Registers a callback function that is invoked when a new message is received.

| Parameter | Type | Description |
| --- | --- | --- |
| `listener` | `(message: RemoteMessage) => any` | A callback function that is invoked when a new message is received |

---
#### onNotificationTap()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().onNotificationTap(listener);
```
Registers a callback function that is invoked when a user taps on a notification.

| Parameter | Type | Description |
| --- | --- | --- |
| `listener` | `(message: RemoteMessage) => any` | A callback function that is invoked when a new message is received |

---
#### onToken()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().onToken(listener);
```
Registers a callback function that is invoked when a user's device changes its registration token.

| Parameter | Type | Description |
| --- | --- | --- |
| `listener` | `(token: string) => any` | A callback function that is invoked when  |

---
#### registerDeviceForRemoteMessages()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().registerDeviceForRemoteMessages()
	.then(() => {
		console.log('Device registered for remote messages');
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```

---
#### requestPermission()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().requestPermission(permissions)
	.then((status: AuthorizationStatus) => {
		console.log('Authorization status: ', status);
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```
| Parameter | Type | Description |
| --- | --- | --- |
| `permissions` | [Permissions](https://github.com/NativeScript/firebase/blob/main/packages/firebase-messaging-core/index.d.ts#L16-L19) | An object containing the permissions to request. |

---
#### subscribeToTopic()

```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().subscribeToTopic(topic)
	.then(() => {
		console.log('Subscribed to topic');
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```
For the description of this method, visit [subscribeToTopic()](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessaging#subscribeToTopic(java.lang.String)) on the Firebase website.

| Parameter | Type | Description |
| --- | --- | --- |
| `topic` | `string` | The name of the topic to subscribe to. |

---
#### unsubscribeFromTopic()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().unsubscribeFromTopic(topic)
	.then(() => {
		console.log('Unsubscribed from topic');
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```
For the description of this method, visit [unsubscribeToTopic()](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessaging#unsubscribeFromTopic(java.lang.String)) on the Firebase website.

| Parameter | Type | Description |
| --- | --- | --- |
| `topic` | `string` | The name of the topic to unsubscribe from. |

---
#### unregisterDeviceForRemoteMessages()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().unregisterDeviceForRemoteMessages()
	.then(() => {
		console.log('Device unregistered for remote messages');
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```

---
#### deleteToken()
```ts
import { firebase } from '@nativescript/firebase-core';
firebase().messaging().deleteToken()
	.then(() => {
		console.log('Token deleted');
	}).catch((error: Error) => {
		console.log('Error: ', error);
	});
```
For the description of the deleteToken method, visit [deleteToken()](https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessaging#deleteToken()) on the Firebase website.

---

## License

Apache License Version 2.0
