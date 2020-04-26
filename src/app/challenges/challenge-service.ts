import { Attempt } from './../results/assignments/attempt';
import { RoomInfo } from './../rooms/room-info';
import { ChallengeAttempt } from './challenge-attempt';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Challenge } from './challenge';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
  constructor(
    private firestore: AngularFirestore
    ) {
    }

    private challengesConnection = this.firestore.collection<Challenge>('challenges');
    private attemptsConnection = this.firestore.collection<ChallengeAttempt>('attempts');

    public challenges$ = this.challengesConnection.valueChanges();
    public attempts$ = this.attemptsConnection.valueChanges();
    public challengeSnapshots$ = this.challengesConnection.snapshotChanges();
    public attemptsSnapshots$ = this.attemptsConnection.snapshotChanges();

    getRoomChallenges(room: RoomInfo) {
      return this.firestore.collection<Challenge>('challenges', ref => ref.where('room', '==', room.urlName )).valueChanges();
    }

    getChallengeAttempts(challenge: Challenge) {
      return this.firestore.collection<ChallengeAttempt>('attempts', ref => ref.where('challengeId', '==', challenge.id )).valueChanges();
    }

    getNewChallengeId() {
      return this.firestore.createId();
    }

    updateChallenge(challenge: Challenge){
      const remoteChallenge = this.challengesConnection.doc<Challenge>(challenge.id);
      remoteChallenge.update(Object.assign({}, challenge));
    }

    updateChallengeAttempt(attempt: ChallengeAttempt) {
      const remoteAttempt = this.attemptsConnection.doc<ChallengeAttempt>(attempt.id);
      remoteAttempt.update(Object.assign({}, attempt));
    }

    async addChallenge(challenge: Challenge) {
      this.challengesConnection.doc(challenge.id).set(Object.assign({}, challenge));
    }
    addAttempt(attempt: ChallengeAttempt) {
      this.attemptsConnection.doc(attempt.id).set(Object.assign({}, attempt));
    }

    getAttemptUsers(attempt: ChallengeAttempt) {

    }
}
