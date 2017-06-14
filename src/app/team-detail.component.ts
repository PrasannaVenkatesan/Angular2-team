
import{Team} from './team.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input,OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { TeamService } from './team.service';

@Component({

selector:'team-detail',
styleUrls: [ './team-detail.component.css' ],
template:`<div *ngIf="team">
 <h2>{{team.teamname}} details!</h2>
 <div><label>Team Name: </label><strong>{{team.teamname}}</strong></div>
 <div><label>Captain: </label>
 <input [(ngModel)]="team.captain" placeholder="captain name"/></div>
 </div>
 <button (click)="save()">Save</button>
 <button (click)="goBack()">Back</button>

`,

})


export class TeamDetailComponent implements OnInit{
@Input() team: Team;
    constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
    ) {}
        ngOnInit(): void {
   this.route.params
    .switchMap((params: Params) => this.teamService.getTeam(+params['id']))
    .subscribe(team => this.team = team);
    }

        goBack(): void {
    this.location.back();
    }

        save(): void {
    this.teamService.update(this.team)
    .then(() => this.goBack());
    }

}