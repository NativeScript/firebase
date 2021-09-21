import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAdmob } from '@demo/shared';
import { firebase, Firebase } from '@nativescript/firebase-core';
import { AdEventType, InterstitialAd, RewardedInterstitialAd, RewardedAd, BannerAd, BannerAdSize, Admob, AdsConsent, NativeAd, NativeAdLoader, NativeAdView } from '@nativescript/firebase-admob';
import { AdChoicesPlacement, NativeAdEventType } from '@nativescript/firebase-admob/nativead/common';

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

	admob: Admob;
	constructor() {
		super();
		//this.interstitial();
		//this.rewardedInterstitial();
		//this.rewarded();
		this.admob = firebase().admob();
		// ATTrackingManager.requestTrackingAuthorizationWithCompletionHandler((status) => {
		// 	console.log('ATTrackingManager', status);
		// });

		const testDevices = [];
		if (global.isIOS) {
			testDevices.push('b70c144077402b91cf8ecc5b93ac7791');
		} else {
			testDevices.push('EMULATOR');
		}
		this.admob.setRequestConfiguration({
			testDevices,
		});
	}

	nativeAdLoaded(event) {
		const view = event.object;
		const loader = new NativeAdLoader('ca-app-pub-3940256099942544/3986624511', null , {
			nativeAdOptions: {
				adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT
			}
		});
		loader.onAdEvent((event, error, data) => {
			if (event === NativeAdEventType.LOADED) {
				const ad = data as NativeAd;
				const hlv = view.getViewById('headLineView');
				hlv.text = ad.headline;
				const mv = view.getViewById('mediaView');
				mv.mediaContent = ad.mediaContent;
				const bv = view.getViewById('bodyView');
				bv.text = ad.body;
				view.nativeAd = ad;
				console.log('nativead loaded');
			} else if (event === 'adFailedToLoad') {
				console.log('nativead failed to load', error);
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
		bannerAd.size = BannerAdSize.createInLineAdaptiveBanner(100);
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
