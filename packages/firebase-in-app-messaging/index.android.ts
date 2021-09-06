import { Firebase, FirebaseApp } from '@nativescript/firebase-core';
import { IInAppMessaging } from './common';

Firebase.inAppMessaging = () => {
	return new InAppMessaging();
};

export class InAppMessaging implements IInAppMessaging {
	#native: com.google.firebase.inappmessaging.FirebaseInAppMessaging;
	#app: FirebaseApp;
	constructor() {
		this.#native = com.google.firebase.inappmessaging.FirebaseInAppMessaging.getInstance();
	}

	get isAutomaticDataCollectionEnabled(): boolean {
		return this.native.isAutomaticDataCollectionEnabled();
	}

	set isAutomaticDataCollectionEnabled(value) {
		this.native.setAutomaticDataCollectionEnabled(value);
	}

	get isMessagesDisplaySuppressed(): boolean {
		return this.native.areMessagesSuppressed();
	}

	set isMessagesDisplaySuppressed(value) {
		this.native.setMessagesSuppressed(java.lang.Boolean.valueOf(value));
	}

	triggerEvent(eventId: string) {
		this.native.triggerEvent(eventId);
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
}
