import * as type from "../Constants/Product";

const initialState = {
  ListProduct: [],
  ProductDetail: {},
  loading: false,
  error: false,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        ListProduct: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_PRODUCT_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.CREATE_PRODUCT_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case type.CREATE_PRODUCT_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.GET_PRODUCT_BY_ID_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_PRODUCT__BY_ID_SUCCESS: {
      return {
        ...state,
        ProductDetail: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_PRODUCT_BY_ID_FAIL: {
      return { ...state, loading: false, error: true };
    }

    default:
      return { ...state };
  }
};
export default ProductReducer;
