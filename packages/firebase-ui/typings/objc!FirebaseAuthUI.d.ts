declare const enum FUIAccountSettingsOperationType {
	Unsupported = 0,

	UpdateName = 1,

	UpdatePassword = 2,

	ForgotPassword = 3,

	UpdateEmail = 4,

	UnlinkAccount = 5,

	SignOut = 6,

	DeleteAccount = 7,
}

declare class FUIAccountSettingsViewController extends FUIAuthBaseViewController {
	static alloc(): FUIAccountSettingsViewController; // inherited from NSObject

	static new(): FUIAccountSettingsViewController; // inherited from NSObject

	deleteAccountActionDisabled: boolean;
}

declare class FUIAuth extends NSObject implements NSSecureCoding {
	static alloc(): FUIAuth; // inherited from NSObject

	static authUIWithAuth(auth: FIRAuth): FUIAuth;

	static defaultAuthUI(): FUIAuth;

	static new(): FUIAuth; // inherited from NSObject

	TOSURL: NSURL;

	readonly auth: FIRAuth;

	autoUpgradeAnonymousUsers: boolean;

	customStringsBundle: NSBundle;

	delegate: FUIAuthDelegate;

	emailAuthProvider: FUIEmailAuthProvider;

	emulatorEnabled: boolean;

	/**
	 * @since 13
	 */
	interactiveDismissEnabled: boolean;

	privacyPolicyURL: NSURL;

	providers: NSArray<FUIAuthProvider>;

	shouldHideCancelButton: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	authViewController(): UINavigationController;

	encodeWithCoder(coder: NSCoder): void;

	handleOpenURLSourceApplication(URL: NSURL, sourceApplication: string): boolean;

	initWithCoder(coder: NSCoder): this;

	invokeOperationCallbackError(operation: FUIAccountSettingsOperationType, error: NSError): void;

	invokeResultCallbackWithAuthDataResultURLError(authDataResult: FIRAuthDataResult, url: NSURL, error: NSError): void;

	providerWithID(providerID: string): FUIAuthProvider;

	signInWithProviderUIPresentingViewControllerDefaultValue(providerUI: FUIAuthProvider, presentingViewController: UIViewController, defaultValue: string): void;

	signOutWithError(): boolean;

	useEmulatorWithHostPort(host: string, port: number): void;
}

declare class FUIAuthBaseViewController extends UIViewController {
	static addActivityIndicator(view: UIView): UIActivityIndicatorView;

	static alloc(): FUIAuthBaseViewController; // inherited from NSObject

	static barItemWithTitleTargetAction(title: string, target: any, action: string): UIBarButtonItem;

	static isValidEmail(email: string): boolean;

	static new(): FUIAuthBaseViewController; // inherited from NSObject

	static providerLocalizedName(providerId: string): string;

	static pushViewControllerNavigationController(viewController: UIViewController, navigationController: UINavigationController): void;

	static showAlertWithMessage(message: string): void;

	static showAlertWithMessagePresentingViewController(message: string, presentingViewController: UIViewController): void;

	static showAlertWithTitleMessageActionTitleActionHandlerDismissTitleDismissHandlerPresentingViewController(title: string, message: string, actionTitle: string, actionHandler: () => void, dismissTitle: string, dismissHandler: () => void, presentingViewController: UIViewController): void;

	static showAlertWithTitleMessagePresentingViewController(title: string, message: string, presentingViewController: UIViewController): void;

	static showSignInAlertWithEmailProviderPresentingViewControllerSigninHandlerCancelHandler(email: string, provider: FUIAuthProvider, presentingViewController: UIViewController, signinHandler: () => void, cancelHandler: () => void): void;

	static showSignInAlertWithEmailProviderShortNameProviderSignInLabelPresentingViewControllerSigninHandlerCancelHandler(email: string, providerShortName: string, providerSignInLabel: string, presentingViewController: UIViewController, signinHandler: () => void, cancelHandler: () => void): void;

	readonly auth: FIRAuth;

	readonly authUI: FUIAuth;

	constructor(o: { authUI: FUIAuth });

	constructor(o: { nibName: string; bundle: NSBundle; authUI: FUIAuth });

	cancelAuthorization(): void;

	decrementActivity(): void;

	dismissNavigationControllerAnimatedCompletion(animated: boolean, completion: () => void): void;

	enableDynamicCellHeightForTableView(tableView: UITableView): void;

	incrementActivity(): void;

	initWithAuthUI(authUI: FUIAuth): this;

	initWithNibNameBundleAuthUI(nibNameOrNil: string, nibBundleOrNil: NSBundle, authUI: FUIAuth): this;

	onBack(): void;

	pushViewController(viewController: UIViewController): void;

	showAlertWithMessage(message: string): void;
}

declare var FUIAuthBundleName: string;

declare var FUIAuthCredentialKey: string;

interface FUIAuthDelegate extends NSObjectProtocol {
	authPickerViewControllerForAuthUI?(authUI: FUIAuth): FUIAuthPickerViewController;

	authUIDidFinishOperationError?(authUI: FUIAuth, operation: FUIAccountSettingsOperationType, error: NSError): void;

	authUIDidSignInWithError?(authUI: FUIAuth, authDataResult: FIRAuthDataResult, error: NSError): void;

	authUIDidSignInWithURLError?(authUI: FUIAuth, authDataResult: FIRAuthDataResult, url: NSURL, error: NSError): void;

	authUIDidSignInWithUserError?(authUI: FUIAuth, user: FIRUser, error: NSError): void;

	emailEntryViewControllerForAuthUI?(authUI: FUIAuth): FUIEmailEntryViewController;

	passwordRecoveryViewControllerForAuthUIEmail?(authUI: FUIAuth, email: string): FUIPasswordRecoveryViewController;

	passwordSignInViewControllerForAuthUIEmail?(authUI: FUIAuth, email: string): FUIPasswordSignInViewController;

	passwordSignUpViewControllerForAuthUIEmailRequireDisplayName?(authUI: FUIAuth, email: string, requireDisplayName: boolean): FUIPasswordSignUpViewController;

	passwordVerificationViewControllerForAuthUIEmailNewCredential?(authUI: FUIAuth, email: string, newCredential: FIRAuthCredential): FUIPasswordVerificationViewController;
}
declare var FUIAuthDelegate: {
	prototype: FUIAuthDelegate;
};

declare const enum FUIAuthErrorCode {
	UserCancelledSignIn = 1,

	ProviderError = 2,

	CantFindProvider = 3,

	MergeConflict = 4,
}

declare var FUIAuthErrorDomain: string;

declare var FUIAuthErrorUserInfoProviderIDKey: string;

declare class FUIAuthErrorUtils extends NSObject {
	static alloc(): FUIAuthErrorUtils; // inherited from NSObject

	static errorWithCodeUserInfo(code: FUIAuthErrorCode, userInfo: NSDictionary<any, any>): NSError;

	static mergeConflictErrorWithUserInfoUnderlyingError(userInfo: NSDictionary<any, any>, underlyingError: NSError): NSError;

	static new(): FUIAuthErrorUtils; // inherited from NSObject

	static providerErrorWithUnderlyingErrorProviderID(underlyingError: NSError, providerID: string): NSError;

	static userCancelledSignInError(): NSError;
}

declare class FUIAuthPickerViewController extends FUIAuthBaseViewController {
	static alloc(): FUIAuthPickerViewController; // inherited from NSObject

	static new(): FUIAuthPickerViewController; // inherited from NSObject
}

interface FUIAuthProvider extends NSObjectProtocol {
	accessToken: string;

	buttonAlignment: FUIButtonAlignment;

	buttonBackgroundColor: UIColor;

	buttonTextColor: UIColor;

	icon: UIImage;

	idToken?: string;

	providerID: string;

	shortName: string;

	signInLabel: string;

	email?(): string;

	handleOpenURLSourceApplication?(URL: NSURL, sourceApplication: string): boolean;

	signInWithDefaultValuePresentingViewControllerCompletion(defaultValue: string, presentingViewController: UIViewController, completion: (p1: FIRAuthCredential, p2: NSError, p3: (p1: FIRUser, p2: NSError) => void, p4: NSDictionary<string, any>) => void): void;

	signInWithEmailPresentingViewControllerCompletion(email: string, presentingViewController: UIViewController, completion: (p1: FIRAuthCredential, p2: NSError, p3: (p1: FIRUser, p2: NSError) => void, p4: NSDictionary<string, any>) => void): void;

	signOut(): void;
}
declare var FUIAuthProvider: {
	prototype: FUIAuthProvider;
};

declare class FUIAuthTableHeaderView extends UIView {
	static alloc(): FUIAuthTableHeaderView; // inherited from NSObject

	static appearance(): FUIAuthTableHeaderView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FUIAuthTableHeaderView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FUIAuthTableHeaderView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FUIAuthTableHeaderView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FUIAuthTableHeaderView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FUIAuthTableHeaderView; // inherited from UIAppearance

	static new(): FUIAuthTableHeaderView; // inherited from NSObject

	detailLabel: UILabel;

	titleLabel: UILabel;
}

declare class FUIAuthTableViewCell extends UITableViewCell {
	static alloc(): FUIAuthTableViewCell; // inherited from NSObject

	static appearance(): FUIAuthTableViewCell; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FUIAuthTableViewCell; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FUIAuthTableViewCell; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FUIAuthTableViewCell; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FUIAuthTableViewCell; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FUIAuthTableViewCell; // inherited from UIAppearance

	static new(): FUIAuthTableViewCell; // inherited from NSObject

	label: UILabel;

	textField: UITextField;
}

declare class FUIAuthUtils extends NSObject {
	static alloc(): FUIAuthUtils; // inherited from NSObject

	static authUIBundle(): NSBundle;

	static bundleNamedInFrameworkBundle(bundleName: string, framework: NSBundle): NSBundle;

	static imageNamedFromBundle(name: string, bundle: NSBundle): UIImage;

	static new(): FUIAuthUtils; // inherited from NSObject

	static randomNonce(): string;

	static stringBySHA256HashingString(input: string): string;
}

declare const enum FUIButtonAlignment {
	Leading = 0,

	Center = 1,
}

interface FUIEmailAuthProvider extends NSObjectProtocol {
	handleAccountLinkingForEmailNewCredentialPresentingViewControllerSignInResult(email: string, newCredential: FIRAuthCredential, presentingViewController: UIViewController, result: (p1: FIRUser, p2: NSError) => void): void;

	signInWithEmailHintPresentingViewControllerOriginalErrorCompletion(emailHint: string, presentingViewController: FUIAuthBaseViewController, originalError: NSError, completion: (p1: FIRAuthDataResult, p2: NSError, p3: FIRAuthCredential) => void): void;
}
declare var FUIEmailAuthProvider: {
	prototype: FUIEmailAuthProvider;
};

declare function FUILocalizedString(key: string): string;

declare function FUILocalizedStringFromTable(key: string, table: string): string;

declare function FUILocalizedStringFromTableInBundle(key: string, table: string, bundle: NSBundle): string;

declare class FUIPrivacyAndTermsOfServiceView extends UITextView {
	static alloc(): FUIPrivacyAndTermsOfServiceView; // inherited from NSObject

	static appearance(): FUIPrivacyAndTermsOfServiceView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): FUIPrivacyAndTermsOfServiceView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FUIPrivacyAndTermsOfServiceView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FUIPrivacyAndTermsOfServiceView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FUIPrivacyAndTermsOfServiceView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): FUIPrivacyAndTermsOfServiceView; // inherited from UIAppearance

	static new(): FUIPrivacyAndTermsOfServiceView; // inherited from NSObject

	/**
	 * @since 16.0
	 */
	static textViewUsingTextLayoutManager(usingTextLayoutManager: boolean): FUIPrivacyAndTermsOfServiceView; // inherited from UITextView

	authUI: FUIAuth;

	privacyPolicyAndTOSMessageFromFormat(format: string): NSAttributedString;

	useFooterMessage(): void;

	useFullMessage(): void;
}

declare var FirebaseAuthUIVersionNumber: number;

declare var FirebaseAuthUIVersionNumberVar: number;

declare var FirebaseAuthUIVersionString: interop.Reference<number>;

declare var FirebaseAuthUIVersionStringVar: interop.Reference<number>;

declare var kStr_ASCellAddPassword: string;

declare var kStr_ASCellChangePassword: string;

declare var kStr_ASCellDeleteAccount: string;

declare var kStr_ASCellEmail: string;

declare var kStr_ASCellName: string;

declare var kStr_ASCellSignOut: string;

declare var kStr_ASSectionTitleLinkedAccounts: string;

declare var kStr_ASSectionTitleProfile: string;

declare var kStr_ASSectionTitleSecurity: string;

declare var kStr_AccountDisabledError: string;

declare var kStr_ActionCantBeUndone: string;

declare var kStr_AddPasswordAlertMessage: string;

declare var kStr_AddPasswordTitle: string;

declare var kStr_AuthPickerTitle: string;

declare var kStr_Back: string;

declare var kStr_Cancel: string;

declare var kStr_CannotAuthenticateError: string;

declare var kStr_CantFindProvider: string;

declare var kStr_ChoosePassword: string;

declare var kStr_Close: string;

declare var kStr_ConfirmEmail: string;

declare var kStr_Delete: string;

declare var kStr_DeleteAccountBody: string;

declare var kStr_DeleteAccountConfirmationMessage: string;

declare var kStr_DeleteAccountConfirmationTitle: string;

declare var kStr_DeleteAccountControllerTitle: string;

declare var kStr_EditEmailTitle: string;

declare var kStr_EditNameTitle: string;

declare var kStr_EditPasswordAlertMessage: string;

declare var kStr_EditPasswordTitle: string;

declare var kStr_Email: string;

declare var kStr_EmailAlreadyInUseError: string;

declare var kStr_EmailSentConfirmationMessage: string;

declare var kStr_EmailsDontMatch: string;

declare var kStr_EnterYourEmail: string;

declare var kStr_EnterYourPassword: string;

declare var kStr_Error: string;

declare var kStr_ExistingAccountTitle: string;

declare var kStr_FirstAndLastName: string;

declare var kStr_ForgotPassword: string;

declare var kStr_ForgotPasswordTitle: string;

declare var kStr_ForgotPasswordVar: string;

declare var kStr_InvalidEmailError: string;

declare var kStr_InvalidPasswordError: string;

declare var kStr_Name: string;

declare var kStr_Next: string;

declare var kStr_OK: string;

declare var kStr_Password: string;

declare var kStr_PasswordRecoveryEmailSentMessage: string;

declare var kStr_PasswordRecoveryEmailSentTitle: string;

declare var kStr_PasswordRecoveryMessage: string;

declare var kStr_PasswordRecoveryTitle: string;

declare var kStr_PasswordVerificationMessage: string;

declare var kStr_PlaceholderChosePassword: string;

declare var kStr_PlaceholderEnterEmail: string;

declare var kStr_PlaceholderEnterName: string;

declare var kStr_PlaceholderEnterPassword: string;

declare var kStr_PlaceholderNewPassword: string;

declare var kStr_PrivacyPolicy: string;

declare var kStr_ProviderTitleFacebook: string;

declare var kStr_ProviderTitleGoogle: string;

declare var kStr_ProviderTitlePassword: string;

declare var kStr_ProviderTitleTwitter: string;

declare var kStr_ProviderUsedPreviouslyMessage: string;

declare var kStr_ReauthenticateEditPasswordAlertMessage: string;

declare var kStr_Resend: string;

declare var kStr_Save: string;

declare var kStr_Send: string;

declare var kStr_SignInEmailSent: string;

declare var kStr_SignInTitle: string;

declare var kStr_SignInTooManyTimesError: string;

declare var kStr_SignInWithEmail: string;

declare var kStr_SignInWithProvider: string;

declare var kStr_SignUpTitle: string;

declare var kStr_SignUpTooManyTimesError: string;

declare var kStr_SignedIn: string;

declare var kStr_TermsOfService: string;

declare var kStr_TermsOfServiceMessage: string;

declare var kStr_TroubleGettingEmailMessage: string;

declare var kStr_TroubleGettingEmailTitle: string;

declare var kStr_UnlinkAction: string;

declare var kStr_UnlinkConfirmationActionTitle: string;

declare var kStr_UnlinkConfirmationMessage: string;

declare var kStr_UnlinkConfirmationTitle: string;

declare var kStr_UnlinkTitle: string;

declare var kStr_UpdateEmailAlertMessage: string;

declare var kStr_UpdateEmailVerificationAlertMessage: string;

declare var kStr_UserNotFoundError: string;

declare var kStr_VerifyItsYou: string;

declare var kStr_WeakPasswordError: string;

declare var kStr_WrongPasswordError: string;
