import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAuth } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-auth';

@Component({
	selector: 'demo-firebase-auth',
	templateUrl: 'firebase-auth.component.html',
})
export class FirebaseAuthComponent {
	demoShared: DemoSharedFirebaseAuth;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseAuth();
	}
}
