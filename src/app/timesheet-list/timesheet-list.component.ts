import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { Timesheet } from '../interfaces/timesheet';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styles: []
})
export class TimesheetListComponent implements OnInit, OnDestroy {
  timesheets: Observable<Array<Timesheet>>;
  private takeUntil = new Subject();
  constructor(
    private timesheetService: TimesheetService
  ) { }

  ngOnInit() {
    this.timesheets = this.timesheetService.get();
  }

  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
}
