import { SnapshotListenOptions } from '.';

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

type Observer<SnapshotType> = { complete?: () => void; error?: (error: Error) => void; next?: (snapshot: SnapshotType) => void }

export type OnSnapshotParameters<SnapshotType> =
	| [observer: Observer<SnapshotType>]
	| [options: SnapshotListenOptions, observer: Observer<SnapshotType>]
	| [onNext: (snapshot: SnapshotType) => void, onError?: (error: Error) => void, onCompletion?: () => void]
	| [options: SnapshotListenOptions, onNext: (snapshot: SnapshotType) => void, onError?: (error: Error) => void, onCompletion?: () => void]

export function parseOnSnapshotArgs<SnapshotType>(args: OnSnapshotParameters<SnapshotType>) {
	const result: SnapshotListenOptions & Observer<SnapshotType> = {
		includeMetadataChanges: false
	}
	for (let i = 0; i < args.length; ++i) {
		if (args[i] instanceof Function) {
			// Assign whichever of next, error, complete were passed starting here
			const fnArgsMappingOrder = ['next', 'error', 'complete'] as const
			args.slice(i).forEach((fn, idx) => result[fnArgsMappingOrder[idx]] = fn)
			break
		} else if (typeof args[i] === 'object') {
			if ('includeMetadataChanges' in args[i]) {
				result.includeMetadataChanges = Boolean((<SnapshotListenOptions>args[i]).includeMetadataChanges)
			} else { // Must be Observer
				Object.assign(result, args[i])
			}
		} else {
			throw new Error(`Invalid argument to onSnapshot at position ${i} of type ${typeof args[i]}: ${args[i]}`)
		}
	}
	return result
}