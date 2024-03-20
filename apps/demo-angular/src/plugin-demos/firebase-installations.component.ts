import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseInstallations } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-installations';

@Component({
	selector: 'demo-firebase-installations',
	templateUrl: 'firebase-installations.component.html',
})
export class FirebaseInstallationsComponent {
	demoShared: DemoSharedFirebaseInstallations;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseInstallations();
	}
}
