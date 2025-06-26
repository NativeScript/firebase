import { Provider } from '@angular/core';
import { Storage } from '@nativescript/firebase-storage';
import { firebase } from '@nativescript/firebase-core';

export function provideFirebaseStorage(): Provider {
	return {
		provide: Storage,
		useFactory: () => {
			return firebase().storage();
		},
	};
	// This function is a placeholder for any future logic needed to provide Firebase Storage functionality.
	// Currently, it does not perform any operations.
}
