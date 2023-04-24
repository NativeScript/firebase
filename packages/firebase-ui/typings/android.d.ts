declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class AuthMethodPickerLayout {
					public static class: java.lang.Class<com.firebase.ui.auth.AuthMethodPickerLayout>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.firebase.ui.auth.AuthMethodPickerLayout>;
					public getMainLayout(): number;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getProvidersButton(): java.util.Map<string, java.lang.Integer>;
					public getTosPpView(): number;
				}
				export module AuthMethodPickerLayout {
					export class Builder {
						public static class: java.lang.Class<com.firebase.ui.auth.AuthMethodPickerLayout.Builder>;
						public setMicrosoftButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setGithubButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public build(): com.firebase.ui.auth.AuthMethodPickerLayout;
						public setPhoneButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setTosAndPrivacyPolicyId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setAnonymousButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setFacebookButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public constructor(param0: number);
						public setGoogleButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setAppleButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setEmailButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setTwitterButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
						public setYahooButtonId(param0: number): com.firebase.ui.auth.AuthMethodPickerLayout.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class AuthUI {
					public static class: java.lang.Class<com.firebase.ui.auth.AuthUI>;
					public static TAG: string;
					public static ANONYMOUS_PROVIDER: string;
					public static EMAIL_LINK_PROVIDER: string;
					public static MICROSOFT_PROVIDER: string;
					public static YAHOO_PROVIDER: string;
					public static APPLE_PROVIDER: string;
					public static NO_LOGO: number;
					public static SUPPORTED_PROVIDERS: java.util.Set<string>;
					public static SUPPORTED_OAUTH_PROVIDERS: java.util.Set<string>;
					public static SOCIAL_PROVIDERS: java.util.Set<string>;
					public static UNCONFIGURED_CONFIG_VALUE: string;
					public static getApplicationContext(): globalAndroid.content.Context;
					public static getInstance(): com.firebase.ui.auth.AuthUI;
					public silentSignIn(param0: globalAndroid.content.Context, param1: java.util.List<com.firebase.ui.auth.AuthUI.IdpConfig>): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
					public getAuth(): com.google.firebase.auth.FirebaseAuth;
					public createSignInIntentBuilder(): com.firebase.ui.auth.AuthUI.SignInIntentBuilder;
					public useEmulator(param0: string, param1: number): void;
					public getEmulatorHost(): string;
					public static getInstance(param0: string): com.firebase.ui.auth.AuthUI;
					public getApp(): com.google.firebase.FirebaseApp;
					public delete(param0: globalAndroid.content.Context): com.google.android.gms.tasks.Task<java.lang.Void>;
					public signOut(param0: globalAndroid.content.Context): com.google.android.gms.tasks.Task<java.lang.Void>;
					public static canHandleIntent(param0: globalAndroid.content.Intent): boolean;
					public static getDefaultTheme(): number;
					public getEmulatorPort(): number;
					public static setApplicationContext(param0: globalAndroid.content.Context): void;
					public isUseEmulator(): boolean;
					public static getInstance(param0: com.google.firebase.FirebaseApp): com.firebase.ui.auth.AuthUI;
				}
				export module AuthUI {
					export abstract class AuthIntentBuilder<T> extends java.lang.Object {
						public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.AuthIntentBuilder<any>>;
						public setIsSmartLockEnabled(param0: boolean): T;
						public setAvailableProviders(param0: java.util.List<com.firebase.ui.auth.AuthUI.IdpConfig>): T;
						public setLogo(param0: number): T;
						public setDefaultProvider(param0: com.firebase.ui.auth.AuthUI.IdpConfig): T;
						public setAuthMethodPickerLayout(param0: com.firebase.ui.auth.AuthMethodPickerLayout): T;
						public setResetPasswordSettings(param0: com.google.firebase.auth.ActionCodeSettings): T;
						/** @deprecated */
						public setTosUrl(param0: string): T;
						public build(): globalAndroid.content.Intent;
						public setTheme(param0: number): T;
						public setAlwaysShowSignInMethodScreen(param0: boolean): T;
						/** @deprecated */
						public setPrivacyPolicyUrl(param0: string): T;
						public setTosAndPrivacyPolicyUrls(param0: string, param1: string): T;
						public setIsSmartLockEnabled(param0: boolean, param1: boolean): T;
						public setLockOrientation(param0: boolean): T;
						public getFlowParams(): com.firebase.ui.auth.data.model.FlowParameters;
					}
					export class IdpConfig {
						public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.firebase.ui.auth.AuthUI.IdpConfig>;
						public describeContents(): number;
						public getProviderId(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getParams(): globalAndroid.os.Bundle;
						public toString(): string;
					}
					export module IdpConfig {
						export class AnonymousBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.AnonymousBuilder>;
							public constructor();
							public constructor(param0: string);
						}
						export class AppleBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.AppleBuilder>;
							public constructor();
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: string);
						}
						export class Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.Builder>;
							public constructor(param0: string);
							public getParams(): globalAndroid.os.Bundle;
							public setProviderId(param0: string): void;
							public build(): com.firebase.ui.auth.AuthUI.IdpConfig;
						}
						export class EmailBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder>;
							public constructor();
							public setActionCodeSettings(param0: com.google.firebase.auth.ActionCodeSettings): com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
							public setDefaultEmail(param0: string): com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
							public constructor(param0: string);
							public enableEmailLinkSignIn(): com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
							public setRequireName(param0: boolean): com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
							public setAllowNewAccounts(param0: boolean): com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
							public setForceSameDevice(): com.firebase.ui.auth.AuthUI.IdpConfig.EmailBuilder;
							public build(): com.firebase.ui.auth.AuthUI.IdpConfig;
						}
						export class FacebookBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.FacebookBuilder>;
							public constructor();
							public constructor(param0: string);
							public setPermissions(param0: java.util.List<string>): com.firebase.ui.auth.AuthUI.IdpConfig.FacebookBuilder;
						}
						export class GenericOAuthProviderBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder>;
							public constructor(param0: string, param1: string, param2: number);
							public setCustomParameters(param0: java.util.Map<string, string>): com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder;
							public constructor(param0: string);
							public setScopes(param0: java.util.List<string>): com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder;
						}
						export class GitHubBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.GitHubBuilder>;
							public constructor();
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: string);
							/** @deprecated */
							public setPermissions(param0: java.util.List<string>): com.firebase.ui.auth.AuthUI.IdpConfig.GitHubBuilder;
						}
						export class GoogleBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.GoogleBuilder>;
							public constructor();
							public setSignInOptions(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions): com.firebase.ui.auth.AuthUI.IdpConfig.GoogleBuilder;
							public constructor(param0: string);
							public setScopes(param0: java.util.List<string>): com.firebase.ui.auth.AuthUI.IdpConfig.GoogleBuilder;
							public build(): com.firebase.ui.auth.AuthUI.IdpConfig;
						}
						export class MicrosoftBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.MicrosoftBuilder>;
							public constructor();
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: string);
						}
						export class PhoneBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.Builder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder>;
							public constructor();
							public setWhitelistedCountries(param0: java.util.List<string>): com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder;
							public constructor(param0: string);
							public setDefaultCountryIso(param0: string): com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder;
							public setBlacklistedCountries(param0: java.util.List<string>): com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder;
							public setDefaultNumber(param0: string): com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder;
							public setDefaultNumber(param0: string, param1: string): com.firebase.ui.auth.AuthUI.IdpConfig.PhoneBuilder;
							public build(): com.firebase.ui.auth.AuthUI.IdpConfig;
						}
						export class TwitterBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.TwitterBuilder>;
							public constructor();
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: string);
						}
						export class YahooBuilder extends com.firebase.ui.auth.AuthUI.IdpConfig.GenericOAuthProviderBuilder {
							public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.IdpConfig.YahooBuilder>;
							public constructor();
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: string);
						}
					}
					export class SignInIntentBuilder extends com.firebase.ui.auth.AuthUI.AuthIntentBuilder<com.firebase.ui.auth.AuthUI.SignInIntentBuilder> {
						public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.SignInIntentBuilder>;
						public setEmailLink(param0: string): com.firebase.ui.auth.AuthUI.SignInIntentBuilder;
						public enableAnonymousUsersAutoUpgrade(): com.firebase.ui.auth.AuthUI.SignInIntentBuilder;
						public getFlowParams(): com.firebase.ui.auth.data.model.FlowParameters;
					}
					export class SupportedProvider {
						public static class: java.lang.Class<com.firebase.ui.auth.AuthUI.SupportedProvider>;
						/**
						 * Constructs a new instance of the com.firebase.ui.auth.AuthUI$SupportedProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class BuildConfig {
					public static class: java.lang.Class<com.firebase.ui.auth.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class ErrorCodes {
					public static class: java.lang.Class<com.firebase.ui.auth.ErrorCodes>;
					public static UNKNOWN_ERROR: number;
					public static NO_NETWORK: number;
					public static PLAY_SERVICES_UPDATE_CANCELLED: number;
					public static DEVELOPER_ERROR: number;
					public static PROVIDER_ERROR: number;
					public static ANONYMOUS_UPGRADE_MERGE_CONFLICT: number;
					public static EMAIL_MISMATCH_ERROR: number;
					public static INVALID_EMAIL_LINK_ERROR: number;
					public static EMAIL_LINK_WRONG_DEVICE_ERROR: number;
					public static EMAIL_LINK_PROMPT_FOR_EMAIL_ERROR: number;
					public static EMAIL_LINK_CROSS_DEVICE_LINKING_ERROR: number;
					public static EMAIL_LINK_DIFFERENT_ANONYMOUS_USER_ERROR: number;
					public static ERROR_USER_DISABLED: number;
					public static ERROR_GENERIC_IDP_RECOVERABLE_ERROR: number;
					public static toFriendlyMessage(param0: number): string;
				}
				export module ErrorCodes {
					export class Code {
						public static class: java.lang.Class<com.firebase.ui.auth.ErrorCodes.Code>;
						/**
						 * Constructs a new instance of the com.firebase.ui.auth.ErrorCodes$Code interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class FirebaseAuthAnonymousUpgradeException {
					public static class: java.lang.Class<com.firebase.ui.auth.FirebaseAuthAnonymousUpgradeException>;
					public constructor(param0: number, param1: com.firebase.ui.auth.IdpResponse);
					public getResponse(): com.firebase.ui.auth.IdpResponse;
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class FirebaseAuthUIActivityResultContract extends androidx.activity.result.contract.ActivityResultContract<globalAndroid.content.Intent, com.firebase.ui.auth.data.model.FirebaseAuthUIAuthenticationResult> {
					public static class: java.lang.Class<com.firebase.ui.auth.FirebaseAuthUIActivityResultContract>;
					public parseResult(param0: number, param1: globalAndroid.content.Intent): com.firebase.ui.auth.data.model.FirebaseAuthUIAuthenticationResult;
					public constructor();
					public createIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class FirebaseUiException {
					public static class: java.lang.Class<com.firebase.ui.auth.FirebaseUiException>;
					public constructor(param0: number, param1: string, param2: java.lang.Throwable);
					public constructor(param0: number, param1: java.lang.Throwable);
					public getErrorCode(): number;
					public constructor(param0: number, param1: string);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class FirebaseUiUserCollisionException {
					public static class: java.lang.Class<com.firebase.ui.auth.FirebaseUiUserCollisionException>;
					public getCredential(): com.google.firebase.auth.AuthCredential;
					public getProviderId(): string;
					public getErrorCode(): number;
					public constructor(param0: number, param1: string, param2: string, param3: string, param4: com.google.firebase.auth.AuthCredential);
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class IdpResponse {
					public static class: java.lang.Class<com.firebase.ui.auth.IdpResponse>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.firebase.ui.auth.IdpResponse>;
					public static from(param0: java.lang.Exception): com.firebase.ui.auth.IdpResponse;
					public toIntent(): globalAndroid.content.Intent;
					public getUser(): com.firebase.ui.auth.data.model.User;
					public describeContents(): number;
					public static fromResultIntent(param0: globalAndroid.content.Intent): com.firebase.ui.auth.IdpResponse;
					public isRecoverableErrorResponse(): boolean;
					public equals(param0: any): boolean;
					public getProviderType(): string;
					public getIdpSecret(): string;
					public toString(): string;
					public getError(): com.firebase.ui.auth.FirebaseUiException;
					public withResult(param0: com.google.firebase.auth.AuthResult): com.firebase.ui.auth.IdpResponse;
					public isSuccessful(): boolean;
					public getPhoneNumber(): string;
					public mutate(): com.firebase.ui.auth.IdpResponse.Builder;
					public getIdpToken(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public static getErrorIntent(param0: java.lang.Exception): globalAndroid.content.Intent;
					public hashCode(): number;
					public isNewUser(): boolean;
					public getCredentialForLinking(): com.google.firebase.auth.AuthCredential;
					public getEmail(): string;
					public hasCredentialForLinking(): boolean;
				}
				export module IdpResponse {
					export class Builder {
						public static class: java.lang.Class<com.firebase.ui.auth.IdpResponse.Builder>;
						public build(): com.firebase.ui.auth.IdpResponse;
						public setSecret(param0: string): com.firebase.ui.auth.IdpResponse.Builder;
						public constructor();
						public setPendingCredential(param0: com.google.firebase.auth.AuthCredential): com.firebase.ui.auth.IdpResponse.Builder;
						public constructor(param0: com.firebase.ui.auth.data.model.User);
						public constructor(param0: com.firebase.ui.auth.IdpResponse);
						public setToken(param0: string): com.firebase.ui.auth.IdpResponse.Builder;
						public setNewUser(param0: boolean): com.firebase.ui.auth.IdpResponse.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export class KickoffActivity extends com.firebase.ui.auth.ui.InvisibleActivityBase {
					public static class: java.lang.Class<com.firebase.ui.auth.KickoffActivity>;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public showProgress(param0: number): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters): globalAndroid.content.Intent;
					public invalidateEmailLink(): void;
					public hideProgress(): void;
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module client {
						export class AuthUiInitProvider {
							public static class: java.lang.Class<com.firebase.ui.auth.data.client.AuthUiInitProvider>;
							public constructor();
							public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
							public getType(param0: globalAndroid.net.Uri): string;
							public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
							public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
							public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
							public onCreate(): boolean;
							public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class CountryInfo extends java.lang.Object {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.CountryInfo>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.firebase.ui.auth.data.model.CountryInfo>;
							public constructor(param0: java.util.Locale, param1: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public getCountryCode(): number;
							public toString(): string;
							public compareTo(param0: com.firebase.ui.auth.data.model.CountryInfo): number;
							public static localeToEmoji(param0: java.util.Locale): string;
							public getLocale(): java.util.Locale;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class FirebaseAuthUIAuthenticationResult {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.FirebaseAuthUIAuthenticationResult>;
							public getIdpResponse(): com.firebase.ui.auth.IdpResponse;
							public hashCode(): number;
							public getResultCode(): java.lang.Integer;
							public toString(): string;
							public constructor(param0: java.lang.Integer, param1: com.firebase.ui.auth.IdpResponse);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class FlowParameters {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.FlowParameters>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.firebase.ui.auth.data.model.FlowParameters>;
							public appName: string;
							public providers: java.util.List<com.firebase.ui.auth.AuthUI.IdpConfig>;
							public defaultProvider: com.firebase.ui.auth.AuthUI.IdpConfig;
							public themeId: number;
							public logoId: number;
							public termsOfServiceUrl: string;
							public privacyPolicyUrl: string;
							public emailLink: string;
							public passwordResetSettings: com.google.firebase.auth.ActionCodeSettings;
							public enableCredentials: boolean;
							public enableHints: boolean;
							public enableAnonymousUpgrade: boolean;
							public alwaysShowProviderChoice: boolean;
							public lockOrientation: boolean;
							public authMethodPickerLayout: com.firebase.ui.auth.AuthMethodPickerLayout;
							public isProviderEnabled(param0: string): boolean;
							public shouldShowProviderChoice(): boolean;
							public isSingleProviderFlow(): boolean;
							public isPlayServicesRequired(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public isAnonymousUpgradeEnabled(): boolean;
							public getDefaultOrFirstProvider(): com.firebase.ui.auth.AuthUI.IdpConfig;
							public describeContents(): number;
							public constructor(param0: string, param1: java.util.List<com.firebase.ui.auth.AuthUI.IdpConfig>, param2: com.firebase.ui.auth.AuthUI.IdpConfig, param3: number, param4: number, param5: string, param6: string, param7: boolean, param8: boolean, param9: boolean, param10: boolean, param11: boolean, param12: string, param13: com.google.firebase.auth.ActionCodeSettings, param14: com.firebase.ui.auth.AuthMethodPickerLayout);
							public isTermsOfServiceUrlProvided(): boolean;
							public static fromIntent(param0: globalAndroid.content.Intent): com.firebase.ui.auth.data.model.FlowParameters;
							public isPrivacyPolicyUrlProvided(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class IntentRequiredException extends com.firebase.ui.auth.FirebaseUiException {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.IntentRequiredException>;
							public constructor(param0: number, param1: java.lang.Throwable);
							public constructor(param0: number, param1: string, param2: java.lang.Throwable);
							public constructor(param0: globalAndroid.content.Intent, param1: number);
							public getIntent(): globalAndroid.content.Intent;
							public getRequestCode(): number;
							public constructor(param0: number);
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class PendingIntentRequiredException extends com.firebase.ui.auth.FirebaseUiException {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.PendingIntentRequiredException>;
							public constructor(param0: number, param1: java.lang.Throwable);
							public constructor(param0: number, param1: string, param2: java.lang.Throwable);
							public constructor(param0: globalAndroid.app.PendingIntent, param1: number);
							public getPendingIntent(): globalAndroid.app.PendingIntent;
							public getRequestCode(): number;
							public constructor(param0: number);
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class PhoneNumber {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.PhoneNumber>;
							public static isValid(param0: com.firebase.ui.auth.data.model.PhoneNumber): boolean;
							public getCountryCode(): string;
							public getPhoneNumber(): string;
							public constructor(param0: string, param1: string, param2: string);
							public static isCountryValid(param0: com.firebase.ui.auth.data.model.PhoneNumber): boolean;
							public static emptyPhone(): com.firebase.ui.auth.data.model.PhoneNumber;
							public getCountryIso(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class PhoneNumberVerificationRequiredException extends com.firebase.ui.auth.FirebaseUiException {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.PhoneNumberVerificationRequiredException>;
							public constructor(param0: number, param1: java.lang.Throwable);
							public constructor(param0: number, param1: string, param2: java.lang.Throwable);
							public constructor(param0: string);
							public getPhoneNumber(): string;
							public constructor(param0: number);
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class Resource<T> extends java.lang.Object {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.Resource<any>>;
							public static forFailure(param0: java.lang.Exception): com.firebase.ui.auth.data.model.Resource<any>;
							public getValue(): T;
							public hashCode(): number;
							public static forSuccess(param0: any): com.firebase.ui.auth.data.model.Resource<any>;
							public static forLoading(): com.firebase.ui.auth.data.model.Resource<any>;
							public getState(): com.firebase.ui.auth.data.model.State;
							public toString(): string;
							public equals(param0: any): boolean;
							public getException(): java.lang.Exception;
							public isUsed(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class State {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.State>;
							public static SUCCESS: com.firebase.ui.auth.data.model.State;
							public static FAILURE: com.firebase.ui.auth.data.model.State;
							public static LOADING: com.firebase.ui.auth.data.model.State;
							public static valueOf(param0: string): com.firebase.ui.auth.data.model.State;
							public static values(): androidNative.Array<com.firebase.ui.auth.data.model.State>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class User {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.User>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.firebase.ui.auth.data.model.User>;
							public getPhotoUri(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getEmail(): string;
							public getName(): string;
							public describeContents(): number;
							public getProviderId(): string;
							public getPhoneNumber(): string;
							public static getUser(param0: globalAndroid.os.Bundle): com.firebase.ui.auth.data.model.User;
							public toString(): string;
							public equals(param0: any): boolean;
							public static getUser(param0: globalAndroid.content.Intent): com.firebase.ui.auth.data.model.User;
						}
						export module User {
							export class Builder {
								public static class: java.lang.Class<com.firebase.ui.auth.data.model.User.Builder>;
								public constructor(param0: string, param1: string);
								public setName(param0: string): com.firebase.ui.auth.data.model.User.Builder;
								public setPhoneNumber(param0: string): com.firebase.ui.auth.data.model.User.Builder;
								public setPhotoUri(param0: globalAndroid.net.Uri): com.firebase.ui.auth.data.model.User.Builder;
								public build(): com.firebase.ui.auth.data.model.User;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module model {
						export class UserCancellationException extends com.firebase.ui.auth.FirebaseUiException {
							public static class: java.lang.Class<com.firebase.ui.auth.data.model.UserCancellationException>;
							public constructor();
							public constructor(param0: number, param1: java.lang.Throwable);
							public constructor(param0: number, param1: string, param2: java.lang.Throwable);
							public constructor(param0: number);
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class AnonymousSignInHandler extends com.firebase.ui.auth.data.remote.SingleProviderSignInHandler<com.firebase.ui.auth.data.model.FlowParameters> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.AnonymousSignInHandler>;
							public mAuth: com.google.firebase.auth.FirebaseAuth;
							public onCreate(): void;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
							public constructor(param0: globalAndroid.app.Application, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class EmailSignInHandler extends com.firebase.ui.auth.data.remote.SingleProviderSignInHandler<java.lang.Void> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.EmailSignInHandler>;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
							public constructor(param0: globalAndroid.app.Application, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class FacebookSignInHandler extends com.firebase.ui.auth.data.remote.SingleProviderSignInHandler<com.firebase.ui.auth.AuthUI.IdpConfig> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.FacebookSignInHandler>;
							public onCreate(): void;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCleared(): void;
							public constructor(param0: globalAndroid.app.Application);
							public constructor(param0: globalAndroid.app.Application, param1: string);
						}
						export module FacebookSignInHandler {
							export class Callback extends com.facebook.FacebookCallback<com.facebook.login.LoginResult> {
								public static class: java.lang.Class<com.firebase.ui.auth.data.remote.FacebookSignInHandler.Callback>;
								public onSuccess(param0: com.facebook.login.LoginResult): void;
								public onError(param0: com.facebook.FacebookException): void;
								public onCancel(): void;
							}
							export class ProfileRequest {
								public static class: java.lang.Class<com.firebase.ui.auth.data.remote.FacebookSignInHandler.ProfileRequest>;
								public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
								public constructor(param0: com.firebase.ui.auth.data.remote.FacebookSignInHandler, param1: com.facebook.login.LoginResult);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class GenericIdpAnonymousUpgradeLinkingHandler extends com.firebase.ui.auth.data.remote.GenericIdpSignInHandler {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.GenericIdpAnonymousUpgradeLinkingHandler>;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public constructor(param0: globalAndroid.app.Application);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class GenericIdpSignInHandler extends com.firebase.ui.auth.viewmodel.ProviderSignInBase<com.firebase.ui.auth.AuthUI.IdpConfig> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.GenericIdpSignInHandler>;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public buildOAuthProvider(param0: string, param1: com.google.firebase.auth.FirebaseAuth): com.google.firebase.auth.OAuthProvider;
							public handleSuccess(param0: boolean, param1: string, param2: com.google.firebase.auth.FirebaseUser, param3: com.google.firebase.auth.OAuthCredential, param4: boolean, param5: boolean): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public static getGenericGoogleConfig(): com.firebase.ui.auth.AuthUI.IdpConfig;
							public constructor(param0: globalAndroid.app.Application);
							public handleSuccess(param0: boolean, param1: string, param2: com.google.firebase.auth.FirebaseUser, param3: com.google.firebase.auth.OAuthCredential, param4: boolean): void;
							public handleNormalSignInFlow(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: com.google.firebase.auth.OAuthProvider): void;
							public handleMergeFailure(param0: com.google.firebase.auth.AuthCredential): void;
							public static getGenericFacebookConfig(): com.firebase.ui.auth.AuthUI.IdpConfig;
							public initializeForTesting(param0: com.firebase.ui.auth.AuthUI.IdpConfig): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class GoogleSignInHandler extends com.firebase.ui.auth.data.remote.SingleProviderSignInHandler<com.firebase.ui.auth.data.remote.GoogleSignInHandler.Params> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.GoogleSignInHandler>;
							public onCreate(): void;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
							public constructor(param0: globalAndroid.app.Application, param1: string);
						}
						export module GoogleSignInHandler {
							export class Params {
								public static class: java.lang.Class<com.firebase.ui.auth.data.remote.GoogleSignInHandler.Params>;
								public constructor(param0: com.firebase.ui.auth.AuthUI.IdpConfig);
								public constructor(param0: com.firebase.ui.auth.AuthUI.IdpConfig, param1: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class PhoneSignInHandler extends com.firebase.ui.auth.data.remote.SingleProviderSignInHandler<com.firebase.ui.auth.AuthUI.IdpConfig> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.PhoneSignInHandler>;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
							public constructor(param0: globalAndroid.app.Application, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class ProfileMerger extends com.google.android.gms.tasks.Continuation<com.google.firebase.auth.AuthResult, com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.ProfileMerger>;
							public then(param0: com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
							public constructor(param0: com.firebase.ui.auth.IdpResponse);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export class SignInKickstarter extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.SignInKickstarter>;
							public start(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module data {
					export module remote {
						export abstract class SingleProviderSignInHandler<T> extends com.firebase.ui.auth.viewmodel.ProviderSignInBase<any> {
							public static class: java.lang.Class<com.firebase.ui.auth.data.remote.SingleProviderSignInHandler<any>>;
							public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
							public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
							public constructor(param0: globalAndroid.app.Application);
							public constructor(param0: globalAndroid.app.Application, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export abstract class AppCompatBase extends com.firebase.ui.auth.ui.HelperActivityBase {
						public static class: java.lang.Class<com.firebase.ui.auth.ui.AppCompatBase>;
						public constructor();
						public switchFragment(param0: androidx.fragment.app.Fragment, param1: number, param2: string, param3: boolean, param4: boolean): void;
						public hideProgress(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public showProgress(param0: number): void;
						public switchFragment(param0: androidx.fragment.app.Fragment, param1: number, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export abstract class FragmentBase implements com.firebase.ui.auth.ui.ProgressView {
						public static class: java.lang.Class<com.firebase.ui.auth.ui.FragmentBase>;
						public constructor();
						public startSaveCredentials(param0: com.google.firebase.auth.FirebaseUser, param1: com.firebase.ui.auth.IdpResponse, param2: string): void;
						public hideProgress(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public showProgress(param0: number): void;
						public getFlowParams(): com.firebase.ui.auth.data.model.FlowParameters;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export abstract class HelperActivityBase implements com.firebase.ui.auth.ui.ProgressView {
						public static class: java.lang.Class<com.firebase.ui.auth.ui.HelperActivityBase>;
						public constructor();
						public startSaveCredentials(param0: com.google.firebase.auth.FirebaseUser, param1: com.firebase.ui.auth.IdpResponse, param2: string): void;
						public finish(param0: number, param1: globalAndroid.content.Intent): void;
						public hideProgress(): void;
						public showProgress(param0: number): void;
						public getAuthUI(): com.firebase.ui.auth.AuthUI;
						public getAuth(): com.google.firebase.auth.FirebaseAuth;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public static createBaseIntent(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: com.firebase.ui.auth.data.model.FlowParameters): globalAndroid.content.Intent;
						public isOffline(): boolean;
						public getFlowParams(): com.firebase.ui.auth.data.model.FlowParameters;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export class InvisibleActivityBase extends com.firebase.ui.auth.ui.HelperActivityBase {
						public static class: java.lang.Class<com.firebase.ui.auth.ui.InvisibleActivityBase>;
						public constructor();
						public hideProgress(): void;
						public finish(param0: number, param1: globalAndroid.content.Intent): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public showProgress(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export class InvisibleFragmentBase extends com.firebase.ui.auth.ui.FragmentBase {
						public static class: java.lang.Class<com.firebase.ui.auth.ui.InvisibleFragmentBase>;
						public mFrameLayout: globalAndroid.widget.FrameLayout;
						public mTopLevelView: globalAndroid.view.View;
						public constructor();
						public doAfterTimeout(param0: java.lang.Runnable): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public hideProgress(): void;
						public showProgress(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export class ProgressView {
						public static class: java.lang.Class<com.firebase.ui.auth.ui.ProgressView>;
						/**
						 * Constructs a new instance of the com.firebase.ui.auth.ui.ProgressView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { showProgress(param0: number): void; hideProgress(): void });
						public constructor();
						public hideProgress(): void;
						public showProgress(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module credentials {
						export class CredentialSaveActivity extends com.firebase.ui.auth.ui.InvisibleActivityBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.credentials.CredentialSaveActivity>;
							public constructor();
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.google.android.gms.auth.api.credentials.Credential, param3: com.firebase.ui.auth.IdpResponse): globalAndroid.content.Intent;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class CheckEmailFragment extends com.firebase.ui.auth.ui.FragmentBase implements com.firebase.ui.auth.util.ui.ImeHelper.DonePressedListener {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.CheckEmailFragment>;
							public static TAG: string;
							public constructor();
							public onDonePressed(): void;
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public static newInstance(param0: string): com.firebase.ui.auth.ui.email.CheckEmailFragment;
							public hideProgress(): void;
						}
						export module CheckEmailFragment {
							export class CheckEmailListener {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.email.CheckEmailFragment.CheckEmailListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.ui.email.CheckEmailFragment$CheckEmailListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onExistingEmailUser(param0: com.firebase.ui.auth.data.model.User): void; onExistingIdpUser(param0: com.firebase.ui.auth.data.model.User): void; onNewUser(param0: com.firebase.ui.auth.data.model.User): void; onDeveloperFailure(param0: java.lang.Exception): void });
								public constructor();
								public onExistingIdpUser(param0: com.firebase.ui.auth.data.model.User): void;
								public onExistingEmailUser(param0: com.firebase.ui.auth.data.model.User): void;
								public onNewUser(param0: com.firebase.ui.auth.data.model.User): void;
								public onDeveloperFailure(param0: java.lang.Exception): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class CheckEmailHandler extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<com.firebase.ui.auth.data.model.User> {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.CheckEmailHandler>;
							public fetchProvider(param0: string): void;
							public fetchCredential(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class EmailActivity extends com.firebase.ui.auth.ui.AppCompatBase implements com.firebase.ui.auth.ui.email.CheckEmailFragment.CheckEmailListener, com.firebase.ui.auth.ui.email.RegisterEmailFragment.AnonymousUpgradeListener, com.firebase.ui.auth.ui.email.EmailLinkFragment.TroubleSigningInListener, com.firebase.ui.auth.ui.email.TroubleSigningInFragment.ResendEmailListener {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailActivity>;
							public constructor();
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: string): globalAndroid.content.Intent;
							public onSendEmailFailure(param0: java.lang.Exception): void;
							public onMergeFailure(param0: com.firebase.ui.auth.IdpResponse): void;
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onDeveloperFailure(param0: java.lang.Exception): void;
							public onExistingEmailUser(param0: com.firebase.ui.auth.data.model.User): void;
							public onTroubleSigningIn(param0: string): void;
							public onClickResendEmail(param0: string): void;
							public onExistingIdpUser(param0: com.firebase.ui.auth.data.model.User): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters): globalAndroid.content.Intent;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onNewUser(param0: com.firebase.ui.auth.data.model.User): void;
							public static createIntentForLinking(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.firebase.ui.auth.IdpResponse): globalAndroid.content.Intent;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class EmailLinkCatcherActivity extends com.firebase.ui.auth.ui.InvisibleActivityBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkCatcherActivity>;
							public constructor();
							public showProgress(param0: number): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters): globalAndroid.content.Intent;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class EmailLinkCrossDeviceLinkingFragment extends com.firebase.ui.auth.ui.FragmentBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkCrossDeviceLinkingFragment>;
							public static TAG: string;
							public constructor();
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public static newInstance(): com.firebase.ui.auth.ui.email.EmailLinkCrossDeviceLinkingFragment;
							public hideProgress(): void;
						}
						export module EmailLinkCrossDeviceLinkingFragment {
							export class FinishEmailLinkSignInListener {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkCrossDeviceLinkingFragment.FinishEmailLinkSignInListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.ui.email.EmailLinkCrossDeviceLinkingFragment$FinishEmailLinkSignInListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { completeCrossDeviceEmailLinkFlow(): void });
								public constructor();
								public completeCrossDeviceEmailLinkFlow(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class EmailLinkErrorRecoveryActivity extends com.firebase.ui.auth.ui.AppCompatBase implements com.firebase.ui.auth.ui.email.EmailLinkPromptEmailFragment.EmailLinkPromptEmailListener, com.firebase.ui.auth.ui.email.EmailLinkCrossDeviceLinkingFragment.FinishEmailLinkSignInListener {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkErrorRecoveryActivity>;
							public constructor();
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: number): globalAndroid.content.Intent;
							public showProgress(param0: number): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEmailPromptSuccess(param0: com.firebase.ui.auth.IdpResponse): void;
							public completeCrossDeviceEmailLinkFlow(): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class EmailLinkFragment extends com.firebase.ui.auth.ui.InvisibleFragmentBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkFragment>;
							public static TAG: string;
							public constructor();
							public onAttach(param0: globalAndroid.content.Context): void;
							public static newInstance(param0: string, param1: com.google.firebase.auth.ActionCodeSettings): com.firebase.ui.auth.ui.email.EmailLinkFragment;
							public showProgress(param0: number): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public static newInstance(param0: string, param1: com.google.firebase.auth.ActionCodeSettings, param2: com.firebase.ui.auth.IdpResponse, param3: boolean): com.firebase.ui.auth.ui.email.EmailLinkFragment;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
						export module EmailLinkFragment {
							export class TroubleSigningInListener {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkFragment.TroubleSigningInListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.ui.email.EmailLinkFragment$TroubleSigningInListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onTroubleSigningIn(param0: string): void; onSendEmailFailure(param0: java.lang.Exception): void });
								public constructor();
								public onTroubleSigningIn(param0: string): void;
								public onSendEmailFailure(param0: java.lang.Exception): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class EmailLinkPromptEmailFragment extends com.firebase.ui.auth.ui.FragmentBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkPromptEmailFragment>;
							public static TAG: string;
							public constructor();
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public static newInstance(): com.firebase.ui.auth.ui.email.EmailLinkPromptEmailFragment;
							public hideProgress(): void;
						}
						export module EmailLinkPromptEmailFragment {
							export class EmailLinkPromptEmailListener {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.email.EmailLinkPromptEmailFragment.EmailLinkPromptEmailListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.ui.email.EmailLinkPromptEmailFragment$EmailLinkPromptEmailListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onEmailPromptSuccess(param0: com.firebase.ui.auth.IdpResponse): void });
								public constructor();
								public onEmailPromptSuccess(param0: com.firebase.ui.auth.IdpResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class RecoverPasswordActivity extends com.firebase.ui.auth.ui.AppCompatBase implements com.firebase.ui.auth.util.ui.ImeHelper.DonePressedListener {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.RecoverPasswordActivity>;
							public constructor();
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: string): globalAndroid.content.Intent;
							public onDonePressed(): void;
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class RegisterEmailFragment extends com.firebase.ui.auth.ui.FragmentBase implements com.firebase.ui.auth.util.ui.ImeHelper.DonePressedListener {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.RegisterEmailFragment>;
							public static TAG: string;
							public constructor();
							public onDonePressed(): void;
							public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public static newInstance(param0: com.firebase.ui.auth.data.model.User): com.firebase.ui.auth.ui.email.RegisterEmailFragment;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
						export module RegisterEmailFragment {
							export class AnonymousUpgradeListener {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.email.RegisterEmailFragment.AnonymousUpgradeListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.ui.email.RegisterEmailFragment$AnonymousUpgradeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onMergeFailure(param0: com.firebase.ui.auth.IdpResponse): void });
								public constructor();
								public onMergeFailure(param0: com.firebase.ui.auth.IdpResponse): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class TroubleSigningInFragment extends com.firebase.ui.auth.ui.FragmentBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.TroubleSigningInFragment>;
							public static TAG: string;
							public constructor();
							public onAttach(param0: globalAndroid.content.Context): void;
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public static newInstance(param0: string): com.firebase.ui.auth.ui.email.TroubleSigningInFragment;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public hideProgress(): void;
						}
						export module TroubleSigningInFragment {
							export class ResendEmailListener {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.email.TroubleSigningInFragment.ResendEmailListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.ui.email.TroubleSigningInFragment$ResendEmailListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onClickResendEmail(param0: string): void });
								public constructor();
								public onClickResendEmail(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class WelcomeBackEmailLinkPrompt extends com.firebase.ui.auth.ui.AppCompatBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.WelcomeBackEmailLinkPrompt>;
							public constructor();
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.firebase.ui.auth.IdpResponse): globalAndroid.content.Intent;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module email {
						export class WelcomeBackPasswordPrompt extends com.firebase.ui.auth.ui.AppCompatBase implements com.firebase.ui.auth.util.ui.ImeHelper.DonePressedListener {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.email.WelcomeBackPasswordPrompt>;
							public constructor();
							public onDonePressed(): void;
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.firebase.ui.auth.IdpResponse): globalAndroid.content.Intent;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module idp {
						export class AuthMethodPickerActivity extends com.firebase.ui.auth.ui.AppCompatBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.idp.AuthMethodPickerActivity>;
							public constructor();
							public showProgress(param0: number): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters): globalAndroid.content.Intent;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module idp {
						export class SingleSignInActivity extends com.firebase.ui.auth.ui.InvisibleActivityBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.idp.SingleSignInActivity>;
							public constructor();
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.firebase.ui.auth.data.model.User): globalAndroid.content.Intent;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module idp {
						export class WelcomeBackIdpPrompt extends com.firebase.ui.auth.ui.AppCompatBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.idp.WelcomeBackIdpPrompt>;
							public constructor();
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.firebase.ui.auth.data.model.User, param3: com.firebase.ui.auth.IdpResponse): globalAndroid.content.Intent;
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.firebase.ui.auth.data.model.User): globalAndroid.content.Intent;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class CheckPhoneHandler extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<com.firebase.ui.auth.data.model.PhoneNumber> {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.CheckPhoneHandler>;
							public fetchCredential(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class CheckPhoneNumberFragment extends com.firebase.ui.auth.ui.FragmentBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.CheckPhoneNumberFragment>;
							public static TAG: string;
							public constructor();
							public static newInstance(param0: globalAndroid.os.Bundle): com.firebase.ui.auth.ui.phone.CheckPhoneNumberFragment;
							public onClick(param0: globalAndroid.view.View): void;
							public showProgress(param0: number): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class CountryListAdapter extends globalAndroid.widget.ArrayAdapter<com.firebase.ui.auth.data.model.CountryInfo> implements globalAndroid.widget.SectionIndexer {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.CountryListAdapter>;
							public getSectionForPosition(param0: number): number;
							public getSections(): androidNative.Array<any>;
							public getPositionForSection(param0: number): number;
							public getCount(): number;
							public setData(param0: java.util.List<com.firebase.ui.auth.data.model.CountryInfo>): void;
							public constructor(param0: globalAndroid.content.Context);
							public getPositionForCountry(param0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class CountryListSpinner {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.CountryListSpinner>;
							public setSelectedForCountry(param0: java.util.Locale, param1: string): void;
							public setSelectedForCountry(param0: number, param1: java.util.Locale): void;
							public onDetachedFromWindow(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							public onClick(param0: globalAndroid.view.View): void;
							public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
							public getSelectedCountryInfo(): com.firebase.ui.auth.data.model.CountryInfo;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public isValidIso(param0: string): boolean;
							public init(param0: globalAndroid.os.Bundle): void;
							public onSaveInstanceState(): globalAndroid.os.Parcelable;
							public setCountriesToDisplay(param0: java.util.List<com.firebase.ui.auth.data.model.CountryInfo>): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module CountryListSpinner {
							export class DialogPopup {
								public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.CountryListSpinner.DialogPopup>;
								public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
								public isShowing(): boolean;
								public dismiss(): void;
								public show(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class PhoneActivity extends com.firebase.ui.auth.ui.AppCompatBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.PhoneActivity>;
							public constructor();
							public static createIntent(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: globalAndroid.os.Bundle): globalAndroid.content.Intent;
							public showProgress(param0: number): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onBackPressed(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class PhoneNumberVerificationHandler extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<com.firebase.ui.auth.ui.phone.PhoneVerification> {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.PhoneNumberVerificationHandler>;
							public submitVerificationCode(param0: string, param1: string): void;
							public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public constructor(param0: globalAndroid.app.Application);
							public verifyPhoneNumber(param0: globalAndroid.app.Activity, param1: string, param2: boolean): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class PhoneVerification {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.PhoneVerification>;
							public getCredential(): com.google.firebase.auth.PhoneAuthCredential;
							public constructor(param0: string, param1: com.google.firebase.auth.PhoneAuthCredential, param2: boolean);
							public getNumber(): string;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public isAutoVerified(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class SpacedEditText {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.SpacedEditText>;
							public setText(param0: string, param1: globalAndroid.widget.TextView.BufferType): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
							public setSelection(param0: number): void;
							public getUnspacedText(): globalAndroid.text.Editable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module ui {
					export module phone {
						export class SubmitConfirmationCodeFragment extends com.firebase.ui.auth.ui.FragmentBase {
							public static class: java.lang.Class<com.firebase.ui.auth.ui.phone.SubmitConfirmationCodeFragment>;
							public static TAG: string;
							public constructor();
							public static newInstance(param0: string): com.firebase.ui.auth.ui.phone.SubmitConfirmationCodeFragment;
							public showProgress(param0: number): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onActivityCreated(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public hideProgress(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export class CredentialUtils {
						public static class: java.lang.Class<com.firebase.ui.auth.util.CredentialUtils>;
						public static buildCredential(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: string): com.google.android.gms.auth.api.credentials.Credential;
						public static buildCredentialOrThrow(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: string): com.google.android.gms.auth.api.credentials.Credential;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export class ExtraConstants {
						public static class: java.lang.Class<com.firebase.ui.auth.util.ExtraConstants>;
						public static FLOW_PARAMS: string;
						public static IDP_RESPONSE: string;
						public static USER: string;
						public static CREDENTIAL: string;
						public static EMAIL: string;
						public static DEFAULT_EMAIL: string;
						public static ALLOW_NEW_EMAILS: string;
						public static REQUIRE_NAME: string;
						public static GOOGLE_SIGN_IN_OPTIONS: string;
						public static FACEBOOK_PERMISSIONS: string;
						public static GITHUB_PERMISSIONS: string;
						public static GITHUB_URL: string;
						public static PARAMS: string;
						public static PHONE: string;
						public static COUNTRY_ISO: string;
						public static NATIONAL_NUMBER: string;
						public static ALLOWLISTED_COUNTRIES: string;
						public static BLOCKLISTED_COUNTRIES: string;
						public static EMAIL_LINK_SIGN_IN: string;
						public static ACTION_CODE_SETTINGS: string;
						public static FORCE_SAME_DEVICE: string;
						public static PROVIDER_ID: string;
						public static GENERIC_OAUTH_PROVIDER_ID: string;
						public static GENERIC_OAUTH_PROVIDER_NAME: string;
						public static GENERIC_OAUTH_BUTTON_ID: string;
						public static GENERIC_OAUTH_SCOPES: string;
						public static GENERIC_OAUTH_CUSTOM_PARAMETERS: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export class FirebaseAuthError {
						public static class: java.lang.Class<com.firebase.ui.auth.util.FirebaseAuthError>;
						public static ERROR_INVALID_CUSTOM_TOKEN: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_CUSTOM_TOKEN_MISMATCH: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_CREDENTIAL: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_EMAIL: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_WRONG_PASSWORD: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_USER_MISMATCH: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_REQUIRES_RECENT_LOGIN: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_EMAIL_ALREADY_IN_USE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_CREDENTIAL_ALREADY_IN_USE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_USER_DISABLED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_USER_TOKEN_EXPIRED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_USER_NOT_FOUND: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_USER_TOKEN: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_OPERATION_NOT_ALLOWED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_TOO_MANY_REQUESTS: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_WEAK_PASSWORD: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_EXPIRED_ACTION_CODE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_ACTION_CODE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_MESSAGE_PAYLOAD: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_RECIPIENT_EMAIL: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_SENDER: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_MISSING_EMAIL: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_MISSING_PASSWORD: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_MISSING_PHONE_NUMBER: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_PHONE_NUMBER: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_MISSING_VERIFICATION_CODE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_VERIFICATION_CODE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_MISSING_VERIFICATION_ID: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_INVALID_VERIFICATION_ID: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_RETRY_PHONE_AUTH: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_SESSION_EXPIRED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_QUOTA_EXCEEDED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_APP_NOT_AUTHORIZED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_API_NOT_AVAILABLE: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_WEB_CONTEXT_CANCELED: com.firebase.ui.auth.util.FirebaseAuthError;
						public static ERROR_UNKNOWN: com.firebase.ui.auth.util.FirebaseAuthError;
						public static valueOf(param0: string): com.firebase.ui.auth.util.FirebaseAuthError;
						public static values(): androidNative.Array<com.firebase.ui.auth.util.FirebaseAuthError>;
						public static fromException(param0: com.google.firebase.auth.FirebaseAuthException): com.firebase.ui.auth.util.FirebaseAuthError;
						public getDescription(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export class GoogleApiUtils {
						public static class: java.lang.Class<com.firebase.ui.auth.util.GoogleApiUtils>;
						public static isPlayServicesAvailable(param0: globalAndroid.content.Context): boolean;
						public static getCredentialsClient(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.credentials.CredentialsClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export class Preconditions {
						public static class: java.lang.Class<com.firebase.ui.auth.util.Preconditions>;
						public static checkValidStyle(param0: globalAndroid.content.Context, param1: number, param2: string, param3: androidNative.Array<any>): number;
						public static checkNotNull(param0: any, param1: string, param2: androidNative.Array<any>): any;
						public static checkUnset(param0: globalAndroid.os.Bundle, param1: string, param2: androidNative.Array<string>): void;
						public static checkConfigured(param0: globalAndroid.content.Context, param1: string, param2: androidNative.Array<number>): void;
						public static checkArgument(param0: boolean, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class AuthOperationManager {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.AuthOperationManager>;
							public mScratchAuth: com.google.firebase.auth.FirebaseAuth;
							public safeGenericIdpSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase, param1: com.google.firebase.auth.OAuthProvider, param2: com.firebase.ui.auth.data.model.FlowParameters): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
							public safeLink(param0: com.google.firebase.auth.AuthCredential, param1: com.google.firebase.auth.AuthCredential, param2: com.firebase.ui.auth.data.model.FlowParameters): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
							public canUpgradeAnonymous(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.data.model.FlowParameters): boolean;
							public static getInstance(): com.firebase.ui.auth.util.data.AuthOperationManager;
							public signInAndLinkWithCredential(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: com.google.firebase.auth.AuthCredential): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
							public validateCredential(param0: com.google.firebase.auth.AuthCredential, param1: com.firebase.ui.auth.data.model.FlowParameters): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
							public createOrLinkUserWithEmailAndPassword(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: string, param3: string): com.google.android.gms.tasks.Task<com.google.firebase.auth.AuthResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class ContinueUrlBuilder {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.ContinueUrlBuilder>;
							public constructor(param0: string);
							public appendProviderId(param0: string): com.firebase.ui.auth.util.data.ContinueUrlBuilder;
							public appendSessionId(param0: string): com.firebase.ui.auth.util.data.ContinueUrlBuilder;
							public appendAnonymousUserId(param0: string): com.firebase.ui.auth.util.data.ContinueUrlBuilder;
							public build(): string;
							public appendForceSameDeviceBit(param0: boolean): com.firebase.ui.auth.util.data.ContinueUrlBuilder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class EmailLinkParser {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.EmailLinkParser>;
							public getAnonymousUserId(): string;
							public constructor(param0: string);
							public getSessionId(): string;
							public getOobCode(): string;
							public getProviderId(): string;
							public getForceSameDeviceBit(): boolean;
						}
						export module EmailLinkParser {
							export class LinkParameters {
								public static class: java.lang.Class<com.firebase.ui.auth.util.data.EmailLinkParser.LinkParameters>;
								public static SESSION_IDENTIFIER: string;
								public static ANONYMOUS_USER_ID_IDENTIFIER: string;
								public static FORCE_SAME_DEVICE_IDENTIFIER: string;
								public static PROVIDER_ID_IDENTIFIER: string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class EmailLinkPersistenceManager {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.EmailLinkPersistenceManager>;
							public constructor();
							public static getInstance(): com.firebase.ui.auth.util.data.EmailLinkPersistenceManager;
							public retrieveSessionRecord(param0: globalAndroid.content.Context): com.firebase.ui.auth.util.data.EmailLinkPersistenceManager.SessionRecord;
							public clearAllData(param0: globalAndroid.content.Context): void;
							public saveEmail(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): void;
							public saveIdpResponseForLinking(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.IdpResponse): void;
						}
						export module EmailLinkPersistenceManager {
							export class SessionRecord {
								public static class: java.lang.Class<com.firebase.ui.auth.util.data.EmailLinkPersistenceManager.SessionRecord>;
								public getEmail(): string;
								public setIdpResponseForLinking(param0: com.firebase.ui.auth.IdpResponse): com.firebase.ui.auth.util.data.EmailLinkPersistenceManager.SessionRecord;
								public constructor(param0: string, param1: string);
								public getSessionId(): string;
								public getAnonymousUserId(): string;
								public setEmail(param0: string): com.firebase.ui.auth.util.data.EmailLinkPersistenceManager.SessionRecord;
								public getIdpResponseForLinking(): com.firebase.ui.auth.IdpResponse;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class PhoneNumberUtils {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.PhoneNumberUtils>;
							public constructor();
							public static format(param0: string, param1: com.firebase.ui.auth.data.model.CountryInfo): string;
							public static getCurrentCountryInfo(param0: globalAndroid.content.Context): com.firebase.ui.auth.data.model.CountryInfo;
							public static formatUsingCurrentCountry(param0: string, param1: globalAndroid.content.Context): string;
							public static getPhoneNumber(param0: string): com.firebase.ui.auth.data.model.PhoneNumber;
							public static isValid(param0: string): boolean;
							public static getCountryCode(param0: string): java.lang.Integer;
							public static getImmutableCountryIsoMap(): java.util.Map<string, java.lang.Integer>;
							public static isValidIso(param0: string): boolean;
							public static getPhoneNumber(param0: string, param1: string): com.firebase.ui.auth.data.model.PhoneNumber;
							public static getCountryIsosFromCountryCode(param0: string): java.util.List<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class PrivacyDisclosureUtils {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.PrivacyDisclosureUtils>;
							public constructor();
							public static setupTermsOfServiceAndPrivacyPolicyText(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: globalAndroid.widget.TextView): void;
							public static setupTermsOfServiceFooter(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: globalAndroid.widget.TextView): void;
							public static setupTermsOfServiceAndPrivacyPolicySmsText(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: globalAndroid.widget.TextView): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class ProviderAvailability {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.ProviderAvailability>;
							public static IS_GITHUB_AVAILABLE: boolean;
							public static IS_FACEBOOK_AVAILABLE: boolean;
							public static IS_TWITTER_AVAILABLE: boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class ProviderUtils {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.ProviderUtils>;
							public static providerIdToAccountType(param0: string): string;
							public static getAuthCredential(param0: com.firebase.ui.auth.IdpResponse): com.google.firebase.auth.AuthCredential;
							public static signInMethodToProviderId(param0: string): string;
							public static getConfigFromIdps(param0: java.util.List<com.firebase.ui.auth.AuthUI.IdpConfig>, param1: string): com.firebase.ui.auth.AuthUI.IdpConfig;
							public static idpResponseToAccountType(param0: com.firebase.ui.auth.IdpResponse): string;
							public static accountTypeToProviderId(param0: string): string;
							public static getConfigFromIdpsOrThrow(param0: java.util.List<com.firebase.ui.auth.AuthUI.IdpConfig>, param1: string): com.firebase.ui.auth.AuthUI.IdpConfig;
							public static providerIdToProviderName(param0: string): string;
							public static fetchSortedProviders(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: string): com.google.android.gms.tasks.Task<java.util.List<string>>;
							public static fetchTopProvider(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: string): com.google.android.gms.tasks.Task<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class SessionUtils {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.SessionUtils>;
							public constructor();
							public static generateRandomAlphaNumericString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module data {
						export class TaskFailureLogger {
							public static class: java.lang.Class<com.firebase.ui.auth.util.data.TaskFailureLogger>;
							public constructor(param0: string, param1: string);
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export class BucketedTextChangeListener {
							public static class: java.lang.Class<com.firebase.ui.auth.util.ui.BucketedTextChangeListener>;
							public afterTextChanged(param0: globalAndroid.text.Editable): void;
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public constructor(param0: globalAndroid.widget.EditText, param1: number, param2: string, param3: com.firebase.ui.auth.util.ui.BucketedTextChangeListener.ContentChangeCallback);
							public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						}
						export module BucketedTextChangeListener {
							export class ContentChangeCallback {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.BucketedTextChangeListener.ContentChangeCallback>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.util.ui.BucketedTextChangeListener$ContentChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { whenComplete(): void; whileIncomplete(): void });
								public constructor();
								public whenComplete(): void;
								public whileIncomplete(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export class FlowUtils {
							public static class: java.lang.Class<com.firebase.ui.auth.util.ui.FlowUtils>;
							public static unhandled(param0: com.firebase.ui.auth.ui.FragmentBase, param1: java.lang.Exception): boolean;
							public static unhandled(param0: com.firebase.ui.auth.ui.HelperActivityBase, param1: java.lang.Exception): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export class ImeHelper {
							public static class: java.lang.Class<com.firebase.ui.auth.util.ui.ImeHelper>;
							public constructor();
							public static setImeOnDoneListener(param0: globalAndroid.widget.EditText, param1: com.firebase.ui.auth.util.ui.ImeHelper.DonePressedListener): void;
						}
						export module ImeHelper {
							export class DonePressedListener {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.ImeHelper.DonePressedListener>;
								/**
								 * Constructs a new instance of the com.firebase.ui.auth.util.ui.ImeHelper$DonePressedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { onDonePressed(): void });
								public constructor();
								public onDonePressed(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export class PreambleHandler {
							public static class: java.lang.Class<com.firebase.ui.auth.util.ui.PreambleHandler>;
							public static setup(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: number, param3: globalAndroid.widget.TextView): void;
							public static setup(param0: globalAndroid.content.Context, param1: com.firebase.ui.auth.data.model.FlowParameters, param2: number, param3: number, param4: globalAndroid.widget.TextView): void;
						}
						export module PreambleHandler {
							export class CustomTabsSpan {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.PreambleHandler.CustomTabsSpan>;
								public constructor(param0: globalAndroid.content.Context, param1: string);
								public onClick(param0: globalAndroid.view.View): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export class SupportVectorDrawablesButton {
							public static class: java.lang.Class<com.firebase.ui.auth.util.ui.SupportVectorDrawablesButton>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export class TextHelper {
							public static class: java.lang.Class<com.firebase.ui.auth.util.ui.TextHelper>;
							public constructor();
							public static boldAllOccurencesOfText(param0: globalAndroid.text.SpannableStringBuilder, param1: string, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export module fieldvalidators {
							export class BaseValidator {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.fieldvalidators.BaseValidator>;
								public mErrorContainer: com.google.android.material.textfield.TextInputLayout;
								public mErrorMessage: string;
								public mEmptyMessage: string;
								public constructor(param0: com.google.android.material.textfield.TextInputLayout);
								public isValid(param0: string): boolean;
								public validate(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export module fieldvalidators {
							export class EmailFieldValidator extends com.firebase.ui.auth.util.ui.fieldvalidators.BaseValidator {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.fieldvalidators.EmailFieldValidator>;
								public constructor(param0: com.google.android.material.textfield.TextInputLayout);
								public isValid(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export module fieldvalidators {
							export class NoOpValidator extends com.firebase.ui.auth.util.ui.fieldvalidators.BaseValidator {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.fieldvalidators.NoOpValidator>;
								public constructor(param0: com.google.android.material.textfield.TextInputLayout);
								public isValid(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export module fieldvalidators {
							export class PasswordFieldValidator extends com.firebase.ui.auth.util.ui.fieldvalidators.BaseValidator {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.fieldvalidators.PasswordFieldValidator>;
								public constructor(param0: com.google.android.material.textfield.TextInputLayout, param1: number);
								public constructor(param0: com.google.android.material.textfield.TextInputLayout);
								public isValid(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module util {
					export module ui {
						export module fieldvalidators {
							export class RequiredFieldValidator extends com.firebase.ui.auth.util.ui.fieldvalidators.BaseValidator {
								public static class: java.lang.Class<com.firebase.ui.auth.util.ui.fieldvalidators.RequiredFieldValidator>;
								public constructor(param0: com.google.android.material.textfield.TextInputLayout);
								public constructor(param0: com.google.android.material.textfield.TextInputLayout, param1: string);
								public isValid(param0: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export abstract class AuthViewModelBase<T> extends com.firebase.ui.auth.viewmodel.OperableViewModel<com.firebase.ui.auth.data.model.FlowParameters, com.firebase.ui.auth.data.model.Resource<any>> {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.AuthViewModelBase<any>>;
						public initializeForTesting(param0: com.firebase.ui.auth.data.model.FlowParameters, param1: com.google.firebase.auth.FirebaseAuth, param2: com.google.android.gms.auth.api.credentials.CredentialsClient): void;
						public onCreate(): void;
						public getAuth(): com.google.firebase.auth.FirebaseAuth;
						public constructor(param0: globalAndroid.app.Application);
						public getCurrentUser(): com.google.firebase.auth.FirebaseUser;
						public getCredentialsClient(): com.google.android.gms.auth.api.credentials.CredentialsClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export abstract class OperableViewModel<I, O> extends com.firebase.ui.auth.viewmodel.ViewModelBase<any> {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.OperableViewModel<any, any>>;
						public setResult(param0: any): void;
						public constructor(param0: globalAndroid.app.Application);
						public getOperation(): androidx.lifecycle.LiveData<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export abstract class ProviderSignInBase<T> extends com.firebase.ui.auth.viewmodel.OperableViewModel<any, com.firebase.ui.auth.data.model.Resource<com.firebase.ui.auth.IdpResponse>> {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.ProviderSignInBase<any>>;
						public startSignIn(param0: com.google.firebase.auth.FirebaseAuth, param1: com.firebase.ui.auth.ui.HelperActivityBase, param2: string): void;
						public startSignIn(param0: com.firebase.ui.auth.ui.HelperActivityBase): void;
						public initWith(param0: any): com.firebase.ui.auth.viewmodel.ProviderSignInBase<any>;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public constructor(param0: globalAndroid.app.Application);
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export class RequestCodes {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.RequestCodes>;
						public static CRED_SAVE: number;
						public static CRED_HINT: number;
						public static CRED_SAVE_FLOW: number;
						public static WELCOME_BACK_IDP_FLOW: number;
						public static WELCOME_BACK_EMAIL_FLOW: number;
						public static AUTH_PICKER_FLOW: number;
						public static EMAIL_FLOW: number;
						public static PHONE_FLOW: number;
						public static ACCOUNT_LINK_FLOW: number;
						public static PROVIDER_FLOW: number;
						public static GOOGLE_PROVIDER: number;
						public static GITHUB_PROVIDER: number;
						public static WELCOME_BACK_EMAIL_LINK_FLOW: number;
						public static EMAIL_LINK_WRONG_DEVICE_FLOW: number;
						public static EMAIL_LINK_INVALID_LINK_FLOW: number;
						public static EMAIL_LINK_PROMPT_FOR_EMAIL_FLOW: number;
						public static EMAIL_LINK_CROSS_DEVICE_LINKING_FLOW: number;
						public static GENERIC_IDP_SIGN_IN_FLOW: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export abstract class ResourceObserver<T> extends androidx.lifecycle.Observer<com.firebase.ui.auth.data.model.Resource<any>> {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.ResourceObserver<any>>;
						public onChanged(param0: com.firebase.ui.auth.data.model.Resource<any>): void;
						public constructor(param0: com.firebase.ui.auth.ui.HelperActivityBase, param1: number);
						public onSuccess(param0: any): void;
						public onFailure(param0: java.lang.Exception): void;
						public constructor(param0: com.firebase.ui.auth.ui.HelperActivityBase);
						public constructor(param0: com.firebase.ui.auth.ui.FragmentBase, param1: number);
						public constructor(param0: com.firebase.ui.auth.ui.FragmentBase);
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export abstract class SignInViewModelBase extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<com.firebase.ui.auth.IdpResponse> {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.SignInViewModelBase>;
						public setResult(param0: any): void;
						public handleSuccess(param0: com.firebase.ui.auth.IdpResponse, param1: com.google.firebase.auth.AuthResult): void;
						public setResult(param0: com.firebase.ui.auth.data.model.Resource<com.firebase.ui.auth.IdpResponse>): void;
						public handleMergeFailure(param0: com.firebase.ui.auth.IdpResponse): void;
						public handleMergeFailure(param0: com.google.firebase.auth.AuthCredential): void;
						public constructor(param0: globalAndroid.app.Application);
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export abstract class ViewModelBase<T> extends androidx.lifecycle.AndroidViewModel {
						public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.ViewModelBase<any>>;
						public getArguments(): any;
						public setArguments(param0: any): void;
						public init(param0: any): void;
						public onCreate(): void;
						public constructor(param0: globalAndroid.app.Application);
						public onCleared(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module email {
						export class EmailLinkSendEmailHandler extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<string> {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.email.EmailLinkSendEmailHandler>;
							public constructor(param0: globalAndroid.app.Application);
							public sendSignInLinkToEmail(param0: string, param1: com.google.firebase.auth.ActionCodeSettings, param2: com.firebase.ui.auth.IdpResponse, param3: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module email {
						export class EmailLinkSignInHandler extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.email.EmailLinkSignInHandler>;
							public startSignIn(): void;
							public finishSignIn(param0: string): void;
							public constructor(param0: globalAndroid.app.Application);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module email {
						export class EmailProviderResponseHandler extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.email.EmailProviderResponseHandler>;
							public constructor(param0: globalAndroid.app.Application);
							public startSignIn(param0: com.firebase.ui.auth.IdpResponse, param1: string): void;
						}
						export module EmailProviderResponseHandler {
							export class StartWelcomeBackFlow extends com.google.android.gms.tasks.OnSuccessListener<string> {
								public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.email.EmailProviderResponseHandler.StartWelcomeBackFlow>;
								public constructor(param0: com.firebase.ui.auth.viewmodel.email.EmailProviderResponseHandler, param1: string);
								public onSuccess(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module email {
						export class RecoverPasswordHandler extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<string> {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.email.RecoverPasswordHandler>;
							public startReset(param0: string, param1: com.google.firebase.auth.ActionCodeSettings): void;
							public constructor(param0: globalAndroid.app.Application);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module email {
						export class WelcomeBackPasswordHandler extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.email.WelcomeBackPasswordHandler>;
							public constructor(param0: globalAndroid.app.Application);
							public startSignIn(param0: string, param1: string, param2: com.firebase.ui.auth.IdpResponse, param3: com.google.firebase.auth.AuthCredential): void;
							public getPendingPassword(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module idp {
						export class LinkingSocialProviderResponseHandler extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.idp.LinkingSocialProviderResponseHandler>;
							public hasCredentialForLinking(): boolean;
							public setRequestedSignInCredentialForEmail(param0: com.google.firebase.auth.AuthCredential, param1: string): void;
							public constructor(param0: globalAndroid.app.Application);
							public startSignIn(param0: com.firebase.ui.auth.IdpResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module idp {
						export class SocialProviderResponseHandler extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.idp.SocialProviderResponseHandler>;
							public startWelcomeBackFlowForLinking(param0: string, param1: com.firebase.ui.auth.IdpResponse): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public constructor(param0: globalAndroid.app.Application);
							public startSignIn(param0: com.firebase.ui.auth.IdpResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module phone {
						export class PhoneProviderResponseHandler extends com.firebase.ui.auth.viewmodel.SignInViewModelBase {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.phone.PhoneProviderResponseHandler>;
							public constructor(param0: globalAndroid.app.Application);
							public startSignIn(param0: com.google.firebase.auth.PhoneAuthCredential, param1: com.firebase.ui.auth.IdpResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module firebase {
		export module ui {
			export module auth {
				export module viewmodel {
					export module smartlock {
						export class SmartLockHandler extends com.firebase.ui.auth.viewmodel.AuthViewModelBase<com.firebase.ui.auth.IdpResponse> {
							public static class: java.lang.Class<com.firebase.ui.auth.viewmodel.smartlock.SmartLockHandler>;
							public saveCredentials(param0: com.google.android.gms.auth.api.credentials.Credential): void;
							public saveCredentials(param0: com.google.firebase.auth.FirebaseUser, param1: string, param2: string): void;
							public constructor(param0: globalAndroid.app.Application);
							public setResponse(param0: com.firebase.ui.auth.IdpResponse): void;
							public onActivityResult(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.firebase.ui.auth.AuthUI.AuthIntentBuilder:1
//com.firebase.ui.auth.data.model.Resource:1
//com.firebase.ui.auth.data.remote.SingleProviderSignInHandler:1
//com.firebase.ui.auth.viewmodel.AuthViewModelBase:1
//com.firebase.ui.auth.viewmodel.OperableViewModel:2
//com.firebase.ui.auth.viewmodel.ProviderSignInBase:1
//com.firebase.ui.auth.viewmodel.ResourceObserver:1
//com.firebase.ui.auth.viewmodel.ViewModelBase:1
