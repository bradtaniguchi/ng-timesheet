import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { TimesheetTableDataSource } from './timesheet-table-data-source';
import { DataSource } from '@angular/cdk/table';
import { TimesheetService } from '../../services/timesheet/timesheet.service';
import { DisplayColumnService } from './display-column/display-column.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Timesheet } from '../../interfaces/timesheet';
@Component({
  selector: 'app-timesheet-table',
  templateUrl: './timesheet-table.component.html',
  styles: []
})
export class TimesheetTableComponent implements OnInit, OnDestroy {
  @Input() selection: SelectionModel<Timesheet>;
  @Output() select = new EventEmitter();
  displayColumns: Array<string>;
  dataSource: TimesheetTableDataSource | null;
  private takeUntil = new Subject();
  constructor(
    private timesheetService: TimesheetService,
    private displayColumnService: DisplayColumnService
  ) { }

  ngOnInit() {
    this.dataSource = new TimesheetTableDataSource(
      this.timesheetService
    );
    this.displayColumnService.displayColumns
    .pipe(takeUntil(this.takeUntil))
    .subscribe((displayColumns) => {
      this.displayColumns = displayColumns;
    });
  }
  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }

}
