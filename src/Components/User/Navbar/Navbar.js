/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function Navbar() {
  const { UserInfor } = useSelector((state) => state.Auth);
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <ul className={toggle ? 'navbar toggle' : 'navbar'}>
        {UserInfor ? <>
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/">Blog</a></li>
          <li className="nav-item"><a href="/">Contact</a></li>
          <li className="nav-item"><a href="/">About</a></li>
          <li className="nav-item"><a href="/">Introduce</a></li>
          <li className="nav-icon"><a className="icon" href="/"><GitHubIcon /></a></li>
          <li className="nav-icon"><a className="icon" href="/"><TwitterIcon /></a></li>
          <li className="nav-icon"><a className="icon" href="/"><LinkedInIcon /></a></li>
        </> : <>
          <li><NavLink to="/login" >Login</NavLink></li>
          <li><NavLink to="/register" >Register</NavLink></li>
        </>}
        <li className="close" onClick={() => {
          handleToggle()
        }}>X</li>
      </ul>
      <Button
        classes={{
          root: classes.root
        }}
        className="menu" onClick={() => {
          handleToggle()
        }}
      >
        <DehazeIcon />
      </Button>
    </>
  )
}
