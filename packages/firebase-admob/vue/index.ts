export default {
	install(Vue) {
		Vue.registerElement('NativeAdView', () => require('../').NativeAdView);
		Vue.registerElement('BannerAd', () => require('../').BannerAd);
	},
};
