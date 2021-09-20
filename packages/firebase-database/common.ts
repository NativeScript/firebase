import { FirebaseApp, FirebaseError } from '@nativescript/firebase-core';
export type EventType = 'value' | 'child_added' | 'child_changed' | 'child_moved' | 'child_removed';

export interface TransactionResult {
	snapshot: IDataSnapshot;
	commited: boolean;
}

export interface IThenableReference extends IReference, PromiseLike<any> {}

export interface IOnDisconnect {
	cancel(onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	remove(onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	set(value: any, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	setWithPriority(value: any, priority: string | number | null, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	update(values: { [key: string]: any }, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
}

export interface IQuery {
	ref: IReference;
	endAt(value: number | string | boolean | null, key?: undefined | string): IQuery;
	equalTo(value: number | string | boolean | null, key?: undefined | string): IQuery;
	keepSynced(bool: boolean);
	limitToFirst(limit: number): IQuery;
	limitToLast(limit: number): IQuery;
	off(eventType?: EventType, callback?: undefined | ((a: IDataSnapshot, b: string | null) => void), context?: Record<string, any>): void;
	on(eventType: EventType, callback: (data: IDataSnapshot, previousChildKey: string | null) => void, cancelCallbackOrContext?: (a: Error) => void | Record<string, any> | null, context?: Record<string, any> | null): (a: IDataSnapshot | null, b: string | null) => void;
	once(eventType: EventType, successCallback?: undefined | ((a: IDataSnapshot, b: string | null) => any), failureCallbackContext?: (a: Error) => void | Record<string, any> | null): Promise<IDataSnapshot>;
	orderByChild(path: string): IQuery;
	orderByKey(): IQuery;
	orderByPriority(): IQuery;
	orderByValue(): IQuery;
	startAt(value: number | string | boolean | null, key?: undefined | string): IQuery;
	toString(): string;
}

export interface IReference extends IQuery {
	readonly key: string | null;
	readonly parent: IReference | null;
	readonly ref: IReference;
	readonly root: IReference;
	child(path: string): IReference;
	onDisconnect(): IOnDisconnect;
	push(value?: any, onComplete?: undefined | (() => void)): IThenableReference;
	remove(onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	set(value: any, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	setPriority(priority: string | number | null, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	setWithPriority(newVal: any, newPriority: string | number | null, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
	transaction(transactionUpdate: (currentData: object) => object | undefined, onComplete?: undefined | ((error: FirebaseError | null, committed: boolean, finalResult: IDataSnapshot) => void), applyLocally?: undefined | false | true): Promise<TransactionResult>;
	update(values: { [key: string]: any }, onComplete?: undefined | ((error: FirebaseError | null) => void)): Promise<void>;
}

export interface IDataSnapshot {
	key?: string;
	ref: IReference;

	child(path: string): IDataSnapshot;
	exists(): boolean;
	exportVal(): any;
	forEach(action: (child: IDataSnapshot) => true | undefined): boolean;
	getPriority(): string | number | null;
	hasChild(path: string): boolean;
	hasChildren(): boolean;
	numChildren(): number;
	val(): any;
}

export interface IDatabase {
	readonly app: FirebaseApp;
	persistenceCacheSizeBytes: number;
	persistenceEnabled: boolean;
  useEmulator(host: string, port: number);
  setLoggingEnabled(enabled: boolean);
	goOffline();
	goOnline();
	ref(path?: undefined | string): IReference;
	refFromURL(url: string): IReference;
}
