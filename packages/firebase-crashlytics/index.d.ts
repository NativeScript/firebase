import {FirebaseApp, Firebase} from '@nativescript/firebase-core';
import {ICrashlytics} from './common';

declare class Crashlytics implements ICrashlytics {
  readonly native;
  readonly android;
  readonly ios;
  readonly app: FirebaseApp;

  checkForUnsentReports(): Promise<boolean>;

  crash(): void;

  deleteUnsentReports();

  didCrashOnPreviousExecution(): boolean;

  log(message: string): void;

  recordError(error: any): void;

  sendUnsentReports(): void;

  setAttribute(name: string, value: string | number | boolean);

  setAttributes(attributes: { [key: string]: string | number | boolean });

  setCrashlyticsCollectionEnabled(enabled: boolean);

  setUserId(userId: string);
}


declare module '@nativescript/firebase-core' {
  class Firebase {
    static crashlytics(): Crashlytics;
  }
}
