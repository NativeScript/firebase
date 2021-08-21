import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAppCheck } from '@demo/shared';
import { } from '@nativescript/firebase-app-check';

@Component({
	selector: 'demo-firebase-app-check',
	templateUrl: 'firebase-app-check.component.html',
})
export class FirebaseAppCheckComponent {
  
  demoShared: DemoSharedFirebaseAppCheck;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseAppCheck();
  }

}