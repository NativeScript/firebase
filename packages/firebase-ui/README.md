# @nativescript/firebase-ui

## Intro

With this plugin, you can use the [FirebaseUI](https://github.com/firebase/FirebaseUI-iOS/blob/master/README.md) library in your NativeScript app. FirebaseUI is a library that provides a drop-in auth solution that handles the UI flows for signing up and signing in users with email and password, phone number, Google, Facebook, Twitter, and more.

## Set up your app for Firebase

You need to set up your app for Firebase before you can enable FirebaseUI. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

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

## API
### UI class
#### android
```ts
import { firebase } from '@nativescript/firebase-core';

uiAndroid: com.firebase.ui.auth.AuthUI = firebase().ui().android;
```

---
#### ios
```ts
import { firebase } from '@nativescript/firebase-core';

uiIOS: FUIAuth = firebase().ui().ios;
```

---
#### app
```ts
import { firebase } from '@nativescript/firebase-core';

app: FirebaseApp = firebase().ui().app;
```

---
#### useEmulator()
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .useEmulator(host, port);
```
| Param | Type | Description |
| --- | --- | --- |
| `host` | `string` | The host of the emulator. |
| `port` | `number` | The port of the emulator. |

---
#### show()
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        console.log(result.user);
        console.log(result.hasCredentialForLinking);
        console.log(result.providerType);
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Presents auth UI with a list of federated identity providers (IDPs) that a user can choose from to sign in or sign up with. If the user chooses to sign in with a federated IDP, the sign-in flow will be completed using the IDP's sign-in SDK and the returned IDP credential will be linked to the current user.
This method returns a Promise that resolves with an object of type [IIdpResponse]().

| Param | Type | Description |
| --- | --- | --- |
| `config` | [Config]() | The `config` parameter specifies auth options such as federated identity providers,  |


---
#### delete()
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .delete()
    .then(() => {
        console.log('delete complete');
    })
    .catch((e) => {
        console.error('delete error:', e);
    });
```
Asynchronously deletes the current user's account.

---
#### signOut()
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
Asynchronously signs out the current user.

---

## License

Apache License Version 2.0
