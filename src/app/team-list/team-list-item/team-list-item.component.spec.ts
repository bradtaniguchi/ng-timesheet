import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListItemComponent } from './team-list-item.component';
import {
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

describe('TeamListItemComponent', () => {
  let component: TeamListItemComponent;
  let fixture: ComponentFixture<TeamListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, MatButtonModule, MatCardModule, MatIconModule],
      declarations: [TeamListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
