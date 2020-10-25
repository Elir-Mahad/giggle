import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
	// The function search has a props called 'hidebuttons'
	// The prop hideButtons will be used to hide the buttons that are under the search bar.
	// By default the value of this props is false.
	// This means that the buttons will not be hidden by default,
	// but they will only be hidden after the user searches for something and the results page pops up

	const [input, setInput] = useState("");
	// (input) The constant input contains a string
	// (setInput) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()

	const history = useHistory();
	// This provides us with the browsers history

	const search = e => {
		// the constant search  will contain an event
		e.preventDefault();
		// By default, the input field gets refreshed every time something is submitted
		// This line of code stops the input field from refereshing.
		// As a result, the previous messages that were inputed, will not be erased.
		console.log("you hit the search button >>", input);
		// whenever something is typed into the input field (i.e, the search bar)
		// in the browsers console
		// out put the string 'you hit the search button' + 'whatever was typed into the input field'
		history.push("/search");
		//  whenever the input field is clicked on and then enter is pressed
		//  output the search results on the page (from app.js) whose route path is "/search".
		// In other words, route the results to the page that has '/search' url
	};
	//
	return (
		<form className="search">
			{/*  */}
			<div className="search_input">
				{/*  */}
				<SearchIcon className="search_inputIcon" />
				{/*  */}
				<input
					//
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
				<MicIcon />
				{/*  */}
			</div>

			{/* When the user searchs for something
				the user will be re-directed to the resultspage.
				In the results page, the search bar will be on top of the page
				but the buttons below the search bar will be hidden.
				Here we are going to wrap the buttons in a ternary (if and then statement).  
				This ternary will hide the buttons.
				 */}

			{!hideButtons ? (
				// If the user is on the landing page
				// and they have not searched for anything yet
				// then we will show the buttons
				<div className="search_buttons">
					{/*  */}
					<Button
						//
						type="submit"
						onClick={search}
						variant="outlined"
					>
						Google Search
					</Button>

					<Button variant="outlined">I'm feeling lucky</Button>
					{/*  */}
				</div>
			) : (
				// otherwise (i.e, if the user has searched for something)
				// we will hide the buttons by giving them the class of "search_buttonsHidden"
				// and in the css, the class search_buttonHidden will have a value of 'display:none'
				<div className="search_buttons">
					{/*  */}
					<Button
						//
						className="search_buttonsHidden"
						// here is we are giving it the class of hidden
						// this will make it possible to hide the buttons
						type="submit"
						onClick={search}
						variant="outlined"
					>
						Google Search
					</Button>

					<Button
						//
						className="search_buttonsHidden"
						// here is we are giving it the class of hidden
						// this will make it possible to hide the buttons
						variant="outlined"
					>
						I'm feeling lucky
					</Button>
					{/*  */}
				</div>
			)}
		</form>
	);
}

export default Search;
