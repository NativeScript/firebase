import { FirebaseConfig, IFirebaseOptions } from './common';

export declare class FirebaseOptions implements IFirebaseOptions {
	readonly ios: any;
	readonly android: any;
	readonly native: any;
}

export declare class FirebaseApp {
	readonly native;
	readonly ios;
	readonly name;
	readonly options: Readonly<FirebaseOptions>;

	delete(): Promise<void>;

	apps(): FirebaseApp[];
}

export declare class Firebase {
	static app(name?: string): FirebaseApp;
	static initializeApp(options: FirebaseOptions, configOrName?: FirebaseConfig | string): Promise<FirebaseApp>;
	static analytics(): any;
	static auth(): any;
}
