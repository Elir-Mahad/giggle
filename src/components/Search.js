import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search() {
	//
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
		</form>
	);
}

export default Search;
