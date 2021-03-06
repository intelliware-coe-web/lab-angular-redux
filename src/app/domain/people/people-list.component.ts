import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from './people.service';
import { PeopleState } from './people.reducer';
import { People } from './people.model';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit, OnDestroy {
  
  people: People[] = [];
  peopleSubscription: Subscription;
  
  constructor(private peopleService: PeopleService) {
    this.onPeopleStateUpdated = this.onPeopleStateUpdated.bind(this);
  }
  
  ngOnInit(): void {
    this.peopleSubscription = this.peopleService.subscribe(this.onPeopleStateUpdated);
    this.peopleService.fetchPeople();
  }
  
  ngOnDestroy(): void {
    this.peopleSubscription.unsubscribe();
  }
  
  onPeopleStateUpdated(peopleState: PeopleState): any {
    this.people = peopleState.list;
  }
}
