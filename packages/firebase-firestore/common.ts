export interface IDocumentReference {}

export interface SetOptions {}

export interface IWriteBatch {
    commit(): Promise<void>;
    delete(documentRef: IDocumentReference): IWriteBatch;
    set(documentRef: IDocumentReference, data: any, options?: SetOptions): IWriteBatch;
}

export interface ICollectionReference {}

export interface IQuery {}

export interface IFirestore {
    batch(): IWriteBatch;
    clearPersistence(): Promise<void>;
    collection(collectionPath: string): ICollectionReference;
    collectionGroup(collectionId: string): IQuery;
}