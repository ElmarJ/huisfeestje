import { Component, OnInit, Input } from '@angular/core';
import { RoomInfo } from '../../room-info';
import { RoomService } from '../../room-service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-create-dialog',
  templateUrl: './room-create-dialog.component.html',
  styleUrls: ['./room-create-dialog.component.css']
})
export class RoomCreateDialogComponent implements OnInit {
  room = new RoomInfo('', '', '', '', []);
  rooms$ = this.roomService.getRooms();

  constructor(private roomService: RoomService, private dialogRef: MatDialogRef<RoomCreateDialogComponent>) { }

  ngOnInit() {
  }

  onSave() {
    this.roomService.updateRoom(this.room);
    this.dialogRef.close();
  }
  onCancel() {
    this.dialogRef.close();
  }

}
