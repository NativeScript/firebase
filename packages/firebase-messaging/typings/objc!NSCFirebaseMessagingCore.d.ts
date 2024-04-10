declare class NSCFirebaseMessagingCore extends NSObject {
	static APNSTokenToString(tokenData: NSData): string;

	static alloc(): NSCFirebaseMessagingCore; // inherited from NSObject

	static new(): NSCFirebaseMessagingCore; // inherited from NSObject

	static onMessageCallback: (p1: NSDictionary<any, any>, p2: () => void) => void;

	static onNotificationTapCallback: (p1: NSDictionary<any, any>, p2: () => void) => void;

	static onTokenCallback: (p1: string) => void;

	static registerDeviceForRemoteMessagesCallback: (p1: boolean, p2: NSError) => void;

	static showNotificationsWhenInForeground: boolean;
}
