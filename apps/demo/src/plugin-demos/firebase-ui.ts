import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseUi } from '@demo/shared';
import { firebase } from '@nativescript/firebase-core';
import { AppleProvider, EmailProvider, GithubProvider, GoogleProvider, MicrosoftProvider, TwitterProvider, YahooProvider } from '@nativescript/firebase-ui';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseUi {
	show() {
		firebase()
			.ui()
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
		firebase()
			.ui()
			.signOut()
			.then(() => {
				console.log('signOut complete');
			})
			.catch((e) => {
				console.error('signOut error:', e);
			});
	}
}
