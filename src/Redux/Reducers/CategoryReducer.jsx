import * as type from "../Constants/Category";

const initialState = {
  ListCategory: [],
  loading: false,
  error: false,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_CATEGORY_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_ALL_CATEGORY_SUCCESS: {
      return {
        ...state,
        ListCategory: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_ALL_CATEGORY_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.CREATE_CATEGORY_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.CREATE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case type.CREATE_CATEGORY_FAIL: {
      return { ...state, loading: false, error: true };
    }

    case type.DELETE_CATEGORY_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case type.DELETE_CATEGORY_FAIL: {
      return { ...state, loading: false, error: true };
    }

    default:
      return { ...state };
  }
};
export default CategoryReducer;
