import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { IMessaging, RemoteMessage } from '.';
import { MessagingCore, AuthorizationStatus } from '@nativescript/firebase-messaging-core';

export { AuthorizationStatus } from '@nativescript/firebase-messaging-core';

declare const FIRApp, TNSFirebaseCore;

let _registerDeviceForRemoteMessages = {
	resolve: null,
	reject: null,
};

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
	#app: FirebaseApp;
	#onMessage?: (message: RemoteMessage) => void;
	#onToken?: (token: string) => void;
	#onNotificationTap?: (message: RemoteMessage) => void;
	#instance: MessagingCore;
	constructor() {
		if (defaultMessaging) {
			return defaultMessaging;
		}
		defaultMessaging = this;
		this.#instance = MessagingCore.getInstance();
	}

	get showNotificationsWhenInForeground(): boolean {
		return TNSFirebaseMessaging.showNotificationsWhenInForeground;
	}

	set showNotificationsWhenInForeground(value: boolean) {
		TNSFirebaseMessaging.showNotificationsWhenInForeground = value;
	}

	get _onMessage() {
		return this.#onMessage;
	}

	get _onNotificationTap() {
		return this.#onNotificationTap;
	}

	get _onToken() {
		return this.#onToken;
	}

	getToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!TNSFirebaseCore.isSimulator() && !UIApplication.sharedApplication.registeredForRemoteNotifications) {
				reject(new Error('You must be registered for remote messages before calling getToken, see messaging().registerDeviceForRemoteMessages()'));
				return;
			}
			this.native?.tokenWithCompletion((token, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(token);
				}
			});
		});
	}

	getAPNSToken() {
		return TNSFirebaseMessaging.APNSTokenToString(this.native.APNSToken);
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

	onToken(listener: (token: string) => any) {
		if (!listener && this.#onToken) {
			this.#instance.removeOnToken(this.#onToken);
		} else {
			this.#instance.addOnToken(listener);
		}

		this.#onToken = listener;
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		if (!listener && this.#onNotificationTap) {
			this.#instance.removeOnNotificationTap(this.#onNotificationTap);
		} else {
			this.#instance.addOnNotificationTap(listener);
		}

		this.#onNotificationTap = listener;
	}

	registerDeviceForRemoteMessages(): Promise<void> {
		return this.#instance.registerDeviceForRemoteMessages();
	}

	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		return this.#instance.requestPermission(permissions) as any;
	}

	subscribeToTopic(topic: string): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.subscribeToTopicCompletion(topic, (error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}
	unregisterDeviceForRemoteMessages(): Promise<void> {
		return this.#instance.unregisterDeviceForRemoteMessages();
	}
	unsubscribeFromTopic(topic: string): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.unsubscribeFromTopicCompletion(topic, (error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}
	deleteToken(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native?.deleteDataWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}
	get isDeviceRegisteredForRemoteMessages(): boolean {
		return this.#instance.isDeviceRegisteredForRemoteMessages;
	}
	get autoInitEnabled(): boolean {
		return this.native?.autoInitEnabled;
	}
	set autoInitEnabled(value) {
		this.native.autoInitEnabled = value;
	}
	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this.#app;
	}

	get native() {
		return FIRMessaging.messaging();
	}
	get ios() {
		return this.native;
	}
}
