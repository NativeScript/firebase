import { GetOptions, DocumentChangeType, parseOnSnapshotArgs, OnSnapshotParameters } from './common';

export { GetOptions, DocumentChangeType };

import { WhereFilterOp, ICollectionReference, IDocumentReference, IFieldPath, IFieldValue, IGeoPoint, IQuery, ITimestamp, IWriteBatch, SetOptions, DocumentData, IDocumentSnapshot, IQuerySnapshot, SnapshotListenOptions, ISnapshotMetadata, IDocumentChange, IQueryDocumentSnapshot, ITransaction, ISettings, IFirestore, IBytes, DocumentFieldType } from '.';

const main_queue = dispatch_get_current_queue();

import { firebase, FirebaseApp, FirebaseError, serialize } from '@nativescript/firebase-core';

import '@nativescript/core';

let defaultFirestore: Firestore;

declare var FieldPathExt;

const fb = firebase();
Object.defineProperty(fb, 'firestore', {
	value: (app?: FirebaseApp) => {
		if (!app) {
			if (!defaultFirestore) {
				defaultFirestore = new Firestore();
			}
			return defaultFirestore;
		}

		return new Firestore(app);
	},
	writable: false,
});

function deserializeField(value) {
	if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
		return value;
	}

	if (value instanceof FIRTimestamp) {
		return Timestamp.fromNative(value);
	}

	if (value instanceof FIRGeoPoint) {
		return GeoPoint.fromNative(value);
	}

	if (value instanceof FIRFieldPath) {
		return FieldPath.fromNative(value);
	}

	if (value instanceof FIRFieldValue) {
		return FieldValue.fromNative(value);
	}

	if (value instanceof FIRDocumentReference) {
		return DocumentReference.fromNative(value);
	}

	if (value instanceof FIRCollectionReference) {
		return CollectionReference.fromNative(value);
	}

	if (value instanceof NSNull) {
		return null;
	}

	if (value instanceof NSArray) {
		let array = [];
		for (let i = 0, n = value.count; i < n; i++) {
			array[i] = deserializeField(value.objectAtIndex(i));
		}
		return array;
	}

	if (value instanceof NSDictionary) {
		let dict = {};
		for (let i = 0, n = value.allKeys.count; i < n; i++) {
			let key = value.allKeys.objectAtIndex(i);
			dict[key] = deserializeField(value.objectForKey(key));
		}
		return dict;
	}

	if (value instanceof NSData) {
		return Bytes.fromNative(value);
	}

	return value;
}

function serializeItems(value) {
	if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
		return value;
	}

	if (value instanceof Date) {
		return NSDate.dateWithTimeIntervalSince1970(value.getTime() / 1000);
	}

	if (value instanceof Timestamp) {
		return value.native;
	}

	if (value instanceof GeoPoint) {
		return value.native;
	}

	if (value instanceof FieldPath) {
		return value.native;
	}

	if (value instanceof FieldValue) {
		return value.native;
	}

	if (value instanceof DocumentReference) {
		return value.native;
	}

	if (value instanceof CollectionReference) {
		return value.native;
	}

	if (value === null) {
		return NSNull.new();
	}

	if (Array.isArray(value)) {
		return value.map((item) => serializeItems(item));
	}

	if (value && typeof value === 'object') {
		const keys = Object.keys(value);
		let dict = {};
		keys.forEach((key) => {
			dict[key] = serializeItems(value[key]);
		});

		return dict;
	}

	if (value instanceof Bytes) {
		return value.native;
	}

	return value;
}

function createDictionary(dataOrField: any, fieldPathValue?: any, moreFieldsAndValues?: any) {
	const data = NSMutableDictionary.alloc().init();

	const assignKeyValue = (key, val) => {
		// check the map for weak object
		if (typeof key === 'string' && key.includes('FIRFieldPath')) {
			const ref = fp_refs.get(key)?.get?.();
			if (ref) {
				data.setObjectForKey(serializeItems(val), ref);
				return;
			}
		}
		data.setObjectForKey(serializeItems(val), key instanceof FieldPath ? key.native : key);
	};
	if (!fieldPathValue && !moreFieldsAndValues) {
		Object.entries(dataOrField).forEach((item) => assignKeyValue(item[0], item[1]));
	} else {
		assignKeyValue(dataOrField, fieldPathValue);
		if (Array.isArray(moreFieldsAndValues)) {
			Object.entries(Object.fromEntries(moreFieldsAndValues)).forEach(([key, value]) => assignKeyValue(key, value));
		}
	}

	return data;
}

export class Transaction implements ITransaction {
	_native: FIRTransaction;

	static fromNative(transaction: FIRTransaction) {
		if (transaction instanceof FIRTransaction) {
			const tran = new Transaction();
			tran._native = transaction;
			return tran;
		}
		return null;
	}

	delete<T extends DocumentData = DocumentData>(documentRef: DocumentReference): Transaction {
		return Transaction.fromNative(this._native.deleteDocument(documentRef.native));
	}

	get<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>): Promise<DocumentSnapshot<T>> {
		// TODO check error returned
		return new Promise((resolve, reject) => {
			try {
				resolve(DocumentSnapshot.fromNative(this._native.getDocumentError(documentRef.native)));
			} catch (e) {
				reject(e);
			}
		});
	}

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): Transaction;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: T[K], moreFieldsAndValues: any[]): Transaction;
	update(documentRef: any, field: any, value?: any, moreFieldsAndValues?: any): Transaction {
		const data = createDictionary(field, value, moreFieldsAndValues);
		return Transaction.fromNative(this._native.updateDataForDocument(data as any, documentRef?.native));
	}

	set<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: T, options?: SetOptions): Transaction {
		let transaction;
		if (options) {
			if (typeof options?.merge === 'boolean') {
				transaction = this.native.setDataForDocumentMerge(serializeItems(data), documentRef.native, options.merge);
			} else if (options.mergeFields) {
				if (Array.isArray(options.mergeFields)) {
					if (typeof options.mergeFields[0] === 'string') {
						transaction = this.native.setDataForDocumentMergeFields(serializeItems(data), documentRef.native, options.mergeFields);
					} else {
						transaction = this.native.setDataForDocumentMergeFields(
							serializeItems(data),
							documentRef.native,
							options.mergeFields.map((field) => field.native)
						);
					}
				}
			}
		} else {
			transaction = this.native.setDataForDocument(serializeItems(data), documentRef.native);
		}
		return Transaction.fromNative(transaction);
	}

	get ios() {
		return this.native;
	}

	get native() {
		return this._native;
	}
}

export class SnapshotMetadata implements ISnapshotMetadata {
	_native: FIRSnapshotMetadata;

	static fromNative(metadata: FIRSnapshotMetadata) {
		if (metadata instanceof FIRSnapshotMetadata) {
			const meta = new SnapshotMetadata();
			meta._native = metadata;
			return meta;
		}
		return null;
	}

	get fromCache(): boolean {
		return this.native.fromCache;
	}

	get hasPendingWrites(): boolean {
		return this.native.pendingWrites;
	}

	toJSON() {
		return {
			fromCache: this.fromCache,
			hasPendingWrites: this.hasPendingWrites,
		};
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class DocumentSnapshot<T extends DocumentData = DocumentData> implements IDocumentSnapshot<T> {
	_native: FIRDocumentSnapshot;

	static fromNative(snapshot: FIRDocumentSnapshot) {
		if (snapshot instanceof FIRDocumentSnapshot) {
			const ss = new DocumentSnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	get exists(): boolean {
		return this.native.exists;
	}

	get id(): string {
		return this.native.documentID;
	}

	get metadata(): SnapshotMetadata {
		return SnapshotMetadata.fromNative(this.native.metadata);
	}

	get ref(): DocumentReference {
		return DocumentReference.fromNative(this.native.reference);
	}

	data() {
		return deserializeField(this.native.data());
	}

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType {
		if (fieldPath instanceof FieldPath) {
			return deserializeField(this.native.valueForField(fieldPath.native));
		} else {
			return deserializeField(this.native.valueForField(fieldPath));
		}
	}

	toJSON() {
		return {
			exists: this.exists,
			id: this.id,
			metadata: this.metadata,
			ref: this.ref,
			data: this.data,
		};
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class DocumentChange implements IDocumentChange {
	_native: FIRDocumentChange;

	static fromNative(change: FIRDocumentChange): DocumentChange {
		if (change instanceof FIRDocumentChange) {
			const documentChange = new DocumentChange();
			documentChange._native = change;
			return documentChange;
		}
		return null;
	}

	get doc() {
		return QueryDocumentSnapshot.fromNative(this.native.document);
	}

	get newIndex(): number {
		return this.native.newIndex;
	}

	get oldIndex(): number {
		return this.native.oldIndex;
	}

	get type(): DocumentChangeType {
		switch (this.native.type) {
			case FIRDocumentChangeType.Added:
				return DocumentChangeType.Added;
			case FIRDocumentChangeType.Modified:
				return DocumentChangeType.Modified;
			case FIRDocumentChangeType.Removed:
				return DocumentChangeType.Removed;
		}
	}

	toJSON() {
		return {
			doc: this.doc,
			newIndex: this.newIndex,
			oldIndex: this.oldIndex,
			type: this.type,
		};
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class Query<T extends DocumentData = DocumentData> implements IQuery<T> {
	_native: FIRQuery;

	static fromNative(query: FIRQuery): Query {
		if (query instanceof FIRQuery) {
			const nativeQuery = new Query();
			nativeQuery._native = query;
			return nativeQuery;
		}
		return null;
	}

	endAt(snapshot: DocumentSnapshot<T>): Query;
	endAt(fieldValues: FieldValue[]): Query;
	endAt(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.queryEndingAtValues(fieldValues.map((value) => value?.native || value)));
		} else {
			return Query.fromNative(this.native.queryEndingAtDocument(fieldValues?.native));
		}
	}

	endBefore(snapshot: DocumentSnapshot<T>): Query;
	endBefore(fieldValues: FieldValue[]): Query;
	endBefore(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.queryEndingBeforeValues(fieldValues.map((value) => value.native)));
		} else {
			return Query.fromNative(this.native.queryEndingBeforeDocument(fieldValues?.native));
		}
	}

	get(options?: GetOptions): Promise<QuerySnapshot> {
		let source: FIRFirestoreSource;
		switch (options) {
			case GetOptions.Cache:
				source = FIRFirestoreSource.Cache;
				break;
			case GetOptions.Server:
				source = FIRFirestoreSource.Server;
				break;
			default:
				source = FIRFirestoreSource.Default;
				break;
		}

		return new Promise((resolve, reject) => {
			this.native.getDocumentsWithSourceCompletion(source, (snap, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(QuerySnapshot.fromNative(snap));
				}
			});
		});
	}

	limit(limit: number) {
		return Query.fromNative(this.native.queryLimitedTo(limit));
	}

	limitToLast(limitToLast: number) {
		return Query.fromNative(this.native.queryLimitedToLast(limitToLast));
	}

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void }): () => void;
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void }): () => void;
	onSnapshot(onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(...args: OnSnapshotParameters<QuerySnapshot>): () => void {
		const { includeMetadataChanges, ...handlers } = parseOnSnapshotArgs(args);

		const listener = this.native.addSnapshotListenerWithIncludeMetadataChangesListener(includeMetadataChanges, (querySnapshot, error) => {
			if (error) {
				handlers.error?.(FirebaseError.fromNative(error));
			} else {
				handlers.next?.(QuerySnapshot.fromNative(querySnapshot));
			}
		});

		return () => listener?.remove?.();
	}

	orderBy(fieldPath: keyof DocumentData | FieldPath, directionStr: 'asc' | 'desc' = 'asc'): Query {
		if (fieldPath instanceof FieldPath) {
			if (directionStr === 'asc') {
				return Query.fromNative(this.native.queryOrderedByFieldPath(fieldPath.native));
			} else {
				return Query.fromNative(this.native.queryOrderedByFieldPathDescending(fieldPath.native, true));
			}
		} else {
			if (directionStr === 'asc') {
				return Query.fromNative(this.native.queryOrderedByField(fieldPath as any));
			} else {
				return Query.fromNative(this.native.queryOrderedByFieldDescending(fieldPath as any, true));
			}
		}
	}

	startAfter(snapshot: DocumentSnapshot<T>): Query;
	startAfter(fieldValues: FieldValue[]): Query;
	startAfter(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.queryStartingAfterValues(fieldValues.map((value) => value.native)));
		} else {
			return Query.fromNative(this.native.queryStartingAfterDocument(fieldValues?.native));
		}
	}

	startAt(snapshot: DocumentSnapshot<T>): Query;
	startAt(fieldValues: FieldValue[]): Query;
	startAt(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.queryStartingAtValues(fieldValues.map((value) => value.native)));
		} else {
			return Query.fromNative(this.native.queryStartingAtDocument(fieldValues?.native));
		}
	}

	where(fieldPath: FieldPath | keyof DocumentData, opStr: WhereFilterOp, value: any): Query {
		let query;
		if (fieldPath instanceof FieldPath) {
			switch (opStr) {
				case '!=':
					query = this.native.queryWhereFieldPathIsNotEqualTo(fieldPath.native, serializeItems(value));
					break;
				case '<':
					query = this.native.queryWhereFieldPathIsLessThan(fieldPath.native, serializeItems(value));
					break;
				case '>':
					query = this.native.queryWhereFieldPathIsGreaterThan(fieldPath.native, serializeItems(value));
					break;
				case '<=':
					query = this.native.queryWhereFieldPathIsLessThanOrEqualTo(fieldPath.native, serializeItems(value));
					break;
				case '>=':
					query = this.native.queryWhereFieldPathIsGreaterThanOrEqualTo(fieldPath.native, serializeItems(value));
					break;
				case '==':
					query = this.native.queryWhereFieldPathIsEqualTo(fieldPath.native, serializeItems(value));
					break;
				case 'array-contains':
					query = this.native.queryWhereFieldPathArrayContains(fieldPath.native, serializeItems(value));
					break;
				case 'array-contains-any':
					query = this.native.queryWhereFieldPathArrayContainsAny(fieldPath.native, serializeItems(value));
					break;
				case 'in':
					query = this.native.queryWhereFieldPathIn(fieldPath.native, serializeItems(value));
					break;
				case 'not-in':
					query = this.native.queryWhereFieldPathNotIn(fieldPath.native, serializeItems(value));
					break;
			}
		} else {
			switch (opStr) {
				case '!=':
					query = this.native.queryWhereFieldIsNotEqualTo(fieldPath as any, serializeItems(value));
					break;
				case '<':
					query = this.native.queryWhereFieldIsLessThan(fieldPath as any, serializeItems(value));
					break;
				case '>':
					query = this.native.queryWhereFieldIsGreaterThan(fieldPath as any, serializeItems(value));
					break;
				case '<=':
					query = this.native.queryWhereFieldIsLessThanOrEqualTo(fieldPath as any, serializeItems(value));
					break;
				case '>=':
					query = this.native.queryWhereFieldIsGreaterThanOrEqualTo(fieldPath as any, serializeItems(value));
					break;
				case '==':
					query = this.native.queryWhereFieldIsEqualTo(fieldPath as any, serializeItems(value));
					break;
				case 'array-contains':
					query = this.native.queryWhereFieldArrayContains(fieldPath as any, serializeItems(value));
					break;
				case 'array-contains-any':
					query = this.native.queryWhereFieldArrayContainsAny(fieldPath as any, serializeItems(value));
					break;
				case 'in':
					query = this.native.queryWhereFieldIn(fieldPath as any, serializeItems(value));
					break;
				case 'not-in':
					query = this.native.queryWhereFieldNotIn(fieldPath as any, serializeItems(value));
					break;
			}
		}
		return Query.fromNative(query);
	}

	isEqual(other: Query): boolean {
		return this.native.isEqual(other?.native);
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class QueryDocumentSnapshot<T extends DocumentData = DocumentData> extends DocumentSnapshot<T> implements IQueryDocumentSnapshot<T> {
	_native: FIRQueryDocumentSnapshot;

	static fromNative(snapshot: FIRQueryDocumentSnapshot) {
		if (snapshot instanceof FIRQueryDocumentSnapshot) {
			const ss = new QueryDocumentSnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	data() {
		return deserializeField(this._native.data());
	}

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType {
		if (fieldPath instanceof FieldPath) {
			return deserializeField(this.native.valueForField(fieldPath.native));
		} else {
			return deserializeField(this.native.valueForField(fieldPath));
		}
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class QuerySnapshot implements IQuerySnapshot {
	_native: FIRQuerySnapshot;

	static fromNative(snapshot: FIRQuerySnapshot) {
		if (snapshot instanceof FIRQuerySnapshot) {
			const ss = new QuerySnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	get docs() {
		const documents = this.native.documents;
		const count = documents.count;
		const docs = [];
		for (let i = 0; i < count; i++) {
			docs.push(QueryDocumentSnapshot.fromNative(documents.objectAtIndex(i)));
		}
		return docs;
	}

	get empty(): boolean {
		return this.native.empty;
	}

	get metadata(): SnapshotMetadata {
		return SnapshotMetadata.fromNative(this.native.metadata);
	}

	get query() {
		return Query.fromNative(this.native.query);
	}

	get size(): number {
		return this.native.count;
	}

	docChanges(options?: SnapshotListenOptions): DocumentChange[] {
		let changes: NSArray<FIRDocumentChange>;
		if (typeof options?.includeMetadataChanges === 'boolean') {
			changes = this.native.documentChangesWithIncludeMetadataChanges(options.includeMetadataChanges);
		} else {
			changes = this.native.documentChanges;
		}

		const count = changes.count;
		const docChanges = [];
		for (let i = 0; i < count; i++) {
			docChanges.push(DocumentChange.fromNative(changes.objectAtIndex(i)));
		}
		return docChanges;
	}

	forEach(callback: (result: QueryDocumentSnapshot, index: number) => void, thisArg?: any): void {
		if (typeof callback === 'function') {
			const cb = thisArg ? callback.bind(thisArg) : callback;
			const count = this.native.count;
			for (let i = 0; i < count; i++) {
				cb(QueryDocumentSnapshot.fromNative(this.native.documents.objectAtIndex(i)));
			}
		}
	}

	toJSON() {
		return {
			docs: this.docs,
			empty: this.empty,
			metadata: this.metadata,
			size: this.size,
		};
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class CollectionReference<T extends DocumentData = DocumentData> extends Query<T> implements ICollectionReference<T> {
	_native: FIRCollectionReference;

	static fromNative(collection: FIRCollectionReference) {
		if (collection instanceof FIRCollectionReference) {
			const nativeCollection = new CollectionReference<DocumentData>();
			nativeCollection._native = collection;
			return nativeCollection;
		}
		return null;
	}

	get id(): string {
		return this.native.collectionID;
	}

	get parent(): DocumentReference {
		return DocumentReference.fromNative(this.native.parent);
	}

	get path(): string {
		return this.native.path;
	}

	add(data: T) {
		return new Promise<DocumentReference<T>>((resolve, reject) => {
			const ref = this.native.addDocumentWithDataCompletion(serializeItems(data), (error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(DocumentReference.fromNative(ref));
				}
			});
		});
	}

	doc(documentPath?: string) {
		return DocumentReference.fromNative(documentPath ? this.native.documentWithPath(documentPath) : this.native.documentWithAutoID());
	}

	toJSON() {
		return {
			id: this.id,
			path: this.path,
			parent: this.parent,
		};
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class DocumentReference<T extends DocumentData = DocumentData> implements IDocumentReference<T> {
	_native: FIRDocumentReference;

	static fromNative(document: FIRDocumentReference) {
		if (document instanceof FIRDocumentReference) {
			const doc = new DocumentReference();
			doc._native = document;
			return doc;
		}
		return null;
	}

	get firestore(): Firestore {
		return Firestore.fromNative(this.native.firestore);
	}

	get id(): string {
		return this.native.documentID;
	}

	get parent() {
		return CollectionReference.fromNative(this.native.parent);
	}

	get path(): string {
		return this.native.path;
	}

	collection(collectionPath: string) {
		return CollectionReference.fromNative(this.native.collectionWithPath(collectionPath));
	}

	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.deleteDocumentWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	get(options?: GetOptions): Promise<DocumentSnapshot<T>> {
		return new Promise((resolve, reject) => {
			let source: FIRFirestoreSource;
			switch (options) {
				case GetOptions.Cache:
					source = FIRFirestoreSource.Cache;
					break;
				case GetOptions.Server:
					source = FIRFirestoreSource.Server;
					break;
				default:
					source = FIRFirestoreSource.Default;
					break;
			}
			this.native.getDocumentWithSourceCompletion(source, (ss, error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve(DocumentSnapshot.fromNative(ss));
				}
			});
		});
	}

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void }): () => void;
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void }): () => void;
	onSnapshot(onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(...args: OnSnapshotParameters<DocumentSnapshot<T>>): () => void {
		const { includeMetadataChanges, ...handlers } = parseOnSnapshotArgs(args);

		const listener = this.native.addSnapshotListenerWithIncludeMetadataChangesListener(includeMetadataChanges, (docSnapshot, error) => {
			if (error) {
				handlers.error?.(FirebaseError.fromNative(error));
			} else {
				handlers.next?.(DocumentSnapshot.fromNative(docSnapshot));
			}
		});

		return () => listener?.remove?.();
	}

	set(data: T, options?: SetOptions): Promise<void> {
		return new Promise((resolve, reject) => {
			if (options) {
				if (typeof options?.merge === 'boolean') {
					this.native.setDataMergeCompletion(serializeItems(data), options.merge, (error) => {
						if (error) {
							reject(FirebaseError.fromNative(error));
						} else {
							resolve();
						}
					});
				} else if (options.mergeFields) {
					if (Array.isArray(options.mergeFields)) {
						if (typeof options.mergeFields[0] === 'string') {
							this.native.setDataMergeFieldsCompletion(serializeItems(data), options.mergeFields, (error) => {
								if (error) {
									reject(FirebaseError.fromNative(error));
								} else {
									resolve();
								}
							});
						} else {
							this.native.setDataMergeFieldsCompletion(
								serializeItems(data),
								options.mergeFields.map((field) => field.native),
								(error) => {
									if (error) {
										reject(FirebaseError.fromNative(error));
									} else {
										resolve();
									}
								}
							);
						}
					}
				}
			} else {
				this.native.setDataCompletion(serializeItems(data), (error) => {
					if (error) {
						reject(FirebaseError.fromNative(error));
					} else {
						resolve();
					}
				});
			}
		});
	}

	update(data: Partial<{ [K in keyof T]: FieldValue | T[K] }>): Promise<void>;
	update(field: FieldPath | keyof T, value: any, moreFieldsAndValues: any[]): Promise<void>;
	update(field: any, value?: any, moreFieldsAndValues?: any): Promise<void> {
		return new Promise((resolve, reject) => {
			const data = createDictionary(field, value, moreFieldsAndValues);
			this._native.updateDataCompletion(data as any, (error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	toJSON() {
		return {
			id: this.id,
			path: this.path,
			parent: this.parent,
		};
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

const fp_refs = new Map<string, WeakRef<FIRFieldPath>>();

export class FieldPath implements IFieldPath {
	_native: FIRFieldPath;

	constructor(fieldNames: string[], native = false) {
		if (!native) {
			this._native = FIRFieldPath.alloc().initWithFields(fieldNames);
			this._addToMap();
		}
	}

	private _addToMap() {
		fp_refs.set(this.native.description, new WeakRef(this._native));
	}

	static fromNative(field: FIRFieldPath) {
		if (field instanceof FIRFieldPath) {
			const path = new FieldPath([], true);
			path._native = field;
			path._addToMap();
			return path;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	static documentId(): FieldPath {
		return FieldPath.fromNative(FIRFieldPath.documentID());
	}

	toString() {
		return this.native.description;
	}
}

export class FieldValue implements IFieldValue {
	_native: FIRFieldValue;

	static fromNative(field: FIRFieldValue) {
		if (field instanceof FIRFieldValue) {
			const value = new FieldValue();
			value._native = field;
			return value;
		}
		return null;
	}

	static arrayRemove(elements: any[]): FieldValue {
		return FieldValue.fromNative(FIRFieldValue.fieldValueForArrayRemove(elements.map((element) => element?.native || element)));
	}

	static arrayUnion(elements: any[]): FieldValue {
		return FieldValue.fromNative(FIRFieldValue.fieldValueForArrayUnion(elements.map((element) => element?.native || element)));
	}

	static delete(): FieldValue {
		return FieldValue.fromNative(FIRFieldValue.fieldValueForDelete());
	}

	static increment(n: number): FieldValue {
		const useDouble = n % 1 === 0;
		if (useDouble) {
			return FieldValue.fromNative(FIRFieldValue.fieldValueForDoubleIncrement(n));
		}
		return FieldValue.fromNative(FIRFieldValue.fieldValueForIntegerIncrement(n));
	}

	static serverTimestamp(): FieldValue {
		return FieldValue.fromNative(FIRFieldValue.fieldValueForServerTimestamp());
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class GeoPoint implements IGeoPoint {
	_native: FIRGeoPoint;

	constructor(latitude: number, longitude: number, native: boolean = false) {
		if (!native) {
			this._native = FIRGeoPoint.alloc().initWithLatitudeLongitude(latitude, longitude);
		}
	}

	static fromNative(point: FIRGeoPoint) {
		if (point instanceof FIRGeoPoint) {
			const geo = new GeoPoint(0, 0, true);
			geo._native = point;
			return geo;
		}
		return null;
	}

	get latitude(): number {
		return this.native.latitude;
	}

	get longitude(): number {
		return this.native.longitude;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	toJSON() {
		return {
			latitude: this.latitude,
			longitude: this.longitude,
		};
	}
}

export class Timestamp implements ITimestamp {
	_native: FIRTimestamp;

	constructor(seconds: number, nanoseconds: number, native = false) {
		if (!native) {
			this._native = FIRTimestamp.timestampWithSecondsNanoseconds(seconds, nanoseconds);
		}
	}

	static fromNative(timestamp: FIRTimestamp) {
		if (timestamp instanceof FIRTimestamp) {
			const ts = new Timestamp(0, 0, true);
			ts._native = timestamp;
			return ts;
		}
		return null;
	}

	static fromDate(date: Date) {
		if (date instanceof Date) {
			const ts = new Timestamp(0, 0, true);
			ts._native = FIRTimestamp.timestampWithDate(date);
			return ts;
		}
		return null;
	}

	static fromMillis(milliseconds: number) {
		const ts = new Timestamp(0, 0, true);
		ts._native = FIRTimestamp.timestampWithSecondsNanoseconds(milliseconds / 1000, 0);
		return ts;
	}

	static now() {
		const ts = new Timestamp(0, 0, true);
		ts._native = FIRTimestamp.timestamp();
		return ts;
	}

	get nanoseconds(): number {
		return this.native.nanoseconds;
	}

	get seconds(): number {
		return this.native.seconds;
	}

	isEqual(ts: Timestamp): boolean {
		return this.native.compare(ts.native) === NSComparisonResult.OrderedSame;
	}

	toDate() {
		return this.native.dateValue();
	}

	toMillis() {
		return this.native.seconds * 1000;
	}

	valueOf() {
		return this.native.dateValue().valueOf().toString();
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	toJSON() {
		return {
			nanoseconds: this.nanoseconds,
			seconds: this.seconds,
		};
	}
}

export class WriteBatch implements IWriteBatch {
	_native: FIRWriteBatch;

	static fromNative(batch: FIRWriteBatch) {
		if (batch instanceof FIRWriteBatch) {
			const b = new WriteBatch();
			b._native = batch;
			return b;
		}
		return null;
	}

	commit(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.commitWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	delete(documentRef: DocumentReference): WriteBatch {
		return WriteBatch.fromNative(this.native.deleteDocument(documentRef.native));
	}

	set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): WriteBatch {
		if (options) {
			if (typeof options?.merge === 'boolean') {
				return WriteBatch.fromNative(this.native.setDataForDocumentMerge(serializeItems(data), documentRef.native, options.merge));
			}

			if (options.mergeFields) {
				if (Array.isArray(options.mergeFields)) {
					if (typeof options.mergeFields[0] === 'string') {
						return WriteBatch.fromNative(this.native.setDataForDocumentMergeFields(serializeItems(data), documentRef.native, options.mergeFields));
					}

					return WriteBatch.fromNative(
						this.native.setDataForDocumentMergeFields(
							serializeItems(data),
							documentRef.native,
							options.mergeFields.map((field) => field.native)
						)
					);
				}
			}

			return null;
		} else {
			return WriteBatch.fromNative(this.native.setDataForDocument(serializeItems(data), documentRef.native));
		}
	}

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): WriteBatch;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: FieldValue | T[K], moreFieldAndValues: any[]): WriteBatch;
	update(documentRef: any, field: any, value?: any, moreFieldsAndValues?: any): WriteBatch {
		const data = createDictionary(field, value, moreFieldsAndValues);
		return WriteBatch.fromNative(this._native.updateDataForDocument(data as any, documentRef?.native));
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class Settings implements ISettings {
	_native: FIRFirestoreSettings;
	_firestore: FIRFirestore;

	static fromNative(ffs: FIRFirestoreSettings, firestore = undefined) {
		if (ffs instanceof FIRFirestoreSettings) {
			const settings = new Settings();
			settings._native = ffs;
			settings._firestore = firestore ?? undefined;
			return settings;
		}
		return null;
	}

	_updateStoreSettings() {
		if (this._firestore !== undefined) {
			this._firestore.settings = this.native;
		}
	}

	get cacheSizeBytes(): number {
		return this.native.cacheSizeBytes;
	}

	set cacheSizeBytes(value) {
		this.native.cacheSizeBytes = value;
		this._updateStoreSettings();
	}

	get host(): string {
		return this.native.host;
	}

	set host(value) {
		this.native.host = value;
		this._updateStoreSettings();
	}

	ignoreUndefinedProperties: boolean;

	get persistence(): boolean {
		return this.native.persistenceEnabled;
	}

	set persistence(value) {
		this.native.persistenceEnabled = value;
		this._updateStoreSettings();
	}

	get ssl(): boolean {
		return this.native.sslEnabled;
	}

	set ssl(value) {
		this.native.sslEnabled = value;
		this._updateStoreSettings();
	}

	toJSON() {
		return {
			cacheSizeBytes: this.cacheSizeBytes,
			host: this.host,
			ignoreUndefinedProperties: this.ignoreUndefinedProperties,
			persistence: this.persistence,
			ssl: this.ssl,
		};
	}

	get ios() {
		return this.native;
	}

	get native() {
		return this._native;
	}
}

export class Bytes implements IBytes {
	_native: NSData;

	static fromNative(data: NSData) {
		if (data instanceof NSData) {
			const nsData = new Bytes();
			nsData._native = data;
			return nsData;
		}
		return null;
	}

	static fromBase64String(base64) {
		if (typeof base64 === 'string') {
			let b64 = base64;
			if (base64.startsWith('data:')) {
				b64 = base64.split(',')[1];
			}
			const bytes = new Bytes();
			bytes._native = NSData.alloc().initWithBase64EncodedStringOptions(b64, NSDataBase64DecodingOptions.IgnoreUnknownCharacters);
			return bytes;
		}
		return null;
	}

	static fromUint8Array(array) {
		if (!(array instanceof Uint8Array)) {
			throw new Error('Bytes.fromUint8Array expects an instance of Uint8Array');
		}

		const nsData = new Bytes();
		nsData._native = NSData.dataWithData(array as any);
		return nsData;
	}

	toBase64(): string {
		return this.native.base64EncodedStringWithOptions(NSDataBase64EncodingOptions.Encoding64CharacterLineLength);
	}

	toUint8Array(): Uint8Array {
		return new Uint8Array(interop.bufferFromData(NSData.dataWithData(this._native)));
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}
}

export class Firestore implements IFirestore {
	_native: FIRFirestore;
	_app: FirebaseApp;

	constructor(app?: FirebaseApp) {
		if (app) {
			this._native = FIRFirestore.firestoreForApp(app.native);
		} else {
			if (defaultFirestore) {
				return defaultFirestore;
			}
			defaultFirestore = this;
			this._native = FIRFirestore.firestore();
		}
	}

	static fromNative(store: FIRFirestore) {
		if (store instanceof FIRFirestore) {
			const firestore = new Firestore();
			firestore._native = store;
			return firestore;
		}
		return null;
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulatorWithHostPort(host, port);
	}

	batch(): WriteBatch {
		return WriteBatch.fromNative(this.native.batch());
	}

	collection(collectionPath: string): CollectionReference {
		return CollectionReference.fromNative(this.native.collectionWithPath(collectionPath));
	}

	clearPersistence(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.clearPersistenceWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	collectionGroup(collectionId: string): any {
		return Query.fromNative(this.native.collectionGroupWithID(collectionId));
	}

	disableNetwork(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.disableNetworkWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	doc(documentPath: string): DocumentReference {
		return DocumentReference.fromNative(this.native.documentWithPath(documentPath));
	}

	enableNetwork(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.enableNetworkWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	runTransaction(updateFunction: (transaction: Transaction) => Promise<any>): Promise<any> {
		return new Promise((resolve, reject) => {
			this.native.runTransactionWithBlockCompletion(
				(transaction, error) => {
					const lock = NSLock.new();
					let returnValue;
					dispatch_async(main_queue, () => {
						updateFunction(Transaction.fromNative(transaction))
							.then((value) => {
								returnValue = value?.native || value || null;
							})
							.catch((e) => {
								return null;
							});
					});
					lock.lock();
				},
				(done, done_error) => {
					if (done_error) {
						reject(FirebaseError.fromNative(done_error));
					} else {
						resolve(deserializeField(done));
					}
				}
			);
		});
	}

	get settings() {
		return Settings.fromNative(this.native?.settings, this.native);
	}

	set settings(value) {
		if (this.native) {
			this.native.settings = value?.native;
		}
	}

	terminate(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.terminateWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	waitForPendingWrites(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.waitForPendingWritesWithCompletion((error) => {
				if (error) {
					reject(FirebaseError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
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
