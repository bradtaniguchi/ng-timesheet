import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Input } from '@angular/core';
import { TeamService } from '../services/team/team.service';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: '',
  selector: 'app-team-list-item'
})
class TeamListListComponentStub {
  @Input() team: any;
}
class TeamServiceStub {}
describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlexLayoutModule, RouterTestingModule.withRoutes([])],
      declarations: [TeamListComponent, TeamListListComponentStub],
      providers: [
        {
          provide: TeamService,
          useClass: TeamServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
