import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseMessaging } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import { AuthorizationStatus } from '@nativescript/firebase-messaging';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseMessaging {
	constructor() {
		super();


		// firebase().messaging().getToken().then(token =>{
		// 	console.log('getToken', token);
		// }).catch(e =>{
		// 	console.log('getToken', e);
		// })
		Promise.all([this.issue_16(), this.issue_17()]);
	}

	async issue_16() {
		var messaging = firebase().messaging();
		// This is never called
		messaging.onToken(function (token) {
			console.log('onToken', token);
		});
		messaging.showNotificationsWhenInForeground = true;

		try {
			await messaging.deleteToken();
			let token = await messaging.getToken();
			console.log('token', token);
		} catch (err) {
			console.log('issue_16: error', err);
		}
	}

	async issue_17() {
		var messaging = firebase().messaging();
		const status = await messaging.requestPermission({ ios: { alert: true } });
		console.log('status', status);
		console.log('status', status === AuthorizationStatus.AUTHORIZED)
	}
}
