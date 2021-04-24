import axios from "../../Utils/AxiosClient";
import * as type from "../Constants/UserList";

export const getAllUserAction = () => {
  return (dispatch) => {
    dispatch({
      type: type.GET_USER_LIST_REQUEST,
    });
    axios
      .get("api/users")
      .then((result) => {
        dispatch({
          type: type.GET_USER_LIST_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_USER_LIST_FAIL,
        });
      });
  };
};

export const addUserAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: type.ADD_USER_REQUEST,
    });
    axios
      .post("api/users/add", value)
      .then((result) => {
        dispatch({
          type: type.ADD_USER_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.ADD_USER_FAIL,
        });
      });
  };
};
