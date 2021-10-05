import { FirebaseApp, FirebaseError } from '@nativescript/firebase-core';

export enum TaskState {
	CANCELLED = 'cancelled',
	ERROR = 'error',
	PAUSED = 'paused',
	RUNNING = 'running',
	SUCCESS = 'success',
    UNKNOWN = 'unknown'
}

export interface TaskSnapshotObserver {
	complete: () => void;
	error: (error: FirebaseError) => void;
	next: (taskSnapshot: ITaskSnapshot) => void;
}

export interface ITaskSnapshot {
	bytesTransferred: number;
	error: FirebaseError;
	metadata: IMetadata;
	ref: IReference;
	state: TaskState;
	task: ITask;
	totalBytes: number;
}

export enum TaskEvent {
	STATE_CHANGED = 'state_changed',
}

export interface ITask {
	snapshot?: ITaskSnapshot;
	cancel(): boolean;
	on(event: TaskEvent, nextOrObserver?: TaskSnapshotObserver | ((a: ITaskSnapshot) => any), error?: (a: FirebaseError) => any | null, complete?: () => void | null);
	pause(): boolean;
	resume(): boolean;
}

export enum StringFormat {
	BASE64 = 'base64',
	BASE64URL = 'base64url',
	DATA_URL = 'data_url',
	RAW = 'raw',
}

export interface IListResult {
	items: IReference[];
	nextPageToken: string | null;
	prefixes: IReference[];
}

export interface ListOptions {
	maxResults: undefined | number;
	pageToken: undefined | string;
}

export interface IMetadata {
	bucket: string;
	cacheControl: string | null;
	contentDisposition: string | null;
	contentEncoding: string | null;
	contentLanguage: string | null;
	contentType: string | null;
	customMetadata: { [key: string]: string } | null;
	fullPath: string;
	generation: string;
	md5hash: string | null;
	metageneration: string;
	name: string;
	size: number;
	timeCreated: Date;
	updated: Date;
}

export interface IReference {
	bucket: string;
	fullPath: string;
	name: string;
	parent: IReference | null;
	root: IReference;
	storage: IStorage;
	child(path: string): IReference;
	delete(): Promise<void>;
	getDownloadURL(): Promise<string>;
	getMetadata(): Promise<IMetadata>;
	list(options?: ListOptions): Promise<IListResult>;
	listAll(): Promise<IListResult>;
	put(data: Blob | Uint8Array | ArrayBuffer, metadata?: IMetadata): ITask;
	putString(data: string, format?: StringFormat, metadata?: IMetadata): ITask;
	putFile(path: string, metadata?: IMetadata): ITask;
	updateMetadata(metadata: IMetadata): Promise<IMetadata>;
	writeToFile(localFilePath: string): ITask;
}

export interface IStorage {
	readonly app: FirebaseApp;
	maxDownloadRetryTime: number;
	maxOperationRetryTime: number;
	maxUploadRetryTime: number;
  	useEmulator(host: string, port: number);
	ref(path?: undefined | string): IReference;
	refFromURL(url: string): IReference;
}
