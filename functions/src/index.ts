import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const onRoomChange = functions.database.ref('/users/{userId}/room').onUpdate(async (snapshot, context) => {
  const roomsRef = admin.database().ref('rooms');
  const oldRoomName = snapshot.before.val();
  const newRoomName = snapshot.after.val();

  return roomsRef.transaction(
    rooms => {
      if(rooms) {
        rooms[oldRoomName].visitors = rooms[oldRoomName].visitors - 1;
        rooms[newRoomName].visitors = rooms[newRoomName].visitors + 1;
      }
      return rooms;
    });
  });
