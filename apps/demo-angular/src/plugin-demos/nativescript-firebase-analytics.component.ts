import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFirebaseAnalytics } from '@demo/shared';
import { } from '@nativescript/firebase-analytics';

@Component({
	selector: 'demo-firebase-analytics',
	templateUrl: 'firebase-analytics.component.html',
})
export class NativescriptFirebaseAnalyticsComponent {
  
  demoShared: DemoSharedNativescriptFirebaseAnalytics;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptFirebaseAnalytics();
  }

}