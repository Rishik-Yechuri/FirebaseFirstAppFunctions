const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin')
admin.initializeApp();
const db = admin.firestore();
const app = express();
let FieldValue = admin.firestore.FieldValue;

exports.createUser = functions.https.onCall(async(data, context) => {
  const user = {
     "id": "QWSDRT039",
     "firstName": "Big",
     "lastName": "Bus"
  };
  const text = data.kids
  user.id = text
  await db.collection("users").doc(user.id).set(user);
  return Promise;
});

//input: userId; outpus: lastName



exports.getTheLastNamePlease = functions.https.onCall(async(data, context) => {
  if (!data.userId) {
    throw new functions.https.HttpsError("invalid-argument", "Missing user ID!");
  }
  let userId = data.userId;
const basic = {
    returnValue :"water"
 };
  await db
        .collection('users')
        .doc('petrolguy')
        .get()
        .then((doc) => {
          if (!doc.exists) {
              basic.returnValue = "water"
              /*return{
                  firstNumber: 'water'
                }*/
            throw new functions.https.HttpsError("invalid-argument", "User doesn't exist in db!");
          } else {
              basic.returnValue = doc.data().lastName
              return Promise
            /*return {
                firstNumber: doc.data().lastName
            }*/
          }
        });
        return {
            lastName : basic.returnValue
          };
            //const lastName = await db.collection("users").doc("petrolguy").data.lastName
            //return{lastName : lastName}
});

exports.deleteUser = functions.https.onCall(async(data, context) => {
  if (!data.userId) {
    throw new functions.https.HttpsError("invalid-argument", "Missing user ID!");
  }
  let cityRef = db.collection('users').doc('dieselguy');

// Remove the 'capital' field from the document
let removeCapital = cityRef.update({
  lastName: FieldValue.delete()
});
  /*let userId = data.userId;
const basic = {
    returnValue :"water"
 };
  await db
        .collection('users')
        .doc('petrolguy')
        .get()
        .then((doc) => {
          if (!doc.exists) {
              basic.returnValue = "water"
              /*return{
                  firstNumber: 'water'
                }*/
            //throw new functions.https.HttpsError("invalid-argument", "User doesn't exist in db!");
         /* } else {
              basic.returnValue = doc.data().lastName
              return Promise
            /*return {
                firstNumber: doc.data().lastName
            }*/
         // }
       // });*/
        /*return {
            lastName : basic.returnValue
          };*/
            //const lastName = await db.collection("users").doc("petrolguy").data.lastName
            //return{lastName : lastName}
});