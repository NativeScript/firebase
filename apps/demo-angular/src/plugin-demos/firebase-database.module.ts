import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseDatabaseComponent } from './firebase-database.component';
import { provideAuth } from '@nativescript/firebase-auth/angular';
import { provideFirebaseDatabase } from '@nativescript/firebase-database/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseDatabaseComponent }])],
	declarations: [FirebaseDatabaseComponent],
	providers: [provideAuth(), provideFirebaseDatabase()],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FirebaseDatabaseModule {}
