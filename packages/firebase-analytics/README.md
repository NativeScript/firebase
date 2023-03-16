# @nativescript/firebase-analytics

This plugin allows you to add [Google Analytics for Firebase](https://firebase.google.com/docs/analytics)
 to your app. 

> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase in your app.

Analytics collects usage and behavior data for your app. Its two primary concerns are:

- [Events](https://support.google.com/analytics/answer/9234069): These are events that occur in your app, such as user actions, system events, or errors. Google Analytics collects information for 3 types of events: [Automatically collected](https://support.google.com/analytics/answer/9234069?hl=en&ref_topic=13367566), [Recommended](https://support.google.com/analytics/answer/9267735?hl=en&ref_topic=13367566) and [Custom](https://support.google.com/analytics/answer/12229021?hl=en&ref_topic=13367566) events.

- [user properties](https://support.google.com/analytics/answer/9268042): Attributes you define to describe segments of your user base, such as language preference or geographic location.

[![image](https://img.youtube.com/vi/8iZpH7O6zXo/hqdefault.jpg)](https://www.youtube.com/watch?v=8iZpH7O6zXo)


## Installation

```cli
npm install @nativescript/firebase-analytics
```

## Use @nativescript/firebase-analytics

Analytics offers a wealth of Predefined Events to track user behavior. 

### Log custom events

Analytics also allows developers to track custom events. If you're already familiar with Google Analytics, this method is equivalent to using the event command in [gtag.js](https://developers.google.com/gtagjs/).

The example below shows you how to log a custom event. Please be aware that primitive data types or arrays of primitive data types are logged in your Firebase Analytics console.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-analytics';

firebase()
	.analytics()
	.logEvent('basket', {
		id: 3745092,
		item: 'mens grey t-shirt',
		description: ['round neck', 'long sleeved'],
		size: 'L',
	});
```

### Log predefined events

To help you get started, Google Analytics automatically logs events that are common among different types of apps, including retail and e-commerce, travel, and gaming apps.

To log a predefined event, call the `logEvent` method on the `Analytics` class instance passing it the event name and the [event data](https://support.google.com/analytics/answer/13316687#zippy=%2Cmobile-android-and-ios) object.

The following is an example of using the `logEvent` method to log the [select_content](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content) event.

```ts
import { firebase } from '@nativescript/firebase-core';

// Logs in the firebase analytics console as "select_content" event
// only accepts the two object properties which accept strings.
firebase().analytics().logEvent('select_content', {
	content_type: 'clothing',
	item_id: 'abcd',
});
```

### Reserved Events

In Analytics, the names of the automatically logged events are referred to as [Reserved Events](https://support.google.com/analytics/answer/13316687#zippy=%2Cmobile-android-and-ios). Creating custom events with those names results in an error. Below are some of the Reserved Events names:

| Reserved Events Names
|:-------------------
| `app_clear_data`
| `error`    
| `first_open_time`   
| `notification_dismiss`
| `notification_receive` 
| `screen_view` 
| `ad_click`      
| `adunit_exposure`  

For more Reserved event names, visit [Event naming rules](https://support.google.com/analytics/answer/13316687#zippy=%2Cmobile-android-and-ios).

### Get app instance id

To get the app instance id of the application, call the `getAppInstanceId` method. This returns `null` on Android if `ConsentType.Analytics_Storage = ConsentStatus.Denied`.

```ts
import { firebase } from '@nativescript/firebase-core';

const appInstanceId = firebase().analytics().getAppInstanceId();
```

### Disable Ad Id usage on iOS

Apple strictly bans an app from being in the Kids category if the app accesses IDFA iOS symbols.

Additionally, if an app accesses IDFA iOS symbols, it must implement Apple's [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency)(or `ATT`). However, if an app does not use IDFA and otherwise handles data in an ATT-compatible way, it eliminates this ATT requirement.

If you need to avoid IDFA usage while still using analytics, define the following variable in your Podfile:

```ruby
$NSFirebaseAnalyticsWithoutAdIdSupport = true
```

During pod install, using that variable installs a new `Analytics With No Ad Ids` pod that the firebase-ios-sdk team created, and allows both the use of Firebase Analytics in Kids Category apps and Firebase Analytics without needing the App Tracking Transparency handling (assuming no other parts of your app handles data in a way that requires ATT)

Note that for obvious reasons, configuring Firebase Analytics for use without IDFA is incompatible with AdMob

## License

Apache License Version 2.0
