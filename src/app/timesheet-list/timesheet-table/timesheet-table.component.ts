import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { TimesheetTableDataSource } from './timesheet-table-data-source';
import { DataSource } from '@angular/cdk/table';
import { TimesheetService } from '../../services/timesheet/timesheet.service';
import { DisplayColumnService } from './display-column/display-column.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil, take } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Timesheet } from '../../interfaces/timesheet';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';
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

  orderBy = new BehaviorSubject<string>('updatedOn');
  limit = new BehaviorSubject<number>(5);
  // startAfter = new BehaviorSubject<number>(1);
  // endAt = new BehaviorSubject<number>(5);
  currentPage = 0;
  private takeUntil = new Subject();
  constructor(
    private timesheetService: TimesheetService,
    private displayColumnService: DisplayColumnService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataSource = new TimesheetTableDataSource(
      this.timesheetService,
      this.orderBy,
      this.limit,
      // this.startAfter,
      // this.endAt
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
  getDisplayValue(timesheet: Timesheet, col: string, ) {
    return this.displayColumnService.getDisplayValue(timesheet, col);
  }

  /**
   * Routes the user to the edit page to edit the timesheet
   * @param timesheet the timesheet we will edit
   */
  edit(timesheet: Timesheet): void {
    this.router.navigate(['../sheet', timesheet.id]);
  }

  remove(timesheet: Timesheet): void {
    this.timesheetService.remove(timesheet)
    .pipe(
      takeUntil(this.takeUntil),
      take(1)
    )
    .subscribe(
      (res) => {
        // TODO: show snackbar
      },
      (err) => {
        // TODO: show snackbar
      },
    );
  }
}
