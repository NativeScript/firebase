import { Application, ApplicationSettings, Device } from '@nativescript/core';
import { AuthorizationStatus, IMessagingCore, Permissions } from '.';

declare const TNSFirebaseCore;

let _registerDeviceForRemoteMessages = {
	resolve: null,
	reject: null,
};

const REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = 'org.nativescript.firebase.notifications.status';

let defaultInstance: MessagingCore;
const onMessageCallbacks: Set<(message: any) => void> = new Set();
const onTokenCallbacks: Set<(token: any) => void> = new Set();
const onNotificationTapCallbacks: Set<(message: any) => void> = new Set();

function deserialize(data: any): any {
	if (data instanceof NSNull) {
		return null;
	}

	if (data instanceof NSArray) {
		let array = [];
		for (let i = 0, n = data.count; i < n; i++) {
			array[i] = deserialize(data.objectAtIndex(i));
		}
		return array;
	}

	if (data instanceof NSDictionary) {
		let dict = {};
		for (let i = 0, n = data.allKeys.count; i < n; i++) {
			let key = data.allKeys.objectAtIndex(i);
			dict[key] = deserialize(data.objectForKey(key));
		}
		return dict;
	}

	return data;
}

export class MessagingCore implements IMessagingCore {
	#APNSToken;
	#onMessage(message: any) {
		if (onMessageCallbacks.size > 0) {
			const msg = deserialize(message);
			onMessageCallbacks.forEach((cb) => {
				cb(msg);
			});
		}
	}
	#onToken(token: string) {
		this.#APNSToken = token;
		if (onTokenCallbacks.size > 0) {
			onTokenCallbacks.forEach((cb) => {
				cb(token);
			});
		}
	}
	#onNotificationTap(message: any) {
		if (onNotificationTapCallbacks.size > 0) {
			const msg = deserialize(message);
			onNotificationTapCallbacks.forEach((cb) => {
				cb(msg);
			});
		}
	}

	static #onResumeQueue = [];
	static addToResumeQueue(callback: () => void) {
		if (typeof callback !== 'function') {
			return;
		}
		MessagingCore.#onResumeQueue.push(callback);
	}
	static #inForeground = false;
	static get inForeground() {
		return MessagingCore.#inForeground;
	}

	constructor() {
		if (defaultInstance) {
			return defaultInstance;
		}
		defaultInstance = this;

		Application.on('launch', (args) => {
			MessagingCore.#onResumeQueue.forEach((callback) => {
				callback();
			});
			MessagingCore.#onResumeQueue.splice(0);
		});

		Application.on('resume', (args) => {
			MessagingCore.#inForeground = true;
		});

		Application.on('suspend', (args) => {
			MessagingCore.#inForeground = false;
		});

		NSCFirebaseMessagingCore.onMessageCallback = this.#onMessage;

		NSCFirebaseMessagingCore.onTokenCallback = this.#onToken;

		NSCFirebaseMessagingCore.onNotificationTapCallback = this.#onNotificationTap;
	}

	static getInstance() {
		if (defaultInstance) {
			return defaultInstance;
		}
		return new MessagingCore();
	}

	get showNotificationsWhenInForeground(): boolean {
		return NSCFirebaseMessagingCore.showNotificationsWhenInForeground;
	}

	set showNotificationsWhenInForeground(value: boolean) {
		NSCFirebaseMessagingCore.showNotificationsWhenInForeground = value;
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

	getCurrentToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!TNSFirebaseCore.isSimulator() && !UIApplication.sharedApplication.registeredForRemoteNotifications) {
				reject(new Error('You must be registered for remote messages before calling getToken, see MessagingCore.getInstance().registerDeviceForRemoteMessages()'));
				return;
			}
			if (!this.#APNSToken) {
				reject(new Error('No token found'));
				return;
			}
			resolve(this.getAPNSToken());
		});
	}

	getAPNSToken() {
		return NSCFirebaseMessagingCore.APNSTokenToString(this.#APNSToken);
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

	addOnMessage(listener: (message: any) => any) {
		if (typeof listener === 'function') {
			onMessageCallbacks.add(listener);
		}
	}

	removeOnMessage(listener: (message: any) => any): boolean {
		if (typeof listener === 'function') {
			return onMessageCallbacks.delete(listener);
		}
		return false;
	}

	addOnToken(listener: (token: string) => any) {
		if (typeof listener === 'function') {
			onTokenCallbacks.add(listener);
		}
	}

	removeOnToken(listener: (token: string) => any): boolean {
		if (typeof listener === 'function') {
			return onTokenCallbacks.delete(listener);
		}
		return false;
	}

	addOnNotificationTap(listener: (message: any) => any) {
		if (typeof listener === 'function') {
			onNotificationTapCallbacks.add(listener);
		}
	}

	removeOnNotificationTap(listener: (message: any) => any): boolean {
		if (typeof listener === 'function') {
			return onNotificationTapCallbacks.delete(listener);
		}
		return false;
	}

	registerDeviceForRemoteMessages(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (TNSFirebaseCore.isSimulator()) {
				ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, true);
				resolve();
			}
			NSCFirebaseMessagingCore.registerDeviceForRemoteMessagesCallback = (result, error) => {
				if (error) {
					const err: any = new Error(error?.localizedDescription);
					err.native = error;
					reject(err);
				} else {
					resolve();
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
						const err: any = new Error(error?.localizedDescription);
						err.native = error;
						reject(err);
						reject(err);
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
	get isDeviceRegisteredForRemoteMessages(): boolean {
		return UIApplication.sharedApplication.registeredForRemoteNotifications;
	}
}
