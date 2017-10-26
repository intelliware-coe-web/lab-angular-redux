import { People } from './people.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PartialObserver } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { AppState } from './../../app.model';
import { PeopleFetchAction, PeopleState, PeopleSelectedAction } from './people.reducer';

@Injectable()
export class PeopleService {
  
  private baseUrl = 'https://swapi.co/api/people/';
  private peopleSlice: Observable<PeopleState>;
    
  constructor(private store: Store<AppState>, private http: HttpClient) {
    this.peopleSlice = this.store.select('people');
  }

  fetchPeople() {
    return this.http
              .get(this.baseUrl)
              .subscribe((p: any) => this.store.dispatch(new PeopleFetchAction(p.results)));
  }

  selectPeople(people: People) {
    this.store.dispatch(new PeopleSelectedAction(people));
  }

  subscribe(next: (value: PeopleState) => void) : Subscription {
    return this.peopleSlice.subscribe(next);
  }

}