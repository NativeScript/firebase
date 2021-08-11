import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAnalytics } from '@demo/shared';
import { Firebase } from '@nativescript/firebase-core';
import { Analytics } from '@nativescript/firebase-analytics';
import { Auth } from '@nativescript/firebase-auth';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAnalytics {
	logCartEvent() {
		Firebase.analytics().logEvent('add_to_cart', {
			items: [
				{
					brand: 'ITEM_BRAND_1',
					category: 'IMTEM_CATEGORY_1',
					name: 'ITEM_NAME_!',
					price: 300,
				},
				{
					brand: 'ITEM_BRAND_2',
					category: 'IMTEM_CATEGORY_2',
					name: 'ITEM_NAME_2',
					price: 400,
				},
				{
					brand: 'ITEM_BRAND_3',
					category: 'IMTEM_CATEGORY_3',
					name: 'ITEM_NAME',
					price: 500,
				},
				{
					brand: 'ITEM_BRAND_4',
					category: 'IMTEM_CATEGORY_4',
					name: 'ITEM_NAME_4',
					price: 600,
				},
			],
		});
	}
}
