import React, { useReducer } from "react";
import About from "./About";
import MyApp from "./myApp";
import RedTest from "./RedTest";
import { useStateValue } from "./StateProvider";
import { reducer, actions } from "./reducer";

function App() {
	const [mystate, dispatch] = useReducer(reducer, useStateValue());
	return (
		<div>
			<RedTest obj={mystate} dispatch={dispatch} />
			<About obj={mystate} dispatch={dispatch} />
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
