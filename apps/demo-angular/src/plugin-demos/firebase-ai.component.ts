import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAi } from '@demo/shared';

@Component({
	selector: 'demo-firebase-ai',
	templateUrl: 'firebase-ai.component.html',
})
export class FirebaseAiComponent {
	demoShared: DemoSharedFirebaseAi;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseAi();
	}
}
