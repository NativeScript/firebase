declare class TNSFirebaseMessaging extends NSObject {
	static APNSTokenToString(tokenData: NSData): string;

	static alloc(): TNSFirebaseMessaging; // inherited from NSObject

	static new(): TNSFirebaseMessaging; // inherited from NSObject

	static onMessageCallback: (p1: NSDictionary<any, any>) => void;

	static onNotificationTapCallback: (p1: NSDictionary<any, any>) => void;

	static onTokenCallback: (p1: string) => void;

	static registerDeviceForRemoteMessagesCallback: (p1: boolean, p2: NSError) => void;

	static showNotificationsWhenInForeground: boolean;
}

declare class TNSFirebaseMessagingLoader extends NSObject {
	static alloc(): TNSFirebaseMessagingLoader; // inherited from NSObject

	static new(): TNSFirebaseMessagingLoader; // inherited from NSObject
}
