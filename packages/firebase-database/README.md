<!-- vscode-markdown-toc -->
* 1. [Intro](#Intro)
* 2. [Installation](#Installation)
* 3. [Use @nativescript/firebase-database](#Usenativescriptfirebase-database)
	* 3.1. [Import the plugin](#Importtheplugin)
	* 3.2. [Create a database instance](#Createadatabaseinstance)
	* 3.3. [Get or create a reference](#Getorcreateareference)
	* 3.4. [Reading data](#Readingdata)
	* 3.5. [One-time read](#One-timeread)
	* 3.6. [Listen to real-time changes in a reference](#Listentoreal-timechangesinareference)
	* 3.7. [Remove the real-time changes event listener](#Removethereal-timechangeseventlistener)
	* 3.8. [Additional events](#Additionalevents)
	* 3.9. [Data querying](#Dataquerying)
	* 3.10. [Ordering data](#Orderingdata)
	* 3.11. [Limit the number of results](#Limitthenumberofresults)
	* 3.12. [Writing data](#Writingdata)
		* 3.12.1. [Setting data](#Settingdata)
		* 3.12.2. [Updating data](#Updatingdata)
	* 3.13. [Pushing data](#Pushingdata)
		* 3.13.1. [Removing data](#Removingdata)
	* 3.14. [Save data as transactions](#Savedataastransactions)
* 4. [API](#API)
	* 4.1. [Database class](#Databaseclass)
		* 4.1.1. [Properties](#Properties)
		* 4.1.2. [Methods](#Methods)
	* 4.2. [Reference](#Reference)
		* 4.2.1. [Properties](#Properties-1)
		* 4.2.2. [Methods](#Methods-1)
		* 4.2.3. [OnDisconnect class](#OnDisconnectclass)
	* 4.3. [Query class](#Queryclass)
		* 4.3.1. [Properties](#Properties-1)
		* 4.3.2. [Methods](#Methods-1)
	* 4.4. [DataSnapShot class](#DataSnapShotclass)
		* 4.4.1. [Properties](#Properties-1)
		* 4.4.2. [Methods](#Methods-1)
	* 4.5. [EventType](#EventType)
	* 4.6. [TransactionResult](#TransactionResult)
* 5. [License](#License)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc --># @nativescript/firebase-database


##  1. <a name='Intro'></a>Intro

A plugin that allows you to add [Firebase Realtime Databse](https://firebase.google.com/docs/database) to your NativeScript app.
> **Note:** Use this plugin with the [@nativescript/firebase-core](../firebase-core/) plugin to initialize Firebase.
 NativeScript Firebase provides integration with the Android & iOS Firebase SDKs, supporting both realtime data sync and offline capabilities.

[![image](https://img.youtube.com/vi/U5aeM5dvUpA/hqdefault.jpg)](https://www.youtube.com/watch?v=U5aeM5dvUpA)


##  2. <a name='Installation'></a>Installation
Install the plugin by running the following command in the root directory of your project.

```cli
npm install @nativescript/firebase-database
```

##  3. <a name='Usenativescriptfirebase-database'></a>Use @nativescript/firebase-database

>**Note** The [Firebase documentation](https://firebase.google.com/docs/database/web/structure-data) provides great examples of best practices on how to structure your data. We highly recommend reading the guide before building out your database.

###  3.1. <a name='Importtheplugin'></a>Import the plugin

Make the Realtime Database SDK available to your app by importing it once, in the `app.ts` file.

```ts
import '@nativescript/firebase-database'; // only needs to be imported 1x
```

###  3.2. <a name='Createadatabaseinstance'></a>Create a database instance

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


###  3.3. <a name='Getorcreateareference'></a>Get or create a reference

A core concept to understanding Realtime Database is references - a reference to a specific node within your database. A node can be a specific property or sub-nodes.

To create a [Reference](#reference), call the `ref` method on the database instance passing it the path of the reference:

```ts
import { firebase } from '@nativescript/firebase-core';

const reference = firebase().database().ref('/users/123');
```

###  3.4. <a name='Readingdata'></a>Reading data

The Realtime Data provides the ability to read the value of a reference as a one-time read or read real-time changes to the node. When a value is read from the database, `ref` returns a [DataSnapshot](#datasnapshot-class).

The snapshot includes information such as whether the reference node exists, the reference's value or any children the node has, and more.

###  3.5. <a name='One-timeread'></a>One-time read

To read the value once, call the `once` method on a reference passing it the `value` event name:

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

###  3.6. <a name='Listentoreal-timechangesinareference'></a>Listen to real-time changes in a reference 

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

###  3.7. <a name='Removethereal-timechangeseventlistener'></a>Remove the real-time changes event listener

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

###  3.8. <a name='Additionalevents'></a>Additional events

The above example demonstrates how to subscribe to events whenever a value within the node changes. In some cases, you may need to only subscribe to events whenever a child node is added/changed/moved/removed. This can be achieved by passing any of [EventType](#eventtype) values to the `on` method.

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

###  3.9. <a name='Dataquerying'></a>Data querying

Realtime Database provides support for basic querying of your data. When a reference node contains children, you can both order & limit the returned results.

If your application requires more advanced query capabilities, it is recommended you use Cloud Firestore.

###  3.10. <a name='Orderingdata'></a>Ordering data

By default, results are ordered based on the node keys. However, if you are using custom keys you can order your data by calling one of the `orderBy*` methods a [Query](#query-class) instance.

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
###  3.11. <a name='Limitthenumberofresults'></a>Limit the number of results

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

###  3.12. <a name='Writingdata'></a>Writing data

Use the `set` or `update` method to write data to the database.

####  3.12.1. <a name='Settingdata'></a>Setting data

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

####  3.12.2. <a name='Updatingdata'></a>Updating data

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

###  3.13. <a name='Pushingdata'></a>Pushing data

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

####  3.13.1. <a name='Removingdata'></a>Removing data

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

###  3.14. <a name='Savedataastransactions'></a>Save data as transactions

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

##  4. <a name='API'></a>API
###  4.1. <a name='Databaseclass'></a>Database class
The database class has the following members.
####  4.1.1. <a name='Properties'></a>Properties

| Property | Type | Description
|----------|------|------------
| `android` | `any`| _readonly_
| `ios` | `any`| _readonly_
| `app` | `FirebaseApp`| _readonly_
| `persistenceCacheSizeBytes` | `number` |
| `persistenceEnabled`| `boolean`|

####  4.1.2. <a name='Methods'></a>Methods
| Method | Returns | Description
|----------|------|------------
| `constructor(app?: FirebaseApp)` | `void` |
| `useEmulator(host: string, port: number)`| `void` |
| `refFromURL(url: string)`| [Reference](#reference) |
| `setLoggingEnabled(enabled: boolean)`| `void` |
| `ref(path?: string)` | [Reference](#reference)|
| `goOffline()` | `void`|
| `goOnline()` | `void`|

###  4.2. <a name='Reference'></a>Reference

####  4.2.1. <a name='Properties-1'></a>Properties

| Property | Type | Description
|----------|------|------------
| `android` | `any`| _readonly_
| `ios` | `any`| _readonly_
| `key` | `string`| _readonly_
| `parent` | `Reference`| _readonly_
| `ref` | `Reference`| _readonly_
| `root` | `Reference`| _readonly_

####  4.2.2. <a name='Methods-1'></a>Methods
| Method | Returns 
|----------|------
| `child(path: string)` | `Reference` 
| `onDisconnect()` | [OnDisconnect](#ondisconnect-class) 
| `push(value?: any, onComplete?: () => void)` | `IThenableReference` 
| `remove(onComplete?: (error: FirebaseError) => void)` | `Promise<void>` 
| `set(value: any, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` 
| `setPriority(priority: string | number, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` 
| `setWithPriority(newVal: any, newPriority: string | number, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` 
| `transaction(transactionUpdate: (currentData: object) => object, onComplete?: (error: FirebaseError, committed: boolean, finalResult: any) => void, applyLocally: boolean = true)` | Promise<[TransactionResult](#transactionresult)> 
| `update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` 

####  4.2.3. <a name='OnDisconnectclass'></a>OnDisconnect class

##### Properties

| Property | Type | Description
|----------|------|------------
| `android` | `any`| _readonly_
| `ios` | `any`| _readonly_

##### Methods

| Method | Returns | Description
|----------|------|------------
| `cancel(onComplete?: (error: FirebaseError) => void)` | `Promise<void>` |
| `remove(onComplete?: (error: FirebaseError) => void)` | `Promise<void>` |
| `set(value: any, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` |
| `setWithPriority(value: any, priority: string | number, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` |
| `update(values: { [key: string]: any }, onComplete?: (error: FirebaseError) => void)` | `Promise<void>` |

###  4.3. <a name='Queryclass'></a>Query class
####  4.3.1. <a name='Properties-1'></a>Properties
| Property | Type | Description
|----------|------|------------
| `android` | `any`| _readonly_
| `ios` | `any`| _readonly_
| `ref` | [Reference](#reference) | 

####  4.3.2. <a name='Methods-1'></a>Methods
| Method | Returns | Description
|----------|------|------------
| `endAt(value: string | number | boolean, key?: string)` | `Query` |
| `equalTo(value: string | number | boolean, key?: string)` | `Query` | 
| `keepSynced(bool: boolean)` |
| `limitToFirst(limit: number)` | `Query` |
| `limitToLast(limit: number)` | `Query` |
| `off(eventType?: EventType, callback?: (a: DataSnapshot, b: string) => void, context?: Record<string, any>)` | `void` |
| `on(eventType: EventType, callback: (data: DataSnapshot, previousChildKey: string) => void, cancelCallbackOrContext?: (a: FirebaseError) => void | Record<string, any>, context?: Record<string, any>)` | `(a: DataSnapshot, b: string) => void` |
| `once(eventType: EventType, successCallback?: (a: DataSnapshot, b: string) => any, failureCallbackContext?: (a: FirebaseError) => void | Record<string, any>): Promise<DataSnapshot>` |
| `orderByChild(path: string)` | `Query` |
| `orderByKey()` | `Query` |
| `orderByPriority()` | `Query` |
| `orderByValue()` | `Query` |
| `startAt(value: string | number | boolean, key?: string)` | `Query` |

###  4.4. <a name='DataSnapShotclass'></a>DataSnapShot class

####  4.4.1. <a name='Properties-1'></a>Properties

| Property | Type | Description
|----------|------|------------
| `android` | `any`| _readonly_
| `ios` | `any`| _readonly_
| `key` | `string`| _readonly_
| `ref` | `Reference`| _readonly_

####  4.4.2. <a name='Methods-1'></a>Methods
| Method | Returns | Description
|----------|------|------------
| `child(path: string)` | `DataSnapshot` | 
| `exists()` | `boolean` | 
| `exportVal()` | `void` | 
| `forEach(action: (child: DataSnapshot) => true)` | `boolean` | 
| `getPriority()` | `string \| number` | 
| `hasChild(path: string)` | `boolean` | 
| `hasChildren()` | ` boolean` | 
| `numChildren()` | ` number` | 
| `val()` | `void` | 

###  4.5. <a name='EventType'></a>EventType
The EventType consists can be any of the following event names:
- `'value'`
- `'child_added'` 
- `'child_changed'`
- `'child_moved'` 
- `'child_removed'`

###  4.6. <a name='TransactionResult'></a>TransactionResult
| Property | Type
|----------|-----
| `snapshot` | [DataSnapshot](#datasnapshot-class)
| `committed` | `boolean`

##  5. <a name='License'></a>License

Apache License Version 2.0
