# @nativescript/firebase-analytics

* [Intro](#intro)
* [Installation](#installation)
* [Use @nativescript/firebase-analytics](#use-nativescriptfirebase-analytics)
	* [Log custom events](#log-custom-events)
	* [Log Predefined Events](#log-predefined-events)
	* [Reserved Events](#reserved-events)
	* [Get the app instance id](#get-the-appinstance-id)
	* [Disable Ad Id usage on iOS](#disable-ad-id-usage-on-ios)
	* [Demo app](#demo-app)
* [Analytics class](#analytics-class)
	* [Properties](#properties)
	* [Methods](#Methods)
* [License](#License)

## Intro

This plugin allows you to add [Google Analytics for Firebase](https://firebase.google.com/docs/analytics)
 to your app. 

> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase in your app.

Analytics collects usage and behavior data for your app. Its two primary concerns are:

- [Events](https://support.google.com/analytics/answer/9234069): These are events that occur in your app, such as user actions, system events, or errors. Google Analytics collects information for 3 types of events: [Automatically collected](https://support.google.com/analytics/answer/9234069?hl=en&ref_topic=13367566), [Recommended](https://support.google.com/analytics/answer/9267735?hl=en&ref_topic=13367566) and [Custom](https://support.google.com/analytics/answer/12229021?hl=en&ref_topic=13367566) events.

- [user properties](https://support.google.com/analytics/answer/9268042): Attributes you define to describe segments of your user base, such as language preference or geographic location.

[![image](https://img.youtube.com/vi/8iZpH7O6zXo/hqdefault.jpg)](https://www.youtube.com/watch?v=8iZpH7O6zXo)

## Installation
Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-analytics
```

## Use @nativescript/firebase-analytics

The examples below show you how to use `@nativescript/firebase-analytics` to log custom and predefined events.

### Log custom events

Analytics also allows developers to log custom events. If you're already familiar with Google Analytics, this method is equivalent to using the event command in [gtag.js](https://developers.google.com/gtagjs/).

To log a custom event to Analytics, call the `logEvent` method on an instance of the [Analytics](#analytics-class) class passing it the name of the custom event as the first argument and the event data object as the second argument.

Please be aware that primitive data types or arrays of primitive data types are logged in your Firebase Analytics console.

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
After calling `logEvent`, look for your event name in the Analytics Realtime data to see if it's logged.

### Log Predefined Events

To help you get started, Google Analytics automatically logs events that are common among different types of apps, including retail and e-commerce, travel, and gaming apps.

To log a predefined event, call the `logEvent` method on the `Analytics` class instance passing it the event name and the [event data](https://support.google.com/analytics/answer/13316687#zippy=%2Cmobile-android-and-ios) object.

The following example demonstrates logging the [select_content](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content) event.

```ts
import { firebase } from '@nativescript/firebase-core';

// Logs in the firebase analytics console as "select_content" event
// only accepts the two object properties which accept strings.
firebase().analytics().logEvent('select_content', {
	content_type: 'clothing',
	item_id: 'abcd',
});
```
After calling `logEvent`, look for your event name in the Analytics Realtime data to see if it's logged.

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

### Get the app instance id

To get the app instance id of the application, call the `getAppInstanceId` method. This returns `null` on Android if `ConsentType.Analytics_Storage = ConsentStatus.Denied`.

```ts
import { firebase } from '@nativescript/firebase-core';

const appInstanceId = firebase().analytics().getAppInstanceId();
```

### Disable Identifier for Advertisers usage with analytics on iOS

Apple strictly bans an app from being in the Kids category if the app accesses Identifier for Advertisers(IDFA) iOS symbols.

Additionally, if an app accesses IDFA iOS symbols, it must implement Apple's [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency)(or `ATT`). However, if an app does not use IDFA and otherwise handles data in an ATT-compatible way, it eliminates this ATT requirement.

If you need to avoid IDFA usage while still using analytics, define the following variable in your Podfile:

```ruby
$NSFirebaseAnalyticsWithoutAdIdSupport = true
```

During pod install, using that variable installs a new `Analytics With No Ad Ids` pod that the firebase-ios-sdk team created, and allows both the use of Firebase Analytics in Kids Category apps and Firebase Analytics without needing the App Tracking Transparency handling (assuming no other parts of your app handles data in a way that requires ATT)

>**Note** that configuring Firebase Analytics for use without IDFA is incompatible with AdMob.

### Demo app

You can find the demo app [here](https://stackblitz.com/edit/nativescript-stackblitz-templates-j2k32w?file=app/firebase-analytics-page.ts).

## Analytics class 

The plugin offers you the Analytics class through which you can manage Firebase Analytics.
The Analytics class has the following properties and methods.

### Properties
|Property | Type
|---------|-----
| `appInstanceId` | `string` 

### logEvent()
```ts
firebase().analytics()
		.logEvent(name, parameters)
```
Sends the specified event data to Google Analytics.
| Parameter | Type | Description
|-----------|------|-----------
| `name` | `string`| The name of the event to log.
| `parameters` | [EventParameter](#eventparameter)| An object specifying the event data. For the list of supported properties for `parameters` for a Reserved event, visit [FirebaseAnalytics.Param Constants Summary](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param#constant-summary).

---
### setUserId()

```ts
firebase().analytics().setUserId(userId)
```
Allows you to store a user ID for the individual using your app. Read more about setting user ID [here](https://firebase.google.com/docs/analytics/userid). 

---
### resetAnalyticsData()
```ts
firebase().analytics().resetAnalyticsData()
```
See the description [here](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics#public-void-resetanalyticsdata).

---
### setAnalyticsCollectionEnabled()
```ts
firebase().analytics().setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean)
```
A method used to manually disable or enable the collection of analytics data.

- `analyticsCollectionEnabled`: A `boolean` value. If set to `true` analytics data is collected. If set to `false` analytics collection is disabled.
---
### setUserProperty()

```ts
firebase().analytics().setUserProperty(name: string, value: string)
```
Sets a user property. For more details, see [Set user properties](https://firebase.google.com/docs/analytics/user-properties?platform=ios).

| Parameter | Type | Description
|-----------|------|-----------
| `name` | `string` | The name of the user property to set.
| `value` | `string` | The value of the user property.

---
### setSessionTimeoutInterval()
```ts
firebase().analytics().setSessionTimeoutInterval(sessionTimeoutInterval: number)
```
 For the description, see [setSessionTimeoutDuration](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics#public-void-setsessiontimeoutduration-long-milliseconds).

| Parameter | Type | Description
|-----------|------|------------
| `sessionTimeoutInterval` | `number` | The duration of inactivity, in milliseconds. Defaults to `1800000` (`30` minutes).

---
### setDefaultEventParameters()
```ts
firebase().analytics().setDefaultEventParameters(parameters)
```
Read the description [here](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics#public-void-setdefaulteventparameters-bundle-parameters).

| Parameter | Type | Description
|----------|-------|------------
| `parameters` | [EventParameter](#eventparameter) | Parameters object. For the list of supported properties for `parameters` for a Reserved event, visit [FirebaseAnalytics.Param Constants Summary](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param#constant-summary).

#### EventParameter
```ts
interface EventParameter {
	[key: string]: any;
}
```
---
### setConsent()
```ts
firebase().analytics().setConsent(consentSettings)
```
See the description [here](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics#public-void-setconsent-mapfirebaseanalytics.consenttype,-firebaseanalytics.consentstatus-consentsettings).

| Parameter | Type | Description
|----------|-------|------------
| `consentSettings`| Map\<[ConsentType](#consenttype),[ConsentStatus](#consentstatus)\> |

#### ConsentType
```ts
enum ConsentType {
	Ad_Storage,
	Analytics_Storage,
}
```
#### ConsentStatus
```ts
enum ConsentStatus {
	Denied,
	Granted,
}
```

---
### handleOpenURL()
```ts
firebase().analytics().handleOpenURL(url)
```

(`iOS-specific`)Handles the event when the app is launched by a URL.

| Parameter | Type | Description
|----------|-------|------------
| `url` | `string` | The URL from which to open the app.

---
### handleUserActivity()
```ts
firebase().analytics().handleUserActivity(userActivity)
```

(`iOS-specific`)Handles the event when the app receives data associated with user activity that includes a Universal Link (on iOS 9.0 and above).

| Parameter | Type | Description
|----------|-------|------------
| `userActivity` | `any` | The URL from which to open the app.

---

## License

Apache License Version 2.0
