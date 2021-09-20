declare module org {
  export module nativescript {
    export module firebase {
      export module functions {
        export class BuildConfig {
          public static class: java.lang.Class<org.nativescript.firebase.functions.BuildConfig>;
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
      export module functions {
        export class FirebaseFunctions {
          public static class: java.lang.Class<org.nativescript.firebase.functions.FirebaseFunctions>;
          public static Companion: org.nativescript.firebase.functions.FirebaseFunctions.Companion;
          public constructor();
          public static call(param0: com.google.firebase.functions.HttpsCallableReference, param1: any, param2: org.nativescript.firebase.functions.FirebaseFunctions.Callback<com.google.firebase.functions.HttpsCallableResult>): void;
          public static getExecutorsCount(): number;
          public static setExecutorsCount(param0: number): void;
        }
        export module FirebaseFunctions {
          export class Callback<T>  extends java.lang.Object {
            public static class: java.lang.Class<org.nativescript.firebase.functions.FirebaseFunctions.Callback<any>>;
            /**
             * Constructs a new instance of the org.nativescript.firebase.functions.FirebaseFunctions$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
            public static class: java.lang.Class<org.nativescript.firebase.functions.FirebaseFunctions.Companion>;
            public setExecutorsCount(param0: number): void;
            public call(param0: com.google.firebase.functions.HttpsCallableReference, param1: any, param2: org.nativescript.firebase.functions.FirebaseFunctions.Callback<com.google.firebase.functions.HttpsCallableResult>): void;
            public getExecutorsCount(): number;
          }
        }
      }
    }
  }
}

//Generics information:
//org.nativescript.firebase.functions.FirebaseFunctions.Callback:1

