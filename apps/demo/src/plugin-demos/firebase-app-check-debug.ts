import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseAppCheckDebug } from '@demo/shared';
import { firebase } from '@nativescript-asharghi/firebase-core';
import '@nativescript-asharghi/firebase-app-check-debug';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAppCheckDebug {
	constructor() {
		super();
	}

	testIt(): void {
		firebase()
			.appCheck()
			.getToken(true)
			.then((token) => {
				console.log(token.token);
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
