import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { SprintsComponent } from './components/sprints/sprints.component';

const routes: Routes = [

  {path: 'sprints' , component: SprintsComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: '' , component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
