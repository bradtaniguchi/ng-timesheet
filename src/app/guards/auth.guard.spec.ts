import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth/auth.service';
import { AuthServiceStub } from '../../tests/stubs/auth-service.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MockComponent } from './mock-component.component';
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockComponent
          }
        ])
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

  it('if the user does exist, return true', async(inject([AuthGuard], (guard: AuthGuard) => {
    const service = <AuthService>TestBed.get(AuthService);
    // const obs = Observable.of();
    const obs = Observable.of({
      name: 'Test User'
    });
    // since this is a "getter" from typescript, we use spyOnProperty
    spyOnProperty(service, 'user', 'get').and.returnValue(obs);
    (<Observable<boolean>>guard.canActivate(null, null))
    .subscribe((canActivate) => {
      expect(canActivate).toBeTruthy();
    });
  })));

  it('if the user does not exist, return false', async(inject([AuthGuard], (guard: AuthGuard) => {
    const service = <AuthService>TestBed.get(AuthService);
    const obs = Observable.of();
    spyOnProperty(service, 'user', 'get').and.returnValue(obs);
    (<Observable<boolean>>guard.canActivate(null, null))
    .subscribe((canActivate) => {
      expect(canActivate).toBeFalsy();
    });
  })));
});
