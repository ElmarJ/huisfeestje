import { RoomService } from './../../room-service';
import { RoomInfo } from './../../room-info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-details-editor',
  templateUrl: './room-details-editor.component.html',
  styleUrls: ['./room-details-editor.component.css']
})
export class RoomDetailsEditorComponent implements OnInit {
  @Input() room: RoomInfo;
  @Input() editRoomUrl = true;
  rooms$ = this.roomService.getRooms();

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }

  onSave() {
    this.roomService.updateRoom(this.room);
  }

}
