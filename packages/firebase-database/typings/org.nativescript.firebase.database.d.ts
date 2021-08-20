declare module org {
	export module nativescript {
		export module firebase {
			export module database {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.database.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module firebase {
			export module database {
				export class FirebaseDatabase {
					public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase>;
					public static Companion: org.nativescript.firebase.database.FirebaseDatabase.Companion;
					public constructor();
					public static getExecutorsCount(): number;
					public static setExecutorsCount(param0: number): void;
				}
				export module FirebaseDatabase {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.database.FirebaseDatabase$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): void;
							onError(param0: any): void;
						});
						public constructor();
						public onError(param0: any): void;
						public onSuccess(param0: T): void;
					}
					export class Companion {
						public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.Companion>;
						public setExecutorsCount(param0: number): void;
						public getExecutorsCount(): number;
					}
					export class DatabaseReference {
						public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.DatabaseReference>;
						public static Companion: org.nativescript.firebase.database.FirebaseDatabase.DatabaseReference.Companion;
						public static transaction(param0: com.google.firebase.database.DatabaseReference, param1: boolean, param2: org.nativescript.firebase.database.FirebaseDatabase.TransactionCallback): void;
						public constructor();
						public static setWithPriority(param0: com.google.firebase.database.DatabaseReference, param1: any, param2: string, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static remove(param0: com.google.firebase.database.DatabaseReference, param1: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static setPriority(param0: com.google.firebase.database.DatabaseReference, param1: string, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static set(param0: com.google.firebase.database.DatabaseReference, param1: any, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static update(param0: com.google.firebase.database.DatabaseReference, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static setPriority(param0: com.google.firebase.database.DatabaseReference, param1: number, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static setWithPriority(param0: com.google.firebase.database.DatabaseReference, param1: any, param2: number, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
					}
					export module DatabaseReference {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.DatabaseReference.Companion>;
							public transaction(param0: com.google.firebase.database.DatabaseReference, param1: boolean, param2: org.nativescript.firebase.database.FirebaseDatabase.TransactionCallback): void;
							public setWithPriority(param0: com.google.firebase.database.DatabaseReference, param1: any, param2: number, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public remove(param0: com.google.firebase.database.DatabaseReference, param1: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public setPriority(param0: com.google.firebase.database.DatabaseReference, param1: number, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public setWithPriority(param0: com.google.firebase.database.DatabaseReference, param1: any, param2: string, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public set(param0: com.google.firebase.database.DatabaseReference, param1: any, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public update(param0: com.google.firebase.database.DatabaseReference, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public setPriority(param0: com.google.firebase.database.DatabaseReference, param1: string, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						}
					}
					export class OnDisconnect {
						public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.OnDisconnect>;
						public static Companion: org.nativescript.firebase.database.FirebaseDatabase.OnDisconnect.Companion;
						public constructor();
						public static setWithPriority(param0: com.google.firebase.database.OnDisconnect, param1: any, param2: string, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static set(param0: com.google.firebase.database.OnDisconnect, param1: any, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static update(param0: com.google.firebase.database.OnDisconnect, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static cancel(param0: com.google.firebase.database.OnDisconnect, param1: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static setWithPriority(param0: com.google.firebase.database.OnDisconnect, param1: any, param2: number, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						public static remove(param0: com.google.firebase.database.OnDisconnect, param1: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
					}
					export module OnDisconnect {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.OnDisconnect.Companion>;
							public setWithPriority(param0: com.google.firebase.database.OnDisconnect, param1: any, param2: string, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public remove(param0: com.google.firebase.database.OnDisconnect, param1: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public set(param0: com.google.firebase.database.OnDisconnect, param1: any, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public cancel(param0: com.google.firebase.database.OnDisconnect, param1: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public update(param0: com.google.firebase.database.OnDisconnect, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
							public setWithPriority(param0: com.google.firebase.database.OnDisconnect, param1: any, param2: number, param3: org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>): void;
						}
					}
					export class TransactionCallback {
						public static class: java.lang.Class<org.nativescript.firebase.database.FirebaseDatabase.TransactionCallback>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.database.FirebaseDatabase$TransactionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							doTransaction(param0: any): any;
							onComplete(param0: com.google.firebase.database.DatabaseError, param1: boolean, param2: com.google.firebase.database.DataSnapshot): void;
						});
						public constructor();
						public doTransaction(param0: any): any;
						public onComplete(param0: com.google.firebase.database.DatabaseError, param1: boolean, param2: com.google.firebase.database.DataSnapshot): void;
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.database.FirebaseDatabase.Callback:1

