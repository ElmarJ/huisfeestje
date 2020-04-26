import { RoomInfo } from '../room-info';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-description-viewer',
  templateUrl: './room-description-viewer.component.html',
  styleUrls: ['./room-description-viewer.component.css']
})
export class RoomDescriptionViewerComponent implements OnInit {
  @Input() room: RoomInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
