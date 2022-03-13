
declare class FIRAppAttestProvider extends NSObject implements FIRAppCheckProvider {

	static alloc(): FIRAppAttestProvider; // inherited from NSObject

	static new(): FIRAppAttestProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { app: FIRApp; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;

	initWithApp(app: FIRApp): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FIRAppCheck extends NSObject {

	static alloc(): FIRAppCheck; // inherited from NSObject

	static appCheck(): FIRAppCheck;

	static appCheckWithApp(firebaseApp: FIRApp): FIRAppCheck;

	static new(): FIRAppCheck; // inherited from NSObject

	static setAppCheckProviderFactory(factory: FIRAppCheckProviderFactory): void;

	isTokenAutoRefreshEnabled: boolean;

	tokenForcingRefreshCompletion(forcingRefresh: boolean, handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;
}

declare var FIRAppCheckAppCheckTokenDidChangeNotification: string;

declare class FIRAppCheckDebugProvider extends NSObject implements FIRAppCheckProvider {

	static alloc(): FIRAppCheckDebugProvider; // inherited from NSObject

	static new(): FIRAppCheckDebugProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { app: FIRApp; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentDebugToken(): string;

	getTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;

	initWithApp(app: FIRApp): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	localDebugToken(): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FIRAppCheckDebugProviderFactory extends NSObject implements FIRAppCheckProviderFactory {

	static alloc(): FIRAppCheckDebugProviderFactory; // inherited from NSObject

	static new(): FIRAppCheckDebugProviderFactory; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createProviderWithApp(app: FIRApp): FIRAppCheckProvider;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum FIRAppCheckErrorCode {

	Unknown = 0,

	ServerUnreachable = 1,

	InvalidConfiguration = 2,

	Keychain = 3,

	Unsupported = 4
}

declare var FIRAppCheckErrorDomain: string;

interface FIRAppCheckProvider extends NSObjectProtocol {

	getTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;
}
declare var FIRAppCheckProvider: {

	prototype: FIRAppCheckProvider;
};

interface FIRAppCheckProviderFactory extends NSObjectProtocol {

	createProviderWithApp(app: FIRApp): FIRAppCheckProvider;
}
declare var FIRAppCheckProviderFactory: {

	prototype: FIRAppCheckProviderFactory;
};

declare class FIRAppCheckToken extends NSObject {

	static alloc(): FIRAppCheckToken; // inherited from NSObject

	static new(): FIRAppCheckToken; // inherited from NSObject

	readonly expirationDate: Date;

	readonly token: string;

	constructor(o: { token: string; expirationDate: Date; });

	initWithTokenExpirationDate(token: string, expirationDate: Date): this;
}

declare class FIRDeviceCheckProvider extends NSObject implements FIRAppCheckProvider {

	static alloc(): FIRDeviceCheckProvider; // inherited from NSObject

	static new(): FIRDeviceCheckProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { app: FIRApp; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getTokenWithCompletion(handler: (p1: FIRAppCheckToken, p2: NSError) => void): void;

	initWithApp(app: FIRApp): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FIRDeviceCheckProviderFactory extends NSObject implements FIRAppCheckProviderFactory {

	static alloc(): FIRDeviceCheckProviderFactory; // inherited from NSObject

	static new(): FIRDeviceCheckProviderFactory; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createProviderWithApp(app: FIRApp): FIRAppCheckProvider;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var FirebaseAppCheckVersionNumber: number;

declare var FirebaseAppCheckVersionString: interop.Reference<number>;

declare var kFIRAppCheckAppNameNotificationKey: string;

declare var kFIRAppCheckTokenNotificationKey: string;
