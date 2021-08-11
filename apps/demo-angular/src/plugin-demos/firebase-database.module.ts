import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseDatabaseComponent } from './firebase-database.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseDatabaseComponent }])],
  declarations: [FirebaseDatabaseComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseDatabaseModule {}
