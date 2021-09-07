import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseMessaging } from '@demo/shared';
import { } from '@nativescript/firebase-messaging';

@Component({
	selector: 'demo-firebase-messaging',
	templateUrl: 'firebase-messaging.component.html',
})
export class FirebaseMessagingComponent {
  
  demoShared: DemoSharedFirebaseMessaging;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseMessaging();
  }

}