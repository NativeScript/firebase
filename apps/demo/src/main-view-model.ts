import { Observable, Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
	demos = [
		{
			name: 'firebase-admob',
		},
		{
			name: 'firebase-analytics',
		},
		{
			name: 'firebase-auth',
		},
		{
			name: 'firebase-core',
		},
		{
			name: 'firebase-database',
		},
		{
			name: 'firebase-firestore',
		},
		{
			name: 'firebase-crashlytics',
		},
		{
			name: 'firebase-app-check',
		},
		{
			name: 'firebase-remote-config',
		},
	];

	viewDemo(args) {
		const item = this.demos[args.index];
		if (item) {
			Frame.topmost().navigate({
				moduleName: `plugin-demos/${item.name}`,
			});
		}
	}
}
