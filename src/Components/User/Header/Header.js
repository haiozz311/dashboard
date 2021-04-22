import React from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import './mediaQuery.css'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  )
}
