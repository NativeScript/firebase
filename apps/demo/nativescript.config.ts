import { NativeScriptConfig } from '@nativescript/core';

export default {
	//id: 'org.nativescript.firebasedemo',
	id: 'io.github.triniwiz.nativescript.firebasedemo',
	appResourcesPath: '../../tools/assets/App_Resources',
	ios: {
		SPMPackages: [
			// Overrides the package @nativescript/firebase-analytics declares, swapping in the
			// build without ad identifiers. Matching on `name` is what makes the app win.
			{
				name: 'FirebaseAnalytics',
				libs: ['FirebaseAnalyticsCore'],
				repositoryURL: 'https://github.com/firebase/firebase-ios-sdk',
				version: '>=12.19.0 <13.0.0',
			},
		],
	},
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	appPath: 'src',
} as NativeScriptConfig;
