import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseFunctions } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-functions';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseFunctions {}
