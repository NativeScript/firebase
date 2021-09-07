import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseDynamicLinksComponent } from './firebase-dynamic-links.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseDynamicLinksComponent }])],
  declarations: [FirebaseDynamicLinksComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebaseDynamicLinksModule {}
