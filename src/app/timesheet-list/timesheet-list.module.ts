import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetListComponent } from './timesheet-list.component';
import {
  MatTableModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TimesheetTableModule } from './timesheet-table/timesheet-table.module';

@NgModule({
  imports: [
    CommonModule,

    // angular material
    FlexLayoutModule,
    TimesheetTableModule
  ],
  exports: [TimesheetListComponent],
  declarations: [TimesheetListComponent]
})
export class TimesheetListModule {}
