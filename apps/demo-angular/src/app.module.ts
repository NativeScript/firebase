import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { provideFirebaseCoreInitializer } from '@nativescript/firebase-core/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { AppService } from './app.service';

@NgModule({
	schemas: [NO_ERRORS_SCHEMA],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [NativeScriptModule, AppRoutingModule, HomeComponent],
	providers: [AppService, provideFirebaseCoreInitializer()],
})
export class AppModule {}
