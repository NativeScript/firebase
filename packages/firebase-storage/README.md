# @nativescript/firebase-storage

```cli
npm install @nativescript/firebase-storage
```

## What does it do

Storage is built for app developers who need to store and serve user-generated content, such as photos or videos.

[![image](https://img.youtube.com/vi/_tyjqozrEPY/hqdefault.jpg)](https://www.youtube.com/watch?v=_tyjqozrEPY)

Your data is stored in a Google Cloud Storage bucket, an exabyte scale object storage solution with high availability and global redundancy. Storage lets you securely upload these files directly from mobile devices, handling spotty networks with ease.

## Usage

Before using Storage, you must first have ensured you have initialized Firebase.

To create a new Storage instance, call the instance getter on FirebaseStorage:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-storage'; // only needs to be imported 1x

const storage = firebase().storage();
```

By default, this allows you to interact with Firebase Storage using the default Firebase App used whilst installing Firebase on your platform. If however you'd like to use a secondary Firebase App, pass the secondary app instance when calling the auth method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-storage';

// create secondary app instance
const config = new FirebaseOptions();
const secondaryApp = firebase.initializeApp(config, 'SECONDARY_APP');

const storage = firebase().storage(secondaryApp);
```

Your files are stored in a Google Cloud Storage bucket. The files in this bucket are presented in a hierarchical structure, just like a file system. By creating a reference to a file, your app gains access to it. These references can then be used to upload or download data, get or update metadata or delete the file. A reference can either point to a specific file or to a higher level node in the hierarchy.

The Storage module also provides support for multiple buckets.

You can view your buckets on the [Firebase Console](https://console.firebase.google.com/project/_/storage/files).

### Creating a reference

A reference is a local pointer to some file on your bucket. This can either be a file which already exists, or one which does not exist yet. To create a reference, use the ref method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-storage';

const reference = firebase().storage().ref('black-t-shirt-sm.png');
```

You can also specify a file located in a deeply nested directory:

```ts
import { firebase } from '@nativescript/firebase-core';
const reference = firebase().storage().ref('/images/t-shirts/black-t-shirt-sm.png');
```

### Upload a file

To upload a file directly from the users device, the putFile method on a reference accepts a string path to the file on the users device. For example, you may be creating an app which uploads users photos.

```ts
import { firebase } from '@nativescript/firebase-core';
import { knownfolders } from '@nativescript/core';
const reference = firebase().storage().ref('black-t-shirt-sm.png');

const pathToFile = knownFolders.documents().getFile('black-t-shirt-sm.png');
// uploads file
await reference.putFile(pathToFile.path);
```

### Tasks

The putFile method returns a Task, which if required, allows you to hook into information such as the current upload progress:

```ts
const task = reference.putFile(pathToFile);

task.on('state_changed', (taskSnapshot) => {
	console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
});

task.then(() => {
	console.log('Image uploaded to the bucket!');
});
```

A task also provides the ability to pause & resume on-going operations:

```ts
const task = reference.putFile(pathToFile);

task.pause();

// Sometime later...
task.resume();
```

### Download URLs

A common use-case for Cloud Storage is to use it as a global Content Delivery Network (CDN) for your images. When uploading files to a bucket, they are not automatically available for consumption via a HTTP URL. To generate a new Download URL, you need to call the getDownloadURL method on a reference:

```ts
import { firebase } from '@nativescript/firebase-core';

const url = firebase().storage().ref('images/profile-1.png').getDownloadURL();
```

### Listing files & directories

If you wish to view a full list of the current files & directories within a particular bucket reference, you can use the list method. The results are however paginated, and if more results are available you can pass a page token into the request:

```ts
import { firebase } from '@nativescript/firebase-core';

function listFilesAndDirectories(reference, pageToken) {
	return reference.list({ pageToken }).then((result) => {
		// Loop over each item
		result.items.forEach((ref) => {
			console.log(ref.fullPath);
		});

		if (result.nextPageToken) {
			return listFilesAndDirectories(reference, result.nextPageToken);
		}

		return Promise.resolve();
	});
}

const reference = firebase().storage().ref('images');

listFilesAndDirectories(reference).then(() => {
	console.log('Finished listing');
});
```

### Security

By default your bucket will come with rules which allows only authenticated users on your project to access it. You can however fully customize the security rules to your own applications requirements.

To learn more, view the [Storage Security](https://firebase.google.com/docs/storage/security/start) documentation on the Firebase website.

### Multiple Buckets

A single Firebase project can have multiple storage buckets. The module will use the default bucket if no bucket argument is passed to the storage instance. To switch buckets, provide the module with the gs:// bucket URL found on the Firebase Console, under Storage > Files.

```ts
import { firebase, FirebaseOptions } from '@nativescript/firebase-core';
const defaultStorageBucket = firebase().storage();
const config = new FirebaseOptions();
config.storageBucket = 'gs://my-secondary-bucket.appspot.com';
const secondaryApp = firebase.app(config, 'SECONDARY_APP');
const secondaryStorageBucket = firebase().storage(secondaryApp);
```

## License

Apache License Version 2.0
