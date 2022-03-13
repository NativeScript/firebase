import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseAppCheckDebugComponent } from './firebase-app-check-debug.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseAppCheckDebugComponent }])],
  declarations: [FirebaseAppCheckDebugComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseAppCheckDebugModule {}
