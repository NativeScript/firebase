import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseAdmob } from '@demo/shared';
import { } from '@nativescript/firebase-admob';

@Component({
	selector: 'demo-firebase-admob',
	templateUrl: 'firebase-admob.component.html',
})
export class FirebaseAdmobComponent {
  
  demoShared: DemoSharedFirebaseAdmob;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseAdmob();
  }

}