declare class FUIArraySlice<ObjectType> extends NSObject {
	static alloc<ObjectType>(): FUIArraySlice<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): FUIArraySlice<ObjectType>; // inherited from NSObject

	readonly backingArray: NSArray<any>;

	readonly count: number;

	readonly endIndex: number;

	readonly startIndex: number;
	[index: number]: any;

	constructor(o: { array: NSArray<any> | any[] });

	constructor(o: { array: NSArray<any> | any[]; startIndex: number; endIndex: number });

	constructor(o: { array: NSArray<any> | any[]; startIndex: number; length: number });

	initWithArray(array: NSArray<any> | any[]): this;

	initWithArrayStartIndexEndIndex(array: NSArray<any> | any[], start: number, end: number): this;

	initWithArrayStartIndexLength(array: NSArray<any> | any[], start: number, length: number): this;

	objectAtIndex(index: number): any;

	objectAtIndexedSubscript(index: number): any;

	suffixFromIndex(index: number): FUIArraySlice<any>;
}

declare class FUIBatchedArray extends NSObject {
	static alloc(): FUIBatchedArray; // inherited from NSObject

	static new(): FUIBatchedArray; // inherited from NSObject

	readonly count: number;

	delegate: FUIBatchedArrayDelegate;

	readonly items: NSArray<FIRDocumentSnapshot>;

	query: FIRQuery;
	[index: number]: FIRDocumentSnapshot;

	constructor(o: { query: FIRQuery; delegate: FUIBatchedArrayDelegate });

	initWithQueryDelegate(query: FIRQuery, delegate: FUIBatchedArrayDelegate): this;

	objectAtIndex(index: number): FIRDocumentSnapshot;

	objectAtIndexedSubscript(index: number): FIRDocumentSnapshot;

	observeQuery(): void;

	stopObserving(): void;
}

interface FUIBatchedArrayDelegate extends NSObjectProtocol {
	batchedArrayDidUpdateWithDiff(array: FUIBatchedArray, diff: FUISnapshotArrayDiff<FIRDocumentSnapshot>): void;

	batchedArrayQueryDidFailWithError(array: FUIBatchedArray, error: NSError): void;

	batchedArrayWillUpdateWithDiff(array: FUIBatchedArray, diff: FUISnapshotArrayDiff<FIRDocumentSnapshot>): void;
}
declare var FUIBatchedArrayDelegate: {
	prototype: FUIBatchedArrayDelegate;
};

declare class FUIFirestoreCollectionViewDataSource extends NSObject implements UICollectionViewDataSource {
	static alloc(): FUIFirestoreCollectionViewDataSource; // inherited from NSObject

	static new(): FUIFirestoreCollectionViewDataSource; // inherited from NSObject

	collectionView: UICollectionView;

	readonly count: number;

	readonly items: NSArray<FIRDocumentSnapshot>;

	query: FIRQuery;

	queryErrorHandler: (p1: NSError) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { collection: FUIBatchedArray; populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UICollectionViewCell });

	constructor(o: { query: FIRQuery; populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UICollectionViewCell });

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

	initWithCollectionPopulateCell(collection: FUIBatchedArray, populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UICollectionViewCell): this;

	initWithQueryPopulateCell(query: FIRQuery, populateCell: (p1: UICollectionView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UICollectionViewCell): this;

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

	snapshotAtIndex(index: number): FIRDocumentSnapshot;

	unbind(): void;
}

declare class FUIFirestoreTableViewDataSource extends NSObject implements UITableViewDataSource {
	static alloc(): FUIFirestoreTableViewDataSource; // inherited from NSObject

	static new(): FUIFirestoreTableViewDataSource; // inherited from NSObject

	animation: UITableViewRowAnimation;

	readonly count: number;

	readonly items: NSArray<FIRDocumentSnapshot>;

	query: FIRQuery;

	queryErrorHandler: (p1: NSError) => void;

	tableView: UITableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { collection: FUIBatchedArray; populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UITableViewCell });

	constructor(o: { query: FIRQuery; populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UITableViewCell });

	bindToView(view: UITableView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCollectionPopulateCell(collection: FUIBatchedArray, populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UITableViewCell): this;

	initWithQueryPopulateCell(query: FIRQuery, populateCell: (p1: UITableView, p2: NSIndexPath, p3: FIRDocumentSnapshot) => UITableViewCell): this;

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

	snapshotAtIndex(index: number): FIRDocumentSnapshot;

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

declare class FUILCS<ObjectType> extends NSObject {
	static alloc<ObjectType>(): FUILCS<ObjectType>; // inherited from NSObject

	static lcsWithInitialArrayResultArray(initial: NSArray<any> | any[], result: NSArray<any> | any[]): NSArray<any>;

	static new<ObjectType>(): FUILCS<ObjectType>; // inherited from NSObject
}

declare class FUISnapshotArrayDiff<ObjectType> extends NSObject {
	static alloc<ObjectType>(): FUISnapshotArrayDiff<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): FUISnapshotArrayDiff<ObjectType>; // inherited from NSObject

	readonly changedIndexes: NSArray<number>;

	readonly changedObjects: NSArray<any>;

	readonly deletedIndexes: NSArray<number>;

	readonly deletedObjects: NSArray<any>;

	readonly initial: NSArray<any>;

	readonly insertedIndexes: NSArray<number>;

	readonly insertedObjects: NSArray<any>;

	readonly movedInitialIndexes: NSArray<number>;

	readonly movedObjects: NSArray<any>;

	readonly movedResultIndexes: NSArray<number>;

	readonly result: NSArray<any>;

	constructor(o: { initialArray: NSArray<any> | any[]; resultArray: NSArray<any> | any[] });

	constructor(o: { initialArray: NSArray<FIRDocumentSnapshot> | FIRDocumentSnapshot[]; resultArray: NSArray<FIRDocumentSnapshot> | FIRDocumentSnapshot[]; documentChanges: NSArray<FIRDocumentChange> | FIRDocumentChange[] });

	initWithInitialArrayResultArray(initialArray: NSArray<any> | any[], resultArray: NSArray<any> | any[]): this;

	initWithInitialArrayResultArrayDocumentChanges(initial: NSArray<FIRDocumentSnapshot> | FIRDocumentSnapshot[], result: NSArray<FIRDocumentSnapshot> | FIRDocumentSnapshot[], documentChanges: NSArray<FIRDocumentChange> | FIRDocumentChange[]): this;
}

declare class FUIUnorderedPair<ObjectType> extends NSObject implements NSCopying {
	static alloc<ObjectType>(): FUIUnorderedPair<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): FUIUnorderedPair<ObjectType>; // inherited from NSObject

	readonly left: any;

	readonly right: any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare function FUIUnorderedPairMake(left: any, right: any): FUIUnorderedPair<any>;

declare var FirebaseFirestoreUIVersionNumber: number;

declare var FirebaseFirestoreUIVersionNumberVar: number;

declare var FirebaseFirestoreUIVersionString: interop.Reference<number>;

declare var FirebaseFirestoreUIVersionStringVar: interop.Reference<number>;
