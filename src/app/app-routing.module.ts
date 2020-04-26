import { AdminConsoleComponent } from './admin/admin-console/admin-console.component';
import { RoomEditorComponent } from './rooms/room-editor/room-editor/room-editor.component';
import { ChatboxComponent } from './chat/chatbox/chatbox.component';
import { PointEditorComponent } from './points/point-editor/point-editor.component';
import { RoomComponent } from './rooms/room/room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeurDichtComponent } from './rooms/deur-dicht/deur-dicht.component';
import { VoordeurComponent } from './rooms/voordeur/voordeur.component';
import { ResultsEditorComponent } from './results/results-editor/results-editor.component';


const routes: Routes = [
  { path: '',   redirectTo: '/voordeur', pathMatch: 'full' },
  { path: 'baas', component: AdminConsoleComponent},
  { path: 'eindstand-invoeren', component: ResultsEditorComponent},
  { path: 'kamers-bewerken', component: RoomEditorComponent},
  { path: 'punten-geven', component: PointEditorComponent },
  { path: 'chat', component: ChatboxComponent},
  { path: ':urlName',      component: RoomComponent },
  { path: 'voordeur', component: VoordeurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
