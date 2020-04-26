import { RoomInfo } from '../../rooms/room-info';
import { UsersService } from '../../users/users-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../users/user';

@Component({
  selector: 'app-ranglijst',
  templateUrl: './ranglijst.component.html',
  styleUrls: ['./ranglijst.component.css']
})
export class RanglijstComponent {
  constructor(public userService: UsersService) { }
  users$ = this.userService.getUsers('points');
}
