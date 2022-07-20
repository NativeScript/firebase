import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseMessagingCore } from '@demo/shared';
import {} from '@nativescript/firebase-messaging-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseMessagingCore {}
