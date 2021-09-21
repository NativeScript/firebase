import { EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAnalytics } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-analytics';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAnalytics {
	logCartEvent() {
		firebase()
			.analytics()
			.logEvent('add_to_cart', {
				items: [
					{
						item_brand: 'ITEM_BRAND_1',
						item_category: 'IMTEM_CATEGORY_1',
						item_name: 'ITEM_NAME_1',
						item_price: 300,
					},
					{
						item_brand: 'ITEM_BRAND_2',
						item_category: 'IMTEM_CATEGORY_2',
						item_name: 'ITEM_NAME_2',
						item_price: 400,
					},
					{
						item_brand: 'ITEM_BRAND_3',
						item_category: 'ITEM_CATEGORY_3',
						item_name: 'ITEM_NAME',
						item_price: 500,
					},
					{
						item_brand: 'ITEM_BRAND_4',
						item_category: 'ITEM_CATEGORY_4',
						item_name: 'ITEM_NAME_4',
						item_price: 600,
					},
				],
			});
	}
}
