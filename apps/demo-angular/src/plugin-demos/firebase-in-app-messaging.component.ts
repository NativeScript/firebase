import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseInAppMessaging } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-in-app-messaging';

@Component({
	selector: 'demo-firebase-in-app-messaging',
	templateUrl: 'firebase-in-app-messaging.component.html',
})
export class FirebaseInAppMessagingComponent {
	demoShared: DemoSharedFirebaseInAppMessaging;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseInAppMessaging();
	}
}
