import { Component, OnInit } from '@angular/core';
import { Team } from './team.component';
import { TeamService } from './team.service';
    @Component({
    selector: 'my-dashboard',
    styleUrls: [ './dashboard.component.css' ],
    template: `    <h3>Top Teams</h3>
    <div class="grid grid-pad">
   <a *ngFor="let team of teams"  [routerLink]="['/detail', team.id]"  class="col-1-4">
    <div class="module team">
    <h4>{{team.teamname}}</h4>
    </div>
    </a>
    </div>
    <team-search></team-search>`,
    })
        export class DashboardComponent implements OnInit {
    teams: Team[] = [];
    constructor(private teamService: TeamService) { }
    ngOnInit(): void {
    this.teamService.getTeams()
    .then(teams => this.teams = teams.slice(2, 6));
    }
    }