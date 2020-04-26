import { RoomService } from './../../rooms/room-service';
import { Component, Input, OnChanges } from '@angular/core';
import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge-service';
import { ChallengeAttempt } from '../challenge-attempt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-challenge-details-editor',
  templateUrl: './challenge-details-editor.component.html',
  styleUrls: ['./challenge-details-editor.component.css']
})
export class ChallengeDetailsEditorComponent implements OnChanges {
  @Input() challenge: Challenge;
  challenges$ = this.challengeService.challenges$;
  rooms$ = this.roomService.getRooms();
  attempts$: Observable<ChallengeAttempt[]>;

  constructor(private challengeService: ChallengeService, private roomService: RoomService) { }

  ngOnChanges(): void {
    if (this.challenge)
    {
      this.attempts$ = this.challengeService.getChallengeAttempts(this.challenge);
    }
  }

  onSave() {
    this.challengeService.updateChallenge(this.challenge);
  }

  onAddAttempt() {
    this.challengeService.addAttempt(new ChallengeAttempt(this.challengeService.getNewChallengeId(), this.challenge.id, [], [], 0));
  }

}
