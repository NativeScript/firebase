# @nativescript/firebase-auth

```cli
ns plugin add @nativescript/firebase-auth
```

## Authentication

### What does it do?

Firebase Authentication provides backend services & easy-to-use SDKs to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

[![image](https://img.youtube.com/vi/8sGY55yxicA/hqdefault.jpg)](https://www.youtube.com/watch?v=8sGY55yxicA)

## Usage

Before using Firebase Auth, you must first have ensured you have initialized Firebase.

To create a new Firebase Auth instance, call the auth method on the firebase instance as follow:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth'; // only needs to be imported 1x

const auth = firebase().auth();
```

By default, this allows you to interact with Firebase Auth using the default Firebase App used whilst installing Firebase on your platform. If however you'd like to use a secondary Firebase App, pass the secondary app instance when calling the auth method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

// create secondary app instance
const config = new FirebaseOptions();
const secondaryApp = firebase.initializeApp(config, 'SECONDARY_APP');

const auth = firebase().auth(secondaryApp);
```

### Authentication state

In many cases, you will need to know about the authentication state of your user, such as whether they're logged in or logged out.

To subscribe to these changes, call the addAuthStateChangeListener() method on your FirebaseAuth instance:

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

### Sign-in methods

#### Anonymous sign-in

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase()
	.auth()
	.signInAnonymously()
	.then((cred: UserCredential) => {})
	.catch((error) => {});
```

#### Email/Password Registration & Sign-in

Email/Password is a common user sign in method for most applications. This requires the user to provide an email address and secure password. Users can register new accounts with a method called createUserWithEmailAndPassword() or sign in to an existing account with signInWithEmailAndPassword().

### Ensure the "Email/Password" sign-in provider is enabled on the Firebase Console.

### Registration

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase()
	.auth()
	.createUserWithEmailAndPassword('myemail@myemail.com', 'password')
	.then((cred: UserCredential) => {})
	.catch((error) => {});
```

### Sign-in

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

firebase()
	.auth()
	.signInWithEmailAndPassword('myemail@myemail.com', 'password')
	.then((cred: UserCredential) => {})
	.catch((error) => {});
```

### Verifying a users email

```ts
const user = firebase().auth().currentUser;

if (user && !user.emailVerified) {
	user.sendEmailVerification();
}
```

### Signing Out

```ts
firebase().auth().signOut();
```

### Other sign-in methods

- [Apple Sign-In.](#Apple)
- [Facebook Sign-In.](#Facebook)
- [Twitter Sign-In.](#Twitter)
- [Google Sign-In.](#Google)
- [Phone Number Sign-In.](#Phone)

#### Apple

Apple announced that any applications using 3rd party login services (such as Facebook, Twitter, Google etc) must also have an Apple Sign-In method. Apple Sign-In is not required for Android devices.

Before you begin [configure Sign In with Apple](https://firebase.google.com/docs/auth/ios/apple#configure-sign-in-with-apple) and [enable Apple as a sign-in provider](https://firebase.google.com/docs/auth/ios/apple#enable-apple-as-a-sign-in-provider).

Next, ensure that your app have the "Sign in with Apple" capability.

```ts
import { firebase } from '@nativescript/firebase-core';
import { OAuthProvider } from '@nativescript/firebase-auth';
const oauthCredential = new OAuthProvider('apple.com');
oauthCredential.credential(appleCredentialIdentityToken /* idToken */, rawNonce /* nonce */);

firebase().auth().signInWithCredential(oauthCredential);
```

#### Facebook

Before getting started setup your [Facebook Developer App](https://developers.facebook.com/apps/) and follow the setup process to enable Facebook Login.

Ensure the "Facebook" sign-in provider is enabled on the [Firebase Console](https://console.firebase.google.com/u/0/project/_/authentication/providers). with the Facebook App ID and Secret set.

A 3rd party library is required to both install the Facebook SDK and trigger the authentication flow.

```ts
import { firebase } from '@nativescript/firebase-core';
import { FacebookAuthProvider } from '@nativescript/firebase-auth';
import { LoginManager, AccessToken } from '@nativescript/facebook';


LoginManager.logInWithPermissions(['public_profile', 'email']).then((result) => {
	// Once signed in, get the users AccesToken
	const data = await AccessToken.getCurrentAccessToken();

	// Create a Firebase credential with the AccessToken
	const facebookCredential = FacebookAuthProvider.credential(data.accessToken);

	// Sign-in the user with the credential
	return auth().signInWithCredential(facebookCredential);

	firebase().auth().signInWithCredential(facebookAuthCredential);
});


```

> **Note:** Firebase will not set the User.emailVerified property to true if your user logs in with Facebook. Should your user login using a provider that verifies email (e.g. Google sign-in) then this will be set to true.

#### Twitter

Ensure the "Twitter" sign-in provider is enabled on the Firebase Console with an API Key and API Secret set.

A 3rd party library is required to both install the Twitter SDK and trigger the authentication flow.

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

#### GitHub

Ensure that you have setup an OAuth App from your GitHub Developer Settings and that the "GitHub" sign-in provider is enabled on the Firebase Console with the Client ID and Secret are set, with the callback URL set in the GitHub app.

A 3rd party library is required to both install the GitHub SDK and trigger the authentication flow.

```ts
import { firebase } from '@nativescript/firebase-core';
import { GithubAuthProvider } from '@nativescript/firebase-auth';
const githubAuthCredential = GithubAuthProvider.credential(token);

firebase().auth().signInWithCredential(githubAuthCredential);
```

#### Google

Most configuration is already setup when using Google Sign-In with Firebase, however you need to ensure your machine's SHA1 key has been configured for use with Android. You can see how to generate the key on the [Authenticating Your Client documentation](https://developers.google.com/android/guides/client-auth).

```ts
import { firebase } from '@nativescript/firebase-core';
import { GoogleAuthProvider } from '@nativescript/firebase-auth';
import { GoogleSignin } from '@nativescript/google-signin';

GoogleSignin.configure(); // called earlier in the app

GoogleSignin.signIn().then((user) => {
	const credential = GoogleAuthProvider.credential(user.accessToken, user.idToken);

	firebase().auth().signInWithCredential(credential);
});
```

### Phone Authentication

Phone authentication allows users to sign in to Firebase using their phone as the authenticator. An SMS message is sent to the user (using the provided phone number) containing a unique code. Once the code has been authorized, the user is able to sign into Firebase.

> **Note:** Phone numbers that end users provide for authentication will be sent and stored by Google to improve spam and abuse prevention across Google service, including to, but not limited to Firebase. Developers should ensure they have the appropriate end-user consent prior to using the Firebase Authentication phone number sign-in service.authentication

Firebase Phone Authentication is not supported in all countries. Please see their [FAQs](https://firebase.google.com/support/faq/#develop) for more information.

#### Setup

Before starting with Phone Authentication, ensure you have followed these steps:

1. Enable Phone as a Sign-In method in the [Firebase console](https://console.firebase.google.com/u/0/project/_/authentication/providers).
2. **Android**: If you haven't already set your app's SHA-1 hash in the [Firebase console](https://console.firebase.google.com/), do so. See [Authenticating Your Client](https://developers.google.com/android/guides/client-auth) for information about finding your app's SHA-1 hash.
3. **iOS**: In Xcode, [enable push notifications](http://help.apple.com/xcode/mac/current/#/devdfd3d04a1) for your project & ensure your APNs authentication key is [configured with Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/ios/certs). To view an in-depth explanation of this step, view the [Firebase iOS Phone Auth](https://firebase.google.com/docs/auth/ios/phone-auth) documentation.

**Note**; Phone number sign-in is only available for use on real devices and the web. To test your authentication flow on device emulators, please see Testing.

### Usage

#### verifyPhoneNumber

The user's phone number must be first verified and then the user can either sign-in or link their account with a PhoneAuthCredential.

```ts
import { PhoneAuthProvider } from '@nativescript/firebase-auth';
PhoneAuthProvider.provider()
	.verifyPhoneNumber('+44 7123 123 456')
	.then((verificationId) => {
		// present ui to allow user to enter verificationCode
		// use the verificationCode entered by the user to create PhoneAuthCredentials
		const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
		firebase().auth().signInWithCredential(credential);
	});
```

#### Testing

Firebase provides support for locally testing phone numbers:

On the Firebase Console, select the "Phone" authentication provider and click on the "Phone numbers for testing" dropdown.
Enter a new phone number (e.g. +44 7444 555666) and a test code (e.g. 123456).
If providing a test phone number to either the verifyPhoneNumber or signInWithPhoneNumber methods, no SMS will actually be sent. You can instead provide the test code directly to the PhoneAuthProvider or with signInWithPhoneNumbers confirmation result handler.

## License

Apache License Version 2.0
