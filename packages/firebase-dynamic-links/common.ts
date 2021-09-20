import { FirebaseApp } from '@nativescript/firebase-core';

export enum ShortLinkType {
	DEFAULT = 'default',
	SHORT = 'short',
	UNGUESSABLE = 'unguessable',
}

export interface IDynamicLinkSocialParameters {
	descriptionText: undefined | string;
	imageUrl: undefined | string;
	title: undefined | string;
}

export interface IDynamicLinkNavigationParameters {
	forcedRedirectEnabled: undefined | false | true;
}

export interface IDynamicLinkITunesParameters {
	affiliateToken: undefined | string;
	campaignToken: undefined | string;
	providerToken: undefined | string;
}

export interface IDynamicLinkIOSParameters {
	appStoreId: undefined | string;
	bundleId: string;
	customScheme: undefined | string;
	fallbackUrl: undefined | string;
	iPadBundleId: undefined | string;
	iPadFallbackUrl: undefined | string;
	minimumVersion: undefined | string;
}

export interface IDynamicLinkAndroidParameters {
	fallbackUrl: undefined | string;
	minimumVersion: undefined | number;
	packageName: string;
}

export interface IDynamicLinkAnalyticsParameters {
	campaign: undefined | string;

	content: undefined | string;

	medium: undefined | string;

	source: undefined | string;

	term: undefined | string;
}

export interface IDynamicLinkParameters {
	analytics: IDynamicLinkAnalyticsParameters;
	android: IDynamicLinkAndroidParameters;
	domainUriPrefix: string;
	ios: IDynamicLinkIOSParameters;
	itunes: IDynamicLinkITunesParameters;
	link: string;
	navigation: IDynamicLinkNavigationParameters;
	social: IDynamicLinkSocialParameters;
}

export interface IDynamicLink {
	minimumAppVersion: number | string | null;
	url: string;
	utmParameters: Record<string, string>;
}

export interface IDynamicLinks {
	app: FirebaseApp;
	createLink(link: string, domainUriPrefix: string): IDynamicLinkParameters;
	createShortLink(link: string, domainUriPrefix: string, shortLinkType?: ShortLinkType): IDynamicLinkParameters;
	buildLink(link: IDynamicLinkParameters): Promise<string>;
	onLink(listener: (link: IDynamicLink) => void);
	resolveLink(link: string): Promise<IDynamicLink>;
}
