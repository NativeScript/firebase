# @nativescript/firebase-firestore

* [Intro](#intro)
* [Set up Firebase](#set-up-firebase)
* [Create your Firestore database](#create-your-firestore-database)
* [Add the Firestore SDK to your app](#add-the-firestore-sdk-to-your-app)
* [Initialize Cloud Firestore](#initialize-cloud-firestore)
* [Firestore collections and documents](#firestore-collections-and-documents)
* [Writing Data](#writing-data)
	* [Adding Documents](#adding-documents)
	* [Updating data](#updating-data)
		* [Update geolocation points](#update-geolocation-points)
		* [Update timestamps](#update-timestamps)
		* [Update data in an array](#update-data-in-an-array)
	* [Removing data](#removing-data)
	* [Update data with transactions](#update-data-with-transactions)
	* [Batched writes](#batched-writes)
	* [Secure your data](#secure-your-data)
	* [Offline Capabilities](#offline-capabilities)
	* [Read Data](#read-data)
		* [One-time read](#one-time-read)
		* [Listen to real-time data changes](#listen-to-real-time-data-changes)
* [Firestore snapshots](#firestore-snapshots)
	* [Handle QuerySnapshot](#handle-querysnapshot)
	* [Handle DocumentSnapshot](#handle-documentsnapshot)
	* [Firestore querying](#firestore-querying)
		* [Filtering data](#filtering-data)
		* [Limiting data](#limiting-data)
		* [Ordering data](#ordering-data)
		* [Start and End Cursors](#start-and-end-cursors)
		* [Query Limitations](#query-limitations)

* [CollectionReference object](#collectionReference-object)
	* [id](#id)
	* [path](#path)
	* [parent](#parent)
	* [ios](#ios-1)
	* [android](#android-1)
	* [add()](#add)
	* [doc()](#doc-1)
	* [endAt()](#endAt)
	* [endBefore()](#endBefore)
	* [get()](#get)
	* [limit()](#limit)
	* [limitToLast()](#limitToLast)
	* [onSnapshot()](#onSnapshot)
	* [Observer interface](#Observer-interface)
	* [orderBy()](#orderBy)
	* [startAfter()](#startAfter)
	* [startAt()](#startAt)
	* [where()](#where)
	* [isEqual()](#isEqual)
* [DocumentSnapshot object](#DocumentSnapshot-object)
	* [exists](#exists)
	* [id](#id-1)
	* [metadata](#metadata)
	* [ref](#ref)
	* [android](#android-1)
	* [ios](#ios-1)
	* [data()](#data)
	* [get()](#get-1)
* [Transaction class](#Transaction-class)
	* [android](#android-1)
	* [ios](#ios-1)
	* [get()](#get-1)
	* [delete()](#delete-1)
	* [update()](#update-1)
	* [set()](#set-1)
## Intro

This plugin allows you to add [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore) to your NativeScript app.

[![image](https://img.youtube.com/vi/QcsAb2RR52c/hqdefault.jpg)](https://www.youtube.com/watch?v=QcsAb2RR52c)

## Set up Firebase

- To set up and initialize Firebase for your NativeScript app, follow the instructions on the documentation of the [@nativescript/firebase-core](../firebase-core/) plugin.

## Create your Firestore database

To create your Firestore database, follow the instructions at [Create a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart#create).

## Add the Firestore SDK to your app

To add the Cloud Firestore SDK to your app, install and import the `@nativescript/firebase-firestore` plugin.

1. Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-firestore
```

2. To add the Firestore SDK, import the `@nativescript/firebase-firestore` plugin. You should import the plugin once in your app project and the ideal place to do that is the app bootstrapping file( `app.ts`, `main.ts`, etc).

## Initialize Cloud Firestore

To initialize your Firestore database, create its instance by calling the `firestore` method on the `FirebaseApp` instance returned by the `firebase` method imported from the [@nativescript/firebase-core](../firebase-core) plugin.

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';
const firestore = firebase().firestore();
```

By default, this allows you to interact with Firestore using the default Firebase App used whilst installing Firebase on your platform. However, if you'd like to use Firestore with a secondary Firebase App, pass the secondary app instance when calling the `firestore` method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';

// create secondary app instance
const config = new FirebaseOptions();
const secondaryApp = firebase().initializeApp(config, 'SECONDARY_APP');

const firestore = firebase().firestore(secondaryApp);
```

## Firestore collections and documents

Firestore stores data within `documents`, which are contained within `collections`. Documents can also contain nested collections. For example, our users would each have their own "document" stored inside the "users" collection. 

## Writing Data

Before you write data to Firestore, see [Structure your data](https://firebase.google.com/docs/firestore/manage-data/structure-data) for the best practices for structuring your data.

### Adding Documents

To add a new document to a collection, first, get the collection instance by calling the [collection](#collection) method on the Firestore instance with the collection's name.  Next, call the [add](#add) method on the [CollectionReference](#collectionreference-object) instance with the data for the document.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.add({
		name: 'Ada Lovelace',
		age: 30,
	})
	.then(() => {
		console.log('User added!');
	});
```

The `add` method adds the new document to your collection with a random unique ID. If you'd like to specify an ID, call the [set](#set) method on a [DocumentReference](#documentreference-object) instead:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.doc('ABC')
	.set({
		name: 'Ada Lovelace',
		age: 30,
	})
	.then(() => {
		console.log('User added!');
	});
```
The `set` method replaces any existing data on a given DocumentReference instance.

### Updating data

To update a document's data, call the [update](#update) method on the document passing it the object of data to update.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.doc('ABC')
	.update({
		age: 31,
	})
	.then(() => {
		console.log('User updated!');
	});
```

The method also provides support for updating deeply nested values via the dot notation. The following example updates the `zipcode` property of the `address` object which is a property of an `info` object.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.doc('ABC')
	.update({
		'info.address.zipcode': 94040,
	})
	.then(() => {
		console.log('User updated!');
	});
```

#### Update geolocation points

To update geolocation data, instantiate the [GeoPoint class](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L439-L449) with the latitude and longitude and use the instance as the value to update with.

```ts
import { firebase } from '@nativescript/firebase-core';
import { GeoPoint } from '@nativescript/firebase-firestore';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		'info.address.location': new GeoPoint(53.483959, -2.244644),
	});
```
<!-- #### Update blob (bytes) data

To store a Blob (Bytes) (for example of a Base64 image string), provide the string to the static `fromBase64String` method of the [Bytes class]():

```ts
import { firebase } from '@nativescript/firebase-core';
import { Bytes } from '@nativescript/firebase-firestore';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		'info.avatar': Bytes.fromBase64String('data:image/png;base64,iVBOR...'),
	});
``` -->
#### Update timestamps

To create a timestamp value, call the `serverTimestamp` static method on the [FieldValue class](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437) and pass the timestamp to the `update` method as shown below. When your code passes the timestamp to the database, the Firebase servers write a new timestamp based on their time, rather than that of the client. This helps resolve any data consistency issues with different client timezones.

```ts
import { firebase } from '@nativescript/firebase-core';
import { FieldValue } from '@nativescript/firebase-firestore';

firebase().firestore().doc('users/ABC').update({
	createdAt: FieldValue.serverTimestamp(),
});
```
#### Update data in an array

To help manage(adding or removing) the values with an array, the API exposes an `arrayUnion` and `arrayRemove` methods on the [FieldValue class](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437).

- The code below adds(if it does not exist) `'ABCDE123456'` to the `fcmTokens` array:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		fcmTokens: firestore.FieldValue.arrayUnion('ABCDE123456'),
	});
```

- The code below removes(if it exists) `'ABCDE123456'` from the `fcmTokens` array:

```ts
import { firebase } from '@nativescript/firebase-core';
import { FieldValue } from '@nativescript/firebase-firestore';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		fcmTokens: FieldValue.arrayRemove('ABCDE123456'),
	});
```
### Removing data

- To delete a document within Cloud Firestore, get the document and call the [delete](#delete) method on the document reference.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.doc('ABC')
	.delete()
	.then(() => {
		console.log('User deleted!');
	});
```

- To remove a specific property from a document, rather than the document itself, call the `delete` method on the [FieldValue class](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437):

```ts
import { firebase } from '@nativescript/firebase-core';
import { FieldValue } from '@nativescript/firebase-firestore';

firebase().firestore().collection('users').doc('ABC').update({
	fcmTokens: FieldValue.delete(),
});
```

### Update data with transactions

Transactions are a way to always ensure a data write occurs with the latest information available on the server. 

Imagine a scenario whereby an app can "like" user posts. Whenever a user presses the "Like" button, a "likes" value (number of likes) on a "Posts" collection document increments. Without transactions, we'd first need to read the existing value and then increment that value in two separate operations.

On a high-traffic application, the value on the server could already have changed by the time the operation sets a new value, causing the actual number to not be consistent.

Transactions remove this issue by atomically updating the value on the server. If the value changes whilst the transaction is executing, it will retry. This always ensures the value on the server is used rather than the client value.

You can read more about transactions at [Update data with transactions](https://firebase.google.com/docs/firestore/manage-data/transactions#transactions).

To update a document data with a transaction, follow these steps:

1. Get the reference of the document you want to update.
2. Call the [runTransaction](#runtransaction) method on the database instance to instantiate a transaction. passing it a callback function that receives the transaction instance. 
3. In the callback function, read the document obtained in step 1 by passing it to the [get](#get-2) method.

4. Update the document by calling the transaction object's [update](#update-1) method with the document reference as the first argument and the object with the data to update as the second argument. 


```ts
import { firebase } from '@nativescript/firebase-core';

function onPostLike(postId) {
  // 1. Create a reference to the post

const postReference = firebase().firestore().doc(`posts/${postId}`);
// 2. Instantiate a transaction.
  return firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    const postSnapshot = await transaction.get(postReference);

    if (!postSnapshot.exists) {
      throw 'Post does not exist!';
    }
// 4. Update the document
    transaction.update(postReference, {
      likes: postSnapshot.data().likes + 1,
    });
  });
}

onPostLike('ABC')
  .then(() => console.log('Post likes incremented via a transaction'))
  .catch(error => console.error(error));
```


### Batched writes

If you do not need to read any documents in your operation set, you can execute multiple write operations as a single batch that contains any combination of `set`, `update`, or `delete` operations. A batch of writes completes atomically and can write to multiple documents.

To execute a batched write, follow these steps:

1. Get the reference of the documents to operate on.
2. Create a new [WriteBatch](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L477-L490) instance by calling the [batch](#batch) method on the Firestore database instance.

3. Perform operations() on the batch instance.

4. After calling the batch operations method, commit the batch instance by calling the `commit` method on the `WriteBatch` instance.

The example below shows how to delete all documents in a collection in a single operation:

```ts 
import { firebase } from '@nativescript/firebase-core';

async function massDeleteUsers() {
  // 1. Documents references
  const usersQuerySnapshot = await firebase().firestore().collection('users').get();

  // Create a new batch instance
  const batch = firebase().firestore().batch();
// Batch operation: delete
  usersQuerySnapshot.forEach(documentSnapshot => {
    batch.delete(documentSnapshot.ref);
  });
// Commit the batch operation
  return batch.commit();
}

massDeleteUsers().then(() => console.log('All users deleted in a single batch operation.'));

```

### Secure your data

You must understand how to write rules in your Firebase Console to ensure that your data is secure. To learn about Firestore security rules, see [Get Started with Cloud Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started).

### Offline Capabilities

Firestore provides out-of-the-box support for offline capabilities. When reading and writing data, Firestore uses a local database that synchronizes automatically with the server. Firestore functionality continues even when users are offline, and automatically handles data migration to the server when they regain connectivity.

This functionality is enabled by default. However, you can disable it whenever you need to(e.g. on apps containing sensitive information) by setting the `settings` property of the Firestore instance to `false`. You should set the property before any Firestore interaction is performed. Otherwise, it will only take effect on the next app launch:

```ts
import { firebase } from '@nativescript/firebase-core';
firebase().firestore().settings.persistence = false;

```

### Read Data

Cloud Firestore gives you the ability to read the value of a collection or a document. This can be a one-time read or a read that occurs whenever the data within a query changes.

#### One-time read

To read a collection or document once, call the Query.get or DocumentReference.get methods, for a collection or document respectively. 

```ts
import { firebase } from '@nativescript/firebase-core';
const users = firebase().firestore().collection('users');

users
	.doc(documentId)
	.get()
	.then((snapshot) => {
		if (snapshot && !snapshot.exists) {
			conosle.log('Document does not exist');
			return;
		}
		console.log(`Full Name: ${snapshot.data()['full_name']} ${snapshot.data()['last_name']}`);
	})
	.catch((error) => console.error('Failed to add user:', error));
```

#### Listen to real-time data changes

To react to any changes to a collection or a document, call the [onSnapshot](#onsnapshot) method on the collection or document with an event handler function. The example below watches for changes in the `users` collection.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.onSnapshot(
		(snapshot) => {
			console.log('Got Users collection result.');
		},
		(error) => {
			console.error(error);
		}
	);
```

The example below watches for changes in the `userId` document:

```ts
import { firebase } from '@nativescript/firebase-core';

const unsubscriber = firebase()
	.firestore()
	.collection('users')
	.doc(userId)
	.onSnapshot((documentSnapshot) => {
		console.log('User data: ', documentSnapshot.data());
	});

unsubscriber();
```

## Firestore snapshots

Once a query has returned a result, Firestore returns either a [QuerySnapshot](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L346-L364) (for collection queries) or a [DocumentSnapshot](#documentsnapshot-object) (for document queries). These snapshots provide the ability to view the data, view query metadata (such as whether the data was from a local cache), whether the document exists or not and more.

#### Handle QuerySnapshot

A QuerySnapshot returned by the `get` method of a collection query allows you to inspect the collection, such as how many documents exist within it, access to the documents within the collection, any changes since the last query and more.

To access the documents within a QuerySnapshot object, call the `forEach` method:

```ts
import { firebase } from '@nativescript/firebase-core';
firebase()
	.firestore()
	.collection('users')
	.get()
	.then((querySnapshot) => {
		console.log('Total users: ', querySnapshot.size);

		querySnapshot.forEach((documentSnapshot) => {
			console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
		});
	});
```

Each child document of a QuerySnapshot is a QueryDocumentSnapshot, which allows you to access specific information about a document (see below).

#### Handle DocumentSnapshot

A DocumentSnapshot is returned from a query to a specific document, or as part of the documents returned via a QuerySnapshot. The snapshot provides the ability to view a document's data, metadata and whether a document exists.

- To view a document's data, call the `data` method on the snapshot:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.doc('ABC')
	.get()
	.then((documentSnapshot) => {
		console.log('User exists: ', documentSnapshot.exists);

		if (documentSnapshot.exists) {
			console.log('User data: ', documentSnapshot.data());
		}
	});
```

- A snapshot also provides a helper function to easily access deeply nested data within a document. Call the `get` method with a dot-notated path:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.collection('users')
	.doc('ABC')
	.get()
	.then((documentSnapshot) => {
		return documentSnapshot.get('info.address.zipcode');
	})
	.then((zipCode) => {
		console.log('Users zip code is: ', zipCode);
	});
```

### Firestore querying

Cloud Firestore offers advanced capabilities for querying collections. Queries work with both one-time reads or subscribing to changes

#### Filtering data

To filter documents within a collection, call the `where` method on a collection reference. Filtering supports equality checks and "in" queries. For example, to filter users whose age is greater than 20 years, call where as follows:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .where('age', '>', 20)
  .get()
  .then(...);

```

Firestore also supports array queries. For example, to filter users who speak English (en) or Italian (it), use the `arrayContainsAny` filter:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .where('language', 'array-contains-any', ['en', 'it'])
  .get()
  .then(...);
```

To learn more about all of the querying capabilities Cloud Firestore has to offer, see [Perform simple and compound queries in Cloud Firestore](https://firebase.google.com/docs/firestore/query-data/queries).

#### Limiting data

To limit the number of documents returned from a query, use the `limit` method on a collection reference:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .limit(2)
  .get()
  .then(...);
```

You can also limit to the last documents within the collection query by using the `limitToLast` method:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age')
  .limitToLast(2)
  .get()
  .then(...);
```

#### Ordering data

To order the documents by a specific value, use the `orderBy` method:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age', descending: true)
  .get()
  .then(...);
```

#### Start and End Cursors

To start and/or end a query at a specific point within a collection, you can pass a value to the `startAt`, `endAt`, `startAfter` or `endBefore` methods. 

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age')
  .orderBy('company')
  .startAt([4, 'Alphabet Inc.'])
  .endAt([21, 'Google LLC'])
  .get()
  .then(...);
```

You can also specify a DocumentSnapshot instead of a specific value, by passing it to the `startAfterDocument`, `startAtDocument`, `endAtDocument` or `endBeforeDocument` methods. For example:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age')
  .startAfterDocument(documentSnapshot)
  .get()
  .then(...);
```

#### Query Limitations

Cloud Firestore does not support the following types of queries:

- Queries with range filters on different fields, as described in the previous section.
- Logical OR queries. In this case, you should create a separate query for each OR condition and merge the query results in your app.
- Queries with a != clause. In this case, you should split the query into a greater-than query and a less-than query. For example, the query clause `where("age", '!=', 30)` is not supported. However, you can get the same result set by combining two queries, one with the clause `where("age", '<', 30)` and one with the clause `where("age", '>', 30)`.

## API

### Firestore class

This class is a wrapper for the [FirebaseFirestore](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore) class that represents a Cloud Firestore database and is the entry point for all Cloud Firestore operations.

#### app
```ts
firebaseApp: = firestore.app
```
The FirebaseApp instance through which the Firestore database is accessed.

#### android
```ts
firestoreAndroid: com.google.firebase.firestore.FirebaseFirestore = firebase().firestore().android
```
The Firestore database instance for Android.
#### ios
```ts
firestoreIOS: FIRFirestore = firebase().firestore().ios
```
The Firestore database instance for iOS.

---
#### settings
```ts
settings: Settings = firebase().firestore().settings
// 
settings = new Settings()

firebase().firestore().settings = settings
```
For the description, see [getFirestoreSettings()](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#getFirestoreSettings()) on the FirebaseFirestore class documentation.

---
#### useEmulator()
```ts
firebase().firestore().useEmulator(host, port)
```
For the description, see [useEmulator](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#useEmulator(java.lang.String,int)) on the FirebaseFirestore class documentation.

| Parameter | Type | Description
|-----------|------|------------
| `host` | `string` | 
| `port` | `number`

----
#### batch()
```ts
writeBatch: WriteBatch = firebase().firestore().batch()
```
Creates a write batch instance. For more information, see [batch()](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#batch()) on the FirebaseFirestore class documentation.

---
#### collection()
```ts
collectionReference: CollectionReference = firebase().firestore().collection(collectionPath)
```
Gets the `CollectionReference` in the database at the specified path.
| Parameter | Type | Description
|-----------|------|------------
| `collectionPath` | `string` | The slash-separated path string of the collection.

---
#### clearPersistence()
```ts
firebase().firestore().clearPersistence().then(()=>{
	// do something after clearing
}).catch( (err) =>{

})
```
For the description, see [clearPersistence()](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#clearPersistence()) on the FirebaseFirestlre class documentation.

---
#### collectionGroup()
```ts
collectionGroup: Query = firebase().firestore().collectionGroup(collectionId)
```
For the description, see the [collectionGroup](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#collectionGroup(java.lang.String)) method on the documentation of the FirebaseFirestore class.

| Parameter | Type | Description
|-----------|------|------------
| `collectionId` | `string` | 

---
#### disableNetwork()
```ts
firebase().firestore().disableNetwork().then(()=>{
	// do something after disabling network
}).catch( (err) =>{

})
```
For the description, see the description of the [disableNetwork()](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#disableNetwork()) method on the FirebaseFirestore documentation.

---
#### enableNetwork()
```ts
firebase().firestore().enableNetwork().then(()=>{
	// do something after disabling network
}).catch( (err) =>{

})
```
For the description, see the description of the [enableNetwork()](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#enableNetwork()) method on the FirebaseFirestore documentation.

---
#### doc()
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
```
Gets the `DocumentReference` instance for the document at the specified path.

| Parameter | Type | Description
|-----------|------|------------
| `documentPath` | `string`| The slash-separated path string for a document in the database.


---
#### runTransaction()
```ts
firebase().firestore().runTransaction(updateFunction).then((result: any)=>{

}).catch((err)=>{

})

```

| Parameter | Type | Description
|-----------|------|------------
| `updateFunction` | `(transaction: Transaction) => Promise<any>` | 

---
#### terminate()
```ts
firebase().firestore().terminate().then(()=>{
	// do something after disabling network
}).catch( (err) =>{

})
```

For the description, see the description of the [terminate()](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#terminate()) method on the FirebaseFirestore class documentation.

---
#### waitForPendingWrites()
```ts
firebase().firestore().waitForPendingWrites().then(()=>{
	// do something after disabling network
}).catch( (err) =>{

})
```
For the description, see the description of the [waitForPendingWrites](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/FirebaseFirestore#waitForPendingWrites()) method on the FirebaseFirestore class documentation.

---
### CollectionReference object

An object that represents a collection on the database.

#### id
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReferenceId: string = collectionReference.id
```

A `readonly` property that returns the ID of the collection.

---
#### path
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReferencePath: string = collectionReference.path
```

A `readonly` property that returns the path of the collection.

---
#### parent
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReferenceParent: DocumentReference = collectionReference.parent
```

A `readonly` property that returns the `DocumentReference` containing this collection, if the collection is a sub-collection.  If the collection is a root collection, `null` gets returned.

---
#### ios
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReferenceIOS: FIRCollectionReference = collectionReference.ios
```

A `readonly` property that returns the `CollectionReference` instance for iOS.

---
#### android
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReferenceAndroid: com.google.firebase.firestore.CollectionReference = collectionReference.android
```

A `readonly` property that returns the `CollectionReference` instance for Android.

---
#### add()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReference.add(dataObject).then((docReference: DocumentReference<T>)=>{

}).catch((err)=>{

})
```
Adds a new document to this collection with the specified data, assigning it a document ID automatically.

---
#### doc()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
document: IDocumentReference<T> = collectionReference.doc(documentPath).doc(documentPath)
```
Gets a `DocumentReference` instance that refers to the document at the specified path within this collection.

| Parameter | Type | Description
|-----|------|-------
| `documentPath` | `string` | The document path.


---
#### endAt()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.endAt(snapshot)
// or 
query: Query = collectionReference.endAt(fieldValues)
```
| Parameter | Type | Description
|-----------|------|------------
| `snapshot` | [DocumentSnapshot](#documentsnapshot-object) | 
| `fieldValues` | [DocumentSnapshot](#documentsnapshot-object) \| [FieldValue](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437)[]| 

---
#### endBefore()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.endBefore(snapshot)
// or 
query: Query = collectionReference.endBefore(fieldValues)
```
| Parameter | Type | Description
|-----------|------|------------
| `snapshot` | [DocumentSnapshot](#documentsnapshot-object) | 
| `fieldValues` | [DocumentSnapshot](#documentsnapshot-object) \| [FieldValue](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437)[]| 

---
#### get()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReference.get(options).then((querySnapshot: QuerySnapshot) =>{

}).catch(err =>{

})
```
| Parameter | Type | Description
|-----------|------|------------
| `options` | [GetOptions](#getoptions-interface) | _Optional_

---
#### limit()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.limit(limit)
```
| Parameter | Type | Description
|-----------|------|------------
| `limit` | `number` | _Optional_

---
#### limitToLast()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.limitToLast(limitToLast)
```
| Parameter | Type | Description
|-----------|------|------------
| `limitToLast` | `number` | _Optional_

---
#### onSnapshot()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
collectionReference.onSnapshot(observer)
//OR
collectionReference.onSnapshot(options,observer)
//OR
collectionReference.onSnapshot(onNext, onError, onCompletion)
//OR
collectionReference.onSnapshot(options,onNext, onError,onCompletion)
```
| Parameter | Type | Description
|-----------|------|------------
| `observer` | [IObserver](#observer-interface) | 
| `options` |  [SnapshotListenOptions](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L177-L179)| 
| `onNext` |  `(snapshot: QuerySnapshot) => void` | _Optional_
| `onError` |  `(error: Error) => void` | _Optional_
| `onCompletion` |  `() => void`| _Optional_

#### Observer interface
```ts
interface IObserver { 
	complete?: () => void;
	 error?: (error: Error) => void;
	next?: (snapshot: QuerySnapshot) => void 
	}
```
---
#### orderBy()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.orderBy(fieldPath,directionStr)
```
| Parameter | Type | Description
|-----------|------|------------
| `fieldPath` | `keyof` `DocumentData` | 
| `directionStr` | `'asc' \| 'desc'` | Defaults to `'asc'`

---
#### startAfter()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.startAfter(snapshot)
// or 
query: Query = collectionReference.startAfter(fieldValues)
```
| Parameter | Type | Description
|-----------|------|------------
| `snapshot` | [DocumentSnapshot](#documentsnapshot-object) | 
| `fieldValues` | [DocumentSnapshot](#documentsnapshot-object) \| [FieldValue](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437)[]| 

---
#### startAt()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.startAt(snapshot)
// or 
query: Query = collectionReference.startAt(fieldValues)
```
| Parameter | Type | Description
|-----------|------|------------
| `snapshot` | [DocumentSnapshot](#documentsnapshot-object) | 
| `fieldValues` | [DocumentSnapshot](#documentsnapshot-object) \| [FieldValue](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L423-L437)[]| 

---
#### where()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
query: Query = collectionReference.where(fieldPath,opStr,value)
```

| Parameter | Type | Description
|-----------|------|------------
| `fieldPath` | [FieldPath](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L412-L421) \| `keyof`  `DocumentData` | 
| `opStr` | [WhereFilterOp](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L3) | 
| `value` | `any` | 

---
#### isEqual()
```ts
collectionReference = firebase().firestore().collection(collectionPath)
isEqual: boolean = collectionReference.isEqual(other)
```

| Parameter | Type | Description
|-----------|------|------------
| `other` | `any` | 

---

### DocumentReference object

An object that represents a document on the database.

#### firestore
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
documentReferenceFirestore: Firestore = document.firestore
```
A `readonly` property that returns the Firestore database instance for this document.

---
#### id
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
documentReferenceId: string = document.id
```

A `readonly` property that returns the ID of the doocument.

---
#### path
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
documentPath: string = document.path
```

A `readonly` property that returns the path of the document.

---
#### parent
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
documentParent: CollectionReference = document.parent
```

A `readonly` property that returns the `CollectionReference` that contains this document.

---
#### ios
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
documentIOS: FIRDocumentReference = document.ios
```

A `readonly` property that returns the `DocumentReference` instance for iOS.

---
#### android
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
documentAndroid: com.google.firebase.firestore.DocumentReference = document.android
```

A `readonly` property that returns the `DocumentReference` instance for Android.

---
#### collection()
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
document.collection(collectionPath)
```

---
#### delete()
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
document.delete().then(()=>{
	//
}).catch(err =>{

})
```
Asynchronously delete this document.

---
#### get()
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	//handle the document data
}).catch(err =>{

})
```
Reads the data from the document.

| Parameter | Type | Description
|----------|-------|------------
| `options` | [GetOptions](#getoptions-interface) | _Optional_ settings object for the get operation.

#### GetOptions interface
```ts
enum GetOptions {
	Default = 'default',
	Server = 'server',
	Cache = 'cache',
}
```
---
#### set()
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
document.set(data, options).then(()=>{

}).catch(err =>{

})
```
Overwrites the data of this document with the specified data, if the document exists. Otherwise, it creates the document and saves the data to the document.

| Parameter | Type | Description
|----------|-------|------------
| `data` | `any` | The data to save.
| `options` | [SetOptions](#setoptions-interface) | _Optional_ settings object for the set operation.

#### SetOptions interface

| Option | Type | Description
|----------|-------|------------
| `merge` | `undefined \| false \| true` | For the description, see [merge](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/SetOptions#merge()) on the Firebase documentation.
| `mergeFields` | `string[] \| IFieldPath[]` | For the description, see [mergeFields](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/SetOptions#mergeFields(java.lang.String...)) and[mergeFields](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/SetOptions#mergeFieldPaths(java.util.List%3Ccom.google.firebase.firestore.FieldPath%3E)) on the Firebase documentation.

---
#### onSnapshot()
```ts
document: DocumentReference = firebase().firestore().doc(documentPath)
document.onSnapshot(observer)
```
Allows you to add a function to listen for the document's real-time changes event. The `onSnapshot` method has the following additional overloads:

```ts
document.onSnapshot(observer)
//OR
document.onSnapshot(options,observer)
//OR
document.onSnapshot(onNext, onError, onCompletion)
//OR
document.onSnapshot(options,onNext, onError,onCompletion)
```
| Parameter | Type | Description
|-----------|------|------------
| `observer` | [IObserver](#observer-interface) | 
| `options` |  [SnapshotListenOptions](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L177-L179)| 
| `onNext` |  `(snapshot: QuerySnapshot) => void` | _Optional_
| `onError` |  `(error: Error) => void` | _Optional_
| `onCompletion` |  `() => void`| _Optional_


---
#### update()
```ts
update(data).then(()=>{

}).catch(err =>{

})
//OR
update(field,value,moreFieldsAndValues).then(()=>{

}).catch(err =>{

})
```
| Parameter | Type | Description
|--------|---------|---------
| `data` | `Partial<{ [K in keyof T]: FieldValue | T[K] }>)` | 
| `field` | [FieldPath](https://github.com/NativeScript/firebase/blob/main/packages/firebase-firestore/index.d.ts#L412-L421) | 
| `value` | `any` | 
| `moreFieldsAndValues` | `any[]`

Allows you to update this document with the specified data.

### DocumentSnapshot object

#### exists
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	docExists: boolean = snapshot.exists
}).catch(err =>{
// handle any error here
})
```
A `readonly` property that returns `true` if the document exists or `false` otherwise.

---
#### id
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	docID: string = snapshot.id
}).catch(err =>{
// handle any error here
})
```
A `readonly` property that returns the ID of the snapshot.

---
#### metadata
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	snapshotMetadata: SnapshotMetadata = snapshot.metadata
}).catch(err =>{
// handle any error here
})
```
A `readonly` property that returns metadata about the snapshot, describing the state of the snapshot.

---
#### ref
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	docReference: DocumentReference = snapshot.ref
}).catch(err =>{
// handle any error here
})
```
A `readonly` property that returns the `DocumentReference` instance of the document.

---
#### android
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	documentSnapshotAndroid: com.google.firebase.firestore.DocumentSnapshot = snapshot.android
}).catch(err =>{
// handle any error here
})
```
A `readonly` property that returns the `DocumentSnapshot` instance for Android.

---
#### ios
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	documentSnapshotIOS: FIRDocumentSnapshot = snapshot.ios
}).catch(err =>{
// handle any error here
})
```
A `readonly` property that returns the `DocumentSnapshot` instance for iOS.

---
#### data()
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	documentSnapshotData: any = snapshot.data()
}).catch(err =>{
// handle any error here
})
```
Extracts the fields of the document data.

---
#### get()
```ts
document.get(options).then((snapshot: DocumentSnapshot<T>)=>{
	documentField: fieldType = snapshot.get(fieldPath)
}).catch(err =>{
// handle any error here
})
```
Returns the value for the specified field. If the field does not exist, it returns `null`.
| Parameter | Type | Description
|-----------|-----|-----------
| `fieldPath` | `string \| number \| FieldPath` | "Returns the value at the field or null if the field doesn't exist."

---

### Transaction class
#### android
```ts
firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    const transactionAndroid: com.google.firebase.firestore.Transaction  = transaction.android;

  });

```
Returns the Transaction object for Android.

---
#### ios
```ts
firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    const transactionIOS: FIRTransaction = transaction.ios;

  });

```
Returns the Transaction object for iOS.

---
#### get()
```ts
firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    const documentSnapshot: DocumentSnapshot = await transaction.get(documentReference);

  });

```
Reads the specified document.

---
#### delete()
```ts
firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    transactionAfterDelete = transaction.delete(documentReference);

  });
}
```
Deletes the specified `DocumentReference` instance.

---
#### update()
```ts
firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    const documentSnapshot = await transaction.get(documentReference);

    if (!documentSnapshot.exists) {
      throw 'Document does not exist!';
    }
// 4. Update the document
    transactionAfterUpdate = transaction.update(documentReference, data);
	// OR 
	transactionAfterUpdate = transaction.update(documentReference, field, value, moreFieldsAndValues);
	//OR
	transactionAfterUpdate = transaction.update(documentReference, data);


  });

```
Updates the specified document with the provided data and return the transaction.
| Parameter | Type | Description
|-----------|------|-----------
| `documentReference`| [DocumentReference object](#documentreference-object)| The `DocumentReference` instance to update.
| `field` | `any` | The document field to update.
| `value` | `any` | The new value to set.
| `moreFieldsAndValues` | `any[]`

---
#### set()
```ts
firestore().runTransaction(async transaction => {
    // 3. Read the document's data
    const documentSnapshot = await transaction.get(documentReference);

// 4. Set document data
    transactionAfterSet = transaction.set(documentReference, data);
  });

```
Saves data to the specified `DocumentReference`. If the document does not exist, it creates the document.

---
## License

Apache License Version 2.0
