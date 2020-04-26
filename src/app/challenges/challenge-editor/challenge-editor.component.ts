import { ChallengeCreateDialogComponent } from './../challenge-create-dialog/challenge-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChallengeService } from './../challenge-service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../challenge';

@Component({
  selector: 'app-challenge-editor',
  templateUrl: './challenge-editor.component.html',
  styleUrls: ['./challenge-editor.component.css']
})
export class ChallengeEditorComponent implements OnInit {
  challenges$ = this.challengeService.challenges$;
  selectedChallenge: Challenge;
  constructor(private challengeService: ChallengeService, private newChallengeDialog: MatDialog) { }

  ngOnInit() {
  }

  onSelect(challenge: Challenge) {
    this.selectedChallenge = challenge;
  }
  onAdd() {
    this.newChallengeDialog.open(ChallengeCreateDialogComponent);
  }
}
