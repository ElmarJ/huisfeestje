import { RoomService } from './../../rooms/room-service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge-service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-challenge-create-dialog',
  templateUrl: './challenge-create-dialog.component.html',
  styleUrls: ['./challenge-create-dialog.component.css']
})
export class ChallengeCreateDialogComponent implements OnInit {

  challenge = new Challenge(this.challengeService.getNewChallengeId(), '', '', '', 0);
  challenges$ = this.challengeService.challenges$;
  rooms$ = this.roomService.getRooms();

  constructor(private challengeService: ChallengeService, private roomService: RoomService, private dialogRef: MatDialogRef<ChallengeCreateDialogComponent>) { }

  ngOnInit() {
  }

  onSave() {
    this.challengeService.addChallenge(this.challenge);
    this.dialogRef.close();
  }
  onCancel() {
    this.dialogRef.close();
  }

}
