# @nativescript/firebase-dynamic-links

## Intro 

A plugin that allows you to add and handle [Firebase Dynamic Links](https://firebase.google.com/docs/dynamic-links) for your app.

[![image](https://img.youtube.com/vi/LvY1JMcrPF8/hqdefault.jpg)](https://www.youtube.com/watch?v=LvY1JMcrPF8)

> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase in your app.

## Create dynamic links for your app
### Set up Firebase and the Dynamic Links SDK
- To set up and initialize Firebase for your app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.
- Install the `@nativescript/firebase-dynamic-links` to add the Dynamic Links SDK

Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-dynamic-links
```

- To add the Dynamic Links SDK, import the `@nativescript/firebase-dynamic-links` plugin. You should import the plugin once in your app project and the ideal place to do that is the app bootstrap file( `app.ts`, `main.ts`, etc).

>**Tip** For an optimal experience with Dynamic Links, the Firebase Dynamic Links documentation recommends you to enable Google Analytics by adding the Firebase SDK for Google Analytics to your app. For instructions on how to add and use Firebase SDK for Google Analytics in your NativeScript app, see the [@nativescript/firebase-analytics](../firebase-analytics) plugin documentation.

- Add a URL prefix for your Dynamic Links with the following steps:
	- Go to the Firebase Console
	- Click on `Dynamic Link`
	- Click on `Get started` and fill in the form that follows to add your URL prefix.

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
## Use @nativescript/firebase-dynamic-links

### Create a Dynamic Link from parameters

You can create a dynamic link via the Firebase console, your app or even your custom API. To create a dynamic link from parameters, call the [buildLink](#buildlink) method passing it a literal object of parameters or an instance of [DynamiclinkParameters](#dynamiclinkparameters) returned by the [createLink](#createlink) or [createShortLink](#createshortlink) method.

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
### Create a dynamic link's parameters

As mentioned in the [Create a Dynamic Link from parameters](#create-a-dynamic-link-from-parameters) section, you can create a dynamic link's parameters with the `createLink` or `createShortLink` method. The example below shows how to use the `createShortLink` method.
```ts
const dynamicLinks = firebase().dynamicLinks()

const link = dynamicLinks.createShortLink('https://docs.nativescript.org', 'https://triniwiz.page.link');

link.social = new DynamicLinkSocialParameters();
link.social.imageUrl = 'https://art.nativescript.org/logo/export/NativeScript_Logo_White_Blue_Rounded.png';

let dynamiLink = await dynamicLinks.buildLink(link)
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
Creates parameters for a dynamic link and returns a [DynamicLinkParameters](#dynamiclinkparameters) object.

| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` |
| `domainUriPrefix` | `string` |

---
#### createShortLink()
```ts
dynamicLinks = firebase().dynamicLinks()

dynamicLinkParameters: DynamicLinkParameters = dynamicLinks.createShortLink(link, domainUri, shortLinkType)
```
Creates parameters for a dynamic short link and returns a [DynamicLinkParameters](#dynamiclinkparameters) object.

 
| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` |
| `domainUriPrefix` | `string` |
| `shortLinkType` | [ShortLinkType]() | _Optional_

---
#### buildLink()
```ts
dynamicLinks = firebase().dynamicLinks()

link: string = dynamicLinks.buildLink(link)
```
Builds a dynamic link from parameters and returns the link as a `string`.
 
| Parameter | Type | Description
|-----------|------|------------
| `link` | [DynamicLinkParameters](#dynamiclinkparameters) |

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
| `listener` | `(link: DynamicLink | null, error: FirebaseError | null) => void`| The function to be called when the app's screen is launched by a dynamic link.

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

Resolves the passed string and returns it as a [DynamicLink]() if it's valid. Otherwise, it returns an error.

| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` | The string to be resolved.

---

### DynamicLinkAnalyticsParameters class

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


## License

Apache License Version 2.0
