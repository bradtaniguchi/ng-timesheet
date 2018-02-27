import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabComponent } from './create-fab.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

describe('CreateFabComponent', () => {
  let component: CreateFabComponent;
  let fixture: ComponentFixture<CreateFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFabComponent ],
      imports: [
        MatButtonModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
