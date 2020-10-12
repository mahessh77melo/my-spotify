import React, { createContext, useEffect } from "react";
import About from "./About";
import MyApp from "./myApp";
import RedTest from "./RedTest";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { actions } from "./reducer";
import "./App.css";

function App() {
	const [mystate, dispatch] = useStateValue();
	const context = createContext(mystate);
	window.m = mystate;
	useEffect(() => {
		console.log(mystate);
		console.log(window.location);
	}, [mystate]);
	return (
		<div className="app">
			<Router>
				<Route exact path="/about">
					<RedTest context={context} dispatch={dispatch} />
					<About context={context} dispatch={dispatch} />
				</Route>
				<Route exact path="/thalayaati">
					<div>
						<Link to="/about">
							<button>Go to the about page</button>
						</Link>
					</div>
				</Route>
			</Router>
			{/* {console.log(mystate)} */}
			<h3>
				{mystate.isLoggedIn ? "Signed In" : "Signed out, admin in control"}
			</h3>
			{mystate.isLoggedIn ? (
				<button onClick={() => dispatch({ type: actions.logout })}>
					Log Out
				</button>
			) : (
				<button onClick={() => dispatch({ type: actions.login })}>
					Log In
				</button>
			)}
		</div>
	);
}

export default App;
