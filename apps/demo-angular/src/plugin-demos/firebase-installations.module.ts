import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseInstallationsComponent } from './firebase-installations.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseInstallationsComponent }])],
  declarations: [FirebaseInstallationsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseInstallationsModule {}
