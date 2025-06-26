import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseMessagingCore } from '@demo/shared';
import {} from '@nativescript/firebase-messaging';

@Component({
	selector: 'demo-firebase-messaging-core',
	templateUrl: 'firebase-messaging-core.component.html',
	standalone: false,
})
export class FirebaseMessagingCoreComponent {
	demoShared: DemoSharedFirebaseMessagingCore;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseMessagingCore();
	}
}
