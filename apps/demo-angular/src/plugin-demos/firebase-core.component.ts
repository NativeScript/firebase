import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseCore } from '@demo/shared';

@Component({
	selector: 'demo-firebase-core',
	templateUrl: 'firebase-core.component.html',
	standalone: false,
})
export class FirebaseCoreComponent {
	demoShared: DemoSharedFirebaseCore;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseCore();
	}
}
