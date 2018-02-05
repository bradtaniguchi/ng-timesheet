import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { scan, startWith  } from 'rxjs/operators';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public sidenavToggle$ = new Subject<boolean>();
  public sidenavOpened = false;
  constructor() { }

  ngOnInit() {
    this.sidenavToggle$
    .do((sidenavOpened) => this.sidenavOpened = !sidenavOpened)
    .subscribe((state) => console.log('state: ', state));
  }

}
