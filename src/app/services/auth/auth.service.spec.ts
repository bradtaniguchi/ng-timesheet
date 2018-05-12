import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFirestoreMock } from '../../../tests/mock/angular-firestore.mock';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthMock } from '../../../tests/mock/angular-fire-auth.mock';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFirestore, useClass: AngularFirestoreMock },
        { provide: AngularFireAuth, useClass: AngularFireAuthMock }
      ]
    });
  });

  it(
    'should be created',
    inject([AuthService], (service: AuthService) => {
      expect(service).toBeTruthy();
    })
  );
});
