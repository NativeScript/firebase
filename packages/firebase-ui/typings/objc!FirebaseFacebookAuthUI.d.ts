declare class FUIFacebookAuth extends NSObject implements FUIAuthProvider {
	static alloc(): FUIFacebookAuth; // inherited from NSObject

	static new(): FUIFacebookAuth; // inherited from NSObject

	readonly scopes: NSArray<string>;

	useLimitedLogin: boolean;

	readonly accessToken: string; // inherited from FUIAuthProvider

	buttonAlignment: FUIButtonAlignment; // inherited from FUIAuthProvider

	readonly buttonBackgroundColor: UIColor; // inherited from FUIAuthProvider

	readonly buttonTextColor: UIColor; // inherited from FUIAuthProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly icon: UIImage; // inherited from FUIAuthProvider

	readonly idToken: string; // inherited from FUIAuthProvider

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly providerID: string; // inherited from FUIAuthProvider

	readonly shortName: string; // inherited from FUIAuthProvider

	readonly signInLabel: string; // inherited from FUIAuthProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { authUI: FUIAuth });

	constructor(o: { authUI: FUIAuth; permissions: NSArray<any> | any[] });

	constructor(o: { permissions: NSArray<any> | any[] });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	email(): string;

	handleOpenURLSourceApplication(URL: NSURL, sourceApplication: string): boolean;

	initWithAuthUI(authUI: FUIAuth): this;

	initWithAuthUIPermissions(authUI: FUIAuth, permissions: NSArray<any> | any[]): this;

	initWithPermissions(permissions: NSArray<any> | any[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	signInWithDefaultValuePresentingViewControllerCompletion(defaultValue: string, presentingViewController: UIViewController, completion: (p1: FIRAuthCredential, p2: NSError, p3: (p1: FIRUser, p2: NSError) => void, p4: NSDictionary<string, any>) => void): void;

	signInWithEmailPresentingViewControllerCompletion(email: string, presentingViewController: UIViewController, completion: (p1: FIRAuthCredential, p2: NSError, p3: (p1: FIRUser, p2: NSError) => void, p4: NSDictionary<string, any>) => void): void;

	signOut(): void;
}

declare var FirebaseFacebookAuthUIVersionNumber: number;

declare var FirebaseFacebookAuthUIVersionNumberVar: number;

declare var FirebaseFacebookAuthUIVersionString: interop.Reference<number>;

declare var FirebaseFacebookAuthUIVersionStringVar: interop.Reference<number>;
