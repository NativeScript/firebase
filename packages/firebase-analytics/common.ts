export interface IAnalytics {
	readonly appInstanceId: Promise<string>;
	logEvent(name: string, parameters: EventParameter): void;
	setUserId(userId: string): void;
	resetAnalyticsData(): void;
	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void;
	setUserProperty(value: string, name: string): void;
	setSessionTimeoutInterval(sessionTimeoutInterval: number): void;
	setDefaultEventParameters(parameters: EventParameter): void;
	setConsent(consentSettings: Map<ConsentType, ConsentStatus>): void;
	handleOpenURL(url: string): void;
	handleUserActivity(userActivity: any): void;
}

export interface EventParameter {
	[key: string]: any;
}

export enum ConsentType {
	Ad_Storage,
	Analytics_Storage,
	Ad_User_Data,
	Ad_Personalization,
}

export enum ConsentStatus {
	Denied,
	Granted,
}
