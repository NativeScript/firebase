import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseCrashlytics } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-crashlytics';
import { Crashlytics } from '@nativescript/firebase-crashlytics';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseCrashlytics {
	crashlytics: Crashlytics;
	constructor() {
		super();
		this.crashlytics = firebase().crashlytics();
	}

	logError() {
		//this.crashlytics.setCrashlyticsCollectionEnabled(true);
		// this.crashlytics.crash();
		this.crashlytics.setAttributes({
			name: 'logError',
		});
		this.crashlytics.log('Thing ' + new Date());
		if (global.isIOS) {
			let userInfo = {};
			userInfo[NSLocalizedDescriptionKey] = 'NativeScript iOS Error Test';
			const ns = NSError.alloc().initWithDomainCodeUserInfo(NSCocoaErrorDomain, -1001, userInfo as any);
			this.crashlytics.recordError(ns);
		}

		if (global.isAndroid) {
			const exc = new java.lang.Exception('NativeScript Android Error Test');
			this.crashlytics.recordError(exc);
		}

		this.crashlytics.recordError(new Error('NativeScript Error Test ' + new Date()));
	}

	crash() {
		this.crashlytics.crash();
	}
}
