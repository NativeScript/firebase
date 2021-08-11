import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAdmob } from '@demo/shared';
import { } from '@nativescript/firebase-admob';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAdmob {
	
}
