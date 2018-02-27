import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'sheets',
    component: TimesheetListComponent
  },
  {
    path: 'sheet',
    component: TimesheetComponent
  },
  {
    path: 'sheet/:id',
    component: TimesheetComponent
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
