import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { AuthService } from '../auth/auth.service';
import { AuthServiceStub } from '../../../tests/stubs/auth-service.stub';
import { AngularFirestoreMock } from '../../../tests/mock/angular-firestore.mock';
import { AngularFirestore } from 'angularfire2/firestore';

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
});
