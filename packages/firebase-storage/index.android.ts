import { FirebaseApp, FirebaseError, firebase } from '@nativescript-asharghi/firebase-core';
import { TaskEvent, StringFormat } from './common';
import { IMetadata, IListResult, IReference, IStorage, ITask, ITaskSnapshot, TaskSnapshotObserver, ListOptions } from '.';

import { b64WithoutPrefix, getMIMEforBase64String } from './utils';

export { TaskSnapshotObserver, StringFormat, TaskEvent };

let defaultStorage: Storage;
const fb = firebase();
Object.defineProperty(fb, 'storage', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultStorage) {
				defaultStorage = new Storage();
			}
			return defaultStorage;
		}

		return new Storage(app);
	},
	writable: false,
});

export class TaskSnapshot implements ITaskSnapshot {
	_native: com.google.firebase.storage.FileDownloadTask.TaskSnapshot | com.google.firebase.storage.UploadTask.TaskSnapshot;

	static fromNative(value: com.google.firebase.storage.FileDownloadTask.TaskSnapshot | com.google.firebase.storage.UploadTask.TaskSnapshot) {
		if (value instanceof com.google.firebase.storage.FileDownloadTask.TaskSnapshot || value instanceof com.google.firebase.storage.UploadTask.TaskSnapshot) {
			const ss = new TaskSnapshot();
			ss._native = value;
			return ss;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get bytesTransferred(): number {
		return this.native?.getBytesTransferred?.();
	}

	get error(): FirebaseError {
		const error = this.native.getError?.();

		if (error) {
			return FirebaseError.fromNative(error);
		}
		return null;
	}

	get metadata(): Metadata {
		return Metadata.fromNative(this.native.getStorage().getMetadata());
	}

	get ref(): Reference {
		return Reference.fromNative(this.native.getStorage());
	}

	get state() {
		return org.nativescript.firebase.storage.FirebaseStorage.StorageReference.getStatus(this.native) as any;
	}

	get task(): Task {
		return Task.fromNative(this.native.getTask() as any);
	}

	get totalBytes(): number {
		return this.native?.getTotalByteCount?.();
	}
}

export class Task implements ITask {
	_native: com.google.firebase.storage.FileDownloadTask | com.google.firebase.storage.UploadTask;

	static fromNative(value: com.google.firebase.storage.FileDownloadTask | com.google.firebase.storage.UploadTask) {
		if (value instanceof com.google.firebase.storage.FileDownloadTask || value instanceof com.google.firebase.storage.UploadTask) {
			const task = new Task();
			task._native = value;
			return task;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get snapshot(): TaskSnapshot {
		return TaskSnapshot.fromNative(this.native.getSnapshot?.());
	}

	cancel(): boolean {
		return this.native?.cancel();
	}

	on(event: TaskEvent, nextOrObserver?: TaskSnapshotObserver | ((a: TaskSnapshot) => any), error?: (a: FirebaseError) => any, complete?: () => void) {
		if (event !== TaskEvent.STATE_CHANGED) {
			return;
		}
		let hasNextOrObserver = false;
		if (nextOrObserver) {
			if (typeof nextOrObserver === 'function') {
				hasNextOrObserver = true;
			} else if (typeof nextOrObserver === 'object') {
				hasNextOrObserver = true;
			}
		}
		org.nativescript.firebase.storage.FirebaseStorage.StorageTask.on(
			this.native,
			hasNextOrObserver,
			!!error,
			!!complete,
			new org.nativescript.firebase.storage.FirebaseStorage.StorageTask.Callback<any>({
				onNextOrObserver(param0) {
					if (hasNextOrObserver) {
						const task = TaskSnapshot.fromNative(param0);
						if (typeof nextOrObserver === 'function') {
							nextOrObserver(task);
						} else {
							nextOrObserver?.next(task);
						}
					}
				},
				onComplete() {
					if (hasNextOrObserver) {
						if (typeof nextOrObserver === 'object') {
							nextOrObserver?.complete?.();
						}
					}
					complete?.();
				},
				onError(param0) {
					if (nextOrObserver) {
						if (typeof nextOrObserver === 'object') {
							nextOrObserver?.error?.(FirebaseError.fromNative(param0));
						}
					}
					error?.(FirebaseError.fromNative(param0));
				},
			})
		);
	}

	pause(): boolean {
		return this.native?.pause();
	}

	resume() {
		return this.native?.resume();
	}
}

export class ListResult implements IListResult {
	_native: com.google.firebase.storage.ListResult;

	static fromNative(value: com.google.firebase.storage.ListResult) {
		if (value instanceof com.google.firebase.storage.ListResult) {
			const list = new ListResult();
			list._native = value;
			return list;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get items(): Reference[] {
		const items = this.native.getItems?.();
		const count = items.size();
		const result = [];
		for (let i = 0; i < count; i++) {
			result.push(Reference.fromNative(items.get(i)));
		}
		return result;
	}

	get nextPageToken(): string {
		return this.native.getPageToken?.();
	}

	get prefixes(): Reference[] {
		const items = this.native.getPrefixes?.();
		const count = items.size();
		const result = [];
		for (let i = 0; i < count; i++) {
			result.push(Reference.fromNative(items.get(i)));
		}
		return result;
	}
}

export class Metadata implements IMetadata {
	_native: com.google.firebase.storage.StorageMetadata;
	_builder: com.google.firebase.storage.StorageMetadata.Builder;

	constructor() {
		this._builder = new com.google.firebase.storage.StorageMetadata.Builder();
	}

	static fromNative(value: com.google.firebase.storage.StorageMetadata) {
		if (value instanceof com.google.firebase.storage.StorageMetadata) {
			const meta = new Metadata();
			meta._native = value;
			meta._builder = null;
			return meta;
		}
		return null;
	}

	get native() {
		if (this._builder) {
			this._native = this._builder.build();
		}
		return this._native;
	}

	get android() {
		return this.native;
	}

	get bucket(): string {
		return this.native.getBucket?.();
	}

	private _createBuilder() {
		if (this._native) {
			this._builder = new com.google.firebase.storage.StorageMetadata.Builder(this._native);
		} else {
			this._builder = new com.google.firebase.storage.StorageMetadata.Builder();
		}
	}

	get cacheControl(): string {
		return this.native.getCacheControl?.();
	}

	set cacheControl(value) {
		if (!this._builder) {
			this._createBuilder();
		}
		this._builder.setCacheControl?.(value);
	}

	get contentDisposition(): string {
		return this.native.getContentDisposition?.();
	}

	set contentDisposition(value) {
		if (!this._builder) {
			this._createBuilder();
		}
		this._builder.setContentDisposition?.(value);
	}

	get contentEncoding(): string {
		return this.native.getContentEncoding?.();
	}

	set contentEncoding(value) {
		if (!this._builder) {
			this._createBuilder();
		}
		this._builder.setContentEncoding?.(value);
	}

	get contentLanguage(): string {
		return this.native.getContentLanguage?.();
	}

	set contentLanguage(value) {
		if (!this._builder) {
			this._createBuilder();
		}
		this._builder.setContentLanguage?.(value);
	}

	get contentType(): string {
		return this.native.getContentType?.();
	}

	set contentType(value) {
		if (!this._builder) {
			this._createBuilder();
		}
		this._builder.setContentType?.(value);
	}

	get customMetadata(): { [key: string]: string } {
		const meta = org.nativescript.firebase.storage.FirebaseStorage.StorageMetadata.getCustomMetadata(this.native);
		let result = {};
		try {
			result = JSON.parse(meta);
		} catch (e) {}
		return result;
	}

	set customMetadata(value) {
		if (!this._builder) {
			this._createBuilder();
		}
		try {
			org.nativescript.firebase.storage.FirebaseStorage.StorageMetadata.setCustomMetadata(this._builder, JSON.stringify(value));
		} catch (e) {}
	}

	get fullPath(): string {
		return this.native.getPath?.();
	}

	get generation(): string {
		return this.native.getGeneration?.();
	}

	get md5hash(): string {
		return this.native?.getMd5Hash?.();
	}

	get metageneration(): string {
		return this.native.getMetadataGeneration?.();
	}

	get name(): string {
		return this.native.getName?.();
	}

	get size(): number {
		return this.native.getSizeBytes?.();
	}

	get timeCreated() {
		const time = this.native.getCreationTimeMillis?.();
		if (time) {
			return new Date(time);
		}
		return undefined;
	}

	get updated() {
		const time = this.native.getUpdatedTimeMillis?.();
		if (time) {
			return new Date(time);
		}
		return undefined;
	}
}

export class Reference implements IReference {
	_native: com.google.firebase.storage.StorageReference;

	static fromNative(value: com.google.firebase.storage.StorageReference) {
		if (value instanceof com.google.firebase.storage.StorageReference) {
			const ref = new Reference();
			ref._native = value;
			return ref;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get bucket(): string {
		return this.native?.getBucket?.();
	}

	get fullPath(): string {
		return this.native?.getPath?.();
	}

	get name(): string {
		return this.native?.getName?.();
	}

	get parent(): Reference {
		return Reference.fromNative(this.native.getParent?.());
	}

	get root(): Reference {
		return Reference.fromNative(this.native.getRoot?.());
	}

	get storage() {
		return Storage.fromNative(this.native.getStorage());
	}

	child(path: string): Reference {
		return Reference.fromNative(this.native.child(path));
	}

	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.storage.FirebaseStorage.StorageReference.delete(
				this.native,
				new org.nativescript.firebase.storage.FirebaseStorage.Callback<java.lang.Void>({
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
					onSuccess(param0) {
						resolve();
					},
				})
			);
		});
	}

	getDownloadURL(): Promise<string> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.storage.FirebaseStorage.StorageReference.getDownloadURL(
				this.native,
				new org.nativescript.firebase.storage.FirebaseStorage.Callback<android.net.Uri>({
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
					onSuccess(param0) {
						resolve(param0.toString());
					},
				})
			);
		});
	}

	getMetadata(): Promise<Metadata> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.storage.FirebaseStorage.StorageReference.getMetadata(
				this.native,
				new org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.StorageMetadata>({
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
					onSuccess(param0) {
						resolve(Metadata.fromNative(param0));
					},
				})
			);
		});
	}

	list(options?: ListOptions): Promise<ListResult> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.storage.FirebaseStorage.StorageReference.list(
				this.native,
				options?.maxResults ?? 1000,
				options.pageToken || null,
				new org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.ListResult>({
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
					onSuccess(param0) {
						resolve(ListResult.fromNative(param0));
					},
				})
			);
		});
	}

	listAll(): Promise<ListResult> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.storage.FirebaseStorage.StorageReference.listAll(
				this.native,
				new org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.ListResult>({
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
					onSuccess(param0) {
						resolve(ListResult.fromNative(param0));
					},
				})
			);
		});
	}

	put(data: Blob | Uint8Array | ArrayBuffer, metadata?: Metadata): Task {
		if (data instanceof Blob) {
			const ab = (Blob as any).InternalAccessor.getBuffer(data).buffer.slice(0);
			if (metadata) {
				return Task.fromNative(this.native.putBytes(Array.from(ab), metadata.native));
			}
			return Task.fromNative(this.native.putBytes(Array.from(ab)));
		} else if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
			if (metadata) {
				return Task.fromNative(this.native.putBytes(Array.from(data as any), metadata.native));
			}
			return Task.fromNative(this.native.putBytes(Array.from(data as any)));
		}
		return null;
	}

	putString(data: string, format: StringFormat = StringFormat.RAW, metadata?: Metadata): Task {
		switch (format) {
			case StringFormat.DATA_URL:
				{
					const base64 = b64WithoutPrefix(data);
					const mime = getMIMEforBase64String(data);

					const meta = metadata || new Metadata();
					if (!metadata.contentType) {
						meta.contentType = mime;
					}

					org.nativescript.firebase.storage.FirebaseStorage.StorageReference.putString(this.native, base64, format, meta.native);
				}
				break;
			default:
				return Task.fromNative(org.nativescript.firebase.storage.FirebaseStorage.StorageReference.putString(this.native, data, format, metadata?.native || null));
		}
	}

	putFile(path: string, metadata?: Metadata): Task {
		let task: Task = null;
		if (typeof path === 'string' && path.startsWith('/')) {
			path = `file://${path}`;
		}
		try {
			if (metadata) {
				task = Task.fromNative(this.native.putFile(android.net.Uri.parse(path), metadata.native));
			} else {
				task = Task.fromNative(this.native.putFile(android.net.Uri.parse(path)));
			}
		} catch (e) {}
		return task;
	}

	updateMetadata(metadata: Metadata): Promise<Metadata> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.storage.FirebaseStorage.StorageReference.updateMetadata(
				this.native,
				metadata.native,
				new org.nativescript.firebase.storage.FirebaseStorage.Callback<com.google.firebase.storage.StorageMetadata>({
					onError(param0) {
						reject(FirebaseError.fromNative(param0));
					},
					onSuccess(param0) {
						resolve(Metadata.fromNative(param0));
					},
				})
			);
		});
	}

	writeToFile(localFilePath: string): Task {
		return Task.fromNative(this.native.getFile(new java.io.File(localFilePath)));
	}
}

export class Storage implements IStorage {
	_native: com.google.firebase.storage.FirebaseStorage;
	_app: FirebaseApp;

	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this._native = com.google.firebase.storage.FirebaseStorage.getInstance(app.native);
		} else {
			if (defaultStorage) {
				return defaultStorage;
			}
			defaultStorage = this;
			this._native = com.google.firebase.storage.FirebaseStorage.getInstance();
		}
	}

	static fromNative(storage: com.google.firebase.storage.FirebaseStorage) {
		if (storage instanceof com.google.firebase.storage.FirebaseStorage) {
			const store = new Storage();
			store._native = storage;
			return store;
		}
		return null;
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulator(host === 'localhost' || host === '127.0.0.1' ? '10.0.2.2' : host, port);
	}

	ref(path?: string): Reference {
		return Reference.fromNative(this.native.getReference(path || '/'));
	}

	refFromURL(url: string): Reference {
		return Reference.fromNative(this.native.getReferenceFromUrl(url));
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.app);
		}
		return this._app;
	}

	get maxDownloadRetryTime(): number {
		return this.native?.getMaxDownloadRetryTimeMillis?.() ?? 0 / 1000;
	}

	set maxDownloadRetryTime(value) {
		this.native.setMaxDownloadRetryTimeMillis?.(value * 1000);
	}

	get maxOperationRetryTime(): number {
		return this.native?.getMaxOperationRetryTimeMillis?.() ?? 0 / 1000;
	}

	set maxOperationRetryTime(value) {
		this.native.setMaxOperationRetryTimeMillis?.(value * 1000);
	}

	get maxUploadRetryTime(): number {
		return this.native?.getMaxUploadRetryTimeMillis?.() ?? 0 / 1000;
	}

	set maxUploadRetryTime(value) {
		this.native.setMaxUploadRetryTimeMillis(value * 1000);
	}
}
