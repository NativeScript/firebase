import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseAiComponent } from './firebase-ai.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseAiComponent }])],
	declarations: [FirebaseAiComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FirebaseAiModule {}
