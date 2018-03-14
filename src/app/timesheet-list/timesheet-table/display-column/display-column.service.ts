import { Injectable, ChangeDetectorRef } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { shareReplay, startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DisplayColumnService {
  private mobileDisplayColumns = [
    'date',
    'startTime',
    'endTime',
    // 'project',
    'createdBy',
  ];
  private computerDisplayColumns = [
    'date',
    'startTime',
    'endTime',
    'project',
    'createdBy'
    // TODO: add more attributes
  ];
  private _displayColumns = new BehaviorSubject<Array<string>>(this.computerDisplayColumns);
  private update = new Subject();
  constructor(
    private media: ObservableMedia,
  ) {
      media.asObservable()
      .subscribe((change: MediaChange) => {
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

  get displayColumns(): Observable<Array<string>> {
    return this._displayColumns.asObservable();
  }

}
