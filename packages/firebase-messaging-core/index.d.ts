export * from './common';

import { AuthorizationStatus } from './common';

export interface AndroidPermissions {}

export interface IOSPermissions {
	alert?: undefined | false | true;
	announcement?: undefined | false | true;
	badge?: undefined | false | true;
	carPlay?: undefined | false | true;
	criticalAlert?: undefined | false | true;
	provisional?: undefined | false | true;
	sound?: undefined | false | true;
}
export interface Permissions {
	ios?: IOSPermissions;
	android?: AndroidPermissions;
}

export interface IMessagingCore {
	readonly isDeviceRegisteredForRemoteMessages: boolean;

	showNotificationsWhenInForeground: boolean;

	getCurrentToken(): Promise<string>;

	hasPermission(): Promise<AuthorizationStatus>;

	addOnMessage(listener: (message: any) => any);

	removeOnMessage(listener: (message: any) => any): boolean;

	addOnToken(listener: (token: string) => any);

	removeOnToken(listener: (token: string) => any): boolean;

	addOnNotificationTap(listener: (message: any) => any);

	removeOnNotificationTap(listener: (message: any) => any): boolean;

	registerDeviceForRemoteMessages(): Promise<void>;

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus>;

	unregisterDeviceForRemoteMessages(): Promise<void>;
}

export declare class MessagingCore implements IMessagingCore {
	static getInstance(): MessagingCore;

	static readonly inForeground: boolean;
	
	static readonly appDidLaunch: boolean;

	getCurrentToken(): Promise<string>;

	hasPermission(): Promise<AuthorizationStatus>;

	addOnMessage(listener: (message: any) => any);

	removeOnMessage(listener: (message: any) => any): boolean;

	addOnToken(listener: (token: string) => any);

	removeOnToken(listener: (token: string) => any): boolean;

	addOnNotificationTap(listener: (message: any) => any);

	removeOnNotificationTap(listener: (message: any) => any): boolean;

	registerDeviceForRemoteMessages(): Promise<void>;

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus>;

	unregisterDeviceForRemoteMessages(): Promise<void>;

	readonly isDeviceRegisteredForRemoteMessages: boolean;

	showNotificationsWhenInForeground: boolean;
}
