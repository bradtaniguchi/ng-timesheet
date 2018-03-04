import { TestBed, inject } from '@angular/core/testing';

import { TimesheetService } from './timesheet.service';
import { AngularFireAuthMock } from '../../../tests/mock/angular-fire-auth.mock';
import { AngularFirestoreMock } from '../../../tests/mock/angular-firestore.mock';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth/auth.service';
import { AuthServiceStub } from '../../../tests/stubs/auth-service.stub';

describe('TimesheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimesheetService,
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: AngularFirestore, useClass: AngularFirestoreMock },
      ],

    });
  });

  it('should be created', inject([TimesheetService], (service: TimesheetService) => {
    expect(service).toBeTruthy();
  }));
});
