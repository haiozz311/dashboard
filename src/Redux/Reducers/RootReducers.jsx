import { combineReducers } from "redux";
import Auth from "./AuthReducers";
import UserListReducer from "./UserListReducers";
import userRegister from "./UserRegister";
import ProductReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";
import OrderReducer from "./OrderReducer";
import SlugReducer from "./SlugReducer";
import PageReducer from "./PageReducer";
const rootReducer = combineReducers({
  Auth: Auth,
  UserListReducer: UserListReducer,
  userRegister: userRegister,
  ProductReducer: ProductReducer,
  CategoryReducer: CategoryReducer,
  SlugReducer: SlugReducer,
  OrderReducer: OrderReducer,
  PageReducer: PageReducer,
});
export default rootReducer;
