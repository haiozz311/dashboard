import * as type from "../Constants/Address";

const initialState = {
  address: [],
  orders: [],
  allOrder: [],
  orderDetails: {},
  error: null,
  loading: false,
  placedOrderId: null,
};

const AddressReducer = (state = initialState, action) => {
  console.log("action main", action);
  switch (action.type) {
    case type.GET_USER_ADDRESS_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_USER_ADDRESS_SUCCESS: {
      return {
        ...state,
        address: action?.payload?.address,
        loading: false,
        error: false,
      };
    }
    case type.GET_USER_ADDRESS_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.ADD_USER_ADDRESS_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.ADD_USER_ADDRESS_SUCCESS: {
      return {
        ...state,
        address: action?.payload?.address,
        loading: false,
        error: false,
      };
    }
    case type.ADD_USER_ADDRESS_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.GET_USER_ORDER_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_USER_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
        error: false,
      };
    }
    case type.GET_USER_ORDER_FAIL: {
      return { ...state, loading: false, error: true };
    }
    case type.GET_ALL_ORDER_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_ALL_ORDER_SUCCESS: {
      return {
        ...state,
        allOrder: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_ALL_ORDER_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.ADD_USER_ORDER_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.ADD_USER_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action?.payload?.orders,
        loading: false,
        error: false,
      };
    }
    case type.ADD_USER_ORDER_FAIL: {
      return { ...state, loading: false, error: true };
    }
    case type.UPDATE_ORDER_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.UPDATE_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action?.payload?.orders,
        loading: false,
        error: false,
      };
    }
    case type.UPDATE_ORDER_FAIL: {
      return { ...state, loading: false, error: true };
    }
    case type.GET_USER_ORDER_DETAILS_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_USER_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orderDetails: action?.payload?.orders,
        loading: false,
        error: false,
      };
    }
    case type.GET_USER_ORDER_DETAILS_FAIL: {
      return { ...state, loading: false, error: true };
    }

    default:
      return { ...state };
  }
};
export default AddressReducer;
