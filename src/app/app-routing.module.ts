import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/sheets',
        pathMatch: 'full'
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
        path: 'view/:id',
        loadChildren:
          'app/timesheet-view/timesheet-view.module#TimesheetViewModule'
      },
      {
        path: 'team/:id',
        loadChildren: 'app/team/team.module#TeamModule'
      },
      {
        path: 'teams',
        loadChildren: 'app/team-list/team-list.module#TeamListModule'
      }
    ]
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
