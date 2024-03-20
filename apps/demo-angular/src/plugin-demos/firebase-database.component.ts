import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseDatabase } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-database';

@Component({
	selector: 'demo-firebase-database',
	templateUrl: 'firebase-database.component.html',
})
export class FirebaseDatabaseComponent {
	demoShared: DemoSharedFirebaseDatabase;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseDatabase();
	}
}
