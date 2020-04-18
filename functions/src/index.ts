import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const onRoomChange = functions.database.ref('/users/{userId}/room').onUpdate(async (snapshot, context) => {
// TODO: write as transaction https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions

  const oldRoomName = <string>snapshot.before.val();
  const newRoomName = <string>snapshot.after.val();
  const oldRoomCountRef = admin.database().ref("/rooms/" + oldRoomName + "/visitors");
  const newRoomCountRef = admin.database().ref("/rooms/" + newRoomName + "/visitors");

  let oldRoomVisitorsCount = 1;
  let newRoomVisitorsCount = 0;


  const oldRoomSnapshot = await oldRoomCountRef.once('value');
  if (oldRoomSnapshot.exists()) {
    oldRoomVisitorsCount = oldRoomSnapshot.val();
  }
  await oldRoomCountRef.set(oldRoomVisitorsCount - 1);

  const newRoomSnapshot = await newRoomCountRef.once('value');
  if (newRoomSnapshot.exists()) {
    newRoomVisitorsCount = newRoomSnapshot.val();
  }

  await newRoomCountRef.set(newRoomVisitorsCount + 1);
});
