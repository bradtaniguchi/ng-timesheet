import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { scan } from 'rxjs/operators';
@Injectable()
export class NavbarStoreService {
  private _searchShown = new Subject<boolean>();
  private _searchState = false;
  constructor() { }

  get searchShown(): Observable<boolean> {
    return this._searchShown
    .asObservable()
    .do((state) => state);
  }

  /**
   * Shows the search or not
   * @param shown If we are to show the search
   */
  public search(show: boolean): void {
    this._searchShown.next(show);
  }
  /**
   * Toggles the current Subject state
   */
  public toggle(): void {
    this._searchShown.next(!this._searchState);
  }

}
