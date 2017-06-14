import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import{InMemoryDataService} from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { TeamsComponent } from './teams.component'
import { TeamDetailComponent } from './team-detail.component';
import { TeamService } from './team.service';
import {routing} from './app.routing';
import {DashboardComponent} from './dashboard.component';
import {TeamSearchComponent} from './team-search.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),routing  ],
  declarations: [ AppComponent,TeamDetailComponent,TeamsComponent,DashboardComponent,TeamSearchComponent ],
  providers:[TeamService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
