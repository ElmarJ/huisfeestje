import { Assignment } from './assignment';
import { Player } from '../players/player';
export class Attempt {
  constructor(
    public assignment: Assignment,
    public players: Player[],
    public proofText: string,
    public proofImageUrl: string,
    public points: number,
    public argument: number,
  ) {}
}
