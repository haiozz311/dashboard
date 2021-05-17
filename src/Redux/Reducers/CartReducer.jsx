import * as type from "../Constants/cart";

const cart = localStorage.getItem("cart");
const initialState = {
  cartItems: {},
  loading: false,
  error: false,
};

const CartReducer = (state = initialState, action) => {
  console.log("action main", action.payload);
  switch (action.type) {
    case type.ADD_TO_CART_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        cartItems: action?.payload?.cartItems,
        loading: false,
        error: false,
      };
    }
    case type.ADD_TO_CART_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.REMOVE_CART_ITEM_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.REMOVE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case type.REMOVE_CART_ITEM_FAIL: {
      return { ...state, loading: false, error: true };
    }
    case type.RESET_CART: {
      return {
        ...state,
        cartItems: {},
        loading: false,
        error: false,
      };
    }

    default:
      return { ...state };
  }
};
export default CartReducer;
