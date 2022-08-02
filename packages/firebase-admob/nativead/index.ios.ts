import { AddChildFromBuilder, ImageSource, Utils, View } from '@nativescript/core';
import { FirebaseError } from '@nativescript/firebase-core';
import { topViewController, toSerializeManagerRequestOptions, toSerializeRequestOptions } from '../utils';
import { AdEventListener, AdEventType } from '../common';
import { ManagerRequestOptions, RequestOptions } from '..';
import { NativeAdEventListener, NativeAdViewBase, MediaViewBase, mediaContentProperty, stretchProperty } from './common';
import { IMediaContent, IMuteThisAdReason, INativeAd, INativeAdImage, IVideoController, NativeAdOptions, UnconfirmedClickListener, VideoStatus, AdChoicesPlacement, MediaAspectRatio, INativeAdLoader, NativeAdEventType } from '.';

export { VideoStatus, AdEventType, AdChoicesPlacement, MediaAspectRatio, NativeAdEventType };
declare const AdLoaderAdType;

export class NativeAdView extends NativeAdViewBase implements AddChildFromBuilder {
	#native: GADNativeAdView;
	#child: View;
	createNativeView() {
		this.#native = GADNativeAdView.new();
		return this.#native;
	}

	_addChildFromBuilder(name: string, value: any): void {
		if (value instanceof View) {
			this.#child = value;
		}
	}

	public eachChildView(callback: (child: View) => boolean): void {
		if (this.#child) {
			callback(this.#child);
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		const result = View.measureChild(this, this.#child, widthMeasureSpec, heightMeasureSpec);

		const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = Utils.layout.getMeasureSpecMode(widthMeasureSpec);

		const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = Utils.layout.getMeasureSpecMode(heightMeasureSpec);

		const measureWidth = Math.max(result.measuredWidth, this.effectiveMinWidth);
		const measureHeight = Math.max(result.measuredHeight, this.effectiveMinHeight);

		const widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
		const heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);

		this.setMeasuredDimension(widthAndState, heightAndState);
	}

	public onLayout(left: number, top: number, right: number, bottom: number): void {
		View.layoutChild(this, this.#child, 0, 0, right - left, bottom - top);
	}

	onLoaded() {
		super.onLoaded();
		if (this.#child) {
			this._addView(this.#child);
			this.#native.addSubview(this.#child.nativeView);
		}
	}

	#adChoicesView: View;
	get adChoicesView(): View {
		return this.#adChoicesView;
	}

	set adChoicesView(value) {
		this.#adChoicesView = value;
		this.#native.adChoicesView = value?.nativeView;
	}

	#advertiserView: View;
	get advertiserView(): View {
		return this.#advertiserView;
	}

	set advertiserView(value) {
		this.#advertiserView = value;
		this.#native.advertiserView = value?.nativeView;
	}

	#bodyView: View;
	get bodyView(): View {
		return this.#bodyView;
	}

	set bodyView(value) {
		this.#bodyView = value;
		this.#native.bodyView = value?.nativeView;
	}

	#callToActionView: View;
	get callToActionView(): View {
		return this.#callToActionView;
	}

	set callToActionView(value) {
		this.#callToActionView = value;
		this.#native.callToActionView = value?.nativeView;
	}

	#headlineView: View;
	get headlineView(): View {
		return this.#headlineView;
	}

	set headlineView(value) {
		this.#headlineView = value;
		this.#native.headlineView = value?.nativeView;
	}

	#iconView: View;
	get iconView(): View {
		return this.#iconView;
	}

	set iconView(value) {
		this.#iconView = value;
		this.#native.iconView = value?.nativeView;
	}

	#imageView: View;
	get imageView(): View {
		return this.#imageView;
	}

	set imageView(value) {
		this.imageView = value;
		this.#native.imageView = value?.nativeView;
	}

	#mediaView: MediaView;
	get mediaView(): MediaView {
		return this.#mediaView;
	}

	set mediaView(value) {
		this.#native.mediaView = value?.native;
		this.#mediaView = value;
	}

	#nativeAd: NativeAd;
	get nativeAd(): NativeAd {
		return this.#nativeAd;
	}

	set nativeAd(value) {
		this.#native.nativeAd = value?.native;
		this.#nativeAd = value;
	}

	#priceView: View;
	get priceView(): View {
		return this.#priceView;
	}

	set priceView(value) {
		this.#priceView = value;
		this.#native.priceView = value?.nativeView;
	}

	#starRatingView: View;
	get starRatingView(): View {
		return this.#starRatingView;
	}

	set starRatingView(value) {
		this.#starRatingView = value;
		this.#native.starRatingView = value?.nativeView;
	}

	#storeView: View;
	get storeView(): View {
		return this.#storeView;
	}

	set storeView(value) {
		this.#priceView = value;
		this.#native.storeView = value?.nativeView;
	}
}

export class NativeAdLoader implements INativeAdLoader {
	#adUnitId: string;
	#nativeAdOptions?: NativeAdOptions;
	#requestOptions?: RequestOptions;
	#listener: NativeAdEventListener;
	#native: GADAdLoader;
	#delegate: GADAdLoaderDelegateImpl;
	constructor(adUnitId: string, requestOptions: RequestOptions = {}, nativeAdOptions: NativeAdOptions = {}) {
		this.#adUnitId = adUnitId;
		this.#requestOptions = requestOptions;
		this.#nativeAdOptions = nativeAdOptions;
		this.#delegate = GADAdLoaderDelegateImpl.initWithOwner(new WeakRef(this));
	}
	isLoading(): boolean {
		return this.native?.loading ?? false;
	}

	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	load(arg?: any): void {
		const options: GADAdLoaderOptions[] = [];
		if (this.#nativeAdOptions) {
			const managerOptions = this.#nativeAdOptions?.adManagerAdViewOptions;
			if (managerOptions) {
				if (typeof managerOptions.manualImpressionsEnabled === 'boolean') {
					const opt = GAMBannerViewOptions.new();
					opt.enableManualImpressions = managerOptions.manualImpressionsEnabled;
					options.push(opt);
				}
			}

			const nativeAdOptions = this.#nativeAdOptions?.nativeAdOptions;
			if (nativeAdOptions?.adChoicesPlacement) {
				const placement = GADNativeAdViewAdOptions.new();
				switch (nativeAdOptions.adChoicesPlacement) {
					case AdChoicesPlacement.BOTTOM_LEFT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.BottomLeftCorner;
						break;
					case AdChoicesPlacement.BOTTOM_RIGHT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.BottomRightCorner;
						break;
					case AdChoicesPlacement.TOP_LEFT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.TopLeftCorner;
						break;
					case AdChoicesPlacement.TOP_RIGHT:
						placement.preferredAdChoicesPosition = GADAdChoicesPosition.TopRightCorner;
						break;
				}
				options.push(placement);
			}

			if (typeof nativeAdOptions?.customMuteThisAd === 'boolean') {
				const customMuteThisAd = GADNativeMuteThisAdLoaderOptions.new();
				customMuteThisAd.customMuteThisAdRequested = nativeAdOptions.customMuteThisAd;
				options.push(customMuteThisAd);
			}

			if (nativeAdOptions?.mediaAspectRatio) {
				const mediaAspectRatio = GADNativeAdMediaAdLoaderOptions.new();
				switch (nativeAdOptions.mediaAspectRatio) {
					case MediaAspectRatio.LANDSCAPE:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Landscape;
						break;
					case MediaAspectRatio.PORTRAIT:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Portrait;
						break;
					case MediaAspectRatio.SQUARE:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Square;
						break;
					case MediaAspectRatio.ANY:
						mediaAspectRatio.mediaAspectRatio = GADMediaAspectRatio.Any;
						break;
				}
				options.push(mediaAspectRatio);
			}

			if (typeof nativeAdOptions?.multipleImages === 'boolean') {
				const multipleImagesKey = GADNativeAdImageAdLoaderOptions.new();
				multipleImagesKey.shouldRequestMultipleImages = nativeAdOptions.multipleImages;
				options.push(multipleImagesKey);
			}

			// probably handled already
			if (typeof nativeAdOptions?.returnUrlsForImageAssets === 'boolean') {
			}

			const videoOptions = nativeAdOptions?.videoOptions;
			if (videoOptions) {
				const videoOpts = GADVideoOptions.new();
				if (typeof videoOptions.clickToExpandRequested === 'boolean') {
					videoOpts.clickToExpandRequested = videoOptions.clickToExpandRequested;
				}

				if (typeof videoOptions.customControlsRequested === 'boolean') {
					videoOpts.customControlsRequested = videoOptions.customControlsRequested;
				}

				if (typeof videoOptions.startMuted === 'boolean') {
					videoOpts.startMuted = videoOptions.startMuted;
				}

				options.push(videoOpts);
			}
		}

		if (typeof arg === 'number') {
			const numberOfAds = GADMultipleAdsAdLoaderOptions.new();
			numberOfAds.numberOfAds = arg;
			options.push(numberOfAds);
		}

		this.#native = GADAdLoader.alloc().initWithAdUnitIDRootViewControllerAdTypesOptions(this.#adUnitId, topViewController(), [TNSGA.AdLoaderAdTypeToString(AdLoaderAdType.Native)], options);
		this.#native.delegate = this.#delegate;

		if (arg) {
			if (typeof arg === 'number') {
				this.#native.loadRequest(toSerializeRequestOptions(this.#requestOptions));
			}

			if (typeof arg === 'object') {
				this.#native.loadRequest(toSerializeManagerRequestOptions(arg));
			}
		} else {
			this.#native.loadRequest(toSerializeRequestOptions(this.#requestOptions));
		}
	}

	get _listener() {
		return this.#listener;
	}

	onAdEvent(listener: NativeAdEventListener) {
		this.#listener = listener;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class NativeAd implements INativeAd {
	#adUnitId: string;
	#native?: GADNativeAd;
	#listener: AdEventListener;
	#delegate: GADNativeAdDelegateImpl;
	static fromNative(nativeAd: GADNativeAd) {
		if (nativeAd instanceof GADNativeAd) {
			const ad = new NativeAd();
			ad.#native = nativeAd;
			ad.#delegate = GADNativeAdDelegateImpl.initWithOwner(new WeakRef(ad));
			nativeAd.delegate = ad.#delegate;
			return ad;
		}
		return null;
	}

	get _listener() {
		return this.#listener;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	onAdEvent(listener: AdEventListener) {
		this.#listener = listener;
	}

	destroy(): void {}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}

	get body() {
		return this.native?.body;
	}

	get callToAction() {
		return this.native?.callToAction;
	}

	get headline() {
		return this.native?.headline;
	}

	get price() {
		return this.native?.price;
	}

	get mediaContent() {
		return MediaContent.fromNative(this.native?.mediaContent);
	}

	isCustomClickGestureEnabled(): boolean {
		return this.native?.customClickGestureEnabled;
	}
	enableCustomClickGesture(): void {
		this.native?.enableCustomClickGestures?.();
	}

	get advertiser(): string {
		return this.native?.advertiser;
	}

	recordCustomClickGesture() {
		this.native?.recordCustomClickGesture?.();
	}

	#unconfirmedClickListener?: UnconfirmedClickListener;
	get _unconfirmedClickListener() {
		return this.#unconfirmedClickListener;
	}
	#unconfirmedClickDelegate?: GADNativeAdUnconfirmedClickDelegateImpl;
	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void {
		this.native.unconfirmedClickDelegate;
		if (this.#unconfirmedClickListener) {
			this.native.unconfirmedClickDelegate = null;
			this.#unconfirmedClickListener = null;
		}

		if (listener) {
			this.#unconfirmedClickDelegate = GADNativeAdUnconfirmedClickDelegateImpl.initWithOwner(new WeakRef(this));
			this.#unconfirmedClickListener = listener;
			if (this.native) {
				this.native.unconfirmedClickDelegate = this.#unconfirmedClickDelegate;
			}
		}
	}

	get icon() {
		return NativeAdImage.fromNative(this.native.icon);
	}

	get store() {
		return this.native?.store;
	}

	get starRating() {
		return this.native?.starRating?.floatValue;
	}

	get muteThisAdReasons() {
		const result = [];
		const reasons = this.native?.muteThisAdReasons;
		if (reasons) {
			const size = reasons.count;
			for (let i = 0; i < size; i++) {
				result.push(MuteThisAdReason.fromNative(reasons.objectAtIndex(i)));
			}
		}
		return result;
	}

	get images() {
		const result = [];
		const images = this.native?.images;
		if (images) {
			const size = images.count;
			for (let i = 0; i < size; i++) {
				result.push(NativeAdImage.fromNative(images.objectAtIndex(i)));
			}
		}
		return result;
	}
}

export class MediaContent implements IMediaContent {
	#native: GADMediaContent;

	static fromNative(content: GADMediaContent): MediaContent {
		if (content instanceof GADMediaContent) {
			const mediaContent = new MediaContent();
			mediaContent.#native = content;
			return mediaContent;
		}
		return null;
	}

	get aspectRatio(): number {
		return this.native?.aspectRatio;
	}

	get currentTime(): number {
		return this.native?.currentTime;
	}
	get duration(): number {
		return this.native?.duration;
	}

	get mainImage(): any {
		return this.native?.mainImage;
	}

	set mainImage(value) {
		this.native.mainImage = value;
	}

	get hasVideoContent(): boolean {
		return this.native?.hasVideoContent;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class VideoController implements IVideoController {
	_status = VideoStatus.Unstarted;
	#native: GADVideoController;
	#delegate: GADVideoControllerDelegateImpl;
	_isMute: boolean = false;
	static fromNative(controller: GADVideoController) {
		if (controller instanceof GADVideoController) {
			const ctrl = new VideoController();
			ctrl.#native = controller;
			ctrl.#delegate = GADVideoControllerDelegateImpl.initWithOwner(new WeakRef(ctrl));
			ctrl.#native.delegate = ctrl.#delegate;
			return ctrl;
		}
		return null;
	}

	get status() {
		return this._status;
	}

	clickToExpandEnabled(): boolean {
		return this.native?.clickToExpandEnabled?.();
	}
	customControlsEnabled(): boolean {
		return this.native?.customControlsEnabled?.();
	}
	pause(): void {
		this.native?.pause?.();
	}
	play(): void {
		this.native?.play?.();
	}
	get mute() {
		return this._isMute;
	}

	set mute(value) {
		this.native?.setMute?.(value);
	}
	stop(): void {
		this.native?.stop?.();
	}

	get native() {
		return this.#native;
	}

	get aniosdroid() {
		return this.native;
	}
}

export class MediaView extends MediaViewBase {
	#contentView: GADMediaView;
	createNativeView() {
		this.#contentView = GADMediaView.new();
		this.#contentView.contentMode = UIViewContentMode.ScaleAspectFit;
		return this.#contentView;
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeView;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}

	[mediaContentProperty.setNative](content) {
		if (this.#contentView) {
			this.#contentView.mediaContent = content?.native || null;
		}
	}

	[stretchProperty.setNative](value) {
		if (!this.#contentView) {
			return;
		}
		switch (value) {
			case 'aspectFit':
				this.#contentView.contentMode = UIViewContentMode.ScaleAspectFit;
				break;
			case 'aspectFill':
				this.#contentView.contentMode = UIViewContentMode.ScaleAspectFill;
				break;
			case 'fill':
				this.#contentView.contentMode = UIViewContentMode.ScaleToFill;
				break;
			case 'none':
			default:
				this.#contentView.contentMode = UIViewContentMode.TopLeft;
				break;
		}
	}

	get native() {
		return this.#contentView;
	}
}

export class NativeAdImage implements INativeAdImage {
	#native: GADNativeAdImage;
	static fromNative(image: GADNativeAdImage) {
		if (image instanceof GADNativeAdImage) {
			const img = new NativeAdImage();
			img.#native = image;
			return img;
		}
		return null;
	}

	get image() {
		return new ImageSource(this.native?.image);
	}

	get url(): string {
		return this.native?.imageURL?.absoluteString;
	}

	get scale(): number {
		return this.native?.scale;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class MuteThisAdReason implements IMuteThisAdReason {
	#native: GADMuteThisAdReason;
	static fromNative(reason: GADMuteThisAdReason) {
		if (reason instanceof GADMuteThisAdReason) {
			const muteThisAdReason = new MuteThisAdReason();
			muteThisAdReason.#native = reason;
			return muteThisAdReason;
		}
		return null;
	}
	get description(): string {
		return this.native?.reasonDescription;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

@NativeClass
@ObjCClass(GADNativeAdDelegate)
class GADNativeAdDelegateImpl extends NSObject implements GADNativeAdDelegate {
	_owner: WeakRef<NativeAd>;
	static initWithOwner(owner: WeakRef<NativeAd>) {
		const delegate = <GADNativeAdDelegateImpl>GADNativeAdDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	nativeAdDidDismissScreen(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(AdEventType.CLOSED, null, null);
	}

	nativeAdDidRecordClick(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(AdEventType.CLICKED, null, null);
	}

	nativeAdDidRecordImpression(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(AdEventType.IMPRESSION, null, null);
	}

	nativeAdIsMuted(nativeAd: GADNativeAd): void {}

	nativeAdWillDismissScreen(nativeAd: GADNativeAd): void {}

	nativeAdWillPresentScreen(nativeAd: GADNativeAd): void {}
}

@NativeClass
@ObjCClass(GADNativeAdLoaderDelegate)
class GADAdLoaderDelegateImpl extends NSObject implements GADNativeAdLoaderDelegate {
	_owner: WeakRef<NativeAdLoader>;
	static initWithOwner(owner: WeakRef<NativeAdLoader>) {
		const delegate = <GADAdLoaderDelegateImpl>GADAdLoaderDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	adLoaderDidFailToReceiveAdWithError(adLoader: GADAdLoader, error: NSError): void {
		this._owner?.get?.()._listener?.(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(error), null);
	}
	adLoaderDidFinishLoading(adLoader: GADAdLoader): void {
		this._owner?.get?.()._listener?.(AdEventType.LOADED);
	}

	adLoaderDidReceiveNativeAd(adLoader: GADAdLoader, nativeAd: GADNativeAd): void {
		this._owner?.get?.()._listener?.(NativeAdEventType.LOADED, null, NativeAd.fromNative(nativeAd));
	}
}

@NativeClass
@ObjCClass(GADNativeAdUnconfirmedClickDelegate)
class GADNativeAdUnconfirmedClickDelegateImpl extends NSObject implements GADNativeAdUnconfirmedClickDelegate {
	_owner: WeakRef<NativeAd>;
	static initWithOwner(owner: WeakRef<NativeAd>) {
		const delegate = <GADNativeAdUnconfirmedClickDelegateImpl>GADNativeAdUnconfirmedClickDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	nativeAdDidCancelUnconfirmedClick(nativeAd: GADNativeAd): void {
		this._owner?.get?.()._unconfirmedClickListener?.unconfirmedClickCancelled?.();
	}
	nativeAdDidReceiveUnconfirmedClickOnAssetID(nativeAd: GADNativeAd, assetID: string): void {
		this._owner?.get?.()._unconfirmedClickListener?.unconfirmedClickReceived?.(assetID);
	}
}

@NativeClass
@ObjCClass(GADVideoControllerDelegate)
class GADVideoControllerDelegateImpl extends NSObject implements GADVideoControllerDelegate {
	_owner: WeakRef<VideoController>;
	static initWithOwner(owner: WeakRef<VideoController>): GADVideoControllerDelegateImpl {
		const delegate = <GADVideoControllerDelegateImpl>GADVideoControllerDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	videoControllerDidEndVideoPlayback(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._status = VideoStatus.Ended;
		}
	}

	videoControllerDidMuteVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._isMute = true;
		}
	}

	videoControllerDidPauseVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._status = VideoStatus.Paused;
		}
	}

	videoControllerDidPlayVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._status = VideoStatus.Playing;
		}
	}

	videoControllerDidUnmuteVideo(videoController: GADVideoController): void {
		const owner = this._owner?.get?.();
		if (owner) {
			owner._isMute = false;
		}
	}
}
