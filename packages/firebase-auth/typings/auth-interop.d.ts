declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class FirebaseAuthException {
					public static class: java.lang.Class<com.google.firebase.auth.FirebaseAuthException>;
					public constructor(param0: string, param1: string);
					public getErrorCode(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export class GetTokenResult {
					public static class: java.lang.Class<com.google.firebase.auth.GetTokenResult>;
					public getIssuedAtTimestamp(): number;
					public getClaims(): java.util.Map<string,any>;
					public getToken(): string;
					public getAuthTimestamp(): number;
					public getSignInSecondFactor(): string;
					public getExpirationTimestamp(): number;
					public getSignInProvider(): string;
					public constructor(param0: string, param1: java.util.Map<string,any>);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class IdTokenListener {
						public static class: java.lang.Class<com.google.firebase.auth.internal.IdTokenListener>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.internal.IdTokenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onIdTokenChanged(param0: com.google.firebase.internal.InternalTokenResult): void;
						});
						public constructor();
						public onIdTokenChanged(param0: com.google.firebase.internal.InternalTokenResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module auth {
				export module internal {
					export class InternalAuthProvider extends com.google.firebase.internal.InternalTokenProvider {
						public static class: java.lang.Class<com.google.firebase.auth.internal.InternalAuthProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.auth.internal.InternalAuthProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAccessToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
							getUid(): string;
							addIdTokenListener(param0: com.google.firebase.auth.internal.IdTokenListener): void;
							removeIdTokenListener(param0: com.google.firebase.auth.internal.IdTokenListener): void;
							getAccessToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
							getUid(): string;
						});
						public constructor();
						public getUid(): string;
						public removeIdTokenListener(param0: com.google.firebase.auth.internal.IdTokenListener): void;
						public getAccessToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
						public addIdTokenListener(param0: com.google.firebase.auth.internal.IdTokenListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module internal {
				export class InternalTokenProvider {
					public static class: java.lang.Class<com.google.firebase.internal.InternalTokenProvider>;
					/**
					 * Constructs a new instance of the com.google.firebase.internal.InternalTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAccessToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
						getUid(): string;
					});
					public constructor();
					public getUid(): string;
					public getAccessToken(param0: boolean): com.google.android.gms.tasks.Task<com.google.firebase.auth.GetTokenResult>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module internal {
				export class InternalTokenResult {
					public static class: java.lang.Class<com.google.firebase.internal.InternalTokenResult>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public getToken(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module internal {
				export module api {
					export class FirebaseNoSignedInUserException {
						public static class: java.lang.Class<com.google.firebase.internal.api.FirebaseNoSignedInUserException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

//Generics information:

