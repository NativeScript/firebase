import { deserialize, firebase, FirebaseApp, FirebaseError, serialize } from '@nativescript/firebase-core';
import { IDatabase, IReference, IDataSnapshot, EventType, IQuery, IOnDisconnect, TransactionResult, IThenableReference } from './common';
import lazy from '@nativescript/core/utils/lazy';

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

const NSOnDisconnect = lazy(() => org.nativescript.firebase.database.FirebaseDatabase.OnDisconnect);
const NSDatabaseReference = lazy(() => org.nativescript.firebase.database.FirebaseDatabase.DatabaseReference);

export class OnDisconnect implements IOnDisconnect {
	#native: com.google.firebase.database.OnDisconnect;
	static fromNative(disconnect: com.google.firebase.database.OnDisconnect) {
		if (disconnect instanceof com.google.firebase.database.OnDisconnect) {
			const d = new OnDisconnect();
			d.#native = disconnect;
			return d;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}

	cancel(onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSOnDisconnect().cancel(
				this.native,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>({
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
					onSuccess(value) {
						onComplete?.(null);
						resolve();
					},
				})
			);
		});
	}
	remove(onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSOnDisconnect().remove(
				this.native,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>({
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
					onSuccess(value) {
						onComplete?.(null);
						resolve();
					},
				})
			);
		});
	}
	set(value: any, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSOnDisconnect().set(
				this.native,
				serialize(value, true),
				new org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>({
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
					onSuccess(value) {
						onComplete?.(null);
						resolve();
					},
				})
			);
		});
	}
	setWithPriority(value: any, priority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSOnDisconnect().setWithPriority(
				this.native,
				serialize(value, true),
				priority as any,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>({
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
					onSuccess(value) {
						onComplete?.(null);
						resolve();
					},
				})
			);
		});
	}
	update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSOnDisconnect().update(
				this.native,
				// should auto marshall ?
				values as any,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback<java.lang.Void>({
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
					onSuccess(value) {
						onComplete?.(null);
						resolve();
					},
				})
			);
		});
	}
}

export class Query implements IQuery {
	#native: com.google.firebase.database.Query;
	static fromNative(query: com.google.firebase.database.Query) {
		if (query instanceof com.google.firebase.database.Query) {
			const q = new Query();
			q.#native = query;
			return q;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	get ref(): Reference {
		return Reference.fromNative(this.native.getRef());
	}

	endAt(value: string | number | boolean, key?: string): Query {
		if (key) {
			return Query.fromNative(this.native.endAt(value as any, key as any));
		} else {
			return Query.fromNative(this.native.endAt(value as any));
		}
	}
	equalTo(value: string | number | boolean, key?: string): Query {
		if (key) {
			return Query.fromNative(this.native.equalTo(value as any, key));
		} else {
			return Query.fromNative(this.native.equalTo(value as any));
		}
	}
	keepSynced(bool: boolean) {
		this.native?.keepSynced?.(bool);
	}
	limitToFirst(limit: number): Query {
		return Query.fromNative(this.native.limitToFirst(limit));
	}
	limitToLast(limit: number): Query {
		return Query.fromNative(this.native.limitToLast(limit));
	}
	off(eventType?: EventType, callback?: (a: DataSnapshot, b: string) => void, context?: Record<string, any>): void {
		const handle = this.#handles.get({
			eventType,
			callback,
			context,
		});
		if (handle) {
			this.native.removeEventListener(handle as any);
		}
	}

	#handles: Map<{ eventType: EventType; callback?: (a: DataSnapshot, b: string) => void; context?: any }, com.google.firebase.database.ValueEventListener | com.google.firebase.database.ChildEventListener> = new Map();

	on(eventType: EventType, callback: (data: DataSnapshot, previousChildKey: string) => void, cancelCallbackOrContext?: (a: FirebaseError) => void | Record<string, any>, context?: Record<string, any>): (a: DataSnapshot, b: string) => void {
		let handle;
		if (eventType === 'value') {
			handle = this.native.addValueEventListener(
				new com.google.firebase.database.ValueEventListener({
					onDataChange(param0: com.google.firebase.database.DataSnapshot) {
						callback?.(DataSnapshot.fromNative(param0), null);
					},
					onCancelled(param0: com.google.firebase.database.DatabaseError) {
						const err = FirebaseError.fromNative(param0);
						cancelCallbackOrContext?.(err);
					},
				})
			);
		} else {
			handle = this.native.addChildEventListener(
				new com.google.firebase.database.ChildEventListener({
					onChildAdded(param0: com.google.firebase.database.DataSnapshot, param1: string) {
						if (eventType === 'child_added') {
							callback?.(DataSnapshot.fromNative(param0), param1);
						}
					},
					onChildChanged(param0: com.google.firebase.database.DataSnapshot, param1: string) {
						if (eventType === 'child_changed') {
							callback?.(DataSnapshot.fromNative(param0), param1);
						}
					},
					onChildRemoved(param0: com.google.firebase.database.DataSnapshot) {
						if (eventType === 'child_removed') {
							callback?.(DataSnapshot.fromNative(param0), null);
						}
					},
					onChildMoved(param0: com.google.firebase.database.DataSnapshot, param1: string) {
						if (eventType === 'child_moved') {
							callback?.(DataSnapshot.fromNative(param0), param1);
						}
					},
					onCancelled(param0: com.google.firebase.database.DatabaseError) {
						const err = FirebaseError.fromNative(param0);
						cancelCallbackOrContext?.(err);
					},
				})
			);
		}

		this.#handles.set(
			{
				eventType,
				callback,
				context,
			},
			handle
		);

		return callback;
	}

	once(eventType: EventType, successCallback?: (a: DataSnapshot, b: string) => any, failureCallbackContext?: (a: FirebaseError) => void | Record<string, any>): Promise<DataSnapshot> {
		return new Promise((resolve, reject) => {
			if (eventType === 'value') {
				this.native.addListenerForSingleValueEvent(
					new com.google.firebase.database.ValueEventListener({
						onDataChange(param0: com.google.firebase.database.DataSnapshot) {
							const snapshot = DataSnapshot.fromNative(param0);
							successCallback?.(snapshot, null);
							resolve(snapshot);
						},
						onCancelled(param0: com.google.firebase.database.DatabaseError) {
							const err = FirebaseError.fromNative(param0);
							failureCallbackContext?.(err);
							reject(err);
						},
					})
				);
			} else {
				const native = this.native;
				const callback = this.native.addChildEventListener(
					new com.google.firebase.database.ChildEventListener({
						onChildAdded(param0: com.google.firebase.database.DataSnapshot, param1: string) {
							if (eventType === 'child_added') {
								const snapshot = DataSnapshot.fromNative(param0);
								successCallback?.(snapshot, param1);
								native.removeEventListener(callback);
								resolve(DataSnapshot.fromNative(param0));
							}
						},
						onChildChanged(param0: com.google.firebase.database.DataSnapshot, param1: string) {
							if (eventType === 'child_changed') {
								const snapshot = DataSnapshot.fromNative(param0);
								successCallback?.(snapshot, param1);
								native.removeEventListener(callback);
								resolve(snapshot);
							}
						},
						onChildRemoved(param0: com.google.firebase.database.DataSnapshot) {
							if (eventType === 'child_removed') {
								const snapshot = DataSnapshot.fromNative(param0);
								successCallback?.(snapshot, null);
								native.removeEventListener(callback);
								resolve(snapshot);
							}
						},
						onChildMoved(param0: com.google.firebase.database.DataSnapshot, param1: string) {
							if (eventType === 'child_moved') {
								const snapshot = DataSnapshot.fromNative(param0);
								successCallback?.(snapshot, param1);
								native.removeEventListener(callback);
								resolve(snapshot);
							}
						},
						onCancelled(param0: com.google.firebase.database.DatabaseError) {
							const err = FirebaseError.fromNative(param0);
							failureCallbackContext?.(err);
							native.removeEventListener(callback);
							reject(err);
						},
					})
				);
			}
		});
	}
	orderByChild(path: string): Query {
		return Query.fromNative(this.native.orderByChild(path));
	}
	orderByKey(): Query {
		return Query.fromNative(this.native.orderByKey());
	}
	orderByPriority(): Query {
		return Query.fromNative(this.native.orderByPriority());
	}
	orderByValue(): Query {
		return Query.fromNative(this.native.orderByValue());
	}

	startAt(value: string | number | boolean, key?: string): Query {
		if (key) {
			return Query.fromNative(this.android.startAt(value as any, key));
		} else {
			return Query.fromNative(this.android.startAt(value as any));
		}
	}
}

export class ServerValue {
	#native: any;
	static timeStamp() {
		const value = new ServerValue();
		value.#native = com.google.firebase.database.ServerValue.TIMESTAMP;
		return value;
	}
	static increment(count: number) {
		const value = new ServerValue();
		value.#native = com.google.firebase.database.ServerValue.increment(count);
		return value;
	}

	get native() {
		return this.#native;
	}

	get android() {
		return this.native;
	}
}

export class Reference extends Query implements IReference {
	#native: com.google.firebase.database.DatabaseReference;
	static fromNative(ref: com.google.firebase.database.DatabaseReference) {
		if (ref instanceof com.google.firebase.database.DatabaseReference) {
			const reference = new Reference();
			reference.#native = ref;
			return reference;
		}
		return null;
	}

	get key(): string {
		return this.native.getKey();
	}
	get parent(): Reference {
		return Reference.fromNative(this.native?.getParent?.());
	}
	get ref(): Reference {
		return Reference.fromNative(this.native?.getRef?.());
	}
	get root(): Reference {
		return Reference.fromNative(this.native?.getRoot?.());
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	child(path: string): Reference {
		return Reference.fromNative(this.native.child?.(path));
	}

	onDisconnect(): OnDisconnect {
		return OnDisconnect.fromNative(this.native.onDisconnect());
	}

	push(value?: any, onComplete?: () => void): ThenableReference {
		const id = this.native.push();
		const thennablePushRef = Reference.fromNative(id);
		const pushRef = Reference.fromNative(id);
		let promise;
		if (value) {
			promise = thennablePushRef.set(value, onComplete).then(() => pushRef);
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

		return thennablePushRef as any;
	}

	remove(onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSDatabaseReference().remove(
				this.native,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback({
					onSuccess(param0) {
						onComplete?.(null);
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
				})
			);
		});
	}
	set(value: any, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSDatabaseReference().set(
				this.native,
				serialize(value, true),
				new org.nativescript.firebase.database.FirebaseDatabase.Callback({
					onSuccess(param0) {
						onComplete?.(null);
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
				})
			);
		});
	}
	setPriority(priority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSDatabaseReference().setPriority(
				this.native,
				priority as any,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback({
					onSuccess(param0) {
						onComplete?.(null);
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
				})
			);
		});
	}
	setWithPriority(newVal: any, newPriority: string | number, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSDatabaseReference().setWithPriority(
				this.native,
				serialize(newVal, true),
				newPriority as any,
				new org.nativescript.firebase.database.FirebaseDatabase.Callback({
					onSuccess(param0) {
						onComplete?.(null);
						resolve();
					},
					onError(error) {
						const err = FirebaseError.fromNative(error);
						onComplete?.(err);
						reject(err);
					},
				})
			);
		});
	}
	transaction(transactionUpdate: (currentData: object) => object, onComplete?: (error: FirebaseError, committed: boolean, finalResult: any) => void, applyLocally: boolean = true): Promise<TransactionResult> {
		return new Promise((resolve, reject) => {
			NSDatabaseReference().transaction(
				this.native,
				applyLocally,
				new org.nativescript.firebase.database.FirebaseDatabase.TransactionCallback({
					doTransaction(data: any): any {
						const newData = transactionUpdate(deserialize(data));
						// TODO improve
						return serialize(newData, true);
					},
					onComplete(error: com.google.firebase.database.DatabaseError, commited: boolean, snapshot: com.google.firebase.database.DataSnapshot): void {
						const ss = DataSnapshot.fromNative(snapshot);
						if (error) {
							const err = FirebaseError.fromNative(error);
							onComplete?.(err, commited, ss);
							reject(err);
						} else {
							onComplete?.(null, commited, ss);
							resolve({
								commited,
								snapshot: ss,
							});
						}
					},
				})
			);
		});
	}
	update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			NSDatabaseReference().update(
				this.native,
				serialize(values, true),
				new org.nativescript.firebase.database.FirebaseDatabase.Callback({
					onSuccess(param0) {
						onComplete?.(null);
						resolve();
					},
					onError(param0) {
						const err = FirebaseError.fromNative(param0);
						onComplete?.(err);
						reject(err);
					},
				})
			);
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
	#native: com.google.firebase.database.DataSnapshot;
	static fromNative(snapshot: com.google.firebase.database.DataSnapshot) {
		if (snapshot instanceof com.google.firebase.database.DataSnapshot) {
			const ss = new DataSnapshot();
			ss.#native = snapshot;
			return ss;
		}
		return null;
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	get key(): string {
		return this.native?.getKey();
	}

	get ref(): Reference {
		return Reference.fromNative(this.native.getRef());
	}

	child(path: string): DataSnapshot {
		return DataSnapshot.fromNative(this.native.child(path));
	}
	exists(): boolean {
		return this.native?.exists();
	}
	exportVal() {
		return {
			'.priority': this.native.getPriority?.(),
			'.value': deserialize(this.native.getValue(true)),
		};
	}
	forEach(action: (child: DataSnapshot) => true | undefined): boolean {
		const iterator = this.native.getChildren().iterator();
		let stopEnumerate = false;
		while (!stopEnumerate) {
			if (iterator.hasNext()) {
				const object = iterator.next();
				stopEnumerate = action(DataSnapshot.fromNative(object));
			} else {
				stopEnumerate = true;
			}
		}
		return stopEnumerate;
	}
	getPriority(): string | number {
		return this.native.getPriority();
	}
	hasChild(path: string): boolean {
		return this.native?.hasChild?.(path);
	}
	hasChildren(): boolean {
		return this.native?.hasChildren?.();
	}
	numChildren(): number {
		return this.native?.getChildrenCount();
	}
	val() {
		return deserialize(this.native.getValue());
	}
}

export class Database implements IDatabase {
	#native: com.google.firebase.database.FirebaseDatabase;
	#app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app?.native) {
			this.#native = com.google.firebase.database.FirebaseDatabase.getInstance(app.native);
		} else {
			if(defaultDatabase){
				return defaultDatabase;
			}
			defaultDatabase = this;
			this.#native = com.google.firebase.database.FirebaseDatabase.getInstance();
		}
	}


  useEmulator(host: string, port: number) {
    this.native.useEmulator(host === 'localhost' ? '10.0.2.2' : host, port);
  }


  #persistenceCacheSizeBytes = 10 * 1024 * 1024;
	get persistenceCacheSizeBytes(): number {
		return this.#persistenceCacheSizeBytes;
	}

	set persistenceCacheSizeBytes(bytes) {
		this.native.setPersistenceCacheSizeBytes(bytes);
		this.#persistenceCacheSizeBytes = bytes;
	}
	#persistenceEnabled: boolean = false;
	get persistenceEnabled(): boolean {
		return this.#persistenceEnabled;
	}
	set persistenceEnabled(value) {
		this.native.setPersistenceEnabled(value);
		this.#persistenceEnabled = value;
	}

	refFromURL(url: string): Reference {
		return Reference.fromNative(this.native.getReferenceFromUrl(url));
	}

	setLoggingEnabled(enabled: boolean) {
		this.native?.setLogLevel?.(enabled);
	}

	ref(path?: string): Reference {
		return Reference.fromNative(this.native?.getReference?.(path || '/'));
	}

	goOffline() {
		this.native.goOffline();
	}

	goOnline() {
		this.native.goOnline();
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this.#app) {
			// @ts-ignore
			this.#app = FirebaseApp.fromNative(this.native.getApp());
		}
		return this.#app;
	}
}
