import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetTableComponent } from './timesheet-table.component';
import {
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DisplayColumnService } from './display-column/display-column.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [TimesheetTableComponent],
  declarations: [TimesheetTableComponent],
  providers: [
    DisplayColumnService
  ]
})
export class TimesheetTableModule { }
