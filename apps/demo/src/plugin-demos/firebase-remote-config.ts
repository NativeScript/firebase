import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseRemoteConfig } from '@demo/shared';
import { Firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-remote-config';
import { RemoteConfig } from '@nativescript/firebase-remote-config';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseRemoteConfig {
	remoteConfig: RemoteConfig;
	constructor() {
		super();
		this.remoteConfig = Firebase.remoteConfig();
		this.remoteConfig
			.fetchAndActivate()
			.then((val) => {
				const all = this.remoteConfig.getAll();
				console.log(all.osei_test.asString());
			})
			.catch((e) => {
				console.error('remoteConfig', 'fetchAndActivate', e);
			});
	}
}
