import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SidenavStoreService } from './sidenav-store.service';
import { NavService } from '../services/nav/nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent implements OnInit {
  public sidenavClose = new Subject<null>();
  constructor(
    public navService: NavService,
    private sidenavStore: SidenavStoreService
  ) {}

  ngOnInit() {
    this.sidenavClose.subscribe(() => this.sidenavStore.setSidenav(false));
  }
}
