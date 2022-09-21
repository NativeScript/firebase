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
	_native: FIRInstallations;
	_app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this._native = FIRInstallations.installationsWithApp(app.native);
		} else {
			if (defaultInstallations) {
				return defaultInstallations;
			}
			defaultInstallations = this;
			this._native = FIRInstallations.installations();
		}
	}
	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.deleteWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}
	getId(): Promise<string> {
		return new Promise((resolve, reject) => {
			this.native.installationIDWithCompletion((id, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(id);
				}
			});
		});
	}
	getToken(forceRefresh: boolean = false): Promise<string> {
		return new Promise((resolve, reject) => {
			this.native.authTokenForcingRefreshCompletion(forceRefresh, (result, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(result.authToken);
				}
			});
		});
	}

	get native() {
		return this._native;
	}
	get ios() {
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
