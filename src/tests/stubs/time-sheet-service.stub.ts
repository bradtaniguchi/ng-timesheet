import { Injectable } from '@angular/core';
import { TimesheetService } from '../../app/services/timesheet/timesheet.service';
import { Timesheet } from '../../app/interfaces/timesheet';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TimeSheetServiceStub {
  constructor() { }
  getDefault() {
    return {};
  }

  get(): Observable<Array<Timesheet>> {
    return Observable.of([]);
  }
  create() {
    return Observable.of();
  }
  update() {
    return Observable.of();
  }
}
