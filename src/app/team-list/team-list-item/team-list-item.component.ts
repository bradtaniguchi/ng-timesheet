import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Team } from '../../interfaces/team';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListItemComponent implements OnInit {
  @Input() team: Team;
  @Output() showInfo = new EventEmitter<null>();
  @Output() join = new EventEmitter<null>();
  @Output() leave = new EventEmitter<null>();
  @Output() profile = new EventEmitter<null>();
  // @Output() projects = new EventEmitter<null>();
  constructor() {}

  ngOnInit() {}

  // TODO: add logic
  showJoin(): boolean {
    return true;
  }

  // TODO: add logic
  showLeave(): boolean {
    return false;
  }

  // TODO: add logic
  showProjects(): boolean {
    return true;
  }
}
