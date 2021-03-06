import { FirebaseApp } from '@nativescript/firebase-core';
import { IInAppMessaging } from './common';

export declare class InAppMessaging implements IInAppMessaging {
	readonly app: FirebaseApp;
	isAutomaticDataCollectionEnabled: boolean;
	isMessagesDisplaySuppressed: boolean;

	triggerEvent(eventId: string);
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseInAppMessaging {}
}

export interface FirebaseInAppMessaging {
	static inAppMessaging(): InAppMessaging;
}
