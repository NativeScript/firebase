import { Firebase } from '.';

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function numberIs64Bit(item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
}

export function serialize(data: any, wrapPrimitives: boolean = false): any {
	if (global.isIOS) {
		switch (typeof data) {
			case 'string':
			case 'boolean': {
				return data;
			}
			case 'number': {
				const hasDecimals = numberHasDecimals(data);
				if (numberIs64Bit(data)) {
					if (hasDecimals) {
						return NSNumber.alloc().initWithDouble(data);
					} else {
						return NSNumber.alloc().initWithLongLong(data);
					}
				} else {
					if (hasDecimals) {
						return NSNumber.alloc().initWithFloat(data);
					} else {
						return data;
					}
				}
			}

			case 'object': {
				if (data instanceof Date) {
					return NSDate.dateWithTimeIntervalSince1970(data.getTime() / 1000);
				}

				if (!data) {
					return null;
				}

				if (Array.isArray(data)) {
					return NSArray.arrayWithArray((<any>data).map(serialize));
				}

				let node = {} as any;
				Object.keys(data).forEach(function (key) {
					let value = data[key];
					node[key] = serialize(value, wrapPrimitives);
				});
				return NSDictionary.dictionaryWithDictionary(node);
			}

			default:
				return null;
		}
	}

	if (global.isAndroid) {
		let store;
		switch (typeof data) {
			case 'string':
			case 'boolean': {
				if (wrapPrimitives) {
					if (typeof data === 'string') {
						return new java.lang.String(data);
					}
					return new java.lang.Boolean(data);
				}
				return data;
			}
			case 'number': {
				const hasDecimals = numberHasDecimals(data);
				if (numberIs64Bit(data)) {
					if (hasDecimals) {
						return java.lang.Double.valueOf(data);
					} else {
						return java.lang.Long.valueOf(data);
					}
				} else {
					if (hasDecimals) {
						return java.lang.Float.valueOf(data);
					} else {
						return java.lang.Integer.valueOf(data);
					}
				}
			}

			case 'object': {
				if (!data) {
					return null;
				}

				if (data instanceof Date) {
					return new java.util.Date(data.getTime());
				}

				if (Array.isArray(data)) {
					store = new java.util.ArrayList();
					data.forEach((item) => store.add(serialize(item, wrapPrimitives)));
					return store;
				}

				if (data.native) {
					return data.native;
				}

				store = new java.util.HashMap();
				Object.keys(data).forEach((key) => store.put(key, serialize(data[key], wrapPrimitives)));
				return store;
			}

			default:
				return null;
		}
	}
}

export function deserialize(data: any): any {
	if (global.isIOS) {
		if (data instanceof NSNull) {
			return null;
		}

		if (data instanceof NSArray) {
			let array = [];
			for (let i = 0, n = data.count; i < n; i++) {
				array[i] = deserialize(data.objectAtIndex(i));
			}
			return array;
		}

		if (data instanceof NSDictionary) {
			let dict = {};
			for (let i = 0, n = data.allKeys.count; i < n; i++) {
				let key = data.allKeys.objectAtIndex(i);
				dict[key] = deserialize(data.objectForKey(key));
			}
			return dict;
		}

		return data;
	}

	if (global.isAndroid) {
		if (data === null || typeof data !== 'object') {
			return data;
		}
		let store;

		switch (data.getClass().getName()) {
			case 'java.lang.String': {
				return String(data);
			}

			case 'java.lang.Boolean': {
				return String(data) === 'true';
			}

			case 'java.lang.Float':
			case 'java.lang.Integer':
			case 'java.lang.Long':
			case 'java.lang.Double':
			case 'java.lang.Short': {
				return Number(data);
			}

			case 'org.json.JSONArray': {
				store = [];
				for (let j = 0; j < data.length(); j++) {
					store[j] = deserialize(data.get(j));
				}
				break;
			}
			case 'org.json.JSONObject': {
				store = {};
				let i = data.keys();
				while (i.hasNext()) {
					let key = i.next();
					store[key] = deserialize(data.get(key));
				}
				break;
			}

			case 'androidx.collection.SimpleArrayMap': {
				const count = data.size();
				for (let l = 0; l < count; l++) {
					const key = data.keyAt(l);
					store[key] = deserialize(data.get(key));
				}
				break;
			}

			case 'androidx.collection.ArrayMap':
			case 'android.os.Bundle':
			case 'java.util.HashMap':
			case 'java.util.Map': {
				store = {};
				const keys = data.keySet().toArray();
				for (let k = 0; k < keys.length; k++) {
					const key = keys[k];
					store[key] = deserialize(data.get(key));
				}
				break;
			}

			default:
				if (typeof data === 'object' && data instanceof java.util.List) {
					const array = [];
					const size = data.size();
					for (let i = 0, n = size; i < n; i++) {
						array[i] = deserialize(data.get(i));
					}
					store = array;
				} else {
					store = null;
				}
				break;
		}
		return store;
	}
}
