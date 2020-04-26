import { ChallengeService } from './../../challenges/challenge-service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoomInfo } from '../room-info';
import { Challenge } from 'src/app/challenges/challenge';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-opdrachten-overzicht',
  templateUrl: './opdrachten-overzicht.component.html',
  styleUrls: ['./opdrachten-overzicht.component.css']
})
export class OpdrachtenOverzichtComponent implements OnChanges {
  constructor(private challengeService: ChallengeService) { }
  @Input() public room: RoomInfo;

  public challenges$: Observable<Challenge[]>;

  ngOnChanges(changes: SimpleChanges) {
    this.challenges$ = this.challengeService.getRoomChallenges(this.room);
  }

}
