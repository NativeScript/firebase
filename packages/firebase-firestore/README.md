# @nativescript/firebase-firestore

```cli
ns plugin add @nativescript/firebase-firestore
```

## What does it do?

Firestore is a flexible, scalable NoSQL cloud database to store and sync data. It keeps your data in sync across client apps through realtime listeners and offers offline support so you can build responsive apps that work regardless of network latency or Internet connectivity.

[![image](https://img.youtube.com/vi/QcsAb2RR52c/hqdefault.jpg)](https://www.youtube.com/watch?v=QcsAb2RR52c)

## Usage

Before using Firestore, you must first have ensured you have initialized Firebase.

To create a new Firestore instance, call the firestore method on Firebase:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';
const firestore = firebase().firestore();
```

By default, this allows you to interact with Firestore using the default Firebase App used whilst installing Firebase on your platform. If however you'd like to use Firestore with a secondary Firebase App, pass the secondary app instance when calling the firestore method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';

// create secondary app instance
const config = new FirebaseOptions();
const secondaryApp = firebase().initializeApp(config, 'SECONDARY_APP');

const firestore = firebase().firestore(secondaryApp);
```

### Collections & Documents

Firestore stores data within "documents", which are contained within "collections". Documents can also contain nested collections. For example, our users would each have their own "document" stored inside the "Users" collection. The collection method allows us to reference a collection within our code.

In the below example, we can reference the collection users, and create a new user document:

```ts
import { firebase } from '@nativescript/firebase-core';
const users = firebase().firestore().collection('users');

users
	.add({
		full_name: fullName, // John Doe
		company: company, // Stokes and Sons
		age: age, // 42
	})
	.then((value) => console.log('User Added'))
	.catch((error) => console.error('Failed to add user:', error));
```

### Read Data

Cloud Firestore gives you the ability to read the value of a collection or a document. This can be a one-time read, or provided by realtime updates when the data within a query changes.

#### One-time Read

To read a collection or document once, call the Query.get or DocumentReference.get methods. In the below example a FutureBuilder is used to help manage the state of the request:

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

### Realtime changes

To setup an active listener to react to any changes to the query, call the onSnapshot method with an event handler callback. For example, to watch the entire "Users" collection for when any documents are changed (removed, added, modified):

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

The onSnapshot method also returns a function, allowing you to unsubscribe from events.

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

Realtime changes via the onSnapshot method can be applied to both collections and documents.

### Snapshots

Once a query has returned a result, Firestore returns either a QuerySnapshot (for collection queries) or a DocumentSnapshot (for document queries). These snapshots provide the ability to view the data, view query metadata (such as whether the data was from local cache), whether the document exists or not and more.

### QuerySnapshot

A QuerySnapshot returned from a collection query allows you to inspect the collection, such as how many documents exist within it, access to the documents within the collection, any changes since the last query and more.

To access the documents within a QuerySnapshot, call the forEach method:

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

### DocumentSnapshot

A DocumentSnapshot is returned from a query to a specific document, or as part of the documents returned via a QuerySnapshot. The snapshot provides the ability to view a documents data, metadata and whether a document actually exists.

To view a documents data, call the data method on the snapshot:

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

A snapshot also provides a helper function to easily access deeply nested data within a document. Call the get method with a dot-notated path:

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

### Querying

Cloud Firestore offers advanced capabilities for querying collections. Queries work with both one-time reads or subscribing to changes

### Filtering

To filter documents within a collection, the where method can be chained onto a collection reference. Filtering supports equality checks and "in" queries. For example, for filter users where their age is greater than 20:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .where('age', isGreaterThan: 20)
  .get()
  .then(...);

```

Firestore also supports array queries. For example, to filter users who speak English (en) or Italian (it), use the arrayContainsAny filter:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .where('language', arrayContainsAny: ['en', 'it'])
  .get()
  .then(...);
```

To learn more about all of the querying capabilities Cloud Firestore has to offer, view the [Firebase documentation](https://firebase.google.com/docs/firestore/query-data/queries).

### Limiting

To limit the number of documents returned from a query, use the limit method on a collection reference:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .limit(2)
  .get()
  .then(...);
```

You can also limit to the last documents within the collection query by using limitToLast:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age')
  .limitToLast(2)
  .get()
  .then(...);
```

### Ordering

To order the documents by a specific value, use the orderBy method:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age', descending: true)
  .get()
  .then(...);
```

### Start & End Cursors

To start and/or end a query at a specific point within a collection, you can pass a value to the startAt, endAt, startAfter or endBefore methods. You must specify an order to use cursor queries, for example:

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

You can further specify a DocumentSnapshot instead of a specific value, by passing it to the startAfterDocument, startAtDocument, endAtDocument or endBeforeDocument methods. For example:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase().firestore()
  .collection('users')
  .orderBy('age')
  .startAfterDocument(documentSnapshot)
  .get()
  .then(...);
```

### Query Limitations

Cloud Firestore does not support the following types of queries:

- Queries with range filters on different fields, as described in the previous section.
- Logical OR queries. In this case, you should create a separate query for each OR condition and merge the query results in your app.
- Queries with a != clause. In this case, you should split the query into a greater-than query and a less-than query. For example, the query clause where("age", isNotEqualTo: 30) is not supported, however you can get the same result set by combining two queries, one with the clause where("age", isLessThan: 30) and one with the clause where("age", isGreaterThan: 30)

### Writing Data

The [Firebase Documentation](https://firebase.google.com/docs/firestore/manage-data/structure-data) provides some great examples on the best practices to structuring your data. It is recommended that you read the guide before building your database.

For more information on what is possible when writing data to Firestore, please refer to this [documentation](https://firebase.google.com/docs/firestore/manage-data/add-data)

### Adding Documents

To add a new document to a collection, use the add method on a CollectionReference:

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

The add method adds the new document to your collection with a random unique ID. If you'd like to specify your own ID, call the set method on a DocumentReference instead:

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

### Updating documents

The set method exampled above replaces any existing data on a given DocumentReference. if you'd like to update a document instead, use the update method:

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

The method also provides support for updating deeply nested values via dot-notation:

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

### Field values

Cloud Firestore supports storing and manipulating values on your database, such as Timestamps, GeoPoints, Blobs and array management.

To store GeoPoint values, provide the latitude and longitude to a new instance of the class:

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

To store a Blob (Bytes) (for example of a Base64 image string), provide the string to the static fromBase64String method on the class:

```ts
import { firebase } from '@nativescript/firebase-core';
import { Bytes } from '@nativescript/firebase-firestore';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		'info.avatar': Bytes.fromBase64String('data:image/png;base64,iVBOR...'),
	});
```

When storing timestamps, it is recommended you use the serverTimestamp static method on the FieldValue class. When written to the database, the Firebase servers will write a new timestamp based on their time, rather than the clients. This helps resolve any data consistency issues with different client timezones:

```ts
import { firebase } from '@nativescript/firebase-core';
import { FieldValue } from '@nativescript/firebase-firestore';

firebase().firestore().doc('users/ABC').update({
	createdAt: FieldValue.serverTimestamp(),
});
```

Cloud Firestore also allows for storing arrays. To help manage the values with an array (adding or removing) the API exposes an arrayUnion and arrayRemove methods on the FieldValue class.

To add a new value to an array (if it does not exist):

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		fcmTokens: firestore.FieldValue.arrayUnion('ABCDE123456'),
	});
```

To remove a value from the array (if it exists):

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.firestore()
	.doc('users/ABC')
	.update({
		fcmTokens: firestore.FieldValue.arrayRemove('ABCDE123456'),
	});
```

### Removing data

You can delete documents within Cloud Firestore using the delete method on a DocumentReference:

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

If you need to remove a specific property with a document, rather than the document itself, you can use the delete method on the FieldValue class:

```ts
import { firebase } from '@nativescript/firebase-core';
import { FieldValue } from '@nativescript/firebase-firestore';

firebase().firestore().collection('users').doc('ABC').update({
	fcmTokens: FieldValue.delete(),
});
```

### Transactions

Transactions are a way to always ensure a write occurs with the latest information available on the server. Transactions never partially apply writes & all writes execute at the end of a successful transaction.

Transactions are useful when you want to update a field's value based on its current value, or the value of some other field. If you simply want to write multiple documents without using the document's current state, a batch write would be more appropriate.

When using transactions, note that:

Read operations must come before write operations.
A function calling a transaction (transaction function) might run more than once if a concurrent edit affects a document that the transaction reads.
Transaction functions should not directly modify application state (return a value from the updateFunction).
Transactions will fail when the client is offline.
Imagine a scenario whereby an app has the ability to "Like" user posts. Whenever a user presses the "Like" button, a "likes" value (number of likes) on a "Posts" collection document increments. Without transactions, we'd first need to read the existing value and then increment that value in two separate operations.

On a high traffic application, the value on the server could already have changed by the time the operation sets a new value, causing the actual number to not be consistent.

Transactions remove this issue by atomically updating the value on the server. If the value changes whilst the transaction is executing, it will retry. This always ensures the value on the server is used rather than the client value.

To execute a new transaction, call the runTransaction method:


```ts
import { firebase } from '@nativescript/firebase-core';

function onPostLike(postId) {
  // Create a reference to the post
  const postReference = firebase().firestore().doc(`posts/${postId}`);

  return firestore().runTransaction(async transaction => {
    // Get post data first
    const postSnapshot = await transaction.get(postReference);

    if (!postSnapshot.exists) {
      throw 'Post does not exist!';
    }

    transaction.update(postReference, {
      likes: postSnapshot.data().likes + 1,
    });
  });
}

onPostLike('ABC')
  .then(() => console.log('Post likes incremented via a transaction'))
  .catch(error => console.error(error));
```


### Batch write

If you do not need to read any documents in your operation set, you can execute multiple write operations as a single batch that contains any combination of set, update, or delete operations. A batch of writes completes atomically and can write to multiple documents.

First, create a new batch instance via the batch method, perform operations on the batch and finally commit it once ready. The example below shows how to delete all documents in a collection in a single operation:

```ts 
import { firebase } from '@nativescript/firebase-core';

async function massDeleteUsers() {
  // Get all users
  const usersQuerySnapshot = await firebase().firestore().collection('users').get();

  // Create a new batch instance
  const batch = firebase().firestore().batch();

  usersQuerySnapshot.forEach(documentSnapshot => {
    batch.delete(documentSnapshot.ref);
  });

  return batch.commit();
}

massDeleteUsers().then(() => console.log('All users deleted in a single batch operation.'));

```


### Secure your data

It is important that you understand how to write rules in your Firebase console to ensure that your data is secure. Please follow the Firebase Firestore documentation on [security](https://firebase.google.com/docs/firestore/security/get-started).

### Offline Capabilities


Firestore provides out of the box support for offline capabilities. When reading and writing data, Firestore uses a local database which synchronizes automatically with the server. Firestore functionality continues when users are offline, and automatically handles data migration to the server when they regain connectivity.

This functionality is enabled by default, however it can be disabled if you need it to be disabled (e.g. on apps containing sensitive information). The settings() method must be called before any Firestore interaction is performed, otherwise it will only take effect on the next app launch:

```ts
import { firebase } from '@nativescript/firebase-core';
firebase().firestore().settings.persistence = false;

```

## License

Apache License Version 2.0
