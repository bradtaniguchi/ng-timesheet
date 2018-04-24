import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamListRoutingModule } from './team-list-routing.module';
import { TeamListComponent } from './team-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamListItemComponent } from './team-list-item/team-list-item.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TeamListRoutingModule,

    // angular modules
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [TeamListComponent, TeamListItemComponent]
})
export class TeamListModule {}
