import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  user$: Observable<firebase.User>;
  currentUser: firebase.User;
  profilePicStyles: {};

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user$ = afAuth.authState;
    this.user$.subscribe((user: firebase.User) => {
      console.log(user);

      if (user) { // User is signed in!
        this.currentUser = user;
        this.profilePicStyles = {
          'background-image': `url(${this.currentUser.photoURL})`
        };
      }
    });
  }

  ngOnInit(): void {
  }

  async login() {
    let auth = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.currentUser = auth.user;
    let userRef = this.db.database.ref("/users/" + this.currentUser.uid);
    userRef.child("name").set(this.currentUser.displayName);

    let pointsSnapshot = await userRef.child('points').once('value');
    if(!pointsSnapshot.exists()) {
      userRef.child('points').set(0);
    }
  }

  logout() {
    this.afAuth.signOut();
  }

}
