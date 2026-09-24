import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'FirebaseFunctions',
				libs: ['FirebaseFunctions'],
				repositoryURL: 'https://github.com/firebase/firebase-ios-sdk',
				version: '>=12.19.0 <13.0.0',
			},
		],
	},
} as NativeScriptConfig;
