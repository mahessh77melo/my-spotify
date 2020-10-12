import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { actions } from "./reducer";

const About = ({ context, dispatch }) => {
	/* 	const st = useStateValue();
	console.log(st);
	const [myState, dispatch] = useReducer(reducer, obj); */
	const obj = useContext(context);

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
			<Link to="/thalayaati">
				<button>got to thalayaati</button>
			</Link>
		</div>
	);
};

export default About;
