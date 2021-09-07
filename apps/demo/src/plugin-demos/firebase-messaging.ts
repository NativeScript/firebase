import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseMessaging } from '@demo/shared';
import { } from '@nativescript/firebase-messaging';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseMessaging {
	
}
