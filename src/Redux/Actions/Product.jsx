import * as type from "../Constants/Product";
import axios from "../../Utils/AxiosClient";
export const getProductAction = () => {
  return (dispatch) => {
    dispatch({
      type: type.GET_PRODUCT_REQUEST,
    });
    axios
      .get("api/getProduct")
      .then((result) => {
        dispatch({
          type: type.GET_PRODUCT_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_PRODUCT_FAIL,
          error,
        });
      });
  };
};
export const createProductAction = (form) => {
  return (dispatch) => {
    dispatch({
      type: type.CREATE_PRODUCT_REQUEST,
    });
    axios
      .post("api/product", form)
      .then((result) => {
        dispatch({
          type: type.CREATE_PRODUCT_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.CREATE_PRODUCT_FAIL,
          error,
        });
      });
  };
};

export const getProductByslugAction = (slug) => {
  return (dispatch) => {
    dispatch({
      type: type.GET_PRODUCT_bY_SLUG_REQUEST,
    });
    axios
      .get(`api/getProduct/${slug}`)
      .then((result) => {
        dispatch({
          type: type.GET_PRODUCT_BY_SLUG_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_PRODUCT_BY_SLUG_FAIL,
          error,
        });
      });
  };
};

export const getProductPageAction = (payload) => {
  console.log("payload", payload);
  const { cid, typeProduct } = payload.params;
  return (dispatch) => {
    dispatch({
      type: type.GET_PRODUCT_PAGE_REQUEST,
    });
    axios
      .get(`api/page/${cid}/${typeProduct}`)
      .then((result) => {
        console.log("result", result);
        dispatch({
          type: type.GET_PRODUCT_PAGE_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_PRODUCT_PAGE_FAIL,
          error,
        });
      });
  };
};
