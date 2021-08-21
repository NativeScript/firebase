import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAppCheck } from '@demo/shared';
import { } from '@nativescript/firebase-app-check';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAppCheck {
	
}
