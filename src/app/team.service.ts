import { Injectable } from '@angular/core';
import{Team} from './team.component';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TeamService {
     private teamsUrl = 'api/teams'; // URL to web api
    constructor(private http: Http) { }
    getTeams(): Promise<Team[]> {
    return this.http.get(this.teamsUrl)
    .toPromise()
    .then(response => response.json().data as Team[])
    .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
    
    getTeam(id:number): Promise<Team> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Team)
    .catch(this.handleError);
    }


        private headers = new Headers({'Content-Type': 'application/json'});
    update(team: Team): Promise<Team> {
    const url = `${this.teamsUrl}/${team.id}`;
    return this.http
    .put(url, JSON.stringify(team), {headers: this.headers})
    .toPromise()
    .then(() => team)
    .catch(this.handleError);
    }


        create(teamname: string): Promise<Team> {
    return this.http
    .post(this.teamsUrl, JSON.stringify({teamname: teamname}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Team)
    .catch(this.handleError);
    }

    
    delete(id: number): Promise<void> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
    }
}