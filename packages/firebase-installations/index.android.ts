import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { IInstallations } from './common';

let defaultInstallations: Installations;

const fb = firebase();
Object.defineProperty(fb, 'installations', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultInstallations) {
				defaultInstallations = new Installations();
			}
			return defaultInstallations;
		}
		return new Installations(app);
	},
	writable: false,
});
export class Installations implements IInstallations {
	_native: com.google.firebase.installations.FirebaseInstallations;
	_app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this._native = com.google.firebase.installations.FirebaseInstallations.getInstance(app.native);
		} else {
			if (defaultInstallations) {
				return defaultInstallations;
			}
			defaultInstallations = this;
			this._native = com.google.firebase.installations.FirebaseInstallations.getInstance();
		}
	}
	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.installations.FirebaseInstallations.delete(
				this.native,
				new org.nativescript.firebase.installations.FirebaseInstallations.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}
	getId(): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.installations.FirebaseInstallations.id(
				this.native,
				new org.nativescript.firebase.installations.FirebaseInstallations.Callback<string>({
					onSuccess(param0) {
						resolve(param0);
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}
	getToken(forceRefresh = false): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.installations.FirebaseInstallations.getToken(
				this.native,
				forceRefresh,
				new org.nativescript.firebase.installations.FirebaseInstallations.Callback<com.google.firebase.installations.InstallationTokenResult>({
					onSuccess(param0) {
						resolve(param0.getToken());
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	get native() {
		return this._native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.app);
		}
		return this._app;
	}
}
