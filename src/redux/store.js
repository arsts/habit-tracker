import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunkMiddleware from "redux-thunk";

import habitsReducer from "./habits-reducer";

const rootReducer = combineReducers({
  habitsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
