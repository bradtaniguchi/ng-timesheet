import { Injectable } from '@angular/core';

/**
 * TODO: refactor this service to just provide some constants, rather than functions.
 */
@Injectable()
/**
 * NavService provides public functions for all routes within the application.
 */
export class NavService {
  constructor() {
    console.log('navService class created');
  }

  /**
   * Shows the user the landing page
   */
  public root(): string {
    return `/`;
  }

  /**
   * Shows the given sheet
   * @param id the id of the sheet to lookup
   */
  public sheet(id: string): string {
    return `sheet${id}`;
  }

  /**
   * Shows the timesheet form, but with no ID, thus we will create a new timesheet.
   */
  public newSheet() {
    return `sheet`;
  }
  /**
   * Shows all timesheets the user has access to
   */
  public sheetList(): string {
    return `sheets`;
  }
  /**
   * Shows the page of all the teams the user currently has access to (at the top)
   * and allows the user to search for other teams.
   */
  public teamList(): string {
    return `/teams`;
  }

  /**
   * Shows the admin page of the given team. This page is shown only to users with
   * admin access to the team.
   */
  public team(id: string): string {
    return `/teams/${id}`;
  }

  /**
   * Shows the list of teams the current user has access to.
   */
  public myTeams(): string {
    return `/me/teams`; // the me path will be expanded upon from the user-profile feature
  }
}
