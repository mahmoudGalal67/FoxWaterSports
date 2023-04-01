import React from 'react'
import Nav from "../components/nav/Nav"
import Header from '../components/header/Header'
// import Offers from '../components/offers/offers'
import Packeges from '../components/packeges/packeges'
// import Ourteam from '../components/ourteam/ourteam'
import SocialRating from "../components/socialrating/socialrating"
import Footer from '../components/footer/footer'
import Reviews from "../components/reviews/reviews"


import "./home.css"

function Home() {
  return (
    <div className='home'>
      <Nav />
      <Header />
      {/* <Offers /> */}
      <Packeges />
      {/* <Ourteam /> */}
      <SocialRating />
      <Reviews />
      <section id='test'> 

      </section>
      <Footer/>
    </div>
  )
}

export default Home