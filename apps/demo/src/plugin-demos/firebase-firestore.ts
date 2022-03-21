import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseFirestore } from '@demo/shared';
import { Firestore, GeoPoint, Timestamp } from '@nativescript/firebase-firestore';
import { firebase } from '@nativescript/firebase-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseFirestore {
	constructor() {
		super();
		Promise.all([this.init(),this.invalid_field_path()]);
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
}
