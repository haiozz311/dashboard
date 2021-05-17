import * as type from "../Constants/cart";
import axios from "../../Utils/AxiosClient";
import store from "../../index";

export const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: type.ADD_TO_CART_REQUEST });
      const res = await axios.post(`api/getCartItems`);
      if (res.status === 200) {
        const { cartItems } = res.data;
        if (cartItems) {
          dispatch({
            type: type.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, newQty = 1) => {
  return async (dispatch) => {
    const { CartReducer, Auth } = store.getState();
    console.log("Auth", Auth);
    const { cartItems } = CartReducer;
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + newQty)
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };

    if (Auth?.token) {
      dispatch({ type: type.ADD_TO_CART_REQUEST });
      const payload = {
        cartItems: [
          {
            product: product,
            quantity: qty,
          },
        ],
      };
      const res = await axios.post(`api/cart`, payload);
      console.log("res", res);
      if (res.status === 200) {
        dispatch(getCartItems());
      }
    }
    // else {
    //   localStorage.setItem("cart", JSON.stringify(cartItems));
    // }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({
      type: type.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    if (cartItems) {
      dispatch({
        type: type.ADD_TO_CART_SUCCESS,
        payload: { cartItems },
      });
    }
  };
};

export const removeCartItem = (payload) => {
  console.log("payload remove", payload);
  return async (dispatch) => {
    try {
      dispatch({ type: type.REMOVE_CART_ITEM_REQUEST });
      const res = await axios.post(`api/removeItem`, { payload });
      if (res.status === 202) {
        dispatch({ type: type.REMOVE_CART_ITEM_SUCCESS });
        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({
          type: type.REMOVE_CART_ITEM_FAIL,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const updateCart = () => {
//   return async (dispatch) => {
//     const { auth } = store.getState();
//     let cartItems = localStorage.getItem("cart")
//       ? JSON.parse(localStorage.getItem("cart"))
//       : null;

//     if (auth.authenticate) {
//       localStorage.removeItem("cart");
//       //dispatch(getCartItems());
//       if (cartItems) {
//         const payload = {
//           cartItems: Object.keys(cartItems).map((key, index) => {
//             return {
//               quantity: cartItems[key].qty,
//               product: cartItems[key]._id,
//             };
//           }),
//         };
//         if (Object.keys(cartItems).length > 0) {
//           const res = await axios.post(`/user/cart/addtocart`, payload);
//           if (res.status === 201) {
//             dispatch(getCartItems());
//           }
//         }
//       } else {
//         dispatch(getCartItems());
//       }
//     } else {
//       if (cartItems) {
//         dispatch({
//           type: cartConstants.ADD_TO_CART_SUCCESS,
//           payload: { cartItems },
//         });
//       }
//     }
//   };
// };
