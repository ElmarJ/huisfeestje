import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './users-service';
import { AngularFireDatabase, ChildEvent } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private messages = this.fireDB.list('/messages');
  constructor(
    private fireDB: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private userService: UsersService) {
    }

  async addMessage(message: string) {
    const user = await this.fireAuth.currentUser;
    if (user) {
      const messages = this.messages;
      messages.push({
        name: user.displayName,
        text: message,
        photoUrl: user.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL,
        timestamp:  firebase.database.ServerValue.TIMESTAMP
      });
    }
  }

  newMessage() {
    return this.messages.stateChanges(['child_added']).pipe(map((action) => action.payload.val() as any));
  }
}
