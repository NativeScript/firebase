# @nativescript-asharghi/firebase-app-check

```cli
npm install @nativescript-asharghi/firebase-app-check
```


> **Note**: (iOS) App Check requires you set the minimum iOS Deployment version in ios/Podfile to 11.0 or greater.


### What does it do

App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing. With App Check, devices running your app will use an app or device attestation provider that attests to one or both of the following:

Requests originate from your authentic app
Requests originate from an authentic, untampered device
This attestation is attached to every request your app makes to your Firebase backend resources.

[![image](https://img.youtube.com/vi/Fjj4fmr2t04/hqdefault.jpg)](https://www.youtube.com/watch?v=Fjj4fmr2t04)

This App Check module has built-in support for using the following services as attestation providers:

DeviceCheck on iOS
SafetyNet on Android
App Check currently works with the following Firebase products:

Realtime Database
Cloud Storage
Cloud Functions (callable functions)
The [official Firebase App Check documentation](https://firebase.google.com/docs/app-check) has more information, including about the iOS AppAttest provider, and testing/ CI integration, it is worth a read.

## Usage

### Activate

```ts
import { firebase } from '@nativescript-asharghi/firebase-core';
import { AppCheck } from '@nativescript-asharghi/firebase-app-check';

AppCheck.setProviderFactory(); // call before the fb app is initialized 
firebase.initializeApp()
.then(app =>{
    firebase().appCheck().activate(true);
})


```

 The only configuration possible is the token auto refresh. When you call activate, the provider stays the same but the token auto refresh setting will be changed based on the argument provided.

You must call activate prior to calling any firebase back-end services for App Check to function.


#### Custom Provider


```ts
import { firebase } from '@nativescript-asharghi/firebase-core';
import { AppCheck, AppCheckProviderFactory, AppCheckProvider } from '@nativescript-asharghi/firebase-app-check';


class AppCheckProviderFactoryImpl extends AppCheckProviderFactory {
	createProvider(app: FirebaseApp) {
        // we could potentiall do something with the app 
        return new AppCheckProviderImpl();
    }
}


class AppCheckProviderImpl extends AppCheckProvider {
    getToken(done){
        // do some call probably http
        // finally call done when you're ready passing in a token along with the expirationDate
        done({
            token: someToken,
            expirationDate: someDate 
        })
    }
}



AppCheck.setProviderFactory(new AppCheckProviderFactoryImpl()); // call before the fb app is initialized 
firebase.initializeApp()
.then(app =>{
    firebase().appCheck().activate(true);
})


```




### Automatic Data Collection

App Check has an "tokenAutoRefreshEnabled" setting. This may cause App Check to attempt a remote App Check token fetch prior to user consent. In certain scenarios, like those that exist in GDPR-compliant apps running for the first time, this may be unwanted.

If unset, the "tokenAutoRefreshEnabled" setting will defer to the app's "automatic data collection" setting, which may be set in the Info.plist or AndroidManifest.xml


### Using App Check tokens for non-firebase services

The [official documentation](https://firebase.google.com/docs/app-check/web/custom-resource) shows how to use getToken to access the current App Check token and then verify it in external services.

## License

Apache License Version 2.0
