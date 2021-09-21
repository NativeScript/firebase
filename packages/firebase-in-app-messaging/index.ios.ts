import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { IInAppMessaging } from './common';

let defaultInAppMessaging: InAppMessaging;

const fb = firebase();
Object.defineProperty(fb, 'inAppMessaging', {
	value: () => {
		if (!defaultInAppMessaging) {
			defaultInAppMessaging = new InAppMessaging();
		}
		return defaultInAppMessaging;
	},
	writable: false,
});

export class InAppMessaging implements IInAppMessaging {
	#native: FIRInAppMessaging;
	#app: FirebaseApp;
	constructor() {
		if (defaultInAppMessaging) {
			return defaultInAppMessaging;
		}
		defaultInAppMessaging = this;
		this.#native = FIRInAppMessaging.inAppMessaging();
	}

	get isAutomaticDataCollectionEnabled(): boolean {
		return this.native.automaticDataCollectionEnabled;
	}

	set isAutomaticDataCollectionEnabled(value) {
		this.native.automaticDataCollectionEnabled = value;
	}

	get isMessagesDisplaySuppressed(): boolean {
		return this.native.messageDisplaySuppressed;
	}

	set isMessagesDisplaySuppressed(value) {
		this.native.messageDisplaySuppressed = value;
	}

	triggerEvent(eventId: string) {
		this.native.triggerEvent(eventId);
	}

	get native() {
		return this.#native;
	}
	get ios() {
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
