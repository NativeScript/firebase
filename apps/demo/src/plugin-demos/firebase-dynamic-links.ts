import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseDynamicLinks } from '@demo/shared';
import { } from '@nativescript/firebase-dynamic-links';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseDynamicLinks {
	
}
