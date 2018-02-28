import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { Timesheet } from '../../interfaces/timesheet';
import { DocumentReference } from '@firebase/firestore-types';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TimesheetService {
  private timesheetCollection: AngularFirestoreCollection<Timesheet>;
  private timesheets: Observable<Array<Timesheet>>;
  private noIdMessage = 'No Sheet id provided';
  constructor(
    private fireDb: AngularFirestore,
    private authService: AuthService
  ) {
    this.timesheetCollection = this.fireDb.collection<Timesheet>('timesheets');
  }

  /**
   * Gets the timesheets for the given user
   * @param user The user to get the timesheets for
   * TODO: use the user information to get the timesheets the user creates. We can update
   * this to also take in arguments for the user's roles
   */
  get(): Observable<Array<Timesheet>> {
    if (!this.timesheets) {
      this.timesheets = this.authService.user
        .switchMap((user) => {
          return this.timesheetCollection.valueChanges();
        });
    }
    return this.timesheets.share();
  }

  /**
   * Creates the sheet in the firestore database
   * @param sheet the sheet to create
   * @param user the user we want to add the sheet for
   * TODO: add the project information argument.
   */
  create(sheet: Timesheet): Observable<DocumentReference> {
    return this.authService.user
    .switchMap((user) => {
      sheet.id = this.fireDb.createId();
      sheet.createdBy = user.uid;
      return this.timesheetCollection.add(sheet);
    });
  }

  /**
   * Updates the given sheet in the firestore database
   * @param sheet the sheet to update
   */
  update(sheet: Timesheet): Observable<void | Error> {
    if (sheet.id) {
      return Observable.fromPromise(this.timesheetCollection.doc(sheet.id).update(sheet));
    }
    return Observable.of(new Error(this.noIdMessage));
  }

  /**
   * Removes the given sheet in the firestore database.
   * @param sheet the sheet to remove
   */
  remove(sheet: Timesheet): Observable<void | Error> {
    if (sheet.id) {
      return Observable.fromPromise(this.timesheetCollection.doc(sheet.id).delete());
    }
    return Observable.of(new Error(this.noIdMessage));
  }
}
