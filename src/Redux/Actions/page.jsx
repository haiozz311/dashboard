import * as type from "../Constants/Page";
import axios from "../../Utils/AxiosClient";

export const createPageAction = (form) => {
  return (dispatch) => {
    dispatch({
      type: type.CREATE_PAGE_REQUEST,
    });
    axios
      .post("api/page/create", form)
      .then((result) => {
        dispatch({
          type: type.CREATE_PAGE_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.CREATE_PAGE_FAIL,
          error,
        });
      });
  };
};

