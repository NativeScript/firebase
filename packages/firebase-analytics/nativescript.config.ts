import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			// To use Analytics without ad identifiers (required for Kids Category apps and to avoid
			// App Tracking Transparency), override this package in your own nativescript.config.ts
			// using the same name and `libs: ['FirebaseAnalyticsCore']`.
			{
				name: 'FirebaseAnalytics',
				libs: ['FirebaseAnalytics'],
				repositoryURL: 'https://github.com/firebase/firebase-ios-sdk',
				version: '>=12.19.0 <13.0.0',
			},
		],
	},
} as NativeScriptConfig;
