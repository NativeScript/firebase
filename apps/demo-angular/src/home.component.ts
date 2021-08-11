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
		name: 'firebase-auth'
	},
	{
		name: 'firebase-core'
	},
	{
		name: 'firebase-database'
	},
	{
		name: 'firebase-firestore'
	}
];
}