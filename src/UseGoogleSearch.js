import React, { useState, useffect } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "df0fd07ea83482812";
// When we were filling out the form on this page https://cse.google.com/cse/create/new
// we stated that we were going to use the google search engline for the searches
// This context key is important because it tells the google developer account, which search engine to use.

//! Below is an example of a custom hook.

const UseGoogleSearch = term => {
	// We pass into this hook (conse UseGoogleSearch),
	// the 'term' that the user inputed into the search bar (term)
	// and whenever term changes,
	// th code that's inside this hook will be triggered

	const [data, setData] = useState(null);
	// This hook is going to have its own piece of state called 'data'

	useEffect(() => {
		// Whenever we use this hook, it is going to fire off a useEffect,
		// and this useEffect is dependent on the 'term'
	}, [term]);
	//
};

export default UseGoogleSearch;
