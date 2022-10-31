import { GetOptions, WhereFilterOp, DocumentFieldType, DocumentChangeType } from './common';

export type WhereFilterOp = '<' | '<=' | '==' | '>' | '>=' | '!=' | 'array-contains' | 'array-contains-any' | 'in' | 'not-in';

export type DocumentFieldType = string | number | boolean | { [key: string]: DocumentFieldType } | DocumentFieldType[] | null | ITimestamp | IGeoPoint | Blob | IFieldPath | IFieldValue | IDocumentReference | ICollectionReference;

export { GetOptions, DocumentChangeType };

import { FirebaseApp } from '@nativescript/firebase-core';

export interface IQuery<T extends DocumentData = DocumentData> {
	endAt(snapshot: IDocumentSnapshot<T>): IQuery<T>;

	endAt(fieldValues: IFieldValue[]): IQuery<T>;

	endBefore(snapshot: IDocumentSnapshot<T>): IQuery<T>;

	endBefore(fieldValues: IFieldValue[]): IQuery<T>;

	get(options?: GetOptions): Promise<IQuerySnapshot<T>>;

	limit(limit: number): IQuery<T>;

	limitToLast(limitToLast: number): IQuery<T>;

	/** NOTE: Although an onCompletion callback can be provided, it will never be called because the snapshot stream is never-ending. */
	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: IQuerySnapshot<T>) => void }): () => void;

	onSnapshot(
		options: SnapshotListenOptions,
		observer: {
			complete?: () => void;
			error?: (error: Error) => void;
			next?: (snapshot: IQuerySnapshot<T>) => void;
		}
	): () => void;

	onSnapshot(onNext: (snapshot: IQuerySnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;

	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: IQuerySnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;

	orderBy(fieldPath: keyof T | IFieldPath, directionStr?: 'asc' | 'desc'): IQuery<T>;

	startAfter(snapshot: IDocumentSnapshot<T>): IQuery<T>;

	startAfter(fieldValues: IFieldValue[]): IQuery<T>;

	startAt(snapshot: IDocumentSnapshot<T>): IQuery<T>;

	startAt(fieldValues: IFieldValue[]): IQuery<T>;

	where(fieldPath: keyof T | IFieldPath, opStr: WhereFilterOp, value: any): IQuery<T>;

	isEqual(other: any): boolean;
}

export interface ICollectionReference<T extends DocumentData = DocumentData> {
	id: string;
	parent: IDocumentReference<T> | null;
	path: string;

	add(data: T): Promise<IDocumentReference<T>>;

	doc(documentPath?: undefined | string): IDocumentReference<T>;
}

export interface IFieldPath {}

export interface IFieldValue {}

export interface IGeoPoint {
	latitude: number;
	longitude: number;
}

export interface ITimestamp {
	nanoseconds: number;
	seconds: number;

	isEqual(ts: ITimestamp): boolean;

	toDate(): Date;

	toMillis(): number;

	valueOf(): string;
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

	/** NOTE: Although an onCompletion callback can be provided, it will never be called because the snapshot stream is never-ending. */
	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: IDocumentSnapshot<T>) => void }): () => void;

	onSnapshot(
		options: SnapshotListenOptions,
		observer: {
			complete?: () => void;
			error?: (error: Error) => void;
			next?: (snapshot: IDocumentSnapshot<T>) => void;
		}
	): () => void;

	onSnapshot(onNext: (snapshot: IDocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;

	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: IDocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;

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

export declare class Transaction implements ITransaction {
	delete<T extends DocumentData = DocumentData>(documentRef: DocumentReference): Transaction;

	get<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>): Promise<DocumentSnapshot<T>>;

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): Transaction;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: T[K], moreFieldsAndValues: any[]): Transaction;
	update(documentRef: any, field: any, value?: any, moreFieldsAndValues?: any): Transaction;

	set<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: T, options?: SetOptions): Transaction;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class SnapshotMetadata implements ISnapshotMetadata {
	readonly fromCache: boolean;
	readonly hasPendingWrites: boolean;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class DocumentSnapshot<T extends DocumentData = DocumentData> implements IDocumentSnapshot<T> {
	readonly exists: boolean;

	readonly id: string;

	readonly metadata: SnapshotMetadata;

	readonly ref: DocumentReference;

	data(): any;

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class DocumentChange implements IDocumentChange {
	readonly doc: QueryDocumentSnapshot;

	readonly newIndex: number;

	oldIndex(): number;

	readonly type: DocumentChangeType;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class Query<T extends DocumentData = DocumentData> implements IQuery<T> {
	endAt(snapshot: DocumentSnapshot<T>): Query;
	endAt(fieldValues: FieldValue[]): Query;
	endAt(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query;

	endBefore(snapshot: DocumentSnapshot<T>): Query;
	endBefore(fieldValues: FieldValue[]): Query;
	endBefore(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query;

	get(options?: GetOptions): Promise<QuerySnapshot>;

	limit(limit: number): Query;

	limitToLast(limitToLast: number): Query;

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void }): () => void;
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void }): () => void;
	onSnapshot(onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;

	orderBy(fieldPath: keyof DocumentData | FieldPath, directionStr: 'asc' | 'desc' = 'asc'): Query;

	startAfter(snapshot: DocumentSnapshot<T>): Query;
	startAfter(fieldValues: FieldValue[]): Query;

	startAt(snapshot: DocumentSnapshot<T>): Query;
	startAt(fieldValues: FieldValue[]): Query;

	where(fieldPath: FieldPath | keyof DocumentData, opStr: WhereFilterOp, value: any): Query;

	isEqual(other: any): boolean;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class QueryDocumentSnapshot<T extends DocumentData = DocumentData> extends DocumentSnapshot<T> implements IQueryDocumentSnapshot<T> {
	data(): any;

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class QuerySnapshot implements IQuerySnapshot {
	readonly docs: QueryDocumentSnapshot[];

	readonly empty: boolean;

	readonly metadata: SnapshotMetadata;

	readonly query: Query;

	readonly size: number;

	docChanges(options?: SnapshotListenOptions): DocumentChange[];

	forEach(callback: (result: QueryDocumentSnapshot, index: number) => void, thisArg?: any): void;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class CollectionReference<T extends DocumentData = DocumentData> extends Query<T> implements ICollectionReference<T> {
	readonly id: string;

	readonly parent: DocumentReference;

	readonly path: string;

	add(data: T): Promise<DocumentReference<T>>;

	doc(documentPath?: string): DocumentReference;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class DocumentReference<T extends DocumentData = DocumentData> implements IDocumentReference<T> {
	readonly firestore: Firestore;

	readonly id: string;

	readonly parent: CollectionReference;

	readonly path: string;

	collection(collectionPath: string): CollectionReference;

	delete(): Promise<void>;

	get(options?: GetOptions): Promise<DocumentSnapshot<T>>;

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void }): () => void;
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void }): () => void;
	onSnapshot(onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;

	set(data: T, options?: SetOptions): Promise<void>;

	update(data: Partial<{ [K in keyof T]: FieldValue | T[K] }>): Promise<void>;
	update(field: FieldPath | keyof T, value: any, moreFieldsAndValues: any[]): Promise<void>;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class FieldPath implements IFieldPath {
	constructor(fieldNames: string[]);
	constructor(...fieldNames: string[]);

	static documentId(): FieldPath;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class FieldValue implements IFieldValue {
	static arrayRemove(elements: any[]): FieldValue;

	static arrayUnion(elements: any[]): FieldValue;

	static delete(): FieldValue;

	static increment(n: number): FieldValue;

	static serverTimestamp(): FieldValue;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export class GeoPoint implements IGeoPoint {
	constructor(latitude: number, longitude: number);

	readonly latitude: number;

	readonly longitude: number;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export class Timestamp implements ITimestamp {
	constructor(seconds: number, nanoseconds: number);

	readonly nanoseconds: number;

	readonly seconds: number;

	static fromDate(date: Date): Timestamp;

	static fromMillis(milliseconds: number): Timestamp;

	static now(): Timestamp;

	isEqual(ts: Timestamp): boolean;

	toDate(): Date;

	toMillis(): number;

	valueOf(): string;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class WriteBatch implements IWriteBatch {
	commit(): Promise<void>;

	delete(documentRef: DocumentReference): WriteBatch;

	set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): WriteBatch;

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): WriteBatch;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: FieldValue | T[K], moreFieldAndValues: any[]): WriteBatch;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class Settings implements ISettings {
	cacheSizeBytes: number;

	host: string;

	ignoreUndefinedProperties: boolean;

	persistence: boolean;

	ssl: boolean;

	readonly android: any;
	readonly ios: any;
	readonly native: any;
}

export declare class Firestore implements IFirestore {
	constructor(app?: FirebaseApp);

	useEmulator(host: string, port: number);

	batch(): WriteBatch;

	collection(collectionPath: string): CollectionReference;

	clearPersistence(): Promise<void>;

	collectionGroup(collectionId: string): Query;

	disableNetwork(): Promise<void>;

	doc(documentPath: string): DocumentReference;

	enableNetwork(): Promise<void>;

	runTransaction(updateFunction: (transaction: Transaction) => Promise<any>): Promise<any>;

	settings: Settings;

	terminate(): Promise<void>;

	waitForPendingWrites(): Promise<void>;

	readonly android: any;
	readonly ios: any;
	readonly native: any;

	readonly app: FirebaseApp;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseFirestore {}
}

export interface FirebaseFirestore {
	static firestore(app?: FirebaseApp): Firestore;
}
