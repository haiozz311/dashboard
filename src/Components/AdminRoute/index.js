import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { UserInfor } = useSelector((state) => state.Auth);
  return <Route {...rest} render={props => (
    UserInfor ? (
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
