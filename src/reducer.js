export const initialState = {
	//The initial state tells us what the data layer looks like at the beginning
	term: null
	// in the begining the data layer has nothing inside it, therefore its null
	// but when you type something into the search bar,
	// then the data layer will contain that search item

	// for example: if you search 'elon musk',
	// then the data layer will be term : 'elon musk'
};

export const actionTypes = {
	// whenever you type into the search bar and press enter
	SET_SEARCH_TERM: "SET_SEARCH_TERM"
	// we will need to dispatch an action
	// to change and set the search term
};

const reducer = (state, action) => {
	// The constant reducer has the parameters state and action.
	// State identifies the state of the data layer.
	// Action refers to type of action we are dispatching into the data layer.
	// Inside the data layer the reducers job is to listen to any dispatched actions.
	// If we don't know what the dispatched action is, it just returns the current state.
	// If we know what the action is, then its going to return what the new data layer should look like.

	console.log(action);

	// The console log here is usefull for debugging,
	// so whenever we manipulate the data layer, it will log the action that we dispatched.

	switch (action.type) {
		//
		case actionTypes.SET_SEARCH_TERM:
			// the action type is set_search_term
			return {
				...state,
				// return whatever the state currently looks like
				term: action.term
				// change the term inside of the data layer,
				// with whatever action term we dispatched
			};

		default:
			return state;
	}
};

export default reducer;
