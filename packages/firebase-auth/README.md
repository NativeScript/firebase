# @nativescript/firebase-auth
* [Intro](#intro)
* [Installation](#installation)
* [Use @nativescript/firebase-auth](#use-nativescriptfirebase-auth)
	* [Listen to the authentication state change](#listen-to-the-authentication-state-change)
	* [Sign a user in anonymously](#sign-a-user-in-anonymously)
	* [Create a user account with email and password](#create-a-user-account-with-email-and-password)
	* [Sign in with email and password](#sign-in-with-email-and-password)
	* [Send a user's email verification email](#send-a-users-email-verification-email)
	* [Sign a user out](#Signauserout)
	* [Sign in with Apple](#sign-in-a-with-apple)
	* [Sign in with Facebook account](#sign-in-with-facebook-account)
	* [Sign in with Twitter account](#sign-in-with-twitter-account)
	* [Sign in with GitHub account](#sign-in-with-github-account)
	* [Sign in with Google account](#sign-in-with-google-account)
	* [Phone number authentication](#phone-number-authentication)
		* [Phone number auth setup](#phone-number-auth-setup)
		* [Sign in user with phone number](#sign-in-user-with-phone-number)
		* [Testing phone number auth](#testing-phone-number-auth)

* [API](#api)
	* [Auth class](#auth-class)
		* [Properties](#properties)
		* [Methods](#methods)
	* [User](#user)
		* [Properties](#properties-1)
		* [Methods](#methods-1)
	* [UserCredential](#usercredential)
* [License](#license)

## Intro
A plugin that allows you to add [Firebase Authentification](https://firebase.google.com/docs/auth) to your NativeScript app.

[![image](https://img.youtube.com/vi/8sGY55yxicA/hqdefault.jpg)](https://www.youtube.com/watch?v=8sGY55yxicA)

> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase in your app.


## Installation

Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-auth
```

## Use @nativescript/firebase-auth

Before using Firebase Auth, ensure to initialize Firebase.

To create a new Firebase Auth instance, call the `auth` method on the firebase instance as follow:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth'; // only needs to be imported 1x

const auth = firebase().auth();
```

By default, this allows you to interact with Firebase Auth using the default Firebase App used whilst installing Firebase on your platform. If, however, you'd like to use a secondary Firebase App, call the `auth` method with the `FirebaseApp` instance.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

// create secondary app instance
const config = new FirebaseOptions();
const secondaryApp = firebase.initializeApp(config, 'SECONDARY_APP');

const auth = firebase().auth(secondaryApp);
```

### Listen to the authentication state change

To subscribe to auth state change event, call the `addAuthStateChangeListener` method on your FirebaseAuth class returned by `firebase().auth()`:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase().auth()
  .addAuthStateChangeListener((user) => {
    if (!user) {
      console.log('User is currently signed out!');
    } else {
      console.log('User is signed in!');
    }
  }))
```

### Sign a user in anonymously

To sign a user in anonymously, call the `signInAnonymously` method on the instance of the FirebaseAuth class returned by `firebase().auth()`.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase()
	.auth()
	.signInAnonymously()
	.then((cred: [UserCredential]()) => {})
	.catch((error) => {});
```

### Create a user account with email and password

> **Note** To authenticate a user with email and password, enable `Email/Password` sign-in provider Firebase Console following the steps below: <br> 1. Go to Firebase Console. <br> 2. Click on your project. <br> 3. On the left sidebar, select `Authentication`. <br> 4. Click on the `Sign-in method` tab. <br> 5. Click on the `Email\password` provider. <br> 5. Turn `Enable` switch on.

Next, to create a user account with an email and password, call the `createUserWithEmailAndPassword` method on the FirebaseAuth instance(`firebase().auth()`) passing it the user's email and secure password.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase()
	.auth()
	.createUserWithEmailAndPassword('myemail@myemail.com', 'password')
	.then((cred: [UserCredential]()) => {})
	.catch((error) => {});
```

#### Sign in a user with email and password

To sign in a user with their registered email and password, call `signInWithEmailAndPassword` method, with the email and password, on `firebase().auth()`

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase()
	.auth()
	.signInWithEmailAndPassword('myemail@myemail.com', 'password')
	.then((cred: [UserCredential]()) => {})
	.catch((error) => {});
```

#### Send a user's email verification email

To send an email to the user to request them to verify their email, call the `sendEmailVerification` method on `User` object.

```ts
const user = firebase().auth().currentUser;

if (user && !user.emailVerified) {
	user.sendEmailVerification();
}
```

### Sign a user out
To sign a user out, call the `signOut` method on `firebase().auth()`.

```ts
firebase().auth().signOut()
.then(res => {
  if(res) {
    // user signed out
    return
  }
  // else do staff
});

// OR

let signedOut = await firebase().auth().signOut();
```

### Sign in a user with Apple

Apple announced that any applications using 3rd party login services (such as Facebook, Twitter, Google etc) must also have an Apple Sign-In method. Apple Sign-In is not required for Android devices.

- Before you begin [configure Sign In with Apple](https://firebase.google.com/docs/auth/ios/apple#configure-sign-in-with-apple) and [enable Apple as a sign-in provider](https://firebase.google.com/docs/auth/ios/apple#enable-apple-as-a-sign-in-provider).

- Next, ensure that the app has the [Sign in with Apple capability](https://developer.apple.com/documentation/xcode/configuring-sign-in-with-apple#Add-the-Sign-in-with-Apple-capability-to-your-app).


- Install the `@nativescript/apple-sign-in` plugin. Use the `signIn` method from the plugin to get the user's credentials from Apple.
- Create an AuthCredential instance from the user's credentials. Call the `signInWithCredential` method passing it the Apple credentials. 

```ts
import { firebase } from '@nativescript/firebase-core';
import { AppleAuthProvider } from '@nativescript/firebase-auth';
import { signIn, User } from "@nativescript/apple-sign-in";

signIn(
    {
        scopes: ["EMAIL", "FULLNAME"]
    })
    .then((result: User) => {
		const oauthCredential = AppleAuthProvider.credential(result.identityToken, result.nonce);

		firebase().auth().signInWithCredential(oauthCredential);
    })
    .catch(err => console.log("Error signing in: " + err));
```

### Sign in with Facebook account

- Before getting started, follow the steps at [Facebook Developer App](https://developers.facebook.com/apps/) to enable Facebook login and obtain the Facebook `App ID` and `App secret` that you need for setting the Facebook sign-in provider.

- Enable the `Facebook sign-in provider` by following the steps below:
	1. Go to [Firebase Console](https://console.firebase.google.com).
	2. Click on your project.
	3. On the left sidebar, select `Authentication`. 
	4. Click on the `Sign-in method` tab. 
	5. Click on the `Facebook` provider.
	6. Switch on `Enable`
	7. Enter your `App ID` and `App secret`, and click on `Save`. 

- Install the `@nativescript/facebook` plugin and call the `logInWithPermissions` method on the `LoginManager` class to get the user's credentials from Facabook that you pass to Firebase.

```ts
import { firebase } from '@nativescript/firebase-core';
import { FacebookAuthProvider } from '@nativescript/firebase-auth';
import { LoginManager, AccessToken } from '@nativescript/facebook';


LoginManager.logInWithPermissions(['public_profile', 'email']).then((result) => {
	// Once signed in, get the users AccesToken
	const data = await AccessToken.currentAccessToken();

	// Create a Firebase credential with the AccessToken
	const facebookCredential = FacebookAuthProvider.credential(data.tokenString);

	// Sign-in the user with the credential
	return firebase().auth().signInWithCredential(facebookCredential);
});


```

> **Note:** Firebase will not set the User.emailVerified property to true if your user logs in with Facebook. Should your user login using a provider that verifies email (e.g. Google sign-in) then this will be set to true.

### Sign in with Twitter account

- Before you authenticate the user with their Twitter account, follow steps `1-5` at [Before you begin](https://firebase.google.com/docs/auth/android/twitter-login?hl=en&authuser=0#before_you_begin) to enable the `Twitter` sign-in provider.

- Install the `@nativescript/twitter` plugin and call the `logIn` method on the `TwitterSignIn` class to get the user's credentials from Twitter, as shown below, that you pass to Firebase.

```ts
import { firebase } from '@nativescript/firebase-core';
import { TwitterAuthProvider } from '@nativescript/firebase-auth';
import { Twitter, TwitterSignIn } from '@nativescript/twitter';

Twitter.init('TWITTER_CONSUMER_KEY', 'TWITTER_CONSUMER_SECRET'); // called earlier in the app

// Perform the login request
TwitterSignIn.logIn().then((data) => {
	const twitterAuthCredential = TwitterAuthProvider.credential(data.authToken, data.authTokenSecret);

	firebase().auth().signInWithCredential(twitterAuthCredential);
});


```

### Sign in with GitHub account

- Set up a GitHub OAuth App from your GitHub Developer Settings and enable `GitHub` sign-in provider by following steps 1-5 at [Before you begin using GitHub](https://firebase.google.com/docs/auth/android/github-auth?hl=en&authuser=0#before_you_begin)
A 3rd party library is required to both install the GitHub SDK and trigger the authentication flow. The `credential` method of the `GithubAuthProvider` class achieves that.

- Call the `signInWithCredential` method on `firebase().auth()` passing it the GitHub credentials.

```ts
import { firebase } from '@nativescript/firebase-core';
import { GithubAuthProvider } from '@nativescript/firebase-auth';
const githubAuthCredential = GithubAuthProvider.credential(token);

firebase().auth().signInWithCredential(githubAuthCredential);
```

### Sign in with Google account

Most configuration is already set up when using Google Sign-In with Firebase. However, you need to ensure your machine's SHA1 key has been configured for use with Android. You can see how to generate the key on the [Authenticating Your Client documentation](https://developers.google.com/android/guides/client-auth).

- Install the `nativescript/google-signin` plugin, configure Google Sign-in by calling the `configure` method, sign in the user to their Google account to obtain the ID and access tokens. Pass the obtained tokens to Firebase.
```ts
import { firebase } from '@nativescript/firebase-core';
import { GoogleAuthProvider } from '@nativescript/firebase-auth';
import { GoogleSignin } from '@nativescript/google-signin';

GoogleSignin.configure(); // called earlier in the app

GoogleSignin.signIn().then((user) => {
	const credential = GoogleAuthProvider.credential(user.idToken, user.accessToken);

	firebase().auth().signInWithCredential(credential);
});
```

### Phone number authentication

Phone authentication allows users to sign in to Firebase using their phone as the authenticator. An SMS message containing a unique code is sent to the user (using the provided phone number). Once the code has been authorized, the user can sign in into Firebase.

> **Note:** Phone numbers that end users provide for authentication will be sent and stored by Google to improve spam and abuse prevention across Google services, including , but not limited to Firebase. Developers should ensure they have the appropriate end-user consent prior to using the Firebase Authentication phone number sign-in service.

Firebase Phone Authentication is not supported in all countries. Please see their [FAQs](https://firebase.google.com/support/faq/#develop) for more information.

#### Phone number auth setup

Before starting with Phone Authentication, ensure you have followed these steps:

1. Enable Phone as a Sign-In method in the [Firebase console](https://console.firebase.google.com/u/0/project/_/authentication/providers).
2. **Android**: If you haven't already set your app's SHA-1 hash in the [Firebase console](https://console.firebase.google.com/), do so. See [Authenticating Your Client](https://developers.google.com/android/guides/client-auth) for information about finding your app's SHA-1 hash.
3. **iOS**: In Xcode, [enable push notifications](http://help.apple.com/xcode/mac/current/#/devdfd3d04a1) for your project & ensure your APNs authentication key is [configured with Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/ios/certs). To view an in-depth explanation of this step, view the [Firebase iOS Phone Auth](https://firebase.google.com/docs/auth/ios/phone-auth) documentation.

**Note**; Phone number sign-in is only available for use on real devices and the web. To test your authentication flow on device emulators, please see [Testing](#testing).


#### Sign in user with phone number

The user's phone number must be first verified before the user can either sign in or link their account with a PhoneAuthCredential. Verify the phone number by calling the `verifyPhoneNumber` method with the number. Once the number is verified, pass the verification id and code to Firebase.

```ts
import { PhoneAuthProvider } from '@nativescript/firebase-auth';
PhoneAuthProvider.provider()
	.verifyPhoneNumber('+44 7123 123 456')
	.then((verificationId) => {
		// present ui to allow user to enter verificationCode
		// use the verificationCode entered by the user to create PhoneAuthCredentials
		const credential = PhoneAuthProvider.provider().credential(verificationId, verificationCode);
		firebase().auth().signInWithCredential(credential);
	});
```

#### Testing phone number auth

Firebase provides support for locally testing phone numbers:

- On the Firebase Console, enable the "Phone" authentication provider and click on the "Phone numbers for testing" dropdown by following the steps at []().

- Enter a new phone number (e.g. +44 7444 555666) and a test code (e.g. 123456).
If providing a test phone number to either the `verifyPhoneNumber` or `signInWithPhoneNumber` methods, no SMS will be sent. You can instead provide the test code directly to the `PhoneAuthProvider` or with `signInWithPhoneNumbers` confirmation result handler.

## API
### Auth class

#### Properties

| Property | Type | Description
|----------|------|-------------
| `app`| `FirebaseApp` | _readonly_
| `currentUser`| [User](#user) \| `null` | _readonly_
| `languageCode`| `boolean` | _readonly_
| `settings` | [AuthSettings]()|  _readonly_
| `tenantId` | `string` |  A _readonly_ only property that returns the tenant ID of the Auth class instance. Read more at [tenantId](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#tenantid).

#### Methods
| Method | Returns | Description
|----------|------|-------------
| `useEmulator(host: string, port: number)` | `void` | For the description, see [useEmulator](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#useemulator) on the Firebase documentation.
| `applyActionCode(code: string)` | `Promise<void>` | For the description, see [applyActionCode](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#applyactioncode) on the Firebase documentation.
| `checkActionCode(code: string)` | Promise<[ActionCodeInfo]()> | For the description, see [checkActionCode](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#checkactioncode) on the Firebase documentation.
| `confirmPasswordReset(code: string, newPassword: string)` | `Promise<void>` | For the description, see [confirmPasswordReset](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#confirmpasswordreset) on the Firebase documentation.
| `createUserWithEmailAndPassword(email: string, password: string)` | Promise<[UserCredential](#usercredential)> | For the description, see [createUserWithEmailAndPassword](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword) on the Firebase documentation.
| `fetchSignInMethodsForEmail(email: string)` | `Promise<string[]>` | For the description, see [fetchSignInMethodsForEmail](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#fetchsigninmethodsforemail) on the Firebase documentation.
| `isSignInWithEmailLink(emailLink: string)` | `boolean` | For the description, see [isSignInWithEmailLink](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#issigninwithemaillink) on the Firebase documentation.
| `addAuthStateChangeListener(listener: (user: User) => void)` | `void` | For the description, see [onAuthStateChanged](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged) on the Firebase documentation.
| `removeAuthStateChangeListener(listener: (user: User) => void)` | `void` | 
| `addIdTokenChangeListener(listener: (user: User) => void)` | `void` | For the description, see [onIdTokenChanged](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onidtokenchanged) on the Firebase documentation.
| `removeIdTokenChangListener(listener: (user: User) => void)` | `void` | 
| `sendPasswordResetEmail(email: string, actionCodeSettings?: ActionCodeSettings)` | `Promise<void>` | For the description, see [sendPasswordResetEmail](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#sendpasswordresetemail) on the Firebase documentation.
| `sendSignInLinkToEmail(email: string, actionCodeSettings?: ActionCodeSettings)` | `Promise<void>` | For the description, see [sendSignInLinkToEmail(](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#sendsigninlinktoemail) on the Firebase documentation.
| `signInAnonymously()` | Promise<[UserCredential](#usercredential)> | For the description, see [signInAnonymously](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinanonymously) on the Firebase documentation.
| `signInWithProvider(provider: OAuthProvider)` | Promise<[UserCredential](#usercredential)> | 
| `getProviderCredential(provider: OAuthProvider)` | Promise<[OAuthCredential](#oauthcredential)> |
| `signInWithCredential(credential: AuthCredential)` | Promise<[UserCredential](#usercredential)> | For the description, see [signInWithCredential](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithcredential)  on the Firebase documentation.
| `signInWithCustomToken(customToken: string)` | Promise<[UserCredential](#usercredential)> | For the description, see [signInWithCustomToken](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithcustomtoken) on the Firebase documentation.
| `signInWithEmailAndPassword(email: string, password: string)` | Promise<[UserCredential](#usercredential)> | For the description, see [signInWithEmailAndPassword](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword) on the Firebase documentation.
| `signInWithEmailLink(email: string, emailLink: string)` | Promise<[UserCredential](#usercredential)> | For the description, see [signInWithEmailLink](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemaillink) on the Firebase documentation.
| `signOut()` | `boolean` | Signs the user out.
| `useUserAccessGroup(userAccessGroup: string)` | `Promise<void>` |
| `verifyPasswordResetCode(code: string)` | `Promise<string>` | For the description, see [verifyPasswordResetCode](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#overifypasswordreset) on the Firebase documentation.


### User
The user object has the following members.

#### Properties

| Property | Type | Description
|----------|------|-------------
| `uid`| `string` | _readonly_
| `displayName`| `string` | _readonly_
| `anonymous`| `boolean` | _readonly_
| `emailVerified`| `boolean` | _readonly_
| `email`| `string` | _readonly_
| `phoneNumber`| ` string` | _readonly_
| `providerId`| `string` | _readonly_
| `photoURL`| `string` | _readonly_
| `metadata`| UserMetadata | _readonly_` 
| `providerData`| UserInfo[] | _readonly_

#### Methods

| Method | Returns | Description
|----------|------|-------------
| `delete()` | `Promise<void>` | For the description, see [delete](https://firebase.google.com/docs/reference/js/v8/firebase.User#delete)  on the Firebase documentation.
| `getIdToken(forceRefresh?: undefined \| false \| true)` | `Promise<string>` | For the description, see [getIdToken](https://firebase.google.com/docs/reference/js/v8/firebase.User#getidtoken) on the Firebase documentation.
| `getIdTokenResult(forceRefresh?: undefined \| false \| true)` | Promise<[AuthTokenResult]()> |  
| `linkWithCredential(credential: AuthCredential)` | Promise<[UserCredential](#usercredential)> | For the description, see [linkWithCredential](https://firebase.google.com/docs/reference/js/v8/firebase.User#linkwithcredential) on the Firebase documentation.
| `reauthenticateWithProvider(provider: OAuthProvider)` | Promise<[UserCredential](#usercredential)> | 
| `reauthenticateWithCredential(credential: AuthCredential)` | Promise<[UserCredential](#usercredential)> | For the description, see [reauthenticateWithCredential](https://firebase.google.com/docs/reference/js/v8/firebase.User#reauthenticatewithcredintial) on the Firebase documentation.
| `reload()` | `Promise<void>` | For the description, see [reload](https://firebase.google.com/docs/reference/js/v8/firebase.User#reload) on the Firebase documentation.
| `sendEmailVerification(actionCodeSettings?: ActionCodeSettings)` | `Promise<void>` | For the description, see [sendEmailVerification](https://firebase.google.com/docs/reference/js/v8/firebase.User#sendemailverification) on the Firebase documentation.
| `unlink(providerId: string)` | Promise<[User](#user)> | For the description, see [unlink](https://firebase.google.com/docs/reference/js/v8/firebase.User#unlink) on the Firebase documentation.
`updateEmail(email: string)` | `Promise<void>` | For the description, see [updateEmail](https://firebase.google.com/docs/reference/js/v8/firebase.User#updateemail) on the Firebase documentation.
| `updatePassword(password: string)` | ` Promise<void>` | For the description, see [updatePassword](https://firebase.google.com/docs/reference/js/v8/firebase.User#updatepassword) on the Firebase documentation.
| `updatePhoneNumber(credential: AuthCredential)` | `Promise<void>` | For the description, see [updatePhoneNumber](https://firebase.google.com/docs/reference/js/v8/firebase.User#updatephonenumber) on the Firebase documentation.
| `updateProfile(updates: UserProfileChangeRequest)` | `Promise<void>` | For the description, see [updateProfile](https://firebase.google.com/docs/reference/js/v8/firebase.User#updateprofile) on the Firebase documentation.
| `verifyBeforeUpdateEmail(email: string, actionCodeSettings?: ActionCodeSettings)` | `Promise<void>` | For the description, see [verifyBeforeUpdateEmail](https://firebase.google.com/docs/reference/js/v8/firebase.User#verifybeforeupdateemail) on the Firebase documentation.

### UserCredential

| Property | Type | Description
|----------|------|-------------
| `additionalUserInfo` |<[AdditionalUserInfo](#additionaluserinfo)> |
| `user` |<[User](#user)> |
| `credential` |<[AuthCredential](#authcredential)> |

#### AdditionalUserInfo

| Property | Type | Description
|----------|------|-------------
| `newUser` | `boolean` |
| `profile` | `Record<string, any>` |
| `providerId` | `string` |
| `username` | `string` |

#### AuthCredential
| Property | Type | Description
|----------|------|-------------
| `ios` | `FIRAuthCredential` ` | |_readonly_
| `android` | `com.google.firebase.auth.AuthCredential`| _readonly_
| `signInMethod` | `string` | _readonly_
| `idToken` | `string` | _readonly_
| `accessToken` | `string` | _readonly_
| `secret` | `string` | _readonly_

#### OAuthCredential
| Property | Type | Description
|----------|------|-------------
| `ios` | |_readonly_
| `android` | |_readonly_
| `signInMethod` | `string` |
| `idToken` | `string` | _readonly_
| `accessToken` | `string` |_readonly_
| `secret` | `string` |_readonly_

## License

Apache License Version 2.0
