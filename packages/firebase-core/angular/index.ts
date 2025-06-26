import { firebase, Firebase, FirebaseApp } from '@nativescript/firebase-core';
import { EnvironmentProviders, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';

// Type for the parameters of Firebase.initializeApp
// This is used to ensure that the parameters passed to the initializer match the expected type.
export type FirebaseInitializerParameters = Parameters<Firebase['initializeApp']>;

/**
 * Provides the Firebase Core initializer.
 * This function creates a provider for the Firebase Core initialization, allowing you to use Firebase services in your Angular application.
 *
 * @param options - The arguments to pass to the Firebase.initializeApp method.
 * @param configOrName - The API key for your Firebase project.
 * @returns An array of providers for the Firebase Core initialization.
 */
export function provideFirebaseCoreInitializer(...args: FirebaseInitializerParameters): EnvironmentProviders[] {
	let firebaseApp: FirebaseApp;
	return [
		provideAppInitializer(async () => (firebaseApp = await firebase().initializeApp(...args))),
		makeEnvironmentProviders([
			{
				provide: FirebaseApp,
				useValue: firebaseApp,
			},
		]),
	];
}
