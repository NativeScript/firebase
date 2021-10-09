# @nativescript/firebase-dynamic-links

```cli
ns plugin add @nativescript/firebase-dynamic-links
```

## What does it do

Dynamic Links are links that work the way you want, on either iOS or Android and whether or not your app is already installed.

[![image](https://img.youtube.com/vi/LvY1JMcrPF8/hqdefault.jpg)](https://www.youtube.com/watch?v=LvY1JMcrPF8)

With Dynamic Links, your users get the best available experience for the platform they open your link on. If a user opens a Dynamic Link on iOS or Android, they can be taken directly to the linked content in your app.

## Usage

### Create a Link

You can create dynamic links via the Firebase console, your app or even your custom API. Please refer to Firebase create dynamic link documentation for further details. Below, we will show how to build links as part of your application code:

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

## License

Apache License Version 2.0
