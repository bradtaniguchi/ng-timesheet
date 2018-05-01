import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { AuthService } from '../auth/auth.service';
import { AuthServiceStub } from '../../../tests/stubs/auth-service.stub';
import { AngularFirestoreMock } from '../../../tests/mock/angular-firestore.mock';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

describe('TeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeamService,
        {
          provide: AuthService,
          useClass: AuthServiceStub
        },
        {
          provide: AngularFirestore,
          useClass: AngularFirestoreMock
        }
      ]
    });
  });

  it(
    'should be created',
    inject([TeamService], (service: TeamService) => {
      expect(service).toBeTruthy();
    })
  );
  describe('fillUsers', () => {
    it(
      'updates the users attribute of a team',
      inject(
        [TeamService, AngularFirestore],
        (service: TeamService, fireStore: AngularFirestore) => {
          // spyOn(fireStore, 'collection').and.returnValue(Observable.of());
          const team = {
            usersMap: {
              userIdOne: true,
              userIdTwo: true
            }
          };
          const result = (service as any).fillUsers(team, 0, [team]);
          // check to verify the usersMap object still exists and is the same
          expect(result.usersMap).toEqual({
            userIdOne: true,
            userIdTwo: true
          });
          // compare the contents of the users array returned, after we sort
          // as they can comeback in any order.
          expect(result.users.sort()).toEqual(
            ['userIdOne', 'userIdTwo'].sort()
          );
        }
      )
    );
  });
});
