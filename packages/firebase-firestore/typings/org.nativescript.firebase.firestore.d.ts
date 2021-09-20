declare module org {
  export module nativescript {
    export module firebase {
      export module firestore {
        export class BuildConfig {
          public static class: java.lang.Class<org.nativescript.firebase.firestore.BuildConfig>;
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
      export module firestore {
        export class FirebaseFirestore {
          public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore>;
          public static Companion: org.nativescript.firebase.firestore.FirebaseFirestore.Companion;
          public static enableNetwork(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          public constructor();
          public static runTransaction(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.TransactionCallback, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<any>): void;
          public static getExecutorsCount(): number;
          public static disableNetwork(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          public static terminate(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          public static waitForPendingWrites(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          public static setExecutorsCount(param0: number): void;
          public static clearPersistence(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
        }
        export module FirebaseFirestore {
          export class Callback<T>  extends java.lang.Object {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.Callback<any>>;
            /**
             * Constructs a new instance of the org.nativescript.firebase.firestore.FirebaseFirestore$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSuccess(param0: T): void;
              onError(param0: any): void;
            });
            public constructor();
            public onError(param0: any): void;
            public onSuccess(param0: T): void;
          }
          export class CollectionReference {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.CollectionReference>;
            public static Companion: org.nativescript.firebase.firestore.FirebaseFirestore.CollectionReference.Companion;
            public constructor();
            public static add(param0: com.google.firebase.firestore.CollectionReference, param1: any, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentReference>): void;
          }
          export module CollectionReference {
            export class Companion {
              public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.CollectionReference.Companion>;
              public add(param0: com.google.firebase.firestore.CollectionReference, param1: any, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentReference>): void;
            }
          }
          export class Companion {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.Companion>;
            public runTransaction(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.TransactionCallback, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<any>): void;
            public setExecutorsCount(param0: number): void;
            public clearPersistence(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public terminate(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public enableNetwork(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public disableNetwork(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public getExecutorsCount(): number;
            public waitForPendingWrites(param0: com.google.firebase.firestore.FirebaseFirestore, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          }
          export class DocumentReference {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference>;
            public static Companion: org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.Companion;
            public constructor();
            public static get(param0: com.google.firebase.firestore.DocumentReference, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentSnapshot>): void;
            public static set(param0: com.google.firebase.firestore.DocumentReference, param1: any, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public static update(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.FieldPath, param2: any, param3: androidNative.Array<any>, param4: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public static update(param0: com.google.firebase.firestore.DocumentReference, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public static get(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.Source, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentSnapshot>): void;
            public static delete(param0: com.google.firebase.firestore.DocumentReference, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public static set(param0: com.google.firebase.firestore.DocumentReference, param1: any, param2: com.google.firebase.firestore.SetOptions, param3: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            public static update(param0: com.google.firebase.firestore.DocumentReference, param1: string, param2: any, param3: androidNative.Array<any>, param4: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          }
          export module DocumentReference {
            export class Companion {
              public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.Companion>;
              public delete(param0: com.google.firebase.firestore.DocumentReference, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
              public update(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.FieldPath, param2: any, param3: androidNative.Array<any>, param4: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
              public set(param0: com.google.firebase.firestore.DocumentReference, param1: any, param2: com.google.firebase.firestore.SetOptions, param3: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
              public get(param0: com.google.firebase.firestore.DocumentReference, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentSnapshot>): void;
              public get(param0: com.google.firebase.firestore.DocumentReference, param1: com.google.firebase.firestore.Source, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentSnapshot>): void;
              public update(param0: com.google.firebase.firestore.DocumentReference, param1: string, param2: any, param3: androidNative.Array<any>, param4: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
              public set(param0: com.google.firebase.firestore.DocumentReference, param1: any, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
              public update(param0: com.google.firebase.firestore.DocumentReference, param1: java.util.Map<string,any>, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            }
          }
          export class Query {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.Query>;
            public static Companion: org.nativescript.firebase.firestore.FirebaseFirestore.Query.Companion;
            public constructor();
            public static get(param0: com.google.firebase.firestore.Query, param1: com.google.firebase.firestore.Source, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.QuerySnapshot>): void;
            public static get(param0: com.google.firebase.firestore.Query, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.QuerySnapshot>): void;
          }
          export module Query {
            export class Companion {
              public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.Query.Companion>;
              public get(param0: com.google.firebase.firestore.Query, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.QuerySnapshot>): void;
              public get(param0: com.google.firebase.firestore.Query, param1: com.google.firebase.firestore.Source, param2: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.QuerySnapshot>): void;
            }
          }
          export class TransactionCallback {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.TransactionCallback>;
            /**
             * Constructs a new instance of the org.nativescript.firebase.firestore.FirebaseFirestore$TransactionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onTransaction(param0: com.google.firebase.firestore.Transaction, param1: androidx.lifecycle.MutableLiveData<any>, param2: java.util.concurrent.CountDownLatch): void;
            });
            public constructor();
            public onTransaction(param0: com.google.firebase.firestore.Transaction, param1: androidx.lifecycle.MutableLiveData<any>, param2: java.util.concurrent.CountDownLatch): void;
          }
          export class WriteBatch {
            public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.WriteBatch>;
            public static Companion: org.nativescript.firebase.firestore.FirebaseFirestore.WriteBatch.Companion;
            public constructor();
            public static commit(param0: com.google.firebase.firestore.WriteBatch, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
          }
          export module WriteBatch {
            export class Companion {
              public static class: java.lang.Class<org.nativescript.firebase.firestore.FirebaseFirestore.WriteBatch.Companion>;
              public commit(param0: com.google.firebase.firestore.WriteBatch, param1: org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//org.nativescript.firebase.firestore.FirebaseFirestore.Callback:1

