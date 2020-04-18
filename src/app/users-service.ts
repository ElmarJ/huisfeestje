import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users$ = this.db.list<User>('/users').valueChanges();
  private usersSnapshots$ = this.db.list<User>('/users').snapshotChanges();

  constructor(public db: AngularFireDatabase, public auth: AngularFireAuth) { }

  getUsers() {
    return this.users$;
  }

  getUsersWithId() {
    return this.usersSnapshots$.pipe(map(
      snapshots => snapshots.map(
        snapshot => {
          const user = snapshot.payload.val();
          user.uid = snapshot.key;
          return user;
        }
      )
    ));
  }

  getUsersSortedByPoints() {
     let users$ = this.getUsersWithId();
     users$ = users$.pipe(map(this.sortByPoints));
     return users$;
  }

  sortByPoints(users: User[]) {
    const sorted = users.sort((user1, user2) => user2.points - user1.points);
    return sorted;
  }

  getUsersSortedByName() {
    let users$ = this.getUsersWithId();
    users$ = users$.pipe(map(this.sortByName));
    return users$;
  }

  sortByName(users: User[]) {
    const sorted = users.sort(this.nameSorter);
    return sorted;
  }

  nameSorter(user1: User, user2: User) {
    const name1 = user1.name.toLowerCase();
    const name2 = user2.name.toLowerCase();
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  }

}
