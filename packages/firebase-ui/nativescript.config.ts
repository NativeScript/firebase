import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			// FirebaseGoogleAuthUI pulls GoogleSignIn and FirebaseFacebookAuthUI pulls the Facebook
			// SDK. To leave either out, override this package in your own nativescript.config.ts
			// using the same name and a trimmed `libs` list.
			{
				name: 'FirebaseUI',
				libs: ['FirebaseAuthUI', 'FirebaseAnonymousAuthUI', 'FirebaseEmailAuthUI', 'FirebaseOAuthUI', 'FirebasePhoneAuthUI', 'FirebaseGoogleAuthUI', 'FirebaseFacebookAuthUI'],
				repositoryURL: 'https://github.com/firebase/FirebaseUI-iOS',
				version: '>=15.1.0 <16.0.0',
			},
		],
	},
} as NativeScriptConfig;
