import { Application } from '@nativescript/core';
import { Firebase, FirebaseOptions } from '@nativescript/firebase-core';
Firebase.initializeApp(new FirebaseOptions());
Application.run({ moduleName: 'app-root' });
