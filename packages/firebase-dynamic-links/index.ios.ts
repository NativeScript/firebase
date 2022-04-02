import { Application } from '@nativescript/core';
import { deserialize, firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { IDynamicLink, IDynamicLinkAnalyticsParameters, IDynamicLinkAndroidParameters, IDynamicLinkIOSParameters, IDynamicLinkITunesParameters, IDynamicLinkNavigationParameters, IDynamicLinkParameters, IDynamicLinks, IDynamicLinkSocialParameters, ShortLinkType } from './common';

let defaultDynamicLinks: DynamicLinks;
const fb = firebase();
Object.defineProperty(fb, 'dynamicLinks', {
	value: () => {
		if (!defaultDynamicLinks) {
			defaultDynamicLinks = new DynamicLinks();
		}
		return defaultDynamicLinks;
	},
	writable: false,
});

declare const FIRApp, TNSFirebaseDynamicLinksAppDelegate;

export class DynamicLinkAnalyticsParameters implements IDynamicLinkAnalyticsParameters {
	#native: FIRDynamicLinkGoogleAnalyticsParameters;

	constructor() {
		this.#native = FIRDynamicLinkGoogleAnalyticsParameters.parameters();
	}

	static fromNative(link: FIRDynamicLinkGoogleAnalyticsParameters) {
		if (link instanceof FIRDynamicLinkGoogleAnalyticsParameters) {
			const result = new DynamicLinkAnalyticsParameters();
			result.#native = link;
			return result;
		}
		return null;
	}

	get campaign(): undefined | string {
		return this.native.campaign;
	}

	set campaign(value) {
		this.native.campaign = value;
	}

	get content(): undefined | string {
		return this.native.content;
	}

	set content(value) {
		this.native.content = value;
	}

	get medium(): undefined | string {
		return this.native.medium;
	}

	set medium(value) {
		this.native.medium = value;
	}

	get source(): undefined | string {
		return this.native.source;
	}

	set source(value) {
		this.native.source = value;
	}

	get term(): undefined | string {
		return this.native.term;
	}

	set term(value) {
		this.native.term = value;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class DynamicLinkAndroidParameters implements IDynamicLinkAndroidParameters {
	#native: FIRDynamicLinkAndroidParameters;

	constructor(packageName?: string) {
		this.#native = FIRDynamicLinkAndroidParameters.parametersWithPackageName(packageName);
	}

	static fromNative(link: FIRDynamicLinkAndroidParameters) {
		if (link instanceof FIRDynamicLinkAndroidParameters) {
			const result = new DynamicLinkAndroidParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get fallbackUrl(): string {
		return this.native.fallbackURL?.absoluteString;
	}

	set fallbackUrl(value) {
		this.native.fallbackURL = NSURL.URLWithString(value);
	}

	get minimumVersion() {
		return this.native.minimumVersion;
	}

	set minimumVersion(value) {
		this.native.minimumVersion = value;
	}

	get packageName(): string {
		return this.native.packageName;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class DynamicLinkIOSParameters implements IDynamicLinkIOSParameters {
	#native: FIRDynamicLinkIOSParameters;
	constructor(bundleId?: string) {
		const id = bundleId || NSBundle.mainBundle.bundleIdentifier;
		this.#native = FIRDynamicLinkIOSParameters.parametersWithBundleID(id);
	}
	static fromNative(link: FIRDynamicLinkIOSParameters) {
		if (link instanceof FIRDynamicLinkIOSParameters) {
			const result = new DynamicLinkIOSParameters();
			result.#native = link;
			return result;
		}
		return null;
	}

	get appStoreId(): string {
		return this.native.appStoreID;
	}

	set appStoreId(value) {
		this.native.appStoreID = value;
	}

	get bundleId(): string {
		return this.native.bundleID;
	}

	get customScheme(): string {
		return this.native.customScheme;
	}

	set customScheme(value) {
		this.native.customScheme = value;
	}
	get fallbackUrl(): string {
		return this.native.fallbackURL?.absoluteString;
	}

	set fallbackUrl(value) {
		this.native.fallbackURL = NSURL.URLWithString(value);
	}

	get iPadBundleId(): string {
		return this.native.iPadBundleID;
	}

	set iPadBundleId(value) {
		this.native.iPadBundleID = value;
	}

	get iPadFallbackUrl(): string {
		return this.native.iPadFallbackURL?.absoluteString;
	}

	set iPadFallbackUrl(value) {
		this.native.iPadFallbackURL = NSURL.URLWithString(value);
	}

	get minimumVersion(): string {
		return this.native.minimumAppVersion;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class DynamicLinkITunesParameters implements IDynamicLinkITunesParameters {
	#native: FIRDynamicLinkItunesConnectAnalyticsParameters;
	constructor() {
		this.#native = FIRDynamicLinkItunesConnectAnalyticsParameters.parameters();
	}
	static fromNative(link: FIRDynamicLinkItunesConnectAnalyticsParameters) {
		if (link instanceof FIRDynamicLinkItunesConnectAnalyticsParameters) {
			const result = new DynamicLinkITunesParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get affiliateToken(): string {
		return this.native.affiliateToken;
	}

	set affiliateToken(value) {
		this.native.affiliateToken = value;
	}

	get campaignToken(): string {
		return this.native.campaignToken;
	}

	set campaignToken(value) {
		this.native.campaignToken = value;
	}

	get providerToken(): string {
		return this.native.providerToken;
	}

	set providerToken(value) {
		this.native.providerToken = value;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class DynamicLinkNavigationParameters implements IDynamicLinkNavigationParameters {
	#native: FIRDynamicLinkNavigationInfoParameters;
	constructor() {
		this.#native = FIRDynamicLinkNavigationInfoParameters.parameters();
	}
	static fromNative(link: FIRDynamicLinkNavigationInfoParameters) {
		if (link instanceof FIRDynamicLinkNavigationInfoParameters) {
			const result = new DynamicLinkNavigationParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get forcedRedirectEnabled(): boolean {
		return this.native.forcedRedirectEnabled;
	}

	set forcedRedirectEnabled(value) {
		this.native.forcedRedirectEnabled = value;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class DynamicLinkSocialParameters implements IDynamicLinkSocialParameters {
	#native: FIRDynamicLinkSocialMetaTagParameters;
	constructor() {
		this.#native = FIRDynamicLinkSocialMetaTagParameters.parameters();
	}
	static fromNative(link: FIRDynamicLinkSocialMetaTagParameters) {
		if (link instanceof FIRDynamicLinkSocialMetaTagParameters) {
			const result = new DynamicLinkSocialParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get descriptionText(): string {
		return this.native.descriptionText;
	}

	set descriptionText(value) {
		this.native.descriptionText = value;
	}

	get imageUrl(): string {
		return this.native.imageURL?.absoluteString;
	}

	set imageUrl(value) {
		this.native.imageURL = NSURL.URLWithString(value);
	}

	get title(): string {
		return this.native.title;
	}

	set title(value) {
		this.native.title = value;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class DynamicLinkParameters implements IDynamicLinkParameters {
	#native: FIRDynamicLinkComponents;

	static fromNative(link: FIRDynamicLinkComponents) {
		if (link instanceof FIRDynamicLinkComponents) {
			const result = new DynamicLinkParameters();
			result.#native = link;
			return result;
		}
		return null;
	}

	#analytics: DynamicLinkAnalyticsParameters;
	get analytics(): DynamicLinkAnalyticsParameters {
		if (this.#analytics) {
			return this.#analytics;
		}
		return DynamicLinkAnalyticsParameters.fromNative(this.native.analyticsParameters);
	}

	set analytics(value) {
		this.#analytics = value;
		this.native.analyticsParameters = value?.native;
	}

	#android: DynamicLinkAndroidParameters;
	get android(): DynamicLinkAndroidParameters {
		if (this.#android) {
			return this.#android;
		}
		return DynamicLinkAndroidParameters.fromNative(this.native.androidParameters);
	}

	set android(value) {
		this.#android = value;
		this.native.androidParameters = value?.native;
	}
	get domainUriPrefix(): string {
		return this.native.domain;
	}
	#ios: DynamicLinkIOSParameters;
	get ios(): DynamicLinkIOSParameters {
		if (this.#ios) {
			return this.#ios;
		}
		return DynamicLinkIOSParameters.fromNative(this.native.iOSParameters);
	}
	set ios(value) {
		this.#ios = value;
		this.native.iOSParameters = value?.native;
	}

	#itunes: DynamicLinkITunesParameters;
	get itunes(): DynamicLinkITunesParameters {
		if (this.#itunes) {
			return this.#itunes;
		}
		return DynamicLinkITunesParameters.fromNative(this.native.iTunesConnectParameters);
	}

	get link(): string {
		return this.native.link?.absoluteString;
	}

	#navigation: DynamicLinkNavigationParameters;
	get navigation(): DynamicLinkNavigationParameters {
		if (this.#navigation) {
			return this.#navigation;
		}
		return DynamicLinkNavigationParameters.fromNative(this.native.navigationInfoParameters);
	}

	set navigation(value) {
		this.#navigation = value;
		this.native.navigationInfoParameters = value?.native;
	}

	#social: DynamicLinkSocialParameters;
	get social(): DynamicLinkSocialParameters {
		if (this.#social) {
			return this.#social;
		}
		return DynamicLinkSocialParameters.fromNative(this.native.socialMetaTagParameters);
	}

	get native() {
		return this.#native;
	}
}

export class DynamicLink implements IDynamicLink {
	#native: FIRDynamicLink;
	static fromNative(link: FIRDynamicLink) {
		if (link instanceof FIRDynamicLink) {
			const result = new DynamicLink();
			result.#native = link;
			return result;
		}
		return null;
	}
	get minimumAppVersion(): string {
		return this.native.minimumAppVersion;
	}
	get url(): string {
		return this.native.url?.absoluteString;
	}

	get utmParameters(): Record<string, string> {
		return deserialize(this.native.utmParametersDictionary);
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	toJSON() {
		return {
			minimumAppVersion: this.minimumAppVersion,
			url: this.url,
			utmParameters: this.utmParameters,
		};
	}
}

export class DynamicLinks implements IDynamicLinks {
	#native: FIRDynamicLinks;
	#app: FirebaseApp;
	static #onLink: (link: DynamicLink) => void;
	constructor() {
		if (defaultDynamicLinks) {
			return defaultDynamicLinks;
		}
		defaultDynamicLinks = this;
	}

	createLink(link: string, domainUriPrefix: string): DynamicLinkParameters {
		return DynamicLinkParameters.fromNative(FIRDynamicLinkComponents.alloc().initWithLinkDomainURIPrefix(NSURL.URLWithString(link), domainUriPrefix));
	}
	createShortLink(link: string, domainUriPrefix: string, shortLinkType = ShortLinkType.DEFAULT): DynamicLinkParameters {
		const nativeLink = FIRDynamicLinkComponents.alloc().initWithLinkDomainURIPrefix(NSURL.URLWithString(link), domainUriPrefix);
		const options = FIRDynamicLinkComponentsOptions.options();
		switch (shortLinkType) {
			case ShortLinkType.SHORT:
				options.pathLength = FIRShortDynamicLinkPathLength.Short;
				break;
			case ShortLinkType.UNGUESSABLE:
				options.pathLength = FIRShortDynamicLinkPathLength.Unguessable;
				break;
			default:
				options.pathLength = FIRShortDynamicLinkPathLength.Default;
				break;
		}
		nativeLink.options = options;
		return DynamicLinkParameters.fromNative(nativeLink);
	}

	buildLink(link: DynamicLinkParameters): Promise<string> {
		return new Promise((resolve, reject) => {
			resolve(link.native.url.absoluteString);
		});
	}

	onLink(listener: (link: DynamicLink) => void) {
		DynamicLinks.#onLink = listener;
		if (listener) {
			TNSFirebaseDynamicLinksAppDelegate.onLinkCallback = (link) => {
				listener(DynamicLink.fromNative(link));
			};
		} else {
			TNSFirebaseDynamicLinksAppDelegate.onLinkCallback = null;
		}
	}
	resolveLink(link: string): Promise<DynamicLink> {
		return new Promise((resolve, reject) => {
			this.native.handleUniversalLinkCompletion(NSURL.URLWithString(link), (dl, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(DynamicLink.fromNative(dl));
				}
			});
		});
	}

	get native() {
		return FIRDynamicLinks.dynamicLinks();
	}
	get ios() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this.#app;
	}
}
