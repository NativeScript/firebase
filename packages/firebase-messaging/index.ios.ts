import { Application, ApplicationSettings, Device } from '@nativescript/core';
import { deserialize, Firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { AuthorizationStatus, IMessaging, Permissions, Notification, RemoteMessage } from './common';

declare const FIRApp;

let _registerDeviceForRemoteMessages = {
	resolve: null,
	reject: null,
};

let messaging: Messaging;
Firebase.messaging = () => {
	if (!messaging) {
		messaging = new Messaging();
	}
	return messaging;
};

const REMOTE_NOTIFICATIONS_REGISTRATION_STATUS = 'org.nativescript.firebase.notifications.status';

export class Messaging implements IMessaging {
	#native: FIRMessaging;
	#app: FirebaseApp;
	#delegate: FIRMessagingDelegateImpl;
	#onMessage?: (message: RemoteMessage) => void;
	#onToken?: (token: string) => void;
	#onNotificationTap?: (message: RemoteMessage) => void;
	constructor() {
		AppDelegateImpl.sharedInstance.observe();
		if (!Application.ios.delegate) {
			Application.ios.delegate = AppDelegateImpl;
		}
		this.#native = FIRMessaging.messaging();
		this.#delegate = FIRMessagingDelegateImpl.initWithOwner(new WeakRef(this));
		this.#native.delegate = this.#delegate;
		Application.ios.addNotificationObserver(UIApplicationDidFinishLaunchingNotification, (notification) => {
			UNUserNotificationCenterDelegateImpl.sharedInstance.observe();
			const auto = ApplicationSettings.getBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS) ?? false;
			const isSimulator = UIDevice.currentDevice.name.toLocaleLowerCase().indexOf('simulator');
			if (auto && !isSimulator) {
				UIApplication?.sharedApplication?.registerForRemoteNotifications?.();
			}
		});
	}

	showNotificationsWhenInForeground: boolean;

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
			if (!UIDevice.currentDevice.name.toLocaleLowerCase().indexOf('simulator') && !UIApplication.sharedApplication.registeredForRemoteNotifications) {
				reject(new Error('You must be registered for remote messages before calling getToken, see messaging().registerDeviceForRemoteMessages()'));
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
						status = AuthorizationStatus.AUTHORIZED;
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
	}

	onToken(listener: (token: string) => any) {
		this.#onToken = listener;
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		this.#onNotificationTap = listener;
	}

	registerDeviceForRemoteMessages(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (UIDevice.currentDevice.name.toLocaleLowerCase().indexOf('simulator')) {
				ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, true);
				resolve();
			}
			_registerDeviceForRemoteMessages.resolve = resolve;
			_registerDeviceForRemoteMessages.reject = reject;
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
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

@NativeClass
@ObjCClass(FIRMessagingDelegate)
class FIRMessagingDelegateImpl extends NSObject implements FIRMessagingDelegate {
	_owner: WeakRef<Messaging>;
	static initWithOwner(owner: WeakRef<Messaging>) {
		const delegate = <FIRMessagingDelegateImpl>FIRMessagingDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}
	messagingDidReceiveRegistrationToken(_messaging: FIRMessaging, fcmToken: string): void {
		if (!fcmToken) {
			return;
		}

		messaging?._onToken?.(fcmToken);
		const selector = 'messaging:didReceiveRegistrationToken:';
		if (GULAppDelegateSwizzler.sharedApplication().delegate.respondsToSelector(selector)) {
			// @ts-ignore
			GULAppDelegateSwizzler.sharedApplication().delegate.messagingDidReceiveRegistrationToken(_messaging.APNSToken, fcmToken);
		}
	}
}

let notificationCenterDelegate: UNUserNotificationCenterDelegateImpl;
let notificationCenterDelegateObserving = false;
let originalNotificationCenterDelegate: UNUserNotificationCenterDelegate;

const originalDelegateRespondsTo = {
	willPresentNotification: true,
	didReceiveNotificationResponse: true,
	openSettingsForNotification: true,
};

@NativeClass
@ObjCClass(UNUserNotificationCenterDelegate)
class UNUserNotificationCenterDelegateImpl extends NSObject implements UNUserNotificationCenterDelegate {
	static get sharedInstance() {
		if (!notificationCenterDelegate) {
			notificationCenterDelegate = UNUserNotificationCenterDelegateImpl.new() as UNUserNotificationCenterDelegateImpl;
		}
		return notificationCenterDelegate;
	}

	observe() {
		if (!notificationCenterDelegateObserving) {
			const center = UNUserNotificationCenter.currentNotificationCenter();
			if (center.delegate) {
				originalNotificationCenterDelegate = center.delegate;
				originalDelegateRespondsTo.openSettingsForNotification = originalNotificationCenterDelegate.respondsToSelector('userNotificationCenter:openSettingsForNotification:');
				originalDelegateRespondsTo.willPresentNotification = originalNotificationCenterDelegate.respondsToSelector('userNotificationCenter:willPresentNotification:withCompletionHandler:');
				originalDelegateRespondsTo.didReceiveNotificationResponse = originalNotificationCenterDelegate.respondsToSelector('userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:');
			}
			center.delegate = UNUserNotificationCenterDelegateImpl.sharedInstance;
			notificationCenterDelegateObserving = true;
		}
	}

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void {
		const remoteNotification = response.notification.request.content.userInfo;
		if (remoteNotification.objectForKey('gcm.message_id')) {
			const message = parseNotification(response.notification);
			if (message) {
				message['foreground'] = UIApplication.sharedApplication.applicationState === UIApplicationState.Active;
			}
			messaging?._onNotificationTap?.(message);
		}

		if (originalNotificationCenterDelegate && originalDelegateRespondsTo.didReceiveNotificationResponse) {
			originalNotificationCenterDelegate.userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center, response, completionHandler);
		} else {
			completionHandler();
		}
	}

	userNotificationCenterOpenSettingsForNotification(center: UNUserNotificationCenter, notification: UNNotification): void {
		if (originalNotificationCenterDelegate && originalDelegateRespondsTo.openSettingsForNotification) {
			originalNotificationCenterDelegate.userNotificationCenterOpenSettingsForNotification(center, notification);
		}
	}

	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void {
		let options = UNNotificationPresentationOptionNone;
		const aps = notification.request.content.userInfo.objectForKey('aps') as NSDictionary<any, any>;
		if (messaging?.showNotificationsWhenInForeground || notification.request.content.userInfo.objectForKey('gcm.notification.showWhenInForeground') === 'true' || notification.request.content.userInfo.objectForKey('showWhenInForeground') === true || (aps && aps.objectForKey('showWhenInForeground') === true)) {
			options = UNNotificationPresentationOptions.Alert | UNNotificationPresentationOptions.Sound | UNNotificationPresentationOptions.Badge;
		}

		if (notification.request.content.userInfo.objectForKey('gcm.message_id')) {
			const message = parseNotification(notification);
			if (!message['contentAvailable']) {
				messaging?._onMessage?.(message);
				if (message) {
					message['foreground'] = UIApplication.sharedApplication.applicationState === UIApplicationState.Active;
				}
			}
			completionHandler(options);
		}

		if (originalNotificationCenterDelegate && originalDelegateRespondsTo.willPresentNotification) {
			originalNotificationCenterDelegate.userNotificationCenterWillPresentNotificationWithCompletionHandler(center, notification, completionHandler);
		} else {
			completionHandler(options);
		}
	}
}

function parseNotification(notification: UNNotification) {
	return parseRemoteMessage(notification?.request?.content?.userInfo);
}

function parseRemoteMessage(remoteMessage: NSDictionary<any, any>) {
	const message: RemoteMessage = {};
	const data = {};
	const notification: Notification = {};
	const notificationIOS = {};

	const keys: NSArray<string> = remoteMessage.allKeys;
	const count = keys.count;
	for (let i = 0; i < count; i++) {
		const key = keys.objectAtIndex(i);

		if (key === 'gcm.message_id' || key === 'google.message_id' || key === 'message_id') {
			message['messageId'] = remoteMessage.objectForKey(key);
			continue;
		}

		// message.messageType
		if (key === 'message_type') {
			message['messageType'] = remoteMessage.objectForKey(key);
			continue;
		}

		// message.collapseKey
		if (key === 'collapse_key') {
			message['collapseKey'] = remoteMessage.objectForKey(key);
			continue;
		}

		// message.from
		if (key === 'from') {
			message['from'] = remoteMessage.objectForKey(key);
			continue;
		}

		// message.sentTime
		if ([key === 'google.c.a.ts']) {
			message['sentTime'] = remoteMessage.objectForKey(key);
			continue;
		}

		// message.to
		if ([key === 'to'] || [key === 'google.to']) {
			message['to'] = remoteMessage.objectForKey(key);
			continue;
		}

		// build data dict from remaining keys but skip keys that shouldn't be included in data
		if (key === 'aps' || key.startsWith('gcm.') || key.startsWith('google.')) {
			continue;
		}

		// message.apple.imageUrl
		if (key === 'fcm_options') {
			const imageUrl = remoteMessage.objectForKey(key)?.objectForKey?.('image');
			if (imageUrl) {
				notificationIOS['imageUrl'] = imageUrl?.absoluteString || imageUrl;
			}
			continue;
		}

		data[key] = deserialize(remoteMessage.objectForKey(key));
	}

	message['data'] = data;

	const apsDict = remoteMessage.objectForKey('aps') as NSDictionary<any, any>;

	if (apsDict) {
		// message.category
		const category = apsDict.objectForKey('category');
		if (category) {
			message['category'] = category;
		}

		// message.threadId
		const threadId = apsDict.objectForKey('thread-id');
		if (threadId) {
			message['threadId'] = threadId;
		}

		// message.contentAvailable
		const contentAvailable = apsDict.objectForKey('content-available');
		if (contentAvailable) {
			message['contentAvailable'] = contentAvailable;
		}

		// message.mutableContent
		const mutableContent = apsDict.objectForKey('mutable-content');
		if (mutableContent) {
			message['mutableContent'] = true;
		}

		// message.notification.*
		const alert = apsDict.objectForKey('alert');
		if (alert) {
			// can be a string or dictionary
			if (typeof alert === 'string') {
				// message.notification.title
				notification['title'] = alert;
			} else if (alert instanceof NSDictionary) {
				const apsAlertDict = alert;

				// message.notification.title
				const title = apsAlertDict.objectForKey('title');
				if (title) {
					notification['title'] = title;
				}

				// message.notification.titleLocKey
				const titleLocKey = apsAlertDict.objectForKey('title-loc-key');
				if (titleLocKey) {
					notification['titleLocKey'] = titleLocKey;
				}

				// message.notification.titleLocArgs
				const titleLocArgs = apsAlertDict.objectForKey('title-loc-args');
				if (titleLocArgs) {
					notification['titleLocArgs'] = deserialize(titleLocArgs);
				}

				// message.notification.body
				const body = apsAlertDict.objectForKey('body');
				if (body) {
					notification['body'] = body;
				}

				// message.notification.bodyLocKey
				const bodyLocKey = apsAlertDict.objectForKey('loc-key');
				if (bodyLocKey) {
					notification['bodyLocKey'] = bodyLocKey;
				}

				// message.notification.bodyLocArgs
				const bodyLocArgs = apsAlertDict.objectForKey('loc-args');
				if (bodyLocArgs) {
					notification['bodyLocArgs'] = deserialize(bodyLocArgs);
				}

				// Apple only
				// message.notification.apple.subtitle
				const subtitle = apsAlertDict.objectForKey('subtitle');
				if (subtitle) {
					notificationIOS['subtitle'] = subtitle;
				}

				// Apple only
				// message.notification.apple.subtitleLocKey
				const subtitleLocKey = apsAlertDict.objectForKey('subtitle-loc-key');
				if (subtitleLocKey) {
					notificationIOS['subtitleLocKey'] = subtitleLocKey;
				}

				// Apple only
				// message.notification.apple.subtitleLocArgs
				const subtitleLocArgs = apsAlertDict.objectForKey('subtitle-loc-args');
				if (subtitleLocArgs) {
					notificationIOS['subtitleLocArgs'] = deserialize(subtitleLocArgs);
				}

				// Apple only
				// message.notification.apple.badge
				const badge = apsAlertDict.objectForKey('badge');
				if (badge) {
					notificationIOS['badge'] = badge;
				}
			}

			notification['apple'] = notificationIOS;
			message['notification'] = notification;
		}

		// message.notification.apple.sound
		const sound = apsDict.objectForKey('sound');
		if (sound) {
			if (typeof sound === 'string') {
				// message.notification.apple.sound
				notification['sound'] = {
					name: sound,
					critical: false,
					volume: 1,
				};
			} else if (sound instanceof NSDictionary) {
				const apsSoundDict = sound;
				const notificationIOSSound = {};

				// message.notification.apple.sound.name String
				const name = apsSoundDict.objectForKey('name');
				if (name) {
					notificationIOSSound['name'] = name;
				}

				// message.notification.apple.sound.critical Boolean
				const critical = apsSoundDict.objectForKey('critical');
				if (critical) {
					notificationIOSSound['critical'] = Boolean(critical);
				}

				// message.notification.apple.sound.volume Number
				const volume = apsSoundDict.objectForKey('volume');
				if (volume !== null) {
					notificationIOSSound['volume'] = volume;
				}

				// message.notification.apple.sound
				notificationIOS['sound'] = notificationIOSSound;
			}
		}

		notification['apple'] = notificationIOS;
		message['notification'] = notification;
	}

	return message;
}

let appDelegate: AppDelegateImpl;
let appDelegateInit = false;

@NativeClass
@ObjCClass(UIApplicationDelegate)
class AppDelegateImpl extends UIResponder implements UIApplicationDelegate {
	static get sharedInstance() {
		if (!appDelegate) {
			appDelegate = AppDelegateImpl.alloc().init() as AppDelegateImpl;
		}
		return appDelegate;
	}

	observe() {
		if (!appDelegateInit) {
			GULAppDelegateSwizzler.registerAppDelegateInterceptor(appDelegate);
			GULAppDelegateSwizzler.proxyOriginalDelegateIncludingAPNSMethods();
			appDelegateInit = true;
		}
	}

	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void {
		_registerDeviceForRemoteMessages?.reject?.(error);
		_registerDeviceForRemoteMessages.resolve = null;
		_registerDeviceForRemoteMessages.reject = null;
	}

	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void {
		FIRMessaging.messaging().APNSToken = deviceToken;
		ApplicationSettings.setBoolean(REMOTE_NOTIFICATIONS_REGISTRATION_STATUS, true);
		_registerDeviceForRemoteMessages?.resolve?.(UIApplication.sharedApplication.registeredForRemoteNotifications);
		_registerDeviceForRemoteMessages.resolve = null;
		_registerDeviceForRemoteMessages.reject = null;
	}

	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void {
		const message = parseRemoteMessage(userInfo);
		if (message) {
			message['foreground'] = application.applicationState === UIApplicationState.Active;
		}
		messaging?._onMessage?.(message);
		completionHandler(UIBackgroundFetchResult.NewData);
	}

	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void {
		_registerDeviceForRemoteMessages?.resolve?.(UIApplication.sharedApplication.registeredForRemoteNotifications);
		_registerDeviceForRemoteMessages.resolve = null;
		_registerDeviceForRemoteMessages.reject = null;
	}
}
