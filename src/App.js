import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/search">
						<h1>This is the search page</h1>
						{/* Results page - contains search results */}
					</Route>
					<Route path="/">
						{/* Home page - contains search bar */}
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
