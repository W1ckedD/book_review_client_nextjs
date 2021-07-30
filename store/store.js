import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const preloadedState = {};

export default createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middleware))
);
