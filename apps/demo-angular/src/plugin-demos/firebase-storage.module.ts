import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseStorageComponent } from './firebase-storage.component';
import { provideFirebaseStorage } from '@nativescript/firebase-storage/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseStorageComponent }])],
	declarations: [FirebaseStorageComponent],
	providers: [provideFirebaseStorage()],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FirebaseStorageModule {}
