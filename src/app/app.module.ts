import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoChatRoomComponent } from './media/video-chat-room/video-chat-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { environment } from '../environments/environment';
import { RoomMenuComponent } from './rooms/room-menu/room-menu.component';
import { RoomComponent } from './rooms/room/room.component';
import { ChatboxComponent } from './chat/chatbox/chatbox.component';
import { DeurDichtComponent } from './rooms/deur-dicht/deur-dicht.component';
import { RadioPlayerComponent } from './media/radio-player/radio-player.component';
import { AuthenticateComponent } from './users/authenticate/authenticate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpdrachtenOverzichtComponent } from './rooms/opdrachten-overzicht/opdrachten-overzicht.component';
import { RanglijstComponent } from './points/ranglijst/ranglijst.component';
import { PointEditorComponent } from './points/point-editor/point-editor.component';
import { RoomDescriptionViewerComponent } from './rooms/room-description-viewer/room-description-viewer.component';
import { VoordeurComponent } from './rooms/voordeur/voordeur.component';
import { LoginDialogComponent } from './users/login-dialog/login-dialog.component';
import {NgPipesModule} from 'ngx-pipes';
import { ResultsEditorComponent } from './results/results-editor/results-editor.component';
import { PlayersEditorComponent } from './results/players/players-editor/players-editor.component';
import { PlayerDetailsEditorComponent } from './results/players/player-details-editor/player-details-editor.component';
import { AssignmentEditorComponent } from './results/assignments/assignment-editor/assignment-editor.component';
import { AssignmentDetailsEditorComponent } from './results/assignments/assignment-details-editor/assignment-details-editor.component';
import { AssignmentAttemptEditorComponent } from './results/assignments/assignment-attempt-editor/assignment-attempt-editor.component';
import { RoomEditorComponent } from './rooms/room-editor/room-editor/room-editor.component';
import { RoomDetailsEditorComponent } from './rooms/room-editor/room-details-editor/room-details-editor.component';
import { RoomCreateDialogComponent } from './rooms/room-editor/room-create-dialog/room-create-dialog.component';
import { AdminConsoleComponent } from './admin/admin-console/admin-console.component';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { ChallengeEditorComponent } from './challenges/challenge-editor/challenge-editor.component';
import { AttemptEditorComponent } from './challenges/attempt-editor/attempt-editor.component';
import { ChallengeDetailsEditorComponent } from './challenges/challenge-details-editor/challenge-details-editor.component';
import { ChallengeCreateDialogComponent } from './challenges/challenge-create-dialog/challenge-create-dialog.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    VideoChatRoomComponent,
    RoomMenuComponent,
    RoomComponent,
    ChatboxComponent,
    DeurDichtComponent,
    RadioPlayerComponent,
    AuthenticateComponent,
    OpdrachtenOverzichtComponent,
    RanglijstComponent,
    PointEditorComponent,
    RoomEditorComponent,
    RoomDescriptionViewerComponent,
    VoordeurComponent,
    LoginDialogComponent,
    ResultsEditorComponent,
    PlayersEditorComponent,
    PlayerDetailsEditorComponent,
    AssignmentEditorComponent,
    AssignmentDetailsEditorComponent,
    AssignmentAttemptEditorComponent,
    RoomDetailsEditorComponent,
    RoomCreateDialogComponent,
    AdminConsoleComponent,
    ChallengeComponent,
    ChallengeEditorComponent,
    AttemptEditorComponent,
    ChallengeDetailsEditorComponent,
    ChallengeCreateDialogComponent
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
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    NgPipesModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
