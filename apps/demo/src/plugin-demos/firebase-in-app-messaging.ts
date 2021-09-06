import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseInAppMessaging } from '@demo/shared';
import { } from '@nativescript/firebase-in-app-messaging';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseInAppMessaging {
	
}
