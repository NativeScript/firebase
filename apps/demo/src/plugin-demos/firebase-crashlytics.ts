import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseCrashlytics } from '@demo/shared';
import { Firebase } from '@nativescript/firebase-core';
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
		this.crashlytics = Firebase.crashlytics();
		this.crashlytics.setCrashlyticsCollectionEnabled(true);
		//this.crash();
		this.logError();
	}

	logError() {
		this.crashlytics.setAttributes({
			name: 'logError',
		});
		this.crashlytics.log('Thing');
		if (global.isIOS) {
			let userInfo = {};
			userInfo[NSLocalizedDescriptionKey] = 'NativeScript Error Test';
			const ns = NSError.alloc().initWithDomainCodeUserInfo(NSCocoaErrorDomain, -1001, userInfo as any);
			this.crashlytics.recordError(ns);
		}

		if (global.isAndroid) {
			const exc = new java.lang.Exception('NativeScript Error Test');
			this.crashlytics.recordError(exc);
		}

		this.crashlytics.sendUnsentReports();
		this.crashlytics.checkForUnsentReports()
		.then(val =>{
			console.log('checkForUnsentReports',val);
		})
		.catch(e =>{
			console.error('checkForUnsentReports', e);
		})
	}

	crash() {
		this.crashlytics.crash();
	}
}
