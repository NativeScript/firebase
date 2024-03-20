import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAnalytics } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-analytics';

@Component({
	selector: 'demo-firebase-analytics',
	templateUrl: 'firebase-analytics.component.html',
})
export class FirebaseAnalyticsComponent {
	demoShared: DemoSharedFirebaseAnalytics;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseAnalytics();
	}
}
