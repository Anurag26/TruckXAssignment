import {combineReducers} from "redux";
import UsersReducer from "./usersReducer";

const rootReducer  = combineReducers({users:UsersReducer});

export default rootReducer;
