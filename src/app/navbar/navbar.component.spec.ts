import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { NavService } from '../services/nav/nav.service';
import { SidenavStoreServiceStub } from '../../tests/stubs/sidenav-store-service.stub';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidenavStoreService } from '../sidenav/sidenav-store.service';
import { SearchBarStoreService } from './search-bar-store.service';
import { SearchBarStoreServiceStub } from './search-bar-store-service.stub';

// not sure why these tests say "error thrown, must be with the element schema"
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule
      ],
      declarations: [ NavbarComponent ],
      providers: [
        // { provide: NavService, useClass: NavServiceStub },
        { provide: SidenavStoreService, useClass: SidenavStoreServiceStub },
        { provide: SearchBarStoreService, useClass: SearchBarStoreServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
