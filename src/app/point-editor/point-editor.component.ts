import { ChatService } from './../chat-service';
import { RoomInfo } from './../room-info';
import { UsersService } from './../users-service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { User } from '../user';
import { Observable } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-point-editor',
  templateUrl: './point-editor.component.html',
  styleUrls: ['./point-editor.component.css']
})
export class PointEditorComponent implements OnInit {
  users$: Observable<User[]>;
  hoeveelFormControl = new FormControl();
  aanwieFormControl = new FormControl();
  waaromFormControl = new FormControl();
  constructor(public usersService: UsersService, private database: AngularFireDatabase, private chatService: ChatService) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsersSortedByName();
  }

  async geefPuntenNu() {
    const aantal: number = this.hoeveelFormControl.value;
    const users: User[] = this.aanwieFormControl.value;
    const waarom: string = this.waaromFormControl.value;

    for (const user of users) {
      const remotePoints = this.database.object<number>('users/' + user.uid + '/points');
      remotePoints.valueChanges().pipe(first()).subscribe(currentPoints => { remotePoints.set(currentPoints + aantal); });
    }
    const names = users.map(user => user.name);
    this.chatService.addMessage('Ik heb '+ names.join(', ') + ' ' + aantal + ' punten gegeven: ' + waarom);
  }

}
