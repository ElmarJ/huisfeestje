import { PointEditorComponent } from './point-editor/point-editor.component';
import { RoomComponent } from './room/room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeurDichtComponent } from './deur-dicht/deur-dicht.component';


const routes: Routes = [
  { path: '', component: DeurDichtComponent },
  { path: 'punten-geven', component: PointEditorComponent },
  { path: ':urlName',      component: RoomComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
