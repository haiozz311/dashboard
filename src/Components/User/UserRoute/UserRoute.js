import React from "react";
import { Route } from 'react-router-dom'
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate'

const UserRoute = (props) => {
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