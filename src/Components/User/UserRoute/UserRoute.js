import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate'
import { updateCart } from '../../../Redux/Actions/Cart'

const UserRoute = (props) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.CartReducer);
  // useEffect(() => {
  //   dispatch(updateCart())
  // }, [cartItems])

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