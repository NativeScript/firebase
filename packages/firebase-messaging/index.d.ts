import { FirebaseApp, Firebase } from '@nativescript/firebase-core';
import { IMessaging, Permissions, RemoteMessage, AuthorizationStatus } from './common';
export { AuthorizationStatus } from './common';
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

	isDeviceRegisteredForRemoteMessages(): boolean;

	isAutoInitEnabled: boolean;
	showNotificationsWhenInForeground: boolean;
	
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
