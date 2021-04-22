import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function DefaultTemplate(props) {
  return (
    <div>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}
