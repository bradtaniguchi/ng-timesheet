import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamListRoutingModule } from './team-list-routing.module';
import { TeamListComponent } from './team-list.component';

@NgModule({
  imports: [
    CommonModule,
    TeamListRoutingModule
  ],
  declarations: [TeamListComponent]
})
export class TeamListModule { }
