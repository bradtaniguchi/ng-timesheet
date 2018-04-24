import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../interfaces/team';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styles: []
})
export class TeamListItemComponent implements OnInit {
  @Input() team: Team;
  constructor() {}

  ngOnInit() {}
}
