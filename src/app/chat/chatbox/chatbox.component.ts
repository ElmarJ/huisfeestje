import { ChatMessage } from '../chat-message';
import { SnackbarService } from '../../snackbar-service';
import { ChatService } from '../chat-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

const LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';
const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  user: Observable<firebase.User>;
  currentUser: firebase.User;
  messages$ = this.db.list<ChatMessage>('/messages', ref => ref.limitToLast(6)).valueChanges();
  profilePicStyles: {};
  topics = '';
  value = '';

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private chatService: ChatService,
    private snackbarService: SnackbarService
    ) {
        this.messages$.subscribe((messages) => {
          setTimeout(() => {
            const messageList = document.getElementById('messages');
            messageList.scrollTop = messageList.scrollHeight;
            document.getElementById('message').focus();
          }, 500);
    });
  }

  update(value: string) {
    this.value = value;
  }

  // Returns true if user is signed-in. Otherwise false and displays a message.
  checkSignedInWithMessage() {
    // Return true if the user is signed in Firebase
    if (this.currentUser) {
      return true;
    }
/*
    this.snackBar
      .open('You must sign-in first', 'Sign in', {
        duration: 5000
      })
      .onAction()
      .subscribe(() => this.login());
*/

    return false;
  }

  saveMessage(event: any, el: HTMLInputElement) {
    event.preventDefault();
    this.chatService.addMessage(this.value);
  }

  // TODO: Refactor into image message form component
  async saveImageMessage(event: any) {
    event.preventDefault();
    const file = event.target.files[0];

    // Clear the selection in the file picker input.
    const imageForm = document.getElementById('image-form') as HTMLFormElement;
    imageForm.reset();

    // Check if the file is an image.
    if (!file.type.match('image.*')) {
      this.snackbarService.sendMessage('Je mag alleen plaatjes uploaden!');
      return;
    }

      // We add a message with a loading icon that will get updated with the shared image.
    const messages = this.db.list('/messages');
    const data = await messages.push({
        name: ' ',
        imageUrl: LOADING_IMAGE_URL,
        photoUrl: ' '
      });

    // Upload the image to Cloud Storage.
    const filePath = `${data.key}/${file.name}`;
    const snapshot = await firebase.storage().ref(filePath).put(file);
    const url = await snapshot.ref.getDownloadURL();
    data.update({ imageUrl: url });
  }

  // TODO: Refactor into image message form component
  onImageClick(event: any) {
    event.preventDefault();
    document.getElementById('mediaCapture').click();
  }
}
