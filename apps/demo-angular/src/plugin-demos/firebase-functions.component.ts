import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseFunctions } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-functions';

@Component({
	selector: 'demo-firebase-functions',
	templateUrl: 'firebase-functions.component.html',
})
export class FirebaseFunctionsComponent {
	demoShared: DemoSharedFirebaseFunctions;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseFunctions();
	}
}
