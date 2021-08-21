import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseAppCheckComponent } from './firebase-app-check.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseAppCheckComponent }])],
  declarations: [FirebaseAppCheckComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseAppCheckModule {}
