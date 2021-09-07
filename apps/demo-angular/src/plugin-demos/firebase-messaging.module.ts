import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseMessagingComponent } from './firebase-messaging.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseMessagingComponent }])],
  declarations: [FirebaseMessagingComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseMessagingModule {}
