import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { TeamService } from '../services/team/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styles: []
})
export class TeamListComponent implements OnInit {
  public teams$: Observable<Array<Team>>;
  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // this.teams$ = this.teamService.get();
    this.teams$ = <any>Observable.of([{}, {}, {}]);
  }
}
