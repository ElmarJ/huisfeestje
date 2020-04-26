import { map, filter } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoomInfo } from './room-info';

@Injectable({ providedIn: 'root' })
export class RoomService {

  constructor(private fireDB: AngularFireDatabase) { }

  getRooms(): Observable<RoomInfo[]> {
    const roomsConnection = this.fireDB.list<RoomInfo>('rooms');
    return roomsConnection.valueChanges();
  }

  getRoom(urlName: string): Observable<RoomInfo> {
    const roomConnection = this.fireDB.object<RoomInfo>('rooms/' + urlName);
    return roomConnection.valueChanges();
  }

  getConnectedRooms(room: RoomInfo): Observable<RoomInfo[]> {
    return this.getRooms().pipe(map(rooms => rooms.filter(filterRoom => room.linkedRooms.includes(filterRoom.urlName))));
  }

  updateRoom(room: RoomInfo) {
    const remoteRoom = this.fireDB.object<RoomInfo>('rooms/' + room.urlName);
    remoteRoom.update(room);
  }
}
