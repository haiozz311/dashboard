import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { UserInfor } = useSelector((state) => state.Auth);
  // if (!UserInfor) {
  //   return <Redirect to="/" />;
  // }
  // if (!Object.keys(UserInfor).length) {
  //   return <Redirect to="/" />;
  // }
  // if (UserInfor.userType !== "Admin") {
  //   return <Redirect to="/" />;
  // }
  return <Route {...rest} render={props => (
    UserInfor?.userType === "Admin" ? (
      <>
        <AdminTemplate>
          <Component {...props} />
        </AdminTemplate>
      </>
    ) : (
      <Redirect to={{
        pathname: '/login',
      }} />
    )
  )} />
};
// nhận vào component sử dụng Component
export default AdminRoute;
