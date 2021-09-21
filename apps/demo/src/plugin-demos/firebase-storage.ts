import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFirebaseStorage } from '@demo/shared';
import { Metadata, Storage, TaskEvent } from '@nativescript/firebase-storage';
import { Auth } from '@nativescript/firebase-auth';
import { firebase } from '@nativescript/firebase-core';
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
					console.log('uploadText', 'next', 'progress %', snapshot.bytesTransferred / snapshot.totalBytes ?? 0 * 100);
					if (snapshot.error) {
						console.error('uploadText', 'next', snapshot.error);
					}
				},
			});
	}
}
