import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseStorage } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-storage';

@Component({
	selector: 'demo-firebase-storage',
	templateUrl: 'firebase-storage.component.html',
})
export class FirebaseStorageComponent {
	demoShared: DemoSharedFirebaseStorage;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseStorage();
	}
}
