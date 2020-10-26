import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/search">
						<SearchPage />
						{/* Search Results page - contains search results */}
					</Route>
					<Route path="/">
						<Home />
						{/* Home page - contains search bar */}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
