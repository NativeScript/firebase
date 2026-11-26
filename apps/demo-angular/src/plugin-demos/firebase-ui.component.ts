import { Component, inject } from '@angular/core';
import { UI } from '@nativescript/firebase-ui';
import { AppleProvider, EmailProvider, GithubProvider, GoogleProvider, MicrosoftProvider, TwitterProvider, YahooProvider } from '@nativescript/firebase-ui';

@Component({
	selector: 'demo-firebase-ui',
	templateUrl: 'firebase-ui.component.html',
	standalone: false,
})
export class FirebaseUiComponent {
	private firebaseUI = inject(UI);

	show() {
		this.firebaseUI
			.show({
				providers: [new AppleProvider(), new GoogleProvider(), new TwitterProvider(), new GithubProvider(), new EmailProvider(), new MicrosoftProvider(), new YahooProvider()],
			})
			.then((result) => {
				console.log(result.user);
				console.log(result.hasCredentialForLinking);
				console.log(result.providerType);
			})
			.catch((error) => {
				console.error('show error:', error);
			});
	}

	signOut() {
		this.firebaseUI
			.signOut()
			.then(() => {
				console.log('signOut complete');
			})
			.catch((e) => {
				console.error('signOut error:', e);
			});
	}
}
