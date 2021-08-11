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
