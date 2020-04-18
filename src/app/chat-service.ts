import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './users-service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(
    private fireDB: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private userService: UsersService) {}

  async addMessage(message: string) {
    const user = await this.fireAuth.currentUser;
    if (user) {
      const messages = this.fireDB.list('/messages');
      messages.push({
        name: user.displayName,
        text: message,
        photoUrl: user.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL,
        timestamp:  firebase.database.ServerValue.TIMESTAMP
      });
    }
  }
}
