import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseUi } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-ui';

@Component({
	selector: 'demo-firebase-ui',
	templateUrl: 'firebase-ui.component.html',
})
export class FirebaseUiComponent {
	demoShared: DemoSharedFirebaseUi;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseUi();
	}
}
