import { FirebaseApp, FirebaseError, firebase } from '@nativescript/firebase-core';
import { ICrashlytics } from './common';
import lazy from '@nativescript/core/utils/lazy';
import StackTrace from 'stacktrace-js';
const NSCrashlyticsReference = lazy(() => org.nativescript.firebase.crashlytics.FirebaseCrashlytics);

let defaultCrashlytics: Crashlytics;
const fb = firebase();
Object.defineProperty(fb, 'crashlytics', {
	value: () => {
		if (!defaultCrashlytics) {
			defaultCrashlytics = new Crashlytics();
		}
		return defaultCrashlytics;
	},
	writable: false,
});

export class Crashlytics implements ICrashlytics {
	#native: com.google.firebase.crashlytics.FirebaseCrashlytics;
	constructor() {
		if (defaultCrashlytics) {
			return defaultCrashlytics;
		}
		defaultCrashlytics = this;
	}
	get native() {
		if (!this.#native) {
			this.#native = com.google.firebase.crashlytics.FirebaseCrashlytics.getInstance();
		}
		return this.#native;
	}
	get android() {
		return this.native;
	}
	#app: FirebaseApp;
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}

	checkForUnsentReports(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			NSCrashlyticsReference().checkForUnsentReports(
				this.native,
				new org.nativescript.firebase.crashlytics.FirebaseCrashlytics.Callback({
					onSuccess(param0) {
						resolve(param0 as any);
					},
					onError(param0) {
						const err = FirebaseError.fromNative(param0);
						reject(err);
					},
				})
			);
		});
	}
	crash(): void {
		NSCrashlyticsReference().crash();
	}
	deleteUnsentReports() {
		this.native.deleteUnsentReports();
	}
	didCrashOnPreviousExecution(): boolean {
		return this.native.didCrashOnPreviousExecution();
	}
	log(message: string): void {
		this.native.log(message);
	}
	recordError(error: any): void {
		if (error instanceof Error) {
			StackTrace.fromError(error).then((stack) => {
				const traceElements = Array.create('java.lang.StackTraceElement', stack.length);
				stack.forEach((item, i) => {
					traceElements[i] = new java.lang.StackTraceElement('', item.functionName || '(anonymous)', item.fileName, -1);
				});
				const t = new java.lang.Throwable(error.message);
				t.setStackTrace(traceElements);
				this.native.recordException(t);
			});
		} else {
			this.native.recordException(error);
		}
	}
	sendUnsentReports(): void {
		this.native.sendUnsentReports();
	}
	setAttribute(name: string, value: string | number | boolean) {
		if (typeof value === 'string') {
			this.native.setCustomKey(name, value);
		} else if (typeof value === 'number') {
			this.native.setCustomKey(name, value);
		} else if (typeof value === 'boolean') {
			this.native.setCustomKey(name, value);
		}
	}
	setAttributes(attributes: { [key: string]: string | number | boolean }) {
		try {
			NSCrashlyticsReference().setAttributes(this.native, JSON.stringify(attributes));
		} catch (e) {}
	}
	setCrashlyticsCollectionEnabled(enabled: boolean) {
		this.native.setCrashlyticsCollectionEnabled(java.lang.Boolean.valueOf(enabled));
	}
	setUserId(userId: string) {
		this.native.setUserId(userId);
	}
}
