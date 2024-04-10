import { Application, ApplicationSettings, Device } from '@nativescript/core';
import { IMessagingCore, Permissions } from '.';
import { AuthorizationStatus } from './common';

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
	_APNSToken;
	_onMessage(message: any, completionHandler: () => void) {
		console.log('_onMessage', message);
		if (onMessageCallbacks.size > 0) {
			const msg = deserialize(message);
			Promise.all(Array.from(onMessageCallbacks).map((cb) => cb(msg))).finally(() => completionHandler());
		} else {
			MessagingCore._messageQueues._onMessage.push(message);
			completionHandler();
		}
	}
	_onToken(token: string) {
		this._APNSToken = token;
		console.log('_onToken', token);
		if (onTokenCallbacks.size > 0) {
			onTokenCallbacks.forEach((cb) => {
				cb(token);
			});
		} else {
			MessagingCore._messageQueues._onToken.push(token);
		}
	}
	_onNotificationTap(message: any, completionHandler: () => void) {
		console.log('_onNotificationTap', message);
		if (onNotificationTapCallbacks.size > 0) {
			const msg = deserialize(message);
			Promise.all(Array.from(onNotificationTapCallbacks).map((cb) => cb(msg))).finally(() => completionHandler());
		} else {
			MessagingCore._messageQueues._onNotificationTap.push(message);
			completionHandler();
		}
	}

	static _onResumeQueue = [];
	static _messageQueues = {
		_onMessage: [],
		_onNotificationTap: [],
		_onToken: [],
	};
	static addToResumeQueue(callback: () => void) {
		if (typeof callback !== 'function') {
			return;
		}
		MessagingCore._onResumeQueue.push(callback);
	}
	static _inForeground = false;
	static _appDidLaunch = false;
	static get inForeground() {
		return MessagingCore._inForeground;
	}
	static get appDidLaunch() {
		return MessagingCore._appDidLaunch;
	}

	constructor() {
		if (defaultInstance) {
			return defaultInstance;
		}
		defaultInstance = this;

		Application.on('launch', (args) => {
			MessagingCore._onResumeQueue.forEach((callback) => {
				callback();
			});
			MessagingCore._onResumeQueue.splice(0);
		});

		Application.on('resume', (args) => {
			MessagingCore._inForeground = true;
			MessagingCore._appDidLaunch = true;
		});

		Application.on('suspend', (args) => {
			MessagingCore._inForeground = false;
		});

		NSCFirebaseMessagingCore.onMessageCallback = this._onMessage.bind(this);

		NSCFirebaseMessagingCore.onTokenCallback = this._onToken.bind(this);

		NSCFirebaseMessagingCore.onNotificationTapCallback = this._onNotificationTap.bind(this);
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

	getCurrentToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!TNSFirebaseCore.isSimulator() && !UIApplication.sharedApplication.registeredForRemoteNotifications) {
				reject(new Error('You must be registered for remote messages before calling getToken, see MessagingCore.getInstance().registerDeviceForRemoteMessages()'));
				return;
			}
			if (!this._APNSToken) {
				reject(new Error('No token found'));
				return;
			}
			resolve(this.getAPNSToken());
		});
	}

	getAPNSToken() {
		return this._APNSToken;
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
			this._triggerPendingCallbacks('_onMessage');
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
			this._triggerPendingCallbacks('_onToken');
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
			this._triggerPendingCallbacks('_onNotificationTap');
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
	private _triggerPendingCallbacks(type: keyof typeof MessagingCore._messageQueues) {
		const queue = MessagingCore._messageQueues[type];
		if (queue.length > 0) {
			MessagingCore._messageQueues[type] = [];
			queue.forEach((message) => {
				this[type](message, () => {});
			});
		}
	}
}

export { AuthorizationStatus } from './common';
