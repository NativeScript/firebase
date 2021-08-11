import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'firebase-admob', loadChildren: () => import('./plugin-demos/firebase-admob.module').then(m => m.FirebaseAdmobModule) },
	{ path: 'firebase-analytics', loadChildren: () => import('./plugin-demos/firebase-analytics.module').then(m => m.FirebaseAnalyticsModule) },
	{ path: 'firebase-auth', loadChildren: () => import('./plugin-demos/firebase-auth.module').then(m => m.FirebaseAuthModule) },
	{ path: 'firebase-core', loadChildren: () => import('./plugin-demos/firebase-core.module').then(m => m.FirebaseCoreModule) },
	{ path: 'firebase-database', loadChildren: () => import('./plugin-demos/firebase-database.module').then(m => m.FirebaseDatabaseModule) },
	{ path: 'firebase-firestore', loadChildren: () => import('./plugin-demos/firebase-firestore.module').then(m => m.FirebaseFirestoreModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
