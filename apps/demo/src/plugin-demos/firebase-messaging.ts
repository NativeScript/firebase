import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseMessaging } from '@demo/shared';
import { Firebase } from '@nativescript/firebase-core';
import { Messaging } from '@nativescript/firebase-messaging';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseMessaging {
	constructor(){
		super();
		(<Messaging>Firebase.messaging()).getToken().then(token =>{
			console.log('getToken', token);
		}).catch(e =>{
			console.log('getToken', e);
		})
	}
}
