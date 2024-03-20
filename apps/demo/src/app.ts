import { Application, Utils } from '@nativescript/core';
import { firebase } from '@nativescript-asharghi/firebase-core';
import '@nativescript-asharghi/firebase-analytics';
import '@nativescript-asharghi/firebase-auth';
import '@nativescript-asharghi/firebase-crashlytics';
import '@nativescript-asharghi/firebase-database';
import '@nativescript-asharghi/firebase-dynamic-links';
import '@nativescript-asharghi/firebase-firestore';
import '@nativescript-asharghi/firebase-functions';
import '@nativescript-asharghi/firebase-in-app-messaging';
import '@nativescript-asharghi/firebase-installations';
import '@nativescript-asharghi/firebase-messaging';
import '@nativescript-asharghi/firebase-performance';
import '@nativescript-asharghi/firebase-remote-config';
import '@nativescript-asharghi/firebase-storage';
import '@nativescript-asharghi/firebase-ui';

import { Admob } from '@nativescript-asharghi/firebase-admob';

import { AppCheck } from '@nativescript-asharghi/firebase-app-check-debug';

AppCheck.setProviderFactory();
declare const TNSFirebaseCore;
firebase()
	.initializeApp()
	.then((app) => {
		firebase().appCheck().activate(true);
		firebase().crashlytics().setCrashlyticsCollectionEnabled(true);
	});

Admob.init();

const dynamicLinks = firebase().dynamicLinks();

dynamicLinks.onLink((link) => {
	console.log('onLink', link);
});

const messaging = firebase().messaging();

messaging.onMessage((message) => {
	console.log('Firebase onMessage', message);
});

messaging.onNotificationTap((message) => {
	console.log('Firebase onNotificationTap', message);
});

messaging.onToken((token) => {
	console.log('Firebase onToken', token);
});

Application.on('launch', (args) => {
	messaging.onMessage((message) => {
		console.log('Firebase onMessage', message);
	});

	messaging.onNotificationTap((message) => {
		console.log('Firebase onNotificationTap', message);
	});

	messaging.onToken((token) => {
		console.log('Firebase onToken', token);
	});
});

if (global.isIOS) {
	messaging
		.requestPermission()
		.then(() => {
			console.log('requestPermission', 'done');
			messaging.registerDeviceForRemoteMessages().catch((e) => {
				console.error('registerDeviceForRemoteMessages', e);
			});
		})
		.catch((e) => {
			console.error('requestPermission', e);
		});
}

Application.run({ moduleName: 'app-root' });
