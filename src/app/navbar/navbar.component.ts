import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { scan, startWith  } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { SidenavStoreService } from '../sidenav/sidenav-store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public sidenavToggle$ = new Subject<null>();
  public showSearch = false;
  constructor(
    private sidenavStore: SidenavStoreService
  ) { }

  ngOnInit() {
    this.sidenavToggle$
    .subscribe(() => this.sidenavStore.toggle());
  }

}
