import { Utils } from '@nativescript/core';
import { FirebaseApp, FirebaseError, firebase } from '@nativescript/firebase-core';
import { IMessaging, RemoteMessage } from '.';
import { MessagingCore, AuthorizationStatus } from '@nativescript/firebase-messaging-core';

export { AuthorizationStatus } from '@nativescript/firebase-messaging-core';

let defaultMessaging: Messaging;

const fb = firebase();
Object.defineProperty(fb, 'messaging', {
	value: () => {
		if (!defaultMessaging) {
			defaultMessaging = new Messaging();
		}
		return defaultMessaging;
	},
	writable: false,
});

export class Messaging implements IMessaging {
	#native: com.google.firebase.messaging.FirebaseMessaging;
	#app: FirebaseApp;

	#onMessage?: (message: RemoteMessage) => void;
	#onNotificationTap?: (message: RemoteMessage) => void;
	#onToken?: (token: string) => void;

	showNotificationsWhenInForeground: boolean;
	#instance: MessagingCore;
	constructor() {
		if (defaultMessaging) {
			return defaultMessaging;
		}
		defaultMessaging = this;
		this.#instance = MessagingCore.getInstance();
	}

	getToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.getToken(
				this.native,
				new org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>({
					onSuccess(result) {
						resolve(result);
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	getAPNSToken() {
		return null;
	}

	hasPermission(): Promise<AuthorizationStatus> {
		return this.#instance.hasPermission() as any;
	}

	onMessage(listener: (message: RemoteMessage) => any) {
		if (!listener && this.#onMessage) {
			this.#instance.removeOnMessage(this.#onMessage);
		} else {
			this.#instance.addOnMessage(listener);
		}

		this.#onMessage = listener;
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		if (!listener && this.#onNotificationTap) {
			this.#instance.removeOnNotificationTap(this.#onNotificationTap);
		} else {
			this.#instance.addOnNotificationTap(listener);
		}

		this.#onNotificationTap = listener;
	}

	onToken(listener: (token: string) => any) {
		if (!listener && this.#onToken) {
			this.#instance.removeOnToken(this.#onToken);
		} else {
			this.#instance.addOnToken(listener);
		}

		this.#onToken = listener;
	}
	registerDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}
	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		return this.#instance.requestPermission(permissions) as any;
	}
	subscribeToTopic(topic: string): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.subscribeToTopic(
				topic,
				this.native,
				new org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>({
					onSuccess(result) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}
	unregisterDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}
	unsubscribeFromTopic(topic: string): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.unsubscribeFromTopic(
				topic,
				this.native,
				new org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>({
					onSuccess(result) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	deleteToken(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.deleteToken(
				this.native,
				new org.nativescript.firebase.messaging.FirebaseMessaging.Callback<java.lang.Void>({
					onSuccess(result) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}
	get isDeviceRegisteredForRemoteMessages(): boolean {
		return org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext());
	}
	get autoInitEnabled(): boolean {
		return this.native?.isAutoInitEnabled?.();
	}
	set autoInitEnabled(value) {
		this.native?.setAutoInitEnabled?.(value);
	}
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this.#app;
	}

	get native() {
		if (!this.#native) {
			this.#native = com.google.firebase.messaging.FirebaseMessaging.getInstance();
		}
		return this.#native;
	}
	get android() {
		return this.native;
	}
}
