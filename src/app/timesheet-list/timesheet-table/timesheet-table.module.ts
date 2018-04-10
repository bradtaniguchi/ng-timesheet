import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetTableComponent } from './timesheet-table.component';
import {
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DisplayColumnService } from './display-column/display-column.service';
import { PaginationService } from './pagination/pagination.service';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [TimesheetTableComponent],
  declarations: [TimesheetTableComponent],
  providers: [
    DisplayColumnService,
    PaginationService
  ]
})
export class TimesheetTableModule { }
