import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider.js";

function SearchPage() {
	//
	const [{ term }, dispatch] = useStateValue();
	// In the stateprovide.js, the last line is: ' export const useStateValue = () => useContext(StateContext); '
	// This is a hook that allows us to pull information from the data layer.
	// Now, we want to pull information for the data layer, from within this component.
	// In order to do that, we have to write ' const [{}, dispatch] = useStateValue(); '
	// This simply means that we are going to dispatch
	// ( dispatch is like a gun that allows us to shoot actions into the data layer)
	// into the data layer from within this component.
	//
	// In this particular case, we have the word term in the curly brackets.
	// We did this because we wanted to display on the searchPage, the search terms which are being inputed by the user.
	return (
		<div className="searchPage">
			<div className="searchPage_header">
				<h1>{term}</h1>
				{/* Here we are displaying the search term that's inputed by the user in an h1 tag.
                    So if they user types 'cat' in the search bar, and then presses enter, 
                    then the word 'cat' should appear on the searchpage. */}
			</div>

			<div className="searchPage_results"></div>
		</div>
	);
}

export default SearchPage;