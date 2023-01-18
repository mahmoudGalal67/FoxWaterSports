import React from 'react'
import "./aboutheader.css"

function aboutheader() {
  return (
  <>
      <div className="about-header">
        <img src={require("../assets/images/Cruising-Thumb 4.webp")} alt="how much water do foxes need" />
      <div className="about-us">
          <h3>ABOUT US</h3>
          <p>We, Foxwatersport, offer all kinds of different water sports in Dubai.
            <br /><br />
            We have the latest equipment for all kinds of water activities and a professional team by your side to keep you safe.
            <br /><br />
            Take a tour of the most attractive locations that give you exceptional and unforgettable rides with your favorite people.
            <br /><br />
            Try Foxwatersport now.
          </p>
      </div>
    </div>
      <div className="about-gallary">
        <div className="title">Our Jetski<div className='section-border'><div></div><div></div><div></div></div></div>
        <img src={require("../assets/images/packageDetails/Jetski Ride - Yamaha FZR Cruiser Supercharged 1800CC.webp")} alt="" />
        <p>Yamaha jetski  1800cc Supercharge</p>
      </div>
      <div className="info">
        <img src={require("../assets/images/WhatsApp-Image-2021-11-22-at-23.59.webp")} alt="fox water sports grand rapids" />
        <div className="details">
          <h3>why you choose us</h3>
          <p>We have a delivery service for water games from GBR to the place of yacht trips. If you want a suitable stay in a distinguished location, the best choice is the marine sites. It is a way of wonderful scenery, wonderful attractiveness, and a wonderful way to take souvenir photos to remember your beautiful moments with your favorite people.</p>
        </div>
      </div>
    </>
  )
}

export default aboutheader