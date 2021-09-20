import {Application} from '@nativescript/core';
import {Firebase, FirebaseOptions} from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';
import '@nativescript/firebase-admob';
import '@nativescript/firebase-dynamic-links';
import '@nativescript/firebase-firestore';

import {Messaging} from '@nativescript/firebase-messaging';
import {Admob} from '@nativescript/firebase-admob';
import {DynamicLinks} from '@nativescript/firebase-dynamic-links';

Firebase.initializeApp(new FirebaseOptions());
Admob.init();

const dynamicLinks = Firebase.dynamicLinks() as DynamicLinks;

dynamicLinks.onLink((link) => {
  console.log('onLink', link);
});

const messaging = Firebase.messaging() as Messaging;
messaging.onMessage((message) => {
  console.log('Firebase onMessage', message);
});

messaging.onNotificationTap((message) => {
  console.log('Firebase onNotificationTap', message);
});

messaging.onToken((token) => {
  console.log('Firebase onToken', token);
});

messaging
  .requestPermission()
  .then(() => {
    console.log('requestPermission', 'done');
    messaging.registerDeviceForRemoteMessages().catch((e) => {
      console.error('registerDeviceForRemoteMessages', e);
    });
  })
  .catch((e) => {
    console.error('requestPermission', e);
  });

Application.run({moduleName: 'app-root'});
