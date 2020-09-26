import React from "react";

import { actions } from "./reducer";

const About = ({ obj, dispatch }) => {
	/* 	const st = useStateValue();
	console.log(st);
	const [myState, dispatch] = useReducer(reducer, obj); */

	return (
		<div style={{ marginBottom: "50px" }}>
			<h1>About component {obj.user}</h1>
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
			<button onClick={() => dispatch({ type: actions.dec_age })}>
				decrease the age
			</button>
		</div>
	);
};

export default About;