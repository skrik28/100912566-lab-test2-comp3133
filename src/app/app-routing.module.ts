// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: 'missions', component: MissionlistComponent },
  { path: 'mission/:flight_number', component: MissiondetailsComponent }, // Route parameter
  { path: '', redirectTo: '/missions', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/missions' } // Wildcard route (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
