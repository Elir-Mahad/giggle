import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer.js";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
	<React.StrictMode>
		{/* To use the react context api, we have to wrap the app 
		with the stateprovider (which is the data layer). 
		As a result we can push data into the data layer, 
		and we can also pull data whenever we need to*/}
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
