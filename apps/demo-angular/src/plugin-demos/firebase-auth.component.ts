import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAuth } from '@demo/shared';
import { Auth, GoogleAuthProvider, OAuthProvider, PhoneAuthProvider, User } from '@nativescript/firebase-auth';
import { GoogleSignin } from '@nativescript/google-signin';

let didInit = false;
@Component({
	selector: 'demo-firebase-auth',
	templateUrl: 'firebase-auth.component.html',
	standalone: false,
})
export class FirebaseAuthComponent {
	demoShared: DemoSharedFirebaseAuth;
	uid: string;
	displayName: string;
	displayEmail: string;
	photoURL: string;

	email: string;
	password: string;
	user: User;
	phoneNumber: string;
	code: string;
	verificationId: string;

	constructor(private auth: Auth) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseAuth();

		this.auth.addAuthStateChangeListener((user) => {
			this._setCurrentUser(user);
		});
	}

	async linkGithub() {
		if (!this.user) {
			return;
		}
		const provider = new OAuthProvider('github.com');
		provider.addCustomParameter('allow_signup', 'false');
		provider.setScopes(['user:email']);

		this.auth
			.getProviderCredential(provider)
			.then((cred) => {
				this.auth.currentUser.linkWithCredential(cred);
				console.log('cred', cred);
			})
			.catch((e) => {
				console.log('Failed to link Github', e);
			});
	}

	async linkYahoo() {
		if (!this.user) {
			return;
		}
		const provider = new OAuthProvider('yahoo.com');
		provider.addCustomParameter('prompt', 'login');
		provider.addCustomParameter('language', 'en');

		this.auth
			.getProviderCredential(provider)
			.then((cred) => {
				this.auth.currentUser.linkWithCredential(cred);
			})
			.catch((e) => {
				console.log('Failed to link Yahoo', e);
			});
	}

	async linkGoogle() {
		try {
			if (!this.user) {
				return;
			}
			if (!didInit) {
				await GoogleSignin.configure();
				didInit = true;
			}
			const isAvailable = await GoogleSignin.playServicesAvailable();
			if (!isAvailable) {
				return;
			}
			const user = await GoogleSignin.signIn();
			const cred = GoogleAuthProvider.credential(user.idToken, user.accessToken);
			const linked = await this.user.linkWithCredential(cred);
			console.log(linked);
		} catch (e) {
			console.log('linkGoogle', e.native);
		}
	}

	async linkPhone() {
		if (!this.auth.currentUser) {
			console.info('Login to link phone');
			return;
		}
		try {
			const cred = PhoneAuthProvider.provider().credential(this.verificationId, this.code);
			const linkedCred = await this.auth.currentUser.linkWithCredential(cred);
			console.log('verificationId', linkedCred);
		} catch (e) {
			console.log('linkPhone error:', e);
		}
	}

	async getVerificationCode() {
		try {
			this.verificationId = await PhoneAuthProvider.provider().verifyPhoneNumber(this.phoneNumber);
		} catch (e) {
			console.log('getVerificationCode error:', e);
		}
	}

	async loginWithPhone() {
		try {
			const cred = PhoneAuthProvider.provider().credential(this.verificationId, this.code);
			const value = await this.auth.signInWithCredential(cred);
			console.log('verificationId', this.verificationId);
			console.log('loginUser', value);
			this._setCurrentUser(value.user);
		} catch (e) {
			console.log('linkPhone error:', e);
		}
	}

	createUser() {
		this.auth
			.createUserWithEmailAndPassword(this.email, this.password)
			.then((user) => {
				this.user = user.user;
				user.user.sendEmailVerification();
			})
			.catch((e) => {
				console.error('createUser', e);
			});
	}

	loginUser() {
		this.auth
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
		this.user = user;
		this.uid = user?.uid;
		this.displayName = user?.displayName;
		this.displayEmail = user?.email;
		this.photoURL = user?.photoURL;
	}

	getCurrentUser() {
		const auth = this.auth;
		this._setCurrentUser(auth?.currentUser);
	}

	logOutUser() {
		this.auth.signOut();
		this._setCurrentUser(undefined);
	}

	loginMs() {
		// https://firebase.google.com/docs/auth/android/microsoft-oauth#handle_the_sign-in_flow_with_the_firebase_sdk

		const provider = new OAuthProvider('microsoft.com');
		provider.addCustomParameter('prompt', 'consent');
		provider.addCustomParameter('login_hint', 'user@firstadd.onmicrosoft.com');
		provider.addCustomParameter('tenant', 'TENANT_ID');

		provider.setScopes(['mail.read', 'calendars.read']);

		this.auth
			.signInWithProvider(provider)
			.then((credentials) => {})
			.catch((err) => {});
	}
}
