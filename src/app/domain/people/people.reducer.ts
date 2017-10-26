import { People } from './people.model';
import { ActionReducer, Action } from '@ngrx/store';

/*
 * People state model
 **/
export class PeopleState {
  list: People[];
}


/*
 * Action types
 **/
const PEOPLE_FETCHED = '[PEOPLE] FETCHED';


/*
 * Actions
 **/

export class PeopleFetchAction implements Action {
  readonly type = PEOPLE_FETCHED;
  constructor(public payload: People[]) {}  
}


/*
 * Reducer
 **/
export function peopleReducer(state: any = { list: [] }, action: Action) {

	switch (action.type) {

    case PEOPLE_FETCHED:
			return Object.assign({}, state, {list: action.payload});

		default:
			return state;
	}
}
