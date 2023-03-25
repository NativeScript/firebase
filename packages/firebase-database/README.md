# @nativescript/firebase-database

## Intro

A plugin that allows you to add [Firebase Realtime Databse]() to your NativeScript app.
> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase.

The Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. NativeScript Firebase provides integration with the Android & iOS Firebase SDKs, supporting both realtime data sync and offline capabilities.

[![image](https://img.youtube.com/vi/U5aeM5dvUpA/hqdefault.jpg)](https://www.youtube.com/watch?v=U5aeM5dvUpA)

To learn more, view the [Firebase Realtime Database documentation](https://firebase.google.com/docs/database?utm_source=nativescript&utm_medium=nativescript-firebase&utm_campaign=database).

## Installation
Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-database
```

## Use @nativescript/firebase-database

>**Note** The [Firebase documentation](https://firebase.google.com/docs/database/web/structure-data) provides great examples of best practices on how to structure your data. We highly recommend reading the guide before building out your database.

### Import the plugin

Make the Realtime Database SDK available to your app by importing it once, in the `app.ts` file.

```ts
import '@nativescript/firebase-database'; // only needs to be imported 1x
```

### Create a database instance

To create a new Firebase Database instance, call the `database` method on the firebase instance as follows:

```ts
import { firebase } from '@nativescript/firebase-core';

const database = firebase().database();
```

By default, this allows you to interact with Firebase Database using the default Firebase App used whilst installing Firebase on your platform. If however you'd like to use a secondary Firebase App, pass the secondary app instance when calling the database method:

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-database';

// create secondary app instance
const config = new FirebaseOptions();
const secondaryApp = firebase.initializeApp(config, 'SECONDARY_APP');

const database = firebase().database(secondaryApp);
```


### References

A core concept to understanding Realtime Database is references - a reference to a specific node within your database. A node can be a specific property or sub-nodes.

To create a Reference, call the `ref` method on the database instance:

```ts
import { firebase } from '@nativescript/firebase-core';

const reference = firebase().database().ref('/users/123');
```

### Reading data

The Realtime Data provides the ability to read the value of a reference as a one-time read or read real-time changes to the node. When a value is read from the database, the API returns a [DataSnapshot]().

The snapshot includes information such as whether the reference node exists, the reference's value or any children the node has, and more.

### One-time read

To read the value once, call the `once` method on a reference:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.database()
	.ref('/users/123')
	.once('value')
	.then((snapshot) => {
		console.log('User data: ', snapshot.val());
	});
```

### Listen to real-time changes in a reference 

To set up an active listener to react to any changes to the node and its children, call the `on` method passing it the `value` event as the first parameter and the event handler as the second paramater:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.database()
	.ref('/users/123')
	.on('value', (snapshot) => {
		console.log('User data: ', snapshot.val());
	});
```

The event handler will be called straight away with the snapshot data, and further called when any changes to the node occur.

### Remove the real-time changes event listener

 To unsubscribe from the `value` event, call the `off` method with the function that the `on` method returned. This can be used within any useEffect hooks to automatically unsubscribe when the hook needs to unsubscribe itself:

```ts
import { firebase } from '@nativescript/firebase-core';

const onValueChange = firebase()
	.database()
	.ref(`/users/${userId}`)
	.on('value', (snapshot) => {
		console.log('User data: ', snapshot.val());
	});

// Stop listening for updates when no longer required
firebase().database().ref(`/users/${userId}`).off('value', onValueChange);
```

### Additional events

The above example demonstrates how to subscribe to events whenever a value within the node changes. In some cases, you may need to only subscribe to events whenever a child node is added/changed/moved/removed. This can be achieved by passing a different [EventType]() to the `on` method.

If you are listening to a node with many children, only listening to data you care about helps reduce network bandwidth and speeds up your application.

```ts
import { firebase } from '@nativescript/firebase-core';

const onChildAdd = firebase()
	.database()
	.ref('/users')
	.on('child_added', (snapshot) => {
		console.log('A new node has been added', snapshot.val());
	});

// Stop listening for updates when no longer required
firebase().database().ref('/users').off('child_added', onChildAdd);
```

### Data querying

Realtime Database provides support for basic querying of your data. When a reference node contains children, you can both order & limit the returned results.

If your application requires more advanced query capabilities, it is recommended you use Cloud Firestore.

### Ordering data

By default, results are ordered based on the node keys. However, if you are using custom keys you can order your data by calling one of the `orderBy*` methods a [Query]() instance.

For example, if all of the children nodes are scalar values (string, number or boolean) you can use the `orderByValue` method, and Firebase will automatically order the results. The example below would return the `def` node before the `abc` node:

```ts
import { firebase } from '@nativescript/firebase-core';

/*
 * {
 *   'scores': {
 *     'abc: 30,
 *     'def': 50,
 *   }
 * }
 */

const scores = await firebase().database().ref('scores').orderByValue().once('value');
```

Please note that the ordering will not be respected if you do not use the forEach method provided on the DataSnapshot.

```ts
scores.forEach((snapShot)=>{
	// do someting
})
```
### Limit the number of results

You can limit the number of results returned from a query by using one of the `limitTo*` methods. For example, to limit to the first 10 results, you call the `limitToFirst(10)` on the reference:

```ts
import { firebase } from '@nativescript/firebase-core';

const users = firebase().database().ref('users').limitToFirst(10).once('value');
```

Firebase also provides the ability to return the last set of results in a query via the `limitToLast` method.

Instead of limiting to a specific number of documents, you can also start from, or end at a specific reference node value:

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().database().ref('users').orderByChild('age').startAt(21).once('value');
```

### Writing data

Use the `set` or `update` method to write data to the database.

#### Setting data

The `set` method on a Reference overwrites all of the existing data at that reference node. The value can be anything; a string, number, object etc:

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.database()
	.ref('/users/123')
	.set({
		name: 'Ada Lovelace',
		age: 31,
	})
	.then(() => console.log('Data set.'));
```

If you set the value to `null`, Firebase will automatically class the node as removed, and delete it from the database.

#### Updating data

Rather than overwriting all existing data, the update method provides the ability to update any existing data on the reference node. Firebase will automatically merge the data depending on what currently exists.

```ts
import { firebase } from '@nativescript/firebase-core';

firebase()
	.database()
	.ref('/users/123')
	.update({
		age: 32,
	})
	.then(() => console.log('Data updated.'));
```

### Pushing data

The example above only demonstrated working with known reference node keys (e.g. `/users/123`). In some cases, you may not have a suitable id or may want Firebase to automatically create a node with a generated key. The `push` method returns a ThenableReference, allowing you to observe a node before it is sent to a remote Firebase database.

The `push` method automatically generates a new key if one is not provided:

```ts
import { firebase } from '@nativescript/firebase-core';

const newReference = firebase().database().ref('/users').push();

console.log('Auto generated key: ', newReference.key);

newReference
	.set({
		age: 32,
	})
	.then(() => console.log('Data updated.'));
```

The keys generated are ordered to the current time, so the list of items returned from Firebase will be chronologically sorted by default.

#### Removing data

To remove data, you can call the `remove` method on a reference:

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().database().ref('/users/123').remove();
```

Optionally, you can also set the value of a reference node to null to remove it from the database:

```ts
import { firebase } from '@nativescript/firebase-core';

await firebase().database().ref('/users/123').set(null);
```

### Save data as transactions

Transactions are a way to always ensure a write occurs with the latest information available on the server. Transactions never partially apply writes & all writes execute at the end of a successful transaction.

Imagine a scenario where an app can "like" user posts. Whenever a user presses the "Like" button, the `/likes/:postId` value (number of likes) on the database increments. Without transactions, we'd first need to read the existing value and then increment that value in two separate operations.

On a high-traffic application, the value on the server could already have changed by the time the operation sets a new value, causing the actual number to not be consistent.

Transactions remove this issue by atomically updating the value on the server. If the value changes whilst the transaction is executing, it will retry. This always ensures the value on the server is used rather than the client value.

To execute a new transaction, call the `transaction` method on a reference:

```ts
import { firebase } from '@nativescript/firebase-core';

function onPostLike(postId) {
	const reference = firebase().database().ref(`/likes/${postId}`);

	// Execute transaction
	return reference.transaction((currentLikes) => {
		if (currentLikes === null) return 1;
		return currentLikes + 1;
	});
}

// When post "567" is liked
onPostLike('567').then((transaction) => {
	console.log('New post like count: ', transaction.snapshot.val());
});
```

## License

Apache License Version 2.0
