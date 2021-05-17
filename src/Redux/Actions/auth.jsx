import * as type from "../Constants/Auth";
import axios from "../../Utils/AxiosClient"; //  { setToken }
import jwt_decode from "jwt-decode";
export const loginAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: type.GET_USER_REQUEST,
    });
    axios
      .post("api/login", values)
      .then((result) => {
        let data = jwt_decode(result.data.token);
        const token = result.data.token;
        localStorage.setItem("UserInfor", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(result.data.token));
        // setToken(result.data.token);
        //setToken Authorization len header
        dispatch({
          type: type.GET_USER_SUCCESS,
          payload: {
            data: data,
            token,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_USER_FAIL,
          error,
        });
      });
  };
};
export const logoutAction = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch({
      type: type.LOGOUT_USER,
    });
  };
};
export const registerAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: type.REGISTER_USER_REQUEST,
    });
    axios
      .post("api/register", values)
      .then((result) => {
        dispatch({
          type: type.REGISTER_USER_SUCCESS,
          payload: {
            data: result,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.REGISTER_USER_FAIL,
          error,
        });
      });
  };
};
export const clearRegisterAction = () => {
  return (dispatch) => {
    dispatch({
      type: type.CLEAR_REGISTER_USER,
    });
  };
};
