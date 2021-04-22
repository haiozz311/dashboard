import React, { useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const infor = true
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <ul className={toggle ? 'navbar toggle' : 'navbar'}>
        {infor ? <>
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/">Blog</a></li>
          <li className="nav-item"><a href="/">Contact</a></li>
          <li className="nav-item"><a href="/">About</a></li>
          <li className="nav-item"><a href="/">Introduce</a></li>
          <li className="nav-icon"><a className="icon" href="/"><GitHubIcon /></a></li>
          <li className="nav-icon"><a className="icon" href="/"><TwitterIcon /></a></li>
          <li className="nav-icon"><a className="icon" href="/"><LinkedInIcon /></a></li>
        </> : <>
          <li><a href="/">Login</a></li>
          <li><a href="/">Register</a></li>
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
