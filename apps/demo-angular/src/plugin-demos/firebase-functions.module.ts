import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseFunctionsComponent } from './firebase-functions.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseFunctionsComponent }])],
  declarations: [FirebaseFunctionsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseFunctionsModule {}
