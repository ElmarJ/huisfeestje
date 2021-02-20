import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from '../users/users-service';
import { AngularFireDatabase, ChildEvent } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database'
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
  private lastMessage = this.fireDB.list<ChatMessage>('/messages', ref => ref.limitToLast(1));

  lastMessage$ = this.lastMessage.stateChanges(['child_added']).pipe(map((action) => action.payload.val()));

  async addMessage(messageText: string, currentRoom?: string) {
    const messages = this.messages;
    const user = await this.fireAuth.currentUser;
    messages.push(new ChatMessage(
      messageText,
      user?.displayName || 'Anoniempje',
      null,
      user?.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL,
      firebase.database.ServerValue.TIMESTAMP,
      currentRoom
      ));
  }
}
