import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FirebaseUiComponent } from './firebase-ui.component';
import { provideFirebaseUI } from '@nativescript/firebase-ui/angular';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FirebaseUiComponent }])],
	declarations: [FirebaseUiComponent],
	providers: [provideFirebaseUI()],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FirebaseUiModule {}
