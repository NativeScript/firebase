import { Application, AndroidActivityNewIntentEventData, AndroidApplication } from '@nativescript/core';
import { deserialize, firebase, FirebaseApp, FirebaseError } from '@nativescript-asharghi/firebase-core';
import { IDynamicLink, IDynamicLinkAnalyticsParameters, IDynamicLinkAndroidParameters, IDynamicLinkIOSParameters, IDynamicLinkITunesParameters, IDynamicLinkNavigationParameters, IDynamicLinkParameters, IDynamicLinks, IDynamicLinkSocialParameters, OnLinkListener, ShortLinkType } from './common';

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

export { ShortLinkType } from './common';

export class DynamicLinkAnalyticsParameters implements IDynamicLinkAnalyticsParameters {
	_builder: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder;
	_native: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters;

	constructor() {
		this._builder = new com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.GoogleAnalyticsParameters) {
			const result = new DynamicLinkAnalyticsParameters();
			result._native = link;
			return result;
		}
		return null;
	}

	get campaign(): undefined | string {
		return this._builder.getCampaign();
	}

	set campaign(value) {
		this._builder.setCampaign(value);
	}

	get content(): undefined | string {
		return this._builder.getContent();
	}

	set content(value) {
		this._builder.setContent(value);
	}

	get medium(): undefined | string {
		return this._builder.getMedium();
	}

	set medium(value) {
		this._builder.setMedium(value);
	}

	get source(): undefined | string {
		return this._builder.getSource();
	}

	set source(value) {
		this._builder.setSource(value);
	}

	get term(): undefined | string {
		return this._builder.getTerm();
	}

	set term(value) {
		this._builder.setTerm(value);
	}

	get native() {
		if (!this._native) {
			return this._builder.build();
		}
		return this._native;
	}
	get android() {
		return this.native;
	}
}

export class DynamicLinkAndroidParameters implements IDynamicLinkAndroidParameters {
	_builder: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder;
	_native: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters;
	_packageName: string;
	constructor(packageName?: string) {
		const name = packageName || (Application.android.foregroundActivity || Application.android.startActivity).getPackageName?.();
		this._packageName = name;
		this._builder = new com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters.Builder(name);
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.AndroidParameters) {
			const result = new DynamicLinkAndroidParameters();
			result._native = link;
			return result;
		}
		return null;
	}
	get fallbackUrl(): string {
		return this._builder.getFallbackUrl().toString();
	}

	set fallbackUrl(value) {
		try {
			this._builder.setFallbackUrl(android.net.Uri.parse(value));
		} catch (error) {}
	}

	get minimumVersion() {
		return this._builder.getMinimumVersion();
	}

	set minimumVersion(value) {
		this._builder.setMinimumVersion(value);
	}

	get packageName(): string {
		return this._packageName;
	}

	get native() {
		if (!this._native) {
			return this._builder.build();
		}
		return this._native;
	}
	get android() {
		return this.native;
	}
}

export class DynamicLinkIOSParameters implements IDynamicLinkIOSParameters {
	_builder: com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder;
	_native: com.google.firebase.dynamiclinks.DynamicLink.IosParameters;
	_bundleId: string;
	constructor(bundleId?: string) {
		this._bundleId = bundleId;
		this._builder = new com.google.firebase.dynamiclinks.DynamicLink.IosParameters.Builder(bundleId);
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.IosParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.IosParameters) {
			const result = new DynamicLinkIOSParameters();
			result._native = link;
			return result;
		}
		return null;
	}

	get appStoreId(): string {
		return this._builder?.getAppStoreId?.();
	}

	set appStoreId(value) {
		this._builder?.setAppStoreId?.(value);
	}

	get bundleId(): string {
		return this._bundleId;
	}

	get customScheme(): string {
		return this._builder?.getCustomScheme?.();
	}

	set customScheme(value) {
		this._builder?.setCustomScheme?.(value);
	}

	_fallbackUrl: string;
	get fallbackUrl(): string {
		return this._fallbackUrl;
	}

	set fallbackUrl(value) {
		try {
			this._builder?.setFallbackUrl?.(android.net.Uri.parse(value));
			this._fallbackUrl = value;
		} catch (error) {}
	}

	get iPadBundleId(): string {
		return this._builder?.getIpadBundleId?.();
	}

	set iPadBundleId(value) {
		this._builder?.setIpadBundleId?.(value);
	}

	get iPadFallbackUrl(): string {
		return this._builder?.getIpadFallbackUrl?.().toString?.();
	}

	set iPadFallbackUrl(value) {
		try {
			this._builder?.setIpadFallbackUrl?.(android.net.Uri.parse(value));
		} catch (error) {}
	}

	get minimumVersion(): string {
		return this._builder?.getMinimumVersion();
	}

	get native() {
		if (!this._native) {
			return this._builder.build();
		}
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkITunesParameters implements IDynamicLinkITunesParameters {
	_builder: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder;
	_native: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters;

	constructor() {
		this._builder = new com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.ItunesConnectAnalyticsParameters) {
			const result = new DynamicLinkITunesParameters();
			result._native = link;
			return result;
		}
		return null;
	}
	get affiliateToken(): string {
		return this._builder?.getAffiliateToken?.();
	}

	set affiliateToken(value) {
		this._builder?.setAffiliateToken?.(value);
	}

	get campaignToken(): string {
		return this._builder?.getCampaignToken?.();
	}

	set campaignToken(value) {
		this._builder?.setCampaignToken?.(value);
	}

	get providerToken(): string {
		return this._builder?.getProviderToken?.();
	}

	set providerToken(value) {
		this._builder.setProviderToken?.(value);
	}

	get native() {
		if (!this._native) {
			return this._builder.build();
		}
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkNavigationParameters implements IDynamicLinkNavigationParameters {
	_builder: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder;
	_native: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters;
	constructor() {
		this._builder = new com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.NavigationInfoParameters) {
			const result = new DynamicLinkNavigationParameters();
			result._native = link;
			return result;
		}
		return null;
	}
	get forcedRedirectEnabled(): boolean {
		return this._builder?.getForcedRedirectEnabled?.();
	}

	set forcedRedirectEnabled(value) {
		this._builder?.setForcedRedirectEnabled?.(value);
	}

	get native() {
		if (!this._native) {
			return this._builder.build();
		}
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkSocialParameters implements IDynamicLinkSocialParameters {
	_builder: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder;
	_native: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters;

	constructor() {
		this._builder = new com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters.Builder();
	}

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.SocialMetaTagParameters) {
			const result = new DynamicLinkSocialParameters();
			result._native = link;
			return result;
		}
		return null;
	}
	get descriptionText(): string {
		return this._builder?.getDescription?.();
	}

	set descriptionText(value) {
		this._builder?.setDescription?.(value);
	}

	get imageUrl(): string {
		return this._builder?.getImageUrl?.()?.toString?.();
	}

	set imageUrl(value) {
		try {
			this._builder?.setImageUrl?.(android.net.Uri.parse(value));
		} catch (error) {}
	}

	get title(): string {
		return this._builder?.getTitle?.();
	}

	set title(value) {
		this._builder?.setTitle(value);
	}

	get native() {
		if (!this._native) {
			return this._builder.build();
		}
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class DynamicLinkParameters implements IDynamicLinkParameters {
	_native: com.google.firebase.dynamiclinks.DynamicLink.Builder;
	_shortLinkType: ShortLinkType;

	static fromNative(link: com.google.firebase.dynamiclinks.DynamicLink.Builder, shortLinkType = undefined) {
		if (link instanceof com.google.firebase.dynamiclinks.DynamicLink.Builder) {
			const result = new DynamicLinkParameters();
			result._native = link;
			result._shortLinkType = shortLinkType;
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
		return this._native;
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
	_native: com.google.firebase.dynamiclinks.PendingDynamicLinkData;
	static fromNative(link: com.google.firebase.dynamiclinks.PendingDynamicLinkData) {
		if (link instanceof com.google.firebase.dynamiclinks.PendingDynamicLinkData) {
			const result = new DynamicLink();
			result._native = link;
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
		return this._native;
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
	_native: com.google.firebase.dynamiclinks.FirebaseDynamicLinks;
	_app: FirebaseApp;
	static _onLink: OnLinkListener;
	static _didInit = false;
	static _callback: org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>;
	constructor() {
		if (defaultDynamicLinks) {
			return defaultDynamicLinks;
		}
		defaultDynamicLinks = this;

		if (!DynamicLinks._didInit) {
			DynamicLinks._callback = new org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.Callback<com.google.firebase.dynamiclinks.PendingDynamicLinkData>({
				onSuccess(param0) {
					if (typeof DynamicLinks._onLink === 'function') {
						DynamicLinks._onLink(DynamicLink.fromNative(param0), null);
					}
				},
				onError(param0) {
					if (typeof DynamicLinks._onLink === 'function') {
						DynamicLinks._onLink(null, FirebaseError.fromNative(param0));
					}
					console.error('Unknown error occurred when attempting to handle a universal link', param0);
				},
			});

			Application.android.on(AndroidApplication.activityNewIntentEvent, (data: AndroidActivityNewIntentEventData) => {
				org.nativescript.firebase.dynamic_links.FirebaseDynamicLinks.onNewIntent(com.google.firebase.dynamiclinks.FirebaseDynamicLinks.getInstance(), data.intent, DynamicLinks._callback);
			});
			DynamicLinks._didInit = true;
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
				resolve(link._build().buildDynamicLink().getUri().toString());
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

	onLink(listener: OnLinkListener) {
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
		if (!this._native) {
			this._native = com.google.firebase.dynamiclinks.FirebaseDynamicLinks.getInstance();
		}
		return this._native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
		}
		return this._app;
	}
}
