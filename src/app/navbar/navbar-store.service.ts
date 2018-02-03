import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NavbarStoreService {
  private _searchShown = new ReplaySubject<boolean>();
  private _sidenavShown = new ReplaySubject<boolean>();
  constructor() { }

  get searchShown(): Observable<boolean> {
    return this._searchShown.asObservable();
  }

  /**
   * Shows the search or not
   * @param shown If we are to show the search
   */
  public search(show: boolean): void {
    this._searchShown.next(show);
  }

}
