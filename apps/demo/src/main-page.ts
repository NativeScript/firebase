import { EventData, Page } from '@nativescript/core';
import { firebase } from '@nativescript-asharghi/firebase-core';
import { MainViewModel } from './main-view-model';

let didFire = false;
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new MainViewModel();

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
}
