import { Injectable } from '@angular/core';

@Injectable()
/**
 * NavService provides public functions for all routes within the application.
 */
export class NavService {

  constructor() {
    console.log('navService class created');
  }

  public root() {
    return `/`;
  }

  /**
   * Shows the given sheet
   * @param id the id of the sheet to lookup
   */
  public sheets(id: string) {
    return `/sheet${id}`;
  }

  public sheet() {
    return `/sheet`;
  }
  /**
   * Shows all timesheets
   */
  public list() {
    return `/list`;
  }
}
