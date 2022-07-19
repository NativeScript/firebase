import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseMessagingCoreComponent } from './firebase-messaging-core.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseMessagingCoreComponent }])],
	declarations: [FirebaseMessagingCoreComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FirebaseMessagingCoreModule {}
