import {Observable, EventData, Page} from '@nativescript/core';
import {DemoSharedFirebaseFirestore} from '@demo/shared';
import {Firestore, GeoPoint} from '@nativescript/firebase-firestore';
import {Firebase} from "@nativescript/firebase-core";

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFirebaseFirestore {
  firestore: Firestore;

  constructor() {
    super();
    this.firestore = Firebase.firestore();
    this.firestore.collection('users')
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    const geo = new GeoPoint(10, -10);
    this.firestore.collection('geo')
      .add({
        thing: 'it',
        geo
      }).then((docRef) => {
      console.log("Geo Document written with ID: ", docRef.id);
    })
      .catch((error) => {
        console.error("Error adding geo document: ", error);
      });
  }
}
