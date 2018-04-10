import { Injectable, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { Timesheet } from '../../interfaces/timesheet';
import { DocumentReference, CollectionReference, Query } from '@firebase/firestore-types';
import { AuthService } from '../auth/auth.service';
import { toCommonDate } from '../../common/to-common-date';
import { getTimeFromDate } from '../../common/get-time-from-date';
import { SearchParams } from '../../interfaces/search-params';
import { QueryConfig } from '../../interfaces/query-config';
import { DEFAULT_QUERY_CONFIG } from '../../constants/default-query-config';



@Injectable()
export class TimesheetService {
  private timesheetCollection: AngularFirestoreCollection<Timesheet>;
  private timesheets: Observable<Array<Timesheet>>;
  private noIdMessage = 'No Sheet id provided';
  constructor(
    @Inject(DEFAULT_QUERY_CONFIG) private defaultQueryConfig: QueryConfig,
    // TODO: add config for default timesheet
    private fireDb: AngularFirestore,
    private authService: AuthService,
  ) {
    this.timesheetCollection = this.fireDb.collection<Timesheet>('timesheets');
  }

  private getTimeFromDate(date: Date): string {
    return getTimeFromDate(date);
  }
  /**
   * The buildQuery function builds the query based on the user's information
   * and passed configurations based on the searchParams passed to the get function.
   * @param queryConfig the query we will make, this should be build from some of
   * the searchParams and the user's information.
   */
  private buildQuery(queryConfig: QueryConfig): Query {
    // only get our timesheets
    return queryConfig.ref.where('createdBy.uid', '==', queryConfig.user.uid)
    .orderBy(queryConfig.orderBy || 'id') // TODO: set more sane defaults
    .startAfter(queryConfig.startAfter || 1)
    .limit(queryConfig.limit || 15);
  }
  /**
   * Gets the default timesheet we can use for the input fields.
  */
  getDefault(): Timesheet {
    return {
      date: toCommonDate(new Date()),
      startTime: this.getTimeFromDate(new Date()),
      endTime: this.getTimeFromDate(new Date()),
      breakTime: 1,
      workType: '',
      team: '',
      project: '',
      description: ''
    };
  }
  /**
   * Gets the timesheets for the given user
   * @param user The user to get the timesheets for
   * TODO: use the user information to get the timesheets the user creates. We can update
   * this to also take in arguments for the user's roles
   */
  get(searchParams: SearchParams, update?: boolean): Observable<Array<Timesheet>> {
    if (!this.timesheets || update) {
      this.timesheets = this.authService.user
        .switchMap((user) => {
          console.log('test in switchMap: ', searchParams);
          return this.fireDb.collection<Timesheet>('timesheets', ref => this.buildQuery({
            ref,
            user,
            orderBy: searchParams.orderBy || this.defaultQueryConfig.orderBy,
            startAfter: searchParams.startAfter || this.defaultQueryConfig.startAfter,
            limit: searchParams.limit || this.defaultQueryConfig.limit,
          })).valueChanges();
        });
    }
    return this.timesheets;
  }

  /**
   * Creates the sheet in the firestore database
   * @param sheet the sheet to create
   * @param user the user we want to add the sheet for
   * TODO: add the project information argument.
   */
  create(sheet: Timesheet): Observable<void> {
    return this.authService.user
    .switchMap((user) => {
      sheet.id = this.fireDb.createId();
      sheet.createdBy = {
        name: user.displayName,
        email: user.email,
        uid: user.uid
      };
      sheet.updatedOn = new Date().getTime();
      sheet.createdOn = new Date().getTime();
      return this.timesheetCollection.doc(sheet.id).set(sheet, {
        merge: true
      });
    });
  }

  /**
   * Updates the given sheet in the firestore database
   * @param sheet the sheet to update
   */
  update(sheet: Timesheet): Observable<void> {
    if (sheet.id) {
      sheet.updatedOn = new Date().getTime();
      return Observable.fromPromise(this.timesheetCollection.doc(sheet.id).update(sheet));
    }
    return Observable.throw(new Error(this.noIdMessage));
  }

  /**
   * Removes the given sheet in the firestore database.
   * @param sheet the sheet to remove
   */
  remove(sheet: Timesheet): Observable<void> {
    if (sheet.id) {
      return Observable.fromPromise(this.timesheetCollection.doc(sheet.id).delete());
    }
    return Observable.throw(new Error(this.noIdMessage));
  }
}
