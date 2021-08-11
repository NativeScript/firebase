import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAuth } from '@demo/shared';
import { } from '@nativescript/firebase-auth';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAuth {
	
}
