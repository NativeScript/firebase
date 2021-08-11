import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseFirestore } from '@demo/shared';
import { } from '@nativescript/firebase-firestore';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseFirestore {
	
}
