import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { ICrashlytics } from './common';
import StackTrace from 'stacktrace-js';

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

declare const TNSFirebaseCrashlytics;
export class Crashlytics implements ICrashlytics {
	#native: FIRCrashlytics;
	constructor() {
		if (defaultCrashlytics) {
			return defaultCrashlytics;
		}
		defaultCrashlytics = this;
		this.#native = FIRCrashlytics.crashlytics();
	}
	get native() {
		return this.#native;
	}
	get ios() {
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

	get isCrashlyticsCollectionEnabled(): boolean {
		return this.native.isCrashlyticsCollectionEnabled();
	}
	checkForUnsentReports(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.native.checkForUnsentReportsWithCompletion((completed) => {
				resolve(completed);
			});
		});
	}
	crash(): void {
		TNSFirebaseCrashlytics.crash();
	}
	deleteUnsentReports() {
		this.native.deleteUnsentReports();
	}
	didCrashOnPreviousExecution(): boolean {
		return this.native.didCrashDuringPreviousExecution();
	}
	log(message: string): void {
		this.native.log(message);
	}

	recordError(error: any): void {
		if (error instanceof Error) {
			StackTrace.fromError(error).then((stack) => {
				const traceElements = [];
				stack.forEach((item, i) => {
					traceElements[i] = FIRStackFrame.stackFrameWithSymbolFileLine(item.functionName || '(anonymous)', item.fileName, item.lineNumber);
				});
				const e = FIRExceptionModel.exceptionModelWithNameReason('JavaScriptError', error.message);
				this.native.recordExceptionModel(e);
			});
		} else {
			this.native.recordError(error);
		}
	}

	sendUnsentReports(): void {
		this.native.sendUnsentReports();
	}
	setAttribute(name: string, value: string | number | boolean) {
		this.native.setCustomValueForKey(value, name);
	}
	setAttributes(attributes: { [key: string]: string | number | boolean }) {
		Object.keys(attributes).forEach((key) => {
			this.native.setCustomValueForKey(attributes[key], key);
		});
	}
	setCrashlyticsCollectionEnabled(enabled: boolean) {
		this.native.setCrashlyticsCollectionEnabled(enabled);
	}
	setUserId(userId: string) {
		this.native.setUserID(userId);
	}
}
