import {FirebaseConfig, IFirebaseOptions} from './common';

declare function serialize(data: any): any;

declare function deserialize(data: any): any;

declare class FirebaseOptions implements IFirebaseOptions {
  readonly ios: any;
  readonly android: any;
  readonly native: any;
}

declare class FirebaseApp {
  readonly native;
  readonly ios;
  readonly name;
  readonly options: Readonly<FirebaseOptions>;

  delete(): Promise<void>;

  apps(): FirebaseApp[];
}

export interface Firebase {
  app(name?: string): FirebaseApp;

  initializeApp(options?: FirebaseOptions, configOrName?: FirebaseConfig | string): FirebaseApp;
}

export function firebase(): Firebase;

declare class FirebaseError extends Error {
  static fromNative(native: any, message?: string);
  readonly native;
}
