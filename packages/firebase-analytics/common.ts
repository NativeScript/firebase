export interface IAnalytics {
	readonly appInstanceId: string;
	logEvent(name: string, parameters: any): void;
	setUserId(userId: string): void;
	resetAnalyticsData(): void;
	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void;
	setUserProperty(value: string, name: string): void;
	setSessionTimeoutInterval(sessionTimeoutInterval: number): void;
	setDefaultEventParameters(parameters: any): void;
	setConsent(consentSettings: any): void;
	handleOpenURL(url: string): void;
	handleUserActivity(userActivity: any): void;
}
