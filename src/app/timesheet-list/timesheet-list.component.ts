import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { Timesheet } from '../interfaces/timesheet';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../interfaces/user';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styles: []
})
export class TimesheetListComponent implements OnInit, OnDestroy {
  timesheets: Observable<Array<Timesheet>>;
  selection = new SelectionModel(true, []);
  private takeUntil = new Subject();
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }

  onSelectionChange(timesheet: Timesheet) {
    this.selection.toggle(timesheet);
  }
}
