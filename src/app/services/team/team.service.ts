import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Team } from '../../interfaces/team';
import { switchMap, map, tap } from 'rxjs/operators';
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

  /**
   * fills the users object via reference
   * @param team the team we are modifying via reference
   * @param index the index of the team inside of the team array
   * @param teams the teams the team is located in
   */
  private fillUsers(team: Team, index: number, teams: Array<Team>): Team {
    if (team.usersMap) {
      team.users = [];
      Object.keys(team.usersMap).forEach((userId: string) =>
        team.users.push(userId)
      );
    }
    return team;
  }
  /**
   * Gets a single team
   * @param id the id of the team you want to get
   */
  getOne(id: string): Observable<Team> {
    return id
      ? <any>this.fireDb
          .collection<Team>('teams')
          .doc(id)
          .valueChanges()
      : Observable.throw(new Error('No id defined'));
  }

  /**
   * Gets a list of teams
   * @param params search params
   * @param update if we are to update the internal team observable.
   */
  get(params: any, update?: boolean): Observable<Array<Team>> {
    if (!this.teams || update) {
      this.teams = this.authService.user.pipe(
        switchMap(user => {
          return (
            this.fireDb
              // TODO: define how we return the search information.
              .collection<Team>('teams', ref =>
                ref.where(`users.${params.userId}`, '==', true)
              )
              .valueChanges()
          );
        }),
        tap((teams: Array<Team>) => teams.map(this.fillUsers.bind(this)))
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
