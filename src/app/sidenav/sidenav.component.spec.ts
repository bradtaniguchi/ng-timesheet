import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { NavService } from '../services/nav/nav.service';
import { SidenavStoreService } from './sidenav-store.service';
import { SidenavStoreServiceStub } from '../../tests/stubs/sidenav-store-service.stub';
import { MatIconModule, MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
// the below test is throwing an error, not sure why
describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        // RouterModule.forRoot([]),
        RouterTestingModule.withRoutes([]),
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
      ],
      declarations: [ SidenavComponent ],
      providers: [
        NavService,
        // { provide: NavService, useClass: NavServiceStub },
        { provide: SidenavStoreService, useClass: SidenavStoreServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
