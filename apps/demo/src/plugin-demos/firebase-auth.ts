import { Observable, EventData, Page, fromObject } from '@nativescript/core';
import { DemoSharedFirebaseAuth } from '@demo/shared';
import { Firebase } from '@nativescript/firebase-core';
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
	constructor(){
		super();
		Firebase.auth().addAuthStateChangeListener((user)=>{
			this._setCurrentUser(user);
		});
	}
	createUser() {
		const auth: Auth = Firebase.auth();
		auth.createUserWithEmailAndPassword(this.email, this.password).then((user) => {
			this.set('user', user);
		}).catch(e =>{
			console.error('createUser', e);
		});
	}

	loginUser() {
		const auth: Auth = Firebase.auth();
		auth
			.signInWithEmailAndPassword(this.email, this.password)
			.then((value) => {
				console.log('loginUser', value);
				this._setCurrentUser(value.user);
			})
			.catch((e) => {
				console.error('loginUser', e);
			});
	}

	_setCurrentUser(user: User){
		this.set('user', user);
		this.set('uid', user?.uid);
		this.set('displayName', user?.displayName);
		this.set('displayEmail', user?.email);
		this.set('photoURL', user?.photoURL);
	}

	getCurrentUser(){
		const auth: Auth = Firebase.auth();
		this._setCurrentUser(auth?.user)
	}

	logOutUser(){
		const auth: Auth = Firebase.auth();
		auth.signOut();
		this._setCurrentUser(undefined);
	}
}
