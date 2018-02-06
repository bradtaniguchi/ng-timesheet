import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarStoreService } from './sidenav/navbar-store.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  public sidenavOpened: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(
    private navbarStore: NavbarStoreService
  ) { }

  ngOnInit() {
    console.log('in app component');
    this.navbarStore.searchShown
    .subscribe((state) => this.sidenavOpened = state);

    this.sidenav.openedChange
    .do((state) => this.navbarStore.search(state))
    .subscribe((state) => this.sidenavOpened = state);
  }
}
