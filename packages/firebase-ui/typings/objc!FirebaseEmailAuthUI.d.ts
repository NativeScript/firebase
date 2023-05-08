declare class FUIConfirmEmailViewController extends FUIAuthBaseViewController {
	static alloc(): FUIConfirmEmailViewController; // inherited from NSObject

	static new(): FUIConfirmEmailViewController; // inherited from NSObject

	didChangeEmail(emailText: string): void;

	onNext(emailText: string): void;
}

declare class FUIEmailAuth extends NSObject implements FUIAuthProvider {
	static alloc(): FUIEmailAuth; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): FUIEmailAuth; // inherited from NSObject

	readonly actionCodeSettings: FIRActionCodeSettings;

	readonly allowNewEmailAccounts: boolean;

	emailLink: string;

	readonly forceSameDevice: boolean;

	readonly requireDisplayName: boolean;

	readonly signInMethod: string;

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

	constructor(o: { authAuthUI: FUIAuth; signInMethod: string; forceSameDevice: boolean; allowNewEmailAccounts: boolean; actionCodeSetting: FIRActionCodeSettings });

	constructor(o: { authAuthUI: FUIAuth; signInMethod: string; forceSameDevice: boolean; allowNewEmailAccounts: boolean; requireDisplayName: boolean; actionCodeSetting: FIRActionCodeSettings });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	email(): string;

	handleOpenURLSourceApplication(URL: NSURL, sourceApplication: string): boolean;

	initAuthAuthUISignInMethodForceSameDeviceAllowNewEmailAccountsActionCodeSetting(authUI: FUIAuth, signInMethod: string, forceSameDevice: boolean, allowNewEmailAccounts: boolean, actionCodeSettings: FIRActionCodeSettings): this;

	initAuthAuthUISignInMethodForceSameDeviceAllowNewEmailAccountsRequireDisplayNameActionCodeSetting(authUI: FUIAuth, signInMethod: string, forceSameDevice: boolean, allowNewEmailAccounts: boolean, requireDisplayName: boolean, actionCodeSettings: FIRActionCodeSettings): this;

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

	signInWithPresentingViewController(presentingViewController: UIViewController): void;

	signInWithPresentingViewControllerEmail(presentingViewController: UIViewController, email: string): void;

	signOut(): void;
}

declare class FUIEmailEntryViewController extends FUIAuthBaseViewController {
	static alloc(): FUIEmailEntryViewController; // inherited from NSObject

	static new(): FUIEmailEntryViewController; // inherited from NSObject

	didChangeEmail(emailText: string): void;

	onNext(emailText: string): void;
}

declare class FUIPasswordRecoveryViewController extends FUIAuthBaseViewController {
	static alloc(): FUIPasswordRecoveryViewController; // inherited from NSObject

	static new(): FUIPasswordRecoveryViewController; // inherited from NSObject

	constructor(o: { authUI: FUIAuth; email: string });

	constructor(o: { nibName: string; bundle: NSBundle; authUI: FUIAuth; email: string });

	didChangeEmail(email: string): void;

	initWithAuthUIEmail(authUI: FUIAuth, email: string): this;

	initWithNibNameBundleAuthUIEmail(nibNameOrNil: string, nibBundleOrNil: NSBundle, authUI: FUIAuth, email: string): this;

	recoverEmail(email: string): void;
}

declare class FUIPasswordSignInViewController extends FUIAuthBaseViewController {
	static alloc(): FUIPasswordSignInViewController; // inherited from NSObject

	static new(): FUIPasswordSignInViewController; // inherited from NSObject

	constructor(o: { authUI: FUIAuth; email: string });

	constructor(o: { nibName: string; bundle: NSBundle; authUI: FUIAuth; email: string });

	didChangeEmailAndPassword(email: string, password: string): void;

	forgotPasswordForEmail(email: string): void;

	initWithAuthUIEmail(authUI: FUIAuth, email: string): this;

	initWithNibNameBundleAuthUIEmail(nibNameOrNil: string, nibBundleOrNil: NSBundle, authUI: FUIAuth, email: string): this;

	signInWithDefaultValueAndPassword(email: string, password: string): void;
}

declare class FUIPasswordSignUpViewController extends FUIAuthBaseViewController {
	static alloc(): FUIPasswordSignUpViewController; // inherited from NSObject

	static new(): FUIPasswordSignUpViewController; // inherited from NSObject

	footerView: FUIPrivacyAndTermsOfServiceView;

	constructor(o: { authUI: FUIAuth; email: string; requireDisplayName: boolean });

	constructor(o: { nibName: string; bundle: NSBundle; authUI: FUIAuth; email: string; requireDisplayName: boolean });

	didChangeEmailOrPasswordOrUserName(email: string, password: string, username: string): void;

	initWithAuthUIEmailRequireDisplayName(authUI: FUIAuth, email: string, requireDisplayName: boolean): this;

	initWithNibNameBundleAuthUIEmailRequireDisplayName(nibNameOrNil: string, nibBundleOrNil: NSBundle, authUI: FUIAuth, email: string, requireDisplayName: boolean): this;

	signUpWithEmailAndPasswordAndUsername(email: string, password: string, username: string): void;
}

declare class FUIPasswordVerificationViewController extends FUIAuthBaseViewController {
	static alloc(): FUIPasswordVerificationViewController; // inherited from NSObject

	static new(): FUIPasswordVerificationViewController; // inherited from NSObject

	constructor(o: { authUI: FUIAuth; email: string; newCredential: FIRAuthCredential });

	constructor(o: { nibName: string; bundle: NSBundle; authUI: FUIAuth; email: string; newCredential: FIRAuthCredential });

	didChangePassword(password: string): void;

	forgotPassword(): void;

	initWithAuthUIEmailNewCredential(authUI: FUIAuth, email: string, newCredential: FIRAuthCredential): this;

	initWithNibNameBundleAuthUIEmailNewCredential(nibNameOrNil: string, nibBundleOrNil: NSBundle, authUI: FUIAuth, email: string, newCredential: FIRAuthCredential): this;

	verifyPassword(password: string): void;
}

declare var FirebaseEmailAuthUIVersionNumber: number;

declare var FirebaseEmailAuthUIVersionNumberVar: number;

declare var FirebaseEmailAuthUIVersionString: interop.Reference<number>;

declare var FirebaseEmailAuthUIVersionStringVar: interop.Reference<number>;
