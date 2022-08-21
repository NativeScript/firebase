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
			const exec = () => {
				const callback = this._owner?.get?.()?.[this._propName];
				if (typeof callback === 'function') {
					if (this._propName === '_onToken') {
						callback(message);
					} else if (this._propName === '_onNotificationTap' || this._propName === '_onMessage') {
						try {
							setTimeout(() => {
								callback(JSON.parse(message));
							});
						} catch (e) {}
					} else {
						try {
							callback(JSON.parse(message));
						} catch (e) {}
					}
				}
			};
			if (!MessagingCore.inForeground || !MessagingCore.appDidLaunch) {
				MessagingCore.addToResumeQueue(exec);
			} else {
				exec();
			}
		}
	}

	Callback = CallbackImpl;
}

const onMessageCallbacks: Set<(message: any) => void> = new Set();
const onTokenCallbacks: Set<(token: any) => void> = new Set();
const onNotificationTapCallbacks: Set<(message: any) => void> = new Set();

export class MessagingCore implements IMessagingCore {
	#native: com.google.firebase.messaging.FirebaseMessaging;
	#onMessageCallback?;
	#onMessage(message: any) {
		if (onMessageCallbacks.size > 0) {
			onMessageCallbacks.forEach((cb) => {
				cb(message);
			});
		}
	}

	#onNotificationTapCallback?;
	#onNotificationTap(message: any) {
		if (onNotificationTapCallbacks.size > 0) {
			onNotificationTapCallbacks.forEach((cb) => {
				cb(message);
			});
		}
	}

	#onTokenCallback?;
	#onToken(token: string) {
		if (onTokenCallbacks.size > 0) {
			onTokenCallbacks.forEach((cb) => {
				cb(token);
			});
		}
	}

	showNotificationsWhenInForeground: boolean;

	static #onResumeQueue = [];
	static addToResumeQueue(callback: () => void) {
		if (typeof callback !== 'function') {
			return;
		}
		MessagingCore.#onResumeQueue.push(callback);
	}
	static #inForeground = false;
	static #appDidLaunch = false;
	static get inForeground() {
		return MessagingCore.#inForeground;
	}
	static get appDidLaunch() {
		return MessagingCore.#appDidLaunch;
	}

	constructor() {
		if (defaultInstance) {
			return defaultInstance;
		}
		defaultInstance = this;

		this.#native = com.google.firebase.messaging.FirebaseMessaging.getInstance();

		Application.android.on('activityResumed', (args) => {
			MessagingCore.#inForeground = true;
			MessagingCore.#appDidLaunch = true;
			MessagingCore.#onResumeQueue.forEach((callback) => {
				callback();
			});
			MessagingCore.#onResumeQueue.splice(0);
		});

		Application.android.on('activityPaused', (args) => {
			MessagingCore.#inForeground = false;
		});

		org.nativescript.firebase.messaging.FirebaseMessaging.init(Utils.android.getApplicationContext());
		ensureCallback();

		// Setup onmessage handling

		this.#onMessageCallback = new Callback();
		this.#onMessageCallback._propName = '_onMessage';

		this.#onMessageCallback._owner = new WeakRef(this);

		org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageListener(this.#onMessageCallback);

		// Setup tap notification handling

		this.#onNotificationTapCallback = new Callback();
		this.#onNotificationTapCallback._propName = '_onNotificationTap';

		this.#onNotificationTapCallback._owner = new WeakRef(this);

		org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageTapListener(this.#onNotificationTapCallback);

		this.#onTokenCallback = new Callback();
		this.#onTokenCallback._propName = '_onToken';
		this.#onTokenCallback._owner = new WeakRef(this);

		org.nativescript.firebase.messaging.FirebaseMessaging.setOnTokenListener(this.#onTokenCallback);

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

	get _onMessage() {
		return this.#onMessage;
	}

	get _onMessageCallback() {
		return this.#onMessageCallback;
	}

	get _onNotificationTap() {
		return this.#onNotificationTap;
	}

	get _onNotificationTapCallback() {
		return this.#onNotificationTapCallback;
	}

	get _onToken() {
		return this.#onToken;
	}

	get _onTokenCallback() {
		return this.#onTokenCallback;
	}

	getCurrentToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.getToken(
				this.#native,
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
		return Promise.resolve();
	}
	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		if (parseInt(Device.sdkVersion) >= 33) {
			const activity: androidx.appcompat.app.AppCompatActivity = Application.android.foregroundActivity || Application.android.startActivity;

			return new Promise((resolve, reject) => {
				const launch = (activity) => {
					const requestPermissionLauncher = activity.registerForActivityResult(
						new androidx.activity.result.contract.ActivityResultContracts.RequestPermission(),
						new androidx.activity.result.ActivityResultCallback({
							onActivityResult(isGranted: boolean) {
								resolve(isGranted ? 0 : 1);
							},
						})
					);

					requestPermissionLauncher.launch((android as any).Manifest.permission.POST_NOTIFICATIONS);
				};

				if (!activity) {
					Application.android.once('activityCreated', (args: any) => {
						launch(args.activity);
					});
				} else {
					launch(activity);
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
}

export { AuthorizationStatus } from './common';
