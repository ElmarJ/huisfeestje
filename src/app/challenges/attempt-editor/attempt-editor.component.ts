import { ChallengeService } from './../challenge-service';
import { ChallengeAttempt } from './../challenge-attempt';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-attempt-editor',
  templateUrl: './attempt-editor.component.html',
  styleUrls: ['./attempt-editor.component.css']
})
export class AttemptEditorComponent implements OnInit {
  @Input() public attempt: ChallengeAttempt;
  constructor(private challengeService: ChallengeService, private storage: AngularFireStorage) { }
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  ngOnInit(): void {
  }

  onSave() {
    this.challengeService.updateChallengeAttempt(this.attempt);
  }

  onPlayerAdd(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.attempt.participants.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  onPlayerRemove(player: string): void {
    const index = this.attempt.participants.indexOf(player);

    if (index >= 0) {
      this.attempt.participants.splice(index, 1);
    }
  }

  async onUploadPhoto(event) {
    const file = event.target.files[0];
    const filePath = `photos/${this.attempt.id}/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    const snapshot = await firebase.storage().ref(filePath).put(file);
    const url = await snapshot.ref.getDownloadURL();
    this.attempt.photoUrls.push(url);
  }
}
