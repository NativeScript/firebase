import { Provider } from '@angular/core';
import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { Firestore } from '@nativescript/firebase-firestore';

export type FirestoreProviderConfig = {
	app?: FirebaseApp;
	emulator?: {
		emulatorHost?: string;
		emulatorPort?: number;
	};
};

/**
 * Provides the Firebase Firestore service.
 * This function creates a provider for the Firestore service, allowing you to use Firebase Firestore in your Angular application.
 *
 * @param config - Configuration options for the Firestore provider.
 *   - app: The Firebase app instance to use. If not provided, the default app will be used.
 *   - emulator: Configuration for the Firestore emulator.
 *     - emulatorHost: The host of the emulator server
 *     - emulatorPort: The port number of the emulator server
 *
 * @returns An array of providers for the Firestore service.
 */
export function provideFirestore(config: FirestoreProviderConfig = {}): Provider[] {
	return [
		{
			provide: Firestore,
			useFactory: () => {
				const firestore = firebase().firestore(config.app);
				if (config.emulator && config.emulator.emulatorHost && config.emulator.emulatorPort) {
					if (!config.emulator.emulatorHost) {
						throw new Error('Firestore emulator host must be provided');
					}
					if (!config.emulator.emulatorPort || config.emulator.emulatorPort < 0) {
						throw new Error('Firestore emulator port must be a valid positive number');
					}
					firestore.useEmulator(config.emulator.emulatorHost, config.emulator.emulatorPort);
				}
				return firestore;
			},
		},
	];
}
