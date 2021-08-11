import { IAnalytics } from './common';

function serialize(data: any): any {
	switch (typeof data) {
		case 'string':
		case 'boolean':
		case 'number': {
			return data;
		}

		case 'object': {
			if (data instanceof Date) {
				return data.toJSON();
			}

			if (!data) {
				return NSNull.new();
			}

			if (Array.isArray(data)) {
				return NSArray.arrayWithArray((<any>data).map(serialize));
			}

			let node = {} as any;
			Object.keys(data).forEach(function (key) {
				let value = data[key];
				node[key] = serialize(value);
			});
			return NSDictionary.dictionaryWithDictionary(node);
		}

		default:
			return NSNull.new();
	}
}

export class Analytics implements IAnalytics {
	constructor() {}
	get appInstanceId(): string {
		return FIRAnalytics.appInstanceID();
	}
	setSessionTimeoutInterval(sessionTimeoutInterval: number): void {
		FIRAnalytics.setSessionTimeoutInterval(sessionTimeoutInterval);
	}
	setUserProperty(key: string, value: string): void {
		FIRAnalytics.setUserPropertyStringForName(value, key);
	}
	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void {
		FIRAnalytics.setAnalyticsCollectionEnabled(analyticsCollectionEnabled);
	}
	setUserId(userId: string): void {
		FIRAnalytics.setUserID(userId);
	}
	logEvent(name: string, parameters: any): void {
		FIRAnalytics.logEventWithNameParameters(name, serialize(parameters));
	}
	resetAnalyticsData(): void {
		FIRAnalytics.resetAnalyticsData();
	}

	setDefaultEventParameters(parameters: any): void {
		FIRAnalytics.setDefaultEventParameters(serialize(parameters));
	}

	setConsent(consentSettings: any): void {
		FIRAnalytics.setConsent(serialize(consentSettings));
	}

	handleOpenURL(url: string): void {
		FIRAnalytics.handleOpenURL(NSURL.URLWithString(url));
	}

	handleUserActivity(userActivity: any): void {
		FIRAnalytics.handleUserActivity(userActivity);
	}
}
