import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { NavService } from '../services/nav/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private navService: NavService
  ) { }

  ngOnInit() {
  }
  login() {
    this.authService.authLoginPopup()
    // this.authService.authLoginRedirect()
    .then(() => {
      this.router.navigateByUrl(this.navService.root());
    }).catch((err) => {
      console.error(err);
    });
  }

}
