import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'GoogleUtilities',
				libs: ['GULAppDelegateSwizzler'],
				repositoryURL: 'https://github.com/google/GoogleUtilities',
				version: '>=8.1.0 <9.0.0',
			},
		],
	},
} as NativeScriptConfig;
