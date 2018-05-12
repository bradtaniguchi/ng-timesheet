import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
/**
 * The SearchbarStoreService handles the state for the searchbar.
 *
 * @export
 * @class SearchbarStoreService
 */
@Injectable()
export class SearchBarStoreService {
  private _searchShown = new Subject<boolean>();
  private _search = new Subject<string>();
  constructor() {}

  /**
   * Returns if the search bar is shown in the UI.
   */
  isSearchShown(): Observable<boolean> {
    return this._searchShown.asObservable();
  }

  /**
   * Returns the search information
   */
  search(): Observable<string> {
    return this._search.asObservable();
  }

  /**
   * Emits the search observable, with the given searchString
   * @param searchString the string we are to emit for the search
   */
  emitSearch(searchString: string): void {
    this._search.next(searchString);
  }

  /**
   * Emits the search observable, but with an empty string query.
   */
  emitClear(): void {
    this._search.next('');
  }
  /**
   * Emits the is search shown observable with false, and we clear the search.
   */
  emitClose(): void {
    this._searchShown.next(false);
    this.emitClear();
  }
  /**
   * Emits the search shown observable with the given state
   * @param state the state the search should be
   */
  emitOpenedState(state: boolean): void {
    state ? this.emitOpen() : this.emitClose();
  }
  /**
   * Emits the is search shown observable, with true.
   */
  emitOpen(): void {
    this._searchShown.next(true);
  }
}
