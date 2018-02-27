import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {
  user: Observable<User>;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.user
    .do((user) => console.log('TEST IN LANDING:', user));
  }

}
