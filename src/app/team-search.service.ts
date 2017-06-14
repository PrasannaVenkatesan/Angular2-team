  import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Team }           from './team.component';
@Injectable()
export class TeamSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Team[]> {
    return this.http
               .get(`app/teams/?teamname=${term}`)
               .map(response => response.json().data as Team[]);
  }
}