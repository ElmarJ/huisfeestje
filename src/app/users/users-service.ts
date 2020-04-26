import { Injectable, Pipe } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { User } from './user';
import { map, concatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(public db: AngularFireDatabase, public auth: AngularFireAuth) { }

  getUsers(sortField: string) {
    const userRemoteList = this.db.list<User>('/users', ref => ref.orderByChild(sortField));
    const snapshot$ = userRemoteList.snapshotChanges();
    return snapshot$.pipe(map(snapshots => snapshots.map(snapshot => {
      const user = snapshot.payload.val();
      user.uid = snapshot.key;
      return user;
    })));
  }

  getUser(uid: string) {
    const remoteUserObject = this.db.object<User>('users/' + uid);
    return remoteUserObject.valueChanges();
  }

  getCurrentUser() {
    const authUser$ = this.auth.user;
    return authUser$.pipe(concatMap(authUser => this.getUser(authUser.uid)));
  }

  async initializeDbCurrentUser() {
    const authUser = await this.auth.currentUser;
    const userRef = this.db.database.ref('users/' + authUser.uid);
    const snapshot = await userRef.once('value');

    if (!snapshot.exists() || !snapshot.val().uid) {
      userRef.child('uid').set(authUser.uid);
    }

    if (!snapshot.exists() || !snapshot.val().name || snapshot.val().name === '') {
      userRef.child('name').set(authUser.displayName);
    }

    if (!snapshot.exists() || !snapshot.val().points) {
      userRef.child('points').set(0);
    }

    if (!snapshot.exists() || !snapshot.val().room || snapshot.val().room === '' ) {
      userRef.child('room').set('voordeur');
    }
  }
}
