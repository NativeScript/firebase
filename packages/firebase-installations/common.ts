import { FirebaseApp } from '@nativescript-asharghi/firebase-core';
export interface IInstallations {
	app: FirebaseApp;
	delete(): Promise<void>;
	getId(): Promise<string>;
	getToken(forceRefresh?: boolean): Promise<string>;
}
