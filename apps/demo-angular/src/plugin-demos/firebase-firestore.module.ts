import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseFirestoreComponent } from './firebase-firestore.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseFirestoreComponent }])],
  declarations: [FirebaseFirestoreComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseFirestoreModule {}
