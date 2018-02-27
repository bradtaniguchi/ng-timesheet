import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-current-user-profile',
  templateUrl: './current-user-profile.component.html',
  styles: []
})
export class CurrentUserProfileComponent implements OnInit {
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
