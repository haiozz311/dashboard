
import React from "react";
import { Route } from "react-router-dom";
import AdminRoute from "./Components/Dashboard/AdminRoute";
import Admin from "./Page/Admin";
import Login from "./Page/Login";
import User from "./Page/User";
import UserRoute from './Components/User/UserRoute/UserRoute';
import Home from './Components/User/Section/Home';
import Register from './Page/Register'
import Category from './Page/Category'
import Product from './Page/Product'
import Order from './Page/Order'
import Page from './Page/NewPage/NewPage.jsx'
import ProductListPage from "./Components/User/ProductListPage/ProductListPage";

function App() {
  return (
    <>

      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />

      <AdminRoute exact path="/dashboard" component={Admin} />
      <AdminRoute exact path="/dashboard/user" component={User} />
      <AdminRoute exact path="/dashboard/category" component={Category} />
      <AdminRoute exact path="/dashboard/page" component={Page} />
      <AdminRoute exact path="/dashboard/product" component={Product} />
      <AdminRoute exact path="/dashboard/order" component={Order} />
      <UserRoute exact path="/" component={Home} />
      <UserRoute path="/:slug" component={ProductListPage} />
    </>
  );
}

export default App;
