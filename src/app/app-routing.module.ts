import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinComponent } from './join/join.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: '', component: JoinComponent },
  { path: 'room', component: RoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
