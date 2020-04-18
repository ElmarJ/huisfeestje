import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoChatRoomComponent } from './video-chat-room/video-chat-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { environment } from '../environments/environment';
import { RoomMenuComponent } from './room-menu/room-menu.component';
import { RoomComponent } from './room/room.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { StylizePipe } from './stylize.pipe';
import { DeurDichtComponent } from './deur-dicht/deur-dicht.component';
import { RadioPlayerComponent } from './radio-player/radio-player.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpdrachtenOverzichtComponent } from './opdrachten-overzicht/opdrachten-overzicht.component';
import { RanglijstComponent } from './ranglijst/ranglijst.component';
import { PointEditorComponent } from './point-editor/point-editor.component';
import { RoomEditorComponent } from './room-editor/room-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoChatRoomComponent,
    RoomMenuComponent,
    RoomComponent,
    ChatboxComponent,
    StylizePipe,
    DeurDichtComponent,
    RadioPlayerComponent,
    AuthenticateComponent,
    OpdrachtenOverzichtComponent,
    RanglijstComponent,
    PointEditorComponent,
    RoomEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFirePerformanceModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
