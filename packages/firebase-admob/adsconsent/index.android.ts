import { Application, Utils } from '@nativescript/core';
import { FirebaseError } from '@nativescript/firebase-core';
import { AdsConsentBase, AdsConsentDebugGeography, AdsConsentStatus } from './common';

export { AdsConsentStatus, AdsConsentDebugGeography };

export class AdsConsent extends AdsConsentBase {
	static #geography: AdsConsentDebugGeography;
	static #deviceIds: string[];
	static #tagForUnderAgeOfConsent: boolean;
	static #consentForm: com.google.android.ump.ConsentForm;
	static #consentInfo: com.google.android.ump.ConsentInformation;
	static reset() {
		org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.reset(Utils.android.getApplicationContext());
	}
	static addTestDevices(deviceIds: string[]) {
		this.#deviceIds = deviceIds;
	}
	static getStatus(): AdsConsentStatus {
		return org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.getStatus(Utils.android.getApplicationContext()) as any;
	}
	static requestInfoUpdate(): Promise<void> {
		return new Promise((resolve, reject) => {
			const info = {};
			if (this.#geography) {
				info['geography'] = this.#geography;
			}

			if (this.#deviceIds) {
				info['deviceIds'] = this.#deviceIds;
			}

			if (typeof this.#tagForUnderAgeOfConsent === 'boolean') {
				info['tagForUnderAgeOfConsent'] = this.#tagForUnderAgeOfConsent;
			}

			org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.requestInfoUpdate(
				Application.android.foregroundActivity || Application.android.startActivity,
				JSON.stringify(info),
				new org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>({
					onSuccess(value) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}
	static setDebugGeography(geography: AdsConsentDebugGeography) {
		this.#geography = geography;
	}
	static setTagForUnderAgeOfConsent(tag: boolean) {
		this.#tagForUnderAgeOfConsent = tag;
	}

	static isConsentFormAvailable() {
		if (!this.#consentInfo) {
			this.#consentInfo = com.google.android.ump.UserMessagingPlatform.getConsentInformation(Utils.android.getApplicationContext());
		}
		return this.#consentInfo.isConsentFormAvailable();
	}

	static showForm(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.show(
				Application.android.foregroundActivity || Application.android.startActivity,
				this.#consentForm,
				new org.nativescript.firebase.admob.FirebaseAdmob.Callback<java.lang.Void>({
					onSuccess(val) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	static loadForm() {
		return new Promise<void>((resolve, reject) => {
			org.nativescript.firebase.admob.FirebaseAdmob.AdConsent.load(
				Utils.android.getApplicationContext(),
				new org.nativescript.firebase.admob.FirebaseAdmob.Callback<com.google.android.ump.ConsentForm>({
					onSuccess(form) {
						AdsConsent.#consentForm = form;
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}
}
