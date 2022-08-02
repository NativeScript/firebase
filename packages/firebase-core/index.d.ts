export interface IFirebaseOptions {
	apiKey?: string;

	gcmSenderId?: string;

	androidClientId?: string;

	appGroupId?: string;

	bundleId?: string;

	clientId?: string;

	databaseURL?: string;

	deepLinkURLScheme?: string;

	googleAppId?: string;

	projectId?: string;

	storageBucket?: string;

	trackingId?: string;
}

export interface FirebaseConfig {
	automaticDataCollectionEnabled?: boolean;
	automaticResourceManagement?: boolean;
	name?: string;
}

declare function serialize(data: any, wrapPrimitives?: boolean): any;

declare function deserialize(data: any): any;

declare class FirebaseOptions implements IFirebaseOptions {
	readonly ios: any;
	readonly android: any;
	readonly native: any;

	apiKey?: string;

	gcmSenderId?: string;

	androidClientId?: string;

	appGroupId?: string;

	bundleId?: string;

	clientId?: string;

	databaseURL?: string;

	deepLinkURLScheme?: string;

	googleAppId?: string;

	projectId?: string;

	storageBucket?: string;

	trackingId?: string;
}

declare class FirebaseApp {
	readonly native;
	readonly ios;
	readonly name;
	readonly options: Readonly<FirebaseOptions>;

	delete(): Promise<void>;

	apps(): FirebaseApp[];
}

export interface Firebase {
	app(name?: string): FirebaseApp;

	initializeApp(options?: FirebaseOptions, configOrName?: FirebaseConfig | string): Promise<FirebaseApp>;

	initializeAppWithPath(path: string, options?: FirebaseOptions, config?: FirebaseConfig): Promise<FirebaseApp>;
}

export function firebase(): Firebase;

declare class FirebaseError extends Error {
	static fromNative(native: any, message?: string);
	readonly native;
}
