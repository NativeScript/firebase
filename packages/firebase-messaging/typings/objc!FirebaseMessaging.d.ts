declare class FIRMessaging extends NSObject {
	static alloc(): FIRMessaging; // inherited from NSObject

	static extensionHelper(): FIRMessagingExtensionHelper;

	static messaging(): FIRMessaging;

	static new(): FIRMessaging; // inherited from NSObject

	APNSToken: NSData;

	readonly FCMToken: string;

	autoInitEnabled: boolean;

	delegate: FIRMessagingDelegate;

	appDidReceiveMessage(message: NSDictionary<any, any>): FIRMessagingMessageInfo;

	deleteDataWithCompletion(completion: (p1: NSError) => void): void;

	deleteFCMTokenForSenderIDCompletion(senderID: string, completion: (p1: NSError) => void): void;

	deleteTokenWithCompletion(completion: (p1: NSError) => void): void;

	retrieveFCMTokenForSenderIDCompletion(senderID: string, completion: (p1: string, p2: NSError) => void): void;

	setAPNSTokenType(apnsToken: NSData, type: FIRMessagingAPNSTokenType): void;

	subscribeToTopic(topic: string): void;

	subscribeToTopicCompletion(topic: string, completion: (p1: NSError) => void): void;

	tokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	unsubscribeFromTopic(topic: string): void;

	unsubscribeFromTopicCompletion(topic: string, completion: (p1: NSError) => void): void;
}

declare const enum FIRMessagingAPNSTokenType {
	Unknown = 0,

	Sandbox = 1,

	Prod = 2,
}

interface FIRMessagingDelegate extends NSObjectProtocol {
	messagingDidReceiveRegistrationToken?(messaging: FIRMessaging, fcmToken: string): void;
}
declare var FIRMessagingDelegate: {
	prototype: FIRMessagingDelegate;
};

declare const enum FIRMessagingError {
	Unknown = 0,

	Authentication = 1,

	NoAccess = 2,

	Timeout = 3,

	Network = 4,

	OperationInProgress = 5,

	InvalidRequest = 7,

	InvalidTopicName = 8,
}

declare var FIRMessagingErrorDomain: string;

declare class FIRMessagingExtensionHelper extends NSObject {
	static alloc(): FIRMessagingExtensionHelper; // inherited from NSObject

	static new(): FIRMessagingExtensionHelper; // inherited from NSObject

	exportDeliveryMetricsToBigQueryWithMessageInfo(info: NSDictionary<any, any>): void;

	populateNotificationContentWithContentHandler(content: UNMutableNotificationContent, contentHandler: (p1: UNNotificationContent) => void): void;
}

declare class FIRMessagingMessageInfo extends NSObject {
	static alloc(): FIRMessagingMessageInfo; // inherited from NSObject

	static new(): FIRMessagingMessageInfo; // inherited from NSObject

	readonly status: FIRMessagingMessageStatus;
}

declare const enum FIRMessagingMessageStatus {
	Unknown = 0,

	New = 1,
}

declare var FIRMessagingRegistrationTokenRefreshedNotification: string;

declare var FirebaseMessagingVersionNumber: number;

declare var FirebaseMessagingVersionString: interop.Reference<number>;
