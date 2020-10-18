import {combineReducers} from "redux";
import {userFilesReducer} from "./userFiles";

export const reducer = combineReducers({
	userFiles: userFilesReducer
});
