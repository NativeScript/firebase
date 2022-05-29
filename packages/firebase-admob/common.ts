import { FirebaseApp } from '@nativescript/firebase-core';
import { CSSType, Property, View } from '@nativescript/core';

export interface IMobileAd {
	adUnitId: string;
	loaded: boolean;

	load(): void;

	onAdEvent(listener?: AdEventListener);

	show(showOptions?: AdShowOptions);
}

export interface IRewardedInterstitialAd extends IInterstitialAd {
	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;
}

export interface ServerSideVerificationOptions {
	userId: string;
	customData: string;
}

export interface IInterstitialAd extends IMobileAd {}

export interface IRewardedAd extends IMobileAd {
	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;
}

export abstract class BannerAdSizeBase {
	static get BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get FULL_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get LARGE_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get LEADERBOARD(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get MEDIUM_RECTANGLE(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get SMART_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get ADAPTIVE_BANNER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get FLUID(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get WIDE_SKYSCRAPER(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get INVALID(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}

	static get SEARCH(): BannerAdSizeBase {
		throw new Error('unimplemented');
	}
}

export const sizeProperty = new Property<BannerAdBase, BannerAdSizeBase>({
	name: 'size',
});

export const unitIdProperty = new Property<BannerAdBase, BannerAdSizeBase>({
	name: 'unitId',
});

@CSSType('BannerAd')
export abstract class BannerAdBase extends View {
	static onAdClickedEvent = 'adClicked';
	static onAdClosedEvent = 'adClosed';
	static onAdFailedToLoadEvent = 'adFailedToLoad';
	static onAdLoadedEvent = 'adLoaded';
	static onAdOpenedEvent = 'adOpened';
	static onAdImpression = 'adImpression';
	static onAdFailedToShowFullScreenContent = 'adFailedToShowFullScreenContent';
	size: BannerAdSizeBase;
	unitId: BannerAdSizeBase;

	abstract load(options?: RequestOptions);

	abstract isLoading(): boolean;
}

sizeProperty.register(BannerAdBase);
unitIdProperty.register(BannerAdBase);

export enum MaxAdContentRating {
	G = 'G',
	MA = 'MA',
	PG = 'PG',
	T = 'T',
	UNSPECIFIED = 'UNSPECIFIED',
}

export enum AdEventType {
	CLICKED = 'adClicked',
	CLOSED = 'adClosed',
	LOADED = 'adLoaded',
	OPENED = 'adOpened',
	IMPRESSION = 'adImpression',
	FAILED_TO_SHOW_FULL_SCREEN_CONTENT = 'adFailedToShowFullScreenContent',
	FAILED_TO_LOAD_EVENT = 'adFailedToLoad',
}

export interface AdShowOptions {
	immersiveModeEnabled: undefined | false | true;
}

export interface RequestConfiguration {
	maxAdContentRating?: MaxAdContentRating.G | MaxAdContentRating.PG | MaxAdContentRating.T | MaxAdContentRating.MA;
	tagForChildDirectedTreatment?: undefined | false | true;
	tagForUnderAgeOfConsent?: undefined | false | true;
	testDevices?: string[];
}

export interface RequestOptions {
	contentUrl?: undefined | string;
	keywords?: string[];
	networkExtras?: undefined | { [key: string]: string };
	requestAgent?: undefined | string;
	requestNonPersonalizedAdsOnly?: undefined | false | true;
}

export interface ManagerRequestOptions extends RequestOptions {
	publisherProvidedId?: string;
	customTargeting?: { [key: string]: string | string[] };
	categoryExclusions?: string[];
	adString?: string;
}

export enum RewardedAdEventType {
	EARNED_REWARD = 'rewarded_earned_reward',
	LOADED = 'rewarded_loaded',
}

export interface IRewardedItem {
	amount: number;
	type: string;
}

export interface TestIds {
	BANNER: string;
	INTERSTITIAL: string;
	REWARDED: string;
}

export enum AdapterStatusState {
	NOT_READY,
	READY,
}

export interface AdapterStatus {
	description: string;
	latency: number;
	initializationState: AdapterStatusState;
}

export type AdEventListener = (type: AdEventType | RewardedAdEventType, error?: Error, data?: any | IRewardedItem) => void;

export interface IAdmob {
	app: FirebaseApp;

	setRequestConfiguration(requestConfiguration: RequestConfiguration);
}
