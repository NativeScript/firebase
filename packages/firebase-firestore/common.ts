import {FieldValue} from "@nativescript/firebase-firestore/index.ios";

export type WhereFilterOp =
  '<'
  | '<='
  | '=='
  | '>'
  | '>='
  | '!='
  | 'array-contains'
  | 'array-contains-any'
  | 'in'
  | 'not-in';

export interface IQuery<T extends DocumentData = DocumentData> {

  endAt(snapshot: IDocumentSnapshot<T>): IQuery<T>;

  endAt(fieldValues: IFieldValue[]): IQuery<T>;

  endBefore(snapshot: IDocumentSnapshot<T>): IQuery<T>;

  endBefore(fieldValues: IFieldValue[]): IQuery<T>;

  get(options?: GetOptions): Promise<IQuerySnapshot<T>>;

  limit(limit: number): IQuery<T>;

  limitToLast(limitToLast: number): IQuery<T>;

  onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: IQuerySnapshot<T>) => void });

  onSnapshot(
    options: SnapshotListenOptions,
    observer: {
      complete?: () => void;
      error?: (error: Error) => void;
      next?: (snapshot: IQuerySnapshot<T>) => void;
    }
  );

  onSnapshot(onNext: (snapshot: IQuerySnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void);

  onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: IQuerySnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void);

  orderBy(fieldPath: keyof T | IFieldPath, directionStr?: 'asc' | 'desc'): IQuery<T>;

  startAfter(snapshot: IDocumentSnapshot<T>): IQuery<T>;

  startAfter(fieldValues: IFieldValue[]): IQuery<T>;

  startAt(snapshot: IDocumentSnapshot<T>): IQuery<T>;

  startAt(fieldValues: IFieldValue[]): IQuery<T>;

  where(fieldPath: keyof T | IFieldPath, opStr: WhereFilterOp, value: any): IQuery<T>;
}

export interface ICollectionReference<T extends DocumentData = DocumentData> {
  id: string;
  parent: IDocumentReference<T> | null;
  path: string;

  add(data: T): Promise<IDocumentReference<T>>;

  doc(documentPath?: undefined | string): IDocumentReference<T>;
}

export interface IFieldPath {

  documentId(): IFieldPath;
}

export interface IFieldValue {

  arrayRemove(elements: any[]): IFieldValue;

  arrayUnion(elements: any[]): IFieldValue;

  delete(): IFieldValue;

  increment(n: number): IFieldValue;

  serverTimestamp(): IFieldValue;
}

export interface IGeoPoint {
  latitude: number;
  longitude: number;
}

export interface ITimestamp {
  nanoseconds: number;
  seconds: number;
}

export interface IDocumentChange<T extends DocumentData = DocumentData> {
  doc: IQueryDocumentSnapshot<T>;
  newIndex: number;
  oldIndex: number;
  type: DocumentChangeType;
}

export interface DocumentData {
  [key: string]: any;
}


export interface IDocumentReference<T extends DocumentData = DocumentData> {
  firestore: IFirestore;
  id: string;
  parent: ICollectionReference<T>;
  path: string;

  collection(collectionPath: string): ICollectionReference<T>;

  delete(): Promise<void>;

  get(options?: GetOptions): Promise<IDocumentSnapshot<T>>;

  onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: IDocumentSnapshot<T>) => void });

  onSnapshot(
    options: SnapshotListenOptions,
    observer: {
      complete?: () => void;
      error?: (error: Error) => void;
      next?: (snapshot: IDocumentSnapshot<T>) => void;
    }
  );

  onSnapshot(onNext: (snapshot: IDocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void);

  onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: IDocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void);

  set(data: T, options?: SetOptions): Promise<void>;

  update(data: Partial<{ [K in keyof T]: T[K] | IFieldValue }>): Promise<void>;

  update(field: keyof T | IFieldPath, value: any, moreFieldsAndValues: any[]): Promise<void>;
}

export interface IDocumentSnapshot<T extends DocumentData = DocumentData> {
  exists: boolean;
  id: string;
  metadata: ISnapshotMetadata;
  ref: IDocumentReference<T>;

  data(): T | undefined;

  get<fieldType extends DocumentFieldType>(fieldPath: keyof T | IFieldPath): fieldType;

}

export enum GetOptions {
  Default = 'default',
  Server = 'server',
  Cache = 'cache',
}

export interface IQueryDocumentSnapshot<T extends DocumentData = DocumentData> extends IDocumentSnapshot<T> {
  exists: boolean;

  data(): T;
}

export interface IQuerySnapshot<T extends DocumentData = DocumentData> {
  docs: IQueryDocumentSnapshot<T>[];
  empty: boolean;
  metadata: ISnapshotMetadata;
  query: IQuery<T>;
  size: number;

  docChanges(options?: SnapshotListenOptions): IDocumentChange<T>[];

  forEach(callback: (result: IQueryDocumentSnapshot<T>, index: number) => void, thisArg?: any): void;

}

export interface SetOptions {
  merge: undefined | false | true;
  mergeFields: string[] | IFieldPath[];
}

export interface ISettings {
  cacheSizeBytes: number;
  host: string;
  ignoreUndefinedProperties: boolean;
  persistence: boolean;
  ssl: boolean;
}

export interface SnapshotListenOptions {
  includeMetadataChanges: boolean;
}

export interface ISnapshotMetadata {
  fromCache: boolean;
  hasPendingWrites: boolean;

}


export interface ITransaction {
  delete<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>): ITransaction;

  get<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>): Promise<IDocumentSnapshot<T>>;

  set<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>, data: T, options?: SetOptions): ITransaction;

  update<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | IFieldValue }>): ITransaction;

  update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: IDocumentReference<T>, field: K | IFieldPath, value: T[K], moreFieldsAndValues: any[]): ITransaction;
}

export interface IWriteBatch {
  commit(): Promise<void>;

  delete<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>): IWriteBatch;

  set<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>, data: T, options?: SetOptions): IWriteBatch;

  update<T extends DocumentData = DocumentData>(documentRef: IDocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | IFieldValue }>): IWriteBatch;

  update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: IDocumentReference<T>, field: K | IFieldPath, value: T[K] | IFieldValue, moreFieldAndValues: any[]): IWriteBatch;
}

export enum DocumentChangeType {
  Added = 'added',
  Removed = 'removed',
  Modified = 'modified',
}

export type DocumentFieldType =
  string
  | number
  | boolean
  | { [key: string]: DocumentFieldType }
  | DocumentFieldType[]
  | null
  | ITimestamp
  | IGeoPoint
  | Blob
  | IFieldPath
  | IFieldValue
  | IDocumentReference
  | ICollectionReference;


export interface IBytes {

  toBase64(): string;

  toUint8Array(): Uint8Array;
}



export interface IFirestore {
  useEmulator(host: string, port: number);

  batch(): IWriteBatch;

  clearPersistence(): Promise<void>;

  collection(collectionPath: string): ICollectionReference;

  collectionGroup<T extends DocumentData = DocumentData>(collectionId: string): IQuery<T>;

  disableNetwork(): Promise<void>;

  doc<T extends DocumentData = DocumentData>(documentPath: string): IDocumentReference<T>;

  enableNetwork(): Promise<void>;

  runTransaction(updateFunction: (transaction: ITransaction) => Promise<any>): Promise<any>;

  settings: ISettings;

  terminate(): Promise<void>;

  waitForPendingWrites(): Promise<void>;
}
