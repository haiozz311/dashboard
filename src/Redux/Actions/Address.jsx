import * as type from "../Constants/Address";
import axios from "../../Utils/AxiosClient";
import * as type1 from "../Constants/cart";

export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`api/getAddress`);
      dispatch({ type: type.GET_USER_ADDRESS_REQUEST });
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;
        dispatch({
          type: type.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: type.GET_USER_ADDRESS_FAIL,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`api/address`, { payload });
      dispatch({ type: type.ADD_USER_ADDRESS_REQUEST });
      if (res.status === 201) {
        console.log(res);
        const {
          address: { address },
        } = res.data;
        dispatch({
          type: type.ADD_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: type.GET_USER_ADDRESS_FAIL,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`api/addOrder`, payload);
      dispatch({ type: type.ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        const { order } = res.data;
        // dispatch({
        //   type: type1.RESET_CART,
        // });
        dispatch({
          type: type.ADD_USER_ORDER_SUCCESS,
          payload: { order },
        });
        // const {
        //   address: { address },
        // } = res.data;
        // dispatch({
        //   type: type.ADD_USER_ADDRESS_SUCCESS,
        //   payload: { address },
        // });
      } else {
        const { error } = res.data;
        dispatch({
          type: type.ADD_USER_ORDER_FAIL,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`api/getOrders`);
      dispatch({ type: type.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { orders } = res.data;
        dispatch({
          type: type.GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: type.GET_USER_ORDER_FAIL,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`api/getOrder`, payload);
      dispatch({ type: type.GET_USER_ORDER_DETAILS_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { order } = res.data;
        dispatch({
          type: type.GET_USER_ORDER_DETAILS_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: type.GET_USER_ORDER_DETAILS_FAIL,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
