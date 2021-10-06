import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseAnalyticsComponent } from './firebase-analytics.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseAnalyticsComponent }])],
  declarations: [FirebaseAnalyticsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseAnalyticsModule {}
