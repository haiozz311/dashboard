import * as type from "../Constants/Category";
import axios from "../../Utils/AxiosClient";
export const getAllCategoryAction = () => {
  return (dispatch) => {
    dispatch({
      type: type.GET_ALL_CATEGORY_REQUEST,
    });
    axios
      .get("api/category")
      .then((result) => {
        dispatch({
          type: type.GET_ALL_CATEGORY_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_ALL_CATEGORY_FAIL,
          error,
        });
      });
  };
};
export const createCategoryAction = (form) => {
  return (dispatch) => {
    dispatch({
      type: type.CREATE_CATEGORY_REQUEST,
    });
    axios
      .post("api/category", form)
      .then((result) => {
        dispatch({
          type: type.CREATE_CATEGORY_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        dispatch(getAllCategoryAction());
      })
      .catch((error) => {
        dispatch({
          type: type.CREATE_CATEGORY_FAIL,
          error,
        });
      });
  };
};

export const updateCategoryAction = (form) => {
  return (dispatch) => {
    dispatch({
      type: type.UPDATE_CATEGORY_REQUEST,
    });
    axios
      .post("api/update", form)
      .then((result) => {
        dispatch({
          type: type.UPDATE_CATEGORY_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        dispatch(getAllCategoryAction());
      })
      .catch((error) => {
        dispatch({
          type: type.UPDATE_CATEGORY_FAIL,
          error,
        });
      });
  };
};

export const deleteCategoryAction = (ids) => {
  return (dispatch) => {
    dispatch({
      type: type.DELETE_CATEGORY_REQUEST,
    });
    axios
      .post("api/delete", ids)
      .then((result) => {
        dispatch({
          type: type.DELETE_CATEGORY_SUCCESS,
          payload: {
            data: result.data,
          },
        });
        dispatch(getAllCategoryAction());
      })
      .catch((error) => {
        dispatch({
          type: type.DELETE_CATEGORY_FAIL,
          error,
        });
      });
  };
};
