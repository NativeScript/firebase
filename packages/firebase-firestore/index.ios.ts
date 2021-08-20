import { ICollectionReference, IDocumentReference, IFirestore, IQuery, IWriteBatch, SetOptions } from './common';
import { FirebaseApp, serialize } from '@nativescript/firebase-core';

export class Query implements IQuery {
	#native: FIRQuery;

	static fromNative(query: FIRQuery) {
		if (query instanceof FIRQuery) {
			const nativeQuery = new Query();
			nativeQuery.#native = query;
			return nativeQuery;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class CollectionReference implements ICollectionReference {
	#native: FIRCollectionReference;

	static fromNative(collection: FIRCollectionReference) {
		if (collection instanceof FIRCollectionReference) {
			const nativeCollection = new CollectionReference();
			nativeCollection.#native = collection;
			return nativeCollection;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class DocumentReference implements IDocumentReference {
	#native: FIRDocumentReference;

	static fromNative(document: FIRDocumentReference) {
		if (document instanceof FIRDocumentReference) {
			const doc = new DocumentReference();
			doc.#native = document;
			return doc;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class WriteBatch implements IWriteBatch {
	commit(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.commitWithCompletion((error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					resolve();
				}
			});
		});
	}
	delete(documentRef: DocumentReference): WriteBatch {
		return WriteBatch.fromNative(this.native.deleteDocument(documentRef.native));
	}
	set(documentRef: DocumentReference, data: any, options?: SetOptions): WriteBatch {
		if (options) {
			// TODO
			return;
		} else {
			return WriteBatch.fromNative(this.native.setDataForDocument(serialize(data), documentRef.native));
		}
	}
	#native: FIRWriteBatch;

	static fromNative(batch: FIRWriteBatch) {
		if (batch instanceof FIRWriteBatch) {
			const b = new WriteBatch();
			b.#native = batch;
			return b;
		}
		return null;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

declare const FIRApp;
export class Firestore implements IFirestore {
	#native: FIRFirestore;
	#app: FirebaseApp;
	constructor(app?: FirebaseApp) {
		if (app) {
			this.#native = FIRFirestore.firestoreForApp(app.native);
		} else {
			this.#native = FIRFirestore.firestoreForApp(FIRApp.defaultApp());
		}
	}
	clearPersistence(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.clearPersistenceWithCompletion((error) => {
				if (error) {
					reject({
						message: error.localizedDescription,
						native: error,
					});
				} else {
					resolve();
				}
			});
		});
	}
	collection(collectionPath: string): CollectionReference {
		return CollectionReference.fromNative(this.native.collectionWithPath(collectionPath));
	}
	collectionGroup(collectionId: string): Query {
		return Query.fromNative(this.native.collectionGroupWithID(collectionId));
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

	batch(): WriteBatch {
		return WriteBatch.fromNative(this.native.batch());
	}
}
