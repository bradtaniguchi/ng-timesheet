import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavbarStoreService } from './navbar-store.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent implements OnInit {
  public sidenavClose = new Subject<null>();
  constructor(
    private navbarStore: NavbarStoreService
  ) { }

  ngOnInit() {
    this.sidenavClose.subscribe(() => this.navbarStore.search(false));
  }

}
