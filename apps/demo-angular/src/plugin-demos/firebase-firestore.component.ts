import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseFirestore } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-firestore';

@Component({
	selector: 'demo-firebase-firestore',
	templateUrl: 'firebase-firestore.component.html',
})
export class FirebaseFirestoreComponent {
	demoShared: DemoSharedFirebaseFirestore;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseFirestore();
	}
}
