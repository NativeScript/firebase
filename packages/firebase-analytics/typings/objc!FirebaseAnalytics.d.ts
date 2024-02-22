declare class FIRAnalytics extends NSObject {
	static alloc(): FIRAnalytics; // inherited from NSObject

	static appInstanceID(): string;

	static handleEventsForBackgroundURLSessionCompletionHandler(identifier: string, completionHandler: () => void): void;

	static handleOpenURL(url: NSURL): void;

	static handleUserActivity(userActivity: any): void;

	static initiateOnDeviceConversionMeasurementWithEmailAddress(emailAddress: string): void;

	static initiateOnDeviceConversionMeasurementWithPhoneNumber(phoneNumber: string): void;

	static logEventWithNameParameters(name: string, parameters: NSDictionary<string, any>): void;

	static new(): FIRAnalytics; // inherited from NSObject

	static resetAnalyticsData(): void;

	static sessionIDWithCompletion(completion: (p1: number, p2: NSError) => void): void;

	static setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void;

	static setConsent(consentSettings: NSDictionary<string, string>): void;

	static setDefaultEventParameters(parameters: NSDictionary<string, any>): void;

	static setSessionTimeoutInterval(sessionTimeoutInterval: number): void;

	static setUserID(userID: string): void;

	static setUserPropertyStringForName(value: string, name: string): void;
}

declare var FIRConsentStatusDenied: string;

declare var FIRConsentStatusGranted: string;

declare var FIRConsentTypeAdPersonalization: string;

declare var FIRConsentTypeAdStorage: string;

declare var FIRConsentTypeAdUserData: string;

declare var FIRConsentTypeAnalyticsStorage: string;

declare var FirebaseAnalyticsVersionNumber: number;

declare var FirebaseAnalyticsVersionString: interop.Reference<number>;
