# @nativescript/firebase-analytics

```javascript
ns plugin add @nativescript/firebase-analytics
```

## What does it do?

Analytics collects usage and behavior data for your app. Its two primary concerns are:

- **Events**: What is happening in your app, such as user actions, system events, or errors.
- **User properties**: Attributes you define to describe segments of your user base, such as language preference or geographic location.

[![image](https://img.youtube.com/vi/8iZpH7O6zXo/hqdefault.jpg)](https://www.youtube.com/watch?v=8iZpH7O6zXo)

Analytics automatically logs some [events](https://support.google.com/analytics/answer/9234069) and [user properties](https://support.google.com/analytics/answer/9268042); you don't need to add any code to enable them. However, Analytics also allows you to log custom or predefined events within your app. How you can do this will be explained below.

## Usage

Analytics offers a wealth of Predefined Events to track user behavior. Analytics also offers folks the ability to log Custom Events . If you're already familiar with Google Analytics, this method is equivalent to using the event command in [gtag.js](https://developers.google.com/gtagjs/).

### Custom Events

Below is an example showing how a custom event can be logged. Please be aware that primitive data types or arrays of primitive data types are logged in your Firebase Analytics console.

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

### Predefined Events

To help you get started, Analytics provides a number of events that are common among different types of apps, including retail and e-commerce, travel, and gaming apps. To learn more about these events and when to use them, browse the [Events and properties articles](https://support.google.com/analytics/answer/9322688?hl=en&ref_topic=9267641) in the Firebase Help Center.

Below is a sample of how to use one of the predefined events the Analytics module provides for you.

Using the [select_content](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content) event

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

The Analytics package works out of the box, however a number of events are automatically reported to Firebase. These event names are called as 'Reserved Events'. Attempting to send any custom event using the logEvent method with any of the following event names will throw an error.

| Reserved Events Names |                         |                   |
| :-------------------: | :---------------------: | :---------------: |
|    app_clear_data     |      app_uninstall      |    app_update     |
|         error         |       first_open        |    first_visit    |
|    first_open_time    |    first_visit_time     |  in_app_purchase  |
| notification_dismiss  | notification_foreground | notification_open |
| notification_receive  |        os_update        |   session_start   |
|      screen_view      |     user_engagement     |   ad_impression   |
|       ad_click        |        ad_query         |    ad_exposure    |
|    adunit_exposure    |      ad_activeiew       |

### App instance id

Below is an example showing how to retrieve the app instance id of the application. This will return null on android if ConsentType.Analytics_Storage has been set to ConsentStatus.Denied.

```ts
import { firebase } from '@nativescript/firebase-core';

const appInstanceId = firebase().analytics().getAppInstanceId();
```

### Disable Ad Id usage on iOS

Apple has a strict ban on the usage of Ad Ids ("IDFA") in Kids Category apps. They will not accept any app in the Kids category if the app accesses the IDFA iOS symbols.

Additionally, apps must implement Apples "App Tracking Transparency" (or "ATT") requirements if they access IDFA symbols. However, if an app does not use IDFA and otherwise handles data in an ATT-compatible way, it eliminates this ATT requirement.

If you need to avoid IDFA usage while still using analytics, then you need to define the following variable in your Podfile:

```ruby
$NSFirebaseAnalyticsWithoutAdIdSupport = true
```

During pod install, using that variable installs a new "Analytics With No Ad Ids" pod the firebase-ios-sdk team has created, and allows both the use of Firebase Analytics in Kids Category apps, and use of Firebase Analytics without needing the App Tracking Transparency handling (assuming no other parts of your app handle data in a way that requires ATT)

Note that for obvious reasons, configuring Firebase Analytics for use without IDFA is incompatible with AdMob

## License

Apache License Version 2.0
