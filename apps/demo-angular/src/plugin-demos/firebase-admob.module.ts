import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseAdmobComponent } from './firebase-admob.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseAdmobComponent }])],
  declarations: [FirebaseAdmobComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseAdmobModule {}
