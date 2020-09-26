export const actions = {
	user_john: "john",
	user_michael: "michael",
	dec_age: "decrease",
	inc_age: "increase",
	login: "log in",
	logout: "log out",
	custom: "custom username",
};

export const reducer = (state, action) => {
	console.log(state);
	console.log(action);
	switch (action.type) {
		case actions.user_john:
			return {
				...state,
				user: actions.user_john,
			};
		case actions.user_michael:
			return {
				...state,
				user: actions.user_michael,
			};
		case actions.custom:
			return {
				...state,
				user: action.payload,
			};
		case actions.inc_age:
			return {
				...state,
				age: parseInt(state.age) + 1,
			};
		case actions.dec_age:
			return {
				...state,
				age: state.age - 1,
			};
		case actions.login:
			return {
				...state,
				isLoggedIn: true,
			};
		case actions.logout:
			return {
				...state,
				isLoggedIn: false,
				user: "admin",
			};

		default:
			return state;
	}
};
