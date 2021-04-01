import * as type from "../Constants/PostList";

const initialState = {
  postPerPage: 10,
  currentPage: 1,
  loading: false,
  error: false,
};

const PageInforReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.page,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default PageInforReducer;
