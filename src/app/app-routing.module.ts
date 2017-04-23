import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyLogComponent } from './daily-log.component';

/*import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';*/

const routes: Routes = [
  { path: '', redirectTo: '/DailyLog', pathMatch: 'full' },
  { path: 'DailyLog/:date', component: DailyLogComponent },
  { path: '**', component: DailyLogComponent }/*
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
*/];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}