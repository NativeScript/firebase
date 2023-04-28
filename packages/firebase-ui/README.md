# @nativescript/firebase-ui

## Contents
* [Intro](#intro)
* [Set up your app for Firebase](#set-up-your-app-for-firebase)
* [Add the FirebaseUI for Auth SDK to your app](#add-the-firebaseui-for-auth-sdk-to-your-app)
* [Enable sign-in methods in the Firebase console](#enable-sign-in-methods-in-the-firebase-console)
* [Invoke the FirebaseUI auth flow](#invoke-the-firebaseui-auth-flow)
    * [Sign out a user](#sign-out-a-user)
* [API](#api)
    * [UI object](#ui-object)
        * [android](#android)
        * [ios](#ios)
        * [app](#app)
        * [useEmulator()](#useemulator)
        * [show()](#show)
        * [delete()](#delete)
        * [signOut()](#signout)
    * [Config interface](#config-interface)
    * [IIdpResponse object](#iidpresponse-object)
        * [android](#android-1)
        * [ios](#ios-1)
        * [isNewUser](#isnewuser)
        * [hasCredentialForLinking](#hascredentialforlinking)
        * [email](#email)
        * [idpSecret](#idpsecret)
        * [idpToken](#idptoken)
        * [phoneNumber](#phonenumber)
        * [providerType](#providertype)
        * [user](#user)
    * [User object](#user-object)
        * [android](#android-2)
        * [ios](#ios-2)
        * [name](#name)
        * [email](#email-1)
        * [phoneNumber](#phonenumber-1)
        * [photoURI](#photouri)
        * [providerId](#providerid)

## Intro

With this plugin, you can use the [FirebaseUI for Auth](https://github.com/firebase/FirebaseUI-Android/blob/master/auth/README.md#firebaseui-for-auth) library in your NativeScript app. FirebaseUI for Auth is a library that provides a drop-in auth solution that handles the UI flows for signing up and signing in users with email and password, phone number, Google, Facebook, Twitter, and more.

## Set up your app for Firebase

You need to set up your app for Firebase before you can enable FirebaseUI. To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

## Add the FirebaseUI for Auth SDK to your app

To add the FirebaseUI SDK to your app follow these steps:

1. Install the `npm install @nativescript/firebase-ui` plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-ui
```

2. Add the SDK by importing the `@nativescript/firebase-messaging` module once in your app, ideally in the main file (e.g. `app.ts` or `main.ts`).

```ts
import '@nativescript/firebase-ui';
```

## Enable sign-in methods in the Firebase console

Just like with [@nativescript/firebase-auth](../firebase-auth/), you need to go to the Firebase console and enable the sign-in methods you want to offer to your users. For more information on how to do that, see [Set up sign-in methods](https://firebase.google.com/docs/auth/web/firebaseui#set_up_sign-in_methods).

## Invoke the FirebaseUI auth flow

To invoke the FirebaseUI auth flow, call the [show](#show) method on the [UI](#ui-object) object - returned by `firebase().ui()`- with an object of type [Config](). 

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

To sign out a user, call the [signOut](#signout) method on the [UI](#ui-object) object returned by `firebase().ui()`.

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
### UI object

The `UI` object provides the API for the FirebaseUI for Auth library and has the following members.

#### android
```ts
import { firebase } from '@nativescript/firebase-core';

uiAndroid: com.firebase.ui.auth.AuthUI = firebase().ui().android;
```
A `readonly` property that returns the UI object for Android.

---
#### ios
```ts
import { firebase } from '@nativescript/firebase-core';

uiIOS: FUIAuth = firebase().ui().ios;
```
A `readonly` property that returns the UI object for iOS.

---
#### app
```ts
import { firebase } from '@nativescript/firebase-core';

app: FirebaseApp = firebase().ui().app;
```
A `readonly` property that returns the [FirebaseApp]() instance for your app.

---
#### useEmulator()
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .useEmulator(host, port);
```
Allows you to point a `com.firebase.ui.auth.AuthUI` instance to an emulator at a specific host and port.

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
This method returns a Promise that resolves with an [IIdpResponse](#iidpresponse-object) object.

| Param | Type | Description |
| --- | --- | --- |
| `config` | [Config](https://github.com/Ombuweb/firebase/blob/main/packages/firebase-ui/index.d.ts#L111-L124) | The `config` parameter specifies auth options such as federated identity providers list to use for user auth and more.  |

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
### Config interface
The Config object specifies the auth flow options such as the available identity providers, email link, the UI theme and other options.

```ts
export interface Config {
	providers: IProvider[];
	anonymousUsersAutoUpgrade?: boolean;
	emailLink?: string;
	resetPasswordSettings?: IActionCodeSettings;
	theme?: number; // Android only
	lockOrientation?: boolean;
	tosAndPrivacyPolicy?: {
		tos: string;
		privacyPolicy: string;
	};

	alwaysShowSignInMethodScreen?: boolean;
}
```
---
### IIdpResponse object

When the [show](#show) method of the [UI object](#ui-object) resolves successfully, it returns the `IIdpResponse` object which has the following members.

#### android
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        responseAndroid: com.firebase.ui.auth.IdpResponse = result.android;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
A `read-only` property that returns the `IdpResponse` instance for Android.

---
#### ios
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        responseIOS: com.firebase.ui.auth.IdpResponse = result.ios;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
A `read-only` property that returns the `IdpResponse` instance for iOS.

---
#### isNewUser
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        isNewUser: boolean = result.isNewUser;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Returns `true` if the user has just signed up for the first time, otherwise `false`.

---
#### hasCredentialForLinking
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        hasCredentialForLinking: boolean = result.hasCredentialForLinking;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Returns `true` if any of the federated identity providers (IDPs) has credentials for the user to link Firebase account with, otherwise `false`.

---
#### email
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        email: string = result.email;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Returns the emails the user used to sign in.

---
#### idpSecret
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        idpSecret: boolean = result.idpSecret;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
(`Twitter only`)Returns the token secret received as a result of logging in with Twitter.

---
#### idpToken
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        idpToken: boolean = result.idpToken;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Gets the token received as a result of logging in with the specified IDP.

---
#### phoneNumber
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        phoneNumber: string = result.phoneNumber;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Gets the phone number used to sign in.

---
#### providerType
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        providerType: string = result.providerType;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Gets the type of provider. e.g. `{@link GoogleAuthProvider#PROVIDER_ID}`.

---
#### user
```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
    .ui()
    .show(config)
    .then((result: IIdpResponse) => {
        user: User = result.user;
    })
    .catch((error) => {
        console.error('show error:', error);
    });
```
Returns the [user data object](#user-object).

---
### User object

This object represents the user data provided by a federated identity provider (IDP).

#### android
```ts
userAndroid: com.firebase.ui.auth.data.model.User = user.android;
```
A `read-only` property that returns the `User` instance for Android.

---
#### ios
```ts
userIOS: FIRUser = user.ios;
```
A `read-only` property that returns the `FIRUser` instance for iOS.

---
#### name
```ts
name: string = user.name;
```
A `read-only` property that returns the user's display name.

---
#### email
```ts
email: string = user.email;
```
A `read-only` property that returns the email of the user.

---
#### phoneNumber
```ts
phoneNumber: string = user.phoneNumber;
```
A `read-only` property that returns the phone number of the user.

---
#### photoUri
```ts
photoUri: string = user.photoUri;
```
A `read-only` property that returns the user's profile photo URL.

---
#### providerId
```ts
providerId: string = user.providerId;
```
A `read-only` property that returns a string that uniquely identifies the identity provider providing the current user's data.

---
## License

Apache License Version 2.0
