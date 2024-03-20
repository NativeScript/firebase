import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseCore } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseCore {}
