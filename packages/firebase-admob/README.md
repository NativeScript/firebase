
# @nativescript/firebase-admob

A plugin that allows you to monetize your NativeScript app by integrating the [Google Mobile Ads SDK](https://developers.google.com/admob/android/sdk) into the app. 

> **Note:** Before you use this plugin, follow the instructions at [@nativescript/firebase-core](../firebase-core/) to setup your app for Firebase.

The Google Mobile Ads SDK for NativeScript currently supports loading and displaying the following ads:
- [Banner](#banner-ads)
- [Interstitial (full-screen)](#interstitial-ad)
- [Native](#native-ads)
- [Rewarded](#rewarded-ads)

Note: This plugin also supports Google Ad Manager. 
<!-- If you are interested in creating and loading an ad with Ad Manager, follow the same prerequisites, platform setup, mobile ads SDK initialization steps outlined in this documentation. , and then see creating and loading an ad with Ad Manager for further instructions. -->

## Installation
To install `@nativescript/firebase-admob`, run the following command in the root directory of the  project:

```cli
npm install @nativescript/firebase-admob
```

## Setup Admob for iOS

Update your `Info.plist` file at `App_Resources/iOS` with a `GADApplicationIdentifier` key with a string value of your AdMob app ID ([identified in the AdMob UI](https://support.google.com/admob/answer/7356431)).

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-3940256099942544~1458002511</string>
```

For more information about configuring the `Info.plist` and setting up your App ID, see [Update your Info.plist](https://developers.google.com/admob/ios/quick-start#update%5C_your%5C_infoplist).

## Setup Admob for Android

Add AdMob App ID ([identified in the AdMob UI](https://support.google.com/admob/answer/7356431)) to the app's `AndroidManifest.xml` file, found at `App_Resources/Android/src/main`. Failure to do so will result in a crash on app launch. Add the ID by adding a `<meta-data>` tag with name `com.google.android.gms.ads.APPLICATION_ID`, as shown below. For `android:value` insert your own AdMob App ID in quotes.

```xml
<application>
  <!-- Sample AdMob App ID: ca-app-pub-3940256099942544~3347511713 -->
  <meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy"
  />
</application>
```

See step 3. of [Configure your app](https://developers.google.com/admob/android/quick-start#import_the_mobile_ads_sdk) for more information about configuring AndroidManifest.xml and setting up the App ID.

## Using @nativescript/firebase-admob

### 1. Initialize the Mobile Ads SDK

Before loading ads, initialize the Mobile Ads SDK by calling the static [init](#init) method on the Admob class. This needs to be done only once, ideally right before the app boots, in the `main.ts` file.

```ts
import { Admob } from '@nativescript/firebase-admob'

Admob.init()
```

### 2. Add your preferred Ad Format

The Mobile Ads SDK is now imported and you're ready to implement an ad. Click any of the links below to get detailed implementation steps for your desired ad format.

- [Banner](#add-a-banner-ad)
- [Interstitial (full-screen)](#interstitial-ad)
- [Native](#native-ads)
- [Rewarded](#rewarded-ads)

### Add a Banner Ad

Banner ads are rectangular ads that appear at the top or bottom of the device screen. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period of time. If you're new to mobile advertising, they're a great place to start.

#### Always test with test ads

>**Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

The easiest way to load test ads is to use our dedicated test ad unit ID for banners:

- **Android**: https://developers.google.com/admob/android/test-ads#sample\_ad\_units
- **iOS**: https://developers.google.com/admob/ios/test-ads#demo\_ad\_units

It's been specially configured to return test ads for every request, and you're free to use it in your own apps while coding, testing, and debugging. Just make sure you replace it with your own ad unit ID before publishing your app.

#### Instantiate a Banner Ad

To instantiate a banner ad, add the `BannerAd` view to your markup. The `BannerAd` requires the following properties: an `unitId`, an `BannerAdSize`, an `AdRequest`, and a `BannerAdListener`. Below are examples of adding a Banner ad in different flavors of JS supported by {N}.

#### Core

> **Important:** Ensure you've included xmlns:ui="@nativescript/firebase-admob" on the Page element

```xml
<ui:BannerAd
  height="100"
  width="100"
  unitId="{{bannerAdUnit}}"
  layoutChanged="{{bannerLoaded}}"
/>
```

#### Angular

```ts
import { AdmobModule } from '@nativescript/firebase-admob/angular';

@NgModule({
    imports: [
    AdmobModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
```

```html
<BannerAd
  height="100"
  width="100"
  [unitId]="bannerAdUnit"
  (layoutChanged)="bannerLoaded($event)">
</BannerAd>
```
#### Vue

```ts
import Vue from 'nativescript-vue'
import Admob from '@nativescript/firebase-admob/vue'

Vue.use(Admob)

```

```html
<BannerAd
  height="100"
  width="100"
  :unitId="bannerAdUnit"
  @layoutChanged="bannerLoaded"/>
```

#### Banner Sizes

The table below lists the standard banner sizes.

|         Size in dp (WxH)         |   Description    |                   AdSize Constant                    |
| :------------------------------: | :--------------: | :--------------------------------------------------: |
|              320x50              | Standard Banner  |                        BANNER                        |
|             320x100              |   Large Banner   |                     LARGE_BANNER                     |
|             320x250              | Medium Rectangle |                   MEDIUM_RECTANGLE                   |
|              468x60              | Full-Size Banner |                     FULL_BANNER                      |
|              728x90              |   Leaderboard    |                     LEADERBOARD                      |
| Provided width x Adaptive height | Adaptive Banner  | Use createAnchoredAdaptiveBanner(width, orientation) |
| Provided width x Adaptive height | Adaptive Banner  |  Use createInLineAdaptiveBanner(width, orientation)  |

To define a custom banner size, set your desired AdSize, as shown here:

```ts
const adSize = new BannerAdSize(300, 50)
```

#### Banner Ad Events

Through the use of the emitted events, you can listen for lifecycle events, such as when an ad is loaded. This example implements each method and logs a message to the console:

```ts
const bannerView = event.object;

// Called when an ad is successfully received.
bannerView.on('adLoaded', (args) =>{
console.log('Ad loaded.'),
});

 // Called when an ad request failed.
bannerView.on('adFailedToLoad', (args) =>{
   console.log('Ad failed to load: ', args.error);
});

 // Called when an ad removes an overlay that covers the screen.
bannerView.on('adClosed', (args) =>{
   console.log('Ad closed.');
});

 // Called when an impression occurs on the ad.
bannerView.on('adImpression', (args) =>{
   console.log('Ad impression.');
});

 // Called when an tap/touch/click occurs on the ad.
bannerView.on('adClicked', (args) =>{
   console.log('Ad tapped');
});

```

### Load Banner Ad

After a BannerAd is instantiated, load() must be called before it can be shown on the screen.

```ts
bannerView.load()
```

### Add an Interstitial Ad

Full-screen ads that cover the interface of an app until closed by the user. They're best used at natural pauses in the flow of an app's execution, such as between levels of a game or just after a task is completed.

#### Always test with test ads

When building and testing your apps, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

The easiest way to load test ads is to use our dedicated test ad unit ID for interstitials:

- **Android**: https://developers.google.com/admob/android/test-ads#sample\_ad\_units
- **iOS**: https://developers.google.com/admob/ios/test-ads#demo\_ad\_units

It's been specially configured to return test ads for every request, and you're free to use it in your own apps while coding, testing, and debugging. Just make sure you replace it with your own ad unit ID before publishing your app.

### Load an Interstitial Ad

Loading an InterstitialAd requires an adUnitId and a optional RequestOptions. An example is shown below as well as more information on each parameter following.

```ts
import { InterstitialAd } from '@nativescript/firebase-admob'
const ad = InterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/4411468910')
```

### Interstitial Ad Events

Through the use of the emitted events, you can listen for lifecycle events, such as when the ad is shown or dismissed. Set InterstitialAd.onAdEvent before showing the ad to receive notifications for these events. This example implements each method and logs a message to the console:

```ts
ad.onAdEvent((event, error, data) => {
  switch (event) {
    case AdEventType.LOADED:
      break
    case AdEventType.CLOSED:
      break
    case AdEventType.OPENED:
      break
    case AdEventType.IMPRESSION:
      break
    case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
      break
  }
})
ad.load()
```

### Display an Interstitial Ad

An InterstitialAd is displayed as an Overlay on top of all app content and is statically placed. Which means it can not be added to the view. You can choose when to show the ad by calling show().

```ts
ad.onAdEvent((event, error, data) => {
  if (event === AdEventType.LOADED) {
    console.log('loaded')
    ad.show()
  } else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
    console.error('InterstitialAd failed to load:', error)
  }
})
ad.load()
```

### Next steps

- See [Interstitial best practices](https://www.youtube.com/watch?v=r2RgFD3Apyo&index=5&list=PLOU2XLYxmsIKX0pUJV3uqp6N3NeHwHh0c) and [interstitial ad guidance](https://support.google.com/admob/answer/6066980).
- Check out an [Interstitial ads case study](https://admob.google.com/home/resources/freaking-math-powers-revenue-increase-with-google-admob-support/).
- If you haven't already, create your own interstitial ad unit in the [AdMob UI](https://apps.admob.com/).

## Native Ads

Native ads are ad assets that are presented to users via UI components that are native to the platform. They're shown using the same types of views with which you're already building your layouts, and can be formatted to match the visual design of the user experience in which they live. In coding terms, this means that when a native ad loads, your app receives a NativeAd object that contains its assets, and the app (rather than the Google Mobile Ads SDK) is then responsible for displaying them.

Broadly speaking, there are two parts to successfully implementing Native Ads: loading an ad via the SDK and displaying the ad content in your app. This guide is concerned with using the SDK to load native ads.

#### Core

> **Important:** Ensure you've included `xmlns:ui="@nativescript/firebase-admob"` on the Page element

```xml
<ui:NativeAdView height="400" loaded="{{nativeAdLoaded}}" />
```

### Always test with test ads

When building and testing your apps, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

The easiest way to load test ads is to use our dedicated test ad unit ID for native ads:

- **Android**: https://developers.google.com/admob/android/test-ads#sample\_ad\_units
- **iOS**: https://developers.google.com/admob/ios/test-ads#demo\_ad\_units
  It's been specially configured to return test ads for every request, and you're free to use it in your own apps while coding, testing, and debugging. Just make sure you replace it with your own ad unit ID before publishing your app.

### Instantiate a Native Ad

A NativeAdLoader requires an adUnitId, an optional RequestOptions, an AdRequest, and an optional NativeAdOptions. An example is shown below as well as more information on each parameter following.

```ts
const loader = new NativeAdLoader('ca-app-pub-3940256099942544/3986624511', null, {
  nativeAdOptions: {
    adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT
  }
})
```

#### Native Ad Events

Through the use of NativeAdListener, you can listen for lifecycle events, such as when an ad is closed or the user leaves the app. This example implements each method and logs a message to the console:

```xml
<ui:NativeAdView height="400" loaded="{{nativeAdLoaded}}">
  <GridLayout height="300" width="300">
    <Label id="headLineView" />
    <ui:MediaView id="mediaView" height="100%"/>
    <Label id="bodyView" />
    <Button id="callToActionView" />
  </GridLayout>
</ui:NativeAdView>
```

```ts
nativeAdLoaded(event){
const view = event.object;
loader.onAdEvent((event, error, data) => {
	if (event === NativeAdEventType.LOADED) {
		const ad = data as NativeAd;
		const hlv = view.getViewById('headLineView');
		hlv.text = ad.headline;
		const mv = view.getViewById('mediaView');
		view.mediaView = mv;
		mv.mediaContent = ad.mediaContent;
		const but = view.getViewById('callToActionView');
		view.callToActionView = but;
		but.text = ad.callToAction;
		const bv = view.getViewById('bodyView');
		bv.text = ad.body;
		view.nativeAd = ad;
		console.log('nativead loaded');
	} else if (event === 'adFailedToLoad') {
		console.log('nativead failed to load', error);
	}
});
}
```

### NativeAdOptions

NativeAdLoader have an optional argument, nativeAdOptions, which can be used to set specific options on the native ad.

returnUrlsForImageAssets

If set to `true`, the SDK will not load image asset content and native ad image URLs can be used to fetch content. Defaults to false.

multipleImages

Some image assets will contain a series of images rather than just one. By setting this value to true, your app indicates that it's prepared to display all the images for any assets that have more than one. By setting it to false (the default) your app instructs the SDK to provide just the first image for any assets that contain a series.

If no NativeadOptions are passed in when initializing a NativeAd, the default value for each property will be used.

`adChoicesPlacement`

The [AdChoices overlay](https://developers.google.com/admob/android/native/advanced#adchoices_overlay) is set to the top right corner by default. Apps can change which corner this overlay is rendered in by setting this property to one of the following:

- AdChoicesPlacement.TOP_RIGHT
- AdChoicesPlacement.TOP_LEFT
- AdChoicesPlacement.BOTTOM_RIGHT
- AdChoicesPlacement.BOTTOM_LEFT

`videoOptions`

Can be used to set video options for video assets returned as part of a native ad.
```ts
videoOptions?: {
    startMuted?: boolean;
    clickToExpandRequested?: boolean;
    customControlsRequested?: boolean;
};
```

Remember that if an ad contains a video, this video _must_ be shown. 

```ts
ad.mediaContent.hasVideoContent = true | false
```

`mediaAspectRatio`

This sets the aspect ratio for image or video to be returned for the native ad. Setting mediaAspectRatio to one of the following constants will cause only ads with media of the specified aspect ratio to be returned:

- MediaAspectRatio.LANDSCAPE
- MediaAspectRatio.PORTRAIT
- MediaAspectRatio.SQUARE
- MediaAspectRatio.ANY

If not set, ads with any aspect ratio will be returned.

### Load Native Ad

```ts
loader.load()
```

That's it! Your app is now ready to display native ads.

### Next steps

- Learn more about native ads in our [native ad playbook](https://admob.google.com/home/resources/native-ads-playbook/).
- See [native ads policies and guidelines](https://support.google.com/admob/answer/6329638) for implementing native ads.
- Check out some customer success stories: [Case study 1](https://admob.google.com/home/resources/alarmmon-achieves-higher-rpm-with-admob-triggered-native-ads/), [Case Study 2](https://admob.google.com/home/resources/linghit-limited-doubles-ad-revenue-with-admob-native-ads/)

## Rewarded Ads

Rewarded ads are ads that users have the option of interacting with [in exchange for in-app rewards](https://support.google.com/admob/answer/7313578).

### Always test with test ads

When building and testing your apps, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

The easiest way to load test ads is to use our dedicated test ad unit ID for rewarded:

- **Android**: https://developers.google.com/admob/android/test-ads#sample\_ad\_units
- **iOS**: https://developers.google.com/admob/ios/test-ads#demo\_ad\_units

It's been specially configured to return test ads for every request, and you're free to use it in your own apps while coding, testing, and debugging. Just make sure you replace it with your own ad unit ID before publishing your app.

### Load a Rewarded Ad

```ts
import { RewardedAd } from '@nativescript/firebase-admob'
const ad = RewardedAd.createForAdRequest('ca-app-pub-3940256099942544/1712485313')
ad.onAdEvent((event, error, data) => {
  if (event === AdEventType.LOADED) {
    console.log('rewarded', 'loaded')
    ad.show()
  } else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
    console.error('loading error', error)
  }
})
ad.load()
```

#### Rewarded Ad Events

Through the use of the emitted events, you can listen for lifecycle events, such as when the ad is shown or dismissed. Set RewardedAd.onAdEvent before showing the ad to receive notifications for these events. This example implements each method and logs a message to the console:

```ts
ad.onAdEvent((event, error, data) => {
  switch (event) {
    case AdEventType.LOADED:
      break
    case AdEventType.CLOSED:
      break
    case AdEventType.OPENED:
      break
    case AdEventType.IMPRESSION:
      break
    case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
      break
  }
})
ad.load()
```

#### Display a RewardedAd

A RewardedAd is displayed as an Overlay is displayed on top of all app content and is statically placed. Which means it can not be displayed this way can't be added to the view. You can choose when to show the ad by calling show(). onAdEvent with the event ('rewarded_earned_reward') is invoked when the user earns a reward. Be sure to implement this and reward the user for watching an ad.

```ts
ad.onAdEvent((event, error, data) => {
  if (event === AdEventType.LOADED) {
    console.log('rewarded', 'loaded')
    ad.show()
  } else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
    console.error('loading error', error)
  } else if (event === RewardedAdEventType.EARNED_REWARD) {
    const rewardItem = data
  }
})
ad.load()
```

### Targeting

The RequestConfiguration object collects the global configuration for every ad request and is applied by firebase().admob().setRequestConfiguration().

### Child-directed setting

For purposes of the [Children's Online Privacy Protection Act (COPPA)](https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy), there is a setting called "tag for child-directed treatment."

As an app developer, you can indicate whether you want Google to treat your content as child-directed when you make an ad request. If you indicate that you want Google to treat your content as child-directed, we take steps to disable IBA and remarketing ads on that ad request. The setting can be used with all versions of the Google Play services SDK via RequestConfiguration.tagForChildDirectedTreatment:

Use the argument `tagForChildDirectedTreatment: true` to indicate that you want your content treated as child-directed for the purposes of COPPA.
Use the argument `tagForChildDirectedTreatment: false` to indicate that you don't want your content treated as child-directed for the purposes of COPPA.
Use the argument `tagForChildDirectedTreatment: undefined` or do not set this tag if you do not wish to indicate how you would like your content treated with respect to COPPA in ad requests.
The following example indicates that you want your content treated as child-directed for purposes of COPPA:

```ts
import { Admob, RequestConfiguration } from '@nativescript/firebase-admob';
const requestConfiguration: RequestConfiguration = {
  tagForChildDirectedTreatment: true
}
Admob.getInstance().requestConfiguration = requestConfiguration;
```

### Users under the age of consent

You can mark your ad requests to receive treatment for users in the European Economic Area (EEA) under the age of consent. This feature is designed to help facilitate compliance with the [General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679). Note that you may have other legal obligations under GDPR. Please review the European Union’s guidance and consult with your own legal counsel. Please remember that Google's tools are designed to facilitate compliance and do not relieve any particular publisher of its obligations under the law. [Learn more about how the GDPR affects publishers](https://support.google.com/admob/answer/7666366).

When using this feature, a Tag For Users under the Age of Consent in Europe (TFUA) parameter will be included in the ad request. This parameter disables personalized advertising, including remarketing, for that specific ad request. It also disables requests to third-party ad vendors, such as ad measurement pixels and third-party ad servers.

The setting can be used via RequestConfiguration.tagForUnderAgeOfConsent

Use the argument `tagForUnderAgeOfConsent: true` to indicate that you want the request configuration to be handled in a manner suitable for users under the age of consent.
Use the argument `tagForUnderAgeOfConsent: false` to indicates that you don't want the request configuration to be handled in a manner suitable for users under the age of consent.
Use the argument `tagForUnderAgeOfConsent: undefined` or do not set this tag to indicate that you have not specified whether the ad request should receive treatment for users in the European Economic Area (EEA) under the age of consent. The following example indicates that you want TFUA included in your ad request:

```ts
import { Admob, RequestConfiguration } from '@nativescript/firebase-admob';
const requestConfiguration: RequestConfiguration = {
  tagForUnderAgeOfConsent: true
}
Admob.getInstance().requestConfiguration = requestConfiguration;
```

The tags to enable the Child-directed setting and `tagForUnderAgeOfConsent` should not both simultaneously be set to true. If they are, the child-directed setting takes precedence.

### Ad Content Filtering

The setting can be set via RequestConfiguration.maxAdContentRating:

AdMob ads returned for these requests have a content rating at or below that level. The possible values for this network extra are based on [digital content label classifications](https://support.google.com/admob/answer/7562142), and should be one of the following MaxAdContentRating objects:

- MaxAdContentRating.G
- MaxAdContentRating.PG
- MaxAdContentRating.T
- MaxAdContentRating.MA

The following code configures a `RequestConfiguration` object to specify that ad content returned should correspond to a digital content label designation no higher than G:

```ts
import { Admob, MaxAdContentRating, RequestConfiguration } from '@nativescript/firebase-admob';
const requestConfiguration: RequestConfiguration = {
  maxAdContentRating: MaxAdContentRating.G
}
Admob.getInstance().requestConfiguration = requestConfiguration;
```

## License

Apache License Version 2.0
