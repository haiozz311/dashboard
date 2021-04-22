import { combineReducers } from "redux";
import Auth from "./AuthReducers";
import UserListReducer from "./UserListReducers";
const rootReducer = combineReducers({
  Auth: Auth,
  UserListReducer: UserListReducer,
});
export default rootReducer;
