import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-user-profile',
  templateUrl: './current-user-profile.component.html',
  styles: []
})
export class CurrentUserProfileComponent implements OnInit {
  @Output() click = new EventEmitter();
  user: Observable<User>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.user;
  }
}
