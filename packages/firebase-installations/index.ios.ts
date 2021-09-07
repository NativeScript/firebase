import { Firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
import { IInstallations } from './common';

declare const FIRApp;

Firebase.inAppMessaging = (app?: FirebaseApp) => {
	return new Installations(app);
};

export class Installations implements IInstallations {
	#native: FIRInstallations;
	#app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = FIRInstallations.installationsWithApp(app.native);
		} else {
			this.#native = FIRInstallations.installationsWithApp(FIRApp.defaultApp());
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
		return this.#native;
	}
	get ios() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.app);
		}
		return this.#app;
	}
}
