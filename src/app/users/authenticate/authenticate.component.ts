import { UsersService } from '../users-service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebaseui from 'firebaseui';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  profilePicStyles: {};

  constructor(public auth: AngularFireAuth, private db: AngularFireDatabase, public dialog: MatDialog, private usersService: UsersService) {
    this.auth.user.subscribe((user: firebase.User) => {
      console.log(user);

      if (user) { // User is signed in!
        this.profilePicStyles = {
          'background-image': `url(${user.photoURL})`
        };
      }
    });
  }

  ngOnInit(): void {
    this.auth.user.subscribe(async user => {
      if (!user) {
        await this.auth.signInAnonymously();
        await this.usersService.initializeDbCurrentUser();
      }
    });
  }

  async login() {
    const dialog = this.dialog.open(LoginDialogComponent, {
      height: '350px',
      width: '300px',
    });
    await dialog.afterClosed().toPromise();
    this.usersService.initializeDbCurrentUser();
  }

  logout() {
    this.auth.signOut();
  }

}
