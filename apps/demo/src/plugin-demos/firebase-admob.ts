import { Observable, EventData, Page, View, Label } from '@nativescript/core';
import { DemoSharedFirebaseAdmob } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-admob';
import { AdEventType, InterstitialAd, RewardedInterstitialAd, RewardedAd, BannerAd, BannerAdSize, Admob, AdsConsent, NativeAd, NativeAdLoader, NativeAdView } from '@nativescript/firebase-admob';
import { AdChoicesPlacement, NativeAdEventType } from '@nativescript/firebase-admob';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAdmob {
	get bannerAdUnit() {
		if (global.isAndroid) {
			return 'ca-app-pub-3940256099942544/6300978111';
		} else {
			return 'ca-app-pub-3940256099942544/2934735716';
		}
	}

	constructor() {
		super();
		//this.interstitial();
		//this.rewardedInterstitial();
		//this.rewarded();
		// ATTrackingManager.requestTrackingAuthorizationWithCompletionHandler((status) => {
		// 	console.log('ATTrackingManager', status);
		// });
		const testDevices = [];
		if (global.isIOS) {
			testDevices.push('b70c144077402b91cf8ecc5b93ac7791', 'EMULATOR');
		} else {
			testDevices.push('EMULATOR');
		}
		const admob = firebase().admob();
		admob.setRequestConfiguration({
			testDevices,
		});
	}

	nativeAdLayoutChanged(event) {
		const view = event.object;
		const hlv = view.getViewById('headLineView') as Label;
		const mv = view.getViewById('mediaView');
		const bv = view.getViewById('bodyView');
		const iv = view.getViewById('iconView');
	}
	nativeAdLoaded(event) {
		const view = event.object;
		const loader = new NativeAdLoader('ca-app-pub-3940256099942544/3986624511', null, {
			nativeAdOptions: {
				adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT,
			},
		});
		loader.onAdEvent((event, error, data) => {
			if (event === NativeAdEventType.LOADED) {
				const ad = data as NativeAd;
				const hlv = view.getViewById('headLineView') as Label;
				hlv.text = ad.headline;
				const mv = view.getViewById('mediaView');
				view.mediaView = mv;
				mv.mediaContent = ad.mediaContent;
				const bv = view.getViewById('bodyView');
				bv.text = ad.body;
				const iv = view.getViewById('iconView');
				console.log(ad.icon);
				iv.src = ad.icon.image;
				view.nativeAd = ad;
				console.log('nativead loaded');
			} else if (event === 'adFailedToLoad') {
				console.error('nativead failed to load', error);
			}
		});
		loader.load();
	}

	bannerLoaded(event) {
		const bannerAd = event.object as BannerAd;

		bannerAd.on('adLoaded', (args) => {
			console.log('bannerad loaded');
		});
		bannerAd.on('adFailedToLoad', (args) => {
			console.log('bannerad failed to load', args.error);
		});
		bannerAd.size = BannerAdSize.FULL_BANNER;
		bannerAd.load();
	}

	interstitial() {
		const ad = InterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/4411468910');
		ad.onAdEvent((event, error, data) => {
			if (event === AdEventType.LOADED) {
				console.log('loaded');
				ad.show();
			} else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
				console.error('loading error', error);
			}
		});
		ad.load();
	}

	rewardedInterstitial() {
		const ad = RewardedInterstitialAd.createForAdRequest('ca-app-pub-3940256099942544/6978759866');
		ad.onAdEvent((event, error, data) => {
			if (event === AdEventType.LOADED) {
				console.log('loaded');
				ad.show();
			} else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
				console.error('loading error', error);
			}
		});
		ad.load();
	}

	rewarded() {
		const ad = RewardedAd.createForAdRequest('ca-app-pub-3940256099942544/1712485313');
		ad.onAdEvent((event, error, data) => {
			if (event === AdEventType.LOADED) {
				console.log('rewarded', 'loaded');
				ad.show();
			} else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
				console.error('loading error', error);
			}
		});
		ad.load();
	}
}
