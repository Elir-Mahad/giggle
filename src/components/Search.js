import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
	return (
		<div className="search">
			<div className="search_input">
				<SearchIcon className="search_inputIcon" />
				<input />
			</div>
		</div>
	);
}

export default Search;
