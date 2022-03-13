import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAppCheckDebug } from '@demo/shared';
import { } from '@nativescript/firebase-app-check-debug';

@Component({
	selector: 'demo-firebase-app-check-debug',
	templateUrl: 'firebase-app-check-debug.component.html',
})
export class FirebaseAppCheckDebugComponent {
  
  demoShared: DemoSharedFirebaseAppCheckDebug;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseAppCheckDebug();
  }

}