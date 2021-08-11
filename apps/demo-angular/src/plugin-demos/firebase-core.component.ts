import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseCore } from '@demo/shared';
import { } from '@nativescript/firebase-core';

@Component({
	selector: 'demo-firebase-core',
	templateUrl: 'firebase-core.component.html',
})
export class FirebaseCoreComponent {
  
  demoShared: DemoSharedFirebaseCore;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseCore();
  }

}