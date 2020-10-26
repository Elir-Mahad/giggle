import React, { createContext, useContext, useReducer } from "react";
// import the required dependencies

export const StateContext = createContext();
// prepare the data layer to be exported

export const StateProvider = ({ reducer, initialState, children }) => (
	//the initialstate is what the data layer looks like when the app is loaded
	//the reducer is somthing that listens to changes that are occuring in the data layer
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>

	// The above block of code mirrors the block of code below (which is from index.js).

	// 	<StateProvider initialState={initialState} reducer={reducer}>
	// <App />
	// </StateProvider>

	// <StateContext.Provider value={useReducer(reducer, initialState)}>
	// mirrors
	// <StateProvider initialState={initialState} reducer={reducer}>

	// {children}
	// mirrors
	// <App/>

	// </StateContext.Provider>
	// mirrors
	// </StateProvider>
);

export const useStateValue = () => useContext(StateContext);
// this is a hook which allows us to pull information from the data layer
