/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module nativescript {
		export module firebase {
			export module storage {
				export class BuildConfig {
					public static class: java.lang.Class<org.nativescript.firebase.storage.BuildConfig>;
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
			export module storage {
				export class FirebaseStorage {
					public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage>;
					public static Companion: org.nativescript.firebase.storage.FirebaseStorage.Companion;
					public constructor();
					public static getExecutorsCount(): number;
					public static setExecutorsCount(param0: number): void;
				}
				export module FirebaseStorage {
					export class Callback<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.Callback<any>>;
						/**
						 * Constructs a new instance of the org.nativescript.firebase.storage.FirebaseStorage$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.Companion>;
						public setExecutorsCount(param0: number): void;
						public getExecutorsCount(): number;
					}
					export class StorageMetadata {
						public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageMetadata>;
						public static Companion: org.nativescript.firebase.storage.FirebaseStorage.StorageMetadata.Companion;
						public constructor();
						public static getCustomMetadata(param0: com.google.firebase.storage.StorageMetadata): string;
						public static setCustomMetadata(param0: com.google.firebase.storage.StorageMetadata.Builder, param1: string): void;
					}
					export module StorageMetadata {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageMetadata.Companion>;
							public setCustomMetadata(param0: com.google.firebase.storage.StorageMetadata.Builder, param1: string): void;
							public getCustomMetadata(param0: com.google.firebase.storage.StorageMetadata): string;
						}
					}
					export class StorageReference {
						public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageReference>;
						public static Companion: org.nativescript.firebase.storage.FirebaseStorage.StorageReference.Companion;
						public constructor();
						public static getMetadata(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.StorageMetadata>): void;
						public static listAll(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.ListResult>): void;
						public static putString(param0: com.google.firebase.storage.StorageReference, param1: string, param2: string, param3: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
						public static getStatus(param0: com.google.firebase.storage.FileDownloadTask.TaskSnapshot): string;
						public static getDownloadURL(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<globalAndroid.net.Uri>): void;
						public static delete(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<java.lang.Void>): void;
						public static list(param0: com.google.firebase.storage.StorageReference, param1: number, param2: string, param3: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.ListResult>): void;
						public static updateMetadata(param0: com.google.firebase.storage.StorageReference, param1: com.google.firebase.storage.StorageMetadata, param2: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.StorageMetadata>): void;
						public static getStatus(param0: com.google.firebase.storage.UploadTask.TaskSnapshot): string;
					}
					export module StorageReference {
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageReference.Companion>;
							public listAll(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.ListResult>): void;
							public putString(param0: com.google.firebase.storage.StorageReference, param1: string, param2: string, param3: com.google.firebase.storage.StorageMetadata): com.google.firebase.storage.UploadTask;
							public getMetadata(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.StorageMetadata>): void;
							public getDownloadURL(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<globalAndroid.net.Uri>): void;
							public getStatus(param0: com.google.firebase.storage.FileDownloadTask.TaskSnapshot): string;
							public delete(param0: com.google.firebase.storage.StorageReference, param1: org.nativescript.firebase.storage.FirebaseStorage.Callback<java.lang.Void>): void;
							public updateMetadata(param0: com.google.firebase.storage.StorageReference, param1: com.google.firebase.storage.StorageMetadata, param2: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.StorageMetadata>): void;
							public getStatus(param0: com.google.firebase.storage.UploadTask.TaskSnapshot): string;
							public list(param0: com.google.firebase.storage.StorageReference, param1: number, param2: string, param3: org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.ListResult>): void;
						}
					}
					export class StorageTask {
						public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageTask>;
						public static Companion: org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Companion;
						public constructor();
						public static on(param0: com.google.firebase.storage.FileDownloadTask, param1: boolean, param2: boolean, param3: boolean, param4: org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback<com.google.firebase.storage.FileDownloadTask.TaskSnapshot>): void;
						public static on(param0: com.google.firebase.storage.UploadTask, param1: boolean, param2: boolean, param3: boolean, param4: org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback<com.google.firebase.storage.UploadTask.TaskSnapshot>): void;
					}
					export module StorageTask {
						export class Callback<T>  extends java.lang.Object {
							public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback<any>>;
							/**
							 * Constructs a new instance of the org.nativescript.firebase.storage.FirebaseStorage$StorageTask$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNextOrObserver(param0: T): void;
								onComplete(): void;
								onError(param0: any): void;
							});
							public constructor();
							public onComplete(): void;
							public onNextOrObserver(param0: T): void;
							public onError(param0: any): void;
						}
						export class Companion {
							public static class: java.lang.Class<org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Companion>;
							public on(param0: com.google.firebase.storage.FileDownloadTask, param1: boolean, param2: boolean, param3: boolean, param4: org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback<com.google.firebase.storage.FileDownloadTask.TaskSnapshot>): void;
							public on(param0: com.google.firebase.storage.UploadTask, param1: boolean, param2: boolean, param3: boolean, param4: org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback<com.google.firebase.storage.UploadTask.TaskSnapshot>): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//org.nativescript.firebase.storage.FirebaseStorage.Callback:1
//org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback:1

