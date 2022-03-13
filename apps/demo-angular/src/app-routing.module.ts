import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'firebase-admob', loadChildren: () => import('./plugin-demos/firebase-admob.module').then(m => m.FirebaseAdmobModule) },
	{ path: 'firebase-analytics', loadChildren: () => import('./plugin-demos/firebase-analytics.module').then(m => m.FirebaseAnalyticsModule) },
	{ path: 'firebase-app-check', loadChildren: () => import('./plugin-demos/firebase-app-check.module').then(m => m.FirebaseAppCheckModule) },
	{ path: 'firebase-app-check-debug', loadChildren: () => import('./plugin-demos/firebase-app-check-debug.module').then(m => m.FirebaseAppCheckDebugModule) },
	{ path: 'firebase-auth', loadChildren: () => import('./plugin-demos/firebase-auth.module').then(m => m.FirebaseAuthModule) },
	{ path: 'firebase-core', loadChildren: () => import('./plugin-demos/firebase-core.module').then(m => m.FirebaseCoreModule) },
	{ path: 'firebase-crashlytics', loadChildren: () => import('./plugin-demos/firebase-crashlytics.module').then(m => m.FirebaseCrashlyticsModule) },
	{ path: 'firebase-database', loadChildren: () => import('./plugin-demos/firebase-database.module').then(m => m.FirebaseDatabaseModule) },
	{ path: 'firebase-dynamic-links', loadChildren: () => import('./plugin-demos/firebase-dynamic-links.module').then(m => m.FirebaseDynamicLinksModule) },
	{ path: 'firebase-firestore', loadChildren: () => import('./plugin-demos/firebase-firestore.module').then(m => m.FirebaseFirestoreModule) },
	{ path: 'firebase-functions', loadChildren: () => import('./plugin-demos/firebase-functions.module').then(m => m.FirebaseFunctionsModule) },
	{ path: 'firebase-in-app-messaging', loadChildren: () => import('./plugin-demos/firebase-in-app-messaging.module').then(m => m.FirebaseInAppMessagingModule) },
	{ path: 'firebase-installations', loadChildren: () => import('./plugin-demos/firebase-installations.module').then(m => m.FirebaseInstallationsModule) },
	{ path: 'firebase-messaging', loadChildren: () => import('./plugin-demos/firebase-messaging.module').then(m => m.FirebaseMessagingModule) },
	{ path: 'firebase-performance', loadChildren: () => import('./plugin-demos/firebase-performance.module').then(m => m.FirebasePerformanceModule) },
	{ path: 'firebase-remote-config', loadChildren: () => import('./plugin-demos/firebase-remote-config.module').then(m => m.FirebaseRemoteConfigModule) },
	{ path: 'firebase-storage', loadChildren: () => import('./plugin-demos/firebase-storage.module').then(m => m.FirebaseStorageModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
