import { Observable, EventData, Page, fromObject } from '@nativescript/core';
import { DemoSharedFirebaseAuth } from '@demo/shared';
import { firebase, Firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';
import { Auth, User } from '@nativescript/firebase-auth';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseAuth {
	email: string;
	password: string;
	user: User;
	constructor() {
		super();
		firebase()
			.auth()
			.addAuthStateChangeListener((user) => {
				this._setCurrentUser(user);
			});
	}
	createUser() {
		firebase()
			.auth()
			.createUserWithEmailAndPassword(this.email, this.password)
			.then((user) => {
				this.set('user', user);
			})
			.catch((e) => {
				console.error('createUser', e);
			});
	}

	loginUser() {
		firebase()
			.auth()
			.signInWithEmailAndPassword(this.email, this.password)
			.then((value) => {
				console.log('loginUser', value);
				this._setCurrentUser(value.user);
			})
			.catch((e) => {
				console.error('loginUser', e);
			});
	}

	_setCurrentUser(user: User) {
		this.set('user', user);
		this.set('uid', user?.uid);
		this.set('displayName', user?.displayName);
		this.set('displayEmail', user?.email);
		this.set('photoURL', user?.photoURL);
	}

	getCurrentUser() {
		const auth = firebase().auth();
		this._setCurrentUser(auth?.user);
	}

	logOutUser() {
		firebase().auth().signOut();
		this._setCurrentUser(undefined);
	}
}
