export interface IConfigValue {
	asBoolean(): boolean;
	asNumber(): number;
	asString(): string;
	getSource(): 'default' | 'static' | 'remote';
}

export class IConfigSettings {
	fetchTimeMillis: number;
	minimumFetchIntervalMillis: number;
}

export interface ConfigDefaults {
	[key: string]: number | string | boolean;
}

export interface IRemoteConfig {
	readonly fetchTimeMillis: number;
	readonly lastFetchStatus: 'success' | 'failure' | 'no_fetch_yet' | 'throttled';
	settings: IConfigSettings;
	activate(): Promise<boolean>;
	ensureInitialized(): Promise<void>;
	fetch(expirationDurationSeconds?: undefined | number): Promise<void>;
	fetchAndActivate(): Promise<boolean>;
	getAll(): Record<string, IConfigValue>;
	getBoolean(key: string): boolean;
	getNumber(key: string): number;
	getString(key: string): string;
	getValue(key: string): IConfigValue;
	reset(): Promise<void>;
	setDefaults(defaults: ConfigDefaults): Promise<void>;
	setDefaultsFromResource(resourceName: string): Promise<void>;
}
