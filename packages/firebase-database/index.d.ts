import { Firebase, FirebaseApp } from '@nativescript/firebase-core';
import { IDataSnapshot, IDatabase, IOnDisconnect, EventType, IQuery, IReference, IThenableReference, TransactionResult } from './common';

declare class OnDisconnect implements IOnDisconnect {
	readonly native: any;
	readonly android: any;
	readonly ios: any;

	cancel(onComplete?: (error: FirebaseError) => void): Promise<void>;

	remove(onComplete?: (error: FirebaseError) => void): Promise<void>;

	set(value: any, onComplete?: (error: FirebaseError) => void): Promise<void>;

	setWithPriority(value: any, priority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void>;

	update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void): Promise<void>;
}

declare class Query implements IQuery {
	readonly native: any;
	readonly android: any;
	readonly ios: any;

	get ref(): Reference;

	endAt(value: string | number | boolean, key?: string): Query;

	equalTo(value: string | number | boolean, key?: string): Query;

	keepSynced(bool: boolean);

	limitToFirst(limit: number): Query;

	limitToLast(limit: number): Query;

	off(eventType?: EventType, callback?: (a: DataSnapshot, b: string) => void, context?: Record<string, any>): void;

	on(eventType: EventType, callback: (data: DataSnapshot, previousChildKey: string) => void, cancelCallbackOrContext?: (a: FirebaseError) => void | Record<string, any>, context?: Record<string, any>): (a: DataSnapshot, b: string) => void;

	once(eventType: EventType, successCallback?: (a: DataSnapshot, b: string) => any, failureCallbackContext?: (a: FirebaseError) => void | Record<string, any>): Promise<DataSnapshot>;

	orderByChild(path: string): Query;

	orderByKey(): Query;

	orderByPriority(): Query;

	orderByValue(): Query;

	startAt(value: string | number | boolean, key?: string): Query;
}

declare class ServerValue {
	readonly native: any;
	readonly android: any;
	readonly ios: any;
	
	static timeStamp(): ServerValue;
	static increment(count: number): ServerValue;
}

declare class Reference extends Query implements IReference {
	readonly native: any;
	readonly android: any;
	readonly ios: any;

	readonly key: string;
	readonly parent: Reference;
	readonly ref: Reference;
	readonly root: Reference;

	child(path: string): Reference;

	onDisconnect(): OnDisconnect;

	push(value?: any, onComplete?: () => void): IThenableReference;

	remove(onComplete?: (error: FirebaseError) => void): Promise<void>;

	set(value: any, onComplete?: (error: FirebaseError) => void): Promise<void>;

	setPriority(priority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void>;

	setWithPriority(newVal: any, newPriority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void>;

	transaction(transactionUpdate: (currentData: object) => object, onComplete?: (error: FirebaseError, committed: boolean, finalResult: any) => void, applyLocally: boolean = true): Promise<TransactionResult>;

	update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void): Promise<void>;
}

declare class DataSnapshot implements IDataSnapshot {
	readonly native: any;
	readonly android: any;
	readonly ios: any;

	readonly key: string;
	readonly ref: Reference;

	child(path: string): DataSnapshot;

	exists(): boolean;

	exportVal();

	forEach(action: (child: DataSnapshot) => true): boolean;

	getPriority(): string | number;

	hasChild(path: string): boolean;

	hasChildren(): boolean;

	numChildren(): number;

	val();
}

declare class Database implements IDatabase {
	readonly native: any;
	readonly android: any;
	readonly ios: any;

	readonly app: FirebaseApp;

	constructor(app?: FirebaseApp);

	persistenceCacheSizeBytes: number;
	persistenceEnabled: boolean;

	useEmulator(host: string, port: number);

	refFromURL(url: string): Reference;

	setLoggingEnabled(enabled: boolean);

	ref(path?: string): Reference;

	goOffline();

	goOnline();
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseDatabase {}
}

export interface FirebaseDatabase {
	static database(app?: FirebaseApp): Database;
}
