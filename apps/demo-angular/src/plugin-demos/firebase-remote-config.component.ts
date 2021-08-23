import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseRemoteConfig } from '@demo/shared';
import { } from '@nativescript/firebase-remote-config';

@Component({
	selector: 'demo-firebase-remote-config',
	templateUrl: 'firebase-remote-config.component.html',
})
export class FirebaseRemoteConfigComponent {
  
  demoShared: DemoSharedFirebaseRemoteConfig;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseRemoteConfig();
  }

}