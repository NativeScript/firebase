import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAppCheckDebug } from '@demo/shared';
import { } from '@nativescript/firebase-app-check-debug';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAppCheckDebug {
	
}
