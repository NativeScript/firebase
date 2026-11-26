import { Provider } from '@angular/core';
import { Database } from '@nativescript/firebase-database';
import { firebase } from '@nativescript/firebase-core';

export function provideFirebaseDatabase(): Provider {
	return {
		provide: Database,
		useFactory: () => {
			return firebase().database();
		},
	};
}
