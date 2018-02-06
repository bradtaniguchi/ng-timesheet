import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { scan, startWith  } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { NavbarStoreService } from '../sidenav/navbar-store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public sidenavToggle$ = new Subject<null>();
  constructor(
    private navbarStore: NavbarStoreService
  ) { }

  ngOnInit() {
    this.sidenavToggle$
    .subscribe(() => this.navbarStore.toggle());
  }

}
