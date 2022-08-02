import { Utils } from '@nativescript/core';
import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { IAdmob, RequestConfiguration, AdShowOptions, IInterstitialAd, RequestOptions, IRewardedAd, ServerSideVerificationOptions, IRewardedInterstitialAd, IRewardedItem, AdapterStatus } from '.';
import { MaxAdContentRating, AdEventListener, AdEventType, BannerAdBase, RewardedAdEventType, unitIdProperty, BannerAdSizeBase, sizeProperty } from './common';
import { topViewController, toSerializeRequestOptions } from './utils';

export { MaxAdContentRating, AdEventType };

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

export class AdRequest {
	#native: GADRequest;

	static fromNative(request: GADRequest) {
		if (request instanceof GADRequest) {
			const ret = new AdRequest();
			ret.#native = request;
			return ret;
		}
		return null;
	}

	get contentUrl(): string {
		return this.#native.contentURL;
	}

	get keywords(): string[] {
		const kw = this.#native.keywords;
		const count = kw.count;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret.push(kw.objectAtIndex(i));
		}
		return ret;
	}

	get neighboringContentUrls(): string[] {
		const urls = this.#native.keywords;
		const count = urls.count;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret.push(urls.objectAtIndex(i));
		}
		return ret;
	}

	isTestDevice(): boolean {
		// todo
		return false;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class InterstitialAd implements IInterstitialAd {
	#native: GADInterstitialAd;
	#adUnitId: string;
	#requestOptions?: RequestOptions;
	#delegate: GADFullScreenContentDelegateImpl;
	#loaded = false;
	#nativeRequest: GADRequest;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): InterstitialAd {
		const ad = new InterstitialAd();
		ad.#adUnitId = adUnitId;
		ad.#requestOptions = requestOptions;
		ad.#delegate = GADFullScreenContentDelegateImpl.initWithOwner(new WeakRef(ad));
		return ad;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	get loaded(): boolean {
		return this.#loaded;
	}

	load(): void {
		const ref = new WeakRef<InterstitialAd>(this);
		const request = toSerializeRequestOptions(this.#requestOptions);
		GADInterstitialAd.loadWithAdUnitIDRequestCompletionHandler(this.#adUnitId, request, (ad, error) => {
			if (error) {
				ref.get()?._onAdEvent?.(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(error));
			} else {
				ad.fullScreenContentDelegate = ref.get()?._delegate;
				ref.get()?._setNative(ad);
				ref.get()?._setLoaded(true);
				ref.get()?._onAdEvent?.(AdEventType.LOADED);
			}
		});
		this.#nativeRequest = request;
	}

	get _delegate() {
		return this.#delegate;
	}

	_setNative(value) {
		this.#native = value;
	}

	_setLoaded(value) {
		this.#loaded = value;
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		this.#native.presentFromRootViewController(topViewController());
	}

	get request() {
		return AdRequest.fromNative(this.#nativeRequest);
	}
}

export class RewardedInterstitialAd implements IRewardedInterstitialAd {
	#native: GADRewardedInterstitialAd;
	#adUnitId: string;
	#requestOptions?: RequestOptions;
	#loaded = false;
	#delegate: GADFullScreenContentDelegateImpl;
	#nativeRequest: GADRequest;

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedInterstitialAd {
		const ad = new RewardedInterstitialAd();
		ad.#adUnitId = adUnitId;
		ad.#requestOptions = requestOptions;
		ad.#delegate = GADFullScreenContentDelegateImpl.initWithOwner(new WeakRef(ad));
		return ad;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	get loaded(): boolean {
		return this.#loaded;
	}

	load(): void {
		const ref = new WeakRef(this);
		const request = toSerializeRequestOptions(this.#requestOptions);
		GADRewardedInterstitialAd.loadWithAdUnitIDRequestCompletionHandler(this.#adUnitId, request, (ad, error) => {
			if (error) {
				ref.get()?._onAdEvent?.(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(error));
			} else {
				ad.fullScreenContentDelegate = ref.get()?._delegate;
				ref.get()?._setNative(ad);
				ref.get()?._setLoaded(true);
				ref.get()?._onAdEvent?.(AdEventType.LOADED);
			}
		});
		this.#nativeRequest = request;
	}

	get _delegate() {
		return this.#delegate;
	}

	_setNative(value) {
		this.#native = value;
	}

	_setLoaded(value) {
		this.#loaded = value;
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		this.native.presentFromRootViewControllerUserDidEarnRewardHandler(topViewController(), () => {
			this._onAdEvent?.(RewardedAdEventType.EARNED_REWARD, null, RewardedItem.fromNative(this.native.adReward));
		});
	}

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void {
		if (this.native) {
			const ssvo = GADServerSideVerificationOptions.new();
			if (options.customData) {
				ssvo.customRewardString = options.customData;
			}
			if (options.userId) {
				ssvo.userIdentifier = options.userId;
			}
			this.native.serverSideVerificationOptions = ssvo;
		}
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get request() {
		return AdRequest.fromNative(this.#nativeRequest);
	}
}

export class RewardedAd implements IRewardedAd {
	#native: GADRewardedAd;
	#adUnitId: string;
	#requestOptions?: RequestOptions;
	#delegate: GADFullScreenContentDelegateImpl;
	#loaded = false;
	#nativeRequest: GADRequest;
	get loaded() {
		return this.#loaded;
	}

	static createForAdRequest(adUnitId: string, requestOptions?: RequestOptions): RewardedAd {
		const reward = new RewardedAd();
		reward.#adUnitId = adUnitId;
		reward.#requestOptions = requestOptions;
		reward.#delegate = GADFullScreenContentDelegateImpl.initWithOwner(new WeakRef(reward));
		return reward;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	load(): void {
		const request = toSerializeRequestOptions(this.#requestOptions);
		const ref = new WeakRef(this);
		GADRewardedAd.loadWithAdUnitIDRequestCompletionHandler(this.#adUnitId, request, (ad, error) => {
			if (error) {
				ref.get()?._onAdEvent?.(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(error));
			} else {
				ad.fullScreenContentDelegate = ref.get()?._delegate;
				ref.get()?._setNative(ad);
				ref.get()?._setLoaded(true);
				ref.get()?._onAdEvent?.(AdEventType.LOADED);
			}
		});
		this.#nativeRequest = request;
	}

	get _delegate() {
		return this.#delegate;
	}

	_setNative(value) {
		this.#native = value;
	}

	_setLoaded(value) {
		this.#loaded = value;
	}

	_onAdEvent: AdEventListener;

	onAdEvent(listener: AdEventListener) {
		this._onAdEvent = listener;
	}

	show(showOptions?: AdShowOptions) {
		this.native.presentFromRootViewControllerUserDidEarnRewardHandler(topViewController(), () => {
			this._onAdEvent?.(RewardedAdEventType.EARNED_REWARD, null, RewardedItem.fromNative(this.native.adReward));
		});
	}

	setServerSideVerificationOptions(options: ServerSideVerificationOptions): void {
		if (this.native) {
			const ssvo = GADServerSideVerificationOptions.new();
			if (options.customData) {
				ssvo.customRewardString = options.customData;
			}
			if (options.userId) {
				ssvo.userIdentifier = options.userId;
			}
			this.native.serverSideVerificationOptions = ssvo;
		}
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get request() {
		return AdRequest.fromNative(this.#nativeRequest);
	}
}

export class RewardedItem implements IRewardedItem {
	#native: GADAdReward;

	static fromNative(reward: GADAdReward) {
		if (reward instanceof GADAdReward) {
			const item = new RewardedItem();
			item.#native = reward;
			return item;
		}
		return null;
	}

	get amount(): number {
		return this.native?.amount?.floatValue;
	}

	get type(): string {
		return this.native?.type;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class BannerAdSize extends BannerAdSizeBase {
	#native: GADAdSize;

	constructor(width: number, height: number, native?) {
		super();
		if (typeof width === 'number' && typeof height === 'number') {
			this.#native = GADAdSizeFromCGSize(CGSizeMake(width, height));
		} else if (arguments[2] instanceof GADAdSize) {
			this.#native = arguments[2];
		} else {
			this.#native = GADAdSizeInvalid;
		}
	}

	static fromNative(size: GADAdSize) {
		return new BannerAdSize(null, null, size);
	}

	static get BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeBanner);
	}

	static get FULL_BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeFullBanner);
	}

	static get LARGE_BANNER(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeLargeBanner);
	}

	static get LEADERBOARD(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeLeaderboard);
	}

	static get MEDIUM_RECTANGLE(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeMediumRectangle);
	}

	static createAnchoredAdaptiveBanner(width: number, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize {
		let nativeOrientation: Orientation = Orientation.Device;
		if (orientation === 'portrait') {
			nativeOrientation = Orientation.Portrait;
		} else if (orientation === 'landscape') {
			nativeOrientation = Orientation.Landscape;
		}

		return BannerAdSize.fromNative(TNSGA.createAnchoredAdaptiveBanner(width, nativeOrientation));
	}

	static createInLineAdaptiveBanner(width: number, maxHeight: number = 0, orientation: 'portrait' | 'landscape' | 'device' = 'device'): BannerAdSize {
		let nativeOrientation: Orientation = Orientation.Device;
		if (orientation === 'portrait') {
			nativeOrientation = Orientation.Portrait;
		} else if (orientation === 'landscape') {
			nativeOrientation = Orientation.Landscape;
		}

		return BannerAdSize.fromNative(TNSGA.createInlineAdaptiveBanner(width, maxHeight, nativeOrientation));
	}

	static get FLUID(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeFluid);
	}

	static get WIDE_SKYSCRAPER(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeSkyscraper);
	}

	static get INVALID(): BannerAdSize {
		return BannerAdSize.fromNative(GADAdSizeInvalid);
	}

	static get SEARCH(): BannerAdSize {
		console.error('BannerAdSize', 'SEARCH', 'not supported on iOS');
		return BannerAdSize.INVALID;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class BannerAd extends BannerAdBase {
	#isLoading = false;

	_setIsLoading(value) {
		this.#isLoading = value;
	}

	isLoading(): boolean {
		return this.#isLoading;
	}

	#native: GADBannerView;
	#delegate: GADBannerViewDelegateImpl;

	#nativeRequest: GADRequest;

	createNativeView() {
		this.#native = GADBannerView.new();
		this.#delegate = GADBannerViewDelegateImpl.initWithOwner(new WeakRef(this));
		return this.#native;
	}

	initNativeView() {
		this.#native.delegate = this.#delegate;
	}

	onLoaded() {
		super.onLoaded();
		this.#native.rootViewController = topViewController();
	}

	load(options: RequestOptions = {}) {
		this.#isLoading = true;
		const request = toSerializeRequestOptions(options);
		this.#native?.loadRequest?.(request);
		this.#nativeRequest = request;
	}

	[sizeProperty.setNative](value) {
		if (this.#native) {
			this.#native.adSize = value?.native;
		}
	}

	[unitIdProperty.setNative](value) {
		if (this.#native) {
			this.#native.adUnitID = value;
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}

	get request() {
		return AdRequest.fromNative(this.#nativeRequest);
	}
}

declare const FIRApp;

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
			GADMobileAds.sharedInstance().startWithCompletionHandler((status) => {
				const data = {};
				const keys = status.adapterStatusesByClassName.allKeys;
				const count = keys.count;
				for (let i = 0; i < count; i++) {
					const key = keys.objectAtIndex(i);
					const obj = status.adapterStatusesByClassName.objectForKey(key);

					data[key] = {
						description: obj.description,
						latency: obj.latency,
						state: obj.state,
					};
				}
				resolve(data);
			});
		});
	}

	#requestConfiguration: RequestConfiguration = {};

	set requestConfiguration(requestConfiguration: RequestConfiguration) {
		switch (requestConfiguration?.maxAdContentRating) {
			case MaxAdContentRating.G:
				GADMobileAds.sharedInstance().requestConfiguration.maxAdContentRating = GADMaxAdContentRatingGeneral;
				break;
			case MaxAdContentRating.MA:
				GADMobileAds.sharedInstance().requestConfiguration.maxAdContentRating = GADMaxAdContentRatingMatureAudience;
				break;
			case MaxAdContentRating.PG:
				GADMobileAds.sharedInstance().requestConfiguration.maxAdContentRating = GADMaxAdContentRatingParentalGuidance;
				break;
			case MaxAdContentRating.T:
				GADMobileAds.sharedInstance().requestConfiguration.maxAdContentRating = GADMaxAdContentRatingTeen;
				break;
		}

		if (typeof requestConfiguration?.tagForChildDirectedTreatment === 'boolean') {
			this.#requestConfiguration.tagForChildDirectedTreatment = requestConfiguration.tagForChildDirectedTreatment;
			GADMobileAds.sharedInstance().requestConfiguration.tagForChildDirectedTreatment(requestConfiguration.tagForChildDirectedTreatment);
		}

		if (typeof requestConfiguration?.tagForUnderAgeOfConsent === 'boolean') {
			this.#requestConfiguration.tagForUnderAgeOfConsent = requestConfiguration.tagForUnderAgeOfConsent;
			GADMobileAds.sharedInstance().requestConfiguration.tagForUnderAgeOfConsent(requestConfiguration.tagForUnderAgeOfConsent);
		}

		if (Array.isArray(requestConfiguration?.testDevices)) {
			GADMobileAds.sharedInstance().requestConfiguration.testDeviceIdentifiers = requestConfiguration.testDevices.map((item) => {
				if (item === 'EMULATOR') {
					if (typeof GADSimulatorID) {
						return GADSimulatorID;
					}
					return '';
				}
				return item;
			}) as any;
		}
	}

	get requestConfiguration(): RequestConfiguration {
		const ret: RequestConfiguration = Object.assign({}, ...(this.#requestConfiguration as any));

		const config = GADMobileAds.sharedInstance().requestConfiguration;

		switch (config.maxAdContentRating) {
			case GADMaxAdContentRatingGeneral:
				ret.maxAdContentRating = MaxAdContentRating.G;
				break;
			case GADMaxAdContentRatingMatureAudience:
				ret.maxAdContentRating = MaxAdContentRating.MA;
				break;
			case GADMaxAdContentRatingParentalGuidance:
				ret.maxAdContentRating = MaxAdContentRating.PG;
				break;
			case GADMaxAdContentRatingTeen:
				ret.maxAdContentRating = MaxAdContentRating.T;
				break;
			default:
				// noop
				break;
		}

		ret.testDevices = [];

		const devices = config.testDeviceIdentifiers;
		if (devices) {
			const count = devices.count;
			for (let i = 0; i < count; i++) {
				ret.testDevices.push(devices.objectAtIndex(i));
			}
		}
		return ret;
	}

	setRequestConfiguration(requestConfiguration: RequestConfiguration) {
		this.requestConfiguration = requestConfiguration;
	}

	getRequestConfiguration(): RequestConfiguration {
		return this.requestConfiguration;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this.#app;
	}
}

@NativeClass
@ObjCClass(GADFullScreenContentDelegate)
class GADFullScreenContentDelegateImpl extends NSObject implements GADFullScreenContentDelegate {
	_owner: WeakRef<RewardedAd> | WeakRef<InterstitialAd> | WeakRef<RewardedInterstitialAd>;

	static initWithOwner(owner: WeakRef<RewardedAd> | WeakRef<InterstitialAd> | WeakRef<RewardedInterstitialAd>): GADFullScreenContentDelegateImpl {
		const delegate = <GADFullScreenContentDelegateImpl>GADFullScreenContentDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	adDidDismissFullScreenContent(ad: GADFullScreenPresentingAd): void {
		this._owner?.get()?._onAdEvent?.(AdEventType.CLOSED, null, this._owner.get?.());
		this._owner?.get()?._setLoaded(false);
	}

	adDidFailToPresentFullScreenContentWithError(ad: GADFullScreenPresentingAd, error: NSError): void {
		this._owner?.get()?._onAdEvent?.(AdEventType.FAILED_TO_SHOW_FULL_SCREEN_CONTENT, FirebaseError.fromNative(error), this._owner.get?.());
	}

	adDidPresentFullScreenContent(ad: GADFullScreenPresentingAd): void {
		this._owner?.get()?._onAdEvent?.(AdEventType.OPENED, null, this._owner.get?.());
	}

	adDidRecordClick(ad: GADFullScreenPresentingAd) {
		this._owner?.get()?._onAdEvent?.(AdEventType.CLICKED, null, this._owner.get?.());
	}

	adDidRecordImpression(ad: GADFullScreenPresentingAd): void {
		this._owner?.get()?._onAdEvent?.(AdEventType.IMPRESSION, null, this._owner.get?.());
	}

	adWillDismissFullScreenContent(ad: GADFullScreenPresentingAd): void {}
}

@NativeClass
@ObjCClass(GADBannerViewDelegate)
class GADBannerViewDelegateImpl extends NSObject implements GADBannerViewDelegate {
	_owner: WeakRef<BannerAd>;

	static initWithOwner(owner: WeakRef<BannerAd>): GADBannerViewDelegateImpl {
		const delegate = <GADBannerViewDelegateImpl>GADBannerViewDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	bannerViewDidDismissScreen(bannerView: GADBannerView): void {
		this._owner?.get()?.notify?.({
			eventName: AdEventType.CLOSED,
			object: this._owner?.get(),
		});
	}

	bannerViewDidFailToReceiveAdWithError(bannerView: GADBannerView, error: NSError): void {
		this._owner?.get()?.notify?.({
			eventName: AdEventType.FAILED_TO_LOAD_EVENT,
			object: this._owner?.get(),
			error: FirebaseError.fromNative(error),
		});
	}

	bannerViewDidReceiveAd?(bannerView: GADBannerView): void {
		this._owner?.get()?.notify?.({
			eventName: AdEventType.LOADED,
			object: this._owner?.get(),
		});
		this._owner?.get()?._setIsLoading(false);
	}

	bannerViewDidRecordClick?(bannerView: GADBannerView): void {
		this._owner?.get()?.notify?.({
			eventName: AdEventType.CLICKED,
			object: this._owner?.get(),
		});
	}

	bannerViewDidRecordImpression?(bannerView: GADBannerView): void {
		this._owner?.get()?.notify?.({
			eventName: AdEventType.IMPRESSION,
			object: this._owner?.get(),
		});
	}

	bannerViewWillDismissScreen?(bannerView: GADBannerView): void {}

	bannerViewWillPresentScreen?(bannerView: GADBannerView): void {}
}
