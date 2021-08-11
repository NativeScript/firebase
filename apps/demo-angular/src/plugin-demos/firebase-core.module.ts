import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseCoreComponent } from './firebase-core.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseCoreComponent }])],
  declarations: [FirebaseCoreComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseCoreModule {}
