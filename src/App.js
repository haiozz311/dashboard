import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from "./Components/AdminRoute";
import Admin from "./Page/Admin";
import Login from "./Page/Login";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Login' component={Login} />
        <AdminRoute exact path="/" component={Admin} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
