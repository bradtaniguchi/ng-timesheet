import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { SearchBarStoreService } from '../search-bar-store.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: []
})
export class SearchbarComponent implements OnInit, OnDestroy {
  search$ = new Subject<string>();
  searchClosed$ = new Subject();
  private takeUntil = new Subject();
  constructor(private searchBarStore: SearchBarStoreService) {}

  ngOnInit() {
    this.search$
      .pipe(takeUntil(this.takeUntil))
      .subscribe(searchString => this.searchBarStore.emitSearch(searchString));

    this.searchClosed$
      .pipe(takeUntil(this.takeUntil))
      .subscribe(searchString => this.searchBarStore.emitClose());
  }

  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
}
