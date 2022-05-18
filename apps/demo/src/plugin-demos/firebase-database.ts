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
