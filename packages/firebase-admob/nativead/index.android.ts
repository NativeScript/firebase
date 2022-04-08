import { AddChildFromBuilder, Application, CSSType, ImageSource, View } from '@nativescript/core';
import { FirebaseError } from '@nativescript/firebase-core';
import { AdEventListener, AdEventType, ManagerRequestOptions, RequestOptions } from '../common';
import { IMediaContent, IMuteThisAdReason, INativeAd, INativeAdImage, IVideoController, MediaViewBase, NativeAdOptions, UnconfirmedClickListener, VideoStatus, AdChoicesPlacement, MediaAspectRatio, INativeAdLoader, NativeAdEventListener, NativeAdEventType, stretchProperty, NativeAdViewBase, mediaContentProperty } from './common';

export { VideoStatus, AdEventType, AdChoicesPlacement, MediaAspectRatio, NativeAdEventType };

const NATIVE_AD_LOADED_EVENT = 'adNativeAdLoaded';
const AD_MANAGER_AD_VIEW_LOADED_EVENT = 'adManagerAdViewLoaded';

export class NativeAdView extends NativeAdViewBase implements AddChildFromBuilder {
	#native: com.google.android.gms.ads.nativead.NativeAdView;
	#child: View;
	createNativeView() {
		this.#native = new com.google.android.gms.ads.nativead.NativeAdView(this._context);
		return this.#native;
	}

	_addChildFromBuilder(name: string, value: any): void {
		if (value instanceof View && !value.parent && !this.#child) {
			this._addView(value);
			this.#child = value;
		}
	}

	public eachChildView(callback: (child: View) => boolean): void {
		callback(this.#child);
	}

	onLoaded() {
		super.onLoaded();
		if (this.#child && (<any>this.#native).indexOfChild(this.#child.nativeView) === -1) {
			(<any>this.#native).addView(this.#child.nativeView);
		}
	}

	#adChoicesView: View;
	get adChoicesView(): View {
		return this.#adChoicesView;
	}

	set adChoicesView(value) {
		this.#adChoicesView = value;
		this.#native.setAdChoicesView(value?.nativeView);
	}

	#advertiserView: View;
	get advertiserView(): View {
		return this.#advertiserView;
	}

	set advertiserView(value) {
		this.#advertiserView = value;
		this.#native.setAdvertiserView(value?.nativeView);
	}

	#bodyView: View;
	get bodyView(): View {
		return this.#bodyView;
	}

	set bodyView(value) {
		this.#bodyView = value;
		this.#native.setBodyView(value?.nativeView);
	}

	#callToActionView: View;
	get callToActionView(): View {
		return this.#callToActionView;
	}

	set callToActionView(value) {
		this.#callToActionView = value;
		this.#native.setCallToActionView(value?.nativeView);
	}

	#headlineView: View;
	get headlineView(): View {
		return this.#headlineView;
	}

	set headlineView(value) {
		this.#headlineView = value;
		this.#native.setHeadlineView(value?.nativeView);
	}

	#iconView: View;
	get iconView(): View {
		return this.#iconView;
	}

	set iconView(value) {
		this.#iconView = value;
		this.#native.setIconView(value?.nativeView);
	}

	#imageView: View;
	get imageView(): View {
		return this.#imageView;
	}

	set imageView(value) {
		this.imageView = value;
		this.#native.setImageView(value?.nativeView);
	}

	#mediaView: MediaView;
	get mediaView(): MediaView {
		return this.#mediaView;
	}

	set mediaView(value) {
		this.#native.setMediaView(value?.native);
		this.#mediaView = value;
	}

	#nativeAd: NativeAd;
	get nativeAd(): NativeAd {
		return this.#nativeAd;
	}

	set nativeAd(value) {
		this.#native.setNativeAd(value?.native || null);
		this.#nativeAd = value;
	}

	#priceView: View;
	get priceView(): View {
		return this.#priceView;
	}

	set priceView(value) {
		this.#priceView = value;
		this.#native.setPriceView(value?.nativeView);
	}

	#starRatingView: View;
	get starRatingView(): View {
		return this.#starRatingView;
	}

	set starRatingView(value) {
		this.#starRatingView = value;
		this.#native.setStarRatingView(value?.nativeView);
	}

	#storeView: View;
	get storeView(): View {
		return this.#storeView;
	}

	set storeView(value) {
		this.#priceView = value;
		this.#native.setStoreView(value?.nativeView);
	}
}

export class NativeAdLoader implements INativeAdLoader {
	#adUnitId: string;
	#nativeAdOptions?: NativeAdOptions;
	#requestOptions?: RequestOptions;
	#listener: NativeAdEventListener;
	#native: com.google.android.gms.ads.AdLoader;

	constructor(adUnitId: string, requestOptions: RequestOptions = {}, nativeAdOptions: NativeAdOptions = {}) {
		this.#adUnitId = adUnitId;
		this.#requestOptions = requestOptions;
		this.#nativeAdOptions = nativeAdOptions;
	}
	isLoading(): boolean {
		return this.native?.isLoading?.() ?? false;
	}

	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	load(arg?: any): void {
		const ref = new WeakRef(this);
		this.#native = org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.createLoader(
			Application.android.foregroundActivity || Application.android.startActivity,
			this.#adUnitId,
			JSON.stringify(this.#nativeAdOptions || {}),
			new org.nativescript.firebase.admob.FirebaseAdmob.AdLoaderCallback({
				onEvent(event: string, param1: any): void {
					const owner = ref.get();
					let nativeAd: NativeAd;
					switch (event) {
						case AdEventType.CLICKED:
							nativeAd?._listener?.(AdEventType.CLICKED, null, null);
							break;
						case AdEventType.CLOSED:
							nativeAd?._listener?.(AdEventType.CLOSED, null, null);
							break;
						case AdEventType.FAILED_TO_LOAD_EVENT:
							owner?._listener?.(AdEventType.FAILED_TO_LOAD_EVENT, FirebaseError.fromNative(param1), null);
							break;
						case AdEventType.IMPRESSION:
							nativeAd?._listener?.(AdEventType.IMPRESSION, null, null);
							break;
						case AdEventType.LOADED:
							owner?._listener?.(AdEventType.LOADED, null, null);
							break;
						case AdEventType.OPENED:
							owner?._listener?.(AdEventType.OPENED, null, null);
							break;
						case NATIVE_AD_LOADED_EVENT:
							nativeAd = NativeAd.fromNative(param1);
							owner?._listener?.(NativeAdEventType.LOADED, null, nativeAd);
							break;
						case AD_MANAGER_AD_VIEW_LOADED_EVENT:
							// returns adManagerAdView view
							break;
					}
				},
			})
		);
		if (arg) {
			if (typeof arg === 'number') {
				org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.load(this.#native, JSON.stringify(this.#requestOptions), arg);
			}

			if (typeof arg === 'object') {
				org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.load(this.#native, JSON.stringify(arg), true);
			}
		} else {
			org.nativescript.firebase.admob.FirebaseAdmob.NativeAd.load(this.#native, JSON.stringify(this.#requestOptions), false);
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

	get android() {
		return this.native;
	}
}

export class NativeAd implements INativeAd {
	#adUnitId: string;
	#native: com.google.android.gms.ads.nativead.NativeAd;
	#listener: AdEventListener;

	static fromNative(nativeAd: com.google.android.gms.ads.nativead.NativeAd) {
		if (nativeAd instanceof com.google.android.gms.ads.nativead.NativeAd) {
			const ad = new NativeAd();
			ad.#native = nativeAd;
			return ad;
		}
		return null;
	}

	get adUnitId(): string {
		return this.#adUnitId;
	}

	get _listener() {
		return this.#listener;
	}

	onAdEvent(listener: AdEventListener) {
		this.#listener = listener;
	}

	destroy(): void {
		this.native?.destroy?.();
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	get body() {
		return this.native?.getBody();
	}

	get callToAction() {
		return this.native?.getCallToAction?.();
	}

	get headline() {
		return this.native?.getHeadline?.();
	}

	get price() {
		return this.native?.getPrice?.();
	}

	get mediaContent() {
		return MediaContent.fromNative(this.native?.getMediaContent?.());
	}

	isCustomClickGestureEnabled(): boolean {
		return this.native?.isCustomClickGestureEnabled?.();
	}
	enableCustomClickGesture(): void {
		this.native?.enableCustomClickGesture?.();
	}

	get advertiser(): string {
		return this.native?.getAdvertiser?.();
	}

	recordCustomClickGesture() {
		this.native?.recordCustomClickGesture?.();
	}

	#unconfirmedClickListener?: UnconfirmedClickListener;
	#unconfirmedClickListenerNative?: com.google.android.gms.ads.nativead.NativeAd.UnconfirmedClickListener;
	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void {
		if (this.#unconfirmedClickListener) {
			this.native.setUnconfirmedClickListener(null);
			this.#unconfirmedClickListener = null;
		}

		if (listener) {
			const ref = new WeakRef(this);
			this.#unconfirmedClickListenerNative = new com.google.android.gms.ads.nativead.NativeAd.UnconfirmedClickListener({
				onUnconfirmedClickReceived(param0: string): void {
					const owner = ref.get();
					if (owner) {
						owner.#unconfirmedClickListener?.unconfirmedClickReceived?.(param0);
					}
				},
				onUnconfirmedClickCancelled(): void {
					const owner = ref.get();
					if (owner) {
						owner.#unconfirmedClickListener?.unconfirmedClickCancelled?.();
					}
				},
			});
			this.#unconfirmedClickListener = listener;
			this.native?.setUnconfirmedClickListener(this.#unconfirmedClickListenerNative);
		}
	}

	get icon() {
		return NativeAdImage.fromNative(this.native?.getIcon?.());
	}

	get store() {
		return this.native?.getStore?.();
	}

	get starRating() {
		return this.native?.getStarRating?.().doubleValue();
	}

	get muteThisAdReasons() {
		const result = [];
		const reasons = this.native?.getMuteThisAdReasons?.();
		if (reasons) {
			const size = reasons.size();
			for (let i = 0; i < size; i++) {
				result.push(MuteThisAdReason.fromNative(reasons.get(i)));
			}
		}
		return result;
	}
	get images() {
		const result = [];
		const images = this.native?.getImages?.();
		if (images) {
			const size = images.size();
			for (let i = 0; i < size; i++) {
				result.push(NativeAdImage.fromNative(images.get(i)));
			}
		}
		return result;
	}
}

export class MediaContent implements IMediaContent {
	#native: com.google.android.gms.ads.MediaContent;

	static fromNative(content: com.google.android.gms.ads.MediaContent): MediaContent {
		if (content instanceof com.google.android.gms.ads.MediaContent) {
			const mediaContent = new MediaContent();
			mediaContent.#native = content;
			return mediaContent;
		}
		return null;
	}

	get aspectRatio(): number {
		return this.native?.getAspectRatio?.();
	}

	get currentTime(): number {
		return this.native?.getCurrentTime?.();
	}
	get duration(): number {
		return this.native?.getDuration?.();
	}

	get mainImage(): any {
		return this.native?.getMainImage?.();
	}

	set mainImage(value) {
		this.native.setMainImage(value);
	}

	get hasVideoContent(): boolean {
		return this.native?.hasVideoContent();
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

let VideoLifecycleCallbacks;

function ensureVideoLifecycleCallbacks() {
	if (VideoLifecycleCallbacks) {
		return;
	}

	class VideoLifecycleCallbacksImpl extends com.google.android.gms.ads.VideoController.VideoLifecycleCallbacks {
		_owner: WeakRef<VideoController>;
		constructor(owner: WeakRef<VideoController>) {
			super();
			this._owner = owner;
			return global.__native(this);
		}
		public onVideoPlay(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Playing;
			}
		}
		public onVideoStart(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Playing;
			}
		}
		public onVideoPause(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Paused;
			}
		}
		public onVideoMute(param0: boolean): void {}
		public onVideoEnd(): void {
			const owner = this._owner?.get?.();
			if (owner) {
				owner._status = VideoStatus.Ended;
			}
		}
	}

	VideoLifecycleCallbacks = VideoLifecycleCallbacksImpl;
}

export class VideoController implements IVideoController {
	#native: com.google.android.gms.ads.VideoController;
	_status: VideoStatus = VideoStatus.Unstarted;

	static fromNative(controller: com.google.android.gms.ads.VideoController) {
		if (controller instanceof com.google.android.gms.ads.VideoController) {
			ensureVideoLifecycleCallbacks();
			const ctrl = new VideoController();
			ctrl.#native = controller;
			controller.setVideoLifecycleCallbacks(new VideoLifecycleCallbacks(new WeakRef(this)));
			return ctrl;
		}
		return null;
	}

	clickToExpandEnabled(): boolean {
		return this.native?.isClickToExpandEnabled?.();
	}
	customControlsEnabled(): boolean {
		return this.native?.isCustomControlsEnabled?.();
	}
	pause(): void {
		this.native?.pause?.();
	}
	play(): void {
		this.native?.play?.();
	}
	get mute() {
		return this.native?.isMuted?.();
	}

	set mute(value) {
		this.native?.mute?.(value);
	}
	stop(): void {
		this.native?.stop?.();
	}

	get status() {
		return this._status;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class MediaView extends MediaViewBase {
	#contentView: com.google.android.gms.ads.nativead.MediaView;
	createNativeView() {
		this.#contentView = new com.google.android.gms.ads.nativead.MediaView(this._context);
		return this.#contentView;
	}

	[mediaContentProperty.setNative](content) {
		if (this.#contentView) {
			this.#contentView?.setMediaContent(content?.native || null);
		}
	}

	[stretchProperty.setNative](value) {
		if (!this.#contentView) {
			return;
		}
		switch (value) {
			case 'aspectFit':
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
				break;
			case 'aspectFill':
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
				break;
			case 'fill':
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
				break;
			case 'none':
			default:
				this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
				break;
		}
	}

	get native() {
		return this.#contentView;
	}
}

export class NativeAdImage implements INativeAdImage {
	#native: com.google.android.gms.ads.nativead.NativeAd.Image;
	static fromNative(image: com.google.android.gms.ads.nativead.NativeAd.Image) {
		if (image instanceof com.google.android.gms.ads.nativead.NativeAd.Image) {
			const nativeAdImage = new NativeAdImage();
			nativeAdImage.#native = image;
			return nativeAdImage;
		}
		return null;
	}

	get image() {
		return new ImageSource(org.nativescript.firebase.admob.FirebaseAdmob.getBitmap(this.native?.getDrawable?.() || null));
	}

	get url(): string {
		return this.native?.getUri?.().toString?.();
	}

	get scale(): number {
		return this.native?.getScale?.();
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class MuteThisAdReason implements IMuteThisAdReason {
	#native: com.google.android.gms.ads.MuteThisAdReason;
	static fromNative(reason: com.google.android.gms.ads.MuteThisAdReason) {
		if (reason instanceof com.google.android.gms.ads.MuteThisAdReason) {
			const muteThisAdReason = new MuteThisAdReason();
			muteThisAdReason.#native = reason;
			return muteThisAdReason;
		}
		return null;
	}
	get description(): string {
		return this.native?.getDescription?.();
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}
