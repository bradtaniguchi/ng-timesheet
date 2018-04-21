import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetViewRoutingModule } from './timesheet-view-routing.module';
import { TimesheetViewComponent } from './timesheet-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TimesheetViewRoutingModule,

    // angular material
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [TimesheetViewComponent]
})
export class TimesheetViewModule {}
