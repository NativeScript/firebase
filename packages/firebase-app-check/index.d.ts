import { FirebaseApp, FirebaseError } from '@nativescript/firebase-core';

declare class AppCheck {
	readonly ios: any;
	readonly android: any;
	readonly native: any;
	readonly app: FirebaseApp;

	constructor(app?: FirebaseApp);

	static setProviderFactory(custom?: AppCheckProviderFactory);

	activate(isTokenAutoRefreshEnabled: boolean);

	setTokenAutoRefreshEnabled(enabled: boolean);

	getToken(forceRefresh: boolean): Promise<AppCheckToken>;
}

declare abstract class AppCheckProviderFactory {
	abstract createProvider(app: FirebaseApp): AppCheckProvider;
	readonly native;
}

declare abstract class AppCheckProvider {
	abstract getToken(
		done: (
			token: {
				token: string;
				expirationDate: Date;
			},
			error: FirebaseError
		) => void
	);
	readonly native;
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
