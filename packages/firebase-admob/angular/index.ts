import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { BannerAdDirective } from './banner-ad-directive';
import { NativeAdViewDirective } from './native-ad-view-directive';

@NgModule({
	declarations: [BannerAdDirective, NativeAdViewDirective],
	exports: [BannerAdDirective, NativeAdViewDirective],
})
// @ts-ignore
export class AdmobModule {}

registerElement('NativeAdView', () => require('@nativescript/firebase-admob').NativeAdView);
registerElement('BannerAd', () => require('@nativescript/firebase-admob').BannerAd);
