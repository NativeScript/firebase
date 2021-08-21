import { FirebaseApp } from '@nativescript/firebase-core';
export interface ICrashlytics {
	readonly app: FirebaseApp;
	checkForUnsentReports(): Promise<boolean>;
	crash(): void;
	deleteUnsentReports();
	didCrashOnPreviousExecution(): boolean;
	log(message: string): void;
	recordError(error: any): void;
	sendUnsentReports(): void;
	setAttribute(name: string, value: string | number | boolean);
	setAttributes(attributes: { [key: string]: string | number | boolean });
	setCrashlyticsCollectionEnabled(enabled: boolean);
	setUserId(userId: string);
}
