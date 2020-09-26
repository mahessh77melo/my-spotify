import React, { useState } from "react";
import { actions } from "./reducer";

const Redtest = ({ obj, dispatch }) => {
	const [input, setinput] = useState("");
	return (
		<div style={{ minHeight: "50vh" }}>
			<h1>Reducer tester {obj.user}</h1>
			<h2>Age : {obj.age}</h2>
			<button
				onClick={() =>
					dispatch({
						type: actions.user_michael,
					})
				}
			>
				Michael
			</button>
			<button
				onClick={() =>
					dispatch({
						type: actions.user_john,
					})
				}
			>
				John
			</button>
			<br />
			<button onClick={() => dispatch({ type: actions.inc_age })}>
				increase the age
			</button>
			<br />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (input.length > 0 && obj.isLoggedIn)
						dispatch({ type: actions.custom, payload: input });
				}}
			>
				<input onChange={(e) => setinput(e.target.value)} type="text" />
				<input type="submit" value="change" />
			</form>
		</div>
	);
};

export default Redtest;
