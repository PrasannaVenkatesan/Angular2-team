

import { Component,OnInit } from '@angular/core';
import {routing} from './app.routing';
import{Team} from './team.component';


import { Router } from '@angular/router';
import{TeamService} from './team.service';


@Component({
  selector:'my-teams',  
  styleUrls: [ './teams.component.css' ],
 template:`<h1>{{title}}</h1>
 <h2>Teams</h2>
<ul class="teams">
 
   <li *ngFor="let team of teams" [class.selected]="team === selecteam"(click)="onSelect(team)">
    <span class="badge">{{team.teamname}}</span> {{team.captain}}
    <button class="delete"
(click)="delete(team); $event.stopPropagation()">x</button>
  </li>
</ul>
    <div *ngIf="selecteam">
    <h2>
    {{selecteam.teamname | lowercase}} is my team
    </h2>
    <button (click)="gotoDetail()">View Details</button>
    </div>
    <hr/>
        <div>
      
    <label>Team name:</label> <input #teamName />
    <button (click)="add(teamName.value); teamName.value=''">
    Add
    </button>
    </div>

 `,

})
export class TeamsComponent implements OnInit{
   title="CT 2017";
  
  selecteam:Team;
  teams:Team[];
   
   constructor(
   private router: Router,
private teamService: TeamService) {
  
 }
    onSelect(team:Team):void{
      this.selecteam=team;
    }
getTeams():void{
  this.teamService.getTeams().then(teams => this.teams = teams);
}
ngOnInit():void{
  this.getTeams();
}

    gotoDetail(): void {
    this.router.navigate(['/detail', this.selecteam.id]);
    }
        add(teamname: string): void {
    teamname = teamname.trim();
    if (!teamname) { return; }
    this.teamService.create(teamname)
    .then(team => {
    this.teams.push(team)
    this.selecteam = null;
    });
    }

        delete(team: Team): void {
    this.teamService
    .delete(team.id)
    .then(() => {
    this.teams = this.teams.filter(h => h !== team);
    if (this.selecteam === team) { this.selecteam = null; }
    });
    }

}


