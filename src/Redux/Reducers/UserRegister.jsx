import * as type from "../Constants/Auth";
const initialState = {
  userRegister: null,
  loading: false,
  error: false,
};

const userRegister = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_USER_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case type.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        userRegister: action.payload.data,
        loading: false,
        error: false,
      };
    }
    case type.REGISTER_USER_FAIL: {
      return { ...state, loading: false, error: action.error };
    }
    case type.CLEAR_REGISTER_USER: {
      return {
        ...state,
        userRegister: null,
        loading: false,
        error: false,
      };
    }
    default:
      return state;
  }
};

export default userRegister;
