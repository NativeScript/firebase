import { Application } from '@nativescript/core';

import { FirebaseApp } from '@nativescript/firebase-core';
import { IAdmob, RequestConfiguration, AdEventListener, AdShowOptions, IInterstitialAd, RequestOptions, IRewardedAd, AdEventType, BannerAdBase, IRewardedInterstitialAd, IRewardedItem, RewardedAdEventType, MaxAdContentRating, ServerSideVerificationOptions } from './common';

export { MaxAdContentRating, AdEventType, RewardedAdEventType };

export * from './adsconsent';
export * from './nativead';

export declare class InterstitialAd implements IInterstitialAd {
	static createForAdRequest(adUnitId: string): InterstitialAd;
	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): InterstitialAd;

	readonly adUnitId: string;
	readonly loaded: boolean;

	load(): void;

	onAdEvent(listener: AdEventListener);

	show(showOptions?: AdShowOptions);

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class RewardedInterstitialAd implements IRewardedInterstitialAd {
	static createForAdRequest(adUnitId: string): RewardedInterstitialAd;
	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedInterstitialAd;

	readonly adUnitId: string;
	readonly loaded: boolean;

	load(): void;

	onAdEvent(listener: AdEventListener);

	show(showOptions?: AdShowOptions);

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class RewardedAd implements IRewardedAd {
	static createForAdRequest(adUnitId: string): RewardedAd;
	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedAd;

	readonly adUnitId: string;
	readonly loaded: boolean;

	load(): void;

	onAdEvent(listener: AdEventListener);

	show(showOptions?: AdShowOptions);

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class RewardedItem implements IRewardedItem {
	readonly amount: number;

	readonly type: string;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class BannerAd extends BannerAdBase {
	size: BannerAdSize;

	unitId: string;

	load(options?: RequestOptions);

	isLoading(): boolean;

	on(event: 'adClicked', callback: (args: any) => void, thisArg?: any);
	on(event: 'adLoaded', callback: (args: any) => void, thisArg?: any);
	on(event: 'adClosed', callback: (args: any) => void, thisArg?: any);
	on(event: 'adImpression', callback: (args: any) => void, thisArg?: any);
	on(event: 'adFailedToLoad', callback: (args: any) => void, thisArg?: any);
}

export declare class BannerAdSize extends BannerAdSizeBase {
	constructor(width: number, height: number);

	static readonly BANNER: BannerAdSize;

	static readonly FULL_BANNER: BannerAdSize;

	static readonly LARGE_BANNER: BannerAdSize;

	static readonly LEADERBOARD: BannerAdSize;

	static readonly MEDIUM_RECTANGLE: BannerAdSize;

	static readonly FLUID: BannerAdSize;

	static readonly WIDE_SKYSCRAPER: BannerAdSize;

	static readonly INVALID: BannerAdSize;

	static readonly SEARCH: BannerAdSize;

	static createAnchoredAdaptiveBanner(width: number, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize;

	static createInLineAdaptiveBanner(width: number, maxHeight: number = 0, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize;

	readonly native: any;
	readonly android: any;
	readonly ios: any;
}

export declare class Admob implements IAdmob {
	readonly app: FirebaseApp;

	static init(): Promise<{ [key: string]: AdapterStatus }>;

	setRequestConfiguration(requestConfiguration: RequestConfiguration);
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseAdmob {}
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

export interface FirebaseAdmob {
	static admob(): Admob;
}
