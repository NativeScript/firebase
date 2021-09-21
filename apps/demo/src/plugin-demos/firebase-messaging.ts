import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseMessaging } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseMessaging {
	constructor(){
		super();
		firebase().messaging().getToken().then(token =>{
			console.log('getToken', token);
		}).catch(e =>{
			console.log('getToken', e);
		})
	}
}
