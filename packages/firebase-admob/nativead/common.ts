import { CoreTypes, CSSType, GridLayout, ImageSource, Property, View } from '@nativescript/core';
import { AdEventListener, AdEventType, BannerAdSizeBase, ManagerRequestOptions } from '../common';

@CSSType('NativeAdView')
export abstract class NativeAdViewBase extends GridLayout {
	abstract adChoicesView: View;

	abstract advertiserView: View;

	abstract bodyView: View;

	abstract callToActionView: View;

	abstract headlineView: View;

	abstract iconView: View;

	abstract imageView: View;

	abstract mediaView: MediaViewBase;

	abstract nativeAd: INativeAd;

	abstract priceView: View;

	abstract starRatingView: View;

	abstract storeView: View;
}

export interface IMediaContent {
	aspectRatio: number;
	currentTime: number;
	duration: number;
	mainImage: any;
	hasVideoContent: boolean;
}

export const stretchProperty = new Property<MediaViewBase, CoreTypes.ImageStretchType>({
	name: 'stretch',
	defaultValue: 'aspectFit',
	affectsLayout: global.isIOS,
});

@CSSType('MediaView')
export abstract class MediaViewBase extends View {
	abstract mediaContent: IMediaContent;
	stretch: CoreTypes.ImageStretchType;
}

stretchProperty.register(MediaViewBase);

export enum VideoStatus {
	Unstarted,
	Playing,
	Paused,
	Ended,
}

export interface IVideoController {
	status: VideoStatus;

	clickToExpandEnabled(): boolean;

	customControlsEnabled(): boolean;

	pause(): void;

	play(): void;

	mute: boolean;

	stop(): void;
}

export enum MediaAspectRatio {
	LANDSCAPE = 'landscape',
	PORTRAIT = 'portrait',
	SQUARE = 'square',
	ANY = 'any',
}

export enum AdChoicesPlacement {
	TOP_LEFT = 'topLeft',
	TOP_RIGHT = 'topRight',
	BOTTOM_RIGHT = 'bottomRight',
	BOTTOM_LEFT = 'bottomLeft',
}

export interface NativeAdOptions {
	nativeAdOptions?: {
		adChoicesPlacement?: AdChoicesPlacement;
		mediaAspectRatio?: MediaAspectRatio;
		customMuteThisAd?: boolean;
		multipleImages?: boolean;
		returnUrlsForImageAssets?: boolean;
		videoOptions?: {
			startMuted?: boolean;
			clickToExpandRequested?: boolean;
			customControlsRequested?: boolean;
		};
	};
	adSizes?: BannerAdSizeBase[];
	adManagerAdViewOptions?: {
		manualImpressionsEnabled?: boolean;
		shouldDelayBannerRendering?: boolean;
	};
}

export interface IResponseInfo {}

export interface UnconfirmedClickListener {
	unconfirmedClickReceived?(value: string);
	unconfirmedClickCancelled?(): void;
}

export interface IMuteThisAdReason {
	description: string;
}

export class INativeAdImage {
	image: any;
	url: string;
	scale: number;
}

export enum NativeAdEventType {
	LOADED = 'native_ad_loaded',
}

export type NativeAdEventListener = (type: AdEventType | NativeAdEventType, error?: Error, data?: any | INativeAd) => void;

export interface INativeAdLoader {
	isLoading(): boolean;
	load(maxAdCount?: number): void;
	load(requestOptions?: ManagerRequestOptions): void;
	load(): void;
	onAdEvent(listener: NativeAdEventListener);
}

export interface INativeAd {
	adUnitId: string;
	onAdEvent(listener: AdEventListener);
	destroy(): void;
	advertiser: string;
	body: string;
	callToAction: string;
	headline: string;
	price: string;
	isCustomClickGestureEnabled(): boolean;
	enableCustomClickGesture(): void;
	recordCustomClickGesture(): void;
	setUnconfirmedClickListener(listener?: UnconfirmedClickListener): void;
	images: INativeAdImage[];
	icon: INativeAdImage;
	store: string;
	starRating: number;
	muteThisAdReasons: IMuteThisAdReason[];
}
