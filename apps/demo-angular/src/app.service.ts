import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';

@Injectable()
export class AppService {
	constructor() {
		const messaging = firebase().messaging();
		messaging.onToken((token) => {
			console.log('Firebase onToken', token);
		});
		messaging.onMessage((message) => {
			console.log('Firebase onMessage', message);
		});

		messaging.onNotificationTap((message) => {
			console.log('Firebase onNotificationTap', message);
		});

	}
}
