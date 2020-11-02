import React from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import searchsquid from "../assets/searchsquid.png";
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
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
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
					<img className="searchPage_logo" src={searchsquid} alt="" />
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
							<div className="searchPage_option remove_option">
								<RoomIcon />
								<Link to="/maps"> maps</Link>
							</div>
							{/*  */}
							<div className="searchPage_option remove_option">
								<MoreVertIcon />
								<Link to="/more"> more</Link>
							</div>
						</div>
						<div className="searchPage_optionsRight">
							{/*  */}
							<div className="searchPage_option remove_option">
								<Link to="/settings"> Settings </Link>
							</div>
							{/*  */}
							<div className="searchPage_option remove_option">
								<Link to="/tools"> Tools </Link>
							</div>
							{/*  */}
							<Button
								//
								className="signup_button"
								type="submit"
								variant="outlined"
							>
								Sign in
							</Button>
						</div>
					</div>
				</div>
			</div>

			{term && (
				// If a search term has been submitted, then render the below div.
				// In the div below, we are pulling all the data from the saved json in response.js
				// We are using the end points in the json to pull the data
				// The word 'data', thats at the beginning of the end point, has'?' in front it .
				// This is called optional chaining.
				// We are using the '?' because we assume that
				// the data might be delayed while its being fetching,
				// and we don't want the code to break during that delay.
				<div className="searchPage_results">
					<p className="searchPage_resultcount">
						About {data?.searchInformation.formattedTotalResults} results ,
						{/* this endpoint is fetching the result count */}
						in {data?.searchInformation.formattedSearchTime} seconds, for {term}
						{/* this endpoint is fetching the time it took to get all the results
							and it's displaying the search term */}
					</p>
					{data?.items.map((item) => (
						// map through each item in the data, and render the below endpoints
						<div className="searchPage_result">
							<a className="searchPage_resultLink" href={item.link}>
								{/*  */}
								{item.pagemap?.cse_image?.length > 0 &&
									// if the length of 'pagemap.cse_image' is longer than 0,
									// then that means there is an image in there
									// then render the below code
									item.pagemap?.cse_image[0]?.src && (
										<img
											className="searchPage_resultImage"
											src={
												//
												item.pagemap?.cse_image?.length > 0 &&
												item.pagemap?.cse_image[0]?.src
											}
											alt=""
										/>
									)}
								{/*if there is an image, then access the source and render the image*/}
								{item.displayLink} ▽{/* the website */}
							</a>
							<a className="searchPage_resultTitle" href={item.link}>
								{/*  */}
								<h2>{item.title}</h2>
								{/* the title */}
							</a>
							<p className="searchPage_resultSnippet">
								{/*  */}
								{item.snippet}
								{/* the snippet */}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchPage;
