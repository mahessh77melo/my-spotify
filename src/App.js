import React, { createContext, useEffect } from "react";
import About from "./About";
import MyApp from "./myApp";
import RedTest from "./RedTest";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { actions } from "./reducer";

function App() {
	const [mystate, dispatch] = useStateValue();
	const context = createContext(mystate);
	window.m = mystate;
	useEffect(() => {
		console.log(mystate);
	}, [mystate]);
	return (
		<div>
			<RedTest context={context} dispatch={dispatch} />
			<Router>
				<Route exact path="/about">
					<About context={context} dispatch={dispatch} />
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
