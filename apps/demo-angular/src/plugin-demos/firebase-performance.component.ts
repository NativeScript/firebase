import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebasePerformance } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-performance';

@Component({
	selector: 'demo-firebase-performance',
	templateUrl: 'firebase-performance.component.html',
})
export class FirebasePerformanceComponent {
	demoShared: DemoSharedFirebasePerformance;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebasePerformance();
	}
}
