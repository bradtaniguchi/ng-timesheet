import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { scan } from 'rxjs/operators';
@Injectable()
export class SidenavStoreService {
  private _sidenavShown = new Subject<boolean>();
  private _sidenavState = false;
  constructor() { }

  get sidenavShown(): Observable<boolean> {
    return this._sidenavShown
    .asObservable();
  }

  /**
   * Shows the search or not
   * @param shown If we are to show the search
   */
  public setSidenav(show: boolean): void {
    this._sidenavShown.next(show);
  }
  /**
   * Toggles the current Subject state
   */
  public toggle(): void {
    this._sidenavShown.next(!this._sidenavState);
  }

}
