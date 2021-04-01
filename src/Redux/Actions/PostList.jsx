import * as type from "../Constants/PostList";
import axios from "axios";

export const getPostList = () => {
  return (dispatch) => {
    dispatch({
      type: type.GET_POST_LIST_REQUEST,
    });
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/`)
      .then((result) => {
        dispatch({
          type: type.GET_POST_LIST_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: type.GET_POST_LIST_FAIL,
        });
      });
  };
};

export const changePage = (page) => {
  return {
    type: type.CHANGE_PAGE,
    page,
  };
};

export const change_data_page = (result) => {
  return {
    type: type.CHANGE_DATA_PAGE,
    result,
  };
};

// export const FILTER_COMPLETED = (boolean) => {
//   return {
//     type: type.FILTER_COMPLETED,
//     boolean,
//   };
// };
