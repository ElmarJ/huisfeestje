import { RoomInfo } from './../room-info';
import { UsersService } from './../users-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-ranglijst',
  templateUrl: './ranglijst.component.html',
  styleUrls: ['./ranglijst.component.css']
})
export class RanglijstComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsersSortedByPoints();
  }

}
