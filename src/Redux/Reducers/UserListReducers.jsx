import * as type from "../Constants/UserList";

const initialState = {
  ListUser: [],
  loading: false,
  error: false,
};

const UserListReducer = (state = initialState, action) => {
  console.log("Action ne", action);
  switch (action.type) {
    case type.GET_USER_LIST_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        ListUser: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_USER_LIST_FAIL: {
      return { ...state, loading: false, error: true };
    }


    default:
      return { ...state };
  }
};
export default UserListReducer;
