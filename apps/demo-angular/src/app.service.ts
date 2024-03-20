import { Injectable } from '@angular/core';
import { firebase } from '@nativescript-asharghi/firebase-core';
import '@nativescript-asharghi/firebase-messaging';

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
