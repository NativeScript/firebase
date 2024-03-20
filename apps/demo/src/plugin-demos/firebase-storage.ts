import { Observable, EventData, Page, File, knownFolders, path } from '@nativescript/core';
import { DemoSharedFirebaseStorage } from '@demo/shared';
import { Metadata, Storage, TaskEvent } from '@nativescript-asharghi/firebase-storage';
import { Auth } from '@nativescript-asharghi/firebase-auth';
import { firebase } from '@nativescript-asharghi/firebase-core';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseStorage {
	storage: Storage;
	auth: Auth;
	textToUpload = '';
	textToUploadFileName = '';
	constructor() {
		super();
		this.auth = firebase().auth();
		this.storage = firebase().storage();
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
						console.log('uploadFile', 'next', 'progress %', snapshot.bytesTransferred / snapshot.totalBytes ?? 0 * 100);
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
						console.log('uploadFile', 'next', 'progress %', snapshot.bytesTransferred / snapshot.totalBytes ?? 0 * 100);
					}
					if (snapshot.error) {
						console.error('uploadFile', 'next', snapshot.error);
					}
				},
			});
	}
}
