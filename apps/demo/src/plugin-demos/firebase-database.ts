import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseDatabase } from '@demo/shared';
import { } from '@nativescript/firebase-database';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseDatabase {
	
}
