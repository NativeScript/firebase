import { Observable, EventData, Page, fromObject } from '@nativescript/core';
import { DemoSharedFirebaseAuth } from '@demo/shared';
import { firebase, Firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';
import { Auth, User, OAuthProvider } from '@nativescript/firebase-auth';
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
		this._setCurrentUser(auth?.currentUser);
	}

	logOutUser() {
		firebase().auth().signOut();
		this._setCurrentUser(undefined);
	}


	loginMs() {
		// https://firebase.google.com/docs/auth/android/microsoft-oauth#handle_the_sign-in_flow_with_the_firebase_sdk

		const provider = new OAuthProvider('microsoft.com');
		provider.addCustomParameter("prompt", "consent");
		provider.addCustomParameter("login_hint", "user@firstadd.onmicrosoft.com");
		provider.addCustomParameter("tenant", "TENANT_ID");

		provider.setScopes(["mail.read", "calendars.read"]);

		firebase()
			.auth()
			.signInWithProvider(provider)
			.then(credentials => {

			})
			.catch(err => {

			});
	}
}
