import { ImageSource, CoreTypes, AddChildFromBuilder } from '@nativescript/core';
import { FirebaseError } from '@nativescript/firebase-core';
import { AdEventListener, AdEventType, ManagerRequestOptions, RequestOptions } from '../common';
import { topViewController, toSerializeManagerRequestOptions, toSerializeRequestOptions } from '../utils';
import { AdChoicesPlacement, IMediaContent, IMuteThisAdReason, INativeAd, INativeAdImage, INativeAdLoader, IVideoController, MediaAspectRatio, MediaViewBase, NativeAdEventListener, NativeAdEventType, NativeAdOptions, UnconfirmedClickListener, VideoStatus } from './common';

export { VideoStatus, AdEventType, AdChoicesPlacement, MediaAspectRatio, NativeAdEventType };

export declare class NativeAdView extends NativeAdViewBase implements AddChildFromBuilder {
	adChoicesView: View;

	advertiserView: View;

	bodyView: View;

	callToActionView: View;

	headlineView: View;

	iconView: View;

	imageView: View;

	mediaView: MediaView;

	nativeAd: NativeAd;

	priceView: View;

	starRatingView: View;

	storeView: View;
}

export declare class NativeAdLoader implements INativeAdLoader {
	constructor(adUnitId: string);
	constructor(adUnitId: string, requestOptions: RequestOptions);
	constructor(adUnitId: string, requestOptions: RequestOptions, nativeAdOptions: NativeAdOptions);

	isLoading(): boolean;

	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	load(arg?: any): void;

	onAdEvent(listener: NativeAdEventListener);

	readonly native;
	readonly android;
	readonly ios;
}

export declare class NativeAd implements INativeAd {
	readonly adUnitId: string;
	onAdEvent(listener: AdEventListener);

	destroy(): void;

	readonly native;
	readonly android;
	readonly ios;

	readonly getAdvertiser: string;

	readonly body: string;

	readonly callToAction: string;
	readonly headline: string;

	readonly price: string;

	readonly mediaContent: MediaContent;

	isCustomClickGestureEnabled(): boolean;
	enableCustomClickGesture(): void;

	readonly advertiser: string;

	recordCustomClickGesture(): void;

	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void;

	readonly icon: NativeAdImage;

	readonly store: string;

	readonly starRating: number;

	readonly muteThisAdReasons: MuteThisAdReason[];

	readonly images: NativeAdImage[];
}

export declare class MediaContent implements IMediaContent {
	readonly aspectRatio: number;
	readonly currentTime: number;
	readonly duration: number;
	mainImage: any;
	readonly hasVideoContent: boolean;
	readonly native;
	readonly android;
	readonly ios;
}

export declare class VideoController implements IVideoController {
	readonly status: VideoStatus;

	clickToExpandEnabled(): boolean;
	customControlsEnabled(): boolean;
	pause(): void;
	play(): void;
	mute: boolean;
	stop(): void;
	readonly native;
	readonly android;
	readonly ios;
}

export declare class MediaView extends MediaViewBase {
	mediaContent: MediaContent;
	stretch: CoreTypes.ImageStretchType;
}

export declare class NativeAdImage implements INativeAdImage {
	readonly image: ImageSource;

	readonly url: string;

	readonly scale: number;

	readonly native;
	readonly android;
	readonly ios;
}
