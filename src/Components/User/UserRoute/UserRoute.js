import React from "react";
import { Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate'

const UserRoute = (props) => {
  const { UserInfor } = useSelector((state) => state.Auth);
  // if (UserInfor) {
  //   if (UserInfor.userType !== "Member") {
  //     return <Redirect to="/dashboard" />;
  //   }
  // }

  const { component: Component, ...rest } = props
  return (
    <Route {...rest}
      render={(routeProps) => {
        return <DefaultTemplate>
          <Component {...routeProps} />
        </DefaultTemplate>
      }}
    />
  )
}
export default UserRoute