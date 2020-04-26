import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    // signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //    firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    // tosUrl: '/',
    // Privacy policy url/callback.
    privacyPolicyUrl() {
      window.location.assign('');
    },
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        this.dialogRef.close(authResult);
        this.authUi.delete();
        return false;
      }
    }
  };
  authUi = new firebaseui.auth.AuthUI(firebase.auth());
  constructor(private afAuth: AngularFireAuth, public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit(): void {
    this.authUi.start('#firebaseui-auth-container', this.uiConfig);
  }
}
