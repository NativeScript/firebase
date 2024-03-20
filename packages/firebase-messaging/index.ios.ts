import { firebase, FirebaseApp, FirebaseError } from '@nativescript-asharghi/firebase-core';
import { IMessaging, RemoteMessage } from '.';
import { MessagingCore, AuthorizationStatus } from '@nativescript-asharghi/firebase-messaging-core';

export { AuthorizationStatus };

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
	_app: FirebaseApp;
	_onMessage?: (message: RemoteMessage) => void;
	_onToken?: (token: string) => void;
	_onNotificationTap?: (message: RemoteMessage) => void;
	_instance: MessagingCore;
	constructor() {
		if (defaultMessaging) {
			return defaultMessaging;
		}
		defaultMessaging = this;
		this._instance = MessagingCore.getInstance();
	}

	get showNotificationsWhenInForeground(): boolean {
		return NSCFirebaseMessagingCore.showNotificationsWhenInForeground;
	}

	set showNotificationsWhenInForeground(value: boolean) {
		NSCFirebaseMessagingCore.showNotificationsWhenInForeground = value;
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
		const token = this.native.APNSToken;
		if (!token) {
			return null;
		}
		return NSCFirebaseMessagingCore.APNSTokenToString(token);
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

	onToken(listener: (token: string) => any) {
		if (!listener && this._onToken) {
			this._instance.removeOnToken(this._onToken);
		} else {
			this._instance.addOnToken(listener);
		}

		this._onToken = listener;
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		if (!listener && this._onNotificationTap) {
			this._instance.removeOnNotificationTap(this._onNotificationTap);
		} else {
			this._instance.addOnNotificationTap(listener);
		}

		this._onNotificationTap = listener;
	}

	registerDeviceForRemoteMessages(): Promise<void> {
		return this._instance.registerDeviceForRemoteMessages();
	}

	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		return this._instance.requestPermission(permissions) as any;
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
		return this._instance.unregisterDeviceForRemoteMessages();
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
		return this._instance.isDeviceRegisteredForRemoteMessages;
	}
	get autoInitEnabled(): boolean {
		return this.native?.autoInitEnabled;
	}
	set autoInitEnabled(value) {
		this.native.autoInitEnabled = value;
	}
	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this._app;
	}

	get native() {
		return FIRMessaging.messaging();
	}
	get ios() {
		return this.native;
	}
}
