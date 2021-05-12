import * as type from "../Constants/Product";

const initialState = {
  ListProductPage: [],
  loading: false,
  error: false,
};

const PageReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_PAGE_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_PRODUCT_PAGE_SUCCESS: {
      return {
        ...state,
        ListProductPage: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_PRODUCT_PAGE_FAIL: {
      return { ...state, loading: false, error: true };
    }

    default:
      return { ...state };
  }
};
export default PageReducer;
