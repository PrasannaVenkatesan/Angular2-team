import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { TeamSearchService } from './team-search.service';
import { Team } from './team.component';
@Component({
  selector: 'team-search',
  templateUrl: './team-search.component.html',
  styleUrls: [ './team-search.component.css' ],
  providers: [TeamSearchService]
})
export class TeamSearchComponent implements OnInit {
  teams: Observable<Team[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private teamSearchService: TeamSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.teams = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.teamSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Team[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Team[]>([]);
      });
  }
  gotoDetail(team: Team): void {
    let link = ['/detail', team.id];
    this.router.navigate(link);
  }
}