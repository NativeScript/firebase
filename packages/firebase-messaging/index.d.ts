import { FirebaseApp, Firebase } from '@nativescript/firebase-core';

export { Permissions, AndroidPermissions, IOSPermissions, AuthorizationStatus } from '@nativescript/firebase-messaging-core';

export const enum NotificationAndroidVisibility {
	VISIBILITY_PRIVATE,
	VISIBILITY_PUBLIC,
	VISIBILITY_SECRET,
}

export const enum NotificationAndroidPriority {
	PRIORITY_DEFAULT,
	PRIORITY_HIGH,
	PRIORITY_LOW,
	PRIORITY_MAX,
	PRIORITY_MIN,
}

export interface NotificationIOSCriticalSound {
	critical: undefined | false | true;
	name: string;
	volume: undefined | number;
}

export interface Notification {
	android?: undefined | { channelId: undefined | string; clickAction: undefined | string; color: undefined | string; count: undefined | number; imageUrl: undefined | string; link: undefined | string; priority: NotificationAndroidPriority; smallIcon: undefined | string; sound: undefined | string; ticker: undefined | string; visibility: NotificationAndroidVisibility };
	body?: undefined | string;
	bodyLocArgs?: string[];
	bodyLocKey?: undefined | string;
	ios?: undefined | { badge: undefined | string; sound: string | NotificationIOSCriticalSound; subtitle: undefined | string; subtitleLocArgs?: string[]; subtitleLocKey: undefined | string };
	title?: undefined | string;
	titleLocArgs?: string[];
	titleLocKey?: undefined | string;
}

export interface RemoteMessage {
	category?: undefined | string;
	collapseKey?: undefined | string;
	contentAvailable?: undefined | false | true;
	data?: undefined | { [key: string]: string };
	from?: undefined | string;
	messageId?: undefined | string;
	messageType?: undefined | string;
	mutableContent?: undefined | false | true;
	notification?: Notification;
	sentTime?: undefined | number;
	threadId?: undefined | string;
	to?: undefined | string;
	ttl?: undefined | number;
}

export interface IMessaging {
	app: FirebaseApp;

	autoInitEnabled: boolean;

	readonly isDeviceRegisteredForRemoteMessages: boolean;

	showNotificationsWhenInForeground: boolean;

	deleteToken(): Promise<void>;

	getToken(): Promise<string | null>;

	hasPermission(): Promise<AuthorizationStatus>;

	onMessage(listener: (message: RemoteMessage) => any);

	onNotificationTap(listener: (message: RemoteMessage) => any);

	onToken(listener: (token: string) => any);

	registerDeviceForRemoteMessages(): Promise<void>;

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus>;

	subscribeToTopic(topic: string): Promise<void>;

	unregisterDeviceForRemoteMessages(): Promise<void>;

	unsubscribeFromTopic(topic: string): Promise<void>;
}

export declare class Messaging implements IMessaging {
	getToken(): Promise<string>;

	getAPNSToken(): string | null;

	hasPermission(): Promise<AuthorizationStatus>;

	onMessage(listener: (message: RemoteMessage) => any);

	onNotificationTap(listener: (message: RemoteMessage) => any);

	onToken(listener: (token: string) => any);

	registerDeviceForRemoteMessages(): Promise<void>;

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus>;

	subscribeToTopic(topic: string): Promise<void>;

	unregisterDeviceForRemoteMessages(): Promise<void>;

	unsubscribeFromTopic(topic: string): Promise<void>;

	deleteToken(): Promise<void>;

	isAutoInitEnabled: boolean;
	showNotificationsWhenInForeground: boolean;

	readonly isDeviceRegisteredForRemoteMessages: boolean;

	readonly app: FirebaseApp;

	readonly native;
	readonly ios;
	readonly android;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseMessaging {}
}

export interface FirebaseMessaging {
	static messaging(): Messaging;
}
