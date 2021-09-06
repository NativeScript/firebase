import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseInAppMessagingComponent } from './firebase-in-app-messaging.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseInAppMessagingComponent }])],
  declarations: [FirebaseInAppMessagingComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseInAppMessagingModule {}
