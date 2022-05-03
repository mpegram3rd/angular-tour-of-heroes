import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

// What view to display when a user clicks on a link or puts in a URL
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',  // :id indicates this is a placeholder for the id value.
    component: HeroDetailComponent
  },
  {
    path: 'heroes',  // String that matches the URL
    component: HeroesComponent  // Which component the router should create when going to the route
  },

];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
