declare class FUIOAuth extends NSObject implements FUIAuthProvider {
	static alloc(): FUIOAuth; // inherited from NSObject

	/**
	 * @since 13.0
	 */
	static appleAuthProvider(): FUIOAuth;

	/**
	 * @since 13.0
	 */
	static appleAuthProviderWithAuthUI(authUI: FUIAuth): FUIOAuth;

	/**
	 * @since 13.0
	 */
	static appleAuthProviderWithAuthUIUserInterfaceStyle(authUI: FUIAuth, userInterfaceStyle: UIUserInterfaceStyle): FUIOAuth;

	/**
	 * @since 13.0
	 */
	static appleAuthProviderWithUserInterfaceStyle(userInterfaceStyle: UIUserInterfaceStyle): FUIOAuth;

	static githubAuthProvider(): FUIOAuth;

	static githubAuthProviderWithAuthUI(authUI: FUIAuth): FUIOAuth;

	static microsoftAuthProvider(): FUIOAuth;

	static microsoftAuthProviderWithAuthUI(authUI: FUIAuth): FUIOAuth;

	static new(): FUIOAuth; // inherited from NSObject

	static twitterAuthProvider(): FUIOAuth;

	static twitterAuthProviderWithAuthUI(authUI: FUIAuth): FUIOAuth;

	static yahooAuthProvider(): FUIOAuth;

	static yahooAuthProviderWithAuthUI(authUI: FUIAuth): FUIOAuth;

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

	constructor(o: { authUI: FUIAuth; providerID: string; buttonLabelText: string; shortName: string; buttonColor: UIColor; iconImage: UIImage; scopes: NSArray<string> | string[]; customParameters: NSDictionary<string, string>; loginHintKey: string });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	email(): string;

	handleOpenURLSourceApplication(URL: NSURL, sourceApplication: string): boolean;

	initWithAuthUIProviderIDButtonLabelTextShortNameButtonColorIconImageScopesCustomParametersLoginHintKey(authUI: FUIAuth, providerID: string, buttonLabelText: string, shortName: string, buttonColor: UIColor, iconImage: UIImage, scopes: NSArray<string> | string[], customParameters: NSDictionary<string, string>, loginHintKey: string): this;

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

declare var FirebaseOAuthUIVersionNumber: number;

declare var FirebaseOAuthUIVersionNumberVar: number;

declare var FirebaseOAuthUIVersionString: interop.Reference<number>;

declare var FirebaseOAuthUIVersionStringVar: interop.Reference<number>;
