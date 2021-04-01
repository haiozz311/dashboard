import * as type from "../Constants/Auth";
import axios, { setToken } from "../../Utils/AxiosClient";
import jwt_decode from "jwt-decode";
export const loginAction = (values) => {
  return (dispatch) => {
    dispatch({
      type: type.GET_USER_REQUEST,
    });
    axios
      .post("api/login", values)
      .then((result) => {
        console.log("token", result.data.token);
        let data = jwt_decode(result.data.token);
        console.log("parse token", data);
        localStorage.setItem("UserInfor", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(result.data.token));
        setToken(result.data.token);
        //setToken Authorization len header
        dispatch({
          type: type.GET_USER_SUCCESS,
          payload: {
            data: data,
          },
        });
      })
      .catch((error) => {
        console.log("err", error);
        dispatch({
          type: type.GET_USER_FAIL,
        });
      });
  };
};
