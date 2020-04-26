import { RoomCreateDialogComponent } from './../room-create-dialog/room-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RoomService } from './../../room-service';
import { RoomInfo } from './../../room-info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-editor',
  templateUrl: './room-editor.component.html',
  styleUrls: ['./room-editor.component.css']
})
export class RoomEditorComponent implements OnInit {

  rooms$ = this.roomService.getRooms();
  selectedRoom: RoomInfo;
  constructor(private roomService: RoomService, private newRoomDialog: MatDialog) { }

  ngOnInit() {
  }

  onSelect(room: RoomInfo) {
    this.selectedRoom = room;
  }
  onAdd() {
    this.newRoomDialog.open(RoomCreateDialogComponent);
  }

}
