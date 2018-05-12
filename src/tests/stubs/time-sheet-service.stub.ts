import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TimesheetService } from '../../app/services/timesheet/timesheet.service';
import { Timesheet } from '../../app/interfaces/timesheet';
@Injectable()
export class TimeSheetServiceStub {
  constructor() {}
  getDefault() {
    return {};
  }

  get(): Observable<Array<Timesheet>> {
    return observableOf([]);
  }
  create() {
    return observableOf({});
  }
  update() {
    return observableOf({});
  }
  remove() {
    return observableOf({});
  }
  getOne() {
    return observableOf({});
  }
}
