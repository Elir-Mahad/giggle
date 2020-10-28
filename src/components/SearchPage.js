import React from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";
//
import { useStateValue } from "../StateProvider.js";
// import useGoogleSearch from "../useGoogleSearch.js";
import Response from "../response.js";
//
import Search from "./Search.js";
// we are importing search component,
// because we want to display the search bar
// without the buttons, on the search page
//
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//------------------------------------ Imports complete

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

	//! For production, we can use the code below.
	//! This code is for the live Api call.
	// const { data } = useGoogleSearch(term);
	// the constant data stores the result of the 'search term' after its looped through the hook 'useGoogleSearch'

	//! In development, to avoid using up our quota for googleapi requests,
	//! we are going to pull on the json data that's saved in response.js.
	//! The json data in response.js is the result for the search word 'covid'
	//! So, when you enter a word into the search bar, the word will alwys be displayed on the SearchPage
	//! but it will not pass through the api, and therefore
	//! the json that will appear in the browser console will always be the covid results json
	const data = Response;

	console.log(data);
	//show all the data in the console

	return (
		<div className="searchPage">
			<div className="searchPage_header">
				<Link to="/">
					<img
						className="searchPage_logo"
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						alt=""
					/>
				</Link>

				<div className="searchPage_headerBody">
					<Search hideButtons />
					{/* The search component with the Hidebuttons passed through it
				will display the search bar without the buttons onto the SearchPage */}

					<div className="searchPage_options">
						<div className="searchPage_optionsLeft">
							{/*  */}
							<div className="searchPage_option">
								<SearchIcon />
								<Link to="/all"> All</Link>
							</div>
							{/*  */}
							<div className="searchPage_option">
								<DescriptionIcon />
								<Link to="/news"> News</Link>
							</div>
							{/*  */}
							<div className="searchPage_option">
								<ImageIcon />
								<Link to="/images"> Images</Link>
							</div>
							{/*  */}
							<div className="searchPage_option">
								<LocalOfferIcon />
								<Link to="/shopping"> Shopping</Link>
							</div>
							{/*  */}
							<div className="searchPage_option">
								<RoomIcon />
								<Link to="/maps"> maps</Link>
							</div>
							{/*  */}
							<div className="searchPage_option">
								<MoreVertIcon />
								<Link to="/more"> more</Link>
							</div>
						</div>
						<div className="searchPage_optionsRight">
							{/*  */}
							<div className="searchPage_option">
								<Link to="/settings"> Settings </Link>
							</div>
							{/*  */}
							<div className="searchPage_option">
								<Link to="/tools"> Tools </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="searchPage_Results">
				<h1>{term}</h1>
				{/* Here we are displaying the search term that's inputed by the user in an h1 tag.
                    So if they user types 'cat' in the search bar, and then presses enter, 
                    then the word 'cat' should appear on the searchpage. */}
			</div>
		</div>
	);
}

export default SearchPage;
