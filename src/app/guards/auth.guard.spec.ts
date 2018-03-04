import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth/auth.service';
import { AuthServiceStub } from '../../tests/stubs/auth-service.stub';
import { RouterTestingModule } from '@angular/router/testing';
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        AuthGuard,
        {provide: AuthService, useClass: AuthServiceStub}
      ]
    });
  });

  it('should exist', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
