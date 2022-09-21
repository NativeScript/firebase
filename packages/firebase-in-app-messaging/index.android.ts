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
	_native: com.google.firebase.inappmessaging.FirebaseInAppMessaging;
	_app: FirebaseApp;
	constructor() {
		if (defaultInAppMessaging) {
			return defaultInAppMessaging;
		}
		defaultInAppMessaging = this;
		this._native = com.google.firebase.inappmessaging.FirebaseInAppMessaging.getInstance();
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
		return this._native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.app);
		}
		return this._app;
	}
}
