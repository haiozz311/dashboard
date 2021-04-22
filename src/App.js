
import React from "react";
import { Route } from "react-router-dom";
import AdminRoute from "./Components/AdminRoute";
import Admin from "./Page/Admin";
import Login from "./Page/Login";
import User from "./Page/User";

function App() {
  return (
    <>
      <AdminRoute exact path="/" component={Admin} />
      <AdminRoute exact path="/user" component={User} />
      <Route exact path='/login' component={Login} />
    </>
  );
}

export default App;
