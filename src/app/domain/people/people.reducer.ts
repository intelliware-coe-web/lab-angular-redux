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
// LAB: Step 1 - Add new action type


/*
 * Actions
 **/

export class PeopleFetchAction implements Action {
  readonly type = PEOPLE_FETCHED;
  constructor(public payload: People[]) {}  
}

// LAB: Step 2 - Create new action

/*
 * Reducer
 **/
export function peopleReducer(state: any = { list: [] }, action: Action) {

	switch (action.type) {

		case PEOPLE_FETCHED:
			return Object.assign({}, state, {list: action.payload});
				
		// LAB: Step 3 - Generate new immutable state

		default:
			return state;
	}
}
