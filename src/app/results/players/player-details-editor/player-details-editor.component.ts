import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-details-editor',
  templateUrl: './player-details-editor.component.html',
  styleUrls: ['./player-details-editor.component.css']
})
export class PlayerDetailsEditorComponent implements OnInit {
  @Input() public player: Player;
  playerEditForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {
    this.playerEditForm = this.formBuilder.group(this.player);
   }

  ngOnInit(): void {
  }

  onSubmit(player: Player) {
//    this.firestore.collection<Player>('players').doc(player.id).update(player);
  }

}
