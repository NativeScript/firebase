import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseDynamicLinks } from '@demo/shared';
import {} from '@nativescript-asharghi/firebase-dynamic-links';

@Component({
	selector: 'demo-firebase-dynamic-links',
	templateUrl: 'firebase-dynamic-links.component.html',
})
export class FirebaseDynamicLinksComponent {
	demoShared: DemoSharedFirebaseDynamicLinks;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseDynamicLinks();
	}
}
