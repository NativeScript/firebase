import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebasePerformance } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-performance';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebasePerformance {}
