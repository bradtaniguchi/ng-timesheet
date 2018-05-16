import { tap } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavStoreService } from './sidenav/sidenav-store.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

// global rxjs observables

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  public sidenavOpened: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(
    private sidenavStore: SidenavStoreService,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {}

  ngOnInit() {
    this.sidenavStore.sidenavShown.subscribe(
      state => (this.sidenavOpened = state)
    );

    this.sidenav.openedChange
      .pipe(tap(state => this.sidenavStore.setSidenav(state)))
      .subscribe(state => (this.sidenavOpened = state));

    this.angulartics2GoogleAnalytics.eventTrack('TEST', 'this is a test');
  }
}
