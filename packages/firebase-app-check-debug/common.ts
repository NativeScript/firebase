import { FirebaseApp } from '@nativescript-asharghi/firebase-core';

export interface IAppCheck {
	app: FirebaseApp;
	activate(isTokenAutoRefreshEnabled: boolean);
	setTokenAutoRefreshEnabled(enabled: boolean);
	getToken(forceRefresh: boolean): Promise<IAppCheckToken>;
}

export interface IAppCheckToken {
	readonly token: string;
	readonly expireTimeMillis: number;
}
