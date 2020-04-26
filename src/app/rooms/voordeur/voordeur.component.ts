import { RoomInfo } from '../room-info';
import { RoomService } from '../room-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-voordeur',
  templateUrl: './voordeur.component.html',
  styleUrls: ['./voordeur.component.css']
})
export class VoordeurComponent implements OnInit {
  public currentRoom$: Observable<RoomInfo>;
  constructor(roomService: RoomService) {
    this.currentRoom$ = roomService.getRoom('voordeur');
  }
  ngOnInit(): void {

  }

}
