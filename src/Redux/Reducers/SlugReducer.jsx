import * as type from "../Constants/Product";

const initialState = {
  loading: false,
  error: false,
  productsBySlug: [],
  productsByPrice: {
    under5K: [],
    under10K: [],
    under15K: [],
    under20K: [],
    under30K: [],
  },
};

const SlugReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_bY_SLUG_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_PRODUCT_BY_SLUG_SUCCESS: {
      return {
        ...state,
        productsBySlug: action.payload.data.products,
        productsByPrice: action.payload.data.productsByPrice,
        loading: false,
        error: false,
      };
    }
    case type.GET_PRODUCT_BY_SLUG_FAIL: {
      return { ...state, loading: false, error: true };
    }

    default:
      return { ...state };
  }
};
export default SlugReducer;
