# @nativescript/firebase-dynamic-links

* [Intro](#intro)
* [Set up Firebase and the Dynamic Links SDK](#set-up-firebase-and-the-dynamic-links-sdk)
	* [iOS: Confirm that your Firebase project is properly configured](#ios-confirm-that-your-firebase-project-is-properly-configured)
* [Use @nativescript/firebase-dynamic-links to create and receive dynamic links](#use-nativescriptfirebase-dynamic-links-to-create-and-receive-dynamic-links)
	* [Create a dynamic link from parameters](#create-a-dynamic-link-from-parameters)
	* [Create the parameters of a dynamic link](#create-the-parameters-of-a-dynamic-link)
* [Receive Dynamic Links](#receive-dynamic-links)
	* [Android: Add intent filters for deep links](#android-add-intent-filters-for-deep-links)
	* [Add a callback function to receive the links](#add-a-callback-function-to-receive-the-links)
* [API](#api)
	* [DynamicLinks class](#dynamiclinks-class)
		* [ios](#ios)
		* [android](#android)
		* [app](#app)
		* [createLink()](#createlink)
		* [createShortLink()](#createshortlink)
		* [ShortLinkType](#shortlinktype)
		* [buildLink()](#buildlink)
		* [onLink()](#onlink)
		* [resolveLink()](#resolvelink)
	* [DynamicLinkAnalyticsParameters class](#dynamiclinkanalyticsparameters-class)
		* [ios](#ios-1)
		* [ndroid](#android-1)
		* [campaign](#campaign)
		* [content](#content)
		* [source](#source)
		* [term](#term)
	* [DynamicLinkParameters class](#dynamiclinkparameters-class)
		* [analytics](#analytics)
		* [android](#android-1)
		* [ios](#ios-1)
		* [domainUriPrefix](#domainuriprefix)
		* [itunes](#itunes)
		* [navigation](#navigation)
		* [social](#social)
	* [DynamicLink object](#dynamiclink-object)
		* [ios](#ios-1)
		* [android](#android-1)
		* [minimumAppVersion](#minimumappversion)
		* [url](#url)
		* [utmParameters](#utmparameters)
* [License](#license) 

## Intro 

This plugin allows you to add the  [Firebase Dynamic Links SDK](https://firebase.google.com/docs/dynamic-links) to your app, create dynamic links and receive links that launch a screen on your app.

[![image](https://img.youtube.com/vi/LvY1JMcrPF8/hqdefault.jpg)](https://www.youtube.com/watch?v=LvY1JMcrPF8)

## Set up Firebase and the Dynamic Links SDK
- To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

- Install and import the `@nativescript/firebase-dynamic-links` to add the Dynamic Links SDK.

	1. Install the plugin by running the following command in the root directory of your project.

		```cli
		npm install @nativescript/firebase-dynamic-links
		```

	2. To add the Dynamic Links SDK, import the `@nativescript/firebase-dynamic-links` plugin. You should import the plugin once in your app project and the ideal place to do that is the app bootstrapping file( `app.ts`, `main.ts`, etc).

>**Tip** For an optimal experience with Dynamic Links, the Firebase Dynamic Links documentation recommends you to enable Google Analytics by adding the Firebase SDK for Google Analytics to your app. To add and use Firebase SDK for Google Analytics in your NativeScript app, see the [@nativescript/firebase-analytics](../firebase-analytics) plugin documentation.

- Add a URL prefix for your Dynamic Links with the following steps:
	- Go to the Firebase Console
	- Click on `Dynamic Link`
	- Click on `Get started` and enter your URL prefix in the form that follows.

- **Recommended:** Specify the URL patterns allowed in your deep links and fallback links. For more information, refer to [Allow specific URL patterns](https://support.google.com/firebase/answer/9021429).

### iOS: Confirm that your Firebase project is properly configured

For instructions to confirm that your Firebase project is properly configured to use Dynamic Links for iOS, see [configuration step 4](https://firebase.google.com/docs/dynamic-links/ios/create#set-up-firebase-and-the-dynamic-links-sdk).

## Use @nativescript/firebase-dynamic-links to create and receive dynamic links

### Create a dynamic link from parameters

You can create a dynamic link via the Firebase console, your app or even your custom API. To create a dynamic link from parameters with the plugin, call the [buildLink](#buildlink) method on the [DynamicLinks class](#dynamiclinks-class) instance passing it a literal object of parameters or an instance of [DynamiclinkParameters](#dynamiclinkparameters) returned by the [createLink](#createlink) or [createShortLink](#createshortlink) method.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-dynamic-links';

async function buildLink() {
	const link = await firebase()
		.dynamicLinks()
		.buildLink({
			link: 'https://nativescript.org',
			// domainUriPrefix is created in your Firebase console
			domainUriPrefix: 'https://xyz.page.link',
			// optional setup which updates Firebase analytics campaign
			// "banner". This also needs setting up before hand
			analytics: {
				campaign: 'banner',
			},
		});

	return link;
}
```
### Create the parameters of a dynamic link

As mentioned in the [Create a Dynamic Link from parameters](#create-a-dynamic-link-from-parameters) section above, you can create a dynamic link's parameters with the `createLink` or `createShortLink` method. To create a dynamic link's parameters, call either of the methods with the deep link(the link to open when the dynamic link is clicked) and your URL prefix as the first and second arguments, respectively.
```ts
const dynamicLinks = firebase().dynamicLinks()

const link = dynamicLinks.createShortLink('https://docs.nativescript.org', 'https://triniwiz.page.link');

link.social = new DynamicLinkSocialParameters();
link.social.imageUrl = 'https://art.nativescript.org/logo/export/NativeScript_Logo_White_Blue_Rounded.png';

let dynamiLink = await dynamicLinks.buildLink(link)
```

## Receive Dynamic Links

### Android: Add intent filters for deep links

To receive a dynamic link with a deep link to your scheme, add an `intent-filter` to your app's `AndroidManifest.xml` file located at `app/App_Resources/src/main` as follows.

```xml
<activity ...>
	....
<intent-filter>
        		<action android:name="android.intent.action.VIEW" />
        		<category android:name="android.intent.category.DEFAULT" />
        		<category android:name="android.intent.category.BROWSABLE" />
        		<data android:scheme="YOUR_SCHEME" />
    		</intent-filter>
</activity>
```
### Add a callback function to receive the links

To receive the deep link that launches a screen of your app, call the [onLink](#onlink) method on an instance of the [DynamicLinks class](#dynamiclinks-class) with the function to be notified with the link.

```ts
const dynamicLinks = firebase().dynamicLinks();

dynamicLinks.onLink((link: DynamicLink) => {
	console.log('onLink', link);
});
```
## API
### DynamicLinks class

#### ios
```ts
dynamicLinks = firebase().dynamicLinks()
dynamicLinksIOS: FIRDynamicLinks  = firebase().dynamicLinks().ios
```
A `readonly` property that returns the iOS instance of [FIRDynamicLinks](https://firebase.google.com/docs/reference/ios/firebasedynamiclinks/api/reference/Classes/FIRDynamicLinks) wrapped by the `DynamicLinks` class.

---
#### android
```ts
dynamicLinks = firebase().dynamicLinks()
dynamicLinksAndroid = firebase().dynamicLinks().android
```
A `readonly` property that returns the Android instance of [FirebaseDynamicLinks](https://firebase.google.com/docs/reference/android/com/google/firebase/dynamiclinks/FirebaseDynamicLinks) wrapped by the `DynamicLinks` class.

---
#### app
```ts
dynamicLinks = firebase().dynamicLinks()
dynamicLinksApp: FirebaseApp = firebase().dynamicLinks().app
```
A `readonly` property that returns the FirebaseApp instance.

---
#### createLink()
```ts
dynamicLinks = firebase().dynamicLinks()

dynamicLinkParameters: DynamicLinkParameters = dynamicLinks.createLink(link, domainUri)
```
Creates parameters for a dynamic link and returns a [DynamicLinkParameters](#dynamiclinkparameters) object to be passed to the method to create a dynamic link.

| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` | The link the app will open when the dynamic link is tapped. For more information, see the description at [Dynamic Link parameters](https://firebase.google.com/docs/dynamic-links/create-manually?authuser=0#parameters).
| `domainUriPrefix` | `string` | Your domain prefix registered under Dynamic Links on Firebase Console.

---
#### createShortLink()
```ts
dynamicLinks = firebase().dynamicLinks()

dynamicLinkParameters: DynamicLinkParameters = dynamicLinks.createShortLink(link, domainUri, shortLinkType)
```
Creates parameters for a dynamic link and returns a [DynamicLinkParameters](#dynamiclinkparameters) object to be passed to the method to create a dynamic link.

 
| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` | The link the app will open when the dynamic link is tapped. For more information, see the description at [Dynamic Link parameters](https://firebase.google.com/docs/dynamic-links/create-manually?authuser=0#parameters).
| `domainUriPrefix` | `string` | Your domain prefix registered under Dynamic Links on Firebase Console.
| `shortLinkType` | [ShortLinkType]() | _Optional_

#### ShortLinkType
```ts
enum ShortLinkType {
	DEFAULT = 'default',
	SHORT = 'short',
	UNGUESSABLE = 'unguessable',
}
```
---
#### buildLink()
```ts
dynamicLinks = firebase().dynamicLinks()

link: string = dynamicLinks.buildLink(linkParameters)
```
Builds a dynamic link from parameters and returns the link as a `string`. Use the returned link to direct the user to your desired content.
 
| Parameter | Type | Description
|-----------|------|------------
| `linkParameters` | [DynamicLinkParameters](#dynamiclinkparameters) | The dynamic link parameters used to create a dynamic link.

#### onLink()
```ts
dynamicLinks: DynamicLinks = firebase().dynamicLinks()
listener = (link: DynamicLink | null, error: FirebaseError | null) => {
	// handle the link event
}
dynamicLinks.onLink(listener)
```
Allows you to add a callback function that gets called when your app's screen is launched by a dynamic link.

| Parameter | Type | Description
|-----------|-----|------------
| `listener` | [OnLinkListener](#onlinklistener-type)| The function to be called when the app's screen is launched by a dynamic link.

##### OnLinkListener type

```ts
type OnLinkListener = (link: DynamicLink | null, error: FirebaseError | null) => void;
```
---
#### resolveLink()
```ts
dynamicLinks: DynamicLinks = firebase().dynamicLinks()

dynamicLinks.resolveLink(link).then((dynamicLink: DynamicLink)=>{

})
```

Resolves the passed string and returns it as a [DynamicLink](#dynamiclink-object) if it's valid. Otherwise, it returns an error.

| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` | The string to be resolved.

---

### DynamicLinkAnalyticsParameters class
Used to create Analytics parameters for a dynamic link.

#### ios
```ts
ios = dynamicLinkAnalyticsParameters.ios
```

--
#### android
```ts
android = dynamicLinkAnalyticsParameters.android
```

---
#### campaign
```ts
campaign: undefined | string = dynamicLinkAnalyticsParameters.campign
```

---
#### content
```ts
content: undefined | string = dynamicLinkAnalyticsParameters.content
// or
```

---
#### source
```ts
source: undefined | string = dynamicLinkAnalyticsParameters.source
```

---
#### term
```ts
term: undefined | string = dynamicLinkAnalyticsParameters.term
```

### DynamicLinkParameters class

#### analytics
```ts
dynamicAnalytics: DynamicLinkAnalyticsParameters = dynamicLinkParameters.analytics
```

---
#### android
```ts
dynamicLinkParametersAndroid: DynamicLinkAnalyticsParameters = dynamicLinkParameters.android
```

---
#### ios
```ts
dynamicLinkParametersIOS: DynamicLinkAnalyticsParameters = dynamicLinkParameters.ios
```

---
#### domainUriPrefix
```ts
dynamicDomainUriPrefix: string = dynamicLinkParameters.domainUriPrefix
```

The URL prefix of the dynamic link.

---
#### itunes
```ts
dynamicLinkITunesParameters: DynamicLinkITunesParameters = dynamicLinkParameters.itunes
```

---
#### navigation
```ts
dynamicLinkNavigationParameters: DynamicLinkNavigationParameters = dynamicLinkParameters.navigation
```

Gets or sets navigation info parameters.

---
#### social
```ts
dynamicLinkSocialParameters: DynamicLinkSocialParameters = dynamicLinkParameters.social
```

---

### DynamicLink object
This object represents data of the link received by your app.
#### ios
```ts
linkIOS: FIRDynamicLink = link.ios
```

---
#### android
```ts
linkAndroid: com.google.firebase.dynamiclinks.PendingDynamicLinkData  = link.android
```

---
#### minimumAppVersion
```ts
minimumAppVersion: string = link.minimumAppVersion
```
For the description of this property, see the description of [getMinimumAppVersion()](https://firebase.google.com/docs/reference/android/com/google/firebase/dynamiclinks/PendingDynamicLinkData#getMinimumAppVersion()) on the PendingDynamicLinkData class documentation.

---
#### url
```ts
url: string = link.url
```
For the description of this property, see the description of [getUrl()](https://firebase.google.com/docs/reference/android/com/google/firebase/dynamiclinks/PendingDynamicLinkData#getLink()) on the PendingDynamicLinkData class documentation.

---
#### utmParameters
```ts
utmParameters: Record<string, string> = link.utmParameters
```

For the description of this property, see the description of [getUtmParameters()](https://firebase.google.com/docs/reference/android/com/google/firebase/dynamiclinks/PendingDynamicLinkData#getUtmParameters()) on the PendingDynamicLinkData class documentation.

## License

Apache License Version 2.0
