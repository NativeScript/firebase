import { FirebaseApp } from '@nativescript/firebase-core';
import { ShortLinkType } from './common';

export { ShortLinkType };

export class DynamicLinkAnalyticsParameters implements IDynamicLinkAnalyticsParameters {
	readonly native;
	readonly ios;
	readonly android;
	campaign: undefined | string;
	content: undefined | string;
	medium: undefined | string;
	source: undefined | string;
	term: undefined | string;
}

export declare class DynamicLinkAndroidParameters implements IDynamicLinkAndroidParameters {
	constructor(packageName: string);

	readonly packageName: string;
	readonly native;
	readonly ios;
	readonly android;
	fallbackUrl: string;
	minimumVersion: string;
}

export declare class DynamicLinkIOSParameters implements IDynamicLinkIOSParameters {
	constructor(bundleId?: string);

	appStoreId: string;
	readonly bundleId: string;
	customScheme: string;
	fallbackUrl: string;

	iPadBundleId: string;

	iPadFallbackUrl: string;

	minimumVersion: string;

	readonly native;
	readonly ios;
	readonly android;
}

export declare class DynamicLinkITunesParameters implements IDynamicLinkITunesParameters {
	affiliateToken: string;

	campaignToken: string;

	providerToken: string;

	readonly native;
	readonly ios;
	readonly android;
}

export declare class DynamicLinkNavigationParameters implements IDynamicLinkNavigationParameters {
	forcedRedirectEnabled: boolean;
	readonly native;
	readonly ios;
	readonly android;
}

export declare class DynamicLinkSocialParameters implements IDynamicLinkSocialParameters {
	descriptionText: string;
	imageUrl: string;
	title: string;

	readonly native;
	readonly ios;
	readonly android;
}

export declare class DynamicLinkParameters implements IDynamicLinkParameters {
	analytics: DynamicLinkAnalyticsParameters;
	android: DynamicLinkAndroidParameters;
	domainUriPrefix: string;
	ios: DynamicLinkIOSParameters;
	itunes: DynamicLinkITunesParameters;
	navigation: DynamicLinkNavigationParameters;
	social: DynamicLinkSocialParameters;
	readonly native;
}

export declare class DynamicLink implements IDynamicLink {
	readonly minimumAppVersion: string;
	readonly url: string;
	readonly utmParameters: Record<string, string>;
	readonly native;
	readonly ios;
	readonly android;
}

export declare class DynamicLinks implements IDynamicLinks {
	createLink(link: string, domainUriPrefix: string): DynamicLinkParameters;

	createShortLink(link: string, domainUriPrefix: string, shortLinkType?: ShortLinkType): DynamicLinkParameters;

	buildLink(link: DynamicLinkParameters): Promise<string>;

	onLink(listener: (link: DynamicLink) => void);

	resolveLink(link: string): Promise<DynamicLink>;

	readonly native;
	readonly ios;
	readonly android;
	readonly app: FirebaseApp;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseDynamicLinks {}
}

export interface FirebaseDynamicLinks {
	static dynamicLinks(app?: FirebaseApp): DynamicLinks;
}
