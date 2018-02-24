import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavStoreService } from './sidenav/sidenav-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  public sidenavOpened: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(
    private sidenavStore: SidenavStoreService
  ) { }

  ngOnInit() {
    console.log('in app component');
    this.sidenavStore.sidenavShown
    .subscribe((state) => this.sidenavOpened = state);

    this.sidenav.openedChange
    .do((state) => this.sidenavStore.setSidenav(state))
    .subscribe((state) => this.sidenavOpened = state);
  }
}
