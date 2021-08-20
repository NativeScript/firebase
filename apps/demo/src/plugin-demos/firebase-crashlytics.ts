import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseCrashlytics } from '@demo/shared';
import { } from '@nativescript/firebase-crashlytics';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseCrashlytics {
	
}
