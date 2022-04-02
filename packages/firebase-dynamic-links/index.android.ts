import { Application, AndroidActivityNewIntentEventData, AndroidApplication } from '@nativescript/core';
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

export class DynamicLinkAnalyticsParameters implements IDynamicLinkAnalyticsParameters {
	#builder: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
	#native: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters;

	constructor() {
		this.#builder = new com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters) {
			const result = new DynamicLinkAnalyticsParameters();
			result.#native = link;
			return result;
		}
		return null;
	}

	get campaign(): undefined | string {
		return this.#builder.getCampaign();
	}

	set campaign(value) {
		this.#builder.setCampaign(value);
	}

	get content(): undefined | string {
		return this.#builder.getContent();
	}

	set content(value) {
		this.#builder.setContent(value);
	}

	get medium(): undefined | string {
		return this.#builder.getMedium();
	}

	set medium(value) {
		this.#builder.setMedium(value);
	}

	get source(): undefined | string {
		return this.#builder.getSource();
	}

	set source(value) {
		this.#builder.setSource(value);
	}

	get term(): undefined | string {
		return this.#builder.getTerm();
	}

	set term(value) {
		this.#builder.setTerm(value);
	}

	get native() {
		if (!this.#native) {
			return this.#builder.build();
		}
		return this.#native;
	}
	get android() {
		return this.native;
	}
}

export class DynamicLinkAndroidParameters implements IDynamicLinkAndroidParameters {
	#builder: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder;
	#native: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters;
	#packageName: string;
	constructor(packageName?: string) {
		const name = packageName || (Application.android.foregroundActivity || Application.android.startActivity).getPackageName?.();
		this.#packageName = name;
		this.#builder = new com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder(name);
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters) {
			const result = new DynamicLinkAndroidParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get fallbackUrl(): string {
		return this.#builder.getFallbackUrl().toString();
	}

	set fallbackUrl(value) {
		try {
			this.#builder.setFallbackUrl(android.net.Uri.parse(value));
		} catch (error) {}
	}

	get minimumVersion() {
		return this.#builder.getMinimumVersion();
	}

	set minimumVersion(value) {
		this.#builder.setMinimumVersion(value);
	}

	get packageName(): string {
		return this.#packageName;
	}

	get native() {
		if (!this.#native) {
			return this.#builder.build();
		}
		return this.#native;
	}
	get android() {
		return this.native;
	}
}

export class DynamicLinkIOSParameters implements IDynamicLinkIOSParameters {
	#builder: com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
	#native: com.google.firebase.dynamiclinks.DynamicLink.IosParameters;
	#bundleId: string;
	constructor(bundleId?: string) {
		this.#bundleId = bundleId;
		this.#native = new com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder(bundleId);
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.IosParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.IosParameters) {
			const result = new DynamicLinkIOSParameters();
			result.#native = link;
			return result;
		}
		return null;
	}

	get appStoreId(): string {
		return this.#builder?.getAppStoreId?.();
	}

	set appStoreId(value) {
		this.#builder?.setAppStoreId?.(value);
	}

	get bundleId(): string {
		return this.#bundleId;
	}

	get customScheme(): string {
		return this.#builder?.getCustomScheme?.();
	}

	set customScheme(value) {
		this.#builder?.setCustomScheme?.(value);
	}

	#fallbackUrl: string;
	get fallbackUrl(): string {
		return this.#fallbackUrl;
	}

	set fallbackUrl(value) {
		try {
			this.#builder?.setFallbackUrl?.(android.net.Uri.parse(value));
			this.#fallbackUrl = value;
		} catch (error) {}
	}

	get iPadBundleId(): string {
		return this.#builder?.getIpadBundleId?.();
	}

	set iPadBundleId(value) {
		this.#builder?.setIpadBundleId?.(value);
	}

	get iPadFallbackUrl(): string {
		return this.#builder?.getIpadFallbackUrl?.().toString?.();
	}

	set iPadFallbackUrl(value) {
		try {
			this.#builder?.setIpadFallbackUrl?.(android.net.Uri.parse(value));
		} catch (error) {}
	}

	get minimumVersion(): string {
		return this.#builder?.getMinimumVersion();
	}

	get native() {
		if (!this.#native) {
			return this.#builder.build();
		}
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkITunesParameters implements IDynamicLinkITunesParameters {
	#builder: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
	#native: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters;

	constructor() {
		this.#builder = new com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters) {
			const result = new DynamicLinkITunesParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get affiliateToken(): string {
		return this.#builder?.getAffiliateToken?.();
	}

	set affiliateToken(value) {
		this.#builder?.setAffiliateToken?.(value);
	}

	get campaignToken(): string {
		return this.#builder?.getCampaignToken?.();
	}

	set campaignToken(value) {
		this.#builder?.setCampaignToken?.(value);
	}

	get providerToken(): string {
		return this.#builder?.getProviderToken?.();
	}

	set providerToken(value) {
		this.#builder.setProviderToken?.(value);
	}

	get native() {
		if (!this.#native) {
			return this.#builder.build();
		}
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkNavigationParameters implements IDynamicLinkNavigationParameters {
	#builder: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder;
	#native: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters;
	constructor() {
		this.#builder = new com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters) {
			const result = new DynamicLinkNavigationParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get forcedRedirectEnabled(): boolean {
		return this.#builder?.getForcedRedirectEnabled?.();
	}

	set forcedRedirectEnabled(value) {
		this.#builder?.setForcedRedirectEnabled?.(value);
	}

	get native() {
		if (!this.#native) {
			return this.#builder.build();
		}
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkSocialParameters implements IDynamicLinkSocialParameters {
	#builder: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
	#native: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters;
	static fromNative(link: FIRDynamicLinkSocialMetaTagParameters) {
		if (link instanceof FIRDynamicLinkSocialMetaTagParameters) {
			const result = new DynamicLinkSocialParameters();
			result.#native = link;
			return result;
		}
		return null;
	}
	get descriptionText(): string {
		return this.#builder?.getDescription?.();
	}

	set descriptionText(value) {
		this.#builder?.getDescription?.();
	}

	get imageUrl(): string {
		return this.#builder?.getImageUrl?.()?.toString?.();
	}

	set imageUrl(value) {
		try {
			this.#builder?.setImageUrl?.(android.net.Uri.parse(value));
		} catch (error) {}
	}

	get title(): string {
		return this.#builder?.getTitle?.();
	}

	set title(value) {
		this.#builder?.setTitle(value);
	}

	get native() {
		if (!this.#native) {
			return this.#builder.build();
		}
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkParameters implements IDynamicLinkParameters {
	#native: com.google.firebase.dynamiclinks.DynamicLink.Builder;
	#shortLinkType: ShortLinkType;
	get _shortLinkType() {
		return this.#shortLinkType;
	}
	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.Builder, shortLinkType = undefined) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.Builder) {
			const result = new DynamicLinkParameters();
			result.#native = link;
			result.#shortLinkType = shortLinkType;
			return result;
		}
		return null;
	}

	analytics: DynamicLinkAnalyticsParameters;
	android: DynamicLinkAndroidParameters;
	domainUriPrefix: string;
	ios: DynamicLinkIOSParameters;
	itunes: DynamicLinkITunesParameters;
	link: string;
	navigation: DynamicLinkNavigationParameters;
	social: DynamicLinkSocialParameters;

	get native() {
		return this.#native;
	}

	_build() {
		if (this.analytics) {
			this.native.setGoogleAnalyticsParameters(this.analytics.native);
		}
		if (this.android) {
			this.native.setAndroidParameters(this.android.native);
		}

		if (this.ios) {
			this.native.setIosParameters(this.ios.native);
		}
		if (this.itunes) {
			this.native.setItunesConnectAnalyticsParameters(this.itunes.native);
		}

		if (this.navigation) {
			this.native.setNavigationInfoParameters(this.navigation.native);
		}

		if (this.social) {
			this.native.setSocialMetaTagParameters(this.social.native);
		}

		return this.native;
	}
}

export class DynamicLink implements IDynamicLink {
	#native: com.google.firebase.dynamiclinks.PendingDynamicLinkData;
	static fromNative(link: com.google.firebase.dynamiclinks.PendingDynamicLinkData) {
		if (link instanceof com.google.firebase.dynamiclinks.PendingDynamicLinkData) {
			const result = new DynamicLink();
			result.#native = link;
			return result;
		}
		return null;
	}
	get minimumAppVersion(): string {
		return String(this.native.getMinimumAppVersion());
	}
	get url(): string {
		return this.native?.getLink?.()?.toString?.();
	}

	get utmParameters(): Record<string, string> {
		return deserialize(this.native.getUtmParameters());
	}

	get native() {
		return this.#native;
	}
	get android() {
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
	#native: com.google.firebase.dynamiclinks.FirebaseDynamicLinks;
	#app: FirebaseApp;
	static _onLink: (link: DynamicLink) => void;
	static #didInit = false;
	static #callback: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
	constructor() {
		if (defaultDynamicLinks) {
			return defaultDynamicLinks;
		}
		defaultDynamicLinks = this;

		if (!DynamicLinks.#didInit) {
			DynamicLinks.#callback = new org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>({
				onSuccess(param0) {
					if (typeof DynamicLinks._onLink === 'function') {
						DynamicLinks._onLink(DynamicLink.fromNative(param0));
					}
				},
				onError(param0) {
					console.error('Unknown error occurred when attempting to handle a universal link', param0);
				},
			});

			Application.android.on(AndroidApplication.activityNewIntentEvent, (data: AndroidActivityNewIntentEventData) => {
				org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.onNewIntent(com.google.firebase.dynamiclinks.FirebaseDynamicLinks.getInstance(), data.intent, DynamicLinks.#callback);
			});
			DynamicLinks.#didInit = true;
		}
	}

	buildLink(link: DynamicLinkParameters): Promise<string> {
		return new Promise((resolve, reject) => {
			if (link._shortLinkType) {
				org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.buildShortLink(
					link._build(),
					new org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.ShortDynamicLink>({
						onSuccess(param0) {
							resolve(param0.getShortLink().toString());
						},
						onError(param0) {
							reject(FirebaseError.fromNative(param0));
						},
					})
				);
			} else {
				resolve(link.native.buildDynamicLink().getUri().toString());
			}
		});
	}

	createLink(link: string, domainUriPrefix: string): DynamicLinkParameters {
		const dl = this.native.createDynamicLink();
		try {
			dl.setLink(android.net.Uri.parse(link));
		} catch (error) {}
		dl.setDomainUriPrefix(domainUriPrefix);
		return DynamicLinkParameters.fromNative(dl);
	}
	createShortLink(link: string, domainUriPrefix: string, shortLinkType: ShortLinkType = ShortLinkType.DEFAULT): DynamicLinkParameters {
		const dl = this.native.createDynamicLink();
		try {
			dl.setLink(android.net.Uri.parse(link));
		} catch (error) {}
		dl.setDomainUriPrefix(domainUriPrefix);
		return DynamicLinkParameters.fromNative(dl, shortLinkType);
	}

	onLink(listener: (link: DynamicLink) => void) {
		DynamicLinks._onLink = listener;
	}
	resolveLink(link: string): Promise<DynamicLink> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.resolveLink(
				this.native,
				link,
				new org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>({
					onSuccess(param0) {
						resolve(DynamicLink.fromNative(param0));
					},
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
				})
			);
		});
	}

	get native() {
		if (!this.#native) {
			this.#native = com.google.firebase.dynamiclinks.FirebaseDynamicLinks.getInstance();
		}
		return this.#native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
		}
		return this.#app;
	}
}
