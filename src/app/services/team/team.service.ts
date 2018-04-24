import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Team } from '../../interfaces/team';
import { switchMap } from 'rxjs/operators';
import { LogService } from '../../interfaces/log-service';

@Injectable()
export class TeamService implements LogService {
  private teamCollection: AngularFirestoreCollection<Team>;
  private teams: Observable<Array<Team>>;
  constructor(
    private fireDb: AngularFirestore,
    private authService: AuthService
  ) {
    this.teamCollection = this.fireDb.collection<Team>('teams');
  }

  getOne(id: string): Observable<Team> {
    return id
      ? <any>this.fireDb
          .collection<Team>('teams')
          .doc(id)
          .valueChanges()
      : Observable.throw(new Error('No id defined'));
  }

  get(update?: boolean) {
    if (!this.teams || update) {
      this.teams = this.authService.user.pipe(
        switchMap(user => {
          return (
            this.fireDb
              // TODO: define how we return the search information.
              .collection<Team>('teams')
              .valueChanges()
          );
        })
      );
    }
    // TODO: verify the share is correct and doesn't make bugs!
    return this.teams.share();
  }
  // TODO: add us
  getLogs(documentId: string): Observable<Array<any>> {
    return Observable.of([]);
  }
  addLog(documentId: string, log: any): any {}
}
