import { Provider } from '@angular/core';
import { UI } from '@nativescript/firebase-ui';
import { firebase } from '@nativescript/firebase-core';

export { UI };

/**
 * Provides the FirebaseUI service.
 * This service is used to initialize and manage FirebaseUI instances.
 *
 * @returns {Provider} A provider for the FirebaseUI service.
 */
export function provideFirebaseUI(): Provider {
	return {
		provide: UI,
		useFactory: () => {
			return firebase().ui();
		},
	};
}
