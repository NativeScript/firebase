import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebasePerformanceComponent } from './firebase-performance.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebasePerformanceComponent }])],
  declarations: [FirebasePerformanceComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FirebasePerformanceModule {}
