import { Utils } from '@nativescript/core';
import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { ConsentStatus, ConsentType, EventParameter, IAnalytics } from './common';

export * from './common';
let defaultAnalytics: Analytics;
const fb = firebase();
Object.defineProperty(fb, 'analytics', {
	value: () => {
		if (!defaultAnalytics) {
			defaultAnalytics = new Analytics();
		}
		return defaultAnalytics;
	},
	writable: false,
});

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function serialize(data) {
	switch (typeof data) {
		case 'string':
		case 'boolean':
		case 'number': {
			return data;
		}

		case 'object': {
			if (data === null) {
				return null;
			}

			if (Array.isArray(data)) {
				const store = new java.util.ArrayList();
				data.forEach((item) => {
					const value = serialize(item);
					switch (typeof value) {
						case 'object':
							if (value instanceof android.os.Bundle) {
								store.add(value);
							}
							if (value instanceof java.util.ArrayList) {
								store.add(value);
							}

							break;
					}
				});
				return store;
			}

			const store = new android.os.Bundle();
			Object.keys(data).forEach((key) => {
				const value = serialize(data[key]);
				switch (typeof value) {
					case 'boolean':
						store.putBoolean(key, value);
						break;
					case 'number':
						if (numberHasDecimals(value)) {
							store.putDouble(key, value);
						} else {
							store.putLong(key, value);
						}
						break;
					case 'string':
						store.putString(key, value);
						break;
					case 'object':
						if (value instanceof android.os.Bundle) {
							store.putBundle(key, value);
						} else if (value instanceof java.util.ArrayList) {
							store.putParcelableArrayList(key, value);
						} else {
							store.putString(key, null);
						}
						break;
				}
			});
			return store;
		}

		default:
			return null;
	}
}

export class Analytics implements IAnalytics {
	_native: com.google.firebase.analytics.FirebaseAnalytics;
	_app: FirebaseApp;

	constructor() {
		if (defaultAnalytics) {
			return defaultAnalytics;
		}
		defaultAnalytics = this;
		this._native = com.google.firebase.analytics.FirebaseAnalytics.getInstance(Utils.android.getApplicationContext());
	}

	handleOpenURL(url: string): void {}

	handleUserActivity(userActivity: any): void {}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
		}
		return this._app;
	}

	get appInstanceId(): string {
		return this._native.getAppInstanceId();
	}

	setSessionTimeoutInterval(sessionTimeoutInterval: number): void {
		this._native.setSessionTimeoutDuration(sessionTimeoutInterval);
	}

	setUserProperty(key: string, value: string): void {
		this._native.setUserProperty(key, value);
	}

	setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void {
		this._native.setAnalyticsCollectionEnabled(analyticsCollectionEnabled);
	}

	setUserId(userId: string): void {
		this._native.setUserId(userId);
	}

	logEvent(name: string, parameters: EventParameter): void {
		this._native.logEvent(name, serialize(parameters) as android.os.Bundle);
	}

	resetAnalyticsData(): void {
		this._native.resetAnalyticsData();
	}

	setDefaultEventParameters(parameters: EventParameter): void {
		this._native.setDefaultEventParameters(serialize(parameters) as android.os.Bundle);
	}

	setConsent(consentSettings: Map<ConsentType, ConsentStatus>): void {
		const nativeMap = new java.util.HashMap();

		consentSettings.forEach((value, key) => {
			let nativeKey;
			let nativeValue;
			switch (key) {
				case ConsentType.Ad_Storage:
					nativeKey = com.google.firebase.analytics.FirebaseAnalytics.ConsentType.AD_STORAGE;
					break;
				case ConsentType.Analytics_Storage:
					nativeKey = com.google.firebase.analytics.FirebaseAnalytics.ConsentType.ANALYTICS_STORAGE;
					break;
			}

			switch (value) {
				case ConsentStatus.Denied:
					nativeValue = com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus.DENIED;
					break;
				case ConsentStatus.Granted:
					nativeValue = com.google.firebase.analytics.FirebaseAnalytics.ConsentStatus.GRANTED;
					break;
			}
			if (nativeKey && nativeValue) {
				nativeMap.put(nativeKey, nativeValue);
			}
		});
		this._native.setConsent(nativeMap);
	}
}
