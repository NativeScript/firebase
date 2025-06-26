import { Component, inject } from '@angular/core';
import { DemoSharedFirebaseStorage } from '@demo/shared';
import { path, knownFolders, File } from '@nativescript/core';
import { Auth } from '@nativescript/firebase-auth';
import { Storage } from '@nativescript/firebase-storage';
import { Metadata, TaskEvent } from '@nativescript/firebase-storage';

@Component({
	selector: 'demo-firebase-storage',
	templateUrl: 'firebase-storage.component.html',
	standalone: false,
})
export class FirebaseStorageComponent {
	demoShared: DemoSharedFirebaseStorage;
	storage = inject(Storage);
	auth = inject(Auth);
	textToUpload = '';
	textToUploadFileName = '';

	ngOnInit() {
		this.demoShared = new DemoSharedFirebaseStorage();
	}

	uploadText() {
		if (!this.textToUpload?.trim?.().length) {
			return;
		}
		const metadata = new Metadata();
		metadata.contentType = 'text/plain';
		this.storage
			.ref()
			.child(`text_files/${this.textToUploadFileName ? this.textToUploadFileName : Date.now()}.txt`)
			.putString(this.textToUpload, null, metadata)
			.on(TaskEvent.STATE_CHANGED, {
				complete() {
					console.info('uploadText', 'completed');
				},
				error(err) {
					console.error('uploadText', 'error', err);
				},
				next(snapshot) {
					console.info('uploadText', 'next', 'state', snapshot.state, snapshot.error);
					if (snapshot.totalBytes) {
						console.log('uploadFile', 'next', 'progress %', (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					}
					if (snapshot.error) {
						console.error('uploadText', 'next', snapshot.error);
					}
				},
			});
	}

	uploadFile() {
		const file = File.fromPath(path.join(knownFolders.currentApp().path, 'images', 'deadpool.jpeg'));
		const metadata = new Metadata();
		metadata.contentType = 'image/jpg';
		this.storage
			.ref()
			.child('images/deadpool.jpeg')
			.putFile(file.path, metadata)
			.on(TaskEvent.STATE_CHANGED, {
				complete() {
					console.info('uploadFile', 'completed');
				},
				error(err) {
					console.error('uploadFile', 'error', err);
				},
				next(snapshot) {
					console.info('uploadFile', 'next', 'state', snapshot.state);
					if (snapshot.totalBytes) {
						console.log('uploadFile', 'next', 'progress %', (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					}
					if (snapshot.error) {
						console.error('uploadFile', 'next', snapshot.error);
					}
				},
			});
	}
}
