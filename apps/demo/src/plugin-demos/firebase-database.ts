import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseDatabase } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import { Database } from '@nativescript/firebase-database';
import { Auth } from '@nativescript/firebase-auth';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseDatabase {
	database: Database;
	auth: Auth;
	constructor() {
		super();
		this.auth = firebase().auth();
		this.database = firebase().database();
	}

	testIt(): void {
		this.transaction();
		this.randomData();
		this.children();
		this.setData();
		this.issue113();
		this.issue141();
	}

	issue105() {
		var obj = {
			list: [
				{ propertyA: 'valueA', propertyB: null },
				{ propertyA: 'aaa', propertyB: null },
			],
		};
		this.database
			.ref('/issues/105')
			.set(obj)
			.then((v) => {
				console.log('done');
			})
			.catch((e) => {
				console.log('error', e);
			});
	}

	issue113() {
		this.database
			.ref('/issues/113')
			.set(2.1)
			.then((v) => {
				console.log('done');
			})
			.catch((e) => {
				console.log('error', e);
			});
	}

	issue141() {
		let on = true;
		const ref = this.database.ref('/issues/141');
		const cb = (data, key) => {
			if (!on) {
				throw new Error('issue 141 Listener: failed to unsubscribe');
			}
			console.log('issue141', data.val(), 'previous', key);
			ref.off('value', cb);
			on = false;

			ref.set({ name: 'Osei Fortune' });
		};
		ref.on('value', cb);
		ref.set({ name: 'Osei' });
	}

	setData() {
		this.database
			.ref('/person/me')
			.set({ name: 'set', boolean: true, updated: new Date() })
			.then((value) => {
				console.log('set some data', value);
			})
			.catch((e) => {
				console.log('failed to set data', e);
			});
	}

	randomData() {
		this.database
			.ref('/random')
			.push({ name: 'random', float: 1.1 })
			.then((value) => {
				console.log('push randomData', value);
			});
	}

	children() {
		this.database
			.ref('/posts')
			.once('value')
			.then((res) => {
				let count = 0;
				res.forEach((snapshot) => {
					const val = snapshot.val();
					console.log('val', 'index', count, val);
					if (val.likes === 3) {
						return true;
					}
					count++;
				});
			});
	}

	transaction() {
		this.database
			.ref('/posts/1')
			.orderByValue()
			.once('value')
			.then((value) => {
				console.log('transaction', value.exportVal());
				console.dir(value.exportVal());
				console.log('transaction', value.val());
			});

		// this.database
		// 	.ref('/posts')
		// 	.child('1')
		// 	.transaction((data: any) => {
		// 		if (data) {
		// 			data.likes += 1;
		// 			return data;
		// 		} else {
		// 			return {
		// 				likes: 1,
		// 			};
		// 		}
		// 	})
		// 	.then((result) => {
		// 		console.log('transaction', 'result', result);
		// 	})
		// 	.catch((e) => {
		// 		console.log('transaction', 'error', e);
		// 	});
	}
}
