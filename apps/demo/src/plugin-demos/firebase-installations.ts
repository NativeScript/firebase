import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseInstallations } from '@demo/shared';
import { } from '@nativescript/firebase-installations';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseInstallations {
	
}
