import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'firebase-admob'
	},
	{
		name: 'firebase-analytics'
	},
	{
		name: 'firebase-app-check'
	},
	{
		name: 'firebase-auth'
	},
	{
		name: 'firebase-core'
	},
	{
		name: 'firebase-crashlytics'
	},
	{
		name: 'firebase-database'
	},
	{
		name: 'firebase-firestore'
	},
	{
		name: 'firebase-in-app-messaging'
	},
	{
		name: 'firebase-remote-config'
	},
	{
		name: 'firebase-storage'
	}
];
}