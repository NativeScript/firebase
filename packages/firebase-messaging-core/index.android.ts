import { AndroidActivityNewIntentEventData, AndroidApplication, Application, Device, Utils } from '@nativescript/core';
import { IMessagingCore } from '.';
import { AuthorizationStatus } from './common';

let defaultInstance: MessagingCore;

let Callback;
function ensureCallback() {
	@NativeClass
	@Interfaces([org.nativescript.firebase.messaging.FirebaseMessaging.Callback])
	class CallbackImpl extends java.lang.Object implements org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string> {
		_owner: WeakRef<MessagingCore>;
		_propName: string;
		constructor() {
			super();
			return global.__native(this);
		}

		public onError(error: any): void {}

		public onSuccess(message: string): void {
			const callback = this._owner?.get?.()?.[this._propName];
			if (typeof callback === 'function') {
				if (this._propName === '_onToken') {
					callback(message);
				} else if (this._propName === '_onNotificationTap' || this._propName === '_onMessage') {
					try {
						setTimeout(() => {
							callback(JSON.parse(message));
						});
					} catch (e) {
						// ignore
					}
				} else {
					try {
						callback(JSON.parse(message));
					} catch (e) {
						// ignore
					}
				}
			}
		}
	}

	Callback = CallbackImpl;
}

const onMessageCallbacks: Set<(message: any) => void> = new Set();
const onTokenCallbacks: Set<(token: any) => void> = new Set();
const onNotificationTapCallbacks: Set<(message: any) => void> = new Set();

let lastActivity: WeakRef<androidx.appcompat.app.AppCompatActivity>;
let requestPermissionLauncher: androidx.activity.result.ActivityResultLauncher<any>;
let _permissionQueue: { resolve: Function; reject: Function }[] = [];

function register(args: any) {
	if (!lastActivity) {
		// Some activities do not implement activity result API
		if (args.activity.registerForActivityResult) {
			lastActivity = new WeakRef(args.activity);
			requestPermissionLauncher = args.activity.registerForActivityResult(
				new androidx.activity.result.contract.ActivityResultContracts.RequestPermission(),
				new androidx.activity.result.ActivityResultCallback({
					onActivityResult(isGranted: boolean) {
						_permissionQueue.forEach((callback) => {
							callback.resolve(isGranted ? 0 : 1);
						});
						_permissionQueue.splice(0);
					},
				})
			);
		} else {
			Application.android.once('activityCreated', register);
		}
	}
}

Application.android.on('activityResumed', (args) => {
	MessagingCore._inForeground = true;
	MessagingCore.appDidLaunch = true;
	MessagingCore._onResumeQueue.forEach((callback) => {
		callback();
	});
	MessagingCore._onResumeQueue.splice(0);
});

Application.android.on('activityPaused', (args) => {
	MessagingCore._inForeground = false;
});

Application.android.once('activityCreated', register);

Application.android.on('activityDestroyed', (args) => {
	const activity = lastActivity?.get?.();
	if (activity && args.activity === activity) {
		requestPermissionLauncher?.unregister?.();
		lastActivity = undefined;
		Application.android.once('activityCreated', register);
	}
});

export class MessagingCore implements IMessagingCore {
	_native: com.google.firebase.messaging.FirebaseMessaging;
	_onMessageCallback?;
	_onMessage(message: any) {
		if (onMessageCallbacks.size > 0) {
			onMessageCallbacks.forEach((cb) => {
				cb(message);
			});
		} else {
			MessagingCore._messageQueues._onMessage.push(message);
		}
	}

	_onNotificationTapCallback?;
	_onNotificationTap(message: any) {
		if (onNotificationTapCallbacks.size > 0) {
			onNotificationTapCallbacks.forEach((cb) => {
				cb(message);
			});
		} else {
			MessagingCore._messageQueues._onNotificationTap.push(message);
		}
	}

	_onTokenCallback?;
	_onToken(token: string) {
		if (onTokenCallbacks.size > 0) {
			onTokenCallbacks.forEach((cb) => {
				cb(token);
			});
		} else {
			MessagingCore._messageQueues._onToken.push(token);
		}
	}

	showNotificationsWhenInForeground: boolean;

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
	static set appDidLaunch(value) {
		MessagingCore._appDidLaunch = value;
	}

	constructor() {
		if (defaultInstance) {
			return defaultInstance;
		}
		defaultInstance = this;

		this._native = com.google.firebase.messaging.FirebaseMessaging.getInstance();

		org.nativescript.firebase.messaging.FirebaseMessaging.init(Utils.android.getApplicationContext());
		ensureCallback();

		// Setup onmessage handling

		this._onMessageCallback = new Callback();
		this._onMessageCallback._propName = '_onMessage';

		this._onMessageCallback._owner = new WeakRef(this);

		org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageListener(this._onMessageCallback);

		// Setup tap notification handling

		this._onNotificationTapCallback = new Callback();
		this._onNotificationTapCallback._propName = '_onNotificationTap';

		this._onNotificationTapCallback._owner = new WeakRef(this);

		org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageTapListener(this._onNotificationTapCallback);

		this._onTokenCallback = new Callback();
		this._onTokenCallback._propName = '_onToken';
		this._onTokenCallback._owner = new WeakRef(this);

		org.nativescript.firebase.messaging.FirebaseMessaging.setOnTokenListener(this._onTokenCallback);

		Application.android.on(AndroidApplication.activityNewIntentEvent, this._newIntentCallback.bind(this));
	}

	static getInstance() {
		if (defaultInstance) {
			return defaultInstance;
		}
		return new MessagingCore();
	}

	_newIntentCallback(args: AndroidActivityNewIntentEventData) {
		org.nativescript.firebase.messaging.FirebaseMessaging.handleActivityIntent(args.intent);
	}

	getCurrentToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.getToken(
				this._native,
				new org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string>({
					onSuccess(result) {
						resolve(result);
					},
					onError(error) {
						const err: any = new Error(error?.getMessage?.() || 'Failed to getToken');
						err.native = error;
						reject(err);
					},
				})
			);
		});
	}

	hasPermission(): Promise<AuthorizationStatus> {
		const context = Utils.android.getApplicationContext();
		if (parseInt(Device.sdkVersion) >= 33) {
			if (androidx.core.content.ContextCompat.checkSelfPermission(context, (android as any).Manifest.permission.POST_NOTIFICATIONS) === android.content.pm.PackageManager.PERMISSION_GRANTED) {
				return Promise.resolve(0);
			} else {
				return Promise.resolve(1);
			}
		}
		return Promise.resolve(org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(context) ? 0 : 1);
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
		return Promise.resolve();
	}
	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		if (parseInt(Device.sdkVersion) >= 33) {
			const activity: androidx.appcompat.app.AppCompatActivity = Application.android.foregroundActivity || Application.android.startActivity;

			return new Promise((resolve, reject) => {
				// TODO
				/*const launch = (activity) => {
					_permissionQueue.push({
						resolve,
						reject,
					});
					requestPermissionLauncher.launch((android as any).Manifest.permission.POST_NOTIFICATIONS);
				};

				if (!activity) {
					Application.android.once('activityCreated', (args: any) => {
						register(args);
						launch(args.activity);
					});
				} else {
					launch(activity);
				}
				*/

				const requestPermission = (activity: androidx.appcompat.app.AppCompatActivity) => {
					Application.android.on('activityRequestPermissions', (event) => {
						if (event.requestCode === 1001) {
							if (event.grantResults && event.grantResults.length > 0 && event.grantResults[0] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
								resolve(0);
							} else {
								reject(1);
							}
						}
					});
					const perms = Array.create('java.lang.String', 1);
					perms[0] = (android as any).Manifest.permission.POST_NOTIFICATIONS;
					activity.requestPermissions(perms, 1001);
				};

				if (!activity) {
					Application.android.once('activityCreated', (args: any) => {
						requestPermission(args.activity);
					});
				} else {
					requestPermission(activity);
				}
			});
		}
		return this.hasPermission();
	}

	unregisterDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}

	get isDeviceRegisteredForRemoteMessages(): boolean {
		return org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext());
	}

	private _triggerPendingCallbacks(type: keyof typeof MessagingCore._messageQueues) {
		const queue = MessagingCore._messageQueues[type];
		if (queue.length > 0) {
			queue.forEach((message) => {
				this[type](message);
			});
			MessagingCore._messageQueues[type] = [];
		}
	}
}

export { AuthorizationStatus } from './common';
