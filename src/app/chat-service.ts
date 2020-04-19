import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './users-service';
import { AngularFireDatabase, ChildEvent } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { ChatMessage } from './chat-message';

const PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(
    private fireDB: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private userService: UsersService) {}

  private messages = this.fireDB.list<ChatMessage>('/messages');
  lastMessage$ = this.messages.stateChanges(['child_added']).pipe(map((action) => action.payload.val()));

  async addMessage(messageText: string) {
    const messages = this.messages;
    const user = await this.fireAuth.currentUser;
    messages.push(new ChatMessage(
      messageText,
      user?.displayName || 'Anoniempje',
      null,
      user?.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL,
      firebase.database.ServerValue.TIMESTAMP));
  }
}
