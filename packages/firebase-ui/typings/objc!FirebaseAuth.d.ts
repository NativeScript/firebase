declare class FIRActionCodeInfo extends NSObject {
	static alloc(): FIRActionCodeInfo; // inherited from NSObject

	static new(): FIRActionCodeInfo; // inherited from NSObject

	readonly email: string;

	readonly operation: FIRActionCodeOperation;

	readonly previousEmail: string;
}

declare const enum FIRActionCodeOperation {
	Unknown = 0,

	PasswordReset = 1,

	VerifyEmail = 2,

	RecoverEmail = 3,

	EmailLink = 4,

	VerifyAndChangeEmail = 5,

	RevertSecondFactorAddition = 6,
}

declare class FIRActionCodeSettings extends NSObject {
	static alloc(): FIRActionCodeSettings; // inherited from NSObject

	static new(): FIRActionCodeSettings; // inherited from NSObject

	URL: NSURL;

	androidInstallIfNotAvailable: boolean;

	androidMinimumVersion: string;

	androidPackageName: string;

	dynamicLinkDomain: string;

	handleCodeInApp: boolean;

	iOSBundleID: string;

	setAndroidPackageNameInstallIfNotAvailableMinimumVersion(androidPackageName: string, installIfNotAvailable: boolean, minimumVersion: string): void;
}

declare class FIRActionCodeURL extends NSObject {
	static alloc(): FIRActionCodeURL; // inherited from NSObject

	static new(): FIRActionCodeURL; // inherited from NSObject

	readonly APIKey: string;

	readonly code: string;

	readonly continueURL: NSURL;

	readonly languageCode: string;

	readonly operation: FIRActionCodeOperation;

	constructor(o: { onCodeURLWithLink: string });

	actionCodeURLWithLink(link: string): this;
}

declare class FIRAdditionalUserInfo extends NSObject implements NSSecureCoding {
	static alloc(): FIRAdditionalUserInfo; // inherited from NSObject

	static new(): FIRAdditionalUserInfo; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly isNewUser: boolean;

	readonly profile: NSDictionary<string, any>;

	readonly providerID: string;

	readonly username: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	newUser(): boolean;
}

/**
 * @since 13
 */
declare class FIRAuth extends NSObject implements FIRAuthInterop, UIApplicationDelegate, UISceneDelegate {
	static alloc(): FIRAuth; // inherited from NSObject

	static auth(): FIRAuth;

	static authWithApp(app: FIRApp): FIRAuth;

	static new(): FIRAuth; // inherited from NSObject

	readonly APNSToken: NSData;

	readonly app: FIRApp;

	readonly currentUser: FIRUser;

	customAuthDomain: string;

	languageCode: string;

	settings: FIRAuthSettings;

	shareAuthStateAcrossDevices: boolean;

	tenantID: string;

	readonly userAccessGroup: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	/**
	 * @since 5.0
	 */
	window: UIWindow; // inherited from UIApplicationDelegate

	readonly; // inherited from NSObjectProtocol

	addAuthStateDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	addIDTokenDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	/**
	 * @since 13.0
	 */
	applicationConfigurationForConnectingSceneSessionOptions(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration;

	/**
	 * @since 8.0
	 */
	applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean;

	applicationDidBecomeActive(application: UIApplication): void;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationDidChangeStatusBarFrame(application: UIApplication, oldStatusBarFrame: CGRect): void;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationDidChangeStatusBarOrientation(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

	/**
	 * @since 6.0
	 */
	applicationDidDecodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	/**
	 * @since 13.0
	 */
	applicationDidDiscardSceneSessions(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void;

	/**
	 * @since 4.0
	 */
	applicationDidEnterBackground(application: UIApplication): void;

	/**
	 * @since 8.0
	 */
	applicationDidFailToContinueUserActivityWithTypeError(application: UIApplication, userActivityType: string, error: NSError): void;

	/**
	 * @since 3.0
	 */
	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunching(application: UIApplication): void;

	/**
	 * @since 3.0
	 */
	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	/**
	 * @since 4.0
	 * @deprecated 10.0
	 */
	applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveMemoryWarning(application: UIApplication): void;

	/**
	 * @since 3.0
	 * @deprecated 10.0
	 */
	applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	/**
	 * @since 7.0
	 */
	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	/**
	 * @since 3.0
	 */
	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	/**
	 * @since 8.0
	 * @deprecated 10.0
	 */
	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	/**
	 * @since 8.0
	 */
	applicationDidUpdateUserActivity(application: UIApplication, userActivity: NSUserActivity): void;

	/**
	 * @since 8.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

	/**
	 * @since 9.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	/**
	 * @since 8.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	/**
	 * @since 9.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	/**
	 * @since 7.0
	 */
	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	/**
	 * @since 11.0
	 * @deprecated 14.0
	 */
	applicationHandleIntentCompletionHandler(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;

	/**
	 * @since 2.0
	 * @deprecated 9.0
	 */
	applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

	/**
	 * @since 8.2
	 */
	applicationHandleWatchKitExtensionRequestReply(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

	/**
	 * @since 14.0
	 */
	applicationHandlerForIntent(application: UIApplication, intent: INIntent): any;

	/**
	 * @since 9.0
	 */
	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	/**
	 * @since 4.2
	 * @deprecated 9.0
	 */
	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	/**
	 * @since 9.0
	 */
	applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	/**
	 * @since 7.0
	 * @deprecated 13.0
	 */
	applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	/**
	 * @since 4.0
	 */
	applicationProtectedDataDidBecomeAvailable(application: UIApplication): void;

	/**
	 * @since 4.0
	 */
	applicationProtectedDataWillBecomeUnavailable(application: UIApplication): void;

	/**
	 * @since 8.0
	 */
	applicationShouldAllowExtensionPointIdentifier(application: UIApplication, extensionPointIdentifier: string): boolean;

	/**
	 * @since 15.0
	 */
	applicationShouldAutomaticallyLocalizeKeyCommands(application: UIApplication): boolean;

	/**
	 * @since 9.0
	 */
	applicationShouldRequestHealthAuthorization(application: UIApplication): void;

	/**
	 * @since 6.0
	 * @deprecated 13.2
	 */
	applicationShouldRestoreApplicationState(application: UIApplication, coder: NSCoder): boolean;

	/**
	 * @since 13.2
	 */
	applicationShouldRestoreSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	/**
	 * @since 6.0
	 * @deprecated 13.2
	 */
	applicationShouldSaveApplicationState(application: UIApplication, coder: NSCoder): boolean;

	/**
	 * @since 13.2
	 */
	applicationShouldSaveSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationSignificantTimeChange(application: UIApplication): void;

	/**
	 * @since 6.0
	 */
	applicationSupportedInterfaceOrientationsForWindow(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

	/**
	 * @since 10.0
	 */
	applicationUserDidAcceptCloudKitShareWithMetadata(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;

	/**
	 * @since 6.0
	 */
	applicationViewControllerWithRestorationIdentifierPathCoder(application: UIApplication, identifierComponents: NSArray<string> | string[], coder: NSCoder): UIViewController;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationWillChangeStatusBarFrame(application: UIApplication, newStatusBarFrame: CGRect): void;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationWillChangeStatusBarOrientationDuration(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

	/**
	 * @since 8.0
	 */
	applicationWillContinueUserActivityWithType(application: UIApplication, userActivityType: string): boolean;

	/**
	 * @since 6.0
	 */
	applicationWillEncodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	/**
	 * @since 4.0
	 */
	applicationWillEnterForeground(application: UIApplication): void;

	/**
	 * @since 6.0
	 */
	applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationWillResignActive(application: UIApplication): void;

	applicationWillTerminate(application: UIApplication): void;

	applyActionCodeCompletion(code: string, completion: (p1: NSError) => void): void;

	canHandleNotification(userInfo: NSDictionary<any, any>): boolean;

	canHandleURL(url: NSURL): boolean;

	checkActionCodeCompletion(code: string, completion: (p1: FIRActionCodeInfo, p2: NSError) => void): void;

	class(): typeof NSObject;

	confirmPasswordResetWithCodeNewPasswordCompletion(code: string, newPassword: string, completion: (p1: NSError) => void): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createUserWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	fetchSignInMethodsForEmailCompletion(email: string, completion: (p1: NSArray<string>, p2: NSError) => void): void;

	getStoredUserForAccessGroupError(accessGroup: string): FIRUser;

	getTokenForcingRefreshWithCallback(forceRefresh: boolean, callback: (p1: string, p2: NSError) => void): void;

	getUserID(): string;

	initializeRecaptchaConfigWithCompletion(completion: (p1: NSError) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isSignInWithEmailLink(link: string): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAuthStateDidChangeListener(listenerHandle: NSObjectProtocol): void;

	removeIDTokenDidChangeListener(listenerHandle: NSObjectProtocol): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	revokeTokenWithAuthorizationCodeCompletion(authorizationCode: string, completion: (p1: NSError) => void): void;

	sceneContinueUserActivity(scene: UIScene, userActivity: NSUserActivity): void;

	sceneDidBecomeActive(scene: UIScene): void;

	sceneDidDisconnect(scene: UIScene): void;

	sceneDidEnterBackground(scene: UIScene): void;

	sceneDidFailToContinueUserActivityWithTypeError(scene: UIScene, userActivityType: string, error: NSError): void;

	sceneDidUpdateUserActivity(scene: UIScene, userActivity: NSUserActivity): void;

	sceneOpenURLContexts(scene: UIScene, URLContexts: NSSet<UIOpenURLContext>): void;

	sceneRestoreInteractionStateWithUserActivity(scene: UIScene, stateRestorationActivity: NSUserActivity): void;

	sceneWillConnectToSessionOptions(scene: UIScene, session: UISceneSession, connectionOptions: UISceneConnectionOptions): void;

	sceneWillContinueUserActivityWithType(scene: UIScene, userActivityType: string): void;

	sceneWillEnterForeground(scene: UIScene): void;

	sceneWillResignActive(scene: UIScene): void;

	self(): this;

	sendPasswordResetWithEmailActionCodeSettingsCompletion(email: string, actionCodeSettings: FIRActionCodeSettings, completion: (p1: NSError) => void): void;

	sendPasswordResetWithEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	sendSignInLinkToEmailActionCodeSettingsCompletion(email: string, actionCodeSettings: FIRActionCodeSettings, completion: (p1: NSError) => void): void;

	setAPNSTokenType(token: NSData, type: FIRAuthAPNSTokenType): void;

	signInAnonymouslyWithCompletion(completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	/**
	 * @since 13
	 */
	signInAnonymouslyWithCompletionHandler(completionHandler: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithCustomTokenCompletion(token: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithEmailLinkCompletion(email: string, link: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithProviderUIDelegateCompletion(provider: FIRFederatedAuthProvider, uiDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signOut(): boolean;

	stateRestorationActivityForScene(scene: UIScene): NSUserActivity;

	updateCurrentUserCompletion(user: FIRUser, completion: (p1: NSError) => void): void;

	useAppLanguage(): void;

	useEmulatorWithHostPort(host: string, port: number): void;

	useUserAccessGroupError(accessGroup: string): boolean;

	verifyPasswordResetCodeCompletion(code: string, completion: (p1: string, p2: NSError) => void): void;
}

declare const enum FIRAuthAPNSTokenType {
	Unknown = 0,

	Sandbox = 1,

	Prod = 2,
}

/**
 * @since 13
 */
declare class FIRAuthCredential extends NSObject {
	static alloc(): FIRAuthCredential; // inherited from NSObject

	static new(): FIRAuthCredential; // inherited from NSObject

	readonly provider: string;
}

/**
 * @since 13
 */
declare class FIRAuthDataResult extends NSObject implements NSSecureCoding {
	static alloc(): FIRAuthDataResult; // inherited from NSObject

	static new(): FIRAuthDataResult; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly additionalUserInfo: FIRAdditionalUserInfo;

	readonly credential: FIROAuthCredential;

	readonly user: FIRUser;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum FIRAuthErrorCode {
	InvalidCustomToken = 17000,

	CustomTokenMismatch = 17002,

	InvalidCredential = 17004,

	UserDisabled = 17005,

	OperationNotAllowed = 17006,

	EmailAlreadyInUse = 17007,

	InvalidEmail = 17008,

	WrongPassword = 17009,

	TooManyRequests = 17010,

	UserNotFound = 17011,

	AccountExistsWithDifferentCredential = 17012,

	RequiresRecentLogin = 17014,

	ProviderAlreadyLinked = 17015,

	NoSuchProvider = 17016,

	InvalidUserToken = 17017,

	NetworkError = 17020,

	UserTokenExpired = 17021,

	InvalidAPIKey = 17023,

	UserMismatch = 17024,

	CredentialAlreadyInUse = 17025,

	WeakPassword = 17026,

	AppNotAuthorized = 17028,

	ExpiredActionCode = 17029,

	InvalidActionCode = 17030,

	InvalidMessagePayload = 17031,

	InvalidSender = 17032,

	InvalidRecipientEmail = 17033,

	MissingEmail = 17034,

	MissingIosBundleID = 17036,

	MissingAndroidPackageName = 17037,

	UnauthorizedDomain = 17038,

	InvalidContinueURI = 17039,

	MissingContinueURI = 17040,

	MissingPhoneNumber = 17041,

	InvalidPhoneNumber = 17042,

	MissingVerificationCode = 17043,

	InvalidVerificationCode = 17044,

	MissingVerificationID = 17045,

	InvalidVerificationID = 17046,

	MissingAppCredential = 17047,

	InvalidAppCredential = 17048,

	SessionExpired = 17051,

	QuotaExceeded = 17052,

	MissingAppToken = 17053,

	NotificationNotForwarded = 17054,

	AppNotVerified = 17055,

	CaptchaCheckFailed = 17056,

	WebContextAlreadyPresented = 17057,

	WebContextCancelled = 17058,

	AppVerificationUserInteractionFailure = 17059,

	InvalidClientID = 17060,

	WebNetworkRequestFailed = 17061,

	WebInternalError = 17062,

	WebSignInUserInteractionFailure = 17063,

	LocalPlayerNotAuthenticated = 17066,

	NullUser = 17067,

	DynamicLinkNotActivated = 17068,

	InvalidProviderID = 17071,

	TenantIDMismatch = 17072,

	UnsupportedTenantOperation = 17073,

	InvalidDynamicLinkDomain = 17074,

	RejectedCredential = 17075,

	GameKitNotLinked = 17076,

	SecondFactorRequired = 17078,

	MissingMultiFactorSession = 17081,

	MissingMultiFactorInfo = 17082,

	InvalidMultiFactorSession = 17083,

	MultiFactorInfoNotFound = 17084,

	AdminRestrictedOperation = 17085,

	UnverifiedEmail = 17086,

	SecondFactorAlreadyEnrolled = 17087,

	MaximumSecondFactorCountExceeded = 17088,

	UnsupportedFirstFactor = 17089,

	EmailChangeNeedsVerification = 17090,

	MissingClientIdentifier = 17093,

	MissingOrInvalidNonce = 17094,

	BlockingCloudFunctionError = 17105,

	RecaptchaNotEnabled = 17200,

	MissingRecaptchaToken = 17201,

	InvalidRecaptchaToken = 17202,

	InvalidRecaptchaAction = 17203,

	MissingClientType = 17204,

	MissingRecaptchaVersion = 17205,

	InvalidRecaptchaVersion = 17206,

	InvalidReqType = 17207,

	RecaptchaSDKNotLinked = 17208,

	RecaptchaSiteKeyMissing = 17209,

	RecaptchaActionCreationFailed = 17210,

	KeychainError = 17995,

	InternalError = 17999,

	MalformedJWT = 18000,
}

declare var FIRAuthErrorDomain: string;

declare var FIRAuthErrorUserInfoEmailKey: string;

declare var FIRAuthErrorUserInfoMultiFactorResolverKey: string;

declare var FIRAuthErrorUserInfoNameKey: string;

declare var FIRAuthErrorUserInfoUpdatedCredentialKey: string;

declare class FIRAuthErrors extends NSObject {
	static alloc(): FIRAuthErrors; // inherited from NSObject

	static new(): FIRAuthErrors; // inherited from NSObject

	static readonly FIRAuthErrorUserInfoMultiFactorResolverKey: string;

	static readonly domain: string;

	static readonly userInfoEmailKey: string;

	static readonly userInfoNameKey: string;

	static readonly userInfoUpdatedCredentialKey: string;
}

declare class FIRAuthSettings extends NSObject implements NSCopying {
	static alloc(): FIRAuthSettings; // inherited from NSObject

	static new(): FIRAuthSettings; // inherited from NSObject

	appVerificationDisabledForTesting: boolean;

	isAppVerificationDisabledForTesting: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var FIRAuthStateDidChangeNotification: string;

/**
 * @since 13
 */
declare class FIRAuthTokenResult extends NSObject implements NSSecureCoding {
	static alloc(): FIRAuthTokenResult; // inherited from NSObject

	static new(): FIRAuthTokenResult; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	authDate: Date;

	claims: NSDictionary<string, any>;

	expirationDate: Date;

	issuedAtDate: Date;

	signInProvider: string;

	signInSecondFactor: string;

	token: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

interface FIRAuthUIDelegate extends NSObjectProtocol {
	dismissViewControllerAnimatedCompletion(flag: boolean, completion: () => void): void;

	presentViewControllerAnimatedCompletion(viewControllerToPresent: UIViewController, flag: boolean, completion: () => void): void;
}
declare var FIRAuthUIDelegate: {
	prototype: FIRAuthUIDelegate;
};

/**
 * @since 13
 */
declare class FIREmailAuthProvider extends NSObject {
	static alloc(): FIREmailAuthProvider; // inherited from NSObject

	static credentialWithEmailLink(email: string, link: string): FIRAuthCredential;

	static credentialWithEmailPassword(email: string, password: string): FIRAuthCredential;

	static new(): FIREmailAuthProvider; // inherited from NSObject

	static readonly id: string;
}

declare var FIREmailAuthProviderID: string;

declare var FIREmailLinkAuthSignInMethod: string;

declare var FIREmailPasswordAuthSignInMethod: string;

/**
 * @since 13
 */
declare class FIRFacebookAuthProvider extends NSObject {
	static alloc(): FIRFacebookAuthProvider; // inherited from NSObject

	static credentialWithAccessToken(accessToken: string): FIRAuthCredential;

	static new(): FIRFacebookAuthProvider; // inherited from NSObject

	static readonly id: string;
}

declare var FIRFacebookAuthProviderID: string;

declare var FIRFacebookAuthSignInMethod: string;

/**
 * @since 13
 */
interface FIRFederatedAuthProvider extends NSObjectProtocol {
	/**
	 * @since 13
	 */
	getCredentialWithUIDelegateCompletion(uiDelegate: FIRAuthUIDelegate, completionHandler: (p1: FIRAuthCredential, p2: NSError) => void): void;
}
declare var FIRFederatedAuthProvider: {
	prototype: FIRFederatedAuthProvider;
};

/**
 * @since 13
 */
declare class FIRGameCenterAuthProvider extends NSObject {
	static alloc(): FIRGameCenterAuthProvider; // inherited from NSObject

	static getCredentialWithCompletion(completion: (p1: FIRAuthCredential, p2: NSError) => void): void;

	static new(): FIRGameCenterAuthProvider; // inherited from NSObject

	static readonly id: string;
}

declare var FIRGameCenterAuthProviderID: string;

declare var FIRGameCenterAuthSignInMethod: string;

/**
 * @since 13
 */
declare class FIRGitHubAuthProvider extends NSObject {
	static alloc(): FIRGitHubAuthProvider; // inherited from NSObject

	static credentialWithToken(token: string): FIRAuthCredential;

	static new(): FIRGitHubAuthProvider; // inherited from NSObject

	static readonly id: string;
}

declare var FIRGitHubAuthProviderID: string;

declare var FIRGitHubAuthSignInMethod: string;

/**
 * @since 13
 */
declare class FIRGoogleAuthProvider extends NSObject {
	static alloc(): FIRGoogleAuthProvider; // inherited from NSObject

	static credentialWithIDTokenAccessToken(idToken: string, accessToken: string): FIRAuthCredential;

	static new(): FIRGoogleAuthProvider; // inherited from NSObject

	static readonly id: string;
}

declare var FIRGoogleAuthProviderID: string;

declare var FIRGoogleAuthSignInMethod: string;

/**
 * @since 13
 */
declare class FIRMultiFactor extends NSObject implements NSSecureCoding {
	static alloc(): FIRMultiFactor; // inherited from NSObject

	static new(): FIRMultiFactor; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	enrolledFactors: NSArray<FIRMultiFactorInfo>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	enrollWithAssertionDisplayNameCompletion(assertion: FIRMultiFactorAssertion, displayName: string, completion: (p1: NSError) => void): void;

	getSessionWithCompletion(completion: (p1: FIRMultiFactorSession, p2: NSError) => void): void;

	initWithCoder(coder: NSCoder): this;

	unenrollWithFactorUIDCompletion(factorUID: string, completion: (p1: NSError) => void): void;

	unenrollWithInfoCompletion(factorInfo: FIRMultiFactorInfo, completion: (p1: NSError) => void): void;
}

declare class FIRMultiFactorAssertion extends NSObject {
	static alloc(): FIRMultiFactorAssertion; // inherited from NSObject

	static new(): FIRMultiFactorAssertion; // inherited from NSObject

	factorID: string;
}

declare class FIRMultiFactorInfo extends NSObject implements NSSecureCoding {
	static alloc(): FIRMultiFactorInfo; // inherited from NSObject

	static new(): FIRMultiFactorInfo; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly UID: string;

	readonly displayName: string;

	readonly enrollmentDate: Date;

	readonly factorID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

/**
 * @since 13
 */
declare class FIRMultiFactorResolver extends NSObject {
	static alloc(): FIRMultiFactorResolver; // inherited from NSObject

	static new(): FIRMultiFactorResolver; // inherited from NSObject

	readonly auth: FIRAuth;

	readonly hints: NSArray<FIRMultiFactorInfo>;

	readonly session: FIRMultiFactorSession;

	resolveSignInWithAssertionCompletion(assertion: FIRMultiFactorAssertion, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;
}

/**
 * @since 13
 */
declare class FIRMultiFactorSession extends NSObject {
	static alloc(): FIRMultiFactorSession; // inherited from NSObject

	static new(): FIRMultiFactorSession; // inherited from NSObject
}

/**
 * @since 13
 */
declare class FIROAuthCredential extends FIRAuthCredential implements NSSecureCoding {
	static alloc(): FIROAuthCredential; // inherited from NSObject

	static new(): FIROAuthCredential; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly IDToken: string;

	readonly accessToken: string;

	readonly secret: string;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

/**
 * @since 13
 */
declare class FIROAuthProvider extends NSObject implements FIRFederatedAuthProvider {
	static alloc(): FIROAuthProvider; // inherited from NSObject

	static appleCredentialWithIDTokenRawNonceFullName(idToken: string, rawNonce: string, fullName: NSPersonNameComponents): FIROAuthCredential;

	static credentialWithProviderIDAccessToken(providerID: string, accessToken: string): FIROAuthCredential;

	static credentialWithProviderIDIDTokenAccessToken(providerID: string, idToken: string, accessToken: string): FIROAuthCredential;

	static credentialWithProviderIDIDTokenRawNonce(providerID: string, idToken: string, rawNonce: string): FIROAuthCredential;

	static credentialWithProviderIDIDTokenRawNonceAccessToken(providerID: string, idToken: string, rawNonce: string, accessToken: string): FIROAuthCredential;

	static new(): FIROAuthProvider; // inherited from NSObject

	static providerWithProviderID(providerID: string): FIROAuthProvider;

	static providerWithProviderIDAuth(providerID: string, auth: FIRAuth): FIROAuthProvider;

	customParameters: NSDictionary<string, string>;

	readonly providerID: string;

	scopes: NSArray<string>;

	static readonly id: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	/**
	 * @since 13
	 */
	getCredentialWithUIDelegateCompletion(uiDelegate: FIRAuthUIDelegate, completionHandler: (p1: FIRAuthCredential, p2: NSError) => void): void;

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

/**
 * @since 13
 */
declare class FIRPhoneAuthCredential extends FIRAuthCredential implements NSSecureCoding {
	static alloc(): FIRPhoneAuthCredential; // inherited from NSObject

	static new(): FIRPhoneAuthCredential; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

/**
 * @since 13
 */
declare class FIRPhoneAuthProvider extends NSObject {
	static alloc(): FIRPhoneAuthProvider; // inherited from NSObject

	static new(): FIRPhoneAuthProvider; // inherited from NSObject

	static provider(): FIRPhoneAuthProvider;

	static providerWithAuth(auth: FIRAuth): FIRPhoneAuthProvider;

	static readonly id: string;

	credentialWithVerificationIDVerificationCode(verificationID: string, verificationCode: string): FIRPhoneAuthCredential;

	verifyPhoneNumberUIDelegateCompletion(phoneNumber: string, uiDelegate: FIRAuthUIDelegate, completion: (p1: string, p2: NSError) => void): void;

	verifyPhoneNumberUIDelegateMultiFactorSessionCompletion(phoneNumber: string, uiDelegate: FIRAuthUIDelegate, multiFactorSession: FIRMultiFactorSession, completion: (p1: string, p2: NSError) => void): void;

	verifyPhoneNumberWithMultiFactorInfoUIDelegateMultiFactorSessionCompletion(multiFactorInfo: FIRPhoneMultiFactorInfo, uiDelegate: FIRAuthUIDelegate, multiFactorSession: FIRMultiFactorSession, completion: (p1: string, p2: NSError) => void): void;
}

declare var FIRPhoneAuthProviderID: string;

declare var FIRPhoneAuthSignInMethod: string;

/**
 * @since 13
 */
declare class FIRPhoneMultiFactorAssertion extends FIRMultiFactorAssertion {
	static alloc(): FIRPhoneMultiFactorAssertion; // inherited from NSObject

	static new(): FIRPhoneMultiFactorAssertion; // inherited from NSObject
}

/**
 * @since 13
 */
declare class FIRPhoneMultiFactorGenerator extends NSObject {
	static alloc(): FIRPhoneMultiFactorGenerator; // inherited from NSObject

	static assertionWithCredential(phoneAuthCredential: FIRPhoneAuthCredential): FIRPhoneMultiFactorAssertion;

	static new(): FIRPhoneMultiFactorGenerator; // inherited from NSObject
}

declare var FIRPhoneMultiFactorID: string;

declare class FIRPhoneMultiFactorInfo extends FIRMultiFactorInfo {
	static alloc(): FIRPhoneMultiFactorInfo; // inherited from NSObject

	static new(): FIRPhoneMultiFactorInfo; // inherited from NSObject

	phoneNumber: string;

	static readonly FIRPhoneMultiFactorID: string;

	static readonly FIRTOTPMultiFactorID: string;
}

declare function FIRRecaptchaGetToken(siteKey: string, actionString: string, fakeToken: string, callback: (p1: string, p2: NSError, p3: boolean, p4: boolean) => void): void;

declare class FIRTOTPMultiFactorAssertion extends FIRMultiFactorAssertion {
	static alloc(): FIRTOTPMultiFactorAssertion; // inherited from NSObject

	static new(): FIRTOTPMultiFactorAssertion; // inherited from NSObject
}

/**
 * @since 13
 */
declare class FIRTOTPMultiFactorGenerator extends NSObject {
	static alloc(): FIRTOTPMultiFactorGenerator; // inherited from NSObject

	static assertionForEnrollmentWithSecretOneTimePassword(secret: FIRTOTPSecret, oneTimePassword: string): FIRTOTPMultiFactorAssertion;

	static assertionForSignInWithEnrollmentIDOneTimePassword(enrollmentID: string, oneTimePassword: string): FIRTOTPMultiFactorAssertion;

	static generateSecretWithMultiFactorSessionCompletion(session: FIRMultiFactorSession, completion: (p1: FIRTOTPSecret, p2: NSError) => void): void;

	static new(): FIRTOTPMultiFactorGenerator; // inherited from NSObject
}

declare var FIRTOTPMultiFactorID: string;

declare class FIRTOTPSecret extends NSObject {
	static alloc(): FIRTOTPSecret; // inherited from NSObject

	static new(): FIRTOTPSecret; // inherited from NSObject

	generateQRCodeURLWithAccountNameIssuer(accountName: string, issuer: string): string;

	openInOTPAppWithQRCodeURL(qrCodeURL: string): void;

	sharedSecretKey(): string;
}

/**
 * @since 13
 */
declare class FIRTwitterAuthProvider extends NSObject {
	static alloc(): FIRTwitterAuthProvider; // inherited from NSObject

	static credentialWithTokenSecret(token: string, secret: string): FIRAuthCredential;

	static new(): FIRTwitterAuthProvider; // inherited from NSObject

	static readonly id: string;
}

declare var FIRTwitterAuthProviderID: string;

declare var FIRTwitterAuthSignInMethod: string;

/**
 * @since 13
 */
declare class FIRUser extends NSObject implements FIRUserInfo, NSSecureCoding {
	static alloc(): FIRUser; // inherited from NSObject

	static new(): FIRUser; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	displayName: string;

	email: string;

	readonly isAnonymous: boolean;

	readonly isEmailVerified: boolean;

	readonly metadata: FIRUserMetadata;

	readonly multiFactor: FIRMultiFactor;

	phoneNumber: string;

	photoURL: NSURL;

	readonly providerData: NSArray<FIRUserInfo>;

	readonly refreshToken: string;

	readonly tenantID: string;

	uid: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly providerID: string; // inherited from FIRUserInfo

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	anonymous(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	emailVerified(): boolean;

	encodeWithCoder(coder: NSCoder): void;

	getIDTokenForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: string, p2: NSError) => void): void;

	getIDTokenResultForcingRefreshCompletion(forcingRefresh: boolean, completion: (p1: FIRAuthTokenResult, p2: NSError) => void): void;

	getIDTokenResultWithCompletion(completion: (p1: FIRAuthTokenResult, p2: NSError) => void): void;

	getIDTokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	initWithCoder(coder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	linkWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	linkWithProviderUIDelegateCompletion(provider: FIRFederatedAuthProvider, uiDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	profileChangeRequest(): FIRUserProfileChangeRequest;

	reauthenticateWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	reauthenticateWithProviderUIDelegateCompletion(provider: FIRFederatedAuthProvider, uiDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	reloadWithCompletion(completion: (p1: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendEmailVerificationBeforeUpdatingEmailActionCodeSettingsCompletion(email: string, actionCodeSettings: FIRActionCodeSettings, completion: (p1: NSError) => void): void;

	sendEmailVerificationBeforeUpdatingEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	sendEmailVerificationWithActionCodeSettingsCompletion(actionCodeSettings: FIRActionCodeSettings, completion: (p1: NSError) => void): void;

	sendEmailVerificationWithCompletion(completion: (p1: NSError) => void): void;

	unlinkFromProviderCompletion(provider: string, completion: (p1: FIRUser, p2: NSError) => void): void;

	updateEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	updatePasswordCompletion(password: string, completion: (p1: NSError) => void): void;

	updatePhoneNumberCredentialCompletion(credential: FIRPhoneAuthCredential, completion: (p1: NSError) => void): void;
}

interface FIRUserInfo extends NSObjectProtocol {
	displayName: string;

	email: string;

	phoneNumber: string;

	photoURL: NSURL;

	providerID: string;

	uid: string;
}
declare var FIRUserInfo: {
	prototype: FIRUserInfo;
};

/**
 * @since 13
 */
declare class FIRUserMetadata extends NSObject implements NSSecureCoding {
	static alloc(): FIRUserMetadata; // inherited from NSObject

	static new(): FIRUserMetadata; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	readonly creationDate: Date;

	readonly lastSignInDate: Date;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

/**
 * @since 13
 */
declare class FIRUserProfileChangeRequest extends NSObject {
	static alloc(): FIRUserProfileChangeRequest; // inherited from NSObject

	static new(): FIRUserProfileChangeRequest; // inherited from NSObject

	displayName: string;

	photoURL: NSURL;

	commitChangesWithCompletion(completion: (p1: NSError) => void): void;
}

declare var FirebaseAuthVersionNumber: number;

declare var FirebaseAuthVersionString: interop.Reference<number>;
