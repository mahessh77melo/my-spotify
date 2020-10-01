import { createContext, useContext, useReducer } from "react";
import React from "react";

export const state = {
	user: "admin",
	age: "10",
	isLoggedIn: true,
};
const StateContext = createContext();
export const StateProvider = ({ reducer, state, children }) => (
	<StateContext.Provider value={useReducer(reducer, state)}>
		{children}
	</StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
