import { EventParameter, IAnalytics } from './common';
import { Firebase, serialize } from '@nativescript/firebase-core';
import { ConsentStatus, ConsentType } from '.';
export * from './common';

Firebase.analytics = () => {
	return new Analytics();
};

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
		FIRAnalytics.logEventWithNameParameters(name, serialize(parameters));
	}
	resetAnalyticsData(): void {
		FIRAnalytics.resetAnalyticsData();
	}

	setDefaultEventParameters(parameters: EventParameter): void {
		FIRAnalytics.setDefaultEventParameters(serialize(parameters));
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
