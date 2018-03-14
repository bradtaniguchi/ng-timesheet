import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabComponent } from './create-fab.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { CreateFabService } from './create-fab.service';

describe('CreateFabComponent', () => {
  let component: CreateFabComponent;
  let fixture: ComponentFixture<CreateFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFabComponent ],
      imports: [
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        CreateFabService
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

  it('clicking should emit click', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const service = fixture.debugElement.injector.get(CreateFabService);
    spyOn(service, 'emitClick');
    button.click();

    expect(service.emitClick).toHaveBeenCalled();
  });
});
