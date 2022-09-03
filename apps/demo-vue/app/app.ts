import Vue from 'nativescript-vue';
import Home from './components/Home.vue';

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-analytics';
import '@nativescript/firebase-auth';
import '@nativescript/firebase-crashlytics';
import '@nativescript/firebase-database';
import '@nativescript/firebase-dynamic-links';
import '@nativescript/firebase-firestore';
import '@nativescript/firebase-functions';
import '@nativescript/firebase-in-app-messaging';
import '@nativescript/firebase-installations';
import '@nativescript/firebase-messaging';
import '@nativescript/firebase-performance';
import '@nativescript/firebase-remote-config';
import '@nativescript/firebase-storage';

import { Admob } from '@nativescript/firebase-admob';

import { AppCheck } from '@nativescript/firebase-app-check-debug';
import { Application } from '@nativescript/core';

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

Application.on('launch', (args) => {
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
});

new Vue({
	render: (h) => h('frame', [h(Home)]),
}).$start();
