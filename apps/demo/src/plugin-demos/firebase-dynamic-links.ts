import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseDynamicLinks } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-dynamic-links';
import { DynamicLinkSocialParameters } from '@nativescript/firebase-dynamic-links';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseDynamicLinks {
	constructor() {
		super();
		const link = firebase().dynamicLinks().createShortLink('https://docs.nativescript.org', 'https://triniwiz.page.link');

		link.social = new DynamicLinkSocialParameters();
		link.social.imageUrl = 'https://art.nativescript.org/logo/export/NativeScript_Logo_White_Blue_Rounded.png';

		firebase()
			.dynamicLinks()
			.buildLink(link)
			.then((link) => {
				console.log('link', link);
			})
			.catch((e) => {
				console.log('dynamicLinks: build error', e);
			});
	}
}
