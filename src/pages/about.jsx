import React from 'react'

import Nav from "../components/nav/Nav"
import Footer from '../components/footer/footer'
import AbouHeader from '../components/aboutheader/aboutheader'

function about() {
  return (
    <div className='about'>
      <Nav />
      <AbouHeader />
      <Footer/>
    </div>
  )
}

export default about