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

## API

### Storage class
#### android
```ts
import { firebase } from '@nativescript/firebase-core';

storageAndroid: com.google.firebase.storage.FirebaseStorage = firebase().storage().android;
```
A `read-only` property that returns the underlying native Android object.

---
#### ios
```ts
import { firebase } from '@nativescript/firebase-core';

storageIOS: FIRStorage = firebase().storage().ios;
```
A `read-only` property that returns the underlying native iOS object.

---
#### app
```ts
import { firebase } from '@nativescript/firebase-core';

storageApp: FirebaseApp = firebase().storage().app;
```
A `read-only` property that returns the FirebaseApp instance to which this Storage belongs.

---
#### maxDownloadRetryTime
```ts
import { firebase } from '@nativescript/firebase-core';

maxDownloadRetryTime: number = firebase().storage().maxDownloadRetryTime;
// or

```
Returns or sets the maximum time, in milliseconds, to retry downloads in the case of a failure.

---
#### maxOperationRetryTime
```ts
import { firebase } from '@nativescript/firebase-core';

maxOperationRetryTime: number = firebase().storage().maxOperationRetryTime;
```
Returns or sets the maximum time, in milliseconds, to retry operations other than uploads or downloads in the case of a failure.

---
#### maxUploadRetryTime
```ts
import { firebase } from '@nativescript/firebase-core';

maxUploadRetryTime: number = firebase().storage().maxUploadRetryTime;
```
Gets or sets the maximum time, in milliseconds, to retry uploads in the case of a failure.

---
#### constructor()
```ts
import { firebase } from '@nativescript/firebase-core';

new Storage(app);
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `app` | `FirebaseApp` | _Optional_ : The FirebaseApp instance to which this Storage belongs. |

---
#### useEmulator()
```ts
import { firebase } from '@nativescript/firebase-core';

firebase().storage().useEmulator(host, port);
```
Attempts to connect to the Storage emulator running locally on the given host and port.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `host` | `string` | The emulator host. |
| `port` | `number` | The emulator port. |


---
#### ref()
```ts
import { firebase } from '@nativescript/firebase-core';

reference: Reference = firebase().storage().ref(path);
```
Creates a new storage [reference]() initialized at the root Firebase Storage location, if no path argument is provided, or at the given path if a path argument is provided.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | _Optional_ : The path to initialize the reference at. |

---
#### refFromURL()
```ts
import { firebase } from '@nativescript/firebase-core';

reference: Reference = firebase().storage().refFromURL(url);
```
Creates a new storage [reference]() initialized from the specific URL.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `url` | `string` | The URL to initialize the reference from. |

---
### Reference object

#### android
```ts
referenceAndroid: com.google.firebase.storage.StorageReference = reference.android;
```

A `read-only` property that returns the underlying native StorageReference object for Android.

---
#### ios
```ts
referenceIOS: FIRStorageReference = reference.ios;
```
A `read-only` property that returns the underlying native StorageReference object for iOS.

---
#### bucket
```ts
bucket: string = reference.bucket;
```
A `read-only` property that returns the name of the bucket containing this reference's object.

---
#### fullPath
```ts
fullPath: string = reference.fullPath;
```

A `read-only` property that returns the full path to this object, not including the Google Cloud Storage bucket.

---
#### name
```ts
name: string = reference.name;
```
A `read-only` property that returns the short name of this object's path, which is the last component of the full path.

---
#### parent
```ts
parent: Reference = reference.parent;
```
A `read-only` property that returns a reference to the parent of the current reference, or null if the current reference is the root.

---
#### root
```ts
root: Reference = reference.root;
```
A `read-only` property that returns a reference to the root of the current reference's bucket.

---
#### storage
```ts
storage: Storage = reference.storage;
```
A `read-only` property that returns the [Storage](#storage-class) instance associated with the reference.

---
#### child()
```ts
reference: Reference = reference.child(path);
```
Returns a reference to a relative path from the current reference. For more information, see [child](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#child(java.lang.String)) on the Firebase website.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | The child path. |

---
#### delete()
```ts
reference.delete();
```
Deletes the object at the current reference's location.

---
#### getDownloadURL()
```ts
downloadURL: string = await reference.getDownloadURL();
```
Asynchronously retrieves a long-lived download URL with a revokable token. For more information, see [getDownloadUrl](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#getDownloadUrl()) on the Firebase website.

---
#### getMetadata()
```ts
metadata: FullMetadata = await reference.getMetadata();
```
Asynchronously retrieves metadata associated with an object at the current reference's location. For more information, see [getMetadata](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#getMetadata()) on the Firebase website.

---
#### list()
```ts
listResult: ListResult = await reference.list(options);
```
Returns items (files) and prefixes (folders) under this StorageReference.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `options` | [ListOptions](#listoptions-interface) | _Optional_ : An object to configure the listing operation. The `ListOptions` properties are described in the [list](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#list(int,java.lang.String)) method on the Firebase docs.| 

#### ListOptions interface

```ts
interface ListOptions {
	maxResults: undefined | number;
	pageToken: undefined | string;
}
```

---
#### listAll()
```ts
listResult: ListResult = await reference.listAll();
```

Asynchronously returns a list of all items (files) and prefixes (folders) under this StorageReference. For more information, see [listAll](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#listAll()) on the Firebase website.

---
#### put()
```ts
task: Task = reference.put(data, metadata);
```
Uploads data to this reference's location. For more information, see [putBytes](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#putBytes(byte[],com.google.firebase.storage.StorageMetadata)) on the Firebase website.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `Blob \| Uint8Array \| ArrayBuffer` | The data to upload. |
| `metadata` | [Metadata](https://github.com/NativeScript/firebase/blob/main/packages/firebase-storage/index.d.ts#L131-L157) | _Optional_ : The metadata to associate with this upload. |


---
#### putString()
```ts
stringTask: Task = reference.putString(data, format, metadata);
```
Uploads bytes data from a string to this reference's location.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `data` | `string` | The base64 string to upload . |
| `format` | [StringFormat](#stringformat-enum) | The format of the string to upload. |
| `metadata` | [Metadata](https://github.com/NativeScript/firebase/blob/main/packages/firebase-storage/index.d.ts#L131-L157) | _Optional_ : The metadata to associate with this upload. |

#### StringFormat enum

```ts
enum StringFormat {
	RAW = 'raw',
	BASE64 = 'base64',
	BASE64URL = 'base64url',
	DATA_URL = 'data_url',
}
```

---
#### putFile()
```ts
fileTask: Task = reference.putFile(path, metadata);
```
Uploads a file to this reference's location.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `path` | `string` | The path to the file to upload. |
| `metadata` | [Metadata](https://github.com/NativeScript/firebase/blob/main/packages/firebase-storage/index.d.ts#L131-L157) | _Optional_ : The metadata to associate with this upload. |

---
#### updateMetadata()
```ts
updatedMetadata: FullMetadata = await reference.updateMetadata(metadata);
```
Updates the specified metadata associated with this reference. For more information, see [updateMetadata](https://firebase.google.com/docs/reference/android/com/google/firebase/storage/StorageReference#updateMetadata(com.google.firebase.storage.StorageMetadata)) on the Firebase website.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `metadata` | [Metadata](https://github.com/NativeScript/firebase/blob/main/packages/firebase-storage/index.d.ts#L131-L157) | The metadata to update. |

---
#### writeToFile()
```ts
fileWriteTask: Task = reference.writeToFile(localFilePath);
```
Downloads the object at this reference's location to the specified system file path. For more information, see [writeToFile](https://firebase.google.com/docs/reference/ios/firebasestorage/api/reference/Classes/FIRStorageReference#-writetofile:) on the Firebase website.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `localFilePath` | `string` | The path to which the file should be downloaded. |

---

## License

Apache License Version 2.0
