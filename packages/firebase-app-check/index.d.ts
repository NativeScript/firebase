import { FirebaseApp } from '@nativescript/firebase-core';

declare interface AppCheck {
	readonly ios: any;
	readonly android: any;
	readonly native: any;
	readonly app: FirebaseApp;

	constructor(app?: FirebaseApp);

	activate(isTokenAutoRefreshEnabled: boolean);

	setTokenAutoRefreshEnabled(enabled: boolean);

	getToken(forceRefresh: boolean): Promise<AppCheckToken>;
}

declare class AppCheckToken {
	readonly ios: any;
	readonly android: any;
	readonly native: any;
	readonly token: string;
	readonly expireTimeMillis: number;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseAppCheck {}
}

export interface FirebaseAppCheck {
	static appCheck(app?: FirebaseApp): AppCheck;
}
