import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./nav.css";

function Nav() {
  const menu = useRef()
  const [translate, settranslate] = useState(1)
  const toggle = () => {
    if (translate === 0) {
      settranslate(1)
      menu.current.style.transform="translateX(300px)"
    } else {
      settranslate(0)
      menu.current.style.transform="translateX(0)"
    }
  }
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src={require("../assets/images/logo.webp")} alt="" />
          </a>
        </div>
        <ul className="center menu" ref={menu}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About Us</a>
          </li>
          {/* <li>
            <a href="#Packeges">Booking</a>
          </li> */}
          <li>
            <a href="/Gallary">Gallary</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <img
          className="right"
          src={require("../assets/images/u_flag.webp")}
          alt=""
        />
      </nav>
      {/* Humberger-menu */}
      <input id="menu-toggle" type="checkbox" onClick={toggle} />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      {/* Humberger-menu */}
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100088335401976&_rdc=1&_rdr">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/foxwatersport/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B971545574911&text&type=phone_number&app_absent=0">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://twitter.com/foxwatersport">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </>
  );
}

export default Nav;
