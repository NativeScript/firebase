# @nativescript/firebase-dynamic-links

## Intro 

A plugin that allows you to create [Firebase Dynamic Links](https://firebase.google.com/docs/dynamic-links) for your app.

[![image](https://img.youtube.com/vi/LvY1JMcrPF8/hqdefault.jpg)](https://www.youtube.com/watch?v=LvY1JMcrPF8)


## Installation

Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-dynamic-links
```

## Use @nativescript/firebase-dynamic-links

### Create a dynamic link

You can create a dynamic link via the Firebase console, your app or even your custom API. The following is an example of how to use the plugin to create dynamic links for your application code:

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

## API
### DynamicLinks class

#### ios
```ts
dynamicLinks = firebase().dynamicLinks()
dynamicLinksIOS = firebase().dynamicLinks().ios
```
A `readonly` property that returns the iOS version of the `DynamicLinks` class.

---
#### android
```ts
dynamicLinks = firebase().dynamicLinks()
dynamicLinksAndroid = firebase().dynamicLinks().android
```
A `readonly` property that returns the Android version of the `DynamicLinks` class.

---
#### app
```ts
dynamicLinks = firebase().dynamicLinks()
dynamicLinksApp: FirebaseApp = firebase().dynamicLinks().app
```
A `readonly` property that returns the FirebaseApp instance through which the dynamic links are managed.

---
#### createLink()
```ts
dynamicLinks = firebase().dynamicLinks()

dynamicLinksParameters: DynamicLinkParameters = dynamicLinks.createLink(link, domainUri)
```
 and returns a [DynamicLinkParameters]() object.

| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` |
| `domainUriPrefix` | `string` |

#### createShortLink()
```ts
dynamicLinks = firebase().dynamicLinks()

dynamicLinkParameters: DynamicLinkParameters = dynamicLinks.createLink(link, domainUri, shortLinkType)
```
 and returns a [DynamicLinkParameters]() object.
 
| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` |
| `domainUriPrefix` | `string` |
| `shortLinkType` | [ShortLinkType]() | _Optional_

#### buildLink()
```ts
dynamicLinks = firebase().dynamicLinks()

link: string = dynamicLinks.buildLink(link)
```
 and returns a link `string`.
 
| Parameter | Type | Description
|-----------|------|------------
| `link` | [DynamicLinkParameters]() |

#### onLink()
```ts
dynamicLinks: DynamicLinks = firebase().dynamicLinks()
listener = (link: DynamicLink | null, error: FirebaseError | null) =>{
	// handle the link event
}
dynamicLinks.onLink(listener)
```

| Parameter | Type | Description
|-----------|-----|------------
| `listener` | [OnLinkListener]() | 

---
#### resolveLink()
```ts
dynamicLinks: DynamicLinks = firebase().dynamicLinks()

dynamicLinks.resolveLink(link).then((dynamicLink: DynamicLink)=>{

})
```

| Parameter | Type | Description
|-----------|------|------------
| `link` | `string` |

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

### DynamicLinkParameters
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

---
#### social
```ts
dynamicLinkSocialParameters: DynamicLinkSocialParameters = dynamicLinkParameters.social
```

---


## License

Apache License Version 2.0
