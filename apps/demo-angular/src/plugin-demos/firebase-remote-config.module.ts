import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseRemoteConfigComponent } from './firebase-remote-config.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseRemoteConfigComponent }])],
  declarations: [FirebaseRemoteConfigComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseRemoteConfigModule {}
