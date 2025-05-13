import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'firebase-analytics',
		},
		{
			name: 'firebase-app-check',
		},
		{
			name: 'firebase-app-check-debug',
		},
		{
			name: 'firebase-auth',
		},
		{
			name: 'firebase-core',
		},
		{
			name: 'firebase-crashlytics',
		},
		{
			name: 'firebase-database',
		},
		{
			name: 'firebase-dynamic-links',
		},
		{
			name: 'firebase-firestore',
		},
		{
			name: 'firebase-functions',
		},
		{
			name: 'firebase-in-app-messaging',
		},
		{
			name: 'firebase-installations',
		},
		{
			name: 'firebase-messaging',
		},
		{
			name: 'firebase-messaging-core',
		},
		{
			name: 'firebase-performance',
		},
		{
			name: 'firebase-remote-config',
		},
		{
			name: 'firebase-storage',
		},
		{
			name: 'firebase-ui',
		},
	];
}
