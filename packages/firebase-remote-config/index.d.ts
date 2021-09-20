import {FirebaseApp} from "@nativescript/firebase-core";
import {IConfigSettings, IConfigValue, IRemoteConfig} from "./common";

declare class ConfigValue implements IConfigValue {
  readonly native;

  readonly ios;
  readonly android;

  asBoolean(): boolean;

  asNumber(): number;

  asString(): string;

  getSource(): 'default' | 'static' | 'remote';
}

declare class ConfigSettings implements IConfigSettings {
  readonly native;
  readonly ios;
  readonly android;
  fetchTimeMillis: number;
  minimumFetchIntervalMillis: number;
}

export class RemoteConfig implements IRemoteConfig {
  constructor(app?: FirebaseApp);

  readonly native;
  readonly ios;
  readonly android;

  readonly app: FirebaseApp;

  readonly fetchTimeMillis: number;

  readonly lastFetchStatus: 'success' | 'failure' | 'no_fetch_yet' | 'throttled';

  settings: ConfigSettings;

  activate(): Promise<boolean>;

  ensureInitialized(): Promise<void>;

  fetch(expirationDurationSeconds?: number): Promise<void>;

  fetchAndActivate(): Promise<boolean>;

  getAll(): Record<string, ConfigValue>;

  getBoolean(key: string): boolean;

  getNumber(key: string): number;

  getString(key: string): string;

  getValue(key: string): ConfigValue;

  reset(): Promise<void>;

  setDefaults(defaults: ConfigDefaults): Promise<void>;

  setDefaultsFromResource(resourceName: string): Promise<void>;
}


declare module '@nativescript/firebase-core' {
  class Firebase {
    static remoteConfig(app?: FirebaseApp): RemoteConfig;
  }
}
