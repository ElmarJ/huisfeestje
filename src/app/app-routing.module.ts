import { PointEditorComponent } from './point-editor/point-editor.component';
import { RoomComponent } from './room/room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeurDichtComponent } from './deur-dicht/deur-dicht.component';
import { VoordeurComponent } from './voordeur/voordeur.component';


const routes: Routes = [
  { path: '',   redirectTo: '/voordeur', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'punten-geven', component: PointEditorComponent },
  { path: ':urlName',      component: RoomComponent },
  { path: 'voordeur', component: VoordeurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
