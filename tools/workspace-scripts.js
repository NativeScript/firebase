const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript': {
			// @nativescript/firebase-core
			'firebase-core': {
				build: {
					script: 'nx run firebase-core:build.all',
					description: '@nativescript/firebase-core: Build',
				},
			},
			// @nativescript/firebase-auth
			'firebase-auth': {
				build: {
					script: 'nx run firebase-auth:build.all',
					description: '@nativescript/firebase-auth: Build',
				},
			},
			// @nativescript/firebase-database
			'firebase-database': {
				build: {
					script: 'nx run firebase-database:build.all',
					description: '@nativescript/firebase-database: Build',
				},
			},
			// @nativescript/firebase-firestore
			'firebase-firestore': {
				build: {
					script: 'nx run firebase-firestore:build.all',
					description: '@nativescript/firebase-firestore: Build',
				},
			},
			// @nativescript/firebase-analytics
			'firebase-analytics': {
				build: {
					script: 'nx run firebase-analytics:build.all',
					description: '@nativescript/firebase-analytics: Build',
				},
			},
			// @nativescript/firebase-admob
			'firebase-admob': {
				build: {
					script: 'nx run firebase-admob:build.all',
					description: '@nativescript/firebase-admob: Build',
				},
			},
			// @nativescript/firebase-crashlytics
			'firebase-crashlytics': {
				build: {
					script: 'nx run firebase-crashlytics:build.all',
					description: '@nativescript/firebase-crashlytics: Build',
				},
			},
			// @nativescript/firebase-app-check
			'firebase-app-check': {
				build: {
					script: 'nx run firebase-app-check:build.all',
					description: '@nativescript/firebase-app-check: Build',
				},
			},
			// @nativescript/firebase-remote-config
			'firebase-remote-config': {
				build: {
					script: 'nx run firebase-remote-config:build.all',
					description: '@nativescript/firebase-remote-config: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'firebase-core': {
				script: 'nx run firebase-core:focus',
				description: 'Focus on @nativescript/firebase-core',
			},
			'firebase-auth': {
				script: 'nx run firebase-auth:focus',
				description: 'Focus on @nativescript/firebase-auth',
			},
			'firebase-database': {
				script: 'nx run firebase-database:focus',
				description: 'Focus on @nativescript/firebase-database',
			},
			'firebase-firestore': {
				script: 'nx run firebase-firestore:focus',
				description: 'Focus on @nativescript/firebase-firestore',
			},
			'firebase-analytics': {
				script: 'nx run firebase-analytics:focus',
				description: 'Focus on @nativescript/firebase-analytics',
			},
			'firebase-admob': {
				script: 'nx run firebase-admob:focus',
				description: 'Focus on @nativescript/firebase-admob',
			},
			'firebase-crashlytics': {
				script: 'nx run firebase-crashlytics:focus',
				description: 'Focus on @nativescript/firebase-crashlytics',
			},
			'firebase-app-check': {
				script: 'nx run firebase-app-check:focus',
				description: 'Focus on @nativescript/firebase-app-check',
			},
			'firebase-remote-config': {
				script: 'nx run firebase-remote-config:focus',
				description: 'Focus on @nativescript/firebase-remote-config',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			}
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
