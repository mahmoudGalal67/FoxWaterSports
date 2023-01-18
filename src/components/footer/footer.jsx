import React from 'react'
import "./footer.css"

function footer() {
  return (
    <footer>
      <div className="info">
        <div className="brand">
          <img src={require("../assets/images/logo.webp")} alt="fox sports not loading" />
          <div className="adrress">Dubai Harbor,<br/><br/>Dubai , UAE</div>
        </div>
      <div className="quick-links">
        <div>
          quick links
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Gallary">WaterSports</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Connect us</a></li>
        </ul>
      </div>
      <div className="about">
        <div>About us</div>
        <ul>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/About">About us</a></li>
        </ul>
      </div>
        <div className="map">
          <iframe src="https://maps.google.com/maps?q=Fox%20Watersport,%20Dubai%20Harbour%20-%20Dubai%20-%20United%20Arab%20Emirates&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" title='Foxwatersports' style={{ border: "0" ,width:"100%" , height:"290px"}} allowFullScreen></iframe>
      </div>
      </div>
      <div className="socials">
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100088335401976&_rdc=1&_rdr"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/foxwatersport/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/foxwatersport"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.tiktok.com/@foxwatersport1"><i className="fa-brands fa-tiktok"></i></a>
        </div>
        <div className="hour">
          <img src={require("../assets/images/hour.webp")} alt="fox water sports grand rapids" />
          <div className="working-hours">
            <span>Working hours</span>
            <span>From 9 am to 6 pm</span>
          </div>
        </div>
        <div className="phone">
          <img src={require("../assets/images/Vector (1).webp")} alt="fox sports west channel number" />
          <div className="Phone-details">
            <span>Phone</span>
            <span>+971 54 557 4911</span>
          </div>
        </div>
        <div className="email">
          <i className="fa-regular fa-envelope"></i>
          <div className="email-details">
            <span>Email</span>
            <span>foxwatersport1@gmail.com</span>
          </div>
        </div>
        <div className="payments">
          <img src={require("../assets/images/Payment method icon (2).webp")} alt="in the eye surfboard for sale" />
          <img src={require("../assets/images/Payment method icon.webp")} alt="in the eye surfboard for sale" />
        </div>
      </div>
      <div className="rights">
        Copyright © 2022. Design and developed by <span><a href="https://adsamy.com/">Adsamy Marketing Agency</a></span>
      </div>
      <a href='#' className="back-to-top"><i className="fa-solid fa-arrow-up"></i></a>
    </footer>
  )
}

export default footer









