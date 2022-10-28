import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseFirestore } from '@demo/shared';
import { FieldPath, FieldValue, Firestore, GeoPoint, Timestamp } from '@nativescript/firebase-firestore';
import { firebase } from '@nativescript/firebase-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseFirestore {
	constructor() {
		super();
	}

	testIt(): void {
		this.issue_139();
		this.issue_51();
		//Promise.all([this.init(), this.invalid_field_path(), this.issue_139(), this.field_path()]);
	}

	issue_51() {
		const doc = firebase().firestore().collection('users').doc('0Myq8dlF1dQtC7tX4WlA');

		const users = firebase().firestore().collection('users');

		doc.onSnapshot({
			next(snapshot) {
				console.log('onSnapshot', 'object');
			},
		});

		doc.onSnapshot(
			{ includeMetadataChanges: true },
			{
				next(snapshot) {
					console.log('onSnapshot', 'options', '&', 'object');
				},
			}
		);

		doc.onSnapshot((doc) => {
			console.log('onSnapshot', '&', 'function');
		});

		doc.onSnapshot({ includeMetadataChanges: true }, (doc) => {
			console.log('onSnapshot', 'options', '&', 'function');
		});

		users.onSnapshot({
			next(snapshot) {
				console.log('users', 'onSnapshot', 'object');
			},
		});

		users.onSnapshot(
			{ includeMetadataChanges: true },
			{
				next(snapshot) {
					console.log('users', 'onSnapshot', 'options', '&', 'object');
				},
			}
		);

		users.onSnapshot((doc) => {
			console.log('users', 'onSnapshot', '&', 'function');
		});

		users.onSnapshot({ includeMetadataChanges: true }, (doc) => {
			console.log('users', 'onSnapshot', 'options', '&', 'function');
		});
	}

	async init() {
		firebase()
			.firestore()
			.collection('users')
			.add({
				first: 'Ada',
				last: 'Lovelace',
				born: 1815,
			})
			.then((docRef) => {
				console.log('Document written with ID: ', docRef.id);
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
			});

		const geo = new GeoPoint(10, -10);
		firebase()
			.firestore()
			.collection('geo')
			.add({
				thing: 'it',
				geo,
			})
			.then((docRef) => {
				console.log('Geo Document written with ID: ', docRef.id);
			})
			.catch((error) => {
				console.error('Error adding geo document: ', error);
			});

		firebase()
			.firestore()
			.collection('items')
			.get()
			.then((items) => {
				console.log(items.docs[0].data());
			});

		const exampleDoc = firebase().firestore().collection('things').doc('exampleDoc');
		const exampleDoc2 = firebase().firestore().collection('things').doc('exampleDoc2');

		firebase()
			.firestore()
			.batch()
			.set(exampleDoc, {
				message: 'Hello doc',
			})
			.set(exampleDoc2, {
				date: new Date(),
			})
			.commit()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	}

	async invalid_field_path() {
		try {
			await firebase()
				.firestore()
				.collection('products')
				.doc('Oq4eU5p4Lj7Eh6dfjbBX')
				.set({
					name: 'Product 1',
					ts: Timestamp.fromDate(new Date()),
				});
			await firebase()
				.firestore()
				.collection('products')
				.doc('Oq4eU5p4Lj7Eh6dfjbBX')
				.update({
					name: 'Product 2',
					ts: Timestamp.fromDate(new Date()),
				});
		} catch (error) {
			console.log('error', error);
		}
	}

	async issue_139() {
		const data = {
			a: {
				b: FieldValue.serverTimestamp(),
			},
		};

		data[new FieldPath(['test', '123']) as any] = 'thing';
		firebase()
			.firestore()
			.doc('test/1234')
			.update(data)
			.then((done) => {
				console.log('done', 'issue 139');
			})
			.catch((e) => {
				console.error('done', 'issue 139', e);
			});
	}

	async field_path() {
		const fp = new FieldPath(['test', '123']);
	}
}
