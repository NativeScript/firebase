import { Provider } from '@angular/core';
import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { Auth } from '@nativescript/firebase-auth';

type EmulatorConfig = {
	host: string;
	port: number;
};

type AuthProviderConfig = {
	app?: FirebaseApp;
	emulator?: EmulatorConfig;
};

/**
 * Provides the Firebase Authentication service.
 * This function creates a provider for the Auth service, allowing you to use Firebase Authentication in your Angular application.
 *
 * @param config - Configuration options for the Auth provider.
 *   - app: The Firebase app instance to use. If not provided, the default app will be used.
 *   - emulator: Configuration for the Firebase Authentication emulator.
 *     - host: The host of the emulator server
 *     - port: The port number of the emulator server
 *
 * @returns An array of providers for the Auth service.
 */
export function provideAuth(config: AuthProviderConfig = {}): Provider[] {
	return [
		{
			provide: Auth,
			useFactory: () => {
				const auth = firebase().auth(config.app);

				if (config.emulator) {
					if (!config.emulator.host) {
						throw new Error('Firebase Auth emulator host must be provided');
					}
					if (!config.emulator.port || config.emulator.port < 0) {
						throw new Error('Firebase Auth emulator port must be a valid positive number');
					}
					auth.useEmulator(config.emulator.host, config.emulator.port);
				}

				return auth;
			},
		},
	];
}
