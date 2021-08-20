import { Component, NgZone } from '@angular/core';
import { DemoSharedFirebaseCrashlytics } from '@demo/shared';
import { } from '@nativescript/firebase-crashlytics';

@Component({
	selector: 'demo-firebase-crashlytics',
	templateUrl: 'firebase-crashlytics.component.html',
})
export class FirebaseCrashlyticsComponent {
  
  demoShared: DemoSharedFirebaseCrashlytics;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFirebaseCrashlytics();
  }

}