import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { SearchBarStoreService } from '../search-bar-store.service';
import { SearchBarStoreServiceStub } from '../../../tests/stubs/search-bar-store-service.stub';
import { MatIconModule, MatButtonModule } from '@angular/material';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarComponent ],
      imports: [
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        { provide: SearchBarStoreService, useClass: SearchBarStoreServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
