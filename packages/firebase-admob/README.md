
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

Banner ads are rectangular ads that appear at the top or bottom of the device screen. They stay on screen while users are interacting with the app, and can refresh automatically after a certain period. If you're new to mobile advertising, they're a great place to start.

#### Always test with test ads

>**Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

To enable dedicated test ad unit ID for banners, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

Make sure you replace it with your ad unit ID before publishing your app.

#### Instantiate a Banner Ad

To instantiate a banner ad, add the `BannerAd` view to your markup. The `BannerAd` requires the following properties:
- `unitId`
- `BannerAdSize`
- `AdRequest`
- `BannerAdListener`

 Below are examples of adding a Banner ad in different flavors of JS supported by {N}.

#### Core

Register the plugin namespace in the Page element, access the `BannerAd` view from the namespace and add it to your XML. 

> **Important:** Ensure you've included xmlns:ui="@nativescript/firebase-admob" on the Page element
```xml
<Page xmlns:ui="@nativescript/firebase-admob" >

  <StackLayout>
    <ui:BannerAd
      height="100"
      width="100"
      unitId="{{bannerAdUnit}}"
      layoutChanged="{{bannerLoaded}}"
/>
  </StackLayout>

```

#### Angular
Register the `BannerAd` view by adding its `AdmobModule` to the `imports` array of the `@NgModule` decorator of the component where you want to use the view.

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
Next, add the `BannerAd` view to HTML.

```html
<BannerAd
  height="100"
  width="100"
  [unitId]="bannerAdUnit"
  (layoutChanged)="bannerLoaded($event)">
</BannerAd>
```
#### Vue

Register the `BannerAd` view in the `app.ts` file as follows:

```ts
import { createApp } from 'nativescript-vue';
import Admob from '@nativescript/firebase-admob/vue'
import Home from './components/Home.vue';

const app = createApp(Home)
app.use(Admob)

```

```html
<BannerAd
  height="100"
  width="100"
  :unitId="bannerAdUnit"
  @layoutChanged="bannerLoaded"/>
```

#### Customize the banner size
To define a custom banner size, set your desired AdSize, as shown here:

```ts
const adSize = new BannerAdSize(300, 50)
```

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


#### Listen to banner ad lifecycle events

The plugin enables you to listen to different ad lifecycle events, such as when an ad is loaded. 

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

### Display a banner ad to the user

To display an ad to the user, get the reference to the `BannerAd` view and call the `load` method on it.

```ts
bannerView.load()
```

### Add an Interstitial Ad

Interstitial ads are full-screen ads that cover the interface of an app until closed by the user. They're best used at natural pauses in the flow of an app's execution, such as between levels of a game or just after a task is completed.

#### Always test with test ads

>**Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

To enable dedicated test ad unit ID, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

It's been specially configured to return test ads for every request, and you're free to use it in your own apps while coding, testing, and debugging. Just make sure you replace it with your own ad unit ID before publishing your app.

### Display an Interstitial ad to the user

To display an Interstitial ad to the user, follow the 2 steps below:

1. Import the `InterstitialAd` class from `@nativescript/firebase-admob`.
```ts
import { InterstitialAd } from '@nativescript/firebase-admob'
```
2. Create an Interstitial ad instance.

Create an Interstitial ad instance by calling the static `createForAdRequest` on the class. The `createForAdRequest` method requires an adUnitId and you can optionally pass a [RequestOptions]() object.

```ts
import { InterstitialAd } from '@nativescript/firebase-admob'
const ad = InterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/4411468910')
```
3. Listen to an Interstitial ad lifecycle events

To listen for the ad lifecycle events, such as when the ad is display or dismissed, call the `onAdEvent` method on the ad instance, before displaying the ad, passing it a callback function to handle the ad lifecycle events.

```ts
import { InterstitialAd } from '@nativescript/firebase-admob'
const ad = InterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/4411468910')

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
```

4. Display the the ad

To display the ad, call the `load` method on ad instance.

```ts
import { InterstitialAd } from '@nativescript/firebase-admob'
const ad = InterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/4411468910')

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

### Next steps

- See [Interstitial best practices](https://www.youtube.com/watch?v=r2RgFD3Apyo&index=5&list=PLOU2XLYxmsIKX0pUJV3uqp6N3NeHwHh0c) and [interstitial ad guidance](https://support.google.com/admob/answer/6066980).
- Check out an [Interstitial ads case study](https://admob.google.com/home/resources/freaking-math-powers-revenue-increase-with-google-admob-support/).
- If you haven't already, create your own interstitial ad unit in the [AdMob UI](https://apps.admob.com/).

## Native Ads

Native ads are ad assets that are presented to users via UI components that are native to the platform. They're shown using the same types of views with which you're already building your layouts, and can be formatted to match the visual design of the user experience in which they live. In coding terms, this means that when a native ad loads, your app receives a NativeAd object that contains its assets, and the app (rather than the Google Mobile Ads SDK) is then responsible for displaying them.

### Add a Native ad to your app

#### Core
To add a Native ad to your {N} Core app, follow these steps:

1. Register the plugin namespace under a prefix, `ui` (this can be any name), with the Page element.

```xml
<Page xmlns:ui="@nativescript/firebase-admob" >

</Page>
```
2. Use the prefix to access the `NativeAdView` and add it to markup.

```xml
<Page xmlns:ui="@nativescript/firebase-admob" >
<ActionBar title="Admob" />
<StackLayout>

  <ui:NativeAdView height="400" loaded="{{nativeAdLoaded}}" />

</StackLayout>
</Page>
```

### Use test ads when in development mode

>**Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

To enable dedicated test ad unit ID, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

3. Import the `NativeAdLoader` class from `@nativescript/firebase-admob` in the view model file.

```ts
import { NativeAdLoader } from '@nativescript/firebase-admob'
```
The `NativeAdLoader` class is an interface for managing the the Native ad.

4. Instantiate `NativeAdLoader`.
Create an instance of `NativeAdLoader` by calling its constructor function. The constructor function accepts 3 parameters. The required adUnitId as the first parameter, optional RequestOptions and NativeAdOptions objects as the second and third parameter, respectively.

```ts
const loader = new NativeAdLoader('ca-app-pub-3940256099942544/3986624511', null, {
  nativeAdOptions: {
    adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT
  }
})
```

5. Listen to the Native ad lifecycle events

To listen to the Native ad [lifecycle events](), call the `onAdEvent` method on the `NativeAdLoader` instance when the `NativeAdView` has loaded.

```xml
<ui:NativeAdView height="400" loaded="{{ nativeAdLoaded }}">
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

		const headLineView = view.getViewById('headLineView');
		headLineView.text = ad.headline;
		const mediaView = view.getViewById('mediaView');
		view.mediaView = mediaView;
		mediaView.mediaContent = ad.mediaContent;
		const callToActionButton = view.getViewById('callToActionView');
		view.callToActionView = callToActionButton;
		callToActionButton.text = ad.callToAction;
		const bodyView = view.getViewById('bodyView');
		bodyView.text = ad.body;
		view.nativeAd = ad;
		console.log('nativead loaded');
	} else if (event === 'adFailedToLoad') {
		console.log('nativead failed to load', error);
	}
});
}
```
6. Display the Native ad
To display the Native ad, call the `load` method on a NativeAdLoader instance.

```ts
loader.load()
```

### NativeAdOptions

A NativeAdOptions object is used to set the following options on the native ad.
| Property | Type | Description
|:---------|:-----|:-----------
| `returnUrlsForImageAssets` | `boolean` | _Optional_: If set to `true`, the SDK will not load image asset content and native ad image URLs can be used to fetch content. Defaults to `false`.
| `multipleImages` | `boolean`| _Optional_: Some image assets contain a series of images. Setting this property to `true` tells the app to display all the images of an asset. The `false`(the default) value informs the app to display the first image from the series of images in an image asset.
| `adChoicesPlacement` | [AdChoicesPlacement](#adchoicesplacement) |_Optional_: The [AdChoices overlay](https://developers.google.com/admob/android/native/advanced#adchoices_overlay) is set to the top right corner by default. Apps can change which corner this overlay is rendered in by setting this property to one of the following:
| `videoOptions` | [videoOptions](#videooptions)| _Optional_: Used to set video options for video assets returned as part of a native ad. If an ad contains a video(if `ad.mediaContent.hasVideoContent = true`), display the video. 
| `mediaAspectRatio` | []() | _Optional_: This sets the aspect ratio for image or video to be returned for the native ad.

#### AdChoicesPlacement

```ts
enum AdChoicesPlacement {
	TOP_LEFT = 'topLeft',
	TOP_RIGHT = 'topRight',
	BOTTOM_RIGHT = 'bottomRight',
	BOTTOM_LEFT = 'bottomLeft',
}
```
#### videoOptions

The `videoOptions` property is an object with the following properties:
| Property | Type | Optional
|:---------|:----|:-------
| `startMuted` | `boolean` | _Yes_
| `clickToExpandRequested` | `boolean` | _Yes_
| `customControlsRequested` | `boolean` | _Yes_


#### AdChoicesPlacement
```ts
enum AdChoicesPlacement {
	TOP_LEFT = 'topLeft',
	TOP_RIGHT = 'topRight',
	BOTTOM_RIGHT = 'bottomRight',
	BOTTOM_LEFT = 'bottomLeft',
}
```

That's it! Your app is now ready to display native ads.

### Next steps

- Learn more about native ads in our [native ad playbook](https://admob.google.com/home/resources/native-ads-playbook/).
- See [native ads policies and guidelines](https://support.google.com/admob/answer/6329638) for implementing native ads.
- Check out some customer success stories: [Case study 1](https://admob.google.com/home/resources/alarmmon-achieves-higher-rpm-with-admob-triggered-native-ads/), [Case Study 2](https://admob.google.com/home/resources/linghit-limited-doubles-ad-revenue-with-admob-native-ads/)

## Rewarded Ads

Rewarded ads are ads that users have the option of interacting with [in exchange for in-app rewards](https://support.google.com/admob/answer/7313578).

### Use test ads for development

>**Note:** When developing your app, make sure you use test ads rather than live, production ads. Failure to do so can lead to suspension of your account.

To enable dedicated test ad unit ID, visit the links below:

- [Android demo units](https://developers.google.com/admob/android/test-ads#demo_ad_units)
- [iOS demo units](https://developers.google.com/admob/ios/test-ads#demo_ad_units)

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

The RequestConfiguration object collects the global configuration for every ad request and is applied by `firebase().admob().setRequestConfiguration()`.

### Child-directed setting

The following example indicates that you want your content treated as child-directed for purposes of COPPA:
To understand the example, read [Child-directed setting](https://developers.google.com/admob/android/targeting#child-directed_setting).

```ts
import { Admob, RequestConfiguration } from '@nativescript/firebase-admob';
const requestConfiguration: RequestConfiguration = {
  tagForChildDirectedTreatment: true
}
Admob.getInstance().requestConfiguration = requestConfiguration;
```

### Users under the age of consent

The following example indicates that you want TFUA included in your ad request. For context, read [Users under the age of consent](https://developers.google.com/admob/android/targeting#users_under_the_age_of_consent)

```ts
import { Admob, RequestConfiguration } from '@nativescript/firebase-admob';
const requestConfiguration: RequestConfiguration = {
  tagForUnderAgeOfConsent: true
}
Admob.getInstance().requestConfiguration = requestConfiguration;
```

If the tags to enable the Child-directed setting and `tagForUnderAgeOfConsent`are both set to `true`, the child-directed setting takes precedence.

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
