import { People } from './people.model';
import { ActionReducer, Action } from '@ngrx/store';

/*
 * People state model
 **/
export class PeopleState {
	list: People[];
	selected: People;
}


/*
 * Action types
 **/
const PEOPLE_FETCHED = '[PEOPLE] FETCHED';
const PEOPLE_SELECTED = '[PEOPLE] SELECTED';


/*
 * Actions
 **/

export class PeopleFetchAction implements Action {
  readonly type = PEOPLE_FETCHED;
  constructor(public payload: People[]) {}  
}

export class PeopleSelectedAction implements Action {
	readonly type = PEOPLE_SELECTED;
	constructor(public payload: People) {}  
  }

/*
 * Reducer
 **/
export function peopleReducer(state: any = { list: [] }, action: Action) {

	switch (action.type) {

		case PEOPLE_FETCHED:
				return Object.assign({}, state, {list: action.payload});
				
		case PEOPLE_SELECTED:
			return Object.assign({}, state, {selected: action.payload});

		default:
			return state;
	}
}
