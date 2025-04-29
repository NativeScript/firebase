import { EventData, Page } from '@nativescript/core';
import { firebase } from '@nativescript/firebase-core';
import { MainViewModel } from './main-view-model';
import { MessagingCore } from '@nativescript/firebase-messaging-core';
let didFire = false;
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new MainViewModel();
	/*
	if (global.isAndroid && !didFire) {
		firebase()
			.messaging()
			.requestPermission()
			.then(() => {
				console.log('requestPermission', 'done');
				firebase()
					.messaging()
					.registerDeviceForRemoteMessages()
					.catch((e) => {
						console.error('registerDeviceForRemoteMessages', e);
					});
			})
			.catch((e) => {
				console.error('requestPermission', e);
			});
		didFire = true;
	}
	*/

	if (global.isAndroid && !didFire) {
		MessagingCore.getInstance()
			.requestPermission()
			.then(() => {
				console.log('requestPermission', 'done');
				MessagingCore.getInstance()
					.registerDeviceForRemoteMessages()
					.catch((e) => {
						console.error('registerDeviceForRemoteMessages', e);
					});
			})
			.catch((e) => {
				console.error('requestPermission', e);
			});
		didFire = true;
	}
}
