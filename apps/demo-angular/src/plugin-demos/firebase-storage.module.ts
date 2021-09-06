import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseStorageComponent } from './firebase-storage.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseStorageComponent }])],
  declarations: [FirebaseStorageComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseStorageModule {}
