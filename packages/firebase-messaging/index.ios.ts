import { Application, ApplicationSettings, Device } from '@nativescript/core';
import { deserialize, firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { AuthorizationStatus, IMessaging, Permissions, Notification, RemoteMessage } from './common';

export { AuthorizationStatus } from './common';

declare const FIRApp, TNSFirebaseMessaging, TNSFirebaseCore;

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

const REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = 'org.nativescript.firebase.notifications.status';

export class Messaging implements IMessaging {
	#app: FirebaseApp;
	#onMessage?: (message: RemoteMessage) => void;
	#onToken?: (token: string) => void;
	#onNotificationTap?: (message: RemoteMessage) => void;
	constructor() {
		if (defaultMessaging) {
			return defaultMessaging;
		}
		defaultMessaging = this;
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

	_hasPermission(resolve, reject) {
		if (parseInt(Device.osVersion) >= 10) {
			UNUserNotificationCenter.currentNotificationCenter().getNotificationSettingsWithCompletionHandler((settings) => {
				let status = AuthorizationStatus.NOT_DETERMINED;
				switch (settings.authorizationStatus) {
					case UNAuthorizationStatus.Authorized:
						status = AuthorizationStatus.AUTHORIZED;
						break;
					case UNAuthorizationStatus.Denied:
						status = AuthorizationStatus.DENIED;
						break;
					case UNAuthorizationStatus.Ephemeral:
						status = AuthorizationStatus.EPHEMERAL;
						break;
					case UNAuthorizationStatus.Provisional:
						status = AuthorizationStatus.PROVISIONAL;
						break;
					case UNAuthorizationStatus.NotDetermined:
						status = AuthorizationStatus.NOT_DETERMINED;
						break;
				}
				resolve(status);
			});
		} else {
			resolve(AuthorizationStatus.AUTHORIZED);
		}
	}

	hasPermission(): Promise<AuthorizationStatus> {
		return new Promise((resolve, reject) => {
			this._hasPermission(resolve, reject);
		});
	}

	onMessage(listener: (message: RemoteMessage) => any) {
		this.#onMessage = listener;
		if (listener) {
			TNSFirebaseMessaging.onMessageCallback = (dict) => {
				listener(deserialize(dict));
			};
		} else {
			TNSFirebaseMessaging.onMessageCallback = null;
		}
	}

	onToken(listener: (token: string) => any) {
		this.#onToken = listener;
		if (listener) {
			TNSFirebaseMessaging.onTokenCallback = (value) => {
				listener(value);
			};
		} else {
			TNSFirebaseMessaging.onTokenCallback = null;
		}
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		this.#onNotificationTap = listener;
		if (listener) {
			TNSFirebaseMessaging.onNotificationTapCallback = (dict) => {
				listener(deserialize(dict));
			};
		} else {
			TNSFirebaseMessaging.onNotificationTapCallback = null;
		}
	}

	registerDeviceForRemoteMessages(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (TNSFirebaseCore.isSimulator()) {
				ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, true);
				resolve();
			}
			TNSFirebaseMessaging.registerDeviceForRemoteMessagesCallback = (result, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(result);
				}
			};
			if (UIApplication?.sharedApplication) {
				UIApplication?.sharedApplication?.registerForRemoteNotifications?.();
			} else {
				const cb = (args) => {
					UIApplication?.sharedApplication?.registerForRemoteNotifications?.();
					Application.off('launch', cb);
				};
				Application.on('launch', cb);
			}
		});
	}

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus> {
		return new Promise((resolve, reject) => {
			const version = parseInt(Device.osVersion);
			if (version >= 10) {
				let options = UNAuthorizationOptionNone;
				if (permissions?.ios?.alert ?? true) {
					options = options | UNAuthorizationOptions.Alert;
				}

				if (permissions?.ios?.badge ?? true) {
					options = options | UNAuthorizationOptions.Badge;
				}

				if (permissions?.ios?.sound ?? true) {
					options = options | UNAuthorizationOptions.Sound;
				}

				if (permissions?.ios?.carPlay ?? true) {
					options = options | UNAuthorizationOptions.CarPlay;
				}

				if (version >= 12) {
					if (permissions?.ios?.criticalAlert) {
						options = options | UNAuthorizationOptions.CriticalAlert;
					}

					if (permissions?.ios?.provisional) {
						options = options | UNAuthorizationOptions.Provisional;
					}
				}

				if (version >= 13 && version <= 15) {
					options = options | UNAuthorizationOptions.Announcement;
				}

				UNUserNotificationCenter.currentNotificationCenter().requestAuthorizationWithOptionsCompletionHandler(options, (result, error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						this._hasPermission(resolve, reject);
					}
				});
			} else {
				const notificationTypes = UIUserNotificationType.Sound | UIUserNotificationType.Alert | UIUserNotificationType.Badge;
				const settings = UIUserNotificationSettings.settingsForTypesCategories(notificationTypes, null);
				UIApplication.sharedApplication.registerUserNotificationSettings(settings);
				this._hasPermission(resolve, reject);
			}
		});
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
		return new Promise((resolve, reject) => {
			try {
				UIApplication.sharedApplication.unregisterForRemoteNotifications();
				ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, false);
				resolve();
			} catch (e) {
				reject(e);
			}
		});
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
		return UIApplication.sharedApplication.registeredForRemoteNotifications;
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
