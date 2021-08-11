
declare class FIRActionCodeInfo extends NSObject {

	static alloc(): FIRActionCodeInfo; // inherited from NSObject

	static new(): FIRActionCodeInfo; // inherited from NSObject

	readonly email: string;

	readonly operation: FIRActionCodeOperation;

	readonly previousEmail: string;

	dataForKey(key: FIRActionDataKey): string;
}

declare const enum FIRActionCodeOperation {

	Unknown = 0,

	PasswordReset = 1,

	VerifyEmail = 2,

	RecoverEmail = 3,

	EmailLink = 4,

	VerifyAndChangeEmail = 5,

	RevertSecondFactorAddition = 6
}

declare class FIRActionCodeSettings extends NSObject {

	static alloc(): FIRActionCodeSettings; // inherited from NSObject

	static new(): FIRActionCodeSettings; // inherited from NSObject

	URL: NSURL;

	readonly androidInstallIfNotAvailable: boolean;

	readonly androidMinimumVersion: string;

	readonly androidPackageName: string;

	dynamicLinkDomain: string;

	handleCodeInApp: boolean;

	readonly iOSBundleID: string;

	setAndroidPackageNameInstallIfNotAvailableMinimumVersion(androidPackageName: string, installIfNotAvailable: boolean, minimumVersion: string): void;

	setIOSBundleID(iOSBundleID: string): void;
}

declare class FIRActionCodeURL extends NSObject {

	static actionCodeURLWithLink(link: string): FIRActionCodeURL;

	static alloc(): FIRActionCodeURL; // inherited from NSObject

	static new(): FIRActionCodeURL; // inherited from NSObject

	readonly APIKey: string;

	readonly code: string;

	readonly continueURL: NSURL;

	readonly languageCode: string;

	readonly operation: FIRActionCodeOperation;
}

declare const enum FIRActionDataKey {

	CodeEmailKey = 0,

	CodeFromEmailKey = 1
}

declare class FIRAdditionalUserInfo extends NSObject {

	static alloc(): FIRAdditionalUserInfo; // inherited from NSObject

	static new(): FIRAdditionalUserInfo; // inherited from NSObject

	readonly newUser: boolean;

	readonly profile: NSDictionary<string, NSObject>;

	readonly providerID: string;

	readonly username: string;
}

declare class FIRAuth extends NSObject {

	static alloc(): FIRAuth; // inherited from NSObject

	static auth(): FIRAuth;

	static authWithApp(app: FIRApp): FIRAuth;

	static new(): FIRAuth; // inherited from NSObject

	APNSToken: NSData;

	readonly app: FIRApp;

	readonly currentUser: FIRUser;

	languageCode: string;

	settings: FIRAuthSettings;

	tenantID: string;

	readonly userAccessGroup: string;

	addAuthStateDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	addIDTokenDidChangeListener(listener: (p1: FIRAuth, p2: FIRUser) => void): NSObjectProtocol;

	applyActionCodeCompletion(code: string, completion: (p1: NSError) => void): void;

	canHandleNotification(userInfo: NSDictionary<any, any>): boolean;

	canHandleURL(URL: NSURL): boolean;

	checkActionCodeCompletion(code: string, completion: (p1: FIRActionCodeInfo, p2: NSError) => void): void;

	confirmPasswordResetWithCodeNewPasswordCompletion(code: string, newPassword: string, completion: (p1: NSError) => void): void;

	createUserWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	fetchProvidersForEmailCompletion(email: string, completion: (p1: NSArray<string>, p2: NSError) => void): void;

	fetchSignInMethodsForEmailCompletion(email: string, completion: (p1: NSArray<string>, p2: NSError) => void): void;

	getStoredUserForAccessGroupError(accessGroup: string): FIRUser;

	isSignInWithEmailLink(link: string): boolean;

	removeAuthStateDidChangeListener(listenerHandle: NSObjectProtocol): void;

	removeIDTokenDidChangeListener(listenerHandle: NSObjectProtocol): void;

	sendPasswordResetWithEmailActionCodeSettingsCompletion(email: string, actionCodeSettings: FIRActionCodeSettings, completion: (p1: NSError) => void): void;

	sendPasswordResetWithEmailCompletion(email: string, completion: (p1: NSError) => void): void;

	sendSignInLinkToEmailActionCodeSettingsCompletion(email: string, actionCodeSettings: FIRActionCodeSettings, completion: (p1: NSError) => void): void;

	setAPNSTokenType(token: NSData, type: FIRAuthAPNSTokenType): void;

	signInAndRetrieveDataWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInAnonymouslyWithCompletion(completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithCustomTokenCompletion(token: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithEmailLinkCompletion(email: string, link: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithEmailPasswordCompletion(email: string, password: string, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signInWithProviderUIDelegateCompletion(provider: FIRFederatedAuthProvider, UIDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	signOut(): boolean;

	updateCurrentUserCompletion(user: FIRUser, completion: (p1: NSError) => void): void;

	useAppLanguage(): void;

	useUserAccessGroupError(accessGroup: string): boolean;

	verifyPasswordResetCodeCompletion(code: string, completion: (p1: string, p2: NSError) => void): void;
}

declare const enum FIRAuthAPNSTokenType {

	Unknown = 0,

	Sandbox = 1,

	Prod = 2
}

declare class FIRAuthCredential extends NSObject {

	static alloc(): FIRAuthCredential; // inherited from NSObject

	static new(): FIRAuthCredential; // inherited from NSObject

	readonly provider: string;
}

declare class FIRAuthDataResult extends NSObject {

	static alloc(): FIRAuthDataResult; // inherited from NSObject

	static new(): FIRAuthDataResult; // inherited from NSObject

	readonly additionalUserInfo: FIRAdditionalUserInfo;

	readonly credential: FIRAuthCredential;

	readonly user: FIRUser;
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

	MissingOrInvalidNonce = 17094,

	MissingClientIdentifier = 17993,

	KeychainError = 17995,

	InternalError = 17999,

	MalformedJWT = 18000
}

declare var FIRAuthErrorDomain: string;

declare var FIRAuthErrorUserInfoEmailKey: string;

declare var FIRAuthErrorUserInfoMultiFactorResolverKey: string;

declare var FIRAuthErrorUserInfoNameKey: string;

declare var FIRAuthErrorUserInfoUpdatedCredentialKey: string;

declare class FIRAuthErrors {
}

declare class FIRAuthSettings extends NSObject {

	static alloc(): FIRAuthSettings; // inherited from NSObject

	static new(): FIRAuthSettings; // inherited from NSObject

	appVerificationDisabledForTesting: boolean;
}

declare var FIRAuthStateDidChangeNotification: string;

declare class FIRAuthTokenResult extends NSObject {

	static alloc(): FIRAuthTokenResult; // inherited from NSObject

	static new(): FIRAuthTokenResult; // inherited from NSObject

	readonly authDate: Date;

	readonly claims: NSDictionary<string, any>;

	readonly expirationDate: Date;

	readonly issuedAtDate: Date;

	readonly signInProvider: string;

	readonly signInSecondFactor: string;

	readonly token: string;
}

interface FIRAuthUIDelegate extends NSObjectProtocol {

	dismissViewControllerAnimatedCompletion(flag: boolean, completion: () => void): void;

	presentViewControllerAnimatedCompletion(viewControllerToPresent: UIViewController, flag: boolean, completion: () => void): void;
}
declare var FIRAuthUIDelegate: {

	prototype: FIRAuthUIDelegate;
};

declare class FIREmailAuthProvider extends NSObject {

	static alloc(): FIREmailAuthProvider; // inherited from NSObject

	static credentialWithEmailLink(email: string, link: string): FIRAuthCredential;

	static credentialWithEmailPassword(email: string, password: string): FIRAuthCredential;

	static new(): FIREmailAuthProvider; // inherited from NSObject
}

declare var FIREmailAuthProviderID: string;

declare var FIREmailLinkAuthSignInMethod: string;

declare var FIREmailPasswordAuthSignInMethod: string;

declare class FIRFacebookAuthProvider extends NSObject {

	static alloc(): FIRFacebookAuthProvider; // inherited from NSObject

	static credentialWithAccessToken(accessToken: string): FIRAuthCredential;

	static new(): FIRFacebookAuthProvider; // inherited from NSObject
}

declare var FIRFacebookAuthProviderID: string;

declare var FIRFacebookAuthSignInMethod: string;

interface FIRFederatedAuthProvider extends NSObjectProtocol {

	getCredentialWithUIDelegateCompletion(UIDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthCredential, p2: NSError) => void): void;
}
declare var FIRFederatedAuthProvider: {

	prototype: FIRFederatedAuthProvider;
};

declare class FIRGameCenterAuthProvider extends NSObject {

	static alloc(): FIRGameCenterAuthProvider; // inherited from NSObject

	static getCredentialWithCompletion(completion: (p1: FIRAuthCredential, p2: NSError) => void): void;

	static new(): FIRGameCenterAuthProvider; // inherited from NSObject
}

declare var FIRGameCenterAuthProviderID: string;

declare var FIRGameCenterAuthSignInMethod: string;

declare class FIRGitHubAuthProvider extends NSObject {

	static alloc(): FIRGitHubAuthProvider; // inherited from NSObject

	static credentialWithToken(token: string): FIRAuthCredential;

	static new(): FIRGitHubAuthProvider; // inherited from NSObject
}

declare var FIRGitHubAuthProviderID: string;

declare var FIRGitHubAuthSignInMethod: string;

declare class FIRGoogleAuthProvider extends NSObject {

	static alloc(): FIRGoogleAuthProvider; // inherited from NSObject

	static credentialWithIDTokenAccessToken(IDToken: string, accessToken: string): FIRAuthCredential;

	static new(): FIRGoogleAuthProvider; // inherited from NSObject
}

declare var FIRGoogleAuthProviderID: string;

declare var FIRGoogleAuthSignInMethod: string;

declare class FIRMultiFactor extends NSObject {

	static alloc(): FIRMultiFactor; // inherited from NSObject

	static new(): FIRMultiFactor; // inherited from NSObject

	readonly enrolledFactors: NSArray<FIRMultiFactorInfo>;

	enrollWithAssertionDisplayNameCompletion(assertion: FIRMultiFactorAssertion, displayName: string, completion: (p1: NSError) => void): void;

	getSessionWithCompletion(completion: (p1: FIRMultiFactorSession, p2: NSError) => void): void;

	unenrollWithFactorUIDCompletion(factorUID: string, completion: (p1: NSError) => void): void;

	unenrollWithInfoCompletion(factorInfo: FIRMultiFactorInfo, completion: (p1: NSError) => void): void;
}

declare class FIRMultiFactorAssertion extends NSObject {

	static alloc(): FIRMultiFactorAssertion; // inherited from NSObject

	static new(): FIRMultiFactorAssertion; // inherited from NSObject

	readonly factorID: string;
}

declare class FIRMultiFactorInfo extends NSObject {

	static alloc(): FIRMultiFactorInfo; // inherited from NSObject

	static new(): FIRMultiFactorInfo; // inherited from NSObject

	readonly UID: string;

	readonly displayName: string;

	readonly enrollmentDate: Date;

	readonly factorID: string;
}

declare class FIRMultiFactorResolver extends NSObject {

	static alloc(): FIRMultiFactorResolver; // inherited from NSObject

	static new(): FIRMultiFactorResolver; // inherited from NSObject

	readonly auth: FIRAuth;

	readonly hints: NSArray<FIRMultiFactorInfo>;

	readonly session: FIRMultiFactorSession;

	resolveSignInWithAssertionCompletion(assertion: FIRMultiFactorAssertion, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;
}

declare class FIRMultiFactorSession extends NSObject {

	static alloc(): FIRMultiFactorSession; // inherited from NSObject

	static new(): FIRMultiFactorSession; // inherited from NSObject
}

declare class FIROAuthCredential extends FIRAuthCredential implements NSSecureCoding {

	static alloc(): FIROAuthCredential; // inherited from NSObject

	static new(): FIROAuthCredential; // inherited from NSObject

	readonly IDToken: string;

	readonly accessToken: string;

	readonly secret: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class FIROAuthProvider extends NSObject implements FIRFederatedAuthProvider {

	static alloc(): FIROAuthProvider; // inherited from NSObject

	static credentialWithProviderIDAccessToken(providerID: string, accessToken: string): FIROAuthCredential;

	static credentialWithProviderIDIDTokenAccessToken(providerID: string, IDToken: string, accessToken: string): FIROAuthCredential;

	static credentialWithProviderIDIDTokenRawNonce(providerID: string, IDToken: string, rawNonce: string): FIROAuthCredential;

	static credentialWithProviderIDIDTokenRawNonceAccessToken(providerID: string, IDToken: string, rawNonce: string, accessToken: string): FIROAuthCredential;

	static new(): FIROAuthProvider; // inherited from NSObject

	static providerWithProviderID(providerID: string): FIROAuthProvider;

	static providerWithProviderIDAuth(providerID: string, auth: FIRAuth): FIROAuthProvider;

	customParameters: NSDictionary<string, string>;

	readonly providerID: string;

	scopes: NSArray<string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCredentialWithUIDelegateCompletion(UIDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthCredential, p2: NSError) => void): void;

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

declare class FIRPhoneAuthCredential extends FIRAuthCredential implements NSSecureCoding {

	static alloc(): FIRPhoneAuthCredential; // inherited from NSObject

	static new(): FIRPhoneAuthCredential; // inherited from NSObject

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class FIRPhoneAuthProvider extends NSObject {

	static alloc(): FIRPhoneAuthProvider; // inherited from NSObject

	static new(): FIRPhoneAuthProvider; // inherited from NSObject

	static provider(): FIRPhoneAuthProvider;

	static providerWithAuth(auth: FIRAuth): FIRPhoneAuthProvider;

	credentialWithVerificationIDVerificationCode(verificationID: string, verificationCode: string): FIRPhoneAuthCredential;

	verifyPhoneNumberUIDelegateCompletion(phoneNumber: string, UIDelegate: FIRAuthUIDelegate, completion: (p1: string, p2: NSError) => void): void;

	verifyPhoneNumberUIDelegateMultiFactorSessionCompletion(phoneNumber: string, UIDelegate: FIRAuthUIDelegate, session: FIRMultiFactorSession, completion: (p1: string, p2: NSError) => void): void;

	verifyPhoneNumberWithMultiFactorInfoUIDelegateMultiFactorSessionCompletion(phoneMultiFactorInfo: FIRPhoneMultiFactorInfo, UIDelegate: FIRAuthUIDelegate, session: FIRMultiFactorSession, completion: (p1: string, p2: NSError) => void): void;
}

declare var FIRPhoneAuthProviderID: string;

declare var FIRPhoneAuthSignInMethod: string;

declare class FIRPhoneMultiFactorAssertion extends FIRMultiFactorAssertion {

	static alloc(): FIRPhoneMultiFactorAssertion; // inherited from NSObject

	static new(): FIRPhoneMultiFactorAssertion; // inherited from NSObject
}

declare class FIRPhoneMultiFactorGenerator extends NSObject {

	static alloc(): FIRPhoneMultiFactorGenerator; // inherited from NSObject

	static assertionWithCredential(phoneAuthCredential: FIRPhoneAuthCredential): FIRPhoneMultiFactorAssertion;

	static new(): FIRPhoneMultiFactorGenerator; // inherited from NSObject
}

declare var FIRPhoneMultiFactorID: string;

declare class FIRPhoneMultiFactorInfo extends FIRMultiFactorInfo {

	static alloc(): FIRPhoneMultiFactorInfo; // inherited from NSObject

	static new(): FIRPhoneMultiFactorInfo; // inherited from NSObject

	readonly phoneNumber: string;
}

declare class FIRTwitterAuthProvider extends NSObject {

	static alloc(): FIRTwitterAuthProvider; // inherited from NSObject

	static credentialWithTokenSecret(token: string, secret: string): FIRAuthCredential;

	static new(): FIRTwitterAuthProvider; // inherited from NSObject
}

declare var FIRTwitterAuthProviderID: string;

declare var FIRTwitterAuthSignInMethod: string;

declare class FIRUser extends NSObject implements FIRUserInfo {

	static alloc(): FIRUser; // inherited from NSObject

	static new(): FIRUser; // inherited from NSObject

	readonly anonymous: boolean;

	readonly emailVerified: boolean;

	readonly metadata: FIRUserMetadata;

	readonly multiFactor: FIRMultiFactor;

	readonly providerData: NSArray<FIRUserInfo>;

	readonly refreshToken: string;

	readonly tenantID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly displayName: string; // inherited from FIRUserInfo

	readonly email: string; // inherited from FIRUserInfo

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly phoneNumber: string; // inherited from FIRUserInfo

	readonly photoURL: NSURL; // inherited from FIRUserInfo

	readonly providerID: string; // inherited from FIRUserInfo

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly uid: string; // inherited from FIRUserInfo

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteWithCompletion(completion: (p1: NSError) => void): void;

	getIDTokenForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: string, p2: NSError) => void): void;

	getIDTokenResultForcingRefreshCompletion(forceRefresh: boolean, completion: (p1: FIRAuthTokenResult, p2: NSError) => void): void;

	getIDTokenResultWithCompletion(completion: (p1: FIRAuthTokenResult, p2: NSError) => void): void;

	getIDTokenWithCompletion(completion: (p1: string, p2: NSError) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	linkAndRetrieveDataWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	linkWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	linkWithProviderUIDelegateCompletion(provider: FIRFederatedAuthProvider, UIDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	profileChangeRequest(): FIRUserProfileChangeRequest;

	reauthenticateAndRetrieveDataWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	reauthenticateWithCredentialCompletion(credential: FIRAuthCredential, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

	reauthenticateWithProviderUIDelegateCompletion(provider: FIRFederatedAuthProvider, UIDelegate: FIRAuthUIDelegate, completion: (p1: FIRAuthDataResult, p2: NSError) => void): void;

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

	updatePhoneNumberCredentialCompletion(phoneNumberCredential: FIRPhoneAuthCredential, completion: (p1: NSError) => void): void;
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

declare class FIRUserMetadata extends NSObject {

	static alloc(): FIRUserMetadata; // inherited from NSObject

	static new(): FIRUserMetadata; // inherited from NSObject

	readonly creationDate: Date;

	readonly lastSignInDate: Date;
}

declare class FIRUserProfileChangeRequest extends NSObject {

	static alloc(): FIRUserProfileChangeRequest; // inherited from NSObject

	static new(): FIRUserProfileChangeRequest; // inherited from NSObject

	displayName: string;

	photoURL: NSURL;

	commitChangesWithCompletion(completion: (p1: NSError) => void): void;
}

declare var FirebaseAuthVersionNum: number;

declare var FirebaseAuthVersionNumber: number;

declare var FirebaseAuthVersionStr: string;

declare var FirebaseAuthVersionString: interop.Reference<number>;
