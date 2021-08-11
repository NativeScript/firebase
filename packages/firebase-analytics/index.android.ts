import { IAnalytics } from './common';
export class Analytics implements IAnalytics {
	constructor() {}
	setUserProperty(value: string, name: string): void {
		throw new Error('Method not implemented.');
	}
	setSessionTimeoutInterval(sessionTimeoutInterval: number): void {
		throw new Error('Method not implemented.');
	}
	setDefaultEventParameters(parameters: any): void {
		throw new Error('Method not implemented.');
	}
	setConsent(consentSettings: any): void {
		throw new Error('Method not implemented.');
	}
	handleOpenURL(url: string): void {
		throw new Error('Method not implemented.');
	}
	handleUserActivity(userActivity: any): void {
		throw new Error('Method not implemented.');
	}
	get appInstanceId(): string {
		return '';
	}
	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void {
		throw new Error('Method not implemented.');
	}
	logEvent(name: string): void {
		throw new Error('Method not implemented.');
	}
	setUserId(userId: string): void {
		throw new Error('Method not implemented.');
	}
	resetAnalyticsData(): void {}
}
