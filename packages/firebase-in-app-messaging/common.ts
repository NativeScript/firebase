import { FirebaseApp } from '@nativescript-asharghi/firebase-core';

export interface IInAppMessagingBannerDisplay {}

export interface IInAppMessaging {
	readonly app: FirebaseApp;
	isAutomaticDataCollectionEnabled: boolean;
	isMessagesDisplaySuppressed: boolean;
	triggerEvent(eventId: string);
}
