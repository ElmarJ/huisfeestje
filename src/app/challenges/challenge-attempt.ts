import { DocumentReference } from '@angular/fire/firestore';
export class ChallengeAttempt {
  constructor(
    public id: string,
    public challengeId: string,
    public photoUrls: string[],
    public participants: string[],
    public awardedPoints: number
    ) {}
}
