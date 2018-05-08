import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserProfileComponent } from './current-user-profile.component';
import { MatTooltipModule } from '@angular/material';
import { AuthService } from '../services/auth/auth.service';
import { AuthServiceStub } from '../../tests/stubs/auth-service.stub';

describe('CurrentUserProfileComponent', () => {
  let component: CurrentUserProfileComponent;
  let fixture: ComponentFixture<CurrentUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentUserProfileComponent],
      imports: [MatTooltipModule],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
