import { AndroidActivityNewIntentEventData, AndroidApplication, Application, Utils } from '@nativescript/core';
import { AuthorizationStatus, IMessagingCore } from '.';

export { AuthorizationStatus } from './enums';

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
			console.log('onSuccess', message);
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
			if (!MessagingCore.inForeground) {
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
		console.log('onToken test', onTokenCallbacks.size);
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
	static get inForeground() {
		return MessagingCore.#inForeground;
	}

	constructor() {
		if (defaultInstance) {
			return defaultInstance;
		}
		defaultInstance = this;

		this.#native = com.google.firebase.messaging.FirebaseMessaging.getInstance();

		Application.android.on('activityResumed', (args) => {
			MessagingCore.#inForeground = true;
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
		console.log('_onToken');
		return this.#onToken;
	}

	get _onTokenCallback() {
		return this.#onTokenCallback;
	}

	getToken(): Promise<string> {
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

	getAPNSToken() {
		return null;
	}

	hasPermission(): Promise<AuthorizationStatus> {
		return Promise.resolve(org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext()) ? AuthorizationStatus.AUTHORIZED : AuthorizationStatus.DENIED);
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
		return this.hasPermission();
	}

	unregisterDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}

	get isDeviceRegisteredForRemoteMessages(): boolean {
		return org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext());
	}
}
