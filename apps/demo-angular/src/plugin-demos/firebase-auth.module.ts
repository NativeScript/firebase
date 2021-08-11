import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseAuthComponent } from './firebase-auth.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseAuthComponent }])],
  declarations: [FirebaseAuthComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseAuthModule {}
