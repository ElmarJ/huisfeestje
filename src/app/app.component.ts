import { ChatService } from './chat-service';
import { RoomInfo } from './room-info';
import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'huisfeestje';
  constructor(private snackBar: MatSnackBar, private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.newMessage().subscribe(
      message => {
        this.snackBar.open(
          message.name + ': ' + message.text, '', {
            duration: 3000
          });
      }
    )
  }
}
