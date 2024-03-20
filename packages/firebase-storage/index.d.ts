import { FirebaseApp, FirebaseError } from '@nativescript-asharghi/firebase-core';
import { TaskEvent, StringFormat } from './common';

export { StringFormat, TaskEvent };

export interface TaskSnapshotObserver {
	complete?: () => void;
	error?: (error: FirebaseError) => void;
	next?: (taskSnapshot: ITaskSnapshot) => void;
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

export interface ITask {
	snapshot?: ITaskSnapshot;
	cancel(): boolean;
	on(event: TaskEvent, nextOrObserver?: TaskSnapshotObserver | ((a: ITaskSnapshot) => any), error?: (a: FirebaseError) => any | null, complete?: () => void | null);
	pause(): boolean;
	resume(): boolean;
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

export declare class TaskSnapshot implements ITaskSnapshot {
	readonly native;
	readonly android;

	readonly ios;

	readonly bytesTransferred: number;

	readonly error: FirebaseError;
	readonly metadata: Metadata;
	readonly ref: Reference;
	readonly state;
	readonly task: Task;
	readonly totalBytes: number;
}

export declare class Task implements ITask {
	readonly native;
	readonly android;
	readonly ios;
	readonly snapshot: TaskSnapshot;

	cancel(): boolean;

	on(event: TaskEvent, nextOrObserver?: TaskSnapshotObserver | ((a: TaskSnapshot) => any), error?: (a: FirebaseError) => any, complete?: () => void);

	pause(): boolean;

	resume(): boolean;
}

export declare class ListResult implements IListResult {
	readonly native;
	readonly android;
	readonly ios;

	readonly items: Reference[];
	readonly nextPageToken: string;

	readonly prefixes: Reference[];
}

export declare class Metadata implements IMetadata {
	readonly native;
	readonly android;
	readonly ios;

	readonly bucket: string;

	cacheControl: string;

	contentDisposition: string;

	contentEncoding: string;
	contentLanguage: string;

	contentType: string;

	customMetadata: { [key: string]: string };

	readonly fullPath: string;
	readonly generation: string;
	readonly md5hash: string;
	readonly metageneration: string;
	readonly name: string;
	readonly size: number;
	readonly timeCreated: Date;
	readonly updated: Date;
}

export declare class Reference implements IReference {
	readonly native;
	readonly android;
	readonly ios;
	readonly bucket: string;
	readonly fullPath: string;
	readonly name: string;
	readonly parent: Reference;
	readonly root: Reference;
	readonly storage: Storage;

	child(path: string): Reference;

	delete(): Promise<void>;

	getDownloadURL(): Promise<string>;

	getMetadata(): Promise<Metadata>;

	list(options?: ListOptions): Promise<ListResult>;

	listAll(): Promise<ListResult>;

	put(data: Blob | Uint8Array | ArrayBuffer, metadata?: Metadata): Task;

	putString(data: string, format: StringFormat = StringFormat.RAW, metadata?: Metadata): Task;

	putFile(path: string, metadata?: Metadata): Task;

	updateMetadata(metadata: Metadata): Promise<Metadata>;

	writeToFile(localFilePath: string): Task;
}

export declare class Storage implements IStorage {
	readonly native;
	readonly android;
	readonly ios;
	readonly app: FirebaseApp;

	maxDownloadRetryTime: number;
	maxOperationRetryTime: number;
	maxUploadRetryTime: number;

	constructor(app?: FirebaseApp);

	useEmulator(host: string, port: number);

	ref(path?: string): Reference;

	refFromURL(url: string): Reference;
}

declare module '@nativescript-asharghi/firebase-core' {
	export interface Firebase extends FirebaseStorage {}
}

export interface FirebaseStorage {
	static storage(): Storage;
}
