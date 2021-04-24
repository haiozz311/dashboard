import * as type from "../Constants/Auth";

const UserInfor = localStorage.getItem("UserInfor");
const initialState = {
  UserInfor: UserInfor ? JSON.parse(UserInfor) : null,
  loading: false,
  error: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USER_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.GET_USER_SUCCESS: {
      return {
        ...state,
        UserInfor: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.GET_USER_FAIL: {
      return { ...state, loading: false, error: action.error };
    }
    case type.LOGOUT_USER: {
      return { ...state, UserInfor: null, loading: false, error: false };
    }
    default:
      return state;
  }
};

export default Auth;
