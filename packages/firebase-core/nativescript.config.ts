import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'FirebaseCore',
				libs: ['FirebaseCore'],
				repositoryURL: 'https://github.com/firebase/firebase-ios-sdk',
				version: '>=12.19.0 <13.0.0',
			},
		],
	},
} as NativeScriptConfig;
