import {Utils} from '@nativescript/core';
import {firebase, FirebaseApp} from '@nativescript/firebase-core';
import {ConsentStatus, ConsentType, EventParameter, IAnalytics} from './common';

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

function serialize(data) {
  let store;

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
        store = new java.util.ArrayList();
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

      store = new android.os.Bundle();
      Object.keys(data).forEach((key) => {
        const value = serialize(data[key]);
        switch (typeof value) {
          case 'boolean':
            store.putBoolean(key, value);
            break;
          case 'number':
            store.putInt(key, value);
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
  #native: com.google.firebase.analytics.FirebaseAnalytics;
  #app: FirebaseApp;

  constructor() {
    if(defaultAnalytics){
      return defaultAnalytics;
    }
    defaultAnalytics = this;
    this.#native = com.google.firebase.analytics.FirebaseAnalytics.getInstance(Utils.android.getApplicationContext());
  }

  handleOpenURL(url: string): void {
  }

  handleUserActivity(userActivity: any): void {
  }


  get app(): FirebaseApp {
    if (!this.#app) {
      // @ts-ignore
      this.#app = FirebaseApp.fromNative(com.google.firebase.FirebaseApp.getInstance());
    }
    return this.#app;
  }

  get appInstanceId(): string {
    return this.#native.getAppInstanceId();
  }

  setSessionTimeoutInterval(sessionTimeoutInterval: number): void {
    this.#native.setSessionTimeoutDuration(sessionTimeoutInterval);
  }

  setUserProperty(key: string, value: string): void {
    this.#native.setUserProperty(key, value);
  }

  setAnalyticsCollectionEnabled(analyticsCollectionEnabled: boolean): void {
    this.#native.setAnalyticsCollectionEnabled(analyticsCollectionEnabled);
  }

  setUserId(userId: string): void {
    this.#native.setUserId(userId);
  }

  logEvent(name: string, parameters: EventParameter): void {
    this.#native.logEvent(name, serialize(parameters));
  }

  resetAnalyticsData(): void {
    this.#native.resetAnalyticsData();
  }

  setDefaultEventParameters(parameters: EventParameter): void {
    this.#native.setDefaultEventParameters(serialize(parameters));
  }

  setConsent(consentSettings: Map<ConsentType, ConsentStatus>): void {
    const nativeMap = new java.util.HashMap();
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
        nativeMap.put(nativeKey, nativeValue);
      }
    });
    this.#native.setConsent(nativeMap);
  }
}
