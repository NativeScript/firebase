import { FirebaseApp } from '@nativescript/firebase-core';
export interface IInstallations {
	app: FirebaseApp;
	delete(): Promise<void>;
	getId(): Promise<string>;
	getToken(forceRefresh?: boolean): Promise<string>;
}
