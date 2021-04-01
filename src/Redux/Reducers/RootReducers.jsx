import { combineReducers } from "redux";
import Auth from "./AuthReducers";
const rootReducer = combineReducers({
  Auth: Auth,
});
export default rootReducer;
