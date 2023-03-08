import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import favoriteReducer from "./favoriteReducer";

export const rootReducer = combineReducers({
	counter: counterReducer,
	favorite: favoriteReducer,
});
