# @nativescript/firebase-ui

## Intro

This plugin allows you to use the [FirebaseUI](https://github.com/firebase/FirebaseUI-iOS/blob/master/README.md) library in your NativeScript app.

## Set up your app for Firebase

You need to set up your app for Firebase before you can enable Firebase Messaging. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

## Add the FirebaseUI SDK to your app

To add the FirebaseUI SDK to your app follow these steps:

1. Install the `npm install @nativescript/firebase-ui` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-ui
```

2. Add the SDK by importing the `@nativescript/firebase-messaging` module once in your app, ideally in the main file (e.g. `app.ts` or `main.ts`).

```ts
import '@nativescript/firebase-ui';
```

## Present the auth UI to authenticate users

To present the auth UI that allows authenticating users, call the [show]() method on the [UI]() object - returned by `firebase().ui()`- with an object of type [Config](). The Config object specifies the auth providers you want to authenticate your users with.

```ts
import { firebase } from '@nativescript/firebase-core';
import { AppleProvider, EmailProvider, GithubProvider, GoogleProvider, MicrosoftProvider, TwitterProvider, YahooProvider } from '@nativescript/firebase-ui';

firebase()
    .ui()
    .show({
        providers: [
            new AppleProvider(),
            new GoogleProvider(),
            new TwitterProvider(),
            new GithubProvider(),
            new EmailProvider(),
            new MicrosoftProvider(),
            new YahooProvider()],
    })
    .then((result: IIdpResponse) => {
        console.log(result.user);
        console.log(result.hasCredentialForLinking);
        console.log(result.providerType);
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```

### Sign out a user

To sign out a user, call the [signOut]() method on the [UI]() object returned by `firebase().ui()`.

```ts
import { firebase } from '@nativescript/firebase-core';


firebase()
    .ui()
    .signOut()
    .then(() => {
        console.log('signOut complete');
    })
    .catch((e) => {
        console.error('signOut error:', e);
    });

```

## License

Apache License Version 2.0
