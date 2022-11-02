import { GetOptions, DocumentChangeType, parseOnSnapshotArgs, OnSnapshotParameters } from './common';

export { GetOptions, DocumentChangeType };

import { WhereFilterOp, ICollectionReference, IDocumentReference, IFieldPath, IFieldValue, IGeoPoint, IQuery, ITimestamp, IWriteBatch, SetOptions, DocumentData, IDocumentSnapshot, IQuerySnapshot, SnapshotListenOptions, ISnapshotMetadata, IDocumentChange, IQueryDocumentSnapshot, ITransaction, ISettings, IFirestore, IBytes, DocumentFieldType } from '.';

import { firebase, FirebaseApp, FirebaseError } from '@nativescript/firebase-core';

let defaultFirestore: Firestore;

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

	if (value instanceof java.lang.Short) {
		return value.shortValue();
	}

	if (value instanceof java.lang.Integer) {
		return value.intValue();
	}

	if (value instanceof java.lang.Long) {
		return value.longValue();
	}

	if (value instanceof java.lang.Float) {
		return value.floatValue();
	}

	if (value instanceof java.lang.Double) {
		return value.doubleValue();
	}

	if (value instanceof java.lang.Boolean) {
		return value.booleanValue();
	}

	if (value instanceof com.google.firebase.Timestamp) {
		return Timestamp.fromNative(value);
	}

	if (value instanceof com.google.firebase.firestore.GeoPoint) {
		return GeoPoint.fromNative(value);
	}

	if (value instanceof com.google.firebase.firestore.FieldPath) {
		return FieldPath.fromNative(value);
	}

	if (value instanceof com.google.firebase.firestore.FieldValue) {
		return FieldValue.fromNative(value);
	}

	if (value instanceof com.google.firebase.firestore.DocumentReference) {
		return DocumentReference.fromNative(value);
	}

	if (value instanceof com.google.firebase.firestore.CollectionReference) {
		return CollectionReference.fromNative(value);
	}

	if (value instanceof java.util.List) {
		const array = [];
		const size = value.size();
		for (let i = 0, n = size; i < n; i++) {
			array[i] = deserializeField(value.get(i));
		}
		return array;
	}

	if (value instanceof java.util.Map) {
		let dict = {};
		const keys = value.keySet().toArray();
		const size = keys.length;
		for (let i = 0, n = size; i < n; i++) {
			const key = keys[i];
			dict[key] = deserializeField(value.get(key));
		}
		return dict;
	}

	if (value instanceof com.google.firebase.firestore.Blob) {
		return Bytes.fromNative(value);
	}

	if (!value) {
		return null;
	}

	return value;
}

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function numberIs64Bit(item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
}

function serializeItems(value) {
	if (typeof value === 'string') {
		return value;
	}

	if (typeof value === 'number') {
		const hasDecimals = numberHasDecimals(value);
		if (numberIs64Bit(value)) {
			if (hasDecimals) {
				return java.lang.Double.valueOf(value);
			} else {
				return java.lang.Long.valueOf(value);
			}
		} else {
			if (hasDecimals) {
				return java.lang.Float.valueOf(value);
			} else {
				return java.lang.Integer.valueOf(value);
			}
		}
	}

	if (typeof value === 'boolean') {
		return java.lang.Boolean.valueOf(value);
	}

	if (value instanceof Date) {
		return new java.util.Date(value.getTime());
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
		return null;
	}

	if (Array.isArray(value)) {
		return java.util.Arrays.asList(value.map((item) => serializeItems(item)));
	}

	if (value && typeof value === 'object') {
		const keys = Object.keys(value);
		const dict = new java.util.HashMap();
		keys.forEach((key) => {
			dict.put(key, serializeItems(value[key]));
		});

		return dict;
	}

	if (value instanceof Bytes) {
		return value.native;
	}

	return value;
}

function createDictionary(field: any, value?: any, moreFieldsAndValues?: any) {
	const data = new java.util.HashMap();
	if (field instanceof FieldPath) {
		data.put(field.native as any, value?.native || value);
	} else {
		data.put(field, value?.native || value);
	}

	if (Array.isArray(moreFieldsAndValues)) {
		for (let i = 0; i < moreFieldsAndValues.length; i += 2) {
			const key = moreFieldsAndValues[i];
			const value = moreFieldsAndValues[i + 1];
			data.put(key?.native || key, value?.native || value);
		}
	}

	return data;
}

export class Transaction implements ITransaction {
	_native: com.google.firebase.firestore.Transaction;

	static fromNative(transaction: com.google.firebase.firestore.Transaction) {
		if (transaction instanceof com.google.firebase.firestore.Transaction) {
			const tran = new Transaction();
			tran._native = transaction;
			return tran;
		}
		return null;
	}

	delete<T extends DocumentData = DocumentData>(documentRef: DocumentReference): Transaction {
		return Transaction.fromNative(this._native.delete(documentRef.native));
	}

	get<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>): Promise<DocumentSnapshot<T>> {
		// TODO check error returned
		return new Promise((resolve, reject) => {
			try {
				resolve(DocumentSnapshot.fromNative(this._native.get(documentRef.native)));
			} catch (e) {
				reject(e);
			}
		});
	}

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): Transaction;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: T[K], moreFieldsAndValues: any[]): Transaction;
	update(documentRef: any, field: any, value?: any, moreFieldsAndValues?: any): Transaction {
		let transaction;

		if (arguments.length === 2) {
			transaction = this.native.update(documentRef.native, serializeItems(field));
		} else {
			if (field instanceof FieldPath) {
				transaction = this.native.update(documentRef.native, field.native, value?.native || value || null, moreFieldsAndValues?.map((value) => value?.native || value) ?? []);
			} else {
				transaction = this.native.update(documentRef.native, field.native, value?.native || value || null, moreFieldsAndValues?.map((value) => value?.native || value) ?? []);
			}
		}

		return Transaction.fromNative(transaction);
	}

	set<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: T, options?: SetOptions): Transaction {
		let transaction;
		if (options) {
			if (typeof options?.merge === 'boolean') {
				transaction = this.native.set(serializeItems(data), documentRef.native, com.google.firebase.firestore.SetOptions.merge());
			} else if (options.mergeFields) {
				if (Array.isArray(options.mergeFields)) {
					if (typeof options.mergeFields[0] === 'string') {
						transaction = this.native.set(serializeItems(data), documentRef.native, com.google.firebase.firestore.SetOptions.mergeFields(options.mergeFields as any));
					} else {
						const list = java.util.Arrays.asList(options.mergeFields.map((field) => field.native));
						transaction = this.native.set(serializeItems(data), documentRef.native, com.google.firebase.firestore.SetOptions.mergeFieldPaths(list));
					}
				}
			}
		} else {
			transaction = this.native.set(serializeItems(data), documentRef.native);
		}
		return Transaction.fromNative(transaction);
	}

	get android() {
		return this.native;
	}

	get native() {
		return this._native;
	}
}

export class SnapshotMetadata implements ISnapshotMetadata {
	_native: com.google.firebase.firestore.SnapshotMetadata;

	static fromNative(metadata: com.google.firebase.firestore.SnapshotMetadata) {
		if (metadata instanceof com.google.firebase.firestore.SnapshotMetadata) {
			const meta = new SnapshotMetadata();
			meta._native = metadata;
			return meta;
		}
		return null;
	}

	get fromCache(): boolean {
		return this.native.isFromCache();
	}

	get hasPendingWrites(): boolean {
		return this.native.hasPendingWrites();
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

	get android() {
		return this.native;
	}
}

export class DocumentSnapshot<T extends DocumentData = DocumentData> implements IDocumentSnapshot<T> {
	_native: com.google.firebase.firestore.DocumentSnapshot;

	static fromNative(snapshot: com.google.firebase.firestore.DocumentSnapshot) {
		if (snapshot instanceof com.google.firebase.firestore.DocumentSnapshot) {
			const ss = new DocumentSnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	get exists(): boolean {
		return this.native.exists();
	}

	get id(): string {
		return this.native.getId();
	}

	get metadata(): SnapshotMetadata {
		return SnapshotMetadata.fromNative(this.native.getMetadata());
	}

	get ref(): DocumentReference {
		return DocumentReference.fromNative(this.native.getReference());
	}

	data() {
		return deserializeField(this.native.getData());
	}

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType {
		if (fieldPath instanceof FieldPath) {
			return deserializeField(this.native.get(fieldPath?.native));
		} else {
			return deserializeField(this.native.get(String(fieldPath)));
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

	get android() {
		return this.native;
	}
}

export class DocumentChange implements IDocumentChange {
	_native: com.google.firebase.firestore.DocumentChange;

	static fromNative(change: com.google.firebase.firestore.DocumentChange): DocumentChange {
		if (change instanceof com.google.firebase.firestore.DocumentChange) {
			const documentChange = new DocumentChange();
			documentChange._native = change;
			return documentChange;
		}
		return null;
	}

	get doc() {
		return QueryDocumentSnapshot.fromNative(this.native.getDocument());
	}

	get newIndex(): number {
		return this.native.getNewIndex();
	}

	get oldIndex(): number {
		return this.native.getOldIndex();
	}

	get type(): DocumentChangeType {
		switch (this.native.getType()) {
			case com.google.firebase.firestore.DocumentChange.Type.ADDED:
				return DocumentChangeType.Added;
			case com.google.firebase.firestore.DocumentChange.Type.MODIFIED:
				return DocumentChangeType.Modified;
			case com.google.firebase.firestore.DocumentChange.Type.REMOVED:
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

	get android() {
		return this.native;
	}
}

export class Query<T extends DocumentData = DocumentData> implements IQuery<T> {
	_native: com.google.firebase.firestore.Query;

	static fromNative(query: com.google.firebase.firestore.Query): Query {
		if (query instanceof com.google.firebase.firestore.Query) {
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
			return Query.fromNative(this.native.endAt(fieldValues.map((value) => value?.native || value)));
		} else {
			return Query.fromNative(this.native.endAt(fieldValues?.native));
		}
	}

	endBefore(snapshot: DocumentSnapshot<T>): Query;
	endBefore(fieldValues: FieldValue[]): Query;
	endBefore(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.endBefore(fieldValues.map((value) => value.native)));
		} else {
			return Query.fromNative(this.native.endBefore(fieldValues?.native));
		}
	}

	get(options?: GetOptions): Promise<QuerySnapshot> {
		let source: com.google.firebase.firestore.Source;
		switch (options) {
			case GetOptions.Cache:
				source = com.google.firebase.firestore.Source.CACHE;
				break;
			case GetOptions.Server:
				source = com.google.firebase.firestore.Source.SERVER;
				break;
			default:
				source = com.google.firebase.firestore.Source.DEFAULT;
				break;
		}

		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.Query.get(
				this.native,
				source,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.QuerySnapshot>({
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
					onSuccess(ss) {
						resolve(QuerySnapshot.fromNative(ss));
					},
				})
			);
		});
	}

	limit(limit: number) {
		return Query.fromNative(this.native.limit(limit));
	}

	limitToLast(limitToLast: number) {
		return Query.fromNative(this.native.limitToLast(limitToLast));
	}

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void; }): () => void;
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: QuerySnapshot) => void; }): () => void;
	onSnapshot(onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: QuerySnapshot) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(...args: OnSnapshotParameters<QuerySnapshot>): () => void {
		const { includeMetadataChanges, ...handlers } = parseOnSnapshotArgs(args);

		const listener = this.native.addSnapshotListener(
			includeMetadataChanges
				? com.google.firebase.firestore.MetadataChanges.INCLUDE
				: com.google.firebase.firestore.MetadataChanges.EXCLUDE,
			new com.google.firebase.firestore.EventListener<com.google.firebase.firestore.QuerySnapshot>({
				onEvent(querySnapshot, error: com.google.firebase.firestore.FirebaseFirestoreException) {
					if (error) {
						handlers.error?.(FirebaseError.fromNative(error));
					} else {
						handlers.next?.(QuerySnapshot.fromNative(querySnapshot));
					}
				},
			})
		);
		return () => listener?.remove?.();
	}

	orderBy(fieldPath: keyof DocumentData | FieldPath, directionStr: 'asc' | 'desc' = 'asc'): Query {
		if (fieldPath instanceof FieldPath) {
			if (directionStr === 'asc') {
				return Query.fromNative(this.native.orderBy(fieldPath.native));
			} else {
				return Query.fromNative(this.native.orderBy(fieldPath.native, com.google.firebase.firestore.Query.Direction.DESCENDING));
			}
		} else {
			if (directionStr === 'asc') {
				return Query.fromNative(this.native.orderBy(fieldPath as any));
			} else {
				return Query.fromNative(this.native.orderBy(fieldPath as any, com.google.firebase.firestore.Query.Direction.DESCENDING));
			}
		}
	}

	startAfter(snapshot: DocumentSnapshot<T>): Query;
	startAfter(fieldValues: FieldValue[]): Query;
	startAfter(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.startAfter(fieldValues.map((value) => value.native)));
		} else {
			return Query.fromNative(this.native.startAfter(fieldValues?.native));
		}
	}

	startAt(snapshot: DocumentSnapshot<T>): Query;
	startAt(fieldValues: FieldValue[]): Query;
	startAt(fieldValues: DocumentSnapshot<T> | FieldValue[]): Query {
		if (Array.isArray(fieldValues)) {
			return Query.fromNative(this.native.startAt(fieldValues.map((value) => value.native)));
		} else {
			return Query.fromNative(this.native.startAt(fieldValues?.native));
		}
	}

	where(fieldPath: FieldPath | keyof DocumentData, opStr: WhereFilterOp, value: any): Query {
		let query;
		if (fieldPath instanceof FieldPath) {
			switch (opStr) {
				case '!=':
					query = this.native.whereNotEqualTo(fieldPath.native, serializeItems(value));
					break;
				case '<':
					query = this.native.whereLessThan(fieldPath.native, serializeItems(value));
					break;
				case '>':
					query = this.native.whereGreaterThan(fieldPath.native, serializeItems(value));
					break;
				case '<=':
					query = this.native.whereLessThanOrEqualTo(fieldPath.native, serializeItems(value));
					break;
				case '>=':
					query = this.native.whereGreaterThanOrEqualTo(fieldPath.native, serializeItems(value));
					break;
				case '==':
					query = this.native.whereEqualTo(fieldPath.native, serializeItems(value));
					break;
				case 'array-contains':
					query = this.native.whereArrayContains(fieldPath.native, serializeItems(value));
					break;
				case 'array-contains-any':
					query = this.native.whereArrayContainsAny(fieldPath.native, serializeItems(value));
					break;
				case 'in':
					query = this.native.whereIn(fieldPath.native, serializeItems(value));
					break;
				case 'not-in':
					query = this.native.whereNotIn(fieldPath.native, serializeItems(value));
					break;
			}
		} else {
			switch (opStr) {
				case '!=':
					query = this.native.whereNotEqualTo(fieldPath as any, serializeItems(value));
					break;
				case '<':
					query = this.native.whereLessThan(fieldPath as any, serializeItems(value));
					break;
				case '>':
					query = this.native.whereGreaterThan(fieldPath as any, serializeItems(value));
					break;
				case '<=':
					query = this.native.whereLessThanOrEqualTo(fieldPath as any, serializeItems(value));
					break;
				case '>=':
					query = this.native.whereGreaterThanOrEqualTo(fieldPath as any, serializeItems(value));
					break;
				case '==':
					query = this.native.whereEqualTo(fieldPath as any, serializeItems(value));
					break;
				case 'array-contains':
					query = this.native.whereArrayContains(fieldPath as any, serializeItems(value));
					break;
				case 'array-contains-any':
					query = this.native.whereArrayContainsAny(fieldPath as any, serializeItems(value));
					break;
				case 'in':
					query = this.native.whereIn(fieldPath as any, serializeItems(value));
					break;
				case 'not-in':
					query = this.native.whereNotIn(fieldPath as any, serializeItems(value));
					break;
			}
		}
		return Query.fromNative(query);
	}

	isEqual(other: Query): boolean {
		return this.native.equals(other?.native);
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class QueryDocumentSnapshot<T extends DocumentData = DocumentData> extends DocumentSnapshot<T> implements IQueryDocumentSnapshot<T> {
	_native: com.google.firebase.firestore.DocumentSnapshot;

	static fromNative(snapshot: com.google.firebase.firestore.DocumentSnapshot) {
		if (snapshot instanceof com.google.firebase.firestore.DocumentSnapshot) {
			const ss = new QueryDocumentSnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	data() {
		return deserializeField(this._native.getData());
	}

	get<fieldType extends DocumentFieldType>(fieldPath: string | number | FieldPath): fieldType {
		if (fieldPath instanceof FieldPath) {
			return deserializeField(this.native.get(fieldPath.native));
		} else {
			return deserializeField(this.native.get(String(fieldPath)));
		}
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class QuerySnapshot implements IQuerySnapshot {
	_native: com.google.firebase.firestore.QuerySnapshot;

	static fromNative(snapshot: com.google.firebase.firestore.QuerySnapshot) {
		if (snapshot instanceof com.google.firebase.firestore.QuerySnapshot) {
			const ss = new QuerySnapshot();
			ss._native = snapshot;
			return ss;
		}
		return null;
	}

	get docs() {
		const documents = this.native.getDocuments();
		const count = documents.size();
		const docs = [];
		for (let i = 0; i < count; i++) {
			docs.push(QueryDocumentSnapshot.fromNative(documents.get(i)));
		}
		return docs;
	}

	get empty(): boolean {
		return this.native.isEmpty();
	}

	get metadata(): SnapshotMetadata {
		return SnapshotMetadata.fromNative(this.native.getMetadata());
	}

	get query() {
		return Query.fromNative(this.native.getQuery());
	}

	get size(): number {
		return this.native.size();
	}

	docChanges(options?: SnapshotListenOptions): DocumentChange[] {
		let changes: java.util.List<com.google.firebase.firestore.DocumentChange>;
		if (typeof options?.includeMetadataChanges === 'boolean') {
			changes = this.native.getDocumentChanges(com.google.firebase.firestore.MetadataChanges.INCLUDE);
		} else {
			changes = this.native.getDocumentChanges();
		}

		const count = changes.size();
		const docChanges = [];
		for (let i = 0; i < count; i++) {
			docChanges.push(DocumentChange.fromNative(changes.get(i)));
		}
		return docChanges;
	}

	forEach(callback: (result: QueryDocumentSnapshot, index: number) => void, thisArg?: any): void {
		if (typeof callback === 'function') {
			const cb = thisArg ? callback.bind(thisArg) : callback;
			const count = this.native.size();
			const documents = this.native.getDocuments();
			for (let i = 0; i < count; i++) {
				cb(QueryDocumentSnapshot.fromNative(documents.get(i)));
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

	get android() {
		return this.native;
	}
}

export class CollectionReference<T extends DocumentData = DocumentData> extends Query<T> implements ICollectionReference<T> {
	_native: com.google.firebase.firestore.CollectionReference;

	static fromNative(collection: com.google.firebase.firestore.CollectionReference) {
		if (collection instanceof com.google.firebase.firestore.CollectionReference) {
			const nativeCollection = new CollectionReference();
			nativeCollection._native = collection;
			return nativeCollection;
		}
		return null;
	}

	get id(): string {
		return this.native.getId();
	}

	get parent(): DocumentReference {
		return DocumentReference.fromNative(this.native.getParent());
	}

	get path(): string {
		return this.native.getPath();
	}

	add(data: T) {
		return new Promise<DocumentReference<T>>((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.CollectionReference.add(
				this.native,
				serializeItems(data),
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentReference>({
					onSuccess(ref) {
						resolve(DocumentReference.fromNative(ref));
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	doc(documentPath?: string) {
		return DocumentReference.fromNative(documentPath ? this.native.document(documentPath) : this.native.document());
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

	get android() {
		return this.native;
	}
}

export class DocumentReference<T extends DocumentData = DocumentData> implements IDocumentReference<T> {
	_native: com.google.firebase.firestore.DocumentReference;

	static fromNative(document: com.google.firebase.firestore.DocumentReference) {
		if (document instanceof com.google.firebase.firestore.DocumentReference) {
			const doc = new DocumentReference();
			doc._native = document;
			return doc;
		}
		return null;
	}

	get firestore(): Firestore {
		return Firestore.fromNative(this.native.getFirestore());
	}

	get id(): string {
		return this.native.getId();
	}

	get parent() {
		return CollectionReference.fromNative(this.native.getParent());
	}

	get path(): string {
		return this.native.getPath();
	}

	collection(collectionPath: string) {
		return CollectionReference.fromNative(this.native.collection(collectionPath));
	}

	delete(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.delete(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	get(options?: GetOptions): Promise<DocumentSnapshot<T>> {
		return new Promise((resolve, reject) => {
			let source: com.google.firebase.firestore.Source;
			switch (options) {
				case GetOptions.Cache:
					source = com.google.firebase.firestore.Source.CACHE;
					break;
				case GetOptions.Server:
					source = com.google.firebase.firestore.Source.SERVER;
					break;
				default:
					source = com.google.firebase.firestore.Source.DEFAULT;
					break;
			}

			org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.get(
				this.native,
				source,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<com.google.firebase.firestore.DocumentSnapshot>({
					onSuccess(ss) {
						resolve(DocumentSnapshot.fromNative(ss));
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	onSnapshot(observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void; }): () => void;
	onSnapshot(options: SnapshotListenOptions, observer: { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: DocumentSnapshot<T>) => void; }): () => void;
	onSnapshot(onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(options: SnapshotListenOptions, onNext: (snapshot: DocumentSnapshot<T>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
	onSnapshot(...args: OnSnapshotParameters<DocumentSnapshot<T>>): () => void {
		const { includeMetadataChanges, ...handlers } = parseOnSnapshotArgs(args);

		const listener = this.native.addSnapshotListener(
			includeMetadataChanges
				? com.google.firebase.firestore.MetadataChanges.INCLUDE
				: com.google.firebase.firestore.MetadataChanges.EXCLUDE,
			new com.google.firebase.firestore.EventListener<com.google.firebase.firestore.DocumentSnapshot>({
				onEvent(docSnapshot, error: com.google.firebase.firestore.FirebaseFirestoreException) {
					if (error) {
						handlers.error?.(FirebaseError.fromNative(error));
					} else {
						handlers.next?.(DocumentSnapshot.fromNative(docSnapshot));
					}
				},
			})
		);

		return () => listener?.remove?.();
	}

	set(data: T, options?: SetOptions): Promise<void> {
		return new Promise((resolve, reject) => {
			if (options) {
				if (typeof options?.merge === 'boolean') {
					org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.set(
						this.native,
						serializeItems(data),
						com.google.firebase.firestore.SetOptions.merge(),
						new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
							onSuccess(param0) {
								resolve();
							},
							onError(error) {
								reject(FirebaseError.fromNative(error));
							},
						})
					);
				} else if (options.mergeFields) {
					if (Array.isArray(options.mergeFields)) {
						if (typeof options.mergeFields[0] === 'string') {
							org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.set(
								this.native,
								serializeItems(data),
								com.google.firebase.firestore.SetOptions.mergeFields(options.mergeFields as any),
								new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
									onSuccess(param0) {
										resolve();
									},
									onError(error) {
										reject(FirebaseError.fromNative(error));
									},
								})
							);
						} else {
							const list = java.util.Arrays.asList(options.mergeFields.map((field) => field.native));
							org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.set(
								this.native,
								serializeItems(data),
								com.google.firebase.firestore.SetOptions.mergeFieldPaths(list),
								new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
									onSuccess(param0) {
										resolve();
									},
									onError(error) {
										reject(FirebaseError.fromNative(error));
									},
								})
							);
						}
					}
				}
			} else {
				org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.set(
					this.native,
					serializeItems(data),
					new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
						onSuccess(param0) {
							resolve();
						},
						onError(error) {
							reject(FirebaseError.fromNative(error));
						},
					})
				);
			}
		});
	}

	update(data: Partial<{ [K in keyof T]: FieldValue | T[K] }>): Promise<void>;
	update(field: FieldPath | keyof T, value: any, moreFieldsAndValues: any[]): Promise<void>;
	update(field: any, value?: any, moreFieldsAndValues?: any): Promise<void> {
		return new Promise((resolve, reject) => {
			if (arguments.length === 1) {
				org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.update(
					this.native,
					serializeItems(arguments[0]),
					new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
						onSuccess(param0) {
							resolve();
						},
						onError(error) {
							reject(FirebaseError.fromNative(error));
						},
					})
				);
			} else {
				if (field instanceof FieldPath) {
					org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.update(
						this.native,
						field.native,
						value?.native || value || null,
						moreFieldsAndValues?.map((value) => value?.native || value) ?? [],
						new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
							onSuccess(param0) {
								resolve();
							},
							onError(error) {
								reject(FirebaseError.fromNative(error));
							},
						})
					);
				} else {
					org.nativescript.firebase.firestore.FirebaseFirestore.DocumentReference.update(
						this.native,
						field,
						value?.native || value || null,
						moreFieldsAndValues?.map((value) => value?.native || value) ?? [],
						new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
							onSuccess(param0) {
								resolve();
							},
							onError(error) {
								reject(FirebaseError.fromNative(error));
							},
						})
					);
				}
			}
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

	get android() {
		return this.native;
	}
}

export class FieldPath implements IFieldPath {
	_native: com.google.firebase.firestore.FieldPath;

	constructor(fieldNames: string[], native = false) {
		if (!native) {
			this._native = com.google.firebase.firestore.FieldPath.of(fieldNames);
		}
	}

	static fromNative(field: com.google.firebase.firestore.FieldPath) {
		if (field instanceof com.google.firebase.firestore.FieldPath) {
			const path = new FieldPath([], true);
			path._native = field;
			return path;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	static documentId(): FieldPath {
		return FieldPath.fromNative(com.google.firebase.firestore.FieldPath.documentId());
	}

	toString() {
		return this.native.toString().replace(/([`])/g, '');
	}
}

export class FieldValue implements IFieldValue {
	_native: com.google.firebase.firestore.FieldValue;

	static fromNative(field: com.google.firebase.firestore.FieldValue) {
		if (field instanceof com.google.firebase.firestore.FieldValue) {
			const value = new FieldValue();
			value._native = field;
			return value;
		}
		return null;
	}

	static arrayRemove(elements: any[]): FieldValue {
		return FieldValue.fromNative(com.google.firebase.firestore.FieldValue.arrayRemove(elements.map((element) => element?.native || serializeItems(element))));
	}

	static arrayUnion(elements: any[]): FieldValue {
		return FieldValue.fromNative(com.google.firebase.firestore.FieldValue.arrayUnion(elements.map((element) => element?.native || serializeItems(element))));
	}

	static delete(): FieldValue {
		return FieldValue.fromNative(com.google.firebase.firestore.FieldValue.delete());
	}

	static increment(n: number): FieldValue {
		return FieldValue.fromNative(com.google.firebase.firestore.FieldValue.increment(n));
	}

	static serverTimestamp(): FieldValue {
		return FieldValue.fromNative(com.google.firebase.firestore.FieldValue.serverTimestamp());
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class GeoPoint implements IGeoPoint {
	_native: com.google.firebase.firestore.GeoPoint;

	constructor(latitude: number, longitude: number, native: boolean = false) {
		if (!native) {
			this._native = new com.google.firebase.firestore.GeoPoint(latitude, longitude);
		}
	}

	static fromNative(point: com.google.firebase.firestore.GeoPoint) {
		if (point instanceof com.google.firebase.firestore.GeoPoint) {
			const geo = new GeoPoint(0, 0, true);
			geo._native = point;
			return geo;
		}
		return null;
	}

	get latitude(): number {
		return this.native.getLatitude();
	}

	get longitude(): number {
		return this.native.getLongitude();
	}

	get native() {
		return this._native;
	}

	get android() {
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
	_native: com.google.firebase.Timestamp;

	constructor(seconds: number, nanoseconds: number, native = false) {
		if (!native) {
			this._native = new com.google.firebase.Timestamp(seconds, nanoseconds);
		}
	}

	static fromNative(timestamp: com.google.firebase.Timestamp) {
		if (timestamp instanceof com.google.firebase.Timestamp) {
			const ts = new Timestamp(0, 0, true);
			ts._native = timestamp;
			return ts;
		}
		return null;
	}

	static _dateFormat: java.text.SimpleDateFormat;

	static fromDate(date: Date) {
		if (date instanceof Date) {
			const ts = new Timestamp(0, 0, true);

			if (!this._dateFormat) {
				const dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
				const tz = java.util.TimeZone.getTimeZone('UTC');
				dateFormat.setTimeZone(tz);
				this._dateFormat = dateFormat;
			}

			ts._native = new com.google.firebase.Timestamp(this._dateFormat.parse(date.toISOString()));
			return ts;
		}
		return null;
	}

	static fromMillis(milliseconds: number) {
		const ts = new Timestamp(0, 0, true);
		ts._native = new com.google.firebase.Timestamp(milliseconds / 1000, 0);
		return ts;
	}

	static now() {
		const ts = new Timestamp(0, 0, true);
		ts._native = com.google.firebase.Timestamp.now();
		return ts;
	}

	isEqual(ts: Timestamp): boolean {
		return this.native.compareTo(ts.native) === 0;
	}

	toDate() {
		return new Date(this._native.toDate().getTime());
	}

	toMillis() {
		return this.native.getSeconds() * 1000;
	}

	valueOf() {
		return this.toDate().valueOf().toString();
	}

	get nanoseconds(): number {
		return this.native.getNanoseconds();
	}

	get seconds(): number {
		return this.native.getSeconds();
	}

	get native() {
		return this._native;
	}

	get android() {
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
	_native: com.google.firebase.firestore.WriteBatch;

	static fromNative(batch: com.google.firebase.firestore.WriteBatch) {
		if (batch instanceof com.google.firebase.firestore.WriteBatch) {
			const b = new WriteBatch();
			b._native = batch;
			return b;
		}
		return null;
	}

	commit(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.WriteBatch.commit(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	delete(documentRef: DocumentReference) {
		return WriteBatch.fromNative(this.native.delete(documentRef.native));
	}

	set(documentRef: DocumentReference, data: DocumentData, options?: SetOptions): WriteBatch {
		if (options) {
			if (typeof options?.merge === 'boolean') {
				const opts = com.google.firebase.firestore.SetOptions.merge();
				return WriteBatch.fromNative(this.native.set(documentRef.native, serializeItems(data), opts));
			}

			if (options.mergeFields) {
				if (Array.isArray(options.mergeFields)) {
					if (typeof options.mergeFields[0] === 'string') {
						return WriteBatch.fromNative(this.native.set(documentRef.native, serializeItems(data), com.google.firebase.firestore.SetOptions.mergeFields(options.mergeFields as any)));
					}

					const list = java.util.Arrays.asList(options.mergeFields.map((field) => field.native));
					return WriteBatch.fromNative(this.native.set(documentRef.native, serializeItems(data), com.google.firebase.firestore.SetOptions.mergeFields(list)));
				}
			}

			return null;
		} else {
			return WriteBatch.fromNative(this.native.set(documentRef.native, serializeItems(data)));
		}
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	update<T extends DocumentData = DocumentData>(documentRef: DocumentReference<T>, data: Partial<{ [K in keyof T]: T[K] | FieldValue }>): WriteBatch;
	update<T extends DocumentData = DocumentData, K extends keyof T = string>(documentRef: DocumentReference<T>, field: K | FieldPath, value: FieldValue | T[K], moreFieldAndValues: any[]): WriteBatch;
	update<T extends DocumentData = DocumentData>(documentRef: any, field: any, value?: any, moreFieldsAndValues?: any): WriteBatch {
		let batch;

		if (arguments.length === 2) {
			batch = this.native.update(documentRef.native, serializeItems(field));
		} else {
			if (field instanceof FieldPath) {
				batch = this.native.update(documentRef.native, field.native, value?.native || value || null, moreFieldsAndValues?.map((value) => value?.native || value) ?? []);
			} else {
				batch = this.native.update(documentRef.native, field.native, value?.native || value || null, moreFieldsAndValues?.map((value) => value?.native || value) ?? []);
			}
		}

		return WriteBatch.fromNative(batch);
	}
}

export class Settings implements ISettings {
	_builder: com.google.firebase.firestore.FirebaseFirestoreSettings.Builder;

	constructor() {
		this._builder = new com.google.firebase.firestore.FirebaseFirestoreSettings.Builder();
	}

	static fromNative(ffs: com.google.firebase.firestore.FirebaseFirestoreSettings) {
		if (ffs instanceof com.google.firebase.firestore.FirebaseFirestoreSettings) {
			const settings = new Settings();
			settings._builder = new com.google.firebase.firestore.FirebaseFirestoreSettings.Builder(ffs);
			return settings;
		}
		return null;
	}

	get cacheSizeBytes(): number {
		return this.native.getCacheSizeBytes();
	}

	set cacheSizeBytes(value) {
		this._builder.setCacheSizeBytes(value);
	}

	get host(): string {
		return this._builder.getHost();
	}

	set host(value) {
		this._builder.setHost(value);
	}

	ignoreUndefinedProperties: boolean;

	get persistence(): boolean {
		return this._builder.isPersistenceEnabled();
	}

	set persistence(value) {
		this._builder.setPersistenceEnabled(value);
	}

	get ssl(): boolean {
		return this._builder.isSslEnabled();
	}

	set ssl(value) {
		this._builder.setSslEnabled(value);
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

	get android() {
		return this.native;
	}

	get native() {
		return this._builder.build();
	}
}

export class Bytes implements IBytes {
	_native: com.google.firebase.firestore.Blob;

	static fromNative(data: com.google.firebase.firestore.Blob) {
		if (data instanceof com.google.firebase.firestore.Blob) {
			const blob = new Bytes();
			blob._native = data;
			return blob;
		}
		return null;
	}

	static fromBase64String(base64) {
		if (typeof base64 === 'string') {
			let b64 = base64;
			if (base64.startsWith('data:')) {
				b64 = base64.split(',')[1];
			}
			const data = new java.lang.String(b64).getBytes('UTF-8');
			const encoded = android.util.Base64.encode(data, android.util.Base64.NO_WRAP);
			const bytes = new Bytes();
			bytes._native = com.google.firebase.firestore.Blob.fromBytes(encoded);
			return bytes;
		}
		return null;
	}

	static fromUint8Array(array) {
		if (!(array instanceof Uint8Array)) {
			throw new Error('Bytes.fromUint8Array expects an instance of Uint8Array');
		}

		const bytes = new Bytes();
		bytes._native = com.google.firebase.firestore.Blob.fromBytes(Array.from(array));
		return bytes;
	}

	_base64: string;
	toBase64(): string {
		if (!this._base64) {
			const data = this.native.toBytes();
			this._base64 = android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);
		}

		return this._base64;
	}

	_native_buffer;
	_buffer;
	toUint8Array(): Uint8Array {
		if (!this._native_buffer) {
			this._native_buffer = java.nio.ByteBuffer.wrap(this.native.toBytes());
		}
		if (!this._buffer) {
			this._buffer = (<any>ArrayBuffer).from(this._native_buffer);
		}
		return new Uint8Array(this._buffer);
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}
}

export class Firestore implements IFirestore {
	_native: com.google.firebase.firestore.FirebaseFirestore;
	_app: FirebaseApp;

	constructor(app?: FirebaseApp) {
		if (app) {
			this._native = com.google.firebase.firestore.FirebaseFirestore.getInstance(app.native);
		} else {
			if (defaultFirestore) {
				return defaultFirestore;
			}
			defaultFirestore = this;
			this._native = com.google.firebase.firestore.FirebaseFirestore.getInstance();
		}
	}

	useEmulator(host: string, port: number) {
		this.native.useEmulator(host === 'localhost' || host === '127.0.0.1' ? '10.0.2.2' : host, port);
	}

	static fromNative(store: com.google.firebase.firestore.FirebaseFirestore) {
		if (store instanceof com.google.firebase.firestore.FirebaseFirestore) {
			const firestore = new Firestore();
			firestore._native = store;
			return firestore;
		}
		return null;
	}

	batch(): WriteBatch {
		return WriteBatch.fromNative(this.native.batch());
	}

	collection(collectionPath: string): CollectionReference {
		return CollectionReference.fromNative(this.native.collection(collectionPath));
	}

	clearPersistence(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.clearPersistence(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	collectionGroup(collectionId: string): Query {
		return Query.fromNative(this.native.collectionGroup(collectionId));
	}

	disableNetwork(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.disableNetwork(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	doc(documentPath: string): DocumentReference {
		return DocumentReference.fromNative(this.native.document(documentPath));
	}

	enableNetwork(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.enableNetwork(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	runTransaction(updateFunction: (transaction: Transaction) => Promise<any>): Promise<any> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.runTransaction(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.TransactionCallback({
					onTransaction(transaction: com.google.firebase.firestore.Transaction, returnValue: androidx.lifecycle.MutableLiveData<any>, lock: java.util.concurrent.CountDownLatch) {
						updateFunction(Transaction.fromNative(transaction))
							.then((value) => {
								returnValue.postValue(value?.native || value || null);
								lock.countDown();
							})
							.catch((e) => {
								returnValue.postValue(null);
								lock.countDown();
							});
					},
				}),
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<any>({
					onSuccess(param0) {
						resolve(deserializeField(param0));
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	get settings() {
		return Settings.fromNative(this.native?.getFirestoreSettings?.());
	}

	set settings(value) {
		if (this.native) {
			this.native.setFirestoreSettings(value?.native);
		}
	}

	terminate(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.terminate(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
	}

	waitForPendingWrites(): Promise<void> {
		return new Promise((resolve, reject) => {
			org.nativescript.firebase.firestore.FirebaseFirestore.waitForPendingWrites(
				this.native,
				new org.nativescript.firebase.firestore.FirebaseFirestore.Callback<java.lang.Void>({
					onSuccess(param0) {
						resolve();
					},
					onError(error) {
						reject(FirebaseError.fromNative(error));
					},
				})
			);
		});
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
			this._app = FirebaseApp.fromNative(this.native.getApp());
		}
		return this._app;
	}
}
