import { FirebaseApp, FirebaseError, deserialize, serialize, firebase } from '@nativescript/firebase-core';
import {
  IMetadata,
  IListResult,
  IReference,
  IStorage,
  ITask,
  ITaskSnapshot,
  TaskSnapshotObserver,
  ListOptions,
  TaskState,
  TaskEvent,
  StringFormat
} from './common';
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
  #native: FIRStorageTaskSnapshot;

  static fromNative(value: FIRStorageTaskSnapshot) {
    if (value instanceof FIRStorageTaskSnapshot) {
      const ss = new TaskSnapshot();
      ss.#native = value;
      return ss;
    }
    return null;
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  get bytesTransferred(): number {
    return this.native?.progress?.completedUnitCount;
  }

  get error(): FirebaseError {
    if (!this.native.error) {
      return null
    }
    return FirebaseError.fromNative(this.native.error);
  }

  get metadata(): Metadata {
    return Metadata.fromNative(this.native.metadata);
  }

  get ref(): Reference {
    return Reference.fromNative(this.native.reference);
  }

  get state() {
    switch (this.native.status) {
      case FIRStorageTaskStatus.Failure:
        return TaskState.ERROR;
      case FIRStorageTaskStatus.Pause:
        return TaskState.PAUSED;
      case FIRStorageTaskStatus.Resume:
      case FIRStorageTaskStatus.Progress:
        return TaskState.RUNNING;
      case FIRStorageTaskStatus.Success:
        return TaskState.SUCCESS;
      default:
        return TaskState.UNKNOWN;
    }
  }

  get task(): Task {
    return Task.fromNative(this.native.task as any);
  }

  get totalBytes(): number {
    return this.native?.progress?.totalUnitCount;
  }
}

export class Task implements ITask {
  #native: FIRStorageUploadTask | FIRStorageDownloadTask;

  static fromNative(value: FIRStorageUploadTask | FIRStorageDownloadTask) {
    if (value instanceof FIRStorageUploadTask || value instanceof FIRStorageDownloadTask) {
      const task = new Task();
      task.#native = value;
      return task;
    }
    return null;
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  get snapshot(): TaskSnapshot {
    return TaskSnapshot.fromNative(this.native.snapshot);
  }

  cancel(): boolean {
    this.native?.cancel();
    return this.native.snapshot.progress.cancelled;
  }

  on(event: TaskEvent, nextOrObserver?: TaskSnapshotObserver | ((a: TaskSnapshot) => any), error?: (a: FirebaseError) => any, complete?: () => void) {
    if (event !== TaskEvent.STATE_CHANGED) {
      return;
    }

    if (nextOrObserver) {
      if (typeof nextOrObserver === 'function') {
        this.native.observeStatusHandler(FIRStorageTaskStatus.Progress, (snapshot) => {
          nextOrObserver(TaskSnapshot.fromNative(snapshot));
        });

        this.native.observeStatusHandler(FIRStorageTaskStatus.Pause, (snapshot) => {
          nextOrObserver(TaskSnapshot.fromNative(snapshot));
        });

        this.native.observeStatusHandler(FIRStorageTaskStatus.Resume, (snapshot) => {
          nextOrObserver(TaskSnapshot.fromNative(snapshot));
        });
      } else if (typeof nextOrObserver === 'object') {
        this.native.observeStatusHandler(FIRStorageTaskStatus.Progress, (snapshot) => {
          nextOrObserver?.next(TaskSnapshot.fromNative(snapshot));
        });

        this.native.observeStatusHandler(FIRStorageTaskStatus.Pause, (snapshot) => {
          nextOrObserver?.next(TaskSnapshot.fromNative(snapshot));
        });

        this.native.observeStatusHandler(FIRStorageTaskStatus.Resume, (snapshot) => {
          nextOrObserver?.next(TaskSnapshot.fromNative(snapshot));
        });
      }
    }

    if (error || typeof nextOrObserver === 'function' || typeof nextOrObserver === 'object') {
      this.native.observeStatusHandler(FIRStorageTaskStatus.Failure, (snapshot) => {
        if (nextOrObserver) {
          if (typeof nextOrObserver === 'function') {
            nextOrObserver(TaskSnapshot.fromNative(snapshot));
          } else if (typeof nextOrObserver === 'object') {
            nextOrObserver?.next(TaskSnapshot.fromNative(snapshot));
          }
        }

        if (error) {
          error(FirebaseError.fromNative(snapshot.error));
        }
      });
    }

    if (complete || typeof nextOrObserver === 'function' || typeof nextOrObserver === 'object') {
      this.native.observeStatusHandler(FIRStorageTaskStatus.Success, (snapshot) => {
        if (nextOrObserver) {
          if (typeof nextOrObserver === 'function') {
            nextOrObserver(TaskSnapshot.fromNative(snapshot));
          } else if (typeof nextOrObserver === 'object') {
            nextOrObserver?.next(TaskSnapshot.fromNative(snapshot));
            nextOrObserver?.complete?.();
          }
        }
        if (complete) {
          complete();
        }
      });
    }
  }

  pause(): boolean {
    this.native?.pause();
    return this.native.snapshot.progress.paused;
  }

  resume(): boolean {
    this.native?.resume();
    return true;
  }
}

export class ListResult implements IListResult {
  #native: FIRStorageListResult;

  static fromNative(value: FIRStorageListResult) {
    if (value instanceof FIRStorageListResult) {
      const list = new ListResult();
      list.#native = value;
      return list;
    }
    return null;
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  get items(): Reference[] {
    const items = this.native.items;
    const count = items.count;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(Reference.fromNative(items.objectAtIndex(i)));
    }
    return result;
  }

  get nextPageToken(): string {
    return this.native.pageToken;
  }

  get prefixes(): Reference[] {
    const items = this.native.prefixes;
    const count = items.count;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(Reference.fromNative(items.objectAtIndex(i)));
    }
    return result;
  }
}

export class Metadata implements IMetadata {
  #native: FIRStorageMetadata;

  constructor() {
    this.#native = FIRStorageMetadata.new();
  }

  static fromNative(value: FIRStorageMetadata) {
    if (value instanceof FIRStorageMetadata) {
      const meta = new Metadata();
      meta.#native = value;
      return meta;
    }
    return null;
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  get bucket(): string {
    return this.native?.bucket;
  }

  get cacheControl(): string {
    return this.native?.cacheControl;
  }

  set cacheControl(value) {
    this.native.cacheControl = value;
  }

  get contentDisposition(): string {
    return this.native?.contentDisposition;
  }

  set contentDisposition(value) {
    this.native.contentDisposition = value;
  }

  get contentEncoding(): string {
    return this.native?.contentEncoding;
  }

  set contentEncoding(value) {
    this.native.contentEncoding = value;
  }

  get contentLanguage(): string {
    return this.native?.contentLanguage;
  }

  set contentLanguage(value) {
    this.native.contentLanguage = value;
  }

  get contentType(): string {
    return this.native?.contentType;
  }

  set contentType(value) {
    this.native.contentType = value;
  }

  get customMetadata(): { [key: string]: string } {
    return deserialize(this.native?.customMetadata);
  }

  set customMetadata(value) {
    this.native.customMetadata = serialize(this.native.customMetadata);
  }

  get fullPath(): string {
    return this.native?.path;
  }

  get generation(): string {
    return String(this.native.generation);
  }

  get md5hash(): string {
    return this.native?.md5Hash;
  }

  get metageneration(): string {
    return String(this.native.metageneration);
  }

  get name(): string {
    return this.native?.name;
  }

  get size(): number {
    return this.native?.size;
  }

  get timeCreated() {
    return this.native.timeCreated;
  }

  get updated() {
    return this.native.updated;
  }
}

export class Reference implements IReference {
  #native: FIRStorageReference;

  static fromNative(value: FIRStorageReference) {
    if (value instanceof FIRStorageReference) {
      const ref = new Reference();
      ref.#native = value;
      return ref;
    }
    return null;
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  get bucket(): string {
    return this.native?.bucket;
  }

  get fullPath(): string {
    return this.native?.fullPath;
  }

  get name(): string {
    return this.native?.name;
  }

  get parent(): Reference {
    return Reference.fromNative(this.native.parent());
  }

  get root(): Reference {
    return Reference.fromNative(this.native.root());
  }

  get storage() {
    return Storage.fromNative(this.native.storage);
  }

  child(path: string): Reference {
    return Reference.fromNative(this.native.child(path));
  }

  delete(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.native.deleteWithCompletion((error) => {
        if (error) {
          reject(FirebaseError.fromNative(error));
        } else {
          resolve();
        }
      });
    });
  }

  getDownloadURL(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.native.downloadURLWithCompletion((url, error) => {
        if (error) {
          reject(FirebaseError.fromNative(error));
        } else {
          resolve(url.absoluteString);
        }
      });
    });
  }

  getMetadata(): Promise<Metadata> {
    return new Promise((resolve, reject) => {
      this.native.metadataWithCompletion((storageMetadata, error) => {
        if (error) {
          reject(FirebaseError.fromNative(error));
        } else {
          resolve(Metadata.fromNative(storageMetadata));
        }
      });
    });
  }

  list(options?: ListOptions): Promise<ListResult> {
    return new Promise((resolve, reject) => {
      if (options?.pageToken) {
        this.native.listWithMaxResultsPageTokenCompletion(options?.maxResults ?? 1000, options.pageToken, (result, error) => {
          if (error) {
            reject(FirebaseError.fromNative(error));
          } else {
            resolve(ListResult.fromNative(result));
          }
        });
      } else {
        this.native.listWithMaxResultsCompletion(options?.maxResults ?? 1000, (result, error) => {
          if (error) {
            reject(FirebaseError.fromNative(error));
          } else {
            resolve(ListResult.fromNative(result));
          }
        });
      }
    });
  }

  listAll(): Promise<ListResult> {
    return new Promise((resolve, reject) => {
      this.native.listAllWithCompletion((result, error) => {
        if (error) {
          reject(FirebaseError.fromNative(error));
        } else {
          resolve(ListResult.fromNative(result));
        }
      });
    });
  }

  put(data: Blob | Uint8Array | ArrayBuffer, metadata?: Metadata): Task {
    if (data instanceof Blob) {
      const ab = (Blob as any).InternalAccessor.getBuffer(data).buffer.slice(0);
      if (metadata) {
        return Task.fromNative(this.native.putDataMetadata(NSData.dataWithData(ab), metadata.native));
      }
      return Task.fromNative(this.native.putData(NSData.dataWithData(ab)));
    } else if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
      if (metadata) {
        return Task.fromNative(this.native.putDataMetadata(NSData.dataWithData(data as any), metadata.native));
      }

      return Task.fromNative(this.native.putData(NSData.dataWithData(data as any)));
    }
  }

  putString(data: string, format?: StringFormat, metadata?: Metadata): Task {
    let nsData;
    switch (format) {
      case StringFormat.BASE64:
        nsData = NSData.alloc().initWithBase64EncodedStringOptions(data, 0);
        break;
      case StringFormat.BASE64URL:
        let base64Encoded = data.replace(/-/g, '+').replace(/_/g, '/');

        while (base64Encoded.length % 4 != 0) {
          base64Encoded = base64Encoded + '=';
        }
        nsData = NSData.alloc().initWithBase64EncodedStringOptions(data, 0);
        break;
      case StringFormat.DATA_URL:
        const base64 = b64WithoutPrefix(data);
        const mime = getMIMEforBase64String(data);

        const meta = metadata || new Metadata();
        if (!metadata.contentType) {
          meta.contentType = mime;
        }
        return Task.fromNative(this.native.putDataMetadata(NSData.alloc().initWithBase64EncodedStringOptions(base64, 0), meta.native));
      default:
        const text = NSString.stringWithString(data);
        const nativeData = text.dataUsingEncoding(NSUTF8StringEncoding);
        const encodedString = nativeData.base64EncodedStringWithOptions(0);
        nsData = NSData.alloc().initWithBase64EncodedStringOptions(encodedString, 0);
        break;
    }

    if (metadata) {
      return Task.fromNative(this.native.putDataMetadata(nsData, metadata.native));
    }

    return Task.fromNative(this.native.putData(nsData));
  }

  putFile(path: string, metadata?: Metadata): Task {
    let task: Task = null;
    try {
      const url = path?.startsWith?.('/') ? NSURL.fileURLWithPath(path) : NSURL.URLWithString(path)
      if (metadata) {
        task = Task.fromNative(this.native.putFileMetadata(url, metadata.native));
      } else {
        task = Task.fromNative(this.native.putFile(url));
      }
    } catch (e) { }
    return task;
  }

  updateMetadata(metadata: Metadata): Promise<Metadata> {
    return new Promise((resolve, reject) => {
      this.native.updateMetadataCompletion(metadata.native, (metadata, error) => {
        if (error) {
          reject(FirebaseError.fromNative(error));
        }
        {
          resolve(Metadata.fromNative(metadata));
        }
      });
    });
  }

  writeToFile(localFilePath: string): Task {
    let url;
    if (localFilePath?.indexOf('file:')) {
      url = NSURL.URLWithString(localFilePath);
    } else {
      url = NSURL.fileURLWithPath(localFilePath);
    }
    return Task.fromNative(this.native.writeToFile(url));
  }
}

export class Storage implements IStorage {
  #native: FIRStorage;
  #app: FirebaseApp;

  constructor(app?: FirebaseApp) {
    if (app?.native) {
      this.#native = FIRStorage.storageForApp(app.native);
    } else {
      if (defaultStorage) {
        return defaultStorage;
      }
      defaultStorage = this;
      this.#native = FIRStorage.storage();
    }
  }

  static fromNative(storage: FIRStorage) {
    if (storage instanceof FIRStorage) {
      const store = new Storage();
      store.#native = storage;
      return store;
    }
    return null;
  }

  useEmulator(host: string, port: number) {
    this.native.useEmulatorWithHostPort(host, port);
  }

  ref(path?: string): Reference {
    return Reference.fromNative(this.native.referenceWithPath(path || '/'));
  }

  refFromURL(url: string): Reference {
    return Reference.fromNative(this.native.referenceForURL(url));
  }

  get native() {
    return this.#native;
  }

  get ios() {
    return this.native;
  }

  get app(): FirebaseApp {
    if (!this.#app) {
      // @ts-ignore
      this.#app = FirebaseApp.fromNative(this.native.app);
    }
    return this.#app;
  }

  get maxDownloadRetryTime(): number {
    return this.native?.maxDownloadRetryTime;
  }

  set maxDownloadRetryTime(value) {
    this.native.maxDownloadRetryTime = value;
  }

  get maxOperationRetryTime(): number {
    return this.native?.maxOperationRetryTime;
  }

  set maxOperationRetryTime(value) {
    this.native.maxOperationRetryTime = value;
  }

  get maxUploadRetryTime(): number {
    return this.native?.maxUploadRetryTime;
  }

  set maxUploadRetryTime(value) {
    this.native.maxUploadRetryTime = value;
  }
}
