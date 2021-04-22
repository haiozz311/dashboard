
import React from "react";
import { Route } from "react-router-dom";
import AdminRoute from "./Components/Dashboard/AdminRoute";
import Admin from "./Page/Admin";
import Login from "./Page/Login";
import User from "./Page/User";
import UserRoute from './Components/User/UserRoute/UserRoute';
import Home from './Components/User/Section/Home';

function App() {
  return (
    <>
      <AdminRoute exact path="/" component={Admin} />
      <AdminRoute exact path="/user" component={User} />
      <Route exact path='/login' component={Login} />
      <UserRoute exact path="/userPage" component={Home} />
    </>
  );
}

export default App;
