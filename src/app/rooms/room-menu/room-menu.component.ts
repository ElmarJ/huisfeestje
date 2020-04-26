import { Observable } from 'rxjs';
import { RoomService } from '../room-service';
import { AngularFireAuth } from '@angular/fire/auth';
import { RoomInfo } from '../room-info';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-room-menu',
  templateUrl: './room-menu.component.html',
  styleUrls: ['./room-menu.component.css']
})
export class RoomMenuComponent implements OnChanges {
  @Input() currentRoom: RoomInfo;
  linkedRooms$: Observable<RoomInfo[]>;
  constructor(public db: AngularFireDatabase, public auth: AngularFireAuth, public roomService: RoomService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateRoom();
  }

  async updateRoom() {
    this.linkedRooms$ = this.roomService.getConnectedRooms(this.currentRoom);
    const user = await this.auth.currentUser;
    this.db.database.ref('/users/' + user.uid + '/room').set(this.currentRoom.urlName);
  }
}
