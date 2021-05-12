import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <NavLink className="nav-item" exact to="/dashboard"

          activeClassName="active">
          <li className="nav-link" >
            <i className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </li>
        </NavLink>
        <NavLink className="nav-item" exact to="/dashboard/user" activeClassName="active">
          <li className="nav-link" >
            <i className="icon-layout menu-icon" />
            <span className="menu-title">User</span>
            <i className="menu-arrow" />
          </li>
        </NavLink>
        <NavLink className="nav-item" exact to="/dashboard/category" activeClassName="active">
          <li className="nav-link" >
            <i className="icon-columns menu-icon" />
            <span className="menu-title">Category</span>
            <i className="menu-arrow" />
          </li>
        </NavLink>
        <NavLink className="nav-item" exact to="/dashboard/product" activeClassName="active">
          <li className="nav-link" >
            <i className="icon-grid-2 menu-icon" />
            <span className="menu-title">Product</span>
            <i className="menu-arrow" />
          </li>
        </NavLink>
        <NavLink className="nav-item" exact to="/dashboard/order" activeClassName="active">
          <li className="nav-link" >
            <i className="icon-bar-graph menu-icon" />
            <span className="menu-title">Order</span>
            <i className="menu-arrow" />
          </li>
        </NavLink>
        <NavLink className="nav-item" exact to="/dashboard/page" activeClassName="active">
          <li className="nav-link" >
            <i className="icon-grid-2 menu-icon" />
            <span className="menu-title">Page</span>
            <i className="menu-arrow" />
          </li>
        </NavLink>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
            <i className="icon-columns menu-icon" />
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
            <i className="icon-bar-graph menu-icon" />
            <span className="menu-title">Charts</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
            <i className="icon-grid-2 menu-icon" />
            <span className="menu-title">Tables</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
            <i className="icon-contract menu-icon" />
            <span className="menu-title">Icons</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
            <i className="icon-head menu-icon" />
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/login.html">
                  Login
            </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/register.html">
                  Register
            </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
            <i className="icon-ban menu-icon" />
            <span className="menu-title">Error pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="error">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-404.html">
                  404
            </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-500.html">
                  500
            </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/documentation/documentation.html">
            <i className="icon-paper menu-icon" />
            <span className="menu-title">Documentation</span>
          </a>
        </li>
      </ul>
    </nav>

  )
}
