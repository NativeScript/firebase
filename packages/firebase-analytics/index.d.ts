import { IAnalytics, EventParameter } from './common';
export * from './common';

export declare class Analytics implements IAnalytics {
	readonly appInstanceId: string;
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

declare module '@nativescript/firebase-core' {
	interface Firebase {
		static analytics(): Analytics;
	}
}
