import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseFirestoreComponent } from './firebase-firestore.component';
import { provideFirestore } from '@nativescript/firebase-firestore/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseFirestoreComponent }])],
	declarations: [FirebaseFirestoreComponent],
	providers: [provideFirestore()],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FirebaseFirestoreModule {}
