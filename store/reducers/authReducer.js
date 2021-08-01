import { LOGIN, LOGOUT } from "@store/action-types";
const initialState = { user: null, isLoggedIn: false, token: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
