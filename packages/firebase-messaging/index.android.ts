import { AndroidActivityNewIntentEventData, AndroidApplication, Application, Utils } from '@nativescript/core';
import { FirebaseApp, FirebaseError, firebase, deserialize } from '@nativescript/firebase-core';
import { AuthorizationStatus, IMessaging, RemoteMessage } from './common';

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
let Callback;
function ensureCallback() {
	@NativeClass
	@Interfaces([org.nativescript.firebase.messaging.FirebaseMessaging.Callback])
	class CallbackImpl extends java.lang.Object implements org.nativescript.firebase.messaging.FirebaseMessaging.Callback<string> {
		_owner: WeakRef<Messaging>;
		_propName: string;
		constructor() {
			super();
			return global.__native(this);
		}

		public onError(error: any): void {}
		public onSuccess(message: string): void {
			const callback = this._owner?.get?.()?.[this._propName];
			if (typeof callback === 'function') {
				try {
					callback(JSON.parse(message));
				} catch (e) {}
			}
		}
	}

	Callback = CallbackImpl;
}

export class Messaging implements IMessaging {
	#native: com.google.firebase.messaging.FirebaseMessaging;
	#app: FirebaseApp;
	#onMessageCallback?;
	#onMessage?: (message: RemoteMessage) => void;

	#onNotificationTapCallback?;
	#onNotificationTap?: (message: RemoteMessage) => void;

	#onTokenCallback?;
	#onToken?: (token: string) => void;


	constructor() {
		if (defaultMessaging) {
			return defaultMessaging;
		}
		defaultMessaging = this;
		org.nativescript.firebase.messaging.FirebaseMessaging.init(Utils.android.getApplicationContext());
		this.#native = com.google.firebase.messaging.FirebaseMessaging.getInstance();
		ensureCallback();
		Application.android.on(AndroidApplication.activityNewIntentEvent, this._newIntentCallback);
	}
	showNotificationsWhenInForeground: boolean;


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

	getToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.getToken(
				this.#native,
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

	getAPNSToken(){
		return null;
	}

	hasPermission(): Promise<AuthorizationStatus> {
		return Promise.resolve(org.nativescript.firebase.messaging.FirebaseMessaging.hasPermission(Utils.android.getApplicationContext()) ? AuthorizationStatus.AUTHORIZED : AuthorizationStatus.DENIED);
	}

	onMessage(listener: (message: RemoteMessage) => any) {
		this.#onMessage = listener;
		if (listener) {
			if (!this.#onMessageCallback) {
				this.#onMessageCallback = new Callback();
				this.#onMessageCallback._propName = '_onMessage';
			}

			this.#onMessageCallback._owner = new WeakRef(this);

			org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageListener(this.#onMessageCallback);
		}
	}

	onNotificationTap(listener: (message: RemoteMessage) => any) {
		this.#onNotificationTap = listener;
		if (listener) {
			if (!this.#onNotificationTapCallback) {
				this.#onNotificationTapCallback = new Callback();
				this.#onNotificationTapCallback._propName = '_onNotificationTap';
			}

			this.#onNotificationTapCallback._owner = new WeakRef(this);

			org.nativescript.firebase.messaging.FirebaseMessaging.setOnMessageTapListener(this.#onNotificationTapCallback);
		}
	}

	onToken(listener: (token: string) => any) {
		this.#onToken = listener;

		if (listener) {
			if (!this.#onTokenCallback) {
				this.#onTokenCallback = new Callback();
				this.#onTokenCallback._propName = '_onToken';
			}

			this.#onTokenCallback._owner = new WeakRef(this);

			org.nativescript.firebase.messaging.FirebaseMessaging.setOnTokenListener(this.#onTokenCallback);
		}
	}
	registerDeviceForRemoteMessages(): Promise<void> {
		return Promise.resolve();
	}
	requestPermission(permissions?: any): Promise<AuthorizationStatus> {
		return this.hasPermission();
	}
	subscribeToTopic(topic: string): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.messaging.FirebaseMessaging.subscribeToTopic(
				topic,
				this.#native,
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
				this.#native,
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
				this.#native,
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
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(FIRApp.defaultApp());
		}
		return this.#app;
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}
}

/*

curl -X POST --header "Authorization: key=AAAARAUJpsI:APA91bE1-kuJmZ5mfuYcX_1rdppafm5FhLaS4kzja4OBP8GN1Rl8VQ6wco12XUzyvXYv_7ggPfiaKMi8ntFfu1StqbxxdTSi_eOyvYhYLt6VfoJzvBqPrgDNGzu-34UQqWCWh5JrHyUz" --Header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send -d "{\"notification\":{\"title\": \"My title\", \"text\": \"My text\", \"badge\": \"1\", \"sound\": \"default\"}, \"data\":{\"foo\":\"bar\"}, \"priority\": \"High\", \"to\": \"cO6BvEjNRFWv4kAF_0THqB:APA91bFk0wojdAEOfQCm9zvLj36UwNmWIKzo0QsF92TRFJaqq8ZFPFI1CiCp-S1ZW6Jx6QPOjGiiGo61enSj6II0ja_w5-dp1Mie3to18kmI8kwx8uamezG0eHgi9_T3L8J-1tMv7JNL\"}"

*/