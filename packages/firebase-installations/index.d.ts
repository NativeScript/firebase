import { IInstallations } from './common';
import { FirebaseApp } from '@nativescript-asharghi/firebase-core';

export declare class Installations implements IInstallations {
	readonly native;
	readonly android;
	readonly ios;
	readonly app: FirebaseApp;

	constructor(app?: FirebaseApp);

	delete(): Promise<void>;

	getId(): Promise<string>;

	getToken(forceRefresh: boolean = false): Promise<string>;
}

declare module '@nativescript-asharghi/firebase-core' {
	export interface Firebase extends FirebaseInstallations {}
}

export interface FirebaseInstallations {
	static installations(): Installations;
}
