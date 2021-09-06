import { FirebaseConfig, IFirebaseOptions } from './common';

declare function serialize(data: any): any;
declare function deserialize(data: any): any;

declare class FirebaseOptions implements IFirebaseOptions {
	readonly ios: any;
	readonly android: any;
	readonly native: any;
}

declare class FirebaseApp {
	readonly native;
	readonly ios;
	readonly name;
	readonly options: Readonly<FirebaseOptions>;

	delete(): Promise<void>;

	apps(): FirebaseApp[];
}

declare class Firebase {
	static app(name?: string): FirebaseApp;
	static initializeApp(options: FirebaseOptions, configOrName?: FirebaseConfig | string): Promise<FirebaseApp>;
	static analytics(): any;
	static auth(app?: FirebaseApp): any;
	static database(app?: FirebaseApp): any;
	static crashlytics(): any;
	static appCheck(): any;
	static inAppMessaging(): any;
	static remoteConfig(app?: FirebaseApp): any;
	static storage(app?: FirebaseApp): any;
}

declare class FirebaseError extends Error {
	static fromNative(native: any, message?: string);
	readonly native;
}
