import { combineReducers } from "redux";
import Auth from "./AuthReducers";
import UserListReducer from "./UserListReducers";
import userRegister from "./UserRegister";
import ProductReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";
import OrderReducer from "./OrderReducer";
import SlugReducer from "./SlugReducer";
import PageReducer from "./PageReducer";
import CartReducer from "./CartReducer";
import AddressReducer from "./AddressReducer";
const rootReducer = combineReducers({
  Auth: Auth,
  UserListReducer: UserListReducer,
  userRegister: userRegister,
  ProductReducer: ProductReducer,
  CategoryReducer: CategoryReducer,
  SlugReducer: SlugReducer,
  OrderReducer: OrderReducer,
  PageReducer: PageReducer,
  CartReducer: CartReducer,
  AddressReducer: AddressReducer,
});
export default rootReducer;
