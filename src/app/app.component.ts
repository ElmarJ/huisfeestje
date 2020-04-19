import { SnackbarService } from './snackbar-service';
import { ChatService } from './chat-service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'huisfeestje';
  constructor(private snackBar: MatSnackBar, private chatService: ChatService, private snackBarService: SnackbarService) {}

  ngOnInit() {
    this.chatService.lastMessage$.subscribe(message => {
      this.snackBarService.sendMessage(message.name + ': ' + message.text);
    });
    this.snackBarService.lastMessage$.subscribe(text => {
        this.snackBar.open(text, '', {duration: 3000});
    });
  }
}
