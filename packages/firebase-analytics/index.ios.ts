import { EventParameter, IAnalytics } from './common';
import { Firebase } from '@nativescript/firebase-core';
import { ConsentStatus, ConsentType } from '.';
export * from './common';

Firebase.analytics = () => {
	return new Analytics();
};

function serialize(data) {
	switch (data.type) {
		case 'array':
			const array = NSMutableArray.new();
			data.value.forEach((item) => {
				if (typeof item === 'object') {
					if (Array.isArray(item)) {
						array.addObject(item.map((value) => serialize(value)));
					} else {
						array.addObject(Object.keys(item).map((key) => serialize(item[key])));
					}
				} else {
					array.addObject(serialize(item));
				}
			});
			break;
		case 'boolean':
			return NSNumber.alloc().initWithBool(data.value);
		case 'double':
			return NSNumber.alloc().initWithDouble(data.value);
		case 'float':
			return NSNumber.alloc().initWithFloat(data.value);
		case 'int':
			return NSNumber.alloc().initWithInt(data.value);
		case 'long':
			return NSNumber.alloc().initWithLong(data.value);
		case 'number':
			return Number(data.value);
		default:
			return String(data.value);
	}
}

export class Analytics implements IAnalytics {
	constructor() {}
	handleOpenURL(url: string): void {
		try {
			FIRAnalytics.handleOpenURL(NSURL.URLWithString(url));
		} catch (e) {}
	}

	handleUserActivity(userActivity: any): void {
		FIRAnalytics.handleUserActivity(userActivity);
	}

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
	logEvent(name: string, parameters: EventParameter): void {
		const event = NSMutableDictionary.new();
		if (parameters) {
			Object.keys(parameters).forEach((key) => {
				const item = parameters[key];
				event.setObjectForKey(serialize(item), key);
			});
		}
		FIRAnalytics.logEventWithNameParameters(name, event as any);
	}
	resetAnalyticsData(): void {
		FIRAnalytics.resetAnalyticsData();
	}

	setDefaultEventParameters(parameters: EventParameter): void {
		const event = NSMutableDictionary.new();
		if (parameters) {
			Object.keys(parameters).forEach((key) => {
				const item = parameters[key];
				event.setObjectForKey(serialize(item), key);
			});
		}
		FIRAnalytics.setDefaultEventParameters(event as any);
	}

	setConsent(consentSettings: Map<ConsentType, ConsentStatus>): void {
		const dictionary = {};
		consentSettings.forEach((value, key) => {
			let nativeKey;
			let nativeValue;
			switch (key) {
				case ConsentType.Ad_Storage:
					nativeKey = FIRConsentTypeAdStorage;
					break;
				case ConsentType.Analytics_Storage:
					nativeKey = FIRConsentTypeAnalyticsStorage;
					break;
			}

			switch (value) {
				case ConsentStatus.Denied:
					nativeValue = FIRConsentStatusDenied;
					break;
				case ConsentStatus.Granted:
					nativeValue = FIRConsentStatusGranted;
					break;
			}
			if (nativeKey && nativeValue) {
				dictionary[nativeKey] = nativeValue;
			}
		});
		FIRAnalytics.setConsent(dictionary as any);
	}
}
