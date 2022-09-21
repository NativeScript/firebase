import { Utils } from '@nativescript/core';
import { FirebaseApp, FirebaseError, firebase } from '@nativescript/firebase-core';
import { IMessaging, RemoteMessage } from '.';
import { MessagingCore, AuthorizationStatus } from '@nativescript/firebase-messaging-core';

export { AuthorizationStatus };

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
	_native: com.google.firebase.messaging.FirebaseMessaging;
	_app: FirebaseApp;

	_onMessage?: (message: RemoteMessage) => void;
	_onNotificationTap?: (message: RemoteMessage) => void;
	_onToken?: (token: string) => void;

	showNotificationsWhenInForeground: boolean;
	_instance: MessagingCore;
	constructor() {
		if (defaultMessaging) {
			return defaultMessaging;
		}
		defaultMessaging = this;
		this._instance = MessagingCore.getInstance();
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
		return this._instance.hasPermission() as any;
	}

	onMessage(listener: (message: RemoteMessage) => any) {
		if (!listener && this._onMessage) {
			this._instance.removeOnMessage(this._onMessage);
		} else {
			this._instance.addOnMessage(listener);
		}

		this._onMessage = listener;
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		if (!listener && this._onNotificationTap) {
			this._instance.removeOnNotificationTap(this._onNotificationTap);
		} else {
			this._instance.addOnNotificationTap(listener);
		}

		this._onNotificationTap = listener;
	}

	onToken(listener: (token: string) => any) {
		if (!listener && this._onToken) {
			this._instance.removeOnToken(this._onToken);
		} else {
			this._instance.addOnToken(listener);
		}

		this._onToken = listener;
	}
	registerDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}
	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		return this._instance.requestPermission(permissions) as any;
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
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this._app;
	}

	get native() {
		if (!this._native) {
			this._native = com.google.firebase.messaging.FirebaseMessaging.getInstance();
		}
		return this._native;
	}
	get android() {
		return this.native;
	}
}
