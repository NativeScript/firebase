import { ICollectionReference, IDocumentReference, IFieldPath, IFieldValue, IGeoPoint, ITimestamp } from '.';

export enum GetOptions {
	Default = 'default',
	Server = 'server',
	Cache = 'cache',
}

export enum DocumentChangeType {
	Added = 'added',
	Removed = 'removed',
	Modified = 'modified',
}
