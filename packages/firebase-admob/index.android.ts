import { Application, Utils } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { IAdmob, RequestConfiguration, AdEventListener, AdShowOptions, IInterstitialAd, RequestOptions, IRewardedAd, AdEventType, BannerAdBase, IRewardedInterstitialAd, IRewardedItem, RewardedAdEventType, MaxAdContentRating, ServerSideVerificationOptions, unitIdProperty, BannerAdSizeBase, sizeProperty, AdapterStatus } from './common';

export { MaxAdContentRating, AdEventType, AdapterStatus };

export * from './adsconsent';
export * from './nativead';

let defaultAdmob: Admob;

const fb = firebase();
if (!fb.admob) {
	Object.defineProperty(fb, 'admob', {
		value: () => {
			if (!defaultAdmob) {
				defaultAdmob = new Admob();
			}
			return defaultAdmob;
		},
		writable: false,
	});
}

let AdListener;

function ensureAdListener() {
	if (AdListener) {
		return;
	}

	@NativeClass()
	class AdListenerImpl extends com.google.android.gms.ads.AdListener {
		_owner: WeakRef<BannerAd>;

		constructor(owner: WeakRef<BannerAd>) {
			super();
			this._owner = owner;
			return global.__native(this);
		}

		onAdLoaded() {
			this._owner?.get?.().notify({
				eventName: BannerAd.onAdLoadedEvent,
				object: this._owner?.get?.(),
			});
		}

		onAdClicked() {
			this._owner?.get?.().notify({
				eventName: BannerAd.onAdClickedEvent,
				object: this._owner?.get?.(),
			});
		}

		onAdFailedToLoad(error: com.google.android.gms.ads.LoadAdError) {
			this._owner?.get?.().notify({
				eventName: BannerAd.onAdFailedToLoadEvent,
				object: this._owner?.get?.(),
				error: FirebaseError.fromNative(error),
			});
		}

		onAdClosed() {
			this._owner?.get?.().notify({
				eventName: BannerAd.onAdClosedEvent,
				object: this._owner?.get?.(),
			});
		}

		onAdImpression() {
			this._owner?.get?.().notify({
				eventName: BannerAd.onAdImpression,
				object: this._owner?.get?.(),
			});
		}

		onAdOpened() {
			this._owner?.get?.().notify({
				eventName: BannerAd.onAdOpenedEvent,
				object: this._owner?.get?.(),
			});
		}
	}

	AdListener = AdListenerImpl;
}

export class InterstitialAd implements IInterstitialAd {
	#native: com.google.android.gms.ads.interstitial.InterstitialAd;
	#adUnitId: string;
	#requestOptions?: RequestOptions;
	#loaded = false;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): InterstitialAd {
		const ad = new InterstitialAd();
		ad.#adUnitId = adUnitId;
		ad.#requestOptions = requestOptions;
		return ad;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	_setNative(value) {
		this.#native = value;
	}

	_setLoaded(value) {
		this.#loaded = value;
	}

	_onAdEvent?: AdEventListener;

	get loaded(): boolean {
		return this.#loaded;
	}

	load(): void {
		const ref = new WeakRef(this);
		org.nativescript.firebase.admob.FirebaseAdmob.InterstitialAd.load(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.#adUnitId,
			JSON.stringify(this.#requestOptions || {}),
			new org.nativescript.firebase.admob.FirebaseAdmob.AdCallback({
				onEvent(event: string, dataOrError: any) {
					const owner = ref.get?.();
					switch (event) {
						case AdEventType.LOADED:
							owner._setNative?.(dataOrError);
							owner?._onAdEvent(AdEventType.LOADED, null, owner);
							owner?._setLoaded(true);
							break;
						case AdEventType.CLOSED:
							owner?._onAdEvent(AdEventType.CLOSED, null, owner);
							owner?._setLoaded(false);
							break;
						case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
							owner?._onAdEvent(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, FirebaseError.fromNative(dataOrError), owner);
							break;
						case AdEventType.IMPRESSION:
							owner?._onAdEvent(AdEventType.IMPRESSION, null, owner);
							break;
						case AdEventType.OPENED:
							owner?._onAdEvent(AdEventType.OPENED, null, owner);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							owner?._onAdEvent(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(dataOrError), owner);
							break;
					}
				},
			})
		);
	}

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		if (typeof showOptions?.immersiveModeEnabled === 'boolean') {
			this.#native.setImmersiveMode(showOptions?.immersiveModeEnabled);
		}
		this.#native.show(Application.android.foregroundActivity || Application.android.startActivity);
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class RewardedInterstitialAd implements IRewardedInterstitialAd {
	#native: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd;
	#adUnitId: string;
	#requestOptions?: RequestOptions;
	#loaded = false;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedInterstitialAd {
		const ad = new RewardedInterstitialAd();
		ad.#adUnitId = adUnitId;
		ad.#requestOptions = requestOptions;
		return ad;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	_setNative(value) {
		this.#native = value;
	}

	_setLoaded(value) {
		this.#loaded = value;
	}

	get loaded(): boolean {
		return this.#loaded;
	}

	load(): void {
		const ref = new WeakRef(this);
		org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd.load(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.#adUnitId,
			JSON.stringify(this.#requestOptions || {}),
			new org.nativescript.firebase.admob.FirebaseAdmob.AdCallback({
				onEvent(event: string, dataOrError: any) {
					const owner = ref.get?.();
					switch (event) {
						case AdEventType.LOADED:
							owner._setNative?.(dataOrError);
							owner?._onAdEvent(AdEventType.LOADED, null, owner);
							owner?._setLoaded(true);
							break;
						case AdEventType.CLOSED:
							owner?._onAdEvent(AdEventType.CLOSED, null, owner);
							owner?._setLoaded(false);
							break;
						case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
							owner?._onAdEvent(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, FirebaseError.fromNative(dataOrError), owner);
							break;
						case AdEventType.IMPRESSION:
							owner?._onAdEvent(AdEventType.IMPRESSION, null, owner);
							break;
						case AdEventType.OPENED:
							owner?._onAdEvent(AdEventType.OPENED, null, owner);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							owner?._onAdEvent(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(dataOrError), owner);
							break;
					}
				},
			})
		);
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		if (typeof showOptions?.immersiveModeEnabled === 'boolean') {
			this.#native.setImmersiveMode(showOptions?.immersiveModeEnabled);
		}
		const ref = new WeakRef(this);
		org.nativescript.firebase.admob.FirebaseAdmob.RewardedInterstitialAd.show(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.#native,
			new org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>({
				onSuccess(reward): void {
					ref.get()?._onAdEvent?.(RewardedAdEventType.EARNED_REWARD, null, RewardedItem.fromNative(reward));
				},
				onError(error): void {},
			})
		);
	}

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void {
		if (this.native) {
			const ssvo = new com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder();
			if (options.customData) {
				ssvo.setCustomData(options.customData);
			}
			if (options.userId) {
				ssvo.setUserId(options.userId);
			}
			this.native.setServerSideVerificationOptions(ssvo.build());
		}
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class RewardedAd implements IRewardedAd {
	#native: com.google.android.gms.ads.rewarded.RewardedAd;
	#adUnitId: string;
	#requestOptions?: RequestOptions;
	#loaded = false;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedAd {
		const reward = new RewardedAd();
		reward.#adUnitId = adUnitId;
		reward.#requestOptions = requestOptions;
		return reward;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	get loaded(): boolean {
		return this.#loaded;
	}

	_setNative(value) {
		this.#native = value;
	}

	_setLoaded(value) {
		this.#loaded = value;
	}

	load(): void {
		const ref = new WeakRef(this);
		org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd.load(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.#adUnitId,
			JSON.stringify(this.#requestOptions || {}),
			new org.nativescript.firebase.admob.FirebaseAdmob.AdCallback({
				onEvent(event: string, dataOrError: any) {
					const owner = ref.get?.();
					switch (event) {
						case AdEventType.LOADED:
							owner?._setNative?.(dataOrError);
							owner?._onAdEvent(AdEventType.LOADED, null, owner);
							owner?._setLoaded(true);
							break;
						case AdEventType.CLOSED:
							owner?._onAdEvent(AdEventType.CLOSED, null, owner);
							owner?._setLoaded(false);
							break;
						case AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT:
							owner?._onAdEvent(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, FirebaseError.fromNative(dataOrError), owner);
							break;
						case AdEventType.IMPRESSION:
							owner?._onAdEvent(AdEventType.IMPRESSION, null, owner);
							break;
						case AdEventType.OPENED:
							owner?._onAdEvent(AdEventType.OPENED, null, owner);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							owner?._onAdEvent(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(dataOrError), owner);
							break;
					}
				},
			})
		);
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		if (typeof showOptions?.immersiveModeEnabled === 'boolean') {
			this.#native.setImmersiveMode(showOptions?.immersiveModeEnabled);
		}
		const ref = new WeakRef(this);
		org.nativescript.firebase.admob.FirebaseAdmob.RewardedAd.show(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.#native,
			new org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.gms.ads.rewarded.RewardItem>({
				onSuccess(reward): void {
					ref.get()?._onAdEvent?.(RewardedAdEventType.EARNED_REWARD, null, RewardedItem.fromNative(reward));
				},
				onError(error): void {},
			})
		);
	}

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void {
		if (this.native) {
			const ssvo = new com.google.android.gms.ads.rewarded.ServerSideVerificationOptions.Builder();
			if (options.customData) {
				ssvo.setCustomData(options.customData);
			}
			if (options.userId) {
				ssvo.setUserId(options.userId);
			}
			this.native.setServerSideVerificationOptions(ssvo.build());
		}
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class RewardedItem implements IRewardedItem {
	#native: com.google.android.gms.ads.rewarded.RewardItem;

	static fromNative(reward: com.google.android.gms.ads.rewarded.RewardItem) {
		if (reward instanceof com.google.android.gms.ads.rewarded.RewardItem) {
			const item = new RewardedItem();
			item.#native = reward;
			return item;
		}
		return null;
	}

	get amount(): number {
		return this.native?.getAmount?.();
	}

	get type(): string {
		return this.native?.getType();
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

const BANNER = lazy(() => com.google.android.gms.ads.AdSize.BANNER);
const FULL_BANNER = lazy(() => com.google.android.gms.ads.AdSize.FULL_BANNER);
const LARGE_BANNER = lazy(() => com.google.android.gms.ads.AdSize.LARGE_BANNER);
const LEADERBOARD = lazy(() => com.google.android.gms.ads.AdSize.LEADERBOARD);
const MEDIUM_RECTANGLE = lazy(() => com.google.android.gms.ads.AdSize.MEDIUM_RECTANGLE);

const FLUID = lazy(() => com.google.android.gms.ads.AdSize.FLUID);
const WIDE_SKYSCRAPER = lazy(() => com.google.android.gms.ads.AdSize.WIDE_SKYSCRAPER);
const SEARCH = lazy(() => com.google.android.gms.ads.AdSize.SEARCH);
const INVALID = lazy(() => com.google.android.gms.ads.AdSize.INVALID);
const FULL_WIDTH = lazy(() => com.google.android.gms.ads.AdSize.FULL_WIDTH);
const AUTO_HEIGHT = lazy(() => com.google.android.gms.ads.AdSize.AUTO_HEIGHT);

export class BannerAdSize extends BannerAdSizeBase {
	#native: com.google.android.gms.ads.AdSize;

	constructor(width?: number, height?: number) {
		super();
		if (width && height) {
			this.#native = new com.google.android.gms.ads.AdSize(width, height);
		}
	}

	static fromNative(size: com.google.android.gms.ads.AdSize) {
		const banner = new BannerAdSize();
		if (size instanceof com.google.android.gms.ads.AdSize) {
			banner.#native = size;
		} else {
			banner.#native = com.google.android.gms.ads.AdSize.INVALID;
		}
		return banner;
	}

	static get BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(BANNER());
	}

	static get FULL_BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(FULL_BANNER());
	}

	static get LARGE_BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(LARGE_BANNER());
	}

	static get LEADERBOARD(): BannerAdSize {
		return BannerAdSize.fromNative(LEADERBOARD());
	}

	static get MEDIUM_RECTANGLE(): BannerAdSize {
		return BannerAdSize.fromNative(MEDIUM_RECTANGLE());
	}

	static createAnchoredAdaptiveBanner(width: number, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize {
		switch (orientation) {
			case 'portrait':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getPortraitAnchoredAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			case 'landscape':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getLandscapeAnchoredAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			default:
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
		}
	}

	static createInLineAdaptiveBanner(width: number, maxHeight: number = 0, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize {
		if (maxHeight > 0) {
			BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getInlineAdaptiveBannerAdSize(width, maxHeight));
		}
		switch (orientation) {
			case 'portrait':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getPortraitInlineAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			case 'landscape':
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getLandscapeInlineAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
			default:
				return BannerAdSize.fromNative(com.google.android.gms.ads.AdSize.getCurrentOrientationInlineAdaptiveBannerAdSize(Application.android.foregroundActivity || Application.android.startActivity, width));
		}
	}

	static get FLUID(): BannerAdSize {
		return BannerAdSize.fromNative(FLUID());
	}

	static get WIDE_SKYSCRAPER(): BannerAdSize {
		return BannerAdSize.fromNative(WIDE_SKYSCRAPER());
	}

	static get INVALID(): BannerAdSize {
		return BannerAdSize.fromNative(INVALID());
	}

	static get SEARCH(): BannerAdSize {
		return BannerAdSize.fromNative(SEARCH());
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class BannerAd extends BannerAdBase {
	#native: com.google.android.gms.ads.AdView;
	#listener;

	[sizeProperty.setNative](value) {
		if (this.#native) {
			this.#native.setAdSize(value?.native);
		}
	}

	[unitIdProperty.setNative](value) {
		if (this.#native) {
			this.#native.setAdUnitId(value);
		}
	}

	createNativeView() {
		this.#native = new com.google.android.gms.ads.AdView(this._context);
		return this.#native;
	}

	initNativeView() {
		super.initNativeView();
		ensureAdListener();
		this.#listener = new AdListener(new WeakRef(this));
		this.#native.setAdListener(this.#listener);
	}

	load(options?: RequestOptions) {
		if (this.#native) {
			org.nativescript.firebase.admob.FirebaseAdmob.BannerAd.load(JSON.stringify(options || {}), this.#native);
		}
	}

	isLoading(): boolean {
		return this.#native?.isLoading?.();
	}
}

export class Admob implements IAdmob {
	#app: FirebaseApp;

	constructor() {
		if (defaultAdmob) {
			return defaultAdmob;
		}
		defaultAdmob = this;
	}

	static init(): Promise<{ [key: string]: AdapterStatus }> {
		return new Promise((resolve, reject) => {
			com.google.android.gms.ads.MobileAds.initialize(
				Utils.android.getApplicationContext(),
				new com.google.android.gms.ads.initialization.OnInitializationCompleteListener({
					onInitializationComplete(status: com.google.android.gms.ads.initialization.InitializationStatus) {
						let data = {};
						try {
							data = JSON.parse(org.nativescript.firebase.admob.FirebaseAdmob.toJSONStatusMap(status.getAdapterStatusMap()));
						} catch (e) {}
						resolve(data);
					},
				})
			);
		});
	}

	setRequestConfiguration(requestConfiguration: RequestConfiguration) {
		try {
			const parsedConfiguration: any = { ...requestConfiguration };
			if (typeof parsedConfiguration.tagForChildDirectedTreatment === 'boolean') {
				parsedConfiguration.tagForChildDirectedTreatment = String(parsedConfiguration.tagForChildDirectedTreatment);
			} else {
				parsedConfiguration.tagForChildDirectedTreatment = 'unspecified';
			}

			if (typeof parsedConfiguration.tagForUnderAgeOfConsent === 'boolean') {
				parsedConfiguration.tagForUnderAgeOfConsent = String(parsedConfiguration.tagForUnderAgeOfConsent);
			} else {
				parsedConfiguration.tagForUnderAgeOfConsent = 'unspecified';
			}
			org.nativescript.firebase.admob.FirebaseAdmob.setRequestConfiguration(JSON.stringify(requestConfiguration));
		} catch (e) {}
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
		}
		return this.#app;
	}
}
