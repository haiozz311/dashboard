import * as type from "../Constants/PostList";

const initialState = {
  ListPost: [],
  loading: false,
  error: false,
};

const PostListReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_POST_LIST_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_POST_LIST_SUCCESS: {
      return {
        ...state,
        ListPost: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_POST_LIST_FAIL: {
      return { ...state, loading: false, error: true };
    }
    case type.CHANGE_DATA_PAGE: {
      return {
        ...state,
        ListPost: action.result,
        loading: false,
        error: false,
      };
    }

    default:
      return { ...state };
  }
};
export default PostListReducer;
