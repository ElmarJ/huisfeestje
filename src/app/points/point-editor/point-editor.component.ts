import { ChatService } from '../../chat/chat-service';
import { RoomInfo } from '../../rooms/room-info';
import { UsersService } from '../../users/users-service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { User } from '../../users/user';
import { Observable } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-point-editor',
  templateUrl: './point-editor.component.html',
  styleUrls: ['./point-editor.component.css']
})
export class PointEditorComponent {
  users$ = this.usersService.getUsers('name');
  hoeveelFormControl = new FormControl();
  aanwieFormControl = new FormControl();
  waaromFormControl = new FormControl();
  constructor(public usersService: UsersService, private database: AngularFireDatabase, private chatService: ChatService) { }

  async geefPuntenNu() {
    const aantal: number = this.hoeveelFormControl.value;
    const users: User[] = this.aanwieFormControl.value;
    const waarom: string = this.waaromFormControl.value;

    for (const user of users) {
      const remotePoints = this.database.object<number>('users/' + user.uid + '/points');
      remotePoints.valueChanges().pipe(first()).subscribe(currentPoints => { remotePoints.set(currentPoints + aantal); });
    }
    const names = users.map(user => user.name);
    this.chatService.addMessage('Ik heb ' + names.join(', ') + ' ' + aantal + ' punten gegeven: ' + waarom);
  }
}
