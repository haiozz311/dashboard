/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseButton = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const handleClick = () => {
    history.push("/")
  }
  // const { enqueueSnackbar } = useSnackbar();

  const handleLogout = () => {
    // console.log("logout");
    localStorage.clear();
    // handleLogoutSnackbar();
    history.push("/login")
  }
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo mr-5" onClick={() => {
          handleClick()
        }}>
          <img src="../images/logo.svg" className="mr-2" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" onClick={() => {
          handleClick()
        }}>
          <img src="../images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="icon-menu" />
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div
                className="input-group-prepend hover-cursor"
                id="navbar-search-icon"
              >
                <span className="input-group-text" id="search">
                  <i className="icon-search" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickButton}>
              <img src="images/faces/face28.jpg" alt="profile" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseButton}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleCloseButton}>My Profile</MenuItem>
              <MenuItem onClick={handleCloseButton}>Change Password</MenuItem>
              <MenuItem onClick={() => {
                handleLogout()
              }}>Logout</MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
    </nav>
  );
}
