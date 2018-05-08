import { Injectable, ChangeDetectorRef } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { shareReplay, startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Timesheet } from '../../../interfaces/timesheet';
import { PersonTag } from '../../../interfaces/person-tag';
@Injectable()
export class DisplayColumnService {
  private mobileDisplayColumns = [
    'date',
    'startTime',
    'endTime',
    // 'project',
    'createdBy'
  ];
  private computerDisplayColumns = [
    'date',
    'startTime',
    'endTime',
    'project',
    'createdBy'
    // TODO: add more attributes
  ];
  private _displayColumns = new BehaviorSubject<Array<string>>(
    this.computerDisplayColumns
  );
  private update = new Subject();
  constructor(private media: ObservableMedia) {
    media.asObservable().subscribe((change: MediaChange) => {
      // console.log('changes', change.mqAlias);
      switch (change.mqAlias) {
        case 'xs':
        case 'sm':
          this._displayColumns.next(this.mobileDisplayColumns);
          break;
        case 'md':
        case 'lg':
        case 'xl':
        default:
          this._displayColumns.next(this.computerDisplayColumns);
      }
    });
  }
  private validCol(col: string): boolean {
    return this.computerDisplayColumns.indexOf(col) > -1;
  }
  private getExistingDisplayValue(timesheet: Timesheet, col: string): string {
    const value = timesheet[col];
    switch (col) {
      case 'date':
        return this.displayDate(value);
      case 'startTime':
      case 'endTime':
        return this.displayTime(value);
      case 'project':
        return this.displayProject(value);
      case 'createdBy':
        return this.displayUser(value);
      default:
        return value;
    }
  }
  // TODO: update
  private displayDate(date: string): string {
    return date;
  }
  // TODO: update to handle military time options, based upon user settings.
  // right now just return time by default
  private displayTime(time: string): string {
    return time;
  }
  // TODO: update how the project object is saved
  private displayProject(project: any): string {
    return project;
  }
  private displayUser(user: PersonTag): string {
    return user.email;
  }
  get displayColumns(): Observable<Array<string>> {
    return this._displayColumns.asObservable();
  }

  getDisplayValue(timesheet: Timesheet, col: string): string {
    return this.validCol(col)
      ? timesheet[col]
        ? this.getExistingDisplayValue(timesheet, col)
        : 'N/A'
      : '';
  }
}
