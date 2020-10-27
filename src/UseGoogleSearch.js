import React, { useState, useEffect } from "react";

import API_KEY from "./Keys.js";

const CONTEXT_KEY = "df0fd07ea83482812";
// When we were filling out the form on this page https://cse.google.com/cse/create/new
// we stated that we were going to use the google search engline for the searches
// This context key is important because it tells the google developer account, which search engine to use.

//! Below is an example of a custom hook.

const useGoogleSearch = term => {
	// We pass into this hook (conse UseGoogleSearch),
	// the 'term' that the user inputed into the search bar (term)
	// and whenever term changes,
	// th code that's inside this hook will be triggered

	const [data, setData] = useState(null);
	// This hook is going to have its own piece of state called 'data'

	useEffect(() => {
		// Whenever we use this hook, it is going to fire off a useEffect,
		// and this useEffect is dependent on the 'term'

		const fetchData = async () => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
				// This is the end point that connects to googles custom search api.
				// The context key represents the search engine that we chose to run the query through.
				// q stands for the query/term that the user inputs.
			)
				.then(response => response.json())
				// get the response in json format

				.then(result => {
					// take the results

					setData(result);
					// insert the results into the constant Data
				});
		};
		//
		fetchData();
		// fetch the constant data
	}, [term]);
	//
	return { data };
};

export default useGoogleSearch;
