import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-players-editor',
  templateUrl: './players-editor.component.html',
  styleUrls: ['./players-editor.component.css']
})
export class PlayersEditorComponent implements OnInit {
  private playerCollection = this.firestore.collection<Player>('players');
  public players$ = this.playerCollection.valueChanges({idField: 'id'});
  newPlayerNameInput = new FormControl('');
  public selectedPlayer: Player;

  constructor(public firestore: AngularFirestore, public newPlayerDialog: MatDialog, ) {}

  ngOnInit(): void {
    this.players$.subscribe(players => this.selectedPlayer = players[0])
  }

  onCreatePlayer() {
    const name = this.newPlayerNameInput.value;
    // this.playerCollection.add();
  }

  onSelect(player: Player) {
    this.selectedPlayer = player;
  }
}
