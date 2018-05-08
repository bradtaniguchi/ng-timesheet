import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { scan, startWith, takeUntil } from 'rxjs/operators';
import { SidenavStoreService } from '../sidenav/sidenav-store.service';
import { SearchBarStoreService } from './search-bar-store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  sidenavToggle$ = new Subject();
  searchOpened$ = new Subject();
  showSearch = false;

  private takeUntil = new Subject();
  constructor(
    private sidenavStore: SidenavStoreService,
    private searchBarStore: SearchBarStoreService
  ) {}

  ngOnInit() {
    // when sidenav is toggle, update sidenavStore toggle
    this.sidenavToggle$
      .pipe(takeUntil(this.takeUntil))
      .subscribe(() => this.sidenavStore.toggle());

    // when the search is opened, update the sidenavStore, and update our local showSearch attribute
    this.searchOpened$
      .pipe(takeUntil(this.takeUntil))
      .do(() => (this.showSearch = true))
      .subscribe(() => this.searchBarStore.emitOpen());

    // when the search state is updated, we need to show the search accordingly
    this.searchBarStore
      .isSearchShown()
      .pipe(takeUntil(this.takeUntil))
      .subscribe(shown => (this.showSearch = shown));
  }

  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
}
