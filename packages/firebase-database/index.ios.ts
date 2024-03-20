import { deserialize, firebase, FirebaseApp, FirebaseError } from '@nativescript-asharghi/firebase-core';
import { IDatabase, IReference, IDataSnapshot, EventType, IQuery, IOnDisconnect, IThenableReference } from './common';

let defaultDatabase: Database;
const fb = firebase();
Object.defineProperty(fb, 'database', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultDatabase) {
				defaultDatabase = new Database();
			}
			return defaultDatabase;
		}
		return new Database(app);
	},
	writable: false,
});

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function numberIs64Bit(item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
}

export function serialize(data: any): any {
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			return data;
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (hasDecimals) {
				return NSNumber.numberWithDouble(data);
			} else {
				return NSNumber.numberWithLongLong(data);
			}
		}

		case 'object': {
			if (data instanceof Date) {
				return data.toString();
			}
			if (!data) {
				return NSNull.new();
			}

			if (Array.isArray(data)) {
				return NSArray.arrayWithArray((<any>data).map(serialize));
			}

			const node = {} as any;
			Object.keys(data).forEach((key) => {
				const value = data[key];
				node[key] = serialize(value);
			});
			return NSDictionary.dictionaryWithDictionary(node);
		}

		default:
			return NSNull.new();
	}
}
function serializeItems(data) {
	if (data instanceof ServerValue) {
		return data.native;
	}
	return serialize(data);
}

export class OnDisconnect implements IOnDisconnect {
	_native: FIRDatabaseReference;

	static fromNative(disconnect: FIRDatabaseReference) {
		if (disconnect instanceof FIRDatabaseReference) {
			const d = new OnDisconnect();
			d._native = disconnect;
			return d;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	cancel(onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.cancelDisconnectOperationsWithCompletionBlock((error, ref) => {
					if (error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					} else {
						onComplete?.(null);
						resolve();
					}
				});
			}
		});
	}

	remove(onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.onDisconnectRemoveValueWithCompletionBlock((error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}

	set(value: any, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.onDisconnectSetValueWithCompletionBlock(serializeItems(value), (error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}

	setWithPriority(value: any, priority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.onDisconnectSetValueAndPriorityWithCompletionBlock(serializeItems(value), priority, (error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}

	update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.onDisconnectUpdateChildValuesWithCompletionBlock(serializeItems(values), (error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}
}

function toFIRDataEventType(event: EventType): FIRDataEventType {
	switch (event) {
		case 'child_added':
			return FIRDataEventType.ChildAdded;
		case 'child_changed':
			return FIRDataEventType.ChildChanged;
		case 'child_moved':
			return FIRDataEventType.ChildMoved;
		case 'child_removed':
			return FIRDataEventType.ChildRemoved;
		case 'value':
			return FIRDataEventType.Value;
	}
}

export class Query implements IQuery {
	_native: FIRDatabaseQuery;

	static fromNative(query: FIRDatabaseQuery) {
		if (query instanceof FIRDatabaseQuery) {
			const q = new Query();
			q._native = query;
			return q;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get ref(): Reference {
		return Reference.fromNative(this.native.ref);
	}

	endAt(value: string | number | boolean, key?: string): Query {
		if (key) {
			return Query.fromNative(this.native.queryEndingAtValueChildKey(value, key));
		} else {
			return Query.fromNative(this.native.queryEndingAtValue(value));
		}
	}

	equalTo(value: string | number | boolean, key?: string): Query {
		if (key) {
			return Query.fromNative(this.native.queryEqualToValueChildKey(value, key));
		} else {
			return Query.fromNative(this.native.queryEqualToValue(value));
		}
	}

	keepSynced(bool: boolean) {
		this.native?.keepSynced?.(bool);
	}

	limitToFirst(limit: number): Query {
		return Query.fromNative(this.native.queryLimitedToFirst(limit));
	}

	limitToLast(limit: number): Query {
		return Query.fromNative(this.native.queryLimitedToLast(limit));
	}

	_handles: Map<(a: DataSnapshot, b: string) => void, number> = new Map();

	off(eventType?: EventType, callback?: (a: DataSnapshot, b: string) => void, context?: Record<string, any>): void {
		const handle = callback?.['__fbHandle'];
		const event = callback?.['__fbEventType'];
		if (typeof handle === 'number' && event === eventType) {
			if (this._handles.has(callback)) {
				this.native.removeObserverWithHandle(handle);
				callback['__fbHandle'] = undefined;
				callback['__fbEventType'] = undefined;
				callback['__fbContext'] = undefined;
				this._handles.delete(callback);
			}
		}
	}

	on(eventType: EventType, callback: (data: DataSnapshot, previousChildKey: string) => void, cancelCallbackOrContext?: (a: any) => void | Record<string, any>, context?: Record<string, any>): (a: DataSnapshot, b: string) => void {
		const handle = this.native?.observeEventTypeAndPreviousSiblingKeyWithBlockWithCancelBlock?.(
			toFIRDataEventType(eventType),
			(snapshot, key) => {
				callback(DataSnapshot.fromNative(snapshot), key);
			},
			(error) => {
				cancelCallbackOrContext?.({
					message: error.localizedDescription,
					native: error,
				});
			}
		);
		callback['__fbHandle'] = handle;
		callback['__fbEventType'] = eventType;
		callback['__fbContext'] = context;

		this._handles.set(callback, handle);

		return callback;
	}

	once(eventType: EventType, successCallback?: (a: DataSnapshot, b: string) => any, failureCallbackContext?: (a: any) => void | Record<string, any>): Promise<DataSnapshot> {
		return new Promise((resolve, reject) => {
			this.native.observeSingleEventOfTypeAndPreviousSiblingKeyWithBlockWithCancelBlock?.(
				toFIRDataEventType(eventType),
				(snapshot, key) => {
					const ss = DataSnapshot.fromNative(snapshot);
					successCallback?.(ss, key);
					resolve(ss);
				},
				(error) => {
					failureCallbackContext?.({
						message: error.localizedDescription,
						native: error,
					});

					reject({
						message: error.localizedDescription,
						native: error,
					});
				}
			);
		});
	}

	orderByChild(path: string): Query {
		return Query.fromNative(this.native.queryOrderedByChild(path));
	}

	orderByKey(): Query {
		return Query.fromNative(this.native.queryOrderedByKey());
	}

	orderByPriority(): Query {
		return Query.fromNative(this.native.queryOrderedByPriority());
	}

	orderByValue(): Query {
		return Query.fromNative(this.native.queryOrderedByValue());
	}

	startAt(value: string | number | boolean, key?: string): Query {
		if (key) {
			return Query.fromNative(this.native.queryStartingAtValueChildKey(value, key));
		} else {
			return Query.fromNative(this.native.queryStartingAtValue(value));
		}
	}
}

export class ServerValue {
	_native: any;
	static timeStamp() {
		const value = new ServerValue();
		value._native = FIRServerValue.timestamp();
		return value;
	}
	static increment(count: number) {
		const value = new ServerValue();
		value._native = FIRServerValue.increment(count);
		return value;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class Reference extends Query implements IReference {
	_native: any;

	static fromNative(ref: any) {
		if (ref instanceof FIRDatabaseReference) {
			const reference = new Reference();
			reference._native = ref;
			return reference;
		}
		return null;
	}

	get key(): string {
		return this.native.key;
	}

	get parent(): Reference {
		return Reference.fromNative(this.native.parent);
	}

	get ref(): Reference {
		return Reference.fromNative(this.native.ref);
	}

	get root(): Reference {
		return Reference.fromNative(this.native.root);
	}

	get native() {
		return this._native as any;
	}

	get ios() {
		return this.native;
	}

	child(path: string): Reference {
		return Reference.fromNative(this.native.child?.(path));
	}

	onDisconnect(): OnDisconnect {
		return OnDisconnect.fromNative(this.native);
	}

	push(value?: any, onComplete?: () => void): ThenableReference {
		const id = this.native.childByAutoId();
		const thennablePushRef = Reference.fromNative(id);
		const pushRef = Reference.fromNative(id);
		let promise;
		if (value) {
			promise = thennablePushRef.set(serialize(value), onComplete).then(() => pushRef);
		} else {
			promise = Promise.resolve(pushRef);
		}

		// @ts-ignore
		thennablePushRef.then = promise.then.bind(promise);
		// @ts-ignore
		thennablePushRef.catch = promise.then.bind(promise, undefined);

		if (typeof onComplete === 'function') {
			promise.catch(() => {});
		}

		return thennablePushRef as ThenableReference;
	}

	remove(onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.removeValueWithCompletionBlock((error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}

	set(value: any, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.setValueWithCompletionBlock(serializeItems(value), (error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}

	setPriority(priority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.native) {
				reject();
			} else {
				this.native.setPriorityWithCompletionBlock(priority, (error) => {
					if (error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					} else {
						onComplete?.(null);
						resolve();
					}
				});
			}
		});
	}

	setWithPriority(newVal: any, newPriority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.setValueAndPriorityWithCompletionBlock(serializeItems(newVal), newPriority, (error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}

	transaction(transactionUpdate: (currentData: object) => object, onComplete?: (error: FirebaseError, committed: boolean, finalResult: any) => void, applyLocally?: boolean): Promise<any> {
		return new Promise((resolve, reject) => {
			this.native.runTransactionBlockAndCompletionBlockWithLocalEvents(
				(data) => {
					const newData = transactionUpdate(deserialize(data.value));
					data.value = serializeItems(newData);
					return FIRTransactionResult.successWithValue(data);
				},
				(error, commited, snapshot) => {
					if (error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err, commited, null);
						reject(err);
					} else {
						const ss = DataSnapshot.fromNative(snapshot);
						onComplete?.(null, commited, ss);
						resolve({
							commited,
							snapshot: ss,
						});
					}
				},
				applyLocally || true
			);
		});
	}

	update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.updateChildValuesWithCompletionBlock(serializeItems(values), (error, ref) => {
				if (error) {
					const err = FirebaseError.fromNative(error);
					onComplete?.(err);
					reject(err);
				} else {
					onComplete?.(null);
					resolve();
				}
			});
		});
	}
}

export class ThenableReference extends Reference implements IThenableReference {
	toString(): string {
		throw new Error('Method not implemented.');
	}

	then<TResult1 = any, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		throw new Error('Method not implemented.');
	}
}

export class DataSnapshot implements IDataSnapshot {
	_native: FIRDataSnapshot;

	static fromNative(snapshot: FIRDataSnapshot) {
		if (snapshot instanceof FIRDataSnapshot) {
			const ss = new DataSnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get key(): string {
		return this.native?.key;
	}

	get ref(): Reference {
		return Reference.fromNative(this.native.ref);
	}

	child(path: string): DataSnapshot {
		return DataSnapshot.fromNative(this.native.childSnapshotForPath(path));
	}

	exists(): boolean {
		return this.native?.exists();
	}

	exportVal() {
		return {
			'.priority': this.native.priority,
			'.value': deserialize(this.native.value),
		};
	}

	forEach(action: (child: DataSnapshot) => true | undefined): boolean {
		let didStop = false;
		const children = this.native.children;
		let object = children.nextObject();
		while (object) {
			didStop = action(DataSnapshot.fromNative(object));
			if (didStop || !object) {
				break;
			}
			object = children.nextObject();
		}
		if (didStop) {
			return true;
		}
		if (!object) {
			return false;
		}
	}

	getPriority(): string | number {
		return this.native.priority;
	}

	hasChild(path: string): boolean {
		return this.native?.hasChild?.(path);
	}

	hasChildren(): boolean {
		return this.native?.hasChildren?.();
	}

	numChildren(): number {
		return this.native?.childrenCount;
	}

	val() {
		return deserialize(this.native.value);
	}
}

export class Database implements IDatabase {
	_native: FIRDatabase;
	_app: FirebaseApp;

	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this._native = FIRDatabase.databaseForApp(app.native);
		} else {
			if (defaultDatabase) {
				return defaultDatabase;
			}
			defaultDatabase = this;
			this._native = FIRDatabase.database();
		}
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulatorWithHostPort(host, port);
	}

	get persistenceCacheSizeBytes(): number {
		return this.native.persistenceCacheSizeBytes;
	}

	set persistenceCacheSizeBytes(bytes) {
		this.native.persistenceCacheSizeBytes = bytes;
	}

	get persistenceEnabled(): boolean {
		return this.native.persistenceEnabled;
	}

	set persistenceEnabled(value) {
		this.native.persistenceEnabled = value;
	}

	refFromURL(url: string): Reference {
		return Reference.fromNative(this.native?.referenceFromURL?.(url));
	}

	setLoggingEnabled(enabled: boolean) {
		FIRDatabase.setLoggingEnabled(enabled);
	}

	ref(path?: string): Reference {
		return Reference.fromNative(this.native?.referenceWithPath?.(path || '/'));
	}

	goOffline() {
		this.native.goOffline();
	}

	goOnline() {
		this.native.goOnline();
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.app);
		}
		return this._app;
	}
}
