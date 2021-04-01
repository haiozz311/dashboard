import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";

const AdminRoute = ({ component: Component, ...rest }) => {
  // const { UserInfor } = useSelector((state) => state.Auth);

  // console.log("UserInfor123", UserInfor._id)
  // if (UserInfor._id) {
  //   return <Redirect to="/" />;
  // }
  // if (!UserInfor) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return (
          <AdminTemplate>
            <Component {...routeProps} />
          </AdminTemplate>
        );
      }}
    />
  );
};
// nhận vào component sử dụng Component
export default AdminRoute;
