declare class FUIArray extends NSObject implements FUICollection {
	static alloc(): FUIArray; // inherited from NSObject

	static arrayWithQuery(query: FUIDataObservable): FUIArray;

	static new(): FUIArray; // inherited from NSObject

	query: FUIDataObservable;

	readonly count: number; // inherited from FUICollection

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: FUICollectionDelegate; // inherited from FUICollection

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly items: NSArray<FIRDataSnapshot>; // inherited from FUICollection

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol
	[index: number]: any;

	constructor(o: { query: FUIDataObservable });

	constructor(o: { query: FUIDataObservable; delegate: FUICollectionDelegate });

	changeSnapshotWithPreviousChildKey(snap: FIRDataSnapshot, previous: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexForKey(key: string): number;

	initWithQuery(query: FUIDataObservable): this;

	initWithQueryDelegate(query: FUIDataObservable, delegate: FUICollectionDelegate): this;

	insertSnapshotWithPreviousChildKey(snap: FIRDataSnapshot, previous: string): void;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	moveSnapshotWithPreviousChildKey(snap: FIRDataSnapshot, previous: string): void;

	objectAtIndexedSubscript(idx: number): any;

	observeQuery(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	refForIndex(index: number): FIRDatabaseReference;

	removeSnapshotWithPreviousChildKey(snap: FIRDataSnapshot, previous: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	snapshotAtIndex(index: number): FIRDataSnapshot;
}

interface FUICollection extends NSObjectProtocol {
	count: number;

	delegate: FUICollectionDelegate;

	items: NSArray<FIRDataSnapshot>;

	invalidate(): void;

	observeQuery(): void;

	snapshotAtIndex(index: number): FIRDataSnapshot;
}
declare var FUICollection: {
	prototype: FUICollection;
};

interface FUICollectionDelegate extends NSObjectProtocol {
	arrayDidAddObjectAtIndex?(array: FUICollection, object: any, index: number): void;

	arrayDidBeginUpdates?(collection: FUICollection): void;

	arrayDidChangeObjectAtIndex?(array: FUICollection, object: any, index: number): void;

	arrayDidEndUpdates?(collection: FUICollection): void;

	arrayDidMoveObjectFromIndexToIndex?(array: FUICollection, object: any, fromIndex: number, toIndex: number): void;

	arrayDidRemoveObjectAtIndex?(array: FUICollection, object: any, index: number): void;

	arrayQueryCancelledWithError?(array: FUICollection, error: NSError): void;
}
declare var FUICollectionDelegate: {
	prototype: FUICollectionDelegate;
};

declare class FUICollectionViewDataSource extends NSObject implements UICollectionViewDataSource {
	static alloc(): FUICollectionViewDataSource; // inherited from NSObject

	static new(): FUICollectionViewDataSource; // inherited from NSObject

	collectionView: UICollectionView;

	readonly count: number;

	readonly items: NSArray<FIRDataSnapshot>;

	queryErrorHandler: (p1: NSError) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { collection: FUICollection; populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell });

	constructor(o: { query: FIRDatabaseQuery; populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell });

	bindToView(view: UICollectionView): void;

	class(): typeof NSObject;

	/**
	 * @since 9.0
	 */
	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	/**
	 * @since 14.0
	 */
	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	/**
	 * @since 9.0
	 */
	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	/**
	 * @since 14.0
	 */
	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithCollectionPopulateCell(collection: FUICollection, populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell): this;

	initWithQueryPopulateCell(query: FIRDatabaseQuery, populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	snapshotAtIndex(index: number): FIRDataSnapshot;

	unbind(): void;
}

interface FUIDataObservable extends NSObjectProtocol {
	child(path: string): FUIDataObservable;

	observeEventTypeAndPreviousSiblingKeyWithBlockWithCancelBlock(eventType: FIRDataEventType, block: (p1: FIRDataSnapshot, p2: string) => void, cancelBlock: (p1: NSError) => void): number;

	removeObserverWithHandle(handle: number): void;
}
declare var FUIDataObservable: {
	prototype: FUIDataObservable;
};

declare class FUIIndexArray extends NSObject {
	static alloc(): FUIIndexArray; // inherited from NSObject

	static new(): FUIIndexArray; // inherited from NSObject

	readonly count: number;

	delegate: FUIIndexArrayDelegate;

	readonly indexes: NSArray<FIRDataSnapshot>;

	readonly items: NSArray<FIRDataSnapshot>;

	constructor(o: { index: FUIDataObservable; data: FUIDataObservable });

	constructor(o: { index: FUIDataObservable; data: FUIDataObservable; delegate: FUIIndexArrayDelegate });

	initWithIndexData(index: FUIDataObservable, data: FUIDataObservable): this;

	initWithIndexDataDelegate(index: FUIDataObservable, data: FUIDataObservable, delegate: FUIIndexArrayDelegate): this;

	invalidate(): void;

	objectAtIndex(index: number): FIRDataSnapshot;

	observeQuery(): void;
}

interface FUIIndexArrayDelegate extends NSObjectProtocol {
	arrayDidAddReferenceAtIndex?(array: FUIIndexArray, ref: FIRDatabaseReference, index: number): void;

	arrayDidChangeReferenceAtIndex?(array: FUIIndexArray, ref: FIRDatabaseReference, index: number): void;

	arrayDidMoveReferenceFromIndexToIndex?(array: FUIIndexArray, ref: FIRDatabaseReference, fromIndex: number, toIndex: number): void;

	arrayDidRemoveReferenceAtIndex?(array: FUIIndexArray, ref: FIRDatabaseReference, index: number): void;

	arrayQueryCancelledWithError?(array: FUIIndexArray, error: NSError): void;

	arrayReferenceAtIndexDidFailLoadWithError?(array: FUIIndexArray, ref: FIRDatabaseReference, index: number, error: NSError): void;

	arrayReferenceDidLoadObjectAtIndex?(array: FUIIndexArray, ref: FIRDatabaseReference, object: FIRDataSnapshot, index: number): void;
}
declare var FUIIndexArrayDelegate: {
	prototype: FUIIndexArrayDelegate;
};

declare class FUIIndexCollectionViewDataSource extends NSObject implements UICollectionViewDataSource {
	static alloc(): FUIIndexCollectionViewDataSource; // inherited from NSObject

	static new(): FUIIndexCollectionViewDataSource; // inherited from NSObject

	delegate: FUIIndexCollectionViewDataSourceDelegate;

	readonly indexes: NSArray<FIRDataSnapshot>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { indexArray: FUIIndexArray; delegate: FUIIndexCollectionViewDataSourceDelegate; populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell });

	constructor(o: { index: FIRDatabaseQuery; data: FIRDatabaseReference; delegate: FUIIndexCollectionViewDataSourceDelegate; populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell });

	bindToView(view: UICollectionView): void;

	class(): typeof NSObject;

	/**
	 * @since 9.0
	 */
	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	/**
	 * @since 14.0
	 */
	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	/**
	 * @since 9.0
	 */
	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	/**
	 * @since 14.0
	 */
	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithIndexArrayDelegatePopulateCell(indexArray: FUIIndexArray, delegate: FUIIndexCollectionViewDataSourceDelegate, populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell): this;

	initWithIndexDataDelegatePopulateCell(indexQuery: FIRDatabaseQuery, dataQuery: FIRDatabaseReference, delegate: FUIIndexCollectionViewDataSourceDelegate, populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDataSnapshot) => UICollectionViewCell): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	snapshotAtIndex(index: number): FIRDataSnapshot;

	unbind(): void;
}

interface FUIIndexCollectionViewDataSourceDelegate extends NSObjectProtocol {
	dataSourceIndexQueryDidFailWithError?(dataSource: FUIIndexCollectionViewDataSource, error: NSError): void;

	dataSourceReferenceDidFailLoadAtIndexWithError?(dataSource: FUIIndexCollectionViewDataSource, ref: FIRDatabaseReference, index: number, error: NSError): void;
}
declare var FUIIndexCollectionViewDataSourceDelegate: {
	prototype: FUIIndexCollectionViewDataSourceDelegate;
};

declare class FUIIndexTableViewDataSource extends NSObject implements UITableViewDataSource {
	static alloc(): FUIIndexTableViewDataSource; // inherited from NSObject

	static new(): FUIIndexTableViewDataSource; // inherited from NSObject

	delegate: FUIIndexTableViewDataSourceDelegate;

	readonly indexes: NSArray<FIRDataSnapshot>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { indexArray: FUIIndexArray; delegate: FUIIndexTableViewDataSourceDelegate; populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell });

	constructor(o: { index: FIRDatabaseQuery; data: FIRDatabaseReference; delegate: FUIIndexTableViewDataSourceDelegate; populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell });

	bindToView(view: UITableView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIndexArrayDelegatePopulateCell(indexArray: FUIIndexArray, delegate: FUIIndexTableViewDataSourceDelegate, populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell): this;

	initWithIndexDataDelegatePopulateCell(indexQuery: FIRDatabaseQuery, dataQuery: FIRDatabaseReference, delegate: FUIIndexTableViewDataSourceDelegate, populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	snapshotAtIndex(index: number): FIRDataSnapshot;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	unbind(): void;
}

interface FUIIndexTableViewDataSourceDelegate extends NSObjectProtocol {
	dataSourceIndexQueryDidFailWithError?(dataSource: FUIIndexTableViewDataSource, error: NSError): void;

	dataSourceReferenceDidFailLoadAtIndexWithError?(dataSource: FUIIndexTableViewDataSource, ref: FIRDatabaseReference, index: number, error: NSError): void;
}
declare var FUIIndexTableViewDataSourceDelegate: {
	prototype: FUIIndexTableViewDataSourceDelegate;
};

declare class FUIQueryObserver extends NSObject {
	static alloc(): FUIQueryObserver; // inherited from NSObject

	static new(): FUIQueryObserver; // inherited from NSObject

	static observerForQueryCompletion(query: FUIDataObservable, completion: (p1: FUIQueryObserver, p2: FIRDataSnapshot, p3: NSError) => void): FUIQueryObserver;

	readonly contents: FIRDataSnapshot;

	readonly query: FUIDataObservable;

	constructor(o: { query: FUIDataObservable });

	initWithQuery(query: FUIDataObservable): this;

	removeAllObservers(): void;
}

declare class FUISortedArray extends FUIArray implements FUICollection {
	static alloc(): FUISortedArray; // inherited from NSObject

	static arrayWithQuery(query: FUIDataObservable): FUISortedArray; // inherited from FUIArray

	static new(): FUISortedArray; // inherited from NSObject

	readonly count: number; // inherited from FUICollection

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: FUICollectionDelegate; // inherited from FUICollection

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly items: NSArray<FIRDataSnapshot>; // inherited from FUICollection

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { query: FUIDataObservable; delegate: FUICollectionDelegate; sortDescriptor: (p1: FIRDataSnapshot, p2: FIRDataSnapshot) => NSComparisonResult });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithQueryDelegateSortDescriptor(query: FUIDataObservable, delegate: FUICollectionDelegate, sortDescriptor: (p1: FIRDataSnapshot, p2: FIRDataSnapshot) => NSComparisonResult): this;

	invalidate(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	observeQuery(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	snapshotAtIndex(index: number): FIRDataSnapshot;
}

declare class FUITableViewDataSource extends NSObject implements UITableViewDataSource {
	static alloc(): FUITableViewDataSource; // inherited from NSObject

	static new(): FUITableViewDataSource; // inherited from NSObject

	readonly count: number;

	readonly items: NSArray<FIRDataSnapshot>;

	queryErrorHandler: (p1: NSError) => void;

	tableView: UITableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { collection: FUICollection; populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell });

	constructor(o: { query: FIRDatabaseQuery; populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell });

	bindToView(view: UITableView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCollectionPopulateCell(collection: FUICollection, populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell): this;

	initWithQueryPopulateCell(query: FIRDatabaseQuery, populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDataSnapshot) => UITableViewCell): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	snapshotAtIndex(index: number): FIRDataSnapshot;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	unbind(): void;
}

declare var FirebaseDatabaseUIVersionNumber: number;

declare var FirebaseDatabaseUIVersionNumberVar: number;

declare var FirebaseDatabaseUIVersionString: interop.Reference<number>;

declare var FirebaseDatabaseUIVersionStringVar: interop.Reference<number>;
