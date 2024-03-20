import { runNativeScriptAngularApp, platformNativeScript } from '@nativescript/angular';
import { AppModule } from './app.module';
import { firebase } from '@nativescript-asharghi/firebase-core';
import { Application } from '@nativescript/core';

Application.on('launch', (args) => {
	console.log('launch');
});

firebase()
	.initializeApp()
	.then((done) => {
		console.log('initializeApp');
	});

const messaging = firebase().messaging();

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

runNativeScriptAngularApp({
	appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
